import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectCardComponent} from './project-card/project-card.component';
import {MiniUsersTableComponent} from './miniUsers-table/mini-users-table.component';
import {AssignMembersCardComponent} from './assignMember-card/assignMembers-card.component';
import {DataTablesModule} from 'angular-datatables';
import {LaddaModule} from 'angular2-ladda';
import {UserListComponent} from './user-list/user-list.component';
import {CommentComponent} from './comment/comment.component';
import {CollapseModule} from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';
import {
  ConfirmModalComponent,
  CreateListModalComponent,
  ErrorModalComponent,
  SuccessModalComponent
} from './modals';

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
    ErrorModalComponent,
    CreateListModalComponent,
    SuccessModalComponent
  ],
  declarations: [
    ProjectCardComponent,
    MiniUsersTableComponent,
    AssignMembersCardComponent,
    ConfirmModalComponent,
    UserListComponent,
    CommentComponent,
    ErrorModalComponent,
    CreateListModalComponent,
    SuccessModalComponent
  ]
})
export class CmaModule {
}
