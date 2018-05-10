using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Models
{
    public class TeamProject
    {
        public int ID { get; set; }
        public int TeamID { get; set; }
        public int ProjectID { get; set; }

        public virtual Project Project { get; set; }
        public virtual Team Team { get; set; }
    }
}