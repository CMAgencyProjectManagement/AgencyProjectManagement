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

        public bool CheckValidationOfPredecessor(
            int sourceTaskId,
            DateTime destinationStartdate)
        {
            TaskService taskService =  new TaskService(db);
            Task sourceTask = taskService.GetTask(sourceTaskId);

            DateTime sourceTaskDeadline = sourceTask.StartDate.Value.AddDays(sourceTask.Duration);
            return sourceTaskDeadline.Date < destinationStartdate.Date;
        }

//        public void CreateDependency(
//            int sourceTaskId,
//            int destinationTaskId,
//            int type = 1)
//        {
//            TaskDependency dependency = new TaskDependency
//            {
//                []
//            };
//            db.TaskDependencies.Add()
//        }

        public void UpdateDependency()
        {
            
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