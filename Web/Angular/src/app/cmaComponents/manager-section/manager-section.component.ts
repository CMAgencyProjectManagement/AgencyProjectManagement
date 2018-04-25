import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../interfaces/task';

@Component({
  selector: 'app-manager-section',
  templateUrl: './manager-section.component.html',
  styleUrls: ['./manager-section.component.scss']
})
export class ManagerSectionComponent implements OnInit {
  @Input() lateTasks: Task[];
  @Input() needReviewTasks: Task[];

  lateTableOptions: DataTables.Settings = {
    searching: true,
    lengthChange: false,
    paging: true,
    ordering: true,
    order: [
      [3, 'asc']
    ]
  };

  thisWeekTableOptions: DataTables.Settings = {
    searching: true,
    lengthChange: false,
    paging: true,
    ordering: true,
    order: [
      [2, 'asc']
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
