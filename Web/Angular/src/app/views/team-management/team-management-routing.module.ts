import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamManagementComponent} from './team-management.component';

const routes: Routes = [
  {
    path: '',
    component: TeamManagementComponent,
    data: {
      title: 'Team'
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule {
}
