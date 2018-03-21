using System;
using System.ComponentModel.DataAnnotations;

namespace Web.ViewModels
{
    public class UpdateUserModel
    {
        [Required]
        public int ID { get; set; }
        [MaxLength(255)]
        [Required(ErrorMessage = "Name must not be empty")]
        public string Name { get; set; }
        [Phone]
        [MaxLength(255)]
        public string Phone { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public DateTime? Birthdate { get; set; }
        public bool? IsActive { get; set; }
        public int? Team { get; set; }
    }
}