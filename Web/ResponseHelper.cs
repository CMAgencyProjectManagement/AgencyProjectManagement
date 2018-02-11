using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.ModelBinding;
using Newtonsoft.Json.Linq;

namespace Web
{
    public static class ResponseHelper
    {
        public static JObject GetResponse(JObject data, bool isSuccess = true)
        {
            return new JObject
            {
                ["IsSuccess"] = isSuccess,
                ["Data"] = data
            };
        }

        public static JObject GetResponse(JArray data, bool isSuccess = true)
        {
            return new JObject
            {
                ["IsSuccess"] = isSuccess,
                ["Data"] = data
            };
        }

        public static JObject GetExceptionResponse(ModelStateDictionary modelStates)
        {
            JArray errors = new JArray();

            foreach (KeyValuePair<string,ModelState> state in modelStates)
            {
                var key = state.Key.Split('.').Last();
                var msg = state.Value.Errors[0].ErrorMessage;
                errors.Add(new JObject
                {
                    ["key"] = key,
                    ["message"] = msg 
                });
            }
            var errorData = new JObject
            {
                ["IsSuccess"] = false,
                ["Message"] = "Invalid request",
                ["Data"] = errors
            };
            return errorData;
        }

//        public static JObject GetExceptionResponse(string message, Exception exception = null)
//        {
//            if (exception != null)
//            {
//                return new JObject
//                {
//                    ["IsSuccess"] = false,
//                    ["Message"] = message,
//                    ["Data"] = JObject.FromObject(exception)
//                };
//            }
//
//            return new JObject
//            {
//                ["IsSuccess"] = false,
//                ["Message"] = message
//            };
//        }

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