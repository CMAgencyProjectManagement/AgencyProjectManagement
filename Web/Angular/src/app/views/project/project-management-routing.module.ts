import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectManagementComponent} from './view/project-management.component';
import {ProjectSchedulingComponent} from './project-scheduling/project-scheduling.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {AddProjectComponent} from './add-project/add-project.component';
import {ProjectUpdateComponent} from './project-update/project-update.component';
import {ProjectTaskComponent} from './project-task/project-task.component';
import {TaskDetailComponent} from 'app/views/project/task-detail/task-detail.component';
import {ReportComponent} from './report/report.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectManagementComponent,
    data: {
      title: 'Project'
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
      title: 'Detail'
    }
  },
  {
    path: 'add',
    component: AddProjectComponent,
    data: {
      title: 'Create'
    }
  },
  {
    path: 'update/:id',
    component: ProjectUpdateComponent,
    data: {
      title: 'Update'
    }
  },
  {
    path: 'task',
    component: ProjectTaskComponent,
    data: {
      title: 'Task'
    }
  },
  {
    path: 'task-detail',
    component: TaskDetailComponent,
    data: {
      title: 'Task detail'
    }
  },
  {
    path: ':id/report',
    component: ReportComponent,
    data: {
      title: 'report'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule {
}
