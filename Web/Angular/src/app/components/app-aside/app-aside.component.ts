import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {Notification, Sentence, SentenceComponent} from '../../interfaces/notification';
import {User} from '../../interfaces/user';
import {Cursor, StoreService} from '../../services/tree.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html'
})
export class AppAsideComponent implements OnInit {
  notifications: Notification[];
  currentUser: User;
  notificationsCursor: Cursor;

  constructor(private notificationService: NotificationService,
              private storeService: StoreService) {
    this.currentUser = storeService.get(['currentUser']);
    this.notificationsCursor = storeService.select(['notifications']);
    this.notifications = [];
  }

  ngOnInit(): void {
    this.notificationsCursor.on('update', (event) => {
      this.updateNotificationData(event.data.currentData);
    });
    this.notificationService.getNotifications()
      .then(value => {
        // do nothing here
      })
      .catch(reason => {
        console.debug('AppAsideComponent - ngOnInit', reason);
      });
  }

  updateNotificationData(data) {
    this.notifications = _.cloneDeep(data);
    for (let notification of this.notifications) {
      this.applyReceiverToNotification(notification);
    }
  }

  applyReceiverToNotification(notification: Notification) {
    this.applyUrlToSentenceComponent(notification.content.subject);
    this.applyUrlToSentenceComponent(notification.content.primaryObject);
    this.applyUrlToSentenceComponent(notification.content.secondaryObject);
    this.applyUrlToSentenceComponent(notification.content.location);
  }


  applyUrlToSentenceComponent(sentenceComponent: SentenceComponent) {
    if (sentenceComponent.id) {
      let id = sentenceComponent.id;
      switch (sentenceComponent.type) {
        case 'User': {
          sentenceComponent.url = `/account/profile`;
          break;
        }
        case 'Task': {
          sentenceComponent.url = `/task/${id}/view`;
          break;
        }
        case 'Project': {
          sentenceComponent.url = `/project/${id}/detail`;
          break;
        }
        case 'Department': {
          sentenceComponent.url = `/department/${id}/detail`;
          break;
        }
      }
    }
  }
}
