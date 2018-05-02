using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
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
        public CheckList CreateChecklist(string name, int taskId, User creator)
        {
            CheckList newCheckList = new CheckList
            {
                Name = name,
                TaskID = taskId,
                CreatedBy = creator.ID,
                CreatedTime = DateTime.Now
            };
            db.CheckLists.Add(newCheckList);
            db.SaveChanges();
            return newCheckList;
        }
        public CheckListItem CreateChecklistItem(string name, int checkListId, User creator)
        {
            CheckListItem newCheckListItem = new CheckListItem
            {
               Name = name,
               CheckListID = checkListId,
               CreatedBy = creator.ID,
               CreatedTime = DateTime.Now
            };
            db.CheckListItems.Add(newCheckListItem);
            db.SaveChanges();
            return newCheckListItem;
        }
        public void DeleteChecklist(int checkListId, int modifierId)
        {
            var checkList = db.CheckLists.Find(checkListId);
            var modifier = db.Users.Find(modifierId);
            if (checkList== null)
            {
                throw new ObjectNotFoundException($"Can't find checkList with ID {checkListId}");
            }

            if (modifier == null)
            {
                throw new ObjectNotFoundException($"Can't find user with ID {modifierId}");
            }

            checkList.ChangedBy = modifier.ID;
            checkList.ChangedTime = DateTime.Today;
            db.CheckLists.Remove(checkList);
            db.SaveChanges();
        }
        public void DeleteChecklistItem(int checkListItemId, int modifierId)
        {
            var checkListItem = db.CheckListItems.Find(checkListItemId);
            var modifier = db.Users.Find(modifierId);
            if (checkListItem == null)
            {
                throw new ObjectNotFoundException($"Can't find checkList Item with ID {checkListItemId}");
            }

            if (modifier == null)
            {
                throw new ObjectNotFoundException($"Can't find user with ID {modifierId}");
            }

            checkListItem.ChangedBy = modifier.ID;
            checkListItem.ChangedTime = DateTime.Today;
            db.CheckListItems.Remove(checkListItem);
            db.SaveChanges();
        }
        public CheckList UpdateCheckList(
            int id,
            string name,
            int modifierId,
            DateTime modifyTime
            )
        {
            var foundCheckList = db.CheckLists.Find(id);
            if (foundCheckList==null)  throw new ObjectNotFoundException($"Can't find check list with ID {id}");
            foundCheckList.Name = name;
            foundCheckList.ChangedBy = modifierId;
            foundCheckList.ChangedTime = modifyTime;
            db.SaveChanges();
            return foundCheckList;
        }
        public CheckListItem UpdateCheckListItem(
            int id,
            string name,
            int modifierId,
            DateTime modifyTime
            )
        {
            var foundCheckListItem = db.CheckListItems.Find(id);
            if (foundCheckListItem == null) throw new ObjectNotFoundException($"Can't find check list Item with ID {id}");
            foundCheckListItem.Name = name;
            foundCheckListItem.ChangedBy = modifierId;
            foundCheckListItem.ChangedTime = modifyTime;
            db.SaveChanges();
            return foundCheckListItem;
        }
        public CheckListItem CheckCheckListItem(int id, int modifierId)
        {
            var foundCheckListItem = db.CheckListItems.Find(id);
            if (foundCheckListItem == null) throw new ObjectNotFoundException($"Can't find check list Item with ID {id}");
            if (foundCheckListItem.IsChecked)
            {
                foundCheckListItem.IsChecked = false;
            }
            else
            {
                foundCheckListItem.IsChecked = true;
            }
            foundCheckListItem.ChangedBy = modifierId;
            foundCheckListItem.ChangedTime = DateTime.Now;
            db.SaveChanges();
            return foundCheckListItem;
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

            IEnumerable<CheckListItem> checkListItems =
                db.CheckListItems.Where(item => item.CheckListID == checkList.ID);  
            
            JArray checkListItemsJArray = new JArray();
            foreach (CheckListItem item in checkListItems)
            {
                JObject itemJson = new JObject
                {
                    ["id"] = item.ID,
                    ["name"] = item.Name,
                    ["isChecked"] = item.IsChecked,
                    
                };
                checkListItemsJArray.Add(itemJson);
            }

            result["items"] = checkListItemsJArray;

            return result;
        }
    }
}