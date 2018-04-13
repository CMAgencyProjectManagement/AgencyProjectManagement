import {Injectable} from '@angular/core';
import {Task} from '../interfaces/task';
import * as request from 'superagent';
import {serverPath} from '../_serverPath';
import {Cursor, StoreService} from './tree.service';

@Injectable()
export class TaskService {
  private tokenCursor: Cursor;
  private prioritiesCursor: Cursor;

  constructor(private treeService: StoreService) {
    this.tokenCursor = this.treeService.select(['token', 'access_token']);
    this.prioritiesCursor = this.treeService.select(['priorities']);
  }

  getPriorities(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let priorities = this.prioritiesCursor.get();
      if (priorities) {
        resolve(priorities);
      } else {
        request.get(serverPath.getPriority)
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
      }
    });
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
    const objData = {
      Name: name,
      Description: description,
      ListID: listId,
      Priority: priority,
      StartDate: startDate,
      Duration: duration,
      Effort: effort
    };
    return new Promise<any>((resolve, reject) => {
      request.post(serverPath.createTask)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .type('form')
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
    const objData = {
      Id: taskId,
      Name: name,
      Description: description,
      ListID: listId,
      Priority: priority,
      StartDate: startDate,
      Duration: duration,
      Effort: effort
    };
    return new Promise<any>((resolve, reject) => {
      request.put(serverPath.createTask)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .type('form')
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
