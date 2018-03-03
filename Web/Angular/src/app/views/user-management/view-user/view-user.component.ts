import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {PagerService} from '../../../services/pager.service';
import {User} from 'app/interfaces/user';
import {Pager} from '../../../interfaces/pager';

import * as _ from 'lodash';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  @ViewChild('searchUsername') input: ElementRef;
  // all user
  users: User[];
  // pager object
  pager: Pager = {} as Pager;
  // paged && search items
  pagedUsers: User[];

  constructor(
    private userService: UserService,
    private pagerService: PagerService) {
  }

  ngOnInit() {
    this.userService.getAllUser()
      .then(value => {
          this.users = value;
          this.setPage(1);
        }
      )
  }

  setPage(page: number, users: User[] = undefined) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    if (!users) {
      users = this.users;
    }
    console.debug('setPage', users);


    this.pager = this.pagerService.getPager(users.length, page, 7);
    this.pagedUsers = users.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  // search by username
  search(name: string) {
    if (name) {
      const filteredUser = _.filter(this.users, (user: User) => {
          return user.name && _.toLower(user.name).indexOf(_.toLower(name)) >= 0;
        }
      );
      console.debug('search', name, this.users, this.pagedUsers, filteredUser);
      this.pager = {} as Pager;
      this.setPage(1, filteredUser);
    } else {
      this.setPage(1);
    }

  }

}
