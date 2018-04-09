import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-assign-members-card',
  templateUrl: './assignMembers-card.component.html',
  styleUrls: ['./assignMembers-card.component.scss']
})
export class AssignMembersCardComponent implements OnInit {
  @Input() title: string;
  @Input() leftTableName: string;
  @Input() rightTableName: string;
  @Input() leftUser: User;
  @Input() rightUser: User;
  @Input() assignLoading: boolean;
  @Input() unAssignLoading: boolean;
  @Output() onAssign = new EventEmitter<number[]>();
  @Output() onUnAssign = new EventEmitter<number[]>();
  @Output() onSetRole = new EventEmitter<any>();
  leftTableSelectedIds: number[];
  rightTableSelectedIds: number[];

  ngOnInit() {
  }

  handleLeftTableSelect(userIds: number[]) {
    this.leftTableSelectedIds = userIds;
  }

  handleRightTableSelect(userIds: number[]) {
    this.rightTableSelectedIds = userIds;
  }

  assign() {
    this.onAssign.emit(this.leftTableSelectedIds)
  }

  unAssign() {
    this.onUnAssign.emit(this.rightTableSelectedIds)
  }

  setRole(event) {
    this.onSetRole.emit(event);
  }
}
