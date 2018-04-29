import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Cursor, StoreService} from '../../services/tree.service';
import {User} from '../../interfaces/user';
import {Notification} from '../../interfaces/notification';
import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {
  private currentUserCursor: Cursor;
  private notificationCursor: Cursor;
  private unReadNotificationCount: number;
  user: User;

  constructor(private userService: UserService,
              private router: Router,
              private store: StoreService) {
    this.unReadNotificationCount = 0;
    this.currentUserCursor = store.select(['currentUser']);
    this.notificationCursor = store.select(['notifications']);
  }

  ngOnInit(): void {
    this.user = this.currentUserCursor.get();
    this.currentUserCursor.on('update', this.handleCurrentUserUpdate.bind(this));
    this.notificationCursor.on('update', event => {
      this.handleNotificationUpdate(event.data.currentData);
    });
  }

  handleCurrentUserUpdate(event) {
    this.user = event.data.currentData;
  }

  handleNotificationUpdate(data) {
    console.log('update');
    let notifications: Notification[] = _.cloneDeep(data);
    let unReadCount = 0;
    for (let notification of notifications) {
      if (!notification.isRead) {
        unReadCount++;
      }
    }
    this.unReadNotificationCount = unReadCount;
  }


  logout($event) {
    $event.preventDefault();
    this.userService.logout();
    this.router.navigate(['login'])
  }
}
