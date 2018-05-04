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

module.exports = "<div style=\"align-content: left\">\n  <div class=\"card align-items-left\">\n    <div class=\"card-header\">\n      <strong>Department detail</strong>\n    </div>\n    <app-spinner *ngIf=\"isPageLoading\"></app-spinner>\n    <div class=\"card-body\" *ngIf=\"!isPageLoading\">\n      <div class=\"col-12\" *ngIf=\"foundTeam\">\n        <h1>\n          {{foundTeam.name}}\n        </h1>\n      </div>\n      <div>\n        <a [ngClass]=\"{'btn': true, 'btn-secondary': true, 'bg-light':!isLoading.openAssignMembersModal}\"\n           (click)=\"handleOnAssignMembersBtnClick()\"\n           [ladda]=\"isLoading.openAssignMembersModal\" *ngIf=\"currentUser.isAdmin\">\n          <i class=\"fa fa-user-plus\"></i>&nbsp; Assign members\n        </a>\n        <a [ngClass]=\"{'btn': true, 'btn-secondary': true, 'bg-light':!isLoading.openUnAssignMembersModal}\"\n           (click)=\"handleOnUnAssignMembersBtnClick()\"\n           [ladda]=\"isLoading.openUnAssignMembersModal\" *ngIf=\"currentUser.isAdmin\">\n          <i class=\"fa fa-user-times\"></i>&nbsp; Un-assign members\n        </a>\n      </div>\n      <div>\n        <table id=\"allTeamsTable\" datatable [dtOptions]=\"datatableOptions\" class=\"table table-bordered\">\n          <thead>\n          <tr>\n            <th>User</th>\n            <th>Role</th>\n            <th *ngIf=\"currentUser.isAdmin\">Status</th>\n            <th *ngIf=\"currentUser.isAdmin\" style=\"width: 200px\">Action</th>\n          </tr>\n          </thead>\n          <tbody *ngIf=\"foundTeam.users.length !== 0 || foundTeam.manager\">\n          <!--MANAGER-->\n          <tr *ngIf=\"foundTeam.manager\">\n            <td>\n              <a href=\"#/account/detail/{{foundTeam.manager.id}}\" *ngIf=\"currentUser.isAdmin\">\n                {{foundTeam.manager.name}}\n              </a>\n              <span *ngIf=\"currentUser.isManager\">{{foundTeam.manager.name}}</span>\n              <span *ngIf=\"!currentUser.isManager && !currentUser.isAdmin\">{{foundTeam.manager.name}}</span>\n            </td>\n            <td>\n              <strong>Manager</strong>\n            </td>\n            <td *ngIf=\"currentUser.isAdmin\">\n              <div *ngIf=\"foundTeam.manager.isActive\">Active</div>\n              <div *ngIf=\"!foundTeam.manager.isActive\">Banned</div>\n            </td>\n            <td *ngIf=\"currentUser.isAdmin\" class=\"text-center\">\n              <button type=\"button\" class=\"btn btn-primary bg-primary text-light\" disabled=\"disabled\">\n                <i class=\"fa fa-user-plus\"></i>&nbsp; Set manager\n              </button>\n            </td>\n          </tr>\n\n          <!--NORMAL USER-->\n          <tr *ngFor=\"let user of foundTeam.users\">\n            <td>\n              <a href=\"#/account/detail/{{user.id}}\" *ngIf=\"currentUser.isAdmin\">\n                {{user.name}}\n              </a>\n              <span *ngIf=\"currentUser.isManager\">{{user.username}}</span>\n              <span *ngIf=\"!currentUser.isManager && !currentUser.isAdmin\">{{user.name}}</span>\n            </td>\n            <td>\n              <div *ngIf=\"user.isAdmin\">\n                <strong>Admin</strong>\n              </div>\n              <div *ngIf=\"!user.isAdmin && user.isManager\">\n                <strong>Manager</strong>\n              </div>\n              <div *ngIf=\"!user.isAdmin && !user.isManager\">\n                Staff\n              </div>\n            </td>\n            <td *ngIf=\"currentUser.isAdmin\">\n              <div *ngIf=\"user.isActive\">Active</div>\n              <div *ngIf=\"!user.isActive\">Banned</div>\n            </td>\n            <td *ngIf=\"currentUser.isAdmin\" class=\"text-center\">\n              <a class=\"btn btn-primary bg-primary text-light\" (click)=\"handleOnSetManagerBtnClick(user.id)\">\n                <i class=\"fa fa-user-plus\"></i>&nbsp; Set manager\n              </a>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
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
    function DetailTeamComponent(teamService, userService, storeService, modalService, router, route, location) {
        this.teamService = teamService;
        this.userService = userService;
        this.storeService = storeService;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.datatableOptions = {
            lengthChange: false,
        };
        this.containmember = false;
        this.isLoading = {
            openAssignMembersModal: false,
            openUnAssignMembersModal: false,
        };
        this.isPageLoading = true;
        this.currentUser = this.storeService.get(['currentUser']);
    }
    DetailTeamComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            // Specific department
            if (Number(id)) {
                this.teamID = Number(id);
            }
            else {
                this.showErrorModal("Invalid department id \"" + id + "\"", true);
            }
        }
        else {
            // My department
            this.teamID = this.currentUser.team.id;
        }
        this.getAllTeam();
    };
    DetailTeamComponent.prototype.search = function (searchStr) {
        this.datatableElement.dtInstance.then(function (dtInstance) { return dtInstance.search(searchStr).draw(); });
    };
    DetailTeamComponent.prototype.getAllTeam = function () {
        var _this = this;
        this.teamService.getDetail(this.teamID)
            .then(function (value) {
            _this.foundTeam = value;
            _this.users = _this.foundTeam.users;
            if (!_this.managementMode) {
                _this.foundTeam.users = _this.foundTeam.users.filter(function (user) {
                    return user.isActive;
                });
            }
            _this.isPageLoading = false;
        })
            .catch(function (reason) {
            _this.isPageLoading = false;
            _this.showErrorModal("An error happened while loading data");
            console.debug("ERROR: getAllTeam - detail-team", reason);
        });
    };
    DetailTeamComponent.prototype.showErrorModal = function (message, isNavigateBack) {
        var _this = this;
        if (isNavigateBack === void 0) { isNavigateBack = false; }
        var initialState = {
            closeCallback: function () {
                if (isNavigateBack) {
                    _this.location.back();
                }
            },
            message: message
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__["e" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    DetailTeamComponent.prototype.handleOnSetManagerBtnClick = function (userID) {
        var _this = this;
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].id == userID) {
                this.foundUser = this.users[i];
            }
        }
        if (this.foundUser.isManager) {
            this.showErrorModal("This member is manager already!");
        }
        else {
            var onConfirm = function () {
                _this.teamService.setRole(_this.foundTeam.id, _this.foundUser.id, true);
            };
            var initialState = {
                message: "Are you sure to promote " + this.foundUser.name + " to manager?",
                confirmCallback: onConfirm
            };
            this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__["b" /* ConfirmModalComponent */], { initialState: initialState, class: 'modal-dialog' });
        }
    };
    DetailTeamComponent.prototype.handleOnAssignMembersBtnClick = function () {
        var _this = this;
        this.isLoading.openAssignMembersModal = true;
        this.teamService.getFreeUser()
            .then(function (value) {
            var pool = value;
            var onConfirm = function (selelectedMembers) {
                var selectedIds = __WEBPACK_IMPORTED_MODULE_9_lodash__["map"](selelectedMembers, 'id');
                if (selectedIds.length == 0) {
                    _this.containmember = true;
                }
                if (!_this.containmember) {
                    _this.teamService.assignTeam(selectedIds, _this.teamID)
                        .then(function (foundTeam) {
                        _this.foundTeam = foundTeam;
                        _this.isLoading.openAssignMembersModal = false;
                    })
                        .catch(function (reason) {
                        _this.showErrorModal(reason.Message);
                        _this.isLoading.openAssignMembersModal = false;
                    });
                }
                else {
                    _this.showErrorModal('Please select members!');
                    _this.isLoading.openAssignMembersModal = false;
                }
            };
            var initialState = {
                confirmCallback: onConfirm,
                cancelCallback: function () {
                    _this.isLoading.openAssignMembersModal = false;
                },
                closeCallback: function () {
                    _this.isLoading.openAssignMembersModal = false;
                },
                userPool: pool,
                title: "Assign members",
                confirmButtonText: 'Assign'
            };
            _this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__["l" /* SelectUsersModalComponent */], { initialState: initialState, class: 'modal-dialog', ignoreBackdropClick: true });
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message);
        });
    };
    DetailTeamComponent.prototype.handleOnUnAssignMembersBtnClick = function () {
        var _this = this;
        this.isLoading.openUnAssignMembersModal = true;
        console.debug(this.foundTeam.users.length);
        var pool = __WEBPACK_IMPORTED_MODULE_9_lodash__["filter"](this.foundTeam.users, function (user) {
            if (_this.currentUser.isAdmin) {
                return true;
            }
            else {
                return false;
            }
        });
        var onConfirm = function (selelectedMembers) {
            var selectedIds = __WEBPACK_IMPORTED_MODULE_9_lodash__["map"](selelectedMembers, 'id');
            if (selectedIds.length == 0) {
                _this.containmember = true;
            }
            if (!_this.containmember) {
                _this.teamService.unAssignTeam(selectedIds, _this.foundTeam.id)
                    .then(function (value) {
                    _this.foundTeam = value;
                    _this.isLoading.openUnAssignMembersModal = false;
                })
                    .catch(function (reason) {
                    _this.showErrorModal(reason.Message);
                    _this.isLoading.openUnAssignMembersModal = false;
                });
            }
            else {
                _this.showErrorModal('Please select members!');
                _this.isLoading.openUnAssignMembersModal = false;
            }
        };
        var initialState = {
            confirmCallback: onConfirm,
            cancelCallback: function () {
                _this.isLoading.openUnAssignMembersModal = false;
            },
            closeCallback: function () {
                _this.isLoading.openUnAssignMembersModal = false;
            },
            userPool: pool,
            // selectedUsers: selected,
            title: "Un-Assign"
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__["l" /* SelectUsersModalComponent */], { initialState: initialState, class: 'modal-dialog', ignoreBackdropClick: true });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_angular_datatables__["a" /* DataTableDirective */])
    ], DetailTeamComponent.prototype, "datatableElement", void 0);
    DetailTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail-team',
            template: __webpack_require__("../../../../../src/app/views/team-management/detail-team/detail-team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/team-management/detail-team/detail-team.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__services_tree_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
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
                    title: 'View departments'
                }
            },
            {
                path: ':id/detail',
                component: __WEBPACK_IMPORTED_MODULE_5__detail_team_detail_team_component__["a" /* DetailTeamComponent */],
                data: {
                    title: 'Department detail'
                }
            },
            {
                path: 'my',
                component: __WEBPACK_IMPORTED_MODULE_5__detail_team_detail_team_component__["a" /* DetailTeamComponent */],
                data: {
                    title: 'Department detail'
                }
            },
            {
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_3__create_team_create_team_component__["a" /* CreateTeamComponent */],
                data: {
                    title: 'Create department'
                }
            },
            {
                path: ':id/update',
                component: __WEBPACK_IMPORTED_MODULE_4__update_team_update_team_component__["a" /* UpdateTeamComponent */],
                data: {
                    title: 'Update department'
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

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <strong>View departments</strong>\n      </div>\n      <app-spinner *ngIf=\"isPageLoading\"></app-spinner>\n      <div *ngIf=\"!isPageLoading\" class=\"card-body\">\n        <table datatable [dtOptions]=\"datatableOptions\" class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th style=\"text-align: center\">Name</th>\n              <th style=\"text-align: center\">Department Leader</th>\n              <th style=\"text-align: center\">Created date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let team of teams;let i = index\">\n              <td>\n                <a routerLink=\"/department/{{team.id}}/detail\">{{team.name}}</a>\n              </td>\n              <td>\n                <span *ngIf=\"team.manager\">{{team.manager.name}}</span>\n                <span *ngIf=\"!team.manager\">N/A</span>\n              </td>\n              <td>\n                <p>{{team.createdDate}}</p>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamManagePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
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
    function TeamManagePageComponent(teamService, storeService) {
        this.teamService = teamService;
        this.storeService = storeService;
        this.datatableOptions = {
            lengthChange: false,
            columnDefs: [
                {
                    searchable: false,
                    orderable: false,
                    targets: [5]
                }
            ],
            order: [
                [4, 'desc']
            ]
        };
        this.isPageLoading = true;
        this.teams = [];
        this.currentUser = this.storeService.get(['currentUser']);
    }
    TeamManagePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getAllTeam()
            .then(function (value) {
            _this.teams = value;
            _this.isPageLoading = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], TeamManagePageComponent.prototype, "datatableElement", void 0);
    TeamManagePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/team-management/team-management.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_2__services_tree_service__["a" /* StoreService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_ladda__ = __webpack_require__("../../../../angular2-ladda/module/module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_ladda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_ladda__);
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
                __WEBPACK_IMPORTED_MODULE_13_angular2_ladda__["LaddaModule"].forRoot({
                    style: 'expand-left'
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__team_management_routing_module__["a" /* TeamManagementRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_12__components__["k" /* SpinnerModule */],
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

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Update department</strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"loading.page\"></app-spinner>\r\n      \r\n\r\n      <div *ngIf=\"!loading.page\" class=\"card-body\">\r\n        <app-assign-members-card\r\n          [title]=\"foundTeam.name\"\r\n          [leftTableName]=\"'Free user'\"\r\n          [rightTableName]=\"'Team member'\"\r\n          [leftUser]=\"freeUsers\"\r\n          [rightUser]=\"teamUsers\"\r\n          [assignLoading]=\"loading.assign\"\r\n          [unAssignLoading]=\"loading.unAssign\"\r\n          (onAssign)=\"assign($event)\"\r\n          (onUnAssign)=\"unAssign($event)\"\r\n          (onSetRole)=\"setRole($event)\">\r\n        </app-assign-members-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function UpdateTeamComponent(teamService, userService, modalService, router, route, location) {
        this.teamService = teamService;
        this.userService = userService;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.loading = {
            page: true,
            assign: false,
            unAssign: false,
            setRole: false
        };
    }
    UpdateTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (Number(id)) {
            this.teamID = Number(Number(id));
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
            })
                .catch(function (reason) {
                _this.showErrorModal(reason.Data);
            });
            this.userService.getAllUser()
                .then(function (value) {
                _this.users = value;
                _this.updateLoadingState();
            })
                .catch(function (reason) {
                _this.showErrorModal(reason.Data);
            });
        }
        else {
            this.showErrorModal("Invalid team id \"" + id + "\"", true);
        }
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
        this.teamService.unAssignTeam(teamMemberSelectedIds, this.foundTeam.id)
            .then(function (value) {
            _this.loading.unAssign = false;
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message);
            console.debug('unAssign team fail', reason);
            _this.loading.unAssign = false;
        });
    };
    UpdateTeamComponent.prototype.showErrorModal = function (message, isNavigateBack) {
        var _this = this;
        if (isNavigateBack === void 0) { isNavigateBack = false; }
        var initialState = {
            closeCallback: function () {
                if (isNavigateBack) {
                    _this.location.back();
                }
            },
            message: message
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__["e" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    UpdateTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-team',
            template: __webpack_require__("../../../../../src/app/views/team-management/update-team/update-team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/team-management/update-team/update-team.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]])
    ], UpdateTeamComponent);
    return UpdateTeamComponent;
}());



/***/ })

});
//# sourceMappingURL=team-management.module.chunk.js.map