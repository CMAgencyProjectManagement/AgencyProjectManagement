import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';
import { Team } from 'app/interfaces/team';
import { User } from 'app/interfaces/user';
import { Location } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorModalComponent,ConfirmModalComponent } from '../../../cmaComponents/modals';
import { StoreService } from '../../../services/tree.service';
import { DataTableDirective } from 'angular-datatables';
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
  foundTeam: Team;
  isLoading: boolean;
  managementMode: boolean;
  currentUser: User;
  isPageLoading: boolean;
  foundUser: User;
  users: User[];
  constructor(
    private teamService: TeamService,
    private userService: UserService,
    private storeService: StoreService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.userService.getAllUser().then(value => {
      this.users = value;
    })
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
    this.modalService.show(ErrorModalComponent, { initialState, class: 'modal-dialog modal-danger' });
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
      this.modalService.show(ConfirmModalComponent, { initialState, class: 'modal-dialog' });
    }
  }
}
