using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using System.Net;
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
                    foreach (var user in foundTeam.Users)
                    {
                        if (user.IsManager)
                        {
                            return user;
                        }
                    }
                }

                return null;
            }
        }

        public static Team GetTeamOfUser(int userId)
        {
            using (var db = new CmAgencyEntities())
            {
                User foundUser = db.Users.Find(userId);
                if (foundUser != null)
                {
                    foundUser.Teams
                }
                else
                {
                    throw new ObjectNotFoundException($"Can't find team with ID{userId}");
                }
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


                    entities.SaveChanges();
                    return team;
                }
                else
                {
                    throw new ObjectNotFoundException($"User with ID{id} not found");
                }
            }
        }

        public static JObject ToJson(this Team team)
        {
            var creator = UserService.GetUser(team.CreatedBy);
            var manager = GetManager(team.ID);

            return new JObject
            {
                ["id"] = team.ID,
                ["name"] = team.Name,
                ["createdBy"] = creator.ToJson(),
                ["createdDate"] = team.CreatedDate.ToShortDateString(),
                ["isClosed"] = team.IsClosed,
                ["manager"] = manager.ToJson()
            };
        }
    }
}