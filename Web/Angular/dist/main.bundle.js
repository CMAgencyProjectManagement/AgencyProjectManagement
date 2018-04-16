webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/dashboard/dashboard.module": [
		"../../../../../src/app/views/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./views/pages/pages.module": [
		"../../../../../src/app/views/pages/pages.module.ts",
		"pages.module"
	],
	"./views/project/project-management.module": [
		"../../../../../src/app/views/project/project-management.module.ts",
		"project-management.module",
		"common"
	],
	"./views/task/task.module": [
		"../../../../../src/app/views/task/task.module.ts",
		"task.module",
		"common"
	],
	"./views/team-management/team-management.module": [
		"../../../../../src/app/views/team-management/team-management.module.ts",
		"team-management.module",
		"common"
	],
	"./views/user-management/user-management.module": [
		"../../../../../src/app/views/user-management/user-management.module.ts",
		"user-management.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/_nav.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return admin_navigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return manager_navigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return staff_navigation; });
/**
 *  home page (user)
 *  my department
 *  my projects
 *  my tasks (assigned)
 *  my account (profile)
 *  update profile
 */
var staff_navigation = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer'
    },
    {
        name: 'Department',
        url: '/department/my',
        icon: 'icon-people'
    },
    {
        name: 'Project',
        url: '/dashboard',
        icon: 'icon-calendar'
    },
    {
        name: 'Task',
        url: '/task/mytasks',
        icon: 'icon-briefcase'
    },
    {
        name: 'Profile',
        url: '/account/view',
        icon: 'icon-user',
        children: [
            {
                name: 'View account',
                url: '/account/view',
                icon: 'icon-user',
            },
            {
                name: 'Create account',
                url: '/account/create',
                icon: 'icon-user',
            },
        ]
    }
];
/**
 * home page (manager)
 * my department
 * my department's active projects
 * my account (profile)
 * update profile
 */
var manager_navigation = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer'
    }
];
/**
 * home page (admin)
 * view account
 * create account
 * view department
 * view project
 * create project
 */
var admin_navigation = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer'
    },
    {
        name: 'Project',
        url: '/project',
        icon: 'icon-calendar',
        children: [
            {
                name: 'View project',
                url: '/project',
                icon: 'icon-calendar',
            },
            {
                name: 'Create project',
                url: '/project/add',
                icon: 'icon-calendar',
            }
        ]
    },
    {
        name: 'Department',
        url: '/department/view',
        icon: 'icon-people',
    },
    {
        name: 'Account',
        url: '/account/view',
        icon: 'icon-user',
        children: [
            {
                name: 'View account',
                url: '/account/view',
                icon: 'icon-user',
            },
            {
                name: 'Create account',
                url: '/account/create',
                icon: 'icon-user',
            },
        ]
    }
];



/***/ }),

/***/ "../../../../../src/app/_serverPath.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serverPath; });
var serverPath = {
    token: '/token',
    // User
    user: '/api/user',
    allUser: '/api/user/all',
    createUser: '/api/user',
    updateUser: '/api/user/update',
    leaderBoard: '/api/user/leaderboard',
    getUserOfProject: function (projectId) { return "/api/user/project/" + projectId; },
    getUserOfTeam: function (teamId) { return "/api/user/team/" + teamId; },
    resetPassword: function (userId) { return "/api/user/" + userId + "/resetpassword"; },
    // Project
    allProject: '/api/project/all',
    getProject: function (projectId) { return "/api/project/" + projectId; },
    myProject: '/api/project',
    getProjectList: function (projectId) { return "/api/project/" + projectId + "/list"; },
    updateProject: '/api/project',
    createProject: '/api/project',
    closeProject: '/api/project/close',
    // List
    createList: '/api/list',
    updateList: '/api/list/update',
    deleteList: '/api/list',
    // Team
    allTeam: '/api/team/all',
    deleteTeam: '/api/team',
    assignTeam: '/api/team/assign',
    unAssignTeam: '/api/team/unassign',
    setTeamRole: '/api/team/assign/role',
    getTeamDetail: function (teamId) { return "/api/team/" + teamId; },
    // Task
    getTask: function (taskId) { return "/api/task/" + taskId; },
    createTask: '/api/task',
    editTask: '/api/task',
    getPriority: '/api/task/priority',
    getStatus: '/api/task/status',
    getMyTask: '/api/task/myTask',
    assignTask: '/api/task/assign',
    unassignTask: "/api/task/unassign",
    finishTask: function (taskID) { return "/api/task/" + taskID + "/finishTask"; },
    // Comment
    createComment: '/api/comment/create',
    updateComment: 'api/comment/update',
    // File
    uploadAvatar: function (userId) { return "/api/file/user/" + userId + "/avatar"; },
    uploadAttachment: function (taskID) { return "/api/file/task/" + taskID + "/attachment"; },
    deleteAttachment: function (attachmentId) { return "/api/file/attachment/" + attachmentId + "/delete"; }
};



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(storeService, userService, activatedRoute, router, titleService) {
        this.storeService = storeService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService;
    }
    AppComponent.prototype.getDeepestTitle = function (routeSnapshot) {
        var title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
        if (routeSnapshot.firstChild) {
            title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('AppComponent-ngOnInit');
        var token = this.userService.getLocalToken();
        var user = this.userService.getLocalUser();
        if (token && user) {
            this.storeService.set(['token', 'access_token'], token);
            this.storeService.set(['currentUser'], user);
        }
        this.router
            .events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]; })
            .map(function () {
            var child = _this.activatedRoute.firstChild;
            while (child) {
                if (child.firstChild) {
                    child = child.firstChild;
                }
                else if (child.snapshot.data && child.snapshot.data['title']) {
                    return child.snapshot.data['title'];
                }
                else {
                    return null;
                }
            }
            return null;
        }).subscribe(function (title) {
            _this.titleService.setTitle(title);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // tslint:disable-next-line
            selector: 'body',
            template: '<title>{{title | async}}</title> <router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tree_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers__ = __webpack_require__("../../../../../src/app/containers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_nav_service__ = __webpack_require__("../../../../../src/app/services/nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_dependency_service__ = __webpack_require__("../../../../../src/app/services/dependency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_comment_service__ = __webpack_require__("../../../../../src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__cmaComponents_cma_module__ = __webpack_require__("../../../../../src/app/cmaComponents/cma.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Import containers

var APP_CONTAINERS = [
    __WEBPACK_IMPORTED_MODULE_5__containers__["a" /* FullLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_5__containers__["b" /* SimpleLayoutComponent */]
];
// Import components

var APP_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_6__components__["b" /* AppAsideComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["c" /* AppBreadcrumbsComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["d" /* AppFooterComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["e" /* AppHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["f" /* AppSidebarComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["g" /* AppSidebarFooterComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["h" /* AppSidebarFormComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["i" /* AppSidebarHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["j" /* AppSidebarMinimizerComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components__["a" /* APP_SIDEBAR_NAV */],
];
// Import directives

var APP_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_7__directives__["a" /* AsideToggleDirective */],
    __WEBPACK_IMPORTED_MODULE_7__directives__["b" /* NAV_DROPDOWN_DIRECTIVES */],
    __WEBPACK_IMPORTED_MODULE_7__directives__["c" /* ReplaceDirective */],
    __WEBPACK_IMPORTED_MODULE_7__directives__["d" /* SIDEBAR_TOGGLE_DIRECTIVES */],
];
// Import routing module

// Import provider












var SERVICES = [
    __WEBPACK_IMPORTED_MODULE_9__services_auth_guard__["a" /* AlwaysAuthGuard */],
    __WEBPACK_IMPORTED_MODULE_10__services_tree_service__["a" /* StoreService */],
    __WEBPACK_IMPORTED_MODULE_11__services_websocket_service__["a" /* WebsocketService */],
    __WEBPACK_IMPORTED_MODULE_12__services_nav_service__["a" /* NavService */],
    __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */],
    __WEBPACK_IMPORTED_MODULE_14__services_project_service__["a" /* ProjectService */],
    __WEBPACK_IMPORTED_MODULE_15__services_team_service__["a" /* TeamService */],
    __WEBPACK_IMPORTED_MODULE_16__services_task_service__["a" /* TaskService */],
    __WEBPACK_IMPORTED_MODULE_17__services_dependency_service__["a" /* DependencyService */],
    __WEBPACK_IMPORTED_MODULE_18__services_upload_service__["a" /* UploadService */],
    __WEBPACK_IMPORTED_MODULE_19_app_services_list_service__["a" /* ListService */],
    __WEBPACK_IMPORTED_MODULE_20__services_comment_service__["a" /* CommentService */]
];
// Import modal

var MODALS = [
    __WEBPACK_IMPORTED_MODULE_21__cmaComponents_modals__["h" /* SuccessModalComponent */],
    __WEBPACK_IMPORTED_MODULE_21__cmaComponents_modals__["d" /* ErrorModalComponent */],
    __WEBPACK_IMPORTED_MODULE_21__cmaComponents_modals__["c" /* CreateListModalComponent */],
    __WEBPACK_IMPORTED_MODULE_21__cmaComponents_modals__["b" /* ConfirmModalComponent */],
    __WEBPACK_IMPORTED_MODULE_21__cmaComponents_modals__["e" /* RemoveListModalComponent */],
    __WEBPACK_IMPORTED_MODULE_21__cmaComponents_modals__["f" /* RenameListModalComponent */],
    __WEBPACK_IMPORTED_MODULE_21__cmaComponents_modals__["g" /* SelectUsersModalComponent */],
    __WEBPACK_IMPORTED_MODULE_21__cmaComponents_modals__["a" /* CommentModalComponent */]
];
// Import 3rd party components







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_24_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_25_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_26_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_27_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_28__cmaComponents_cma_module__["a" /* CmaModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ].concat(APP_CONTAINERS, APP_COMPONENTS, APP_DIRECTIVES),
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* HashLocationStrategy */]
                }].concat(SERVICES),
            entryComponents: MODALS.slice(),
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers__ = __webpack_require__("../../../../../src/app/containers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Import Containers

// Import Guards

var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["a" /* FullLayoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_auth_guard__["a" /* AlwaysAuthGuard */]],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './views/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'project',
                loadChildren: './views/project/project-management.module#ProjectManagementModule'
            },
            {
                path: 'account',
                loadChildren: './views/user-management/user-management.module#UserManagementModule'
            },
            {
                path: 'department',
                loadChildren: './views/team-management/team-management.module#TeamManagementModule'
            },
            {
                path: 'task',
                loadChildren: './views/task/task.module#TaskModule'
            }
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["b" /* SimpleLayoutComponent */],
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '',
                loadChildren: './views/pages/pages.module#PagesModule',
            }
        ]
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/assignMember-card/assignMembers-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 text-center margin-down\">\r\n  <h1>{{title }}</h1>\r\n</div>\r\n<div class=\"col-12\">\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th class=\"text-center\">\r\n        <h5>{{leftTableName}}</h5>\r\n      </th>\r\n      <th></th>\r\n      <th class=\"text-center\">\r\n        <h5>{{rightTableName}}</h5>\r\n      </th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n      <td colspan=\"3\">\r\n        <div class=\"row\" style=\"margin-top: 1em\">\r\n          <div class=\"col-5\">\r\n            <app-mini-users-table\r\n              [users]=\"leftUser\"\r\n              (onSelectedChange)=\"handleLeftTableSelect($event)\"\r\n              [showRole]=\"false\"></app-mini-users-table>\r\n          </div>\r\n          <div class=\"col-1 center-section\">\r\n            <button class=\"btn btn-primary btn-block\"\r\n                    (click)=\"unAssign()\"\r\n                    [ladda]=\"unAssignLoading\">\r\n              <i class=\"fa fa-angle-double-left\"></i>\r\n            </button>\r\n            <button class=\"btn btn-primary btn-block\"\r\n                    (click)=\"assign()\"\r\n                    [ladda]=\"assignLoading\">\r\n              <i class=\"fa fa-angle-double-right\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <app-mini-users-table\r\n              [users]=\"rightUser\"\r\n              [showRole]=\"true\"\r\n              [changeRoleable]=\"false\"\r\n              (onSelectedChange)=\"handleRightTableSelect($event)\"\r\n              (onRoleChange)=\"setRole($event)\">\r\n            </app-mini-users-table>\r\n          </div>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/cmaComponents/assignMember-card/assignMembers-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cmaComponents/assignMember-card/assignMembers-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignMembersCardComponent; });
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

