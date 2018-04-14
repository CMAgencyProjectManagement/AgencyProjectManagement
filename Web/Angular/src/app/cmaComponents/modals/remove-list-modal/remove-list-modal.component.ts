import {Component, OnInit, ViewChild} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-remove-list-modal',
  templateUrl: './remove-list-modal.component.html',
  styleUrls: ['./remove-list-modal.component.scss']
})
export class RemoveListModalComponent implements OnInit {
  confirmCallback: any;
  cancelCallback: any;
  closeCallback: any;
  listID: number;

  @ViewChild('listNameInput') listNameInput;
  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }

  handleOnConfirm() {
    if (this.confirmCallback) {
      this.confirmCallback(this.listID);
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
