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
  errorMessage: string;

  constructor(private userService: UserService,
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

  handleEnterPressed($event) {
    if ($event.keyCode === 13) {
      this.handleLogin();
    }
  }

  handleLogin() {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      this.isLoading = true;
      this.userService.login(
        formValue.username,
        formValue.password
      ).then(value => {
        this.isLoading = false;
        this.router.navigate(['dashboard'])

      }).catch(reason => {
        this.isLoading = false;
        this.errorMessage = reason.message;
      })
    }
  }

}
