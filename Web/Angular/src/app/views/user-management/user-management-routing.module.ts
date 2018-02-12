import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserManagementComponent} from './user-management.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {ViewUserComponent} from './view-user/view-user.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Account'
    },
    children: [
      {
        path: 'view',
        component: ViewUserComponent,
      },
      {
        path: 'create',
        component: CreateUserComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule {
}
