using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models
{
public class CheckListItem
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public bool IsChecked { get; set; }
        public int CheckListID { get; set; }
        public Nullable<int> ChangedBy { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> ChangedTime { get; set; }
        public Nullable<System.DateTime> CreatedTime { get; set; }

        public virtual CheckList CheckList { get; set; }
    }
}
