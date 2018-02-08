import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {teamManagePageComponent} from './team-management.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: 'teamManagePage',
        component: teamManagePageComponent,
        data: {
          title: 'Team Management Page'
        }
      },
          
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamManagementRoutingModule {
}
