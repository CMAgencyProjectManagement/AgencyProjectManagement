import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../interfaces/project';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { List } from 'app/interfaces/list';
import {
  ElementRef,
  ViewChild,
} from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Cursor, StoreService } from '../../../services/tree.service';
import { UploadService } from '../../../services/upload.service';
import { Router } from '@angular/router';
// import * as moment from 'moment';
import { IMyDpOptions } from 'mydatepicker';
import { Team } from '../../../interfaces/team';
import { TaskService } from '../../../services/task.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  sValue: string[];
  projectID: number;
  projects: Project[];
  foundProject: Project;
  listID: number;
  isLoading: boolean;
  isPageLoading: boolean;
  taskForm: FormGroup;
  foundList: List;
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
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
    showInputField: true,
    showTodayBtn: true
  };
  constructor(private projectService: ProjectService,
    private taskService: TaskService,
    private uploadService: UploadService, ) {
    this.resetError();
    this.isPageLoading = true;
  }

  ngOnInit() {
    this.projectID = Number(this.GetProjectID('projectID'));
    this.listID = Number(this.GetListID('listID'));
    this.projectService.getAllProjects()
      .then(data => {
        this.projects = data;
        this.isPageLoading = false;
        for (let i = 0; i < this.projects.length; i++) {
          if (this.projects[i].id == this.projectID) {
            this.foundProject = this.projects[i];
          }
        }
        for (let i = 0; i < this.foundProject.lists.length; i++) {
          if (this.foundProject.lists[i].id == this.listID) {
            this.foundList = this.foundProject.lists[i];
          }
        }
      }
      ).catch(reason => {
        console.debug('ProjectDetailComponent', reason);
      }
      );
    this.taskForm = new FormGroup({
      name: new FormControl(undefined),
      description: new FormControl(undefined),
      status: new FormControl(undefined),
    })
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

  GetProjectID(sParam) {
    var sPageURL = window.location.href;
    var sURLVariables = sPageURL.split('?');
    var sValue = sURLVariables[1].split('&');
    var sProjectID = sValue[0].split('=');
    var sListID = sValue[1].split('=');
    return sProjectID[1];
  }

  GetListID(sParam) {
    var sPageURL = window.location.href;
    var sURLVariables = sPageURL.split('?');
    var sValue = sURLVariables[1].split('&');
    var sProjectID = sValue[0].split('=');
    var sListID = sValue[1].split('=');
    return sListID[1];
  }

  handleCreate() {
    const formValue = this.taskForm.value;
    // this.taskService.createTask(
    //   formValue.taskname,
    //   formValue.description,
    //   formValue.
    // ).then((value: any) => {
    //   if (formValue.avatar) {
    //     this.uploadAvatar(formValue.avatar, value.id)
    //   } else {
    //     this.isLoading = false;
    //     this.setErrorsNull();
    //     // show some form of success message here
    //   }
    // }).catch(reason => {
    //   this.isLoading = false;
    //   this.handleCreateError(reason.Data);
    // })
  }

}
