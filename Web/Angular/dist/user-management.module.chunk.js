webpackJsonp(["user-management.module"],{

/***/ "../../../../../src/app/views/user-management/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Create account</strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"isLoadingPage\"></app-spinner>\r\n      <div class=\"card-body animated fadeIn\" *ngIf=\"!isLoadingPage\">\r\n        <div [formGroup]=\"signupForm\" class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"username-input\">Username <span style=\"color: #ee0d0d\"><strong>*</strong></span></label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"username-input\" name=\"username-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.username}\"\r\n                formControlName=\"username\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.username\">{{errors.username}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"password-input\">Password <span style=\"color: #ee0d0d\"><strong>*</strong></span></label>\r\n            <div class=\"col-8\">\r\n              <input type=\"password\" id=\"password-input\" name=\"password-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.password}\"\r\n                formControlName=\"password\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.password\">{{errors.password}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"name-input\">Full name</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"name-input\" name=\"name-input\" class=\"form-control\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.fullname}\"\r\n                formControlName=\"fullname\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.fullname\">{{errors.fullname}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"email-input\">Email <span style=\"color: #ee0d0d\"><strong>*</strong></span></label>\r\n            <div class=\"col-8\">\r\n              <input type=\"email\" id=\"email-input\" name=\"email-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.email}\" formControlName=\"email\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.email\">{{errors.email}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"phone-input\">Phone</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"phone-input\" name=\"phone-input\" class=\"form-control\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.phone}\"\r\n                formControlName=\"phone\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.phone\">{{errors.phone}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"email-input\">Date of Birth</label>\r\n            <div class=\"col-8\">\r\n              <my-date-picker [options]=\"myDatePickerOptions\" formControlName=\"birthDate\" [ngClass]=\"{'form-control': false, 'is-invalid': errors.birthdate}\"\r\n                required></my-date-picker>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.birthdate\">{{errors.birthdate}}</div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"teams\">\r\n\r\n            <label class=\"col-4 col-form-label text-right\">Team </label>\r\n\r\n\r\n            <div class=\"col-8\">\r\n              <select formControlName=\"team\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.team}\">\r\n                <option *ngFor=\"let team of teams\" value=\"{{team.id}}\">{{team.name}}</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.team\">{{errors.team}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"file-input\">Avatar</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"file\" id=\"file-input\" name=\"file-input\" [ngClass]=\"{'form-control': false, 'is-invalid': errors.avatar}\" (change)=\"avatarFileChange($event)\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.avatar\">{{errors.avatar}}</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-actions text-center\">\r\n            <div class=\"col-12\">\r\n              <button class=\"btn btn-primary\" (click)=\"handleCreate()\" [ladda]=\"isLoading\">\r\n                Save changes\r\n              </button>\r\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"signupForm.reset()\">Reset</button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/user-management/create-user/create-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#dauSao {\n  color: rgba(245, 7, 66, 0.89); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/user-management/create-user/create-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(userService, storeService, teamService, uploadService, router) {
        this.userService = userService;
        this.storeService = storeService;
        this.teamService = teamService;
        this.uploadService = uploadService;
        this.router = router;
        // https://github.com/kekeh/mydatepicker
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'dd/mm/yyyy',
            showInputField: true,
            openSelectorTopOfInput: true,
            showTodayBtn: false
        };
        this.currentAccountCursor = this.storeService.select(['currentUser']);
        this.tokenCursor = this.storeService.select(['token']);
        this.isLoading = false;
        this.isLoadingPage = true;
        this.setErrorsNull();
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getAllTeam()
            .then(function (value) {
            _this.teams = value;
            _this.isLoadingPage = false;
        });
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined),
            fullname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined),
            birthDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined),
            team: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined),
            avatar: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined)
        });
    };
    CreateUserComponent.prototype.handleCreate = function () {
        var _this = this;
        this.setErrorsNull();
        var formValue = this.signupForm.value;
        this.isLoading = true;
        var birthdate = formValue.birthDate ? formValue.birthDate.formatted : undefined;
        this.userService.createUser(formValue.username, formValue.password, formValue.fullname, formValue.phone, birthdate, formValue.email, formValue.team).then(function (value) {
            if (formValue.avatar) {
                _this.uploadAvatar(formValue.avatar, value.id);
            }
            else {
                _this.isLoading = false;
                _this.setErrorsNull();
                // show some form of success message here
            }
        }).catch(function (reason) {
            _this.isLoading = false;
            _this.handleCreateError(reason.Data);
        });
    };
    CreateUserComponent.prototype.uploadAvatar = function (file, userId) {
        var _this = this;
        this.uploadService.uploadAvatarFile(file, userId)
            .then(function (value) {
            _this.isLoading = false;
        }).catch(function (reason) {
            _this.isLoading = false;
            _this.handleCreateError(reason.Data);
        });
    };
    CreateUserComponent.prototype.setErrorsNull = function () {
        this.errors = {
            username: '',
            password: '',
            fullname: '',
            email: '',
            phone: '',
            birthdate: '',
            team: '',
            avatar: ''
        };
    };
    CreateUserComponent.prototype.avatarFileChange = function (fileInput) {
        var file = fileInput.target.files[0];
        this.signupForm.controls['avatar'].setValue(file);
    };
    CreateUserComponent.prototype.handleCreateError = function (errors) {
        if (errors) {
            for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
                var error = errors_1[_i];
                var fieldName = error.key;
                var errorMessage = error.message;
                switch (fieldName) {
                    case 'Username':
                        this.errors.username = errorMessage;
                        break;
                    case 'Password':
                        this.errors.password = errorMessage;
                        break;
                    case 'Name':
                        this.errors.fullname = errorMessage;
                        break;
                    case 'Phone':
                        this.errors.phone = errorMessage;
                        break;
                    case 'Birthdate':
                        this.errors.birthdate = errorMessage;
                        break;
                    case 'Email':
                        this.errors.email = errorMessage;
                        break;
                    case 'Team':
                        this.errors.team = errorMessage;
                        break;
                    case 'Avatar':
                        this.errors.avatar = errorMessage;
                        break;
                }
            }
        }
    };
    CreateUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__("../../../../../src/app/views/user-management/create-user/create-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/create-user/create-user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_tree_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_6__services_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_4__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user-management/detail-user/detail-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>User Detail</strong>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"AvaAndDe\" class=\"row\">\r\n\r\n      <div id=\"left\">\r\n        <img id=\"img\" *ngIf=\"foundUser\" src=\"{{foundUser.avatar}}\" height=\"100%\" width=\"100%\">\r\n      </div>\r\n      <div id=\"right\">\r\n        <div>\r\n          <b id=\"name\" *ngIf=\"foundUser\" style=\"text-transform: uppercase\">{{foundUser.name}}</b>\r\n        </div>\r\n        <div id=\"username\" *ngIf=\"foundUser\">\r\n          <span>User name: </span> {{foundUser.username}}\r\n        </div>\r\n        <div id=\"team\" *ngIf=\"foundUser\">\r\n          <span>Team: </span> {{foundUser.team.name}}</div>\r\n        <!-- <div id=\"role\" *ngIf=\"foundUser\">\r\n          <span>Role: </span>{{foundUser.isManager}}\r\n          <span class=\"badge badge-success\" style=\"font-size: 20px;\">Active</span>\r\n        </div> -->\r\n        <div id=\"phone\" *ngIf=\"foundUser\">\r\n          <span>Phone number:</span> {{foundUser.phone}}</div>\r\n        <div id=\"email\" *ngIf=\"foundUser\">\r\n          <span>Email: </span> {{foundUser.email}}\r\n        </div>\r\n        <div>\r\n          <p id=\"birthdate\" *ngIf=\"foundUser\">\r\n            <span>Date of birth: </span> {{foundUser.birthdate}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/user-management/detail-user/detail-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#left {\n  font-size: 30px;\n  width: 38%;\n  padding-left: 4px;\n  margin-right: 5px; }\n\n#right {\n  font-size: 25px;\n  width: 45%;\n  padding-left: 4px;\n  margin-right: 5px; }\n\n#AvaAndDe {\n  padding-left: 13px; }\n\n#center {\n  padding: 0em;\n  width: 0%;\n  font-size: 30px; }\n\n#avatar {\n  width: 150px;\n  height: 200px;\n  margin-right: 5px; }\n\n#summary {\n  color: rgba(18, 38, 221, 0.89);\n  border-bottom: 2px solid; }\n\n#TechnicalSkills {\n  color: rgba(18, 38, 221, 0.89);\n  border-bottom: 2px solid; }\n\n#role {\n  color: grey;\n  font-size: 25px; }\n\n#phone {\n  font-size: 25px; }\n\n#email {\n  color: blue;\n  font-size: 25px; }\n\n#name {\n  font-size: 45px; }\n\n#username {\n  font-size: 25px; }\n\n#img {\n  width: 350px;\n  height: 350px; }\n\n#birthdate {\n  font-size: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/user-management/detail-user/detail-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailUserComponent = /** @class */ (function () {
    function DetailUserComponent(teamService, userService) {
        this.teamService = teamService;
        this.userService = userService;
        this.selectedUser = [];
    }
    DetailUserComponent.prototype.ngOnInit = function () {
        this.entity = {};
        this.userID = Number(this.GetURLParameter('id'));
        this.users = [];
        this.getAllTeam();
    };
    DetailUserComponent.prototype.getAllTeam = function () {
        var _this = this;
        this.userService.getAllUser()
            .then(function (value) {
            _this.users = value;
            for (var i = 0; i < _this.users.length; i++) {
                if (_this.users[i].id == _this.userID) {
                    _this.foundUser = _this.users[i];
                    _this.selectedUser.push({
                        id: _this.foundUser.id,
                        itemName: _this.foundUser.name,
                        itemUsername: _this.foundUser.username,
                        itemBirthday: _this.foundUser.birthdate,
                        itemAvatar: _this.foundUser.avatar,
                        itemPhone: _this.foundUser.phone,
                        itemTeam: _this.foundUser.team.name,
                        itemEmail: _this.foundUser.email,
                        itemRole: _this.foundUser.isManager
                    });
                }
            }
        });
    };
    DetailUserComponent.prototype.GetURLParameter = function (sParam) {
        var sPageURL = window.location.href;
        var sURLVariables = sPageURL.split('?');
        var sTeam = sURLVariables[1].split('=');
        return sTeam[1];
    };
    DetailUserComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedUser);
    };
    DetailUserComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedUser);
    };
    DetailUserComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    DetailUserComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    DetailUserComponent.prototype.submitChange = function () {
    };
    DetailUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail-user',
            template: __webpack_require__("../../../../../src/app/views/user-management/detail-user/detail-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/detail-user/detail-user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], DetailUserComponent);
    return DetailUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user-management/update-user/update-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Update User</strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"isLoadingPage\"></app-spinner>\r\n      <div class=\"card-body animated fadeIn\" *ngIf=\"!isLoadingPage\">\r\n        <div [formGroup]=\"updateForm\" class=\"form-horizontal col-6\">\r\n          <!-- <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"name-input\">Fullname</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"name-input\" name=\"name-input\" class=\"form-control\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.fullname}\"\r\n                formControlName=\"fullname\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.fullname\">{{errors.fullname}}</div>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Password </label>\r\n            <div class=\"col-8\">\r\n              <button type=\"button\" class=\"btn btn-primary\">Reset Password</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"email-input\">Email</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"email\" id=\"email-input\" name=\"email-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.email}\" formControlName=\"email\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.email\">{{errors.email}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"phone-input\">Phone</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"phone-input\" name=\"phone-input\" class=\"form-control\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.phone}\"\r\n                formControlName=\"phone\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.phone\">{{errors.phone}}</div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"email-input\">Date of Birth</label>\r\n            <div class=\"col-8\">\r\n              <my-date-picker [options]=\"myDatePickerOptions\" formControlName=\"birthDate\" [ngClass]=\"{'form-control': false, 'is-invalid': errors.birthdate}\"\r\n                required></my-date-picker>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.birthdate\">{{errors.birthdate}}</div>\r\n            </div>\r\n\r\n          </div> -->\r\n          <div class=\"form-group row\" *ngIf=\"teams\">\r\n            <label class=\"col-4 col-form-label text-right\">Team</label>\r\n            <div class=\"col-8\">\r\n              <select formControlName=\"team\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.team}\">\r\n                <option *ngFor=\"let team of teams\" value=\"{{team.id}}\">{{team.name}}</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.team\">{{errors.team}}</div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"file-input\">Avatar</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"file\" id=\"file-input\" name=\"file-input\" [ngClass]=\"{'form-control': false, 'is-invalid': errors.avatar}\" (change)=\"avatarFileChange($event)\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.avatar\">{{errors.avatar}}</div>\r\n            </div>\r\n\r\n          </div> -->\r\n          <div class=\"form-actions text-center\">\r\n            <div class=\"col-12\">\r\n              <button class=\"btn btn-primary\" (click)=\"handleUpdate()\" [ladda]=\"isLoading\">\r\n                Save changes\r\n              </button>\r\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"signupForm.reset()\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/user-management/update-user/update-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/user-management/update-user/update-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateUserComponent = /** @class */ (function () {
    function UpdateUserComponent(userService, storeService, teamService, router) {
        this.userService = userService;
        this.storeService = storeService;
        this.teamService = teamService;
        this.router = router;
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'dd/mm/yyyy',
            showInputField: true,
            openSelectorTopOfInput: true,
            showTodayBtn: false
        };
        this.isPageLoading = false;
        this.setErrorsNull();
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userID = Number(this.GetURLParameter('id'));
        this.teamService.getAllTeam()
            .then(function (value) {
            _this.teams = value;
            _this.isPageLoading = false;
        });
        this.userService.getAllUser()
            .then(function (value) {
            _this.users = value;
            for (var i = 0; i < _this.users.length; i++) {
                if (_this.users[i].id === _this.userID) {
                    _this.foundUser = _this.users[i];
                    _this.setDefaultValue(_this.foundUser);
                }
            }
        });
        this.updateForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            fullname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(9)]))
        });
    };
    UpdateUserComponent.prototype.handleEnterPressed = function ($event) {
        if ($event.keyCode === 13) {
            this.handleUpdate();
        }
    };
    UpdateUserComponent.prototype.setDefaultValue = function (user) {
        this.updateForm.controls['fullname'].setValue(user.name);
        this.updateForm.controls['email'].setValue(user.email);
        this.updateForm.controls['phone'].setValue(user.phone);
    };
    UpdateUserComponent.prototype.updateUser = function (username, fullname, email, phone) {
        console.debug('updateUser :', username, fullname, email, phone);
    };
    UpdateUserComponent.prototype.GetURLParameter = function (sParam) {
        var sPageURL = window.location.href;
        var sURLVariables = sPageURL.split('?');
        var sUsername = sURLVariables[1].split('=');
        return sUsername[1];
    };
    UpdateUserComponent.prototype.setErrorsNull = function () {
        this.errors = {
            username: '',
            password: '',
            fullname: '',
            email: '',
            phone: '',
            birthdate: '',
            team: '',
            avatar: ''
        };
    };
    UpdateUserComponent.prototype.handleUpdate = function () {
        var _this = this;
        if (confirm('Save change?')) {
            if (this.updateForm.valid) {
                this.isLoading = true;
                var formValue = this.updateForm.value;
                this.userService.updateUser(this.foundUser.id, formValue.fullname, formValue.phone, '12/24/2018', formValue.email).then(function (value) {
                    _this.isLoading = false;
                    _this.router.navigate(['dashboard']);
                }).catch(function (reason) {
                    _this.isLoading = false;
                    _this.errorMessage = reason.message;
                });
            }
        }
    };
    UpdateUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-user',
            template: __webpack_require__("../../../../../src/app/views/user-management/update-user/update-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/update-user/update-user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_tree_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_5__services_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user-management/user-management-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_user_create_user_component__ = __webpack_require__("../../../../../src/app/views/user-management/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_user_view_user_component__ = __webpack_require__("../../../../../src/app/views/user-management/view-user/view-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_user_update_user_component__ = __webpack_require__("../../../../../src/app/views/user-management/update-user/update-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_user_detail_user_component__ = __webpack_require__("../../../../../src/app/views/user-management/detail-user/detail-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        data: {
            title: 'Account'
        },
        children: [
            {
                data: {
                    title: 'View account'
                },
                path: 'view',
                component: __WEBPACK_IMPORTED_MODULE_3__view_user_view_user_component__["a" /* ViewUserComponent */],
            },
            {
                path: 'detail',
                component: __WEBPACK_IMPORTED_MODULE_5__detail_user_detail_user_component__["a" /* DetailUserComponent */],
                data: {
                    title: 'Detail account'
                }
            },
            {
                data: {
                    title: 'Create account'
                },
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_2__create_user_create_user_component__["a" /* CreateUserComponent */]
            },
            {
                data: {
                    title: 'Update account'
                },
                path: 'update',
                component: __WEBPACK_IMPORTED_MODULE_4__update_user_update_user_component__["a" /* UpdateUserComponent */]
            },
        ]
    }
];
var UserManagementRoutingModule = /** @class */ (function () {
    function UserManagementRoutingModule() {
    }
    UserManagementRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], UserManagementRoutingModule);
    return UserManagementRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/user-management/user-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management_routing_module__ = __webpack_require__("../../../../../src/app/views/user-management/user-management-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_user_create_user_component__ = __webpack_require__("../../../../../src/app/views/user-management/create-user/create-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_user_view_user_component__ = __webpack_require__("../../../../../src/app/views/user-management/view-user/view-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__update_user_update_user_component__ = __webpack_require__("../../../../../src/app/views/user-management/update-user/update-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_ladda__ = __webpack_require__("../../../../angular2-ladda/module/module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_ladda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_ladda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__detail_user_detail_user_component__ = __webpack_require__("../../../../../src/app/views/user-management/detail-user/detail-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__user_management_routing_module__["a" /* UserManagementRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_ladda__["LaddaModule"].forRoot({
                    style: 'expand-left'
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_11_angular_datatables__["a" /* DataTablesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__create_user_create_user_component__["a" /* CreateUserComponent */],
                __WEBPACK_IMPORTED_MODULE_4__view_user_view_user_component__["a" /* ViewUserComponent */],
                __WEBPACK_IMPORTED_MODULE_5__update_user_update_user_component__["a" /* UpdateUserComponent */],
                __WEBPACK_IMPORTED_MODULE_9__detail_user_detail_user_component__["a" /* DetailUserComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components__["k" /* SpinnerComponent */],
            ]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/user-management/view-user/view-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>View all accounts</strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"isPageLoading\"></app-spinner>\r\n      <div *ngIf=!isPageLoading class=\"card-body animated fadeIn\" >\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"search(searchUsername.value)\">\r\n              <i class=\"fa fa-search\"></i> Search\r\n            </button>\r\n          </span>\r\n          <input class=\"form-control\" type=\"text\" (change)=\"search(searchUsername.value)\" #searchUsername>\r\n        </div>\r\n        <table datatable [dtOptions]=\"datatableOptions\" class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>No.</th>\r\n              <th>Avatar</th>\r\n              <th>Full Name</th>\r\n              <th>Username</th>\r\n              <th>Birthdate</th>\r\n              <th>Team</th>\r\n              <th>Role</th>\r\n              <th>Status</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let user of users;let i = index\">\r\n              <td class=\"text-center\">{{i + 1}}</td>\r\n              <td class=\"text-center\">\r\n                <img *ngIf=\"user.avatar\" src=\"{{user.avatar}}\" class=\"avatar avatar-lg\">\r\n                <img *ngIf=\"!user.avatar\" src=\"https://www.placehold.it/100x100?text=avatar\" class=\"avatar avatar-lg\">\r\n              </td>\r\n              <td>\r\n                <p *ngIf=\"user.name\">{{user.name}}</p>\r\n                <p *ngIf=\"!user.name\">N/A</p>\r\n              </td>\r\n              <td>\r\n                <a href=\"#/account/detail?id={{user.id}}\">{{user.username}}</a>\r\n              </td>\r\n              <td>\r\n                <p *ngIf=\"user.birthdate\">{{user.birthdate | date:'dd/MM/yyyy'}}</p>\r\n                <p *ngIf=\"!user.birthdate\">N/A</p>\r\n              </td>\r\n              <td>\r\n                <p *ngIf=\"!user.team\">N/A</p>\r\n                <p *ngIf=\"user.team\">{{user.team.name}}</p>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <strong>\r\n                  <p *ngIf=\"user.isAdmin\">Admin</p>\r\n                </strong>\r\n                <strong>\r\n                  <p *ngIf=\"!user.isAdmin && user.isManager\">Manager</p>\r\n                </strong>\r\n                <p *ngIf=\"!user.isAdmin && !user.isManager\">Staff</p>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <span class=\"badge badge-success\" *ngIf=\"user.isActive\">\r\n                  Active\r\n                </span>\r\n                <span class=\"badge badge-danger\" *ngIf=\"!user.isActive\">\r\n                  Banned\r\n                </span>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <a href=\"#/account/update?id={{user.id}}\">\r\n                  <button type=\"button\" class=\"btn btn-primary\">Update</button>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/user-management/view-user/view-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table.table-bordered {\n  margin-top: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/user-management/view-user/view-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewUserComponent = /** @class */ (function () {
    function ViewUserComponent(userService) {
        this.userService = userService;
        this.datatableOptions = {
            searching: false,
            lengthChange: false,
            columnDefs: [
                {
                    searchable: false,
                    orderable: false,
                    targets: [1, 8]
                }
            ]
        };
        this.isPageLoading = true;
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUser()
            .then(function (value) {
            _this.users = value;
            _this.isPageLoading = false;
        });
    };
    // search by username
    ViewUserComponent.prototype.search = function (searchStr) {
        var _this = this;
        this.isPageLoading = true;
        this.userService.getAllUser()
            .then(function (users) {
            _this.users = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](users, function (user) {
                var result;
                result = user.name && __WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](user.name).indexOf(__WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](searchStr)) >= 0;
                if (!result) {
                    result = user.username && __WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](user.username).indexOf(__WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](searchStr)) >= 0;
                }
                if (!result) {
                    if (user.birthdate) {
                        var formatedBDate = __WEBPACK_IMPORTED_MODULE_3_moment__(user.birthdate).format('DD/MM/YYYY');
                        result = __WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](formatedBDate).indexOf(__WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](searchStr)) >= 0;
                    }
                }
                if (!result) {
                    result = user.team && __WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](user.team.name).indexOf(__WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](searchStr)) >= 0;
                }
                if (!result) {
                    if (user.isAdmin) {
                        result = __WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"]('Admin').indexOf(__WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](searchStr)) >= 0;
                    }
                    else if (user.isManager) {
                        result = __WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"]('Manager').indexOf(__WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](searchStr)) >= 0;
                    }
                    else {
                        result = __WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"]('Staff').indexOf(__WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](searchStr)) >= 0;
                    }
                }
                if (!result) {
                    if (user.isActive) {
                        result = __WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"]('Active').indexOf(__WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](searchStr)) >= 0;
                    }
                    else {
                        result = __WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"]('Banned').indexOf(__WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](searchStr)) >= 0;
                    }
                }
                return result;
            });
            _this.isPageLoading = false;
        })
            .catch(function (reason) {
            _this.isPageLoading = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchUsername'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ViewUserComponent.prototype, "input", void 0);
    ViewUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-user',
            template: __webpack_require__("../../../../../src/app/views/user-management/view-user/view-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/view-user/view-user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], ViewUserComponent);
    return ViewUserComponent;
}());



/***/ })

});
//# sourceMappingURL=user-management.module.chunk.js.map