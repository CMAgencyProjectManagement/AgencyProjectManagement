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
        targets: [0],
      }
    ],
    rowCallback: this.handleRowCallback.bind(this)
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
        this.freeUsers = _.filter(value, user => {
          return !user.team
        });
        this.updateLoadingState();
      });
  }

  updateLoadingState() {
    if (this.foundTeam && this.freeUsers) {
      this.isPageLoading = false;
    }
  }

  handleRowCallback(row: Node, data: any[] | Object, index: number) {
    $('td', row).unbind('click');
    $('td', row).bind('click', () => {
      let classesAtr = row.attributes.getNamedItem('class');
      let classes = _.split(classesAtr.value, ' ') as string[];
      let isSelected = _.indexOf(classes, 'selected') >= 0;
      if (isSelected) {
        classes = _.filter(classes, 'selected');
      } else {
        classes.push('selected');
      }
      classesAtr.value = _.join(classes, ' ');
      console.debug('rowCallback', classes, isSelected);
    });
    return row;
  }

  GetURLParameter(sParam) {
    var sPageURL = window.location.href;
    var sURLVariables = sPageURL.split('?');
    var sTeam = sURLVariables[1].split('=');
    return sTeam[1];
  }

}
