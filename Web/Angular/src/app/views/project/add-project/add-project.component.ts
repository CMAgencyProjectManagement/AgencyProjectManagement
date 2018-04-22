import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Cursor, StoreService } from '../../../services/tree.service';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IMyDpOptions } from 'mydatepicker';

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

  tokenCursor: Cursor;
  isLoading: boolean;
  errorMessage: string;
  projectForm: FormGroup;
  isLoadingPage: boolean;
  errors: {
    name: string,
    description: string,
    startDate: string,
    deadline: string,
  };
  constructor(private projectService: ProjectService,
    private router: Router) {
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
    if (this.projectForm.valid) {

      const formValue = this.projectForm.value;
      this.isLoading = true;
      console.debug('here');
      this.projectService.createProject(
        formValue.projectName,
        formValue.projectDescription,
        formValue.projectStartDate.formatted,
        formValue.projectDeadline.formatted,
      ).then(value => {
        this.isLoading = false;
        this.router.navigate(['project'])
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
      console.debug('handleCreateProjectError', fieldName, errorMessage);
    }
  }

  setErrorsNull(): void {
    this.errors = {
      name: '',
      description: '',
      startDate: '',
      deadline: '',
    };
  }
}
