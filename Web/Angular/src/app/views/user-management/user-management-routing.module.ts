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
          title: 'View'
        },
        path: 'view',
        component: ViewUserComponent,
      },
      {
        path: 'detail/:id',
        component: DetailUserComponent,
        data: {
          title: 'Account Detail'
        }
      },
      {
        path: ':id/detail',
        component: DetailUserComponent,
        data: {
          title: 'Account Detail'
        }
      },
      {
        path: 'profile',
        component: DetailUserComponent,
        data: {
          title: 'Account Detail'
        }
      },
      {
        data: {
          title: 'Create'
        },
        path: 'create',
        component: CreateUserComponent
      },
      {
        data: {
          title: 'Update'
        },
        path: 'update',
        component: UpdateUserComponent
      },
      {
        data: {
          title: 'Update'
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
