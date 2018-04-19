using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Web.Validators;

namespace Web.ViewModels
{
    public class AssignProjectModel
    {
        [Required(ErrorMessage = "Users must not be empty")]
        [AgencyArrayValidator.MustHaveOneElementAttribute(ErrorMessage = "You must select at least one user")]
        public int[] UserIds { get; set; }
        [Required(ErrorMessage = "Project must not be empty")]
        public int ProjectId { get; set; }
    }
}