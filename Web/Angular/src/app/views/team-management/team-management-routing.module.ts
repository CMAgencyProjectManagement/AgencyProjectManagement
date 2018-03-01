import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamManagePageComponent} from './team-management.component';

const routes: Routes = [
  {
    path: 'view',
    component: TeamManagePageComponent,
    data: {
      title: 'Team'
    }

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamManagementRoutingModule {
}
