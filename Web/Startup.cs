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
//            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "",
                defaults: "/Angular/dist"
            );
            //Configure the file/ static file serving middleware
            var physicalFileSystem = new PhysicalFileSystem(@".\Angular\dist");
            var fileServerOptions = new FileServerOptions
            {
                EnableDefaultFiles = true,
                RequestPath = PathString.Empty,
                FileSystem = physicalFileSystem
            };

            fileServerOptions.DefaultFilesOptions.DefaultFileNames = new[] { "index.html" };
            fileServerOptions.StaticFileOptions.ServeUnknownFileTypes = true;
            fileServerOptions.StaticFileOptions.FileSystem = physicalFileSystem;
            app.UseFileServer(fileServerOptions);
            app.UseWebApi(config);
            app.MapSignalR();
        }
    }
}