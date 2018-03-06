import {Injectable} from '@angular/core';
import {StoreService} from './tree.service';
import {get} from 'superagent';
import {serverPath} from '../_serverPath';
import {Team} from '../interfaces/team';
import * as moment from 'moment';

@Injectable()
export class TeamService {
  private tokenCursor;

  constructor(private storeService: StoreService) {
    this.tokenCursor = storeService.select(['token', 'access_token']);
  }

  public getAllTeam(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.allTeam)
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
  public getLocalTeam(): Team {
    if (typeof(Storage) !== 'undefined') {
      let expireTime = Number(localStorage.getItem('AgencyTokenExpireTime'));
      let now = moment().unix();
      if (now < expireTime) {
        let teamJson = localStorage.getItem('AgencyTeam');
        return JSON.parse(teamJson);
      }
    }
  }

  setLocalTeam(team: Team) {
    if (typeof(Storage) !== 'undefined') {
      let teamJson = JSON.stringify(team);
      localStorage.setItem('AgencyTeam', teamJson);
    }
  }
  

}
