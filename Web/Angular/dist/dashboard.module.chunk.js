webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/views/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>\r\n          <div>Dashboard</div>\r\n        </strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"isLoading.page\"></app-spinner>\r\n      <div class=\"card-body\" *ngIf=\"!isLoading.page\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-7 col-md-10\">\r\n            <app-staff-section [lateTasks]=l ateTasks [thisWeekTasks]=\"thisWeekTasks\" *ngIf=\"role == 'staff'\"></app-staff-section>\r\n            <app-manager-section\r\n              [lateTasks]=\"lateTasks\"\r\n              [needReviewTasks]=\"needReviewTasks\"\r\n              *ngIf=\"role == 'manager'\">\r\n            </app-manager-section>\r\n            <app-admin-section\r\n              [projects]=\"projects\"\r\n              *ngIf=\"role == 'admin'\"></app-admin-section>\r\n          </div>\r\n          <div class=\"col-lg-5 col-md-10\">\r\n            <div class=\"card p-0\">\r\n              <div class=\"card-body\">\r\n                <h4 class=\"card-title col-12\">Leader board</h4>\r\n                <table class=\"table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"text-center\">Rank</th>\r\n                      <th class=\"text-center\">Name</th>\r\n                      <tH class=\"text-center\">Score</tH>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of leaderboard;let i = index\">\r\n                      <td class=\"text-center\">{{i+1}}</td>\r\n                      <td class=\"text-center\">{{item.name}}</td>\r\n                      <td class=\"text-center\">{{item.score}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(storeService, projectService, teamService, userService, router, route, location, modalService) {
        this.storeService = storeService;
        this.projectService = projectService;
        this.teamService = teamService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.modalService = modalService;
        var currentUser = this.storeService.get(['currentUser']);
        if (!currentUser.isAdmin && !currentUser.isManager) {
            this.role = 'staff';
        }
        if (!currentUser.isAdmin && currentUser.isManager) {
            this.role = 'manager';
        }
        if (currentUser.isAdmin && !currentUser.isManager) {
            this.role = 'admin';
        }
        this.currentUser = currentUser;
        this.isLoading = {
            page: true
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLeaderBoard()
            .then(function (value) {
            _this.leaderboard = value;
            _this.isLoading = {
                page: false
            };
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message);
        });
        switch (this.role) {
            case 'staff': {
                this.loadStaffSection();
                break;
            }
            case 'manager': {
                this.loadManagerSection();
                break;
            }
            case 'admin': {
                this.loadAdminSection();
                break;
            }
        }
    };
    DashboardComponent.prototype.loadStaffSection = function () {
        var _this = this;
        Promise.all([
            this.userService.getCurrentUserLateTasks(),
            this.userService.getCurrentUserNearExpireTask(),
            this.userService.getLeaderBoard()
        ])
            .then(function (resData) {
            _this.lateTasks = resData[0];
            _this.thisWeekTasks = resData[1];
            _this.leaderboard = resData[2];
            _this.isLoading.page = false;
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message);
        });
    };
    DashboardComponent.prototype.loadManagerSection = function () {
        var _this = this;
        Promise.all([
            this.teamService.getLateTasks(this.currentUser.team.id),
            this.teamService.getNeedReviewTasks(this.currentUser.team.id),
            this.userService.getLeaderBoard()
        ])
            .then(function (resData) {
            _this.lateTasks = resData[0];
            _this.needReviewTasks = resData[1];
            _this.leaderboard = resData[2];
            _this.isLoading.page = false;
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message);
        });
    };
    DashboardComponent.prototype.loadAdminSection = function () {
        var _this = this;
        Promise.all([
            this.projectService.getRecentProjects(),
            this.userService.getLeaderBoard()
        ])
            .then(function (resData) {
            _this.projects = resData[0];
            _this.leaderboard = resData[1];
            _this.isLoading.page = false;
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message);
        });
    };
    DashboardComponent.prototype.showErrorModal = function (message, isNavigateBack) {
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
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_tree_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_8__services_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* BsModalService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cmaComponents_cma_module__ = __webpack_require__("../../../../../src/app/cmaComponents/cma.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components__["k" /* SpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__cmaComponents_cma_module__["a" /* CmaModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* DashboardComponent */],
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map