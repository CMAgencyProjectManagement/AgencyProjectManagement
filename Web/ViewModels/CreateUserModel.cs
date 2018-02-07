using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class CreateUserModel
    {
        [Required]
        public string Id { get; set; }
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
        [MaxLength(255)]
        public DateTime Birthdate { get; set; }
        [EmailAddress]
        [MaxLength(255)]
        public string Email { get; set; }
        [MaxLength(255)]
        public string Avatar { get; set; }
    }
}