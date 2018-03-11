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
// import * as moment from 'moment';
import {IMyDateModel, IMyDpOptions} from 'mydatepicker';
import {Team} from '../../../interfaces/team';
import {TeamService} from '../../../services/team.service';


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
  isLoadingPage: boolean;
  errors: {
    username: string,
    password: string,
    fullname: string,
    email: string,
    birthdate: string,
    team: string,
    avatar: string
  };
  teams: Team[];

  // https://github.com/kekeh/mydatepicker
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
    showInputField: true,
    openSelectorTopOfInput: true,
    showTodayBtn: false
  };

  constructor(private userService: UserService,
              private storeService: StoreService,
              private teamService: TeamService,
              private router: Router) {
    this.currentAccountCursor = this.storeService.select(['currentUser']);
    this.tokenCursor = this.storeService.select(['token']);
    this.isLoading = false;
    this.isLoadingPage = true
  }

  ngOnInit() {
    this.teamService.getAllTeam()
      .then(value => {
        this.teams = value;
        this.isLoadingPage = false;
      });
    this.signupForm = new FormGroup({
      username: new FormControl(undefined),
      password: new FormControl(undefined),
      fullname: new FormControl(undefined),
      email: new FormControl(undefined),
      phone: new FormControl(undefined),
      birthDate: new FormControl(undefined),
      team: new FormControl(undefined),
      avatar: new FormControl(undefined)
    })
  }

  handleCreate() {
    if (this.signupForm.valid) {
      const formValue = this.signupForm.value;
      this.isLoading = true;

      this.userService.createUser(
        formValue.username,
        formValue.password,
        formValue.fullname,
        formValue.phone,
        formValue.birthDate.formatted,
        formValue.email,
        formValue.team
      ).then(value => {
        this.isLoading = false;
      }).catch(reason => {
        this.isLoading = false;
        this.handleCreateError(reason.Data);
      })
    }
  }

  resetForm() {
    const formValue = this.signupForm.value;

  }

  setDate(): void {
    // Set today date using the patchValue function
    let date = new Date();
    this.signupForm.patchValue({
      myDate: {
        date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        }
      }
    });
  }

  clearDate(): void {
    // Clear the date using the patchValue function
    this.signupForm.patchValue({myDate: null});
  }

  handleCreateError(errors: any[]) {
    for (let error of errors) {
      const fieldName = error.key;
      const errorMessage = error.message;
      console.debug('handleCreateUserError', fieldName, errorMessage);
    }
  }

  onDateChanged(event: IMyDateModel) {
    console.debug('onDateChanged', event.date);
  }

}
