import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {User} from '../entities/user';

@Injectable()
class AlwaysAuthGuard implements CanActivate {
  constructor(private router: Router,
              private accountService: UserService) {
  }

  canActivate(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const currentUser: User = this.accountService.getCurrentUser();
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
