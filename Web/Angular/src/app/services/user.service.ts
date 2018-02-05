import {Injectable} from '@angular/core';
import {User} from '../entities/user';
import {Cursor, StoreService} from './tree.service';
import {WebsocketService} from './websocket.service';

declare var $: any;

@Injectable()
export class UserService {
  private userHub: any;
  private currentUserCursor: Cursor;

  constructor(private store: StoreService,
              private ws: WebsocketService) {
    this.currentUserCursor = store.select(['currentUser']);
  }

  // public connect(username: string, password: string): Promise<void> {
  //   $.connection.hub.qs = {};
  //   return $.connection.hub.start();
  // }

  public getCurrentUser(): User {
    let user: User = this.currentUserCursor.get();
    if (user == null && typeof(Storage) !== 'undefined') {
      user = JSON.parse(localStorage.getItem('agencyUser'));
    }
    return user;
  }

  public setCurrentUser(user: User) {
    if (user != null) {
      this.currentUserCursor.set(user);
      if (typeof(Storage) !== 'undefined') {
        localStorage.setItem('agencyUser', JSON.stringify(user));
      }
    }
  }

  public logout() {
    if (typeof(Storage) !== 'undefined') {
      localStorage.clear();
    }
    this.currentUserCursor.set(undefined);

  }

  /**
   * @param username
   * @param password
   * @returns {Promise<Account> }
   */
  public login(username: string, password: string): Promise<User> {
    console.debug('Login - UserService');
    return new Promise<User>((resolve, reject) => {
      this.ws.getUserHub().server.login(username, password)
        .then(result => {
          if (result.IsSuccess) {
            this.setCurrentUser(result.data);
            resolve(result.Data);
          } else {
            reject(result.Message);
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
  public createUser(user: string, password: string, avatar: string): Promise<number> {
    return this.userHub.server.createAccount(user, password, avatar);
  }
}
