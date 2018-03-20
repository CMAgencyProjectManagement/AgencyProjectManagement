﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Entity;
using Newtonsoft.Json.Linq;
using Service;
using Web.ViewModels;

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
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TeamService teamService = new TeamService(db);
                    var teams = teamService.GetAll();
                    JArray dataObject = new JArray();
                    foreach (var team in teams)
                    {
                        dataObject.Add(teamService.ParseToJson(team));
                    }

                    return Ok(ResponseHelper.GetResponse(dataObject));
                }
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
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TeamService teamService = new TeamService(db);
                    var team = teamService.GetTeamById(id);
                    if (team != null)
                    {
                        return Ok(ResponseHelper.GetResponse(
                            teamService.ParseToJsonVer2(team, includeUsers: true, isDetailed: true)
                        ));
                    }
                    else
                    {
                        return Content(HttpStatusCode.BadRequest, $"Can't find team with ID {id}");
                    }
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        [HttpPut]
        [Route("assign")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult AssignTeam(AssignTeamModel assignTeamModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        UserService userService = new UserService(db);
                        TeamService teamService = new TeamService(db);
                        User assignTeamMember = teamService.AssignTeam(
                            assignTeamModel.ID,
                            assignTeamModel.TeamId
                            );
                        return Ok(ResponseHelper.GetResponse(userService.ParseToJson(assignTeamMember, includeTeam: true)));
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
        [HttpPut]
        [Route("unassign")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult UnAssignTeam(UnAssignTeamModel unAssignTeamModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        UserService userService = new UserService(db);
                        TeamService teamService = new TeamService(db);
                        User assignTeamMember = teamService.UnAssignTask(
                            unAssignTeamModel.ID
                            );
                        return Ok(ResponseHelper.GetResponse(userService.ParseToJson(assignTeamMember, includeTeam: true)));
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