import {Component, OnInit, style} from '@angular/core';
import {Router} from '@angular/router';
import {Project} from '../../interfaces/project';
import {StoreService} from '../../services/tree.service';
import {ProjectService} from '../../services/project.service';

@Component({
  templateUrl: 'dashboard.component.html',

})
export class DashboardComponent implements OnInit {
  projects: Project[];

  constructor(
    private storeService: StoreService,
    private projectService: ProjectService
  ) {
    this.storeService.select([])

  }

  ngOnInit(): void {
    this.projectService.getMyProjects()
      .then(value => this.projects = value)
      .catch(reason => console.debug('error', reason.message));
  }

}
