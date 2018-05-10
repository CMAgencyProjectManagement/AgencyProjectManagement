using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security;
using System.Web.Http;
using Entity;
using Entity.DAL;
using Newtonsoft.Json.Linq;
using Service;

namespace Web.Controllers
{
    [RoutePrefix("api/report")]
    public class ReportController : ApiController
    {
        /***
         * Task count in project
         * task complete in project
         * number of people in project
         */
        [HttpGet]
        [Route("project/{projectId:int}/statistic")]
        [Authorize]
        public IHttpActionResult GetProjectStaticReport(int projectId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    int taskCount = db.Tasks.Count(task => task.List.ProjectID == projectId);
                    int completedTask =
                        db.Tasks.Count(task => task.List.ProjectID == projectId && task.FinishedDate != null);

                    int numberOfStaffInProject =
                        db.UserProjects.Count(userProject => userProject.ProjectID == projectId);

                    JObject dataObject = new JObject
                    {
                        ["taskCount"] = taskCount,
                        ["completedTask"] = completedTask,
                        ["numberOfPeopleInProject"] = numberOfStaffInProject,
                    };

                    return Ok(ResponseHelper.GetResponse(dataObject));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        /***
         * Task count that week
         * Task done that week
         * friday every weeks
         */
        [HttpGet]
        [Route("project/{projectId:int}/progress")]
        [Authorize]
        public IHttpActionResult GetProjectProgressReport(int projectId)
        {
            try
            {
                var label = new[] {2006, 2007, 2008, 2009, 2010, 2011, 2012};
                var series = new[] {"Task count", "Task done"};
                var taskCount = new[] {65, 59, 80, 81, 56, 55, 40};
                var taskDone = new[] {28, 48, 40, 19, 86, 27, 90};
                var data = new JArray
                {
                    new JObject
                    {
                        ["data"] = new JArray(taskCount),
                        ["label"] = "Task count"
                    },
                    new JObject
                    {
                        ["data"] = new JArray(taskDone),
                        ["label"] = "Task done"
                    }
                };
                var dataObj = new JObject
                {
                    ["labels"] = new JArray(label),
                    ["series"] = new JArray(series),
                    ["data"] = data
                };

                return Ok(ResponseHelper.GetResponse(dataObj));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
    }
}