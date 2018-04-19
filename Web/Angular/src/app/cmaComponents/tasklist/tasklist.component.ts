import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../interfaces/task';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  @Input() tasks: Task[];
  constructor() { }

  ngOnInit() {
  }

}
