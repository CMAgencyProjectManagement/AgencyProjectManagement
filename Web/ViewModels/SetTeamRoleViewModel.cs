using System;
using System.ComponentModel.DataAnnotations;

namespace Web.ViewModels
{
    public class SetTeamRoleViewModel
    {
        [Required]
        public int? UserId { get; set; }
        [Required]
        public int? TeamId { get; set; }
        [Required]
        public bool? IsManager { get; set; }
    }
}