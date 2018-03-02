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
                // Call service
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