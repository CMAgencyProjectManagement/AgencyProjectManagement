import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/project';
import { User } from '../../interfaces/user';
import { DataTableDirective } from 'angular-datatables';
import { UserService } from '../../services/user.service';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.scss']
})

export class AdminSectionComponent implements OnInit,AfterViewInit  {
  @ViewChild(DataTableDirective) datatableElement: DataTableDirective;
  dtElement: DataTableDirective;
  datatableOptions: DataTables.Settings = {
    lengthChange: false,
    order: [
      [0, 'desc']
    ]
  };
  dtTrigger: Subject<any> = new Subject();
  foundProjects: Project[];
  projects: Project[];
  isPageLoading: boolean;
  constructor(private projectService: ProjectService,
    private userService: UserService) {
    this.projects = [];
    this.projectService.getAllProjects()
      .then(data => {
        this.projects = data;

        // for (let i = 0; i < this.projects.length; i++) {
        //   if (this.projects[i].status != 0 && this.projects[i].status!=1){
        //     this.foundProjects.push(this.projects[i]);
        //   }
        // }
        this.isPageLoading = false;
      })
      .catch(reason => {
        console.debug('ProjectManagementComponent', reason);
      })
  }

  ngOnInit() {
  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
   }
  search(searchStr: string) {
    this.datatableElement.dtInstance.then(
      (dtInstance: DataTables.Api) => dtInstance.search(searchStr).draw()
    );
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
}
