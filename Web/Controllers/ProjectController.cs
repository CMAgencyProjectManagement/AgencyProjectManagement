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
using Web.ViewModels;

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
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    var projects = projectService.GetAll();

                    JArray dataObject = new JArray();
                    foreach (var project in projects)
                    {
                        dataObject.Add(projectService.ParseToJson(project));
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
        [Route("")]
        [Authorize]
        public IHttpActionResult GetMyProject()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);

                    string userId = User.Identity.GetUserId();
                    IEnumerable<Project> projects = projectService.GetProjectOfUser(Int32.Parse(userId));
                    JArray dataObject = new JArray();

                    foreach (var project in projects)
                    {
                        dataObject.Add(projectService.ParseToJson(project));
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
        public IHttpActionResult CreateProject(CreateProjectModel createProjectModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ProjectService projectService = new ProjectService(db);
                        Boolean flag = true;
                        if (projectService.CheckDuplicatedNameOfProject(createProjectModel.Name))
                        {
                            ModelState.AddModelError("Name", "Username is taken");
                            flag = false;
                            //return Content(HttpStatusCode.BadRequest,ResponseHelper.GetExceptionResponse(ModelState));
                        }
                        if (createProjectModel.StartDate != null || createProjectModel.Deadline != null)
                        {
                            if (createProjectModel.Deadline != null)
                            {
                                if (DateTime.Parse(createProjectModel.StartDate) > DateTime.Parse(createProjectModel.Deadline))
                                {
                                    ModelState.AddModelError("StartDate", "StartDate must be smaller than the deadline");
                                    flag = false;
                                    //return Content(HttpStatusCode.BadRequest,ResponseHelper.GetExceptionResponse(ModelState));
                                }
                            }
                            if (createProjectModel.StartDate!=null)
                            {
                                if (DateTime.Parse(createProjectModel.Deadline) < DateTime.Parse(createProjectModel.StartDate))
                                {
                                    ModelState.AddModelError("Deadline", "Deadline must be greater than the StartDate");
                                    flag = false;
                                    // return Content(HttpStatusCode.BadRequest,ResponseHelper.GetExceptionResponse(ModelState));
                                }
                            }
                            
                            if (DateTime.Parse(createProjectModel.StartDate) > DateTime.Now)
                            {
                                ModelState.AddModelError("StartDate", "StartDate must be smaller than the current time ");
                                flag = false;
                                //return Content(HttpStatusCode.BadRequest,ResponseHelper.GetExceptionResponse(ModelState));
                            }
                            if (DateTime.Parse(createProjectModel.Deadline) > DateTime.Now)
                            {
                                ModelState.AddModelError("Deadline", "Deadline must be smaller than the current time ");
                                flag = false;
                            }
                            
                        }
                        
                        if(flag == false) return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                        UserService userService = new UserService(db);
                        string loginedUserId = User.Identity.GetUserId();
                        User creator = userService.GetUser(loginedUserId);
                        DateTime startTime = DateTime.Parse(createProjectModel.StartDate);
                        DateTime deadline = DateTime.Parse(createProjectModel.Deadline);

                        Project newProject = projectService.CreateProject(
                            createProjectModel.Name,
                            createProjectModel.Description,
                            deadline,
                            startTime,
                            creator
                        );

                        JObject dataObject = projectService.ParseToJson(newProject);
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
        public IHttpActionResult UpdateProject(UpdateProjectViewModel updateProjectViewModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    DateTime? deadline = null;
                    DateTime? startdate = null;

                    DateTime tmp;
                    if (DateTime.TryParse(updateProjectViewModel.deadline, out tmp))
                    {
                        deadline = tmp;
                    }

                    if (DateTime.TryParse(updateProjectViewModel.startdate, out tmp))
                    {
                        startdate = tmp;
                    }

                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ProjectService projectService = new ProjectService(db);
                        var updatedProject = projectService.UpdateProject(
                            updateProjectViewModel.id,
                            updateProjectViewModel.name,
                            updateProjectViewModel.description,
                            deadline,
                            startdate
                        );
                        return Ok(ResponseHelper.GetResponse(projectService.ParseToJson(updatedProject)));
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
        [Route("close")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult CloseProject(DeleteProjectViewModel deleteProjectViewModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    projectService.CloseProject(deleteProjectViewModel.id);
                    return Ok(ResponseHelper.GetResponse());
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult GetProjectByID(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    var project = projectService.GetProjectByID(id);

                    if (project != null)
                    {
                        return Ok(ResponseHelper.GetResponse(
                            projectService.ParseToJson(project)
                        ));
                    }
                    else
                    {
                        return Content(HttpStatusCode.BadRequest, $"Can't find project with ID {id}");
                    }
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