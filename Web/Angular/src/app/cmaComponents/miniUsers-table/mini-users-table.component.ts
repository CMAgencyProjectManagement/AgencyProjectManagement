import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as _ from 'lodash';
import {User} from '../../interfaces/user';


@Component({
  selector: 'app-mini-users-table',
  templateUrl: './mini-users-table.html',
  styleUrls: ['./mini-users-table.component.scss']
})
export class MiniUsersTableComponent implements OnInit {
  @Input() users: User[];
  @Output() onSelectedChange = new EventEmitter<number[]>();
  selectedIds: number[];
  smallUsersTableOpt: DataTables.Settings = {
    searching: true,
    lengthChange: false,
    paging: false,
    scrollY: '400',
    columnDefs: [
      {
        searchable: false,
        orderable: false,
        targets: [1],
      },
      {
        searchable: false,
        orderable: false,
        visible: false,
        targets: [0],
      }
    ],
    rowCallback: this.handleRowCallback.bind(this)
  };

  constructor() {

  }

  ngOnInit() {
  }

  handleRowCallback(row: Node, data: any[] | Object, index: number) {
    $('td', row).unbind('click');
    $('td', row).bind('click', () => {
      let selectedUserId = data[0] as number;
      let classesAtr = row.attributes.getNamedItem('class');
      let classes = _.split(classesAtr.value, ' ') as string[];
      let isSelected = _.indexOf(classes, 'selected') >= 0;
      if (isSelected) {
        this.selectedIds = _.filter(this.selectedIds, userId => {
          return userId !== selectedUserId;
        });
        classes = _.filter(classes, 'selected');
      } else {
        this.selectedIds.push(selectedUserId);
        classes.push('selected');
      }
      this.onSelectedChange.emit(this.selectedIds);
      classesAtr.value = _.join(classes, ' ');
    });
    return row;
  }
}
