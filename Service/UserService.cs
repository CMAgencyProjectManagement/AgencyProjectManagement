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
                    entities.Users.FirstOrDefault(user => user.Username == username && user.Password == password);
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
                    Avatar = avatar
                };
                entities.Users.Add(newUser);
                entities.SaveChanges();
            }

            // After save change user will have Id
            return newUser;
        }
    }
}