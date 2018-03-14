import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sort-icon',
  templateUrl: './sort-icon.component.html',
  styleUrls: ['./sort-icon.component.scss']
})
export class SortIconComponent implements OnInit {
  @Input() isDesc: string;

  constructor() { }

  ngOnInit() {
  }

}
