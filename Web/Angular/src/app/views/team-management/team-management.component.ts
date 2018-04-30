import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { StoreService } from '../../services/tree.service';
import { Team } from '../../interfaces/team';
import { User } from '../../interfaces/user';
import { DataTableDirective } from 'angular-datatables';
import * as _ from 'lodash';
@Component({
  templateUrl: 'team-management.component.html'
})

export class TeamManagePageComponent implements OnInit {
  @ViewChild(DataTableDirective) datatableElement: DataTableDirective;
  datatableOptions: DataTables.Settings = {
    lengthChange: false,
    columnDefs: [
      {
        searchable: false,
        orderable: false,
        targets: [5]
      }
    ],
    order: [
      [4, 'desc']
    ]
  };
  isPageLoading = true;
  teams: Team[] = [];
  currentUser: User;

  constructor(private teamService: TeamService, private storeService: StoreService) {
    this.currentUser = this.storeService.get(['currentUser']) as User;
  }

  ngOnInit() {
    this.teamService.getAllTeam()
      .then(value => {
        this.teams = value;
        this.isPageLoading = false;
      });
  }

}
