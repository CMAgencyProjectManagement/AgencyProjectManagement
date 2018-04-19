import {Injectable} from '@angular/core';
import {Task} from '../interfaces/task';
import * as request from 'superagent';
import {serverPath} from '../_serverPath';
import {Cursor, StoreService} from './tree.service';

@Injectable()
export class TaskService {
  private tokenCursor: Cursor;
  private prioritiesCursor: Cursor;
  private statusesCursor: Cursor;

  constructor(private treeService: StoreService) {
    this.tokenCursor = this.treeService.select(['token', 'access_token']);
    this.prioritiesCursor = this.treeService.select(['taskPriorities']);
    this.statusesCursor = this.treeService.select(['taskStatuses']);
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
              this.prioritiesCursor.set(content.Data);
              resolve(content.Data);
            } else {
              reject(content.Message);
            }
          })
          .catch(reason => reject(reason.response.body));
      }
    });
  }

  getStatuses(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let statuses = this.statusesCursor.get();
      if (statuses) {
        resolve(statuses);
      } else {
        request.get(serverPath.getStatus)
          .set('token', this.tokenCursor.get())
          .then(res => {
            const content = res.body;
            if (content.IsSuccess) {
              this.statusesCursor.set(content.Data);
              resolve(content.Data);
            } else {
              reject(content.Message);
            }
          })
          .catch(reason => reject(reason.response.body));
      }
    });
  }

  setStatus(taskId, status): Promise<any> {
    const objData = {
      TaskId: taskId,
      TaskStatus: status
    };
    return new Promise<any>((resolve, reject) => {
      request.put(serverPath.setStatus)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .then(res => {
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
      request.put(serverPath.editTask)
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

  assignTask(taskId, userIds) {
    const objData = {
      TaskID: taskId,
      UserIDs: userIds,
    };
    return new Promise<Task>((resolve, reject) => {
      request.put(serverPath.assignTask)
        .set('token', this.tokenCursor.get())
        .send(objData)
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

  unassignTask(taskId, userIds) {
    const objData = {
      TaskID: taskId,
      UserIDs: userIds,
    };
    return new Promise<Task>((resolve, reject) => {
      request.put(serverPath.unassignTask)
        .set('token', this.tokenCursor.get())
        .send(objData)
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

  finishTask(taskId) {
    return new Promise<Task>((resolve, reject) => {
      request.put(serverPath.finishTask(taskId))
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

  getMyTask() {
    return new Promise<Task[]>((resolve, reject) => {
      request.get(serverPath.getMyTask)
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
