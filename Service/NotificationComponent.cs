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
    }

    public enum NotificationComponentType
    {
        User,
        Task,
        Project,
        Department,
    }
}