var AssignMembersCardComponent = /** @class */ (function () {
    function AssignMembersCardComponent() {
        this.onAssign = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onUnAssign = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSetRole = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AssignMembersCardComponent.prototype.ngOnInit = function () {
    };
    AssignMembersCardComponent.prototype.handleLeftTableSelect = function (userIds) {
        this.leftTableSelectedIds = userIds;
    };
    AssignMembersCardComponent.prototype.handleRightTableSelect = function (userIds) {
        this.rightTableSelectedIds = userIds;
    };
    AssignMembersCardComponent.prototype.assign = function () {
        this.onAssign.emit(this.leftTableSelectedIds);
    };
    AssignMembersCardComponent.prototype.unAssign = function () {
        this.onUnAssign.emit(this.rightTableSelectedIds);
    };
    AssignMembersCardComponent.prototype.setRole = function (event) {
        this.onSetRole.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AssignMembersCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AssignMembersCardComponent.prototype, "leftTableName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AssignMembersCardComponent.prototype, "rightTableName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AssignMembersCardComponent.prototype, "leftUser", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AssignMembersCardComponent.prototype, "rightUser", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AssignMembersCardComponent.prototype, "assignLoading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AssignMembersCardComponent.prototype, "unAssignLoading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AssignMembersCardComponent.prototype, "onAssign", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AssignMembersCardComponent.prototype, "onUnAssign", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AssignMembersCardComponent.prototype, "onSetRole", void 0);
    AssignMembersCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-assign-members-card',
            template: __webpack_require__("../../../../../src/app/cmaComponents/assignMember-card/assignMembers-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cmaComponents/assignMember-card/assignMembers-card.component.scss")]
        })
    ], AssignMembersCardComponent);
    return AssignMembersCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/cma.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_card_project_card_component__ = __webpack_require__("../../../../../src/app/cmaComponents/project-card/project-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__miniUsers_table_mini_users_table_component__ = __webpack_require__("../../../../../src/app/cmaComponents/miniUsers-table/mini-users-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assignMember_card_assignMembers_card_component__ = __webpack_require__("../../../../../src/app/cmaComponents/assignMember-card/assignMembers-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_ladda__ = __webpack_require__("../../../../angular2-ladda/module/module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_ladda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_ladda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/cmaComponents/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__comment_comment_component__ = __webpack_require__("../../../../../src/app/cmaComponents/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modals_comment_modal_comment_modal_component__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/comment-modal/comment-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__task_table_task_table_component__ = __webpack_require__("../../../../../src/app/cmaComponents/task-table/task-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var CmaModule = /** @class */ (function () {
    function CmaModule() {
    }
    CmaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_ladda__["LaddaModule"].forRoot({
                    style: 'slide-down'
                }),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["c" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["e" /* TypeaheadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__project_card_project_card_component__["a" /* ProjectCardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__assignMember_card_assignMembers_card_component__["a" /* AssignMembersCardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__miniUsers_table_mini_users_table_component__["a" /* MiniUsersTableComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modals__["b" /* ConfirmModalComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__comment_comment_component__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modals__["d" /* ErrorModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modals__["c" /* CreateListModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modals__["e" /* RemoveListModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modals__["h" /* SuccessModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modals__["f" /* RenameListModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modals__["g" /* SelectUsersModalComponent */],
                __WEBPACK_IMPORTED_MODULE_14__modals_comment_modal_comment_modal_component__["a" /* CommentModalComponent */],
                __WEBPACK_IMPORTED_MODULE_15__task_table_task_table_component__["a" /* TaskTableComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__project_card_project_card_component__["a" /* ProjectCardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__miniUsers_table_mini_users_table_component__["a" /* MiniUsersTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__assignMember_card_assignMembers_card_component__["a" /* AssignMembersCardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modals__["b" /* ConfirmModalComponent */],
                __WEBPACK_IMPORTED_MODULE_7__user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__comment_comment_component__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modals__["d" /* ErrorModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modals__["c" /* CreateListModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modals__["h" /* SuccessModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modals__["e" /* RemoveListModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modals__["f" /* RenameListModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modals__["g" /* SelectUsersModalComponent */],
                __WEBPACK_IMPORTED_MODULE_14__modals_comment_modal_comment_modal_component__["a" /* CommentModalComponent */],
                __WEBPACK_IMPORTED_MODULE_15__task_table_task_table_component__["a" /* TaskTableComponent */]
            ]
        })
    ], CmaModule);
    return CmaModule;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"comment\" class=\"p-2 row\" (click)=\"containerClick()\">\r\n  <div class=\"col-1 left-section text-center\">\r\n    <i class=\"fa fa-angle-down\" *ngIf=\"!isCollapsed\"></i>\r\n    <i class=\"fa fa-angle-right\" *ngIf=\"isCollapsed\"></i>\r\n  </div>\r\n  <div class=\"col-11 right-section\">\r\n    <div class=\"row\">\r\n      <div class=\"col-11\">\r\n        <img class=\"avatar img-avatar\" src=\"{{comment.createdBy.avatar}}\"/>\r\n        <a href=\"#/account/detail?id={{comment.createdBy.id}}\">\r\n          {{comment.createdBy.name}}\r\n        </a>\r\n      </div>\r\n      <div class=\"col-1 btn-edit\" (click)=\"handleEditBtnClick($event)\">\r\n        <i class=\"fa fa-pencil-square-o\"></i>\r\n      </div>\r\n      <div class=\"col-12 mt-3\" *ngIf=\"!isCollapsed\">\r\n        <p>{{comment.body}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/cmaComponents/comment/comment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#comment:hover {\n  background-color: #F4F5F7;\n  cursor: pointer; }\n  #comment:hover .btn-edit {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  #comment:hover .btn-edit:hover {\n      background-color: rgba(220, 221, 223, 0.6); }\n  #comment .left-section {\n  padding-left: 0;\n  padding-right: 0; }\n  #comment .right-section {\n  border-left: 1px solid #c2cfd6; }\n  #comment i {\n  width: 10px;\n  height: 15px; }\n  #comment .btn-edit {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cmaComponents/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_comment__ = __webpack_require__("../../../../../src/app/interfaces/comment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentComponent = /** @class */ (function () {
    function CommentComponent() {
        this.onEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.status = { isopen: false };
        this.isCollapsed = true;
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    CommentComponent.prototype.containerClick = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    CommentComponent.prototype.handleEditBtnClick = function ($event) {
        $event.stopPropagation();
        this.onEdit.emit(this.comment);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__interfaces_comment__["a" /* Comment */])
    ], CommentComponent.prototype, "comment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "onEdit", void 0);
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__("../../../../../src/app/cmaComponents/comment/comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cmaComponents/comment/comment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/miniUsers-table/mini-users-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\n  background-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cmaComponents/miniUsers-table/mini-users-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiniUsersTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MiniUsersTableComponent = /** @class */ (function () {
    function MiniUsersTableComponent() {
        this.onSelectedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onRoleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedIds = [];
        this.smallUsersTableOpt = {
            searching: true,
            lengthChange: false,
            paging: false,
            scrollY: '400',
            columnDefs: [
                {
                    searchable: false,
                    orderable: false,
                    targets: [1],
                },
                {
                    searchable: false,
                    orderable: false,
                    visible: false,
                    targets: [0],
                }
            ],
            rowCallback: this.handleRowCallback.bind(this)
        };
    }
    MiniUsersTableComponent.prototype.ngOnInit = function () {
    };
    MiniUsersTableComponent.prototype.roleSwitch = function (userId, currentRole) {
        var targetRole = !currentRole;
        this.onRoleChange.emit({ id: userId, isManager: targetRole });
    };
    MiniUsersTableComponent.prototype.handleRowCallback = function (row, data, index) {
        var _this = this;
        $('td', row).unbind('click');
        $('td', row).bind('click', function () {
            var selectedUserId = data[0];
            var classesAtr = row.attributes.getNamedItem('class');
            var classes = __WEBPACK_IMPORTED_MODULE_1_lodash__["split"](classesAtr.value, ' ');
            var isSelected = __WEBPACK_IMPORTED_MODULE_1_lodash__["indexOf"](classes, 'selected') >= 0;
            if (isSelected) {
                _this.selectedIds = __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](_this.selectedIds, function (userId) {
                    return userId !== selectedUserId;
                });
                classes = __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](classes, 'selected');
            }
            else {
                _this.selectedIds.push(selectedUserId);
                classes.push('selected');
            }
            classesAtr.value = __WEBPACK_IMPORTED_MODULE_1_lodash__["join"](classes, ' ');
            _this.onSelectedChange.emit(_this.selectedIds);
        });
        return row;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MiniUsersTableComponent.prototype, "users", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MiniUsersTableComponent.prototype, "showRole", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MiniUsersTableComponent.prototype, "changeRoleable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MiniUsersTableComponent.prototype, "onSelectedChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MiniUsersTableComponent.prototype, "onRoleChange", void 0);
    MiniUsersTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mini-users-table',
            template: __webpack_require__("../../../../../src/app/cmaComponents/miniUsers-table/mini-users-table.html"),
            styles: [__webpack_require__("../../../../../src/app/cmaComponents/miniUsers-table/mini-users-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MiniUsersTableComponent);
    return MiniUsersTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/miniUsers-table/mini-users-table.html":
/***/ (function(module, exports) {

module.exports = "<table datatable [dtOptions]=\"smallUsersTableOpt\" class=\"display compact\">\r\n  <thead>\r\n  <tr>\r\n    <th>ID</th>\r\n    <th>Avatar</th>\r\n    <th>Name</th>\r\n    <th>Birthdate</th>\r\n    <th *ngIf=\"showRole\">Manager</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let user of users\">\r\n    <td>{{user.id}}</td>\r\n    <td class=text-center>\r\n      <img *ngIf=\"user.avatar\" src=\"{{user.avatar}}\" class=\"avatar avatar-sm\">\r\n      <img *ngIf=\"!user.avatar\" src=\"https://www.placehold.it/100x100?text=avatar\" class=\"avatar\">\r\n    </td>\r\n    <td>\r\n      <span *ngIf=\"user.name\">{{user.name}}</span>\r\n      <span *ngIf=\"!user.name\">N/A</span>\r\n    </td>\r\n    <td>\r\n      <span *ngIf=\"user.birthdate\">{{user.birthdate | date:'dd/MM/yyyy'}}</span>\r\n      <span *ngIf=\"!user.birthdate\">N/A</span>\r\n    </td>\r\n    <td *ngIf=\"showRole\">\r\n      <label class=\"switch switch-icon switch-info switch-sm\"\r\n             (click)=\"roleSwitch(user.id,user.isManager)\">\r\n        <input class=\"switch-input\"\r\n               [checked]=\"user.isManager\"\r\n               [disabled]=\"!changeRoleable\"\r\n               type=\"checkbox\">\r\n        <span class=\"switch-label\" data-on=\"\" data-off=\"\"></span>\r\n        <span class=\"switch-handle\"></span>\r\n      </label>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/comment-modal/comment-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">{{title}}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"handleOnClose()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-12\">\r\n      <!--COMMENT TEXT AREA-->\r\n      <textarea title=\"comment-input\" rows=\"9\" class=\"form-control\"\r\n                [(ngModel)]=\"commentBoxModel\"\r\n                placeholder=\"Content..\"></textarea>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button class=\"btn btn-success\" (click)=\"handleOnConfirm()\">{{confirmButtonText}}</button>\r\n  <button class=\"btn btn-secondary\" (click)=\"handleOnCancel()\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/comment-modal/comment-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/comment-modal/comment-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentModalComponent = /** @class */ (function () {
    function CommentModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    CommentModalComponent.prototype.ngOnInit = function () {
        if (this.comment) {
            this.title = 'Edit comment';
            this.confirmButtonText = 'Save change';
            this.commentBoxModel = this.comment.body;
        }
        else {
            this.title = 'Add comment';
            this.confirmButtonText = 'Add';
        }
    };
    CommentModalComponent.prototype.handleOnConfirm = function () {
        if (this.confirmCallback) {
            var comment = __WEBPACK_IMPORTED_MODULE_2_lodash__["clone"](this.comment);
            comment.body = this.commentBoxModel;
            this.confirmCallback(comment);
        }
        this.bsModalRef.hide();
    };
    CommentModalComponent.prototype.handleOnCancel = function () {
        if (this.cancelCallback) {
            this.cancelCallback();
        }
        this.bsModalRef.hide();
    };
    CommentModalComponent.prototype.handleOnClose = function () {
        if (this.closeCallback) {
            this.closeCallback();
        }
        this.bsModalRef.hide();
    };
    CommentModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comment-modal',
            template: __webpack_require__("../../../../../src/app/cmaComponents/modals/comment-modal/comment-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cmaComponents/modals/comment-modal/comment-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* BsModalRef */]])
    ], CommentModalComponent);
    return CommentModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/confirm-modal/confirm-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Confirm</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"handleOnClose()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>{{message}}</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"handleOnConfirm()\">Confirm</button>\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"handleOnCancel()\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/confirm-modal/confirm-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/confirm-modal/confirm-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmModalComponent.prototype.handleOnConfirm = function () {
        if (this.confirmCallback) {
            this.confirmCallback();
        }
        this.bsModalRef.hide();
    };
    ConfirmModalComponent.prototype.handleOnCancel = function () {
        if (this.cancelCallback) {
            this.cancelCallback();
        }
        this.bsModalRef.hide();
    };
    ConfirmModalComponent.prototype.handleOnClose = function () {
        if (this.closeCallback) {
            this.closeCallback();
        }
        this.bsModalRef.hide();
    };
    ConfirmModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-modal',
            template: __webpack_require__("../../../../../src/app/cmaComponents/modals/confirm-modal/confirm-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cmaComponents/modals/confirm-modal/confirm-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* BsModalRef */]])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/create-list-modal/create-list-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Add list</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"handleOnClose()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\" id=\"listname\">\r\n  <div class=\"col-sm-9\">\r\n      <input #listNameInput type=\"text\" id=\"input-large\" name=\"input-large\" class=\"form-control form-control-lg\" placeholder=\"List name\" style=\"width: 400px; align-content: center\">\r\n    </div>\r\n  \r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"handleOnConfirm()\">Confirm</button>\r\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"handleOnCancel()\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/create-list-modal/create-list-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".listname {\n  width: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/create-list-modal/create-list-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateListModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateListModalComponent = /** @class */ (function () {
    function CreateListModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    CreateListModalComponent.prototype.ngOnInit = function () {
    };
    CreateListModalComponent.prototype.handleOnConfirm = function () {
        if (this.confirmCallback) {
            this.confirmCallback(this.listNameInput.nativeElement.value);
        }
        this.bsModalRef.hide();
    };
    CreateListModalComponent.prototype.handleOnCancel = function () {
        if (this.cancelCallback) {
            this.cancelCallback();
        }
        this.bsModalRef.hide();
    };
    CreateListModalComponent.prototype.handleOnClose = function () {
        if (this.closeCallback) {
            this.closeCallback();
        }
        this.bsModalRef.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('listNameInput'),
        __metadata("design:type", Object)
    ], CreateListModalComponent.prototype, "listNameInput", void 0);
    CreateListModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-list-modal',
            template: __webpack_require__("../../../../../src/app/cmaComponents/modals/create-list-modal/create-list-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cmaComponents/modals/create-list-modal/create-list-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* BsModalRef */]])
    ], CreateListModalComponent);
    return CreateListModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/error-modal/error-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Error</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"handleOnClose()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>{{message}}</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"handleOnClose()\">Close</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/error-modal/error-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/error-modal/error-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorModalComponent = /** @class */ (function () {
    function ErrorModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ErrorModalComponent.prototype.ngOnInit = function () {
    };
    ErrorModalComponent.prototype.handleOnClose = function () {
        if (this.closeCallback) {
            this.closeCallback();
        }
        this.bsModalRef.hide();
    };
    ErrorModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error-modal',
            template: __webpack_require__("../../../../../src/app/cmaComponents/modals/error-modal/error-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cmaComponents/modals/error-modal/error-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* BsModalRef */]])
    ], ErrorModalComponent);
    return ErrorModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__confirm_modal_confirm_modal_component__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/confirm-modal/confirm-modal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__confirm_modal_confirm_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_list_modal_create_list_modal_component__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/create-list-modal/create-list-modal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__create_list_modal_create_list_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_modal_error_modal_component__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/error-modal/error-modal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__error_modal_error_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__success_modal_success_modal_component__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/success-modal/success-modal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__success_modal_success_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remove_list_modal_remove_list_modal_component__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/remove-list-modal/remove-list-modal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__remove_list_modal_remove_list_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rename_list_modal_rename_list_modal_component__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/rename-list-modal/rename-list-modal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__rename_list_modal_rename_list_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_users_modal_select_users_modal_component__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/select-users-modal/select-users-modal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__select_users_modal_select_users_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comment_modal_comment_modal_component__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/comment-modal/comment-modal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__comment_modal_comment_modal_component__["a"]; });










/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/remove-list-modal/remove-list-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Remove list</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"handleOnClose()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\" id=\"listname\">\r\n  <div class=\"col-sm-9\">\r\n      Do you want to remove this list?\r\n    </div>  \r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"handleOnConfirm()\">Confirm</button>\r\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"handleOnCancel()\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/remove-list-modal/remove-list-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".listname {\n  width: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/remove-list-modal/remove-list-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveListModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveListModalComponent = /** @class */ (function () {
    function RemoveListModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    RemoveListModalComponent.prototype.ngOnInit = function () {
    };
    RemoveListModalComponent.prototype.handleOnConfirm = function () {
        if (this.confirmCallback) {
            this.confirmCallback(this.listID);
        }
        this.bsModalRef.hide();
    };
    RemoveListModalComponent.prototype.handleOnCancel = function () {
        if (this.cancelCallback) {
            this.cancelCallback();
        }
        this.bsModalRef.hide();
    };
    RemoveListModalComponent.prototype.handleOnClose = function () {
        if (this.closeCallback) {
            this.closeCallback();
        }
        this.bsModalRef.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('listNameInput'),
        __metadata("design:type", Object)
    ], RemoveListModalComponent.prototype, "listNameInput", void 0);
    RemoveListModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-remove-list-modal',
            template: __webpack_require__("../../../../../src/app/cmaComponents/modals/remove-list-modal/remove-list-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cmaComponents/modals/remove-list-modal/remove-list-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* BsModalRef */]])
    ], RemoveListModalComponent);
    return RemoveListModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/rename-list-modal/rename-list-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Rename list</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"handleOnClose()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\" id=\"listname\">\r\n  <div class=\"col-sm-9\">\r\n      <input #listNameInput type=\"text\" id=\"input-large\" name=\"input-large\" class=\"form-control form-control-lg\" placeholder=\"List name\" style=\"width: 400px; align-content: center\" value=\"{{defaultlistname}}\">\r\n    </div>\r\n  \r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"handleOnConfirm()\">Confirm</button>\r\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"handleOnCancel()\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/rename-list-modal/rename-list-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".listname {\n  width: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/rename-list-modal/rename-list-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenameListModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RenameListModalComponent = /** @class */ (function () {
    function RenameListModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    RenameListModalComponent.prototype.ngOnInit = function () {
    };
    RenameListModalComponent.prototype.handleOnConfirm = function () {
        if (this.confirmCallback) {
            this.confirmCallback(this.listNameInput.nativeElement.value);
        }
        this.bsModalRef.hide();
    };
    RenameListModalComponent.prototype.handleOnCancel = function () {
        if (this.cancelCallback) {
            this.cancelCallback();
        }
        this.bsModalRef.hide();
    };
    RenameListModalComponent.prototype.handleOnClose = function () {
        if (this.closeCallback) {
            this.closeCallback();
        }
        this.bsModalRef.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('listNameInput'),
        __metadata("design:type", Object)
    ], RenameListModalComponent.prototype, "listNameInput", void 0);
    RenameListModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rename-list-modal',
            template: __webpack_require__("../../../../../src/app/cmaComponents/modals/rename-list-modal/rename-list-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cmaComponents/modals/rename-list-modal/rename-list-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* BsModalRef */]])
    ], RenameListModalComponent);
    return RenameListModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/select-users-modal/select-users-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\" *ngIf=\"!title\">Select users</h4>\n  <h4 class=\"modal-title pull-left\" *ngIf=\"title\">{{title}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"handleOnClose()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n\n<div class=\"modal-body\" id=\"listname\">\n  <div class=\"col-12\" *ngIf=\"message\">\n    {{message}}\n  </div>\n  <div class=\"col-12\">\n    <div class=\"form-group row\">\n      <div class=\"col-md-9\">\n        <select id=\"user-select\" name=\"user-select\" class=\"form-control\" (change)=\"handleOnSelect($event.target.value)\">\n          <option value=\"{{undefined}}\">Please select members</option>\n          <option value=\"{{user.id}}\" *ngFor=\"let user of userPool\">{{user.name}}</option>\n        </select>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12\" *ngIf=\"selectedUsers.length > 0\">\n    <h3>Selected</h3>\n    <app-user-list [users]=\"selectedUsers\"></app-user-list>\n  </div>\n\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"handleOnConfirm()\">{{confirmButtonText}}</button>\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"handleOnCancel()\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/select-users-modal/select-users-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/select-users-modal/select-users-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectUsersModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectUsersModalComponent = /** @class */ (function () {
    function SelectUsersModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        if (!this.confirmButtonText) {
            this.confirmButtonText = 'Confirm';
        }
    }
    SelectUsersModalComponent.prototype.ngOnInit = function () {
        this.selectedUsers = [];
    };
    SelectUsersModalComponent.prototype.handleOnSelect = function (userId) {
        this.selectedUsers = __WEBPACK_IMPORTED_MODULE_2_lodash__["concat"](this.selectedUsers, __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.userPool, function (user) {
            return user.id == userId;
        }));
        this.userPool = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.userPool, function (user) {
            return user.id != userId;
        });
    };
    SelectUsersModalComponent.prototype.handleOnConfirm = function () {
        if (this.confirmCallback) {
            this.confirmCallback(this.selectedUsers);
        }
        this.bsModalRef.hide();
    };
    SelectUsersModalComponent.prototype.handleOnCancel = function () {
        if (this.cancelCallback) {
            this.cancelCallback();
        }
        this.bsModalRef.hide();
    };
    SelectUsersModalComponent.prototype.handleOnClose = function () {
        if (this.closeCallback) {
            this.closeCallback();
        }
        this.bsModalRef.hide();
    };
    SelectUsersModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-users-modal',
            template: __webpack_require__("../../../../../src/app/cmaComponents/modals/select-users-modal/select-users-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cmaComponents/modals/select-users-modal/select-users-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* BsModalRef */]])
    ], SelectUsersModalComponent);
    return SelectUsersModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/success-modal/success-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  success-modal works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/success-modal/success-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cmaComponents/modals/success-modal/success-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessModalComponent; });
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

