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
		"pages.module",
		"common"
	],
	"./views/project-management/project-management.module": [
		"../../../../../src/app/views/project-management/project-management.module.ts",
		"project-management.module",
		"common"
	],
	"./views/team-management/admin.module": [
		"../../../../../src/app/views/team-management/admin.module.ts",
		"admin.module",
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
var staff_navigation = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
            variant: 'info'
        }
    }
];
var manager_navigation = [];
var admin_navigation = [
    {
        name: 'Project',
        url: '/project',
        icon: 'icon-calendar',
        badge: {
            variant: 'info'
        }
    },
    {
        name: 'Team',
        url: '/team',
        icon: 'icon-people',
        badge: {
            variant: 'info'
        }
    },
    {
        name: 'Manages account',
        url: '/account/view',
        icon: 'icon-user',
        badge: {
            variant: 'info'
        }
    },
    {
        name: 'Manage teams',
        url: '/admin/teamManagePage',
        icon: 'icon-people',
        badge: undefined
    },
];



/***/ }),

/***/ "../../../../../src/app/_serverPath.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serverPath; });
var serverPath = {
    token: '/token',
    user: '/api/user',
    allUser: '/api/user/all',
    allProject: '/api/project/all',
    allTeam: '/api/team/all',
    myProject: '/api/project'
};



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // tslint:disable-next-line
            selector: 'body',
            template: '<router-outlet></router-outlet>'
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers__ = __webpack_require__("../../../../../src/app/containers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_websocket_service__ = __webpack_require__("../../../../../src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_nav_service__ = __webpack_require__("../../../../../src/app/services/nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_charts_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Import containers

var APP_CONTAINERS = [
    __WEBPACK_IMPORTED_MODULE_4__containers__["a" /* FullLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_4__containers__["b" /* SimpleLayoutComponent */]
];
// Import components

var APP_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_5__components__["b" /* AppAsideComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["c" /* AppBreadcrumbsComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["d" /* AppFooterComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["e" /* AppHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["f" /* AppSidebarComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["g" /* AppSidebarFooterComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["h" /* AppSidebarFormComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["i" /* AppSidebarHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["j" /* AppSidebarMinimizerComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["a" /* APP_SIDEBAR_NAV */]
];
// Import directives

var APP_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_6__directives__["a" /* AsideToggleDirective */],
    __WEBPACK_IMPORTED_MODULE_6__directives__["b" /* NAV_DROPDOWN_DIRECTIVES */],
    __WEBPACK_IMPORTED_MODULE_6__directives__["c" /* ReplaceDirective */],
    __WEBPACK_IMPORTED_MODULE_6__directives__["d" /* SIDEBAR_TOGGLE_DIRECTIVES */]
];
// Import routing module

// Import provider







var SERVICES = [
    __WEBPACK_IMPORTED_MODULE_8__services_auth_guard__["a" /* AlwaysAuthGuard */],
    __WEBPACK_IMPORTED_MODULE_9__services_tree_service__["a" /* StoreService */],
    __WEBPACK_IMPORTED_MODULE_10__services_websocket_service__["a" /* WebsocketService */],
    __WEBPACK_IMPORTED_MODULE_11__services_nav_service__["a" /* NavService */],
    __WEBPACK_IMPORTED_MODULE_12__services_user_service__["a" /* UserService */],
    __WEBPACK_IMPORTED_MODULE_13__services_project_service__["a" /* ProjectService */],
    __WEBPACK_IMPORTED_MODULE_14__services_team_service__["a" /* TeamService */]
];
// Import 3rd party components



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17_ng2_charts_ng2_charts__["ChartsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ].concat(APP_CONTAINERS, APP_COMPONENTS, APP_DIRECTIVES),
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* HashLocationStrategy */]
                }].concat(SERVICES),
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
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
                loadChildren: './views/project-management/project-management.module#ProjectManagementModule'
            },
            {
                path: 'account',
                loadChildren: './views/user-management/user-management.module#UserManagementModule'
            },
            {
                path: 'admin',
                loadChildren: './views/team-management/admin.module#AdminModule'
            },
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

