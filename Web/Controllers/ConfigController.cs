using System;
using System.Linq;
using System.Net;
using System.Web.Http;
using Entity;
using Newtonsoft.Json.Linq;
using Service;

namespace Web.Controllers
{
    [RoutePrefix("api/config")]
    public class ConfigController : ApiController
    {
        [HttpGet]
        [Route("")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult GetConfigs()
        {
            try
            {
                JObject jObject = new JObject
                {
                    ["lowPriorityPoint"] = AgencyConfig.lowPoint,
                    ["mediumPriorityPoint"] = AgencyConfig.mediumPoint,
                    ["highPriorityPoint"] = AgencyConfig.highPoint,
                    ["maxDuration"] = AgencyConfig.maxDuration,
                    ["penatyPercent"] = AgencyConfig.penatyPercent
                };
                return Ok(ResponseHelper.GetResponse(jObject));
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
        public IHttpActionResult SetConfigs()
        {
            try
            {
                JObject jObject = new JObject
                {
                    ["lowPriorityPoint"] = AgencyConfig.lowPoint,
                    ["mediumPriorityPoint"] = AgencyConfig.mediumPoint,
                    ["highPriorityPoint"] = AgencyConfig.highPoint,
                    ["maxDuration"] = AgencyConfig.maxDuration,
                    ["penatyPercent"] = AgencyConfig.penatyPercent
                };
                return Ok(ResponseHelper.GetResponse(jObject));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
    }
}