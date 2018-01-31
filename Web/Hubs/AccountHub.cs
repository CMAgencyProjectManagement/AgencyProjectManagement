using System;
using Entity;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json.Linq;
using Service;
using Web.Security;

namespace Web.Hubs
{
    public class AccountHub : Hub
    {
        public JObject Login(string username, string password)
        {
            try
            {
                User foundUser = UserService.GetUser(username, password);
                if (foundUser != null)
                {
                    AgencyConnectionStore.AddConnection(Context, foundUser);
                    return new JObject
                    {
                        ["isSuccess"] = true,
                        ["account"] = new JObject
                        {
                            ["id"] = foundUser.ID,
                            ["username"] = foundUser.Username,
                            ["avatar"] = foundUser.Avatar,
                            ["isAdmin"] = foundUser.IsAdmin
                        }
                    };
                }

                return new JObject
                {
                    ["isSuccess"] = false,
                    ["message"] = "Invalid username or password"
                };
            }
            catch (Exception exception)
            {
                Clients.Caller.handleServerError(exception);
                return null;
            }
        }


        /**
         * Access: admin
         */
        public JObject CreateAccount(string username, string password, string avatar)
        {
            try
            {
                User currentUser = AgencyConnectionStore.GetUser(Context);
                if (currentUser != null && currentUser.IsAdmin)
                {
                    User newUser = UserService.CreateAccount(username, password, avatar);

                    return new JObject
                    {
                        ["isSuccess"] = true,
                        ["userId"] = newUser.ID
                    };
                }

                return new JObject
                {
                    ["isSuccess"] = false,
                    ["message"] = "User are not authorized for this operation"
                };
            }
            catch (Exception exception)
            {
                Clients.Caller.handleServerError(exception);
                return null;
            }
        }
    }
}