using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using System.Net;
using System.Runtime.Remoting.Messaging;
using System.Web.Configuration;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class TeamService
    {
        private readonly CmAgencyEntities db;

        public TeamService(CmAgencyEntities db)
        {
            this.db = db;
        }

        public List<Team> GetAll()
        {
            return db.Teams.ToList();
        }

        public List<User> GetFreeUsers()
        {
            var freeUsers = db.Users
                .Where(x => x.TeamID == null && x.IsAdmin == false).ToList();
            return freeUsers;
        }

        public Team GetTeamById(int id)
        {
            return db.Teams.Find(id);
        }

        public IEnumerable<Team> GetTeamsOfProject(int projectId)
        {
            Project project = db.Projects.Find(projectId);
            if (project == null) throw new ObjectNotFoundException($"Project with id {projectId} not found ");
            IEnumerable<Team> teams = project.TeamProjects
                .Select(teamProject => GetTeamById(teamProject.TeamID));
            return teams;
        }

        public User GetManager(int teamId)
        {
            Team foundTeam = db.Teams.Find(teamId);

            if (foundTeam == null)
            {
                throw new ObjectNotFoundException($"Team with ID{teamId} not found");
            }

            IEnumerable<User> managers = db.Users
                .Where(user => user.TeamID == teamId &&
                               user.IsManager && 
                               user.IsActive);
            
            if (managers.Count() == 1)
            {
                return managers.Single();
            }

            if (managers.Count() > 1)
            {
                throw new InvalidOperationException($"Team with ID {teamId} have more than one manager");
            }
            
            return null;
        }

        public List<Task> GetTasksOfTeam(int teamId)
        {
            ProjectService projectService = new ProjectService(db);
            List<Task> tasklist = new List<Task>();
            var projectIds = db.TeamProjects
                .Where(x => x.TeamID == teamId)
                .Select(x => x.ProjectID).ToList();
            foreach (var projectId in projectIds)
            {
                List<Task> list = projectService.GetTasksOfProject(projectId);
                tasklist.AddRange(list);
            }

            return tasklist;
        }

        public Team Updateteam(
            int id,
            string name,
            string createdBy,
            DateTime? createdDate,
            Boolean isClosed,
            string manager)
        {
            Team team = db.Teams.Find(id);
            if (team != null)
            {
                team.Name = name;
                team.User.Username = manager;

                db.SaveChanges();
                return team;
            }
            else
            {
                throw new ObjectNotFoundException($"User with ID{id} not found");
            }
        }

        public User AssignTeam(
            int id,
            int teamId)
        {
            User user = db.Users.Find(id);
            if (user != null)
            {
                if (user.TeamID == null)
                {
                    user.TeamID = teamId;
                }
                else
                {
                    throw new ObjectNotFoundException($"!!Team Id has value");
                }

                db.SaveChanges();
                return user;
            }
            else
            {
                throw new ObjectNotFoundException($"User with ID{id} not found");
            }
        }

        public void UnAssignTeam(int[] userIds)
        {
            foreach (int userId in userIds)
            {
                User user = db.Users.Find(userId);
                if (user != null)
                {
                    if (user.TeamID != null)
                    {
                        user.TeamID = null;
                        user.IsManager = false;
                    }
                    else
                    {
                        throw new ObjectNotFoundException($"!!Team Id must be already null or User still have task");
                    }
                }
                else
                {
                    throw new ObjectNotFoundException($"User with ID{userId} not found");
                }
            }

            db.SaveChanges();
        }

        public void SetManager(int teamId, int userId)
        {
            TaskService taskService = new TaskService(db);
            Team team = db.Teams.Find(teamId);
            if (team == null)
            {
                throw new ObjectNotFoundException($"Team with ID{teamId} not found");
            }

            User user = db.Users.Find(userId);
            if (user == null)
            {
                throw new ObjectNotFoundException($"User with ID{userId} not found");
            }

            if (user.TeamID != team.ID)
            {
                throw new InvalidOperationException("User have to be in team before set to be manager");
            }
            
            if (GetManager(team.ID) == null)
            {
                throw new InvalidOperationException("Team can't have more than one manager");
            }

            User currentManager = GetManager(teamId);
            var userActiveTasks = taskService.GetActiveTasksOfUser(user.ID);
            if (userActiveTasks.Count == 0 && currentManager.ID != userId)
            {
                currentManager.IsManager = false;
                user.IsManager = true;
                db.SaveChanges();
            }
            else
            {
                throw new ObjectNotFoundException($"User with ID{userId} still in active tasks");
            }
        }

        public JObject ParseToJson(Team team, bool includeManager = true, bool includeUsers = false,
            string avatarPath = null)
        {
            UserService userService = new UserService(db);
            var creator = userService.GetUser(team.CreatedBy);

            var result = new JObject
            {
                ["id"] = team.ID,
                ["name"] = team.Name,
                ["createdBy"] = userService.ParseToJson(creator),
                ["createdDate"] = team.CreatedDate.ToShortDateString()
            };

            if (includeManager)
            {
                var manager = GetManager(team.ID);
                if (manager != null)
                {
                    result["manager"] = userService.ParseToJson(manager);
                }
                else
                {
                    result["manager"] = null;
                }
            }

            if (includeUsers)
            {
                var users = userService.GetUsersOfTeam(team.ID, excludeBanned: false);
                var jArray = new JArray();

                foreach (User user in users)
                {
                    jArray.Add(userService.ParseToJson(user, avatarPath));
                }

                result["users"] = jArray;
            }


            return result;
        }

        public bool IsManagerOfTeam(int userId, IQueryable<int> teamIds)
        {
            var user = db.Users.Find(userId);
            if (!user.IsManager)
            {
                throw new ObjectNotFoundException($"User {userId} is not a manager");
            }

            if (teamIds.Count() != 0)
            {
                foreach (var teamId in teamIds)
                {
                    if (user.TeamID == teamId)
                    {
                        return true;
                    }
                }

                throw new ObjectNotFoundException($"User {userId} is not a manager has assigned this project");
            }

            return false;
        }

        public JObject ParseToJsonVer2(Team team, bool includeManager = true,
            bool includeUsers = false,
            bool isDetailedUsers = false,
            bool isDetailedProjects = false,
            bool isDetailedAssignees = false,
            string avatarPath = null)
        {
            UserService userService = new UserService(db);
            ProjectService projectService = new ProjectService(db);
            var creator = userService.GetUser(team.CreatedBy);

            var result = new JObject
            {
                ["id"] = team.ID,
                ["name"] = team.Name,
                ["createdBy"] = userService.ParseToJson(creator),
                ["createdDate"] = team.CreatedDate.ToShortDateString()
            };

            if (includeManager)
            {
                var manager = GetManager(team.ID);
                if (manager != null)
                {
                    result["manager"] = userService.ParseToJson(manager);
                }
                else
                {
                    result["manager"] = null;
                }
            }

            if (includeUsers)
            {
                var users = userService.GetUsersOfTeamVer2(team.ID);
                var jArray = new JArray();

                foreach (User user in users)
                {
                    jArray.Add(userService.ParseToJson(user, avatarPath));
                }

                result["users"] = jArray;
            }

            if (isDetailedProjects)
            {
                IEnumerable<Project> projects = projectService.GetProjectOfTeam(team.ID);
                JArray listArray = new JArray();
                foreach (var project in projects)
                {
                    listArray.Add(projectService.ParseToJson(project));
                }

                result["projects"] = listArray;
            }

            return result;
        }
    }
}