import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService, } from '../../../services/user.service';
import { PagerService } from '../../../services/pager.service';
import { User } from 'app/interfaces/user';
import { Pager } from '../../../interfaces/pager';

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
    username: string;
    constructor(private userService: UserService,
        private storeService: StoreService,
        private router: Router) {

    }

    ngOnInit() {
        this.username = this.GetURLParameter('username');
        this.userService.getAllUser()
            .then(value => {
                this.users = value;
                for (let i = 0; i < this.users.length; i++) {
                    if (this.users[i].username == this.username) {
                        this.foundUser = this.users[i];
                        this.updateForm = new FormGroup({
                            fullname: new FormControl(this.foundUser.name),
                            email: new FormControl(this.foundUser.email),
                            phone: new FormControl(this.foundUser.phone)
                        })
                    }
                }
            }
            )
        
    }

    handleEnterPressed($event) {
        if ($event.keyCode === 13) {
            this.handleUpdate();
        }
    }

    updateUser(username:string, fullname:string, email: string, phone: string) {
            console.debug("updateUser :",username, fullname, email, phone);
    }


    GetURLParameter(sParam) {
        var sPageURL = window.location.href;
        var sURLVariables = sPageURL.split('?');
        var sUsername = sURLVariables[1].split('=');
        return sUsername[1];
    }

    handleUpdate() {
        console.debug("updateUser :",this.updateForm.value);
        if (this.updateForm.valid) {
            this.isLoading = true;
             const formValue = this.updateForm.value;
             console.debug("updateUser :",this.username,formValue.fullname, formValue.email, formValue.phone);
            // this.updateUser(this.username,formValue.name, formValue.email, formValue.phone);
        }
       
        // if (this.updateForm.valid) {
        //     const formValue = this.updateForm.value;
        //     this.isLoading = true;
        //     this.userService.login(
        //         formValue.username,
        //         formValue.password
        //     ).then(value => {
        //         this.isLoading = false;
        //         this.router.navigate(['account'])
        //     }).catch(reason => {
        //         this.isLoading = false;
        //         this.errorMessage = reason.message;
        //     })
        // }
    }
}