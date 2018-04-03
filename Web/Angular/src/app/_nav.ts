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
        name: 'View',
        url: '/project',
        icon: 'icon-calendar',
      },
      {
        name: 'Create',
        url: '/project/add',
        icon: 'icon-calendar',
      }
    ]
  },
  {
    name: 'department',
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
    name: 'Account',
    url: '/account/view',
    icon: 'icon-user',
    children: [
      {
        name: 'View',
        url: '/account/view',
        icon: 'icon-user',

      },
      {
        name: 'Create',
        url: '/account/create',
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
