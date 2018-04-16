import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {AppComponent} from './app.component';


// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

// Import Guards
import {AlwaysAuthGuard} from './services/auth.guard';
import {TaskModule} from './views/task/task.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AlwaysAuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'project',
        loadChildren: './views/project/project-management.module#ProjectManagementModule'
      },
      {
        path: 'account',
        loadChildren: './views/user-management/user-management.module#UserManagementModule'
      },
      {
        path: 'department',
        loadChildren: './views/team-management/team-management.module#TeamManagementModule'
      },
      {
        path: 'task',
        loadChildren: './views/task/task.module#TaskModule'
      }
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
