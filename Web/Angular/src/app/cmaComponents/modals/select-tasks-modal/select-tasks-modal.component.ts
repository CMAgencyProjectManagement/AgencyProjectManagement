import {Component, OnInit} from '@angular/core';
import {User} from '../../../interfaces/user';
import {BsModalRef} from 'ngx-bootstrap';
import {Task} from '../../../interfaces/task';
import * as _ from 'lodash';

@Component({
  selector: 'app-select-tasks-modal',
  templateUrl: './select-tasks-modal.component.html',
  styleUrls: ['./select-tasks-modal.component.scss']
})
export class SelectTasksModalComponent implements OnInit {
  confirmCallback: any;
  cancelCallback: any;
  closeCallback: any;
  title: string;
  confirmButtonText: string;
  message: string;
  selectedTasks: Task[];
  taskPool: Task[];

  constructor(private bsModalRef: BsModalRef) {
    this.selectedTasks = [];
    if (!this.confirmButtonText) {
      this.confirmButtonText = 'Confirm';
    }
  }

  ngOnInit() {
  }

  handleOnSelect(taskId) {
    this.selectedTasks = _.concat(this.selectedTasks, _.find(this.taskPool, (task: Task) => {
      return task.id == taskId;
    }));

    this.taskPool = _.filter(this.taskPool, (user: User) => {
      return user.id != taskId;
    });
  }

  handleOnConfirm() {
    if (this.confirmCallback) {
      this.confirmCallback(this.selectedTasks);
    }
    this.bsModalRef.hide()
  }

  handleOnCancel() {
    if (this.cancelCallback) {
      this.cancelCallback();
    }
    this.bsModalRef.hide()
  }

  handleOnClose() {
    if (this.closeCallback) {
      this.closeCallback();
    }
    this.bsModalRef.hide()
  }
}
