import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectCardComponent} from './project-card/project-card.component';
import {MiniUsersTableComponent} from './miniUsers-table/mini-users-table.component';
import {AssignMembersCardComponent} from './assignMember-card/assignMembers-card.component';
import {DataTablesModule} from 'angular-datatables';
import {LaddaModule} from 'angular2-ladda';
import {ConfirmModalComponent} from './modals/confirm-modal/confirm-modal.component';
import { UserListComponent } from './user-list/user-list.component';
import { CommentComponent } from './comment/comment.component';
import {CollapseModule} from 'ngx-bootstrap';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    LaddaModule.forRoot({
      style: 'slide-down'
    }),
    CollapseModule.forRoot(),
    RouterModule
  ],
  exports: [
    ProjectCardComponent,
    AssignMembersCardComponent,
    MiniUsersTableComponent,
    ConfirmModalComponent,
    UserListComponent,
    CommentComponent,
    ErrorModalComponent
  ],
  declarations: [
    ProjectCardComponent,
    MiniUsersTableComponent,
    AssignMembersCardComponent,
    ConfirmModalComponent,
    UserListComponent,
    CommentComponent,
    ErrorModalComponent
  ]
})
export class CmaModule {
}
