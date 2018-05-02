import { Component, OnInit, ViewChild} from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Cursor, StoreService } from '../../../services/tree.service';
import { Location } from '@angular/common';
import * as moment from 'moment';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CommentModalComponent,
  ConfirmModalComponent,
  ErrorModalComponent,
  SelectUsersModalComponent,
  SelectTeamsModalComponent,
  SelectMembersModalComponent
} from '../../../cmaComponents/modals';
import { Router } from '@angular/router';
import { IMyDpOptions } from 'mydatepicker';
import { BsModalService } from 'ngx-bootstrap';
import { Project } from 'app/interfaces/project';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  myDatePickerOptions: IMyDpOptions = {
    showInputField: true,
    dateFormat: 'dd/mm/yyyy',
  };
  @ViewChild('startDatePicker') startDatePicker;
  @ViewChild('deadlinePicker') deadlinePicker;
  tokenCursor: Cursor;
  isLoading: boolean;
  errorMessage: string;
  projectForm: FormGroup;
  isLoadingPage: boolean;
  errors: {
    name: string,
    startDate: string,
    deadline: string,
  };
  constructor(private projectService: ProjectService,
    private router: Router,
    private modalService: BsModalService,
    private location: Location, ) {
    this.projectForm = new FormGroup({
      name: new FormControl(undefined, Validators.required),
      description: new FormControl(undefined, Validators.required),
      startDate: new FormControl(undefined, Validators.required),
      deadline: new FormControl(undefined, Validators.required),
    });
    this.isLoading = false;
    this.isLoadingPage = true;
    this.setErrorsNull();
  }

  ngOnInit() {
    this.isLoadingPage = false;
  }

  handleCreate() {
    this.setErrorsNull();
    const onConfirm = () => {
      const formValue = this.projectForm.value;
      let startDate = moment(this.startDatePicker.selectionDayTxt, 'DD/MM/YYYY');
      let deadline = moment(this.deadlinePicker.selectionDayTxt, 'DD/MM/YYYY');
      this.isLoading = true;
      this.projectService.createProject(
        formValue.name,
        formValue.description,
        startDate.isValid() ? startDate.format('YYYY-MM-DD') : this.startDatePicker.selectionDayTxt,
        deadline.isValid() ? deadline.format('YYYY-MM-DD') : this.deadlinePicker.selectionDayTxt,
      )
        .then(value => {
          let newProject= value as Project;
          
          this.isLoading = false;
          this.router.navigate(['project/'+newProject.id+'/detail']);
        })
        .catch(reason => {
          this.isLoading = false;
          this.setErrors(reason.Data);
        })
    };
    const initialState = {
      message: `Are you sure to create this project?`,
      confirmCallback: onConfirm
    };
    this.modalService.show(ConfirmModalComponent, { initialState, class: 'modal-dialog' });
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
    this.modalService.show(ErrorModalComponent, { initialState, class: 'modal-dialog modal-danger' });
  }

  setErrorsNull(): void {
    this.errors = {
      name: '',
      startDate: '',
      deadline: '',
    };
  }
  setErrors(errors: any[]) {
    for (let error of errors) {
      const fieldName = error.key;
      const errorMessage = error.message;
      switch (fieldName) {
        case 'Name':
          this.errors.name = errorMessage;
          break;
        case 'Deadline':
          this.errors.deadline = errorMessage;
          break;
        case 'StartDate':
          this.errors.startDate = errorMessage;
          break;
      }
    }
  }

}
