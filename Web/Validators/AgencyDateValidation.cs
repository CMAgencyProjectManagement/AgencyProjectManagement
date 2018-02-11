using System;
using System.ComponentModel.DataAnnotations;

namespace Web.ViewModels
{
    public class AgencyDateValidation : ValidationAttribute
    {
        // https://stackoverflow.com/questions/5390403/datetime-date-and-hour-validation-with-data-annotation
        public override bool IsValid(object value)
        {
            DateTime dt;
            bool parsed = DateTime.TryParse((string)value, out dt);
            if(!parsed)
                return false;

            // eliminate other invalid values, etc
            // if contains valid hour for your business logic, etc

            return true;
        }
    }
}