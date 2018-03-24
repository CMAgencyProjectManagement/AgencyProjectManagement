using System.ComponentModel.DataAnnotations;
using Web.Validators;

namespace Web.ViewModels
{
    public class UpdateProjectViewModel
    {
        [Required]
        public int id { get; set; }
        [MaxLength(255)]
        public string name { get; set; }
        public string description { get; set; }
        [AgencyDateValidation]
        public string startdate { get; set; }
        [AgencyDateValidation]
        public string deadline { get; set; }
    }
}