const staff_navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info'
    }
  }
];

const manager_navigation = [];


const admin_navigation = [
  {
    name: 'Project',
    url: '/project',
    icon: 'icon-calendar',
    badge: {
      variant: 'info'
    }
  },
  {
    name: 'Team',
    url: '/team/view',
    icon: 'icon-people',
    badge: {
      variant: 'info'
    }
  },
  {
    name: 'Account',
    url: '/account/view',
    icon: 'icon-user',
    badge: {
      variant: 'info'
    }
  },
  {
    name: 'New Employee',
    url: '/account/create',
    icon: 'icon-user',
    badge: {
      variant: 'info'
    }
  },

];


export {
  admin_navigation,
  manager_navigation,
  staff_navigation
}
