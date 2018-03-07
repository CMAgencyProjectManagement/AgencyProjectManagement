import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../interfaces/project';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Cursor, StoreService } from '../../../services/tree.service';
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
  
  constructor(private projectService: ProjectService,private router: Router ) {
  }

  tokenCursor: Cursor;
  isLoading: boolean;
  errorMessage: string;
  ngOnInit() {
    this.projectService.getAllProjects()
      .then(data => {
        this.projects = data
      })
      .catch(reason => {
        console.debug('ProjectManagementComponent', reason);
      })
  } 

  handleClose(projectID: number){
    console.debug(projectID);
    this.projectService.closeProject(
      projectID
    ).then(value => {
      this.isLoading = false;
    }).catch(reason => {
      this.isLoading = false;
      console.debug(reason);
      this.handleCloseError(reason.Data);
    })
  }

  
  handleCloseError(errors: any[]) {
    for (let error of errors) {
      const fieldName = error.key;
      const errorMessage = error.message;
      console.debug('handleCreateProjectError', fieldName, errorMessage);
    }
  }

  handleViewProject(projectID: number) {
  console.debug("Here!!")
  }

}
