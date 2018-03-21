using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class AssignProjectModel
    {
        [Required(ErrorMessage = "UserId must not be empty")]

        public int UserId { get; set; }
        [Required(ErrorMessage = "ProjectId must not be empty")]

        public int ProjectId { get; set; }
    }
}