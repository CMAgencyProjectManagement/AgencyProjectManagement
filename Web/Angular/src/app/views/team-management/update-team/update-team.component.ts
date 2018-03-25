import {Component, OnInit} from '@angular/core';
import {TeamService} from '../../../services/team.service';
import {UserService} from '../../../services/user.service';
import {Team} from 'app/interfaces/team';
import {User} from 'app/interfaces/user';
import * as _ from 'lodash';

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
    unAssign: boolean
  };
  foundTeam: Team;

  constructor(
    private teamService: TeamService,
    private userService: UserService,
  ) {
    this.loading = {
      page: true,
      assign: false,
      unAssign: false
    };
  }

  ngOnInit() {
    this.teamID = Number(this.GetURLParameter('id'));
    this.teamService.getAllTeam()
      .then(value => {
        let teams = value as Team[];
        for (let team of teams) {
          if (team.id === this.teamID) {
            this.foundTeam = team;
            this.updateLoadingState();
          }
        }
      });
    this.userService.getAllUser()
      .then(value => {
        this.users = value;
        this.updateLoadingState();
      });
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
    this.teamService.unAssignTeam(teamMemberSelectedIds)
      .then(value => {
        this.loading.unAssign = false;
      })
      .catch(reason => {
        console.debug('unAssign team fail', reason);
        this.loading.unAssign = false;
      })
  }

  setManager(teamMemberSelectedIds: number[]) {
    this.teamService.unAssignTeam(teamMemberSelectedIds)
      .then(value => {
        this.loading.unAssign = false;
      })
      .catch(reason => {
        console.debug('unAssign team fail', reason);
        this.loading.unAssign = false;
      })
  }

  GetURLParameter(sParam) {
    var sPageURL = window.location.href;
    var sURLVariables = sPageURL.split('?');
    var sTeam = sURLVariables[1].split('=');
    return sTeam[1];
  }

}
