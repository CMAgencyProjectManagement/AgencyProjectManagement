using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class UpdateProjectModel
    {
        [Required]
        public int ID { get; set; }
        [Required]
        [MaxLength(255)]
        public String Name { get; set; }
        public String Description { get; set; }
        public DateTime? Deadline { get; set; }
        public DateTime? StartDate { get; set; }
        public String LessionLearnt { get; set; }
        public String CustomerFeedback { get; set; }



    }

}