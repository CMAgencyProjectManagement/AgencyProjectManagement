import {
  Component,
  ElementRef,
  ViewChild,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Cursor, StoreService} from '../../services/tree.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  currentAccountCursor: Cursor;
  tokenCursor: Cursor;
  isLoading: boolean;

  constructor(private accountHub: UserService,
              private storeService: StoreService,
              private router: Router) {
    this.currentAccountCursor = this.storeService.select(['currentUser']);
    this.tokenCursor = this.storeService.select(['token']);

    this.isLoading = false;
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(undefined, Validators.required),
      password: new FormControl(undefined, Validators.required)
    })
  }

  handleLogin() {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      this.isLoading = true;
      this.accountHub.login(
        formValue.username,
        formValue.password
      ).then(value => {
        this.isLoading = false;
        console.debug('login success', value);
        this.router.navigate(['dashboard'])
      }).catch(reason => {
        // TODO: Handle error
        this.isLoading = false;
        console.debug('login fail: ', reason);
      })
    }
  }

}
