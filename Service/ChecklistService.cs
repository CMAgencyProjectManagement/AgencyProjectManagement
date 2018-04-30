using System.Collections.Generic;
using System.Data.Entity.Core;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class ChecklistService
    {
        private CmAgencyEntities db;

        public ChecklistService(CmAgencyEntities db)
        {
            this.db = db;
        }

        public IEnumerable<CheckList> GetCheckListOfTask(int taskId)
        {
            Task task = db.Tasks.Find(taskId);
            if (task == null)
            {
                throw new ObjectNotFoundException($"Task with id ${taskId} not found");
            }

            return task.CheckLists;
        }

        public JObject ParseToJson(CheckList checkList)
        {
            UserService userService = new UserService(db);
            JObject result = new JObject
            {
                ["id"] = checkList.ID,
                ["name"] = checkList.Name,
                ["taskId"] = checkList.TaskID,
                ["createdById"] = checkList.CreatedBy,
                ["createdTime"] = checkList.CreatedTime,
            };

            if (checkList.CreatedBy.HasValue)
            {
                User creator = userService.GetUser(checkList.CreatedBy.Value);
                result["createdBy"] = userService.ParseToJson(creator);    
            }

            if (checkList.ChangedBy.HasValue)
            {
                result["changedById"] = checkList.ChangedBy;
                User changer = userService.GetUser(checkList.ChangedBy.Value);
                result["changedBy"] = userService.ParseToJson(changer);
            }

            if (checkList.ChangedTime.HasValue)
            {
                result["changedTime"] = checkList.ChangedTime;
            }

            JArray checkListItemsJArray = new JArray();
            foreach (CheckListItem item in checkList.CheckListItems)
            {
                JObject itemJson = new JObject
                {
                    ["id"] = item.ID,
                    ["name"] = item.Name,
                    ["isChecked"] = item.IsChecked
                };
                checkListItemsJArray.Add(itemJson);
            }

            result["items"] = checkListItemsJArray;

            return result;
        }
    }
}