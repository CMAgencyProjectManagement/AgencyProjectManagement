webpackJsonp(["user-management.module"],{

/***/ "../../../../../src/app/views/user-management/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Create account</strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"isLoadingPage\"></app-spinner>\r\n      <div class=\"card-body animated fadeIn\" *ngIf=\"!isLoadingPage\">\r\n        <div [formGroup]=\"signupForm\" class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"username-input\">Username</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"username-input\" name=\"username-input\"\r\n                     [ngClass]=\"{'form-control': true, 'is-invalid': errors.username}\"\r\n                     formControlName=\"username\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.username\">{{errors.username}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"password-input\">Password</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"password\" id=\"password-input\" name=\"password-input\"\r\n                     [ngClass]=\"{'form-control': true, 'is-invalid': errors.password}\"\r\n                     formControlName=\"password\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.password\">{{errors.password}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"name-input\">Fullname</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"name-input\" name=\"name-input\" class=\"form-control\"\r\n                     [ngClass]=\"{'form-control': true, 'is-invalid': errors.fullname}\"\r\n                     formControlName=\"fullname\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.fullname\">{{errors.fullname}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"email-input\">Email</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"email\" id=\"email-input\" name=\"email-input\"\r\n                     [ngClass]=\"{'form-control': true, 'is-invalid': errors.email}\"\r\n                     formControlName=\"email\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.email\">{{errors.email}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"phone-input\">Phone</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"phone-input\" name=\"phone-input\" class=\"form-control\"\r\n                     [ngClass]=\"{'form-control': true, 'is-invalid': errors.phone}\"\r\n                     formControlName=\"phone\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.phone\">{{errors.phone}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"email-input\">Date of Birth</label>\r\n            <div class=\"col-8\">\r\n              <my-date-picker [options]=\"myDatePickerOptions\"\r\n                              formControlName=\"birthDate\"\r\n                              [ngClass]=\"{'form-control': false, 'is-invalid': errors.birthdate}\"\r\n                              required></my-date-picker>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.birthdate\">{{errors.birthdate}}</div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-group row\" *ngIf=\"teams\">\r\n            <label class=\"col-4 col-form-label text-right\">Team</label>\r\n            <div class=\"col-8\">\r\n              <select formControlName=\"team\"\r\n                      [ngClass]=\"{'form-control': true, 'is-invalid': errors.team}\">\r\n                <option *ngFor=\"let team of teams\" value=\"{{team.id}}\">{{team.name}}</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.team\">{{errors.team}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"file-input\">Avatar</label>\r\n            <div class=\"col-8\">\r\n              <input type=\"file\" id=\"file-input\" name=\"file-input\"\r\n                     [ngClass]=\"{'form-control': false, 'is-invalid': errors.avatar}\"\r\n                     (change)=\"avatarFileChange($event)\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.avatar\">{{errors.avatar}}</div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"form-actions text-center\">\r\n            <div class=\"col-12\">\r\n              <button class=\"btn btn-primary\"\r\n                      (click)=\"handleCreate()\"\r\n                      [ladda] = \"isLoading\">\r\n                Save changes\r\n              </button>\r\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"signupForm.reset()\">Reset</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/user-management/create-user/create-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/views/user-management/detail-user/detail-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/user-management/detail-user/detail-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function DetailUserComponent() {
    }
    DetailUserComponent.prototype.ngOnInit = function () {
    };
    DetailUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail-user',
            template: __webpack_require__("../../../../../src/app/views/user-management/detail-user/detail-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/detail-user/detail-user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailUserComponent);
    return DetailUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user-management/update-user/update-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <strong>Update User</strong>\n      </div>\n      <app-spinner *ngIf=\"isLoadingPage\"></app-spinner>\n      <div class=\"card-body animated fadeIn\" *ngIf=\"!isLoadingPage\">\n        <div [formGroup]=\"updateForm\" class=\"form-horizontal col-6\">\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\" for=\"name-input\">Fullname</label>\n            <div class=\"col-8\">\n              <input type=\"text\" id=\"name-input\" name=\"name-input\" class=\"form-control\"\n                     [ngClass]=\"{'form-control': true, 'is-invalid': errors.fullname}\"\n                     formControlName=\"fullname\">\n              <div class=\"invalid-feedback\" *ngIf=\"errors.fullname\">{{errors.fullname}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\" for=\"email-input\">Email</label>\n            <div class=\"col-8\">\n              <input type=\"email\" id=\"email-input\" name=\"email-input\"\n                     [ngClass]=\"{'form-control': true, 'is-invalid': errors.email}\"\n                     formControlName=\"email\">\n              <div class=\"invalid-feedback\" *ngIf=\"errors.email\">{{errors.email}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\" for=\"phone-input\">Phone</label>\n            <div class=\"col-8\">\n              <input type=\"text\" id=\"phone-input\" name=\"phone-input\" class=\"form-control\"\n                     [ngClass]=\"{'form-control': true, 'is-invalid': errors.phone}\"\n                     formControlName=\"phone\">\n              <div class=\"invalid-feedback\" *ngIf=\"errors.phone\">{{errors.phone}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\" for=\"email-input\">Date of Birth</label>\n            <div class=\"col-8\">\n              <my-date-picker [options]=\"myDatePickerOptions\"\n                              formControlName=\"birthDate\"\n                              [ngClass]=\"{'form-control': false, 'is-invalid': errors.birthdate}\"\n                              required></my-date-picker>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.birthdate\">{{errors.birthdate}}</div>\n            </div>\n\n          </div>\n          <div class=\"form-group row\" *ngIf=\"teams\">\n            <label class=\"col-4 col-form-label text-right\">Team</label>\n            <div class=\"col-8\">\n              <select formControlName=\"team\"\n                      [ngClass]=\"{'form-control': true, 'is-invalid': errors.team}\">\n                <option *ngFor=\"let team of teams\" value=\"{{team.id}}\">{{team.name}}</option>\n              </select>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.team\">{{errors.team}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\" for=\"file-input\">Avatar</label>\n            <div class=\"col-8\">\n              <input type=\"file\" id=\"file-input\" name=\"file-input\"\n                     [ngClass]=\"{'form-control': false, 'is-invalid': errors.avatar}\"\n                     (change)=\"avatarFileChange($event)\">\n              <div class=\"invalid-feedback\" *ngIf=\"errors.avatar\">{{errors.avatar}}</div>\n            </div>\n\n          </div>\n          <div class=\"form-actions text-center\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-primary\"\n                      (click)=\"handleUpdate()\"\n                      [ladda]=\"isLoading\">\n                Save changes\n              </button>\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"signupForm.reset()\">Cancel</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
                    title: 'View accounts'
                },
                path: 'view',
                component: __WEBPACK_IMPORTED_MODULE_3__view_user_view_user_component__["a" /* ViewUserComponent */],
            },
            {
                path: 'detail',
                component: __WEBPACK_IMPORTED_MODULE_5__detail_user_detail_user_component__["a" /* DetailUserComponent */],
                data: {
                    title: 'Detail '
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
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__create_user_create_user_component__["a" /* CreateUserComponent */],
                __WEBPACK_IMPORTED_MODULE_4__view_user_view_user_component__["a" /* ViewUserComponent */],
                __WEBPACK_IMPORTED_MODULE_5__update_user_update_user_component__["a" /* UpdateUserComponent */],
                __WEBPACK_IMPORTED_MODULE_9__detail_user_detail_user_component__["a" /* DetailUserComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components__["l" /* SpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components__["k" /* SortIconComponent */]
            ]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/user-management/view-user/view-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <strong>View all accounts</strong>\n      </div>\n      <app-spinner *ngIf=\"isPageLoading\"></app-spinner>\n      <div class=\"card-body animated fadeIn\" *ngIf=!isPageLoading>\n        <div class=\"input-group\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-primary\" type=\"button\"\n                    (click)=\"search(searchUsername.value)\">\n              <i class=\"fa fa-search\"></i> Search\n            </button>\n          </span>\n          <input class=\"form-control\" type=\"text\"\n                 (input)=\"search(searchUsername.value)\"\n                 #searchUsername>\n        </div>\n        <br/>\n        <table class=\"table table-bordered\">\n          <thead>\n          <tr>\n            <th>\n              <app-sort-icon [isDesc]=\"true\" (click)=\"sort('No.')\">No.</app-sort-icon>\n            </th>\n            <th>Avatar</th>\n            <th>Full Name</th>\n            <th>Username</th>\n            <th>Birthdate</th>\n            <th>Team</th>\n            <th>Role</th>\n            <th>Status</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let user of pagedUsers;let i = index\">\n            <th scope=\"row\">{{i + (pager.currentPage-1)*pager.pageSize + 1}}</th>\n            <td>\n              <img *ngIf=\"user.avatar\" src=\"{{user.avatar}}\" class=\"avatar avatar-lg\">\n              <img *ngIf=\"!user.avatar\" src=\"https://www.placehold.it/100x100?text=avatar\" class=\"avatar avatar-lg\">\n            </td>\n            <td>\n              <p *ngIf=\"user.name\">{{user.name}}</p>\n              <p *ngIf=\"!user.name\">N/A</p>\n            </td>\n            <td>\n              <a href=\"#/account/update?id={{user.id}}\">{{user.username}}</a>\n            </td>\n            <td>\n              <p *ngIf=\"user.birthDate\">{{user.birthDate}}</p>\n              <p *ngIf=\"!user.birthDate\">N/A</p>\n            </td>\n            <td>\n              <p>{{user.team.name}}</p>\n            </td>\n            <td>\n              <strong><p *ngIf=\"user.isManager\">Manager</p></strong>\n              <p *ngIf=\"!user.isManager\">Staff</p>\n            </td>\n            <td>\n              <span class=\"badge badge-success\"\n                    *ngIf=\"user.isActive\">\n                Active\n              </span>\n              <span class=\"badge badge-danger\"\n                    *ngIf=\"!user.isActive\">\n                Banned\n              </span>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n\n        <!-- pager -->\n        <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n          <li [ngClass]=\"[pager.currentPage === 1 ? 'disabled' : '', 'page-item']\">\n            <a class=\"page-link fake-link\" (click)=\"setPage(1)\">First</a>\n          </li>\n          <li [ngClass]=\"[pager.currentPage === 1 ? 'disabled' : '', 'page-item']\">\n            <a class=\"page-link fake-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n          </li>\n          <li *ngFor=\"let page of pager.pages\" [ngClass]=\"[pager.currentPage === page ? 'active' : '', 'page-item']\">\n            <a class=\"page-link fake-link\" (click)=\"setPage(page)\">{{page}}</a>\n          </li>\n          <li [ngClass]=\"[pager.currentPage === pager.totalPages ? 'disabled' : '', 'page-item']\">\n            <a class=\"page-link fake-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n          </li>\n          <li [ngClass]=\"[pager.currentPage === pager.totalPages ? 'disabled' : '', 'page-item']\">\n            <a class=\"page-link fake-link\" (click)=\"setPage(pager.totalPages)\">Last</a>\n          </li>\n        </ul>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/user-management/view-user/view-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table.table-bordered {\n  background-color: white;\n  margin-bottom: 0; }\n\n.fake-link {\n  cursor: pointer; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pager_service__ = __webpack_require__("../../../../../src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
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
    function ViewUserComponent(userService, pagerService) {
        this.userService = userService;
        this.pagerService = pagerService;
        // pager object
        this.pager = {};
        this.isPageLoading = true;
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUser()
            .then(function (value) {
            _this.users = value;
            _this.setPage(1);
            _this.isPageLoading = false;
        });
    };
    ViewUserComponent.prototype.setPage = function (page, users) {
        if (users === void 0) { users = undefined; }
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        if (!users) {
            users = this.users;
        }
        this.pager = this.pagerService.getPager(users.length, page, 7);
        this.pagedUsers = users.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ViewUserComponent.prototype.sort = function (attr) {
        // switch (attr) {
        //   case 'No.': {
        //     this.users = _.sortBy(users);
        //   }
        // }
    };
    // search by username
    ViewUserComponent.prototype.search = function (searchStr) {
        if (searchStr) {
            var filteredUser = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.users, function (user) {
                var result;
                result = user.name && __WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"](user.name).indexOf(__WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"](searchStr)) >= 0;
                if (!result) {
                    result = user.username && __WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"](user.username).indexOf(__WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"](searchStr)) >= 0;
                }
                if (!result) {
                    result = user.birthDate && __WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"](user.birthDate).indexOf(__WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"](searchStr)) >= 0;
                }
                if (!result) {
                    result = user.team && __WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"](user.team.name).indexOf(__WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"](searchStr)) >= 0;
                }
                if (!result) {
                    if (user.isManager) {
                        result = __WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"]('Manager').indexOf(__WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"](searchStr)) >= 0;
                    }
                    else {
                        result = __WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"]('Staff').indexOf(__WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"](searchStr)) >= 0;
                    }
                }
                if (!result) {
                    if (user.isActive) {
                        result = __WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"]('Active').indexOf(__WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"](searchStr)) >= 0;
                    }
                    else {
                        result = __WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"]('Banned').indexOf(__WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"](searchStr)) >= 0;
                    }
                }
                return result;
            });
            this.pager = {};
            this.setPage(1, filteredUser);
        }
        else {
            this.setPage(1);
        }
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_pager_service__["a" /* PagerService */]])
    ], ViewUserComponent);
    return ViewUserComponent;
}());



/***/ })

});
//# sourceMappingURL=user-management.module.chunk.js.map