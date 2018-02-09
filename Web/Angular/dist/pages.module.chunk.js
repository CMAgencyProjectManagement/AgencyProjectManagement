webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/views/pages/404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n        <!--<div class=\"input-prepend input-group\">-->\r\n          <!--<span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>-->\r\n          <!--<input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">-->\r\n          <!--<span class=\"input-group-btn\">-->\r\n            <!--<button class=\"btn btn-info\" type=\"button\">Search</button>-->\r\n          <!--</span>-->\r\n        <!--</div>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/pages/404.component.ts":
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
var P404Component = /** @class */ (function () {
    function P404Component() {
    }
    P404Component = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../src/app/views/pages/404.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], P404Component);
    return P404Component;
}());
exports.P404Component = P404Component;


/***/ }),

/***/ "../../../../../src/app/views/pages/500.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\r\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\r\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>  \r\n"

/***/ }),

/***/ "../../../../../src/app/views/pages/500.component.ts":
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
var P500Component = /** @class */ (function () {
    function P500Component() {
    }
    P500Component = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../src/app/views/pages/500.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], P500Component);
    return P500Component;
}());
exports.P500Component = P500Component;


/***/ }),

/***/ "../../../../../src/app/views/pages/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card-group\">\r\n          <div class=\"card p-4\">\r\n            <div class=\"card-body\" [formGroup]=\"loginForm\">\r\n              <div class=\"row justify-content-center\">\r\n                <h1>Login</h1>\r\n              </div>\r\n              <div class=\"row justify-content-center\">\r\n                <p class=\"text-muted\">Sign In to your account</p>\r\n              </div>\r\n              <div class=\"input-group mb-3\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\r\n                <input formControlName=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n              </div>\r\n              <div class=\"input-group mb-4\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n                <input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n              </div>\r\n              <div class=\"row justify-content-center\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\" (click)=\"handleLogin()\">\r\n                  Login\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/pages/login.component.ts":
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var tree_service_1 = __webpack_require__("../../../../../src/app/services/tree.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(accountHub, storeService, router) {
        this.accountHub = accountHub;
        this.storeService = storeService;
        this.router = router;
        this.currentAccountCursor = this.storeService.select(['currentUser']);
        this.tokenCursor = this.storeService.select(['token']);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new forms_1.FormGroup({
            username: new forms_1.FormControl(undefined, forms_1.Validators.required),
            password: new forms_1.FormControl(undefined, forms_1.Validators.required)
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
        core_1.Component({
            template: __webpack_require__("../../../../../src/app/views/pages/login.component.html")
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            tree_service_1.StoreService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/views/pages/pages-routing.module.ts":
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
var _404_component_1 = __webpack_require__("../../../../../src/app/views/pages/404.component.ts");
var _500_component_1 = __webpack_require__("../../../../../src/app/views/pages/500.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/views/pages/login.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/views/pages/register.component.ts");
var routes = [
    {
        path: '',
        data: {
            title: 'Example Pages'
        },
        children: [
            {
                path: '404',
                component: _404_component_1.P404Component,
                data: {
                    title: 'Page 404'
                }
            },
            {
                path: '500',
                component: _500_component_1.P500Component,
                data: {
                    title: 'Page 500'
                }
            },
            {
                path: 'login',
                component: login_component_1.LoginComponent,
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'register',
                component: register_component_1.RegisterComponent,
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
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());
exports.PagesRoutingModule = PagesRoutingModule;


/***/ }),

/***/ "../../../../../src/app/views/pages/pages.module.ts":
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
var _404_component_1 = __webpack_require__("../../../../../src/app/views/pages/404.component.ts");
var _500_component_1 = __webpack_require__("../../../../../src/app/views/pages/500.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/views/pages/login.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/views/pages/register.component.ts");
var pages_routing_module_1 = __webpack_require__("../../../../../src/app/views/pages/pages-routing.module.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            imports: [
                pages_routing_module_1.PagesRoutingModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                _404_component_1.P404Component,
                _500_component_1.P500Component,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;


/***/ }),

/***/ "../../../../../src/app/views/pages/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card mx-4\">\r\n          <div class=\"card-body p-4\">\r\n            <h1>Register</h1>\r\n            <p class=\"text-muted\">Create your account</p>\r\n            <div class=\"input-group mb-3\">\r\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-3\">\r\n              <span class=\"input-group-addon\">@</span>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-3\">\r\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-4\">\r\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\">\r\n            </div>\r\n\r\n            <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\r\n          </div>\r\n          <div class=\"card-footer p-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/pages/register.component.ts":
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
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../src/app/views/pages/register.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map