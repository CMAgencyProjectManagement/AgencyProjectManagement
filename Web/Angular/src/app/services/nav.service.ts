import {Injectable} from '@angular/core';
import {Cursor, StoreService} from './tree.service';
import {admin_navigation, manager_navigation, staff_navigation} from '../_nav';
import {User} from '../interfaces/user';

@Injectable()
export class NavService {
  private currentUserCursor: Cursor;

  constructor(private store: StoreService) {
    this.currentUserCursor = this.store.select(['currentUser'])

  }

  public getCurrentUserMenu() {
    const currentUser: User = this.currentUserCursor.get();
    return this.getMenu(currentUser.isAdmin, currentUser.isManager);
  }

  public getMenu(isAdmin: boolean, isManager: boolean) {
    let menu = staff_navigation;

    if (isManager) {
      menu = manager_navigation;
    }
    if (isAdmin) {
      menu = admin_navigation;
    }
    return menu;
  }
}
