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
@NgModule({
  imports: [
    ProjectManagementRoutingModule,
    CommonModule,
    ModalModule.forRoot(),
    MyDatePickerModule
  ],
  declarations: [
    ProjectManagementComponent,
    ProjectSchedulingComponent,
    ProjectDetailComponent,
    TruncateTextPipe,
  AddProjectComponent,
  ]
})
export class ProjectManagementModule {
}
