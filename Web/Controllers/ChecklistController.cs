using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;

namespace Web.Controllers
{
    [RoutePrefix("api/checklist")]
    public class ChecklistController : ApiController
    {
        //[HttpGet]
        //[Route("all")]
        //[System.Web.Http.Authorize(Roles = "Admin")]

        [HttpPost]
        [Route("")]
        [Authorize(Roles = "Manager")]
        public IHttpActionResult CreateChecklist()
        {
            try
            {
                throw new NotImplementedException();
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        
        [HttpDelete]
        [Route("{checkListId:int}")]
        [Authorize(Roles = "Manager")]
        public IHttpActionResult DeleteChecklist()
        {
            try
            {
                throw new NotImplementedException();
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        
        [HttpPost]
        [Route("item")]
        [Authorize(Roles = "Manager")]
        public IHttpActionResult CreateChecklistItem()
        {
            try
            {
                throw new NotImplementedException();
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        
        [HttpDelete]
        [Route("{checkListId:int}/item/{checklistItemId:int}")]
        [Authorize(Roles = "Manager")]
        public IHttpActionResult DeleteChecklistItem()
        {
            try
            {
                throw new NotImplementedException();
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
    }
}