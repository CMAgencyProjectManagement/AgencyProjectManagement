using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class UpdateListModel
    {
        [Required]
        public int ID { get; set; }

        [Required]
        public int UserID { get; set; }

        [MaxLength(255)]
        public string Name { get; set; }
    }
}