import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {StoreService} from './tree.service';

@Injectable()
class AlwaysAuthGuard implements CanActivate {
  constructor(private router: Router, private tree: StoreService) {
  }

  canActivate(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const currentAccount = this.tree.get(['currentAccount']);
      let isSuccess = currentAccount == null;
      console.debug('AlwaysAuthGuard');
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
