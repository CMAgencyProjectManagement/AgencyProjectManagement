using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class UnassignTaskViewModel
    {
        [Required(ErrorMessage = "TaskId must not be empty")]
        public int TaskId { get; set; }
        [Required(ErrorMessage = "UserId must not be empty")]
        public int UserId { get; set; }
    }
}