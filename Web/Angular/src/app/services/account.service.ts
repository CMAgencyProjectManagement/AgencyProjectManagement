import {Injectable} from '@angular/core';
import {Account} from '../entities/Account';
import {Cursor, StoreService} from './tree.service';
import {WebsocketService} from './websocket.service';

declare var $: any;

@Injectable()
export class AccountService {
  private accountHub: any;
  private currentAccountCursor: Cursor;

  constructor(private store: StoreService,
              private ws: WebsocketService) {
    this.currentAccountCursor = store.select(['currentAccount']);
  }

  // public connect(username: string, password: string): Promise<void> {
  //   $.connection.hub.qs = {};
  //   return $.connection.hub.start();
  // }

  public getCurrentAccount(): Account {
    let account: Account = this.currentAccountCursor.get();
    if (account == null && typeof(Storage) !== 'undefined') {
      account = JSON.parse(localStorage.getItem('agencyUser'));
    }
    return account;
  }

  public setCurrentAccount(account: Account) {
    if (account != null) {
      this.currentAccountCursor.set(account);
      if (typeof(Storage) !== 'undefined') {
        localStorage.setItem('agencyUser', JSON.stringify(account));
      }
    }
  }

  public logout() {
    if (typeof(Storage) !== 'undefined') {
      localStorage.clear();
    }
    this.currentAccountCursor.set(undefined);

  }

  /**
   * @param username
   * @param password
   * @returns {Promise<Account> }
   */
  public login(username: string, password: string): Promise<Account> {
    console.debug('Login - AccountService');
    return new Promise<Account>((resolve, reject) => {
      this.ws.getAccountHub().server.login(username, password)
        .then(result => {
          if (result.isSuccess) {
            this.setCurrentAccount(result);
            resolve(result.account);
          } else {
            reject(result.message);
          }
        })
        .catch(reject);
    });
  }


  /**
   * @param user
   * @param password
   * @param avatar
   * @returns {Promise<object{}> }
   */
  public createAccount(user: string, password: string, avatar: string): Promise<number> {
    return this.accountHub.server.createAccount(user, password, avatar);
  }
}
