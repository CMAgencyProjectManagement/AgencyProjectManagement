import {Injectable} from '@angular/core';
import {Cursor, StoreService} from './tree.service';

declare var $: any;

@Injectable()
export class WebsocketService {
  private connection;
  private isConnectedCursor: Cursor;
  private notificationNeedUpdateCursor: Cursor;
  private taskNeedUpdateCursor: Cursor;
  private tokenCursor: Cursor;

  constructor(private storeService: StoreService) {
    this.isConnectedCursor = this.storeService.select(['isWebSocketConnected']);
    this.tokenCursor = this.storeService.select(['token', 'access_token']);
    this.notificationNeedUpdateCursor = this.storeService.select(['needUpdate', 'notification', 'userIds']);
    this.taskNeedUpdateCursor = this.storeService.select(['needUpdate', 'task', 'taskIds']);

    let token = this.tokenCursor.get();
    if (!this.connection) {
      this.handleTokenUpdate(token);
    }

    this.tokenCursor.on('update', (event) => {
      this.handleTokenUpdate(event.data.currentData);
    });
  }

  public handleTokenUpdate(token) {
    if (token) {
      this.connect(token);
    }
  }

  public connect(access_token: string) {
    if ($ === undefined || $.connection === undefined) {
      throw new Error('Missing dependency');
    } else {
      this.connection = $.connection;

      this.connection.eventHub.client.updateNotification = (data) => {
        this.notificationNeedUpdateCursor.set(data);
      };
      this.connection.eventHub.client.updateTask = (data) => {
        this.taskNeedUpdateCursor.set(data);
      };

      this.connection.hub.qs = {'token': access_token};
      this.connection.hub.url = '/signalr';
      this.connection.hub.start()
        .then(_ => {
          this.isConnectedCursor.set(true);
        })
    }
  }

}


