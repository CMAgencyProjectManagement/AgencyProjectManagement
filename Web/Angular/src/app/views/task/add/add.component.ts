import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../interfaces/project';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { List } from 'app/interfaces/list';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  sValue: string[];
  projectID: number;
  projects: Project[];
  foundProject: Project;
  listID: number;
  isLoading: boolean;
  isPageLoading: boolean;
  foundList: List;
  constructor(private projectService: ProjectService) {
    this.isPageLoading = true;
  }

  ngOnInit() {
    this.projectID = Number(this.GetProjectID('projectID'));
    this.listID = Number(this.GetListID('listID'));
    this.projectService.getAllProjects()
      .then(data => {
        this.projects = data;
        this.isPageLoading = false;
        for (let i = 0; i < this.projects.length; i++) {
          if (this.projects[i].id == this.projectID) {
            this.foundProject = this.projects[i];
          }
        }
        for (let i = 0; i < this.foundProject.lists.length; i++) {
          if (this.foundProject.lists[i].id == this.listID) {
            this.foundList = this.foundProject.lists[i];
          }
        }
      }
      ).catch(reason => {
        console.debug('ProjectDetailComponent', reason);
      }
      );
    console.debug(this.foundList.name);
  }

  GetProjectID(sParam) {
    var sPageURL = window.location.href;
    var sURLVariables = sPageURL.split('?');
    var sValue = sURLVariables[1].split('&');
    var sProjectID = sValue[0].split('=');
    var sListID = sValue[1].split('=');
    return sProjectID[1];
  }

  GetListID(sParam) {
    var sPageURL = window.location.href;
    var sURLVariables = sPageURL.split('?');
    var sValue = sURLVariables[1].split('&');
    var sProjectID = sValue[0].split('=');
    var sListID = sValue[1].split('=');
    return sListID[1];
  }
}
