import {Injectable} from '@angular/core';
import {Account} from '../entities/Account';
import {Cursor, StoreService} from './tree.service';

declare var $: any;

@Injectable()
export class AccountService {
  private accountHub: any;
  private currentAccountCursor: Cursor;

  constructor(private store: StoreService) {
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
      if (username === 'user' && password === 'password') {
        let account: Account = {
          id: 1,
          username: 'user',
          password: 'password',
          avatar: '',
          isAdmin: true
        };
        this.setCurrentAccount(account);
        resolve(account)
      } else {
        reject('Invalid');
      }
    });
    // const _this = this;
    // return new Promise<Account>((resolve, reject) => {
    //   $.connection.hub.start().then(_ => {
    //     _this.accountHub.server.login(username, password).then(result => {
    //       console.debug('After login', result);
    //       if (result.isSuccess) {
    //         resolve(result.account);
    //       } else {
    //         reject(result.message);
    //       }
    //     });
    //   })
    // })
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
