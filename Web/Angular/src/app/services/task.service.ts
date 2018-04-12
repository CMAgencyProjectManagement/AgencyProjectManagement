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

  createTask(
    name: string,
    description: string,
    listId: number,
    priority: number,
    startDate: string,
    duration: number,
    effort: number
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {

    });
  }

  editTask(
    taskId: number,
    name: string,
    description: string,
    listId: number,
    priority: number,
    startDate: string,
    duration: number,
    effort: number
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {

    });
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
