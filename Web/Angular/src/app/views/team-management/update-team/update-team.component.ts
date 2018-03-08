import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';
import { Team } from 'app/interfaces/team';
import { User } from 'app/interfaces/user';
@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.scss']
})
export class UpdateTeamComponent implements OnInit {
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
  ) {

  }

  // items: string[] = [
  //   'The first choice!',
  //   'And another choice for you.',
  //   'but wait! A third!'
  // ];

  // onHidden(): void {
  //   console.log('Dropdown is hidden');
  // }
  // onShown(): void {
  //   console.log('Dropdown is shown');
  // }
  // isOpenChange(): void {
  //   console.log('Dropdown state is changed');
  // }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: true,
      text: "Select User",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: false,
      classes: "myclass custom-class"
    };
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
              itemName: this.foundTeam.manager.username
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
  //  status: { isOpen: boolean } = { isOpen: false };

  //   toggleDropdown($event: MouseEvent): void {
  //     $event.preventDefault();
  //     $event.stopPropagation();
  //     this.status.isOpen = !this.status.isOpen;
  //   }

  //   change(value: boolean): void {
  //     this.status.isOpen = value;
  //   }

  //   disabled: boolean = false;

  //   isDropup: boolean = true;

  //   autoClose: booleaì án = false;
}
