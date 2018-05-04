using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using Entity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json.Linq;
using Service;
using Web.Hubs;

namespace Web.Controllers
{
    [RoutePrefix("api/notification")]
    public class NotificationController : ApiController
    {
        [HttpGet]
        [Route("")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetNotificationOfCurrentUser()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    NotificationService notificationService = new NotificationService(db);
                    int userId = Int32.Parse(User.Identity.GetUserId());
                    User currentUser = userService.GetUser(userId);
                    IEnumerable<NotificationUser> notificationUsers = notificationService
                        .GetNotificationsOfUser(currentUser.ID)
                        .Reverse()
                        .Take(50);

                    IEnumerable<JObject> notificationsJson = notificationService
                        .FormatNotificationForUser(notificationUsers, currentUser);
                    
                    return Ok(ResponseHelper.GetResponse(new JArray(notificationsJson)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
            
            
        }

        [HttpPut]
        [Route("checkin")]
        [System.Web.Http.Authorize]
        public IHttpActionResult CheckinNotification()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    NotificationService notificationService = new NotificationService(db);
                    int userId = Int32.Parse(User.Identity.GetUserId());
                    User user = userService.GetUser(userId);
                    notificationService.CheckinNotification(user.ID);

                    return Ok(ResponseHelper.GetResponse());
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