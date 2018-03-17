import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';
import { Team } from 'app/interfaces/team';
import { User } from 'app/interfaces/user';

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.component.html',
  styleUrls: ['./detail-team.component.scss']
})
export class DetailTeamComponent implements OnInit {
  entity: any;
  teamID: number;
  teams: Team[];
  users = [];
  foundTeam: Team;
  selectedUser = [];
  isLoading: boolean;
  dropdownSettings = {};

  constructor(
    private teamService: TeamService,
    private userService: UserService,
  ) { }

  ngOnInit() {

    this.entity = {};
    this.teamID = Number(this.GetURLParameter('id'));
    this.teams = [];
    this.users = [];
    this.getAllTeam();
    this.getAllUser();

  }
  getAllTeam() {
    this.teamService.getAllTeam()
      .then(value => {
        this.teams = value;
        for (let i = 0; i < this.teams.length; i++) {
          if (this.teams[i].id == this.teamID) {
            this.foundTeam = this.teams[i];
            this.selectedUser.push({
              id: this.foundTeam.manager.id,
              itemName: this.foundTeam.manager.username,
              itemAvatar: this.foundTeam.manager.avatar,
              item: this.foundTeam.manager.id,
            });
          }
        }
      })
  }
  getAllUser() {
    this.userService.getAllUser()
      .then(value => {
        for (let user of value) {
          this.users.push({
            id: user.id,
            itemName: user.username
          });
        }
      })
  }
  GetURLParameter(sParam) {
    var sPageURL = window.location.href;
    var sURLVariables = sPageURL.split('?');
    var sTeam = sURLVariables[1].split('=');
    return sTeam[1];
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedUser);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedUser);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  submitChange() {
  }
}
