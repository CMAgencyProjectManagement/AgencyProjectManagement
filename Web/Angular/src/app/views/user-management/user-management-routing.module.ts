import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from './create-user/create-user.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Account'
    },
    children: [
      {
        data: {
          title: 'View accounts'
        },
        path: 'view',
        component: ViewUserComponent,
      },
      {
        data: {
          title: 'Create accounts'
        },
        path: 'create',
        component: CreateUserComponent
      },
      {
        data: {
          title: 'Update accounts'
        },
        path: 'update',
        component: UpdateUserComponent
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
