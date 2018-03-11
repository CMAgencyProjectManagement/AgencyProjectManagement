using Entity;
using Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Web.ViewModels;
using Newtonsoft.Json.Linq;
using System.Net;

namespace Web.Controllers
{
    [RoutePrefix("api/list")]
    public class ListController : ApiController
    {
        [HttpPost]
        [Route("")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult CreateList(CreateListModel createListModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ListService listService = new ListService(db);
                        UserService userService = new UserService(db);
                        ProjectService projectService = new ProjectService(db);
                        List newList = listService.CreateList(
                            createListModel.ProjectID,
                            createListModel.Name
                            );
                        JObject dataObject = listService.ParseToJson(newList);
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

                
        
    }
}