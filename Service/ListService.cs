using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core;
using System.Linq;
using System.Text;
using Entity;
using Entity.DAL;
using Entity.Models;
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
                    foreach (Task task in list.Tasks)
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
                ["projectId"] = list.ProjectID,
                ["name"] = list.Name
            };

            if (isDetailed)
            {
                var tasks = taskService.GetTasksOfList(list.ID).OrderBy(x => x.IsArchived);
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
                result["project"] = projectService.ParseToJson(project);
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


        public List DeleteList(int listId, User currentUser)
        {
            var foundList = db.Lists.Find(listId);
            if (foundList == null)
            {
                throw new ObjectNotFoundException(
                    $"List with ID {listId} has contain Task, please erase or move all task in list with ID {listId} to remove it ");
            }

            IEnumerable<int> teamIdsOfList = db.TeamProjects
                .Where(teamProject => teamProject.ProjectID == foundList.ProjectID)
                .Select(projectTeam => projectTeam.TeamID);

            bool isAllow = db.Users
                .Where(user => user.TeamID.HasValue && user.IsManager)
                .Any(user => teamIdsOfList.Contains(user.TeamID.Value));
                
            if (!isAllow)
            {
                throw new ObjectNotFoundException($"User is not manager of team");
            }

            db.Lists.Remove(foundList);
            db.SaveChanges();

            return foundList;
        }


        public List UpdateList(int listID, int userID, string name)
        {
            List foundList = db.Lists.Find(listID);
            if (foundList != null)
            {
                int projectId = db.Lists.Find(listID).ProjectID;
                var teamId = db.TeamProjects.Where(x => x.ProjectID == projectId).Select(x => x.TeamID)
                    .FirstOrDefault();
                Team team = db.Teams.Find(teamId);
                if (team != null)
                {
                    User manager = db.Users.Where(x => x.TeamID == teamId && x.IsManager == true).FirstOrDefault();
                    //User CurrentUser = db.Users.Find(userID);
                    if (userID == manager.ID)
                    {
                        foundList.Name = name;
                        foundList.ChangedBy = userID;
                        foundList.ChangedTime = DateTime.Now;
                        db.SaveChanges();
                        return foundList;
                    }
                    else
                    {
                        throw new ObjectNotFoundException($"User is not manager of team");
                    }
                }
                else
                {
                    throw new ObjectNotFoundException(
                        $" the list with ID {listID} be long to the project with ID: {projectId} which doesn't belong to any team");
                }
            }
            else
            {
                throw new ObjectNotFoundException($"Can't find list with listID{listID} ");
            }
        }
    }
}