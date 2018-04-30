import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  @Input() user: User;
  @Input() sort: boolean;

  constructor() {
  }

  ngOnInit() {
    if (!this.users) {
      if (this.user) {
        this.users = [this.user];
      }
    }

    if (this.sort) {
      this.sortData();
    }
  }

  sortData() {
    let users = _.cloneDeep(this.users);
    users = _
      .chain(users)
      .sortBy(['teamId', 'isManager'])
      .reverse()
      .value();
    this.users = users;
  }
}
