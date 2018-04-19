import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss']
})
export class TaskStatusComponent implements OnInit {
  @Input() taskStatusNumber: Number;
  badgeClass: any;
  text: any;
  taskStatuses: any[];

  constructor(private taskService: TaskService) {
    this.text = 'N/A';
    this.badgeClass = {
      'badge': true
    }
  }

  ngOnInit() {
    this.taskService.getStatuses()
      .then(value => {
        this.taskStatuses = value;
        for (let status of this.taskStatuses) {
          if (status.key == this.taskStatusNumber) {
            this.text = status.value;
          }
        }
        let statusClass;
        switch (this.taskStatusNumber) {
          case 0: { // NOT DONE
            statusClass = 'badge-secondary';
            break;
          }
          case 1: { // NEED REVIEW
            statusClass = 'badge-info';
            break;
          }
          case 2: { // DONE
            statusClass = 'badge-success';
            break;
          }
          case 3: { // PENDING
            statusClass = 'badge-secondary';
            break;
          }
          default: {
            statusClass = 'badge-light';
            break;
          }
        }
        this.badgeClass = ['badge', statusClass]
      })
      .catch(reason => {
        console.debug('TaskStatusComponent - ngOnInit', reason);
      })
  }

}
