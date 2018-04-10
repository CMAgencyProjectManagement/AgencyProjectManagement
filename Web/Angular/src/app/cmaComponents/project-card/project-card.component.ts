import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project';
import { Task } from 'app/interfaces/task';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  @Input() showbutton: boolean;
  foundTasks: Task[];
  isCollapsed: boolean;
  constructor() {
    this.foundTasks=[];
    this.isCollapsed=true;
  }

  ngOnInit() {
  }

  search(searchStr: string) {
    this.foundTasks=[];
    if(searchStr==""){
      return;
    }
    for (let list of this.project.lists) {
      for (let task of list.tasks) {
        if (task.name.indexOf(searchStr) >= 0) {
          this.foundTasks.push(task);
          continue;
        }
        if(task.description.indexOf(searchStr)>=0){
          this.foundTasks.push(task);
        }
      }
    }
  }
  clear(){
    this.foundTasks=[];
    return;
  }
}
