﻿using System;
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
    }
}