import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserManagementRoutingModule} from './user-management-routing.module';
import {CreateUserComponent} from './create-user/create-user.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LaddaModule} from 'angular2-ladda';
import {MyDatePickerModule} from 'mydatepicker';
import {DetailUserComponent} from './detail-user/detail-user.component';
import {DataTablesModule} from 'angular-datatables';
import {SpinnerModule} from '../../components/spinner/spinner.module';
import { UpdateMyUserComponent } from './update-my-user/update-my-user.component';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    ReactiveFormsModule,
    LaddaModule.forRoot({
      style: 'expand-left'
    }),
    FormsModule,
    MyDatePickerModule,
    DataTablesModule,
    SpinnerModule
  ],
  declarations: [
    CreateUserComponent,
    ViewUserComponent,
    UpdateUserComponent,
    DetailUserComponent,
    UpdateMyUserComponent
  ]
})
export class UserManagementModule {
}
