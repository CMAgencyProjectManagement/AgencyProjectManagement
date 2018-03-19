import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../interfaces/project';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']

})
export class ProjectManagementComponent implements OnInit {
  projects: Project[];
  isLoading: boolean;
  isPageLoading: boolean;
  datatableOptions: DataTables.Settings = {
    searching: false,
    lengthChange: false,
    columnDefs: [
      {
        searchable: false,
        orderable: false,
        targets: [6]
      }
    ]
  };

  constructor(private projectService: ProjectService) {
    this.isPageLoading = true;
  }

  ngOnInit() {
    this.loadProject();
  }

  loadProject() {
    this.projectService.getAllProjects()
      .then(data => {
        this.projects = data;
        this.isPageLoading = false;
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
      // this.handleCloseError(reason.Data);
    })
  }

  search(searchStr: string) {
    this.isPageLoading = true;
    this.projectService.getAllProjects()
      .then(projects => {
        this.projects = _.filter(projects, (project: Project) => {
          let result = false;
          if (project.name) {
            result = _.toLower(project.name).indexOf(_.toLower(searchStr)) >= 0;

          }

          if (!result && project.description) {
            result = project.description && _.toLower(project.description).indexOf(_.toLower(searchStr)) >= 0
          }

          if (!result && project.deadline) {
            let formatted = moment(project.deadline).format('DD/MM/YYYY');
            result = _.toLower(formatted).indexOf(_.toLower(searchStr)) >= 0;
          }

          if (!result && project.startDate) {
            let formatted = moment(project.startDate).format('DD/MM/YYYY');
            result = _.toLower(formatted).indexOf(_.toLower(searchStr)) >= 0;

          }

          if (!result && project.createdTime) {
            let formatted = moment(project.createdTime).format('DD/MM/YYYY');
            result = _.toLower(formatted).indexOf(_.toLower(searchStr)) >= 0;

          }

          return result;
        });
        this.isPageLoading = false;
      })
      .catch(reason => {
        console.log('viewallproject--search ' + reason);
      })
  }
}
