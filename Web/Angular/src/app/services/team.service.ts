import {Injectable} from '@angular/core';
import {StoreService} from './tree.service';
import {get} from 'superagent';
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
      if (this.teamsCursor.get()) {
        resolve(_.cloneDeep(this.teamsCursor.get()));
      } else {
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
      }
    });
  }
}
