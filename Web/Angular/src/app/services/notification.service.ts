import {Injectable} from '@angular/core';
import {Cursor, StoreService} from './tree.service';
import * as request from 'superagent';
import {serverPath} from '../_serverPath';
import {Notification} from '../interfaces/notification';
import {WebsocketService} from './websocket.service';
import {User} from '../interfaces/user';
import * as _ from 'lodash';

@Injectable()
export class NotificationService {
  private tokenCursor: Cursor;
  private currentUserCursor: Cursor;
  private notificationsCursor: Cursor;
  private isConnectedCursor: Cursor;
  private notificationNeedUpdateCursor: Cursor;

  constructor(private storeService: StoreService,
              private webSocketService: WebsocketService) {
    this.currentUserCursor = storeService.select(['currentUser']);
    this.notificationsCursor = storeService.select(['notifications']);
    this.tokenCursor = storeService.select(['token', 'access_token']);
    this.isConnectedCursor = this.storeService.select(['isWebSocketConnected']);
    this.notificationNeedUpdateCursor = this.storeService.select(['needUpdate', 'notification', 'userIds']);

    this.notificationNeedUpdateCursor.on('update', (event) => {
      let userToBeUpdate: number[] = event.data.currentData;
      let currentUser: User = this.currentUserCursor.get();
      if (userToBeUpdate.includes(currentUser.id)) {
        this.updateNotifications();
      }
    })
  }


  public async updateNotifications() {
    try {
      let notifications = await this.getNotifications();
      this.notificationsCursor.set(notifications);
    } catch (e) {
      console.debug('updateNotifications', e)
    }
  }

  public getNotifications(): Promise<Notification[]> {
    return new Promise<Notification[]>((resolve, reject) => {
      const token = this.tokenCursor.get();
      request.get(serverPath.getMyNotification)
        .set('token', token)
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reject)
    });
  }

  public checkin(): Promise<any> {
    let notifications: Notification[] = _.cloneDeep(this.notificationsCursor.get());
    for (let notification of notifications) {
      notification.isRead = true;
    }
    this.notificationsCursor.set(notifications);
    return new Promise<Notification[]>((resolve, reject) => {
      const token = this.tokenCursor.get();
      request.put(serverPath.checkin)
        .set('token', token)
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reject)
    });
  }
}
