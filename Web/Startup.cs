using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;
using Web;

[assembly: OwinStartup(typeof(Startup))]

namespace Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();

            config.Routes.MapHttpRoute(
                "Api",
                "api/{controller}/{action}"
            );


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

            app.UseFileServer(mainIndex);
            app.UseFileServer(angularBuild);
            app.UseWebApi(config);
            app.MapSignalR();
        }
    }
}