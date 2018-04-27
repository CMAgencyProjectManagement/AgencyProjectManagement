import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {Notification, Sentence, SentenceComponent} from '../../interfaces/notification';
import {User} from '../../interfaces/user';
import {StoreService} from '../../services/tree.service';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html'
})
export class AppAsideComponent implements OnInit {
  notifications: Notification[];
  currentUser: User;

  constructor(private notificationService: NotificationService,
              private storeService: StoreService) {
    this.currentUser = storeService.get(['currentUser']);
    this.notifications = [];
  }

  ngOnInit(): void {
    this.notificationService.getNotifications()
      .then((value: any[]) => {
        for (let notification of value) {
          notification.content = JSON.parse(notification.content);
          this.applyReceiverToNotification(notification);
        }
        this.notifications = value;
      })
      .catch(reason => {
        console.debug('AppAsideComponent - ngOnInit', reason);
      })
  }

  applyReceiverToNotification(notification: Notification) {
    this.applyReceiverToSentenceComponent(notification.content.subject);
    this.applyReceiverToSentenceComponent(notification.content.primaryObject);
    this.applyReceiverToSentenceComponent(notification.content.secondaryObject);
  }

  applyReceiverToSentenceComponent(sentenceComponent: SentenceComponent) {
    if (sentenceComponent.type == 'User') {
      if (sentenceComponent.id == this.currentUser.id) {
        sentenceComponent.content = 'You';
      }
    }
  }

  applyUrlToSentenceComponent(sentenceComponent: SentenceComponent) {
    switch (sentenceComponent.type) {
      case 'User': {

      }
    }
  }
}
