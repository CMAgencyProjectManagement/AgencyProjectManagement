using System.ComponentModel.DataAnnotations;

namespace Web.ViewModels
{
    public class DeleteUserModel
    {
        [Required]
        public int ID { get; set; }
    }
}