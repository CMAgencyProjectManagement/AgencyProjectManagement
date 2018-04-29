using System;
using Entity;

namespace Service
{
    public class NotificationSentenceBuilder
    {
        private CmAgencyEntities db;

        public NotificationSentenceBuilder(CmAgencyEntities db)
        {
            this.db = db;
        }

        public NotificationSentence AssignMemberToTaskSentence(int currentUserId, int assigneeId, int taskId, int projectId)
        {
            UserService userService = new UserService(db);
            TaskService taskService = new TaskService(db);
            ProjectService projectService = new ProjectService(db);

            User currentUser = userService.GetUser(currentUserId);
            User assignee = userService.GetUser(assigneeId);
            Task task = taskService.GetTask(taskId);
            Project project = projectService.GetProjectByID(projectId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "assigned",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.User,
                    assignee.ID,
                    assignee.Name),
                ObjectLinker = "to",
                SecondaryObject = new NotificationComponent(
                    NotificationComponentType.Task,
                    task.ID,
                    task.Name),
                Location = new NotificationComponent(
                    NotificationComponentType.Project,
                    project.ID,
                    project.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence UnAssignTaskSentence(int currentUserId, int removedUserId, int taskId,
            int projectId)
        {
            UserService userService = new UserService(db);
            TaskService taskService = new TaskService(db);
            ProjectService projectService = new ProjectService(db);

            User currentUser = userService.GetUser(currentUserId);
            User assignee = userService.GetUser(removedUserId);
            Task task = taskService.GetTask(taskId);
            Project project = projectService.GetProjectByID(projectId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "removed",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.User,
                    assignee.ID,
                    assignee.Name),
                ObjectLinker = "from",
                SecondaryObject = new NotificationComponent(
                    NotificationComponentType.Task,
                    task.ID,
                    task.Name),
                Location = new NotificationComponent(
                    NotificationComponentType.Project,
                    project.ID,
                    project.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence SetStatusSentence(int currentUserId, TaskStatus newStatus, int taskId,
            int projectId)
        {
            // user1 set status of task1 to done on project1
            UserService userService = new UserService(db);
            TaskService taskService = new TaskService(db);
            ProjectService projectService = new ProjectService(db);

            User currentUser = userService.GetUser(currentUserId);
            string status = taskService.DisplayCamelCaseString(newStatus.ToString());
            Task task = taskService.GetTask(taskId);
            Project project = projectService.GetProjectByID(projectId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "set status of",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.Task,
                    task.ID,
                    task.Name),
                ObjectLinker = "to",
                SecondaryObject = new NotificationComponent(
                    NotificationComponentType.StaticString,
                    -1,
                    status),
                Location = new NotificationComponent(
                    NotificationComponentType.Project,
                    project.ID,
                    project.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence NeedReviewSentence(int currentUserId, int managerId, int taskId, int projectId)
        {
            // user1 requests user2 to review task1 on project1
            UserService userService = new UserService(db);
            TaskService taskService = new TaskService(db);
            ProjectService projectService = new ProjectService(db);

            User currentUser = userService.GetUser(currentUserId);
            User manager = userService.GetUser(managerId);
            Task task = taskService.GetTask(taskId);
            Project project = projectService.GetProjectByID(projectId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "requests",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.User,
                    manager.ID,
                    manager.Name),
                ObjectLinker = "to review",
                SecondaryObject = new NotificationComponent(
                    NotificationComponentType.Task,
                    task.ID,
                    task.Name),
                Location = new NotificationComponent(
                    NotificationComponentType.Project,
                    project.ID,
                    project.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence AddCommentSentence(int currentUserId, int taskId, int projectId)
        {
            // user1 added comment to task1 on project1
            UserService userService = new UserService(db);
            TaskService taskService = new TaskService(db);
            ProjectService projectService = new ProjectService(db);

            User currentUser = userService.GetUser(currentUserId);
            Task task = taskService.GetTask(taskId);
            Project project = projectService.GetProjectByID(projectId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "added",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.StaticString,
                    -1,
                    "comment"),
                ObjectLinker = "to",
                SecondaryObject = new NotificationComponent(
                    NotificationComponentType.Task,
                    task.ID,
                    task.Name),
                Location = new NotificationComponent(
                    NotificationComponentType.Project,
                    project.ID,
                    project.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence AddAttachmentSentence(int currentUserId, int attachmentId, int taskId,
            int projectId)
        {
            // user1 added attachment1 to task1 on project1
            UserService userService = new UserService(db);
            TaskService taskService = new TaskService(db);
            AttachmentService attachmentService = new AttachmentService(db);
            ProjectService projectService = new ProjectService(db);

            User currentUser = userService.GetUser(currentUserId);
            Attachment attachment = attachmentService.GetAttachment(attachmentId);
            Task task = taskService.GetTask(taskId);
            Project project = projectService.GetProjectByID(projectId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "added",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.StaticString,
                    -1,
                    attachment.Name),
                ObjectLinker = "to",
                SecondaryObject = new NotificationComponent(
                    NotificationComponentType.Task,
                    task.ID,
                    task.Name),
                Location = new NotificationComponent(
                    NotificationComponentType.Project,
                    project.ID,
                    project.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence RemoveAttachmentSentence(int currentUserId, string attachmentName, int taskId,
            int projectId)
        {
            // user1 removed attachment1 to task1 on project1            
            UserService userService = new UserService(db);
            TaskService taskService = new TaskService(db);
            ProjectService projectService = new ProjectService(db);

            User currentUser = userService.GetUser(currentUserId);
            Task task = taskService.GetTask(taskId);
            Project project = projectService.GetProjectByID(projectId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "removed",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.StaticString,
                    -1,
                    attachmentName),
                ObjectLinker = "to",
                SecondaryObject = new NotificationComponent(
                    NotificationComponentType.Task,
                    task.ID,
                    task.Name),
                Location = new NotificationComponent(
                    NotificationComponentType.Project,
                    project.ID,
                    project.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence EditTaskSentence(int currentUserId, int taskId, int projectId)
        {
            // user1 edited task1 on project1 
            UserService userService = new UserService(db);
            TaskService taskService = new TaskService(db);
            ProjectService projectService = new ProjectService(db);

            User currentUser = userService.GetUser(currentUserId);
            Task task = taskService.GetTask(taskId);
            Project project = projectService.GetProjectByID(projectId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "edited",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.Task,
                    task.ID,
                    task.Name),
                ObjectLinker = "on",
                SecondaryObject = new NotificationComponent(
                    NotificationComponentType.Project,
                    project.ID,
                    project.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence AssignMemberToProjectSentence(int currentUserId, int assigneeId, int projectId)
        {
            // user1 assigned user2 to project1
            UserService userService = new UserService(db);
            ProjectService projectService = new ProjectService(db);

            User currentUser = userService.GetUser(currentUserId);
            User assignee = userService.GetUser(assigneeId);
            Project project = projectService.GetProjectByID(projectId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "assigned",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.User,
                    assignee.ID,
                    assignee.Name),
                ObjectLinker = "to",
                SecondaryObject = new NotificationComponent(
                    NotificationComponentType.Project,
                    project.ID,
                    project.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence UnAssignMemberFromProjectSentence(int currentUserId, int removedUserId,
            int projectId)
        {
            // user1 removed user2 from project1
            UserService userService = new UserService(db);
            ProjectService projectService = new ProjectService(db);

            User currentUser = userService.GetUser(currentUserId);
            User removedUser = userService.GetUser(removedUserId);
            Project project = projectService.GetProjectByID(projectId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "removed",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.User,
                    removedUser.ID,
                    removedUser.Name),
                ObjectLinker = "from",
                SecondaryObject = new NotificationComponent(
                    NotificationComponentType.Project,
                    project.ID,
                    project.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence SetDepartmentToProjectSentence(int currentUserId, int teamId, int projectId)
        {
            // user1 assigned department1 to project1
            UserService userService = new UserService(db);
            ProjectService projectService = new ProjectService(db);

            User currentUser = userService.GetUser(currentUserId);
            User team = userService.GetUser(teamId);
            Project project = projectService.GetProjectByID(projectId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "assigned",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.Department,
                    team.ID,
                    team.Name),
                ObjectLinker = "to",
                SecondaryObject = new NotificationComponent(
                    NotificationComponentType.Project,
                    project.ID,
                    project.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence CloseProjectSentence(int currentUserId, int projectId)
        {
            // user1 closed project1
            UserService userService = new UserService(db);
            ProjectService projectService = new ProjectService(db);

            User currentUser = userService.GetUser(currentUserId);
            Project project = projectService.GetProjectByID(projectId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "closed",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.Project,
                    project.ID,
                    project.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence EditProjectSentence(int currentUserId, int projectId)
        {
            // user1 edited project1 on department1            
            UserService userService = new UserService(db);
            ProjectService projectService = new ProjectService(db);
            TeamService teamService = new TeamService(db);

            User currentUser = userService.GetUser(currentUserId);
            Project project = projectService.GetProjectByID(projectId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "edited",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.Project,
                    project.ID,
                    project.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence AssignMemberToDepartmentSentence(int currentUserId, int assigneeId, int teamId)
        {
            //user1 assigned user2 to department1
            UserService userService = new UserService(db);
            TeamService teamService = new TeamService(db);

            User currentUser = userService.GetUser(currentUserId);
            User assignee = userService.GetUser(assigneeId);
            Team team = teamService.GetTeamById(teamId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "assigned",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.User,
                    assignee.ID,
                    assignee.Name),
                ObjectLinker = "to",
                SecondaryObject = new NotificationComponent(
                    NotificationComponentType.Department,
                    team.ID,
                    team.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence UnAssignMemberFromDepartmentSentence(int currentUserId, int removedUserId, int teamId)
        {
            // user1 removed user2 from department1
            UserService userService = new UserService(db);
            TeamService teamService = new TeamService(db);

            User currentUser = userService.GetUser(currentUserId);
            User removedUser = userService.GetUser(removedUserId);
            Team team = teamService.GetTeamById(teamId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "removed",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.User,
                    removedUser.ID,
                    removedUser.Name),
                ObjectLinker = "from",
                SecondaryObject = new NotificationComponent(
                    NotificationComponentType.Department,
                    team.ID,
                    team.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }

        public NotificationSentence SetManagerOfDepartmentSentence(int currentUserId, int managerId, int teamId)
        {
            // user1 promoted user2 to be manager on department1
            UserService userService = new UserService(db);
            TeamService teamService = new TeamService(db);

            User currentUser = userService.GetUser(currentUserId);
            User manager = userService.GetUser(managerId);
            Team team = teamService.GetTeamById(teamId);

            NotificationSentence sentence = new NotificationSentence
            {
                Subject = new NotificationComponent(
                    NotificationComponentType.User,
                    currentUserId,
                    currentUser.Name),
                Verb = "promoted",
                PrimaryObject = new NotificationComponent(
                    NotificationComponentType.User,
                    manager.ID,
                    manager.Name),
                ObjectLinker = "to be",
                SecondaryObject = new NotificationComponent(
                    NotificationComponentType.StaticString,
                    -1,
                    "manager"),
                Location = new NotificationComponent(
                    NotificationComponentType.Department,
                    team.ID,
                    team.Name),
                Time = DateTime.Today.ToShortDateString()
            };

            return sentence;
        }
    }
}