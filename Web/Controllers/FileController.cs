using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Newtonsoft.Json.Linq;
using Service;

namespace Web.Controllers
{
    [RoutePrefix("api/file")]
    public class FileController : ApiController
    {
        [HttpPut]
        [Route("user/{id:int}/avatar")]
        [Authorize(Roles = "Admin")]
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
                    UserService.UpdateAvatar(avatarFile.FileName, id);
                    string path = Path.Combine(
                        HttpContext.Current.Server.MapPath("~"),
                        AgencyConfig.AvatarPath.Substring(1),
                        avatarFile.FileName
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
    }
}