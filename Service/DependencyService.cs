using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using Entity.DAL;
using Entity.Models;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class DependencyService
    {
        private CmAgencyEntities db;

        public DependencyService(CmAgencyEntities db)
        {
            this.db = db;
        }

        public bool IsPredecessorValid(
            int sourceTaskId,
            DateTime destinationStartdate)
        {
            TaskService taskService =  new TaskService(db);
            Task sourceTask = taskService.GetTask(sourceTaskId);

            DateTime sourceTaskDeadline = sourceTask.StartDate.Value.AddDays(sourceTask.Duration);
            return sourceTaskDeadline.Date <= destinationStartdate.Date;
        }
        
        public bool IsSuccessorValid(
            int destinationTaskId,
            DateTime sourceTaskDeadline)
        {
            TaskService taskService =  new TaskService(db);
            Task destinationTask = taskService.GetTask(destinationTaskId);

            DateTime destinationTaskStartDate = destinationTask.StartDate.Value;
            return destinationTaskStartDate.Date >= sourceTaskDeadline.Date;
        }

        public void SetDependencyForTask(int taskId, int[] newPredecessorIds, int creatorId)
        {
            TaskService taskService = new TaskService(db);
            Task task = taskService.GetTask(taskId);
            int[] oldPredecessorIds = GetPredecessors(taskId).Select(taskEl => taskEl.ID).ToArray();
            newPredecessorIds = newPredecessorIds ?? new int[0]; 
            IEnumerable<int> predecessorToRemove = oldPredecessorIds.Except(newPredecessorIds);
            IEnumerable<int> predecessorToCreate = newPredecessorIds.Except(oldPredecessorIds);

            IEnumerable<TaskDependency> dependencyToAdd = predecessorToCreate
                .Select(predecessorId => new TaskDependency
                {
                    SourceTaskID = predecessorId,
                    DestinationTaskID = task.ID,
                    DependencyType = 1,
                    CreatedBy = creatorId,
                    CreatedTime = DateTime.Today
                });

            IEnumerable<TaskDependency> dependencyToRemove = db.TaskDependencies
                .Where(dependency => predecessorToRemove.Contains(dependency.SourceTaskID));
                

            db.TaskDependencies.AddRange(dependencyToAdd);
            db.TaskDependencies.RemoveRange(dependencyToRemove);

            db.SaveChanges();
        }

        public TaskDependency CreateDependency(
            int sourceTaskId,
            int destinationTaskId,
            int creatorId,
            int type = 1)
        {
            TaskDependency dependency = new TaskDependency
            {
                SourceTaskID = sourceTaskId,
                DestinationTaskID = destinationTaskId,
                DependencyType = type,
                CreatedBy = creatorId,
                CreatedTime = DateTime.Today
            };
            db.TaskDependencies.Add(dependency);
            db.SaveChanges();
            return dependency;
        }

        public int DeleteDependency(int dependencyId)
        {
            TaskDependency taskDependency = db.TaskDependencies.Find(dependencyId);
            if (taskDependency == null)
            {
                throw new ObjectNotFoundException($"Dependency with id {dependencyId} not found"); 
            }
            db.TaskDependencies.Remove(taskDependency);
            db.SaveChanges();
            return dependencyId;
        }

        public IEnumerable<Task> GetPredecessors(int currentTaskId)
        {
            TaskService taskService = new TaskService(db);
            Task currentTask = taskService.GetTask(currentTaskId);
            
            if (currentTask == null)
            {
                throw new ObjectNotFoundException($"Task with id {currentTaskId} not found");
            }

            IEnumerable<int> predecessorIds = db.TaskDependencies
                .Where(dependency => dependency.DestinationTaskID == currentTask.ID)
                .Select(dependency => dependency.SourceTaskID);

            return db.Tasks.Where(task => predecessorIds.Contains(task.ID));
        }

        public IEnumerable<Task> GetSuccessors(int currentTaskId)
        {
            TaskService taskService = new TaskService(db);
            Task currentTask = taskService.GetTask(currentTaskId);
            
            if (currentTask == null)
            {
                throw new ObjectNotFoundException($"Task with id {currentTaskId} not found");
            }

            IEnumerable<int> successorIds = db.TaskDependencies
                .Where(dependency => dependency.SourceTaskID == currentTask.ID)
                .Select(dependency => dependency.DestinationTaskID);
            
            return db.Tasks.Where(task => successorIds.Contains(task.ID));
        }

        public IEnumerable<TaskDependency> GeTaskDependenciesOfProject(Project project)
        {
            return db.TaskDependencies
                .Where(dependency => dependency.Task.List.Project.ID == project.ID);
        }

        public JObject ParseToJson(TaskDependency taskDependency)
        {
            UserService userService = new UserService(db);
            JObject result = new JObject
            {
                ["id"] =  taskDependency.ID,
                ["sourceTaskID"] =  taskDependency.SourceTaskID,
                ["destinationTaskID"] =  taskDependency.DestinationTaskID,
                ["createdTime"] =  taskDependency.CreatedTime,
                ["createdByID"] =  taskDependency.CreatedBy,
            };
            

            return result;
        }
    }
}