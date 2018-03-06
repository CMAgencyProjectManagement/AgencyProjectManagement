import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamManagePageComponent} from './team-management.component';
import {CreateTeamComponent} from './create-team/create-team.component';
import {UpdateTeamComponent} from './update-team/update-team.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Team'
    },
    children: [
      {
        path: 'view',
        component: TeamManagePageComponent,
        data: {
          title: 'View'
        }
      },
      {
        path: 'create',
        component: CreateTeamComponent,
        data: {
          title: 'Create'
        }
      },
      {
        path: 'update',
        component: UpdateTeamComponent,
        data: {
          title: 'Update'
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamManagementRoutingModule {
}
