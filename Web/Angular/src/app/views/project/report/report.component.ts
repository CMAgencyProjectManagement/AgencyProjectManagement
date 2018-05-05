import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorModalComponent} from '../../../cmaComponents/modals';
import {ProjectService} from '../../../services/project.service';
import {ReportService} from '../../../services/report.service';
import {Task} from '../../../interfaces/task';
import {Project} from '../../../interfaces/project';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  foundProject: Project;
  isLoading: {
    page: boolean
  };
  statistic: {
    taskCount: number,
    completedTask: number,
    numberOfPeopleInProject: number;
  };
  barChart: {
    labels: any
    series: any
    data: any
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: BsModalService,
    private projectService: ProjectService,
    private reportService: ReportService
  ) {
    this.isLoading = {
      page: true
    }
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.loadData(id);
    } else {
      this.showErrorModal(`${id} is not a valid ID`);
    }
  }

  loadData(projectId) {
    this.isLoading.page = true;
    Promise.all([this.projectService.getProject(projectId),
      this.reportService.getReportStatistic(projectId),
      this.reportService.getReportProgress(projectId)])
      .then((resData: [Project, any, any]) => {
        this.foundProject = resData[0];
        this.statistic = resData[1];
        this.barChart = resData[2];
        this.isLoading.page = false;
      })
      .catch(reason => {
        this.showErrorModal(reason.Message);
      })
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
