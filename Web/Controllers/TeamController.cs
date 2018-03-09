using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Entity;
using Newtonsoft.Json.Linq;
using Service;

namespace Web.Controllers
{
    [RoutePrefix("api/team")]
    public class TeamController : ApiController
    {
        [HttpGet]
        [Route("all")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult GetAllTeam()
        {
            try
            {
                var teams = TeamService.GetAll();
                JArray dataObject = new JArray();
                foreach (var team in teams)
                {
                    dataObject.Add(team.ToJson());
                }

                return Ok(ResponseHelper.GetResponse(dataObject));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        [Authorize(Roles = "Admin,Manager")]
        public IHttpActionResult GetTeamDetail(int id)
        {
            try
            {
                var team = TeamService.GetTeamById(id);
                if (team != null)
                {
                    return Ok(ResponseHelper.GetResponse(team.ToJson(includeUsers: true)));
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,$"Can't find team with ID {id}");
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpDelete]
        [Route("{id:int}")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult DeleteTeam(int id)
        {
            try
            {
                var teams = TeamService.GetAll();
                var team = TeamService.GetTeamById(id);
                teams.Remove(team);
                return Ok();
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
    }
}