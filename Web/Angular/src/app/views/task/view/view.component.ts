import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Task} from '../../../interfaces/task'
import {TaskService} from '../../../services/task.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {BsModalService} from 'ngx-bootstrap';
import {ErrorModalComponent} from '../../../cmaComponents/modals';
import {FormControl, FormGroup} from '@angular/forms';
import {UploadService} from '../../../services/upload.service';
import {Attachment} from '../../../interfaces/attachment';

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
  };
  statuses: any[];
  priorities: any[];
  attachmentForm: FormGroup;
  errors: {
    attachment: string
  };

  constructor(private taskService: TaskService,
              private uploadService: UploadService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private modalService: BsModalService) {
    this.isLoading = {
      page: true,
      attachmentUpload: false,
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
          this.isLoading.attachmentUpload = false;
          this.showErrorModal(reason.Data);
        })
    } else {
      this.resetErrors();
      // show some form of success message here
    }
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
