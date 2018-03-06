import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService, } from '../../../services/user.service';
import { PagerService } from '../../../services/pager.service';
import { User } from 'app/interfaces/user';
import { Pager } from '../../../interfaces/pager';
import { Directive, HostListener, Input } from '@angular/core';
import * as _ from 'lodash';
import {
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Cursor, StoreService } from '../../../services/tree.service';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { DISABLED } from '@angular/forms/src/model';
@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
    updateForm: FormGroup;
    currentAccountCursor: Cursor;
    tokenCursor: Cursor;
    isLoading: boolean;
    errorMessage: string;
    users: User[];
    foundUser: User;
    userID: number;
    constructor(private userService: UserService,
        private storeService: StoreService,
        private router: Router) {

    }

    ngOnInit() {
        this.userID = Number(this.GetURLParameter('id'));
        this.userService.getAllUser()
            .then(value => {
                this.users = value;
                for (let i = 0; i < this.users.length; i++) {
                    if (this.users[i].id == this.userID) {
                        this.foundUser = this.users[i];
                        // this.updateForm.value.fullname= this.foundUser.name;
                        this.updateForm.controls['fullname'].setValue(this.foundUser.name);
                        this.updateForm.value.email=this.foundUser.email;
                        this.updateForm.value.phone=this.foundUser.phone;
                    }
                }
            }
            )
            this.updateForm = new FormGroup({
                fullname: new FormControl(undefined,Validators.compose([Validators.required,Validators.minLength(6)])),
                email: new FormControl(undefined, Validators.compose([Validators.required,Validators.minLength(6)])),
                phone: new FormControl(undefined, Validators.compose([Validators.required,Validators.minLength(9)]))
            })

    }

    handleEnterPressed($event) {
        if ($event.keyCode === 13) {
            this.handleUpdate();
        }
    }

    updateUser(username: string, fullname: string, email: string, phone: string) {
        console.debug("updateUser :", username, fullname, email, phone);
    }


    GetURLParameter(sParam) {
        var sPageURL = window.location.href;
        var sURLVariables = sPageURL.split('?');
        var sUsername = sURLVariables[1].split('=');
        return sUsername[1];
    }

    handleUpdate() {
        if(confirm("Save change?")){
            if (this.updateForm.valid) {
                this.isLoading = true;
                const formValue = this.updateForm.value; 
                this.userService.updateUser(this.foundUser.id, formValue.fullname, formValue.phone, "12/24/2018", formValue.email).then(value => {
                    this.isLoading = false;
                    this.router.navigate(['dashboard'])
                }).catch(reason => {
                    this.isLoading = false;
                    this.errorMessage = reason.message;
                })
                //console.debug("updateUser :", this.username, formValue.fullname, formValue.email, formValue.phone)
            }
        }
    }
}