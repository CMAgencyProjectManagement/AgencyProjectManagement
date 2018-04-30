using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Caching;
using System.Web.Http;
using Entity;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json.Linq;
using Service;
using Web.ViewModels;

namespace Web.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        [HttpGet]
        [Route("{id:int}")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult GetUser(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    //Dont expose password
                    User user = userService.GetUser(id);
                    string avatarPath = AgencyConfig.AvatarPath;
                    return Ok(ResponseHelper.GetResponse(userService.ParseToJson(user, avatarPath, includeTeam: true)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("")]
        [Authorize]
        public IHttpActionResult GetCurrentUser()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    string userIdString = User.Identity.GetUserId();
                    User user = userService.GetUser(userIdString);
                    string avatarPath = AgencyConfig.AvatarPath;
                    return Ok(ResponseHelper.GetResponse(userService.ParseToJson(user, avatarPath, true, true)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("project/{projectId:int}")]
        [Authorize(Roles = "Manager, Admin")]
        public IHttpActionResult GetUserOfProject(int projectId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    IEnumerable<JObject> usersObject = userService.GetUsersOfProject(projectId)
                        .Select(user => userService.ParseToJson(user, AgencyConfig.AvatarPath));
                    return Ok(ResponseHelper.GetResponse(new JArray(usersObject)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        
        [HttpGet]
        [Route("team/{teamId:int}")]
        [Authorize]
        public IHttpActionResult GetUserOfTeam(int teamId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);
                    
                    IEnumerable<JObject> usersObject = userService.GetUsersOfTeam(teamId,currentUser.IsAdmin)
                        .Select(user => userService.ParseToJson(user, AgencyConfig.AvatarPath));
                    return Ok(ResponseHelper.GetResponse(new JArray(usersObject)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        
        [HttpGet]
        [Route("freeUser")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult GetNoDepartmentUser()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);

                    IEnumerable<JObject> usersObject = userService.GetNoDepartmentUsers()
                        .Select(user => userService.ParseToJson(user, AgencyConfig.AvatarPath));
                    
                    return Ok(ResponseHelper.GetResponse(new JArray(usersObject)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        
        [HttpGet]
        [Route("latetasks")]
        [Authorize]
        public IHttpActionResult GetCurrentUserLateTasks()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    TaskService taskService = new TaskService(db);
                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);
                    
                    IEnumerable<Task> lateTasks = taskService.GetTasksOfUser(currentUser.ID);
                    lateTasks = lateTasks.Where(task => taskService.IsTaskLate(task.ID));
                    
                    IEnumerable<JObject> lateTasksJson = lateTasks.Select(task =>
                        taskService.ParseToJson(task));
                    return Ok(ResponseHelper.GetResponse(new JArray(lateTasksJson)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        
        [HttpGet]
        [Route("expiresoon")]
        [Authorize]
        public IHttpActionResult GetCurrentUserTaskExpireThisWeek()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    TaskService taskService = new TaskService(db);
                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);
                    
                    IEnumerable<Task> lateTasks = taskService.GetTasksOfUser(currentUser.ID);
                    lateTasks = lateTasks.Where(task => taskService.IsTaskDeadlineInThisWeek(task));
                    
                    IEnumerable<JObject> lateTasksJson = lateTasks.Select(task =>
                        taskService.ParseToJson(task));
                    return Ok(ResponseHelper.GetResponse(new JArray(lateTasksJson)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("all")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult GetAllUser()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    IEnumerable<User> allUser = userService.GetAll().OrderByDescending(x => x.IsActive);
                    string avatarPath = AgencyConfig.AvatarPath;

                    JArray data = new JArray();
                    foreach (User user in allUser)
                    {
                        //Dont expose password
                        data.Add(userService.ParseToJson(user, avatarPath, includeTeam: true));
                    }

                    return Ok(ResponseHelper.GetResponse(data));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        [HttpPost]
        [Route("")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult CreateUser(CreateUserModel createUserModel)
        {
            try
            {
                if (createUserModel.Birthdate != null && (createUserModel.Username == null ||
                                                          createUserModel.Password == null ||
                                                          createUserModel.Name == null ||
                                                          createUserModel.Email == null))
                {
                    if (createUserModel.Birthdate > DateTime.Now)
                    {
                        ModelState.AddModelError("Birthdate",
                            "Birthdate must be smaller than the current time ");
                    }

                    string UpdatedTime = createUserModel.Birthdate.ToString();
                    DateTime DoB = DateTime.Parse(UpdatedTime);
                    if ((DateTime.Today.Year - DoB.Year) < 18)
                    {
                        ModelState.AddModelError("Birthdate",
                            "Age must be greater than 18 ");
                    }
                }

                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        UserService userService = new UserService(db);
                        Boolean flag = true;
                        if (userService.CheckDuplicatedUsername(createUserModel.Username))
                        {
                            ModelState.AddModelError("Username", "Username is taken");
                            //return Content(HttpStatusCode.BadRequest,ResponseHelper.GetExceptionResponse(ModelState));
                            flag = false;
                        }

                        if (userService.CheckDuplicatePhone(createUserModel.Phone) && createUserModel.Phone != null)
                        {
                            ModelState.AddModelError("Phone", "Phone is taken");
                            flag = false;
                        }

                        if (userService.CheckDuplicateEmail(createUserModel.Email))
                        {
                            ModelState.AddModelError("Email", "Email is taken");
                            flag = false;
                        }

                        if (createUserModel.Birthdate != null)
                        {
                            if (createUserModel.Birthdate > DateTime.Now)
                            {
                                ModelState.AddModelError("Birthdate",
                                    "Birthdate must be smaller than the current time ");
                                flag = false;
                            }

                            string UpdatedTime = createUserModel.Birthdate.ToString();
                            DateTime DoB = DateTime.Parse(UpdatedTime);
                            if ((DateTime.Today.Year - DoB.Year) < 18)
                            {
                                ModelState.AddModelError("Birthdate",
                                    "Age must be greater than 18 ");
                                flag = false;
                            }
                        }

                        if (flag == false)
                            return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));

                        User newUser = userService.CreateAccount(
                            createUserModel.Name,
                            createUserModel.Phone,
                            createUserModel.Birthdate,
                            createUserModel.Email,
                            createUserModel.Username,
                            createUserModel.Password,
                            createUserModel.Team
                        );
                        return Ok(ResponseHelper.GetResponse(userService.ParseToJson(newUser)));
                    }
                }

                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        [HttpDelete]
        [Route("")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult DeactiveUser(DeleteUserModel deleteUserModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    userService.DeactiveUser(deleteUserModel.ID);
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpPost]
        [Route("update")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult UpdateUser(UpdateUserModel updateUserModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        UserService userService = new UserService(db);

                        Boolean flag = true;

                        if (db.Users.Find(updateUserModel.ID).Phone != updateUserModel.Phone)
                        {
                            if (userService.CheckDuplicatePhone(updateUserModel.Phone) && updateUserModel.Phone != null)
                            {
                                ModelState.AddModelError("Phone", "Phone is taken");
                                flag = false;
                            }
                        }

                        if (db.Users.Find(updateUserModel.ID).Email != updateUserModel.Email)
                        {
                            if (userService.CheckDuplicateEmail(updateUserModel.Email))
                            {
                                ModelState.AddModelError("Email", "Email is taken");
                                flag = false;
                            }
                        }

                        

                        if (flag == false)
                            return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));


                        User updatedUser = userService.Updateuser(
                            updateUserModel.ID,
                            null,
                            updateUserModel.Phone,
                            null,
                            updateUserModel.Email,
                            updateUserModel.Team,
                            updateUserModel.IsActive
                        );
                        return Ok(ResponseHelper.GetResponse(userService.ParseToJson(updatedUser)));
                    }
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        
        [HttpPost]
        [Route("profile/update")]
        [Authorize]
        public IHttpActionResult UpdateProfile(UpdateCurrentUserModel updateCurrentUserModel)
        {
            try
            {
                if (!ModelState.IsValid)
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    int userId = Int32.Parse(User.Identity.GetUserId());
                    Boolean flag = true;

                    if (updateCurrentUserModel.Birthdate != null)
                    {
                        string UpdatedTime = updateCurrentUserModel.Birthdate.ToString();
                        DateTime DoB = DateTime.Parse(UpdatedTime);
                        if ((DateTime.Today.Year - DoB.Year) < 18)
                        {
                            ModelState.AddModelError("Birthdate",
                                "Age must be greater than 18 ");
                            flag = false;
                        }
                    }

                    if (flag == false)
                        return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));


                    User updatedUser = userService.UpdateCurrentUser(
                        userId,
                        updateCurrentUserModel.Name,
                        updateCurrentUserModel.Password,
                        updateCurrentUserModel.Birthdate
                    );
                    return Ok(ResponseHelper.GetResponse(userService.ParseToJson(updatedUser)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpPost]
        [Route("{id:int}/resetpassword")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult ResetPassword(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    UserService userService = new UserService(db);
                    var newPassword = userService.resetPassword(id);
                    return Ok(ResponseHelper.GetResponse(new JObject
                    {
                        ["password"] = newPassword
                    }));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("leaderboard")]
        [Authorize]
        public IHttpActionResult GetLeaderBoard()
        {
            
            
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    //Init service
                    UserService userService = new UserService(db);
                    TaskService taskService = new TaskService(db);
                    
                    //Init constant
                    int lowPriorityPoint = AgencyConfig.lowPoint;
                    int mediumPriorityPoint = AgencyConfig.mediumPoint;
                    int highPriorityPoint = AgencyConfig.highPoint;
                    double penatyMultiplier = 1 - (AgencyConfig.penatyPercent / 100);

                    //Lấy hết user
                    var allUsers = userService.GetAll();

                    //Lọc ra ai còn active
                    var activeUsers = allUsers.Where(user => user.IsActive);

                    List<JObject> result = new List<JObject>();
                    //Phân tích từng user 
                    foreach (var user in activeUsers)
                    {
                        double userScore = 0;
                        //phân tích từng task của user
                        foreach (Task task in taskService.GetTasksOfUser(user.ID))
                        {
                            if (taskService.IsTaskFinishedThisMonth(task))
                            {
                                userScore += taskService.CalculateTaskScore(
                                    task,
                                    lowPriorityPoint,
                                    mediumPriorityPoint,
                                    highPriorityPoint,
                                    penatyMultiplier);
                            }
                        }

                        // Parse ra dạng json để trả về
                        JObject userJson = userService.ParseToJson(user, AgencyConfig.AvatarPath);
                        userJson["score"] = Math.Round(userScore, 3);
                        result.Add(userJson);
                    }

                    result.Sort(compareUsersWithScore);
                    return Ok(ResponseHelper.GetResponse(new JArray(result.Take(10))));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        private int compareUsersWithScore(JObject user1, JObject user2)
        {
            double score1 = user1.Value<double>("score");
            double score2 = user2.Value<double>("score");
            return score2.CompareTo(score1);
        }

        public class UserNameComparer : IComparer<User>
        {
            public int Compare(User x, User y)
            {
                return x.Username.CompareTo(y.Username);
            }
        }
    }
}