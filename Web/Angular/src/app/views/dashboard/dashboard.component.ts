import {Component, OnInit, style} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../interfaces/project';
import {StoreService} from '../../services/tree.service';
import {ProjectService} from '../../services/project.service';
import {Location} from '@angular/common';
import {BsModalService} from 'ngx-bootstrap';
import {ErrorModalComponent} from '../../cmaComponents/modals';
import {UserService} from '../../services/user.service';

@Component({
  templateUrl: 'dashboard.component.html',

})
export class DashboardComponent implements OnInit {
  projects: Project[];
  leaderboard: UserWithScore[];
  isLoading: {
    page
  };

  constructor(
    private storeService: StoreService,
    private projectService: ProjectService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: BsModalService
  ) {
    this.isLoading = {
      page: true
    };
  }

  ngOnInit(): void {
    this.userService.getLeaderBoard()
      .then((value: UserWithScore[]) => {
        this.leaderboard = value;
        this.isLoading = {
          page: false
        };
      })
      .catch(reason => {
        this.showErrorModal(reason.Message);
      })
  }


  private showErrorModal(message: string, isNavigateBack: boolean = false) {
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

interface UserWithScore {
  id: number,
  name: string,
  phone: string,
  birthdate: string,
  email: string,
  username: string,
  isAdmin: true,
  isManager: false,
  isActive: true
  avatar: string,
  score: number
}
