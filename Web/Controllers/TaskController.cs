using System.Web.Http;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Entity;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json.Linq;
using Service;
using Web.ViewModels;
using Task = Entity.Task;

namespace Web.Controllers
{
    [RoutePrefix("api/task")]
    public class TaskController : ApiController
    {
        [HttpGet]
        [Route("{id:int}")]
        [Authorize]
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
        [Authorize(Roles = "Manager,Staff")]
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
        [Route("recentchanged")]
        [Authorize(Roles = "Manager")]
        public IHttpActionResult GetManagerDashboard()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    int userId = Int32.Parse(User.Identity.GetUserId());
                    ProjectService projectService = new ProjectService(db);
                    TaskService taskService = new TaskService(db);
                    JArray dataObject = new JArray();

                    TeamService teamService = new TeamService(db);
                    var teamId = db.Users.Find(userId).TeamID;
                    var tasksInTeam = teamService.GetTasksOfTeam((int) teamId);
                    var tasks = taskService.GetTaskChangeThisWeek(tasksInTeam);
                    tasks.OrderByDescending(X => X.ChangedTime);
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
        [Route("user/{id:int}")]
        [Authorize(Roles = "Admin,Manager")]
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
        [Authorize]
        public IHttpActionResult GetPriority()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    IEnumerable<KeyValuePair<string, string>> priorities = taskService.getPriorities();
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
        [Authorize]
        public IHttpActionResult GetStatus()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    IEnumerable<KeyValuePair<string, string>> statuses = taskService.getStatuses();
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
        [Authorize]
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
        [Authorize(Roles = "Staff")]
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
                    var task = taskService.setStatus(taskId, currentUserId, TaskStatus.NeedReview);

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
        [Authorize(Roles = "Manager")]
        public IHttpActionResult SetStatus(SetStatusViewModel setStatusViewModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    TaskService taskService = new TaskService(db);

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

                    Task task = taskService.setStatus(
                        setStatusViewModel.TaskId.Value,
                        currentUserId,
                        (TaskStatus) setStatusViewModel.TaskStatus);
                    task.ChangedBy = currentUserId;
                    task.ChangedTime = DateTime.Now;
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
        [Authorize(Roles = "Manager")]
        public IHttpActionResult CreateTask(CreateTaskModel createTaskModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    DependencyService dependencyService = new DependencyService(db);

                    bool flag = true;
                    int DurationLength = 15;

                    if (taskService.CheckDuplicatedTasknameAllowDublicateProject(createTaskModel.Name,
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
                    else
                    {
                        TeamService teamService = new TeamService(db);
                        int userId = Int32.Parse(User.Identity.GetUserId());
                        var teamId = db.Users.Find(userId).TeamID;
                        int projectId = db.Lists.Find(createTaskModel.ListID.Value).ProjectID;
                        var teamIdsOfList = db.TeamProjects.Where(x => x.ProjectID == projectId)
                            .Select(x => x.TeamID);
                        if (teamIdsOfList.Count() != 0)
                        {
                            int countCheck = 0;
                            foreach (var teamIdOfList in teamIdsOfList)
                            {
                                if ((int) teamId == (int) teamIdOfList)
                                {
                                    countCheck = 1;
                                    break;
                                }
                            }

                            if (countCheck == 0)
                            {
                                ModelState.AddModelError("ListID",
                                    $"The Department {db.Teams.Find(teamId).Name} don't have this list");
                                ;
                                flag = false;
                            }
                        }
                        else
                        {
                            ModelState.AddModelError("ListID",
                                $"The List with Id {createTaskModel.ListID.Value} doesnot belong to any Department");
                            flag = false;
                        }
                    }

                    if (createTaskModel.Priority < 0 || createTaskModel.Priority > 3)
                    {
                        ModelState.AddModelError("Priority", "Invalid Priority ");
                        flag = false;
                    }

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
        [Authorize(Roles = "Manager")]
        public IHttpActionResult UpdateTask(UpdateTaskViewModel updateTaskViewModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    UserService userService = new UserService(db);
                    DependencyService dependencyService = new DependencyService(db);
                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    User currentUser = userService.GetUser(currentUserId);
                    int DurationLength = 15;

                    if (!taskService.IsManagerOfTask(currentUserId, updateTaskViewModel.Id))
                        return Ok(ResponseHelper.GetExceptionResponse(
                            "User have to be manager of this task to edit task "));

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

                    if (updateTaskViewModel.Duration < 1 || updateTaskViewModel.Duration > DurationLength)
                    {
                        ModelState.AddModelError("Duration",
                            $"Duration must be greater than 1 and smaller than {DurationLength}");
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


                    if (ModelState.IsValid)
                    {
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

                        return Ok(ResponseHelper.GetResponse(
                            taskService.ParseToJson(updatedTask, true, AgencyConfig.AvatarPath,
                                AgencyConfig.AttachmentPath)
                        ));
                    }
                    else
                    {
                        return Content(HttpStatusCode.BadRequest,
                            ResponseHelper.GetExceptionResponse(ModelState));
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
        [Authorize(Roles = "Manager")]
        public IHttpActionResult AssignTask(AssignTaskModel assignTaskModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        TaskService taskService = new TaskService(db);
                        int currentUserId = Int32.Parse(User.Identity.GetUserId());
                        if (taskService.IsManagerOfTask(currentUserId, assignTaskModel.TaskID))
                        {
                            foreach (int userID in assignTaskModel.UserIDs)
                            {
                                taskService.AssignTask(
                                    userID: userID,
                                    taskID: assignTaskModel.TaskID,
                                    currentUserId: currentUserId
                                );
                            }

                            return Ok(ResponseHelper.GetResponse());
                        }

                        return Ok(ResponseHelper.GetExceptionResponse(
                            "User have to be manager of this task to Assign this task"));
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
        [Authorize(Roles = "Manager")]
        public IHttpActionResult UnassignTask(UnassignTaskModel unassignTaskModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        int currentUserId = Int32.Parse(User.Identity.GetUserId());
                        TaskService taskService = new TaskService(db);
                        if (taskService.IsManagerOfTask(currentUserId, unassignTaskModel.TaskID))
                        {
                            foreach (int userID in unassignTaskModel.UserIDs)
                            {
                                taskService.UnAssignTask(
                                    userID: userID,
                                    taskID: unassignTaskModel.TaskID,
                                    currentUserId: currentUserId
                                );
                            }

                            return Ok(ResponseHelper.GetResponse(new JObject
                            {
                                ["id"] = new JArray(unassignTaskModel.UserIDs)
                            }));
                        }

                        return Ok(ResponseHelper.GetExceptionResponse(
                            "User have to be manager of this task to Unassign this task"));
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
        [Route("archive")]
        [Authorize(Roles = "Manager")]
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
        [Authorize(Roles = "Manager")]
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
    }
}