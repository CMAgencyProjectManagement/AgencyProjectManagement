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

                    throw new ObjectNotFoundException($"Eo biet");
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

        public JObject ParseToJsonStatusReport(Project project)
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
                    ["key"] = status.ToString(),
                    ["value"] = (decimal) (taskStatusCount * 100) / taskNumber
                });
            }

            var result = new JObject
            {
                ["id"] = project.ID,
                ["name"] = project.Name,
                ["taskCount"] = tasks.Count(),
                ["result"] = new JArray(calculatedResult),
            };


            return result;
        }

        public Project SetProjectToTeams(int projectId, int[] teamIds, int modifierId)
        {
            Project project = GetProjectByID(projectId);
            if (project == null)
            {
                throw new ObjectNotFoundException($"Project with id ${projectId} not found");
            }

            foreach (int teamId in teamIds)
            {
                Team team = db.Teams.Find(teamId);
                if (team == null)
                {
                    throw new ObjectNotFoundException($"Team with id ${teamId} not found");
                }

                TeamProject teamProject = new TeamProject
                {
                    ProjectID = project.ID,
                    TeamID = team.ID
                };
                db.TeamProjects.Add(teamProject);
            }

            project.ChangedBy = modifierId;
            project.ChangedTime = DateTime.Today;

            db.SaveChanges();
            return project;
        }

        public JObject ParseToJsonReportAPI(Project project, bool isIncludeTask = false)
        {
            var usersInProject = db.UserProjects.Where(x => x.ProjectID == project.ID).Select(x => x.User);
            var userIdsInProject = usersInProject.Select(x => x.ID);
            List<User> noTaskUser = new List<User>();
            foreach (var userId in userIdsInProject)
            {
                var users = db.UserTasks.Where(x => x.UserID == userId && x.IsAssigned == false).Select(x => x.User)
                    .ToList();
                noTaskUser.AddRange(users);
            }


            var result = new JObject
            {
                ["id"] = project.ID,
                ["name"] = project.Name,
                ["userNumberInProject"] = usersInProject.Count(),
                ["userNumberNotInTask"] = noTaskUser.Count()
            };
            if (isIncludeTask)
            {
                TaskService taskService = new TaskService(db);
                List<Task> tasks = new List<Task>();
                var listIdsWithProjectID = db.Lists.Where(x => x.ProjectID == project.ID).Select(x => x.ID).ToList();
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

                result["task"] = tasksJArray;
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
                foreach (TeamProject teamProject in project.TeamProjects)
                {
                    teamsJson.Add(teamservice.ParseToJson(teamProject.Team, false, avatarPath: avatarPath));
                }

                result["teams"] = teamsJson;
            }

            return result;
        }
    }
}