﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class CmAgencyEntities : DbContext
    {
        public CmAgencyEntities()
            : base("name=CmAgencyEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Attachment> Attachments { get; set; }
        public virtual DbSet<Comment> Comments { get; set; }
        public virtual DbSet<Label> Labels { get; set; }
        public virtual DbSet<Project> Projects { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Stage> Stages { get; set; }
        public virtual DbSet<Task> Tasks { get; set; }
        public virtual DbSet<TaskDependency> TaskDependencies { get; set; }
        public virtual DbSet<Team> Teams { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserProject> UserProjects { get; set; }
        public virtual DbSet<UserTask> UserTasks { get; set; }
    }
}
