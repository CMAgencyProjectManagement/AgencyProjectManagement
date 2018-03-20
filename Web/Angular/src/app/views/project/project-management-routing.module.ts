import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectManagementComponent } from './view/project-management.component';
import { ProjectSchedulingComponent } from './project-scheduling/project-scheduling.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import {ProjectTaskComponent} from './project-task/project-task.component';
import { TaskDetailComponent } from 'app/views/project/task-detail/task-detail.component';
let projectID: number;
const routes: Routes = [
  {
    path: '',
    component: ProjectManagementComponent,
    data: {
      title: 'View project'
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
      title: 'Detail project'
    }
  },
  {
    path: 'add',
    component: AddProjectComponent,
    data: {
      title: 'Create project'
    }
  },
  {
    path: 'update',
    component: ProjectUpdateComponent,
    data: {
      title: 'Update project'
    }
  },
  {
    path: 'task',
    component: ProjectTaskComponent,
    data: {
      title: 'Task project'
    }
  },
  {
    path: 'task-detail',
    component: TaskDetailComponent,
    data: {
      title: 'Task detail'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule {
}
