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
        console.debug(this.foundProject.description);
        this.isLoading = false;
      })
    } else {
      this.showErrorModal('Invalid Project ID!', true);
      this.isLoading = false;
    }
  }

  setErrorsNull(): void {
    this.errors = {
      name: '',
      deadline: '',
    };
  }

  setDefaultValue(user: User) {
    this.updateForm.controls['email'].setValue(user.email);
    this.updateForm.controls['phone'].setValue(user.phone);
    if (user.team) {
      this.updateForm.controls['team'].setValue(user.team.id);
    }
    this.updateForm.controls['isActive'].setValue(user.isActive);
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

  updateProject() {

    // this.projectService.updateProject();
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
}
