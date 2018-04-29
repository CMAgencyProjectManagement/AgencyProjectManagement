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
    name: 'Projects',
    url: '/project',
    icon: 'icon-calendar'
  },
  {
    name: 'My tasks',
    url: '/task/mytasks',
    icon: 'icon-briefcase'
  },
  {
    name: 'Profile',
    url: '/account/profile',
    icon: 'icon-user',
  }
];

/**
 * home page (manager)
 * my department
 * my projects
 * my account (profile)
 * update profile
 */
const manager_navigation = [
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
    name: 'Projects',
    url: '/project',
    icon: 'icon-calendar'
  },
  {
    name: 'Profile',
    url: '/account/profile',
    icon: 'icon-user',
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
    name: 'Projects',
    url: '/project',
    icon: 'icon-calendar',
    children: [
      {
        name: 'View projects',
        url: '/project',
        icon: 'icon-calendar',
      },
      {
        name: 'Create project',
        url: '/project/add',
        icon: 'icon-calendar',
      },

      
    ]
  },
  {
    name: 'Departments',
    url: '/department/view',
    icon: 'icon-people',
  },
  {
    name: 'Accounts',
    url: '/account/view',
    icon: 'icon-user',
    children: [
      {
        name: 'View accounts',
        url: '/account/view',
        icon: 'icon-user',

      },
      {
        name: 'Create account',
        url: '/account/create',
        icon: 'icon-user',
      },
      {
        name: 'My profile',
        url: '/account/profile',
        icon: 'icon-user',
      }
    ]
  },
  {
    name: 'Config',
    url: '/config',
    icon: 'icon-speedometer'
  },
];


export {
  admin_navigation,
  manager_navigation,
  staff_navigation
}
