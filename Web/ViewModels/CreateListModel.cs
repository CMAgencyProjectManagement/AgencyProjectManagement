using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class CreateListModel
    {
        [Required(ErrorMessage = "Project ID must not be empty")]

        public int ProjectID { get; set; }
        [Required(ErrorMessage = "Name must not be empty")]
        [MaxLength(255)]
        public string Name { get; set; }

    }
}