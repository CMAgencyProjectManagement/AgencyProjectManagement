using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json.Linq;

namespace Web
{
    public static class ResponseHelper
    {
        public static JObject GetResponse(JObject data,bool isSuccess = true)
        {
            return new JObject
            {
                ["IsSuccess"] = isSuccess,
                ["Data"] = data
            };
        }

        public static JObject GetExceptionResponse(string message, Exception exception = null, bool isSuccess = false)
        {
            if (exception != null)
            {
                return new JObject
                {
                    ["IsSuccess"] = isSuccess,
                    ["Message"] = message,
                    ["Data"] = JObject.FromObject(exception)
                };
            }

            return new JObject
            {
                ["IsSuccess"] = isSuccess,
                ["Message"] = message,
            };
        }

        public static JObject GetExceptionResponse(Exception exception)
        {
            return new JObject
            {
                ["IsSuccess"] = false,
                ["Message"] = exception.Message,
                ["Data"] = JObject.FromObject(exception)
            };
        }
    }
}