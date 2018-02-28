using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public static class CustomerService
    {
        public static Customer getCustomer(int customerID)
        {
            using (CmAgencyEntities entities = new CmAgencyEntities())
            {
                return entities.Customers.Find(customerID);
            }
        }

        public static JObject ToJson(this Customer customer)
        {
            JObject result = new JObject
            {
                ["name"] = customer.Name,
                ["description"] = customer.Description,
                ["email"] = customer.Email,
                ["phone"] = customer.Phone,
                ["address"] = customer.Address
            };
            return result;
        }
    }
}