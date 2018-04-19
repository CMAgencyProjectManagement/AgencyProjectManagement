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
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    if (!taskService.IsAssigneeOfTask(currentUserId, createCommentModel.TaskID))
                    {
                        return Content(HttpStatusCode.UnsupportedMediaType,
                        ResponseHelper.GetExceptionResponse($"the person who do this action must be assigned member task with ID {createCommentModel.TaskID}"));

                    }
                }

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
                        return Ok(ResponseHelper.GetResponse(commentService.ParseToJson(newComment, avatarPath: AgencyConfig.AvatarPath)));
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
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    var taskId = db.Comments.Find(updateCommentModel.id).TaskID;
                    if (!taskService.IsAssigneeOfTask(currentUserId, taskId))
                    {
                        return Content(HttpStatusCode.UnsupportedMediaType,
                        ResponseHelper.GetExceptionResponse($"the person who do this action must be assigned member task with ID {taskId}"));

                    }
                }

                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {       
                        CommentService commentService = new CommentService(db);
                        var updatedComment = commentService.UpdateComment(
                            updateCommentModel.id,
                            updateCommentModel.Body
                            );
                        return Ok(ResponseHelper.GetResponse(commentService.ParseToJson(updatedComment, avatarPath: AgencyConfig.AvatarPath)));
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