using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Web.Api
{
    public class FileController : ApiController
    {
        //TODO: Security for file api
        // GET api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] {"value1", "value2"};
        }

        // GET api/<controller>/5
        [HttpPost]
        public HttpResponseMessage UploadAvarta()
        {
            HttpResponseMessage result = null;

            var httpRequest = HttpContext.Current.Request;

            if (httpRequest.Files.Count > 0)
            {
                var files = new List<string>();

                foreach (string file in httpRequest.Files)
                {
                    var postedFile = httpRequest.Files[file];

                    var filePath = HttpContext.Current.Server.MapPath("~/" + postedFile.FileName);

                    postedFile.SaveAs(filePath);


                    files.Add(filePath);
                }

                result = Request.CreateResponse(HttpStatusCode.Created, files);
            }

            else

            {
                result = Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            return result;
        }

        private List<string> SaveFiles(HttpPostedFile[] files, string path)
        {
            var result = new List<string>();

            foreach (HttpPostedFile postedFile in files)
            {
                var filePath = HttpContext.Current.Server.MapPath("~/" + path + postedFile.FileName);

                postedFile.SaveAs(filePath);
                result.Add(filePath);
            }

            return result;
        }
    }
}