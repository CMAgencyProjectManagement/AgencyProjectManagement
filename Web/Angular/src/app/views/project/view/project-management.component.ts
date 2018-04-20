import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../interfaces/project';
import { User } from '../../../interfaces/user';
import { DataTableDirective } from 'angular-datatables';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']

})
export class ProjectManagementComponent implements OnInit {
  projects: Project[];
  currentUser: User;
  isLoading: boolean;
  isPageLoading: boolean;
  @ViewChild(DataTableDirective) datatableElement: DataTableDirective;
  datatableOptions: DataTables.Settings = {
    lengthChange: false,
    columnDefs: [
      {
        searchable: false,
        orderable: false,
        targets: [5]
      }
    ],
    order: [
      [4, 'desc']
    ]
  };

  constructor(private projectService: ProjectService,
    private userService: UserService) {
    this.userService.getCurrentUserInfo().then(value => {
      this.currentUser = value;
      if(this.currentUser.isAdmin){
        this.projectService.getAllProjects()
        .then(data => {
          this.projects = data;
          this.isPageLoading = false;
        })
        .catch(reason => {
          console.debug('ProjectManagementComponent', reason);
        })
      } else{
        this.projectService.getMyProjects()
        .then(data => {
          this.projects = data;
          this.isPageLoading = false;
        })
        .catch(reason => {
          console.debug('ProjectManagementComponent', reason);
        })
      }
    })
    this.isPageLoading = true;
  }

  ngOnInit() {
    
  }

  search(searchStr: string) {
    this.datatableElement.dtInstance.then(
      (dtInstance: DataTables.Api) => dtInstance.search(searchStr).draw()
    );
  }
}
