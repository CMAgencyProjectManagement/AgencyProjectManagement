using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public static class TeamService
    {
        public static IEnumerable<Team> GetAll()
        {
            using (var db = new CmAgencyEntities())
            {
                return db.Teams.ToList();
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