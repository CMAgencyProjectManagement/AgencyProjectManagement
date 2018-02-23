webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/views/pages/404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n        <!--<div class=\"input-prepend input-group\">-->\r\n          <!--<span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>-->\r\n          <!--<input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">-->\r\n          <!--<span class=\"input-group-btn\">-->\r\n            <!--<button class=\"btn btn-info\" type=\"button\">Search</button>-->\r\n          <!--</span>-->\r\n        <!--</div>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\r\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\r\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>  \r\n"

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

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"card-group\">\n          <div class=\"card p-4\">\n            <div class=\"card-body\" [formGroup]=\"loginForm\">\n              <div class=\"row justify-content-center\">\n                <h1>Login</h1>\n              </div>\n              <div class=\"row justify-content-center\">\n                <p class=\"text-muted\">Sign In to your account</p>\n              </div>\n              <div class=\"input-group mb-3\">\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n                <input formControlName=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Username\"\n                       [readonly]=\"isLoading\"\n                       (keypress)=\"handleEnterPressed($event)\">\n              </div>\n              <div class=\"input-group mb-4\">\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n                <input [readonly]=\"isLoading\" formControlName=\"password\" type=\"password\" class=\"form-control\"\n                       placeholder=\"Password\"\n                       (keypress)=\"handleEnterPressed($event)\">\n              </div>\n              <div class=\"input-group alert alert-warning\" role=\"alert\"\n                   *ngIf=\"errorMessage\">\n                {{errorMessage}}\n              </div>\n              <div class=\"row justify-content-center\">\n                <button\n                  type=\"submit\" class=\"btn btn-primary\"\n                  [disabled]=\"!loginForm.valid\"\n                  (click)=\"handleLogin()\"\n                  [ladda]=\"isLoading\">\n                  Login\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
    };
    LoginComponent.prototype.handleEnterPressed = function ($event) {
        if ($event.keyCode === 13) {
            this.handleLogin();
        }
    };
    LoginComponent.prototype.handleLogin = function () {
        var _this = this;
        if (this.loginForm.valid) {
            var formValue = this.loginForm.value;
            this.isLoading = true;
            console.log(this.isLoading);
            this.accountHub.login(formValue.username, formValue.password).then(function (value) {
                _this.isLoading = false;
                _this.router.navigate(['dashboard']);
            }).catch(function (reason) {
                _this.isLoading = false;
                _this.errorMessage = reason.message;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_ladda__ = __webpack_require__("../../../../angular2-ladda/module/module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_ladda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_ladda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_routing_module__ = __webpack_require__("../../../../../src/app/views/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__pages_routing_module__["a" /* PagesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_ladda__["LaddaModule"].forRoot({
                    style: 'expand-left'
                })
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

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card mx-4\">\r\n          <div class=\"card-body p-4\">\r\n            <h1>Register</h1>\r\n            <p class=\"text-muted\">Create your account</p>\r\n            <div class=\"input-group mb-3\">\r\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-3\">\r\n              <span class=\"input-group-addon\">@</span>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-3\">\r\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-4\">\r\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\">\r\n            </div>\r\n\r\n            <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\r\n          </div>\r\n          <div class=\"card-footer p-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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



/***/ }),

/***/ "../../../../angular2-ladda/module/ladda-config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var LaddaConfigArgs = (function () {
    function LaddaConfigArgs() {
    }
    return LaddaConfigArgs;
}());
exports.LaddaConfigArgs = LaddaConfigArgs;
exports.configAttributes = {
    "data-style": "style",
    "data-spinner-size": "spinnerSize",
    "data-spinner-color": "spinnerColor",
    "data-spinner-lines": "spinnerLines",
};
var LaddaConfig = (function () {
    function LaddaConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, config);
    }
    return LaddaConfig;
}());
LaddaConfig.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
LaddaConfig.ctorParameters = function () { return [
    { type: LaddaConfigArgs, },
]; };
exports.LaddaConfig = LaddaConfig;
//# sourceMappingURL=ladda-config.js.map

/***/ }),

