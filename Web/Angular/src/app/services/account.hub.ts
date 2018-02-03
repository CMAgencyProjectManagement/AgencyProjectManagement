import {Injectable} from '@angular/core';
import {Account} from '../entities/Account';

declare var $: any;

@Injectable()
export class AccountHub {
  private accountHub: any;

  constructor() {
    this.accountHub = $.connection.accountHub;
  }

  public connect(username: string, password: string): Promise<void> {
    $.connection.hub.qs = {};
    return $.connection.hub.start();
  }

  public getAccountInfo(id: number = null): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      console.log('getting info');
      this.accountHub.server.getAccountInfo(id).then(value => {
        console.log(value);
      }).catch(reason => {
        console.log(reason);
      });
    });
  }

  /**
   * @param username
   * @param password
   * @returns {Promise<Account> }
   */
  public login(username: string, password: string): Promise<Account> {
    console.debug('Login - AccountHub');
    return new Promise<Account>((resolve, reject) => {
      if (username === 'user' && password === 'password') {
        resolve({
          id: 1,
          username: 'user',
          password: 'password',
          avatar: '',
          isAdmin: true
        })
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
