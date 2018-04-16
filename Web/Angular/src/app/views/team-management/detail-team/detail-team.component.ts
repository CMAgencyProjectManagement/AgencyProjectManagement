import {Component, OnInit} from '@angular/core';
import {TeamService} from '../../../services/team.service';
import {UserService} from '../../../services/user.service';
import {Team} from 'app/interfaces/team';
import {User} from 'app/interfaces/user';
import {Location} from '@angular/common';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorModalComponent} from '../../../cmaComponents/modals';
import {StoreService} from '../../../services/tree.service';

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.component.html',
  styleUrls: ['./detail-team.component.scss']
})
export class DetailTeamComponent implements OnInit {
  teamID: number;
  foundTeam: Team;
  isLoading: boolean;
  managementMode: boolean;
  currentUser: User;

  constructor(
    private teamService: TeamService,
    private userService: UserService,
    private storeService: StoreService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.currentUser = this.storeService.get(['currentUser']);
    this.managementMode = this.currentUser.isManager || this.currentUser.isAdmin;
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

  getAllTeam() {
    this.teamService.getDetail(this.teamID)
      .then(value => {
        this.foundTeam = value;
        if (!this.managementMode) {
          this.foundTeam.users = this.foundTeam.users.filter(user => {
            return user.isActive
          });
        }
      })
      .catch(reason => {
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

}
