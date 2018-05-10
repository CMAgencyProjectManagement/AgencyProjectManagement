using System.Web.Http;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Entity;
using Entity.DAL;
using Entity.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json.Linq;
using Service;
using Web.Hubs;
using Web.ViewModels;

namespace Web.Controllers
{
    [RoutePrefix("api/comment")]
    public class CommentController : ApiController
    {
        [HttpPost]
        [Route("create")]
        [System.Web.Http.Authorize(Roles = "Manager, Staff")]
        public IHttpActionResult AddComment(CreateCommentModel createCommentModel)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }

                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    ProjectService projectService = new ProjectService(db);
                    NotificationService notificationService = new NotificationService(db);

                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    if (!taskService.IsAssigneeOfTask(currentUserId, createCommentModel.TaskID) &&
                        !taskService.IsManagerOfTask(currentUserId, createCommentModel.TaskID))
                    {
                        return Content(HttpStatusCode.Unauthorized, ResponseHelper.GetExceptionResponse(
                            $"The person who do this action must be assigned member of task with ID {createCommentModel.TaskID}"
                        ));
                    }

                    string userIdString = User.Identity.GetUserId();
                    CommentService commentService = new CommentService(db);
                    Comment newComment = commentService.CreateComment(
                        createCommentModel.Body,
                        createCommentModel.TaskID,
                        Int32.Parse(userIdString)
                    );
                    Project project = projectService.GetProjectOfTask(createCommentModel.TaskID);

                    NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                    NotificationSentence sentence = builder.AddCommentSentence(
                        currentUserId,
                        createCommentModel.TaskID,
                        project.ID);
                    IEnumerable<User> notifiedUsers =
                        notificationService.NotifyToUsersOfTask(createCommentModel.TaskID, sentence);
                    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                    if (context != null)
                    {
                        context.Clients.All.updateNotification(new JArray(notifiedUsers.Select(user => user.ID)));
                    }

                    return Ok(ResponseHelper.GetResponse(commentService.ParseToJson(newComment,
                        avatarPath: AgencyConfig.AvatarPath)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        [HttpPut]
        [Route("update")]
        [System.Web.Http.Authorize(Roles = "Manager, Staff")]
        public IHttpActionResult UpdateComment(UpdateCommentModel updateCommentModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    var taskId = db.Comments.Find(updateCommentModel.id).TaskID;
                    if (!taskService.IsAssigneeOfTask(currentUserId, taskId) &&
                        !taskService.IsManagerOfTask(currentUserId, taskId))
                    {
                        return Content(HttpStatusCode.UnsupportedMediaType, ResponseHelper.GetExceptionResponse(
                            $"the person who do this action must be assigned member of task with ID {taskId}"
                        ));
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
                        return Ok(ResponseHelper.GetResponse(commentService.ParseToJson(updatedComment,
                            avatarPath: AgencyConfig.AvatarPath)));
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