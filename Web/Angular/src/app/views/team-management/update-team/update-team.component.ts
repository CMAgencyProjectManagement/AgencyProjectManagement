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
  freeUsers: {
    data: User[],
    selectedIds: number[]
  };
  teamUsers: {
    data: User[],
    selectedIds: number[]
  };
  loading: {
    page: boolean,
    assign: boolean
    unAssign: boolean
  };
  foundTeam: Team;
  smallFreeUsersTableOpt: DataTables.Settings = {
    searching: true,
    lengthChange: false,
    paging: false,
    scrollY: '400',
    columnDefs: [
      {
        searchable: false,
        orderable: false,
        targets: [1],
      },
      {
        searchable: false,
        orderable: false,
        visible: false,
        targets: [0],
      }
    ],
    rowCallback: this.handleLeftTableRowCallback.bind(this)
  };
  smallTeamUsersTableOpt: DataTables.Settings = {
    searching: true,
    lengthChange: false,
    paging: false,
    scrollY: '400',
    columnDefs: [
      {
        searchable: false,
        orderable: false,
        targets: [1],
      },
      {
        searchable: false,
        orderable: false,
        visible: false,
        targets: [0],
      }
    ],
    rowCallback: this.handleRightTableRowCallback.bind(this)
  };

  constructor(
    private teamService: TeamService,
    private userService: UserService,
  ) {
    this.loading = {
      page: true,
      assign: false,
      unAssign: false
    };
    this.teamUsers = {
      data: null, selectedIds: []
    };
    this.freeUsers = {
      data: null, selectedIds: []
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
      this.teamUsers.data = _.filter(this.users, user => {
        if (user.team) {
          return user.team.id === this.foundTeam.id;
        }
      });
      this.freeUsers.data = _.filter(this.users, user => {
        return !user.team
      });
      this.loading.page = false;
    }
  }

  assignTeam() {
    this.loading.assign = true;
    this.teamService.assignTeam(this.freeUsers.selectedIds, this.foundTeam.id)
      .then(value => {
        this.loading.assign = false;
      })
      .catch(reason => {
        this.loading.assign = false;
      })
  }

  unAssignTeam() {
    this.loading.unAssign = true;
    this.teamService.unAssignTeam(this.teamUsers.selectedIds)
      .then(value => {
        this.loading.unAssign = false;
      })
      .catch(reason => {
        this.loading.unAssign = false;
      })
  }

  handleLeftTableRowCallback(row: Node, data: any[] | Object, index: number) {
    $('td', row).unbind('click');
    $('td', row).bind('click', () => {
      let selectedUserId = data[0] as number;
      let classesAtr = row.attributes.getNamedItem('class');
      let classes = _.split(classesAtr.value, ' ') as string[];
      let isSelected = _.indexOf(classes, 'selected') >= 0;
      if (isSelected) {
        this.freeUsers.selectedIds = _.filter(this.freeUsers.selectedIds, userId => {
          return userId !== selectedUserId;
        });
        classes = _.filter(classes, 'selected');
      } else {
        this.freeUsers.selectedIds.push(selectedUserId);
        classes.push('selected');
      }
      classesAtr.value = _.join(classes, ' ');
    });
    return row;
  }

  handleRightTableRowCallback(row: Node, data: any[] | Object, index: number) {
    $('td', row).unbind('click');
    $('td', row).bind('click', () => {
      let selectedUserId = data[0] as number;
      let classesAtr = row.attributes.getNamedItem('class');
      let classes = _.split(classesAtr.value, ' ') as string[];
      let isSelected = _.indexOf(classes, 'selected') >= 0;
      if (isSelected) {
        this.teamUsers.selectedIds = _.filter(this.teamUsers.selectedIds, userId => {
          return userId !== selectedUserId;
        });
        classes = _.filter(classes, 'selected');
      } else {
        this.teamUsers.selectedIds.push(selectedUserId);
        classes.push('selected');
      }
      classesAtr.value = _.join(classes, ' ');
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
