using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web
{
    public static class AgencyConfig
    {
        public static string AvatarPath;
        public static string AttachmentPath;
        public static int lowPoint;
        public static int mediumPoint;
        public static int highPoint;
        public static int maxDuration;
        public static int penatyPercent;
        
        public static string[] supportedImageTypes = {"jpeg", "gif", "bmp", "tiff", "png"};
    }
}