using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Remoting.Contexts;
using System.Web;
using System.Web.Http;
using Entity;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json.Linq;
using Service;

namespace Web.Api
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
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
                return InternalServerError(ex);
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        [Authorize]
        public IHttpActionResult GetUser(int id)
        {
            try
            {
                User user = UserService.GetUser(id);
                //                }

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
                return InternalServerError(ex);
            }
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}