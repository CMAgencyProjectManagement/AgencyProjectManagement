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


            var mainIndex = new FileServerOptions
            {
                EnableDefaultFiles = true,
                RequestPath = PathString.Empty,
                FileSystem = new PhysicalFileSystem(@".\"),
                DefaultFilesOptions = {DefaultFileNames = new[] {"index.html"}}
            };

            //Configure the file/ static file serving middleware
            var dependency = new FileServerOptions
            {
//                EnableDefaultFiles = true,
//                RequestPath = new PathString(@"~/Angular/dist"),
                FileSystem = new PhysicalFileSystem(@".\Angular\dist")
            };
            
            app.UseFileServer(mainIndex);
            app.UseFileServer(dependency);
            app.UseWebApi(config);
            app.MapSignalR();
        }
    }
}