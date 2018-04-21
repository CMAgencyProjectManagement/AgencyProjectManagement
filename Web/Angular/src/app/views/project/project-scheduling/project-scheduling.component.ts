import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TaskService} from '../../../services/task.service';
import {DependencyService} from '../../../services/dependency.service';
import {Task} from '../../../interfaces/task';

import 'dhtmlx-gantt';
import {} from '@types/dhtmlxgantt';
import {ProjectService} from '../../../services/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BsModalService} from 'ngx-bootstrap';
import {Location} from '@angular/common';
import {ErrorModalComponent} from '../../../cmaComponents/modals';
import {Project} from '../../../interfaces/project';

@Component({
  selector: 'app-project-scheduling',
  templateUrl: './project-scheduling.component.html',
  styleUrls: ['./project-scheduling.component.scss']
})
export class ProjectSchedulingComponent implements OnInit {
  @ViewChild('gantt_here') ganttContainer: ElementRef;
  projectTasks: Task[];
  isLoading: {
    page: boolean
  };

  constructor(private taskService: TaskService,
              private projectService: ProjectService,
              private dependencyService: DependencyService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private modalService: BsModalService) {
    this.projectTasks = [];
    this.isLoading = {
      page: true
    };
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.projectService.getProject(Number(id))
        .then((value: Project) => {
          for (let list of value.lists) {
            for (let task of list.tasks) {
              this.projectTasks.push(task);
            }
          }
          this.initGratt();
          this.isLoading.page = false;
        })
        .catch(reason => {
          console.debug('ProjectSchedulingComponent - ngOnInit', reason);
          this.showErrorModal(reason.Message, true)
        })
    } else {
      this.showErrorModal(`Invalid id ${id}`, true)
    }
  }

  formatTasks(tasks: Task[]): any[] {
    // {id: 1, text: "Task #1", start_date: "2017-04-15 00:00", duration: 3, progress: 0.6},
    let formattedTasks = [];
    for (let task of tasks) {
      let formattedTask = {
        id: task.id,
        text: task.name,
        start_date: task.startDate,
        duration: task.duration,
        progress: 1,
        statusText: task.statusText,
        priorityText: task.priorityText
      };
      formattedTasks.push(formattedTask);
    }
    return formattedTasks;
  }

  initGratt() {
    gantt.config.columns = [
      {name: 'text', label: 'Task name', width: '*', tree: true},
      {name: 'start_date', label: 'Start date', align: 'center'},
      {name: 'duration', label: 'Duration', align: 'center'},
      {name: 'statusText', label: 'Status', align: 'center'},
      {name: 'priorityText', label: 'Priority', align: 'center'},
    ];

    gantt.config.xml_date = '%Y/%m/%d';
    gantt.config.readonly = true;

    gantt.init(this.ganttContainer.nativeElement);
    gantt.parse({
      data: this.formatTasks(this.projectTasks),
      links: []
    });
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
