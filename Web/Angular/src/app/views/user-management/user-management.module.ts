import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserManagementRoutingModule} from './user-management-routing.module';
import {CreateUserComponent} from './create-user/create-user.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {ReactiveFormsModule} from '@angular/forms';
import {LaddaModule} from 'angular2-ladda';
@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    ReactiveFormsModule,
    LaddaModule.forRoot({
      style: 'expand-left'
    }),
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  declarations: [CreateUserComponent, ViewUserComponent, UpdateUserComponent]
})
export class UserManagementModule {
}
