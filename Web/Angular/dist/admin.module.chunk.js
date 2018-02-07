webpackJsonp(["admin.module"],{

/***/ "../../../../../src/app/views/admin/accountManagePage.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  <strong>Manage account</strong>\r\n</h1>\r\n<table class=\"table table-info\">\r\n  <thead class=\"thead-light\">\r\n    <tr>\r\n      <th>#</th>\r\n      <th>First Name</th>\r\n      <th>Last Name</th>\r\n      <th>Username</th>\r\n      <th>Avatar</th>\r\n      <th>isAdmin</th>\r\n      <th>isTeamManager</th>\r\n\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <th scope=\"row\">1</th>\r\n      <td>Mark</td>\r\n      <td>Otto</td>\r\n      <td>MarkO</td>\r\n      <td><img src=\"...\" alt=\"...\" class=\"img-thumbnail\"></td>\r\n      <td>\r\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n          <span class=\"switch-label\"></span>\r\n          <span class=\"switch-handle\"></span>\r\n        </label>\r\n      </td>\r\n      <td>\r\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n          <span class=\"switch-label\"></span>\r\n          <span class=\"switch-handle\"></span>\r\n        </label>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">2</th>\r\n      <td>Jacob</td>\r\n      <td>Thornton</td>\r\n      <td>JacobT</td>\r\n      <td><img src=\"...\" alt=\"...\" class=\"img-thumbnail\"></td>\r\n      <td>\r\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n          <span class=\"switch-label\"></span>\r\n          <span class=\"switch-handle\"></span>\r\n        </label>\r\n      </td>\r\n      <td>\r\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n          <span class=\"switch-label\"></span>\r\n          <span class=\"switch-handle\"></span>\r\n        </label>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">3</th>\r\n      <td>Larry</td>\r\n      <td>the Bird</td>\r\n      <td>LarryTB</td>\r\n      <td><img src=\"...\" alt=\"...\" class=\"img-thumbnail\"></td>\r\n      <td>\r\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n          <span class=\"switch-label\"></span>\r\n          <span class=\"switch-handle\"></span>\r\n        </label>\r\n      </td>\r\n      <td>\r\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n          <span class=\"switch-label\"></span>\r\n          <span class=\"switch-handle\"></span>\r\n        </label>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">4</th>\r\n      <td>kira</td>\r\n      <td>the Killer</td>\r\n      <td>kiraTK</td>\r\n      <td><img src=\"...\" alt=\"...\" class=\"img-thumbnail\"></td>\r\n      <td>\r\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n          <span class=\"switch-label\"></span>\r\n          <span class=\"switch-handle\"></span>\r\n        </label>\r\n      </td>\r\n      <td>\r\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n          <span class=\"switch-label\"></span>\r\n          <span class=\"switch-handle\"></span>\r\n        </label>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/views/admin/accountManagePage.component.ts":
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
var accountManagePageComponent = /** @class */ (function () {
    function accountManagePageComponent() {
    }
    accountManagePageComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../src/app/views/admin/accountManagePage.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], accountManagePageComponent);
    return accountManagePageComponent;
}());
exports.accountManagePageComponent = accountManagePageComponent;


/***/ }),

/***/ "../../../../../src/app/views/admin/admin-routing.module.ts":
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
var accountManagePage_component_1 = __webpack_require__("../../../../../src/app/views/admin/accountManagePage.component.ts");
var routes = [
    {
        path: '',
        data: {
            title: 'Admin'
        },
        children: [
            {
                path: 'accountManagePage',
                component: accountManagePage_component_1.accountManagePageComponent,
                data: {
                    title: 'Account Management Page'
                }
            }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;


/***/ }),

/***/ "../../../../../src/app/views/admin/admin.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var admin_routing_module_1 = __webpack_require__("../../../../../src/app/views/admin/admin-routing.module.ts");
var accountManagePage_component_1 = __webpack_require__("../../../../../src/app/views/admin/accountManagePage.component.ts");
//team manage page
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                admin_routing_module_1.AdminRoutingModule,
            ],
            declarations: [
                accountManagePage_component_1.accountManagePageComponent,
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;


/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map