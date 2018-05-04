import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
import {Dependency} from '../../../interfaces/dependency';

@Component({
  selector: 'app-project-scheduling',
  templateUrl: './project-scheduling.component.html',
  styleUrls: ['./project-scheduling.component.scss']
})
export class ProjectSchedulingComponent implements OnInit, OnDestroy {
  @ViewChild('gantt_here') ganttContainer: ElementRef;
  projectTasks: Task[];
  projectDependencies: Dependency[];
  foundProject: Project;
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
    this.projectDependencies = [];
    this.isLoading = {
      page: true
    };
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.projectService.getProject(Number(id))
        .then((value: Project) => {
          this.foundProject = value;
          for (let list of value.lists) {
            for (let task of list.tasks) {
              this.projectTasks.push(task);
            }
          }
          this.updatePageLoadingState();
        })
        .catch(reason => {
          console.debug('ProjectSchedulingComponent - ngOnInit', reason);
          this.showErrorModal(reason.Message, true)
        });

      this.dependencyService.getDependencyOfProject(id)
        .then((value) => {
          this.projectDependencies = value;
          this.updatePageLoadingState();
        })
        .catch(reason => {
          console.debug('ProjectSchedulingComponent - ngOnInit', reason);
          this.showErrorModal(reason.Message, true)
        })
    } else {
      this.showErrorModal(`Invalid id ${id}`, true)
    }
  }

  updatePageLoadingState() {
    if (this.projectTasks &&
      this.projectDependencies) {
      this.initGratt();
      this.isLoading.page = false;
    }
  }

  formatTasks(tasks: Task[]): any[] {
    let formattedTasks = [];
    for (let task of tasks) {
      let formattedTask = {
        id: task.id,
        text: task.name,
        start_date: task.startDate,
        duration: task.duration,
        statusText: task.statusText,
        priorityText: task.priorityText,
        progress: 0
      };

      if (task.statusText == 'done') {
        formattedTask.progress = 1
      }
      formattedTasks.push(formattedTask);
    }
    return formattedTasks;
  }

  formatDependencies(dependencies: Dependency[]): any[] {
    let formattedDependencies = [];
    for (let dependency of dependencies) {
      let formattedDependency = {
        id: dependency.id,
        source: dependency.sourceTaskID,
        target: dependency.destinationTaskID,
        type: 0,
      };
      formattedDependencies.push(formattedDependency);
    }
    return formattedDependencies;
  }

  initGratt() {
    gantt.config.columns = [
      {name: 'text', label: 'Task name', width: '*', tree: true},
      {name: 'start_date', label: 'Start date', align: 'center'},
      {name: 'duration', label: 'Duration', align: 'center'},
    ];

    gantt.config.xml_date = '%Y/%m/%d';
    gantt.config.readonly = true;

    gantt.init(this.ganttContainer.nativeElement);
    if (this.projectTasks && this.projectDependencies) {
      gantt.parse({
        data: this.formatTasks(this.projectTasks),
        links: this.formatDependencies(this.projectDependencies),
      });
    }

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

  ngOnDestroy(): void {
    gantt.clearAll();
  }
}
