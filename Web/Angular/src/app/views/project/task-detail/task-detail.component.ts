import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../interfaces/project';
import { Cursor, StoreService } from '../../../services/tree.service';
import {
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.scss'],

})
export class TaskDetailComponent implements OnInit {
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
    tokenCursor: Cursor;
    isLoading: boolean;
    errorMessage: string;
    taskdetailForm:FormGroup;
    items: string[] = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
    ];


    constructor(private projectService: ProjectService, private router: Router
    ) {
    }

    ngOnInit() {
        this.projectID = Number(this.GetURLParameter('projectID'));
        this.projectService.getAllProjects()
            .then(data => {
                this.projects = data;
                for (let i = 0; i < this.projects.length; i++) {
                    if (this.projects[i].id == this.projectID) {
                        this.foundProject = this.projects[i];
                    }
                }
            })
            .catch(reason => {
                console.debug('ProjectUpdateComponent', reason);
            })
    }
    GetURLParameter(sParam) {
        var sPageURL = window.location.href;
        var sURLVariables = sPageURL.split('?');
        var sUsername = sURLVariables[1].split('=');
        return sUsername[1];
    }
    onHidden(): void {
        console.log('Dropdown is hidden');
    }
    onShown(): void {
        console.log('Dropdown is shown');
    }
    isOpenChange(): void {
        console.log('Dropdown state is changed');
    }

    status: { isOpen: boolean } = { isOpen: false };

    toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isOpen = !this.status.isOpen;
    }

    change(value: boolean): void {
        this.status.isOpen = value;
    }

    disabled: boolean = false;

    isDropup: boolean = true;

    autoClose: boolean = false;
}




