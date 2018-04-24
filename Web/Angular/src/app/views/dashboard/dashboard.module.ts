import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {SpinnerModule} from '../../components';
import {CmaModule} from '../../cmaComponents/cma.module';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SpinnerModule,
    CmaModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule {
}
