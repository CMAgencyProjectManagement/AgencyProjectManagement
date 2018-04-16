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
  userPool: User[];

  constructor(private bsModalRef: BsModalRef) {
    if (!this.confirmButtonText) {
      this.confirmButtonText = 'Confirm';
    }
  }

  ngOnInit() {
    this.selectedUsers = [];
  }


  handleOnSelect(userId) {
    this.selectedUsers = _.concat(this.selectedUsers, _.find(this.userPool, (user: User) => {
      return user.id == userId;
    }));

    this.userPool = _.filter(this.userPool, (user: User) => {
      return user.id != userId;
    });
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
