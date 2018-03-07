using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core;
using System.IO;
using System.Linq;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public static class UserService
    {
        public static User GetUser(string username, string password)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                User foundUser =
                    entities.Users.SingleOrDefault(user =>
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
        }

        public static User GetUser(int id)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                return entities.Users.Find(id);
            }
        }

        public static User GetUser(string id)
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

        public static IEnumerable<User> GetAll()
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                return entities.Users.Include(user => user.Teams1).ToList();
            }
        }

        public static void UpdateAvatar(string avatarFileName, int id)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                User user = entities.Users.Find(id);
                if (user != null)
                {
                    user.Avatar = avatarFileName;
                    entities.SaveChanges();
                }
                else
                {
                    throw new ObjectNotFoundException($"User with Id {id} not found");
                }
            }
        }

        public static User CreateAccount(
            string name,
            string phone,
            DateTime? birthday,
            string email,
            string username,
            string password)
        {
            User newUser;
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
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
                entities.Users.Add(newUser);
                entities.SaveChanges();
            }

            return newUser;
        }

        public static User Updateuser(
            int id,
            string name,
            string phone,
            DateTime? birthdate,
            string email)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                User user = entities.Users.Find(id);
                if (user != null)
                {
                    user.Name = name;
                    user.Phone = phone;
                    user.Birthdate = birthdate;
                    user.Email = email;
                    entities.SaveChanges();
                    return user;
                }
                else
                {
                    throw new ObjectNotFoundException($"User with ID{id} not found");
                }
            }
        }

        public static int DeactiveUser(int id)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                User user = entities.Users.Find(id);
                if (user != null)
                {
                    user.IsActive = false;
                    entities.SaveChanges();
                    return id;
                }

                throw new ObjectNotFoundException($"User with ID{id} not found");
            }
        }

        public static JObject ToJson(
            this User user,
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
                result["team"] = user.Teams1.First().ToJson(false);
            }

            return result;
        }
    }
}