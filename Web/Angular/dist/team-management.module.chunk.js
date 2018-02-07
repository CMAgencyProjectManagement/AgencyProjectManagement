webpackJsonp(["team-management.module"],{

/***/ "../../../../../src/app/views/team-management/team-management-routing.module.ts":
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
var team_management_component_1 = __webpack_require__("../../../../../src/app/views/team-management/team-management.component.ts");
var routes = [
    {
        path: '',
        component: team_management_component_1.TeamManagementComponent,
        data: {
            title: 'Team'
        }
    }
];
var TeamManagementRoutingModule = /** @class */ (function () {
    function TeamManagementRoutingModule() {
    }
    TeamManagementRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TeamManagementRoutingModule);
    return TeamManagementRoutingModule;
}());
exports.TeamManagementRoutingModule = TeamManagementRoutingModule;


/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  <strong>Manage team</strong>\r\n</h1>\r\n<table class=\"table table-info\">\r\n  <thead class=\"thead-light\">\r\n    <tr>\r\n      <th>#</th>\r\n\r\n      <th>Name</th>\r\n      <th>Team leader</th>\r\n      <th>createdBy</th>\r\n      <th>createdDate</th>\r\n      <th>isClose</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <th scope=\"row\">1</th>\r\n      <td>team 1</td>\r\n      <td>Otto</td>\r\n      <td>MarkO</td>\r\n      <td>22/12/2001</td>\r\n      <td>\r\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n          <span class=\"switch-label\"></span>\r\n          <span class=\"switch-handle\"></span>\r\n        </label>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">2</th>\r\n      <td>Team 2</td>\r\n      <td>Thornton</td>\r\n      <td>JacobT</td>\r\n      <td>15/10/2012</td>\r\n      <td>\r\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n          <span class=\"switch-label\"></span>\r\n          <span class=\"switch-handle\"></span>\r\n        </label>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">3</th>\r\n      <td>Team 3</td>\r\n      <td>the Bird</td>\r\n      <td>LarryTB</td>\r\n      <td>20/5/1998</td>\r\n      <td>\r\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n          <span class=\"switch-label\"></span>\r\n          <span class=\"switch-handle\"></span>\r\n        </label>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"row\">4</th>\r\n      <td>Team 4</td>\r\n      <td>the Killer</td>\r\n      <td>kiraTK</td>\r\n      <td>15/1/2013</td>\r\n      <td>\r\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\r\n          <span class=\"switch-label\"></span>\r\n          <span class=\"switch-handle\"></span>\r\n        </label>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management.component.ts":
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
var TeamManagementComponent = /** @class */ (function () {
    function TeamManagementComponent() {
    }
    TeamManagementComponent.prototype.ngOnInit = function () {
    };
    TeamManagementComponent = __decorate([
        core_1.Component({
            selector: 'app-team-management',
            template: __webpack_require__("../../../../../src/app/views/team-management/team-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/team-management/team-management.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamManagementComponent);
    return TeamManagementComponent;
}());
exports.TeamManagementComponent = TeamManagementComponent;


/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management.module.ts":
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
var team_management_routing_module_1 = __webpack_require__("../../../../../src/app/views/team-management/team-management-routing.module.ts");
var team_management_component_1 = __webpack_require__("../../../../../src/app/views/team-management/team-management.component.ts");
var TeamManagementModule = /** @class */ (function () {
    function TeamManagementModule() {
    }
    TeamManagementModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                team_management_routing_module_1.TeamManagementRoutingModule,
            ],
            declarations: [team_management_component_1.TeamManagementComponent]
        })
    ], TeamManagementModule);
    return TeamManagementModule;
}());
exports.TeamManagementModule = TeamManagementModule;


/***/ })

});
//# sourceMappingURL=team-management.module.chunk.js.map