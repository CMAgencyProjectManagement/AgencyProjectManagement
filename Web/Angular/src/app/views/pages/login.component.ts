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

  constructor(private accountHub: UserService,
              private  storeService: StoreService,
              private router: Router) {
    this.currentAccountCursor = this.storeService.select(['currentUser'])
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('user', Validators.required),
      password: new FormControl('password', Validators.required)
    })
  }

  handleLogin() {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      const _this = this;
      this.accountHub.login(
        formValue.username,
        formValue.password
      ).then(value => {
        _this.currentAccountCursor.set(value);
        _this.router.navigate(['dashboard']);
      }).catch(reason => {
        console.debug('login fail with reason', reason);
      })

    }
  }
}
