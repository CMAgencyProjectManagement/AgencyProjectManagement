using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using System.Text;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class ListService
    {
        private readonly CmAgencyEntities db;

        public ListService(CmAgencyEntities db)
        {
            this.db = db;
        }

        public IEnumerable<List> GetListOfProject(int projectId)
        {
            Project project = db.Projects.Find(projectId);
            if (project != null)
            {
                return project.Lists.ToList();
            }
            else
            {
                throw new ObjectNotFoundException($"Can't find project with ID{projectId} ");
            }
        }

        public List GetListOfTask(int taskId)
        {
            Task foundTask = db.Tasks.Find(taskId);
            if (foundTask != null)
            {
                foreach (List list in db.Lists)
                {
                    foreach (Entity.Task task in list.Tasks)
                    {
                        if (task.ID == taskId)
                        {
                            return list;
                        }
                    }
                }

                throw new ObjectNotFoundException($"Can't find list that have task with ID {taskId} ");
            }
            else
            {
                throw new ObjectNotFoundException($"Can't find task with ID {taskId} ");
            }
        }

        public JObject ParseToJson(List list, bool isDetailed = true, bool isShowtask = true)
        {
            TaskService taskService = new TaskService(db);
            ProjectService projectService = new ProjectService(db);


            JObject result = new JObject
            {
                ["id"] = list.ID,
                ["projectId"] = list.ProjectID, //
                ["name"] = list.Name,
                
            };

            if (isDetailed)
            {
                var tasks = taskService.GetTasksOfList(list.ID);
                var tasksJArray = new JArray();

                foreach (var task in tasks)
                {
                    tasksJArray.Add(taskService.ParseToJson(task));
                }

                result["tasks"] = tasksJArray;
            }
            if (isShowtask)
            {
               Project project = projectService.GetProjectByID(list.ProjectID);
                result["project"] = projectService.ParseToJson(project,false);
            }

            return result;
        }
        public List GetList(int id)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                return entities.Lists.Find(id);
            }
        }
        public List CreateList(int projectId, string name)
        {
            List newList = new List
            {
                ProjectID = projectId,
                Name = name,
               
            };
            db.Lists.Add(newList);
            db.SaveChanges();


            return newList;
        }
        
        
    }
}