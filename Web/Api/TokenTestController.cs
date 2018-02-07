using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Web.Api
{
    public class TokenTestController : ApiController
    {
        // GET api/<controller>
        [Authorize]
        public IEnumerable<string> GetStaff()
        {
            return new string[] {"value1", "value2"};
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        public IEnumerable<string> GetAdmin()
        {
            return new string[] {"value1", "value2", "admin"};
        }

        [HttpGet]
        [Authorize(Roles = "Manager")]
        public IEnumerable<string> GetManager()
        {
            return new string[] {"value1", "value2", "manager"};
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