var SuccessModalComponent = /** @class */ (function () {
    function SuccessModalComponent() {
    }
    SuccessModalComponent.prototype.ngOnInit = function () {
    };
    SuccessModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-success-modal',
            template: __webpack_require__("../../../../../src/app/cmaComponents/modals/success-modal/success-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cmaComponents/modals/success-modal/success-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessModalComponent);
    return SuccessModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/project-card/project-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Tasks</strong>\r\n    <a href=\"#/project/task?projectID={{project.id}}\" *ngIf=\"showbutton\">\r\n      <button type=\"button\" class=\"btn btn-primary\" style=\"margin-left: 77%\">\r\n        View full\r\n      </button>\r\n    </a>\r\n  </div>\r\n  <div>\r\n    <div class=\"card-body\" *ngIf=\"project\">\r\n      <div class=\"row\" style=\"margin-bottom: 1rem;\">\r\n        <div class=\"input-group col-12\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"search(searchField.value)\">\r\n              <i class=\"fa fa-search\"></i> Search\r\n            </button>\r\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"clear()\">\r\n              <i class=\"fa fa-times\"></i>\r\n            </button>\r\n          </span>\r\n          <input class=\"form-control\" type=\"text\" (change)=\"search(searchField.value)\" #searchField>\r\n        </div>\r\n      </div>\r\n      <!-- -->\r\n      <div class=\"well mb-4\" *ngIf=\"foundTasks.length > 0\" style=\"font-size: 18px\">\r\n        Found tasks: \r\n        <ul class=\"list-group\" *ngFor=\"let task of foundTasks;let i=index\">\r\n          <li class=\"list-group-item\" style=\"background-color: #f0f3f5\">\r\n            <a routerLink=\"/task/view/{{task.id}}\" style=\"font-size: 17px;color: black\">\r\n              {{task.name}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- -->\r\n      <div class=\"row task-row\">\r\n        <div>\r\n          <ng-container *ngFor=\"let lists of project.lists;let i = index\">\r\n            <div class=\"card cardstyle\" style=\"margin-left: 15px;\">\r\n              <div class=\"card-header cardheadertext\" style=\"font-size: 18px\">\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-9\">\r\n                        {{lists.name}}\r\n                    </div>\r\n                    <div class=\"col-3\">\r\n                        <div class=\"btn-group\" dropdown>\r\n                            <button dropdownToggle type=\"button\" class=\"btn btn-secondary dropdown-toggle\">\r\n                              <span class=\"caret\"></span>\r\n                            </button>\r\n                            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n                              <li role=\"menuitem\">\r\n                                <a class=\"dropdown-item\" style=\"cursor: pointer\" (click)=\"handleOnRenameListClick(lists.id, lists.name)\">Rename</a>\r\n                              </li>\r\n                              <li class=\"divider dropdown-divider\"></li>\r\n                              <li role=\"menuitem\">\r\n                                <a class=\"dropdown-item\" style=\"cursor: pointer\" (click)=\"handleOnRemoveListClick(lists.id)\">Remove list</a>\r\n                              </li>\r\n                            </ul>\r\n                          </div>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-body cardbodytext\" *ngIf=\"lists.tasks\">\r\n                <div class=\"card task-card\" *ngFor=\"let task of lists.tasks\" data-toggle=\"modal\" style=\"cursor: pointer\" data-toggle=\"modal\"\r\n                  id=\"task\">\r\n                  <a routerLink=\"/task/view/{{task.id}}\" style=\"text-decoration: none; color: black\">\r\n                    <div class=\"card-body\">\r\n                      {{task.name}}\r\n                    </div>\r\n                  </a>\r\n                  <div class=\"card-footer\" style=\"height: 30px;padding-top: 5px;\r\n\r\n                  padding-right: 5px;\">\r\n                  <a routerLink=\"/task/view/{{task.id}}\" style=\"text-decoration: none; color: black\">\r\n                    <span class=\"badge badge-success float-right\" *ngIf=\"task.status==0\">To do</span>\r\n                    <span class=\"badge badge-primary float-right\" *ngIf=\"task.status==1\">Executing</span>\r\n                    <span class=\"badge badge-danger float-right\" *ngIf=\"task.status==2\">Late</span>\r\n                  </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <a href=\"#/task/create?projectID={{project.id}}&listID={{lists.id}}\">\r\n                  <div style=\"text-align: center; font-size: 20px;\">\r\n                    <b>Add Task</b>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n          <ng-container>\r\n            <div style=\"margin-left: 15px;\">\r\n              <button type=\"button\" class=\"btn btn-primary\" style=\"width: 300px;height: 56px;\r\n\r\n              font-size: 17px;\" (click)=\"handleOnAddListClick()\">\r\n                <b>Add List</b>\r\n              </button>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/cmaComponents/project-card/project-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scroll {\n  height: 600px;\n  overflow-y: scroll; }\n\n.cardbodytext {\n  font-size: 17px; }\n\n.cardheadertext {\n  font-size: 20px; }\n\n.blackwhitebutton {\n  color: black;\n  background-color: white;\n  border-color: black; }\n\n.cardstyle {\n  width: 300px; }\n\n.task-row {\n  overflow-x: scroll;\n  width: 100%; }\n\n.task-row > div {\n    width: 9999px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.left-section {\n  padding-left: 0;\n  padding-right: 0; }\n\n.right-section {\n  border-left: 1px solid #c2cfd6; }\n\ni {\n  width: 10px;\n  height: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cmaComponents/project-card/project-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_list_service__ = __webpack_require__("../../../../../src/app/services/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectCardComponent = /** @class */ (function () {
    function ProjectCardComponent(modalService, listService) {
        this.modalService = modalService;
        this.listService = listService;
        this.refresh = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.max = 200;
        this.status = { isOpen: false };
        this.disabled = false;
        this.isDropup = true;
        this.autoClose = false;
        this.foundTasks = [];
        this.isCollapsed = true;
    }
    ProjectCardComponent.prototype.ngOnInit = function () {
    };
    ProjectCardComponent.prototype.handleOnAddListClick = function () {
        var _this = this;
        var initialState = {
            confirmCallback: function (listName) {
                _this.listService.createList(_this.project.id, listName).then(function (value) {
                    _this.refresh.emit();
                });
            }
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_2__modals__["c" /* CreateListModalComponent */], { initialState: initialState, class: 'modal-dialog' });
    };
    ProjectCardComponent.prototype.handleOnRenameListClick = function (listid, defaultlistname) {
        var _this = this;
        var initialState = {
            confirmCallback: function (listName) {
                _this.listService.updateList(listid, listName).then(function (value) {
                    _this.refresh.emit();
                });
            },
            defaultlistname: defaultlistname
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_4_app_cmaComponents_modals__["f" /* RenameListModalComponent */], { initialState: initialState, class: 'modal-dialog' });
    };
    ProjectCardComponent.prototype.handleOnRemoveListClick = function (listid) {
        var _this = this;
        var initialState = {
            confirmCallback: function () {
                _this.listService.removeList(listid).then(function (value) {
                    _this.refresh.emit();
                });
            }
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_4_app_cmaComponents_modals__["e" /* RemoveListModalComponent */], { initialState: initialState, class: 'modal-dialog' });
    };
    ProjectCardComponent.prototype.search = function (searchStr) {
        this.foundTasks = [];
        if (searchStr == '') {
            return;
        }
        for (var _i = 0, _a = this.project.lists; _i < _a.length; _i++) {
            var list = _a[_i];
            for (var _b = 0, _c = list.tasks; _b < _c.length; _b++) {
                var task = _c[_b];
                if (task.name.indexOf(searchStr) >= 0) {
                    this.foundTasks.push(task);
                    continue;
                }
                if (task.description.indexOf(searchStr) >= 0) {
                    this.foundTasks.push(task);
                }
            }
        }
    };
    ProjectCardComponent.prototype.clear = function () {
        this.foundTasks = [];
        return;
    };
    ProjectCardComponent.prototype.isOpenChange = function () {
        console.log('Dropdown state is changed');
    };
    ProjectCardComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isOpen = !this.status.isOpen;
    };
    ProjectCardComponent.prototype.change = function (value) {
        this.status.isOpen = value;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectCardComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProjectCardComponent.prototype, "showbutton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectCardComponent.prototype, "refresh", void 0);
    ProjectCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-card',
            template: __webpack_require__("../../../../../src/app/cmaComponents/project-card/project-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cmaComponents/project-card/project-card.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["b" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3__services_list_service__["a" /* ListService */]])
    ], ProjectCardComponent);
    return ProjectCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/task-table/task-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table datatable [dtOptions]=\"datatableOptions\" class=\"table table-bordered\">\n  <thead>\n  <tr>\n    <th>Name</th>\n    <th>Status</th>\n    <th>priority</th>\n    <th>Deadline</th>\n    <th>Project</th>\n    <th>List</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let task of tasks;let i = index\">\n    <td>\n      <a routerLink=\"/task/view/{{team.id}}\">{{task.name}}</a>\n    </td>\n    <td>\n      <span>{{task.statusText}}</span>\n    </td>\n    <td>\n      <span>{{task.priorityText}}</span>\n    </td>\n    <td>\n      <span>{{task.deadline}}</span>\n    </td>\n    <td>\n      <span>{{task.project.name}}</span>\n    </td>\n    <td>\n      <span>{{task.list.name}}</span>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/cmaComponents/task-table/task-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cmaComponents/task-table/task-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskTableComponent; });
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

var TaskTableComponent = /** @class */ (function () {
    function TaskTableComponent() {
        this.datatableOptions = {
            searching: false,
            lengthChange: false,
            paging: false,
            ordering: false
        };
    }
    TaskTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TaskTableComponent.prototype, "tasks", void 0);
    TaskTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-table',
            template: __webpack_require__("../../../../../src/app/cmaComponents/task-table/task-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cmaComponents/task-table/task-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskTableComponent);
    return TaskTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cmaComponents/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"icons-list\">\n  <li *ngFor=\"let user of users\">\n    <i>\n      <img *ngIf=\"user.avatar\" src=\"{{user.avatar}}\" class=\"avatar img-avatar\">\n      <img *ngIf=\"!user.avatar\" src=\"/assets/img/100x100_avatar.png\" class=\"avatar img-avatar\">\n    </i>\n    <div class=\"desc\">\n      <div class=\"title\">\n        <a href=\"#/account/detail?id={{user.id}}\">\n          {{user.name}}\n        </a>\n      </div>\n      <small>{{user.email}}</small>\n    </div>\n    <div class=\"value\">\n      <small>{{user.phone}}</small>\n    </div>\n    <div class=\"actions\">\n      <i *ngIf=\"user.phone\" class=\"fa fa-phone text-muted\"></i>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/cmaComponents/user-list/user-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cmaComponents/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
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

var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
        if (!this.users) {
            if (this.user) {
                this.users = [this.user];
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], UserListComponent.prototype, "users", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "user", void 0);
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__("../../../../../src/app/cmaComponents/user-list/user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cmaComponents/user-list/user-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-aside/app-aside.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"aside-menu\">\r\n  \r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-aside/app-aside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAsideComponent; });
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

var AppAsideComponent = /** @class */ (function () {
    function AppAsideComponent() {
    }
    AppAsideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aside',
            template: __webpack_require__("../../../../../src/app/components/app-aside/app-aside.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppAsideComponent);
    return AppAsideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-aside/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_aside_component__ = __webpack_require__("../../../../../src/app/components/app-aside/app-aside.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_aside_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-breadcrumbs/app-breadcrumbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppBreadcrumbsComponent = /** @class */ (function () {
    function AppBreadcrumbsComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    }
    AppBreadcrumbsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumbs',
            template: "\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n    <li class=\"breadcrumb-item\"\n        *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/'||breadcrumb.label.title&&last\"\n        [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </ng-template>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AppBreadcrumbsComponent);
    return AppBreadcrumbsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-breadcrumbs/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_breadcrumbs_component__ = __webpack_require__("../../../../../src/app/components/app-breadcrumbs/app-breadcrumbs.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_breadcrumbs_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-footer/app-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"app-footer\">\r\n  <span><a>C&M Team</a> &copy; 2017 </span>\r\n  <span class=\"ml-auto\">Powered by <a></a></span>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-footer/app-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/app-footer/app-footer.component.html")
        })
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-footer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_footer_component__ = __webpack_require__("../../../../../src/app/components/app-footer/app-footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_footer_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\r\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" href=\"#\"></a>\r\n  <button class=\"navbar-toggler d-md-down-none mr-auto\" type=\"button\" appSidebarToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <!-- <a href=\"#\" style=\"right:180px;top:-40px;position:absolute\">\r\n    <form class=\"form-inline my-lg-0 my-lg-5\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"\" aria-label=\"Search\">\r\n      <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-search fa-lg mt-1.9\"></i>&nbsp; Search</button>\r\n    </form>\r\n  </a> -->\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n    <li class=\"nav-item dropdown\" dropdown>\r\n      <a href class=\"nav-link dropdown-toggle\" dropdownToggle (click)=\"false\">\r\n        <img *ngIf=\"user.avatar\" src=\"{{user.avatar}}\" class=\"img-avatar\">\r\n        <span class=\"d-md-down-none\">{{user.name}}</span>\r\n\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n\r\n        <div class=\"dropdown-header text-center\">\r\n          <strong>Account</strong>\r\n        </div>\r\n        <a class=\"dropdown-item\" href=\"#\">\r\n          <i class=\"fa fa-bell-o\"></i> Updates</a>\r\n        <a class=\"dropdown-item\" href=\"#\">\r\n          <i class=\"fa fa-tasks\"></i> Tasks</a>\r\n        <a class=\"dropdown-item\" href=\"#\">\r\n          <i class=\"fa fa-file\"></i> Projects</a>\r\n\r\n        <div class=\"dropdown-header text-center\">\r\n          <strong>Settings</strong>\r\n        </div>\r\n        <a class=\"dropdown-item\" href=\"#\">\r\n          <i class=\"fa fa-user\"></i> Profile</a>\r\n        <a class=\"dropdown-item\" href=\"#\" (click)=\"logout($event)\">\r\n          <i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n    <button class=\"navbar-toggler d-md-down-none\" type=\"button\" appAsideMenuToggler>\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  </ul>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(userService, router, store) {
        this.userService = userService;
        this.router = router;
        this.store = store;
        this.currentUserCursor = store.select(['currentUser']);
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
        this.user = this.currentUserCursor.get();
        this.currentUserCursor.on('update', this.handleCurrentUserUpdate.bind(this));
    };
    AppHeaderComponent.prototype.handleCurrentUserUpdate = function (event) {
        this.user = event.data.currentData;
    };
    AppHeaderComponent.prototype.logout = function ($event) {
        $event.preventDefault();
        this.userService.logout();
        this.router.navigate(['login']);
    };
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/app-header/app-header.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_tree_service__["a" /* StoreService */]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_header_component__ = __webpack_require__("../../../../../src/app/components/app-header/app-header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_header_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-footer/app-sidebar-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"sidebar-footer\"></div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-footer/app-sidebar-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSidebarFooterComponent = /** @class */ (function () {
    function AppSidebarFooterComponent() {
    }
    AppSidebarFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-footer',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar-footer/app-sidebar-footer.component.html")
        })
    ], AppSidebarFooterComponent);
    return AppSidebarFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-footer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_footer_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar-footer/app-sidebar-footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_footer_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-form/app-sidebar-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"sidebar-form\"></form> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-form/app-sidebar-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSidebarFormComponent = /** @class */ (function () {
    function AppSidebarFormComponent() {
    }
    AppSidebarFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-form',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar-form/app-sidebar-form.component.html")
        })
    ], AppSidebarFormComponent);
    return AppSidebarFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-form/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_form_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar-form/app-sidebar-form.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_form_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-header/app-sidebar-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"sidebar-header\"></div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-header/app-sidebar-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSidebarHeaderComponent = /** @class */ (function () {
    function AppSidebarHeaderComponent() {
    }
    AppSidebarHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-header',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar-header/app-sidebar-header.component.html")
        })
    ], AppSidebarHeaderComponent);
    return AppSidebarHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_header_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar-header/app-sidebar-header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_header_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-minimizer/app-sidebar-minimizer.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"sidebar-minimizer\" type=\"button\" appSidebarMinimizer appBrandMinimizer></button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-minimizer/app-sidebar-minimizer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarMinimizerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSidebarMinimizerComponent = /** @class */ (function () {
    function AppSidebarMinimizerComponent() {
    }
    AppSidebarMinimizerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-minimizer',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar-minimizer/app-sidebar-minimizer.component.html")
        })
    ], AppSidebarMinimizerComponent);
    return AppSidebarMinimizerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-minimizer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_minimizer_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar-minimizer/app-sidebar-minimizer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_minimizer_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-nav/app-sidebar-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppSidebarNavComponent */
