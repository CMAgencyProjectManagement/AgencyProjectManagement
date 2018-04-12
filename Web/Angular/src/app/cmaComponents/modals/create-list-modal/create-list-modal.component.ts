import {Component, OnInit, ViewChild} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-create-list-modal',
  templateUrl: './create-list-modal.component.html',
  styleUrls: ['./create-list-modal.component.scss']
})
export class CreateListModalComponent implements OnInit {
  confirmCallback: any;
  cancelCallback: any;
  closeCallback: any;
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
