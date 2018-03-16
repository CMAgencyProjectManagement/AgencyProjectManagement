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
        url: '/project'
      },
      {
        name: 'Create',
        url: '/project/add'
      }
    ]
  },
  {
    name: 'Team',
    url: '/team/view',
    icon: 'icon-people'
    
  },
  {
    name: 'detail-team',
    url: '/team/detail',
    icon: 'icon-team',
    badge: {
      variant: 'info'
    }
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
        url: '/account/view'

      },
      {
        name: 'Create',
        url: '/account/create'
      },
    ]
  }
];


export {
  admin_navigation,
  manager_navigation,
  staff_navigation
}
