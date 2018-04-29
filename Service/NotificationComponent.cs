using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class NotificationComponent
    {
        public NotificationComponentType Type { get; set; }
        public int Id { get; set; }
        public string Content { get; set; }

        public NotificationComponent(NotificationComponentType type, int id, string content)
        {
            Type = type;
            Id = id;
            Content = content;
        }

        public NotificationComponent()
        {
        }

        public override string ToString()
        {
            return GetContent(Content);
        }

        public string GetContent(string content)
        {
            return "{{" + $"{Type.ToString()},{Id},{content}" + "}}";
        }

        public JObject ToJson()
        {
            JObject result = new JObject
            {
                ["id"] = Id,
                ["type"] = Type.ToString(),
                ["content"] = Content
            };
            return result;
        }

        public static NotificationComponent FromJson(JObject jObject)
        {
            if (jObject == null)
            {
                return null;
            }

            return new NotificationComponent
            {
                Type = ParseType(jObject.Value<string>("type")),
                Id = jObject.Value<int>("id"),
                Content = jObject.Value<string>("content")
            };
        }

        public static JObject ToJson(
            NotificationComponent notificationComponent,
            User currentUser,
            IEnumerable<int> allowedTeams,
            IEnumerable<int> allowedProjects,
            IEnumerable<int> allowedTasks)
        {
            bool allowId = false;
            JObject result = new JObject();
            if (notificationComponent.Type == NotificationComponentType.User &&
                notificationComponent.Id == currentUser.ID)
            {
                result["content"] = "You";
                allowId = true;
            }
            else
            {
                result["content"] = notificationComponent.Content;
            }

            switch (notificationComponent.Type)
            {
                case NotificationComponentType.Department:
                {
                    allowId = allowedTeams.Contains(notificationComponent.Id);
                    break;
                }
                case NotificationComponentType.Project:
                {
                    allowId = allowedProjects.Contains(notificationComponent.Id);
                    break;
                }
                case NotificationComponentType.Task:
                {
                    allowId = allowedTasks.Contains(notificationComponent.Id);
                    break;
                }
            }

            if (allowId)
            {
                result["id"] = notificationComponent.Id;
            }            

            result["type"] = notificationComponent.Type.ToString();
            return result;
        }
        
        private static NotificationComponentType ParseType(string value)
        {
            return (NotificationComponentType) Enum.Parse(typeof(NotificationComponentType), value, true);
        }
    }

    public enum NotificationComponentType
    {
        User,
        Task,
        Project,
        Department,
        StaticString
    }
}