import {NgModule} from '@angular/core';
import {ProjectManagementRoutingModule} from './project-management-routing.module';
import {ProjectManagementComponent} from './view/project-management.component';
import {ProjectSchedulingComponent} from './project-scheduling/project-scheduling.component';
import {CommonModule} from '@angular/common';
import {TruncateTextPipe} from '../../directives';
import {ProjectDetailComponent} from 'app/views/project/project-detail/project-detail.component';
import {AddProjectComponent} from 'app/views/project/add-project/add-project.component';
import {ProjectUpdateComponent} from 'app/views/project/project-update/project-update.component';
import {ProjectTaskComponent} from 'app/views/project/project-task/project-task.component';
import {TaskDetailComponent} from 'app/views/project/task-detail/task-detail.component';
import {MyDatePickerModule} from 'mydatepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {ModalModule} from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {CmaModule} from '../../cmaComponents/cma.module';
import {SpinnerModule} from '../../components/spinner/spinner.module';


@NgModule({
  imports: [
    ProjectManagementRoutingModule,
    CommonModule,
    ModalModule.forRoot(),
    MyDatePickerModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SpinnerModule,
    BsDropdownModule,
    CmaModule
  ],
  declarations: [
    ProjectManagementComponent,
    ProjectSchedulingComponent,
    ProjectDetailComponent,
    TruncateTextPipe,
    AddProjectComponent,
    ProjectUpdateComponent,
    ProjectTaskComponent,
    TaskDetailComponent,
  ]
})
export class ProjectManagementModule {
}
