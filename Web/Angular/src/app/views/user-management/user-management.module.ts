import { NgModule } from '@angular/core';
import { UserManagementComponent } from './user-management.component';
import {UserManagementRoutingModule} from './user-management-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    UserManagementRoutingModule,
    CommonModule
  ],
  declarations: [UserManagementComponent]
})
export class UserManagementModule { }
