import {Injectable} from '@angular/core';
import {StoreService} from './tree.service';
import {serverPath} from '../_serverPath';
import {CheckList} from '../interfaces/checkList';
import * as request from 'superagent';

@Injectable()
export class ChecklistService {
  private tokenCursor;

  constructor(private storeService: StoreService) {
    this.tokenCursor = storeService.select(['token', 'access_token']);
  }

  public createChecklist(
    name: string,
    taskId: number): Promise<CheckList> {
    const dataObject = {
      Name: name,
      TaskID: taskId
    };
    return new Promise<any>((resolve, reject) => {
      request.post(serverPath.createChecklist)
        .set('token', this.tokenCursor.get())
        .send(dataObject)
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

  public editChecklist(checkListId, name): Promise<CheckList> {
    const dataObject = {
      Name: name
    };
    return new Promise<any>((resolve, reject) => {
      request.put(serverPath.editChecklist(checkListId))
        .set('token', this.tokenCursor.get())
        .send(dataObject)
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

  public deleteChecklist(checkListId): Promise<number> {
    return new Promise<any>((resolve, reject) => {
      request.delete(serverPath.deleteChecklist(checkListId))
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

  public createChecklistItem(checkListId, name): Promise<CheckList> {
    const dataObject = {
      Name: name,
      CheckListId: checkListId
    };
    return new Promise<any>((resolve, reject) => {
      request.post(serverPath.createChecklistItem)
        .set('token', this.tokenCursor.get())
        .send(dataObject)
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

  public checkChecklistItem(checkListId, checkListItemId): Promise<CheckList> {
    return new Promise<any>((resolve, reject) => {
      request.post(serverPath.checkCheckListItem(checkListId, checkListItemId))
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

  public editChecklistItem(checkListId, checkListItemId, name): Promise<CheckList> {
    const dataObject = {
      Name: name
    };
    return new Promise<any>((resolve, reject) => {
      request.put(serverPath.editChecklistItem(checkListId, checkListItemId))
        .set('token', this.tokenCursor.get())
        .send(dataObject)
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

  public deleteChecklistItem(checkListId, checkListItemId): Promise<number> {
    return new Promise<any>((resolve, reject) => {
      request.delete(serverPath.deleteChecklistItem(checkListId, checkListItemId))
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
