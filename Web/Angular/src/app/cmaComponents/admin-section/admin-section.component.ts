import {Component, OnInit, Input} from '@angular/core';
import {Project} from '../../interfaces/project';
import * as _ from 'lodash';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.scss']
})

export class AdminSectionComponent implements OnInit {
  @Input() projects: Project[];
  filtedData: Project[];

  recentProjectOptions: DataTables.Settings = {
    searching: true,
    lengthChange: true,
    paging: true,
    ordering: true,
    order: [
      [1, 'asc']
    ]
  };

  constructor() {

  }

  ngOnInit(): void {
    this.filtedData = _.filter(this.projects, (project: Project) => {
      if (project.status === 0 || project.status === 1) {
        return true;
      }
    })
  }
}
