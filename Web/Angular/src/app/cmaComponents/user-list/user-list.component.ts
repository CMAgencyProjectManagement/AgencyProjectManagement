import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  @Input() user: User;

  constructor() {
  }

  ngOnInit() {
    if (!this.users) {
      if (this.user) {
        this.users = [this.user];
      }
    }
  }

}
