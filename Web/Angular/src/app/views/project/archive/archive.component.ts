import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../../../services/tree.service';
import { User } from '../../../interfaces/user';
import { Task } from '../../../interfaces/task';
import {List} from '../../../interfaces/list';
import { Project } from "../../../interfaces/project";
import { TaskService } from '../../../services/task.service';
import { ProjectService } from './../../../services/project.service'
import { Location } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorModalComponent } from '../../../cmaComponents/modals';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  @ViewChild(DataTableDirective) datatableElement: DataTableDirective;
  currentUser: User;
  foundProject: Project;
  lists: List[];
  tasks: Task[];
  foundTasks: Task[];
  isLoading: {
    page: boolean
  };
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
  constructor(
    private storeService: StoreService,
    private taskService: TaskService,
    private projectService: ProjectService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.currentUser = storeService.get(['currentUser']);
    this.lists = [];
    this.tasks = [];
    this.isLoading = {
      page: true
    };
  }
  search(searchStr: string) {
    this.datatableElement.dtInstance.then(
      (dtInstance: DataTables.Api) => dtInstance.search(searchStr).draw()
    );
  }


  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getListOfProject(id)
      .then(value => {
        this.lists = value;
        for(let i =0; i< this.lists.length;i++){
          for(let y=0; y<this.lists[i].tasks.length;y++){
            if(this.lists[i].tasks[y].isArchived){
              this.tasks.push(this.lists[i].tasks[y]);
            }
          }
        }
        this.isLoading.page = false;

      })
      .catch(reason => {
        console.debug('ArchiveComponent',reason )
        this.showErrorModal(reason.Message);
        this.isLoading.page = false;
      })
  }
  showErrorModal(message: string, isNavigateBack: boolean = false) {
    const initialState = {
      closeCallback: () => {
        if (isNavigateBack) {
          this.location.back();
        }
      },
      message: message
    };
    this.modalService.show(ErrorModalComponent, { initialState, class: 'modal-dialog modal-danger' });
  }
  

}
