using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    class ReportResult
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int UserNumberInProject { get; set; }
        public int UserNumberNotInTask { get; set; }
        public int Taskcount { get; set; }
        public IEnumerable<KeyValuePair<string, string>> KeyValue { get; set; }
    }
}
