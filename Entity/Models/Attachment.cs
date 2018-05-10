using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models
{
    public class Attachment
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int TaskID { get; set; }
        public string Path { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedTime { get; set; }

        public virtual Task Task { get; set; }
    }
}
