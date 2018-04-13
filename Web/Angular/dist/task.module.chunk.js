webpackJsonp(["task.module"],{

/***/ "../../../../../src/app/views/task/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <strong>Add Task</strong>\n      </div>\n      <app-spinner *ngIf=\"isLoading\"></app-spinner>\n      <div *ngIf=\"!isLoading\" class=\"card-body\">\n        <div class=\"form-horizontal col-6\" style=\"margin-top: 30px;\" id=\"update\">\n          <div class=\"form-group row\">\n            <b style=\"font-size: 22px\">\n                <label class=\"col-12 col-form-label text-right\" for=\"name-input\" style=\"font-size:22px\">Project: <a href=\"#/project/detail?projectID={{foundProject.id}}\"> {{foundProject.name}}</a></label>\n            </b>\n          </div>\n          <div class=\"form-group row\">\n              <b style=\"font-size: 22px\">\n                  <label class=\"col-12 col-form-label text-right\" for=\"name-input\" style=\"font-size:22px\">List: {{foundList.name}}</label>\n              </b>\n            </div>\n          <div class=\"form-group row\">\n            <label class=\"col-5 col-form-label text-right\" for=\"name-input\">Task Name<span\n              style=\"color: #ee0d0d\"><strong>*</strong></span></label>\n            <div class=\"col-7\">\n              <input type=\"text\" id=\"name-input\" name=\"name-input\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-5 col-form-label text-right\" for=\"name-input\">Task Description</label>\n            <div class=\"col-7\">\n              <textarea rows=\"3\"></textarea>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-5 col-form-label text-right\" for=\"name-input\">Status</label>\n            <div class=\"col-7\">\n              <select>\n                <option value=\"todo\">To do</option>\n                <option value=\"executing\">Executing</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-actions text-center\">\n            <div class=\"col-12\">\n              <button type=\"button\" class=\"btn btn-primary btn-lg\" style=\"color: black;\n                                background-color: white;\n                                border-color: black;margin-left: 40px;\">Save changes\n              </button>\n              <button type=\"button\" class=\"btn btn-secondary btn-lg\" style=\"color: black;\n                background-color: white;\n                border-color: black; margin-left: 70px;\">Reset\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/task/add/add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\n  width: 700px;\n  height: 200px; }\n\n#update {\n  font-size: 23px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/task/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddComponent = /** @class */ (function () {
    function AddComponent(projectService) {
        this.projectService = projectService;
        this.isPageLoading = true;
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectID = Number(this.GetProjectID('projectID'));
        this.listID = Number(this.GetListID('listID'));
        this.projectService.getAllProjects()
            .then(function (data) {
            _this.projects = data;
            _this.isPageLoading = false;
            for (var i = 0; i < _this.projects.length; i++) {
                if (_this.projects[i].id == _this.projectID) {
                    _this.foundProject = _this.projects[i];
                }
            }
            for (var i = 0; i < _this.foundProject.lists.length; i++) {
                if (_this.foundProject.lists[i].id == _this.listID) {
                    _this.foundList = _this.foundProject.lists[i];
                }
            }
        }).catch(function (reason) {
            console.debug('ProjectDetailComponent', reason);
        });
        console.debug(this.foundList.name);
    };
    AddComponent.prototype.GetProjectID = function (sParam) {
        var sPageURL = window.location.href;
        var sURLVariables = sPageURL.split('?');
        var sValue = sURLVariables[1].split('&');
        var sProjectID = sValue[0].split('=');
        var sListID = sValue[1].split('=');
        return sProjectID[1];
    };
    AddComponent.prototype.GetListID = function (sParam) {
        var sPageURL = window.location.href;
        var sURLVariables = sPageURL.split('?');
        var sValue = sURLVariables[1].split('&');
        var sProjectID = sValue[0].split('=');
        var sListID = sValue[1].split('=');
        return sListID[1];
    };
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add',
            template: __webpack_require__("../../../../../src/app/views/task/add/add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/task/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/task/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <strong>Update task</strong>\n      </div>\n      <app-spinner *ngIf=\"isLoading.page\"></app-spinner>\n      <div *ngIf=\"!isLoading.page\" class=\"card-body row\">\n        <div [formGroup]=\"updateForm\" class=\"form-horizontal col-lg-8 col-md-10 col-sm-12\">\n          <div class=\"form-group row\">\n            <!--NAME-->\n            <label class=\"col-4 col-form-label text-right\" for=\"name-input\">\n              Name <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-8\">\n              <input type=\"text\" id=\"name-input\"\n                     [ngClass]=\"{'form-control': true, 'is-invalid': errors.name}\"\n                     formControlName=\"name\">\n              <div class=\"invalid-feedback\" *ngIf=\"errors.name\">{{errors.name}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--Description-->\n            <label class=\"col-4 col-form-label text-right\" for=\"description-input\">\n              Description\n            </label>\n            <div class=\"col-8\">\n              <textarea id=\"description-input\"\n                        rows=\"9\"\n                        [ngClass]=\"{'form-control': true, 'is-invalid': errors.description}\"\n                        placeholder=\"Description..\"\n                        formControlName=\"description\"></textarea>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.description\">{{errors.description}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--LIST-->\n            <label class=\"col-4 col-form-label text-right\" for=\"list-input\">\n              List <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-8\">\n              <select formControlName=\"list\" id=\"list-input\"\n                      [ngClass]=\"{'form-control': true, 'is-invalid': errors.list}\">\n                <option *ngFor=\"let list of lists\" value=\"{{list.id}}\">{{list.name}}</option>\n              </select>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.list\">{{errors.list}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--priority-->\n            <label class=\"col-4 col-form-label text-right\" for=\"priority-input\">\n              Priority <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-8\">\n              <select formControlName=\"priority\" id=\"priority-input\"\n                      [ngClass]=\"{'form-control': true, 'is-invalid': errors.list}\">\n                <option *ngFor=\"let priority of priorities\" value=\"{{priority.key}}\">{{priority.value}}</option>\n              </select>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.priority\">{{errors.priority}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--Start date-->\n            <label class=\"col-4 col-form-label text-right\" for=\"startDate-input\">\n              Start date <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-8 datepicker-group\">\n              <my-date-picker id=\"startDate-input\" #datepicker\n                              [options]=\"myDatePickerOptions\"\n                              formControlName=\"startDate\"\n                              [ngClass]=\"{'form-control': false, 'is-invalid': errors.startDate}\"\n                              required></my-date-picker>\n              <div class=\"invalid-feedback\" [ngStyle]=\"{'display':'block'}\" *ngIf=\"errors.startDate\">\n                {{errors.startDate}}\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--DURATION-->\n            <label class=\"col-4 col-form-label text-right\" for=\"duration-input\">\n              Duration <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-8\">\n              <div class=\"input-group\">\n                <input type=\"text\" id=\"duration-input\"\n                       [ngClass]=\"{'form-control': true, 'is-invalid': errors.duration}\"\n                       formControlName=\"duration\">\n                <span class=\"input-group-addon\">day</span>\n              </div>\n\n              <div class=\"invalid-feedback\" *ngIf=\"errors.duration\">{{errors.duration}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--EFFORT-->\n            <label class=\"col-4 col-form-label text-right\" for=\"effort-input\">\n              Effort <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-8\">\n              <div class=\"input-group\">\n                <input type=\"text\" id=\"effort-input\"\n                       [ngClass]=\"{'form-control': true, 'is-invalid': errors.effort}\"\n                       formControlName=\"effort\">\n                <span class=\"input-group-addon\">hour</span>\n              </div>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.effort\">{{errors.effort}}</div>\n            </div>\n          </div>\n          <div class=\"form-actions text-center\">\n            <!--BUTTON-->\n            <div class=\"col-12\">\n              <button class=\"btn btn-primary\" (click)=\"handleUpdateTask()\" [ladda]=\"isLoading.update\">\n                Save changes\n              </button>\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"setDefaultValue()\">Reset</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/task/edit/edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".invalid-feedback {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/task/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals_error_modal_error_modal_component__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/error-modal/error-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditComponent = /** @class */ (function () {
    function EditComponent(taskService, projectService, modalService, router, route, location) {
        this.taskService = taskService;
        this.projectService = projectService;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'dd/mm/yyyy',
            showInputField: true,
            showTodayBtn: true
        };
        this.isLoading = {
            page: true,
            update: false
        };
        this.resetError();
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (Number(id)) {
            this.taskId = Number(id);
            this.taskService.getTaskDetail(this.taskId)
                .then(function (value) {
                _this.foundTask = value;
                _this.updatePageLoadingState();
                _this.projectService.getListOfProject(_this.foundTask.project.id)
                    .then(function (value1) {
                    _this.lists = value1;
                    _this.setDefaultValue();
                    _this.updatePageLoadingState();
                })
                    .catch(function (reason) {
                    _this.showErrorModal(reason.Message);
                });
            })
                .catch(function (reason) {
                _this.showErrorModal(reason.Message, true);
            });
            this.taskService.getPriorities()
                .then(function (value) {
                _this.priorities = value;
                _this.updatePageLoadingState();
            })
                .catch(function (reason) {
                _this.showErrorModal(reason.Message);
            });
        }
        else {
            this.showErrorModal("Invalid task id \"" + id + "\"", true);
        }
        this.updateForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined),
            description: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined),
            list: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined),
            priority: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined),
            startDate: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined),
            duration: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined),
            effort: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined)
        });
    };
    EditComponent.prototype.updatePageLoadingState = function () {
        if (this.lists &&
            this.foundTask &&
            this.priorities) {
            this.isLoading.page = false;
        }
    };
    EditComponent.prototype.resetError = function () {
        this.errors = {
            name: '',
            description: '',
            list: '',
            priority: '',
            startDate: '',
            duration: '',
            effort: ''
        };
    };
    EditComponent.prototype.setErrors = function (errors) {
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var error = errors_1[_i];
            var fieldName = error.key;
            var errorMessage = error.message;
            switch (fieldName) {
                case 'Name':
                    this.errors.name = errorMessage;
                    break;
                case 'Description':
                    this.errors.description = errorMessage;
                    break;
                case 'ListID':
                    this.errors.effort = errorMessage;
                    break;
                case 'Priority':
                    this.errors.priority = errorMessage;
                    break;
                case 'StartDate':
                    this.errors.startDate = errorMessage;
                    break;
                case 'Duration':
                    this.errors.duration = errorMessage;
                    break;
                case 'Effort':
                    this.errors.effort = errorMessage;
                    break;
            }
        }
    };
    EditComponent.prototype.setDefaultValue = function () {
        var startDate = __WEBPACK_IMPORTED_MODULE_8_moment__(this.foundTask.startDate);
        this.updateForm.patchValue({
            name: this.foundTask.name,
            description: this.foundTask.description,
            list: this.foundTask.list.id,
            priority: this.foundTask.priority,
            startDate: {
                date: {
                    year: startDate.year(),
                    month: startDate.month() + 1,
                    day: startDate.day()
                }
            },
            duration: this.foundTask.duration,
            effort: this.foundTask.effort,
        });
    };
    EditComponent.prototype.handleUpdateTask = function () {
        var _this = this;
        this.isLoading.update = true;
        this.resetError();
        var values = this.updateForm.value;
        var startDate = __WEBPACK_IMPORTED_MODULE_8_moment__(this.datepicker.selectionDayTxt, 'DD/MM/YYYY');
        this.taskService.editTask(this.foundTask.id, values.name, values.description, values.list, values.priority, startDate.isValid() ? startDate.format('YYYY-MM-DD') : this.datepicker.selectionDayTxt, values.duration, values.effort).then(function (value) {
            _this.isLoading.update = false;
        }).catch(function (reason) {
            _this.setErrors(reason.Data);
            _this.isLoading.update = false;
        });
    };
    EditComponent.prototype.showErrorModal = function (message, isNavigateBack) {
        var _this = this;
        if (isNavigateBack === void 0) { isNavigateBack = false; }
        var initialState = {
            closeCallback: function () {
                if (isNavigateBack) {
                    _this.location.back();
                }
            },
            message: message
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals_error_modal_error_modal_component__["a" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datepicker'),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "datepicker", void 0);
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/views/task/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/task/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_7__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/task/task-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view_component__ = __webpack_require__("../../../../../src/app/views/task/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_edit_component__ = __webpack_require__("../../../../../src/app/views/task/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_add_component__ = __webpack_require__("../../../../../src/app/views/task/add/add.component.ts");
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
            title: 'Task'
        },
        children: [
            {
                data: {
                    title: 'View'
                },
                path: 'view/:id',
                component: __WEBPACK_IMPORTED_MODULE_2__view_view_component__["a" /* ViewComponent */],
            },
            {
                data: {
                    title: 'Update'
                },
                path: 'edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_3__edit_edit_component__["a" /* EditComponent */],
            },
            {
                data: {
                    title: 'Create'
                },
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_4__add_add_component__["a" /* AddComponent */],
            }
        ]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__ = __webpack_require__("../../../../../src/app/views/task/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_add_component__ = __webpack_require__("../../../../../src/app/views/task/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_ladda__ = __webpack_require__("../../../../angular2-ladda/module/module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_ladda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_ladda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
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
                __WEBPACK_IMPORTED_MODULE_5__cmaComponents_cma_module__["a" /* CmaModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_ladda__["LaddaModule"].forRoot({
                    style: 'expand-left'
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_mydatepicker__["MyDatePickerModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__view_view_component__["a" /* ViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__add_add_component__["a" /* AddComponent */]
            ]
        })
    ], TaskModule);
    return TaskModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/task/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Task detail\n  </div>\n  <app-spinner *ngIf=loading.page></app-spinner>\n  <div *ngIf=!loading.page class=\"card-body row\">\n    <div class=\"col-12\">\n      <h2 class=\"card-title\">{{foundTask.name}}</h2>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"button-row\">\n        <a routerLink=\"/task/edit/{{foundTask.id}}\" class=\"btn btn-secondary bg-light\">\n          <i class=\"fa fa-edit\"></i>&nbsp; Edit\n        </a>\n        <button class=\"btn btn-secondary bg-light\" (click)=\"handleOnCommentBtnClick()\">\n          <i class=\"fa fa-comment-o\"></i>&nbsp; Comment\n        </button>\n        <button class=\"btn btn-secondary bg-light\">\n          <i class=\"fa fa-upload\"></i>&nbsp; Upload\n        </button>\n        <button class=\"btn btn-secondary bg-light\">\n          <i class=\"fa fa-check\"></i>&nbsp; Done\n        </button>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\">\n      <div class=\"row\">\n        <div class=\"col-6 left-pane\">\n          <div class=\"section\">\n            <!--DETAIL SECTION-->\n            <h5 class=\"mb-3\">Detail</h5>\n            <dl class=\"row ml-1\">\n              <dt class=\"col-3\">Project:</dt>\n              <dd class=\"col-9\"><a\n                href=\"#/project/task?projectID={{foundTask.project.id}}\">{{foundTask.project.name}}</a></dd>\n              <dt class=\"col-3\">List:</dt>\n              <dd class=\"col-9\">{{foundTask.list.name}}</dd>\n              <dt class=\"col-3\">Priority:</dt>\n              <dd class=\"col-9\">\n                <span>{{foundTask.priorityText}}</span>\n              </dd>\n              <dt class=\"col-3\">Status:</dt>\n              <dd class=\"col-9\">\n                <span>{{foundTask.statusText}}</span>\n              </dd>\n              <dt class=\"col-3\">Effort:</dt>\n              <dd class=\"col-9\">\n                {{foundTask.effort}}\n                <span *ngIf=\"foundTask.effort <= 1\">Hour</span>\n                <span *ngIf=\"foundTask.effort > 1\">Hours</span>\n              </dd>\n            </dl>\n          </div>\n          <div class=\"section\">\n            <!--DESCRIPTION-->\n            <h5 class=\"mb-3\">Description</h5>\n            <dl class=\"row ml-1\">\n              <p class=\"col-12\">\n                {{foundTask.description}}\n              </p>\n            </dl>\n          </div>\n          <div class=\"section\">\n            <!--ATTACHMENT-->\n            <h5 class=\"mb-3\">Attachments</h5>\n            <dl class=\"row ml-1\">\n              <div class=\"col-12\">\n                <ul class=\"list-group\" *ngFor=\"let attachment of foundTask.attachments\">\n                  <a href=\"{{attachment.source}}\">\n                    <li\n                      class=\"list-group-item d-flex list-group-item-action justify-content-between align-items-center\">\n                      <span>{{attachment.name}}</span>\n                      <i class=\"fa fa-download\"></i>\n                    </li>\n                  </a>\n                </ul>\n              </div>\n            </dl>\n          </div>\n          <div class=\"section\">\n            <!--COMMENT-->\n            <h5 class=\"mb-3\">Comments</h5>\n            <dl class=\"row ml-1\">\n              <app-comment class=\"col-12\"\n                           *ngFor=\"let comment of foundTask.comments\"\n                           [comment]=\"comment\"></app-comment>\n            </dl>\n          </div>\n        </div>\n        <div class=\"col-5 right-pane ml-4\">\n          <div class=\"section\">\n            <!--MEMBER-->\n            <h5 class=\"mb-3\">Members</h5>\n            <dl class=\"row ml-1\">\n              <dt class=\"col-12\">Assignees:</dt>\n              <dd class=\"col-12 pl-4\">\n                <app-user-list *ngIf=\"foundTask.assignees\" [users]=\"foundTask.assignees\"></app-user-list>\n              </dd>\n              <dt class=\"col-12\">Creator:</dt>\n              <dd class=\"col-12 pl-4\">\n                <app-user-list [user]=\"foundTask.createdBy\"></app-user-list>\n              </dd>\n              <dt class=\"col-12\">Modifier:</dt>\n              <dd class=\"col-12 pl-4\">\n                <app-user-list *ngIf=\"foundTask.changedBy\" [user]=\"foundTask.changedBy\"></app-user-list>\n                <span *ngIf=\"!foundTask.changedBy\">N/A</span>\n              </dd>\n            </dl>\n          </div>\n          <div class=\"section\">\n            <!--DATE SECTION-->\n            <h5 class=\"mb-3\">Date</h5>\n            <dl class=\"row ml-1\">\n              <dt class=\"col-3\">Start date:</dt>\n              <dd class=\"col-9\">\n                <span *ngIf=\"foundTask.startDate\">\n                  {{foundTask.startDate | date:'dd/MM/yyyy'}}\n                </span>\n              </dd>\n              <dt class=\"col-3\">Duration:</dt>\n              <dd class=\"col-9\">\n                {{foundTask.duration}}\n                <span *ngIf=\"foundTask.duration <= 1\">Day</span>\n                <span *ngIf=\"foundTask.duration > 1\">Days</span>\n              </dd>\n              <dt class=\"col-3\">Deadline:</dt>\n              <dd class=\"col-9\">\n                {{foundTask.deadline | date:'dd/MM/yyyy'}}\n              </dd>\n              <dt class=\"col-3\">Finished:</dt>\n              <dd class=\"col-9\">\n              <span *ngIf=\"!foundTask.finishedDate\">\n                N/A\n              </span>\n              </dd>\n              <dt class=\"col-3\">Created:</dt>\n              <dd class=\"col-9\">{{foundTask.createdDate | date:'dd/MM/yyyy'}}</dd>\n              <dt class=\"col-3\">Changed:</dt>\n              <dd class=\"col-9\">\n                <span *ngIf=\"foundTask.changedTime\">\n                  {{foundTask.changedDate | date:'dd/MM/yyyy'}}\n                </span>\n                <span *ngIf=\"!foundTask.changedTime\">\n                  N/A\n                </span>\n              </dd>\n            </dl>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals_error_modal_error_modal_component__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/error-modal/error-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
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
    function ViewComponent(taskService, router, route, location, modalService) {
        this.taskService = taskService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.modalService = modalService;
        this.loading = {
            page: true
        };
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (Number(id)) {
            this.taskService.getTaskDetail(Number(id))
                .then(function (value) {
                _this.foundTask = value;
                _this.loading.page = false;
            })
                .catch(function (reason) {
                console.debug('ViewComponent-onInit', reason);
                _this.showErrorModal(reason.message);
                _this.loading.page = false;
            });
        }
        else {
            this.showErrorModal(id + " is not a valid ID");
        }
    };
    ViewComponent.prototype.handleOnCommentBtnClick = function () {
    };
    ViewComponent.prototype.showErrorModal = function (message, isNavigateBack) {
        var _this = this;
        if (isNavigateBack === void 0) { isNavigateBack = false; }
        var initialState = {
            closeCallback: function () {
                if (isNavigateBack) {
                    _this.location.back();
                }
            },
            message: message
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals_error_modal_error_modal_component__["a" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view',
            template: __webpack_require__("../../../../../src/app/views/task/view/view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/task/view/view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* BsModalService */]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ })

});
//# sourceMappingURL=task.module.chunk.js.map