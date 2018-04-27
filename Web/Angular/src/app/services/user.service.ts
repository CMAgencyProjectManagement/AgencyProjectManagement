import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';
import {Cursor, StoreService} from './tree.service';
import {serverPath} from '../_serverPath';
import {post, get, put} from 'superagent';
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
  public login(username: string, password: string): Promise<any> {
    // return new Promise<User>();
    return new Promise<User>((resolve, reject) => {
      this.getToken(username, password)
        .then(res => {
          resolve(res);
        })
        .catch(reason => {
          reject({
            message: reason.response.body.error_description
          })
          ;
        });
    })
  }

  public getUserById(userId): Promise<any> {
    // return new Promise<User>();

  }

  public applyToken(token, tokenExpireTime) {
    this.setLocalToken(token, tokenExpireTime);
    this.tokenCursor.set(token);
  }

  public applyCurrentUser(userInfo) {
    this.setLocalUser(userInfo);
    this.currentUserCursor.set(userInfo);
  }

  public getUserOfProject(projectId): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getUserOfProject(projectId))
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            this.usersCursor.set(content.Data);
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        }).catch(reject)
    });
  }

  public getLeaderBoard(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.leaderBoard)
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            this.usersCursor.set(content.Data);
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        }).catch(reject)
    });
  }

  public getCurrentUserLateTasks(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getLateTaskOfUser)
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            this.usersCursor.set(content.Data);
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        }).catch(reject)
    });
  }

  public getCurrentUserNearExpireTask(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getNearExpireTaskOfUser)
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            this.usersCursor.set(content.Data);
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        }).catch(reject)
    });
  }

  public getAllUser(): Promise<any> {
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

  public getCurrentUserInfo(): Promise<User> {
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
    email: string,
    team: number): Promise<User> {
    let momentBirthdate = moment(birthdate, 'DD/MM/YYYY');
    const postDataObject = {
      Username: username,
      Password: password,
      Name: name,
      Phone: phone,
      Birthdate: momentBirthdate.format('YYYY-MM-DD'),
      Email: email,
      Team: team
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
            resolve(content.Data);
          } else {
            reject(content.Data);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public updateUser(
    id: number,
    phone: string,
    email: string,
    team: number,
    isActive: boolean
  ): Promise<User> {

    const postDataObject = {
      ID: id,
      Phone: phone,
      Email: email,
      IsActive: isActive,
      Team: team
    };
    return new Promise<User>((resolve, reject) => {
      const token = this.tokenCursor.get();
      post(serverPath.updateUser)
        .set('token', token)
        .send(postDataObject)
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public updateProfile(fullname, birthdate, password): Promise<User> {
    const dataObject = {
      Name: fullname,
      Birthdate: birthdate,
      Password: password,
    };
    return new Promise<User>((resolve, reject) => {
      const token = this.tokenCursor.get();
      put(serverPath.updateProfile)
        .set('token', token)
        .send(dataObject)
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public resetPassword(id: number): Promise<any> {
    const postDataObject = {
      id: id,
    };
    return new Promise<any>((resolve, reject) => {
      const token = this.tokenCursor.get();
      post(serverPath.resetPassword(id))
        .set('token', token)
        .send(postDataObject)
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
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
