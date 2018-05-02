import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CheckList} from '../../interfaces/checkList';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  @Input() checkList: CheckList;
  @Input() managementMode: boolean;
  @Input() readonly: boolean;

  @Output() onDeleteCheckList = new EventEmitter<{ checkListId: number }>();
  @Output() onEditChecklist = new EventEmitter<{ checkListId: number, content: string }>();

  @Output() onCreateCheckListItem = new EventEmitter<{ checkListId: number, checkListItemId: number, content: string }>();
  @Output() onEditCheckListItem = new EventEmitter<{ checkListId: number, checkListItemId: number, content: string }>();
  @Output() onDeleteChecklistItem = new EventEmitter<{ checkListId: number, checkListItemId: number }>();

  @Output() checkListItem = new EventEmitter<{ checkListId: number, checkListItemId: number }>();

  checkListEditMode: boolean;
  checkListEditValue: string;

  itemsEditMode: boolean[];
  itemsEditModeValue: string[];

  newItemValue: string;

  constructor() {
    this.itemsEditMode = [];
    this.itemsEditModeValue = [];
    this.checkListEditMode = false;
    this.checkListEditValue = '';
  }

  ngOnInit() {
    this.checkListEditValue = this.checkList.name;
  }

  handleEditCheckListClick() {
    this.checkListEditMode = !this.checkListEditMode;
  }

  handleDoneEditCheckListClick() {
    this.checkList.name = this.checkListEditValue;
    let eventData = {
      checkListId: this.checkList.id,
      content: this.checkListEditValue
    };
    console.debug('handleDoneEditCheckListClick', eventData)
  }

  handleDeleteCheckListClick() {
    let eventData = {
      checkListId: this.checkList.id
    };
    console.debug('handleDeleteCheckListClick', eventData)
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

    let eventData = {
      checkListId: this.checkList.id,
      checkListItemId: itemId,
      content: this.itemsEditModeValue[itemId],
    };

    console.debug('handleDoneEditItemClick', eventData)
  }

  handleDeleteItemClick(itemId) {
    let eventData = {
      checkListId: this.checkList.id,
      checkListItemId: itemId
    };

    console.debug('handleDeleteItemClick', eventData)
  }

  handleAddItemClick() {
    let eventData = {
      checkListId: this.checkList.id,
      content: this.newItemValue
    };

    console.debug('handleAddItemClick', eventData)
  }

  handleCheckItemClick(itemId) {
    let eventData = {
      checkListId: this.checkList.id,
      checkListItemId: itemId
    };

    console.debug('handleCheckItemClick', eventData)
  }
}
