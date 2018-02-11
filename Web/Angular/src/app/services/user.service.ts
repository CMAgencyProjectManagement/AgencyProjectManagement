import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';
import {Cursor, StoreService} from './tree.service';
import {serverPath} from '../_serverPath';
import {post, get} from 'superagent';

@Injectable()
export class UserService {
  private userHub: any;
  private currentUserCursor: Cursor;
  private tokenCursor: Cursor;
  private securityTypeCursor: Cursor;

  constructor(private storeService: StoreService) {
    this.currentUserCursor = storeService.select(['currentUser']);
    this.tokenCursor = storeService.select(['token', 'access_token']);
    this.securityTypeCursor = storeService.select(['token', 'type']);
  }

  public logout() {
    this.currentUserCursor.set(undefined);
    this.tokenCursor.set(undefined);
    this.securityTypeCursor.set(undefined);
  }

  // getLocalToken(): string {
  //   if (typeof(Storage) !== 'undefined') {
  //     let token = localStorage.getItem('AgencyToken');
  //     let expire = localStorage.getItem('AgencyTokenExpireTime');
  //   }
  // }
  //
  // setLocalToken() {
  //   if (typeof(Storage) !== 'undefined') {
  //
  //   }
  // }

  /**
   * @param username
   * @param password
   * @returns {Promise<User>}
   */
  public login(username: string, password: string): Promise<User> {
    const _this = this;
    // return new Promise<User>();
    return new Promise<User>((resolve, reject) => {
      _this.getToken(username, password)
        .then(res => {
          const type = res.token_type;
          const token = res.access_token;
          console.debug('Login - getInfo', type, token.substring(10) + '.....');
          _this.tokenCursor.set(token);
          _this.securityTypeCursor.set(type);
          _this.getCurrentUserInfo(token)
            .then(user => {
              resolve(user);
              _this.currentUserCursor.set(user);
            }).catch(reject);
        }).catch(reject);

    })
  }

  public getAllUser(): Promise<any> {
    const authorization = this.tokenCursor.get();
    return new Promise<any>((resolve, reject) => {
      get(serverPath.allUser)
        .set('token', authorization)
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        }).catch(reject)
    })
  }

  private getToken(username: string, password: string): Promise<any> {
    return new Promise<string>((resolve, reject) => {
      post(serverPath.token)
        .send('grant_type=password')
        .send(`username=${username}`)
        .send(`password=${password}`)
        .then(res => {
          if (res.ok) {
            resolve(res.body);
          } else {
            reject(res.body);
          }
        }).catch(reject)
    })
  }

  private getCurrentUserInfo(authorization): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      get(serverPath.user)
        .set('token', authorization)
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        }).catch(reject)
    });
  }


}
