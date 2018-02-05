import { NgModule } from '@angular/core';
import { ProjectManagementComponent } from './project-management.component';
import { ProjectManagementRoutingModule } from './project-management-routing.module';

@NgModule({
  imports: [
    ProjectManagementRoutingModule
  ],
  declarations: [ProjectManagementComponent]
})
export class ProjectManagementModule { }
