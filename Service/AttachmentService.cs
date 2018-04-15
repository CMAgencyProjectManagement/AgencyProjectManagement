using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Data.Entity.Migrations.Model;
using System.IO;
using System.Runtime.CompilerServices;
using System.Security;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class AttachmentService
    {
        private readonly CmAgencyEntities db;

        public AttachmentService(CmAgencyEntities db)
        {
            this.db = db;
        }

        public Attachment GetAttachment(int attachmentId)
        {
            Attachment attachment = db.Attachments.Find(attachmentId);
            if (attachment != null)
            {
                return attachment;                
            }
            throw new ObjectNotFoundException($"Can't find attachment with ID {attachmentId}");
        }

        public Attachment AddAttachment(string name, string path, int taskId, int creatorId, DateTime createdTime)
        {
            Attachment attachment = new Attachment
            {
                Name = name,
                CreatedBy = creatorId,
                CreatedTime = createdTime,
                Path = path,
                TaskID = taskId
            };
            db.Attachments.Add(attachment);
            db.SaveChanges();
            return attachment;
        }

        public void DeleteAttachment(int attachmentId)
        {
            Attachment attachment = GetAttachment(attachmentId);
            db.Attachments.Remove(attachment);
            db.SaveChanges();
        }

        public JObject ParseToJson(Attachment attachment, string attachmentPath = null)
        {
            JObject result = new JObject
            {
                ["ID"] = attachment.ID,
                ["name"] = attachment.Name,
                ["path"] = attachment.Path,
                ["taskID"] = attachment.TaskID,
                ["createdTime"] = attachment.CreatedTime,
                ["createdByID"] = attachment.CreatedBy
            };

            if (attachmentPath != null)
            {
                result["source"] = Path.Combine(
                    attachmentPath,
                    attachment.Path,
                    attachment.Name
                );
            }

            return result;
        }
    }
}