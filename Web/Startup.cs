using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Http;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.Security.OAuth;
using Microsoft.Owin.StaticFiles;
using Owin;
using Web;
using Web.Security;

[assembly: OwinStartup(typeof(Startup))]

namespace Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();

            ConfigOAuth(app);
            ConfigApiRoutes(config);

            app.UseCors(CorsOptions.AllowAll);
            app.UseWebApi(config);

            SignalROAuthConfig(app);
            ConfigStaticFiles(app);
            app.MapSignalR();

            SetupConstant();
        }

        private void ConfigOAuth(IAppBuilder app)
        {
            OAuthAuthorizationServerOptions authorizationServerOptions = new OAuthAuthorizationServerOptions()
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/token"),
                Provider = new AgencyAuthorizationServerProvider(),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(1)
            };

            app.UseOAuthAuthorizationServer(authorizationServerOptions);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions
            {
                Provider = new OAuthBearerTokenAuthenticationProvider()
            });
        }

        private void ConfigApiRoutes(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                "Api",
                "api/{controller}/{action}/{id}",
                defaults: new {id = RouteParameter.Optional}
            );
        }

        private void ConfigStaticFiles(IAppBuilder app)
        {
            //Default index file
            var mainIndex = new FileServerOptions
            {
                EnableDefaultFiles = true,
                RequestPath = PathString.Empty,
                FileSystem = new PhysicalFileSystem(@".\"),
                DefaultFilesOptions = {DefaultFileNames = new[] {"index.html"}}
            };

            //Angular build folder 
            var angularBuild = new FileServerOptions
            {
                FileSystem = new PhysicalFileSystem(@".\Angular\dist")
            };

            //Resource folder
            var serverStaticResource = new FileServerOptions
            {
                FileSystem = new PhysicalFileSystem(@".\Resource")
            };

            app.UseFileServer(mainIndex);
            app.UseFileServer(angularBuild);
            app.UseFileServer(serverStaticResource);
        }

        private void SignalROAuthConfig(IAppBuilder app)
        {
            OAuthAuthorizationServerOptions authorizationServerOptions = new OAuthAuthorizationServerOptions()
            {
                AllowInsecureHttp = true,
//                TokenEndpointPath = new PathString("/token"),
                Provider = new AgencyAuthorizationServerProvider()
            };
            app.Map(@"/signalr", map =>
            {
                map.UseCors(CorsOptions.AllowAll);
                map.UseOAuthAuthorizationServer(authorizationServerOptions);
                map.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions
                {
                    Provider = new OAuthBearerTokenAuthenticationProvider(),
                });
                var hubConfig = new HubConfiguration
                {
                    Resolver = GlobalHost.DependencyResolver,
                    EnableDetailedErrors = true
                };
                map.RunSignalR(hubConfig);
            });
        }

        public void SetupConstant()
        {
            AgencyConfig.AvatarPath = WebConfigurationManager.AppSettings["AvatarPath"];
        }
    }
}