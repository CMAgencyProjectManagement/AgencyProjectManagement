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
    
    public partial class Comment
    {
        public int ID { get; set; }
        public string Body { get; set; }
        public int CreatedBy { get; set; }
        public System.DateTime CreatedTime { get; set; }
        public Nullable<System.DateTime> ChangedTime { get; set; }
        public int TaskID { get; set; }
        public Nullable<int> ChangedBy { get; set; }
    
        public virtual Task Task { get; set; }
    }
}
