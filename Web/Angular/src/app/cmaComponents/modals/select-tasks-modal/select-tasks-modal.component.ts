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
    if (!this.selectedTasks) {
      this.selectedTasks = [];
    }
    if (!this.confirmButtonText) {
      this.confirmButtonText = 'Confirm';
    }
  }

  ngOnInit() {
    if (this.selectedTasks.length > 0) {
      this.taskPool = _.filter(this.taskPool, (task: Task) => {
        let removeFlag = true;
        for (let selectedTask of this.selectedTasks) {
          if (task.id == selectedTask.id) {
            removeFlag = false;
          }
        }
        return removeFlag;
      });
    }
  }

  handleOnSelect(taskId) {
    this.selectedTasks = _.concat(this.selectedTasks, _.find(this.taskPool, (task: Task) => {
      return task.id == taskId;
    }));

    this.taskPool = _.filter(this.taskPool, (task: Task) => {
      return task.id != taskId;
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
