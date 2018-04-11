﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class ArchiveTaskModel
    {
        [Required(ErrorMessage = "TaskID must not be empty")]
        public int TaskID { get; set; }
    }
}