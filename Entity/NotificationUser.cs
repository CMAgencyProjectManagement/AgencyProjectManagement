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
    
    public partial class NotificationUser
    {
        public int UserID { get; set; }
        public int NotificationID { get; set; }
        public bool IsRead { get; set; }
    
        public virtual Notification Notification { get; set; }
        public virtual User User { get; set; }
    }
}
