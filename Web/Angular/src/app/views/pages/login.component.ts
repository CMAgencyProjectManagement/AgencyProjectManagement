import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  @ViewChild('loginField') loginField: ElementRef;
  @ViewChild('passwordField') passwordField: ElementRef;

  constructor() {
  }

  public login(): void {
    const username = this.loginField.nativeElement.value;
    const password = this.passwordField.nativeElement.value;
    console.debug('LoginComponent - login()', username, password);
  }

}
