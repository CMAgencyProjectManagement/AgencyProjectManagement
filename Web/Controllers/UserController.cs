using System;
using System.Net;
using System.Web.Http;
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
                User user = UserService.GetUser(id);
                JObject dataObject = new JObject
                {
                    ["id"] = user.ID,
                    ["username"] = user.Username,
                    ["avatar"] = user.Avatar,
                    ["isAdmin"] = user.IsAdmin
                };
                
                return Ok(ResponseHelper.GetResponse(dataObject));
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

                JObject dataObject = new JObject
                {
                    ["id"] = user.ID,
                    ["username"] = user.Username,
                    ["avatar"] = user.Avatar,
                    ["isAdmin"] = user.IsAdmin
                };

                return Ok(ResponseHelper.GetResponse(dataObject));
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
                User newUser = UserService.CreateAccount(
                    createUserModel.Username,
                    createUserModel.Password,
                    createUserModel.Avatar
                );
                //Dont expose password
                JObject dataObject = new JObject
                {
                    ["id"] = newUser.ID,
                    ["username"] = newUser.Username,
                    ["avatar"] = newUser.Avatar,
                    ["isAdmin"] = newUser.IsAdmin
                };
                return Ok(ResponseHelper.GetResponse(dataObject));
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
        public IHttpActionResult UpdateUser(CreateUserModel createUserModel)
        {
            try
            {
                User newUser = UserService.CreateAccount(
                    createUserModel.Username,
                    createUserModel.Password,
                    createUserModel.Avatar
                );
                //Dont expose password
                JObject dataObject = new JObject
                {
                    ["id"] = newUser.ID,
                    ["username"] = newUser.Username,
                    ["avatar"] = newUser.Avatar,
                    ["isAdmin"] = newUser.IsAdmin
                };
                return Ok(ResponseHelper.GetResponse(dataObject));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
    }
}