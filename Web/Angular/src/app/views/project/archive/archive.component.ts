import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProjectService} from '../../../services/project.service';
import { BsModalService } from 'ngx-bootstrap';
import { FormControl,
  FormGroup,
  Validators,} from '@angular/forms';
  import {Cursor, StoreService} from '../../../services/tree.service'
  import {serverPath} from '../../../_serverPath';
  import * as request from 'superagent';
import { TaskService } from '../../../services/task.service';
import {
  CommentModalComponent,
  ConfirmModalComponent,
  ErrorModalComponent,
  SelectUsersModalComponent,
  SelectTeamsModalComponent,
  SelectMembersModalComponent
} from '../../../cmaComponents/modals';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
