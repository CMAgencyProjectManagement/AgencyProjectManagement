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

                //Dont expose password
                Task task = TaskService.GetTask(id);
                return Ok(ResponseHelper.GetResponse(task.ToJson()));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("user/{id:int}")]
        [Authorize(Roles = "Admin,Staff,Manager")]
        public IHttpActionResult GetTask1(int id)
        {
            try
            {

                //Dont expose password
                //List list = ListService.GetListOfTask(id);
                IEnumerable<Task> tasks = TaskService.GetTasksOfUser(id);
                JArray dataObject = new JArray();
                foreach (var task in tasks)
                {
                    dataObject.Add(task.ToJson());
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
        [Authorize(Roles = "Admin,Staff,Manager")]
        public IHttpActionResult GetMyTask()
        {
            try
            {
                string userId = User.Identity.GetUserId();
                IEnumerable<Task> tasks = TaskService.GetTasksOfUser(Int32.Parse(userId));  
                JArray dataObject = new JArray();
                foreach (var task in tasks)
                {
                    dataObject.Add(task.ToJson());
                }
                return Ok(ResponseHelper.GetResponse(dataObject));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        //[HttpGet]
        //[Route("")]
        //[Authorize]
        //public IHttpActionResult GetMyProject()
        //{
        //    try
        //    {
        //        string userId = User.Identity.GetUserId();
        //        IEnumerable<Project> projects = ProjectService.GetProjectOfUser(Int32.Parse(userId));
        //        JArray dataObject = new JArray();

        //        foreach (var project in projects)
        //        {
        //            dataObject.Add(project.ToJson());
        //        }

        //        return Ok(ResponseHelper.GetResponse(dataObject));
        //    }
        //    catch (Exception ex)
        //    {
        //        return Content(HttpStatusCode.InternalServerError,
        //            ResponseHelper.GetExceptionResponse(ex));
        //    }
        //}
    }
}