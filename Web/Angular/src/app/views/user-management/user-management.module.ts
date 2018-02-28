import { NgModule } from '@angular/core';
import {UserManagementRoutingModule} from './user-management-routing.module';
import {CommonModule} from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  imports: [
    UserManagementRoutingModule,
    CommonModule
  ],
  declarations: [CreateUserComponent, ViewUserComponent]
})
export class UserManagementModule { }
