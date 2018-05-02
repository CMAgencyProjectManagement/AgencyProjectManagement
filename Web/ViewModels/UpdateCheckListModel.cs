using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class UpdateCheckListModel
    {
        [MaxLength(255)]
        public string Name { get; set; }
    }
}