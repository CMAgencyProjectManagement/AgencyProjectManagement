using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using System.Net;
using System.Web.Http;
using Entity;
using Entity.DAL;
using Entity.Models;
using Newtonsoft.Json.Linq;
using Service;

namespace Web.Controllers
{
//    [RoutePrefix("api/dependency")]
    public class DependencyController : ApiController
    {
        [HttpGet]
        [Route("api/project/{projectId:int}/dependency")]
        [Authorize]
        public IHttpActionResult GetAllDependenciesOfProject(int projectId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    DependencyService dependencyService = new DependencyService(db);
                    
                    Project project = projectService.GetProjectByID(projectId);
                    if (project == null)
                    {
                        throw new ObjectNotFoundException($"Project with id {projectId} not found");
                    }

                    IEnumerable<TaskDependency> dependencies = dependencyService
                        .GeTaskDependenciesOfProject(project);
                    
                    IEnumerable <JObject> dependenciesJson = dependencies
                        .Select(dependency => dependencyService.ParseToJson(dependency));
                    
                    return Ok(ResponseHelper.GetResponse(new JArray(dependenciesJson)));
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