import {Injectable} from '@angular/core';
import * as request from 'superagent';
import {post} from 'superagent';
import {serverPath} from '../_serverPath';

@Injectable()
export class ListService {
  private tokenCursor;

  public createList(
    projectId: number,
    name: string
  ): Promise<any> {
    const objData = {
      Name: name,
      ProjectID: projectId,
    };
    return new Promise<any>((resolve, reject) => {
      post(serverPath.createList)
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
      post(serverPath.updateList)
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
