using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public static class ProjectService
    {
        public static IEnumerable<Project> GetAll()
        {
            using (var db = new CmAgencyEntities())
            {
                return db.Projects.ToList();
            }
        }

        public static IEnumerable<Project> GetProjectOfUser(int userId)
        {
            using (var db = new CmAgencyEntities())
            {
                return db.Projects
                    .Where(
                        project => project.Users.Any(user => user.ID.Equals(userId))
                    )
                    .Include(p => p.Lists)
                    .ToList();
            }
        }

        /// <summary>
        /// Create new project
        /// </summary>
        /// <param name="name"></param>
        /// <param name="description"></param>
        /// <param name="deadline"></param>
        /// <param name="startDate"></param>
        /// <param name="creator">creator id</param>
        /// <returns>new project with Id</returns>
        public static Project CreateProject(string name, string description, DateTime deadline, DateTime startDate,
            User creator)
        {
            Project newProject = new Project
            {
                Name = name,
                Description = description,
                Deadline = deadline,
                StartDate = startDate,
                CreatedBy = creator.ID,
                CreatedTime = DateTime.Now
            };


            using (var db = new CmAgencyEntities())
            {
                db.Projects.Add(newProject);
                db.SaveChanges();
            }

            return newProject;
        }

        public static JObject ToJson(this Project project, bool isDetailed = false)
        {
            Customer customer = CustomerService.getCustomer(project.CustomerId);
            User creator = UserService.GetUser(project.CreatedBy);
            var result = new JObject
            {
                ["id"] = project.ID,
                ["name"] = project.Name,
                ["description"] = project.Description,
                ["deadline"] = project.Deadline,
                ["createdTime"] = project.CreatedTime,
                ["createdBy"] = creator.ToJson(),
                ["startDate"] = project.StartDate,
                ["changedTime"] = project.ChangedTime
            };
            if (project.ChangedBy.HasValue)
            {
                var changer = UserService.GetUser(project.ChangedBy.Value);
                result["changedBy"] = changer.ToJson();
            }

            if (isDetailed)
            {
                JArray listJArray = new JArray();
                foreach (List list in project.Lists)
                {
                    listJArray.Add(list.ToJson());
                }

                result["lists"] = listJArray;
            }

            return result;
        }
    }
}