/* unused harmony export AppSidebarNavItemComponent */
/* unused harmony export AppSidebarNavLinkComponent */
/* unused harmony export AppSidebarNavDropdownComponent */
/* unused harmony export AppSidebarNavTitleComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_SIDEBAR_NAV; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nav_service__ = __webpack_require__("../../../../../src/app/services/nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import navigation elements

var AppSidebarNavComponent = /** @class */ (function () {
    function AppSidebarNavComponent(navService) {
        this.navService = navService;
        this.navigation = navService.getCurrentUserMenu();
    }
    AppSidebarNavComponent.prototype.isDivider = function (item) {
        return item.divider ? true : false;
    };
    AppSidebarNavComponent.prototype.isTitle = function (item) {
        return item.title ? true : false;
    };
    AppSidebarNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-nav',
            template: "\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <ng-template ngFor let-navitem [ngForOf]=\"navigation\">\n          <li *ngIf=\"isDivider(navitem)\" class=\"nav-divider\"></li>\n          <ng-template [ngIf]=\"isTitle(navitem)\">\n            <app-sidebar-nav-title [title]='navitem'></app-sidebar-nav-title>\n          </ng-template>\n          <ng-template [ngIf]=\"!isDivider(navitem)&&!isTitle(navitem)\">\n            <app-sidebar-nav-item [item]='navitem'></app-sidebar-nav-item>\n          </ng-template>\n        </ng-template>\n      </ul>\n    </nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_nav_service__["a" /* NavService */]])
    ], AppSidebarNavComponent);
    return AppSidebarNavComponent;
}());


