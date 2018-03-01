import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectManagementComponent} from './view/project-management.component';
import {ProjectSchedulingComponent} from './project-scheduling/project-scheduling.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectManagementComponent,
    data: {
      title: 'Projects'
    }
  },
  {
    path: 'schedule',
    component: ProjectSchedulingComponent,
    data: {
      title: 'Scheduling'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule {
}
