import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from 'app/interfaces/user';
@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
    users: User[];
    username: String;
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.username = this.GetURLParameter('username');
    }

    GetURLParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    }
}
