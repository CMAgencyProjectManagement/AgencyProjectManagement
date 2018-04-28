using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace Web.ViewModels
{
    public class CreateUserModel
    {
        [Required(ErrorMessage = "Username is required")]
        [MaxLength(255)]
        [MinLength(3)]
        public string Username { get; set; }
        [Required(ErrorMessage = "Password is required")]
        [MaxLength(255)]
        [MinLength(6)]
        public string Password { get; set; }
        [Required]
        [MaxLength(255)]
        [MinLength(3)]
        public string Name { get; set; }
        [Phone]
        [Required(ErrorMessage = "Phone is required")]
        [MaxLength(255)]
        [MinLength(7)]
        public string Phone { get; set; }
        // [AgencyDateValidation(ErrorMessage = "Invalid time format")]
        
        public DateTime? Birthdate { get; set; }
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        [MinLength(3)]
        [MaxLength(255)]
        public string Email { get; set; }
        //[Required(ErrorMessage = "Team is required")]
        public int? Team { get; set; }
    }
}    