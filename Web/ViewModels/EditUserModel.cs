using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class EditUserModel
    {
        [Required]
        public int ID { get; set; }
        [MaxLength(255)]
        public string Name { get; set; }
        [EmailAddress]
        [MaxLength(255)]
        public string Email { get; set; }
        [MaxLength(255)]
        public string Username { get; set; }
        [MaxLength(255)]
        public string Avatar { get; set; }


    }
}