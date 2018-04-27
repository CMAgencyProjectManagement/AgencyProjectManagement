using System;
using System.Text;
using Entity;
using Microsoft.SqlServer.Server;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class NotificationSentence
    {
        public NotificationComponent Subject { get; set; }
        public string Verb { get; set; }
        public NotificationComponent PrimaryObject { get; set; }
        public string ObjectLinker { get; set; }
        public NotificationComponent SecondaryObject { get; set; }
        public NotificationComponent Location { get; set; }
        public string Time { get; set; }

        public JObject ToJson()
        {
            return  new JObject
            {
                ["subject"] = Subject.ToJson(),
                ["verb"] = Verb,
                ["primaryObject"] = PrimaryObject.ToJson(),
                ["objectLinker"] = ObjectLinker,
                ["secondaryObject"] = SecondaryObject.ToJson(),
                ["location"] = Location.ToJson(),
                ["time"] = Time,
            };
        }

        public override string ToString()
        {

            return ToJson().ToString();
        }
    }
}