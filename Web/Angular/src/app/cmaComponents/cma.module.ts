import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectCardComponent} from './project-card/project-card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ProjectCardComponent
  ],
  declarations: [ProjectCardComponent]
})
export class CmaModule {
}
