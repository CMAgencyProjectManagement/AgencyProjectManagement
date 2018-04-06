import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskRoutingModule} from './task-routing.module'
import {SpinnerModule} from '../../components/spinner/spinner.module';
import {ViewComponent} from './view/view.component';
import {CmaModule} from '../../cmaComponents/cma.module';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    SpinnerModule,
    CmaModule
  ],
  declarations: [
    ViewComponent
  ]
})
export class TaskModule {
}
