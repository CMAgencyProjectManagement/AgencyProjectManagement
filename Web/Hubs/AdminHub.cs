using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Web.Security;

namespace Web.Hubs
{
    public class AdminHub : Hub
    {
        public void HelloAdmin()
        {
            Clients.Caller.HelloAdminResponse("Sup my clients");
        }
    }
}