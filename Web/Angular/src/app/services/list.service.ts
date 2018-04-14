import {Injectable} from '@angular/core';
import * as request from 'superagent';
import {serverPath} from '../_serverPath';
import {Cursor, StoreService} from './tree.service';
@Injectable()
export class ListService {
  private tokenCursor;

  constructor(private storeService: StoreService) {
    this.tokenCursor = storeService.select(['token', 'access_token']);
  }

  public createList(
    projectId: number,
    name: string
  ): Promise<any> {
    const objData = {
      Name: name,
      ProjectID: projectId,
    };
    return new Promise<any>((resolve, reject) => {
      request.post(serverPath.createList)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .type('form')
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
  public updateList(
    listId: number,
    name: string,

  ): Promise<any> {
    const objData = {
      Name: name,
      ID: listId,
    };
    return new Promise<any>((resolve, reject) => {
      request.put(serverPath.updateList)
        .set('token', this.tokenCursor.get())
        .send(objData)
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

  public removeList(
    listId: number,
  ): Promise<any> {
    const objData = {
      ID: listId,
    };
    return new Promise<any>((resolve, reject) => {
      request.put(serverPath.deleteList)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .type('form')
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
