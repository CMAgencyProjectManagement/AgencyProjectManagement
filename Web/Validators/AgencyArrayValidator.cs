using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace Web.Validators
{
    public class AgencyArrayValidator
    {
        public class MustHaveOneElementAttribute : ValidationAttribute
        {
            public override bool IsValid(object value)
            {
                var list = value as IList;
                if (list != null)
                {
                    return list.Count > 0;
                }
                return false;
            }
        }
    }
}