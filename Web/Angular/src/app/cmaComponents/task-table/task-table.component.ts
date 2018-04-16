import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../interfaces/task';
@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {
  @Input() tasks: Task[];
  datatableOptions: DataTables.Settings = {
    searching: false,
    lengthChange: false,
    paging: false,
    ordering: false
  };

  constructor() {
  }

  ngOnInit() {
  }

}
