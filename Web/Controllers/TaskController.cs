using System.Web.Http;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.WebSockets;
using Entity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json.Linq;
using Service;
using Web.Hubs;
using Web.ViewModels;
using Task = Entity.Task;

namespace Web.Controllers
{
    [RoutePrefix("api/task")]
    public class TaskController : ApiController
    {
        [HttpGet]
        [Route("{id:int}")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetTask(int id)
        {
            try
            {
                int currentUserId = Int32.Parse(User.Identity.GetUserId());

                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    ProjectService projectService = new ProjectService(db);

                    Task task = taskService.GetTask(id);
                    Project project = projectService.GetProjectOfTask(task.ID);
                    if (db.Users.Find(currentUserId).IsAdmin)
                    {
                        return Ok(ResponseHelper.GetResponse(
                            taskService.ParseToJson(task, true, AgencyConfig.AvatarPath, AgencyConfig.AttachmentPath)
                        ));
                    }
                    else if (!taskService.IsAssigneeOfProject(currentUserId, id))
                    {
                        return Content(
                            HttpStatusCode.UnsupportedMediaType,
                            ResponseHelper.GetExceptionResponse(
                                $"You have to be in project {project.Name} to view this task")
                        );
                    }


                    return Ok(ResponseHelper.GetResponse(
                        taskService.ParseToJson(task, true, AgencyConfig.AvatarPath, AgencyConfig.AttachmentPath)
                    ));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("late")]
        [System.Web.Http.Authorize(Roles = "Manager,Staff")]
        public IHttpActionResult GetStaffDashboard()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    TeamService teamService = new TeamService(db);
                    int userId = Int32.Parse(User.Identity.GetUserId());
                    JArray dataObject = new JArray();
                    if (!db.Users.Find(userId).IsManager)
                    {
                        var tasksLate = taskService.GetLateTaskOfStaff(userId);
                        foreach (var task in tasksLate)
                        {
                            dataObject.Add(taskService.ParseToJson(task));
                        }
                    }
                    else
                    {
                        var teamId = db.Users.Find(userId).TeamID;
                        var tasksInTeam = teamService.GetTasksOfTeam((int) teamId);
                        var tasksLate = taskService.GetLateActiveTasksOfTaskList(tasksInTeam);
                        foreach (var task in tasksLate)
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


        [HttpGet]
        [Route("user/{id:int}")]
        [System.Web.Http.Authorize(Roles = "Admin,Manager")]
        public IHttpActionResult GetTasksOfUser(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    int currentUserId = Int32.Parse(User.Identity.GetUserId());

                    IEnumerable<Task> tasks = taskService.GetActiveTasksOfUser(id);
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

        [HttpGet]
        [Route("priority")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetPriority()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    IEnumerable<KeyValuePair<string, string>> priorities = taskService.GetPriorities();
                    IEnumerable<JObject> prioritiesJson = priorities.Select(pair => new JObject
                    {
                        ["key"] = pair.Key,
                        ["value"] = pair.Value,
                    });
                    return Ok(ResponseHelper.GetResponse(new JArray(prioritiesJson)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("status")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetStatus()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    IEnumerable<KeyValuePair<string, string>> statuses = taskService.GetStatuses();
                    IEnumerable<JObject> statusesJson = statuses.Select(pair => new JObject
                    {
                        ["key"] = pair.Key,
                        ["value"] = pair.Value,
                    });
                    return Ok(ResponseHelper.GetResponse(new JArray(statusesJson)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("myTask")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetMyTask()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    string userIdString = User.Identity.GetUserId();
                    TaskService taskService = new TaskService(db);
                    IEnumerable<Task> tasks = taskService.GetActiveTasksOfUser(Int32.Parse(userIdString));
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
        [Route("{taskId:int}/finishTask")]
        [System.Web.Http.Authorize(Roles = "Staff")]
        public IHttpActionResult TaskDone(int taskId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);

                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    if (!taskService.IsAssigneeOfTask(currentUserId, taskId))
                    {
                        return Content(HttpStatusCode.Unauthorized, ResponseHelper.GetExceptionResponse(
                            $"the person who do this action must be assigned member of task with ID {taskId}"));
                    }
                }

                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    int currentUserId = Int32.Parse(User.Identity.GetUserId());

                    TaskService taskService = new TaskService(db);
                    ProjectService projectService = new ProjectService(db);
                    NotificationService notificationService = new NotificationService(db);

                    Task task = taskService.SetStatus(taskId, currentUserId, TaskStatus.NeedReview);
                    IEnumerable<User> managers = taskService.GetManagersOfTask(task.ID);
                    Project project = projectService.GetProjectOfTask(task.ID);

                    // Notification
                    List<int> newNotificationUserIds = new List<int>();
                    NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                    foreach (User manager in managers)
                    {
                        NotificationSentence sentence = builder.NeedReviewSentence(
                            currentUserId,
                            manager.ID,
                            task.ID,
                            project.ID
                        );
                        IEnumerable<User> notificationUser = notificationService.NotifyToUsersOfTask(task.ID, sentence);
                        newNotificationUserIds.AddRange(notificationUser.Select(user => user.ID));
                    }

                    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                    if (context != null)
                    {
                        context.Clients.All.updateNotification(new JArray(newNotificationUserIds));
                    }

                    return Ok(ResponseHelper.GetResponse(
                        taskService.ParseToJson(task, true, AgencyConfig.AvatarPath, AgencyConfig.AttachmentPath)
                    ));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpPut]
        [Route("setstatus")]
        [System.Web.Http.Authorize(Roles = "Manager")]
        public IHttpActionResult SetStatus(SetStatusViewModel setStatusViewModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    UserService userService = new UserService(db);
                    ProjectService projectService = new ProjectService(db);
                    NotificationService notificationService = new NotificationService(db);

                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    User currentUser = userService.GetUser(currentUserId);

                    if (!ModelState.IsValid)
                    {
                        return Content(HttpStatusCode.BadRequest,
                            ResponseHelper.GetExceptionResponse(ModelState));
                    }

                    if (!taskService.IsManagerOfTask(currentUserId, setStatusViewModel.TaskId.Value))
                    {
                        return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(
                            "User have to be manager of this task to edit it's status"));
                    }

                    Task task = taskService.SetStatus(
                        setStatusViewModel.TaskId.Value,
                        currentUserId,
                        (TaskStatus) setStatusViewModel.TaskStatus);
                    task.ChangedBy = currentUserId;
                    task.ChangedTime = DateTime.Now;

                    Project currentProject = projectService.GetProjectOfTask(task.ID);
                    //Notification
                    NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                    NotificationSentence sentence = builder.SetStatusSentence(
                        currentUserId,
                        (TaskStatus) setStatusViewModel.TaskStatus,
                        setStatusViewModel.TaskId.Value,
                        currentProject.ID);

                    IEnumerable<int> newNotificationUserIds = notificationService
                        .NotifyToUsersOfTask(task.ID, sentence)
                        .Select(affectedUser => affectedUser.ID);

                    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                    if (context != null)
                    {
                        context.Clients.All.updateNotification(new JArray(newNotificationUserIds));
                    }


                    return Ok(ResponseHelper.GetResponse(
                        taskService.ParseToJson(task, true, AgencyConfig.AvatarPath,
                            AgencyConfig.AttachmentPath)
                    ));
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
        [System.Web.Http.Authorize(Roles = "Manager")]
        public IHttpActionResult CreateTask(CreateTaskModel createTaskModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    ProjectService projectService = new ProjectService(db);
                    DependencyService dependencyService = new DependencyService(db);

                    bool flag = true;
                    int DurationLength = 15;
                    if (createTaskModel.Name != null && taskService.CheckDuplicatedTasknameAllowDublicateProject(
                            createTaskModel.Name,
                            createTaskModel.ListID.Value))
                    {
                        ModelState.AddModelError("Name", "Task name is taken");
                        flag = false;
                    }

                    if (taskService.CheckForListId(createTaskModel.ListID.Value))
                    {
                        ModelState.AddModelError("ListID", "The System don't have this list");
                        flag = false;
                    }

                    if (createTaskModel.Priority < 0 || createTaskModel.Priority > 3)
                    {
                        ModelState.AddModelError("Priority", "Invalid Priority ");
                        flag = false;
                    }

                    //validate the deadline and stardate of task and project
                    int listId = (int) createTaskModel.ListID;
                    Project project = projectService.GetProjectOfList(listId);
                    DateTime projectStartDate = (DateTime) project.StartDate;
                    DateTime projectDeadline = (DateTime) project.Deadline;
                    DateTime taskDeadline = createTaskModel.StartDate.AddDays((int) createTaskModel.Duration);
                    if (createTaskModel.StartDate.Date < projectStartDate.Date ||
                        createTaskModel.StartDate.Date > projectDeadline.Date)
                    {
                        ModelState.AddModelError("StartDate",
                            $"Start date of Task must be between start date and deadline of project {project.Name}");
                        flag = false;
                    }

                    if (taskDeadline.Date > projectDeadline.Date)
                    {
                        ModelState.AddModelError("Duration",
                            $"You just set the duration out of deadline of project {project.Name}");
                        flag = false;
                    }

                    //end validate
                    if (createTaskModel.Duration < 1 || createTaskModel.Duration > DurationLength)
                    {
                        ModelState.AddModelError("Duration",
                            $"Duration must be greater than 1 and smaller than {DurationLength}");
                        flag = false;
                    }

                    if (createTaskModel.Effort < 1 || createTaskModel.Effort > (createTaskModel.Duration * 24))
                    {
                        ModelState.AddModelError("Effort",
                            "Effort(hours) must be smaller than the Duration(days)");
                        flag = false;
                    }

                    if (createTaskModel.Predecessors != null)
                    {
                        foreach (int predecessorTaskId in createTaskModel.Predecessors)
                        {
                            var predecessorTask = taskService.GetTask(predecessorTaskId);
                            if (!dependencyService.IsPredecessorValid(predecessorTask.ID,
                                createTaskModel.StartDate))
                            {
                                DateTime deadline = predecessorTask.StartDate.Value.AddDays(predecessorTask.Duration);
                                ModelState.AddModelError("Predecessors",
                                    $"Task \"{predecessorTask.Name}\" have deadline({deadline.ToShortDateString()}) that come after your start date({createTaskModel.StartDate.ToShortDateString()})");
                                flag = false;
                                break;
                            }
                        }
                    }


                    if (flag == false)
                        return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                }

                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        TaskService taskService = new TaskService(db);
                        UserService userService = new UserService(db);
                        DependencyService dependencyService = new DependencyService(db);

                        string loginedUserId = User.Identity.GetUserId();
                        User creator = userService.GetUser(loginedUserId);
                        Task newTask = taskService.CreateTask(
                            createTaskModel.Name,
                            createTaskModel.Description,
                            createTaskModel.ListID.Value,
                            createTaskModel.Priority.Value,
                            createTaskModel.StartDate,
                            createTaskModel.Duration.Value,
                            createTaskModel.Effort.Value,
                            creator
                        );

                        if (createTaskModel.Predecessors != null)
                        {
                            foreach (int predecessor in createTaskModel.Predecessors)
                            {
                                dependencyService.CreateDependency(predecessor, newTask.ID, creator.ID);
                            }
                        }


                        JObject dataObject = taskService.ParseToJson(newTask);
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
        [System.Web.Http.Authorize(Roles = "Manager")]
        public IHttpActionResult UpdateTask(UpdateTaskViewModel updateTaskViewModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    UserService userService = new UserService(db);
                    ProjectService projectService = new ProjectService(db);
                    DependencyService dependencyService = new DependencyService(db);
                    NotificationService notificationService = new NotificationService(db);

                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    User currentUser = userService.GetUser(currentUserId);
                    int durationLength = AgencyConfig.maxDuration;

                    if (!taskService.IsManagerOfTask(currentUserId, updateTaskViewModel.Id))
                        return Ok(ResponseHelper.GetExceptionResponse(
                            "User have to be manager of this task to edit task or task not belong to any department"));

                    bool flag = true;
                    if (db.Tasks.Find(updateTaskViewModel.Id).Name != updateTaskViewModel.Name)
                    {
                        if (taskService.CheckDuplicatedTasknameAllowDublicateProject(updateTaskViewModel.Name,
                            updateTaskViewModel.ListID))
                        {
                            ModelState.AddModelError("Name", "Task name is taken");
                            flag = false;
                        }
                    }

                    if (taskService.CheckForListId(updateTaskViewModel.ListID))
                    {
                        ModelState.AddModelError("ListID", "The System don't have this list");
                        flag = false;
                    }

                    if (updateTaskViewModel.Priority < 0 || updateTaskViewModel.Priority > 3)
                    {
                        ModelState.AddModelError("Priority", "Invalid Priority ");
                        flag = false;
                    }

                    //validate the deadline and stardate of task and project
                    int listId = (int) updateTaskViewModel.ListID;
                    Project project = projectService.GetProjectOfList(listId);
                    DateTime projectStartDate = (DateTime) project.StartDate;
                    DateTime projectDeadline = (DateTime) project.Deadline;
                    DateTime taskDeadline = updateTaskViewModel.StartDate.AddDays((int) updateTaskViewModel.Duration);
                    if (updateTaskViewModel.StartDate.Date < projectStartDate.Date ||
                        updateTaskViewModel.StartDate.Date > projectDeadline.Date)
                    {
                        ModelState.AddModelError("StartDate",
                            $"Start date of Task must be between start date and deadline of project {project.Name}");
                        flag = false;
                    }

                    if (taskDeadline.Date > projectDeadline.Date)
                    {
                        ModelState.AddModelError("Duration",
                            $"You just set the duration out of deadline of project {project.Name}");
                        flag = false;
                    }
                    //end validate

                    if (updateTaskViewModel.Duration < 1 || updateTaskViewModel.Duration > durationLength)
                    {
                        ModelState.AddModelError("Duration",
                            $"Duration must be greater than 1 and smaller than {durationLength}");
                        flag = false;
                    }

                    if (updateTaskViewModel.Effort < 1 ||
                        updateTaskViewModel.Effort > (updateTaskViewModel.Duration * 24))
                    {
                        ModelState.AddModelError("Effort",
                            "Effort(hours) must be greater than 1 and smaller than the Duration(days)");
                        flag = false;
                    }

                    if (updateTaskViewModel.Predecessors != null)
                    {
                        foreach (int predecessorTaskId in updateTaskViewModel.Predecessors)
                        {
                            var predecessorTask = taskService.GetTask(predecessorTaskId);
                            if (!dependencyService.IsPredecessorValid(
                                predecessorTask.ID,
                                updateTaskViewModel.StartDate))
                            {
                                DateTime deadline =
                                    predecessorTask.StartDate.Value.AddDays(predecessorTask.Duration);
                                ModelState.AddModelError("Predecessors",
                                    $"Task \"{predecessorTask.Name}\" have deadline({deadline.ToShortDateString()}) that come after your start date({updateTaskViewModel.StartDate.ToShortDateString()})");
                                flag = false;
                                break;
                            }
                        }

                        if (updateTaskViewModel.Predecessors != null)
                        {
                            IEnumerable<Task> taskSuccessors = dependencyService.GetSuccessors(updateTaskViewModel.Id);
                            DateTime sourceTaskDeadline =
                                updateTaskViewModel.StartDate.AddDays(updateTaskViewModel.Duration);
                            foreach (Task successor in taskSuccessors)
                            {
                                if (!dependencyService.IsSuccessorValid(
                                    successor.ID,
                                    sourceTaskDeadline))
                                {
                                    ModelState.AddModelError("Predecessors",
                                        $"Your task have deadline({sourceTaskDeadline.ToShortDateString()}) that come after it's successor task's start date({updateTaskViewModel.StartDate.ToShortDateString()})");
                                    flag = false;
                                    break;
                                }
                            }
                        }
                    }


                    if (flag == false)
                        return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));


                    if (!ModelState.IsValid)
                    {
                        return Content(HttpStatusCode.BadRequest,
                            ResponseHelper.GetExceptionResponse(ModelState));
                    }

                    string loginedUserId = User.Identity.GetUserId();
                    User creator = userService.GetUser(loginedUserId);
                    var updatedTask = taskService.UpdateTask(
                        updateTaskViewModel.Id,
                        updateTaskViewModel.Name,
                        updateTaskViewModel.Description,
                        updateTaskViewModel.ListID,
                        updateTaskViewModel.Priority,
                        updateTaskViewModel.StartDate,
                        updateTaskViewModel.Duration,
                        updateTaskViewModel.Effort,
                        currentUser.ID,
                        DateTime.Now.Date);

                    dependencyService.SetDependencyForTask(
                        updatedTask.ID,
                        updateTaskViewModel.Predecessors,
                        creator.ID
                    );

                    NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                    NotificationSentence sentence = builder.EditTaskSentence(
                        currentUserId,
                        updateTaskViewModel.Id,
                        project.ID);
                    IEnumerable<User> notifiedUsers =
                        notificationService.NotifyToUsersOfTask(updateTaskViewModel.Id, sentence);
                    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                    if (context != null)
                    {
                        context.Clients.All.updateNotification(new JArray(notifiedUsers.Select(user => user.ID)));
                    }


                    return Ok(ResponseHelper.GetResponse(
                        taskService.ParseToJson(updatedTask, true, AgencyConfig.AvatarPath,
                            AgencyConfig.AttachmentPath)
                    ));
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
        [System.Web.Http.Authorize(Roles = "Manager")]
        public IHttpActionResult AssignTask(AssignTaskModel assignTaskModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        TaskService taskService = new TaskService(db);
                        NotificationService notificationService = new NotificationService(db);
                        UserService userService = new UserService(db);
                        ProjectService projectService = new ProjectService(db);

                        int currentUserId = Int32.Parse(User.Identity.GetUserId());
                        User currentUser = userService.GetUser(currentUserId);

                        if (!taskService.IsManagerOfTask(currentUserId, assignTaskModel.TaskID))
                            return Content(HttpStatusCode.Unauthorized, ResponseHelper.GetExceptionResponse(
                                "User have to be manager of this task to Assign this task"));

                        Task task = taskService.AssignUsersToTask(
                            assignTaskModel.UserIDs,
                            assignTaskModel.TaskID,
                            currentUserId);

                        // Notification
                        Project project = projectService.GetProjectOfTask(task.ID);
                        foreach (var assigneeId in assignTaskModel.UserIDs)
                        {
                            NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                            NotificationSentence notificationSentence = builder.AssignMemberToTaskSentence(
                                currentUserId, assigneeId, task.ID, project.ID);

                            IEnumerable<int> newNotificationUserIds = notificationService
                                .NotifyToUsersOfTask(task.ID, notificationSentence)
                                .Select(affectedUser => affectedUser.ID);
                            IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                            if (context != null)
                            {
                                context.Clients.All.updateNotification(new JArray(newNotificationUserIds));
                            }
                        }

                        return Ok(ResponseHelper.GetResponse(taskService.ParseToJson(task, true,
                            AgencyConfig.AvatarPath, AgencyConfig.AttachmentPath)));
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
        [System.Web.Http.Authorize(Roles = "Manager")]
        public IHttpActionResult UnassignTask(UnassignTaskModel unassignTaskModel)
        {
            try
            {
                if (!ModelState.IsValid)
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));

                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    ProjectService projectService = new ProjectService(db);
                    NotificationService notificationService = new NotificationService(db);
                    UserService userService = new UserService(db);

                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    if (!taskService.IsManagerOfTask(currentUserId, unassignTaskModel.TaskID))
                    {
                        return Content(HttpStatusCode.InternalServerError, ResponseHelper.GetExceptionResponse(
                            "User have to be manager of this task to Unassign this task"));
                    }

                    foreach (int userID in unassignTaskModel.UserIDs)
                    {
                        taskService.UnAssignTask(
                            userID: userID,
                            taskID: unassignTaskModel.TaskID,
                            currentUserId: currentUserId
                        );
                    }

                    // Notification

                    Project project = projectService.GetProjectOfTask(unassignTaskModel.TaskID);

                    List<User> notifiedUsersList = new List<User>();
                    List<User> removedUserList = userService.GetUsers(unassignTaskModel.UserIDs).ToList();
                    foreach (int unassigneeId in unassignTaskModel.UserIDs)
                    {
                        NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                        NotificationSentence notificationSentence = builder.UnAssignTaskSentence(
                            currentUserId, unassigneeId, unassignTaskModel.TaskID, project.ID);


                        IEnumerable<User> notifiedUsers = notificationService
                            .NotifyToUsersOfTask(
                                unassignTaskModel.TaskID,
                                notificationSentence,
                                removedUserList
                            );
                        notifiedUsersList.AddRange(notifiedUsers);
                    }
                    


                    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                    if (context != null)
                    {
                        context.Clients.All.updateNotification(new JArray(notifiedUsersList.Select(user => user.ID)));
                    }

                    return Ok(ResponseHelper.GetResponse(new JObject
                    {
                        ["id"] = new JArray(unassignTaskModel.UserIDs)
                    }));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpPut]
        [Route("archive")]
        [System.Web.Http.Authorize(Roles = "Manager")]
        public IHttpActionResult Archive(ArchiveTaskModel archiveTaskModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        int currentUserId = Int32.Parse(User.Identity.GetUserId());
                        TaskService taskService = new TaskService(db);
                        var archivedTask = taskService.ArchiveTask(archiveTaskModel.TaskID, currentUserId);
                        Task task = db.Tasks.Find(archivedTask);
                        if (taskService.IsManagerOfTask(currentUserId, task.ID))
                        {
                            return Ok(ResponseHelper.GetResponse(
                                taskService.ParseToJson(task)
                            ));
                        }

                        return Ok(ResponseHelper.GetExceptionResponse(
                            "User have to be manager of this task to edit it's Archive status"));
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
        [Route("unarchive")]
        [System.Web.Http.Authorize(Roles = "Manager")]
        public IHttpActionResult UnArchive(ArchiveTaskModel archiveTaskModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        UserService userService = new UserService(db);
                        int currentUserId = Int32.Parse(User.Identity.GetUserId());
                        User user = userService.GetUser(currentUserId);
                        TaskService taskService = new TaskService(db);
                        var archivedTask = taskService.UnArchiveTask(archiveTaskModel.TaskID, currentUserId);
                        Task task = db.Tasks.Find(archivedTask);
                        if (taskService.IsManagerOfTask(currentUserId, task.ID))
                        {
                            return Ok(ResponseHelper.GetResponse(
                                taskService.ParseToJson(task)
                            ));
                        }

                        return Content(HttpStatusCode.Unauthorized,
                            ResponseHelper.GetExceptionResponse(
                            "User have to be manager of this task to edit it's Archive status"));
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