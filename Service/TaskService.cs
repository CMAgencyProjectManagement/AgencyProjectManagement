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

        public Task CreateTask(string name, string description, int listID, TaskPriority priority, DateTime startDate,
            User creator)
        {
            Task newTask = new Task
            {
                Name = name,
                Description = description,
                ListID = listID,
                Priority = (int) priority,
                StartDate = startDate,
                CreatedBy = creator.ID,
                CreatedTime = DateTime.Now
            };
            db.Tasks.Add(newTask);
            db.SaveChanges();
            return newTask;
        }

        public Task UpdateTask(
            int id,
            string name,
            string description,
            int listId,
            TaskPriority priority,
            DateTime? startDate)
        {
            var foundTask = db.Tasks.Find(id);
            if (foundTask != null)
            {
                foundTask.Name = name;
                foundTask.Description = description;
                foundTask.ListID = listId;
                foundTask.Priority = (int) priority;
                foundTask.StartDate = startDate;
                db.SaveChanges();
                return foundTask;
            }
            else
            {
                throw new ObjectNotFoundException($"Can't find project with ID {id}");
            }
        }
        /* public UserTask CreAssignTask(int taskId, int userId)
         {
             UserTask newUserTask = new UserTask
             {
                 TaskID = taskId,
                 UserID = userId,
             };
             db.UserTasks.Add(newUserTask);
             db.SaveChanges();
             return newUserTask;
         } */

        public UserTask AssignTask(int taskID, int userID)
        {
            UserTask assignTask = new UserTask
            {
                TaskID = taskID,
                UserID = userID,
                IsFollow = false,
                IsAssigned = true,
            };
            db.UserTasks.Add(assignTask);
            db.SaveChanges();
            return assignTask;
        }

        public int UnAssignTask(int TaskId, int UserId)
        {
            IEnumerable<UserTask> userTasks =
                db.UserTasks.Where(p => p.TaskID == TaskId && p.UserID == UserId).ToList();
            if (userTasks != null)
            {
                foreach (var userTask in userTasks)
                {
                    userTask.IsAssigned = false;
                    db.SaveChanges();
                    return userTask.UserID;
                }
            }

            throw new ObjectNotFoundException($"UserTask with TaskId{TaskId} and Userid{UserId} not found");
        }

        public IEnumerable<User> getTaskAssignee(int taskId)
        {
            var task = db.Tasks.Find(taskId);
            if (task != null)
            {
                var result = db.UserTasks
                    .Where(userTask => userTask.TaskID == taskId)
                    .Select(UserTask => UserTask.User);
                return result.ToList();
            }
            else
            {
                throw new ObjectNotFoundException($"Task with id {taskId} not found");    
            }
            
        }

        public JObject ParseToJson(Task task, bool isDetailed = false, string avatarPath = null)
        {
            UserService userService = new UserService(db);
            User creator = userService.GetUser(task.CreatedBy);
            JObject result = new JObject
            {
                ["id"] = task.ID,
                ["name"] = task.Name,
                ["description"] = task.Description,
                ["createdBy"] = userService.ParseToJson(creator,avatarPath),
                ["createdDate"] = task.CreatedTime,
                ["changedTime"] = task.ChangedTime,
                ["status"] = task.Status,
                ["duration"] = task.Duration,
                ["listID"] = task.ListID,
                ["priority"] = task.Priority,
                ["startDate"] = task.StartDate
            };
            
            if (task.ChangedBy.HasValue)
            {
                var changer = userService.GetUser(task.ChangedBy.Value);
                result["changedby"] = userService.ParseToJson(changer);
            }

            if (isDetailed)
            {
                ProjectService projectService = new ProjectService(db);
                var project = projectService.GetProjectOfTask(task.ID);
                result["project"] = projectService.ParseToJson(project, false, false);

                ListService listService = new ListService(db);
                var list = listService.GetListOfTask(task.ID);
                result["list"] = listService.ParseToJson(list, false, false);

                var assignees = getTaskAssignee(task.ID);
                var assigneesJson = assignees
                    .Select(user =>  userService.ParseToJson(user,avatarPath));
                result["assignees"] = new JArray(assigneesJson);
            }

            return result;
        }
    }
}