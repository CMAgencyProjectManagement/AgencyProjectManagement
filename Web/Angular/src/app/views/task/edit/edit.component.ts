import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {TaskService} from '../../../services/task.service';
import {ErrorModalComponent} from '../../../cmaComponents/modals/error-modal/error-modal.component';
import {BsModalService} from 'ngx-bootstrap/modal';
import {Task} from '../../../interfaces/task';
import {FormControl, FormGroup} from '@angular/forms';
import {ProjectService} from '../../../services/project.service';
import {List} from '../../../interfaces/list';
import {IMyDpOptions} from 'mydatepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  isLoading: {
    page: boolean,
    update: boolean
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
  taskId: number;
  foundTask: Task;
  updateForm: FormGroup;
  lists: List[];
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
      update: false
    };
    this.resetError();
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.taskId = Number(id);
      this.taskService.getTaskDetail(this.taskId)
        .then(value => {
          this.foundTask = value;
          this.updatePageLoadingState();
          this.projectService.getListOfProject(this.foundTask.project.id)
            .then(value1 => {
              this.lists = value1;
              this.setDefaultValue();
              this.updatePageLoadingState();
            })
            .catch(reason => {
              this.showErrorModal(reason.Message);
            })
        })
        .catch(reason => {
          this.showErrorModal(reason.Message, true);
        });
      this.taskService.getPriorities()
        .then(value => {
          this.priorities = value;
          this.updatePageLoadingState();
        })
        .catch(reason => {
          this.showErrorModal(reason.Message);
        });
    } else {
      this.showErrorModal(`Invalid task id "${id}"`, true);
    }
    this.updateForm = new FormGroup({
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
    if (
      this.lists &&
      this.foundTask &&
      this.priorities
    ) {
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
    let startDate = moment(this.foundTask.startDate);
    this.updateForm.patchValue({
      name: this.foundTask.name,
      description: this.foundTask.description,
      list: this.foundTask.list.id,
      priority: this.foundTask.priority,
      startDate: {
        date: {
          year: startDate.year(),
          month: startDate.month() + 1,
          day: startDate.day()
        }
      },
      duration: this.foundTask.duration,
      effort: this.foundTask.effort,
    });
  }

  handleUpdateTask() {
    this.isLoading.update = true;
    this.resetError();
    const values = this.updateForm.value;
    let startDate = moment(this.datepicker.selectionDayTxt, 'DD/MM/YYYY');
    this.taskService.editTask(
      this.foundTask.id,
      values.name,
      values.description,
      values.list,
      values.priority,
      startDate.isValid() ? startDate.format('YYYY-MM-DD') : this.datepicker.selectionDayTxt,
      values.duration,
      values.effort
    ).then(value => {
      this.isLoading.update = false;
    }).catch(reason => {
      this.setErrors(reason.Data);
      this.isLoading.update = false;
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
