using System;
using System.Collections.Generic;
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
                //Dont expose password
                User user = UserService.GetUser(id);

                return Ok(ResponseHelper.GetResponse(user.ToJson()));
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
                return Ok(ResponseHelper.GetResponse(user.ToJson()));
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

                JArray data = new JArray();

                foreach (User user in allUser)
                {
                    //Dont expose password
                    data.Add(user.ToJson());
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
                User newUser = UserService.CreateAccount(
                    createUserModel.Username,
                    createUserModel.Password,
                    createUserModel.Avatar
                );
                return Ok(ResponseHelper.GetResponse(newUser.ToJson()));
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