using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class CreateUserModel
    {
        [Required(ErrorMessage = "Username is required")]
        [MaxLength(255)]
        public string Username { get; set; }
        [Required(ErrorMessage = "Password is required")]
        [MaxLength(255)]
        public string Password { get; set; }
        [Required(ErrorMessage = "Fullname is required")]
        [MaxLength(255)]
        public string Name { get; set; }
        [Phone]
        [MaxLength(255)]
        public string Phone { get; set; }
        [AgencyDateValidation(ErrorMessage = "Invalid time format")]
        public string Birthdate { get; set; }
        [Required]
        [EmailAddress]
        [MaxLength(255)]
        public string Email { get; set; }
        [Required(ErrorMessage = "Team is required")]
        public int? Team { get; set; }
    }
}    