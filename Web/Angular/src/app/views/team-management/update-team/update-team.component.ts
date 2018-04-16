import {Component, OnInit} from '@angular/core';
import {TeamService} from '../../../services/team.service';
import {UserService} from '../../../services/user.service';
import {Team} from 'app/interfaces/team';
import {User} from 'app/interfaces/user';
import * as _ from 'lodash';
import {ErrorModalComponent} from '../../../cmaComponents/modals';
import {Location} from '@angular/common';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.scss']
})
export class UpdateTeamComponent implements OnInit {
  teamID: number;
  users: User[];
  freeUsers: User[];
  teamUsers: User[];
  loading: {
    page: boolean,
    assign: boolean,
    unAssign: boolean,
    setRole: boolean
  };
  foundTeam: Team;

  constructor(
    private teamService: TeamService,
    private userService: UserService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.loading = {
      page: true,
      assign: false,
      unAssign: false,
      setRole: false
    };
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.teamID = Number(Number(id));
      this.teamService.getAllTeam()
        .then(value => {
          let teams = value as Team[];
          for (let team of teams) {
            if (team.id === this.teamID) {
              this.foundTeam = team;
              this.updateLoadingState();
            }
          }
        })
        .catch(reason => {
          this.showErrorModal(reason.Data);
        });
      this.userService.getAllUser()
        .then(value => {
          this.users = value;
          this.updateLoadingState();
        })
        .catch(reason => {
            this.showErrorModal(reason.Data);
          }
        )
    } else {
      this.showErrorModal(`Invalid team id "${id}"`, true);
    }
  }

  updateLoadingState() {
    if (this.foundTeam && this.users) {
      this.teamUsers = _.filter(this.users, user => {
        if (user.team) {
          return user.team.id === this.foundTeam.id;
        }
      });
      this.freeUsers = _.filter(this.users, user => {
        return !user.team
      });
      this.loading.page = false;
    }
  }

  setRole(event) {
    let userId = event.id;
    let teamId = this.foundTeam.id;
    let isManager = event.isManager;
    this.teamService.setRole(teamId, userId, isManager);
  }

  assign(freeMEmberSelectedIds: number[]) {
    this.loading.assign = true;
    this.teamService.assignTeam(freeMEmberSelectedIds, this.foundTeam.id)
      .then(value => {
        this.loading.assign = false;
      })
      .catch(reason => {
        console.debug('assign team fail', reason);
        this.loading.assign = false;
      })
  }

  unAssign(teamMemberSelectedIds: number[]) {
    this.loading.unAssign = true;
    this.teamService.unAssignTeam(teamMemberSelectedIds)
      .then(value => {
        this.loading.unAssign = false;
      })
      .catch(reason => {
        console.debug('unAssign team fail', reason);
        this.loading.unAssign = false;
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
