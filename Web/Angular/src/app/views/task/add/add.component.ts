import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';
import {BsModalService} from 'ngx-bootstrap/modal';
import {
  ErrorModalComponent,
  SuccessModalComponent,
  SelectTasksModalComponent
} from '../../../cmaComponents/modals';
import {TaskService} from '../../../services/task.service';
import {Location} from '@angular/common';
import {Project} from '../../../interfaces/project';
import {Task} from '../../../interfaces/task';
import * as _ from 'lodash';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  isLoading: {
    page: boolean,
    create: boolean
  };
  errors: {
    name: string,
    description: string,
    list: string,
    priority: string,
    startDate: string,
    duration: string,
    effort: string,
    predecessors: string;
  };
  @ViewChild('datepicker') datepicker;
  foundProject: Project;
  listId: number;
  createForm: FormGroup;
  priorities: any[];
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
    showInputField: true,
    showTodayBtn: true
  };
  predecessorTasks: Task[];

  constructor(private taskService: TaskService,
              private projectService: ProjectService,
              private modalService: BsModalService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {
    this.isLoading = {
      page: true,
      create: false
    };
    this.predecessorTasks = [];
    this.resetError();
  }

  ngOnInit() {
    let projectId = this.route.snapshot.queryParamMap.get('project');
    let listId = this.route.snapshot.queryParamMap.get('list');

    if (Number(projectId) && Number(listId)) {
      this.listId = Number(listId);
      this.projectService.getProject(Number(projectId))
        .then(project => {
          this.foundProject = project;
          this.updatePageLoadingState();
        })
        .catch(reason => {
          this.showErrorModal(reason.Message);
        });
      this.taskService.getPriorities()
        .then(value => {
          this.priorities = value;
          this.updatePageLoadingState();
        })
        .catch(reason => {
          this.showErrorModal(reason.Message);
        })
    } else {
      this.showErrorModal(`Invalid address`, true);
    }
    this.createForm = new FormGroup({
      name: new FormControl(undefined),
      description: new FormControl(undefined),
      list: new FormControl(undefined),
      priority: new FormControl(undefined),
      startDate: new FormControl(undefined),
      duration: new FormControl(undefined),
      effort: new FormControl(undefined)
    })
  }

  updatePageLoadingState() {
    if (this.foundProject &&
      this.priorities) {
      this.setDefaultValue();
      this.isLoading.page = false;
    }
  }

  handleOnCancelBtnClick() {
    this.setDefaultValue();
    this.location.back();
  }

  resetError() {
    this.errors = {
      name: '',
      description: '',
      list: '',
      priority: '',
      startDate: '',
      duration: '',
      effort: '',
      predecessors: ''
    };
  }

  setErrors(errors: any[]) {
    for (let error of errors) {
      const fieldName = error.key;
      const errorMessage = error.message;
      switch (fieldName) {
        case 'Name':
          this.errors.name = errorMessage;
          break;
        case 'Description':
          this.errors.description = errorMessage;
          break;
        case 'ListID':
          this.errors.effort = errorMessage;
          break;
        case 'Priority':
          this.errors.priority = errorMessage;
          break;
        case 'StartDate':
          this.errors.startDate = errorMessage;
          break;
        case 'Duration':
          this.errors.duration = errorMessage;
          break;
        case 'Effort':
          this.errors.effort = errorMessage;
          break;
        case 'Predecessors':
          this.errors.predecessors = errorMessage;
          break;
      }
    }
  }

  setDefaultValue() {
    let now = moment();
    this.createForm.patchValue({
      name: '',
      description: '',
      list: this.listId,
      priority: '',
      startDate: {
        date: {
          year: now.year(),
          month: now.month() + 1,
          day: now.date()
        }
      },
      duration: '',
      effort: '',
    });
  }

  handleAddDependencyBtnClick() {
    let taskPool = [];
    for (let list of this.foundProject.lists) {
      for (let task of list.tasks) {
        taskPool.push(task);
      }
    }
    const initialState = {
      taskPool: taskPool,
      title: 'Select predecessor tasks',
      confirmCallback: (selectedTasks: Task[]) => {
        this.predecessorTasks = selectedTasks;
      }
    };
    this.modalService.show(SelectTasksModalComponent, {initialState, class: 'modal-dialog', ignoreBackdropClick: true});
  }

  handleCreateTask() {
    this.isLoading.create = true;
    this.resetError();
    const values = this.createForm.value;
    let startDate = moment(this.datepicker.selectionDayTxt, 'DD/MM/YYYY');
    let preTaskIds = _.map(this.predecessorTasks, 'id');
    this.taskService.createTask(
      values.name,
      values.description,
      values.list,
      values.priority,
      startDate.isValid() ? startDate.format('YYYY-MM-DD') : this.datepicker.selectionDayTxt,
      values.duration,
      values.effort,
      preTaskIds
    ).then(value => {
      let newTask = value as Task;
      const initialState = {
        message: 'Your task successfully created!'
      };
      this.modalService.show(SuccessModalComponent, {initialState, class: 'modal-dialog modal-success'});
      this.router.navigate(['task/'+newTask.id+'/view']);
      this.isLoading.create = false;
    }).catch(reason => {
      this.setErrors(reason.Data);
      this.isLoading.create = false;
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
    this.modalService.show(ErrorModalComponent, {initialState, class: 'modal-dialog modal-danger'});
  }
}
