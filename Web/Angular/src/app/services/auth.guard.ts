import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AccountService} from './account.service';
import {Account} from '../entities/account';

@Injectable()
class AlwaysAuthGuard implements CanActivate {
  constructor(private router: Router,
              private accountService: AccountService) {
  }

  canActivate(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const currentAccount: Account = this.accountService.getCurrentAccount();
      let isSuccess = currentAccount != null;
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
