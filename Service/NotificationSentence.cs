using System;
using System.Collections.Generic;
using System.Linq;
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
            JObject result = new JObject
            {
                ["subject"] = Subject.ToJson(),
                ["verb"] = Verb,
                ["primaryObject"] = PrimaryObject.ToJson(),
//                ["objectLinker"] = ObjectLinker,
//                ["secondaryObject"] = SecondaryObject.ToJson(),
//                ["location"] = Location.ToJson(),
                ["time"] = Time,
            };
            if (ObjectLinker != null)
            {
                result["objectLinker"] = ObjectLinker;
            }

            if (SecondaryObject != null)
            {
                result["secondaryObject"] = SecondaryObject.ToJson();
            }

            if (Location != null)
            {
                result["location"] = Location.ToJson();
            }

            return result;
        }

        public static NotificationSentence FromJson(JObject jObject)
        {
            return new NotificationSentence
            {
                Subject = NotificationComponent.FromJson(jObject.Value<JObject>("subject")),
                Verb = jObject.Value<string>("verb"),
                PrimaryObject = NotificationComponent.FromJson(jObject.Value<JObject>("primaryObject")),
                ObjectLinker = jObject.Value<string>("objectLinker"),
                SecondaryObject = NotificationComponent.FromJson(jObject.Value<JObject>("secondaryObject")),
                Location = NotificationComponent.FromJson(jObject.Value<JObject>("location")),
                Time = jObject.Value<string>("time"),
            };
        }

        public static JObject ToJson(
            NotificationSentence sentence,
            User currentUser,
            IEnumerable<Team> allowedTeams,
            IEnumerable<Project> allowedProjects,
            IEnumerable<Task> allowedTasks)
        {
            List<int> allowedTeamIds = allowedTeams.Select(team => team.ID).ToList();
            List<int> allowedProjectIds = allowedProjects.Select(team => team.ID).ToList();
            List<int> allowedTaskIds = allowedTasks.Select(team => team.ID).ToList();

            JObject result = new JObject
            {
                ["verb"] = sentence.Verb,
                ["objectLinker"] = sentence.ObjectLinker,
                ["time"] = sentence.Time,
            };
            result["subject"] = NotificationComponent
                .ToJson(sentence.Subject, currentUser, allowedTeamIds, allowedProjectIds, allowedTaskIds);

            result["primaryObject"] = NotificationComponent
                .ToJson(sentence.PrimaryObject, currentUser, allowedTeamIds, allowedProjectIds, allowedTaskIds);

            if (sentence.SecondaryObject != null)
            {
                result["secondaryObject"] = NotificationComponent
                    .ToJson(sentence.SecondaryObject, currentUser, allowedTeamIds, allowedProjectIds, allowedTaskIds);
            }

            if (sentence.Location != null)
            {
                result["location"] = NotificationComponent
                    .ToJson(sentence.Location, currentUser, allowedTeamIds, allowedProjectIds, allowedTaskIds);
            }
            
            return result;
        }

        public override string ToString()
        {
            return ToJson().ToString();
        }
    }
}