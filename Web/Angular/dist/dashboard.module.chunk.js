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

module.exports = "\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Project 1\r\n      </div>\r\n      <div class=\"card-body\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Project 2\r\n      </div>\r\n      <div class=\"card-body\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Project 3\r\n      </div>\r\n      <div class=\"card-body\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Project 4\r\n      </div>\r\n      <div class=\"card-body\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Project 5\r\n      </div>\r\n      <div class=\"card-body\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n\r\n  <!-- Trigger the modal with a button -->\r\n  <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Create a new project</button>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"card-header\">\r\n          <div>\r\n            <h1 class=\"modal-title\">New project</h1>\r\n            \r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div>\r\n            <h3>Name</h3>\r\n            <input/>\r\n          </div>\r\n          <div>\r\n            <h3>decription</h3>\r\n            <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\r\n          </div>\r\n        </div>\r\n        <button disabled=\"disabled\" type=\"button\" class=\"btn btn-primary\" >Create</button>\r\n        <div class=\"modal-footer\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.html"),
            styles: [".modal  { text-align: center;\n  }\n  .modal:before {\n    display: inline-block;\n    vertical-align: middle;\n    content: \" \";\n    height: 100%;\n    }\n    \n    .modal-dialog {\n    display: inline-block;\n    text-align: left;\n    vertical-align: middle;\n    }"]
        }),
        __metadata("design:paramtypes", [])
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
                __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__["a" /* DashboardRoutingModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map