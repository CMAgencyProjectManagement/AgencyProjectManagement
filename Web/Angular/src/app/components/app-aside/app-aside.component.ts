import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {Notification} from '../../interfaces/notification';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html'
})
export class AppAsideComponent implements OnInit {
  notifications: Notification[];

  constructor(private notificationService: NotificationService) {
    this.notifications = [];
  }

  ngOnInit(): void {
    this.notificationService.getNotifications()
      .then(value => {
        this.notifications = value;
      })
      .catch(reason => {
        console.debug('AppAsideComponent - ngOnInit', reason);
      })
  }

  formatNotification(notification: Notification) {

  }
}

class NotificationResolver {
  private currentUser: User;

  constructor(currentUser: User) {
    this.currentUser = currentUser;
  }

  public resolveNotification(notification: Notification): any {
    let isRead = notification.isRead;
    let sentence = notification.content;

    let Subject = null;
    let verb = null;
    let primaryObject = null;
    let objectLinker = null;
    let secondaryObject = null;
    let location = null;
    let time = null;
  }
}

class NotificationComponent {
  type: NotificationComponentType;
  id: number;
  content: string;

  constructor() {

  }
}

enum NotificationComponentType {
  User,
  Task,
  Project,
  Department,
}
