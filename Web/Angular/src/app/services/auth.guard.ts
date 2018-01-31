import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
class AlwaysAuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      let isSuccess = false;
      console.debug('AlwaysAuthGuard');
      if (isSuccess) {
        // tmp
      } else {
        this.router.navigate(['login']);
      }
      resolve(isSuccess);
    });
  }
}

export {AlwaysAuthGuard}
