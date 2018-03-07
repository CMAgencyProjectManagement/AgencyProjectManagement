import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../interfaces/project';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent implements OnInit {
  projects: Project[];
  public myModal;
  public largeModal;
  public smallModal;
  public primaryModal;
  public successModal;
  public warningModal;
  public dangerModal;
  public infoModal;
  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.getAllProjects()
      .then(data => {
        this.projects = data
      })
      .catch(reason => {
        console.debug('ProjectManagementComponent', reason);
      })
  }

}
