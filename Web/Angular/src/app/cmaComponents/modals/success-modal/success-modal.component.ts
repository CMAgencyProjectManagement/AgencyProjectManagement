import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {
  message: string;
  closeCallback: any;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  handleOnClose() {
    if (this.closeCallback) {
      this.closeCallback();
    }
    this.bsModalRef.hide()
  }
}
