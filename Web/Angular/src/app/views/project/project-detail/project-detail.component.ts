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
    openAssignMembersModal: boolean
    openUnAssignMembersModal: boolean
    openUnAssignModal: boolean
    done: boolean,
    comment: boolean,
    editComment: boolean,
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
    });
    this.isLoading = {
      page: true,
      attachmentUpload: false,
      attachmentRemove: [],
      openAssignModal: false,
      openUnAssignModal: false,
      openAssignMembersModal: false,
      openUnAssignMembersModal: false,
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
      this.projectService.setTeamToProject(this.foundProject.id, selectedIds)
        .then(value => {
          this.foundProject = value;
          this.isLoading.openAssignModal = false
        })
        .catch(reason => {
          this.showErrorModal(reason.Message);
          this.isLoading.openAssignModal = false;
        });
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
          title: `Assign team to project "${this.foundProject.name}"`,
        };
        this.modalService.show(SelectTeamsModalComponent, {initialState, class: 'modal-dialog', ignoreBackdropClick: true});
      })
  };

  handleOnUnAssignMembersBtnClick() {
    this.isLoading.openUnAssignMembersModal = true;
    const pool = _.filter(this.foundProject.assignees, (user: User) => {return !user.isManager});

    const onConfirm = (selelectedMembers: User[]) => {
      let selectedIds = _.map(selelectedMembers, 'id');
      if (selectedIds.length == 0) {
        this.containmember = true;
      }
      if (!this.containmember) {
        this.projectService.unAssignUsersFromProject(this.foundProject.id, selectedIds)
          .then(value => {
            this.foundProject = value;
            this.isLoading.openUnAssignMembersModal = false
          })
          .catch(reason => {
            this.showErrorModal(reason.Message);
            this.isLoading.openUnAssignMembersModal = false
          })
      } else {
        this.showErrorModal('Please select members!');
        this.isLoading.openUnAssignMembersModal = false;
      }
    };

    const initialState = {
      confirmCallback: onConfirm,
      cancelCallback: () => {
        this.isLoading.openUnAssignMembersModal = false
      },
      closeCallback: () => {
        this.isLoading.openUnAssignMembersModal = false
      },
      userPool: pool,
      title: `Un-Assign`
    };
    this.modalService.show(SelectUsersModalComponent, {initialState, class: 'modal-dialog', ignoreBackdropClick: true});
  }

  handleOnAssignMembersBtnClick() {
    this.isLoading.openAssignMembersModal = true;
    this.projectService.getAssignableUser(this.foundProject.id)
      .then(users => {
        const pool = users;

        const onConfirm = (selelectedMembers: User[]) => {
          let selectedIds = _.map(selelectedMembers, 'id');
          if (selectedIds.length == 0) {
            this.containmember = true;
          }
          if (!this.containmember) {
            this.projectService.assignUsersToProject(this.foundProject.id, selectedIds)
              .then(value => {
                this.foundProject = value;
                this.isLoading.openAssignMembersModal = false
              })
              .catch(reason => {
                this.showErrorModal(reason.Message);
                this.isLoading.openAssignMembersModal = false
              })
          } else {
            this.showErrorModal('Please select members!');
            this.isLoading.openAssignMembersModal = false;
          }
        };

        const initialState = {
          confirmCallback: onConfirm,
          cancelCallback: () => {
            this.isLoading.openAssignMembersModal = false
          },
          closeCallback: () => {
            this.isLoading.openAssignMembersModal = false
          },
          userPool: pool,
          title: `Assign`,
          confirmButtonText: 'Assign'
        };
        this.modalService.show(SelectUsersModalComponent, {initialState, class: 'modal-dialog', ignoreBackdropClick: true});
      })
  }

  // handleOnAssignMembersBtnClick() {
  //   let currentUser = this.storeService.get(['currentUser']) as User;
  //
  //   this.teamService.getDetail(currentUser.team.id)
  //     .then(value => {
  //       const pool = [];
  //       this.foundDepartment = value;
  //       for (let member of this.foundDepartment.users as User[]) {
  //         let removeFlag = false;
  //         for (let assignedMember of this.foundProject.assignees as User[]) {
  //           if (assignedMember.id == member.id) {
  //             removeFlag = true;
  //           }
  //         }
  //         if (!removeFlag) {
  //           pool.push(member);
  //         }
  //       }
  //
  //       const onConfirm = (selelectedMembers: User[]) => {
  //         let selectedIds = _.map(selelectedMembers, 'id');
  //         if (selectedIds.length == 0) {
  //           this.containmember = true;
  //         }
  //         if (!this.containmember) {
  //           this.projectService.assignUsersToProject(this.foundProject.id, selectedIds)
  //             .then(value => {
  //               this.members = _.concat(this.members, selectedIds);
  //               this.isLoading.openAssignModal = false
  //             })
  //             .catch(reason => {
  //               this.showErrorModal(reason.Message);
  //               this.isLoading.openAssignModal = false
  //             })
  //         } else {
  //           this.showErrorModal('Please select members!');
  //           this.isLoading.openAssignModal = false;
  //         }
  //       };
  //
  //       const initialState = {
  //         confirmCallback: onConfirm,
  //         cancelCallback: () => {
  //         },
  //         closeCallback: () => {
  //         },
  //         userPool: pool,
  //         title: `Assign`,
  //         confirmButtonText: 'Assign'
  //       };
  //       this.modalService.show(SelectMembersModalComponent, {initialState, class: 'modal-dialog'});
  //     })
  // }
}
