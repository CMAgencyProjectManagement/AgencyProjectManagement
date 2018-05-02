using Entity;
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
        [HttpDelete]
        [Route("{checkListId:int}/item/{checklistItemId:int}")]
        [Authorize(Roles = "Manager")]
        public IHttpActionResult DeleteChecklistItem(int checkListId, int checklistItemId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ChecklistService checklistService = new ChecklistService(db);
                    UserService userService = new UserService(db);
                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);
                    //Check if item belong to check list

                    var checkListItemIdsOfCheckList = db.CheckListItems.Where(x => x.CheckListID == checkListId).Select(x=> x.ID);
                    int count = 0;
                    foreach (var item in checkListItemIdsOfCheckList)
                    {
                        if (checklistItemId == item)
                        {
                            count = count + 1;
                        }
                    }
                    if (count == 0)
                    {
                        return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(
                            $"Check List with Id {checkListId} don't have item with ID {checklistItemId}"));
                    }
                    //end check
                    checklistService.DeleteChecklistItem(checklistItemId, currentUser.ID);
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

        
        [HttpPut]
        [Route("{checkListId:int}")]
        [Authorize(Roles = "Manager")]
        public IHttpActionResult UpdateCheckList(int checkListId, UpdateCheckListModel updateCheckListModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TaskService taskService = new TaskService(db);
                    ChecklistService checklistService = new ChecklistService(db);
                    UserService userService = new UserService(db);
                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    User currentUser = userService.GetUser(currentUserId);
                    CheckList checkList = db.CheckLists.Find(checkListId);
                    if (!taskService.IsManagerOfTask(currentUserId, checkList.TaskID))
                        return Ok(ResponseHelper.GetExceptionResponse(
                            "User have to be manager of this task to edit task or task not belong to any department"));
                    var UpdatedCheckList = checklistService.UpdateCheckList(
                        checkListId,
                        updateCheckListModel.Name,
                        currentUserId,
                        DateTime.Now.Date
                        );
                    return Ok(ResponseHelper.GetResponse(checklistService.ParseToJson(UpdatedCheckList)));
                }

            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        [HttpPut]
        [Route("{checkListId:int}/item/{checklistItemId:int}")]
        [Authorize(Roles = "Manager")]
        public IHttpActionResult UpdateCheckListItem(int checkListId, int checklistItemId, UpdateCheckListItemModel updateCheckListItemModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ChecklistService checklistService = new ChecklistService(db);
                    UserService userService = new UserService(db);
                    TaskService taskService = new TaskService(db);
                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    CheckList checkList = db.CheckLists.Find(checkListId);
                    User currentUser = userService.GetUser(currentUserId);
                    if (!taskService.IsManagerOfTask(currentUserId, checkList.TaskID))
                        return Ok(ResponseHelper.GetExceptionResponse(
                            "User have to be manager of this task to edit task or task not belong to any department"));

                    //Check if item belong to check list
                    var checkListItemIdsOfCheckList = db.CheckListItems.Where(x => x.CheckListID == checkListId).Select(x => x.ID);
                    int count = 0;
                    foreach (var item in checkListItemIdsOfCheckList)
                    {
                        if (checklistItemId == item)
                        {
                            count = count + 1;
                        }
                    }
                    if (count == 0)
                    {
                        return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(
                            $"Check List with Id {checkListId} don't have item with ID {checklistItemId}"));
                    }
                    //end check
                    var UpdatedCheckListItem = checklistService.UpdateCheckListItem(
                       checklistItemId,
                       updateCheckListItemModel.Name,
                       currentUserId,
                       DateTime.Now.Date
                       );
                    return Ok(ResponseHelper.GetResponse(checklistService.ParseToJson(checkList)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        [HttpPut]
        [Route("{checkListId:int}/checkitem/{checklistItemId:int}")]
        [Authorize]
        public IHttpActionResult CheckCheckListItem(int checkListId, int checklistItemId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ChecklistService checklistService = new ChecklistService(db);
                    UserService userService = new UserService(db);
                    TaskService taskService = new TaskService(db);
                    int currentUserId = Int32.Parse(User.Identity.GetUserId());
                    CheckList checkList = db.CheckLists.Find(checkListId);
                    User currentUser = userService.GetUser(currentUserId);
                    //Check if item belong to check list
                    var checkListItemIdsOfCheckList = db.CheckListItems.Where(x => x.CheckListID == checkListId).Select(x => x.ID);
                    int count = 0;
                    foreach (var item in checkListItemIdsOfCheckList)
                    {
                        if (checklistItemId == item)
                        {
                            count = count + 1;
                        }
                    }
                    if (count == 0)
                    {
                        return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(
                            $"Check List with Id {checkListId} don't have item with ID {checklistItemId}"));
                    }
                    //end check
                    checklistService.CheckCheckListItem(checklistItemId, currentUserId);
                    return Ok(ResponseHelper.GetResponse(checklistService.ParseToJson(checkList)));
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