const admin_navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info'
    }
  },
  {
    name: 'Account',
    url: '/account',
    icon: 'icon-user',
    badge: {
      variant: 'info'
    }
  },
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
    url: '/team',
    icon: 'icon-people',
    badge: {
      variant: 'info'
    }
  },
  {
    name: 'Admin',
    url: '/admin',
    icon: 'icon-star',
    children: [
      {
        name: 'Team Management Page',
        url: '/admin/teamManagePage',
        icon: 'icon-star'
      },
    ]
  },
];


const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info'
    }
  }
];

export {
  admin_navigation,
  navigation
}
