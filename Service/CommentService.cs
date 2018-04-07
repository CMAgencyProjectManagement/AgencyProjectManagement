using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class CommentService
    {
        private readonly CmAgencyEntities db;

        public CommentService(CmAgencyEntities db)
        {
            this.db = db;
        }

        public Comment CreateComment(string body, int taskID,int userId)
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

        public JObject ParseToJson(Comment comment)
        {
            
        }
    }
}
