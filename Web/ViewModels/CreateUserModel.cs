using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class CreateUserModel
    {
        [MaxLength(255)]
        public string Username { get; set; }
        [Required]
        [MaxLength(255)]
        public string Password { get; set; }
        [MaxLength(255)]
        public string Name { get; set; }
        [Phone]
        [MaxLength(255)]
        public string Phone { get; set; }
        
        public DateTime? Birthdate { get; set; }
        [EmailAddress]
        [MaxLength(255)]
        public string Email { get; set; }
          
        public HttpPostedFile Avatar { get; set; }
    }
}    