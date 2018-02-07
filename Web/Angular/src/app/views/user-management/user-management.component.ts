import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(private userService: UserService) {
    this.userService.getAllUser().then(value =>
      console.debug('UserManagementComponent', value)
    )
  }

  ngOnInit() {

  }

}
