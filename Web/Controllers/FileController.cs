using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Http;
using Entity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json.Linq;
using Service;
using Web.Hubs;

namespace Web.Controllers
{
    [RoutePrefix("api/file")]
    public class FileController : ApiController
    {
        [HttpPut]
        [Route("user/{id:int}/avatar")]
        [System.Web.Http.Authorize(Roles = "Admin, Manager, Staff")]
        public IHttpActionResult UploadAvatar(int id)
        {
            try
            {
                if (!Request.Content.IsMimeMultipartContent())
                {
                    return Content(HttpStatusCode.UnsupportedMediaType,
                        ResponseHelper.GetExceptionResponse("Not supported media type"));
                }

                HttpPostedFile avatarFile = HttpContext.Current.Request.Files.Count > 0
                    ? HttpContext.Current.Request.Files["avatar"]
                    : null;


                if (avatarFile != null)
                {
                    string[] supportedImageFileTypes = AgencyConfig.supportedImageTypes;
                    // image/gif
                    if (!supportedImageFileTypes.Contains(avatarFile.ContentType.Split('/').Last()))
                    {
                        return Content(HttpStatusCode.BadGateway,
                            ResponseHelper.GetExceptionResponse("Not supported image file type"));
                    }

                    //lưu tên file avatar vào db
                    var renameFile = "avatar_" + id + Path.GetExtension(avatarFile.FileName);

                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        UserService userService = new UserService(db);
                        userService.UpdateAvatar(renameFile, id);
                    }

                    //map path và sửa tên file theo regex 'avatar_[username]'
                    string path = Path.Combine(
                        HttpContext.Current.Server.MapPath("~"),
                        AgencyConfig.AvatarPath.Substring(1),
                        renameFile
                    );

                    Directory.CreateDirectory(Path.GetDirectoryName(path));
                    using (FileStream fileStream = File.Create(path))
                    {
                        avatarFile.InputStream.CopyTo(fileStream);
                    }

                    JObject dataObject = new JObject
                    {
                        ["avatar"] = path
                    };
                    return Ok(ResponseHelper.GetResponse(dataObject));
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse("No avatar file found"));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        [HttpPut]
        [Route("task/{taskId:int}/attachment")]
        [System.Web.Http.Authorize(Roles = "Admin, Manager, Staff")]
        public IHttpActionResult UploadAttachment(int taskId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    if (!taskService.IsAssigneeOfTask(currentUserId, taskId))
                    {
                        return Content(HttpStatusCode.UnsupportedMediaType,
                            ResponseHelper.GetExceptionResponse(
                                $"the person who do this action must be assigned member of task with ID {taskId}"));
                    }
                }

                if (!Request.Content.IsMimeMultipartContent())
                {
                    return Content(HttpStatusCode.UnsupportedMediaType,
                        ResponseHelper.GetExceptionResponse("Not supported media type"));
                }

                HttpPostedFile attachment = HttpContext.Current.Request.Files.Count > 0
                    ? HttpContext.Current.Request.Files["attachment"]
                    : null;


                if (attachment == null)
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse("No attachment file found"));
                }


                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    AttachmentService attachmentService = new AttachmentService(db);
                    UserService userService = new UserService(db);
                    ProjectService projectService = new ProjectService(db);
                    NotificationService notificationService = new NotificationService(db);
                    Project project = projectService.GetProjectOfTask(taskId);
                    string attachmentPath = Path.Combine(
                        $"project_{project.ID}",
                        $"task_{taskId}"
                    );
                    string filename = attachment.FileName;
                    string path = Path.Combine(
                        HttpContext.Current.Server.MapPath("~"),
                        AgencyConfig.AttachmentPath.Substring(1),
                        attachmentPath,
                        filename
                    );

                    path = getDeDeupFile(path);

                    Directory.CreateDirectory(Path.GetDirectoryName(path));
                    using (FileStream newfileStream = File.Create(path))
                    {
                        attachment.InputStream.CopyTo(newfileStream);
                    }

                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);
                    Attachment attachmentResult = attachmentService.AddAttachment(
                        Path.GetFileName(path), attachmentPath, taskId, currentUser.ID, DateTime.Today
                    );

                    NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                    NotificationSentence sentence = builder.AddAttachmentSentence(
                        currentUser.ID,
                        attachmentResult.ID,
                        taskId,
                        project.ID);

                    IEnumerable<User> notifiedUsers =
                        notificationService.NotifyToUsersOfTask(taskId, sentence);
                    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                    if (context != null)
                    {
                        context.Clients.All.updateNotification(new JArray(notifiedUsers.Select(user => user.ID)));
                    }

                    return Ok(ResponseHelper.GetResponse(
                        attachmentService.ParseToJson(attachmentResult, AgencyConfig.AttachmentPath))
                    );
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        [HttpPut]
        [Route("attachment/{attId:int}/delete")]
        [System.Web.Http.Authorize(Roles = "Admin, Manager, Staff")]
        public IHttpActionResult DeleteAttachment(int attId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    ProjectService projectService = new ProjectService(db);
                    NotificationService notificationService = new NotificationService(db);
                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    var taskId = db.Attachments.Find(attId).TaskID;
                    if (!taskService.IsAssigneeOfTask(currentUserId, taskId))
                    {
                        return Content(HttpStatusCode.UnsupportedMediaType,
                            ResponseHelper.GetExceptionResponse(
                                $"the person who do this action must be assigned member of task with ID {taskId}"));
                    }

                    AttachmentService attachmentService = new AttachmentService(db);
                    Attachment attachment = attachmentService.GetAttachment(attId);
                    Project project = projectService.GetProjectOfTask(attachment.TaskID);
                    string attachmentName = attachment.Name;
                    string path = Path.Combine(
                        HttpContext.Current.Server.MapPath("~"),
                        AgencyConfig.AttachmentPath.Substring(1),
                        attachment.Path,
                        attachment.Name
                    );

                    File.Delete(path);
                    attachmentService.DeleteAttachment(attId);
                    

                    NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                    NotificationSentence sentence = builder.RemoveAttachmentSentence(
                        currentUserId,
                        attachmentName,
                        taskId,
                        project.ID);

                    IEnumerable<User> notifiedUsers =
                        notificationService.NotifyToUsersOfTask(taskId, sentence);
                    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                    if (context != null)
                    {
                        context.Clients.All.updateNotification(new JArray(notifiedUsers.Select(user => user.ID)));
                    }

                    return Ok(ResponseHelper.GetResponse(new JObject
                        {
                            ["id"] = attId
                        }
                    ));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        //https://stackoverflow.com/questions/13049732/automatically-rename-a-file-if-it-already-exists-in-windows-way
        private string getDeDeupFile(string filepath)
        {
            if (File.Exists(filepath))
            {
                string folder = Path.GetDirectoryName(filepath);
                string filename = Path.GetFileNameWithoutExtension(filepath);
                string extension = Path.GetExtension(filepath);
                int number = 1;

                Match regex = Regex.Match(filepath, @"(.+) \((\d+)\)\.\w+");

                if (regex.Success)
                {
                    filename = regex.Groups[1].Value;
                    number = int.Parse(regex.Groups[2].Value);
                }

                do
                {
                    number++;
                    filepath = Path.Combine(folder, $"{filename} ({number}){extension}");
                } while (File.Exists(filepath));
            }

            return filepath;
        }
    }
}