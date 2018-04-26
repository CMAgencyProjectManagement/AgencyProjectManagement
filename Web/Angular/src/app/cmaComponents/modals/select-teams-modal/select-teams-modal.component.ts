import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import * as _ from 'lodash';
import {Team} from '../../../interfaces/team';

@Component({
  selector: 'app-select-teams-modal',
  templateUrl: './select-teams-modal.component.html',
  styleUrls: ['./select-teams-modal.component.scss']
})
export class SelectTeamsModalComponent implements OnInit {
  confirmCallback: any;
  cancelCallback: any;
  closeCallback: any;
  title: string;
  confirmButtonText: string;
  message: string;
  selectedTeams: Team[];
  selectedTeamIds: number[];
  teamPool: Team[];

  constructor(private bsModalRef: BsModalRef) {
    if (!this.confirmButtonText) {
      this.confirmButtonText = 'Confirm';
    }
  }

  ngOnInit() {
    if (this.selectedTeams) {
      this.selectedTeamIds = _.map(this.selectedTeams, 'id');
    } else {
      this.selectedTeams = [];
      this.selectedTeamIds = [];
    }
  }


  onChange($event) {
    this.selectedTeams = _
      .chain(this.selectedTeamIds)
      .map((id) => {
        return _.find(this.teamPool, (team: Team) => team.id == id)
      })
      .value();
  }

  handleOnConfirm() {
    if (this.confirmCallback) {
      this.confirmCallback(this.selectedTeams);
    }
    this.bsModalRef.hide()
  }

  handleOnCancel() {
    if (this.cancelCallback) {
      this.cancelCallback();
    }
    this.bsModalRef.hide()
  }

  handleOnClose() {
    if (this.closeCallback) {
      this.closeCallback();
    }
    this.bsModalRef.hide()
  }
}
