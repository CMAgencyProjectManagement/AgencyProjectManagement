import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import 'dhtmlx-gantt';
import {} from '@types/dhtmlxgantt';

@Component({
  selector: 'app-project-scheduling',
  templateUrl: './project-scheduling.component.html',
  styleUrls: ['./project-scheduling.component.scss']
})
export class ProjectSchedulingComponent implements OnInit {
  @ViewChild('gantt_here') ganttContainer: ElementRef;

  constructor() {
  }

  ngOnInit() {
    gantt.config.xml_date = '%Y-%m-%d %H:%i';
    gantt.init(this.ganttContainer.nativeElement);
    // gantt.parse()
  }

}
