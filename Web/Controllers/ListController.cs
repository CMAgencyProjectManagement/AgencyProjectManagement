﻿using Entity;
using Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Web.ViewModels;
using Newtonsoft.Json.Linq;
using System.Net;
using Entity.DAL;
using Entity.Models;

namespace Web.Controllers
{
    [RoutePrefix("api/list")]
    public class ListController : ApiController
    {
        [HttpPost]
        [Route("")]
        [Authorize(Roles = "Admin, Manager")]
        public IHttpActionResult CreateList(CreateListModel createListModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ListService listService = new ListService(db);
                        UserService userService = new UserService(db);
                        ProjectService projectService = new ProjectService(db);
                        List newList = listService.CreateList(
                            createListModel.ProjectID,
                            createListModel.Name
                            );
                        JObject dataObject = listService.ParseToJson(newList);
                        return Ok(ResponseHelper.GetResponse(dataObject));
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
        [Route("")]
        [Authorize(Roles = "Admin, Manager")]
        public IHttpActionResult DeleteList(DeleteListModel deleteListModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        int userId = Int32.Parse(User.Identity.GetUserId());
                        User user = db.Users.Find(userId);
                        ListService listService = new ListService(db);
                        //TaskService taskService = new TaskService(db);
                        listService.DeleteList(deleteListModel.ID,user);

                        return Ok(ResponseHelper.GetResponse());
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
        [Route("update")]
        [Authorize(Roles = "Admin, Manager")]
        public IHttpActionResult UpdateList(UpdateListModel updateListModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {

                        ListService listService = new ListService(db);
                        UserService userService = new UserService(db);
                        int userId = Int32.Parse(User.Identity.GetUserId());
                       // User user = db.Users.Find(userId);
                        var updateList = listService.UpdateList(
                            updateListModel.ID,
                            userId,
                            updateListModel.Name
                            );

                        return Ok(ResponseHelper.GetResponse(listService.ParseToJson(updateList)));
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