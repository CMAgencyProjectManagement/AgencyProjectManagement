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
    this.tokenCursor = this.storeService.select(['token']);

    this.tokenCursor.on('update', this.handleTokenUpdate.bind(this));
  }

  public handleTokenUpdate(event) {
    const token = event.data.currentData;
    console.debug('handleTokenUpdate', token);
    if (token.access_token) {
      this.connect(token.access_token);
    }
  }

  public connect(access_token: string) {
    if ($ === undefined || $.connection === undefined) {
      throw new Error('Missing dependency');
    } else {
      this.connection = $.connection;
      this.connection.qs = {'token': access_token};
      // this.connection.hub.url = '/signalr';
      this.connection.hub.start().then(_ => {
        this.isConnectedCursor.set(true);
      })
    }
  }

  public getUserHub() {
    if (this.isConnectedCursor.get()) {
      return this.connection.accountHub as {
        server: {
          login: (username: string, password: string) => Promise<any>,
          getAllAccounts: () => Promise<any>
        },
        client: any
      };
    } else {
      throw new Error('Connection is not available');
    }
  }

  public getProjectHub() {
    if (this.isConnectedCursor.get()) {
      return this.connection.projectHub as {
        server: {
          getActiveProjects: () => Promise<any>
        },
        client: any
      };
    } else {
      throw new Error('Connection is not available');
    }
  }


}
