using System.Web.Http;
using System;
using System.Collections.Generic;
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
        [Authorize(Roles = "Admin,Staff,Manager")]
        public IHttpActionResult GetTask(int id)
        {
            try
            {
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
                JArray dataObject = new JArray();
                foreach (TaskPriority priority in Enum.GetValues(typeof(TaskPriority)))
                {
                   dataObject.Add(new JObject
                   {
                       ["key"] = (int)priority,
                       ["value"] = priority.ToString()
                   });
                }

                return Ok(ResponseHelper.GetResponse(dataObject));
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
                JArray dataObject = new JArray();
                foreach (TaskStatus priority in Enum.GetValues(typeof(TaskStatus)))
                {
                    dataObject.Add(new JObject
                    {
                        ["key"] = (int)priority,
                        ["value"] = priority.ToString()
                    });
                }

                return Ok(ResponseHelper.GetResponse(dataObject));
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

        [HttpPost]
        [Route("")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult CreateTask(CreateTaskModel createTaskModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        TaskService taskService = new TaskService(db);
                        UserService userService = new UserService(db);
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
        [Authorize(Roles = "Admin")]
        public IHttpActionResult UpdateTask(UpdateTaskViewModel updateTaskViewModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        
                        TaskService taskService = new TaskService(db);
                        
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


                        var updateTask = taskService.UpdateTask(
                            updateTaskViewModel.Id,
                            updateTaskViewModel.Name,
                            updateTaskViewModel.Description,
                            updateTaskViewModel.ListID,
                            updateTaskViewModel.Priority,
                            updateTaskViewModel.StartDate,
                            updateTaskViewModel.Duration,
                            updateTaskViewModel.Effort
                        );
                        return Ok(ResponseHelper.GetResponse(taskService.ParseToJson(updateTask)));
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
        [Route("assign")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult AssignTask(AssignTaskModel assignTaskModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        TaskService taskService = new TaskService(db);

                        foreach (int userID in assignTaskModel.UserIDs)
                        {
                            taskService.AssignTask(
                                userID: userID,
                                taskID: assignTaskModel.TaskID
                            );
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
        [Authorize(Roles = "Admin")]
        public IHttpActionResult UnassignTask(UnassignTaskModel unassignTaskModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        TaskService taskService = new TaskService(db);

                        foreach (int userID in unassignTaskModel.UserIDs)
                        {
                            taskService.UnAssignTask(
                                userID: userID,
                                taskID: unassignTaskModel.TaskID
                            );
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
        [Route("archive")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult Archive(ArchiveTaskModel archiveTaskModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        TaskService taskService = new TaskService(db);

                        var archiveTask = taskService.ArchiveTask(archiveTaskModel.TaskID);

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