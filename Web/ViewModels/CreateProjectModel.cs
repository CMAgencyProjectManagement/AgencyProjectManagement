using System;
using System.ComponentModel.DataAnnotations;

namespace Web.ViewModels
{
    public class CreateProjectModel
    {
        [Required(ErrorMessage = "Name must not be empty")]
        [MaxLength(255)]
        public string Name { get; set; }
        
        public string Description { get; set; }
        
        [AgencyDateValidation(ErrorMessage = "Invalid time format")]
        public string Deadline { get; set; }
        
        [AgencyDateValidation(ErrorMessage = "Invalid time format")]
        public string StartDate { get; set; }
    }
}