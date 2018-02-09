webpackJsonp(["admin.module"],{

/***/ "../../../../../src/app/views/team-management/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_management_component__ = __webpack_require__("../../../../../src/app/views/team-management/team-management.component.ts");
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
            title: 'Admin'
        },
        children: [
            {
                path: 'teamManagePage',
                component: __WEBPACK_IMPORTED_MODULE_2__team_management_component__["a" /* TeamManagePageComponent */],
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/team-management/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_routing_module__ = __webpack_require__("../../../../../src/app/views/team-management/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_management_component__ = __webpack_require__("../../../../../src/app/views/team-management/team-management.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular




// team manage page

var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__admin_routing_module__["a" /* AdminRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__team_management_component__["a" /* TeamManagePageComponent */],
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  <strong>Manage team</strong>\n</h1>\n<table class=\"table table-info\">\n  <thead class=\"thead-light\">\n    <tr>\n      <th>#</th>\n\n      <th>Name</th>\n      <th>Team leader</th>\n      <th>createdBy</th>\n      <th>createdDate</th>\n      <th>isClose</th>\n    </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let team of teams;let i = index\">\n    <th scope=\"row\">{{i+1}}</th>\n    <td>{{team.name}}</td>\n    <td>{{team.manager.username}}</td>\n    <td>{{team.createdBy.username}}</td>\n    <td>{{team.createdDate}}</td>\n    <td>\n      <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\n        <input type=\"checkbox\" class=\"switch-input\" [attr.checked]=\"team.isClosed ? '' : null\">\n        <span class=\"switch-label\"></span>\n        <span class=\"switch-handle\"></span>\n      </label>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamManagePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/team-management/team-management.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */]])
    ], TeamManagePageComponent);
    return TeamManagePageComponent;
}());



/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map