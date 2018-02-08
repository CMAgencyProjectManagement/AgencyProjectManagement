import { NgModule } from '@angular/core';
import {teamManagePageComponent} from './team-management.component';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  imports: [
    AdminRoutingModule
  ],
  declarations: [teamManagePageComponent]
})
export class ProjectManagementModule { }
