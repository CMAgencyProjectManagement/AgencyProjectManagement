import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../../interfaces/comment';
import {User} from '../../interfaces/user';
import {StoreService} from '../../services/tree.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() onEdit = new EventEmitter<any>();
  isCollapsed: boolean;
  editable: boolean;
  currentUser: User;
  status: { isopen: boolean } = {isopen: false};

  constructor(private storeService: StoreService) {
    this.currentUser = this.storeService.get(['currentUser']) as User;
    this.isCollapsed = true;
  }

  ngOnInit() {
    this.editable = this.currentUser.id == this.comment.createdByID;
  }

  containerClick() {
    this.isCollapsed = !this.isCollapsed;
  }

  handleEditBtnClick($event) {
    $event.stopPropagation();
    this.onEdit.emit(this.comment);
  }
}
