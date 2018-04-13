import {Cursor, StoreService} from './tree.service';
import {Injectable} from '@angular/core';
import * as request from 'superagent';
import {serverPath} from '../_serverPath';

@Injectable()
export class UploadService {
  private currentUserCursor: Cursor;
  private tokenCursor: Cursor;

  constructor(private storeService: StoreService) {
    this.currentUserCursor = storeService.select(['currentUser']);
    this.tokenCursor = storeService.select(['token', 'access_token']);
  }

  public uploadAvatarFile(file, userId): Promise<any> {
    return new Promise((resolve, reject) => {
      request.put(serverPath.uploadAvatar(userId))
        .set('token', this.tokenCursor.get())
        .field('id', userId)
        .attach('avatar', file)
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
