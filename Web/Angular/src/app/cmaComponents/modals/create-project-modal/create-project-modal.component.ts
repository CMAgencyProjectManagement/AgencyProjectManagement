import {Component, OnInit, ViewChild} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-create-project-modal',
  templateUrl: './create-project-modal.component.html',
  styleUrls: ['./create-project-modal.component.scss']
})
export class CreateProjectModalComponent implements OnInit {
  confirmCallback: any;
  cancelCallback: any;
  closeCallback: any;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }

  handleOnConfirm() {
    
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
