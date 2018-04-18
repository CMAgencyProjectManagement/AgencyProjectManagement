import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {TaskService} from '../../../services/task.service';
import {Task} from '../../../interfaces/task';

@Component({
  selector: 'app-select-status-modal',
  templateUrl: './select-status-modal.component.html',
  styleUrls: ['./select-status-modal.component.scss']
})
export class SelectStatusModalComponent implements OnInit {
  confirmCallback: any;
  cancelCallback: any;
  closeCallback: any;
  errorMessage: string;
  task: Task;
  statuses: any[];
  selectedStatus: any;
  isConfirmLoading;

  constructor(private bsModalRef: BsModalRef,
              private taskService: TaskService) {
    this.isConfirmLoading = false;
  }

  ngOnInit() {
    this.taskService.getStatuses()
      .then(value => {
        this.statuses = value;
        if (this.statuses) {
          this.selectedStatus = this.statuses[0].key;
        }
      })
  }

  handleOnSelect($event) {
    this.selectedStatus = $event.target.value;
  }

  handleOnConfirm() {
    this.isConfirmLoading = true;
    this.errorMessage = '';
    this.taskService.setStatus(this.task.id, this.selectedStatus)
      .then(value => {
        if (this.confirmCallback) {
          this.confirmCallback(value);
        }
        this.isConfirmLoading = false;
        this.bsModalRef.hide();
      })
      .catch(reason => {
        this.errorMessage = reason.Message;
        this.isConfirmLoading = false;
      })
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
