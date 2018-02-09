webpackJsonp(["project-management.module"],{

/***/ "../../../../../src/app/views/project-management/project-management-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectManagementRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_management_component__ = __webpack_require__("../../../../../src/app/views/project-management/project-management.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__project_management_component__["a" /* ProjectManagementComponent */],
        data: {
            title: 'Projects'
        }
    }
];
var ProjectManagementRoutingModule = /** @class */ (function () {
    function ProjectManagementRoutingModule() {
    }
    ProjectManagementRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ProjectManagementRoutingModule);
    return ProjectManagementRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/project-management/project-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  project-management works!\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/project-management/project-management.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/project-management/project-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectManagementComponent; });
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

var ProjectManagementComponent = /** @class */ (function () {
    function ProjectManagementComponent() {
    }
    ProjectManagementComponent.prototype.ngOnInit = function () {
    };
    ProjectManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-management',
            template: __webpack_require__("../../../../../src/app/views/project-management/project-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/project-management/project-management.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectManagementComponent);
    return ProjectManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/project-management/project-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectManagementModule", function() { return ProjectManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_management_component__ = __webpack_require__("../../../../../src/app/views/project-management/project-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_management_routing_module__ = __webpack_require__("../../../../../src/app/views/project-management/project-management-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProjectManagementModule = /** @class */ (function () {
    function ProjectManagementModule() {
    }
    ProjectManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__project_management_routing_module__["a" /* ProjectManagementRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__project_management_component__["a" /* ProjectManagementComponent */]]
        })
    ], ProjectManagementModule);
    return ProjectManagementModule;
}());



/***/ })

});
//# sourceMappingURL=project-management.module.chunk.js.map