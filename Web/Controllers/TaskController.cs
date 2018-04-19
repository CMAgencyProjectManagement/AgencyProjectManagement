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
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    if (!taskService.IsAssigneeOfProject(currentUserId, id))
                    {
                        return Content(HttpStatusCode.UnsupportedMediaType,
                        ResponseHelper.GetExceptionResponse("Not assignee of project in this task"));
                    }
                }
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    Task task = taskService.GetTask(id);
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
        [Route("user/{id:int}")]
        [Authorize(Roles = "Admin,Manager")]
        public IHttpActionResult GetTasksOfUser(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
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
                        return Content(HttpStatusCode.UnsupportedMediaType,
                        ResponseHelper.GetExceptionResponse("Dont have assignee of this task"));
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

                    if (!taskService.IsUserManagerOfTask(currentUserId, setStatusViewModel.TaskId.Value))
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
        [Authorize(Roles = "Admin, Manager")]
        public IHttpActionResult CreateTask(CreateTaskModel createTaskModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    bool flag = true;
                    if (taskService.CheckDuplicatedTaskname(createTaskModel.Name))
                    {
                        ModelState.AddModelError("Name", "Task name is taken");
                        flag = false;
                    }

                    if (taskService.CheckForListId(createTaskModel.ListID))
                    {
                        ModelState.AddModelError("ListID", "The System don't have this list");
                        flag = false;
                    }

                    if (createTaskModel.Priority < 0 || createTaskModel.Priority > 3)
                    {
                        ModelState.AddModelError("Priority", "Invalid Priority ");
                        flag = false;
                    }

                    if (createTaskModel.Duration < 1)
                    {
                        ModelState.AddModelError("Duration",
                            "Duration must be greater than 1 ");
                        flag = false;
                    }

                    if (createTaskModel.Effort < 1 || createTaskModel.Effort > (createTaskModel.Duration * 24))
                    {
                        ModelState.AddModelError("Effort",
                            "Effort(hours) must be smaller than the Duration(days)");
                        flag = false;
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

                        string loginedUserId = User.Identity.GetUserId();
                        User creator = userService.GetUser(loginedUserId);
                        DateTime startTime = createTaskModel.StartDate;
                        int duration = createTaskModel.Duration;
                        int effort = createTaskModel.Effort;
                        int priority = createTaskModel.Priority;
                        Task newTask = taskService.CreateTask(
                            createTaskModel.Name,
                            createTaskModel.Description,
                            createTaskModel.ListID,
                            priority,
                            startTime,
                            duration,
                            effort,
                            creator
                        );
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
        [Authorize(Roles = "Admin, Manager")]
        public IHttpActionResult UpdateTask(UpdateTaskViewModel updateTaskViewModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    UserService userService = new UserService(db);
                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    User currentUser = userService.GetUser(currentUserId);

                    if (taskService.IsUserManagerOfTask(currentUserId, updateTaskViewModel.Id))
                    {
                        bool flag = true;
                        if (db.Tasks.Find(updateTaskViewModel.Id).Name != updateTaskViewModel.Name)
                        {
                            if (taskService.CheckDuplicatedTaskname(updateTaskViewModel.Name))
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

                        if (updateTaskViewModel.Duration < 1)
                        {
                            ModelState.AddModelError("Duration",
                                "Duration must be greater than 1 ");
                            flag = false;
                        }

                        if (updateTaskViewModel.Effort < 1 ||
                            updateTaskViewModel.Effort > (updateTaskViewModel.Duration * 24))
                        {
                            ModelState.AddModelError("Effort",
                                "Effort(hours) must be greater than 1 and smaller than the Duration(days)");
                            flag = false;
                        }

                        if (flag == false)
                            return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));


                        if (ModelState.IsValid)
                        {



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
                                                        DateTime.Now.Date
                                                    );
                            return Ok(ResponseHelper.GetResponse(
                                taskService.ParseToJson(updatedTask, true, AgencyConfig.AvatarPath, AgencyConfig.AttachmentPath)
                            ));



                        }
                        else
                        {
                            return Content(HttpStatusCode.BadRequest,
                                ResponseHelper.GetExceptionResponse(ModelState));
                        }
                    }
                    return Ok(ResponseHelper.GetExceptionResponse(
                  "User have to be manager of this task to edit task "));
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
                        if (taskService.IsUserManagerOfTask(currentUserId, assignTaskModel.TaskID))
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
                        if (taskService.IsUserManagerOfTask(currentUserId, unassignTaskModel.TaskID))
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
                        var archivedTask = taskService.ArchiveTask(archiveTaskModel.TaskID);
                        Task task = db.Tasks.Find(archivedTask);
                        if (taskService.IsUserManagerOfTask(currentUserId, task.ID))
                        {
                            task.ChangedBy = currentUserId;
                            task.ChangedTime = DateTime.Now;
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
                        int currentUserId = Int32.Parse(User.Identity.GetUserId());
                        TaskService taskService = new TaskService(db);
                        var archivedTask = taskService.UnArchiveTask(archiveTaskModel.TaskID);
                        Task task = db.Tasks.Find(archivedTask);
                        if (taskService.IsUserManagerOfTask(currentUserId, task.ID))
                        {
                            task.ChangedBy = currentUserId;
                            task.ChangedTime = DateTime.Now;
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