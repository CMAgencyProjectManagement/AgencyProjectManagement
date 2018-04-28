using System;
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
            return new NotificationComponent
            {
                Type = jObject.Value<NotificationComponentType>(),
                
            };
        }
    }

    public enum NotificationComponentType
    {
        User,
        Task,
        Project,
        Department,
    }
}