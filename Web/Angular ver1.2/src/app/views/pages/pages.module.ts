import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';

import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule
  ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
  ]
})
export class PagesModule { }
