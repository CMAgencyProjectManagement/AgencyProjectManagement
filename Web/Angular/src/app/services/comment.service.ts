import {Injectable} from '@angular/core';
import {StoreService} from './tree.service';
import {serverPath} from '../_serverPath';
import * as request from 'superagent';

@Injectable()
export class CommentService {
  private tokenCursor;

  constructor(private storeService: StoreService) {
    this.tokenCursor = storeService.select(['token', 'access_token']);
  }

  public createComment(
    commentBody: string,
    taskId: number): Promise<any> {
    const dataObject = {
      Body: commentBody,
      TaskID: taskId
    };
    return new Promise<any>((resolve, reject) => {
      request.post(serverPath.createComment)
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

  public updateComment(
    commentId: number,
    newBody: string): Promise<any> {
    const dataObj = {
      id: commentId,
      Body: newBody
    };
    return new Promise<any>((resolve, reject) => {
      request.put(serverPath.updateComment)
        .set('token', this.tokenCursor.get())
        .send(dataObj)
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
