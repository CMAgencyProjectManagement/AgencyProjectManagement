using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class UpdateCurrentUserModel
    {
        
        [Required]
        [MaxLength(255)]
        [MinLength(3)]
        public string Name { get; set; }
        [Required(ErrorMessage = "Password is required")]
        [MaxLength(255)]
        [MinLength(6)]
        public string Password { get; set; }
        public DateTime? Birthdate { get; set; }

    }
}