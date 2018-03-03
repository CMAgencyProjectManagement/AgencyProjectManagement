webpackJsonp(["user-management.module"],{

/***/ "../../../../../src/app/views/user-management/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"align-content: center\">\r\n  <div class=\"card align-items-center\">\r\n    <h1 style=\"margin-top: 20px\">Create new team</h1>\r\n    <div class=\"card-body\">\r\n      <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 col-form-label\" for=\"username-input\">Username:</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"text\" id=\"username-input\" name=\"username-input\" class=\"form-control\" style=\"position: relative;\r\n            left: -35px;\r\n            width: 257px;\">\r\n            <span class=\"help-block\" style=\"position: relative;\r\n            left: -35px;\">Please enter username</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"password-input\">Password</label>\r\n          <div class=\"col-md-9\">\r\n            <input type=\"password\" id=\"password-input\" name=\"password-input\" class=\"form-control\">\r\n            <span class=\"help-block\">Please enter a complex password</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"name-input\">Fullname:</label>\r\n          <div class=\"col-md-9\">\r\n            <input type=\"text\" id=\"name-input\" name=\"name-input\" class=\"form-control\">\r\n            <span class=\"help-block\">Please enter name</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"email-input\">Email:</label>\r\n          <div class=\"col-md-9\">\r\n            <input type=\"email\" id=\"email-input\" name=\"email-input\" class=\"form-control\">\r\n            <span class=\"help-block\">Please enter your email</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-md-3 col-form-label\" for=\"phone-input\">Phone:</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" id=\"phone-input\" name=\"phone-input\" class=\"form-control\">\r\n              <span class=\"help-block\">Please enter phone number</span>\r\n            </div>\r\n          </div>\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-md-5 col-form-label\" for=\"email-input\">Date of Birth:</label>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"date\">Date</label>\r\n              <select class=\"form-control\" id=\"month\">\r\n                  <option>1</option>\r\n                  <option>2</option>\r\n                  <option>3</option>\r\n                  <option>4</option>\r\n                  <option>5</option>\r\n                  <option>6</option>\r\n                  <option>7</option>\r\n                  <option>8</option>\r\n                  <option>9</option>\r\n                  <option>10</option>\r\n                  <option>11</option>\r\n                  <option>12</option>\r\n                  <option>13</option>\r\n                  <option>14</option>\r\n                  <option>15</option>\r\n                  <option>16</option>\r\n                  <option>17</option>\r\n                  <option>18</option>\r\n                  <option>19</option>\r\n                  <option>20</option>\r\n                  <option>21</option>\r\n                  <option>22</option>\r\n                  <option>23</option>\r\n                  <option>24</option>\r\n                  <option>25</option>\r\n                  <option>26</option>\r\n                  <option>27</option>\r\n                  <option>28</option>\r\n                  <option>29</option>\r\n                  <option>30</option>\r\n                  <option>31</option>\r\n                </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-sm-4\">\r\n            <label for=\"month\">Month</label>\r\n            <select class=\"form-control\" id=\"month\">\r\n              <option>1</option>\r\n              <option>2</option>\r\n              <option>3</option>\r\n              <option>4</option>\r\n              <option>5</option>\r\n              <option>6</option>\r\n              <option>7</option>\r\n              <option>8</option>\r\n              <option>9</option>\r\n              <option>10</option>\r\n              <option>11</option>\r\n              <option>12</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group col-sm-4\">\r\n            <label for=\"year\">Year</label>\r\n            <select class=\"form-control\" id=\"year\">\r\n              <option>2014</option>\r\n              <option>2015</option>\r\n              <option>2016</option>\r\n              <option>2017</option>\r\n              <option>2018</option>\r\n              <option>2019</option>\r\n              <option>2020</option>\r\n              <option>2021</option>\r\n              <option>2022</option>\r\n              <option>2023</option>\r\n              <option>2024</option>\r\n              <option>2025</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"file-input\">Avatar</label>\r\n          <div class=\"col-md-9  \">\r\n            <input type=\"file\" id=\"file-input\" name=\"file-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-actions\" style=\"margin-left: 100px\">\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"handleCreate()\">Save changes\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"handleCreate()\">Save changes 1\r\n          </button>\r\n          <button class=\"btn btn-secondary\" type=\"button\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var tree_service_1 = __webpack_require__("../../../../../src/app/services/tree.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(userService, storeService, router) {
        this.userService = userService;
        this.storeService = storeService;
        this.router = router;
        this.currentAccountCursor = this.storeService.select(['currentUser']);
        this.tokenCursor = this.storeService.select(['token']);
        this.isLoading = false;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        this.signupForm = new forms_1.FormGroup({
            username: new forms_1.FormControl(undefined, forms_1.Validators.required),
            password: new forms_1.FormControl(undefined, forms_1.Validators.required),
            fullname: new forms_1.FormControl(undefined, forms_1.Validators.required),
            email: new forms_1.FormControl(undefined, forms_1.Validators.required),
            gender: new forms_1.FormControl(undefined, forms_1.Validators.required),
            avatar: new forms_1.FormControl(undefined, forms_1.Validators.required)
        });
    };
    CreateUserComponent.prototype.handleCreate = function () {
        var _this = this;
        console.debug('handleCreate 1');
        if (this.signupForm.valid) {
            var formValue = this.signupForm.value;
            this.isLoading = true;
            console.debug('handleCreate 2', formValue);
            this.userService.createUser(formValue.username, formValue.password, formValue.fullname, undefined, undefined, formValue.email).then(function (value) {
                _this.isLoading = false;
            }).catch(function (reason) {
                _this.isLoading = false;
                console.debug(reason);
                _this.handleCreateError(reason.Data);
            });
        }
    };
    CreateUserComponent.prototype.handleCreateError = function (errors) {
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var error = errors_1[_i];
            var fieldName = error.key;
            var errorMessage = error.message;
            console.debug('handleCreateUserError', fieldName, errorMessage);
        }
    };
    CreateUserComponent = __decorate([
        core_1.Component({
            selector: 'app-create-user',
            template: __webpack_require__("../../../../../src/app/views/user-management/create-user/create-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/create-user/create-user.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            tree_service_1.StoreService,
            router_1.Router])
    ], CreateUserComponent);
    return CreateUserComponent;
}());
exports.CreateUserComponent = CreateUserComponent;


