import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectCardComponent} from './project-card/project-card.component';
import {MiniUsersTableComponent} from './miniUsers-table/mini-users-table.component';
import {AssignMembersCardComponent} from './assignMember-card/assignMembers-card.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports: [
    ProjectCardComponent,
    AssignMembersCardComponent
  ],
  declarations: [ProjectCardComponent, MiniUsersTableComponent]
})
export class CmaModule {
}
