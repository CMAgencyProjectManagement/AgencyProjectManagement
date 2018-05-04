import {Component, OnInit, ViewChild} from '@angular/core';
import {TeamService} from '../../../services/team.service';
import {UserService} from '../../../services/user.service';
import {Team} from 'app/interfaces/team';
import {User} from 'app/interfaces/user';
import {Location} from '@angular/common';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorModalComponent, ConfirmModalComponent} from '../../../cmaComponents/modals';
import {StoreService} from '../../../services/tree.service';
import {DataTableDirective} from 'angular-datatables';
import * as _ from 'lodash';
import {
  CommentModalComponent,
  SelectUsersModalComponent,
  SelectTeamsModalComponent,
  SelectMembersModalComponent
} from '../../../cmaComponents/modals';

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.component.html',
  styleUrls: ['./detail-team.component.scss']
})
export class DetailTeamComponent implements OnInit {
  @ViewChild(DataTableDirective) datatableElement: DataTableDirective;
  datatableOptions: DataTables.Settings = {
    lengthChange: false,
  };
  teamID: number;
  containmember: boolean;
  foundTeam: Team;
  managementMode: boolean;
  currentUser: User;
  isPageLoading: boolean;
  foundUser: User;
  users: User[];
  foundUsers: User[];
  isLoading: {
    openAssignMembersModal: boolean
    openUnAssignMembersModal: boolean
  };

  constructor(
    private teamService: TeamService,
    private userService: UserService,
    private storeService: StoreService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.containmember = false;
    this.isLoading = {
      openAssignMembersModal: false,
      openUnAssignMembersModal: false,
    };
    this.isPageLoading = true;
    this.currentUser = this.storeService.get(['currentUser']);
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Specific department
      if (Number!(id)) {
        this.teamID = Number(id);
      } else {
        this.showErrorModal(`Invalid department id "${id}"`, true);
      }
    } else {
      // My department
      this.teamID = this.currentUser.team.id;
    }
    this.getAllTeam();

  }

  search(searchStr: string) {
    this.datatableElement.dtInstance.then(
      (dtInstance: DataTables.Api) => dtInstance.search(searchStr).draw()
    );
  }

  getAllTeam() {
    this.teamService.getDetail(this.teamID)
      .then(value => {
        this.foundTeam = value;
        this.users = this.foundTeam.users;
        if (!this.managementMode) {
          this.foundTeam.users = this.foundTeam.users.filter(user => {
            return user.isActive
          });
        }
        this.isPageLoading = false;
      })
      .catch(reason => {
        this.isPageLoading = false;
        this.showErrorModal(`An error happened while loading data`);
        console.debug(`ERROR: getAllTeam - detail-team`, reason);
      })
  }

  showErrorModal(message: string, isNavigateBack: boolean = false) {
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

  handleOnSetManagerBtnClick(userID: number) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userID) {
        this.foundUser = this.users[i];
      }
    }
    if (this.foundUser.isManager) {
      this.showErrorModal(`This member is manager already!`);
    } else {
      const onConfirm = () => {
        this.teamService.setRole(this.foundTeam.id, this.foundUser.id, true);

      }
      const initialState = {
        message: `Are you sure to promote ${this.foundUser.name} to manager?`,
        confirmCallback: onConfirm
      };
      this.modalService.show(ConfirmModalComponent, {initialState, class: 'modal-dialog'});
    }
  }


  handleOnAssignMembersBtnClick() {
    this.isLoading.openAssignMembersModal = true;
    this.teamService.getFreeUser()
      .then((value: User[]) => {
        let pool = value;

        const onConfirm = (selelectedMembers: User[]) => {
          let selectedIds = _.map(selelectedMembers, 'id');
          if (selectedIds.length == 0) {
            this.containmember = true;
          }
          if (!this.containmember) {
            this.teamService.assignTeam(selectedIds, this.teamID)
              .then(foundTeam => {
                this.foundTeam = foundTeam;
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
          title: `Assign members`,
          confirmButtonText: 'Assign'
        };
        this.modalService.show(SelectUsersModalComponent, {initialState, class: 'modal-dialog', ignoreBackdropClick: true});
      })
      .catch(reason => {
        this.showErrorModal(reason.Message);
      });
  }

  handleOnUnAssignMembersBtnClick() {
    this.isLoading.openUnAssignMembersModal = true;
    console.debug(this.foundTeam.users.length);
    const pool = _.filter(this.foundTeam.users, (user: User) => {
      if (this.currentUser.isAdmin) {
        return true;
      } else {
        return false;
      }
    });
    const onConfirm = (selelectedMembers: User[]) => {
      let selectedIds = _.map(selelectedMembers, 'id');
      if (selectedIds.length == 0) {
        this.containmember = true;
      }
      if (!this.containmember) {
        this.teamService.unAssignTeam(selectedIds, this.foundTeam.id)
          .then(value => {
            this.foundTeam = value;
            this.isLoading.openUnAssignMembersModal = false;
          })
          .catch(reason => {
            this.showErrorModal(reason.Message);
            this.isLoading.openUnAssignMembersModal = false;
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
      // selectedUsers: selected,
      title: `Un-Assign`
    };
    this.modalService.show(SelectUsersModalComponent, {initialState, class: 'modal-dialog', ignoreBackdropClick: true});
  }
}
