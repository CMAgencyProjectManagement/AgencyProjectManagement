using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class ProjectService
    {
        private readonly CmAgencyEntities db;

        public ProjectService(CmAgencyEntities db)
        {
            this.db = db;
        }

        public IEnumerable<Project> GetAll()
        {
            return db.Projects.ToList();
        }

        public IEnumerable<Project> GetProjectOfUser(int userId)
        {
            return db.Projects
                .Where(
                    project => project.Users.Any(user => user.ID.Equals(userId))
                )
                .Include(p => p.Lists)
                .ToList();
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
        public Project CreateProject(string name, string description, DateTime deadline, DateTime startDate,
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


            db.Projects.Add(newProject);
            db.SaveChanges();


            return newProject;
        }

        public Project GetProjectOfTask(int taskId)
        {
            ListService listService = new ListService(db);
            return listService.GetListOfTask(taskId).Project;
        }

        public Project UpdateProject(
            int id,
            string name,
            string description,
            DateTime? deadline,
            DateTime? startDate)
        {
            var foundProject = db.Projects.Find(id);
            if (foundProject != null)
            {
                foundProject.Name = name;
                foundProject.Description = description;
                foundProject.Deadline = deadline;
                foundProject.StartDate = startDate;
                db.SaveChanges();
                return foundProject;
            }
            else
            {
                throw new ObjectNotFoundException($"Can't find project with ID {id}");
            }
        }

        public int CloseProject(int id)
        {
            var project = db.Projects.Find(id);
            if (project != null)
            {
                project.Status = (int) ProjectStatus.Closed;
                db.SaveChanges();
                return id;
            }
            else
            {
                throw new ObjectNotFoundException($"Can't find project with ID {id}");
            }
        }

        public Project GetProject(int id)
        {
            return db.Projects.Find(id);
        }

        public JObject ParseToJson(Project project, bool isDetailed = true)
        {
            UserService userService = new UserService(db);
            ListService listService = new ListService(db);
            User creator = userService.GetUser(project.CreatedBy);

            var result = new JObject
            {
                ["id"] = project.ID,
                ["name"] = project.Name,
                ["description"] = project.Description,
                ["deadline"] = project.Deadline,
                ["createdTime"] = project.CreatedTime,
                ["createdBy"] = userService.ParseToJson(creator),
                ["startDate"] = project.StartDate,
                ["changedTime"] = project.ChangedTime,
                ["status"] = project.Status
            };
            if (project.ChangedBy.HasValue)
            {
                var changer = userService.GetUser(project.ChangedBy.Value);
                result["changedBy"] = userService.ParseToJson(changer);
            }

            if (isDetailed)
            {
                IEnumerable<List> lists = listService.GetListOfProject(project.ID);
                JArray listJArray = new JArray();
                foreach (List list in lists)
                {
                    listJArray.Add(listService.ParseToJson(list));
                }

                result["lists"] = listJArray;
            }

            return result;
        }
    }
}