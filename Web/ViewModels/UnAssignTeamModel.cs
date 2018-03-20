using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class UnAssignTeamModel
    {
        [Required(ErrorMessage = "ID is required")]
        public int ID { get; set; }
    }
}