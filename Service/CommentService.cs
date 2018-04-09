using Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Data.Entity.Core;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Task = Entity.Task;

namespace Service
{
    public class CommentService
    {
        private readonly CmAgencyEntities db;

        public CommentService(CmAgencyEntities db)
        {
            this.db = db;
        }
        
        public Comment UpdateComment(int id, string body)
        {
            var findComment = db.Comments.Find(id);
            if(findComment != null)
            {
                findComment.Body = body;
                findComment.ChangedTime = DateTime.Now;
                db.SaveChanges();
                return findComment;
            }
            else
            {
                throw new ObjectNotFoundException($"Can't find Comment with ID {id}");
            }
        }

        public IEnumerable<Comment> GetCommentOfTask(int taskId)
        {
            TaskService taskService = new TaskService(db);
            Task task = taskService.GetTask(taskId);
            if (task != null)
            {
                IEnumerable<Comment> comments = db.Comments.Where(taskItem => taskItem.TaskID == task.ID);
                return comments;
            }

            throw new ObjectNotFoundException($"Task with id {taskId} not found");
        }

        public Comment CreateComment(string body, int taskID, int userId)
        {
            Comment newComment = new Comment
            {
                Body = body,
                TaskID = taskID,
                CreatedBy = userId,
                CreatedTime = DateTime.Now
            };
            db.Comments.Add(newComment);
            db.SaveChanges();
            return newComment;
        }

        public JObject ParseToJson(Comment comment, bool isDetailed = false,string avatarPath = null)
        {
            JObject result = new JObject
            {
                ["ID"] = comment.ID,
                ["body"] = comment.Body,
                ["taskID"] = comment.TaskID,
                ["changedTime"] = comment.ChangedTime,
                ["createdByID"] = comment.CreatedBy,
                ["createdTime"] = comment.CreatedTime
            };

            {
                UserService userService = new UserService(db);
                User creator = userService.GetUser(comment.CreatedBy);
                result["createdBy"] = userService.ParseToJson(creator, avatarPath);
            }

            if (isDetailed)
            {
                TaskService taskService = new TaskService(db);
                Task task = taskService.GetTask(comment.TaskID);
                result["task"] = taskService.ParseToJson(task);
            }

            return result;
        }
    }
}