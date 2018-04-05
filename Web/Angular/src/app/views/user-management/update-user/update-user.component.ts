import {Component, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from 'app/interfaces/user';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {Cursor, StoreService} from '../../../services/tree.service';
import {TeamService} from '../../../services/team.service';
import {Team} from '../../../interfaces/team';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {ConfirmModalComponent} from '../../../cmaComponents/modals/confirm-modal/confirm-modal.component';

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
    avatar: string,
    isActive: string
  };
  resetPasswordModal: BsModalRef;

  constructor(private userService: UserService,
              private storeService: StoreService,
              private teamService: TeamService,
              private modalService: BsModalService) {
    this.isPageLoading = true;
    this.isResetPasswordLoading = false;
    this.isSavingChange = false;
    this.setErrorsNull();
  }

  ngOnInit() {
    this.userID = Number(this.GetURLParameter());
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
      email: new FormControl(undefined),
      phone: new FormControl(undefined),
      team: new FormControl(undefined),
      isActive: new FormControl(undefined),
    })
  }

  updateLoadingState() {
    if (this.foundUser && this.teams) {
      this.isPageLoading = false;
    }
  }

  setDefaultValue(user: User) {
    this.updateForm.controls['email'].setValue(user.email);
    this.updateForm.controls['phone'].setValue(user.phone);
    if (user.team) {
      this.updateForm.controls['team'].setValue(user.team.id);
    }
    this.updateForm.controls['isActive'].setValue(user.isActive);
  }

  openConfirmResetPassword() {
    const initialState = {
      confirmCallback: () => {
        this.resetPassword();
      },
      cancelCallback: () => {
      },
      message: `You are about to reset ${this.foundUser.name}'s password`
    };
    this.resetPasswordModal = this.modalService.show(ConfirmModalComponent, {initialState});
  }

  resetPassword() {
    this.isResetPasswordLoading = true;
    this.userService.resetPassword(this.foundUser.id)
      .then(value => {
        this.newpassword = value.password;
        this.isResetPasswordLoading = false;
      })
      .catch(reason => {
        this.isResetPasswordLoading = false;
        console.debug('resetPassword', reason);
      })

  }


  GetURLParameter() {
    let sPageURL = window.location.href;
    let sURLVariables = sPageURL.split('?');
    let sUsername = sURLVariables[1].split('=');
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
      avatar: '',
      isActive: ''
    };
  }

  handleUpdate() {
    this.setErrorsNull();
    if (confirm('Save change ?')) {
      this.isSavingChange = true;
      const formValue = this.updateForm.value;
      this.userService.updateUser(
        this.foundUser.id,
        formValue.phone,
        formValue.email,
        formValue.team,
        formValue.isActive
      ).then(value => {
        this.isSavingChange = false;
      }).catch(reason => {
        this.errorMessage = reason.message;
        let errors = reason.Data;
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
        this.isSavingChange = false;
      })
    }
  }
}
