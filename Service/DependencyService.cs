using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using Entity;

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

        public void SetDependencyForTask(int taskId, int[] predecessorIds)
        {
            TaskService taskService = new TaskService(db);
            Task task = taskService.GetTask(taskId);
            List<TaskDependency> dependencyToRemove = new List<TaskDependency>();
            List<TaskDependency> dependencyToCreate = new List<TaskDependency>();
        }

        public TaskDependency CreateDependency(
            int sourceTaskId,
            int destinationTaskId,
            int type = 1)
        {
            TaskDependency dependency = new TaskDependency
            {
                SourceTaskID = sourceTaskId,
                DestinationTaskID = destinationTaskId,
                DependencyType = type
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
            Task task = taskService.GetTask(currentTaskId);
            
            if (task == null)
            {
                throw new ObjectNotFoundException($"Task with id {currentTaskId} not found");
            }

            return db.TaskDependencies
                .Where(dependency => dependency.DestinationTaskID == task.ID)
                .Select(dependency => dependency.Task);
        }

        public IEnumerable<Task> GetSuccessors(int currentTaskId)
        {
            TaskService taskService = new TaskService(db);
            Task task = taskService.GetTask(currentTaskId);
            
            if (task == null)
            {
                throw new ObjectNotFoundException($"Task with id {currentTaskId} not found");
            }

            return db.TaskDependencies
                .Where(dependency => dependency.SourceTaskID == task.ID)
                .Select(dependency => dependency.Task);
        }
    }
}