webpackJsonp(["team-management.module"],{

/***/ "../../../../../src/app/views/team-management/create-team/create-team.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/views/team-management/create-team/create-team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/team-management/create-team/create-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTeamComponent; });
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

var CreateTeamComponent = /** @class */ (function () {
    function CreateTeamComponent() {
    }
    CreateTeamComponent.prototype.ngOnInit = function () {
    };
    CreateTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-team',
            template: __webpack_require__("../../../../../src/app/views/team-management/create-team/create-team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/team-management/create-team/create-team.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateTeamComponent);
    return CreateTeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/team-management/detail-team/detail-team.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"align-content: left\">\r\n  <div class=\"card align-items-left\">\r\n    <div class=\"card-header\">\r\n      <strong>Department's detail</strong>\r\n    </div>\r\n    <div class=\"card-body\" *ngIf=\"foundTeam\">\r\n      <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n        <div class=\"col-12 text-center\" *ngIf=\"foundTeam\" style=\" text-transform: uppercase\">\r\n          <h1>\r\n            {{foundTeam.name}}\r\n          </h1>\r\n        </div>\r\n        <div>\r\n\r\n\r\n\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n\r\n                <th>User </th>\r\n                <th>Role</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngIf=\"foundUser.length !== 0\">\r\n\r\n              <!-- <tr>          \r\n                <td >Larry the Bird</td>\r\n                <td>@twitter</td>\r\n                <td>@twitter</td>\r\n              </tr> -->\r\n\r\n              <tr *ngFor=\"let user of foundUser\">\r\n                <td>\r\n                  <a href=\"#/account/detail?id={{user.id}}\">{{user.username}}</a>\r\n                </td>\r\n                <td>\r\n                  <div *ngIf=\"user.isAdmin\">\r\n                    <strong>Admin </strong>\r\n                  </div>\r\n                  <div *ngIf=\"!user.isAdmin && user.isManager\">\r\n                    <strong>Manager </strong>\r\n                  </div>\r\n                  <div *ngIf=\"!user.isAdmin && !user.isManager\">\r\n                    Staff\r\n                  </div>\r\n\r\n                </td>\r\n                <td>\r\n                  <div *ngIf=\"user.status\">Active</div>\r\n                  <div *ngIf=\"!user.status\">Banned</div>\r\n\r\n                </td>\r\n              </tr>\r\n\r\n\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n\r\n\r\n        <!-- Phan cu -->\r\n        <!--\r\n          <div id=\"1\" class=\"row\" *ngIf=\"foundUser.length !== 0\">\r\n            <div class=\"col-3 text-center card\" *ngFor=\"let user of foundUser\">\r\n              <div>\r\n                <strong>\r\n                  <h3>\r\n                    <a href=\"#/account/detail?id={{user.id}}\">{{user.username}}</a>\r\n                  </h3>\r\n                </strong>\r\n\r\n\r\n\r\n                <div class=\"row\" *ngIf=\"user\">\r\n                  <div *ngIf=\"user.isAdmin\" class=\"col-4 text-right\">\r\n                    <strong>Admin </strong>\r\n                  </div>\r\n                  <div *ngIf=\"!user.isAdmin && user.isManager\" class=\"col-4 text-right\">\r\n                    <strong>Manager </strong>\r\n                  </div>\r\n                  <div *ngIf=\"!user.isAdmin && !user.isManager\" class=\"col-4 text-right\">\r\n                    Staff\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"user.status\" class=\"badge badge-primary\" style=\"font-size: 20px;\">Active</div>\r\n                <div *ngIf=\"!user.status\" class=\"badge badge-secondary\" style=\"font-size: 20px;\">Banned</div> -->\r\n\r\n        <!-- <a href=\"#/account/detail?id={{foundTeam.manager.id}}\" id=\"viewInfo\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" style=\"color: black;\r\n                    background-color: white;\r\n                    border-color: black;\" id=\"viewprofilebutton\">\r\n                      View profile\r\n                    </button>\r\n                  </a> \r\n        </div>\r\n    </div>-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/team-management/detail-team/detail-team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.a {\n  text-transform: uppercase; }\n\n#description {\n  width: 1000px;\n  font-size: 20px; }\n\n#AvaAndDe {\n  padding-left: 13px; }\n\n#left {\n  font-size: 30px;\n  width: 20%;\n  padding-left: 4px;\n  margin-right: 5px; }\n\n#center {\n  padding: 1em;\n  width: 40%;\n  font-size: 30px; }\n\n#avatar {\n  width: 150px;\n  height: 200px;\n  margin-right: 5px; }\n\n#summary {\n  color: rgba(18, 38, 221, 0.89);\n  border-bottom: 2px solid; }\n\n#TechnicalSkills {\n  color: rgba(18, 38, 221, 0.89);\n  border-bottom: 2px solid; }\n\n#role {\n  color: grey;\n  font-size: 23px; }\n\n#phone {\n  font-size: 25px; }\n\n#email {\n  color: blue;\n  font-size: 25px; }\n\n#name {\n  margin-left: 70px;\n  font-size: 45px; }\n\n#createdBy {\n  margin-left: 50px;\n  font-size: 30px; }\n\n#viewInfo {\n  margin-left: 70px; }\n\n#viewprofilebutton {\n  font-size: 25px; }\n\n#imgAdmin {\n  width: 150px;\n  height: 150px;\n  margin-left: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/team-management/detail-team/detail-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailTeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailTeamComponent = /** @class */ (function () {
    function DetailTeamComponent(teamService, userService) {
        this.teamService = teamService;
        this.userService = userService;
        this.users = [];
        this.foundUser = [];
        this.selectedUser = [];
        this.dropdownSettings = {};
    }
    DetailTeamComponent.prototype.ngOnInit = function () {
        this.entity = {};
        this.teamID = Number(this.GetURLParameter('id'));
        this.teams = [];
        this.users = [];
        this.getAllTeam();
        this.getAllUser();
    };
    DetailTeamComponent.prototype.getAllTeam = function () {
        var _this = this;
        this.teamService.getAllTeam()
            .then(function (value) {
            _this.teams = value;
            for (var i = 0; i < _this.teams.length; i++) {
                if (_this.teams[i].id == _this.teamID) {
                    _this.foundTeam = _this.teams[i];
                    _this.selectedUser.push({
                        id: _this.foundTeam.manager.id,
                        itemName: _this.foundTeam.manager.username,
                        itemAvatar: _this.foundTeam.manager.avatar,
                        item: _this.foundTeam.manager.id,
                        item1: _this.foundTeam.manager.isActive,
                    });
                }
            }
            // for (let i = 0; i < this.teams.length; i++) {
            //   if (this.teams[i].id == this.teamID) {
            //     this.foundTeam = this.teams[i];
            //     this.selectedUser.push({
            //       id: this.foundTeam.manager.id,
            //       itemName: this.foundTeam.manager.username,
            //       itemAvatar: this.foundTeam.manager.avatar,
            //       item: this.foundTeam.manager.id,
            //       item1: this.foundTeam.manager.isActive,
            //       // item2: this.foundTeam.
            //     });
            //   }
            // }
        });
    };
    DetailTeamComponent.prototype.getAllUser = function () {
        var _this = this;
        this.userService.getAllUser()
            .then(function (value) {
            _this.users = value;
            for (var i = 0; i < _this.users.length; i++) {
                var userTeam = _this.users[i].team;
                if (userTeam !== null) {
                    if (userTeam.id === _this.foundTeam.id) {
                        _this.foundUser.push({
                            id: _this.users[i].id,
                            name: _this.users[i].name,
                            username: _this.users[i].username,
                            status: _this.users[i].isActive,
                            isad: _this.users[i].isAdmin,
                            ismng: _this.users[i].isManager,
                        });
                    }
                }
            }
            console.log(_this.foundUser);
        });
    };
    DetailTeamComponent.prototype.GetURLParameter = function (sParam) {
        var sPageURL = window.location.href;
        var sURLVariables = sPageURL.split('?');
        var sTeam = sURLVariables[1].split('=');
        return sTeam[1];
    };
    DetailTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail-team',
            template: __webpack_require__("../../../../../src/app/views/team-management/detail-team/detail-team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/team-management/detail-team/detail-team.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], DetailTeamComponent);
    return DetailTeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamManagementRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_management_component__ = __webpack_require__("../../../../../src/app/views/team-management/team-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_team_create_team_component__ = __webpack_require__("../../../../../src/app/views/team-management/create-team/create-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_team_update_team_component__ = __webpack_require__("../../../../../src/app/views/team-management/update-team/update-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_team_detail_team_component__ = __webpack_require__("../../../../../src/app/views/team-management/detail-team/detail-team.component.ts");
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
            title: 'Department'
        },
        children: [
            {
                path: 'view',
                component: __WEBPACK_IMPORTED_MODULE_2__team_management_component__["a" /* TeamManagePageComponent */],
                data: {
                    title: 'View Department'
                }
            },
            {
                path: 'detail',
                component: __WEBPACK_IMPORTED_MODULE_5__detail_team_detail_team_component__["a" /* DetailTeamComponent */],
                data: {
                    title: 'Department Detail'
                }
            },
            {
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_3__create_team_create_team_component__["a" /* CreateTeamComponent */],
                data: {
                    title: 'Create Department'
                }
            },
            {
                path: 'update',
                component: __WEBPACK_IMPORTED_MODULE_4__update_team_update_team_component__["a" /* UpdateTeamComponent */],
                data: {
                    title: 'Update Department'
                }
            }
        ]
    }
];
var TeamManagementRoutingModule = /** @class */ (function () {
    function TeamManagementRoutingModule() {
    }
    TeamManagementRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], TeamManagementRoutingModule);
    return TeamManagementRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>All departments</strong>\r\n\r\n      </div>\r\n      <app-spinner *ngIf=\"isPageLoading\"></app-spinner>\r\n      <div *ngIf=\"!isPageLoading\" class=\"card-body\">\r\n        <table datatable [dtOptions]=\"datatableOptions\" class=\"table table-bordered\">\r\n          <thead>\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>Department Leader</th>\r\n            <th>Created date</th>\r\n            <th>Update</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let team of teams;let i = index\">\r\n              <td>\r\n                <a href=\"#/department/detail?id={{team.id}}\">{{team.name}}</a>\r\n              </td>\r\n              <td>\r\n                <p>{{team.manager.username}}</p>\r\n              </td>\r\n              <td>\r\n                <p>{{team.createdDate}}</p>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <a href=\"#/department/update?id={{team.id}}\">\r\n                  <button type=\"button\" class=\"btn btn-primary\">Update</button>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
        this.isPageLoading = true;
        this.teams = [];
        this.datatableOptions = {
            searching: false,
            lengthChange: false,
            paging: false,
            ordering: false
        };
    }
    TeamManagePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getAllTeam()
            .then(function (value) {
            _this.teams = value;
            _this.isPageLoading = false;
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



/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamManagementModule", function() { return TeamManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cmaComponents_cma_module__ = __webpack_require__("../../../../../src/app/cmaComponents/cma.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_management_component__ = __webpack_require__("../../../../../src/app/views/team-management/team-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_team_create_team_component__ = __webpack_require__("../../../../../src/app/views/team-management/create-team/create-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__update_team_update_team_component__ = __webpack_require__("../../../../../src/app/views/team-management/update-team/update-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detail_team_detail_team_component__ = __webpack_require__("../../../../../src/app/views/team-management/detail-team/detail-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__team_management_routing_module__ = __webpack_require__("../../../../../src/app/views/team-management/team-management-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_spinner_spinner_module__ = __webpack_require__("../../../../../src/app/components/spinner/spinner.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var TeamManagementModule = /** @class */ (function () {
    function TeamManagementModule() {
    }
    TeamManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__team_management_routing_module__["a" /* TeamManagementRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_12__components_spinner_spinner_module__["a" /* SpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__cmaComponents_cma_module__["a" /* CmaModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__team_management_component__["a" /* TeamManagePageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__create_team_create_team_component__["a" /* CreateTeamComponent */],
                __WEBPACK_IMPORTED_MODULE_6__update_team_update_team_component__["a" /* UpdateTeamComponent */],
                __WEBPACK_IMPORTED_MODULE_7__detail_team_detail_team_component__["a" /* DetailTeamComponent */],
            ]
        })
    ], TeamManagementModule);
    return TeamManagementModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/team-management/update-team/update-team.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Update department</strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"loading.page\"></app-spinner>\r\n      <div *ngIf=\"!loading.page\" class=\"card-body\">\r\n        <app-assign-members-card\r\n          [title]=\"foundTeam.name\"\r\n          [leftTableName]=\"'Free user'\"\r\n          [rightTableName]=\"'Team member'\"\r\n          [leftUser]=\"freeUsers\"\r\n          [rightUser]=\"teamUsers\"\r\n          [assignLoading]=\"loading.assign\"\r\n          [unAssignLoading]=\"loading.unAssign\"\r\n          (onAssign)=\"assign($event)\"\r\n          (onUnAssign)=\"unAssign($event)\"\r\n          (onSetRole)=\"setRole($event)\">\r\n\r\n        </app-assign-members-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/team-management/update-team/update-team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table th, .table td {\n  padding-left: 0;\n  padding-right: 0; }\n\n.margin-down {\n  margin-bottom: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/team-management/update-team/update-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateTeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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




var UpdateTeamComponent = /** @class */ (function () {
    function UpdateTeamComponent(teamService, userService) {
        this.teamService = teamService;
        this.userService = userService;
        this.loading = {
            page: true,
            assign: false,
            unAssign: false,
            setRole: false
        };
    }
    UpdateTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamID = Number(this.GetURLParameter('id'));
        this.teamService.getAllTeam()
            .then(function (value) {
            var teams = value;
            for (var _i = 0, teams_1 = teams; _i < teams_1.length; _i++) {
                var team = teams_1[_i];
                if (team.id === _this.teamID) {
                    _this.foundTeam = team;
                    _this.updateLoadingState();
                }
            }
        });
        this.userService.getAllUser()
            .then(function (value) {
            _this.users = value;
            _this.updateLoadingState();
        });
    };
    UpdateTeamComponent.prototype.updateLoadingState = function () {
        var _this = this;
        if (this.foundTeam && this.users) {
            this.teamUsers = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.users, function (user) {
                if (user.team) {
                    return user.team.id === _this.foundTeam.id;
                }
            });
            this.freeUsers = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.users, function (user) {
                return !user.team;
            });
            this.loading.page = false;
        }
    };
    UpdateTeamComponent.prototype.setRole = function (event) {
        var userId = event.id;
        var teamId = this.foundTeam.id;
        var isManager = event.isManager;
        this.teamService.setRole(teamId, userId, isManager);
    };
    UpdateTeamComponent.prototype.assign = function (freeMEmberSelectedIds) {
        var _this = this;
        this.loading.assign = true;
        this.teamService.assignTeam(freeMEmberSelectedIds, this.foundTeam.id)
            .then(function (value) {
            _this.loading.assign = false;
        })
            .catch(function (reason) {
            console.debug('assign team fail', reason);
            _this.loading.assign = false;
        });
    };
    UpdateTeamComponent.prototype.unAssign = function (teamMemberSelectedIds) {
        var _this = this;
        this.loading.unAssign = true;
        this.teamService.unAssignTeam(teamMemberSelectedIds)
            .then(function (value) {
            _this.loading.unAssign = false;
        })
            .catch(function (reason) {
            console.debug('unAssign team fail', reason);
            _this.loading.unAssign = false;
        });
    };
    UpdateTeamComponent.prototype.GetURLParameter = function (sParam) {
        var sPageURL = window.location.href;
        var sURLVariables = sPageURL.split('?');
        var sTeam = sURLVariables[1].split('=');
        return sTeam[1];
    };
    UpdateTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-team',
            template: __webpack_require__("../../../../../src/app/views/team-management/update-team/update-team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/team-management/update-team/update-team.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], UpdateTeamComponent);
    return UpdateTeamComponent;
}());



/***/ })

});
//# sourceMappingURL=team-management.module.chunk.js.map