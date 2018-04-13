using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.IO;
using System.Runtime.CompilerServices;
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

//        public void CreateAttachment(string name, string path, int taskId, int creatorId, DateTime createdTime)
//        {
//            Attachment attachment = new Attachment(
//            {
//                Name = 
//            };
//        }

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