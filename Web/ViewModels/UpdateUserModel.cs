using System;
using System.ComponentModel.DataAnnotations;

namespace Web.ViewModels
{
    public class UpdateUserModel
    {
        [Required]
        public int ID { get; set; }
        [Phone]
        [Required(ErrorMessage = "Phone is required")]
        [MaxLength(255)]
        [MinLength(7)]
        public string Phone { get; set; }
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        [MinLength(3)]
        [MaxLength(255)]
        public string Email { get; set; }
        public bool? IsActive { get; set; }
        public int? Team { get; set; }
    }
}