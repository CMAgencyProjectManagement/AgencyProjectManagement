import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../interfaces/project';
import { Cursor, StoreService } from '../../../services/tree.service';
import { PagerService } from '../../../services/pager.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.scss'],

})
export class ProjectUpdateComponent implements OnInit {
  projects: Project[];
  projectID: number;
  errors: {
    projectName: string;
    projectDescription: string;
  };
  foundProject: any;
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
      this.projectID = Number(this.GetURLParameter('projectID'));
      this.loadProject();
    }

    loadProject() {
        this.projectService.getAllProjects()
          .then(data => {
            this.projects = data;
          })
          .catch(reason => {
            console.debug('ProjectUpdateComponent', reason);
          })
    }

    GetURLParameter(sParam) {
      var sPageURL = window.location.href;
      var sURLVariables = sPageURL.split('?');
      var sUsername = sURLVariables[1].split('=');
      return sUsername[1];
    }

  }
