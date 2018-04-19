import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/tree.service';
import { User } from '../../../interfaces/user';
import { Task } from '../../../interfaces/task';
import { TaskService } from '../../../services/task.service';
import { Location } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorModalComponent } from '../../../cmaComponents/modals';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {
  currentUser: User;
  tasks: Task[];
  isLoading: {
    page: boolean
  };

  constructor(
    private storeService: StoreService,
    private taskService: TaskService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.currentUser = storeService.get(['currentUser']);
    this.tasks = [];
    this.isLoading.page = true;
  }

  ngOnInit() {
    this.isLoading.page = true;
    this.taskService.getMyTask()
      .then(value => {
        this.tasks = value;
      })
      .catch(reason => {
        this.showErrorModal(reason.Message);
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
    this.modalService.show(ErrorModalComponent, { initialState, class: 'modal-dialog modal-danger' });
  }
}
