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
        [Route("create")]
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
                        return Ok(ResponseHelper.GetResponse(commentService.ParseToJson(newComment)));
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
        


        [HttpPut]
        [Route("update")]
        [Authorize(Roles = "Manager, Staff")]
        public IHttpActionResult UpdateComment(UpdateCommentModel updateCommentModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {       
                        CommentService commentService = new CommentService(db);
                        var updatedComment = commentService.UpdateComment(
                            updateCommentModel.id,
                            updateCommentModel.Body
                            );
                        return Ok(ResponseHelper.GetResponse(commentService.ParseToJson(updatedComment)));
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