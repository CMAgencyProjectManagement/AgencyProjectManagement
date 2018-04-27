using System;
using System.Net;
using System.Web.Http;
using Newtonsoft.Json.Linq;
using Web.ViewModels;

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
                    ["penatyPercent"] = AgencyConfig.penatyPercent,
                    ["minAge"] = AgencyConfig.minAge
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
        public IHttpActionResult SetConfigs(SetConfigViewModel configViewModel)
        {
            try
            {
                if (configViewModel.PenatyPercent < 0 || configViewModel.PenatyPercent > 100)
                {
                    ModelState.AddModelError("PenatyPercent", "Penaty percent must be between 0 and 100");
                }

                if (configViewModel.MaxDuration < 1)
                {
                    ModelState.AddModelError("MaxDuration", "Max duration must be larger than 0");
                }

                if (configViewModel.LowPoint < 1)
                {
                    ModelState.AddModelError("LowPoint", "Low priority point must be larger or equal to 1");
                }

                if (configViewModel.MediumPoint < 1)
                {
                    ModelState.AddModelError("MediumPoint", "Medium priority point must be larger or equal to 1");
                }

                if (configViewModel.HighPoint < 1)
                {
                    ModelState.AddModelError("HightPoint", "High priority point must be larger or equal to 1");
                }

                //http://www.ilo.org/global/standards/subjects-covered-by-international-labour-standards/child-labour/lang--en/index.htm
                if (configViewModel.MinAge < 13)
                {
                    ModelState.AddModelError("MinAge", "Minimun age point must be larger or equal to 13");
                }


                if (ModelState.IsValid)
                {
                    AgencyConfig.lowPoint = configViewModel.LowPoint;
                    AgencyConfig.mediumPoint = configViewModel.MediumPoint;
                    AgencyConfig.highPoint = configViewModel.HighPoint;
                    AgencyConfig.penatyPercent = configViewModel.PenatyPercent;
                    AgencyConfig.lowPoint = configViewModel.LowPoint;
                    AgencyConfig.minAge = configViewModel.MinAge;


                    JObject jObject = new JObject
                    {
                        ["lowPriorityPoint"] = AgencyConfig.lowPoint,
                        ["mediumPriorityPoint"] = AgencyConfig.mediumPoint,
                        ["highPriorityPoint"] = AgencyConfig.highPoint,
                        ["maxDuration"] = AgencyConfig.maxDuration,
                        ["penatyPercent"] = AgencyConfig.penatyPercent,
                        ["minAge"] = AgencyConfig.minAge
                    };

                    return Ok(ResponseHelper.GetResponse(jObject));
                }
                
                return Content(HttpStatusCode.BadRequest,
                    ResponseHelper.GetExceptionResponse(ModelState));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
    }
}