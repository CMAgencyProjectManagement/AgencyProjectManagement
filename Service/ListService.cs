using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using System.Text;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public static class ListService
    {
        public static IEnumerable<List> GetListOfProject(int projectId)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                Project project = entities.Projects.Find(projectId);
                if (project != null)
                {
                    return project.Lists.ToList();
                }
                else
                {
                    throw new ObjectNotFoundException($"Can't find project with ID{projectId} ");
                }
            }
        }

        public static List GetListOfTask(int taskId)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                Task foundTask = entities.Tasks.Find(taskId);
                if (foundTask != null)
                {
                    foreach (List list in entities.Lists)
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
        }

        public static JObject ToJson(this List list, bool isDetailed = true)
        {
            JObject result = new JObject
            {
                ["ID"] = list.ID,
                ["Name"] = list.Name
            };

            if (isDetailed)
            {
                var tasks = TaskService.GetTasksOfList(list.ID);
                var tasksJArray = new JArray();

                foreach (var task in tasks)
                {
                    tasksJArray.Add(task.ToJson());
                }

                result["tasks"] = tasksJArray;
            }

            return result;
        }
    }
}