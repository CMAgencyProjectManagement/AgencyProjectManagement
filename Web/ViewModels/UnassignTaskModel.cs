using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class UnassignTaskModel
    {
        [Required(ErrorMessage = "TaskId must not be empty")]
        public int TaskID { get; set; }

        [Required(ErrorMessage = "UserId must not be empty")]
        public int[] UserIDs { get; set; }
    }
}