module.exports = "<header class=\"app-header navbar\">\r\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" href=\"#\"></a>\r\n  <button class=\"navbar-toggler d-md-down-none mr-auto\" type=\"button\" appSidebarToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <!-- <a href=\"#\" style=\"right:180px;top:-40px;position:absolute\">\r\n    <form class=\"form-inline my-lg-0 my-lg-5\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"\" aria-label=\"Search\">\r\n      <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-search fa-lg mt-1.9\"></i>&nbsp; Search</button>\r\n    </form>\r\n  </a> -->\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n    <li class=\"nav-item dropdown\" dropdown>\r\n      <a href class=\"nav-link dropdown-toggle\" dropdownToggle (click)=\"false\">\r\n        <img *ngIf=\"user.avatar\" src=\"{{user.avatar}}\" class=\"img-avatar\">\r\n        <span class=\"d-md-down-none\">{{user.username}}</span>\r\n\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n\r\n        <div class=\"dropdown-header text-center\">\r\n          <strong>Account</strong>\r\n        </div>\r\n        <a class=\"dropdown-item\" href=\"#\">\r\n          <i class=\"fa fa-bell-o\"></i> Updates</a>\r\n        <a class=\"dropdown-item\" href=\"#\">\r\n          <i class=\"fa fa-tasks\"></i> Tasks</a>\r\n        <a class=\"dropdown-item\" href=\"#\">\r\n          <i class=\"fa fa-file\"></i> Projects</a>\r\n\r\n        <div class=\"dropdown-header text-center\">\r\n          <strong>Settings</strong>\r\n        </div>\r\n        <a class=\"dropdown-item\" href=\"#\">\r\n          <i class=\"fa fa-user\"></i> Profile</a>\r\n        <a class=\"dropdown-item\" href=\"#\" (click)=\"logout($event)\">\r\n          <i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n    <button class=\"navbar-toggler d-md-down-none\" type=\"button\" appAsideMenuToggler>\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  </ul>\r\n</header>\r\n"

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

module.exports = "<app-header></app-header>\r\n<div class=\"app-body\">\r\n  <app-sidebar></app-sidebar>\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n    <!-- Breadcrumb -->\r\n    <ol class=\"breadcrumb\">\r\n      <app-breadcrumbs></app-breadcrumbs>\r\n    </ol>\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n    </div><!-- /.conainer-fluid -->\r\n  </main>\r\n  <app-aside></app-aside>\r\n</div>\r\n<app-footer></app-footer>\r\n"

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
            menu = menu.concat(__WEBPACK_IMPORTED_MODULE_2__nav__["b" /* manager_navigation */]);
        }
        if (isAdmin) {
            menu = menu.concat(__WEBPACK_IMPORTED_MODULE_2__nav__["a" /* admin_navigation */]);
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
    }
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
            });
        });
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tree_service__["a" /* StoreService */]])
    ], ProjectService);
    return ProjectService;
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
    }
    TeamService.prototype.getAllTeam = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_2_superagent__["get"])(__WEBPACK_IMPORTED_MODULE_3__serverPath__["a" /* serverPath */].allTeam)
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
        type: ''
    },
    bearerToken: undefined,
    currentUser: undefined,
    isWebSocketConnected: false
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

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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




var UserService = /** @class */ (function () {
    function UserService(storeService) {
        this.storeService = storeService;
        this.currentUserCursor = storeService.select(['currentUser']);
        this.tokenCursor = storeService.select(['token', 'access_token']);
        this.securityTypeCursor = storeService.select(['token', 'type']);
    }
    UserService.prototype.logout = function () {
        this.currentUserCursor.set(undefined);
        this.tokenCursor.set(undefined);
        this.securityTypeCursor.set(undefined);
    };
    // getLocalToken(): string {
    //   if (typeof(Storage) !== 'undefined') {
    //     let token = localStorage.getItem('AgencyToken');
    //     let expire = localStorage.getItem('AgencyTokenExpireTime');
    //   }
    // }
    //
    // setLocalToken() {
    //   if (typeof(Storage) !== 'undefined') {
    //
    //   }
    // }
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
                var token = res.access_token;
                console.debug('Login - getInfo', type, token.substring(10) + '.....');
                _this.tokenCursor.set(token);
                _this.securityTypeCursor.set(type);
                _this.getCurrentUserInfo(token)
                    .then(function (user) {
                    resolve(user);
                    _this.currentUserCursor.set(user);
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
    UserService.prototype.getAllUser = function () {
        var authorization = this.tokenCursor.get();
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_3_superagent__["get"])(__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].allUser)
                .set('token', authorization)
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            }).catch(reject);
        });
    };
    UserService.prototype.getToken = function (username, password) {
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_3_superagent__["post"])(__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].token)
                .send('grant_type=password')
                .send("username=" + username)
                .send("password=" + password)
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
    UserService.prototype.getCurrentUserInfo = function (authorization) {
        return new Promise(function (resolve, reject) {
            Object(__WEBPACK_IMPORTED_MODULE_3_superagent__["get"])(__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].user)
                .set('token', authorization)
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            }).catch(reject);
        });
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map