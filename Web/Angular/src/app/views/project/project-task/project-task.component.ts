import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../interfaces/project';
import {Cursor, StoreService} from '../../../services/tree.service';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorModalComponent} from '../../../cmaComponents/modals';
import {Location} from '@angular/common';
import {BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.scss'],

})
export class ProjectTaskComponent implements OnInit {
  public myModal;
  public largeModal;
  public smallModal;
  public primaryModal;
  public successModal;
  public warningModal;
  public dangerModal;
  public infoModal;
  projects: Project[];
  viewForm: FormGroup
  foundProject: Project;
  projectID: number;
  project: Project;
  isPageLoading: boolean;
  tokenCursor: Cursor;
  isLoading: boolean;
  errorMessage: string;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private modalService: BsModalService,
  ) {
    this.isPageLoading = true;
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.projectID = Number(id);
      this.loadData();
    } else {
      this.showErrorModal(`Invalid task id "${id}"`, true);
    }
  }

  loadData() {
    this.projectService.getProject(this.projectID)
      .then(value => {
        this.foundProject = value;
      })
      .catch(reason => {
        this.showErrorModal(reason.Message, true);
      })
  }

  onNeedRefresh() {
    this.loadData();
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
