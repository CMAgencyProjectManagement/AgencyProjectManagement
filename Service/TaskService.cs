﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity.Core;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Spatial;
using System.Data.Entity.Validation;
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
        public IEnumerable<Task> GetLateTaskOfUser(int userID)
        {
            var tasks = GetActiveTasksOfUser(userID);
            var taskList = new List<Task>();
            foreach (var task in tasks)
            {
                if (task.StartDate!=null)
                {
                    DateTime deadline = task.StartDate.Value.AddDays(task.Duration);
                    if (DateTime.Now>deadline)
                    {
                        taskList.Add(task);
                    }
                }
            }
            return taskList;
        }
        public List<Task> GetActiveTasksOfUser(int userId)
        {
            User user = db.Users.Find(userId);
            if (user != null)
            {
                var taskList = new List<Task>();

                foreach (var userTask in user.UserTasks)
                {
                    if (userTask.Task.Status == (int) TaskStatus.NotDone ||
                        userTask.Task.Status == (int) TaskStatus.NeedReview)
                    {
                        taskList.Add(userTask.Task);
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

        public IEnumerable<User> GetManagersOfTask(int taskId)
        {
            Task task = GetTask(taskId);
            if (task == null)
            {
                throw new ObjectNotFoundException($"Task with id {taskId} not found");
            }

            TeamService teamService = new TeamService(db);
            List<User> users = new List<User>();
            foreach (var teamProject in task.List.Project.TeamProjects)
            {
                users.Add(teamService.GetManager(teamProject.TeamID));
            }

            return users;
        }

        public bool IsUserManagerOfTask(int userId, int taskId)
        {
            IEnumerable<User> managers = GetManagersOfTask(taskId);
            foreach (User manager in managers)
            {
                if (manager.ID == userId)
                {
                    return true;
                }
            }

            return false;
        }

        public bool IsAssigneeOfTask(int userId, int taskId)
        {
            Task task = GetTask(taskId);
            if (task == null)
            {
                throw new ObjectNotFoundException($"Task with id {taskId} not found");
            }

            var staff = db.UserTasks
                .Where(x => x.TaskID == taskId && x.UserID == userId && x.IsAssigned == true)
                .Select(x => x.User)
                .SingleOrDefault();
            if (staff != null)
            {
                if (!staff.IsManager)
                {
                    return true;
                }

                return false;
            }

            return false;
        }

        public bool IsAssigneeOfProject(int userId, int taskId)
        {
            Task task = GetTask(taskId);
            if (task == null)
            {
                throw new ObjectNotFoundException($"Task with id {taskId} not found");
            }

            var listId = db.Tasks.Find(taskId).ListID;
            var projectId = db.Lists.Find(listId).ProjectID;
            var staff = db.UserProjects
                .Where(x => x.ProjectID == projectId && x.UserID == userId)
                .Select(x => x.User)
                .SingleOrDefault();
            if (staff != null)
            {
                return true;
            }

            return false;
        }


        public Task setStatus(int taskId, int modifierId, TaskStatus taskStatus)
        {
            UserService userService = new UserService(db);
            User modifier = userService.GetUser(modifierId);
            Task task = GetTask(taskId);
            if (modifier == null)
            {
                throw new ObjectNotFoundException($"Can't find user with id {modifierId}");
            }

            if (task == null)
            {
                throw new ObjectNotFoundException($"Can't find task with id {taskId}");
            }

            task.Status = (int) taskStatus;
            task.ChangedBy = modifier.ID;

            if (taskStatus == TaskStatus.Done)
            {
                task.FinishedDate = DateTime.Today;
            }
            else
            {
                task.FinishedDate = null;
            }

            db.SaveChanges();
            return task;
        }

        public bool CheckDuplicatedTaskname(string taskName)
        {
            var tasks = db.Tasks.Where(task => task.Name.ToLower() == taskName.ToLower()).ToList();
            return tasks.Count > 0;
        }

        public bool CheckDuplicatedTasknameAllowDublicateProject(string taskName, int listId)
        {
            List list = db.Lists.Find(listId);
            if (list == null)
            {
                throw new ObjectNotFoundException($"List with id {listId} not found");
            }

            ProjectService projectService = new ProjectService(db);
            var projectId = db.Lists.Find(listId).ProjectID;
            List<Task> taskWithProjectId = projectService.GetTasksInProject(projectId);
            var tasks = taskWithProjectId.Where(task => task.Name.ToLower() == taskName.ToLower()).ToList();
            return tasks.Count > 0;
        }

        public bool CheckForListId(int listId)
        {
            var lists = db.Lists.Where(list => list.ID == listId).ToList();
            return lists.Count == 0;
        }

        public Task CreateTask(string name, string description, int listID, int priority,
            DateTime startDate, int duration, int effort,
            User creator)
        {
            Task newTask = new Task
            {
                Name = name,
                Description = description,
                ListID = listID,
                Priority = priority,
                StartDate = startDate,
                Duration = duration,
                Effort = effort,
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
            int priority,
            DateTime startDate,
            int duration,
            int effort,
            int modifierId,
            DateTime modifyTime)
        {
            var foundTask = db.Tasks.Find(id);
            if (foundTask != null)
            {
                foundTask.Name = name;
                foundTask.Description = description;
                foundTask.ListID = listId;
                foundTask.Priority = priority;
                foundTask.StartDate = startDate;
                foundTask.Duration = duration;
                foundTask.Effort = effort;
                foundTask.ChangedBy = modifierId;
                foundTask.ChangedTime = modifyTime;

                db.SaveChanges();
                return foundTask;
            }
            else
            {
                throw new ObjectNotFoundException($"Can't find project with ID {id}");
            }
        }

        public UserTask AssignTask(int taskID, int userID, int currentUserId)
        {
            User user = db.Users.Find(userID);
            if (user == null)
            {
                throw new ObjectNotFoundException($"User with ID{userID} not found");
            }

            Task task = db.Tasks.Find(taskID);
            if (task == null)
            {
                throw new ObjectNotFoundException($"Task with ID{taskID} not found");
            }

            UserTask foundUserTask = db.UserTasks
                .SingleOrDefault(userTask => userTask.TaskID == task.ID && userTask.UserID == userID);

            if (foundUserTask != null)
            {
                foundUserTask.IsAssigned = true;
            }
            else
            {
                task.ChangedBy = currentUserId;
                task.ChangedTime = DateTime.Now.Date;
                foundUserTask = new UserTask
                {
                    UserID = userID,
                    TaskID = taskID,
                    IsFollow = false,
                    IsAssigned = true
                };
                db.UserTasks.Add(foundUserTask);
            }

            db.SaveChanges();
            return foundUserTask;
        }

        public int UnAssignTask(int taskID, int userID, int currentUserId)
        {
            IEnumerable<UserTask> userTasks =
                db.UserTasks.Where(p => p.TaskID == taskID && p.UserID == userID).ToList();
            if (userTasks != null)
            {
                Task task = db.Tasks.Find(taskID);
                task.ChangedBy = currentUserId;
                task.ChangedTime = DateTime.Now.Date;
                foreach (var userTask in userTasks)
                {
                    userTask.IsAssigned = false;
                    db.SaveChanges();
                    return userTask.UserID;
                }
            }

            throw new ObjectNotFoundException($"UserTask with TaskId{taskID} and Userid{userID} not found");
        }

        public int UnAssignTaskgoc(int taskID, int userID)
        {
            IEnumerable<UserTask> userTasks =
                db.UserTasks.Where(p => p.TaskID == taskID && p.UserID == userID).ToList();
            if (userTasks != null)
            {
                foreach (var userTask in userTasks)
                {
                    userTask.IsAssigned = false;
                    db.SaveChanges();
                    return userTask.UserID;
                }
            }

            throw new ObjectNotFoundException($"UserTask with TaskId{taskID} and Userid{userID} not found");
        }

        public int ArchiveTask(int taskID, int userID)
        {
            var archiveTask = db.Tasks.Find(taskID);
            if (archiveTask != null && archiveTask.ID == taskID)
            {
                archiveTask.ChangedBy = userID;
                archiveTask.ChangedTime = DateTime.Now;
                archiveTask.IsArchived = true;
                db.SaveChanges();
                return archiveTask.ID;
            }

            throw new ObjectNotFoundException($"Task with TaskID{taskID} not found");
        }

        public int UnArchiveTask(int taskID, int userId)
        {
            var archiveTask = db.Tasks.Find(taskID);
            if (archiveTask != null && archiveTask.ID == taskID)
            {
                archiveTask.ChangedBy = userId;
                archiveTask.ChangedTime = DateTime.Now;
                archiveTask.IsArchived = false;
                db.SaveChanges();
                return archiveTask.ID;
            }

            throw new ObjectNotFoundException($"Task with TaskID{taskID} not found");
        }

        public double calculateTaskScore(Task task)
        {
            const int lowPriorityScore = 1;
            const int mediumPriorityScore = 3;
            const int highPriorityScore = 9;

            const double lateFinishMultiplier = 0.4f;

            double score = 0f;
            switch ((TaskPriority) task.Priority)
            {
                case TaskPriority.Low:
                {
                    score = lowPriorityScore;
                    break;
                }
                case TaskPriority.Normal:
                {
                    score = mediumPriorityScore;
                    break;
                }
                case TaskPriority.High:
                {
                    score = highPriorityScore;
                    break;
                }
            }

            score *= task.Effort;

            double remainingTime = GetTaskRemainingTime(task);
            if (remainingTime >= 0)
            {
                double bonusPercent = remainingTime / task.Duration;
                score += score * bonusPercent;
            }
            else
            {
                score *= lateFinishMultiplier;
            }


            return score;
        }

        public bool IsTaskFinishedThisMonth(Task task)
        {
            if (!task.FinishedDate.HasValue) return false;

            DateTime finishedTime = task.FinishedDate.Value;
            DateTime currentSystemTime = DateTime.Now;

            return finishedTime.Year == currentSystemTime.Year &&
                   finishedTime.Month == currentSystemTime.Month;
        }


        public bool IsTaskDeadlineInThisWeek(Task task)
        {
            DateTime date = DateTime.Now.Date;
            DateTime weekFirstDay = date.AddDays(DayOfWeek.Sunday - date.DayOfWeek);
            DateTime weekLastDay = weekFirstDay.AddDays(6);
            if (task.StartDate != null)
            {
                DateTime deadline = task.StartDate.Value.AddDays(task.Duration);

                if (deadline.Date >= weekFirstDay.Date && deadline.Date <= weekLastDay.Date)
                {
                    return true;
                }
            }

            return false;
        }

        public double GetTaskRemainingTime(Task task)
        {
            if (!task.FinishedDate.HasValue || !task.StartDate.HasValue)
            {
                throw new InvalidOperationException("Finish date and start date must have value");
            }

            DateTime finishedDate = task.FinishedDate.Value;
            DateTime deadline = task.StartDate.Value.AddDays(task.Duration);

            TimeSpan remainingTime = deadline - finishedDate;

            return remainingTime.TotalDays;
        }


        public IEnumerable<User> getTaskAssignee(int taskId)
        {
            var task = db.Tasks.Find(taskId);
            if (task != null)
            {
                var result = db.UserTasks
                    .Where(userTask => userTask.TaskID == taskId)
                    .Where(userTask => userTask.IsAssigned)
                    .Select(UserTask => UserTask.User);
                return result.ToList();
            }
            else
            {
                throw new ObjectNotFoundException($"Task with id {taskId} not found");
            }
        }

        public IEnumerable<KeyValuePair<string, string>> getPriorities()
        {
            List<KeyValuePair<string, string>> result = new List<KeyValuePair<string, string>>();
            foreach (TaskPriority priority in Enum.GetValues(typeof(TaskPriority)))
            {
                result.Add(new KeyValuePair<string, string>(
                    ((int) priority).ToString(),
                    DisplayCamelCaseString(priority.ToString())));
            }

            return result;
        }

        public IEnumerable<KeyValuePair<string, string>> getStatuses()
        {
            List<KeyValuePair<string, string>> result = new List<KeyValuePair<string, string>>();
            foreach (TaskStatus status in Enum.GetValues(typeof(TaskStatus)))
            {
                result.Add(new KeyValuePair<string, string>(
                    ((int) status).ToString(),
                    DisplayCamelCaseString(status.ToString())));
            }

            return result;
        }

        public string DisplayCamelCaseString(string camelCase)
        {
            List<char> chars = new List<char> {camelCase[0]};
            foreach (char c in camelCase.Skip(1))
            {
                if (char.IsUpper(c))
                {
                    chars.Add(' ');
                    chars.Add(char.ToLower(c));
                }
                else
                    chars.Add(c);
            }

            return new string(chars.ToArray());
        }

        public JObject ParseToJson(Task task, bool isDetailed = false, string avatarPath = null,
            string attachmentPath = null)
        {
            UserService userService = new UserService(db);
            User creator = userService.GetUser(task.CreatedBy);
            JObject result = new JObject
            {
                ["id"] = task.ID,
                ["name"] = task.Name,
                ["description"] = task.Description,
                ["createdBy"] = userService.ParseToJson(creator, avatarPath),
                ["createdDate"] = task.CreatedTime,
                ["changedDate"] = task.ChangedTime,
                ["startDate"] = task.StartDate,
                ["duration"] = task.Duration,
                ["status"] = task.Status,
                ["listID"] = task.ListID,
                ["priority"] = task.Priority,
                ["effort"] = task.Effort,
                ["isArchived"] = task.IsArchived
            };

            if (task.ChangedBy.HasValue)
            {
                var changer = userService.GetUser(task.ChangedBy.Value);
                result["changedBy"] = userService.ParseToJson(changer, avatarPath);
            }

            if (task.FinishedDate.HasValue)
            {
                result["finishedDate"] = task.FinishedDate;
            }

            if (task.StartDate.HasValue)
            {
                result["deadline"] = task.StartDate.Value.AddDays(task.Duration - 1);
            }

            TaskStatus taskStatus = (TaskStatus) task.Status;
            result["statusText"] = DisplayCamelCaseString(taskStatus.ToString());

            TaskPriority taskPriority = (TaskPriority) task.Priority;
            result["priorityText"] = DisplayCamelCaseString(taskPriority.ToString());

            if (isDetailed)
            {
                ProjectService projectService = new ProjectService(db);
                CommentService commentService = new CommentService(db);
                DependencyService dependencyService = new DependencyService(db);
                AttachmentService attachmentService = new AttachmentService(db);

                var project = projectService.GetProjectOfTask(task.ID);
                result["project"] = projectService.ParseToJson(project);

                ListService listService = new ListService(db);
                var list = listService.GetListOfTask(task.ID);
                result["list"] = listService.ParseToJson(list, false, false);

                var assignees = getTaskAssignee(task.ID);
                var assigneesJson = assignees
                    .Select(user => userService.ParseToJson(user, avatarPath));
                result["assignees"] = new JArray(assigneesJson);

                IEnumerable<Comment> comments = commentService.GetCommentOfTask(task.ID);
                IEnumerable<JObject> jsonComments =
                    comments.Select(comment => commentService.ParseToJson(comment, avatarPath: avatarPath));
                result["comments"] = new JArray(jsonComments);

                IEnumerable<JObject> attachmentsJson = task.Attachments
                    .Select(attachment => attachmentService.ParseToJson(attachment, attachmentPath));
                result["attachments"] = new JArray(attachmentsJson);

                IEnumerable<Task> predecessors = dependencyService.GetPredecessors(task.ID);
                IEnumerable<JObject> predecessorsJson = predecessors
                    .Select(task1 => ParseToJson(task1));
                result["predecessors"] = new JArray(predecessorsJson);

                IEnumerable<Task> successors = dependencyService.GetSuccessors(task.ID);
                IEnumerable<JObject> successorsJson = successors
                    .Select(task1 => ParseToJson(task1));
                result["successors"] = new JArray(successorsJson);
            }

            return result;
        }
    }
}