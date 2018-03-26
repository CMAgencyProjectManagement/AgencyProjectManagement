import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskRoutingModule} from './task-routing.module'
import {SpinnerModule} from '../../components/spinner/spinner.module';
import {ViewComponent} from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    SpinnerModule
  ],
  declarations: [
    ViewComponent
  ]
})
export class TaskModule {
}