/***/ }),

/***/ "../../../../../src/app/views/user-management/update-user/update-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"align-content: center\">\r\n        <div class=\"card align-items-center\">\r\n          <h1 style=\"margin-top: 20px\">Update User</h1>\r\n          <div class=\"card-body\">\r\n            <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-4 col-form-label\" for=\"username-input\">Username:</label>\r\n                <div class=\"col-md-8\">\r\n                  <input type=\"text\" id=\"username-input\" name=\"username-input\" class=\"form-control\" disabled=\"true\" style=\"position: relative;\r\n                  left: -35px;\r\n                  width: 257px;\">\r\n                  <script type=\"text/javascript\">\r\n                    document.write(qs(\"username\"));\r\n                  </script>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"password-input\">Password</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"password\" id=\"password-input\" name=\"password-input\" class=\"form-control\">\r\n                  <span class=\"help-block\">Please enter a complex password</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"name-input\">Fullname:</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" id=\"name-input\" name=\"name-input\" class=\"form-control\">\r\n                  <span class=\"help-block\">Please enter name</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"email-input\">Email:</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"email\" id=\"email-input\" name=\"email-input\" class=\"form-control\">\r\n                  <span class=\"help-block\">Please enter your email</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-md-3 col-form-label\" for=\"phone-input\">Phone:</label>\r\n                  <div class=\"col-md-9\">\r\n                    <input type=\"text\" id=\"phone-input\" name=\"phone-input\" class=\"form-control\">\r\n                    <span class=\"help-block\">Please enter phone number</span>\r\n                  </div>\r\n                </div>\r\n              <div class=\"form-group row\">\r\n                  <label class=\"col-md-5 col-form-label\" for=\"email-input\">Date of Birth:</label>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"date\">Date</label>\r\n                    <select class=\"form-control\" id=\"month\">\r\n                        <option>1</option>\r\n                        <option>2</option>\r\n                        <option>3</option>\r\n                        <option>4</option>\r\n                        <option>5</option>\r\n                        <option>6</option>\r\n                        <option>7</option>\r\n                        <option>8</option>\r\n                        <option>9</option>\r\n                        <option>10</option>\r\n                        <option>11</option>\r\n                        <option>12</option>\r\n                        <option>13</option>\r\n                        <option>14</option>\r\n                        <option>15</option>\r\n                        <option>16</option>\r\n                        <option>17</option>\r\n                        <option>18</option>\r\n                        <option>19</option>\r\n                        <option>20</option>\r\n                        <option>21</option>\r\n                        <option>22</option>\r\n                        <option>23</option>\r\n                        <option>24</option>\r\n                        <option>25</option>\r\n                        <option>26</option>\r\n                        <option>27</option>\r\n                        <option>28</option>\r\n                        <option>29</option>\r\n                        <option>30</option>\r\n                        <option>31</option>\r\n                      </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-sm-4\">\r\n                  <label for=\"month\">Month</label>\r\n                  <select class=\"form-control\" id=\"month\">\r\n                    <option>1</option>\r\n                    <option>2</option>\r\n                    <option>3</option>\r\n                    <option>4</option>\r\n                    <option>5</option>\r\n                    <option>6</option>\r\n                    <option>7</option>\r\n                    <option>8</option>\r\n                    <option>9</option>\r\n                    <option>10</option>\r\n                    <option>11</option>\r\n                    <option>12</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group col-sm-4\">\r\n                  <label for=\"year\">Year</label>\r\n                  <select class=\"form-control\" id=\"year\">\r\n                    <option>2014</option>\r\n                    <option>2015</option>\r\n                    <option>2016</option>\r\n                    <option>2017</option>\r\n                    <option>2018</option>\r\n                    <option>2019</option>\r\n                    <option>2020</option>\r\n                    <option>2021</option>\r\n                    <option>2022</option>\r\n                    <option>2023</option>\r\n                    <option>2024</option>\r\n                    <option>2025</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"file-input\">Avatar</label>\r\n                <div class=\"col-md-9  \">\r\n                  <input type=\"file\" id=\"file-input\" name=\"file-input\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-actions\" style=\"margin-left: 100px\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"handleCreate()\">Save changes\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"handleCreate()\">Save changes 1\r\n                </button>\r\n                <button class=\"btn btn-secondary\" type=\"button\">Cancel</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>"

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var UpdateUserComponent = /** @class */ (function () {
    function UpdateUserComponent(userService) {
        this.userService = userService;
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        this.username = this.GetURLParameter('username');
    };
    UpdateUserComponent.prototype.GetURLParameter = function (sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    };
    UpdateUserComponent = __decorate([
        core_1.Component({
            selector: 'app-update-user',
            template: __webpack_require__("../../../../../src/app/views/user-management/update-user/update-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/update-user/update-user.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UpdateUserComponent);
    return UpdateUserComponent;
}());
exports.UpdateUserComponent = UpdateUserComponent;


/***/ }),

/***/ "../../../../../src/app/views/user-management/user-management-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var create_user_component_1 = __webpack_require__("../../../../../src/app/views/user-management/create-user/create-user.component.ts");
var view_user_component_1 = __webpack_require__("../../../../../src/app/views/user-management/view-user/view-user.component.ts");
var update_user_component_1 = __webpack_require__("../../../../../src/app/views/user-management/update-user/update-user.component.ts");
var routes = [
    {
        path: '',
        data: {
            title: 'Account'
        },
        children: [
            {
                path: 'view',
                component: view_user_component_1.ViewUserComponent,
            },
            {
                path: 'create',
                component: create_user_component_1.CreateUserComponent
            },
            {
                path: 'update',
                component: update_user_component_1.UpdateUserComponent
            }
        ]
    }
];
var UserManagementRoutingModule = /** @class */ (function () {
    function UserManagementRoutingModule() {
    }
    UserManagementRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], UserManagementRoutingModule);
    return UserManagementRoutingModule;
}());
exports.UserManagementRoutingModule = UserManagementRoutingModule;


/***/ }),

