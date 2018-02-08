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

        public static JObject ToJson(this Team team)
        {
            var creator = UserService.GetUser(team.CreatedBy);
            return new JObject
            {
                ["id"] = team.ID,
                ["name"] = team.Name,
                ["createdBy"] = creator.ToJson(),
                ["createdDate"] = team.CreatedDate,
                ["IsClosed"] = team.IsClosed
            };
        }
    }
}