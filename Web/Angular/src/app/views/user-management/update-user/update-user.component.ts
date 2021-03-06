import { Component, OnInit, TemplateRef, ViewContainerRef, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from 'app/interfaces/user';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as moment from 'moment';
import { Cursor, StoreService } from '../../../services/tree.service';
import { TeamService } from '../../../services/team.service';
import { Team } from '../../../interfaces/team';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../../../cmaComponents/modals/confirm-modal/confirm-modal.component';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { currentId } from 'async_hooks';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  @ViewChild('birthDatePicker') birthDatePicker;
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
  currentUser: User;
  teams: Team[];
  errors: {
    fullname: string,
    email: string,
    phone: string,
    birthdate: string,
    team: string,
    isActive: string,
    password: string
  };

  constructor(private userService: UserService,
    private storeService: StoreService,
    private teamService: TeamService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location, ) {
    this.updateForm = new FormGroup({
      email: new FormControl(undefined),
      phone: new FormControl(undefined),
      team: new FormControl(undefined),
      isActive: new FormControl(undefined),
      fullname: new FormControl(undefined),
      birthdate: new FormControl(undefined),
      password: new FormControl(undefined),
    })
    this.users = [];
    this.currentUser = this.storeService.get(['currentUser']) as User;
    this.isPageLoading = true;
    this.isResetPasswordLoading = false;
    this.isSavingChange = false;
    this.setErrorsNull();
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') == undefined) {
      this.foundUser = this.currentUser;
      // if (this.foundUser.team) {
      //   this.teamService.getDetail(this.foundUser.team.id)
      //     .then(value => {
      //       this.teams = value;
      //       this.updateLoadingState();
      //     });
      // } else {
      //   this.teams = null;
      //   this.updateLoadingState();
      // }
      this.setDefaultValue(this.foundUser);
      this.isPageLoading=false;
    } else {
      this.userID = Number(this.route.snapshot.paramMap.get('id'));
      this.teamService.getAllTeam()
        .then(value => {
          this.teams = value;
        });
      this.userService.getAllUser()
        .then(value => {
          this.users = value;
          for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id == this.userID) {
              this.foundUser = this.users[i];
              this.setDefaultValue(this.foundUser);
              this.isPageLoading = false;
            }
          }
        }
        );
    }
  }

  updateLoadingState() {
    if (this.foundUser && this.teams) {
      this.isPageLoading = false;
    }
  }

  setDefaultValue(user: User) {
    let birthdate = moment(user.birthdate);
    this.updateForm.patchValue({
      birthdate: {
        date: {
          year: birthdate.year(),
          month: birthdate.month() + 1,
          day: birthdate.date()
        }
      }
    })
    this.updateForm.controls['password'].setValue(user.password);
    console.debug(user.password);
    this.updateForm.controls['fullname'].setValue(user.name);
    this.updateForm.controls['email'].setValue(user.email);
    this.updateForm.controls['phone'].setValue(user.phone);
    if (user.team != null) {
      this.updateForm.controls['team'].setValue(user.team.id);
    } else {
      this.updateForm.controls['team'].setValue(0);
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
    this.modalService.show(ConfirmModalComponent, { initialState });
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
      fullname: '',
      email: '',
      phone: '',
      birthdate: '',
      team: '',
      isActive: '',
      password: '',
    };
  }

  handleUpdate() {
    this.setErrorsNull();
    // if (confirm('Save change ?')) {
    //   this.isSavingChange = true;
    //   const formValue = this.updateForm.value;
    //   this.userService.updateUser(
    //     this.foundUser.id,
    //     formValue.phone,
    //     formValue.email,
    //     formValue.team,
    //     formValue.isActive
    //   ).then(value => {
    //     this.isSavingChange = false;
    //   }).catch(reason => {
    //     this.errorMessage = reason.message;
    //     let errors = reason.Data;
    //     for (let error of errors) {
    //       const fieldName = error.key;
    //       const errorMessage = error.message;
    //       switch (fieldName) {
    //         case 'Username':
    //           this.errors.username = errorMessage;
    //           break;
    //         case 'Password':
    //           this.errors.password = errorMessage;
    //           break;
    //         case 'Name':
    //           this.errors.fullname = errorMessage;
    //           break;
    //         case 'Phone':
    //           this.errors.phone = errorMessage;
    //           break;
    //         case 'Birthdate':
    //           this.errors.birthdate = errorMessage;
    //           break;
    //         case 'Email':
    //           this.errors.email = errorMessage;
    //           break;
    //         case 'Team':
    //           this.errors.team = errorMessage;
    //           break;
    //         case 'Avatar':
    //           this.errors.avatar = errorMessage;
    //           break;

    //       }
    //     }
    //     this.isSavingChange = false;
    //   })
    // }
    if (this.currentUser.isAdmin) {
      const onConfirm = () => {
        const formValue = this.updateForm.value;
        this.isSavingChange = true;
        this.userService.updateUser(
          this.foundUser.id,
          formValue.phone,
          formValue.email,
          formValue.team,
          formValue.isActive,
        )
          .then(value => {
            this.isSavingChange = false;
            this.router.navigate(['account/view']);
          })
          .catch(reason => {
            this.isSavingChange = false;
            this.setErrors(reason.Data);
          })
      };
      const initialState = {
        message: `Are you sure to save these changes?`,
        confirmCallback: onConfirm
      };
      this.modalService.show(ConfirmModalComponent, { initialState, class: 'modal-dialog' });
    } else {
      const onConfirm = () => {
        let birthdate = moment(this.birthDatePicker.selectionDayTxt, 'DD/MM/YYYY');
        const formValue = this.updateForm.value;
        this.isSavingChange = true;
        this.userService.updateProfile(
          formValue.fullname,
          birthdate.isValid() ? birthdate.format('YYYY-MM-DD') : this.birthDatePicker.selectionDayTxt,
          formValue.password,
        )
          .then(value => {
            this.isSavingChange = false;
            this.router.navigate(['account/profile']);
          })
          .catch(reason => {
            this.isSavingChange = false;
            this.setErrors(reason.Data);
          })
      };
      const initialState = {
        message: `Are you sure to save these changes?`,
        confirmCallback: onConfirm
      };
      this.modalService.show(ConfirmModalComponent, { initialState, class: 'modal-dialog' });
    }
  }

  setErrors(errors: any[]) {
    for (let error of errors) {
      const fieldName = error.key;
      const errorMessage = error.message;
      switch (fieldName) {
        case 'Email':
          this.errors.email = errorMessage;
          break;
        case 'Phone':
          this.errors.phone = errorMessage;
          break;
        case 'Department':
          this.errors.team = errorMessage;
          break;
        case 'Birthdate':
          this.errors.birthdate = errorMessage;
          break;
        case 'Fullname':
          this.errors.fullname = errorMessage;
          break;
        case 'Password':
          this.errors.password = errorMessage;
          break;
      }
    }
  }

}
