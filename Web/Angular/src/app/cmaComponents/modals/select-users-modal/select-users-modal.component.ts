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
  message: string;
  selectedUsers: User[];
  allProjectUsers: User[];

  constructor(private bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }

  selectedUsersChanged(userIds: number[]) {
    this.selectedUsers = _.filter(this.allProjectUsers, (user: User) => {
      return userIds.includes(user.id);
    });
    console.debug('selectedUsersChanged', this.selectedUsers);
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
