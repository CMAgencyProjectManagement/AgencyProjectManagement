using System;
using System.Collections.Generic;
using System.Security.Claims;
using Entity;
using Microsoft.Owin.Security.OAuth;
using Service;
using Task = System.Threading.Tasks.Task;

namespace Web.Security
{
    public class AgencyAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            try
            {
                string userIdString = null;
                string username = context.Parameters["username"];
                string password = context.Parameters["password"];
                if (!String.IsNullOrEmpty(username) && !String.IsNullOrEmpty(password))
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        UserService userService = new UserService(db);
                        User user = userService.GetUser(username, password);
                        if (user != null)
                        {
                            if (!user.IsActive)
                            {
                                userIdString = user.ID.ToString();
                                context.Validated(userIdString);
                            }
                            else
                            {
                                context.Rejected();
                                context.SetError("Invalid user", "User has been banned");
                            }
                        }
                        else
                        {
                            context.Rejected();
                            context.SetError("Invalid user", "Invalid username or password");
                        }
                        
                    }
                }
            }
            catch (Exception ex)
            {
                context.Rejected();
                context.SetError("Server error", ex.Message);
            }

            await base.ValidateClientAuthentication(context);
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            try
            {
                List<Claim> claims = new List<Claim>();
                string userId = context.ClientId;

                claims.Add(new Claim(ClaimTypes.NameIdentifier, userId));

                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    User user = userService.GetUser(userId);
                    if (user.IsAdmin)
                    {
                        claims.Add(new Claim(ClaimTypes.Role, "Admin"));
                    }

                    if (user.IsManager)
                    {
                        claims.Add(new Claim(ClaimTypes.Role, "Manager"));
                    }
                    
                    if (!user.IsManager && !user.IsAdmin)
                    {
                        claims.Add(new Claim(ClaimTypes.Role, "Staff"));
                    }
                }
                context.Validated(new ClaimsIdentity(claims, context.Options.AuthenticationType));
            }
            catch (Exception ex)
            {
                context.Rejected();
                context.SetError("Server error", ex.Message);
            }

            await base.GrantResourceOwnerCredentials(context);
        }
    }
}