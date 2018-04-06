import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss']
})
export class UserIconComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
