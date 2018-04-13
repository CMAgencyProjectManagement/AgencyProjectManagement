import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project';
import { Task } from 'app/interfaces/task';
import { BsModalService } from 'ngx-bootstrap';
import { CreateListModalComponent } from '../modals/create-list-modal/create-list-modal.component';
import { ListService } from '../../services/list.service';
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
  max: number = 200;
  showWarning: boolean;
  dynamic: number;
  type: string;
  constructor(private modalService: BsModalService,private listService: ListService) {

    this.foundTasks = [];
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

  handleOnAddListClick() {
    const initialState = {
      confirmCallback: (listName) => {
        this.listService.createList(
          this.project.id,
          listName
        )
      }
    };
    this.modalService.show(CreateListModalComponent, { initialState, class: 'modal-dialog' });
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

  
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  status: { isOpen: boolean } = { isOpen: false };

  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isOpen = !this.status.isOpen;
  }

  change(value: boolean): void {
    this.status.isOpen = value;
  }

  disabled: boolean = false;

  isDropup: boolean = true;

  autoClose: boolean = false;
}

}
