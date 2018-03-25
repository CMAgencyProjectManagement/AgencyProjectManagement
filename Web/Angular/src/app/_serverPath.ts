const serverPath = {
  token: '/token',
  // User
  user: '/api/user',
  allUser: '/api/user/all',
  createUser: '/api/user',
  updateUser: '/api/user/update',
  resetPassword: userId => `/api/user/${userId}/resetpassword`,
  // Project
  allProject: '/api/project/all',
  myProject: '/api/project',
  updateProject: '/api/project',
  createProject: '/api/project',
  closeProject: '/api/project/close',
  // Team
  allTeam: '/api/team/all',
  deleteTeam: '/api/team',
  assignTeam: '/api/team/assign',
  unAssignTeam: '/api/team/unassign',
  setManager: (teamId, userId) => `/api/team/${teamId}assign/manager/${userId}`,
  // File
  uploadAvatar: userId => `/api/file/user/${userId}/avatar`
};

export {
  serverPath
}
