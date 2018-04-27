using System.Collections.Generic;
using System.Data.Entity.Core.Common.CommandTrees;
using System.Linq;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class NotificationService
    {
        private CmAgencyEntities db;

        public NotificationService(CmAgencyEntities db)
        {
            this.db = db;
        }

        public void NotifyToUsersOfTask(int taskId, NotificationSentence sentence)
        {
            TaskService taskService = new TaskService(db);
            IEnumerable<User> staffs = taskService.getTaskAssignee(taskId);
            IEnumerable<User> managers = taskService.GetManagersOfTask(taskId);
            IEnumerable<User> followers = taskService.GetFollowersOfTask(taskId);

            IEnumerable<User> usersToNotify = staffs
                .Union(managers)
                .Union(followers)
                .ToList();

            Notification notification = new Notification
            {
                Content = sentence.ToString(),
                Type = 1
            };
            Notify(notification, usersToNotify);
        }

        public void NotifyToUsersOfProject(int projectId)
        {
        }

        public void NotifyToUsersOfDepartment(int teamId)
        {
        }

        public void CheckinNotification(int userId)
        {
            UserService userService = new UserService(db);
            User user = userService.GetUser(userId);

            IEnumerable<NotificationUser> notificationUsers = db.NotificationUsers
                .Where(notificationUser => notificationUser.UserID == user.ID);
            foreach (var notificationUser in notificationUsers)
            {
                notificationUser.IsRead = false;
            }

            db.SaveChanges();
        }

        public IEnumerable<NotificationUser> GetNotificationsOfUser(int userId)
        {
            IEnumerable<NotificationUser> notificationUsers = db.NotificationUsers
                .Where(notificationUser => notificationUser.UserID == userId);
            return notificationUsers;
        }

        public void Notify(Notification notification, IEnumerable<User> users)
        {
            db.Notifications.Add(notification);
            db.SaveChanges();

            List<NotificationUser> notificationUsers = new List<NotificationUser>();
            foreach (User user in users)
            {
                NotificationUser notificationUser = new NotificationUser
                {
                    NotificationID = notification.ID,
                    UserID = user.ID,
                    IsRead = false
                };
                notificationUsers.Add(notificationUser);
            }

            db.NotificationUsers.AddRange(notificationUsers);
            db.SaveChanges();
        }

        public JObject ParseToJson(NotificationUser notificationUser)
        {
            Notification notification = notificationUser.Notification;
            JObject result = new JObject
            {
                ["isRead"] = notificationUser.IsRead,
                ["content"] = notification.Content
            };

            return result;
        }
    }
}