using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public static class UserService
    {
        public static User GetUser(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                return null;
            }

            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                User foundUser =
                    entities.Users.FirstOrDefault(user =>
                        user.Username.Equals(username) &&
                        user.Password.Equals(password));
                return foundUser;
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
                return entities.Users.ToList();
            }
        }

        public static User CreateAccount(string username, string password, string avatar, bool isAdmin = false)
        {
            User newUser;
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                newUser = new User
                {
                    Username = username,
                    Password = password,
                    IsAdmin = false,
                    Avatar = avatar,
                    IsActive = true
                };
                entities.Users.Add(newUser);
                entities.SaveChanges();
            }

            // After save change user will have Id
            return newUser;
        }

        public static JObject ToJson(this User user, string avatarPath = null, bool includePassword = false)
        {
            string password = null;
            string avatar = user.Avatar;
            if (user.Avatar != null && !String.IsNullOrEmpty(avatarPath))
            {
                avatar = Path.Combine(avatarPath, avatar);

            }
            if (includePassword)
            {
                password = user.Password;
            }
            return new JObject
            {
                ["id"] = user.ID,
                ["name"] = user.Name,
                ["phone"] = user.Phone,
                ["birthday"] = user.Birthdate,
                ["email"] = user.Email,
                ["username"] = user.Username,
                ["password"] = password,
                ["avatar"] = avatar,
                ["isAdmin"] = user.IsAdmin
            };
        }
    }
}