import {Component, OnInit} from '@angular/core';
import {Task} from '../../../interfaces/task'
import {TaskService} from '../../../services/task.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  foundTask: Task;
  loading: {
    page: boolean
  };

  constructor(private taskService: TaskService) {
    this.loading = {
      page: true
    };
  }

  ngOnInit() {
    const taskId = Number(this.GetURLParameter());
    this.taskService.getTaskDetail(taskId)
      .then(value => {
        this.foundTask = value as Task;
        this.loading.page = false;
      })
      .catch(reason => {
        console.debug('ViewComponent-onInit', reason);
        this.loading.page = false;
      })

  }

  GetURLParameter() {
    let sPageURL = window.location.href;
    let sURLVariables = sPageURL.split('?');
    let sTeam = sURLVariables[1].split('=');
    return sTeam[1];
  }
}
