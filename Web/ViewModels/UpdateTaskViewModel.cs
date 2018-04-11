using Service;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Web.Validators;

namespace Web.ViewModels
{
    public class UpdateTaskViewModel
    {
        [Required]
        public int Id { get; set; }
        [Required(ErrorMessage = "Name must not be empty")]
        [MaxLength(255)]
        public string Name { get; set; }
        public string Description { get; set; }
        [Required(ErrorMessage = "ListId must not be empty")]

        public int ListID { get; set; }
        public int Priority { get; set; }
        [Required(ErrorMessage = "StartDate must not be empty")]
        public DateTime StartDate { get; set; }
        [Required(ErrorMessage = "Duration must not be empty")]
        public int Duration { get; set; }
        [Required(ErrorMessage = "Effort must not be empty")]
        public int Effort { get; set; }
    }
}