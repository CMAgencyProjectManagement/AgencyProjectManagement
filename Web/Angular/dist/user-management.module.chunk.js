webpackJsonp(["user-management.module"],{

/***/ "../../../../../src/app/views/user-management/create-user/create-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"align-content: center\">\r\n  <div class=\"card align-items-center\">\r\n    <h1 style=\"margin-top: 20px\">Sign up</h1>\r\n    <div class=\"card-body\">\r\n      <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-4 col-form-label\" for=\"username-input\">Username:</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"text\" id=\"username-input\" name=\"username-input\" class=\"form-control\" style=\"position: relative;\r\n            left: -31px;\r\n            width: 257px;\">\r\n            <span class=\"help-block\" style=\"position: relative;\r\n            left: -30px;\">Please enter username</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"password-input\">Password</label>\r\n          <div class=\"col-md-9\">\r\n            <input type=\"password\" id=\"password-input\" name=\"password-input\" class=\"form-control\">\r\n            <span class=\"help-block\">Please enter a complex password</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"name-input\">Fullname:</label>\r\n          <div class=\"col-md-9\">\r\n            <input type=\"email\" id=\"name-input\" name=\"name-input\" class=\"form-control\">\r\n            <span class=\"help-block\">Please enter name</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"email-input\">Email:</label>\r\n          <div class=\"col-md-9\">\r\n            <input type=\"email\" id=\"email-input\" name=\"email-input\" class=\"form-control\">\r\n            <span class=\"help-block\">Please enter your email</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"select1\">Gender</label>\r\n          <div class=\"col-md-9\">\r\n            <select id=\"select1\" name=\"select1\" class=\"form-control\">\r\n              <option value=\"0\">Please select</option>\r\n              <option value=\"1\">Female</option>\r\n              <option value=\"2\">Male</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"disabledSelect\">Position</label>\r\n          <div class=\"col-md-9\">\r\n            <select id=\"disabledSelect\" class=\"form-control\" disabled>\r\n              <option value=\"0\">Employee</option>\r\n              <option value=\"1\">Option #1</option>\r\n              <option value=\"2\">Option #2</option>\r\n              <option value=\"3\">Option #3</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-3 col-form-label\" for=\"file-input\">Avatar</label>\r\n          <div class=\"col-md-9  \">\r\n            <input type=\"file\" id=\"file-input\" name=\"file-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-actions\" style=\"margin-left: 100px\">\r\n          <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\r\n          <button class=\"btn btn-secondary\" type=\"button\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

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
    function CreateUserComponent() {
    }
    CreateUserComponent.prototype.ngOnInit = function () {
    };
    CreateUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__("../../../../../src/app/views/user-management/create-user/create-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/create-user/create-user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateUserComponent);
    return CreateUserComponent;
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
                path: 'view',
                component: __WEBPACK_IMPORTED_MODULE_3__view_user_view_user_component__["a" /* ViewUserComponent */],
            },
            {
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_2__create_user_create_user_component__["a" /* CreateUserComponent */]
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
                __WEBPACK_IMPORTED_MODULE_2__user_management_routing_module__["a" /* UserManagementRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__create_user_create_user_component__["a" /* CreateUserComponent */], __WEBPACK_IMPORTED_MODULE_4__view_user_view_user_component__["a" /* ViewUserComponent */]]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/user-management/view-user/view-user.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\">\r\n  <thead>\r\n    <tr>\r\n      <th>Username</th>\r\n      <th>Avatar</th>\r\n      <th>Role</th>\r\n      <th>Status</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor=\"let user of users;let i = index\">\r\n          <th scope=\"row\">{{i+1}}</th>\r\n          <td>{{user.username}}</td>\r\n          <td>\r\n            <img *ngIf=\"user.avatar\"\r\n                 src=\"{{user.avatar}}\"\r\n                 class=\"avatar avatar-lg\">\r\n            <img *ngIf=\"!user.avatar\"\r\n                 src=\"https://www.placehold.it/100x100?text=avatar\"\r\n                 class=\"avatar avatar-lg\">\r\n          </td>\r\n          <td>\r\n            <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n              <input type=\"checkbox\" class=\"switch-input\" [attr.checked]=\"user.isAdmin ? '' : null\">\r\n              <span class=\"switch-label\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </td>\r\n          <td>\r\n              <span class=\"badge badge-success\">Active</span>\r\n            </td>\r\n        </tr>\r\n\r\n    <!-- <tr>\r\n      <td>Pompeius René</td>\r\n      <td>2012/01/01</td>\r\n      <td>Member</td>\r\n      <td>\r\n        <span class=\"badge badge-success\">Active</span>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>Paĉjo Jadon</td>\r\n      <td>2012/02/01</td>\r\n      <td>Staff</td>\r\n      <td>\r\n        <span class=\"badge badge-danger\">Banned</span>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>Micheal Mercurius</td>\r\n      <td>2012/02/01</td>\r\n      <td>Admin</td>\r\n      <td>\r\n        <span class=\"badge badge-secondary\">Inactive</span>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>Ganesha Dubhghall</td>\r\n      <td>2012/03/01</td>\r\n      <td>Member</td>\r\n      <td>\r\n        <span class=\"badge badge-warning\">Pending</span>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>Hiroto Šimun</td>\r\n      <td>2012/01/21</td>\r\n      <td>Staff</td>\r\n      <td>\r\n        <span class=\"badge badge-success\">Active</span>\r\n      </td>\r\n    </tr> -->\r\n  </tbody>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/user-management/view-user/view-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table.table-bordered {\n  background-color: white; }\n", ""]);

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
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUser()
            .then(function (value) {
            return _this.users = value;
        });
    };
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