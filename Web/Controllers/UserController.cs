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
        public IHttpActionResult GetCurrentUser()
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

        [HttpPost]
        [Route("")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult CreateUser(CreateUserModel createUserModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    User newUser = UserService.CreateAccount(
                        createUserModel.Name,
                        createUserModel.Phone,
                        createUserModel.Birthdate,
                        createUserModel.Email,
                        createUserModel.Username,
                        createUserModel.Password
                    );
                    return Ok(ResponseHelper.GetResponse(newUser.ToJson()));
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

        [HttpDelete]
        [Route("")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult DeactiveUser(DeleteUserModel deleteUserModel)
        {
            try
            {
                int id = UserService.DeactiveUser(deleteUserModel.ID);
                return Ok(ResponseHelper.GetResponse(new JObject
                {
                    ["id"] = id
                }));
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
        public IHttpActionResult UpdateUser(UpdateUserModel updateUserModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    User updatedUser = UserService.Updateuser(
                        updateUserModel.ID,
                        updateUserModel.Name,
                        updateUserModel.Phone,
                        updateUserModel.Birthdate,
                        updateUserModel.Email
                    );
                    return Ok(ResponseHelper.GetResponse(updatedUser.ToJson()));
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