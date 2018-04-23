import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {SpinnerModule} from '../../components';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SpinnerModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
