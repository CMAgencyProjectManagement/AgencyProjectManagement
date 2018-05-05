import {Cursor, StoreService} from './tree.service';
import * as request from 'superagent';
import {serverPath} from '../_serverPath';
import {Injectable} from '@angular/core';

@Injectable()
export class ReportService {
  private tokenCursor;

  constructor(private store: StoreService) {
    this.tokenCursor = this.store.select(['token', 'access_token']);
  }


  public getReportStatistic(projectId: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      request.get(serverPath.reportStatistic(projectId))
        .set('token', this.tokenCursor.get())
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

  public getReportProgress(projectId: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      request.get(serverPath.reportProgress(projectId))
        .set('token', this.tokenCursor.get())
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
