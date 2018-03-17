import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';
import { Team } from 'app/interfaces/team';
import { User } from 'app/interfaces/user';
@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  entity: any;
  userID: number;
  teams: Team[];
  users: User[];

  foundUser: User;
  selectedUser = [];
  isLoading: boolean;
  dropdownSettings = {};

  constructor(
    private teamService: TeamService,
    private userService: UserService,
  ) { }
  ngOnInit() {

    
    this.entity = {};
    this.userID = Number(this.GetURLParameter('id'));
    this.teams = [];
    this.users = [];
    this.getAllTeam();


  }
  getAllTeam() {
    this.userService.getAllUser()
      .then(value => {
        this.users = value;
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id == this.userID) {
            this.foundUser = this.users[i];
            this.selectedUser.push({
              id: this.foundUser.id,
              itemName: this.foundUser.name,
              itemUsername: this.foundUser.username,
              itemBirthday: this.foundUser.birthDate,
              itemAvatar: this.foundUser.avatar,
              itemPhone: this.foundUser.phone,
              itemTeam: this.foundUser.team,
              itemEmail: this.foundUser.email,
              itemRole: this.foundUser.isManager

            });
          }
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
