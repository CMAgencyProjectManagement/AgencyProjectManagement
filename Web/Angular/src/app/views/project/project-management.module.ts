import {NgModule} from '@angular/core';
import {ProjectManagementRoutingModule} from './project-management-routing.module';
import {ProjectManagementComponent} from './view/project-management.component';
import {ProjectSchedulingComponent} from './project-scheduling/project-scheduling.component';
import {CommonModule} from '@angular/common';
import {TruncateTextPipe} from '../../directives/pipe/truncateText.pipe';
import { ProjectDetailComponent } from 'app/views/project/project-detail/project-detail.component';

@NgModule({
  imports: [
    ProjectManagementRoutingModule,
    CommonModule
  ],
  declarations: [
    ProjectManagementComponent,
    ProjectSchedulingComponent,
    ProjectDetailComponent,
    TruncateTextPipe]
})
export class ProjectManagementModule {
}
