using System;
using System.Text;
using Entity;

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

        public override string ToString()
        {
            StringBuilder stringBuilder = new StringBuilder();

            stringBuilder.Append(Subject);
            stringBuilder.Append(' ');
            stringBuilder.Append(Verb);
            stringBuilder.Append(' ');
            stringBuilder.Append(PrimaryObject);
            stringBuilder.Append(' ');
            stringBuilder.Append(ObjectLinker);
            stringBuilder.Append(' ');
            stringBuilder.Append(SecondaryObject);

            if (Location != null)
            {
                stringBuilder.Append(' ');
                stringBuilder.Append("on");
                stringBuilder.Append(' ');
                stringBuilder.Append(Location);
            }

            return stringBuilder.ToString();
        }
    }
}