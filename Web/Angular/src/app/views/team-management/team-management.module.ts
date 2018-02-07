import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamManagementComponent } from './team-management.component';
import {UserManagementRoutingModule} from './team-management-routing.module'

@NgModule({
  imports: [
    CommonModule,
    TeamManagementModule,
  ],
  declarations: [TeamManagementComponent]
})
export class TeamManagementModule { }
