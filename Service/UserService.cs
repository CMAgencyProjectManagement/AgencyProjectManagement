using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity;

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
    }
}