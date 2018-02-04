import {Component} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  constructor(private accountService: AccountService,
              private router: Router) {

  }

  logout($event) {
    $event.preventDefault();
    this.accountService.logout();
    this.router.navigate(['login'])
  }
}
