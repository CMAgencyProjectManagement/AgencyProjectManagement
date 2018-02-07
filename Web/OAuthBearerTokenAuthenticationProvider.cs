using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.Owin.Security.OAuth;

namespace Web
{
    public class OAuthBearerTokenAuthenticationProvider : OAuthBearerAuthenticationProvider
    {
        public override Task RequestToken(OAuthRequestTokenContext context)
        {
            string queryStringToken = null;
            string headerToken = null;
            
            try
            {
                queryStringToken = context.OwinContext.Request.Query["token"];
            }
            catch (NullReferenceException)
            {
                System.Diagnostics.Debug.WriteLine("The query string does not contain the bearer token");
            }

            try
            {
                headerToken = context.OwinContext.Request.Headers["token"];
            }
            catch (NullReferenceException)
            {
                System.Diagnostics.Debug.WriteLine("The connection header does not contain the bearer token");
            }

            if (!String.IsNullOrEmpty(queryStringToken))
                context.Token = queryStringToken;

            else if (!String.IsNullOrEmpty(headerToken))
                context.Token = headerToken;

            return Task.FromResult<object>(null);
        }
    }
}