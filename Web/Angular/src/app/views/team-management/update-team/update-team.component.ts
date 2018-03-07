import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { Team } from 'app/interfaces/team';
@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.scss']
})
export class UpdateTeamComponent implements OnInit {
  teamID: number;
  teams: Team[];
  foundTeam: Team;
  isLoading: boolean;
  constructor(
    private teamService: TeamService
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
    this.teamID = Number(this.GetURLParameter('id'));
    this.teamService.getAllTeam()
      .then(value =>{
        this.teams = value;
        for(let i = 0; i < this.teams.length; i++){
          if(this.teams[i].id == this.teamID){
            this.foundTeam = this.teams[i];
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

//   autoClose: boolean = false;
}
