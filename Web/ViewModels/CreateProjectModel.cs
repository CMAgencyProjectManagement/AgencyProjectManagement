using System;
using System.ComponentModel.DataAnnotations;
using Web.Validators;

namespace Web.ViewModels
{
    public class CreateProjectModel
    {
        [Required(ErrorMessage = "Name must not be empty")]
        [MaxLength(255)]
        public string Name { get; set; }
        
        public string Description { get; set; }
        
        [Required(ErrorMessage = "Deadline must not be empty")]
        public DateTime? Deadline { get; set; }
        
        [Required(ErrorMessage = "Start date must not be empty")]
        public DateTime? StartDate { get; set; }
    }
}