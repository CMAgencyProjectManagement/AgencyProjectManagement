import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/project';
import { User } from '../../interfaces/user';
import { DataTableDirective } from 'angular-datatables';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.scss']
})

export class AdminSectionComponent implements OnInit {
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
  foundProjects: Project[];
  projects: Project[];
  isPageLoading: boolean;
  constructor(private projectService: ProjectService,
    private userService: UserService) {
    this.projectService.getAllProjects()
      .then(data => {
        this.projects = data;
        for (let i = 0; i < this.projects.length; i++) {
          if (this.projects[i].status != 0 && this.projects[i].status!=1){
            this.foundProjects.push(this.projects[i]);
          }
        }
        this.isPageLoading = false;
      })
      .catch(reason => {
        console.debug('ProjectManagementComponent', reason);
      })
  }

  ngOnInit() {
  }
  search(searchStr: string) {
    this.datatableElement.dtInstance.then(
      (dtInstance: DataTables.Api) => dtInstance.search(searchStr).draw()
    );
  }
}
