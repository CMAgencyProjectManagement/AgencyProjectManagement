﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Web.Validators;

namespace Web.ViewModels
{
    public class UnAssignTeamModel
    {
        [Required(ErrorMessage = "Users is required")]
        [AgencyArrayValidator.MustHaveOneElementAttribute(ErrorMessage = "Must at least one user")]
        public int[] UserIds { get; set; }
        
        [Required]
        public int TeamId { get; set; }
    }
}