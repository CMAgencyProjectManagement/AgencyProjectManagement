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
    
    public partial class Project
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Project()
        {
            this.Lists = new HashSet<List>();
            this.TeamProjects = new HashSet<TeamProject>();
            this.UserProjects = new HashSet<UserProject>();
        }
    
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public Nullable<System.DateTime> Deadline { get; set; }
        public System.DateTime CreatedTime { get; set; }
        public int CreatedBy { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<int> ChangedBy { get; set; }
        public Nullable<System.DateTime> ChangedTime { get; set; }
        public string LessionLearnt { get; set; }
        public string CustomerFeedback { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<System.DateTime> FinishedDate { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<List> Lists { get; set; }
        public virtual User User { get; set; }
        public virtual User User1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TeamProject> TeamProjects { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UserProject> UserProjects { get; set; }
    }
}
