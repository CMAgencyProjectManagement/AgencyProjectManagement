import { Component, OnInit } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorModalComponent} from '../../../cmaComponents/modals';
import {UserService} from '../../../services/user.service';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {User} from 'app/interfaces/user';

@Component({
  selector: 'app-update-my-user',
  templateUrl: './update-my-user.component.html',
  styleUrls: ['./update-my-user.component.scss']
})
export class UpdateMyUserComponent implements OnInit {
  userId: number;
  isPageLoading: boolean;
  errorMessage: string;
  foundUser: User;
  errors: {
    fullname: string,
    birthdate: string,
    password: string
  };
  isSavingChange: boolean;
  updateForm: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: BsModalService
  ) {
    this.isSavingChange = false;
    this.isPageLoading = true;
    this.setErrorsNull();
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.userId = Number(id);
    } else {
      this.showErrorModal(`${id} is not a valid ID`);
    }
    this.updateForm = new FormGroup({
      fullname: new FormControl(undefined),
      birthdate: new FormControl(undefined),
      password: new FormControl(undefined),
    })
  }

  setErrorsNull(): void {
    this.errors = {
      password: '',
      fullname: '',
      birthdate: '',
    };
  }

  private showErrorModal(message: string, isNavigateBack: boolean = false) {
    const initialState = {
      closeCallback: () => {
        if (isNavigateBack) {
          this.location.back();
        }
      },
      message: message
    };
    this.modalService.show(ErrorModalComponent, {initialState, class: 'modal-dialog modal-danger'});
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
            case 'Password':
              this.errors.password = errorMessage;
              break;
            case 'Name':
              this.errors.fullname = errorMessage;
              break;
            case 'Birthdate':
              this.errors.birthdate = errorMessage;
              break;
          }
        }
        this.isSavingChange = false;
      })
    }
  }
}
