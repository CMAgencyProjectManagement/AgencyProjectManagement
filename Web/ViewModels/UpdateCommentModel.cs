﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class UpdateCommentModel
    {
        public int id { get; set; }

        public String Body { get; set; }

        public string ChangedTime { get; set; }
    }
}