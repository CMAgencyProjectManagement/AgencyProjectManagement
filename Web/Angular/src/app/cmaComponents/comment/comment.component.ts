import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../../interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() onEdit = new EventEmitter<any>();
  isCollapsed: boolean;
  status: { isopen: boolean } = {isopen: false};

  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

  containerClick() {
    this.isCollapsed = !this.isCollapsed;
  }

  handleEditBtnClick($event) {
    $event.stopPropagation();
    this.onEdit.emit(this.comment);
  }
}
