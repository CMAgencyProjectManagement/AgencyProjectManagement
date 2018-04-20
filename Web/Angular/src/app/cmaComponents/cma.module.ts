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
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {FormsModule} from '@angular/forms';
import {SpinnerModule} from '../components/spinner/spinner.module';
import {TypeaheadModule} from 'ngx-bootstrap';
import {TaskTableComponent} from './task-table/task-table.component';
import {TaskStatusComponent} from './task-status/task-status.component';
import {ProjectStatusComponent} from './project-status/project-status.component';
import {TaskPriorityComponent} from './task-priority/task-priority.component';

import {
  ConfirmModalComponent,
  CreateListModalComponent,
  RemoveListModalComponent,
  ErrorModalComponent,
  SuccessModalComponent,
  RenameListModalComponent,
  SelectUsersModalComponent,
  SelectTeamsModalComponent,
  CommentModalComponent,
  SelectStatusModalComponent,
  SelectTasksModalComponent,
  SelectMembersModalComponent
} from './modals';
import { TasklistComponent } from './tasklist/tasklist.component';

const declares_exports = [
  ProjectCardComponent,
  AssignMembersCardComponent,
  MiniUsersTableComponent,
  ConfirmModalComponent,
  UserListComponent,
  CommentComponent,
  ErrorModalComponent,
  CreateListModalComponent,
  RemoveListModalComponent,
  SuccessModalComponent,
  RenameListModalComponent,
  SelectUsersModalComponent,
  CommentModalComponent,
  TaskTableComponent,
  SelectStatusModalComponent,
  SelectTeamsModalComponent,
  TaskStatusComponent,
  TasklistComponent,
  SelectTasksModalComponent,
  ProjectStatusComponent,
  TaskPriorityComponent,
  SelectMembersModalComponent
];


@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    SpinnerModule,
    LaddaModule.forRoot({
      style: 'slide-down'
    }),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule,
    FormsModule
  ],
  exports: [
    ...declares_exports
  ],
  declarations: [
    ...declares_exports,
  ]
})
export class CmaModule {
}
