import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../interfaces/project';
import { Cursor, StoreService } from '../../../services/tree.service';
import { ElementRef, ViewChild } from '@angular/core';
import { UserService, } from '../../../services/user.service';
import { PagerService } from '../../../services/pager.service';
import { User } from 'app/interfaces/user';
import { Pager } from '../../../interfaces/pager';
import { Directive, HostListener, Input } from '@angular/core';
import * as _ from 'lodash';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { DISABLED } from '@angular/forms/src/model';
import { IMyDateModel, IMyDpOptions } from 'mydatepicker';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  myDatePickerOptions: IMyDpOptions = {
    showInputField: true,
    dateFormat: 'dd/mm/yyyy',
  };

  // For example initialize to specific date (09.10.2018 - 19.10.2018). It is also possible
  // to set initial date range value using the selDateRange attribute.
  // mode {date: {year,month,day}}
  model: any = { date: { year: 2018, month: 10, day: 9 } };

  tokenCursor: Cursor;
  isLoading: boolean;
  errorMessage: string;
  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    // this.newProjectForm = new FormGroup({
    //   username: new FormControl(undefined, Validators.required),
    //   password: new FormControl(undefined, Validators.required),
    //   fullname: new FormControl(undefined, Validators.required),
    //   email: new FormControl(undefined, Validators.required),
    //   phone: new FormControl(undefined, Validators.required),
    //   day: new FormControl(undefined, Validators.required),
    //   month: new FormControl(undefined, Validators.required),
    //   year: new FormControl(undefined, Validators.required),
    //   myDate: new FormControl(undefined, Validators.required),
    //   avatar: new FormControl(undefined, Validators.required)
    // });
  }

  // setDate(): void {
  //   // Set today date using the patchValue function
  //   let date = new Date();
  //   this.signupForm.patchValue({
  //     myDate: {
  //       date: {
  //         year: date.getFullYear(),
  //         month: date.getMonth() + 1,
  //         day: date.getDate()
  //       }
  //     }
  //   });
  // }

  // clearDate(): void {
  //   // Clear the date using the patchValue function
  //   this.signupForm.patchValue({myDate: null});
  // }
}
