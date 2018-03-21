using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using System.Net;
using System.Runtime.Remoting.Messaging;
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

        public Team GetTeamById(int id)
        {
            return db.Teams.Find(id);
        }

        public User GetManager(int teamId)
        {
            Team foundTeam = db.Teams.Find(teamId);
            if (foundTeam != null)
            {
                User manager = foundTeam.Users.First(user => user.IsManager);
                return manager;
            }

            return null;
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
            if (user!=null)
            {
                if (user.TeamID==null)
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
        public User UnAssignTask(int id)
        {
            User user = db.Users.Find(id);
            if (user!=null)
            {
                if (user.TeamID!=null)
                {
                    user.TeamID = null;
                }
                else
                {
                    throw new ObjectNotFoundException($"!!Team Id must be already null or User still have task");
                }
                db.SaveChanges();
                return user;
            }
            else
            {
                throw new ObjectNotFoundException($"User with ID{id} not found");
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
                ["createdDate"] = team.CreatedDate.ToShortDateString(),
                ["isClosed"] = team.IsClosed
            };

            if (includeManager)
            {
                var manager = GetManager(team.ID);
                result["manager"] = userService.ParseToJson(manager);
            }

            if (includeUsers)
            {
                var users = userService.GetUsersOfTeam(team.ID);
                var jArray = new JArray();

                foreach (User user in users)
                {
                    jArray.Add(userService.ParseToJson(user, avatarPath));
                }

                result["users"] = jArray;
            }
            

            return result;
        }

        public JObject ParseToJsonVer2(Team team, bool includeManager = true,
            bool includeUsers = false, 
            bool isDetailedUsers = false,
            bool isDetailedProjects = false,
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
                ["createdDate"] = team.CreatedDate.ToShortDateString(),
                ["isClosed"] = team.IsClosed
            };

            if (includeManager)
            {
                var manager = GetManager(team.ID);
                result["manager"] = userService.ParseToJson(manager, avatarPath);
            }

            if (includeUsers)
            {
                var users = userService.GetUsersOfTeam(team.ID);
                var jArray = new JArray();

                foreach (User user in users)
                {
                    jArray.Add(userService.ParseToJson(user, avatarPath));
                }

                result["users"] = jArray;
            }
            if (isDetailedUsers)
            {
                IEnumerable<User> users = userService.GetUsersOfTeamVer2(team.ID);
                JArray listArray = new JArray();
                foreach (var user in users)
                {
                    listArray.Add(userService.ParseToJson(user, avatarPath));
                }
                result["users"] = listArray;
            }
            if (isDetailedProjects)
            {
               // IEnumerable<Project> projects = projectService.get
            }

            return result;
        }

    }
}