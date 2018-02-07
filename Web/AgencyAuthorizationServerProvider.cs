using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Security.Claims;
using System.Web;
using Entity;
using Microsoft.Owin.Security.OAuth;
using Service;
using Task = System.Threading.Tasks.Task;

namespace Web
{
    public class AgencyAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
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


            await base.ValidateClientAuthentication(context);
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
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
            await base.GrantResourceOwnerCredentials(context);
        }
    }
}