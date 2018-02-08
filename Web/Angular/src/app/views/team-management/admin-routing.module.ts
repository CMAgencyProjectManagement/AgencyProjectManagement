import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamManagePageComponent } from './team-management.component';


const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Admin'
      },
      children: [
        {
          path: 'teamManagePage',
          component: TeamManagePageComponent,
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
  export class AdminRoutingModule {}
