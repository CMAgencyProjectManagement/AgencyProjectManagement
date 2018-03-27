import {Injectable} from '@angular/core';
import {Task} from '../interfaces/task';
import * as request from 'superagent';
import {serverPath} from '../_serverPath';
import {Cursor, StoreService} from './tree.service';

@Injectable()
export class TaskService {
  private tokenCursor: Cursor;

  constructor(private store: StoreService) {
    this.tokenCursor = this.store.select(['token', 'access_token']);
  }

  get(): Promise<Task[]> {
    return Promise.resolve([]);
  }

  getTaskDetail(id: number): Promise<Task> {
    return new Promise<Task>((resolve, reject) => {
      request.get(serverPath.getTask(id))
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
