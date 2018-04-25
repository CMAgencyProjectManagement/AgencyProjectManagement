import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';
import { Team } from 'app/interfaces/team';
import { User } from 'app/interfaces/user';
import { StoreService } from '../../../services/tree.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  managementMode: boolean;
  entity: any;
  userID: number;
  users: User[];
  foundUser: User;
  selectedUser = [];
  isLoadingPage: boolean;
  match: boolean;
  currentUser: User;
  constructor(
    private teamService: TeamService,
    private userService: UserService,
    private storeService: StoreService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {
    this.match = false;
    this.isLoadingPage = true;
    this.currentUser = this.storeService.get(['currentUser']) as User;
    // this.managementMode = currentUser.isManager || currentUser.isAdmin;
  }
  ngOnInit() {
    this.entity = {};
    if (this.route.snapshot.paramMap.get('id') == undefined) {
      this.foundUser = this.currentUser;
      this.isLoadingPage = false;
    } else {
      this.userID = Number(this.route.snapshot.paramMap.get('id'));
      if (this.userID == this.currentUser.id) {
        this.match = true;
      }
      this.getAllTeam();
    }

  }

  getAllTeam() {
    this.userService.getAllUser()
      .then(value => {
        this.users = value;
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id == this.userID) {
            this.foundUser = this.users[i];
            // this.selectedUser.push({
            //   id: this.foundUser.id,
            //   itemName: this.foundUser.name,
            //   itemUsername: this.foundUser.username,
            //   itemBirthday: this.foundUser.birthdate,
            //   itemAvatar: this.foundUser.avatar,
            //   itemPhone: this.foundUser.phone,
            //   itemTeam: this.foundUser.team.name,
            //   itemEmail: this.foundUser.email,
            //   itemManager: this.foundUser.isManager,
            //   itemAdmin: this.foundUser.isAdmin,
            //   itemBan: this.foundUser.isActive,
            // });
          }
        }
        this.isLoadingPage = false;
      })
  }

  GetURLParameter(sParam) {
    var sPageURL = window.location.href;
    if (sPageURL.indexOf('?') > 0) {
      var sURLVariables = sPageURL.split('?');
      var sTeam = sURLVariables[1].split('=');
    } else {
      return 0;
    }
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
