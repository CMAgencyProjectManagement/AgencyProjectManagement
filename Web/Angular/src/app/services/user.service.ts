import {Injectable} from '@angular/core';
import {User} from '../entities/user';
import {Cursor, StoreService} from './tree.service';
import {WebsocketService} from './websocket.service';
import {serverPath} from '../_serverPath';
import {post, get} from 'superagent';
@Injectable()
export class UserService {
  private userHub: any;
  private currentUserCursor: Cursor;
  private tokenCursor: Cursor;
  private securityTypeCursor: Cursor;

  constructor(private storeService: StoreService,
              private ws: WebsocketService) {
    this.currentUserCursor = storeService.select(['currentUser']);
    this.tokenCursor = storeService.select(['token', 'access_token']);
    this.securityTypeCursor = storeService.select(['token', 'type']);
  }

  public logout() {
    this.currentUserCursor.set(undefined);
    this.tokenCursor.set(undefined);
    this.securityTypeCursor.set(undefined);
  }

  /**
   * @param username
   * @param password
   * @returns {Promise<User>}
   */
  public login(username: string, password: string): Promise<User> {
    console.debug('Login - UserService');
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
        })
    })
  }

  private getCurrentUserInfo(authorization): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      get(serverPath.getUser)
        .set('token', authorization)
        .then(res => {
          if (res.ok) {
            resolve(res.body);
          } else {
            reject(res.body);
          }
        })
    });
  }

  /***
   * Test
   */
  public getAllAccountTest(): Promise<any> {
    return new Promise<any>(resolve => {
      this.ws.getUserHub().server.getAllAccounts().then(value => {
        console.debug('getAllAccountTest - success', value);
      }).catch(reason => {
        console.debug('getAllAccountTest - fail', reason);
      })
    })

  }


  /**
   * @param user
   * @param password
   * @param avatar
   * @returns {Promise<object{}> }
   */
  public createUser(user: string, password: string, avatar: string): Promise<number> {
    return this.userHub.server.createAccount(user, password, avatar);
  }
}
