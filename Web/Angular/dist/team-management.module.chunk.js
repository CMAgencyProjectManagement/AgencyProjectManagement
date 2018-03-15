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

module.exports = "<div style=\"align-content: left\">\r\n  <div class=\"card align-items-left\">\r\n\r\n    <div class=\"card-body\">\r\n      <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n        <h1>\r\n          <div class=\"col-md-12 col-form-label\" *ngIf=\"foundTeam\">\r\n            {{foundTeam.name}}\r\n          </div>\r\n        </h1>\r\n        <div class=\"form-group row\">\r\n\r\n          <label class=\"col-md-2 col-form-label\" for=\"teamLeader-input\">Team leader:</label>\r\n          <!-- phan card -->\r\n          <div class=\"col-md-2\">\r\n            <div class=\"card  align-items-md-center\" style=\"position: relative;\r\n            left: -35px;\r\n            width: 10rem\">\r\n              <div class=\"card-body\">\r\n                <img class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"25994855_974611699354326_8726051274387094426_n.jpg\" alt=\"Card image cap\">\r\n                <h5 class=\"card-title\">\r\n                  <a href=\"#/dashboard\">Dien Doan </a>\r\n                </h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-2 col-form-label\" for=\"team-member-input\">Team member:</label>\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/team-management/detail-team/detail-team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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
                        itemName: _this.foundTeam.manager.username
                    });
                }
            }
        });
    };
    DetailTeamComponent.prototype.getAllUser = function () {
        var _this = this;
        this.userService.getAllUser()
            .then(function (value) {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var user = value_1[_i];
                _this.users.push({
                    id: user.id,
                    itemName: user.username
                });
            }
        });
    };
    DetailTeamComponent.prototype.GetURLParameter = function (sParam) {
        var sPageURL = window.location.href;
        var sURLVariables = sPageURL.split('?');
        var sTeam = sURLVariables[1].split('=');
        return sTeam[1];
    };
    DetailTeamComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedUser);
    };
    DetailTeamComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedUser);
    };
    DetailTeamComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    DetailTeamComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    DetailTeamComponent.prototype.submitChange = function () {
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
            title: 'Team'
        },
        children: [
            {
                path: 'view',
                component: __WEBPACK_IMPORTED_MODULE_2__team_management_component__["a" /* TeamManagePageComponent */],
                data: {
                    title: 'View '
                }
            },
            {
                path: 'detail',
                component: __WEBPACK_IMPORTED_MODULE_5__detail_team_detail_team_component__["a" /* DetailTeamComponent */],
                data: {
                    title: 'Detail '
                }
            },
            {
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_3__create_team_create_team_component__["a" /* CreateTeamComponent */],
                data: {
                    title: 'Create '
                }
            },
            {
                path: 'update',
                component: __WEBPACK_IMPORTED_MODULE_4__update_team_update_team_component__["a" /* UpdateTeamComponent */],
                data: {
                    title: 'Update '
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

module.exports = "<head>\r\n  <title>My Title</title>\r\n</head>\r\n\r\n<body>\r\n\r\n\r\n  <div style=\"align-content: left\">\r\n    <div class=\"card align-items-left\">\r\n\r\n      <div class=\"card-body\">\r\n        <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n\r\n          <table class=\"table table-bordered\">\r\n            <thead class=\"thead-dark\">\r\n              <tr>\r\n                <th>No.</th>\r\n\r\n                <th>Name</th>\r\n                <th>Team leader</th>\r\n                <!-- <th>Created by</th>\r\n              <th>Created date</th>\r\n              <th>Is close</th>-->\r\n                <th>Change team leader</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let team of teams;let i = index\">\r\n                <th scope=\"row\">{{i+1}}</th>\r\n                <td>\r\n                    <a href=\"#/team/detail?teamid={{team.id}}\">{{team.name}}</a>\r\n                    <!-- {{team.name}} -->\r\n                </td>\r\n                <td>{{team.manager.username}}</td>\r\n                <!--  <td>{{team.createdBy.username}}</td>\r\n              <td>{{team.createdDate}}</td>\r\n          \r\n              <td>\r\n                <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\r\n                  <input type=\"checkbox\" class=\"switch-input\" [attr.checked]=\"team.isClosed ? '' : null\">\r\n                  <span class=\"switch-label\"></span>\r\n                  <span class=\"switch-handle\"></span>\r\n                </label>\r\n              </td>\r\n            -->\r\n                <td>\r\n                  <a href=\"#/team/update?teamid={{team.id}}\">\r\n                    <button type=\"button\" class=\"btn btn-primary\">Change</button>\r\n                  </a>\r\n                  <!--\r\n                  <a href=\"#/team/delete?teamid={{team.id}}\">\r\n                    <button type=\"button\" class=\"btn btn-danger\">Delete</button>\r\n                  </a>\r\n                -->\r\n\r\n                  <!-- Modal -->\r\n                  <!--\r\n                <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n                  <div class=\"modal-dialog\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n                      <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Warning !!</h5>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                          <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                      </div>\r\n                      <div class=\"modal-body\">\r\n                        Are you sure you want to delete this file?\r\n                      </div>\r\n                      <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                        <button type=\"button\" class=\"btn btn-danger\">Delete</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div> -->\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n"

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



/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamManagementModule", function() { return TeamManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_management_component__ = __webpack_require__("../../../../../src/app/views/team-management/team-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_team_create_team_component__ = __webpack_require__("../../../../../src/app/views/team-management/create-team/create-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__update_team_update_team_component__ = __webpack_require__("../../../../../src/app/views/team-management/update-team/update-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_team_detail_team_component__ = __webpack_require__("../../../../../src/app/views/team-management/detail-team/detail-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__team_management_routing_module__ = __webpack_require__("../../../../../src/app/views/team-management/team-management-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
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
                __WEBPACK_IMPORTED_MODULE_7__team_management_routing_module__["a" /* TeamManagementRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__team_management_component__["a" /* TeamManagePageComponent */], __WEBPACK_IMPORTED_MODULE_4__create_team_create_team_component__["a" /* CreateTeamComponent */], __WEBPACK_IMPORTED_MODULE_5__update_team_update_team_component__["a" /* UpdateTeamComponent */], __WEBPACK_IMPORTED_MODULE_6__detail_team_detail_team_component__["a" /* DetailTeamComponent */]]
        })
    ], TeamManagementModule);
    return TeamManagementModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/team-management/update-team/update-team.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"align-content: center\">\r\n  <div class=\"card align-items-center\">\r\n    <div class=\"card-body\">\r\n      <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\" novalidate>\r\n        <!-- <div class=\"card-body\" *ngIf=\"foundTeam\" [formGroup]=\"updateForm\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-2 col-form-label\" for=\"name-input\">Team name:</label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"text\" id=\"name-input\" name=\"name-input\" class=\"form-control\" disabled=\"true\" style=\"position: relative;\r\n                    \r\n              width: 208px;\" *ngIf=\"foundTeam.name\" value=\" {{foundTeam.name}}\">\r\n          </div>\r\n        </div>\r\n      -->\r\n        <div class=\"form-group row\">\r\n          <h1>\r\n              <div class=\"col-md-8 col-form-label\" *ngIf=\"foundTeam\">\r\n                  {{foundTeam.name}}\r\n                </div>\r\n          </h1>\r\n         \r\n        </div>\r\n        <!-- <p *ngFor=\"let item of users\">{{item.name}}</p> -->\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-2.1 col-form-label\" for=\"teamLeader-input\">Team leader:</label>\r\n          <div class=\"col-md-8\" *ngIf=\"users.length !== 0\">\r\n              <angular2-multiselect [data]=\"users\" [(ngModel)]=\"selectedUser\" \r\n              [ngModelOptions]=\"{standalone: true}\"\r\n              [settings]=\"dropdownSettings\" \r\n              (onSelect)=\"onItemSelect($event)\" \r\n              (onDeSelect)=\"OnItemDeSelect($event)\"\r\n              (onSelectAll)=\"onSelectAll($event)\"\r\n              (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n          </angular2-multiselect>\r\n            <!-- <div class=\"btn-group\" >\r\n              <div class=\"btn-group\" dropdown> -->\r\n                <!-- <button dropdownToggle type=\"button\" class=\"btn btn-secondary dropdown-toggle\">\r\n                    choose a manager\r\n                  <span class=\"caret\"></span>\r\n                </button> -->\r\n                <!-- <select name=\"user\" [(ngModel)]='selectedUser' >\r\n                  <option *ngFor=\"let item of users\"  [value]=\"item.name\">{{item.name}}</option>\r\n                </select> -->\r\n                <!-- <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n\r\n                  <li *ngFor=\"let item of users\" role=\"menuitem\">\r\n                    <p *ngIf=\"item.name !== null\" class=\"dropdown-item\">{{item.name}}</p>\r\n                  </li> -->\r\n                  <!-- <li role=\"menuitem\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                  </li> -->\r\n\r\n                  <!-- <li class=\"divider dropdown-divider\"></li> -->\r\n                  <!-- <li role=\"menuitem\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                  </li> -->\r\n                <!-- </ul> -->\r\n              <!-- </div>\r\n            </div> -->\r\n\r\n          </div>\r\n          <span class=\"help-block\" style=\"position: relative;\r\n          \">Please enter Team leader's name</span>\r\n        </div>\r\n       \r\n        <div class=\"form-actions\" style=\"margin-left: 100px\">\r\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"selectedUser.length === 0\" (click)=\"handleCreate()\">Update\r\n          </button>\r\n\r\n          <button class=\"btn btn-secondary\" type=\"button\">Cancel</button>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<head>\r\n    <title>My Title</title>\r\n  </head>\r\n  \r\n  <body>\r\n  \r\n  \r\n    <div style=\"align-content: left\">\r\n      <div class=\"card align-items-left\">\r\n  \r\n        <div class=\"card-body\">\r\n          <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n  \r\n            <table border=\"1\" class=\"table table-bordered\">\r\n              <thead class=\"thead-dark\">\r\n                <tr>\r\n                  <th>Team </th>\r\n  \r\n  \r\n                  <th>Action</th>\r\n  \r\n                  <th>Not in team</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr class=\"left\">\r\n                  <th>\r\n                    <div class=\"row\">\r\n  \r\n                      <!-- phan card -->\r\n  \r\n                      <div class=\"card \" style=\"position: relative; left: 10px; width: 6rem\">\r\n                        <div class=\"card-body\">\r\n                          <img class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/6.jpg\" alt=\"Card image cap\">\r\n                          <h5 class=\"card-title\">\r\n                            <a href=\"#/dashboard\">Dien Doan </a>\r\n                          </h5>\r\n                        </div>\r\n                      </div>\r\n  \r\n  \r\n                      <!-- phan card -->\r\n  \r\n                      <div class=\"card \" style=\"position: relative; left: 10px; width: 6rem\">\r\n                        <div class=\"card-body\">\r\n                          <img class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/6.jpg\" alt=\"Card image cap\">\r\n                          <h5 class=\"card-title\">\r\n                            <a href=\"#/dashboard\">Dien Doan </a>\r\n                          </h5>\r\n                        </div>\r\n                      </div>\r\n  \r\n                      <!-- phan card -->\r\n  \r\n                      <div class=\"card \" style=\"position: relative; left: 10px; width: 6rem\">\r\n                        <div class=\"card-body\">\r\n                          <img class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/6.jpg\" alt=\"Card image cap\">\r\n                          <h5 class=\"card-title\">\r\n                            <a href=\"#/dashboard\">Dien Doan </a>\r\n                          </h5>\r\n                        </div>\r\n                      </div>\r\n  \r\n                      <!-- phan card -->\r\n  \r\n                      <div class=\"card \" style=\"position: relative; left: 10px; width: 6rem\">\r\n                        <div class=\"card-body\">\r\n                          <img class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/6.jpg\" alt=\"Card image cap\">\r\n                          <h5 class=\"card-title\">\r\n                            <a href=\"#/dashboard\">Dien Doan </a>\r\n                          </h5>\r\n                        </div>\r\n                      </div>\r\n  \r\n                      <!-- phan card -->\r\n  \r\n                      <div class=\"card \" style=\"position: relative; left: 10px; width: 6rem\">\r\n                        <div class=\"card-body\">\r\n                          <img class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/6.jpg\" alt=\"Card image cap\">\r\n                          <h5 class=\"card-title\">\r\n                            <a href=\"#/dashboard\">Dien Doan </a>\r\n                          </h5>\r\n                        </div>\r\n                      </div>\r\n  \r\n                    </div>\r\n  \r\n                  </th>\r\n  \r\n  \r\n                  <th class=\"center\">\r\n                    <div>\r\n                      <button type=\"button\" class=\"btn btn-primary\">>></button>\r\n                    </div>\r\n                    <br>\r\n                    <div>\r\n                      <button type=\"button\" class=\"btn btn-primary\">\r\n                        << </button>\r\n                    </div>\r\n  \r\n                  </th>\r\n  \r\n                  <th class=\"right\">3</th>\r\n  \r\n                </tr>\r\n  \r\n              </tbody>\r\n            </table>\r\n  \r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n  "

