import { NgModule } from '@angular/core';
import { UserManagementComponent } from './user-management.component';
import {UserManagementRoutingModule} from './user-management-routing.module';

@NgModule({
  imports: [
    UserManagementRoutingModule
  ],
  declarations: [UserManagementComponent]
})
export class UserManagementModule { }
