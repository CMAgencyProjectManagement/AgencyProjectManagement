import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../interfaces/project';
import { Location } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap';
import { CommentModalComponent, ConfirmModalComponent, ErrorModalComponent, SelectUsersModalComponent, SelectTeamsModalComponent } from '../../../cmaComponents/modals';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { Team } from '../../../interfaces/team';
import { TeamService } from 'app/services/team.service';

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
  isPageLoading: boolean;
  isLoading: {
    page: boolean
    attachmentUpload: boolean
    attachmentRemove: boolean[]
    openAssignModal: boolean
    openUnAssignModal: boolean
    done: boolean,
    comment: boolean,
    editComment: boolean
  };
  constructor(private projectService: ProjectService,
    private router: Router,
    private location: Location,
    private modalService: BsModalService,
    private teamService: TeamService
  ) {
    this.isLoading = {
      page: true,
      attachmentUpload: false,
      attachmentRemove: [],
      openAssignModal: false,
      openUnAssignModal: false,
      done: false,
      comment: false,
      editComment: true,
    };
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
      this.isPageLoading = false;
      this.router.navigate(['project']);
    }).catch(reason => {
      this.isPageLoading = false;
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
          this.isPageLoading = false;
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

  handleOnAssignBtnClick() {
    console.debug(this.foundProject.id);
    const onConfirm = (selectedTeams: Team[]) => {
      let selectedIds = _.map(selectedTeams, 'id');
      this.projectService.setTeamToProject(this.foundProject.id, selectedIds)
        .then(value => {
          this.foundProject.teams = _.concat(this.foundProject.teams, selectedTeams);
          this.isLoading.openAssignModal = false
        })
        .catch(reason => {
          console.debug("Here");
          this.showErrorModal('Assign fail');
          this.isLoading.openAssignModal = false
        })
    };
    this.teamService.getAllTeam()
      .then(value => {
        const pool = [];
        for (let team of value as Team[]) {
          let removeFlag = false;
          for (let assignedTeam of this.foundProject.teams) {
            if (assignedTeam.id == team.id) {
              removeFlag = true;
            }
          }
          if (!removeFlag) {
            pool.push(team);
          }
        }

        const initialState = {
          confirmCallback: onConfirm,
          cancelCallback: () => {
          },
          closeCallback: () => {
          },
          userPool: pool,
          title: `Assign`,
          confirmButtonText: 'Assign'
        };
        this.modalService.show(SelectTeamsModalComponent, { initialState, class: 'modal-dialog' });
      })
  };
}
