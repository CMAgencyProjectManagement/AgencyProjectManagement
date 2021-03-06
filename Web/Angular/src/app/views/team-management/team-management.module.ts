import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CmaModule} from '../../cmaComponents/cma.module';

import {TeamManagePageComponent} from './team-management.component';
import {CreateTeamComponent} from './create-team/create-team.component';
import {UpdateTeamComponent} from './update-team/update-team.component';
import {DetailTeamComponent} from './detail-team/detail-team.component';

import {TeamManagementRoutingModule} from './team-management-routing.module';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {DataTablesModule} from 'angular-datatables';
import {SpinnerModule} from '../../components';
import {LaddaModule} from 'angular2-ladda';
@NgModule({
  imports: [
    LaddaModule.forRoot({
      style: 'expand-left'
    }),
    CommonModule,
    FormsModule,
    TeamManagementRoutingModule,
    BsDropdownModule.forRoot(),
    AngularMultiSelectModule,
    DataTablesModule,
    SpinnerModule,
    CmaModule
  ],
  declarations: [
    TeamManagePageComponent,
    CreateTeamComponent,
    UpdateTeamComponent,
    DetailTeamComponent,
  ]
})
export class TeamManagementModule {
}
