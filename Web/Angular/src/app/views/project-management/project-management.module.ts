import { NgModule } from '@angular/core';
import { ProjectManagementComponent } from './project-management.component';
import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { ProjectSchedulingComponent } from './project-scheduling/project-scheduling.component';

@NgModule({
  imports: [
    ProjectManagementRoutingModule
  ],
  declarations: [ProjectManagementComponent, ProjectSchedulingComponent]
})
export class ProjectManagementModule { }
