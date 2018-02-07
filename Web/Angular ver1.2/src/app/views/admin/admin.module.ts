// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';




import { AdminRoutingModule } from './admin-routing.module';
import {accountManagePageComponent} from './accountManagePage.component'
//team manage page
import {teamManagePageComponent} from './teammanagepage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,


  ],
  declarations: [
    teamManagePageComponent,
    accountManagePageComponent,
  ]
})
export class AdminModule { }
