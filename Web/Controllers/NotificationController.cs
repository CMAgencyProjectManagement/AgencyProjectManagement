using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using Entity;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json.Linq;
using Service;

namespace Web.Controllers
{
    [RoutePrefix("api/notification")]
    public class NotificationController : ApiController
    {
        [HttpGet]
        [Route("")]
        [Authorize]
        public IHttpActionResult GetNotificationOfCurrentUser()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    NotificationService notificationService = new NotificationService(db);
                    int userId = Int32.Parse(User.Identity.GetUserId());
                    User user = userService.GetUser(userId);
                    IEnumerable<NotificationUser> notificationUsers = notificationService.GetNotificationsOfUser(user.ID);

                    IEnumerable<JObject> notificationsJson = notificationUsers
                        .Reverse()
                        .Take(50)
                        .Select(notificationUser => notificationService.ParseToJson(notificationUser));
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
        [Authorize]
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
                    IEnumerable<NotificationUser> notificationUsers = notificationService.GetNotificationsOfUser(user.ID);

                    IEnumerable<JObject> notificationsJson = notificationUsers
                        .Select(notificationUser => notificationService.ParseToJson(notificationUser));
                    return Ok(ResponseHelper.GetResponse(new JArray(notificationsJson)));
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