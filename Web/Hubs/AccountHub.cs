using System;
using Entity;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Newtonsoft.Json.Linq;
using Service;
using Web.Security;

namespace Web.Hubs
{
    public class AccountHub : Hub
    {
        public JObject Login(string username, string password)
        {
            JObject result;
            try
            {
                User foundUser = UserService.GetUser(username, password);
                if (foundUser != null)
                {
                    AgencyConnectionStore.AddConnection(Context, foundUser);
                    JObject dataJObject = new JObject
                    {
                        ["id"] = foundUser.ID,
                        ["username"] = foundUser.Username,
                        ["avatar"] = foundUser.Avatar,
                        ["isAdmin"] = foundUser.IsAdmin
                    };
                    result = ResponseHelper.GetResponse(dataJObject);
                }
                else
                {
                    result = ResponseHelper.GetExceptionResponse("Invalid username or password");
                }
            }
            catch (Exception exception)
            {
                result = ResponseHelper.GetExceptionResponse(exception);
            }

            return result;
        }


        /***
         * Get current all accounts
         * Security: allow admin
         */
        [Authorize]
        public JObject GetAllAccounts()
        {
            User currentUser = AgencyConnectionStore.GetUser(Context);
            JObject result = null;

            try
            {
                result = ResponseHelper.GetResponse(new JObject
                {
                    ["data"] = "testData"
                });
            }
            catch (Exception exception)
            {
                result = ResponseHelper.GetExceptionResponse(exception);
            }


            return result;
        }


        /***
         * Create account
         * Security: admin
         */
        public JObject CreateAccount(string username, string password, string avatar)
        {
            User currentUser = AgencyConnectionStore.GetUser(Context);
            JObject result = null;

            try
            {
                //Validation code


                //Other
                if (currentUser != null && currentUser.IsAdmin)
                {
                    User newUser = UserService.CreateAccount(username, password, avatar);
                    JObject dataJObject = new JObject
                    {
                        ["newUserId"] = newUser.ID
                    };
                    result = ResponseHelper.GetResponse(dataJObject);
                }
                else
                {
                    result = ResponseHelper.GetExceptionResponse("User must be Admin to use this function");
                }
            }
            catch (Exception exception)
            {
                result = ResponseHelper.GetExceptionResponse(exception);
            }

            return result;
        }
    }
}