var AppSidebarNavItemComponent = /** @class */ (function () {
    function AppSidebarNavItemComponent(router) {
        this.router = router;
    }
    AppSidebarNavItemComponent.prototype.hasClass = function () {
        return this.item.class ? true : false;
    };
    AppSidebarNavItemComponent.prototype.isDropdown = function () {
        return this.item.children ? true : false;
    };
    AppSidebarNavItemComponent.prototype.thisUrl = function () {
        return this.item.url;
    };
    AppSidebarNavItemComponent.prototype.isActive = function () {
        return this.router.isActive(this.thisUrl(), false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppSidebarNavItemComponent.prototype, "item", void 0);
    AppSidebarNavItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-nav-item',
            template: "\n    <li *ngIf=\"!isDropdown(); else dropdown\" [ngClass]=\"hasClass() ? 'nav-item ' + item.class : 'nav-item'\">\n      <app-sidebar-nav-link [link]='item'></app-sidebar-nav-link>\n    </li>\n    <ng-template #dropdown>\n      <li [ngClass]=\"hasClass() ? 'nav-item nav-dropdown ' + item.class : 'nav-item nav-dropdown'\"\n          [class.open]=\"isActive()\"\n          routerLinkActive=\"open\"\n          appNavDropdown>\n        <app-sidebar-nav-dropdown [link]='item'></app-sidebar-nav-dropdown>\n      </li>\n    </ng-template>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AppSidebarNavItemComponent);
    return AppSidebarNavItemComponent;
}());

var AppSidebarNavLinkComponent = /** @class */ (function () {
    function AppSidebarNavLinkComponent() {
    }
    AppSidebarNavLinkComponent.prototype.hasVariant = function () {
        return this.link.variant ? true : false;
    };
    AppSidebarNavLinkComponent.prototype.isBadge = function () {
        return this.link.badge ? true : false;
    };
    AppSidebarNavLinkComponent.prototype.isExternalLink = function () {
        return this.link.url.substring(0, 4) === 'http' ? true : false;
    };
    AppSidebarNavLinkComponent.prototype.isIcon = function () {
        return this.link.icon ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppSidebarNavLinkComponent.prototype, "link", void 0);
    AppSidebarNavLinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-nav-link',
            template: "\n    <a *ngIf=\"!isExternalLink(); else external\"\n       [ngClass]=\"hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'\"\n       routerLinkActive=\"active\"\n       [routerLink]=\"[link.url]\">\n      <i *ngIf=\"isIcon()\" class=\"{{ link.icon }}\"></i>\n      {{ link.name }}\n      <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n    </a>\n    <ng-template #external>\n      <a [ngClass]=\"hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'\" href=\"{{link.url}}\">\n        <i *ngIf=\"isIcon()\" class=\"{{ link.icon }}\"></i>\n        {{ link.name }}\n        <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n      </a>\n    </ng-template>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebarNavLinkComponent);
    return AppSidebarNavLinkComponent;
}());

var AppSidebarNavDropdownComponent = /** @class */ (function () {
    function AppSidebarNavDropdownComponent() {
    }
    AppSidebarNavDropdownComponent.prototype.isBadge = function () {
        return this.link.badge ? true : false;
    };
    AppSidebarNavDropdownComponent.prototype.isIcon = function () {
        return this.link.icon ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppSidebarNavDropdownComponent.prototype, "link", void 0);
    AppSidebarNavDropdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-nav-dropdown',
            template: "\n    <a class=\"nav-link nav-dropdown-toggle\" appNavDropdownToggle>\n      <i *ngIf=\"isIcon()\" class=\"{{ link.icon }}\"></i>\n      {{ link.name }}\n      <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n    </a>\n    <ul class=\"nav-dropdown-items\">\n      <ng-template ngFor let-child [ngForOf]=\"link.children\">\n        <app-sidebar-nav-item [item]='child'></app-sidebar-nav-item>\n      </ng-template>\n    </ul>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebarNavDropdownComponent);
    return AppSidebarNavDropdownComponent;
}());

var AppSidebarNavTitleComponent = /** @class */ (function () {
    function AppSidebarNavTitleComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    AppSidebarNavTitleComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement;
        var li = this.renderer.createElement('li');
        var name = this.renderer.createText(this.title.name);
        this.renderer.addClass(li, 'nav-title');
        if (this.title.class) {
            var classes = this.title.class;
            this.renderer.addClass(li, classes);
        }
        if (this.title.wrapper) {
            var wrapper = this.renderer.createElement(this.title.wrapper.element);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(li, wrapper);
        }
        else {
            this.renderer.appendChild(li, name);
        }
        this.renderer.appendChild(nativeElement, li);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppSidebarNavTitleComponent.prototype, "title", void 0);
    AppSidebarNavTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-nav-title',
            template: ''
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], AppSidebarNavTitleComponent);
    return AppSidebarNavTitleComponent;
}());

