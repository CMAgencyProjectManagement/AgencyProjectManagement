using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models
{
    public class UserTask
    {
        public int ID { get; set; }
        public int TaskID { get; set; }
        public int UserID { get; set; }
        public bool IsFollow { get; set; }
        public bool IsAssigned { get; set; }

        public virtual Task Task { get; set; }
        public virtual User User { get; set; }  
    }
}
