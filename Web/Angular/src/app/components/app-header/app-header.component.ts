import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Cursor, StoreService} from '../../services/tree.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {
  private usernameCursor: Cursor;
  username;

  constructor(private userService: UserService,
              private router: Router,
              private store: StoreService) {
    this.usernameCursor = store.select(['currentUser', 'username'])
  }

  ngOnInit(): void {
    this.username = this.usernameCursor.get();

    this.usernameCursor.on('update', this.handleUsernameUpdate.bind(this));
  }

  handleUsernameUpdate(event) {
    this.username = event.data.currentData;
  }


  logout($event) {
    $event.preventDefault();
    this.userService.logout();
    this.router.navigate(['login'])
  }
}
