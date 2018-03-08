using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using System.Text;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public static class TaskService
    {
        public static List<Task> GetTasksOfProject(int projectId)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                Project project = entities.Projects.Find(projectId);
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
        }

        public static List<Task> GetTasksOfList(int listId)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                List list = entities.Lists.Find(listId);
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
        }
        public static List<Task> GetTasksOfUser(int userId)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                
                User user = entities.Users.Find(userId);
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
        }
        public static Task GetTask(int id)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                return entities.Tasks.Find(id);
            }
        }
        //xoa
        //public static IEnumerable<Task> GetTaskOfUser(int userId)
        //{
        //    using (var db = new CmAgencyEntities())
        //    {
        //        return db.Tasks
        //            .Where(
        //                task => task.UserTasks.Any(user => user.UserID.Equals(userId))
        //            ).ToList();
        //    }
        //}

        


        public static JObject ToJson(this Task task, bool isDetailed = true, bool isIncludeProject = true)
        {
            User creator = UserService.GetUser(task.CreatedBy);
            JObject result = new JObject
            {
                ["ID"] = task.ID,
                ["Name"] = task.Name,
                ["Description"] = task.Description,
                ["CreatedBy"] = task.CreatedBy,
                ["CreatedTime"] = task.CreatedTime,
                ["ChangedBy"] = task.ChangedBy,
                ["ChangedTime"] = task.ChangedTime,
                ["Status"] = task.Status,
                ["Duration"] = task.Duration,
                ["ListID"] = task.ListID,
                ["Priority"] = task.Priority,
                ["StartDate"] = task.StartDate
            };
            if (task.ChangedBy.HasValue)
            {
                var changer = UserService.GetUser(task.ChangedBy.Value);
                result["changedby"] = changer.ToJson();
            }

            return result;
        }
    }
}