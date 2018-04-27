import {Injectable} from '@angular/core';
import {Cursor, StoreService} from './tree.service';
import * as request from 'superagent';
import {serverPath} from '../_serverPath';
import {Notification} from '../interfaces/notification';

@Injectable()
export class NotificationService {
  private tokenCursor: Cursor;
  private currentUserCursor: Cursor;

  constructor(private storeService: StoreService) {
    this.currentUserCursor = storeService.select(['currentUser']);
    this.tokenCursor = storeService.select(['token', 'access_token']);
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
}
