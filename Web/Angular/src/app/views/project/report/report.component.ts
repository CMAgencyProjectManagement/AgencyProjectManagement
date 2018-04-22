import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorModalComponent} from '../../../cmaComponents/modals';
import {ProjectService} from '../../../services/project.service';
import {Task} from '../../../interfaces/task';
import * as moment from 'moment';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  projectId: number;
  report: Report;
  isLoading: {
    page: boolean
  };
  pieChart: {
    labels,
    data,
    type
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: BsModalService,
    private projectService: ProjectService
  ) {
    this.isLoading = {
      page: true
    }
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.projectId = Number(id);
      this.projectService.getReport(id)
        .then((value: Report) => {
          this.report = value;
          this.setupPieChart();
          this.isLoading.page = false;
        })
        .catch(reason => {
          this.showErrorModal(reason.Message);
        })
    } else {
      this.showErrorModal(`${id} is not a valid ID`);
    }
  }

  setupPieChart() {
    let labels = this.report.taskStatusReport.map(value => value.key);
    let data = this.report.taskStatusReport.map(value => value.value);

    this.pieChart = {
      labels: labels,
      data: data,
      type: 'pie'
    }
  }

  setupLineChart() {
    let lables = [];
    let now = moment();
    for (let i = 0; i < 7; i++) {
      let previousDate = now.subtract(i, 'day');

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


interface Report {
  id: number,
  name: string,
  taskCount: number,
  userNumberInProject: number,
  userNumberNotInTask: number,
  taskStatusReport: {
    key: string,
    value: number
  }[],
  taskExpireThisWeek: Task[]
}
