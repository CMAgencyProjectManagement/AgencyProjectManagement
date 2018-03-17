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
    [RoutePrefix("api/comment")]
    public class CommentController : ApiController
    {
        [HttpPost]
        [Route("")]
        [Authorize(Roles = "Manager, Staff")]
        public IHttpActionResult AddComment(CreateCommentModel createCommentModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        string userIdString = User.Identity.GetUserId();
                        CommentService commentService = new CommentService(db);
                        Comment newComment = commentService.CreateComment(
                            createCommentModel.Body,
                            createCommentModel.TaskID,
                            Int32.Parse(userIdString)
                            );
                        return Ok(ResponseHelper.GetResponse());
                    }
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch(Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
    }
}