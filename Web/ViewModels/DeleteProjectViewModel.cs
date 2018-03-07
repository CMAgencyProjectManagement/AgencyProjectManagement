using System.ComponentModel.DataAnnotations;

namespace Web.ViewModels
{
    public class DeleteProjectViewModel
    {
        [Required]
        public int id { get; set; }
    }
}