using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Entity;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json.Linq;
using Service;

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
                var projects = ProjectService.GetAll();
                //Dont expose password
                JArray dataObject = new JArray();
                foreach (var project in projects)
                {
                    dataObject.Add(new JObject
                    {
                        ["id"] = project.ID,
                        ["name"] = project.Name,
                        ["description"] = project.Description,
                        ["deadline"] = project.Deadline,
                        ["createdTime"] = project.CreatedTime,
                        ["createdBy"] = project.CreatedBy,
                        ["startDate"] = project.StartDate,
                        ["changedBy"] = project.ChangedBy,
                        ["changedTime"] = project.ChangedTime
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
        [Route("")]
        [Authorize]
        public IHttpActionResult GetMyProject()
        {
            try
            {
                string userId = User.Identity.GetUserId();
                IEnumerable<Project> projects = ProjectService.GetProjectOfUser(Int32.Parse(userId));
                JArray dataObject = new JArray();

                foreach (var project in projects)
                {
                    dataObject.Add(project.ToJson());
                }
                
                return Ok(ResponseHelper.GetResponse(dataObject));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
    }
}