using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core;
using System.Linq;
using System.Text;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class ProjectService
    {
        private readonly CmAgencyEntities db;


        public ProjectService(CmAgencyEntities db)
        {
            this.db = db;
        }

        public IEnumerable<Project> GetAll()
        {
            return db.Projects.ToList();
        }

        public IEnumerable<Project> GetProjectChangeThisWeek()
        {
            var projects = db.Projects.ToList();
            List<Project> ProjectChangeThisWeek = new List<Project>();
            foreach (var project in projects)
            {
                if (IsProjectChangeThisWeek(project))
                {
                    ProjectChangeThisWeek.Add(project);
                }
            }

            return ProjectChangeThisWeek.ToList();
        }

        public bool IsProjectChangeThisWeek(Project project)
        {
            DateTime date = DateTime.Now.Date;
            DateTime weekFirstDay = date.AddDays(DayOfWeek.Sunday - date.DayOfWeek);
            DateTime weekLastDay = weekFirstDay.AddDays(6);
            if (project.ChangedTime != null)
            {
                if (project.ChangedTime >= weekFirstDay.Date && project.ChangedTime <= weekLastDay.Date)
                {
                    return true;
                }
            }

            return false;
        }

        public IEnumerable<Project> GetProjectOfUser(int userId)
        {
            return db.Projects
                .Where(
                    project => project.UserProjects
                        .Any(userProject => userProject.UserID == userId)
                )
                .ToList();
        }

        public IEnumerable<Project> GetProjectOfTeam(int teamId)
        {
            return db.Projects
                .Where(project => project.TeamProjects
                    .Any(userTeam => userTeam.TeamID == teamId)
                ).ToList();
        }


        /// <summary>
        /// Create new project
        /// </summary>
        /// <param name="name"></param>
        /// <param name="description"></param>
        /// <param name="deadline"></param>
        /// <param name="startDate"></param>
        /// <param name="creator">creator id</param>
        /// <returns>new project with Id</returns>
        public Project CreateProject(string name, string description, DateTime? deadline, DateTime? startDate,
            User creator)
        {
            Project newProject = new Project
            {
                Name = name,
                Description = description,
                Deadline = deadline,
                StartDate = startDate,
                CreatedBy = creator.ID,
                CreatedTime = DateTime.Now
            };

            db.Projects.Add(newProject);
            db.SaveChanges();

            return newProject;
        }

        public Project GetProjectOfTask(int taskId)
        {
            ListService listService = new ListService(db);
            return listService.GetListOfTask(taskId).Project;
        }

        //public bool CheckDuplicatedUsername(string username)
        //{
        //    var users = db.Users.Where(user => user.Username == username).ToList();
        //    return users.Count > 0;
        //}
        public bool CheckDuplicatedNameOfProject(string projectname)
        {
            var projects = db.Projects.Where(project => project.Name == projectname).ToList();
            return projects.Count > 0;
        }

        public Project UpdateProject(
            int id,
            string name,
            string description,
            DateTime? deadline,
            DateTime? startDate)
        {
            var foundProject = db.Projects.Find(id);
            if (foundProject != null)
            {
                foundProject.Name = name;
                foundProject.Description = description;
                foundProject.Deadline = deadline;
                foundProject.StartDate = startDate;
                db.SaveChanges();
                return foundProject;
            }
            else
            {
                throw new ObjectNotFoundException($"Can't find project with ID {id}");
            }
        }

        public int CloseProject(int id)
        {
            var project = db.Projects.Find(id);
            if (project != null)
            {
                project.Status = (int) ProjectStatus.Finished;
                db.SaveChanges();
                return id;
            }
            else
            {
                throw new ObjectNotFoundException($"Can't find project with ID {id}");
            }
        }

        public Project GetProjectByID(int id)
        {
            return db.Projects.Find(id);
        }

        public IEnumerable<KeyValuePair<string, string>> getStatuses()
        {
            List<KeyValuePair<string, string>> result = new List<KeyValuePair<string, string>>();
            foreach (ProjectStatus status in Enum.GetValues(typeof(ProjectStatus)))
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

        public UserProject AssignProject(int userId, int projectId)
        {
            User user = db.Users.Find(userId);
            if (user != null)
            {
                Project project = db.Projects.Find(projectId);
                if (project != null)
                {
                    UserProject newUserProject;

                    IEnumerable<TeamProject> teamProjects =
                        db.TeamProjects.Where(x => x.ProjectID == projectId).ToList();
                    foreach (var teamProject in teamProjects)
                    {
                        if (user.TeamID == teamProject.TeamID)
                        {
                            newUserProject = new UserProject
                            {
                                UserID = userId,
                                ProjectID = projectId,
                            };
                            IEnumerable<UserProject> UserProject =
                                db.UserProjects.Where(x => x.UserID == userId && x.ProjectID == projectId);
                            if (UserProject.Count() == 0)
                            {
                                db.UserProjects.Add(newUserProject);
                                db.SaveChanges();
                                return newUserProject;
                            }
                            else
                            {
                                throw new ObjectNotFoundException($"UserProject existed");
                            }
                        }
                        else
                        {
                            throw new ObjectNotFoundException($"Project and user not in one team");
                        }
                    }

                    throw new ObjectNotFoundException($"Project not belong to any team");
                }
                else
                {
                    throw new ObjectNotFoundException($"Project with ID{projectId} not found");
                }
            }
            else
            {
                throw new ObjectNotFoundException($"User with ID{userId} not found");
            }
        }

        public UserProject UnAssignProject(int userId, int projectId)
        {
            User user = db.Users.Find(userId);
            if (user != null)
            {
                Project project = db.Projects.Find(projectId);
                if (project != null)
                {
                    var choosedUserProject = db.UserProjects.Where(x => x.UserID == userId && x.ProjectID == projectId)
                        .FirstOrDefault();
                    if (choosedUserProject != null)
                    {
                        db.UserProjects.Remove(choosedUserProject);
                        db.SaveChanges();
                        return choosedUserProject;
                    }
                    else
                    {
                        throw new ObjectNotFoundException(
                            $"User with ID {userId} not have in project with ID {projectId}");
                    }
                }
                else
                {
                    throw new ObjectNotFoundException($"Project with ID {projectId} not found");
                }
            }
            else
            {
                throw new ObjectNotFoundException($"User with ID {userId} not found");
            }
        }

        public bool IsDateRangeInBoundOfProject(DateTime startDate, DateTime endDate, int projectId)
        {
            Project project = GetProjectByID(projectId);
            if (project == null)
            {
                throw new ObjectNotFoundException($"Project with id {projectId} not found");
            }

            return false;
        }


        public Project SetProjectToTeams(int projectId, int[] newTeamIds, int modifierId)
        {
            Project project = GetProjectByID(projectId);
            if (project == null)
            {
                throw new ObjectNotFoundException($"Project with id {projectId} not found");
            }

            IEnumerable<int> oldTeamIds = db.TeamProjects
                .Where(teamProject => teamProject.ProjectID == projectId)
                .Select(teamProject => teamProject.TeamID);

            IEnumerable<int> teamIdsToRemove = oldTeamIds.Except(newTeamIds);
            IEnumerable<int> teamIdsToAdd = newTeamIds.Except(oldTeamIds);

            IEnumerable<TeamProject> teamProjectToRemove = db.TeamProjects
                .Where(teamProject => teamIdsToRemove.Contains(teamProject.TeamID));
            IEnumerable<TeamProject> teamProjectToAdd = teamIdsToAdd
                .Select(teamIdToAdd => new TeamProject
                {
                    ProjectID = projectId,
                    TeamID = teamIdToAdd
                });

            db.TeamProjects.AddRange(teamProjectToAdd);
            db.TeamProjects.RemoveRange(teamProjectToRemove);

            project.ChangedBy = modifierId;
            project.ChangedTime = DateTime.Today;
            db.SaveChanges();
            return project;
        }

        public IQueryable<int> GetUsersInProject(int projectId)
        {
            var usersInProject = db.UserProjects.Where(x => x.ProjectID == projectId).Select(x => x.User);
            var userIdsInProject = usersInProject.Select(x => x.ID);
            return userIdsInProject;
        }

        public List<Task> GetTasksOfProject(int projectId)
        {
            List<Task> tasksInProject = new List<Task>();
            var listIdsWithProjectID = db.Lists.Where(x => x.ProjectID == projectId).Select(x => x.ID).ToList();
            foreach (var listId in listIdsWithProjectID)
            {
                var tasksInList = db.Tasks.Where(x => x.ListID == listId);
                foreach (var taskInList in tasksInList)
                {
                    tasksInProject.Add(taskInList);
                }
            }

            return tasksInProject;
        }

        public List<User> GetNoTaskUsersInProject(int projectId)
        {
            var usersInProject = db.UserProjects.Where(x => x.ProjectID == projectId).Select(x => x.User);
            var userIdsInProject = usersInProject.Select(x => x.ID);
            List<User> noTaskUser = new List<User>();
            foreach (var userId in userIdsInProject)
            {
                var users = db.UserTasks.Where(x => x.UserID == userId && x.IsAssigned == false).Select(x => x.User)
                    .ToList();
                noTaskUser.AddRange(users);
            }

            return noTaskUser;
        }

        public JArray GetTaskExpireThisWeek(int projectId)
        {
            TaskService taskService = new TaskService(db);
            List<Task> tasks = new List<Task>();
            var listIdsWithProjectID = db.Lists.Where(x => x.ProjectID == projectId).Select(x => x.ID).ToList();
            foreach (var listId in listIdsWithProjectID)
            {
                var tasksInList = db.Tasks.Where(x => x.ListID == listId);
                foreach (var taskInList in tasksInList)
                {
                    tasks.Add(taskInList);
                }
            }

            List<Task> TasksFinishedThisWeek = new List<Task>();
            foreach (var task in tasks)
            {
                if (taskService.IsTaskDeadlineInThisWeek(task))
                {
                    TasksFinishedThisWeek.Add(task);
                }
            }

            var tasksJArray = new JArray();
            foreach (var task in TasksFinishedThisWeek)
            {
                tasksJArray.Add(taskService.ParseToJson(task));
            }

            return tasksJArray;
        }

        public JObject ParseToJsonProjectReport(Project project, bool isIncludeTask = false)
        {
            var result = new JObject
            {
                ["id"] = project.ID,
                ["name"] = project.Name,
                ["userNumberInProject"] = GetUsersInProject(project.ID).Count(),
                ["userNumberNotInTask"] = GetNoTaskUsersInProject(project.ID).Count()
            };
            if (isIncludeTask)
            {
                result["taskExpireThisWeek"] = GetTaskExpireThisWeek(project.ID);
            }

            return result;
        }

        public JObject ParseToJsonTotalReport(Project project, bool isIncludeTask = false)
        {
            List<Task> tasks = new List<Task>();
            var lists = db.Lists.Where(x => x.ProjectID == project.ID);
            var listIds = db.Lists.Where(x => x.ProjectID == project.ID).Select(x => x.ID).ToList();
            foreach (var listId in listIds)
            {
                var tasksInList = db.Tasks.Where(x => x.ListID == listId);
                foreach (var taskInList in tasksInList)
                {
                    tasks.Add(taskInList);
                }
            }

            int taskNumber = tasks.Count;

            List<JObject> calculatedResult = new List<JObject>();
            foreach (TaskStatus status in Enum.GetValues(typeof(TaskStatus)))
            {
                int taskStatusCount = tasks.Where(x => x.Status == (int) status).Count();
                calculatedResult.Add(new JObject
                {
                    ["key"] = DisplayCamelCaseString(status.ToString()),
                    ["value"] = (decimal) (taskStatusCount * 100) / taskNumber
                });
            }

            var result = new JObject
            {
                ["id"] = project.ID,
                ["name"] = project.Name,
                ["taskCount"] = tasks.Count(),
                ["userNumberInProject"] = GetUsersInProject(project.ID).Count(),
                ["userNumberNotInTask"] = GetNoTaskUsersInProject(project.ID).Count(),
                ["taskStatusReport"] = new JArray(calculatedResult),
            };
            if (isIncludeTask)
            {
                result["taskExpireThisWeek"] = GetTaskExpireThisWeek(project.ID);
            }

            return result;
        }


        public JObject ParseToJson(Project project, bool isDetailed = false, string avatarPath = null)
        {
            UserService userService = new UserService(db);
            ListService listService = new ListService(db);
            User creator = userService.GetUser(project.CreatedBy);

            var result = new JObject
            {
                ["id"] = project.ID,
                ["name"] = project.Name,
                ["description"] = project.Description,
                ["deadline"] = project.Deadline,
                ["createdTime"] = project.CreatedTime,
                ["createdBy"] = userService.ParseToJson(creator, avatarPath),
                ["startDate"] = project.StartDate,
                ["changedTime"] = project.ChangedTime,
                ["status"] = project.Status
            };
            if (project.ChangedBy.HasValue)
            {
                var changer = userService.GetUser(project.ChangedBy.Value);
                result["changedBy"] = userService.ParseToJson(changer, avatarPath);
            }

            if (isDetailed)
            {
                TeamService teamservice = new TeamService(db);
                IEnumerable<List> lists = listService.GetListOfProject(project.ID);
                JArray listJArray = new JArray();
                foreach (List list in lists)
                {
                    listJArray.Add(listService.ParseToJson(list));
                }

                result["lists"] = listJArray;

                var users = userService.GetUsersOfProject(
                    project.ID
                );

                var jArray = new JArray();
                foreach (User user in users)
                {
                    jArray.Add(userService.ParseToJson(user, avatarPath));
                }

                result["assignees"] = jArray;

                JArray teamsJson = new JArray();
                IEnumerable<Team> teams = teamservice.GetTeamsOfProject(project.ID);
                IEnumerable<JObject> teamJson = teams
                    .Select(team => teamservice.ParseToJson(team, avatarPath: avatarPath, includeUsers: true));

                result["teams"] = new JArray(teamJson);
            }

            return result;
        }
    }
}