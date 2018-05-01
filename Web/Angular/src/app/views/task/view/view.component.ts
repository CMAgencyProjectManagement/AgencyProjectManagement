import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Task} from '../../../interfaces/task'
import {TaskService} from '../../../services/task.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {BsModalService} from 'ngx-bootstrap';
import {CommentModalComponent, ConfirmModalComponent, ErrorModalComponent, SelectUsersModalComponent} from '../../../cmaComponents/modals';
import {FormControl, FormGroup} from '@angular/forms';
import {UploadService} from '../../../services/upload.service';
import {Attachment} from '../../../interfaces/attachment';
import * as _ from 'lodash';
import {UserService} from '../../../services/user.service';
import {User} from '../../../interfaces/user';
import {CommentService} from '../../../services/comment.service';
import {Comment} from '../../../interfaces/comment';
import {StoreService} from '../../../services/tree.service';
import {SelectStatusModalComponent} from '../../../cmaComponents/modals';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @ViewChild('attachmentInput') attachmentInput: ElementRef;
  foundTask: Task;
  managementMode: boolean;
  staffMode: boolean;
  isLoading: {
    page: boolean
    attachmentUpload: boolean
    attachmentRemove: boolean[]
    openAssignModal: boolean
    openUnAssignModal: boolean
    done: boolean,
    setStatus: boolean,
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
  needReviewMode: boolean;
  pageMode: {
    manager: boolean,
    staff: boolean,
    admin: boolean,
    done: boolean,
    needReview: boolean,
  };
  currentUser: User;

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
    this.currentUser = this.storeService.get(['currentUser']) as User;
    this.managementMode = currentUser.isManager || currentUser.isAdmin;
    this.isLoading = {
      page: true,
      attachmentUpload: false,
      attachmentRemove: [],
      openAssignModal: false,
      openUnAssignModal: false,
      done: false,
      comment: false,
      editComment: false,
      setStatus: false
    };
    this.needReviewMode = false;
    this.openCommentForm = false;
    this.resetErrors();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let taskId = params['id'];
      if (Number(taskId)) {
        this.isLoading.page = true;
        this.loadData(taskId);
      } else {
        this.showErrorModal(`${taskId} is not a valid ID`, true);
      }
    });
    this.attachmentForm = new FormGroup({
      attachment: new FormControl(undefined),
    });
  }

  loadData(taskId) {
    this.taskService.getTaskDetail(taskId)
      .then(value => {
        this.foundTask = value as Task;
        this.isLoading.page = false;
        this.updatePageMode();
      })
      .catch(reason => {
        console.debug('ViewComponent-onInit', reason);
        this.showErrorModal(reason.Message, true);
      })
  }

  updatePageMode() {
    this.pageMode = {
      done: this.foundTask.statusText == 'Done',
      needReview: this.foundTask.statusText == 'Need review',
      manager: this.currentUser.isManager,
      admin: this.currentUser.isAdmin,
      staff: !this.currentUser.isManager && !this.currentUser.isAdmin,
    }
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
          this.isLoading.comment = false;
        }
      )
      .catch(reason => {
        this.showErrorModal(reason.Message);
        console.debug('handleAddCommentBtnClick', reason);
        this.isLoading.comment = false;
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
          this.showErrorModal(reason.Message);
          this.isLoading.openAssignModal = false
        })
    };
    this.isLoading.openAssignModal = true;
    this.userService.getUserOfProject(this.foundTask.project.id)
      .then((value: User[]) => {
        const currentAssigneesIds = _.map(this.foundTask.assignees, 'id');
        const pool = _.filter(value, (user: User) => !currentAssigneesIds.includes(user.id) && !user.isManager);
        const selected = _.filter(value, (user: User) => currentAssigneesIds.includes(user.id));

        const initialState = {
          confirmCallback: onConfirm,
          cancelCallback: () => {
            this.isLoading.openAssignModal = false;
          },
          closeCallback: () => {
            this.isLoading.openAssignModal = false;
          },
          userPool: pool,
          selectedUser: selected,
          title: `Assign`,
          confirmButtonText: 'Assign'
        };
        this.modalService.show(SelectUsersModalComponent,
          {initialState, class: 'modal-dialog', ignoreBackdropClick: true});
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
          this.showErrorModal(reason.Message);
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
    this.modalService.show(SelectUsersModalComponent, {initialState, class: 'modal-dialog', ignoreBackdropClick: true});
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
          this.showErrorModal(reason.Message);
          this.isLoading.done = false;
        })
    };

    const initialState = {
      message: `Are you sure you want to finish this task`,
      confirmCallback: onConfirm
    };
    this.modalService.show(ConfirmModalComponent, {initialState, class: 'modal-dialog', ignoreBackdropClick: true});
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
          this.attachmentInput.nativeElement.value = '';
        })
        .catch(reason => {
          this.errors.attachment = reason.Data;
          this.isLoading.attachmentUpload = false;
        })
    } else {
      this.resetErrors();
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
    this.modalService.show(ConfirmModalComponent, {initialState, class: 'modal-dialog'});
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
    this.modalService.show(CommentModalComponent, {initialState, class: 'modal-dialog'});
  }

  handleSetStatusBtnClick() {
    this.isLoading.setStatus = true;
    const initialState = {
      task: this.foundTask,
      confirmCallback: (task) => {
        this.foundTask = task;
        this.updatePageMode();
        this.isLoading.setStatus = false;
      },
      cancelCallback: () => {
        this.isLoading.setStatus = false;
      },
      closeCallback: () => {
        this.isLoading.setStatus = false;
      }
    };
    this.modalService.show(SelectStatusModalComponent, {initialState, class: 'modal-dialog', ignoreBackdropClick: true});
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
    this.modalService.show(ErrorModalComponent, {initialState, class: 'modal-dialog modal-danger'});
  }
}