var APP_SIDEBAR_NAV = [
    AppSidebarNavComponent,
    AppSidebarNavDropdownComponent,
    AppSidebarNavItemComponent,
    AppSidebarNavLinkComponent,
    AppSidebarNavTitleComponent
];


/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-nav/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_nav_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar-nav/app-sidebar-nav.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_nav_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar/app-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\r\n  <app-sidebar-header></app-sidebar-header>\r\n  <app-sidebar-form></app-sidebar-form>\r\n  <app-sidebar-nav></app-sidebar-nav>\r\n  <app-sidebar-footer></app-sidebar-footer>\r\n  <app-sidebar-minimizer></app-sidebar-minimizer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar/app-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSidebarComponent = /** @class */ (function () {
    function AppSidebarComponent() {
    }
    AppSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar/app-sidebar.component.html")
        })
    ], AppSidebarComponent);
    return AppSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar/app-sidebar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_aside__ = __webpack_require__("../../../../../src/app/components/app-aside/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__app_aside__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_breadcrumbs__ = __webpack_require__("../../../../../src/app/components/app-breadcrumbs/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__app_breadcrumbs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_footer__ = __webpack_require__("../../../../../src/app/components/app-footer/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__app_footer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_header__ = __webpack_require__("../../../../../src/app/components/app-header/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__app_header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_sidebar__ = __webpack_require__("../../../../../src/app/components/app-sidebar/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__app_sidebar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_sidebar_footer__ = __webpack_require__("../../../../../src/app/components/app-sidebar-footer/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__app_sidebar_footer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_sidebar_form__ = __webpack_require__("../../../../../src/app/components/app-sidebar-form/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__app_sidebar_form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_sidebar_header__ = __webpack_require__("../../../../../src/app/components/app-sidebar-header/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__app_sidebar_header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_sidebar_minimizer__ = __webpack_require__("../../../../../src/app/components/app-sidebar-minimizer/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__app_sidebar_minimizer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_sidebar_nav__ = __webpack_require__("../../../../../src/app/components/app-sidebar-nav/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__app_sidebar_nav__["a"]; });












/***/ }),

/***/ "../../../../../src/app/containers/full-layout/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"app-body\">\r\n  <app-sidebar></app-sidebar>\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n    <!-- Breadcrumb -->\r\n    <ol class=\"breadcrumb\">\r\n      <app-breadcrumbs></app-breadcrumbs>\r\n    </ol>\r\n    <div class=\"container-fluid \">\r\n      <router-outlet></router-outlet>\r\n    </div><!-- /.conainer-fluid -->\r\n  </main>\r\n  <app-aside></app-aside>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/containers/full-layout/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent() {
    }
    FullLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/containers/full-layout/full-layout.component.html")
        })
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/containers/full-layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__full_layout_component__ = __webpack_require__("../../../../../src/app/containers/full-layout/full-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__full_layout_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/containers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__full_layout__ = __webpack_require__("../../../../../src/app/containers/full-layout/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__full_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__simple_layout__ = __webpack_require__("../../../../../src/app/containers/simple-layout/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__simple_layout__["a"]; });




/***/ }),

/***/ "../../../../../src/app/containers/simple-layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simple_layout_component__ = __webpack_require__("../../../../../src/app/containers/simple-layout/simple-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__simple_layout_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/containers/simple-layout/simple-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SimpleLayoutComponent = /** @class */ (function () {
    function SimpleLayoutComponent() {
    }
    SimpleLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: '<router-outlet></router-outlet>',
        })
    ], SimpleLayoutComponent);
    return SimpleLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/aside/aside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideToggleDirective; });
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

/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AsideToggleDirective.prototype, "toggleOpen", null);
    AsideToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAsideMenuToggler]',
        }),
        __metadata("design:paramtypes", [])
    ], AsideToggleDirective);
    return AsideToggleDirective;
}());



/***/ }),

/***/ "../../../../../src/app/directives/aside/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aside_directive__ = __webpack_require__("../../../../../src/app/directives/aside/aside.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__aside_directive__["a"]; });



/***/ }),

/***/ "../../../../../src/app/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aside__ = __webpack_require__("../../../../../src/app/directives/aside/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__aside__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_dropdown__ = __webpack_require__("../../../../../src/app/directives/nav-dropdown/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__nav_dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__replace__ = __webpack_require__("../../../../../src/app/directives/replace/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__replace__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar__ = __webpack_require__("../../../../../src/app/directives/sidebar/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__sidebar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipe_truncateText_pipe__ = __webpack_require__("../../../../../src/app/directives/pipe/truncateText.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__pipe_truncateText_pipe__["a"]; });







/***/ }),

/***/ "../../../../../src/app/directives/nav-dropdown/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_dropdown_directive__ = __webpack_require__("../../../../../src/app/directives/nav-dropdown/nav-dropdown.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__nav_dropdown_directive__["a"]; });



/***/ }),

/***/ "../../../../../src/app/directives/nav-dropdown/nav-dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NavDropdownDirective */
/* unused harmony export NavDropdownToggleDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAV_DROPDOWN_DIRECTIVES; });
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

var NavDropdownDirective = /** @class */ (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNavDropdown]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NavDropdownDirective);
    return NavDropdownDirective;
}());

/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = /** @class */ (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
    NavDropdownToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNavDropdownToggle]'
        }),
        __metadata("design:paramtypes", [NavDropdownDirective])
    ], NavDropdownToggleDirective);
    return NavDropdownToggleDirective;
}());

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];


/***/ }),

/***/ "../../../../../src/app/directives/pipe/truncateText.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateTextPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncateTextPipe = /** @class */ (function () {
    function TruncateTextPipe() {
    }
    TruncateTextPipe.prototype.transform = function (value, length) {
        if (!value) {
            return value;
        }
        var biggestWord = 50;
        var elipses = '...';
        if (typeof value === 'undefined') {
            return value;
        }
        if (value.length <= length) {
            return value;
        }
        // .. truncate to about correct lenght
        var truncatedText = value.slice(0, length + biggestWord);
        // .. now nibble ends till correct length
        while (truncatedText.length > length - elipses.length) {
            var lastSpace = truncatedText.lastIndexOf(' ');
            if (lastSpace === -1) {
                break;
            }
            truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?;:]$/, '');
        }
        return truncatedText + elipses;
    };
    TruncateTextPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'truncatetext'
        })
    ], TruncateTextPipe);
    return TruncateTextPipe;
}());



/***/ }),

/***/ "../../../../../src/app/directives/replace/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__replace_directive__ = __webpack_require__("../../../../../src/app/directives/replace/replace.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__replace_directive__["a"]; });



/***/ }),

/***/ "../../../../../src/app/directives/replace/replace.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplaceDirective; });
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

var ReplaceDirective = /** @class */ (function () {
    function ReplaceDirective(el) {
        this.el = el;
    }
    // wait for the component to render completely
    ReplaceDirective.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement;
        var parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    ReplaceDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            // tslint:disable-next-line:max-line-length
            selector: '[appHostReplace], app-aside, app-breadcrumbs, app-footer, app-header, app-sidebar, app-sidebar-footer, app-sidebar-form, app-sidebar-header, app-sidebar-minimizer, app-sidebar-nav, app-sidebar-nav-dropdown, app-sidebar-nav-item, app-sidebar-nav-link, app-sidebar-nav-title'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ReplaceDirective);
    return ReplaceDirective;
}());



/***/ }),

/***/ "../../../../../src/app/directives/sidebar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebar_directive__ = __webpack_require__("../../../../../src/app/directives/sidebar/sidebar.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sidebar_directive__["a"]; });



/***/ }),

/***/ "../../../../../src/app/directives/sidebar/sidebar.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SidebarToggleDirective */
/* unused harmony export SidebarMinimizeDirective */
/* unused harmony export BrandMinimizeDirective */
/* unused harmony export MobileSidebarToggleDirective */
/* unused harmony export SidebarOffCanvasCloseDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
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

/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());

var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarMinimizeDirective.prototype, "toggleOpen", null);
    SidebarMinimizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarMinimizeDirective);
    return SidebarMinimizeDirective;
}());

var BrandMinimizeDirective = /** @class */ (function () {
    function BrandMinimizeDirective() {
    }
    BrandMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('brand-minimized');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BrandMinimizeDirective.prototype, "toggleOpen", null);
    BrandMinimizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appBrandMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], BrandMinimizeDirective);
    return BrandMinimizeDirective;
}());

var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appMobileSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarClose]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    BrandMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective
];


/***/ }),

/***/ "../../../../../src/app/interfaces/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlwaysAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlwaysAuthGuard = /** @class */ (function () {
    function AlwaysAuthGuard(router, storeService) {
        this.router = router;
        this.storeService = storeService;
    }
    AlwaysAuthGuard.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = _this.storeService.get(['currentUser']);
            var isSuccess = currentUser != null;
            if (isSuccess) {
                resolve(isSuccess);
            }
            else {
                _this.router.navigate(['login']);
                resolve(isSuccess);
            }
        });
    };
    AlwaysAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__tree_service__["a" /* StoreService */]])
    ], AlwaysAuthGuard);
    return AlwaysAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serverPath__ = __webpack_require__("../../../../../src/app/_serverPath.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_superagent__ = __webpack_require__("../../../../superagent/lib/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_superagent__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentService = /** @class */ (function () {
    function CommentService(storeService) {
        this.storeService = storeService;
        this.tokenCursor = storeService.select(['token', 'access_token']);
    }
    CommentService.prototype.createComment = function (commentBody, taskId) {
        var _this = this;
        var dataObject = {
            Body: commentBody,
            TaskID: taskId
        };
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_superagent__["post"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].createComment)
                .set('token', _this.tokenCursor.get())
                .send(dataObject)
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            });
        });
    };
    CommentService.prototype.updateComment = function (commentId, newBody) {
        var _this = this;
        var dataObj = {
            id: commentId,
            Body: newBody
        };
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_superagent__["put"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].updateComment)
                .set('token', _this.tokenCursor.get())
                .send(dataObj)
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tree_service__["a" /* StoreService */]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "../../../../../src/app/services/dependency.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DependencyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DependencyService = /** @class */ (function () {
    function DependencyService() {
    }
    DependencyService.prototype.get = function () {
        return Promise.resolve([
            { id: 1, source: 1, target: 2, type: '0' }
        ]);
    };
    DependencyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DependencyService);
    return DependencyService;
}());



