import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import { User } from 'app/interfaces/user';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  users: User[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllUser()
    .then(value =>
      this.users = value
    )
  }

}
