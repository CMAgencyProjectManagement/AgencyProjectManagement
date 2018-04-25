import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {User} from '../../../interfaces/user';
import * as _ from 'lodash';

@Component({
  selector: 'app-select-users-modal',
  templateUrl: './select-users-modal.component.html',
  styleUrls: ['./select-users-modal.component.scss']
})
export class SelectUsersModalComponent implements OnInit {
  confirmCallback: any;
  cancelCallback: any;
  closeCallback: any;
  title: string;
  confirmButtonText: string;
  message: string;
  selectedUsers: User[];
  selectedUsersIds: number[];
  userPool: User[];

  constructor(private bsModalRef: BsModalRef) {
    this.selectedUsers = [];
    this.selectedUsersIds = [];
    if (!this.confirmButtonText) {
      this.confirmButtonText = 'Confirm';
    }
  }

  onChange($event) {
    this.selectedUsers = _
      .chain(this.selectedUsersIds)
      .map((id) => {
        return _.find(this.userPool, (user: User) => user.id == id)
      })
      .value();
  }

  ngOnInit() {
    if (this.selectedUsers.length > 0) {
      this.selectedUsersIds = _
        .chain(this.userPool)
        .pickBy((user: User) => _.map(this.selectedUsers, 'id').includes(user.id))
        .map('id')
        .value();
    }
  }

  handleOnConfirm() {
    if (this.confirmCallback) {
      this.confirmCallback(this.selectedUsers);
    }
    this.bsModalRef.hide()
  }

  handleOnCancel() {
    if (this.cancelCallback) {
      this.cancelCallback();
    }
    this.bsModalRef.hide()
  }

  handleOnClose() {
    if (this.closeCallback) {
      this.closeCallback();
    }
    this.bsModalRef.hide()
  }
}
