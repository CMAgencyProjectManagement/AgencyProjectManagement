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
                    User user = UserService.GetUser(username, password);
                    if (user != null)
                    {
                        userIdString = user.ID.ToString();
                    }
                }

                if (!String.IsNullOrEmpty(userIdString))
                {
                    context.Validated(userIdString);
                }
                else
                {
                    context.Rejected();
                    context.SetError("Invalid user", "Invalid username or password");
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

                User user = UserService.GetUser(userId);
                if (user.IsAdmin)
                {
                    claims.Add(new Claim(ClaimTypes.Role, "Admin"));
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