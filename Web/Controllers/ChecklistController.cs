﻿using Entity;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json.Linq;
using Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using Web.ViewModels;

namespace Web.Controllers
{
    [RoutePrefix("api/checklist")]
    public class ChecklistController : ApiController
    {
        //[HttpGet]
        //[Route("all")]
        //[System.Web.Http.Authorize(Roles = "Admin")]

        [HttpPost]
        [Route("")]
        [System.Web.Http.Authorize(Roles = "Manager")]
        public IHttpActionResult CreateCheckList(CreateChecklistModel createChecklistModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ChecklistService checklistService = new ChecklistService(db);
                        UserService userService = new UserService(db);
                        string loginedUserId = User.Identity.GetUserId();
                        User creator = userService.GetUser(loginedUserId);
                        CheckList newCheckList = checklistService.CreateChecklist(
                            createChecklistModel.Name,
                            (int)createChecklistModel.TaskId,
                            creator
                            );
                        JObject dataObject = checklistService.ParseToJson(newCheckList);
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

        [HttpDelete]
        [Route("{checkListId:int}")]
        [Authorize(Roles = "Manager")]
        public IHttpActionResult DeleteChecklist(int checkListId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ChecklistService checklistService = new ChecklistService(db);
                    UserService userService = new UserService(db);
                    NotificationService notificationService = new NotificationService(db);
                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);
                    checklistService.DeleteChecklist(checkListId, currentUser.ID);
                    return Ok(ResponseHelper.GetResponse());
                }

            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpPost]
        [Route("item")]
        [Authorize(Roles = "Manager")]
        public IHttpActionResult CreateChecklistItem(CreateCheckListItemModel createCheckListItemModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ChecklistService checklistService = new ChecklistService(db);
                        UserService userService = new UserService(db);
                        string loginedUserId = User.Identity.GetUserId();
                        User creator = userService.GetUser(loginedUserId);
                        CheckListItem newCheckListItem = checklistService.CreateChecklistItem(
                            createCheckListItemModel.Name,
                            (int)createCheckListItemModel.CheckListId,
                            creator
                            );
                        JObject dataObject = checklistService.ParseToJson(db.CheckLists.Find(createCheckListItemModel.CheckListId));
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

        [HttpDelete]
        [Route("{checkListId:int}/item/{checklistItemId:int}")]
        [Authorize(Roles = "Manager")]
        public IHttpActionResult DeleteChecklistItem()
        {
            try
            {
                throw new NotImplementedException();
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
    }
}