const serverPath = {
  token: '/token',
  // User
  user: '/api/user',
  allUser: '/api/user/all',
  createUser: '/api/user',
  updateUser: '/api/user/update',
  leaderBoard: '/api/user/leaderboard',
  resetPassword: userId => `/api/user/${userId}/resetpassword`,
  // Project
  allProject: '/api/project/all',
  getProject: (projectId) => `/api/project/${projectId}`,
  myProject: '/api/project',
  getProjectList: (projectId: number) => `/api/project/${projectId}/list`,
  updateProject: '/api/project',
  createProject: '/api/project',
  closeProject: '/api/project/close',
  // List
  createList: '/api/list',
  updateList: '/api/list/update',
  deleteList: '/api/list',
  // Team
  allTeam: '/api/team/all',
  deleteTeam: '/api/team',
  assignTeam: '/api/team/assign',
  unAssignTeam: '/api/team/unassign',
  setTeamRole: '/api/team/assign/role',
  // Task
  getTask: taskId => `/api/task/${taskId}`,
  createTask: '/api/task',
  editTask: '/api/task',
  getPriority: '/api/task/priority',
  getStatus: '/api/task/status',
  // File
  uploadAvatar: userId => `/api/file/user/${userId}/avatar`,
  uploadAttachment: taskID => `api/file/task/${taskID}/attachment`,
  deleteAttachment: attachmentId => `api/file/attachment/${attachmentId}/delete`
};

export {
  serverPath
}
