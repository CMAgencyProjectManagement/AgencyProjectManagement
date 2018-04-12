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
  myProject: '/api/project',
  updateProject: '/api/project',
  createProject: '/api/project',
  closeProject: '/api/project/close',
  // List
  createList: '/api/list',
  updateList: '/api/list/update',
  // Team
  allTeam: '/api/team/all',
  deleteTeam: '/api/team',
  assignTeam: '/api/team/assign',
  unAssignTeam: '/api/team/unassign',
  setTeamRole: 'api/team/assign/role',
  // Task
  getTask: taskId => `/api/task/${taskId}`,
  createTask: 'api/task',
  editTask: 'api/task',
  // File
  uploadAvatar: userId => `/api/file/user/${userId}/avatar`
};

export {
  serverPath
}
