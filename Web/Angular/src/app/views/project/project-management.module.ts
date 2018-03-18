import {NgModule} from '@angular/core';
import {ProjectManagementRoutingModule} from './project-management-routing.module';
import {ProjectManagementComponent} from './view/project-management.component';
import {ProjectSchedulingComponent} from './project-scheduling/project-scheduling.component';
import {CommonModule} from '@angular/common';
import {TruncateTextPipe} from '../../directives/pipe/truncateText.pipe';
import { ProjectDetailComponent } from 'app/views/project/project-detail/project-detail.component';
import { AddProjectComponent } from 'app/views/project/add-project/add-project.component';
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { MyDatePickerModule, MyDatePicker } from 'mydatepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser/src/browser';
import { ProjectUpdateComponent } from 'app/views/project/project-update/project-update.component';
import { ProjectTaskComponent} from 'app/views/project/project-task/project-task.component';
@NgModule({
  imports: [
    ProjectManagementRoutingModule,
    CommonModule,
    ModalModule.forRoot(),
    MyDatePickerModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProjectManagementComponent,
    ProjectSchedulingComponent,
    ProjectDetailComponent,
    TruncateTextPipe,
  AddProjectComponent,
  ProjectUpdateComponent,
  ProjectTaskComponent
  ]
})
export class ProjectManagementModule {
}
