import {Injectable} from '@angular/core';


declare var $: any;

@Injectable()
export class WebsocketService {
  private connection;
  private isConnected: boolean;

  constructor() {
    if ($ === undefined || $.connection === undefined) {
      throw  new Error('Missing dependency');
    } else {
      this.connection = $.connection;
      $.connection.hub.start().then(_ => {
        this.isConnected = true;
      })
    }
  }

  public getAccountHub() {
    if (this.isConnected) {
      return this.connection.accountHub as {
        server: {
          login: (username: string, password: string) => Promise<any>
        },
        client: any
      };
    } else {
      throw new Error('Connection is not available');
    }
  }


}
