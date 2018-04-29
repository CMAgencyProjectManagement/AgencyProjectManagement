import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { UpdateMyUserComponent } from './update-my-user/update-my-user.component';
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
        path: 'detail/:id',
        component: DetailUserComponent,
        data: {
          title: 'Account detail'
        }
      },
      {
        path: ':id/detail',
        component: DetailUserComponent,
        data: {
          title: 'Account detail'
        }
      },
      {
        path: 'profile',
        component: DetailUserComponent,
        data: {
          title: 'Account detail'
        }
      },
      {
        data: {
          title: 'Create account'
        },
        path: 'create',
        component: CreateUserComponent
      },
      {
        data: {
          title: 'Update account'
        },
        path: 'update',
        component: UpdateUserComponent
      },
      {
        data: {
          title: 'Update account'
        },
        path: 'update/:id',
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
