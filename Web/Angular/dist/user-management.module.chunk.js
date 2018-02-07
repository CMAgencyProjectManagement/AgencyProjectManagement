webpackJsonp(["user-management.module"],{

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
var user_management_component_1 = __webpack_require__("../../../../../src/app/views/user-management/user-management.component.ts");
var routes = [
    {
        path: '',
        component: user_management_component_1.UserManagementComponent,
        data: {
            title: 'Account'
        }
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

/***/ "../../../../../src/app/views/user-management/user-management.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  <strong>Manage account</strong>\n</h1>\n<table class=\"table table-info\">\n  <thead class=\"thead-light\">\n  <tr>\n    <th>#</th>\n    <th>Username</th>\n    <th>Avatar</th>\n    <th>isAdmin</th>\n\n  </tr>\n  </thead>\n  <tbody>\n<<<<<<< HEAD\n  <tr *ngFor=\"let user of users;let i = index\">\n    <th scope=\"row\">{{i+1}}</th>\n    <td>{{user.username}}</td>\n    <td><img src=\"https://www.placehold.it/100x100?text=avatar\" alt=\"...\" class=\"img-thumbnail\"></td>\n=======\n  <tr>\n    <th scope=\"row\">1</th>\n    <td>Mark</td>\n    <td>Otto</td>\n    <td>MarkO</td>\n    <td><img src=\"...\" alt=\"...\" class=\"img-thumbnail\"></td>\n\n    <td>\n      <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\n        <input type=\"checkbox\" class=\"switch-input\" unchecked>\n        <span class=\"switch-label\"></span>\n        <span class=\"switch-handle\"></span>\n      </label>\n    </td>\n  </tr>\n  <tr>\n    <th scope=\"row\">2</th>\n    <td>Jacob</td>\n    <td>Thornton</td>\n    <td>JacobT</td>\n    <td><img src=\"...\" alt=\"...\" class=\"img-thumbnail\"></td>\n    <td>\n      <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\n        <input type=\"checkbox\" class=\"switch-input\" unchecked>\n        <span class=\"switch-label\"></span>\n        <span class=\"switch-handle\"></span>\n      </label>\n    </td>\n\n  </tr>\n  <tr>\n    <th scope=\"row\">3</th>\n    <td>Larry</td>\n    <td>the Bird</td>\n    <td>LarryTB</td>\n    <td><img src=\"...\" alt=\"...\" class=\"img-thumbnail\"></td>\n\n    <td>\n      <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\n        <input type=\"checkbox\" class=\"switch-input\" unchecked>\n        <span class=\"switch-label\"></span>\n        <span class=\"switch-handle\"></span>\n      </label>\n    </td>\n  </tr>\n  <tr>\n    <th scope=\"row\">4</th>\n    <td>kira</td>\n    <td>the Killer</td>\n    <td>kiraTK</td>\n    <td><img src=\"...\" alt=\"...\" class=\"img-thumbnail\"></td>\n\n>>>>>>> 0f1afbae88806e92ad0d37a1b01ffe8daddf0648\n    <td>\n      <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\n        <input type=\"checkbox\" class=\"switch-input\" [attr.checked]=\"user.isAdmin ? '' : null\">\n        <span class=\"switch-label\"></span>\n        <span class=\"switch-handle\"></span>\n      </label>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

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
        core_1.Component({
            selector: 'app-user-management',
            template: __webpack_require__("../../../../../src/app/views/user-management/user-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user-management/user-management.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserManagementComponent);
    return UserManagementComponent;
}());
exports.UserManagementComponent = UserManagementComponent;


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
var user_management_component_1 = __webpack_require__("../../../../../src/app/views/user-management/user-management.component.ts");
var user_management_routing_module_1 = __webpack_require__("../../../../../src/app/views/user-management/user-management-routing.module.ts");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = __decorate([
        core_1.NgModule({
            imports: [
                user_management_routing_module_1.UserManagementRoutingModule,
                common_1.CommonModule
            ],
            declarations: [user_management_component_1.UserManagementComponent]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());
exports.UserManagementModule = UserManagementModule;


/***/ })

});
//# sourceMappingURL=user-management.module.chunk.js.map