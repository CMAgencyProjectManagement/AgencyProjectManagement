using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using System.Text;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class TaskService
    {
        private readonly CmAgencyEntities db;

        public TaskService(CmAgencyEntities db)
        {
            this.db = db;
        }


        public List<Task> GetTasksOfProject(int projectId)
        {
            Project project = db.Projects.Find(projectId);
            if (project != null)
            {
                var taskList = new List<Task>();
                foreach (var list in project.Lists)
                {
                    foreach (var task in list.Tasks)
                    {
                        taskList.Add(task);
                    }
                }

                return taskList;
            }
            else
            {
                throw new ObjectNotFoundException($"Project with ID {projectId} not found");
            }
        }

        public List<Task> GetTasksOfList(int listId)
        {
            List list = db.Lists.Find(listId);
            if (list != null)
            {
                var taskList = new List<Task>();

                foreach (Task task in list.Tasks)
                {
                    taskList.Add(task);
                }

                return taskList;
            }
            else
            {
                throw new ObjectNotFoundException($"List with ID {listId} not found");
            }
        }

        public List<Task> GetTasksOfUser(int userId)
        {
            User user = db.Users.Find(userId);
            if (user != null)
            {
                var taskList = new List<Task>();

                foreach (var task in user.Tasks)
                {
                    taskList.Add(task);
                }

                return taskList;
            }
            else
            {
                throw new ObjectNotFoundException($"User with ID {userId} not found");
            }
        }

        public List<Task> GetActiveTasksOfUser(int userId)
        {
            User user = db.Users.Find(userId);
            if (user != null)
            {
                var taskList = new List<Task>();

                foreach (var task in user.Tasks)
                {
                    if (task.Status == 0 || task.Status == 1)
                    {
                        taskList.Add(task);
                    }
                }

                return taskList;
            }
            else
            {
                throw new ObjectNotFoundException($"User with ID {userId} not found");
            }
        }

        public Task GetTask(int id)
        {
            return db.Tasks.Find(id);
        }


        public JObject ParseToJson(Task task, bool isDetailed = true, bool isIncludeProject = true)
        {
            UserService userService = new UserService(db);
            User creator = userService.GetUser(task.CreatedBy);
            JObject result = new JObject
            {
                ["ID"] = task.ID,
                ["Name"] = task.Name,
                ["Description"] = task.Description,
                ["CreatedBy"] = userService.ParseToJson(creator),
                ["CreatedTime"] = task.CreatedTime,
                ["ChangedTime"] = task.ChangedTime,
                ["Status"] = task.Status,
                ["Duration"] = task.Duration,
                ["ListID"] = task.ListID,
                ["Priority"] = task.Priority,
                ["StartDate"] = task.StartDate
            };
            if (task.ChangedBy.HasValue)
            {
                var changer = userService.GetUser(task.ChangedBy.Value);
                result["changedby"] = userService.ParseToJson(changer);
            }
            
            return result;
        }
    }
}