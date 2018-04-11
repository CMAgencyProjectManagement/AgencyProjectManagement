webpackJsonp(["task.module"],{

/***/ "../../../../../src/app/views/task/task-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view_component__ = __webpack_require__("../../../../../src/app/views/task/view/view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__view_view_component__["a" /* ViewComponent */],
        data: {
            title: 'Task'
        }
    }
];
var TaskRoutingModule = /** @class */ (function () {
    function TaskRoutingModule() {
    }
    TaskRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], TaskRoutingModule);
    return TaskRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/task/task.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_routing_module__ = __webpack_require__("../../../../../src/app/views/task/task-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__("../../../../../src/app/components/spinner/spinner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_view_component__ = __webpack_require__("../../../../../src/app/views/task/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cmaComponents_cma_module__ = __webpack_require__("../../../../../src/app/cmaComponents/cma.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__task_routing_module__["a" /* TaskRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["a" /* SpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__cmaComponents_cma_module__["a" /* CmaModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__view_view_component__["a" /* ViewComponent */]
            ]
        })
    ], TaskModule);
    return TaskModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/task/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Task detail\r\n  </div>\r\n  <app-spinner *ngIf=loading.page></app-spinner>\r\n  <div *ngIf=!loading.page class=\"card-body row\">\r\n    <div class=\"col-12\">\r\n      <h2 class=\"card-title\">{{foundTask.name}}</h2>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <div class=\"button-row\">\r\n        <button class=\"btn btn-secondary bg-light\">\r\n          <i class=\"fa fa-edit\"></i>&nbsp; Edit\r\n        </button>\r\n        <button class=\"btn btn-secondary bg-light\">\r\n          <i class=\"fa fa-comment-o\"></i>&nbsp; Comment\r\n        </button>\r\n        <button class=\"btn btn-secondary bg-light\">\r\n          <i class=\"fa fa-upload\"></i>&nbsp; Upload\r\n        </button>\r\n        <button class=\"btn btn-secondary bg-light\">\r\n          <i class=\"fa fa-check\"></i>&nbsp; Done\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 mt-5\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-6 section\">\r\n          <h5 class=\"mb-3\">Detail</h5>\r\n          <dl class=\"row ml-1\">\r\n            <dt class=\"col-3\">Project:</dt>\r\n            <dd class=\"col-9\"><a\r\n              href=\"#/project/task?projectID={{foundTask.project.id}}\">{{foundTask.project.name}}</a></dd>\r\n            <dt class=\"col-3\">List:</dt>\r\n            <dd class=\"col-9\">{{foundTask.list.name}}</dd>\r\n            <dt class=\"col-3\">Priority:</dt>\r\n            <dd class=\"col-9\" [ngSwitch]=\"foundTask.priority\">\r\n              <span *ngSwitchCase=\"0\">Low</span>\r\n              <span *ngSwitchCase=\"1\">Medium</span>\r\n              <span *ngSwitchCase=\"2\">High</span>\r\n            </dd>\r\n            <dt class=\"col-3\">Status:</dt>\r\n            <dd class=\"col-9\" [ngSwitch]=\"foundTask.status\">\r\n              <span *ngSwitchCase=\"0\">Not started</span>\r\n              <span *ngSwitchCase=\"1\">Executing</span>\r\n              <span *ngSwitchCase=\"2\">Done</span>\r\n            </dd>\r\n            <dt class=\"col-3\">Effort:</dt>\r\n            <dd class=\"col-9\">{{foundTask.effort}}</dd>\r\n          </dl>\r\n        </div>\r\n\r\n        <div class=\"col-6 section\">\r\n          <h5 class=\"mb-3\">Date</h5>\r\n          <dl class=\"row ml-1\">\r\n            <dt class=\"col-3\">Start date:</dt>\r\n            <dd class=\"col-9\">\r\n              <span *ngIf=\"foundTask.startDate\">{{foundTask.startDate | date:'dd/MM/yyyy'}}</span>\r\n            </dd>\r\n            <dt class=\"col-3\">Duration:</dt>\r\n            <dd class=\"col-9\">{{foundTask.duration}}</dd>\r\n            <dt class=\"col-3\">Deadline:</dt>\r\n            <dd class=\"col-9\">{{foundTask.deadline | date:'dd/MM/yyyy'}}</dd>\r\n            <dt class=\"col-3\">Finished date:</dt>\r\n            <dd class=\"col-9\">\r\n              <span *ngIf=\"foundTask.finishedDate\">\r\n                {{foundTask.finishedDate | date:'dd/MM/yyyy'}}\r\n              </span>\r\n            </dd>\r\n            <dt class=\"col-3\">Created date:</dt>\r\n            <dd class=\"col-9\">{{foundTask.createdDate | date:'dd/MM/yyyy'}}</dd>\r\n            <dt class=\"col-3\">Changed date:</dt>\r\n            <dd class=\"col-9\">\r\n              <span *ngIf=\"foundTask.changedDate\">\r\n                {{foundTask.changedDate | date:'dd/MM/yyyy'}}\r\n              </span>\r\n            </dd>\r\n          </dl>\r\n        </div>\r\n\r\n        <div class=\"col-6 section\">\r\n          <h5 class=\"mb-3\">Description</h5>\r\n          <dl class=\"row ml-1\">\r\n            <p class=\"col-12\">\r\n              {{foundTask.description}}\r\n            </p>\r\n          </dl>\r\n        </div>\r\n\r\n        <div class=\"col-6 section\">\r\n          <h5 class=\"mb-3\">Members</h5>\r\n          <dl class=\"row ml-1\">\r\n            <dt class=\"col-12\">Assignees:</dt>\r\n            <dd class=\"col-12 pl-4\">\r\n              <app-user-list *ngIf=\"foundTask.assignees\" [users]=\"foundTask.assignees\"></app-user-list>\r\n            </dd>\r\n            <dt class=\"col-12\">Creator:</dt>\r\n            <dd class=\"col-12 pl-4\">\r\n              <app-user-list [user]=\"foundTask.createdBy\"></app-user-list>\r\n            </dd>\r\n              <dt class=\"col-12\">Modifier:</dt>\r\n              <dd class=\"col-12\">\r\n                <app-user-list *ngIf=\"foundTask.changedBy\" [user]=\"foundTask.changedBy\"></app-user-list>\r\n              </dd>\r\n          </dl>\r\n        </div>\r\n\r\n        <div class=\"col-6 section\">\r\n          <h5 class=\"mb-3\">Comments</h5>\r\n          <dl class=\"row ml-1\">\r\n            <app-comment class=\"col-12\"\r\n                         *ngFor=\"let comment of foundTask.comments\"\r\n                         [comment]=\"comment\"></app-comment>\r\n          </dl>\r\n        </div>\r\n\r\n        <div class=\"col-6 section\">\r\n          <h5 class=\"mb-3\">Attachments</h5>\r\n          <dl class=\"row ml-1\">\r\n            <div class=\"col-12\">\r\n              <ul class=\"list-group\" *ngFor=\"let attachment of foundTask.attachments\">\r\n                <a href=\"{{attachment.source}}\">\r\n                  <li class=\"list-group-item d-flex list-group-item-action justify-content-between align-items-center\">\r\n                    <span>{{attachment.name}}</span>\r\n                    <i class=\"fa fa-download\"></i>\r\n                  </li>\r\n                </a>\r\n              </ul>\r\n            </div>\r\n          </dl>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/task/view/view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section dt {\n  font-weight: 600; }\n\n.section .icons-list img.avatar {\n  width: 35px;\n  height: 35px; }\n\n.list-group-item:hover {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/task/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewComponent = /** @class */ (function () {
    function ViewComponent(taskService) {
        this.taskService = taskService;
        this.loading = {
            page: true
        };
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var taskId = Number(this.GetURLParameter());
        this.taskService.getTaskDetail(taskId)
            .then(function (value) {
            _this.foundTask = value;
            _this.loading.page = false;
        })
            .catch(function (reason) {
            console.debug('ViewComponent-onInit', reason);
            _this.loading.page = false;
        });
    };
    ViewComponent.prototype.GetURLParameter = function () {
        var sPageURL = window.location.href;
        var sURLVariables = sPageURL.split('?');
        var sTeam = sURLVariables[1].split('=');
        return sTeam[1];
    };
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view',
            template: __webpack_require__("../../../../../src/app/views/task/view/view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/task/view/view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ })

});
//# sourceMappingURL=task.module.chunk.js.map