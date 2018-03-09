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
    public static class TeamService
    {
        public static List<Team> GetAll()
        {
            using (var db = new CmAgencyEntities())
            {
                return db.Teams.ToList();
            }
        }

        public static Team GetTeamById(int id)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                return entities.Teams.Find(id);
            }
        }

        public static User GetManager(int teamId)
        {
            using (var db = new CmAgencyEntities())
            {
                Team foundTeam = db.Teams.Find(teamId);
                if (foundTeam != null)
                {
                    IEnumerable<UserTeam> userTeams = foundTeam.UserTeams;
                    foreach (UserTeam userTeam in userTeams)
                    {
                        if (userTeam.User.IsManager)
                        {
                            return userTeam.User;
                        }
                    }
                }

                return null;
            }
        }

        public static Team Updateteam(
            int id,
            string name,
            string createdBy,
            DateTime? createdDate,
            Boolean isClosed,
            string manager)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                Team team = entities.Teams.Find(id);
                if (team != null)
                {
                    team.Name = name;
                    team.User.Username = manager;

                    entities.SaveChanges();
                    return team;
                }
                else
                {
                    throw new ObjectNotFoundException($"User with ID{id} not found");
                }
            }
        }

        public static JObject ToJson(this Team team, bool includeManager = true, bool includeUsers = false, string avatarPath = null)
        {
            var creator = UserService.GetUser(team.CreatedBy);

            var result = new JObject
            {
                ["id"] = team.ID,
                ["name"] = team.Name,
                ["createdBy"] = creator.ToJson(),
                ["createdDate"] = team.CreatedDate.ToShortDateString(),
                ["isClosed"] = team.IsClosed,
            };

            if (includeManager)
            {
                var manager = GetManager(team.ID);
                result["manager"] = manager.ToJson();
            }

            if (includeUsers)
            {
                var users = UserService.GetUsersOfTeam(team.ID);
                var jArray = new JArray();
                
                foreach (User user in users)
                {
                    jArray.Add(user.ToJson(avatarPath));
                }

                result["users"] = jArray;
            }

            return result;
        }
    }
}