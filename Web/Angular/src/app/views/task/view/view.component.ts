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
  };
  statuses: any[];
  priorities: any[];
  attachmentForm: FormGroup;
  errors: {
    attachment: string
  };

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
      openAssignModal: false
    };
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
    })
  }

  handleOnCommentBtnClick() {

  }

  // TODO preselected assgined

  handleOnAssignBtnClick() {
    const onConfirm = (selectedUsers) => {
      console.debug('handleOnAssignBtnClick', selectedUsers);
    };
    this.isLoading.openAssignModal = true;
    this.userServcice.getUserOfProject(this.foundTask.project.id)
      .then(value => {
        const initialState = {
          confirmCallback: onConfirm,
          selectedUsers: this.foundTask.assignees,
          allProjectUsers: value,
          title: 'Assignment',
          // message: 'Please select project members to assign them to this task or de-select members to remove them from assignees list'
        };
        this.modalService.show(SelectUsersModalComponent, {initialState, class: 'modal-dialog'});
        this.isLoading.openAssignModal = false
      })
      .catch(reason => {
        this.showErrorModal('An error has occured while trying to open assign pop-up ');
        this.isLoading.openAssignModal = false
      });
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
