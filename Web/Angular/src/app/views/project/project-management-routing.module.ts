import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectManagementComponent } from './view/project-management.component';
import { ProjectSchedulingComponent } from './project-scheduling/project-scheduling.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectTaskComponent } from './project-task/project-task.component';
import { ReportComponent } from './report/report.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Project'
    },
    children: [
      {
        path: '',
        component: ProjectManagementComponent,
        data: {
          title: 'View projects'
        }
      },
      {
        path: ':id/schedule',
        component: ProjectSchedulingComponent,
        data: {
          title: 'Project schedule'
        }
      },
      {
        path: ':id/detail',
        component: ProjectDetailComponent,
        data: {
          title: 'Project detail'
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
        path: ':id/update',
        component: ProjectUpdateComponent,
        data: {
          title: 'Update project'
        }
      },
      {
        path: ':id/task',
        component: ProjectTaskComponent,
        data: {
          title: 'View tasks'
        }
      },
      {
        path: ':id/report',
        component: ReportComponent,
        data: {
          title: 'View report'
        }
      },
      {
        path: ':id/archive',
        component: ArchiveComponent,
        data: {
          title: 'View archives'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule {
}
