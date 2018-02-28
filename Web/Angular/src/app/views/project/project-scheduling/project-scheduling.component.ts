import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {TaskService} from '../../../services/task.service';
import {DependencyService} from '../../../services/dependency.service';

import 'dhtmlx-gantt';
import {} from '@types/dhtmlxgantt';

@Component({
  selector: 'app-project-scheduling',
  templateUrl: './project-scheduling.component.html',
  styleUrls: ['./project-scheduling.component.scss']
})
export class ProjectSchedulingComponent implements OnInit {
  @ViewChild('gantt_here') ganttContainer: ElementRef;

  constructor(private taskService: TaskService, private dependencyService: DependencyService) {
  }

  ngOnInit() {
    gantt.config.xml_date = '%Y-%m-%d %H:%i';
    gantt.init(this.ganttContainer.nativeElement);
    Promise.all([this.taskService.get(), this.dependencyService.get()])
      .then(([data, links]) => {
        gantt.parse({data, links});
      });
  }

}
