import {NgModule} from '@angular/core';

import {P404Component} from './404.component';
import {P500Component} from './500.component';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';
import {LaddaModule} from 'angular2-ladda';
import {PagesRoutingModule} from './pages-routing.module';

import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    LaddaModule.forRoot({
      style: 'expand-left'
    })
  ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ]
})
export class PagesModule {
}
