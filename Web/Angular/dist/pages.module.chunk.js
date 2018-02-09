webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/views/pages/404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <!--<div class=\"input-prepend input-group\">-->\n          <!--<span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>-->\n          <!--<input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">-->\n          <!--<span class=\"input-group-btn\">-->\n            <!--<button class=\"btn btn-info\" type=\"button\">Search</button>-->\n          <!--</span>-->\n        <!--</div>-->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/pages/404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P404Component; });
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

var P404Component = /** @class */ (function () {
    function P404Component() {
    }
    P404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/pages/404.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], P404Component);
    return P404Component;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/500.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>  \n"

/***/ }),

/***/ "../../../../../src/app/views/pages/500.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P500Component; });
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

var P500Component = /** @class */ (function () {
    function P500Component() {
    }
    P500Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/pages/500.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], P500Component);
    return P500Component;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"card-group\">\n          <div class=\"card p-4\">\n            <div class=\"card-body\" [formGroup]=\"loginForm\">\n              <div class=\"row justify-content-center\">\n                <h1>Login</h1>\n              </div>\n              <div class=\"row justify-content-center\">\n                <p class=\"text-muted\">Sign In to your account</p>\n              </div>\n              <div class=\"input-group mb-3\">\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                <input formControlName=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Username\">\n              </div>\n              <div class=\"input-group mb-4\">\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                <input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\">\n              </div>\n              <div class=\"row justify-content-center\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\" (click)=\"handleLogin()\">\n                  Login\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/pages/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(accountHub, storeService, router) {
        this.accountHub = accountHub;
        this.storeService = storeService;
        this.router = router;
        this.currentAccountCursor = this.storeService.select(['currentUser']);
        this.tokenCursor = this.storeService.select(['token']);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
    };
    LoginComponent.prototype.handleLogin = function () {
        if (this.loginForm.valid) {
            var formValue = this.loginForm.value;
            var _this_1 = this;
            this.accountHub.login(formValue.username, formValue.password).then(function (value) {
                // _this.currentAccountCursor.set(value);
                // _this.router.navigate(['dashboard']);
                if (value) {
                    console.debug('login success', value);
                    _this_1.router.navigate(['dashboard']);
                }
                else {
                    console.debug('login fail', value);
                }
            }).catch(function (reason) {
                // TODO: Handle error
                console.debug('login fail: ', reason);
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/pages/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_tree_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__404_component__ = __webpack_require__("../../../../../src/app/views/pages/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__500_component__ = __webpack_require__("../../../../../src/app/views/pages/500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/views/pages/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_component__ = __webpack_require__("../../../../../src/app/views/pages/register.component.ts");
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
            title: 'Example Pages'
        },
        children: [
            {
                path: '404',
                component: __WEBPACK_IMPORTED_MODULE_2__404_component__["a" /* P404Component */],
                data: {
                    title: 'Page 404'
                }
            },
            {
                path: '500',
                component: __WEBPACK_IMPORTED_MODULE_3__500_component__["a" /* P500Component */],
                data: {
                    title: 'Page 500'
                }
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */],
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_5__register_component__["a" /* RegisterComponent */],
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__404_component__ = __webpack_require__("../../../../../src/app/views/pages/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__500_component__ = __webpack_require__("../../../../../src/app/views/pages/500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/views/pages/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__("../../../../../src/app/views/pages/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_routing_module__ = __webpack_require__("../../../../../src/app/views/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__pages_routing_module__["a" /* PagesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__404_component__["a" /* P404Component */],
                __WEBPACK_IMPORTED_MODULE_2__500_component__["a" /* P500Component */],
                __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/pages/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"card mx-4\">\n          <div class=\"card-body p-4\">\n            <h1>Register</h1>\n            <p class=\"text-muted\">Create your account</p>\n            <div class=\"input-group mb-3\">\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n            </div>\n\n            <div class=\"input-group mb-3\">\n              <span class=\"input-group-addon\">@</span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n            </div>\n\n            <div class=\"input-group mb-3\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n            </div>\n\n            <div class=\"input-group mb-4\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\">\n            </div>\n\n            <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\n          </div>\n          <div class=\"card-footer p-4\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n              </div>\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/pages/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/pages/register.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map