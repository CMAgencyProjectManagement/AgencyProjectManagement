using System;
using System.Collections;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using Entity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json.Linq;
using Service;
using Web.Hubs;
using Web.ViewModels;

namespace Web.Controllers
{
    [RoutePrefix("api/project")]
    public class ProjectController : ApiController
    {
        [HttpGet]
        [Route("all")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult GetAllProject()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    var projects = projectService.GetAll().OrderBy(x => x.Status);

                    JArray dataObject = new JArray();
                    foreach (var project in projects)
                    {
                        dataObject.Add(projectService.ParseToJson(project, avatarPath: AgencyConfig.AvatarPath));
                    }

                    return Ok(ResponseHelper.GetResponse(dataObject));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("{id:int}/taskarchive")]
        [System.Web.Http.Authorize(Roles = "Admin,Manager")]
        public IHttpActionResult GetProjectById(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    TaskService taskService = new TaskService(db);
                    TeamService teamService = new TeamService(db);
                    int userId = Int32.Parse(User.Identity.GetUserId());
                    IQueryable<int> teamIds = db.TeamProjects.Where(x => x.ProjectID == id).Select(x => x.TeamID);
                    int tc = teamIds.Count();
                    if (db.Users.Find(userId).IsAdmin || teamService.IsManagerOfTeam(userId, teamIds))
                    {
                        var tasks = projectService.GetTasksOfProject(id);
                        var ArchiveTasks = tasks.Where(x => x.IsArchived == true);
                        var UnArchiveTasks = tasks.Where(x => x.IsArchived == false);
                        JArray dataObject1 = new JArray();
                        foreach (var task in ArchiveTasks)
                        {
                            dataObject1.Add(taskService.ParseToJson(task));
                        }

                        JArray dataObject2 = new JArray();
                        foreach (var task in UnArchiveTasks)
                        {
                            dataObject2.Add(taskService.ParseToJson(task));
                        }

                        JObject mainObject = new JObject
                        {
                            ["archiveTasks"] = dataObject1,
                            ["unArchiveTasks"] = dataObject2
                        };
                        return Ok(ResponseHelper.GetResponse(mainObject));
                    }

                    return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("recentchanged")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult GetAdminDashboard()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    int userId = Int32.Parse(User.Identity.GetUserId());
                    ProjectService projectService = new ProjectService(db);
                    JArray dataObject = new JArray();
                    var projects = projectService.GetProjectChangeThisWeek()
                        .Where(project => project.Status.HasValue &&
                                          (project.Status.Value == (int) ProjectStatus.NotStarted ||
                                           project.Status.Value == (int) ProjectStatus.Executing))
                        .OrderByDescending(x => x.ChangedTime);


                    foreach (var project in projects)
                    {
                        dataObject.Add(projectService.ParseToJson(project, false, AgencyConfig.AvatarPath));
                    }


                    return Ok(ResponseHelper.GetResponse(dataObject));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("{projecId:int}/members/assignable")]
        [System.Web.Http.Authorize(Roles = "Admin, Manager")]
        public IHttpActionResult GetAssignableMember(int projecId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TeamService teamService = new TeamService(db);
                    UserService userService = new UserService(db);
                    ProjectService projectService = new ProjectService(db);
                    IEnumerable<Team> teamsOfProject = teamService.GetTeamsOfProject(projecId);

                    List<User> userOfAllTeam = new List<User>();
                    foreach (Team team in teamsOfProject)
                    {
                        IEnumerable<User> users = userService.GetUsersOfTeam(team.ID);
                        userOfAllTeam.AddRange(users);
                    }

                    IEnumerable<User> projectAssignees = userService.GetUsersOfProject(projecId);
                    IEnumerable<User> assignableUser = userOfAllTeam.Except(projectAssignees);

                    IEnumerable<JObject> usersJson = assignableUser.Select(user => userService.ParseToJson(user));

                    return Ok(ResponseHelper.GetResponse(new JArray(usersJson)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpPut]
        [Route("setteams")]
        [System.Web.Http.Authorize]
        public IHttpActionResult SetProjectToTeams(SetProjectToTeamsViewModel projectToTeamsViewModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    UserService userService = new UserService(db);
                    NotificationService notificationService = new NotificationService(db);

                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);

                    Project project = projectService.SetProjectToTeams(
                        projectToTeamsViewModel.ProjectID,
                        projectToTeamsViewModel.TeamIDs,
                        currentUser.ID);

                    NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                    List<User> notifiedUsersList = new List<User>();
                    foreach (int teamId in projectToTeamsViewModel.TeamIDs)
                    {
                        NotificationSentence sentence = builder.SetDepartmentToProjectSentence(
                            currentUser.ID,
                            teamId,
                            project.ID);
                        IEnumerable<User> notifiedUsers =
                            notificationService.NotifyToUsersOfDepartment(teamId, sentence);
                        notifiedUsersList.AddRange(notifiedUsers);
                    }

                    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                    if (context != null)
                    {
                        context.Clients.All.updateNotification(new JArray(notifiedUsersList.Select(user => user.ID)));
                    }


                    return Ok(ResponseHelper.GetResponse(projectService.ParseToJson(project, true,
                        AgencyConfig.AvatarPath)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        [HttpGet]
        [Route("")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetMyProject()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);

                    string userId = User.Identity.GetUserId();
                    IEnumerable<Project> projects = projectService.GetProjectOfUser(Int32.Parse(userId));
                    JArray dataObject = new JArray();

                    foreach (var project in projects)
                    {
                        dataObject.Add(projectService.ParseToJson(project));
                    }

                    return Ok(ResponseHelper.GetResponse(dataObject));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("dd/{id:int}")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetMyProjectinTeam(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    IEnumerable<Project> projects = projectService.GetProjectOfTeam(id);
                    JArray dataObject = new JArray();

                    foreach (var project in projects)
                    {
                        dataObject.Add(projectService.ParseToJson(project, isDetailed: false));
                    }

                    return Ok(ResponseHelper.GetResponse(dataObject));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("{id:int}/list")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetListOfProject(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ListService listService = new ListService(db);
                    IEnumerable<List> lists = listService.GetListOfProject(id);
                    IEnumerable<JObject> listsJson = lists.Select(list => listService.ParseToJson(list));
                    return Ok(ResponseHelper.GetResponse(new JArray(listsJson)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpPost]
        [Route("")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult CreateProject(CreateProjectModel createProjectModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ProjectService projectService = new ProjectService(db);
                        Boolean flag = true;
                        if (createProjectModel.Name != null &&
                            projectService.CheckDuplicatedNameOfProject(createProjectModel.Name))
                        {
                            ModelState.AddModelError("Name", "Project name is taken");
                            flag = false;
                        }


                        if (createProjectModel.StartDate.HasValue && createProjectModel.Deadline.HasValue)
                        {
                            if (createProjectModel.StartDate > createProjectModel.Deadline)
                            {
                                ModelState.AddModelError("StartDate", "StartDate must be smaller than the deadline");
                                flag = false;
                            }

                            if (createProjectModel.Deadline < createProjectModel.StartDate)
                            {
                                ModelState.AddModelError("Deadline", "Deadline must be greater than the start date");
                                flag = false;
                            }
                        }


                        if (flag == false)
                        {
                            return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                        }

                        UserService userService = new UserService(db);
                        string loginedUserId = User.Identity.GetUserId();
                        User creator = userService.GetUser(loginedUserId);

                        Project newProject = projectService.CreateProject(
                            createProjectModel.Name,
                            createProjectModel.Description,
                            createProjectModel.Deadline,
                            createProjectModel.StartDate,
                            creator
                        );

                        JObject dataObject = projectService.ParseToJson(newProject);
                        return Ok(ResponseHelper.GetResponse(dataObject));
                    }
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        [HttpPut]
        [Route("")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult UpdateProject(UpdateProjectViewModel updateProjectViewModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    DateTime? deadline = null;
                    DateTime? startdate = null;

                    DateTime tmp;
                    if (DateTime.TryParse(updateProjectViewModel.deadline, out tmp))
                    {
                        deadline = tmp;
                    }

                    if (DateTime.TryParse(updateProjectViewModel.startdate, out tmp))
                    {
                        startdate = tmp;
                    }

                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ProjectService projectService = new ProjectService(db);
                        UserService userService = new UserService(db);
                        TeamService teamService = new TeamService(db);
                        NotificationService notificationService = new NotificationService(db);

                        string userIdString = User.Identity.GetUserId();
                        User currentUser = userService.GetUser(userIdString);

                        Boolean flag = true;

                        if (updateProjectViewModel.startdate != null && updateProjectViewModel.deadline != null)
                        {
                            if (DateTime.Parse(updateProjectViewModel.startdate) >
                                DateTime.Parse(updateProjectViewModel.deadline))
                            {
                                ModelState.AddModelError("StartDate", "StartDate must be smaller than the deadline");
                                flag = false;
                            }


                            if (DateTime.Parse(updateProjectViewModel.deadline) <
                                DateTime.Parse(updateProjectViewModel.startdate))
                            {
                                ModelState.AddModelError("Deadline", "Deadline must be greater than the StartDate");
                                flag = false;
                            }
                        }


                        if (flag == false)
                            return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));

                        var updatedProject = projectService.UpdateProject(
                            updateProjectViewModel.id,
                            updateProjectViewModel.name,
                            updateProjectViewModel.description,
                            deadline,
                            startdate
                        );


                        NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                        NotificationSentence sentence = builder.EditProjectSentence(
                            currentUser.ID,
                            updateProjectViewModel.id);
                        IEnumerable<User> notifiedUsers =
                            notificationService.NotifyToUsersOfProject(updateProjectViewModel.id, sentence);

                        IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                        if (context != null)
                        {
                            context.Clients.All.updateNotification(new JArray(notifiedUsers.Select(user => user.ID)));
                        }

                        return Ok(ResponseHelper.GetResponse(projectService.ParseToJson(updatedProject)));
                    }
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        [HttpPut]
        [Route("close")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult CloseProject(DeleteProjectViewModel deleteProjectViewModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    UserService userService = new UserService(db);
                    NotificationService notificationService = new NotificationService(db);
                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);

                    projectService.CloseProject(deleteProjectViewModel.id, currentUser.ID);

                    NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                    NotificationSentence sentence = builder.CloseProjectSentence(
                        currentUser.ID,
                        deleteProjectViewModel.id);
                    IEnumerable<User> notifiedUsers =
                        notificationService.NotifyToUsersOfProject(deleteProjectViewModel.id, sentence);

                    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                    if (context != null)
                    {
                        context.Clients.All.updateNotification(new JArray(notifiedUsers.Select(user => user.ID)));
                    }

                    return Ok(ResponseHelper.GetResponse());
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("{projectId:int}")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetProjectByID(int projectId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    UserService userService = new UserService(db);
                    Project foundProject = projectService.GetProjectByID(projectId);
                    string userIdString = User.Identity.GetUserId();
                    User user = userService.GetUser(userIdString);

                    if (!user.IsAdmin)
                    {
                        IEnumerable<Project> projectsOfUser = projectService.GetProjectOfUser(user.ID).ToList();
                        if (!projectsOfUser.Any(project => project.ID.Equals(projectId)))
                        {
                            return Content(HttpStatusCode.Unauthorized,
                                ResponseHelper.GetExceptionResponse(
                                    $"You need to be a member of project {foundProject.Name} to view"));
                        }
                    }


                    if (foundProject != null)
                    {
                        return Ok(ResponseHelper.GetResponse(
                            projectService.ParseToJson(
                                foundProject,
                                avatarPath: AgencyConfig.AvatarPath,
                                isDetailed: true)
                        ));
                    }
                    else
                    {
                        return Content(HttpStatusCode.BadRequest, $"Can't find project with ID {projectId}");
                    }
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        [HttpGet]
        [Route("{id:int}/report")]
        [System.Web.Http.Authorize(Roles = "Admin, Manager")]
        public IHttpActionResult GetProjectTotalReport(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    var project = projectService.GetProjectByID(id);
                    if (project != null)
                    {
                        return Ok(ResponseHelper.GetResponse(
                            projectService.ParseToJsonTotalReport(project, isIncludeTask: true)
                        ));
                    }
                    else
                    {
                        return Content(HttpStatusCode.BadRequest, $"Can't find project with ID {id}");
                    }
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        public IHttpActionResult GetReport(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    var project = projectService.GetProjectByID(id);
                    if (project != null)
                    {
                        return Ok(ResponseHelper.GetResponse(
                            projectService.ParseToJsonProjectReport(project, isIncludeTask: true)
                        ));
                    }
                    else
                    {
                        return Content(HttpStatusCode.BadRequest, $"Can't find project with ID {id}");
                    }
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpPut]
        [Route("assign")]
        [System.Web.Http.Authorize(Roles = "Admin,Manager")]
        public IHttpActionResult AssignProject(AssignProjectModel assignProjectModel)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }

                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    UserService userService = new UserService(db);
                    NotificationService notificationService = new NotificationService(db);
                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);
                    Project project = projectService.AssignUsersToProject(
                        assignProjectModel.UserIds,
                        assignProjectModel.ProjectId,
                        currentUser.ID
                    );

                    NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                    List<User> notifiedUsersList = new List<User>();
                    foreach (int userId in assignProjectModel.UserIds)
                    {
                        NotificationSentence sentence = builder.AssignMemberToProjectSentence(
                            currentUser.ID,
                            userId,
                            project.ID);
                        IEnumerable<User> notifiedUsers =
                            notificationService.NotifyToUsersOfProject(assignProjectModel.ProjectId, sentence);
                        notifiedUsersList.AddRange(notifiedUsers);
                    }

                    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                    if (context != null)
                    {
                        context.Clients.All.updateNotification(new JArray(notifiedUsersList.Select(user => user.ID)));
                    }

                    return Ok(ResponseHelper.GetResponse(projectService.ParseToJson(project,
                        true, AgencyConfig.AvatarPath)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpPut]
        [Route("unassign")]
        [System.Web.Http.Authorize(Roles = "Admin,Manager")]
        public IHttpActionResult UnAssignProject(AssignProjectModel assignProjectModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ProjectService projectService = new ProjectService(db);
                        UserService userService = new UserService(db);
                        NotificationService notificationService = new NotificationService(db);

                        string userIdString = User.Identity.GetUserId();
                        User currentUser = userService.GetUser(userIdString);

                        foreach (var userId in assignProjectModel.UserIds)
                        {
                            UserProject NewUserProject = projectService.UnAssignProject(
                                userId,
                                assignProjectModel.ProjectId
                            );
                        }

                        Project project = projectService.GetProjectByID(assignProjectModel.ProjectId);


                        NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                        List<User> notifiedUsersList = new List<User>();
                        List<User> removedUserList = userService.GetUsers(assignProjectModel.UserIds).ToList();
                        foreach (int userId in assignProjectModel.UserIds)
                        {
                            NotificationSentence sentence = builder.UnAssignMemberFromProjectSentence(
                                currentUser.ID,
                                userId,
                                project.ID);
                            IEnumerable<User> notifiedUsers =
                                notificationService.NotifyToUsersOfProject(
                                    assignProjectModel.ProjectId,
                                    sentence,
                                    removedUserList);
                            notifiedUsersList.AddRange(notifiedUsers);
                        }

                        IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                        if (context != null)
                        {
                            context.Clients.All.updateNotification(
                                new JArray(notifiedUsersList.Select(user => user.ID)));
                        }

                        return Ok(ResponseHelper.GetResponse(projectService.ParseToJson(project, true,
                            AgencyConfig.AvatarPath)));
                    }
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
    }
}