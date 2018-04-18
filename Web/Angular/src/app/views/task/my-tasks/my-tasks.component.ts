import {Component, OnInit, ViewChild} from '@angular/core';
import {StoreService} from '../../../services/tree.service';
import {User} from '../../../interfaces/user';
import {Task} from '../../../interfaces/task';
import {TaskService} from '../../../services/task.service';
import {Location} from '@angular/common';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorModalComponent} from '../../../cmaComponents/modals';
import {DataTableDirective} from 'angular-datatables';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {
  @ViewChild(DataTableDirective) datatableElement: DataTableDirective;
  currentUser: User;
  tasks: Task[];
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
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.currentUser = storeService.get(['currentUser']);
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
    this.taskService.getMyTask()
      .then(value => {
        this.tasks = value;
        this.isLoading.page = false;
      })
      .catch(reason => {
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
    this.modalService.show(ErrorModalComponent, {initialState, class: 'modal-dialog modal-danger'});
  }
}
