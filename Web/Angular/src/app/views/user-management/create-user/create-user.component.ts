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
import {UploadService} from '../../../services/upload.service';
import {Router} from '@angular/router';
// import * as moment from 'moment';
import {IMyDpOptions} from 'mydatepicker';
import {Team} from '../../../interfaces/team';
import {TeamService} from '../../../services/team.service';
import {User} from '../../../interfaces/user';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})

export class CreateUserComponent implements OnInit {
  @ViewChild('datepicker') datepicker;
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
    phone: string,
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
              private uploadService: UploadService,
              private router: Router) {
    this.currentAccountCursor = this.storeService.select(['currentUser']);
    this.tokenCursor = this.storeService.select(['token']);
    this.isLoading = false;
    this.isLoadingPage = true;
    this.setErrorsNull();
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
    this.setErrorsNull();
    const formValue = this.signupForm.value;
    this.isLoading = true;
    let birthdate = formValue.birthDate ? formValue.birthDate.formatted : this.datepicker.selectionDayTxt;
    this.userService.createUser(
      formValue.username,
      formValue.password,
      formValue.fullname,
      formValue.phone,
      birthdate,
      formValue.email,
      formValue.team
    ).then((value: any) => {
      if (formValue.avatar) {
        this.uploadAvatar(formValue.avatar, value.id)
      } else {
        this.isLoading = false;
        this.setErrorsNull();
        // show some form of success message here
      }
    }).catch(reason => {
      this.isLoading = false;
      this.handleCreateError(reason.Data);
    })
  }

  uploadAvatar(file, userId) {
    this.uploadService.uploadAvatarFile(file, userId)
      .then(value => {
        this.isLoading = false;
      }).catch(reason => {
      this.isLoading = false;
      this.handleCreateError(reason.Data);
    })
  }

  setErrorsNull(): void {
    this.errors = {
      username: '',
      password: '',
      fullname: '',
      email: '',
      phone: '',
      birthdate: '',
      team: '',
      avatar: ''
    };
  }

  avatarFileChange(fileInput: any) {
    let file = fileInput.target.files[0];
    this.signupForm.controls['avatar'].setValue(file);
  }

  handleCreateError(errors: any[]) {
    if (errors) {
      for (let error of errors) {
        const fieldName = error.key;
        const errorMessage = error.message;
        switch (fieldName) {
          case 'Username':
            this.errors.username = errorMessage;
            break;
          case 'Password':
            this.errors.password = errorMessage;
            break;
          case 'Name':
            this.errors.fullname = errorMessage;
            break;
          case 'Phone':
            this.errors.phone = errorMessage;
            break;
          case 'Birthdate':
            this.errors.birthdate = errorMessage;
            break;
          case 'Email':
            this.errors.email = errorMessage;
            break;
          case 'Team':
            this.errors.team = errorMessage;
            break;
          case 'Avatar':
            this.errors.avatar = errorMessage;
            break;

        }
      }
    }
  }
}
