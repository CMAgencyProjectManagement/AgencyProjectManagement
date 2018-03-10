using System.Web.Http;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Net;
using Entity;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json.Linq;
using Service;

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
                    return Ok(ResponseHelper.GetResponse(taskService.ParseToJson(task)));
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

        //[HttpGet]
        //[Route("user/{id:int}")]
        //[Authorize(Roles = "Admin,Staff,Manager")]
        //public IHttpActionResult GetTask(int id)
        //{
        //    try
        //    {
        //        using (CmAgencyEntities db = new CmAgencyEntities())
        //        {
        //            TaskService taskService = new TaskService(db);
        //            IEnumerable<Task> tasks = taskService.GetTasksOfUser(id);
        //            JArray dataObject = new JArray();
        //            foreach (var task in tasks)
        //            {
        //                dataObject.Add(taskService.ParseToJson(task));
        //            }

        //            return Ok(ResponseHelper.GetResponse(dataObject));
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return Content(HttpStatusCode.InternalServerError,
        //            ResponseHelper.GetExceptionResponse(ex));
        //    }
        //}


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
    }
}