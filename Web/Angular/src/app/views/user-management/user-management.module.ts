import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserManagementRoutingModule} from './user-management-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ],
  declarations: [CreateUserComponent, ViewUserComponent, UpdateUserComponent]
})
export class UserManagementModule { }