/***/ "../../../../angular2-ladda/module/ladda.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ladda_config_1 = __webpack_require__("../../../../angular2-ladda/module/ladda-config.js");
var Ladda = __webpack_require__("../../../../ladda/dist/ladda.min.js");
var LaddaDirective = (function () {
    function LaddaDirective(el, config) {
        this.el = el.nativeElement;
        if (!config) {
            return;
        }
        // apply default styles if they aren't overwritten by an attribute
        for (var attribute in ladda_config_1.configAttributes) {
            var configValue = config[ladda_config_1.configAttributes[attribute]];
            if (!configValue) {
                continue; // don't waste time reading the attribute
            }
            if (!this.el.getAttribute(attribute)) {
                // attribute isn't set - apply the default config value
                var value = (typeof configValue === "number") ? configValue.toString() : configValue;
                this.el.setAttribute(attribute, value);
            }
        }
    }
    LaddaDirective.prototype.ngOnChanges = function (changes) {
        if (!this._ladda) {
            return; // needed since ngOnChanges is called before ngOnInit
        }
        if (changes['loading']) {
            this.updateLadda(changes['loading'].previousValue);
        }
        if (changes['disabled']) {
            this.updateDisabled();
        }
    };
    LaddaDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._ladda = Ladda.create(this.el);
        // if the initial loading value isn't false, a timeout of 0 ms
        // is necessary for the calculated spinner size to be correct.
        setTimeout(function () { _this.updateLadda(false); }, 0);
    };
    LaddaDirective.prototype.ngOnDestroy = function () {
        if (this._ladda) {
            this._ladda.remove();
        }
    };
    LaddaDirective.prototype.updateLadda = function (previousValue) {
        var loading = typeof this.loading === 'number' || !!this.loading;
        var wasLoading = typeof previousValue === 'number' || !!previousValue;
        if (!loading) {
            if (wasLoading) {
                this._ladda.stop();
            }
            return this.updateDisabled();
        }
        if (!wasLoading) {
            this._ladda.start();
        }
        if (typeof this.loading === 'number') {
            this._ladda.setProgress(this.loading);
        }
    };
    LaddaDirective.prototype.updateDisabled = function () {
        this.el.disabled = this.disabled;
    };
    return LaddaDirective;
}());
LaddaDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[ladda]'
            },] },
];
/** @nocollapse */
LaddaDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: ladda_config_1.LaddaConfigArgs, decorators: [{ type: core_1.Inject, args: [ladda_config_1.LaddaConfig,] }, { type: core_1.Optional },] },
]; };
LaddaDirective.propDecorators = {
    'loading': [{ type: core_1.Input, args: ['ladda',] },],
    'disabled': [{ type: core_1.Input, args: ['disabled',] },],
};
exports.LaddaDirective = LaddaDirective;
//# sourceMappingURL=ladda.directive.js.map

/***/ }),

/***/ "../../../../angular2-ladda/module/module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ladda_directive_1 = __webpack_require__("../../../../angular2-ladda/module/ladda.directive.js");
var ladda_config_1 = __webpack_require__("../../../../angular2-ladda/module/ladda-config.js");
var LaddaModule = (function () {
    function LaddaModule() {
    }
    LaddaModule.forRoot = function (config) {
        return {
            ngModule: LaddaModule,
            providers: [
                { provide: ladda_config_1.LaddaConfig, useValue: config }
            ]
        };
    };
    return LaddaModule;
}());
LaddaModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [ladda_directive_1.LaddaDirective],
                exports: [ladda_directive_1.LaddaDirective],
            },] },
];
/** @nocollapse */
LaddaModule.ctorParameters = function () { return []; };
exports.LaddaModule = LaddaModule;
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "../../../../ladda/dist/ladda.min.js":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Ladda 1.0.6 (2018-02-04, 13:19)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2017 Hakim El Hattab, http://hakim.se
 */

