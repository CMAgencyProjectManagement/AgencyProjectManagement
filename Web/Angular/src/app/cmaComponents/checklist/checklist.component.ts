import {Component, Input, OnInit} from '@angular/core';
import {CheckList} from '../../interfaces/checkList';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  @Input() checkList: CheckList;
  @Input() managementMode: boolean;

  itemsEditMode: boolean[];
  itemsEditModeValue: string[];

  constructor() {
    this.itemsEditMode = [];
    this.itemsEditModeValue = [];
  }

  ngOnInit() {
  }


  handleEditItemClick(itemId: number) {
    this.itemsEditMode[itemId] = true;
    this.itemsEditModeValue[itemId] = this.checkList.items
      .find(value => value.id == itemId).name;
  }

  handleDoneEditItemClick(itemId: number) {
    this.itemsEditMode[itemId] = false;
    this.checkList.items
      .find(value => value.id == itemId).name = this.itemsEditModeValue[itemId];
  }
}
