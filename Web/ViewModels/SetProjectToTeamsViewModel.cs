using System.ComponentModel.DataAnnotations;

namespace Web.ViewModels
{
    public class SetProjectToTeamsViewModel
    {
        [Required]
        public int ProjectID { get; set; }
        [Required]
        public int[] TeamIDs { get; set; }
    }
}