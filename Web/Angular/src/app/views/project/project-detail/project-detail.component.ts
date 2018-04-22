import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../interfaces/project';
import {Location} from '@angular/common';
import {BsModalService} from 'ngx-bootstrap';
import {
  CommentModalComponent,
  ConfirmModalComponent,
  ErrorModalComponent,
  SelectUsersModalComponent,
  SelectTeamsModalComponent,
  SelectMembersModalComponent
} from '../../../cmaComponents/modals';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import * as _ from 'lodash';
import {Team} from '../../../interfaces/team';
import {TeamService} from 'app/services/team.service';
import {StoreService} from '../../../services/tree.service';
import {UserService} from '../../../services/user.service';
import {User} from 'app/interfaces/user';
import {Directive, ElementRef, Renderer} from '@angular/core';

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
  viewForm: FormGroup;
  foundProject: Project;
  projectID: number;
  project: Project;
  isPageLoading: boolean;
  containmember: boolean;
  containdepartment: boolean;
  managementMode: boolean;
  members: User[];
  foundDepartment: Team;
  currentUser: User;
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
              private teamService: TeamService,
              private storeService: StoreService,
              private userService: UserService,
              private route: ActivatedRoute) {
    this.currentUser = this.storeService.get(['currentUser']) as User;
    this.userService.getCurrentUserInfo().then(value => {
      this.currentUser = value;
    })
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
    let id = this.route.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.projectService.getProject(Number(id))
        .then(value => {
          this.isPageLoading = false;
          this.foundProject = value;
        })
        .catch(reason => {
          this.showErrorModal(reason.Message, true);
        })
    } else {
      this.showErrorModal(`Invalid task id "${id}"`, true);
    }

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
    this.modalService.show(ConfirmModalComponent, {initialState, class: 'modal-dialog'});
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

  handleOnAssignBtnClick() {
    const onConfirm = (selectedTeams: Team[]) => {
      let selectedIds = _.map(selectedTeams, 'id');
      if (selectedIds.length == 0) {
        this.containdepartment = true;
      }
      if (!this.containdepartment) {
        this.projectService.setTeamToProject(this.foundProject.id, selectedIds)
          .then(value => {
            this.foundProject = value;
            this.isLoading.openAssignModal = false
          })
          .catch(reason => {
            this.showErrorModal('Assign fail!');
            this.isLoading.openAssignModal = false;
          })
      } else {
        this.showErrorModal('Please select departments!');
        this.isLoading.openAssignModal = false
      }
    };
    this.isLoading.openAssignModal = true;
    this.teamService.getAllTeam()
      .then(value => {
        let pool = value;
        const initialState = {
          confirmCallback: onConfirm,
          cancelCallback: () => {
            this.isLoading.openAssignModal = false;
          },
          closeCallback: () => {
            this.isLoading.openAssignModal = false;
          },
          userPool: pool,
          title: `Assign`,
          confirmButtonText: 'Assign'
        };
        this.modalService.show(SelectTeamsModalComponent, {initialState, class: 'modal-dialog', ignoreBackdropClick: true});
      })
  };

  handleOnAssignMembersBtnClick() {
    let currentUser = this.storeService.get(['currentUser']) as User;

    this.teamService.getDetail(currentUser.team.id)
      .then(value => {
        const pool = [];
        this.foundDepartment = value;
        for (let member of this.foundDepartment.users as User[]) {
          let removeFlag = false;
          for (let assignedMember of this.foundProject.assignees as User[]) {
            if (assignedMember.id == member.id) {
              removeFlag = true;
            }
          }
          if (!removeFlag) {
            pool.push(member);
          }
        }

        const onConfirm = (selelectedMembers: User[]) => {
          let selectedIds = _.map(selelectedMembers, 'id');
          if (selectedIds.length == 0) {
            this.containmember = true;
          }
          if (!this.containmember) {
            this.projectService.assignUsersToProject(this.foundProject.id, selectedIds)
              .then(value => {
                this.members = _.concat(this.members, selectedIds);
                this.isLoading.openAssignModal = false
              })
              .catch(reason => {
                this.showErrorModal('Assign fail');
                this.isLoading.openAssignModal = false
              })
          } else {
            this.showErrorModal('Please select members!');
            this.isLoading.openAssignModal = false;
          }
        };

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
        this.modalService.show(SelectMembersModalComponent, {initialState, class: 'modal-dialog'});
      })
  }
}
