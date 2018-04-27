import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfigRoutingModule} from './config-routing.module';
import {SpinnerModule} from '../../components';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ConfigComponent} from './config.component';
@NgModule({
  imports: [
    CommonModule,
    ConfigRoutingModule,
    SpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ConfigComponent
  ]
})
export class ConfigModule { }
