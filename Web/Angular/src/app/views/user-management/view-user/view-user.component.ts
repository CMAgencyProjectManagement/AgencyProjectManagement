import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from 'app/interfaces/user';
import {DataTableDirective} from 'angular-datatables';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
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
  @ViewChild(DataTableDirective) datatableElement: DataTableDirective;
  datatableOptions: DataTables.Settings = {
    searching: true,
    lengthChange: false,
    columnDefs: [
      {
        searchable: false,
        orderable: false,
        targets: [0, 7]
      }
    ],
    order: [
      [6, 'desc']
    ]
  };

  constructor(private router: Router,
    private route: ActivatedRoute,
    private location: Location,
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
    this.datatableElement.dtInstance.then(
      (dtInstance: DataTables.Api) => dtInstance.search(searchStr).draw()
    );
  }
}
