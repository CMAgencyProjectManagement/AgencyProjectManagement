import {Component, OnInit} from '@angular/core';
import {TeamService} from '../../../services/team.service';
import {UserService} from '../../../services/user.service';
import {Team} from 'app/interfaces/team';
import {User} from 'app/interfaces/user';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.scss']
})
export class UpdateTeamComponent implements OnInit {
  teamID: number;
  users: User[];
  foundTeam: Team;
  isLoading: boolean;
  isPageLoading: boolean;
  smallAccountTableOpt: DataTables.Settings = {
    searching: true,
    lengthChange: false,
    columnDefs: [
      {
        searchable: false,
        orderable: false,
        targets: [0]
      }
    ]
  };

  constructor(
    private teamService: TeamService,
    private userService: UserService,
  ) {
    this.isPageLoading = true;
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
      this.isPageLoading = false;
    }
  }

  GetURLParameter(sParam) {
    var sPageURL = window.location.href;
    var sURLVariables = sPageURL.split('?');
    var sTeam = sURLVariables[1].split('=');
    return sTeam[1];
  }

}