/***/ }),

/***/ "../../../../../src/app/views/team-management/update-team/update-team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "th.left {\n  width: 45%; }\n\nth.center {\n  width: 10%; }\n\nth.right {\n  width: 45%; }\n\ndiv.card {\n  margin: 3px 5px; }\n", ""]);

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
        this.users = [];
        this.selectedUser = [];
        this.dropdownSettings = {};
    }
    // items: string[] = [
    //   'The first choice!',
    //   'And another choice for you.',
    //   'but wait! A third!'
    // ];
    // onHidden(): void {
    //   console.log('Dropdown is hidden');
    // }
    // onShown(): void {
    //   console.log('Dropdown is shown');
    // }
    // isOpenChange(): void {
    //   console.log('Dropdown state is changed');
    // }
    UpdateTeamComponent.prototype.ngOnInit = function () {
        this.dropdownSettings = {
            singleSelection: true,
            text: "Select User",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            classes: "myclass custom-class"
        };
        this.entity = {};
        this.teamID = Number(this.GetURLParameter('id'));
        this.teams = [];
        this.users = [];
        this.getAllTeam();
        this.getAllUser();
    };
    UpdateTeamComponent.prototype.getAllTeam = function () {
        var _this = this;
        this.teamService.getAllTeam()
            .then(function (value) {
            _this.teams = value;
            for (var i = 0; i < _this.teams.length; i++) {
                if (_this.teams[i].id == _this.teamID) {
                    _this.foundTeam = _this.teams[i];
                    _this.selectedUser.push({
                        id: _this.foundTeam.manager.id,
                        itemName: _this.foundTeam.manager.username
                    });
                }
            }
        });
    };
    UpdateTeamComponent.prototype.getAllUser = function () {
        var _this = this;
        this.userService.getAllUser()
            .then(function (value) {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var user = value_1[_i];
                _this.users.push({
                    id: user.id,
                    itemName: user.username
                });
            }
        });
    };
    UpdateTeamComponent.prototype.GetURLParameter = function (sParam) {
        var sPageURL = window.location.href;
        var sURLVariables = sPageURL.split('?');
        var sTeam = sURLVariables[1].split('=');
        return sTeam[1];
    };
    UpdateTeamComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedUser);
    };
    UpdateTeamComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedUser);
    };
    UpdateTeamComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    UpdateTeamComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    UpdateTeamComponent.prototype.submitChange = function () {
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