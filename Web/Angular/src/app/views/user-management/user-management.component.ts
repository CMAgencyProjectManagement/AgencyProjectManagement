import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getAllUser()
      .then(value =>
        this.users = value
      )
  }

  handleCreateAccountClick(){
    // not yet
  }
}
