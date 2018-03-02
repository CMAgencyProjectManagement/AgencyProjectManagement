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
import { UserService } from '../../../services/user.service';
import { Cursor, StoreService } from '../../../services/tree.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  signupForm: FormGroup;
  currentAccountCursor: Cursor;
  tokenCursor: Cursor;
  isLoading: boolean;
  errorMessage: string;

  constructor(private accountHub: UserService,
    private storeService: StoreService,
    private router: Router) {
    this.currentAccountCursor = this.storeService.select(['currentUser']);
    this.tokenCursor = this.storeService.select(['token']);
    this.isLoading = false;
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(undefined, Validators.required),
      password: new FormControl(undefined, Validators.required),
      fullname: new FormControl(undefined, Validators.required),
      email: new FormControl(undefined, Validators.required),
      gender: new FormControl(undefined, Validators.required),
      avatar: new FormControl(undefined, Validators.required)
    })
  }

  handleEnterPressed($event) {
    if ($event.keyCode === 13) {
      this.handleLogin();
    }
  }

  handleLogin() {
    if (this.signupForm.valid) {
      const formValue = this.signupForm.value;
      this.isLoading = true;
      console.log(this.isLoading);
      this.accountHub.login(
        formValue.username,
        formValue.password,
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
