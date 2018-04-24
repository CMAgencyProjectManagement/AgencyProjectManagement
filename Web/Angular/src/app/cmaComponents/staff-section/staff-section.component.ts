import { Component, OnInit } from '@angular/core';
import {Task} from '../../interfaces/task';

@Component({
  selector: 'app-staff-section',
  templateUrl: './staff-section.component.html',
  styleUrls: ['./staff-section.component.scss']
})
export class StaffSectionComponent implements OnInit {
  taskLate: Task[];
  taskThisWeek: Task[];

  lateTableOptions: DataTables.Settings = {
    searching: true,
    lengthChange: false,
    paging: true,
    ordering: true
  };

  thisWeekTableOptions: DataTables.Settings = {
    searching: true,
    lengthChange: false,
    paging: true,
    ordering: true
  };

  constructor() {
  }

  ngOnInit(): void {

  }
}
