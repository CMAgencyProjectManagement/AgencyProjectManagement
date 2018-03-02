import {Cursor, StoreService} from './tree.service';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  private currentUserCursor: Cursor;
  private tokenCursor: Cursor;

  constructor(private storeService: StoreService) {
    this.currentUserCursor = storeService.select(['currentUser']);
    this.tokenCursor = storeService.select(['token', 'access_token']);
  }
}
