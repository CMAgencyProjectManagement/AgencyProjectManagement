using System.Threading.Tasks;
using Microsoft.Owin.Security.OAuth;

namespace Web
{
    public class QueryStringOAuthBearerProvider : OAuthBearerAuthenticationProvider
    {
        public override Task RequestToken(OAuthRequestTokenContext context)
        {
            var value = context.Request.Query.Get("access_token");

            if (!string.IsNullOrEmpty(value))
            {
                context.Token = value;
            }

            return base.RequestToken(context);
        }
        
        
    }
}