import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../interfaces/project';
import {DataTableDirective} from 'angular-datatables';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']

})
export class ProjectManagementComponent implements OnInit {
  projects: Project[];
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
    ]
  };

  constructor(private projectService: ProjectService) {
    this.isPageLoading = true;
  }

  ngOnInit() {
    this.projectService.getAllProjects()
      .then(data => {
        this.projects = data;
        this.isPageLoading = false;
      })
      .catch(reason => {
        console.debug('ProjectManagementComponent', reason);
      })
  }

  search(searchStr: string) {
    this.datatableElement.dtInstance.then(
      (dtInstance: DataTables.Api) => dtInstance.search(searchStr).draw()
    );
  }
}
