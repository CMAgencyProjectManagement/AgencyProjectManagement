import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../interfaces/project';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.getAllProjects()
      .then(data => {
        this.projects = data
      })
      .catch(reason => {
        console.debug('ProjectDetailComponent', reason);
      })
  }

}
