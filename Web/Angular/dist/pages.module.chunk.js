webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/views/pages/404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <!--<div class=\"input-prepend input-group\">-->\n          <!--<span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>-->\n          <!--<input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">-->\n          <!--<span class=\"input-group-btn\">-->\n            <!--<button class=\"btn btn-info\" type=\"button\">Search</button>-->\n          <!--</span>-->\n        <!--</div>-->\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>  \n"

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

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"card-group\">\n          <div class=\"card p-4\">\n            <div class=\"card-body\">\n              <div class=\"row justify-content-center\">\n                <h1>Login</h1>\n              </div>\n              <div class=\"row justify-content-center\">\n                <p class=\"text-muted\">Sign In to your account</p>\n              </div>\n              <div class=\"input-group mb-3\">\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n              </div>\n              <div class=\"input-group mb-4\">\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n              </div>\n              <div class=\"row justify-content-center\">\n                  <button type=\"button\" class=\"btn btn-primary px-4\">Login</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../../../../../src/app/views/pages/login.component.html")
        }),
        __metadata("design:paramtypes", [])
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
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            imports: [pages_routing_module_1.PagesRoutingModule],
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

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"card mx-4\">\n          <div class=\"card-body p-4\">\n            <h1>Register</h1>\n            <p class=\"text-muted\">Create your account</p>\n            <div class=\"input-group mb-3\">\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n            </div>\n\n            <div class=\"input-group mb-3\">\n              <span class=\"input-group-addon\">@</span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n            </div>\n\n            <div class=\"input-group mb-3\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n            </div>\n\n            <div class=\"input-group mb-4\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\">\n            </div>\n\n            <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\n          </div>\n          <div class=\"card-footer p-4\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n              </div>\n              <div class=\"col-6\">\n                <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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