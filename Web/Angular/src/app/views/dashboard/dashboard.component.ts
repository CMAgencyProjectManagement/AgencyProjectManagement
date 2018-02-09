import { Component, style } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html',
  styles: [`.modal  { text-align: center;
    }
    .modal:before {
      display: inline-block;
      vertical-align: middle;
      content: " ";
      height: 100%;
      }
      
      .modal-dialog {
      display: inline-block;
      text-align: left;
      vertical-align: middle;
      }`]
})
export class DashboardComponent {

  constructor( ) { }

}
