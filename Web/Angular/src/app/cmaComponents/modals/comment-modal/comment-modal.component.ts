import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Comment} from '../../../interfaces/comment';
import * as _ from 'lodash';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss']
})
export class CommentModalComponent implements OnInit {
  confirmCallback: any;
  cancelCallback: any;
  closeCallback: any;
  comment: Comment;
  commentBoxModel: string;
  title: string;
  confirmButtonText: string;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
    if (this.comment) {
      this.title = 'Edit comment';
      this.confirmButtonText = 'Save change';
      this.commentBoxModel = this.comment.body;
    } else {
      this.title = 'Add comment';
      this.confirmButtonText = 'Add';
    }
  }

  handleOnConfirm() {
    if (this.confirmCallback) {
      let comment = _.clone(this.comment);
      comment.body = this.commentBoxModel;
      this.confirmCallback(comment);
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
