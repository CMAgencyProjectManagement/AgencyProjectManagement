using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using Entity;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json.Linq;
using Service;
using Web.ViewModels;

namespace Web.Controllers
{
    [RoutePrefix("api/project")]
    public class ProjectController : ApiController
    {
        [HttpGet]
        [Route("all")]
        [Authorize(Roles = "Admin")]
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
        [Route("recentchanged")]
        [Authorize(Roles = "Admin,Manager")]
        public IHttpActionResult GetAdminDashboard()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    int userId = Int32.Parse(User.Identity.GetUserId());
                    ProjectService projectService = new ProjectService(db);
                    TaskService taskService = new TaskService(db);
                    JArray dataObject = new JArray();
                    if (db.Users.Find(userId).IsAdmin)
                    {
                        var projects = projectService.GetProjectChangeThisWeek().OrderByDescending(x => x.ChangedTime);

                        
                        foreach (var project in projects)
                        {
                            dataObject.Add(projectService.ParseToJson(project, false, AgencyConfig.AvatarPath));
                        }
                    }
                    if (db.Users.Find(userId).IsManager)
                    {
                        TeamService teamService = new TeamService(db);
                        var teamId = db.Users.Find(userId).TeamID;
                        var tasksInTeam = teamService.GetTasksOfTeam((int)teamId);
                        var tasks = taskService.GetTaskChangeThisWeek(tasksInTeam).OrderByDescending(X=>X.ChangedTime);
                        foreach (var task in tasks)
                        {
                            dataObject.Add(taskService.ParseToJson(task));
                        }
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

        [HttpPut]
        [Route("setteams")]
        [Authorize]
        public IHttpActionResult SetProjectToTeams(SetProjectToTeamsViewModel projectToTeamsViewModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    UserService userService = new UserService(db);
                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);

                    Project project = projectService.SetProjectToTeams(
                        projectToTeamsViewModel.ProjectID,
                        projectToTeamsViewModel.TeamIDs,
                        currentUser.ID);

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
        [Authorize]
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
        [Authorize]
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
        [Authorize]
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
        [Authorize(Roles = "Admin")]
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
                        if (projectService.CheckDuplicatedNameOfProject(createProjectModel.Name))
                        {
                            ModelState.AddModelError("Name", "Project name is taken");
                            flag = false;
                            //return Content(HttpStatusCode.BadRequest,ResponseHelper.GetExceptionResponse(ModelState));
                        }


                        if (createProjectModel.StartDate != null && createProjectModel.Deadline != null)
                        {
                            if (DateTime.Parse(createProjectModel.StartDate) >
                                DateTime.Parse(createProjectModel.Deadline))
                            {
                                ModelState.AddModelError("StartDate", "StartDate must be smaller than the deadline");
                                flag = false;
                                //return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                            }


                            if (DateTime.Parse(createProjectModel.Deadline) <
                                DateTime.Parse(createProjectModel.StartDate))
                            {
                                ModelState.AddModelError("Deadline", "Deadline must be greater than the StartDate");
                                flag = false;
                                //return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                            }
                        }


                        if (flag == false)
                            return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                        UserService userService = new UserService(db);
                        string loginedUserId = User.Identity.GetUserId();
                        User creator = userService.GetUser(loginedUserId);

                        DateTime? startTime = null;
                        if (createProjectModel.StartDate != null)
                        {
                            DateTime dt;
                            if (DateTime.TryParse(createProjectModel.StartDate, out dt))
                            {
                                startTime = dt;
                            }
                        }

                        DateTime? deadline = null;
                        if (createProjectModel.Deadline != null)
                        {
                            DateTime dt;
                            if (DateTime.TryParse(createProjectModel.Deadline, out dt))
                            {
                                deadline = dt;
                            }
                        }

                        Project newProject = projectService.CreateProject(
                            createProjectModel.Name,
                            createProjectModel.Description,
                            deadline,
                            startTime,
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
        [Authorize(Roles = "Admin")]
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
                        Boolean flag = true;
                        //if (projectService.CheckDuplicatedNameOfProject(updateProjectViewModel.name))
                        //{
                        //    ModelState.AddModelError("Name", "Project name is taken");
                        //    flag = false;
                        //    //return Content(HttpStatusCode.BadRequest,ResponseHelper.GetExceptionResponse(ModelState));
                        //}


                        if (updateProjectViewModel.startdate != null && updateProjectViewModel.deadline != null)
                        {
                            if (DateTime.Parse(updateProjectViewModel.startdate) >
                                DateTime.Parse(updateProjectViewModel.deadline))
                            {
                                ModelState.AddModelError("StartDate", "StartDate must be smaller than the deadline");
                                flag = false;
                                //return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                            }


                            if (DateTime.Parse(updateProjectViewModel.deadline) <
                                DateTime.Parse(updateProjectViewModel.startdate))
                            {
                                ModelState.AddModelError("Deadline", "Deadline must be greater than the StartDate");
                                flag = false;
                                //return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                            }
                        }
                        //if (updateProjectViewModel.startdate != null)
                        //{
                        //    if (DateTime.Parse(updateProjectViewModel.startdate) > DateTime.Now)
                        //    {
                        //        ModelState.AddModelError("StartDate", "StartDate must be smaller than the current time ");
                        //        flag = false;
                        //        //return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                        //    }
                        //}


                        if (flag == false)
                            return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                        var updatedProject = projectService.UpdateProject(
                            updateProjectViewModel.id,
                            updateProjectViewModel.name,
                            updateProjectViewModel.description,
                            deadline,
                            startdate
                        );
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
        [Authorize(Roles = "Admin")]
        public IHttpActionResult CloseProject(DeleteProjectViewModel deleteProjectViewModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    projectService.CloseProject(deleteProjectViewModel.id);
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
        [Authorize]
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
                                ResponseHelper.GetExceptionResponse($"You need to be a member of project {foundProject.Name} to view"));
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
        [Authorize(Roles = "Admin")]
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

        [HttpGet]
        [Route("{id:int}/reportapi")]
        [Authorize(Roles = "Admin")]
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
        [Authorize(Roles = "Admin,Manager")]
        public IHttpActionResult AssignProject(AssignProjectModel assignProjectModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ProjectService projectService = new ProjectService(db);
                        foreach (var userId in assignProjectModel.UserIds)
                        {
                            UserProject newUserProject = projectService.AssignProject(
                                userId,
                                assignProjectModel.ProjectId
                            );
                            return Ok(ResponseHelper.GetResponse(projectService.ParseToJson(newUserProject.Project)));
                        }

                        return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(""));
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
        [Route("Unassign")]
        [Authorize(Roles = "Admin,Manager")]
        public IHttpActionResult UnAssignProject(AssignProjectModel assignProjectModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ProjectService projectService = new ProjectService(db);
                        foreach (var userId in assignProjectModel.UserIds)
                        {
                            UserProject NewUserProject = projectService.UnAssignProject(
                                userId,
                                assignProjectModel.ProjectId
                            );
                            //return Ok(ResponseHelper.GetResponse(projectService.ParseToJsonUserProject(NewUserProject)));
                        }

                        return Ok(ResponseHelper.GetResponse());
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