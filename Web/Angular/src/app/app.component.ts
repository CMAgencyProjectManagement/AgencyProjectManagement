import {Component, OnInit} from '@angular/core';
import {StoreService} from './services/tree.service';
import {UserService} from './services/user.service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(
    private storeService: StoreService,
    private userService: UserService) {
  }

  ngOnInit(): void {
    console.log('AppComponent-ngOnInit');
    let token = this.userService.getLocalToken();
    let user = this.userService.getLocalUser();

    if (token && user) {
      this.storeService.set(['token', 'access_token'], token);
      this.storeService.set(['currentUser'], user);
    }
  }

}
