webpackJsonp(["user-management.module"],{

/***/ "../../../../../src/app/views/user-management/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"align-content: center\">\r\n  <div class=\"card align-items-center\">\r\n    <h1>Create new account</h1>\r\n    <div class=\"card-body\">\r\n      <div [formGroup]=\"signupForm\" class=\"form-horizontal\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 col-form-label\" for=\"username-input\">Username:</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"text\" id=\"username-input\" name=\"username-input\" class=\"form-control\"\r\n                   formControlName=\"username\">\r\n            <!--<span class=\"help-block\">Please enter username</span>-->\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 col-form-label\" for=\"password-input\">Password</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"password\" id=\"password-input\" name=\"password-input\" class=\"form-control\"\r\n                   formControlName=\"password\">\r\n            <!--<span class=\"help-block\">Please enter a complex password</span>-->\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 col-form-label\" for=\"name-input\">Fullname:</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"text\" id=\"name-input\" name=\"name-input\" class=\"form-control\"\r\n                   formControlName=\"fullname\">\r\n            <!--<span class=\"help-block\">Please enter name</span>-->\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 col-form-label\" for=\"email-input\">Email:</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"email\" id=\"email-input\" name=\"email-input\" class=\"form-control\"\r\n                   formControlName=\"email\">\r\n            <!--<span class=\"help-block\">Please enter your email</span>-->\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 col-form-label\" for=\"phone-input\">Phone:</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"text\" id=\"phone-input\" name=\"phone-input\" class=\"form-control\"\r\n                   formControlName=\"phone\">\r\n            <!--<span class=\"help-block\">Please enter phone number</span>-->\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 col-form-label\" for=\"email-input\">Date of Birth:</label>\r\n            <my-date-picker class=\"col-md-8\" name=\"mydate\" [options]=\"myDatePickerOptions\"\r\n                            required></my-date-picker>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 col-form-label\" for=\"file-input\">Avatar</label>\r\n          <div class=\"col-md-8  \">\r\n            <input type=\"file\" id=\"file-input\" name=\"file-input\"\r\n                   #avatarFile>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-actions\" style=\"margin-left: 100px\">\r\n          <button class=\"btn btn-primary\" (click)=\"handleCreate()\">Save changes\r\n          </button>\r\n          <button class=\"btn btn-secondary\" type=\"button\" (click)=\"resetForm()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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





var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(userService, storeService, router) {
        this.userService = userService;
        this.storeService = storeService;
        this.router = router;
        // https://github.com/kekeh/mydatepicker
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'dd/mm/yyyy',
            showInputField: true,
            openSelectorTopOfInput: true,
            showTodayBtn: false
        };
        this.model = { date: { year: 2018, month: 10, day: 9 } };
        this.currentAccountCursor = this.storeService.select(['currentUser']);
        this.tokenCursor = this.storeService.select(['token']);
        this.isLoading = false;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined),
            fullname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined),
            birthDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined),
            avatar: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined)
        });
    };
    CreateUserComponent.prototype.handleCreate = function () {
        var _this = this;
        console.debug('handleCreate 1');
        if (this.signupForm.valid) {
            var formValue = this.signupForm.value;
            this.isLoading = true;
            console.debug('handleCreate 2', formValue);
            // birthdate
            var day = formValue.day;
            var month = formValue.month;
            var year = formValue.year;
            // const time = moment('2010-10-20 4:30', 'YYYY-MM-DD');
            this.userService.createUser(formValue.username, formValue.password, formValue.fullname, formValue.phone, undefined, formValue.email).then(function (value) {
                _this.isLoading = false;
            }).catch(function (reason) {
                _this.isLoading = false;
                console.debug(reason);
                _this.handleCreateError(reason.Data);
            });
        }
    };
    CreateUserComponent.prototype.resetForm = function () {
        var formValue = this.signupForm.value;
    };
    CreateUserComponent.prototype.setDate = function () {
        // Set today date using the patchValue function
        var date = new Date();
        this.signupForm.patchValue({
            myDate: {
                date: {
                    year: date.getFullYear(),
                    month: date.getMonth() + 1,
                    day: date.getDate()
                }
            }
        });
    };
    CreateUserComponent.prototype.clearDate = function () {
        // Clear the date using the patchValue function
        this.signupForm.patchValue({ myDate: null });
    };
    CreateUserComponent.prototype.handleCreateError = function (errors) {
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var error = errors_1[_i];
            var fieldName = error.key;
            var errorMessage = error.message;
            console.debug('handleCreateUserError', fieldName, errorMessage);
        }
    };
    CreateUserComponent.prototype.onDateChanged = function (event) {
        console.debug('onDateChanged', event.date);
    };
    CreateUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__("../../../../../src/app/views/user-management/create-user/create-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/create-user/create-user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_tree_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user-management/update-user/update-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"align-content: center\">\r\n  <div class=\"card align-items-center\">\r\n    <h1 style=\"margin-top: 20px\">Update User</h1>\r\n    <div class=\"card-body\">\r\n      <!--<form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">-->\r\n      <div class=\"card-body\" *ngIf=\"foundUser\" [formGroup]=\"updateForm\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 col-form-label\" for=\"username-input\">Username:</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"text\" id=\"username-input\" name=\"username-input\" class=\"form-control\" disabled=\"true\"\r\n              style=\"position: relative;\r\n                  left: -35px;\r\n                  width: 257px;\" *ngIf=\"foundUser.username\" value=\" {{foundUser.username}}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"name-input\">Fullname:</label>\r\n          <div class=\"col-md-9\">\r\n            <input formControlName=\"fullname\" type=\"text\" id=\"name-input\" name=\"name-input\" class=\"form-control\" value=\"{{foundUser.name}}\">\r\n            <span class=\"help-block\">Please enter name</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"email-input\">Email:</label>\r\n          <div class=\"col-md-9\">\r\n            <input formControlName=\"email\" type=\"email\" id=\"email-input\" name=\"email-input\" class=\"form-control\" value=\" {{foundUser.email}}\">\r\n            <span class=\"help-block\">Please enter your email</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"phone-input\">Phone:</label>\r\n          <div class=\"col-md-9\">\r\n            <input formControlName=\"phone\" type=\"text\" id=\"phone-input\" name=\"phone-input\" class=\"form-control\" value=\"{{foundUser.phone}}\" OnlyNumber=\"true\">\r\n            <span class=\"help-block\">Please enter phone number</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-5 col-form-label\" for=\"date\">Date of Birth:</label>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"date\">Date</label>\r\n              <select class=\"form-control\" id=\"date\">\r\n                <option>1</option>\r\n                <option>2</option>\r\n                <option>3</option>\r\n                <option>4</option>\r\n                <option>5</option>\r\n                <option>6</option>\r\n                <option>7</option>\r\n                <option>8</option>\r\n                <option>9</option>\r\n                <option>10</option>\r\n                <option>11</option>\r\n                <option>12</option>\r\n                <option>13</option>\r\n                <option>14</option>\r\n                <option>15</option>\r\n                <option>16</option>\r\n                <option>17</option>\r\n                <option>18</option>\r\n                <option>19</option>\r\n                <option>20</option>\r\n                <option>21</option>\r\n                <option>22</option>\r\n                <option>23</option>\r\n                <option>24</option>\r\n                <option>25</option>\r\n                <option>26</option>\r\n                <option>27</option>\r\n                <option>28</option>\r\n                <option>29</option>\r\n                <option>30</option>\r\n                <option>31</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-sm-4\">\r\n            <label for=\"month\">Month</label>\r\n            <select class=\"form-control\" id=\"month\">\r\n              <option>1</option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option>4</option>\r\n              <option>5</option>\r\n              <option>6</option>\r\n              <option>7</option>\r\n              <option>8</option>\r\n              <option>9</option>\r\n              <option>10</option>\r\n              <option>11</option>\r\n              <option>12</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group col-sm-4\">\r\n            <label for=\"year\">Year</label>\r\n            <select class=\"form-control\" id=\"year\">\r\n              <option>2014</option>\r\n              <option>2015</option>\r\n              <option>2016</option>\r\n              <option>2017</option>\r\n              <option>2018</option>\r\n              <option>2019</option>\r\n              <option>2020</option>\r\n              <option>2021</option>\r\n              <option>2022</option>\r\n              <option>2023</option>\r\n              <option>2024</option>\r\n              <option>2025</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"file-input\">Avatar</label>\r\n          <div class=\"col-md-9  \">\r\n            <input type=\"file\" id=\"file-input\" name=\"file-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-actions\" style=\"margin-left: 100px\">\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"handleUpdate()\">Update\r\n          </button>\r\n          <button class=\"btn btn-secondary\" type=\"button\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
    function UpdateUserComponent(userService, storeService, router) {
        this.userService = userService;
        this.storeService = storeService;
        this.router = router;
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userID = Number(this.GetURLParameter('id'));
        this.userService.getAllUser()
            .then(function (value) {
            _this.users = value;
            for (var i = 0; i < _this.users.length; i++) {
                if (_this.users[i].id == _this.userID) {
                    _this.foundUser = _this.users[i];
                    // this.updateForm.value.fullname= this.foundUser.name;
                    _this.updateForm.controls['fullname'].setValue(_this.foundUser.name);
                    _this.updateForm.value.email = _this.foundUser.email;
                    _this.updateForm.value.phone = _this.foundUser.phone;
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
    UpdateUserComponent.prototype.updateUser = function (username, fullname, email, phone) {
        console.debug("updateUser :", username, fullname, email, phone);
    };
    UpdateUserComponent.prototype.GetURLParameter = function (sParam) {
        var sPageURL = window.location.href;
        var sURLVariables = sPageURL.split('?');
        var sUsername = sURLVariables[1].split('=');
        return sUsername[1];
    };
    UpdateUserComponent.prototype.handleUpdate = function () {
        var _this = this;
        if (confirm("Save change?")) {
            if (this.updateForm.valid) {
                this.isLoading = true;
                var formValue = this.updateForm.value;
                this.userService.updateUser(this.foundUser.id, formValue.fullname, formValue.phone, "12/24/2018", formValue.email).then(function (value) {
                    _this.isLoading = false;
                    _this.router.navigate(['dashboard']);
                }).catch(function (reason) {
                    _this.isLoading = false;
                    _this.errorMessage = reason.message;
                });
                //console.debug("updateUser :", this.username, formValue.fullname, formValue.email, formValue.phone)
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
                data: {
                    title: 'Create accounts'
                },
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_2__create_user_create_user_component__["a" /* CreateUserComponent */]
            },
            {
                data: {
                    title: 'Update accounts'
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
                __WEBPACK_IMPORTED_MODULE_8_mydatepicker__["MyDatePickerModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__create_user_create_user_component__["a" /* CreateUserComponent */], __WEBPACK_IMPORTED_MODULE_4__view_user_view_user_component__["a" /* ViewUserComponent */], __WEBPACK_IMPORTED_MODULE_5__update_user_update_user_component__["a" /* UpdateUserComponent */]]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/user-management/view-user/view-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\r\n  <span class=\"input-group-btn\">\r\n    <button class=\"btn btn-primary\" type=\"button\"\r\n            (click)=\"search(searchUsername.value)\">\r\n      <i class=\"fa fa-search\"></i> Search\r\n    </button>\r\n  </span>\r\n  <input class=\"form-control\" placeholder=\"Name\" type=\"text\"\r\n         #searchUsername>\r\n</div>\r\n<br/>\r\n<table class=\"table table-bordered\">\r\n  <thead>\r\n  <tr>\r\n    <th>No.</th>\r\n    <th>Avatar</th>\r\n    <th>Full Name</th>\r\n    <th>Username</th>\r\n    <th>Birthdate</th>\r\n    <th>Team</th>\r\n    <th>Role</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let user of pagedUsers;let i = index\">\r\n    <th scope=\"row\">{{i + (pager.currentPage-1)*pager.pageSize + 1}}</th>\r\n    <td>\r\n      <img *ngIf=\"user.avatar\" src=\"{{user.avatar}}\" class=\"avatar avatar-lg\">\r\n      <img *ngIf=\"!user.avatar\" src=\"https://www.placehold.it/100x100?text=avatar\" class=\"avatar avatar-lg\">\r\n    </td>\r\n    <td>\r\n      <p *ngIf=\"user.name\">{{user.name}}</p>\r\n      <p *ngIf=\"!user.name\">N/A</p>\r\n    </td>\r\n    <td>\r\n      <a href=\"#/account/update?id={{user.id}}\">{{user.username}}</a>\r\n    </td>\r\n    <td>\r\n      <p *ngIf=\"user.birthDate\">{{user.birthDate}}</p>\r\n      <p *ngIf=\"!user.birthDate\">N/A</p>\r\n    </td>\r\n    <td>\r\n      <p>{{user.team.name}}</p>\r\n    </td>\r\n    <td>\r\n      <strong><p *ngIf=\"user.isManager\" >Manager</p></strong>\r\n      <p *ngIf=\"!user.isManager\">Staff</p>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<!-- pager -->\r\n<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n  <li [ngClass]=\"[pager.currentPage === 1 ? 'disabled' : '', 'page-item']\">\r\n    <a class=\"page-link fake-link\" (click)=\"setPage(1)\">First</a>\r\n  </li>\r\n  <li [ngClass]=\"[pager.currentPage === 1 ? 'disabled' : '', 'page-item']\">\r\n    <a class=\"page-link fake-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n  </li>\r\n  <li *ngFor=\"let page of pager.pages\" [ngClass]=\"[pager.currentPage === page ? 'active' : '', 'page-item']\">\r\n    <a class=\"page-link fake-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n  </li>\r\n  <li [ngClass]=\"[pager.currentPage === pager.totalPages ? 'disabled' : '', 'page-item']\">\r\n    <a class=\"page-link fake-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n  </li>\r\n  <li [ngClass]=\"[pager.currentPage === pager.totalPages ? 'disabled' : '', 'page-item']\">\r\n    <a class=\"page-link fake-link\" (click)=\"setPage(pager.totalPages)\">Last</a>\r\n  </li>\r\n</ul>\r\n"

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
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUser()
            .then(function (value) {
            _this.users = value;
            _this.setPage(1);
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
    // search by username
    ViewUserComponent.prototype.search = function (name) {
        if (name) {
            var filteredUser = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.users, function (user) {
                return user.name && __WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"](user.name).indexOf(__WEBPACK_IMPORTED_MODULE_3_lodash__["toLower"](name)) >= 0;
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