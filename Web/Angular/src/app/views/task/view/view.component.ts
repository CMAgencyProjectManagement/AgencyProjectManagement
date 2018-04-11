import {Component, OnInit} from '@angular/core';
import {Task} from '../../../interfaces/task'
import {TaskService} from '../../../services/task.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorModalComponent} from '../../../cmaComponents/modals/error-modal/error-modal.component';
import {BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  foundTask: Task;
  loading: {
    page: boolean
  };

  constructor(private taskService: TaskService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private modalService: BsModalService) {
    this.loading = {
      page: true
    };
  }

  ngOnInit() {
    let id = this.route.firstChild.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.taskService.getTaskDetail(Number(id))
        .then(value => {
          this.foundTask = value as Task;
          this.loading.page = false;
        })
        .catch(reason => {
          console.debug('ViewComponent-onInit', reason);
          this.showErrorModal(reason.message);
          this.loading.page = false;
        })
    } else {
      this.showErrorModal(`${id} is not a valid ID`);
    }

  }

  private showErrorModal(message: string, isNavigateBack: boolean = false) {
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
