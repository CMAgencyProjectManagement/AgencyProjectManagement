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

module.exports = "<h1>\r\n  <strong>Manage account</strong>\r\n</h1>\r\n<table class=\"table table-info\">\r\n  <thead class=\"thead-light\">\r\n  <tr>\r\n    <th>#</th>\r\n    <th>First Name</th>\r\n    <th>Last Name</th>\r\n    <th>Username</th>\r\n    <th>Avatar</th>\r\n    <th>isAdmin</th>\r\n\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr>\r\n    <th scope=\"row\">1</th>\r\n    <td>Mark</td>\r\n    <td>Otto</td>\r\n    <td>MarkO</td>\r\n    <td><img src=\"...\" alt=\"...\" class=\"img-thumbnail\"></td>\r\n    \r\n    <td>\r\n      <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n        <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n        <span class=\"switch-label\"></span>\r\n        <span class=\"switch-handle\"></span>\r\n      </label>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <th scope=\"row\">2</th>\r\n    <td>Jacob</td>\r\n    <td>Thornton</td>\r\n    <td>JacobT</td>\r\n    <td><img src=\"...\" alt=\"...\" class=\"img-thumbnail\"></td>\r\n    <td>\r\n      <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n        <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n        <span class=\"switch-label\"></span>\r\n        <span class=\"switch-handle\"></span>\r\n      </label>\r\n    </td>\r\n  \r\n  </tr>\r\n  <tr>\r\n    <th scope=\"row\">3</th>\r\n    <td>Larry</td>\r\n    <td>the Bird</td>\r\n    <td>LarryTB</td>\r\n    <td><img src=\"...\" alt=\"...\" class=\"img-thumbnail\"></td>\r\n   \r\n    <td>\r\n      <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n        <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n        <span class=\"switch-label\"></span>\r\n        <span class=\"switch-handle\"></span>\r\n      </label>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <th scope=\"row\">4</th>\r\n    <td>kira</td>\r\n    <td>the Killer</td>\r\n    <td>kiraTK</td>\r\n    <td><img src=\"...\" alt=\"...\" class=\"img-thumbnail\"></td>\r\n\r\n    <td>\r\n      <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n        <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n        <span class=\"switch-label\"></span>\r\n        <span class=\"switch-handle\"></span>\r\n      </label>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

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
        this.userService = userService;
        this.userService.getAllUser().then(function (value) {
            return console.debug('UserManagementComponent', value);
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
var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = __decorate([
        core_1.NgModule({
            imports: [
                user_management_routing_module_1.UserManagementRoutingModule
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