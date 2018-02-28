import { NgModule } from '@angular/core';
import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { ProjectManagementComponent } from './project-management.component';
import { ProjectSchedulingComponent } from './project-scheduling/project-scheduling.component';

@NgModule({
  imports: [
    ProjectManagementRoutingModule
  ],
  declarations: [ProjectManagementComponent, ProjectSchedulingComponent]
})
export class ProjectManagementModule { }
