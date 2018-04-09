using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class UpdateCommentModel
    {
        [Required]
        public int id { get; set; }

        public String Body { get; set; }

    }
}