/***/ }),

/***/ "../../../../../src/app/services/list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_superagent__ = __webpack_require__("../../../../superagent/lib/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_superagent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serverPath__ = __webpack_require__("../../../../../src/app/_serverPath.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListService = /** @class */ (function () {
    function ListService(storeService) {
        this.storeService = storeService;
        this.tokenCursor = storeService.select(['token', 'access_token']);
    }
    ListService.prototype.createList = function (projectId, name) {
        var _this = this;
        var objData = {
            Name: name,
            ProjectID: projectId,
        };
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_superagent__["post"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].createList)
                .set('token', _this.tokenCursor.get())
                .send(objData)
                .type('form')
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    ListService.prototype.updateList = function (listId, name) {
        var _this = this;
        var objData = {
            Name: name,
            ID: listId,
        };
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_superagent__["put"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].updateList)
                .set('token', _this.tokenCursor.get())
                .send(objData)
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    ListService.prototype.removeList = function (listId) {
        var _this = this;
        var objData = {
            ID: listId,
        };
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_superagent__["put"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].deleteList)
                .set('token', _this.tokenCursor.get())
                .send(objData)
                .type('form')
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    ListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__tree_service__["a" /* StoreService */]])
    ], ListService);
    return ListService;
}());



/***/ }),

/***/ "../../../../../src/app/services/nav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav__ = __webpack_require__("../../../../../src/app/_nav.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavService = /** @class */ (function () {
    function NavService(store) {
        this.store = store;
        this.currentUserCursor = this.store.select(['currentUser']);
    }
    NavService.prototype.getCurrentUserMenu = function () {
        var currentUser = this.currentUserCursor.get();
        return this.getMenu(currentUser.isAdmin, currentUser.isManager);
    };
    NavService.prototype.getMenu = function (isAdmin, isManager) {
        var menu = __WEBPACK_IMPORTED_MODULE_2__nav__["c" /* staff_navigation */];
        if (isManager) {
            menu = __WEBPACK_IMPORTED_MODULE_2__nav__["b" /* manager_navigation */];
        }
        if (isAdmin) {
            menu = __WEBPACK_IMPORTED_MODULE_2__nav__["a" /* admin_navigation */];
        }
        return menu;
    };
    NavService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tree_service__["a" /* StoreService */]])
    ], NavService);
    return NavService;
}());



/***/ }),

/***/ "../../../../../src/app/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_superagent__ = __webpack_require__("../../../../superagent/lib/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_superagent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serverPath__ = __webpack_require__("../../../../../src/app/_serverPath.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = /** @class */ (function () {
    function ProjectService(store) {
        this.store = store;
        this.tokenCursor = this.store.select(['token', 'access_token']);
        this.projectsCursor = this.store.select(['projects']);
    }
    ProjectService.prototype.getListOfProject = function (projectId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_2_superagent__["get"])(__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].getProjectList(projectId))
                .set('token', _this.tokenCursor.get())
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    ProjectService.prototype.getMyProjects = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_2_superagent__["get"])(__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].myProject)
                .set('token', _this.tokenCursor.get())
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    ProjectService.prototype.getAllProjects = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        return new Promise(function (resolve, reject) {
            var projects = _this.projectsCursor.get();
            if (projects && !force) {
                resolve(projects);
            }
            else {
                Object(__WEBPACK_IMPORTED_MODULE_2_superagent__["get"])(__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].allProject)
                    .set('token', _this.tokenCursor.get())
                    .then(function (res) {
                    var content = res.body;
                    if (content.IsSuccess) {
                        _this.projectsCursor.set(content.Data);
                        resolve(content.Data);
                    }
                    else {
                        reject(content.Message);
                    }
                })
                    .catch(function (reason) { return reject(reason.response.body); });
            }
        });
    };
    ProjectService.prototype.createProject = function (name, description, startdate, deadline) {
        var _this = this;
        var objData = {
            name: name,
            description: description,
            deadline: deadline,
            startdate: startdate
        };
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_2_superagent__["post"])(__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].createProject)
                .set('token', _this.tokenCursor.get())
                .send(objData)
                .type('form')
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    ProjectService.prototype.updateProject = function (projectId, name, description, startdate, deadline) {
        var _this = this;
        var objData = {
            id: projectId,
            name: name,
            description: description,
            startdate: startdate,
            deadline: deadline
        };
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_2_superagent__["put"])(__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].updateProject)
                .set('token', _this.tokenCursor.get())
                .send(objData)
                .type('form')
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    ProjectService.prototype.getProject = function (projectId) {
        var _this = this;
        var objData = {
            id: projectId
        };
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_2_superagent__["get"])(__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].getProject(projectId))
                .set('token', _this.tokenCursor.get())
                .send(objData)
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    ProjectService.prototype.closeProject = function (projectId) {
        var _this = this;
        var objData = {
            id: projectId
        };
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_2_superagent__["put"])(__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].closeProject)
                .set('token', _this.tokenCursor.get())
                .send(objData)
                .type('form')
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tree_service__["a" /* StoreService */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "../../../../../src/app/services/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_superagent__ = __webpack_require__("../../../../superagent/lib/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_superagent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serverPath__ = __webpack_require__("../../../../../src/app/_serverPath.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskService = /** @class */ (function () {
    function TaskService(treeService) {
        this.treeService = treeService;
        this.tokenCursor = this.treeService.select(['token', 'access_token']);
        this.prioritiesCursor = this.treeService.select(['priorities']);
        this.statusesCursor = this.treeService.select(['statuses']);
    }
    TaskService.prototype.getPriorities = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var priorities = _this.prioritiesCursor.get();
            if (priorities) {
                resolve(priorities);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_superagent__["get"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].getPriority)
                    .set('token', _this.tokenCursor.get())
                    .then(function (res) {
                    var content = res.body;
                    if (content.IsSuccess) {
                        _this.prioritiesCursor.set(content.Data);
                        resolve(content.Data);
                    }
                    else {
                        reject(content.Message);
                    }
                })
                    .catch(function (reason) { return reject(reason.response.body); });
            }
        });
    };
    TaskService.prototype.getStatuses = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var statuses = _this.statusesCursor.get();
            if (statuses) {
                resolve(statuses);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_superagent__["get"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].getStatus)
                    .set('token', _this.tokenCursor.get())
                    .then(function (res) {
                    var content = res.body;
                    if (content.IsSuccess) {
                        _this.statusesCursor.set(content.Data);
                        resolve(content.Data);
                    }
                    else {
                        reject(content.Message);
                    }
                })
                    .catch(function (reason) { return reject(reason.response.body); });
            }
        });
    };
    TaskService.prototype.createTask = function (name, description, listId, priority, startDate, duration, effort) {
        var _this = this;
        var objData = {
            Name: name,
            Description: description,
            ListID: listId,
            Priority: priority,
            StartDate: startDate,
            Duration: duration,
            Effort: effort
        };
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_superagent__["post"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].createTask)
                .set('token', _this.tokenCursor.get())
                .send(objData)
                .type('form')
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    TaskService.prototype.editTask = function (taskId, name, description, listId, priority, startDate, duration, effort) {
        var _this = this;
        var objData = {
            Id: taskId,
            Name: name,
            Description: description,
            ListID: listId,
            Priority: priority,
            StartDate: startDate,
            Duration: duration,
            Effort: effort
        };
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_superagent__["put"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].createTask)
                .set('token', _this.tokenCursor.get())
                .send(objData)
                .type('form')
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    TaskService.prototype.assignTask = function (taskId, userIds) {
        var _this = this;
        var objData = {
            TaskID: taskId,
            UserIDs: userIds,
        };
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_superagent__["put"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].assignTask)
                .set('token', _this.tokenCursor.get())
                .send(objData)
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    TaskService.prototype.unassignTask = function (taskId, userIds) {
        var _this = this;
        var objData = {
            TaskID: taskId,
            UserIDs: userIds,
        };
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_superagent__["put"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].unassignTask)
                .set('token', _this.tokenCursor.get())
                .send(objData)
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    TaskService.prototype.finishTask = function (taskId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_superagent__["put"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].finishTask(taskId))
                .set('token', _this.tokenCursor.get())
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    TaskService.prototype.getTaskDetail = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_superagent__["get"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].getTask(id))
                .set('token', _this.tokenCursor.get())
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    TaskService.prototype.getMyTask = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_superagent__["get"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].getMyTask)
                .set('token', _this.tokenCursor.get())
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__tree_service__["a" /* StoreService */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/app/services/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_superagent__ = __webpack_require__("../../../../superagent/lib/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_superagent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serverPath__ = __webpack_require__("../../../../../src/app/_serverPath.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeamService = /** @class */ (function () {
    function TeamService(storeService) {
        this.storeService = storeService;
        this.tokenCursor = storeService.select(['token', 'access_token']);
        this.teamsCursor = storeService.select(['teams']);
    }
    TeamService.prototype.getAllTeam = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.teamsCursor.get()) {
                resolve(__WEBPACK_IMPORTED_MODULE_4_lodash__["cloneDeep"](_this.teamsCursor.get()));
            }
            else {
                Object(__WEBPACK_IMPORTED_MODULE_2_superagent__["get"])(__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].allTeam)
                    .set('token', _this.tokenCursor.get())
                    .then(function (res) {
                    var content = res.body;
                    if (content.IsSuccess) {
                        _this.teamsCursor.set(content.Data);
                        resolve(content.Data);
                    }
                    else {
                        reject(content.Message);
                    }
                });
            }
        });
    };
    TeamService.prototype.getDetail = function (teamId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_2_superagent__["get"])(__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].getTeamDetail(teamId))
                .set('token', _this.tokenCursor.get())
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            });
        });
    };
    TeamService.prototype.assignTeam = function (userIdArray, teamId) {
        var _this = this;
        var dataObj = {
            UserIds: userIdArray,
            TeamId: teamId
        };
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_2_superagent__["put"])(__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].assignTeam)
                .set('token', _this.tokenCursor.get())
                .send(dataObj)
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    TeamService.prototype.unAssignTeam = function (userIdArray) {
        var _this = this;
        var dataObj = {
            UserIds: userIdArray
        };
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_2_superagent__["put"])(__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].unAssignTeam)
                .set('token', _this.tokenCursor.get())
                .send(dataObj)
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    TeamService.prototype.setRole = function (teamId, userId, isManager) {
        var _this = this;
        var dataObj = {
            UserId: userId,
            TeamId: teamId,
            IsManager: isManager
        };
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_2_superagent__["put"])(__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].setTeamRole)
                .set('token', _this.tokenCursor.get())
                .send(dataObj)
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    TeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tree_service__["a" /* StoreService */]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "../../../../../src/app/services/tree.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
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

