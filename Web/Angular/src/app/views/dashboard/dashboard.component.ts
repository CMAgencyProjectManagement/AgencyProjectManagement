import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../interfaces/project';
import {StoreService} from '../../services/tree.service';
import {ProjectService} from '../../services/project.service';
import {Location} from '@angular/common';
import {BsModalService} from 'ngx-bootstrap';
import {ErrorModalComponent} from '../../cmaComponents/modals';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user';
import {Task} from '../../interfaces/Task';
import {TeamService} from '../../services/team.service';

@Component({
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  isLoading: {
    page
  };
  role: string;
  currentUser: User;

  leaderboard: UserWithScore[];
  lateTasks: Task[];
  needReviewTasks: Task[];
  thisWeekTasks: Task[];
  projects: Project[];

  constructor(
    private storeService: StoreService,
    private projectService: ProjectService,
    private teamService: TeamService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: BsModalService
  ) {
    let currentUser = this.storeService.get(['currentUser']);
    if (!currentUser.isAdmin && !currentUser.isManager) {
      this.role = 'staff';
    }
    if (!currentUser.isAdmin && currentUser.isManager) {
      this.role = 'manager';
    }
    if (currentUser.isAdmin && !currentUser.isManager) {
      this.role = 'admin';
    }
    this.currentUser = currentUser;
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
      });

    switch (this.role) {
      case 'staff': {
        this.loadStaffSection();
        break;
      }
      case 'manager': {
        this.loadManagerSection();
        break;
      }
      case 'admin': {
        this.loadAdminSection();
        break;
      }
    }
  }

  private loadStaffSection() {
    Promise.all([
      this.userService.getCurrentUserLateTasks(),
      this.userService.getCurrentUserNearExpireTask(),
      this.userService.getLeaderBoard()])
      .then((resData: [Task[], Task[], UserWithScore[]]) => {
        this.lateTasks = resData[0];
        this.thisWeekTasks = resData[1];
        this.leaderboard = resData[2];
        this.isLoading.page = false;
      })
      .catch(reason => {
        this.showErrorModal(reason.Message);
      })
  }

  private loadManagerSection() {
    Promise.all([
      this.teamService.getLateTasks(this.currentUser.team.id),
      this.teamService.getNeedReviewTasks(this.currentUser.team.id),
      this.userService.getLeaderBoard()])
      .then((resData: [Task[], Task[], UserWithScore[]]) => {
        this.lateTasks = resData[0];
        this.needReviewTasks = resData[1];
        this.leaderboard = resData[2];
        this.isLoading.page = false;
      })
      .catch(reason => {
        this.showErrorModal(reason.Message);
      })
  }

  private loadAdminSection() {
    Promise.all([
      this.projectService.getRecentProjects(),
      this.userService.getLeaderBoard()])
      .then((resData: [Project[], UserWithScore[]]) => {
        this.projects = resData[0];
        this.leaderboard = resData[1];
        this.isLoading.page = false;
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



