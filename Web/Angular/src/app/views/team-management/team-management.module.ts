import {NgModule} from '@angular/core';
import {TeamManagePageComponent} from './team-management.component';
import {TeamManagementRoutingModule} from './team-management-routing.module';
import {CommonModule} from '@angular/common';
import { CreateTeamComponent } from './create-team/create-team.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { DetailTeamComponent } from './detail-team/detail-team.component';

@NgModule({
  imports: [
    CommonModule,
    TeamManagementRoutingModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [TeamManagePageComponent, CreateTeamComponent, UpdateTeamComponent, DetailTeamComponent]
})
export class TeamManagementModule {
}