var Baobab = __webpack_require__("../../../../Baobab/dist/baobab.js");
var StoreTree = {
    token: {
        access_token: '',
    },
    currentUser: undefined,
    isWebSocketConnected: false,
    // all user from from server
    users: undefined,
    // all teams from server
    teams: undefined,
    // all projects
    projects: undefined,
    // task detail
    tasksDetail: undefined,
    // enum
    priorities: undefined,
    statuses: undefined
};
var StoreService = /** @class */ (function () {
    function StoreService() {
        this.store = new Baobab(StoreTree);
    }
    StoreService.prototype.get = function (path) {
        return this.store.get(path);
    };
    StoreService.prototype.set = function (path, value) {
        return this.store.set(path, value);
    };
    StoreService.prototype.select = function (path) {
        return this.store.select(path);
    };
    StoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "../../../../../src/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_superagent__ = __webpack_require__("../../../../superagent/lib/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_superagent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serverPath__ = __webpack_require__("../../../../../src/app/_serverPath.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = /** @class */ (function () {
    function UploadService(storeService) {
        this.storeService = storeService;
        this.currentUserCursor = storeService.select(['currentUser']);
        this.tokenCursor = storeService.select(['token', 'access_token']);
    }
    UploadService.prototype.uploadAttachment = function (file, taskId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_superagent__["put"](__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].uploadAttachment(taskId))
                .set('token', _this.tokenCursor.get())
                .attach('attachment', file)
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    UploadService.prototype.deleteAttachment = function (attachmentId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_superagent__["put"](__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].deleteAttachment(attachmentId))
                .set('token', _this.tokenCursor.get())
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    UploadService.prototype.uploadAvatarFile = function (file, userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_superagent__["put"](__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].uploadAvatar(userId))
                .set('token', _this.tokenCursor.get())
                .field('id', userId)
                .attach('avatar', file)
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__tree_service__["a" /* StoreService */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serverPath__ = __webpack_require__("../../../../../src/app/_serverPath.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_superagent__ = __webpack_require__("../../../../superagent/lib/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_superagent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(storeService) {
        this.storeService = storeService;
        this.currentUserCursor = storeService.select(['currentUser']);
        this.tokenCursor = storeService.select(['token', 'access_token']);
        this.usersCursor = storeService.select(['users']);
    }
    UserService.prototype.logout = function () {
        this.currentUserCursor.set(undefined);
        this.tokenCursor.set(undefined);
        if (typeof (Storage) !== 'undefined') {
            localStorage.clear();
        }
    };
    /**
     * @param username
     * @param password
     * @returns {Promise<User>}
     */
    UserService.prototype.login = function (username, password) {
        var _this = this;
        // return new Promise<User>();
        return new Promise(function (resolve, reject) {
            _this.getToken(username, password)
                .then(function (res) {
                var type = res.token_type;
                var expiresIn = res.expires_in;
                var token = res.access_token;
                console.debug('Login - getInfo', type, token.substring(10) + '.....');
                _this.tokenCursor.set(token);
                _this.setLocalToken(token, expiresIn);
                _this.getCurrentUserInfo()
                    .then(function (user) {
                    resolve(user);
                    _this.currentUserCursor.set(user);
                    _this.setLocalUser(user);
                })
                    .catch(reject);
            })
                .catch(function (reason) {
                reject({
                    message: reason.response.body.error_description
                });
            });
        });
    };
    UserService.prototype.getUserOfProject = function (projectId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_3_superagent__["get"])(__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].getUserOfProject(projectId))
                .set('token', _this.tokenCursor.get())
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    _this.usersCursor.set(content.Data);
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            }).catch(reject);
        });
    };
    UserService.prototype.getLeaderBoard = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_3_superagent__["get"])(__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].leaderBoard)
                .set('token', _this.tokenCursor.get())
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    _this.usersCursor.set(content.Data);
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            }).catch(reject);
        });
    };
    UserService.prototype.getAllUser = function () {
        var _this = this;
        var users = this.usersCursor.get();
        if (users !== undefined) {
            return Promise.resolve(users);
        }
        else {
            var authorization_1 = this.tokenCursor.get();
            return new Promise(function (resolve, reject) {
                Object(__WEBPACK_IMPORTED_MODULE_3_superagent__["get"])(__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].allUser)
                    .set('token', authorization_1)
                    .then(function (res) {
                    var content = res.body;
                    if (content.IsSuccess) {
                        _this.usersCursor.set(content.Data);
                        resolve(content.Data);
                    }
                    else {
                        reject(content.Message);
                    }
                }).catch(reject);
            });
        }
    };
    UserService.prototype.getToken = function (username, password) {
        var postDataObject = {
            grant_type: 'password',
            username: username,
            password: password,
        };
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_3_superagent__["post"])(__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].token)
                .send(postDataObject)
                .type('form')
                .then(function (res) {
                if (res.ok) {
                    resolve(res.body);
                }
                else {
                    reject(res);
                }
            }).catch(reject);
        });
    };
    UserService.prototype.getCurrentUserInfo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var token = _this.tokenCursor.get();
            Object(__WEBPACK_IMPORTED_MODULE_3_superagent__["get"])(__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].user)
                .set('token', token)
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(reject);
        });
    };
    UserService.prototype.createUser = function (username, password, name, phone, birthdate, email, team) {
        var _this = this;
        var postDataObject = {
            Username: username,
            Password: password,
            Name: name,
            Phone: phone,
            Birthdate: birthdate,
            Email: email,
            Team: team
        };
        return new Promise(function (resolve, reject) {
            var token = _this.tokenCursor.get();
            Object(__WEBPACK_IMPORTED_MODULE_3_superagent__["post"])(__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].createUser)
                .set('token', token)
                .send(postDataObject)
                .type('form')
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Data);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    UserService.prototype.updateUser = function (id, phone, email, team, isActive) {
        var _this = this;
        var postDataObject = {
            ID: id,
            Phone: phone,
            Email: email,
            IsActive: isActive,
            Team: team
        };
        return new Promise(function (resolve, reject) {
            var token = _this.tokenCursor.get();
            Object(__WEBPACK_IMPORTED_MODULE_3_superagent__["post"])(__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].updateUser)
                .set('token', token)
                .send(postDataObject)
                .type('form')
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    UserService.prototype.resetPassword = function (id) {
        var _this = this;
        var postDataObject = {
            id: id,
        };
        return new Promise(function (resolve, reject) {
            var token = _this.tokenCursor.get();
            Object(__WEBPACK_IMPORTED_MODULE_3_superagent__["post"])(__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].resetPassword(id))
                .set('token', token)
                .send(postDataObject)
                .type('form')
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    UserService.prototype.getLocalToken = function () {
        if (typeof (Storage) !== 'undefined') {
            var token = localStorage.getItem('AgencyToken');
            if (token) {
                var expireTime = Number(localStorage.getItem('AgencyTokenExpireTime'));
                var now = __WEBPACK_IMPORTED_MODULE_4_moment__().unix();
                if (now < expireTime) {
                    return token;
                }
            }
        }
    };
    UserService.prototype.setLocalToken = function (token, expiresIn) {
        if (typeof (Storage) !== 'undefined') {
            localStorage.setItem('AgencyToken', token);
            if (expiresIn) {
                var now = __WEBPACK_IMPORTED_MODULE_4_moment__().unix();
                localStorage.setItem('AgencyTokenExpireTime', String(now + expiresIn));
            }
        }
    };
    UserService.prototype.getLocalUser = function () {
        if (typeof (Storage) !== 'undefined') {
            var expireTime = Number(localStorage.getItem('AgencyTokenExpireTime'));
            var now = __WEBPACK_IMPORTED_MODULE_4_moment__().unix();
            if (now < expireTime) {
                var userJson = localStorage.getItem('AgencyUser');
                return JSON.parse(userJson);
            }
        }
    };
    UserService.prototype.setLocalUser = function (user) {
        if (typeof (Storage) !== 'undefined') {
            var userJson = JSON.stringify(user);
            localStorage.setItem('AgencyUser', userJson);
        }
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tree_service__["a" /* StoreService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebsocketService = /** @class */ (function () {
    function WebsocketService(storeService) {
        this.storeService = storeService;
        this.isConnectedCursor = this.storeService.select(['isWebSocketConnected']);
        this.tokenCursor = this.storeService.select(['token']);
        this.tokenCursor.on('update', this.handleTokenUpdate.bind(this));
    }
    WebsocketService.prototype.handleTokenUpdate = function (event) {
        var token = event.data.currentData;
        console.debug('handleTokenUpdate', token);
        if (token.access_token) {
            this.connect(token.access_token);
        }
    };
    WebsocketService.prototype.connect = function (access_token) {
        var _this = this;
        if ($ === undefined || $.connection === undefined) {
            throw new Error('Missing dependency');
        }
        else {
            this.connection = $.connection;
            this.connection.hub.qs = { 'token': access_token };
            this.connection.hub.url = '/signalr';
            this.connection.hub.start().then(function (_) {
                _this.isConnectedCursor.set(true);
            });
        }
    };
    WebsocketService.prototype.getUserHub = function () {
        if (this.isConnectedCursor.get()) {
            return this.connection.accountHub;
        }
        else {
            throw new Error('Connection is not available');
        }
    };
    WebsocketService.prototype.getProjectHub = function () {
        if (this.isConnectedCursor.get()) {
            return this.connection.projectHub;
        }
        else {
            throw new Error('Connection is not available');
        }
    };
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tree_service__["a" /* StoreService */]])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./af.js": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./ar": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./az": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./az.js": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./be": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./be.js": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./bg": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bg.js": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bn": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bn.js": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bo": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./bo.js": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./br": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./br.js": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./bs": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./bs.js": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./ca": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./ca.js": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./cs": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cs.js": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cv": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cv.js": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cy": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./cy.js": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./da": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./da.js": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./de": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./de-at": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./dv": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./dv.js": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./el": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./el.js": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./en-au": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-nz": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./eo": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./eo.js": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./es": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./es-do": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es.js": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./et": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./et.js": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./eu": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./eu.js": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./fa": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fa.js": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fi": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fi.js": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fo": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fo.js": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fr": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fy": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./fy.js": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./gd": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gd.js": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gl": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gl.js": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gom-latn": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./he": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./he.js": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./hi": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hi.js": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hr": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hr.js": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hu": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hu.js": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hy-am": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./id": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./id.js": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./is": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./is.js": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./it": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./it.js": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./ja": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./ja.js": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./jv": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./jv.js": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./ka": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./ka.js": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./kk": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./kk.js": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./km": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./km.js": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./kn": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./kn.js": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./ko": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ko.js": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ky": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./ky.js": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./lb": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lb.js": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lo": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lo.js": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lt": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lt.js": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lv": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./lv.js": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./me": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./me.js": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./mi": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mi.js": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mk": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./mk.js": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./ml": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./ml.js": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./mr": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./mr.js": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./ms": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./ms-my": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./my": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./my.js": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./nb": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./nb.js": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./ne": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./ne.js": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./nl": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nl-be": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nn": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./nn.js": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./pa-in": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pl": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pl.js": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pt": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./pt-br": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./ro": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ro.js": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ru": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./ru.js": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./sd": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./sd.js": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./se": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./se.js": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./si": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./si.js": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./sk": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sk.js": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sl": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sl.js": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sq": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sq.js": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sr": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./ss": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./ss.js": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./sv": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sv.js": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sw": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./sw.js": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./ta": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./ta.js": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./te": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./te.js": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./tet": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./tet.js": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./th": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./th.js": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./tl-ph": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tr": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tr.js": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tzl": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzm": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./uk": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./uk.js": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./ur": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./ur.js": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./uz": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./vi": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./vi.js": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./yo.js": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../../../chart.js/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../chart.js/node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map