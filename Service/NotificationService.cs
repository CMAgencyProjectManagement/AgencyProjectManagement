using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity.Core.Common.CommandTrees;
using System.Linq;
using System.Web.UI.WebControls;
using Entity;
using Entity.DAL;
using Entity.Models;
using Microsoft.SqlServer.Server;
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

        public IEnumerable<User> NotifyToUsersOfTask(
            int taskId,
            NotificationSentence sentence,
            IEnumerable<User> additionalReceivers = null)
        {
            TaskService taskService = new TaskService(db);
            IEnumerable<User> staffs = taskService.GetTaskAssignee(taskId);
            IEnumerable<User> managers = taskService.GetManagersOfTask(taskId);
            IEnumerable<User> followers = taskService.GetFollowersOfTask(taskId);

            IEnumerable<User> usersToNotify = staffs
                .Union(managers)
                .Union(followers)
                .ToList();
            
            if (additionalReceivers != null)
            {
                usersToNotify = usersToNotify
                    .Union(additionalReceivers)
                    .ToList();
            }

            Notification notification = new Notification
            {
                Content = sentence.ToString(),
                Type = 1
            };
            Notify(notification, usersToNotify);

            return usersToNotify;
        }

        public IEnumerable<User> NotifyToUsersOfProject(
            int projectId,
            NotificationSentence sentence,
            IEnumerable<User> additionalReceivers = null)
        {
            UserService userService = new UserService(db);

            IEnumerable<User> assignees = userService.GetUsersOfProject(projectId);
            IEnumerable<User> admin = db.Users.Where(user => user.IsAdmin);

            List<User> usersToNotify = assignees.Union(admin).ToList();
            
            if (additionalReceivers != null)
            {
                usersToNotify = usersToNotify
                    .Union(additionalReceivers)
                    .ToList();
            }

            Notification notification = new Notification
            {
                Content = sentence.ToString(),
                Type = 1
            };
            Notify(notification, usersToNotify);

            return usersToNotify;
        }

        public IEnumerable<User> NotifyToUsersOfDepartment(
            int teamId,
            NotificationSentence sentence,
            bool allMember = false,
            IEnumerable<User> additionalReceivers = null)
        {
            UserService userService = new UserService(db);
            TeamService teamService = new TeamService(db);

            User manager = teamService.GetManager(teamId);
            IEnumerable<User> admin = db.Users.Where(user => user.IsAdmin);

            List<User> usersToNotify = new List<User>();
            usersToNotify.Add(manager);
            usersToNotify.AddRange(admin);
            
            if (additionalReceivers != null)
            {
                usersToNotify = usersToNotify
                    .Union(additionalReceivers)
                    .ToList();
            }

            if (allMember)
            {
                IEnumerable<User> assignees = userService.GetUsersOfTeam(teamId);
                usersToNotify = usersToNotify.Union(assignees).ToList();
            }

            Notification notification = new Notification
            {
                Content = sentence.ToString(),
                Type = 1
            };
            Notify(notification, usersToNotify);

            return usersToNotify;
        }

        public IEnumerable<JObject> FormatNotificationForUser(
            IEnumerable<NotificationUser> notificationUsers,
            User currentUser)
        {
            TaskService taskService = new TaskService(db);
            ProjectService projectService = new ProjectService(db);

            List<Team> teams = new List<Team>();
            List<Project> projects = projectService.GetProjectOfUser(currentUser.ID).ToList();
            List<Task> tasks = new List<Task>();

            teams.Add(currentUser.Team);

            if (currentUser.IsManager) // Manager
            {
                foreach (Project project in projects)
                {
                    IEnumerable<Task> tasksOfProject = taskService.GetTasksOfProject(project.ID);
                    tasks.AddRange(tasksOfProject);
                }
            }
            else // Staff
            {
                IEnumerable<Task> taskOfUser = taskService.GetTasksOfUser(currentUser.ID);
                tasks.AddRange(taskOfUser);
            }

            List<JObject> result = new List<JObject>();
            foreach (NotificationUser notificationUser in notificationUsers)
            {
                JObject sentenceJson = JObject.Parse(notificationUser.Notification.Content);
                NotificationSentence sentence = NotificationSentence.FromJson(sentenceJson);
                if (currentUser.IsAdmin)
                {
                    sentenceJson = sentence.ToJson();
                }
                else
                {
                    sentenceJson = NotificationSentence.ToJson(sentence, currentUser, teams, projects, tasks);
                }

                result.Add(new JObject
                {
                    ["isRead"] = notificationUser.IsRead,
                    ["content"] = sentenceJson
                });
            }

            return result;
        }

        public void CheckinNotification(int userId)
        {
            UserService userService = new UserService(db);
            User user = userService.GetUser(userId);

            List<NotificationUser> notificationUsers = db.NotificationUsers
                .Where(notificationUser => notificationUser.UserID == user.ID &&
                                           !notificationUser.IsRead)
                .ToList();
            foreach (var notificationUser in notificationUsers)
            {
                notificationUser.IsRead = true;
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