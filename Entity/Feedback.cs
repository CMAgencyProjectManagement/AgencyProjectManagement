//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Entity
{
    using System;
    using System.Collections.Generic;
    
    public partial class Feedback
    {
        public int CustomerID { get; set; }
        public string Remark { get; set; }
        public int Rating { get; set; }
        public string DetailFeedback { get; set; }
        public int ProjectID { get; set; }
    
        public virtual Customer Customer { get; set; }
        public virtual Project Project { get; set; }
    }
}
