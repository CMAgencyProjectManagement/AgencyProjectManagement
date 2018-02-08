import { NgModule } from '@angular/core';
import {TeamManagePageComponent} from './team-management.component';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  imports: [
    AdminRoutingModule
  ],
  declarations: [TeamManagePageComponent]
})
export class TeamManagementModule { }
