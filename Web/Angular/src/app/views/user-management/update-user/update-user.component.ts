import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from 'app/interfaces/user';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {Cursor, StoreService} from '../../../services/tree.service';
import {Router} from '@angular/router';
import {IMyDpOptions} from 'mydatepicker';
import {TeamService} from '../../../services/team.service';
import {Team} from '../../../interfaces/team';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  updateForm: FormGroup;
  tokenCursor: Cursor;
  newpassword: string;
  isResetPasswordLoading: boolean;
  isSavingChange: boolean;
  isPageLoading: boolean;
  errorMessage: string;
  users: User[];
  foundUser: User;
  userID: number;
  teams: Team[];
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

  constructor(private userService: UserService,
              private storeService: StoreService,
              private teamService: TeamService,
              private router: Router) {
    this.isPageLoading = true;
    this.isResetPasswordLoading = false;
    this.isSavingChange = false;
    this.setErrorsNull();
  }

  ngOnInit() {
    this.userID = Number(this.GetURLParameter('id'));
    this.teamService.getAllTeam()
      .then(value => {
        this.teams = value;
        this.updateLoadingState();
      });
    this.userService.getAllUser()
      .then(value => {
          this.users = value;
          for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === this.userID) {
              this.foundUser = this.users[i];
              this.setDefaultValue(this.foundUser);
              this.updateLoadingState();
            }
          }
        }
      );
    this.updateForm = new FormGroup({
      fullname: new FormControl(undefined),
      email: new FormControl(undefined),
      phone: new FormControl(undefined),
      team: new FormControl(undefined),
      isBanned: new FormControl(undefined),
    })
  }

  updateLoadingState() {
    if (this.foundUser && this.teams) {
      this.isPageLoading = false;
    }
  }

  setDefaultValue(user: User) {
    this.updateForm.controls['fullname'].setValue(user.name);
    this.updateForm.controls['email'].setValue(user.email);
    this.updateForm.controls['phone'].setValue(user.phone);
    this.updateForm.controls['team'].setValue(user.team.id);
    this.updateForm.controls['isBanned'].setValue(!user.isActive);
  }

  resetPassword(id) {
    this.isResetPasswordLoading = true;
    this.userService.resetPassword(id)
      .then(value => {
        this.newpassword = value.password;
        this.isResetPasswordLoading = false;
      })
      .catch(reason => {
        this.isResetPasswordLoading = false;
        console.debug('resetPassword', reason);
      })
  }


  GetURLParameter(sParam) {
    var sPageURL = window.location.href;
    var sURLVariables = sPageURL.split('?');
    var sUsername = sURLVariables[1].split('=');
    return sUsername[1];
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

  handleUpdate() {
    if (confirm('Save change?')) {
      if (this.updateForm.valid) {
        this.isSavingChange = true;
        const formValue = this.updateForm.value;
        this.userService.updateUser(this.foundUser.id, formValue.fullname, formValue.phone, '12/24/2018', formValue.email).then(value => {
          this.isSavingChange = false;
          this.router.navigate(['dashboard'])
        }).catch(reason => {
          this.isSavingChange = false;
          this.errorMessage = reason.message;
        })
      }
    }
  }
}
