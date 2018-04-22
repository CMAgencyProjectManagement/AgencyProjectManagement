import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorModalComponent} from '../../../cmaComponents/modals';
import {ProjectService} from '../../../services/project.service';
import {Task} from '../../../interfaces/task';
import * as moment from 'moment';
import {forEach} from '@angular/router/src/utils/collection';
import * as _ from 'lodash';

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
  lineChart: {
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
          this.setupLineChart();
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
    let tmpArray: {
      key: moment.Moment,
      value: Task[]
    }[] = [];
    let resultObj = _.groupBy(this.report.taskExpireThisWeek, 'deadline');
    for (let key in resultObj) {
      if (resultObj.hasOwnProperty(key)) {
        tmpArray.push({
          key: moment(key),
          value: resultObj[key]
        })
      }
    }
    tmpArray.sort((left, right) => {
      if (left.key.isSame(right.key)) {
        return 0;
      }

      if (left.key.isAfter(right.key)) {
        return 1;
      }

      return -1;
    });
    this.lineChart = {
      labels: tmpArray.map(el => el.key.format('DD/MM')),
      data: tmpArray.map(el => el.value.length),
      type: 'line'
    };
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