/***/ "../../../../../src/app/views/user-management/user-management.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var user_management_routing_module_1 = __webpack_require__("../../../../../src/app/views/user-management/user-management-routing.module.ts");
var create_user_component_1 = __webpack_require__("../../../../../src/app/views/user-management/create-user/create-user.component.ts");
var view_user_component_1 = __webpack_require__("../../../../../src/app/views/user-management/view-user/view-user.component.ts");
var update_user_component_1 = __webpack_require__("../../../../../src/app/views/user-management/update-user/update-user.component.ts");
var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                user_management_routing_module_1.UserManagementRoutingModule
            ],
            declarations: [create_user_component_1.CreateUserComponent, view_user_component_1.ViewUserComponent, update_user_component_1.UpdateUserComponent]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());
exports.UserManagementModule = UserManagementModule;


/***/ }),

/***/ "../../../../../src/app/views/user-management/view-user/view-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\r\n  <span class=\"input-group-btn\">\r\n    <button class=\"btn btn-primary\" type=\"button\"\r\n            (click)=\"search(searchUsername.value)\">\r\n      <i class=\"fa fa-search\"></i> Search\r\n    </button>\r\n  </span>\r\n  <input class=\"form-control\" placeholder=\"Name\" type=\"text\"\r\n         #searchUsername>\r\n</div>\r\n<br/>\r\n<table class=\"table table-bordered\">\r\n  <thead>\r\n  <tr>\r\n    <th>No.</th>\r\n    <th>Username</th>\r\n    <th>Full Name</th>\r\n    <th>Birthdate</th>\r\n    <th>Email</th>\r\n    <th>Phone Number</th>\r\n    <th>Avatar</th>\r\n    <th>Admin</th>\r\n    <th>Status</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let user of pagedUsers;let i = index\">\r\n    <th scope=\"row\">{{i + (pager.currentPage-1)*pager.pageSize + 1}}</th>\r\n    <td>\r\n      <a href=\"#/account/update?username={{user.username}}\">{{user.username}}</a>\r\n    </td>\r\n    <td>\r\n      <p *ngIf=\"user.name\">{{user.name}}</p>\r\n      <p *ngIf=\"!user.name\">N/A</p>\r\n    </td>\r\n    <td>\r\n      <p *ngIf=\"user.birthDate\">{{user.birthDate}}</p>\r\n      <p *ngIf=\"!user.birthDate\">N/A</p>\r\n    </td>\r\n    <td>\r\n      <p *ngIf=\"user.email\">{{user.email}}</p>\r\n      <p *ngIf=\"!user.email\">N/A</p>\r\n    </td>\r\n    <td>\r\n      <p *ngIf=\"user.phone\">{{user.phone}}</p>\r\n      <p *ngIf=\"!user.phone\">N/A</p>\r\n    </td>\r\n    <td>\r\n      <img *ngIf=\"user.avatar\" src=\"{{user.avatar}}\" class=\"avatar avatar-lg\">\r\n      <img *ngIf=\"!user.avatar\" src=\"https://www.placehold.it/100x100?text=avatar\" class=\"avatar avatar-lg\">\r\n    </td>\r\n    <td>\r\n      <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n        <input type=\"checkbox\" disabled=\"true\" class=\"switch-input\" [attr.checked]=\"user.isAdmin ? '' : null\">\r\n        <span class=\"switch-label\"></span>\r\n        <span class=\"switch-handle\"></span>\r\n      </label>\r\n    </td>\r\n    <td>\r\n      <span *ngIf=\"user.isActive\" class=\"badge badge-success\">Active</span>\r\n      <span *ngIf=\"!user.isActive\" class=\"badge badge-danger\">Disable</span>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<!-- pager -->\r\n<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n  <li [ngClass]=\"[pager.currentPage === 1 ? 'disabled' : '', 'page-item']\">\r\n    <a class=\"page-link fake-link\" (click)=\"setPage(1)\">First</a>\r\n  </li>\r\n  <li [ngClass]=\"[pager.currentPage === 1 ? 'disabled' : '', 'page-item']\">\r\n    <a class=\"page-link fake-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n  </li>\r\n  <li *ngFor=\"let page of pager.pages\" [ngClass]=\"[pager.currentPage === page ? 'active' : '', 'page-item']\">\r\n    <a class=\"page-link fake-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n  </li>\r\n  <li [ngClass]=\"[pager.currentPage === pager.totalPages ? 'disabled' : '', 'page-item']\">\r\n    <a class=\"page-link fake-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n  </li>\r\n  <li [ngClass]=\"[pager.currentPage === pager.totalPages ? 'disabled' : '', 'page-item']\">\r\n    <a class=\"page-link fake-link\" (click)=\"setPage(pager.totalPages)\">Last</a>\r\n  </li>\r\n</ul>\r\n"

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var pager_service_1 = __webpack_require__("../../../../../src/app/services/pager.service.ts");
var _ = __webpack_require__("../../../../lodash/lodash.js");
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
        console.debug('setPage', users);
        this.pager = this.pagerService.getPager(users.length, page, 7);
        this.pagedUsers = users.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    // search by username
    ViewUserComponent.prototype.search = function (name) {
        if (name) {
            var filteredUser = _.filter(this.users, function (user) {
                return user.name && _.toLower(user.name).indexOf(_.toLower(name)) >= 0;
            });
            console.debug('search', name, this.users, this.pagedUsers, filteredUser);
            this.pager = {};
            this.setPage(1, filteredUser);
        }
        else {
            this.setPage(1);
        }
    };
    __decorate([
        core_1.ViewChild('searchUsername'),
        __metadata("design:type", core_1.ElementRef)
    ], ViewUserComponent.prototype, "input", void 0);
    ViewUserComponent = __decorate([
        core_1.Component({
            selector: 'app-view-user',
            template: __webpack_require__("../../../../../src/app/views/user-management/view-user/view-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/view-user/view-user.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            pager_service_1.PagerService])
    ], ViewUserComponent);
    return ViewUserComponent;
}());
exports.ViewUserComponent = ViewUserComponent;


/***/ })

});
//# sourceMappingURL=user-management.module.chunk.js.map