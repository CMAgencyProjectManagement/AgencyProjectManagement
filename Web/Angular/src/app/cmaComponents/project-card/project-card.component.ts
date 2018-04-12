import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../interfaces/project';
import {Task} from 'app/interfaces/task';
import {BsModalService} from 'ngx-bootstrap';
import {CreateListModalComponent} from '../modals/create-list-modal/create-list-modal.component';

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

  constructor(private modalService: BsModalService) {
    this.foundTasks = [];
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

  handleOnAddListClick() {
    const initialState = {
      confirmCallback: (listName) => {
        // Code here
        console.log(listName);
      }
    };
    this.modalService.show(CreateListModalComponent, {initialState, class: 'modal-dialog'});
  }

  search(searchStr: string) {
    this.foundTasks = [];
    if (searchStr == '') {
      return;
    }
    for (let list of this.project.lists) {
      for (let task of list.tasks) {
        if (task.name.indexOf(searchStr) >= 0) {
          this.foundTasks.push(task);
          continue;
        }
        if (task.description.indexOf(searchStr) >= 0) {
          this.foundTasks.push(task);
        }
      }
    }
  }

  clear() {
    this.foundTasks = [];
    return;
  }
}
