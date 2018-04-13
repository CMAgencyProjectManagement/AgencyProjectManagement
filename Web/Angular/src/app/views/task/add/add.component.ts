import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';
import {List} from 'app/interfaces/list';
import {Task} from '../../../interfaces/task';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ErrorModalComponent} from '../../../cmaComponents/modals';
import {TaskService} from '../../../services/task.service';
import {Location} from '@angular/common';
import {Project} from '../../../interfaces/project';

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
    effort: string
  };
  @ViewChild('datepicker') datepicker;
  foundProject: Project;
  createForm: FormGroup;
  priorities: any[];
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
    showInputField: true,
    showTodayBtn: true
  };

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
    this.resetError();
  }

  ngOnInit() {
    let projectId = this.route.snapshot.queryParamMap.get('projectID');
    let listId = this.route.snapshot.queryParamMap.get('listID');

    if (Number(projectId) && Number(listId)) {
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
      this.isLoading.page = false;
    }
  }

  resetError() {
    this.errors = {
      name: '',
      description: '',
      list: '',
      priority: '',
      startDate: '',
      duration: '',
      effort: ''
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
      }
    }
  }

  setDefaultValue() {
    let now = moment();
    this.createForm.patchValue({
      name: '',
      description: '',
      list: '',
      priority: '',
      startDate: {
        date: {
          year: now.year(),
          month: now.month() + 1,
          day: now.day()
        }
      },
      duration: '',
      effort: '',
    });
  }

  handleCreateTask() {
    this.isLoading.create = true;
    this.resetError();
    const values = this.createForm.value;
    let startDate = moment(this.datepicker.selectionDayTxt, 'DD/MM/YYYY');
    this.taskService.createTask(
      values.name,
      values.description,
      values.list,
      values.priority,
      startDate.isValid() ? startDate.format('YYYY-MM-DD') : this.datepicker.selectionDayTxt,
      values.duration,
      values.effort
    ).then(value => {
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
