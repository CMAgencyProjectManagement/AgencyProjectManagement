import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectManagementComponent } from './view/project-management.component';
import { ProjectSchedulingComponent } from './project-scheduling/project-scheduling.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AddProjectComponent } from './add-project/add-project.component';
let projectID: number;
const routes: Routes = [
  {
    path: '',
    component: ProjectManagementComponent,
    data: {
      title: 'View projects'
    }
  },
  {
    path: 'schedule',
    component: ProjectSchedulingComponent,
    data: {
      title: 'Scheduling'
    }
  },
  {
    path: 'detail',
    component: ProjectDetailComponent,
    data: {
      title: 'Update project'
    }
  },
  {
    path: 'add',
    component: AddProjectComponent,
    data: {
      title: 'Create project'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule {
}
