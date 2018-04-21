/**
 *  home page (user)
 *  my department
 *  my projects
 *  my tasks (assigned)
 *  my account (profile)
 *  update profile
 */

const staff_navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Department',
    url: '/department/my',
    icon: 'icon-people'
  },
  {
    name: 'My Project',
    url: '/project',
    icon: 'icon-calendar'
  },
  {
    name: 'Task',
    url: '/task/mytasks',
    icon: 'icon-briefcase'
  },
  {
    name: 'My Profile',
    url: '/account/profile',
    icon: 'icon-user',
  }
];

/**
 * home page (manager)
 * my department
 * my department's active projects
 * my account (profile)
 * update profile
 */
const manager_navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  }
];

/**
 * home page (admin)
 * view account
 * create account
 * view department
 * view project
 * create project
 */
const admin_navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Project',
    url: '/project',
    icon: 'icon-calendar',
    children: [
      {
        name: 'View project',
        url: '/project',
        icon: 'icon-calendar',
      },
      {
        name: 'Create project',
        url: '/project/add',
        icon: 'icon-calendar',
      }
    ]
  },
  {
    name: 'Department',
    url: '/department/view',
    icon: 'icon-people',
  },
  {
    name: 'Account',
    url: '/account/view',
    icon: 'icon-user',
    children: [
      {
        name: 'View account',
        url: '/account/view',
        icon: 'icon-user',

      },
      {
        name: 'Create account',
        url: '/account/create',
        icon: 'icon-user',
      },
      {
        name: 'My Profile',
        url: '/account/profile',
        icon: 'icon-user',
      }
    ]
  }
];


export {
  admin_navigation,
  manager_navigation,
  staff_navigation
}
