using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Entity;
using Newtonsoft.Json.Linq;
using Service;

namespace Web.Controllers
{
    [RoutePrefix("api/file")]
    public class FileController : ApiController
    {
        [HttpPut]
        [Route("user/{id:int}/avatar")]
        [Authorize(Roles = "Staff")]
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
        [Route("task/{id:int}")]
        [Authorize(Roles = "Staff")]
        public IHttpActionResult UploadAttachment(int taskId)
        {
            try
            {
                if (!Request.Content.IsMimeMultipartContent())
                {
                    return Content(HttpStatusCode.UnsupportedMediaType,
                        ResponseHelper.GetExceptionResponse("Not supported media type"));
                }

                HttpPostedFile attachment = HttpContext.Current.Request.Files.Count > 0
                    ? HttpContext.Current.Request.Files["attachment"]
                    : null;


                if (attachment != null)
                {

                    return null;
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse("No attachment file found"));
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