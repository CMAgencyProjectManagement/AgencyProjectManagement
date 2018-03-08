import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../interfaces/project';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {Router} from '@angular/router';
import {Cursor, StoreService} from '../../../services/tree.service';
import {Pager} from '../../../interfaces/pager';
import {PagerService} from '../../../services/pager.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']

})
export class ProjectManagementComponent implements OnInit {
  // pager object
  pager: Pager = {} as Pager;
  // paged && search items
  pagedProjects: Project[];
  projects: Project[];
  public myModal;
  public largeModal;
  public smallModal;
  public primaryModal;
  public successModal;
  public warningModal;
  public dangerModal;
  public infoModal;

  tokenCursor: Cursor;
  isLoading: boolean;
  errorMessage: string;

  constructor(private projectService: ProjectService, private router: Router, private pagerService: PagerService) {
  }

  ngOnInit() {
    this.loadProject();
  }

  loadProject() {
    this.projectService.getAllProjects()
      .then(data => {
        this.projects = this.projectsFilter(data);
        this.setPage(1);
      })
      .catch(reason => {
        console.debug('ProjectManagementComponent', reason);
      })
  }

  handleClose(projectID: number) {
    console.debug(projectID);
    this.projectService.closeProject(
      projectID
    ).then(value => {
      this.isLoading = false;
      this.loadProject();
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
    console.debug('Here!!')
  }

  setPage(page: number, projects: Project[] = undefined) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    if (!projects) {
      projects = this.projects;
    }


    this.pager = this.pagerService.getPager(projects.length, page, 7);
    this.pagedProjects = projects.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  projectsFilter(data: Project[]): Project[] {
    let newData = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].status !== 2) {
        newData.push(data[i]);
      }
    }
    return newData;
  }

  search(name: string) {
    if (name) {
      const filteredProject = _.filter(this.projects, (project: Project) => {
          return project.name && _.toLower(project.name).indexOf(_.toLower(name)) >= 0;
        }
      );
      this.pager = {} as Pager;
      this.setPage(1, filteredProject);
    } else {
      this.setPage(1);
    }

  }
}
