using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    static class ListService
    {
        public static JObject ToJson(this List list, bool isDetailed = true)
        {
            JObject result = new JObject
            {
                ["ID"] = list.ID,
                ["Name"] = list.Name
            };
            
            if (isDetailed)
            {
                JArray tasksJArray = new JArray();

                foreach (var task in list.Tasks)
                {
                    tasksJArray.Add(task.ToJson());
                }

                result["tasks"] = tasksJArray;
            }

            return result;
        }
    }
}