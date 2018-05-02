using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Entity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json.Linq;
using Service;
using Web.Hubs;
using Web.ViewModels;

namespace Web.Controllers
{
    [RoutePrefix("api/team")]
    public class TeamController : ApiController
    {
        [HttpGet]
        [Route("all")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult GetAllTeam()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TeamService teamService = new TeamService(db);
                    var teams = teamService.GetAll();
                    JArray dataObject = new JArray();
                    foreach (var team in teams)
                    {
                        dataObject.Add(teamService.ParseToJsonVer2(team));
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
        [Route("freestaff")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult GetFreeUser()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TeamService teamService = new TeamService(db);
                    UserService userService = new UserService(db);
                    var freeUsers = teamService.GetFreeUsers();
                    JArray dataObject = new JArray();
                    foreach (var user in freeUsers)
                    {
                        string avatarPath = AgencyConfig.AvatarPath;

                        dataObject.Add(userService.ParseToJson(user, avatarPath));
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
        [Route("{id:int}")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetTeamDetail(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TeamService teamService = new TeamService(db);
                    UserService userService = new UserService(db);
                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);


                    var team = teamService.GetTeamById(id);
                    if (team != null)
                    {
                        if (!currentUser.IsAdmin &&
                            !currentUser.IsManager &&
                            currentUser.TeamID != id)
                        {
                            return Content(HttpStatusCode.Unauthorized,
                                $"You don't have permission to view {team.Name}'s detail");
                        }

                        return Ok(ResponseHelper.GetResponse(
                            teamService.ParseToJsonVer2(
                                team,
                                includeUsers: true,
                                avatarPath: AgencyConfig.AvatarPath,
                                isDetailedUsers: true,
                                isDetailedProjects: true)
                        ));
                    }
                    else
                    {
                        return Content(HttpStatusCode.BadRequest, $"Can't find team with ID {id}");
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
        [Route("{id:int}/tasks/late")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetLateTaskOfDepartment(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TeamService teamService = new TeamService(db);
                    TaskService taskService = new TaskService(db);
                    var team = teamService.GetTeamById(id);
                    if (team == null)
                    {
                        return Content(HttpStatusCode.BadRequest, $"Can't find team with ID {id}");
                    }

                    IEnumerable<Task> lateTasks = taskService.GetLateTaskOfDepartment(team.ID);
                    IEnumerable<JObject> lateTasksJson = lateTasks.Select(task => taskService.ParseToJson(task));

                    return Ok(ResponseHelper.GetResponse(new JArray(lateTasksJson)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("{teamId:int}/tasks/needreview")]
        [System.Web.Http.Authorize(Roles = "Manager")]
        public IHttpActionResult GetNeedreviewTasks(int teamId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    IEnumerable<Task> tasks = taskService.GetTaskOfDepartment(teamId)
                        .Where(task => task.Status == (int) TaskStatus.NeedReview);

                    tasks = taskService.SortTaskByDeadline(tasks);

                    JArray dataObject = new JArray();
                    foreach (var task in tasks)
                    {
                        dataObject.Add(taskService.ParseToJson(task));
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
        [Route("assign")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult AssignTeam(AssignTeamModel assignTeamModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        TeamService teamService = new TeamService(db);
                        UserService userService = new UserService(db);
                        NotificationService notificationService = new NotificationService(db);

                        string userIdString = User.Identity.GetUserId();
                        User currentUser = userService.GetUser(userIdString);

                        List<User> assignees = new List<User>();
                        foreach (int userId in assignTeamModel.UserIds)
                        {
                            User user = teamService.AssignTeam(
                                userId,
                                assignTeamModel.TeamId
                            );
                            assignees.Add(user);
                        }

                        NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                        List<User> notifiedUsersList = new List<User>();
                        foreach (User user in assignees)
                        {
                            NotificationSentence sentence = builder.AssignMemberToDepartmentSentence(
                                currentUser.ID,
                                user.ID,
                                assignTeamModel.TeamId);

                            IEnumerable<User> notifiedUsers =
                                notificationService.NotifyToUsersOfDepartment(assignTeamModel.TeamId, sentence);

                            notifiedUsersList.AddRange(notifiedUsers);
                        }

                        IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                        if (context != null)
                        {
                            context.Clients.All.updateNotification(
                                new JArray(notifiedUsersList.Select(user => user.ID)));
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

        [HttpPut]
        [Route("unassign")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult UnAssignTeam(UnAssignTeamModel unAssignTeamModel)
        {
            try
            {
                if (!ModelState.IsValid)
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));


                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TeamService teamService = new TeamService(db);
                    UserService userService = new UserService(db);
                    NotificationService notificationService = new NotificationService(db);

                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);

                    teamService.UnAssignTeam(
                        unAssignTeamModel.UserIds
                    );

                    NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                    List<User> notifiedUsersList = new List<User>();
                    List<User> removedUserList = userService.GetUsers(unAssignTeamModel.UserIds).ToList();
                    foreach (int userId in unAssignTeamModel.UserIds)
                    {
                        NotificationSentence sentence = builder.UnAssignMemberFromDepartmentSentence(
                            currentUser.ID,
                            userId,
                            unAssignTeamModel.TeamId);

                        IEnumerable<User> notifiedUsers =
                            notificationService.NotifyToUsersOfDepartment(
                                unAssignTeamModel.TeamId, 
                                sentence,
                                additionalReceivers: removedUserList);

                        notifiedUsersList.AddRange(notifiedUsers);
                    }

                    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                    if (context != null)
                    {
                        context.Clients.All.updateNotification(new JArray(notifiedUsersList.Select(user => user.ID)));
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

        [HttpPut]
        [Route("{teamId:int}/assign/manager/{managerId:int}")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult AssignManager(int teamId, int managerId)
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
                    TeamService teamService = new TeamService(db);
                    UserService userService = new UserService(db);
                    NotificationService notificationService = new NotificationService(db);

                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);

                    teamService.SetManager(
                        teamId,
                        managerId
                    );

                    NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);

                    NotificationSentence sentence = builder.SetManagerOfDepartmentSentence(
                        currentUser.ID,
                        managerId,
                        teamId);

                    IEnumerable<User> notifiedUsers =
                        notificationService.NotifyToUsersOfDepartment(teamId, sentence);

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
    }
}