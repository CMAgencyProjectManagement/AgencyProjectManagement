import {Injectable} from '@angular/core';
import {Dependency} from '../interfaces/dependency';
import {serverPath} from '../_serverPath';
import * as request from 'superagent';
import {Cursor, StoreService} from './tree.service';

@Injectable()
export class DependencyService {
  private tokenCursor;

  constructor(private store: StoreService) {
    this.tokenCursor = this.store.select(['token', 'access_token']);
  }

  getDependencyOfProject(projectId) {
    return new Promise<any>((resolve, reject) => {
      request.get(serverPath.getDependenciesOfProject(projectId))
        .set('token', this.tokenCursor.get())
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    })
  }
}