!function(t,e){"use strict"; true?module.exports=e(__webpack_require__("../../../../spin.js/spin.js")):"function"==typeof define&&define.amd?define(["spin"],e):t.Ladda=e(t.Spinner)}(this,function(t){"use strict";var e=[];function a(a){if(void 0!==a){if(/ladda-button/i.test(a.className)||(a.className+=" ladda-button"),a.hasAttribute("data-style")||a.setAttribute("data-style","expand-right"),!a.querySelector(".ladda-label")){var u=document.createElement("span");u.className="ladda-label",n=a,i=u,(r=document.createRange()).selectNodeContents(n),r.surroundContents(i),n.appendChild(i)}var n,i,r,d,o,s=a.querySelector(".ladda-spinner");s||((s=document.createElement("span")).className="ladda-spinner"),a.appendChild(s);var F={start:function(){return d||(d=function(e){var a,u,n=e.offsetHeight;0===n&&(n=parseFloat(window.getComputedStyle(e).height));n>32&&(n*=.8);e.hasAttribute("data-spinner-size")&&(n=parseInt(e.getAttribute("data-spinner-size"),10));e.hasAttribute("data-spinner-color")&&(a=e.getAttribute("data-spinner-color"));e.hasAttribute("data-spinner-lines")&&(u=parseInt(e.getAttribute("data-spinner-lines"),10));var i=.2*n;return new t({color:a||"#fff",lines:u||12,radius:i,length:.6*i,width:i<7?2:3,zIndex:"auto",top:"auto",left:"auto",className:""})}(a)),a.disabled=!0,a.setAttribute("data-loading",""),clearTimeout(o),d.spin(s),this.setProgress(0),this},startAfter:function(t){return clearTimeout(o),o=setTimeout(function(){F.start()},t),this},stop:function(){return F.isLoading()&&(a.disabled=!1,a.removeAttribute("data-loading")),clearTimeout(o),d&&(o=setTimeout(function(){d.stop()},1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start()},setProgress:function(t){t=Math.max(Math.min(t,1),0);var e=a.querySelector(".ladda-progress");0===t&&e&&e.parentNode?e.parentNode.removeChild(e):(e||((e=document.createElement("div")).className="ladda-progress",a.appendChild(e)),e.style.width=(t||0)*a.offsetWidth+"px")},enable:function(){return this.stop()},disable:function(){return this.stop(),a.disabled=!0,this},isLoading:function(){return a.hasAttribute("data-loading")},remove:function(){clearTimeout(o),a.disabled=!1,a.removeAttribute("data-loading"),d&&(d.stop(),d=null),e.splice(e.indexOf(F),1)}};return e.push(F),F}console.warn("Ladda button target must be defined.")}function u(t,e){if("function"==typeof t.addEventListener){var u=a(t),n=-1;t.addEventListener("click",function(){var a,i,r=!0,d=function(t,e){for(;t.parentNode&&t.tagName!==e;)t=t.parentNode;return e===t.tagName?t:void 0}(t,"FORM");if(void 0!==d&&!d.hasAttribute("novalidate"))if("function"==typeof d.checkValidity)r=d.checkValidity();else for(var o=(a=d,i=[],["input","textarea","select"].forEach(function(t){for(var e=a.getElementsByTagName(t),u=0;u<e.length;u++)e[u].hasAttribute("required")&&i.push(e[u])}),i),s=0;s<o.length;s++){var F=o[s],l=F.getAttribute("type");if(""===F.value.replace(/^\s+|\s+$/g,"")&&(r=!1),"checkbox"!==l&&"radio"!==l||F.checked||(r=!1),"email"===l&&(r=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(F.value)),"url"===l&&(r=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(F.value)),!r)break}r&&(u.startAfter(1),"number"==typeof e.timeout&&(clearTimeout(n),n=setTimeout(u.stop,e.timeout)),"function"==typeof e.callback&&e.callback.apply(null,[u]))},!1)}}return{bind:function(t,e){var a;if("string"==typeof t)a=document.querySelectorAll(t);else{if("object"!=typeof t)throw new Error("target must be string or object");a=[t]}e=e||{};for(var n=0;n<a.length;n++)u(a[n],e)},create:a,stopAll:function(){for(var t=0,a=e.length;t<a;t++)e[t].stop()}}});

/***/ }),

/***/ "../../../../spin.js/spin.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
    var opts = {
      lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target)
 */
