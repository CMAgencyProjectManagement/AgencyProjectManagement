import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';
import {StoreService, Cursor} from './tree.service';

@Injectable()
class AlwaysAuthGuard implements CanActivate {
  constructor(private router: Router,
              private storeService: StoreService) {
  }

  canActivate(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const currentUser: User = this.storeService.get(['currentUser']);
      let isSuccess = currentUser != null;
      if (isSuccess) {
        resolve(isSuccess);
      } else {
        this.router.navigate(['login']);
        resolve(isSuccess);
      }
    });
  }
}

export {AlwaysAuthGuard}
