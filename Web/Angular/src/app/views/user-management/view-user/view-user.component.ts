import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from 'app/interfaces/user';
import * as _ from 'lodash';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  @ViewChild('searchUsername') input: ElementRef;
  // all user
  users: User[];
  // https://datatables.net/reference/option/
  isPageLoading: boolean;
  datatableOptions: DataTables.Settings = {
    'searching': false,
    'lengthChange': false,
    'columnDefs': [
      {
        'searchable': false,
        'orderable': false,
        'targets': [1, 8]
      }
    ]
  };

  constructor(
    private userService: UserService) {
    this.isPageLoading = true;
  }

  ngOnInit() {
    this.userService.getAllUser()
      .then(value => {
          this.users = value;
          this.isPageLoading = false;
        }
      )
  }

  // search by username
  search(searchStr: string) {
    this.isPageLoading = true;
    this.userService.getAllUser()
      .then(users => {
        this.users = _.filter(users, (user: User) => {
            let result;
            result = user.name && _.toLower(user.name).indexOf(_.toLower(searchStr)) >= 0;

            if (!result) {
              result = user.username && _.toLower(user.username).indexOf(_.toLower(searchStr)) >= 0;
            }

            if (!result) {
              result = user.birthdate && _.toLower(user.birthdate).indexOf(_.toLower(searchStr)) >= 0;
            }

            if (!result) {
              result = user.team && _.toLower(user.team.name).indexOf(_.toLower(searchStr)) >= 0;
            }

            if (!result) {
              if (user.isAdmin) {
                result = _.toLower('Admin').indexOf(_.toLower(searchStr)) >= 0;
              } else if (user.isManager) {
                result = _.toLower('Manager').indexOf(_.toLower(searchStr)) >= 0;
              } else {
                result = _.toLower('Staff').indexOf(_.toLower(searchStr)) >= 0;
              }
            }

            if (!result) {
              if (user.isActive) {
                result = _.toLower('Active').indexOf(_.toLower(searchStr)) >= 0;
              } else {
                result = _.toLower('Banned').indexOf(_.toLower(searchStr)) >= 0;
              }
            }

            return result;
          }
        );
        this.isPageLoading = false;
      })
      .catch(reason => {
        this.isPageLoading = false;
      });

  }

}
