using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core;
using System.IO;
using System.Linq;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class UserService
    {
        private readonly CmAgencyEntities db;

        public UserService(CmAgencyEntities db)
        {
            this.db = db;
        }

        public bool CheckDuplicatedUsername(string username)
        {
            var users  = db.Users.Where(user => user.Username == username).ToList();
            return users.Count > 0;
        }
        

        public User GetUser(string username, string password)
        {
            User foundUser =
                db.Users.SingleOrDefault(user =>
                    user.Username == username &&
                    user.Password == password
                );
            // Check one more time because the sql server not set to case sensitive as default
            if (foundUser != null &&
                foundUser.Username == username &&
                foundUser.Password == password)
            {
                return foundUser;
            }

            return null;
        }

        public User GetUser(int id)
        {
            return db.Users.Find(id);
        }

        public User GetUser(string id)
        {
            try
            {
                int? userId = int.Parse(id);
                return GetUser(userId.Value);
            }
            catch (FormatException)
            {
                return null;
            }
            catch (ArgumentNullException)
            {
                return null;
            }
        }

        public IEnumerable<User> GetAll()
        {
            return db.Users.ToList();
        }

        public IEnumerable<User> GetUsersOfTeam(int teamId)
        {
            IEnumerable<User> users = db.Users.Where(user => user.Teams.Any(team => team.ID == teamId));
            return users.ToList();
        }

        public void UpdateAvatar(string avatarFileName, int id)
        {
            User user = db.Users.Find(id);
            if (user != null)
            {
                user.Avatar = avatarFileName;
                db.SaveChanges();
            }
            else
            {
                throw new ObjectNotFoundException($"User with Id {id} not found");
            }
        }

        public User CreateAccount(
            string name,
            string phone,
            DateTime? birthday,
            string email,
            string username,
            string password,
            int teamId)
        {
            User newUser;
            newUser = new User
            {
                Name = name,
                Phone = phone,
                Birthdate = birthday,
                Email = email,
                Username = username,
                Password = password,
                Avatar = null,
                IsAdmin = false,
                IsActive = true
            };
            db.Users.Add(newUser);

            Team team = db.Teams.Find(teamId);
            UserTeam userTeam = new UserTeam
            {
                User = newUser,
                Team = team
            };
            db.UserTeams.Add(userTeam);

            db.SaveChanges();


            return newUser;
        }

        public User Updateuser(
            int id,
            string name,
            string phone,
            DateTime? birthdate,
            string email)
        {
            User user = db.Users.Find(id);
            if (user != null)
            {
                user.Name = name;
                user.Phone = phone;
                user.Birthdate = birthdate;
                user.Email = email;
                db.SaveChanges();
                return user;
            }
            else
            {
                throw new ObjectNotFoundException($"User with ID{id} not found");
            }
        }

        public int DeactiveUser(int id)
        {
            User user = db.Users.Find(id);
            if (user != null)
            {
                user.IsActive = false;
                db.SaveChanges();
                return id;
            }

            throw new ObjectNotFoundException($"User with ID{id} not found");
        }

        public JObject ParseToJson(
            User user,
            string avatarPath = null,
            bool includePassword = false,
            bool includeTeam = false)
        {
            JObject result = new JObject
            {
                ["id"] = user.ID,
                ["name"] = user.Name,
                ["phone"] = user.Phone,
                ["birthday"] = user.Birthdate,
                ["email"] = user.Email,
                ["username"] = user.Username,
                ["isAdmin"] = user.IsAdmin,
                ["isManager"] = user.IsManager,
                ["isActive"] = user.IsActive
            };

            string avatar = user.Avatar;
            if (user.Avatar != null && !String.IsNullOrEmpty(avatarPath))
            {
                result["avatar"] = Path.Combine(avatarPath, avatar);
            }

            if (includePassword)
            {
                result["password"] = user.Password;
            }

            if (includeTeam)
            {
                TeamService teamService = new TeamService(db);
                List<UserTeam> userTeams = db.UserTeams.Where(userteam => userteam.UserID == user.ID).ToList();
                if(userTeams.Count > 0)
                {
                    Team team = userTeams.First().Team;
                    result["team"] = teamService.ParseToJson(team);

                }
                else
                {
                    result["team"] = null;
                }
               
                
                
            }


            return result;
        }
    }
}