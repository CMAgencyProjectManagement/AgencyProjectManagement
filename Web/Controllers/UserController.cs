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
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    //Dont expose password
                    User user = userService.GetUser(id);
                    string avatarPath = AgencyConfig.AvatarPath;

                    return Ok(ResponseHelper.GetResponse(userService.ParseToJson(user, avatarPath)));
                }
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
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    string userIdString = User.Identity.GetUserId();
                    User user = userService.GetUser(userIdString);
                    string avatarPath = AgencyConfig.AvatarPath;
                    return Ok(ResponseHelper.GetResponse(userService.ParseToJson(user, avatarPath)));
                }
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
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    IEnumerable<User> allUser = userService.GetAll();
                    string avatarPath = AgencyConfig.AvatarPath;

                    JArray data = new JArray();

                    foreach (User user in allUser)
                    {
                        //Dont expose password
                        data.Add(userService.ParseToJson(user, avatarPath, includeTeam: true));
                    }

                    return Ok(ResponseHelper.GetResponse(data));
                }
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

                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {

                        UserService userService = new UserService(db);
                        Boolean flag = true;
                        if (userService.CheckDuplicatedUsername(createUserModel.Username))
                        {
                            ModelState.AddModelError("Username", "Username is taken");
                            //return Content(HttpStatusCode.BadRequest,ResponseHelper.GetExceptionResponse(ModelState));
                            flag = false;
                        }
                        
                        if (createUserModel.Birthdate != null)
                        {
                            if (DateTime.Parse(createUserModel.Birthdate) > DateTime.Now)
                            {
                                ModelState.AddModelError("Birthdate", "Birthdate must be smaller than the current time ");
                                // return Content(HttpStatusCode.BadRequest,ResponseHelper.GetExceptionResponse(ModelState));
                                flag = false;
                            }
                        }
                        if(flag == false) return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                        DateTime? birthdate = null;
                        if (createUserModel.Birthdate != null)
                        {
                            DateTime dt;
                            if (DateTime.TryParse(createUserModel.Birthdate, out dt))
                            {
                                birthdate = dt;
                            }
                        }

                        User newUser = userService.CreateAccount(
                            createUserModel.Name,
                            createUserModel.Phone,
                            birthdate,
                            createUserModel.Email,
                            createUserModel.Username,
                            createUserModel.Password,
                            createUserModel.Team.Value
                        );
                        return Ok(ResponseHelper.GetResponse(userService.ParseToJson(newUser)));
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

        [HttpDelete]
        [Route("")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult DeactiveUser(DeleteUserModel deleteUserModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    userService.DeactiveUser(deleteUserModel.ID);
                    return Ok();
                }
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
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        UserService userService = new UserService(db);
                        if (updateUserModel.Birthdate > DateTime.Now)
                        {
                            ModelState.AddModelError("Birthdate", "Birthdate is greater than the current time ");
                            return Content(HttpStatusCode.BadRequest,
                            ResponseHelper.GetExceptionResponse(ModelState));
                        }
                        User updatedUser = userService.Updateuser(
                            updateUserModel.ID,
                            updateUserModel.Name,
                            updateUserModel.Phone,
                            updateUserModel.Birthdate,
                            updateUserModel.Email
                        );
                        return Ok(ResponseHelper.GetResponse(userService.ParseToJson(updatedUser)));
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