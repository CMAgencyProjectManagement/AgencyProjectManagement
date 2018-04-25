import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../interfaces/task';

@Component({
  selector: 'app-staff-section',
  templateUrl: './staff-section.component.html',
  styleUrls: ['./staff-section.component.scss']
})
export class StaffSectionComponent implements OnInit {
  @Input() lateTasks: Task[];
  @Input() thisWeekTasks: Task[];

  lateTableOptions: DataTables.Settings = {
    searching: true,
    lengthChange: false,
    paging: true,
    ordering: true,
    order: [
      [4, 'asc']
    ]
  };

  thisWeekTableOptions: DataTables.Settings = {
    searching: true,
    lengthChange: false,
    paging: true,
    ordering: true,
    order: [
      [5, 'asc']
    ]
  };

  constructor() {
  }

  ngOnInit(): void {

  }
}
