import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  isCollapsed: boolean;

  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

  containerClick() {
    this.isCollapsed = !this.isCollapsed;
  }
}
