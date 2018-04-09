using System.Web.Http;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Net;
using Entity;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json.Linq;
using Service;
using Web.ViewModels;

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
                        taskService.ParseToJson(task, true, AgencyConfig.AvatarPath)
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
                        string loginedUserId = User.Identity.GetUserId();
                        User creator = userService.GetUser(loginedUserId);
                        DateTime startTime = DateTime.Parse(createTaskModel.StartDate);
                        TaskPriority priority = TaskPriority.Normal;
                        Task newTask = taskService.CreateTask(
                            createTaskModel.Name,
                            createTaskModel.Description,
                            createTaskModel.ListID,
                            priority,
                            startTime,
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
                        DateTime? startdate = null;
                        DateTime tmp;
                        if (DateTime.TryParse(updateTaskViewModel.StartDate, out tmp))
                        {
                            startdate = tmp;
                        }

                        TaskService taskService = new TaskService(db);
                        var updateTask = taskService.UpdateTask(
                            updateTaskViewModel.Id,
                            updateTaskViewModel.Name,
                            updateTaskViewModel.Description,
                            updateTaskViewModel.ListID,
                            updateTaskViewModel.Priority,
                            startdate
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
    }
}