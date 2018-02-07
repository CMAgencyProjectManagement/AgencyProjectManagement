using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity;

namespace Service
{
    public static class ProjectService
    {
        public static IEnumerable<Project> GetAll()
        {
            using (var db = new CmAgencyEntities())
            {
                return db.Projects.ToList();
            }
        }
    }
}
