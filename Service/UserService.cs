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
            var users = db.Users.Where(user => user.Username == username).ToList();
            return users.Count > 0;
        }

        public bool CheckDuplicateEmail(string email)
        {
            var users = db.Users.Where(user => user.Email == email).ToList();
            return users.Count > 0;
        }

        public bool CheckDuplicatePhone(string phone)
        {
            var users = db.Users.Where(user => user.Phone == phone).ToList();
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

        public IEnumerable<User> GetUsersOfTeam(int teamId, bool excludeBanned = true, bool excludeManager = false)
        {
            IQueryable<User> users = db.Users
                    .Where(user => user.Team.ID == teamId);

            if (excludeManager)
            {
                users = users.Where(user => !user.IsManager);
            }
            
            if (excludeBanned)
            {
                users = users.Where(user => user.IsActive);
            }

            return users;
        }


        public IEnumerable<User> GetUsersOfProject(int projectId)
        {
            Project project = db.Projects.Find(projectId);
            var result = new List<User>();
            if (project != null)
            {
                var userIdList = db.UserProjects.Where(x => x.ProjectID == projectId)
                    .Select(x => x.UserID).ToList();

                foreach (var item in userIdList)
                {
                    var user = db.Users.FirstOrDefault(x => x.ID == item);
                    if (user != null)
                    {
                        result.Add(user);
                    }
                }

                return result;
            }

            throw new ObjectNotFoundException($"Can't find Project with ID {projectId} ");
        }


        public IEnumerable<User> GetUsersOfTeamVer2(int teamId)
        {
            Team team = db.Teams.Find(teamId);
            if (team != null)
            {
                return team.Users.Where(x=> x.IsManager == false).ToList();
            }
            else
            {
                throw new ObjectNotFoundException($"Can't find team with ID{teamId} ");
            }
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

        public IEnumerable<User> GetAllManager(bool excludeBanned = true)
        {
            IQueryable<User> users = db.Users.Where(user => user.IsManager);

            if (excludeBanned)
            {
                users = users.Where(user => user.IsActive);
            }
            
            return users;
        }

        public User CreateAccount(
            string name,
            string phone,
            DateTime? birthday,
            string email,
            string username,
            string password,
            int? teamId)
        {
            var newUser = new User
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

            if (teamId != null)
            {
                newUser.TeamID = teamId;
            }

            db.SaveChanges();
            return newUser;
        }
        
        public User UpdateCurrentUser(int id, string name, string password, DateTime? birthdate)
        {
            User user = db.Users.Find(id);
            if (user != null)
            {
                if (name != null)
                {
                    user.Name = name;
                }
                if (password != null)
                {
                    user.Password = password;
                }
                if (birthdate.HasValue)
                {
                    user.Birthdate = birthdate;
                }

                db.SaveChanges();
                return user;
            }
            else
            {
                throw new ObjectNotFoundException($"User with ID{id} not found");
            }
        }
        public User Updateuser(
            int id,
            string name,
            string phone,
            DateTime? birthdate,
            string email,
            int? team,
            bool? isActive)
        {
            User user = db.Users.Find(id);
            if (user != null)
            {
                if (name != null)
                {
                    user.Name = name;
                }

                if (phone != null)
                {
                    user.Phone = phone;
                }

                if (email != null)
                {
                    user.Email = email;
                }

                if (birthdate.HasValue)
                {
                    user.Birthdate = birthdate;
                }

                if (team.HasValue)
                {
                    user.TeamID = team.Value;
                }

                if (isActive.HasValue)
                {
                    user.IsActive = isActive.Value;
                }

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

        public string resetPassword(int id)
        {
            User foundUser = db.Users.Find(id);
            if (foundUser != null)
            {
                Random random = new Random();
                string newPassword = random.Next(0, 99999).ToString("D4");
                foundUser.Password = newPassword;
                db.SaveChanges();
                return newPassword;
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
                ["birthdate"] = user.Birthdate,
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
                if (user.Team != null)
                {
                    result["team"] = teamService.ParseToJson(user.Team);
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