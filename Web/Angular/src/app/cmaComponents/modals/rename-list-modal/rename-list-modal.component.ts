import {Component, OnInit, ViewChild} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-rename-list-modal',
  templateUrl: './rename-list-modal.component.html',
  styleUrls: ['./rename-list-modal.component.scss']
})
export class RenameListModalComponent implements OnInit {
  confirmCallback: any;
  cancelCallback: any;
  closeCallback: any;
  defaultlistname: string;
  @ViewChild('listNameInput') listNameInput;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }

  handleOnConfirm() {
    if (this.confirmCallback) {
      this.confirmCallback(this.listNameInput.nativeElement.value);
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
