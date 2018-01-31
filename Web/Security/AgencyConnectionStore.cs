using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Entity;
using Microsoft.AspNet.SignalR.Hubs;

namespace Web.Security
{
    public static class AgencyConnectionStore
    {
        private static readonly Dictionary<string, User> ConnectionMap = new Dictionary<string, User>();
        
        public static User GetUser(HubCallerContext context)
        {
            string connectionId = context.ConnectionId;
            if (string.IsNullOrEmpty(connectionId))
            {
                throw new ArgumentException();
            }

            User user = null;
            ConnectionMap.TryGetValue(connectionId, out user);
            return user;
        }

        public static void AddConnection(HubCallerContext context, User user)
        {
            string connectionId = context.ConnectionId;
            if (string.IsNullOrEmpty(connectionId) || user == null)
            {
                throw new ArgumentException();
            }

            ConnectionMap[connectionId] = user;
        }

        public static void RemoveConnection(HubCallerContext context)
        {
            string connectionId = context.ConnectionId;
            if (string.IsNullOrEmpty(connectionId))
            {
                throw new ArgumentException();
            }

            ConnectionMap.Remove(connectionId);
        }
    }
}