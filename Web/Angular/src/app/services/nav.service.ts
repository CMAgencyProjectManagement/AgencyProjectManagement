import {Injectable} from '@angular/core';
import {Cursor, StoreService} from './tree.service';
import {admin_navigation, navigation} from '../_nav';
import {User} from '../interfaces/user';

@Injectable()
export class NavService {
  private currentUserCursor: Cursor;

  constructor(private store: StoreService) {
    this.currentUserCursor = this.store.select(['currentUser'])

  }

  public getCurrentUserMenu() {
    const currentUser: User = this.currentUserCursor.get();
    if (currentUser.isAdmin) {
      return admin_navigation
    } else {
      return navigation;
    }
  }

}
