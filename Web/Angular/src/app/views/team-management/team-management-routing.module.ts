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
      title: 'Department'
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
        path: ':id/detail',
        component: DetailTeamComponent,
        data: {
          title: 'Department Detail'
        }
      },
      {
        path: 'my',
        component: DetailTeamComponent,
        data: {
          title: 'My department'
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
        path: ':id/update',
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
