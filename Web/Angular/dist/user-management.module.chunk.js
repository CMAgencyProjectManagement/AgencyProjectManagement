webpackJsonp(["user-management.module"],{

/***/ "../../../../../src/app/views/user-management/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Create account</strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"isLoadingPage\"></app-spinner>\r\n      <div class=\"card-body animated fadeIn\" *ngIf=\"!isLoadingPage\">\r\n        <div [formGroup]=\"signupForm\" class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"username-input\">Username <span style=\"color: #ee0d0d\"><strong>*</strong></span></label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"username-input\" name=\"username-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.username}\"\r\n                formControlName=\"username\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.username\">{{errors.username}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"password-input\">Password <span style=\"color: #ee0d0d\"><strong>*</strong></span></label>\r\n            <div class=\"col-8\">\r\n              <input type=\"password\" id=\"password-input\" name=\"password-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.password}\"\r\n                formControlName=\"password\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.password\">{{errors.password}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"name-input\">Full name <span style=\"color: #ee0d0d\"><strong>*</strong></span></label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"name-input\" name=\"name-input\" class=\"form-control\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.fullname}\"\r\n                formControlName=\"fullname\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.fullname\">{{errors.fullname}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"email-input\">Email <span style=\"color: #ee0d0d\"><strong>*</strong></span></label>\r\n            <div class=\"col-8\">\r\n              <input type=\"email\" id=\"email-input\" name=\"email-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.email}\" formControlName=\"email\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.email\">{{errors.email}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"phone-input\">Phone<span style=\"color: #ee0d0d\"><strong>*</strong></span></label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"phone-input\" name=\"phone-input\" class=\"form-control\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.phone}\"\r\n                formControlName=\"phone\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.phone\">{{errors.phone}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"email-input\">Date of Birth</label>\r\n            <div class=\"col-8 datepicker-group\">\r\n              <my-date-picker #datepicker [options]=\"myDatePickerOptions\" formControlName=\"birthDate\" [ngClass]=\"{'form-control': false, 'is-invalid': errors.birthdate}\"\r\n                required></my-date-picker>\r\n              <div class=\"invalid-feedback\" [ngStyle]=\"{'display':'block'}\" *ngIf=\"errors.birthdate\">{{errors.birthdate}}</div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"teams\">\r\n\r\n            <label class=\"col-4 col-form-label text-right\">Department </label>\r\n\r\n\r\n            <div class=\"col-8\">\r\n              <select formControlName=\"team\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.team}\">\r\n                <option *ngFor=\"let team of teams\" value=\"{{team.id}}\">{{team.name}}</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.team\">{{errors.team}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"file-input\">Avatar</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"file\" id=\"file-input\" name=\"file-input\" [ngClass]=\"{'form-control': false, 'is-invalid': errors.avatar}\" (change)=\"avatarFileChange($event)\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.avatar\">{{errors.avatar}}</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-actions text-center\">\r\n            <div class=\"col-12\">\r\n              <button class=\"btn btn-primary\" (click)=\"handleCreate()\" [ladda]=\"isLoading\">\r\n                Save changes\r\n              </button>\r\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"signupForm.reset()\">Reset</button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
        var birthdate = formValue.birthDate ? formValue.birthDate.formatted : this.datepicker.selectionDayTxt;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datepicker'),
        __metadata("design:type", Object)
    ], CreateUserComponent.prototype, "datepicker", void 0);
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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Account detail</strong>\r\n  </div>\r\n  <app-spinner *ngIf=\"isLoadingPage\"></app-spinner>\r\n  <div class=\"card-body animated fadeIn\" *ngIf=\"!isLoadingPage\">\r\n    <div id=\"AvaAndDe\" class=\"row\" *ngIf=\"foundUser\">\r\n\r\n      <div id=\"left\" class=\"col-4\">\r\n        <img id=\"img\" *ngIf=\"foundUser\" src=\"{{foundUser.avatar}}\" height=\"100%\" width=\"100%\">\r\n      </div>\r\n      <div class=\"col-8\">\r\n        \r\n        <div id=\"name\" *ngIf=\"foundUser\" style=\"text-transform: uppercase; font-size: 30px; color: #3960A4\">\r\n          <strong>{{foundUser.name}}</strong>\r\n        </div>\r\n        <div id=\"team\" *ngIf=\"foundUser\" style=\"font-size: 30px\">\r\n          <a href=\"#/department/{{foundUser.team.id}}/detail\" *ngIf=\"foundUser.team\">{{foundUser.team.name}}</a>\r\n          <span *ngIf=\"!foundUser.team\" style=\"font-size: 25px\">No information</span>\r\n        </div>\r\n        <br/>\r\n        <div id=\"role\" *ngIf=\"foundUser\">\r\n          <div *ngIf=\"foundUser.isAdmin\">\r\n            <i class=\"fa fa-user-circle-o fa-lg\"></i>\r\n            <span style=\"font-size: 20px\"> &nbsp;&nbsp;&nbsp;Admin</span>\r\n          </div>\r\n          <div *ngIf=\"!foundUser.isAdmin && foundUser.isManager\">\r\n            <i class=\"fa fa-user-circle-o fa-lg\"></i>\r\n            <span style=\"font-size: 20px\"> &nbsp;&nbsp;&nbsp;Manager</span>\r\n          </div>\r\n          <div *ngIf=\"!foundUser.isAdmin && !foundUser.isManager\">\r\n            <i class=\"fa fa-user-circle-o fa-lg\"></i>\r\n            <span style=\"font-size: 20px\"> &nbsp;&nbsp;&nbsp;Staff</span>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- <div id=\"ban\" *ngIf=\"foundUser\">\r\n          <div *ngIf=\"foundUser.isActive\">\r\n            <i class=\"fa fa-check fa-lg\"></i>\r\n            <span style=\"font-size: 20px;color: #3AA65B\"> &nbsp;&nbsp;&nbsp;Active</span>\r\n          </div>\r\n          <div *ngIf=\"!foundUser.isActive\">\r\n            <i class=\"fa fa-close fa-lg\"></i>\r\n            <span style=\"font-size: 20px;color: #CB0A0E\"> &nbsp;&nbsp;&nbsp;Banned</span>\r\n          </div>\r\n        </div> -->\r\n\r\n        <div id=\"phone\" *ngIf=\"foundUser\">\r\n          <i class=\"fa fa-phone fa-lg\"></i>\r\n          <span style=\"font-size: 20px\" *ngIf=\"foundUser.phone\"> &nbsp;&nbsp;&nbsp;{{foundUser.phone}}</span>\r\n          <span style=\"font-size: 20px\" *ngIf=\"!foundUser.phone\"> &nbsp;&nbsp;&nbsp;No information</span>\r\n        </div>\r\n        <div id=\"email\" *ngIf=\"foundUser\">\r\n          <i class=\"fa fa-envelope-o fa-lg\" ></i>\r\n          <span style=\"font-size: 20px\" *ngIf=\"foundUser.email\"> &nbsp;&nbsp;&nbsp;{{foundUser.email}}</span>\r\n          <span style=\"font-size: 20px\" *ngIf=\"!foundUser.email\"> &nbsp;&nbsp;&nbsp;No information</span>\r\n        </div>\r\n        <div>\r\n          <div id=\"birthdate\" *ngIf=\"foundUser\">\r\n            <i class=\"fa fa-birthday-cake fa-lg\"></i>\r\n            <span style=\"font-size: 20px\" *ngIf=\"foundUser.birthdate\"> &nbsp;&nbsp;&nbsp;{{foundUser.birthdate |date:'dd/MM/yyyy'}}</span>\r\n            <span style=\"font-size: 20px\" *ngIf=\"!foundUser.birthdate\"> &nbsp;&nbsp;&nbsp;No information</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"button-row\">\r\n            <a href=\"#/account/update/{{foundUser.id}}\" class=\"btn btn-primary bg-primary text-light\" style=\"font-size: 20px;margin-top: 10px;\" *ngIf=\"!match\">\r\n              <i class=\"fa fa-edit\"></i>&nbsp; Update\r\n            </a>\r\n            <a href=\"#/account/update\" class=\"btn btn-primary bg-primary text-light\" style=\"font-size: 20px;margin-top: 10px;\" *ngIf=\"match\">\r\n              <i class=\"fa fa-edit\"></i>&nbsp; Update\r\n            </a>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/user-management/detail-user/detail-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa-lg {\n  font-size: 2em;\n  vertical-align: -15%; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function DetailUserComponent(teamService, userService, storeService, router, route, location) {
        this.teamService = teamService;
        this.userService = userService;
        this.storeService = storeService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.selectedUser = [];
        this.match = false;
        this.isLoadingPage = true;
        this.currentUser = this.storeService.get(['currentUser']);
        // this.managementMode = currentUser.isManager || currentUser.isAdmin;
    }
    DetailUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entity = {};
        if (this.route.snapshot.paramMap.get('id') == undefined) {
            this.match = true;
            this.foundUser = this.currentUser;
            this.isLoadingPage = false;
        }
        else {
            this.userID = Number(this.route.snapshot.paramMap.get('id'));
            // if (this.userID == this.currentUser.id) {
            //   this.match = true;
            //   this.foundUser = this.currentUser;
            // } else {
            //   this.getAllTeam();
            // }
            this.teamService.getAllTeam().then(function (value) {
                _this.teams = value;
            });
            this.getAllTeam();
        }
    };
    DetailUserComponent.prototype.getAllTeam = function () {
        var _this = this;
        this.userService.getAllUser()
            .then(function (value) {
            _this.users = value;
            for (var i = 0; i < _this.users.length; i++) {
                if (_this.users[i].id == _this.userID) {
                    _this.foundUser = _this.users[i];
                    // this.selectedUser.push({
                    //   id: this.foundUser.id,
                    //   itemName: this.foundUser.name,
                    //   itemUsername: this.foundUser.username,
                    //   itemBirthday: this.foundUser.birthdate,
                    //   itemAvatar: this.foundUser.avatar,
                    //   itemPhone: this.foundUser.phone,
                    //   itemTeam: this.foundUser.team.name,
                    //   itemEmail: this.foundUser.email,
                    //   itemManager: this.foundUser.isManager,
                    //   itemAdmin: this.foundUser.isAdmin,
                    //   itemBan: this.foundUser.isActive,
                    // });
                }
            }
            _this.isLoadingPage = false;
        });
    };
    DetailUserComponent.prototype.GetURLParameter = function (sParam) {
        var sPageURL = window.location.href;
        if (sPageURL.indexOf('?') > 0) {
            var sURLVariables = sPageURL.split('?');
            var sTeam = sURLVariables[1].split('=');
        }
        else {
            return 0;
        }
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
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_tree_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], DetailUserComponent);
    return DetailUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user-management/update-my-user/update-my-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Update account</strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"isPageLoading\"></app-spinner>\r\n      <div class=\"card-body animated fadeIn\" *ngIf=\"!isPageLoading\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-4 col-form-label text-right\">Password </label>\r\n          <div class=\"col-8\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"openConfirmResetPassword()\" [ladda]=\"isResetPasswordLoading\">\r\n              Reset Password</button>\r\n            <div *ngIf=\"newpassword\" class=\"alert alert-success\" role=\"alert\">\r\n              New password: {{newpassword}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-actions text-center\">\r\n          <div class=\"col-12\">\r\n            <button class=\"btn btn-primary\" (click)=\"handleUpdate()\" [ladda]=\"isSavingChange\">\r\n              Save changes\r\n            </button>\r\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"setDefaultValue(foundUser)\">Reset</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/user-management/update-my-user/update-my-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/user-management/update-my-user/update-my-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateMyUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateMyUserComponent = /** @class */ (function () {
    function UpdateMyUserComponent(userService, router, route, location, modalService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.modalService = modalService;
        this.isSavingChange = false;
        this.isPageLoading = true;
        this.setErrorsNull();
    }
    UpdateMyUserComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        if (Number(id)) {
            this.userId = Number(id);
        }
        else {
            this.showErrorModal(id + " is not a valid ID");
        }
        this.updateForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]({
            fullname: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined),
            birthdate: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined),
            password: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined),
        });
    };
    UpdateMyUserComponent.prototype.setErrorsNull = function () {
        this.errors = {
            password: '',
            fullname: '',
            birthdate: '',
        };
    };
    UpdateMyUserComponent.prototype.showErrorModal = function (message, isNavigateBack) {
        var _this = this;
        if (isNavigateBack === void 0) { isNavigateBack = false; }
        var initialState = {
            closeCallback: function () {
                if (isNavigateBack) {
                    _this.location.back();
                }
            },
            message: message
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__["e" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    UpdateMyUserComponent.prototype.handleUpdate = function () {
        var _this = this;
        this.setErrorsNull();
        if (confirm('Save change ?')) {
            this.isSavingChange = true;
            var formValue = this.updateForm.value;
            this.userService.updateUser(this.foundUser.id, formValue.phone, formValue.email, formValue.team, formValue.isActive).then(function (value) {
                _this.isSavingChange = false;
            }).catch(function (reason) {
                _this.errorMessage = reason.message;
                var errors = reason.Data;
                for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
                    var error = errors_1[_i];
                    var fieldName = error.key;
                    var errorMessage = error.message;
                    switch (fieldName) {
                        case 'Password':
                            _this.errors.password = errorMessage;
                            break;
                        case 'Name':
                            _this.errors.fullname = errorMessage;
                            break;
                        case 'Birthdate':
                            _this.errors.birthdate = errorMessage;
                            break;
                    }
                }
                _this.isSavingChange = false;
            });
        }
    };
    UpdateMyUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-my-user',
            template: __webpack_require__("../../../../../src/app/views/user-management/update-my-user/update-my-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/update-my-user/update-my-user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["b" /* BsModalService */]])
    ], UpdateMyUserComponent);
    return UpdateMyUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user-management/update-user/update-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Update account</strong>\r\n      </div>\r\n       <app-spinner *ngIf=\"isPageLoading\"></app-spinner>\r\n      <div class=\"card-body animated fadeIn\" *ngIf=\"!isPageLoading\">\r\n        <div [formGroup]=\"updateForm\" class=\"form-horizontal col-6\">\r\n          <!--Fullname -->\r\n          <div class=\"form-group row\" *ngIf=\"!currentUser.isAdmin\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"fullname-input\">Fullname\r\n              <span style=\"color: #ee0d0d\">\r\n                <strong>*</strong>\r\n              </span>\r\n            </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"fullname-input\" name=\"fullname-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.fullname}\"\r\n                formControlName=\"fullname\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.fullname\">{{errors.fullname}}</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\" *ngIf=\"currentUser.isAdmin\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"fullname-input\">Fullname\r\n              <span style=\"color: #ee0d0d\">\r\n                <strong>*</strong>\r\n              </span>\r\n            </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"fullname-input\" name=\"fullname-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.fullname}\"\r\n                formControlName=\"fullname\" disabled=\"true\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.fullname\">{{errors.fullname}}</div>\r\n            </div>\r\n          </div>\r\n          <!--Birthdate -->\r\n          <div class=\"form-group row\" *ngIf=\"!currentUser.isAdmin\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"birthdate-input\">Birthdate\r\n              <span style=\"color: #ee0d0d\">\r\n                <strong>*</strong>\r\n              </span>\r\n            </label>\r\n            <div class=\"col-8 datepicker-group\">\r\n              <my-date-picker #birthDatePicker [options]=\"myDatePickerOptions\" formControlName=\"birthdate\" [ngClass]=\"{'form-control': false, 'is-invalid': errors.birthdate}\"\r\n                required></my-date-picker>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.birthdate\">{{errors.birthdate}}</div>\r\n            </div>\r\n          </div>\r\n          <!--Password-->\r\n          <div class=\"form-group row\" *ngIf=\"!currentUser.isAdmin\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"password-input\">Password</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"password\" id=\"password-input\" name=\"password-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.password}\"\r\n              formControlName=\"password\">\r\n            <div class=\"invalid-feedback\" *ngIf=\"errors.password\">{{errors.password}}</div>\r\n            </div>\r\n          </div>\r\n          <!--Email -->\r\n          <div class=\"form-group row\" *ngIf=\"currentUser.isAdmin\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"email-input\">Email\r\n              <span style=\"color: #ee0d0d\">\r\n                <strong>*</strong>\r\n              </span>\r\n            </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"email-input\" name=\"email-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.email}\" formControlName=\"email\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.email\">{{errors.email}}</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\" *ngIf=\"!currentUser.isAdmin\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"email-input\">Email\r\n            </label>\r\n            <div class=\"col-8\">\r\n              <input disabled=\"true\" type=\"text\" id=\"email-input\" name=\"email-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.email}\"\r\n                formControlName=\"email\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.email\">{{errors.email}}</div>\r\n            </div>\r\n          </div>\r\n          <!-- Phone -->\r\n          <div class=\"form-group row\" *ngIf=\"currentUser.isAdmin\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"phone-input\">Phone\r\n              <span style=\"color: #ee0d0d\">\r\n                <strong>*</strong>\r\n              </span>\r\n            </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"phone-input\" name=\"phone-input\" class=\"form-control\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.phone}\"\r\n                formControlName=\"phone\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.phone\">{{errors.phone}}</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\" *ngIf=\"!currentUser.isAdmin\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"phone-input\">Phone\r\n            </label>\r\n            <div class=\"col-8\">\r\n              <input disabled=\"true\" type=\"text\" id=\"phone-input\" name=\"phone-input\" class=\"form-control\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.phone}\"\r\n                formControlName=\"phone\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.phone\">{{errors.phone}}</div>\r\n            </div>\r\n          </div>\r\n          <!-- Department -->\r\n          <div class=\"form-group row\" *ngIf=\"teams && currentUser.isAdmin\">\r\n            <label class=\"col-4 col-form-label text-right\">Department</label>\r\n            <div class=\"col-8\">\r\n              <select formControlName=\"team\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.team}\">\r\n                <option *ngFor=\"let team of teams\" value=\"{{team.id}}\">{{team.name}}</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.team\">{{errors.team}}</div>\r\n            </div>\r\n          </div>\r\n          <!-- Status -->\r\n          <div class=\"form-group row\" *ngIf=\"currentUser.isAdmin\">\r\n            <label class=\"col-4 col-form-label text-right\">Active</label>\r\n            <div class=\"col-8\">\r\n              <label class=\"switch switch-3d switch-primary\">\r\n                <input type=\"checkbox\" class=\"switch-input\" formControlName=\"isActive\">\r\n                <span class=\"switch-label\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.isActive\">{{errors.isActive}}</div>\r\n            </div>\r\n          </div>\r\n          <!-- Password -->\r\n          <div class=\"form-group row\" *ngIf=\"currentUser.isAdmin\">\r\n            <label class=\"col-4 col-form-label text-right\">Password </label>\r\n            <div class=\"col-8\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"openConfirmResetPassword()\" [ladda]=\"isResetPasswordLoading\">\r\n                Reset Password</button>\r\n              <div *ngIf=\"newpassword\" class=\"alert alert-success\" role=\"alert\">\r\n                New password: {{newpassword}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-actions text-center\">\r\n            <div class=\"col-12\">\r\n              <button class=\"btn btn-primary\" (click)=\"handleUpdate()\" [ladda]=\"isSavingChange\" style=\"margin-left: 30px;\">\r\n                Save changes\r\n              </button>\r\n              <button *ngIf=\"!currentUser.isAdmin\" class=\"btn btn-secondary\" type=\"button\" onclick=\"location.href='#/account/profile'\" style=\"margin-left: 30px;width: 100px;\">Cancel</button>\r\n              <button *ngIf=\"currentUser.isAdmin\" class=\"btn btn-secondary\" type=\"button\" onclick=\"location.href='#/account/view'\" style=\"margin-left: 30px;width: 100px;\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cmaComponents_modals_confirm_modal_confirm_modal_component__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function UpdateUserComponent(userService, storeService, teamService, modalService, router, route, location) {
        this.userService = userService;
        this.storeService = storeService;
        this.teamService = teamService;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.updateForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](undefined),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](undefined),
            team: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](undefined),
            isActive: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](undefined),
            fullname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](undefined),
            birthdate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](undefined),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](undefined),
        });
        this.users = [];
        this.currentUser = this.storeService.get(['currentUser']);
        this.isPageLoading = true;
        this.isResetPasswordLoading = false;
        this.isSavingChange = false;
        this.setErrorsNull();
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.paramMap.get('id') == undefined) {
            this.foundUser = this.currentUser;
            // if (this.foundUser.team) {
            //   this.teamService.getDetail(this.foundUser.team.id)
            //     .then(value => {
            //       this.teams = value;
            //       this.updateLoadingState();
            //     });
            // } else {
            //   this.teams = null;
            //   this.updateLoadingState();
            // }
            this.setDefaultValue(this.foundUser);
            this.isPageLoading = false;
        }
        else {
            this.userID = Number(this.route.snapshot.paramMap.get('id'));
            this.teamService.getAllTeam()
                .then(function (value) {
                _this.teams = value;
            });
            this.userService.getAllUser()
                .then(function (value) {
                _this.users = value;
                for (var i = 0; i < _this.users.length; i++) {
                    if (_this.users[i].id == _this.userID) {
                        _this.foundUser = _this.users[i];
                        _this.setDefaultValue(_this.foundUser);
                        _this.isPageLoading = false;
                    }
                }
            });
        }
    };
    UpdateUserComponent.prototype.updateLoadingState = function () {
        if (this.foundUser && this.teams) {
            this.isPageLoading = false;
        }
    };
    UpdateUserComponent.prototype.setDefaultValue = function (user) {
        var birthdate = __WEBPACK_IMPORTED_MODULE_3_moment__(user.birthdate);
        this.updateForm.patchValue({
            birthdate: {
                date: {
                    year: birthdate.year(),
                    month: birthdate.month() + 1,
                    day: birthdate.date()
                }
            }
        });
        this.updateForm.controls['password'].setValue(user.password);
        console.debug(user.password);
        this.updateForm.controls['fullname'].setValue(user.name);
        this.updateForm.controls['email'].setValue(user.email);
        this.updateForm.controls['phone'].setValue(user.phone);
        if (user.team != null) {
            this.updateForm.controls['team'].setValue(user.team.id);
        }
        else {
            this.updateForm.controls['team'].setValue(0);
        }
        this.updateForm.controls['isActive'].setValue(user.isActive);
    };
    UpdateUserComponent.prototype.openConfirmResetPassword = function () {
        var _this = this;
        var initialState = {
            confirmCallback: function () {
                _this.resetPassword();
            },
            cancelCallback: function () {
            },
            message: "You are about to reset " + this.foundUser.name + "'s password"
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_7__cmaComponents_modals_confirm_modal_confirm_modal_component__["a" /* ConfirmModalComponent */], { initialState: initialState });
    };
    UpdateUserComponent.prototype.resetPassword = function () {
        var _this = this;
        this.isResetPasswordLoading = true;
        this.userService.resetPassword(this.foundUser.id)
            .then(function (value) {
            _this.newpassword = value.password;
            _this.isResetPasswordLoading = false;
        })
            .catch(function (reason) {
            _this.isResetPasswordLoading = false;
            console.debug('resetPassword', reason);
        });
    };
    UpdateUserComponent.prototype.GetURLParameter = function () {
        var sPageURL = window.location.href;
        var sURLVariables = sPageURL.split('?');
        var sUsername = sURLVariables[1].split('=');
        return sUsername[1];
    };
    UpdateUserComponent.prototype.setErrorsNull = function () {
        this.errors = {
            fullname: '',
            email: '',
            phone: '',
            birthdate: '',
            team: '',
            isActive: '',
            password: '',
        };
    };
    UpdateUserComponent.prototype.handleUpdate = function () {
        var _this = this;
        this.setErrorsNull();
        // if (confirm('Save change ?')) {
        //   this.isSavingChange = true;
        //   const formValue = this.updateForm.value;
        //   this.userService.updateUser(
        //     this.foundUser.id,
        //     formValue.phone,
        //     formValue.email,
        //     formValue.team,
        //     formValue.isActive
        //   ).then(value => {
        //     this.isSavingChange = false;
        //   }).catch(reason => {
        //     this.errorMessage = reason.message;
        //     let errors = reason.Data;
        //     for (let error of errors) {
        //       const fieldName = error.key;
        //       const errorMessage = error.message;
        //       switch (fieldName) {
        //         case 'Username':
        //           this.errors.username = errorMessage;
        //           break;
        //         case 'Password':
        //           this.errors.password = errorMessage;
        //           break;
        //         case 'Name':
        //           this.errors.fullname = errorMessage;
        //           break;
        //         case 'Phone':
        //           this.errors.phone = errorMessage;
        //           break;
        //         case 'Birthdate':
        //           this.errors.birthdate = errorMessage;
        //           break;
        //         case 'Email':
        //           this.errors.email = errorMessage;
        //           break;
        //         case 'Team':
        //           this.errors.team = errorMessage;
        //           break;
        //         case 'Avatar':
        //           this.errors.avatar = errorMessage;
        //           break;
        //       }
        //     }
        //     this.isSavingChange = false;
        //   })
        // }
        if (this.currentUser.isAdmin) {
            var onConfirm = function () {
                var formValue = _this.updateForm.value;
                _this.isSavingChange = true;
                _this.userService.updateUser(_this.foundUser.id, formValue.phone, formValue.email, formValue.team, formValue.isActive)
                    .then(function (value) {
                    _this.isSavingChange = false;
                    _this.router.navigate(['account/view']);
                })
                    .catch(function (reason) {
                    _this.isSavingChange = false;
                    _this.setErrors(reason.Data);
                });
            };
            var initialState = {
                message: "Are you sure to save these changes?",
                confirmCallback: onConfirm
            };
            this.modalService.show(__WEBPACK_IMPORTED_MODULE_7__cmaComponents_modals_confirm_modal_confirm_modal_component__["a" /* ConfirmModalComponent */], { initialState: initialState, class: 'modal-dialog' });
        }
        else {
            var onConfirm = function () {
                var birthdate = __WEBPACK_IMPORTED_MODULE_3_moment__(_this.birthDatePicker.selectionDayTxt, 'DD/MM/YYYY');
                var formValue = _this.updateForm.value;
                _this.isSavingChange = true;
                _this.userService.updateProfile(formValue.fullname, birthdate.isValid() ? birthdate.format('YYYY-MM-DD') : _this.birthDatePicker.selectionDayTxt, formValue.password)
                    .then(function (value) {
                    _this.isSavingChange = false;
                    _this.router.navigate(['account/profile']);
                })
                    .catch(function (reason) {
                    _this.isSavingChange = false;
                    _this.setErrors(reason.Data);
                });
            };
            var initialState = {
                message: "Are you sure to save these changes?",
                confirmCallback: onConfirm
            };
            this.modalService.show(__WEBPACK_IMPORTED_MODULE_7__cmaComponents_modals_confirm_modal_confirm_modal_component__["a" /* ConfirmModalComponent */], { initialState: initialState, class: 'modal-dialog' });
        }
    };
    UpdateUserComponent.prototype.setErrors = function (errors) {
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var error = errors_1[_i];
            var fieldName = error.key;
            var errorMessage = error.message;
            switch (fieldName) {
                case 'Email':
                    this.errors.email = errorMessage;
                    break;
                case 'Phone':
                    this.errors.phone = errorMessage;
                    break;
                case 'Department':
                    this.errors.team = errorMessage;
                    break;
                case 'Birthdate':
                    this.errors.birthdate = errorMessage;
                    break;
                case 'Fullname':
                    this.errors.fullname = errorMessage;
                    break;
                case 'Password':
                    this.errors.password = errorMessage;
                    break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('birthDatePicker'),
        __metadata("design:type", Object)
    ], UpdateUserComponent.prototype, "birthDatePicker", void 0);
    UpdateUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-user',
            template: __webpack_require__("../../../../../src/app/views/user-management/update-user/update-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/update-user/update-user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_tree_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_5__services_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["f" /* Location */]])
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
                    title: 'View accounts'
                },
                path: 'view',
                component: __WEBPACK_IMPORTED_MODULE_3__view_user_view_user_component__["a" /* ViewUserComponent */],
            },
            {
                path: 'detail/:id',
                component: __WEBPACK_IMPORTED_MODULE_5__detail_user_detail_user_component__["a" /* DetailUserComponent */],
                data: {
                    title: 'Account detail'
                }
            },
            {
                path: ':id/detail',
                component: __WEBPACK_IMPORTED_MODULE_5__detail_user_detail_user_component__["a" /* DetailUserComponent */],
                data: {
                    title: 'Account detail'
                }
            },
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_5__detail_user_detail_user_component__["a" /* DetailUserComponent */],
                data: {
                    title: 'Account detail'
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
            {
                data: {
                    title: 'Update account'
                },
                path: 'update/:id',
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_spinner_spinner_module__ = __webpack_require__("../../../../../src/app/components/spinner/spinner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__update_my_user_update_my_user_component__ = __webpack_require__("../../../../../src/app/views/user-management/update-my-user/update-my-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cmaComponents_cma_module__ = __webpack_require__("../../../../../src/app/cmaComponents/cma.module.ts");
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
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_ladda__["LaddaModule"].forRoot({
                    style: 'expand-left'
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_10_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_11__components_spinner_spinner_module__["a" /* SpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_13__cmaComponents_cma_module__["a" /* CmaModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__create_user_create_user_component__["a" /* CreateUserComponent */],
                __WEBPACK_IMPORTED_MODULE_4__view_user_view_user_component__["a" /* ViewUserComponent */],
                __WEBPACK_IMPORTED_MODULE_5__update_user_update_user_component__["a" /* UpdateUserComponent */],
                __WEBPACK_IMPORTED_MODULE_9__detail_user_detail_user_component__["a" /* DetailUserComponent */],
                __WEBPACK_IMPORTED_MODULE_12__update_my_user_update_my_user_component__["a" /* UpdateMyUserComponent */]
            ]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/user-management/view-user/view-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>View accounts</strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"isPageLoading\"></app-spinner>\r\n      <div *ngIf=!isPageLoading class=\"card-body animated fadeIn\" >\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"search(searchUsername.value)\">\r\n              <i class=\"fa fa-search\"></i> Search\r\n            </button>\r\n          </span>\r\n          <input class=\"form-control\" type=\"text\" (input)=\"search(searchUsername.value)\" #searchUsername>\r\n        </div>\r\n        <div class=\"dataTable-container hide-search\">\r\n          <table datatable [dtOptions]=\"datatableOptions\" class=\"table table-bordered\">\r\n            <thead>\r\n            <tr>\r\n              <th>Avatar</th>\r\n              <th>Username</th>\r\n              <th>Full Name</th>\r\n              <th>Birthdate</th>\r\n              <th>Department</th>\r\n              <th>Role</th>\r\n              <th>Status</th>\r\n              <th>Action</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let user of users;let i = index\">\r\n              <td class=\"text-center\">\r\n                <img *ngIf=\"user.avatar\" src=\"{{user.avatar}}\" class=\"avatar avatar-lg\">\r\n                <img *ngIf=\"!user.avatar\" src=\"/assets/img/100x100_avatar.png\" class=\"avatar avatar-lg\">\r\n              </td>\r\n              <td>\r\n                <a href=\"#/account/detail/{{user.id}}\">{{user.username}}</a>\r\n              </td>\r\n              <td>\r\n                <p *ngIf=\"user.name\">{{user.name}}</p>\r\n                <p *ngIf=\"!user.name\">N/A</p>\r\n              </td>\r\n              <td>\r\n                <p *ngIf=\"user.birthdate\">{{user.birthdate | date:'dd/MM/yyyy'}}</p>\r\n                <p *ngIf=\"!user.birthdate\">N/A</p>\r\n              </td>\r\n              <td>\r\n                <p *ngIf=\"!user.team\">N/A</p>\r\n                <p *ngIf=\"user.team\">{{user.team.name}}</p>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <strong>\r\n                  <p *ngIf=\"user.isAdmin\">Admin</p>\r\n                </strong>\r\n                <strong>\r\n                  <p *ngIf=\"!user.isAdmin && user.isManager\">Manager</p>\r\n                </strong>\r\n                <p *ngIf=\"!user.isAdmin && !user.isManager\">Staff</p>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <p *ngIf=\"user.isActive\">\r\n                  Active\r\n                </p>\r\n                <p *ngIf=\"!user.isActive\">\r\n                  Banned\r\n                </p>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <a href=\"#/account/update/{{user.id}}\">\r\n                  <button type=\"button\" class=\"btn btn-primary\">Update</button>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function ViewUserComponent(router, route, location, userService) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.userService = userService;
        this.datatableOptions = {
            searching: true,
            lengthChange: false,
            columnDefs: [
                {
                    searchable: false,
                    orderable: false,
                    targets: [0, 7]
                }
            ],
            order: [
                [6, 'desc']
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
        this.datatableElement.dtInstance.then(function (dtInstance) { return dtInstance.search(searchStr).draw(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchUsername'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ViewUserComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular_datatables__["a" /* DataTableDirective */])
    ], ViewUserComponent.prototype, "datatableElement", void 0);
    ViewUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-user',
            template: __webpack_require__("../../../../../src/app/views/user-management/view-user/view-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/view-user/view-user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], ViewUserComponent);
    return ViewUserComponent;
}());



/***/ })

});
//# sourceMappingURL=user-management.module.chunk.js.map