import {Injectable} from '@angular/core';
import {StoreService} from './tree.service';
import {get} from 'superagent';
import {serverPath} from '../_serverPath';

@Injectable()
export class ProjectService {
  private tokenCursor;

  constructor(private store: StoreService) {
    this.tokenCursor = this.store.select(['token', 'access_token'])
  }

  public getMyProjects(): Promise<any> {
    return new Promise<any>( (resolve, reject) => {
      get(serverPath.myProject)
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
}
