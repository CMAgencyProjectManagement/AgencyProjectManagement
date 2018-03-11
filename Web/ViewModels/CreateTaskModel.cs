using Service;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class CreateTaskModel
    {
        [Required(ErrorMessage = "Name must not be empty")]
        [MaxLength(255)]
        public string Name { get; set; }
        public string Description { get; set; }
        [Required(ErrorMessage = "ListId must not be empty")]

        public int ListID { get; set; }
        public TaskPriority Priority { get; set; }
        [AgencyDateValidation(ErrorMessage = "Invalid time format")]

        public string StartDate { get; set; }
    }
}