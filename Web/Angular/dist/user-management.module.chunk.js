webpackJsonp(["user-management.module"],{

/***/ "../../../../../src/app/views/user-management/user-management-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management_component__ = __webpack_require__("../../../../../src/app/views/user-management/user-management.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__user_management_component__["a" /* UserManagementComponent */],
        data: {
            title: 'Account'
        }
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

/***/ "../../../../../src/app/views/user-management/user-management.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  <strong>Manage account</strong>\n</h1>\n<table *ngIf=\"users\" class=\"table table-info\">\n  <thead class=\"thead-light\">\n  <tr>\n    <th>#</th>\n    <th>Username</th>\n    <th>Avatar</th>\n    <th>isAdmin</th>\n\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let user of users;let i = index\">\n    <th scope=\"row\">{{i+1}}</th>\n    <td>{{user.username}}</td>\n    <td>\n      <img *ngIf=\"user.avatar\"\n           src=\"{{user.avatar}}\"\n           class=\"avatar avatar-lg\">\n      <img *ngIf=\"!user.avatar\"\n           src=\"https://www.placehold.it/100x100?text=avatar\"\n           class=\"avatar avatar-lg\">\n    </td>\n    <td>\n      <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\n        <input type=\"checkbox\" class=\"switch-input\" [attr.checked]=\"user.isAdmin ? '' : null\">\n        <span class=\"switch-label\"></span>\n        <span class=\"switch-handle\"></span>\n      </label>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/views/user-management/user-management.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/user-management/user-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementComponent; });
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


var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.getAllUser()
            .then(function (value) {
            return _this.users = value;
        });
    }
    UserManagementComponent.prototype.ngOnInit = function () {
    };
    UserManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__("../../../../../src/app/views/user-management/user-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/user-management.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user-management/user-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_management_component__ = __webpack_require__("../../../../../src/app/views/user-management/user-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management_routing_module__ = __webpack_require__("../../../../../src/app/views/user-management/user-management-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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
                __WEBPACK_IMPORTED_MODULE_2__user_management_routing_module__["a" /* UserManagementRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__user_management_component__["a" /* UserManagementComponent */]]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ })

});
//# sourceMappingURL=user-management.module.chunk.js.map