import {Injectable} from '@angular/core';
import {Cursor, StoreService} from './tree.service';

declare var $: any;

@Injectable()
export class WebsocketService {
  private connection;
  private isConnectedCursor: Cursor;
  private tokenCursor: Cursor;

  constructor(private storeService: StoreService) {
    this.isConnectedCursor = this.storeService.select(['isWebSocketConnected']);
    this.tokenCursor = this.storeService.select(['token', 'access_token']);

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
        console.debug('WebsocketService', data);
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
