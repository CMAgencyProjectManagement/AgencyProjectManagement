import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskRoutingModule} from './task-routing.module'
import {SpinnerModule} from '../../components/spinner/spinner.module';
import {ViewComponent} from './view/view.component';
import {CmaModule} from '../../cmaComponents/cma.module';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LaddaModule} from 'angular2-ladda';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    SpinnerModule,
    CmaModule,
    ReactiveFormsModule,
    LaddaModule.forRoot({
      style: 'expand-left'
    }),
    FormsModule,
  ],
  declarations: [
    ViewComponent,
    EditComponent,
    AddComponent
  ]
})
export class TaskModule {
}
