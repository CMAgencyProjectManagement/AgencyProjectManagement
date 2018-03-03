import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {PagerService} from '../../../services/pager.service';
import {User} from 'app/interfaces/user';
import {Pager} from '../../../interfaces/pager';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  // all user
  users: User[];
  // pager object
  pager: Pager = {} as Pager;
  // paged items
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

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.users.length, page, 7);

    // get current page of items
    this.pagedUsers = this.users.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  search() {

  }

}
