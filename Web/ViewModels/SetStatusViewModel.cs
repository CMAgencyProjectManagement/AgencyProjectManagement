using System.ComponentModel.DataAnnotations;
using Service;

namespace Web.ViewModels
{
    public class SetStatusViewModel
    {
        [Required]
        public int? TaskId { get; set; }
        [Required]
        public int? TaskStatus { get; set; }
    }
}