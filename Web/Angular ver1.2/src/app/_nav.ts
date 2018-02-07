export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Admin',
    url: '/admin',
    icon: 'icon-star',
    children: [
      {
        name: 'Team Management Page',
        url: '/admin/teammanagepage',
        icon: 'icon-puzzle'
      },
      {
        name: 'Account Management Page',
        url: '/admin/accountManagePage',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/pages/login',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/pages/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/pages/500',
        icon: 'icon-star'
      }
    ]
  },
];
