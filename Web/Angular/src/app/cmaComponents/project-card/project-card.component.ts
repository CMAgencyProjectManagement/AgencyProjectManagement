import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  @Input() showbutton: boolean;
  foundTask: any;
  constructor() {
  }

  ngOnInit() {
  }

  search(searchStr: string) {
    for (let list of this.project.lists) {
      for (let task of list.tasks) {
        if (task.name.indexOf(searchStr) >= 0) {
          this.foundTask.push(task);
          continue;
        }
      }
    }
  }
}
