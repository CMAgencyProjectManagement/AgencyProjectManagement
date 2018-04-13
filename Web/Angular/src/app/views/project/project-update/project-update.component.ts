import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../interfaces/project';
import {Cursor} from '../../../services/tree.service';
import {Location} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ErrorModalComponent} from '../../../cmaComponents/modals/error-modal/error-modal.component';
import {User} from '../../../interfaces/user';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.scss'],

})
export class ProjectUpdateComponent implements OnInit {
  projectID: number;
  foundProject: Project;
  errors: {
    projectName: string;
    projectDescription: string;
  };
  tokenCursor: Cursor;
  isLoading: boolean;
  message: string;
  updateForm: FormGroup;

  constructor(
    private projectService: ProjectService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.isLoading = true;
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.projectID = Number(id);
      this.loadProject();
    } else {
      this.showErrorModal('Invalid id', true);
    }
  }

  setDefaultValue(user: User) {
    this.updateForm.controls['email'].setValue(user.email);
    this.updateForm.controls['phone'].setValue(user.phone);
    if (user.team) {
      this.updateForm.controls['team'].setValue(user.team.id);
    }
    this.updateForm.controls['isActive'].setValue(user.isActive);
  }

  loadProject() {
    this.projectService.getAllProjects()
      .then(data => {
        let projects = data as Project[];
        this.foundProject = projects.find(project => {
          return project.id === this.projectID;
        });
        if (this.foundProject) {
          this.isLoading = false;
        } else {
          this.showErrorModal(`Project with id ${this.projectID} not found`, true);
        }
      })
      .catch(reason => {
        this.showErrorModal(reason.Message);
        console.debug('ProjectUpdateComponent', reason);
      })
  }

  updateProject() {

    // this.projectService.updateProject();
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
