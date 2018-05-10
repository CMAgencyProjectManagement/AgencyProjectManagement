using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models
{
    public class NotificationUser
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        public int NotificationID { get; set; }
        public bool IsRead { get; set; }

        public virtual Notification Notification { get; set; }
        public virtual User User { get; set; }
    }
}
