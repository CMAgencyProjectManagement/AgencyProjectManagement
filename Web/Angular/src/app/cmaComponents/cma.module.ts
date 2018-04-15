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
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import {
  ConfirmModalComponent,
  CreateListModalComponent,
  RemoveListModalComponent,
  ErrorModalComponent,
  SuccessModalComponent,
  RenameListModalComponent,
  SelectUsersModalComponent
} from './modals';
import { TypeaheadModule } from 'ngx-bootstrap';
import { CommentModalComponent } from './modals/comment-modal/comment-modal.component';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
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
    CommentModalComponent
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
    SuccessModalComponent,
    RemoveListModalComponent,
    RenameListModalComponent,
    SelectUsersModalComponent,
    CommentModalComponent
  ]
})
export class CmaModule {
}
