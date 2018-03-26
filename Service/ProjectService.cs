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
                    project => project.UserProjects
                        .Any(userProject => userProject.UserID == userId)
                )
                .ToList();
        }
        public IEnumerable<Project> GetProjectOfTeam(int teamId)
        {
            return db.Projects
                .Where(project => project.TeamProjects
                                    .Any(userTeam => userTeam.TeamID == teamId)
                ).ToList();
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
        public Project CreateProject(string name, string description, DateTime? deadline, DateTime? startDate,
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
        //public bool CheckDuplicatedUsername(string username)
        //{
        //    var users = db.Users.Where(user => user.Username == username).ToList();
        //    return users.Count > 0;
        //}
        public bool CheckDuplicatedNameOfProject(string projectname)
        {
            var projects = db.Projects.Where(project => project.Name == projectname).ToList();
            return projects.Count > 0;
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
                project.Status = (int)ProjectStatus.Closed;
                db.SaveChanges();
                return id;
            }
            else
            {
                throw new ObjectNotFoundException($"Can't find project with ID {id}");
            }
        }

        public Project GetProjectByID(int id)
        {
            return db.Projects.Find(id);
        }
        public UserProject AssignProject(int userId, int projectId)
        {
            User user = db.Users.Find(userId);
            if (user != null)
            {
                Project project = db.Projects.Find(projectId);
                if (project != null)
                {
                    //var userProjectId = db.UserProjects.Where(x => x.UserID == userId).ToList();
                    //if (userProjectId == null)
                    //{

                        UserProject newUserProject;

                        IEnumerable<TeamProject> teamProjects = db.TeamProjects.Where(x => x.ProjectID == projectId).ToList();
                        foreach (var teamProject in teamProjects)
                        {
                            if (user.TeamID == teamProject.TeamID)
                            {
                                newUserProject = new UserProject
                                {
                                    UserID = userId,
                                    ProjectID = projectId,
                                };
                                db.UserProjects.Add(newUserProject);
                                db.SaveChanges();
                                return newUserProject;
                            }
                            else
                            {
                                throw new ObjectNotFoundException($"Project and user not in one team");
                            }
                        }
                        //var teamId2 = db.TeamProjects.Where(x => x.ProjectID == projectId);
                        throw new ObjectNotFoundException($"Eo biet");
                    //}
                    //else
                    //{
                    //    throw new ObjectNotFoundException($"User with ID{userId} maybe already have in another project");
                    //}
                }
                else
                {
                    throw new ObjectNotFoundException($"Project with ID{projectId} not found"); 
                }
            }
            else
            {
                throw new ObjectNotFoundException($"User with ID{userId} not found");
            }



            //UserProject newUserProject;
            //if (true)
            //{
            //    newUserProject = new UserProject
            //    {
            //        UserID = id,
            //        ProjectID = projectId,
            //    };
            //}
            //else
            //{

            //}
            //db.UserProjects.Add(newUserProject);
            //db.SaveChanges();
            //return newUserProject;
        }

        public JObject ParseToJson(Project project, bool isDetailed = true, Boolean IsIncludeChangeBy = true)
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
            if (project.ChangedBy.HasValue && IsIncludeChangeBy == true)
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
        public JObject ParseToJsonUserProject(UserProject userProject)
        {
            var result = new JObject
            {
                ["userId"] = userProject.UserID,
                ["projectId"] = userProject.ProjectID
            };
            return result;
        }
    }
}