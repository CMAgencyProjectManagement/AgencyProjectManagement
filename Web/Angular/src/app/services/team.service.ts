import {Injectable} from '@angular/core';
import {StoreService} from './tree.service';
import {get, put} from 'superagent';
import {serverPath} from '../_serverPath';
import * as _ from 'lodash';

@Injectable()
export class TeamService {
  private tokenCursor;
  private teamsCursor;

  constructor(private storeService: StoreService) {
    this.tokenCursor = storeService.select(['token', 'access_token']);
    this.teamsCursor = storeService.select(['teams']);
  }

  public getAllTeam(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      // if (this.teamsCursor.get()) {
      //   resolve(_.cloneDeep(this.teamsCursor.get()));
      // } else {
      get(serverPath.allTeam)
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            this.teamsCursor.set(content.Data);
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
      // }
    });
  }

  public getDetail(teamId): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getTeamDetail(teamId))
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
    });
  }

  public getNeedReviewTasks(teamId): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getNeedReviewTasks(teamId))
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
    });
  }

  public getLateTasks(teamId): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getLateTasks(teamId))
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
    });
  }

  public assignTeam(userIdArray: number[], teamId: number): Promise<any> {
    const dataObj = {
      UserIds: userIdArray,
      TeamId: teamId
    };
    return new Promise<any>((resolve, reject) => {
      put(serverPath.assignTeam)
        .set('token', this.tokenCursor.get())
        .send(dataObj)
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public unAssignTeam(userIdArray: number[]): Promise<any> {
    const dataObj = {
      UserIds: userIdArray
    };
    return new Promise<any>((resolve, reject) => {
      put(serverPath.unAssignTeam)
        .set('token', this.tokenCursor.get())
        .send(dataObj)
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public setRole(teamId: number, userId: number, isManager): Promise<any> {
    const dataObj = {
      UserId: userId,
      TeamId: teamId,
      IsManager: true
    };
    return new Promise<any>((resolve, reject) => {
      put(serverPath.setTeamRole(userId,teamId))
        .set('token', this.tokenCursor.get())
        .send(dataObj)
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }
}
