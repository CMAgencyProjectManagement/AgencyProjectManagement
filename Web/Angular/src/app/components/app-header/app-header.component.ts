import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Cursor, StoreService} from '../../services/tree.service';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {
  private currentUserCursor: Cursor;
  user: User;

  constructor(private userService: UserService,
              private router: Router,
              private store: StoreService) {
    this.currentUserCursor = store.select(['currentUser'])
  }

  ngOnInit(): void {
    this.user = this.currentUserCursor.get();

    this.currentUserCursor.on('update', this.handleCurrentUserUpdate.bind(this));
  }

  handleCurrentUserUpdate(event) {
    this.user = event.data.currentData;
  }


  logout($event) {
    $event.preventDefault();
    this.userService.logout();
    this.router.navigate(['login'])
  }
}
