using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    static class ListService
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