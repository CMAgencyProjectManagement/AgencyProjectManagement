import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Task } from '../../../interfaces/task'
import { TaskService } from '../../../services/task.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap';
import { CommentModalComponent, ConfirmModalComponent, ErrorModalComponent, SelectUsersModalComponent } from '../../../cmaComponents/modals';
import { FormControl, FormGroup } from '@angular/forms';
import { UploadService } from '../../../services/upload.service';
import { Attachment } from '../../../interfaces/attachment';
import * as _ from 'lodash';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';
import { CommentService } from '../../../services/comment.service';
import { Comment } from '../../../interfaces/comment';
import { forEach } from '@angular/router/src/utils/collection';
import { StoreService } from '../../../services/tree.service';
import { SelectStatusModalComponent } from '../../../cmaComponents/modals/select-status-modal/select-status-modal.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @ViewChild('attachmentInput') attachmentInput: ElementRef;
  foundTask: Task;
  managementMode: boolean;
  isLoading: {
    page: boolean
    attachmentUpload: boolean
    attachmentRemove: boolean[]
    openAssignModal: boolean
    openUnAssignModal: boolean
    done: boolean,
    comment: boolean,
    editComment: boolean
  };
  statuses: any[];
  priorities: any[];
  attachmentForm: FormGroup;
  commentBoxModel: string;
  errors: {
    attachment: string
  };
  openCommentForm: boolean;

  constructor(private taskService: TaskService,
    private uploadService: UploadService,
    private userService: UserService,
    private commentService: CommentService,
    private storeService: StoreService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: BsModalService) {
    let currentUser = this.storeService.get(['currentUser']) as User;
    this.managementMode = currentUser.isManager || currentUser.isAdmin;
    this.isLoading = {
      page: true,
      attachmentUpload: false,
      attachmentRemove: [],
      openAssignModal: false,
      openUnAssignModal: false,
      done: false,
      comment: false,
      editComment: true,
    };
    this.openCommentForm = false;
    this.resetErrors();
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.taskService.getTaskDetail(Number(id))
        .then(value => {
          this.foundTask = value as Task;
          this.isLoading.page = false;
        })
        .catch(reason => {
          console.debug('ViewComponent-onInit', reason);
          this.showErrorModal(reason.message);
          this.isLoading.page = false;
        })
    } else {
      this.showErrorModal(`${id} is not a valid ID`);
    }

    this.attachmentForm = new FormGroup({
      attachment: new FormControl(undefined),
    });

  }

  handleOnCommentBtnClick() {
    this.openCommentForm = true;
  }

  handleAddCommentBtnClick() {
    this.isLoading.comment = true;
    let content = this.commentBoxModel;
    this.commentService.createComment(content, this.foundTask.id)
      .then(value => {
        let comment = value as Comment;
        this.foundTask.comments.push(comment);
        this.isLoading.comment = true;
      }
      )
      .catch(reason => {
        this.showErrorModal('Comment fail');
        console.debug('handleAddCommentBtnClick', reason);
        this.isLoading.comment = true;
      })
  }

  handleCancelCommentBtnClick() {
    this.openCommentForm = false;
    this.commentBoxModel = '';
  }

  handleOnAssignBtnClick() {
    const onConfirm = (selectedUsers: User[]) => {
      let selectedIds = _.map(selectedUsers, 'id');
      this.taskService.assignTask(this.foundTask.id, selectedIds)
        .then(value => {
          this.foundTask.assignees = _.concat(this.foundTask.assignees, selectedUsers);
          this.isLoading.openAssignModal = false
        })
        .catch(reason => {
          this.showErrorModal('Assign fail');
          this.isLoading.openAssignModal = false
        })
    };
    this.isLoading.openAssignModal = true;
    this.userService.getUserOfProject(this.foundTask.project.id)
      .then(value => {
        const pool = [];
        for (let user of value as User[]) {
          let removeFlag = false;
          for (let assignee of this.foundTask.assignees) {
            if (assignee.id == user.id) {
              removeFlag = true;
            }
          }
          if (!removeFlag) {
            pool.push(user);
          }
        }

        const initialState = {
          confirmCallback: onConfirm,
          cancelCallback: () => {
            this.isLoading.openAssignModal = false;
          },
          closeCallback: () => {
            this.isLoading.openAssignModal = false;
          },
          userPool: pool,
          title: `Assign`,
          confirmButtonText: 'Assign'
        };
        this.modalService.show(SelectUsersModalComponent, { initialState, class: 'modal-dialog' });
      })
      .catch(reason => {
        this.showErrorModal('An error has occurred while trying to open assign pop-up ');
        this.isLoading.openAssignModal = false
      });
  }

  handleOnUnAssignBtnClick() {
    this.isLoading.openUnAssignModal = true;
    const onConfirm = (selectedUsers: User[]) => {
      let selectedIds = _.map(selectedUsers, 'id');
      this.taskService.unassignTask(this.foundTask.id, selectedIds)
        .then(value => {
          this.foundTask.assignees = _.filter(this.foundTask.assignees, (user: User) => {
            return !selectedIds.includes(user.id)
          });
          this.isLoading.openUnAssignModal = false;
        })
        .catch(reason => {
          this.showErrorModal('Un-Assign fail');
          this.isLoading.openUnAssignModal = false;
        })
    };
    const initialState = {
      confirmCallback: onConfirm,
      cancelCallback: () => {
        this.isLoading.openUnAssignModal = false;
      },
      closeCallback: () => {
        this.isLoading.openUnAssignModal = false;
      },
      userPool: this.foundTask.assignees,
      title: `Un-assign`,
      confirmButtonText: 'Un-assign'
    };
    this.modalService.show(SelectUsersModalComponent, { initialState, class: 'modal-dialog' });
  }

  handleOnNeedReviewBtnClick() {
    const onConfirm = () => {
      this.isLoading.done = true;
      this.taskService.finishTask(this.foundTask.id)
        .then(value => {
          this.foundTask = value;
          this.isLoading.done = false;
        })
        .catch(reason => {
          this.showErrorModal('Finish task fail');
          this.isLoading.done = false;
        })
    };

    const initialState = {
      message: `Are you sure you want to finish this task!`,
      confirmCallback: onConfirm
    };
    this.modalService.show(ConfirmModalComponent, { initialState, class: 'modal-dialog' });
  }

  handleUploadAttachmentClick() {
    const formValue = this.attachmentForm.value;
    if (formValue.attachment) {
      this.resetErrors();
      this.isLoading.attachmentUpload = true;
      this.uploadService.uploadAttachment(formValue.attachment, this.foundTask.id)
        .then(value => {
          let attachment = value as Attachment;
          this.foundTask.attachments.push(attachment);
          this.isLoading.attachmentUpload = false;
        })
        .catch(reason => {
          this.errors.attachment = reason.Data;
          this.isLoading.attachmentUpload = false;
        })
    } else {
      this.resetErrors();
      // show some form of success message here
    }
  }

  handleDeleteAttachmentClick(attachmentId) {
    const onConfirm = () => {
      this.isLoading.attachmentRemove[attachmentId] = true;
      this.uploadService.deleteAttachment(attachmentId)
        .then(value => {
          let removedItemId = value.id as number;
          this.foundTask.attachments = _.filter(this.foundTask.attachments, item => {
            return item.ID !== removedItemId;
          });
          this.isLoading.attachmentRemove[attachmentId] = false;
        })
        .catch(reason => {
          this.isLoading.attachmentRemove[attachmentId] = false;
          this.showErrorModal(reason.Message);
        })
    };
    const initialState = {
      message: `Are you sure you want to delete attachment ?`,
      confirmCallback: onConfirm
    };
    this.modalService.show(ConfirmModalComponent, { initialState, class: 'modal-dialog' });
  }

  handleEditComment(comment) {
    const confirmCallback = (newComment: Comment) => {
      this.commentService.updateComment(newComment.ID, newComment.body)
        .then((returnedComment: Comment) => {
          for (let i = 0; i < this.foundTask.comments.length; i++) {
            if (this.foundTask.comments[i].ID == returnedComment.ID) {
              this.foundTask.comments[i] = returnedComment;
              break;
            }
          }
        })
        .catch(reason => {
          this.showErrorModal(reason.Data);
        })
    };
    const initialState = {
      comment: comment,
      confirmCallback: confirmCallback,
    };
    this.modalService.show(CommentModalComponent, { initialState, class: 'modal-dialog' });
  }

  handleSetStatusBtnClick() {
    this.modalService.show(SelectStatusModalComponent, { class: 'modal-dialog' });
  }

  attachmentFileChange(fileInput: any) {
    let file = fileInput.target.files[0];
    this.attachmentForm.controls['attachment'].setValue(file);
  }

  resetErrors() {
    this.errors = {
      attachment: ''
    }
  }

  private showErrorModal(message: string, isNavigateBack: boolean = false) {
    const initialState = {
      closeCallback: () => {
        if (isNavigateBack) {
          this.location.back();
        }
      },
      message: message
    };
    this.modalService.show(ErrorModalComponent, { initialState, class: 'modal-dialog modal-danger' });
  }
}
