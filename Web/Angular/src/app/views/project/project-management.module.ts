import {NgModule} from '@angular/core';
import {ProjectManagementRoutingModule} from './project-management-routing.module';
import {ProjectManagementComponent} from './view/project-management.component';
import {ProjectSchedulingComponent} from './project-scheduling/project-scheduling.component';
import {CommonModule} from '@angular/common';
import {TruncateTextPipe} from '../../directives/pipe/truncateText.pipe';

@NgModule({
  imports: [
    ProjectManagementRoutingModule,
    CommonModule
  ],
  declarations: [
    ProjectManagementComponent,
    ProjectSchedulingComponent,
    TruncateTextPipe]
})
export class ProjectManagementModule {
}
