import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamManagePageComponent} from './team-management.component';
import {CreateTeamComponent} from './create-team/create-team.component';
import {UpdateTeamComponent} from './update-team/update-team.component';
import { DetailTeamComponent } from './detail-team/detail-team.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'department'
    },
    children: [
      {
        path: 'view',
        component: TeamManagePageComponent,
        data: {
          title: 'View department'
        }
      },
      {
        path: 'detail',
        component: DetailTeamComponent,
        data: {
          title: 'Detail department'
        }
      },
      {
        path: 'create',
        component: CreateTeamComponent,
        data: {
          title: 'Create department'
        }
      },
      {
        path: 'update',
        component: UpdateTeamComponent,
        data: {
          title: 'Update department'
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
