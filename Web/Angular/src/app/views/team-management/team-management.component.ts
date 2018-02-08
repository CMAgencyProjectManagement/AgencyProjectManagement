import {Component, OnInit} from '@angular/core';
import {TeamService} from '../../services/team.service';
import {Team} from '../../interfaces/team';

@Component({
  templateUrl: 'team-management.component.html'
})
export class TeamManagePageComponent implements OnInit {
  private teams: Team[] = [];

  constructor(private teamService: TeamService) {
  }

  ngOnInit() {
    this.teamService.getAllTeam()
      .then(value => {
        this.teams = value;
      });
  }
}
