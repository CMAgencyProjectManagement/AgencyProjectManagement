import {Component, OnInit} from '@angular/core';
import {TeamService} from '../../../services/team.service';
import {UserService} from '../../../services/user.service';
import {Team} from 'app/interfaces/team';
import {User} from 'app/interfaces/user';
import {Location} from '@angular/common';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorModalComponent} from '../../../cmaComponents/modals';

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
  foundUser = [];
  selectedUser = [];
  isLoading: boolean;
  dropdownSettings = {};

  constructor(
    private teamService: TeamService,
    private userService: UserService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (Number!(id)) {
      this.teamID = Number(id);
      this.entity = {};
      this.teams = [];
      this.users = [];
      this.getAllTeam();
      this.getAllUser();
    } else {
      this.showErrorModal(`Invalid department id "${id}"`, true);
    }
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
              item1: this.foundTeam.manager.isActive,
            });
          }
        }
      })
  }

  getAllUser() {
    this.userService.getAllUser()
      .then(value => {
        this.users = value;
        for (let i = 0; i < this.users.length; i++) {
          let userTeam = this.users[i].team;
          if (userTeam !== null) {
            if (userTeam.id === this.foundTeam.id) {
              this.foundUser.push({
                id: this.users[i].id,
                name: this.users[i].name,
                username: this.users[i].username,
                status: this.users[i].isActive,
                isad: this.users[i].isAdmin,
                ismng: this.users[i].isManager,

              })
            }
          }

        }
        console.log(this.foundUser);
      })
  }

  showErrorModal(message: string, isNavigateBack: boolean = false) {
    const initialState = {
      closeCallback: () => {
        if (isNavigateBack) {
          this.location.back();
        }
      },
      message: message
    };
    this.modalService.show(ErrorModalComponent, {initialState, class: 'modal-dialog modal-danger'});
  }

}
