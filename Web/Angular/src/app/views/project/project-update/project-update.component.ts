import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../interfaces/project';
import { Cursor } from '../../../services/tree.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ErrorModalComponent } from '../../../cmaComponents/modals/error-modal/error-modal.component';
import { User } from '../../../interfaces/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import * as moment from 'moment';
import {
  CommentModalComponent,
  ConfirmModalComponent,
  SelectUsersModalComponent,
  SelectTeamsModalComponent,
  SelectMembersModalComponent
} from '../../../cmaComponents/modals';
@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.scss'],

})
export class ProjectUpdateComponent implements OnInit {
  myDatePickerOptions: IMyDpOptions = {
    showInputField: true,
    dateFormat: 'dd/mm/yyyy',
  };
  @ViewChild('deadlinePicker') deadlinePicker;
  errors: {
    name: string,
    deadline: string,
  };
  projectID: number;
  foundProject: Project;
  tokenCursor: Cursor;
  isLoading: boolean;
  message: string;
  updateForm: FormGroup;

  constructor(
    private projectService: ProjectService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.updateForm = new FormGroup({
      name: new FormControl(undefined, Validators.required),
      description: new FormControl(undefined, Validators.required),
      deadline: new FormControl(undefined, Validators.required),
    });
    this.isLoading = true;
    this.setErrorsNull();
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.projectID = Number(id);
      this.projectService.getProject(this.projectID).then(value => {
        this.foundProject = value;
        this.setDefaultValue(this.foundProject);
        this.isLoading = false;
      })
    } else {
      this.showErrorModal('Invalid Project ID!', true);
      this.isLoading = false;
    }
  }

  setDefaultValue(project: Project) {
    let deadline = moment(project.deadline);
    this.updateForm.patchValue({
      deadline: {
        date: {
          year: deadline.year(),
          month: deadline.month() + 1,
          day: deadline.date()
        }
      }
    })
    this.updateForm.controls['name'].setValue(project.name);
    this.updateForm.controls['description'].setValue(project.description);
  }

  setErrorsNull(): void {
    this.errors = {
      name: '',
      deadline: '',
    };
  }

  loadProject() {
    this.projectService.getAllProjects()
      .then(data => {
        let projects = data as Project[];
        this.foundProject = projects.find(project => {
          return project.id === this.projectID;
        });
        if (this.foundProject) {
          this.isLoading = false;
        } else {
          this.showErrorModal(`Project with id ${this.projectID} not found`, true);
        }
      })
      .catch(reason => {
        this.showErrorModal(reason.Message);
        console.debug('ProjectUpdateComponent', reason);
      })
  }

  handleUpdate() {
    this.setErrorsNull();
    const formValue = this.updateForm.value;
    let valid = true;
    if (formValue.name == "" && !formValue.deadline) {
      this.errors.name = "Please input project's name!";
      this.errors.deadline = "Please input valid deadline!";
      valid = false;
    }
    if (formValue.name !="" && !formValue.deadline) {
      this.errors.deadline = "Please input valid deadline!";
      valid = false;
    }
    if (formValue.name == "" && formValue.deadline) {
      this.errors.name = "Please input project's name!";
      valid = false;
    }
    if(valid){
      const onConfirm = () => {
        // const formValue = this.updateForm.value;
        let deadline = moment(this.deadlinePicker.selectionDayTxt, 'DD/MM/YYYY');
        this.isLoading = true;
        this.projectService.updateProject(
          this.foundProject.id,
          formValue.name,
          formValue.description,
          this.foundProject.startDate,
          deadline.isValid() ? deadline.format('YYYY-MM-DD') : this.deadlinePicker.selectionDayTxt,
        )
          .then(value => {
            this.isLoading = false;
            this.router.navigate(['project']);
          })
          .catch(reason => {
            this.setErrors(reason.Data);
            this.isLoading = false;
          })
      };
      const initialState = {
        message: `Are you sure to save changes?`,
        confirmCallback: onConfirm
      };
      this.modalService.show(ConfirmModalComponent, { initialState, class: 'modal-dialog' });
  
    }
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
      }
    }
  }
}
