import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Task} from '../../../interfaces/task'
import {TaskService} from '../../../services/task.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {BsModalService} from 'ngx-bootstrap';
import {ErrorModalComponent, SelectUsersModalComponent} from '../../../cmaComponents/modals';
import {FormControl, FormGroup} from '@angular/forms';
import {UploadService} from '../../../services/upload.service';
import {Attachment} from '../../../interfaces/attachment';
import * as _ from 'lodash' ;
import {UserService} from '../../../services/user.service';
import {User} from '../../../interfaces/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @ViewChild('attachmentInput') attachmentInput: ElementRef;
  foundTask: Task;
  attachments: Attachment[];
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
  commentForm: FormGroup;
  errors: {
    attachment: string
  };
  openCommentForm: boolean;

  constructor(private taskService: TaskService,
              private uploadService: UploadService,
              private userServcice: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private modalService: BsModalService) {
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
          this.attachments = this.foundTask.attachments;
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

    this.commentForm = new FormGroup({
      attachment: new FormControl(undefined),
    });
  }

  handleOnCommentBtnClick() {
    this.openCommentForm = true;
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
    this.userServcice.getUserOfProject(this.foundTask.project.id)
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
        };
        this.modalService.show(SelectUsersModalComponent, {initialState, class: 'modal-dialog'});
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
    };
    this.modalService.show(SelectUsersModalComponent, {initialState, class: 'modal-dialog'});
  }

  handleOnDoneBtnClick() {
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
  }

  handleUploadAttachmentClick() {
    const formValue = this.attachmentForm.value;
    if (formValue.attachment) {
      this.resetErrors();
      this.isLoading.attachmentUpload = true;
      this.uploadService.uploadAttachment(formValue.attachment, this.foundTask.id)
        .then(value => {
          let attachment = value as Attachment;
          this.attachments.push(attachment);
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
    this.isLoading.attachmentRemove[attachmentId] = true;
    this.uploadService.deleteAttachment(attachmentId)
      .then(value => {
        let removedItemId = value.id as number;
        this.attachments = _.filter(this.attachments, item => {
          return item.ID !== removedItemId;
        });
        this.isLoading.attachmentRemove[attachmentId] = false;
      })
      .catch(reason => {
        this.isLoading.attachmentRemove[attachmentId] = false;
        this.showErrorModal(reason.Data);
      })
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
