import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectCardComponent} from './project-card/project-card.component';
import {MiniUsersTableComponent} from './miniUsers-table/mini-users-table.component';
import {AssignMembersCardComponent} from './assignMember-card/assignMembers-card.component';
import {DataTablesModule} from 'angular-datatables';
import {LaddaModule} from 'angular2-ladda';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    LaddaModule.forRoot({
      style: 'slide-down'
    }),
  ],
  exports: [
    ProjectCardComponent,
    AssignMembersCardComponent,
    MiniUsersTableComponent
  ],
  declarations: [
    ProjectCardComponent,
    MiniUsersTableComponent,
    AssignMembersCardComponent
  ]
})
export class CmaModule {
}
