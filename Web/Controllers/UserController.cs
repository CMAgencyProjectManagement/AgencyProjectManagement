using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.WebSockets;
using Entity;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json.Linq;
using Service;
using Web.ViewModels;

namespace Web.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        [HttpGet]
        [Route("{id:int}")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult GetUser(int id)
        {
            try
            {
                //Dont expose password
                User user = UserService.GetUser(id);
                string avatarPath = AgencyConfig.AvatarPath;

                return Ok(ResponseHelper.GetResponse(user.ToJson(avatarPath)));
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
        public IHttpActionResult GetUser()
        {
            try
            {
                string userIdString = User.Identity.GetUserId();
                User user = UserService.GetUser(userIdString);
                string avatarPath = AgencyConfig.AvatarPath;
                return Ok(ResponseHelper.GetResponse(user.ToJson(avatarPath)));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("all")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult GetAllUser()
        {
            try
            {
                IEnumerable<User> allUser = UserService.GetAll();
                string avatarPath = AgencyConfig.AvatarPath;

                JArray data = new JArray();

                foreach (User user in allUser)
                {
                    //Dont expose password
                    data.Add(user.ToJson(avatarPath));
                }

                return Ok(ResponseHelper.GetResponse(data));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("all/{page:int}")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult GetAllUser(int page)
        {
            try
            {
                IEnumerable<User> allUser = UserService.GetAll();
                string avatarPath = AgencyConfig.AvatarPath;

                JArray data = new JArray();

                foreach (User user in allUser)
                {
                    //Dont expose password
                    data.Add(user.ToJson(avatarPath));
                }

                return Ok(ResponseHelper.GetResponse(data));
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
//        public Task<IHttpActionResult> CreateUser(CreateUserModel createUserModel)
        public IHttpActionResult CreateUser()
        {
            try
            {
                if (!Request.Content.IsMimeMultipartContent())
                    throw new Exception();


                //Get raw form data
                string username = HttpContext.Current.Request.Form["Username"];
                string password = HttpContext.Current.Request.Form["Password"];
                string name = HttpContext.Current.Request.Form["Name"];
                string phone = HttpContext.Current.Request.Form["Phone"];
                string birthdateString = HttpContext.Current.Request.Form["Birthdate"];
                string email = HttpContext.Current.Request.Form["Email"];
                HttpPostedFile avatarFile = HttpContext.Current.Request.Files.Count > 0
                    ? HttpContext.Current.Request.Files[0]
                    : null;


                //Validate against view model 
                var validationResults = new List<ValidationResult>();

                DateTime? birthDate = null;
                if (!String.IsNullOrEmpty(birthdateString))
                {
                    try
                    {
                        birthDate = DateTime.Parse(birthdateString);
                    }
                    catch (FormatException ex)
                    {
                        validationResults.Add(new ValidationResult(ex.Message));
                    }
                }

                var createUserModel = new CreateUserModel
                {
                    Name = name,
                    Phone = phone,
                    Birthdate = birthDate,
                    Email = email,
                    Username = username,
                    Password = password,
                    Avatar = avatarFile
                };

                var context = new ValidationContext(createUserModel, null, null);
                bool isValid = Validator.TryValidateObject(createUserModel, context, validationResults, true);
                if (!isValid)
                {
                    return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(validationResults));
                }

                // Call service
                User newUser = UserService.CreateAccount(
                    createUserModel.Name,
                    createUserModel.Phone,
                    createUserModel.Birthdate,
                    createUserModel.Email,
                    createUserModel.Username,
                    createUserModel.Password,
                    avatarFile?.FileName
                );

                //Save avatar file
                if (avatarFile != null)
                {
                    string serverPath = HttpContext.Current.Server.MapPath("~");
                    //To remove first / char for combine to work
                    string avatarDirPath = AgencyConfig.AvatarPath.Substring(1);

                    string path = Path.Combine(serverPath, avatarDirPath, avatarFile.FileName);
                    using (FileStream fileStream = File.Create(path))
                    {
                        avatarFile.InputStream.CopyTo(fileStream);
                    }
                }

                return Ok(ResponseHelper.GetResponse(newUser.ToJson()));
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
        public IHttpActionResult UpdateUser(CreateUserModel createUserModel)
        {
            try
            {
                throw new NotImplementedException();
/*
                User newUser = UserService.CreateAccount(
                    createUserModel.Username,
                    createUserModel.Password,
                    createUserModel.Avatar
                );
                //Dont expose password
                JObject dataObject = new JObject
                {
                    ["id"] = newUser.ID,
                    ["name"] = newUser.Name,
                    ["phone"] = newUser.Phone,
                    ["birthday"] = newUser.Birthdate,
                    ["email"] = newUser.Email,
                    ["username"] = newUser.Username,
                    ["avatar"] = newUser.Avatar,
                    ["isAdmin"] = newUser.IsAdmin
                };
                return Ok(ResponseHelper.GetResponse(dataObject));
*/
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
    }
}