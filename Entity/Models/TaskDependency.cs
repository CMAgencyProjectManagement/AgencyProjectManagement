using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models
{
    public class TaskDependency
    {
        public int SourceTaskID { get; set; }
        public int DestinationTaskID { get; set; }
        public int DependencyType { get; set; }
        public Nullable<int> ChangedBy { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> ChangedTime { get; set; }
        public Nullable<System.DateTime> CreatedTime { get; set; }
        public int ID { get; set; }

        public virtual Task Task { get; set; }
        public virtual Task Task1 { get; set; }
    }
}