;(function (root, factory) {

  /* CommonJS */
  if (typeof module == 'object' && module.exports) module.exports = factory()

  /* AMD module */
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

  /* Browser global */
  else root.Spinner = factory()
}(this, function () {
  "use strict"

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */
    , sheet /* A stylesheet to hold the @keyframe or VML rules. */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl (tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for (n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins (parent /* child1, child2, ...*/) {
    for (var i = 1, n = arguments.length; i < n; i++) {
      parent.appendChild(arguments[i])
    }

    return parent
  }

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation (alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor (el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    if (s[prop] !== undefined) return prop
    for (i = 0; i < prefixes.length; i++) {
      pp = prefixes[i]+prop
      if (s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css (el, prop) {
    for (var n in prop) {
      el.style[vendor(el, n) || n] = prop[n]
    }

    return el
  }

  /**
   * Fills in default values.
   */
  function merge (obj) {
    for (var i = 1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def) {
        if (obj[n] === undefined) obj[n] = def[n]
      }
    }
    return obj
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor (color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12             // The number of lines to draw
  , length: 7             // The length of each line
  , width: 5              // The line thickness
  , radius: 10            // The radius of the inner circle
  , scale: 1.0            // Scales overall size of the spinner
  , corners: 1            // Roundness (0..1)
  , color: '#000'         // #rgb or #rrggbb
  , opacity: 1/4          // Opacity of the lines
  , rotate: 0             // Rotation offset
  , direction: 1          // 1: clockwise, -1: counterclockwise
  , speed: 1              // Rounds per second
  , trail: 100            // Afterglow percentage
  , fps: 20               // Frames per second when using setTimeout()
  , zIndex: 2e9           // Use a high z-index by default
  , className: 'spinner'  // CSS class to assign to the element
  , top: '50%'            // center vertically
  , left: '50%'           // center horizontally
  , shadow: false         // Whether to render a shadow
  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
  , position: 'absolute'  // Element positioning
  }

  /** The constructor */
  function Spinner (o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function (target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = createEl(null, {className: o.className})

      css(el, {
        position: o.position
      , width: 0
      , zIndex: o.zIndex
      , left: o.left
      , top: o.top
      })

      if (target) {
        target.insertBefore(el, target.firstChild || null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps / o.speed
          , ostep = (1 - o.opacity) / (f * o.trail / 100)
          , astep = f / o.lines

        ;(function anim () {
          i++
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
        })()
      }
      return self
    }

    /**
     * Stops and removes the Spinner.
     */
  , stop: function () {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    }

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
  , lines: function (el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill (color, shadow) {
        return css(createEl(), {
          position: 'absolute'
        , width: o.scale * (o.length + o.width) + 'px'
        , height: o.scale * o.width + 'px'
        , background: color
        , boxShadow: shadow
        , transformOrigin: 'left'
        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute'
        , top: 1 + ~(o.scale * o.width / 2) + 'px'
        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
        , opacity: o.opacity
        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    }

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
  , opacity: function (el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML () {

    /* Utility function to create a VML tag */
    function vml (tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function (el, o) {
      var r = o.scale * (o.length + o.width)
        , s = o.scale * 2 * r

      function grp () {
        return css(
          vml('group', {
            coordsize: s + ' ' + s
          , coordorigin: -r + ' ' + -r
          })
        , { width: s, height: s }
        )
      }

      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg (i, dx, filter) {
        ins(
          g
        , ins(
            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
          , ins(
              css(
                vml('roundrect', {arcsize: o.corners})
              , { width: r
                , height: o.scale * o.width
                , left: o.scale * o.radius
                , top: -o.scale * o.width >> 1
                , filter: filter
                }
              )
            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++) {
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
        }

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function (el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i + o < c.childNodes.length) {
        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  if (typeof document !== 'undefined') {
    sheet = (function () {
      var el = createEl('style', {type : 'text/css'})
      ins(document.getElementsByTagName('head')[0], el)
      return el.sheet || el.styleSheet
    }())

    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(probe, 'transform') && probe.adj) initVML()
    else useCssAnimations = vendor(probe, 'animation')
  }

  return Spinner

}));


/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map