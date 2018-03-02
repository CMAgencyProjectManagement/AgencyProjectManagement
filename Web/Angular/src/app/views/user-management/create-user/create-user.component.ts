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
import {UserService} from '../../../services/user.service';
import {Cursor, StoreService} from '../../../services/tree.service';
import {Router} from '@angular/router';

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

  constructor(private userService: UserService,
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

  handleCreate() {
    console.debug('handleCreate 1');

    if (this.signupForm.valid) {
      const formValue = this.signupForm.value;
      this.isLoading = true;
      console.debug('handleCreate 2', formValue);
      this.userService.createUser(
        formValue.username,
        formValue.password,
        formValue.fullname,
        undefined,
        undefined,
        formValue.email
      ).then(value => {
        this.isLoading = false;
      }).catch(reason => {
        this.isLoading = false;
        console.debug(reason);
        this.handleCreateError(reason.Data);
      })
    }
  }

  handleCreateError(errors: any[]) {
    for (let error of errors) {
      const fieldName = error.key;
      const errorMessage = error.message;
      console.debug('handleCreateUserError', fieldName, errorMessage);
    }
  }


}
