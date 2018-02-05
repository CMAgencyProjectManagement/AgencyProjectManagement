using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Entity;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json.Linq;
using Web.Security;

namespace Web.Hubs
{
    public class ProjectHub : Hub
    {
        /***
         * Get current active project
         * an active project is: started but not ended
         * Security: allow logined user
         */
        public JObject GetActiveProjects()
        {
            User currentUser = AgencyConnectionStore.GetUser(Context);
            JObject result = null;

            try
            {
                throw new NotImplementedException();//remove this
                //Code here
            }
            catch (Exception exception)
            {
                result = ResponseHelper.GetExceptionResponse(exception);
            }

            return result;
        }

        /***
         * Get current active project
         * an active project is: started but not ended
         * Security: allow admin
         */
        public JObject GetAllProjects()
        {
            User currentUser = AgencyConnectionStore.GetUser(Context);
            JObject result = null;

            try
            {
                throw new NotImplementedException();//remove this
                //Code here
            }
            catch (Exception exception)
            {
                result = ResponseHelper.GetExceptionResponse(exception);
            }

            return result;
        }
    }
}