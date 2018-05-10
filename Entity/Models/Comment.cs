using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models
{
    public class Comment
    {
        public int ID { get; set; }
        public string Body { get; set; }
        public int CreatedBy { get; set; }
        public System.DateTime CreatedTime { get; set; }
        //public DateTime ChangeTime { get; set; }
        public Nullable<System.DateTime> ChangedTime { get; set; }
        public int TaskID { get; set; }

        public virtual Task Task { get; set; }
    }
}
