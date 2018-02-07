webpackJsonp(["project-management.module"],{

/***/ "../../../../../src/app/views/project-management/project-management-routing.module.ts":
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
var project_management_component_1 = __webpack_require__("../../../../../src/app/views/project-management/project-management.component.ts");
var routes = [
    {
        path: '',
        component: project_management_component_1.ProjectManagementComponent,
        data: {
            title: 'Projects'
        }
    }
];
var ProjectManagementRoutingModule = /** @class */ (function () {
    function ProjectManagementRoutingModule() {
    }
    ProjectManagementRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ProjectManagementRoutingModule);
    return ProjectManagementRoutingModule;
}());
exports.ProjectManagementRoutingModule = ProjectManagementRoutingModule;


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
var ProjectManagementComponent = /** @class */ (function () {
    function ProjectManagementComponent() {
    }
    ProjectManagementComponent.prototype.ngOnInit = function () {
    };
    ProjectManagementComponent = __decorate([
        core_1.Component({
            selector: 'app-project-management',
            template: __webpack_require__("../../../../../src/app/views/project-management/project-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/project-management/project-management.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectManagementComponent);
    return ProjectManagementComponent;
}());
exports.ProjectManagementComponent = ProjectManagementComponent;


/***/ }),

/***/ "../../../../../src/app/views/project-management/project-management.module.ts":
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
var project_management_component_1 = __webpack_require__("../../../../../src/app/views/project-management/project-management.component.ts");
var project_management_routing_module_1 = __webpack_require__("../../../../../src/app/views/project-management/project-management-routing.module.ts");
var ProjectManagementModule = /** @class */ (function () {
    function ProjectManagementModule() {
    }
    ProjectManagementModule = __decorate([
        core_1.NgModule({
            imports: [
                project_management_routing_module_1.ProjectManagementRoutingModule
            ],
            declarations: [project_management_component_1.ProjectManagementComponent]
        })
    ], ProjectManagementModule);
    return ProjectManagementModule;
}());
exports.ProjectManagementModule = ProjectManagementModule;


/***/ })

});
//# sourceMappingURL=project-management.module.chunk.js.map