using System;
using System.ComponentModel.DataAnnotations;

namespace Web.Validators
{
    public class AgencyDateValidation : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            if (value != null)
            {
                DateTime dt;
                bool parsed = DateTime.TryParse((string) value, out dt);
                if (!parsed)
                    return false;
            }

            return true;
        }

        
    }
}