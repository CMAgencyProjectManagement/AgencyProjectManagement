import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamManagementRoutingModule } from './team-management-routing.module';
import { TeamManagementComponent } from './team-management.component';

@NgModule({
  imports: [
    CommonModule,
    TeamManagementRoutingModule,
  ],
  declarations: [TeamManagementComponent]
})
export class TeamManagementModule { }
