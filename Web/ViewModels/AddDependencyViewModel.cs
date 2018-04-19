using System.ComponentModel.DataAnnotations;

namespace Web.ViewModels
{
    public class AddDependencyViewModel
    {
        [Required] public int destinationtaskId { get; set; }
        
    }
}