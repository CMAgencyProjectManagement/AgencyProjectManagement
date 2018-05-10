using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity.Models;

namespace Entity.DAL
{
    class CmaInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<CmAgencyEntities>
    {
        protected override void Seed(CmAgencyEntities context)
        {
            var users = new List<User>
            {
                new User
                {
                    Name = "Admin",
                    Phone = "0123456789",
                    Birthdate = DateTime.Parse("1992-02-17 00:00:00.000"),
                    Email = "admin@cma.com",
                    Username = "admin",
                    Password = "123456",
                    Avatar = "avt1.png",
                    IsAdmin = true,
                    IsActive = true,
                    IsManager = false,
                    TeamID = null
                },
            };

            users.ForEach(user => context.Users.Add(user));
            context.SaveChanges();

            var departments = new List<Team>()
            {
                new Team
                {
                    Name = "Creative department",
                    CreatedBy = users.Single(user => user.IsAdmin).ID,
                    CreatedDate = DateTime.Today
                },
                new Team
                {
                    Name = "Account Management department",
                    CreatedBy = users.Single(user => user.IsAdmin).ID,
                    CreatedDate = DateTime.Today
                },
                new Team
                {
                    Name = "Production department",
                    CreatedBy = users.Single(user => user.IsAdmin).ID,
                    CreatedDate = DateTime.Today
                },
                new Team
                {
                    Name = "Strategic Planning department",
                    CreatedBy = users.Single(user => user.IsAdmin).ID,
                    CreatedDate = DateTime.Today
                }
            };
            departments.ForEach(department => context.Teams.Add(department));
            context.SaveChanges();
        }
    }
}