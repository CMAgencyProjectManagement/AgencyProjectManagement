webpackJsonp(["admin.module"],{

/***/ "../../../../../src/app/views/team-management/admin-routing.module.ts":
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
        data: {
            title: 'Admin'
        },
        children: [
            {
                path: 'teamManagePage',
                component: team_management_component_1.TeamManagePageComponent,
                data: {
                    title: 'Team Management Page'
                }
            },
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

/***/ "../../../../../src/app/views/team-management/admin.module.ts":
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
var admin_routing_module_1 = __webpack_require__("../../../../../src/app/views/team-management/admin-routing.module.ts");
// team manage page
var team_management_component_1 = __webpack_require__("../../../../../src/app/views/team-management/team-management.component.ts");
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
                team_management_component_1.TeamManagePageComponent,
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;


/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  <strong>Manage team</strong>\r\n</h1>\r\n<table class=\"table table-info\">\r\n  <thead class=\"thead-light\">\r\n    <tr>\r\n      <th>#</th>\r\n\r\n      <th>Name</th>\r\n      <th>Team leader</th>\r\n      <th>createdBy</th>\r\n      <th>createdDate</th>\r\n      <th>isClose</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let team of teams;let i = index\">\r\n    <th scope=\"row\">{{i+1}}</th>\r\n    <td>{{team.name}}</td>\r\n    <td>{{\"team lead name\"}}</td>\r\n    <td>{{team.createdBy.username}}</td>\r\n    <td>{{team.createdDate}}</td>\r\n    <td>\r\n      <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n        <input type=\"checkbox\" class=\"switch-input\" [attr.checked]=\"team.IsClosed ? '' : null\">\r\n        <span class=\"switch-label\"></span>\r\n        <span class=\"switch-handle\"></span>\r\n      </label>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

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
var team_service_1 = __webpack_require__("../../../../../src/app/services/team.service.ts");
var TeamManagePageComponent = /** @class */ (function () {
    function TeamManagePageComponent(teamService) {
        this.teamService = teamService;
        this.teams = [];
    }
    TeamManagePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getAllTeam()
            .then(function (value) {
            _this.teams = value;
        });
    };
    TeamManagePageComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../src/app/views/team-management/team-management.component.html")
        }),
        __metadata("design:paramtypes", [team_service_1.TeamService])
    ], TeamManagePageComponent);
    return TeamManagePageComponent;
}());
exports.TeamManagePageComponent = TeamManagePageComponent;


/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map