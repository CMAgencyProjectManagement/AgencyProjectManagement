using System.ComponentModel.DataAnnotations;

namespace Web.ViewModels
{
    public class SetConfigViewModel
    {
        [Required]
        public int LowPoint { get; set; }
        [Required]
        public int MediumPoint { get; set; }
        [Required]
        public int HighPoint { get; set; }
        [Required]
        public int MaxDuration { get; set; }
        [Required]
        public int PenatyPercent { get; set; }
        [Required]
        public int MinAge { get; set; }
    }
}