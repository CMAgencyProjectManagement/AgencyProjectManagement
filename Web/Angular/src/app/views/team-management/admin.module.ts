// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';




import { AdminRoutingModule } from './admin-routing.module';

// team manage page
import {TeamManagePageComponent} from './team-management.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,


  ],
  declarations: [
    TeamManagePageComponent,

  ]
})
export class AdminModule { }