import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from '../../services/config.service';
import {BsModalService} from 'ngx-bootstrap';

import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {Cursor, StoreService} from '../../services/tree.service'
import {TaskService} from '../../services/task.service';
import {
  ConfirmModalComponent,
  ErrorModalComponent
} from '../../cmaComponents/modals';
import {Config} from '../../interfaces/config';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  updateForm: FormGroup;
  tokenCursor: Cursor;
  errorMessage: string;
  message: string;
  isLoading: boolean;


  errors: {
    lowPriority: string,
    mediumPriority: string,
    hightPriority: string,
    taskMaxDuration: string,
    lateTaskPenalty: string,
    minimumWorkingAge: string;
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storeService: StoreService,
    private taskService: TaskService,
    private configService: ConfigService,
    private modalService: BsModalService,
  ) {
    this.isLoading = true;
    this.setErrorsNull();
  }


  ngOnInit() {
    this.loadConfig();
  }

  loadConfig() {
    this.configService.getConfig()
      .then((value: Config) => {
        this.setDefaultConfig(value);
        this.isLoading = false;
      })
      .catch(reason => {
        this.showErrorModal(reason.Message);
        this.isLoading = false;
      });
    this.updateForm = new FormGroup({
      lowPriority: new FormControl(undefined, Validators.required),
      mediumPriority: new FormControl(undefined, Validators.required),
      hightPriority: new FormControl(undefined, Validators.required),
      taskMaxDuration: new FormControl(undefined, Validators.required),
      lateTaskPenalty: new FormControl(undefined, Validators.required),
      minimumWorkingAge: new FormControl(undefined, Validators.required),
    });
  }

  setDefaultConfig(value: Config) {
    this.updateForm.patchValue({
      lowPriority: value.lowPriorityPoint,
      mediumPriority: value.mediumPriorityPoint,
      hightPriority: value.highPriorityPoint,
      taskMaxDuration: value.maxDuration,
      lateTaskPenalty: value.penatyPercent,
      minimumWorkingAge: value.minAge,
    });
  }

  handleUpdate() {
    this.setErrorsNull();
    const formValue = this.updateForm.value;

    const onConfirm = () => {
      this.isLoading = true;
      this.configService.updateConfig(
        formValue.lowPriority,
        formValue.mediumPriority,
        formValue.hightPriority,
        formValue.taskMaxDuration,
        formValue.lateTaskPenalty,
        formValue.minimumWorkingAge,
      )
        .then(() => {
          this.isLoading = false;
          this.router.navigate(['dashboard']);
        })
        .catch(reason => {
          this.setErrors(reason.Data);
          this.isLoading = false;
        })
    };
    const initialState = {
      message: `Are you sure to save changes?`,
      confirmCallback: onConfirm
    };
    this.modalService.show(ConfirmModalComponent, {initialState, class: 'modal-dialog'});

  }


  setErrorsNull(): void {
    this.errors = {
      lowPriority: '',
      mediumPriority: '',
      hightPriority: '',
      taskMaxDuration: '',
      lateTaskPenalty: '',
      minimumWorkingAge: '',
    }
  }

  setErrors(errors: any[]) {
    for (let error of errors) {
      const fieldName = error.key;
      const errorMessage = error.message;
      switch (fieldName) {
        case 'LowPriority':
          this.errors.lowPriority = errorMessage;
          break;
        case 'MediumPoint':
          this.errors.mediumPriority = errorMessage;
          break;
        case 'HightPoint':
          this.errors.hightPriority = errorMessage;
          break;
        case 'MaxDuration':
          this.errors.taskMaxDuration = errorMessage;
          break;
        case 'PenatyPercent':
          this.errors.lateTaskPenalty = errorMessage;
          break;
        case 'MinAge':
          this.errors.minimumWorkingAge = errorMessage;
          break;

      }
    }
  }

  private showErrorModal(message: string) {
    const initialState = {
      message: message
    };
    this.modalService.show(ErrorModalComponent, {initialState, class: 'modal-dialog modal-danger'});
  }

}

