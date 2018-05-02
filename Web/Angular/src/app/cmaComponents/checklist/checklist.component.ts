import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CheckList, CheckListItem} from '../../interfaces/checkList';
import {ChecklistService} from '../../services/checklist.service';
import * as _ from 'lodash';

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

  constructor(private checkListService: ChecklistService) {
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
    this.handleEditCheckListClick();
    let eventData = {
      checkListId: this.checkList.id,
      content: this.checkListEditValue
    };

    this.onEditChecklist.emit(eventData);
    console.debug('handleDoneEditCheckListClick', eventData)
  }

  handleDeleteCheckListClick() {
    let eventData = {
      checkListId: this.checkList.id
    };
    this.onDeleteCheckList.emit(eventData);
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

    this.onEditCheckListItem.emit(eventData);
    this.checkListService.editChecklistItem(eventData.checkListId, eventData.checkListItemId, eventData.content)
      .catch(reason => {
        console.debug('handleDoneEditItemClick - error', reason.Message);
      });
  }

  handleDeleteItemClick(itemId) {
    let eventData = {
      checkListId: this.checkList.id,
      checkListItemId: itemId
    };
    this.checkListService.deleteChecklistItem(eventData.checkListId, eventData.checkListItemId)
      .then(value => {
        this.checkList.items = _.filter(this.checkList.items, (item: CheckListItem) => {
          return item.id !== itemId;
        })
      })
      .catch(reason => {
        console.debug('handleDeleteItemClick - error', reason.Message);
      })
  }

  handleAddItemClick() {
    let eventData = {
      checkListId: this.checkList.id,
      content: this.newItemValue
    };
    this.checkListService.createChecklistItem(eventData.checkListId, eventData.content)
      .then(value => {
        this.checkList = value;
        this.newItemValue = '';
      })
      .catch(reason => {
        console.debug('handleAddItemClick - error', reason.Message);
      });
  }

  handleCheckItemClick(itemId) {
    let eventData = {
      checkListId: this.checkList.id,
      checkListItemId: itemId
    };

    this.checkListService.checkChecklistItem(eventData.checkListId, eventData.checkListItemId)
      .catch(reason => console.debug('handleCheckItemClick - error', eventData, reason.message));


  }
}
