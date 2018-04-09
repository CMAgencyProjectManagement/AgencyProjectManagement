const staff_navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  }
];

const manager_navigation = [];


const admin_navigation = [
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
    // children: [
    //   {
    //     name: 'View',
    //     url: '/team/view',
    //     icon: 'icon-people',
    //   }
    // ]
  },
  /*
  {
    name: 'Team-create',
    url: '/team/create',
    icon: 'icon-people',
    badge: {
      variant: 'info'
    }
  },
  {
    name: 'Team-update',
    url: '/team/update',
    icon: 'icon-people',
    badge: {
      variant: 'info'
    }
  },
  */
  {
    name: 'User',
    url: '/account/view',
    icon: 'icon-user',
    children: [
      {
        name: 'View user',
        url: '/user/view',
        icon: 'icon-user',

      },
      {
        name: 'Create user',
        url: '/user/create',
        icon: 'icon-user',
      },
    ]
  }
];


export {
  admin_navigation,
  manager_navigation,
  staff_navigation
}
