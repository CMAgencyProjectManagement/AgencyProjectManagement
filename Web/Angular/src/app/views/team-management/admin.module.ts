// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';




import { AdminRoutingModule } from './admin-routing.module';

//team manage page
import {teamManagePageComponent} from './team-management.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,


  ],
  declarations: [
    teamManagePageComponent,
   
  ]
})
export class AdminModule { }
