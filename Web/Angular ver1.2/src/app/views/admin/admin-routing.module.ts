import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { teamManagePageComponent } from './teammanagepage.component';
import {accountManagePageComponent} from './accountManagePage.component';

const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Admin'
      },
      children: [
        {
          path: 'teammanagepage',
          component: teamManagePageComponent,
          data: {
            title: 'Team Management Page'
          }
        },
        {
          path: 'accountManagePage',
          component: accountManagePageComponent,
          data: {
            title: 'Account Management Page'
          }
        }
            
      ]
      
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule {}
  