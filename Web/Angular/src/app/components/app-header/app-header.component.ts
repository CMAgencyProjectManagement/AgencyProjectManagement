import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {StoreService} from '../../services/tree.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  username;

  constructor(private userService: UserService,
              private router: Router,
              private store: StoreService) {
    this.username = store.get(['currentUser', 'username'])
  }

  logout($event) {
    $event.preventDefault();
    this.userService.logout();
    this.router.navigate(['login'])
  }

  getAllAccountTest($event) {
    $event.preventDefault();
    this.userService.getAllAccountTest();
  }
}
