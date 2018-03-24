import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../interfaces/team';

@Component({
  selector: 'app-assign-members-card',
  templateUrl: './assignMembers-card.component.html',
  styleUrls: ['./assignMembers-card.component.scss']
})
export class AssignMembersCardComponent implements OnInit {
  @Input() title: Team;
  @Input() leftTableName: Team;
  @Input() rightTableName: Team;

  constructor() {

  }

  ngOnInit() {
  }
}
