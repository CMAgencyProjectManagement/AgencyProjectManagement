using System;
using System.ComponentModel.DataAnnotations;

namespace Web.ViewModels
{
    public class UpdateUserModel
    {
        [Required]
        public int ID { get; set; }
        [MaxLength(255)]
        public string Name { get; set; }
        [Phone]
        [MaxLength(255)]
        public string Phone { get; set; }
        public DateTime? Birthdate { get; set; }
        [EmailAddress]
        [MaxLength(255)]
        public string Email { get; set; }
    }
}