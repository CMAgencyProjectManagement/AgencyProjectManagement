using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class DeleteListModel
    {
        [Required]
        public int ID { get; set; }
    }
}