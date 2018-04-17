import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../interfaces/project';
import { Location } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap';
import { CommentModalComponent, ConfirmModalComponent, ErrorModalComponent, SelectUsersModalComponent } from '../../../cmaComponents/modals';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],

})
export class ProjectDetailComponent implements OnInit {
  public myModal;
  public largeModal;
  public smallModal;
  public primaryModal;
  public successModal;
  public warningModal;
  public dangerModal;
  public infoModal;
  projects: Project[];
  viewForm: FormGroup
  foundProject: Project;
  projectID: number;
  project: Project;
  isLoading: boolean;
  isPageLoading: boolean;
  constructor(private projectService: ProjectService, private router: Router, private location: Location, private modalService: BsModalService
  ) {
    this.isPageLoading = true;
  }

  ngOnInit() {

    this.projectID = Number(this.GetURLParameter('projectID'));
    this.projectService.getAllProjects()
      .then(data => {
        this.projects = data;
        this.isPageLoading = false;
        for (let i = 0; i < this.projects.length; i++) {
          if (this.projects[i].id == this.projectID) {
            this.foundProject = this.projects[i];
            // this.updateForm.value.fullname= this.foundUser.name;
            // this.viewForm.controls['projectName'].setValue(this.foundProject.name);
            // this.updateForm.value.email=this.foundUser.email;
            // this.updateForm.value.phone=this.foundUser.phone;
          }
        }
      })
      .catch(reason => {
        console.debug('ProjectDetailComponent', reason);
      });
    this.viewForm = new FormGroup({
      projectname: new FormControl(undefined, Validators.required),
      customername: new FormControl(undefined, Validators.required),
      description: new FormControl(undefined, Validators.required),
      createdTime: new FormControl(undefined, Validators.required),
      startDate: new FormControl(undefined, Validators.required),
      deadline: new FormControl(undefined, Validators.required),
      changedBy: new FormControl(undefined, Validators.required),
      changedTime: new FormControl(undefined, Validators.required),

    })
  }

  GetURLParameter(sParam) {
    var sPageURL = window.location.href;
    var sURLVariables = sPageURL.split('?');
    var sUsername = sURLVariables[1].split('=');
    return sUsername[1];
  }

  handleClose(projectID: number) {
    this.projectService.closeProject(
      projectID
    ).then(value => {
      this.isLoading = false;
      this.router.navigate(['project']);
    }).catch(reason => {
      this.isLoading = false;
      console.debug(reason);
      this.handleCloseError(reason.Data);
    })
  }


  handleCloseError(errors: any[]) {
    for (let error of errors) {
      const fieldName = error.key;
      const errorMessage = error.message;
      console.debug('handleCreateProjectError', fieldName, errorMessage);
    }
  }

  handleCloseProject(projectID: number) {
    const onConfirm = () => {
      this.projectService.closeProject(projectID)
        .then(value => {
          this.isLoading = false;
          this.router.navigate(['project']);
        })
        .catch(reason => {
          this.showErrorModal(reason.Message);
        })
    };
    const initialState = {
      message: `Are you sure to close this project?`,
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
}
