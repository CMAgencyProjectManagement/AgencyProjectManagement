import {NgModule} from '@angular/core';
import {TeamManagePageComponent} from './team-management.component';
import {TeamManagementRoutingModule} from './team-management-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    TeamManagementRoutingModule
  ],
  declarations: [TeamManagePageComponent]
})
export class TeamManagementModule {
}
