import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';
import {Cursor, StoreService} from './tree.service';
import {serverPath} from '../_serverPath';
import {post, get} from 'superagent';
import * as moment from 'moment';

@Injectable()
export class UserService {
  private currentUserCursor: Cursor;
  private tokenCursor: Cursor;
  private usersCursor: Cursor;

  constructor(private storeService: StoreService) {
    this.currentUserCursor = storeService.select(['currentUser']);
    this.tokenCursor = storeService.select(['token', 'access_token']);
    this.usersCursor = storeService.select(['users']);
  }

  public logout() {
    this.currentUserCursor.set(undefined);
    this.tokenCursor.set(undefined);
    if (typeof(Storage) !== 'undefined') {
      localStorage.clear();
    }
  }

  /**
   * @param username
   * @param password
   * @returns {Promise<User>}
   */
  public login(username: string, password: string): Promise<User> {
    // return new Promise<User>();
    return new Promise<User>((resolve, reject) => {
      this.getToken(username, password)
        .then(res => {
          const type = res.token_type;
          const expiresIn = res.expires_in;
          const token = res.access_token;
          console.debug('Login - getInfo', type, token.substring(10) + '.....');
          this.tokenCursor.set(token);
          this.setLocalToken(token, expiresIn);
          this.getCurrentUserInfo()
            .then(user => {
              resolve(user);
              this.currentUserCursor.set(user);
              this.setLocalUser(user);
            })
            .catch(reject);
        })
        .catch(reason => {
          reject({
            message: reason.response.body.error_description
          })
          ;
        });

    })
  }

  public getAllUser(): Promise<any> {
    const users = this.usersCursor.get() as User[];
    if (users !== undefined) {
      return Promise.resolve(users);
    } else {
      const authorization = this.tokenCursor.get();
      return new Promise<any>((resolve, reject) => {
        get(serverPath.allUser)
          .set('token', authorization)
          .then(res => {
            const content = res.body;
            if (content.IsSuccess) {
              this.usersCursor.set(content.Data);
              resolve(content.Data);
            } else {
              reject(content.Message);
            }
          }).catch(reject)
      })
    }

  }

  private getToken(username: string, password: string): Promise<any> {
    const postDataObject = {
      grant_type: 'password',
      username: username,
      password: password,
    };
    return new Promise<string>((resolve, reject) => {
      post(serverPath.token)
        .send(postDataObject)
        .type('form')
        .then(res => {
          if (res.ok) {
            resolve(res.body);
          } else {
            reject(res);
          }
        }).catch(reject)
    })
  }

  private getCurrentUserInfo(): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      const token = this.tokenCursor.get();
      get(serverPath.user)
        .set('token', token)
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reject)
    });
  }

  public createUser(
    username: string,
    password: string,
    name: string,
    phone: string,
    birthdate: string,
    email: string): Promise<User> {

    const postDataObject = {
      Username: username,
      Password: password,
      Name: name,
      Phone: phone,
      Birthdate: birthdate,
      Email: email
    };
    return new Promise<User>((resolve, reject) => {
      const token = this.tokenCursor.get();
      post(serverPath.createUser)
        .set('token', token)
        .send(postDataObject)
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.data);
          } else {
            reject(content);
          }
        })
        .catch(reject);
    });
  }

  public getLocalToken(): string {
    if (typeof(Storage) !== 'undefined') {
      let token = localStorage.getItem('AgencyToken');
      if (token) {
        let expireTime = Number(localStorage.getItem('AgencyTokenExpireTime'));
        let now = moment().unix();
        if (now < expireTime) {
          return token;
        }
      }

    }
  }

  setLocalToken(token: string, expiresIn: number) {
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('AgencyToken', token);
      if (expiresIn) {
        let now = moment().unix();
        localStorage.setItem('AgencyTokenExpireTime', String(now + expiresIn));
      }

    }
  }

  public getLocalUser(): User {
    if (typeof(Storage) !== 'undefined') {
      let expireTime = Number(localStorage.getItem('AgencyTokenExpireTime'));
      let now = moment().unix();
      if (now < expireTime) {
        let userJson = localStorage.getItem('AgencyUser');
        return JSON.parse(userJson);
      }
    }
  }

  setLocalUser(user: User) {
    if (typeof(Storage) !== 'undefined') {
      let userJson = JSON.stringify(user);
      localStorage.setItem('AgencyUser', userJson);
    }
  }
}
