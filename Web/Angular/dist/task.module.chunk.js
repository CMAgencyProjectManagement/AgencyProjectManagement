webpackJsonp(["task.module"],{

/***/ "../../../../../src/app/views/task/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <strong>Create task</strong>\n      </div>\n      <app-spinner *ngIf=\"isLoading.page\"></app-spinner>\n      <div *ngIf=\"!isLoading.page\" class=\"card-body row\">\n        <div [formGroup]=\"createForm\" class=\"form-horizontal col-lg-8 col-md-10 col-sm-12\">\n          <div class=\"form-group row\">\n            <!--NAME-->\n            <label class=\"col-4 col-form-label text-right\" for=\"name-input\">\n              Name <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-8\">\n              <input type=\"text\" id=\"name-input\"\n                     [ngClass]=\"{'form-control': true, 'is-invalid': errors.name}\"\n                     formControlName=\"name\">\n              <div class=\"invalid-feedback\" *ngIf=\"errors.name\">{{errors.name}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--Description-->\n            <label class=\"col-4 col-form-label text-right\" for=\"description-input\">\n              Description\n            </label>\n            <div class=\"col-8\">\n              <textarea id=\"description-input\"\n                        rows=\"9\"\n                        [ngClass]=\"{'form-control': true, 'is-invalid': errors.description}\"\n                        placeholder=\"Description..\"\n                        formControlName=\"description\"></textarea>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.description\">{{errors.description}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--LIST-->\n            <label class=\"col-4 col-form-label text-right\" for=\"list-input\">\n              List <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-8\">\n              <select formControlName=\"list\" id=\"list-input\"\n                      [ngClass]=\"{'form-control': true, 'is-invalid': errors.list}\">\n                <option *ngFor=\"let list of foundProject.lists\" value=\"{{list.id}}\">{{list.name}}</option>\n              </select>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.list\">{{errors.list}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--priority-->\n            <label class=\"col-4 col-form-label text-right\" for=\"priority-input\">\n              Priority <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-8\">\n              <select formControlName=\"priority\" id=\"priority-input\"\n                      [ngClass]=\"{'form-control': true, 'is-invalid': errors.list}\">\n                <option *ngFor=\"let priority of priorities\" value=\"{{priority.key}}\">{{priority.value}}</option>\n              </select>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.priority\">{{errors.priority}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--Start date-->\n            <label class=\"col-4 col-form-label text-right\" for=\"startDate-input\">\n              Start date <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-8 datepicker-group\">\n              <my-date-picker id=\"startDate-input\" #datepicker\n                              [options]=\"myDatePickerOptions\"\n                              formControlName=\"startDate\"\n                              [ngClass]=\"{'form-control': false, 'is-invalid': errors.startDate}\"\n                              required></my-date-picker>\n              <div class=\"invalid-feedback\" [ngStyle]=\"{'display':'block'}\" *ngIf=\"errors.startDate\">\n                {{errors.startDate}}\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--DURATION-->\n            <label class=\"col-4 col-form-label text-right\" for=\"duration-input\">\n              Duration <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-8\">\n              <div class=\"input-group\">\n                <input type=\"text\" id=\"duration-input\"\n                       [ngClass]=\"{'form-control': true, 'is-invalid': errors.duration}\"\n                       formControlName=\"duration\">\n                <span class=\"input-group-addon\">day</span>\n              </div>\n\n              <div class=\"invalid-feedback\" *ngIf=\"errors.duration\">{{errors.duration}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--EFFORT-->\n            <label class=\"col-4 col-form-label text-right\" for=\"effort-input\">\n              Effort <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-8\">\n              <div class=\"input-group\">\n                <input type=\"text\" id=\"effort-input\"\n                       [ngClass]=\"{'form-control': true, 'is-invalid': errors.effort}\"\n                       formControlName=\"effort\">\n                <span class=\"input-group-addon\">hour</span>\n              </div>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.effort\">{{errors.effort}}</div>\n            </div>\n          </div>\n          <div class=\"form-actions text-center\">\n            <!--BUTTON-->\n            <div class=\"col-12\">\n              <button class=\"btn btn-primary\" (click)=\"handleCreateTask()\" [ladda]=\"isLoading.create\">\n                Create\n              </button>\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"setDefaultValue()\">Reset</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/task/add/add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".invalid-feedback {\n  display: block; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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
    function AddComponent(taskService, projectService, modalService, router, route, location) {
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
            create: false
        };
        this.resetError();
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        var projectId = this.route.snapshot.queryParamMap.get('projectID');
        var listId = this.route.snapshot.queryParamMap.get('listID');
        if (Number(projectId) && Number(listId)) {
            this.listId = Number(listId);
            this.projectService.getProject(Number(projectId))
                .then(function (project) {
                _this.foundProject = project;
                _this.updatePageLoadingState();
            })
                .catch(function (reason) {
                _this.showErrorModal(reason.Message);
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
            this.showErrorModal("Invalid address", true);
        }
        this.createForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined),
            description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined),
            list: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined),
            priority: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined),
            startDate: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined),
            duration: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined),
            effort: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined)
        });
    };
    AddComponent.prototype.updatePageLoadingState = function () {
        if (this.foundProject &&
            this.priorities) {
            this.setDefaultValue();
            this.isLoading.page = false;
        }
    };
    AddComponent.prototype.resetError = function () {
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
    AddComponent.prototype.setErrors = function (errors) {
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
    AddComponent.prototype.setDefaultValue = function () {
        var now = __WEBPACK_IMPORTED_MODULE_3_moment__();
        this.createForm.patchValue({
            name: '',
            description: '',
            list: this.listId,
            priority: '',
            startDate: {
                date: {
                    year: now.year(),
                    month: now.month() + 1,
                    day: now.day()
                }
            },
            duration: '',
            effort: '',
        });
    };
    AddComponent.prototype.handleCreateTask = function () {
        var _this = this;
        this.isLoading.create = true;
        this.resetError();
        var values = this.createForm.value;
        var startDate = __WEBPACK_IMPORTED_MODULE_3_moment__(this.datepicker.selectionDayTxt, 'DD/MM/YYYY');
        this.taskService.createTask(values.name, values.description, values.list, values.priority, startDate.isValid() ? startDate.format('YYYY-MM-DD') : this.datepicker.selectionDayTxt, values.duration, values.effort).then(function (value) {
            _this.isLoading.create = false;
        }).catch(function (reason) {
            _this.setErrors(reason.Data);
            _this.isLoading.create = false;
        });
    };
    AddComponent.prototype.showErrorModal = function (message, isNavigateBack) {
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
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__["d" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datepicker'),
        __metadata("design:type", Object)
    ], AddComponent.prototype, "datepicker", void 0);
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add',
            template: __webpack_require__("../../../../../src/app/views/task/add/add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/task/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["f" /* Location */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
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
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__["d" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
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

/***/ "../../../../../src/app/views/task/my-tasks/my-tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<app-task-table [tasks]=\"tasks\"></app-task-table>\n"

/***/ }),

/***/ "../../../../../src/app/views/task/my-tasks/my-tasks.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/task/my-tasks/my-tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyTasksComponent = /** @class */ (function () {
    function MyTasksComponent(storeService, taskService, modalService, router, route, location) {
        this.storeService = storeService;
        this.taskService = taskService;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.currentUser = storeService.get(['currentUser']);
        this.tasks = [];
    }
    MyTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getMyTask()
            .then(function (value) {
            _this.tasks = value;
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message);
        });
    };
    MyTasksComponent.prototype.showErrorModal = function (message, isNavigateBack) {
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
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__["d" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    MyTasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-tasks',
            template: __webpack_require__("../../../../../src/app/views/task/my-tasks/my-tasks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/task/my-tasks/my-tasks.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tree_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], MyTasksComponent);
    return MyTasksComponent;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_tasks_my_tasks_component__ = __webpack_require__("../../../../../src/app/views/task/my-tasks/my-tasks.component.ts");
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
            },
            {
                data: {
                    title: 'My tasks'
                },
                path: 'mytasks',
                component: __WEBPACK_IMPORTED_MODULE_5__my_tasks_my_tasks_component__["a" /* MyTasksComponent */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_tasks_my_tasks_component__ = __webpack_require__("../../../../../src/app/views/task/my-tasks/my-tasks.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_7__add_add_component__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_11__my_tasks_my_tasks_component__["a" /* MyTasksComponent */]
            ]
        })
    ], TaskModule);
    return TaskModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/task/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Task detail\r\n  </div>\r\n  <app-spinner *ngIf=isLoading.page></app-spinner>\r\n  <div *ngIf=!isLoading.page class=\"card-body row\">\r\n    <div class=\"col-12\">\r\n      <h2 class=\"card-title\">{{foundTask.name}}</h2>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <div class=\"button-row\">\r\n        <a routerLink=\"/task/edit/{{foundTask.id}}\" class=\"btn btn-secondary bg-light\">\r\n          <i class=\"fa fa-edit\"></i>&nbsp; Edit\r\n        </a>\r\n        <button class=\"btn btn-secondary bg-light\" (click)=\"handleOnCommentBtnClick()\">\r\n          <i class=\"fa fa-comment-o\"></i>&nbsp; Comment\r\n        </button>\r\n        <button class=\"btn btn-secondary bg-light\"\r\n                (click)=\"handleOnAssignBtnClick()\"\r\n                [ladda]=\"isLoading.openAssignModal\">\r\n          <i class=\"fa fa-user-plus\"></i>&nbsp; Assign\r\n        </button>\r\n        <button class=\"btn btn-secondary bg-light\"\r\n                (click)=\"handleOnUnAssignBtnClick()\"\r\n                [ladda]=\"isLoading.openUnAssignModal\">\r\n          <i class=\"fa fa-user-times\"></i>&nbsp; Un-Assign\r\n        </button>\r\n        <button class=\"btn btn-secondary bg-light\"\r\n                [disabled]=\"foundTask.statusText == 'Done'\"\r\n                (click)=\"handleOnDoneBtnClick()\"\r\n                [ladda]=\"isLoading.done\">\r\n          <i class=\"fa fa-check\"></i>&nbsp; Done\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 mt-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6 left-pane\">\r\n          <div class=\"section\">\r\n            <!--DETAIL SECTION-->\r\n            <h5 class=\"mb-3\">Detail</h5>\r\n            <dl class=\"row ml-1\">\r\n              <dt class=\"col-3\">Project:</dt>\r\n              <dd class=\"col-9\"><a\r\n                href=\"#/project/task?projectID={{foundTask.project.id}}\">{{foundTask.project.name}}</a></dd>\r\n              <dt class=\"col-3\">List:</dt>\r\n              <dd class=\"col-9\">{{foundTask.list.name}}</dd>\r\n              <dt class=\"col-3\">Priority:</dt>\r\n              <dd class=\"col-9\">\r\n                <span>{{foundTask.priorityText}}</span>\r\n              </dd>\r\n              <dt class=\"col-3\">Status:</dt>\r\n              <dd class=\"col-9\">\r\n                <span>{{foundTask.statusText}}</span>\r\n              </dd>\r\n              <dt class=\"col-3\">Effort:</dt>\r\n              <dd class=\"col-9\">\r\n                {{foundTask.effort}}\r\n                <span *ngIf=\"foundTask.effort <= 1\">Hour</span>\r\n                <span *ngIf=\"foundTask.effort > 1\">Hours</span>\r\n              </dd>\r\n            </dl>\r\n          </div>\r\n          <div class=\"section\">\r\n            <!--DESCRIPTION-->\r\n            <h5 class=\"mb-3\">Description</h5>\r\n            <dl class=\"row ml-1\">\r\n              <p class=\"col-12\">\r\n                {{foundTask.description}}\r\n              </p>\r\n            </dl>\r\n          </div>\r\n          <div class=\"section\">\r\n            <!--ATTACHMENT-->\r\n            <h5 class=\"mb-3\">Attachments</h5>\r\n            <dl class=\"row ml-1\">\r\n              <div class=\"col-12\">\r\n                <div class=\"form-group row\" [formGroup]=\"attachmentForm\">\r\n                  <div class=\"col-9\">\r\n                    <input #attachmentInput\r\n                           id=\"file-input\" name=\"file-input\" type=\"file\"\r\n                           formGroupName=\"attachment\"\r\n                           (change)=\"attachmentFileChange($event)\">\r\n                  </div>\r\n                  <div class=\"col-3\">\r\n                    <button class=\"btn btn-success float-right\"\r\n                            [disabled]=\"!attachmentForm.value.attachment\"\r\n                            [ladda]=\"isLoading.attachmentUpload\"\r\n                            (click)=\"handleUploadAttachmentClick()\">\r\n                      <i class=\"fa fa-plus\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12\">\r\n                <ul class=\"list-group\">\r\n                  <li class=\"list-group-item\" *ngFor=\"let attachment of attachments\">\r\n                    <div class=\"d-flex align-items-center\">\r\n                      <a href=\"{{attachment.source}}\">\r\n                        <span>{{attachment.name}}</span>\r\n                      </a>\r\n                      <button class=\"btn btn-danger btn-sm ml-auto\"\r\n                              (click)=\"handleDeleteAttachmentClick(attachment.ID)\"\r\n                              [ladda]=\"isLoading.attachmentRemove[attachment.ID]\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </dl>\r\n          </div>\r\n          <div class=\"section\">\r\n            <!--COMMENT-->\r\n            <h5 class=\"mb-3\">Comments</h5>\r\n            <dl class=\"row ml-1\">\r\n              <div class=\"col-12\">\r\n                <div class=\"form-group row\">\r\n                  <div class=\"col-12\">\r\n                    <!--COMMENT BTN + LABEL-->\r\n                    <button class=\"btn btn-secondary bg-light\"\r\n                            *ngIf=\"!openCommentForm\"\r\n                            (click)=\"handleOnCommentBtnClick()\">\r\n                      <i class=\"fa fa-comment-o\"></i>&nbsp; Comment\r\n                    </button>\r\n                    <h4 *ngIf=\"openCommentForm\">Comment</h4>\r\n                  </div>\r\n                  <div class=\"col-12\" *ngIf=\"openCommentForm\">\r\n                    <!--COMMENT TEXT AREA-->\r\n                    <textarea title=\"comment-input\" rows=\"9\" class=\"form-control\"\r\n                              [(ngModel)]=\"commentBoxModel\"\r\n                              placeholder=\"Content..\"></textarea>\r\n                  </div>\r\n                  <div class=\"col-12 mt-3 d-flex justify-content-end\" *ngIf=\"openCommentForm\">\r\n                    <!--ADD COMMENT, CANCEL BTN-->\r\n                    <button class=\"btn btn-success mr-2\" (click)=\"handleAddCommentBtnClick()\">Add</button>\r\n                    <button class=\"btn btn-secondary\" (click)=\"handleCancelCommentBtnClick()\">Cancel</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <app-comment class=\"col-12\"\r\n                           *ngFor=\"let comment of foundTask.comments\"\r\n                           [comment]=\"comment\"\r\n                           (onEdit)=\"handleEditComment($event)\"></app-comment>\r\n            </dl>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-5 right-pane ml-4\">\r\n          <div class=\"section\">\r\n            <!--MEMBER-->\r\n            <!--<h5 class=\"mb-3\">Members</h5>-->\r\n            <dl class=\"row ml-1\">\r\n              <dt class=\"col-12\">Assignees:</dt>\r\n              <dd class=\"col-12 pl-4\">\r\n                <app-user-list *ngIf=\"foundTask.assignees\" [users]=\"foundTask.assignees\"></app-user-list>\r\n                <span *ngIf=\"!foundTask.assignees || foundTask.assignees.length < 1\">N/A</span>\r\n              </dd>\r\n              <dt class=\"col-12\">Creator:</dt>\r\n              <dd class=\"col-12 pl-4\">\r\n                <app-user-list [user]=\"foundTask.createdBy\"></app-user-list>\r\n                <span *ngIf=\"!foundTask.createdBy\">N/A</span>\r\n              </dd>\r\n              <dt class=\"col-12\">Modifier:</dt>\r\n              <dd class=\"col-12 pl-4\">\r\n                <app-user-list *ngIf=\"foundTask.changedBy\" [user]=\"foundTask.changedBy\"></app-user-list>\r\n                <span *ngIf=\"!foundTask.changedBy\">N/A</span>\r\n              </dd>\r\n            </dl>\r\n          </div>\r\n          <div class=\"section\">\r\n            <!--DATE SECTION-->\r\n            <!--<h5 class=\"mb-3\">Date</h5>-->\r\n            <dl class=\"row ml-1\">\r\n              <dt class=\"col-3\">Start date:</dt>\r\n              <dd class=\"col-9\">\r\n                <span *ngIf=\"foundTask.startDate\">\r\n                  {{foundTask.startDate | date:'dd/MM/yyyy'}}\r\n                </span>\r\n              </dd>\r\n              <dt class=\"col-3\">Duration:</dt>\r\n              <dd class=\"col-9\">\r\n                {{foundTask.duration}}\r\n                <span *ngIf=\"foundTask.duration <= 1\">Day</span>\r\n                <span *ngIf=\"foundTask.duration > 1\">Days</span>\r\n              </dd>\r\n              <dt class=\"col-3\">Deadline:</dt>\r\n              <dd class=\"col-9\">\r\n                {{foundTask.deadline | date:'dd/MM/yyyy'}}\r\n              </dd>\r\n              <dt class=\"col-3\">Finished:</dt>\r\n              <dd class=\"col-9\">\r\n              <span *ngIf=\"!foundTask.finishedDate\">\r\n                N/A\r\n              </span>\r\n              </dd>\r\n              <dt class=\"col-3\">Created:</dt>\r\n              <dd class=\"col-9\">{{foundTask.createdDate | date:'dd/MM/yyyy'}}</dd>\r\n              <dt class=\"col-3\">Changed:</dt>\r\n              <dd class=\"col-9\">\r\n                <span *ngIf=\"foundTask.changedDate\">\r\n                  {{foundTask.changedDate | date:'dd/MM/yyyy'}}\r\n                </span>\r\n                <span *ngIf=\"!foundTask.changedDate\">\r\n                  N/A\r\n                </span>\r\n              </dd>\r\n            </dl>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/task/view/view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section dt {\n  font-weight: 600; }\n\n.section .icons-list img.avatar {\n  width: 35px;\n  height: 35px; }\n\n.separator-v {\n  border: 0;\n  width: 1px;\n  height: 100%;\n  background-image: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(rgba(0, 0, 0, 0.75)), to(transparent));\n  background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.75), transparent); }\n\n.hidden-field {\n  position: absolute;\n  top: -5000px;\n  left: -5000px; }\n\n.list-group-item:hover {\n  cursor: pointer; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_comment_service__ = __webpack_require__("../../../../../src/app/services/comment.service.ts");
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
    function ViewComponent(taskService, uploadService, userService, commentService, router, route, location, modalService) {
        this.taskService = taskService;
        this.uploadService = uploadService;
        this.userService = userService;
        this.commentService = commentService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.modalService = modalService;
        this.isLoading = {
            page: true,
            attachmentUpload: false,
            attachmentRemove: [],
            openAssignModal: false,
            openUnAssignModal: false,
            done: false,
            comment: false,
            editComment: true,
        };
        this.openCommentForm = true;
        this.resetErrors();
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (Number(id)) {
            this.taskService.getTaskDetail(Number(id))
                .then(function (value) {
                _this.foundTask = value;
                _this.attachments = _this.foundTask.attachments;
                _this.isLoading.page = false;
            })
                .catch(function (reason) {
                console.debug('ViewComponent-onInit', reason);
                _this.showErrorModal(reason.message);
                _this.isLoading.page = false;
            });
        }
        else {
            this.showErrorModal(id + " is not a valid ID");
        }
        this.attachmentForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]({
            attachment: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined),
        });
    };
    ViewComponent.prototype.handleOnCommentBtnClick = function () {
        this.openCommentForm = true;
    };
    ViewComponent.prototype.handleAddCommentBtnClick = function () {
        var _this = this;
        this.isLoading.comment = true;
        var content = this.commentBoxModel;
        this.commentService.createComment(content, this.foundTask.id)
            .then(function (value) {
            var comment = value;
            _this.foundTask.comments.push(comment);
            _this.isLoading.comment = true;
        })
            .catch(function (reason) {
            _this.showErrorModal('Comment fail');
            console.debug('handleAddCommentBtnClick', reason);
            _this.isLoading.comment = true;
        });
    };
    ViewComponent.prototype.handleCancelCommentBtnClick = function () {
        this.openCommentForm = false;
        this.commentBoxModel = '';
    };
    ViewComponent.prototype.handleOnAssignBtnClick = function () {
        var _this = this;
        var onConfirm = function (selectedUsers) {
            var selectedIds = __WEBPACK_IMPORTED_MODULE_8_lodash__["map"](selectedUsers, 'id');
            _this.taskService.assignTask(_this.foundTask.id, selectedIds)
                .then(function (value) {
                _this.foundTask.assignees = __WEBPACK_IMPORTED_MODULE_8_lodash__["concat"](_this.foundTask.assignees, selectedUsers);
                _this.isLoading.openAssignModal = false;
            })
                .catch(function (reason) {
                _this.showErrorModal('Assign fail');
                _this.isLoading.openAssignModal = false;
            });
        };
        this.isLoading.openAssignModal = true;
        this.userService.getUserOfProject(this.foundTask.project.id)
            .then(function (value) {
            var pool = [];
            for (var _i = 0, _a = value; _i < _a.length; _i++) {
                var user = _a[_i];
                var removeFlag = false;
                for (var _b = 0, _c = _this.foundTask.assignees; _b < _c.length; _b++) {
                    var assignee = _c[_b];
                    if (assignee.id == user.id) {
                        removeFlag = true;
                    }
                }
                if (!removeFlag) {
                    pool.push(user);
                }
            }
            var initialState = {
                confirmCallback: onConfirm,
                cancelCallback: function () {
                    _this.isLoading.openAssignModal = false;
                },
                closeCallback: function () {
                    _this.isLoading.openAssignModal = false;
                },
                userPool: pool,
                title: "Assign",
                confirmButtonText: 'Assign'
            };
            _this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["g" /* SelectUsersModalComponent */], { initialState: initialState, class: 'modal-dialog' });
        })
            .catch(function (reason) {
            _this.showErrorModal('An error has occurred while trying to open assign pop-up ');
            _this.isLoading.openAssignModal = false;
        });
    };
    ViewComponent.prototype.handleOnUnAssignBtnClick = function () {
        var _this = this;
        this.isLoading.openUnAssignModal = true;
        var onConfirm = function (selectedUsers) {
            var selectedIds = __WEBPACK_IMPORTED_MODULE_8_lodash__["map"](selectedUsers, 'id');
            _this.taskService.unassignTask(_this.foundTask.id, selectedIds)
                .then(function (value) {
                _this.foundTask.assignees = __WEBPACK_IMPORTED_MODULE_8_lodash__["filter"](_this.foundTask.assignees, function (user) {
                    return !selectedIds.includes(user.id);
                });
                _this.isLoading.openUnAssignModal = false;
            })
                .catch(function (reason) {
                _this.showErrorModal('Un-Assign fail');
                _this.isLoading.openUnAssignModal = false;
            });
        };
        var initialState = {
            confirmCallback: onConfirm,
            cancelCallback: function () {
                _this.isLoading.openUnAssignModal = false;
            },
            closeCallback: function () {
                _this.isLoading.openUnAssignModal = false;
            },
            userPool: this.foundTask.assignees,
            title: "Un-assign",
            confirmButtonText: 'Un-assign'
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["g" /* SelectUsersModalComponent */], { initialState: initialState, class: 'modal-dialog' });
    };
    ViewComponent.prototype.handleOnDoneBtnClick = function () {
        var _this = this;
        this.isLoading.done = true;
        this.taskService.finishTask(this.foundTask.id)
            .then(function (value) {
            _this.foundTask = value;
            _this.isLoading.done = false;
        })
            .catch(function (reason) {
            _this.showErrorModal('Finish task fail');
            _this.isLoading.done = false;
        });
    };
    ViewComponent.prototype.handleUploadAttachmentClick = function () {
        var _this = this;
        var formValue = this.attachmentForm.value;
        if (formValue.attachment) {
            this.resetErrors();
            this.isLoading.attachmentUpload = true;
            this.uploadService.uploadAttachment(formValue.attachment, this.foundTask.id)
                .then(function (value) {
                var attachment = value;
                _this.attachments.push(attachment);
                _this.isLoading.attachmentUpload = false;
            })
                .catch(function (reason) {
                _this.errors.attachment = reason.Data;
                _this.isLoading.attachmentUpload = false;
            });
        }
        else {
            this.resetErrors();
            // show some form of success message here
        }
    };
    ViewComponent.prototype.handleDeleteAttachmentClick = function (attachmentId) {
        var _this = this;
        this.isLoading.attachmentRemove[attachmentId] = true;
        this.uploadService.deleteAttachment(attachmentId)
            .then(function (value) {
            var removedItemId = value.id;
            _this.attachments = __WEBPACK_IMPORTED_MODULE_8_lodash__["filter"](_this.attachments, function (item) {
                return item.ID !== removedItemId;
            });
            _this.isLoading.attachmentRemove[attachmentId] = false;
        })
            .catch(function (reason) {
            _this.isLoading.attachmentRemove[attachmentId] = false;
            _this.showErrorModal(reason.Data);
        });
    };
    ViewComponent.prototype.handleEditComment = function (comment) {
        var _this = this;
        var confirmCallback = function (newComment) {
            _this.commentService.updateComment(newComment.ID, newComment.body)
                .then(function (returnedComment) {
                for (var i = 0; i < _this.foundTask.comments.length; i++) {
                    if (_this.foundTask.comments[i].ID == returnedComment.ID) {
                        _this.foundTask.comments[i] = returnedComment;
                        break;
                    }
                }
            })
                .catch(function (reason) {
                _this.showErrorModal(reason.Data);
            });
        };
        var initialState = {
            comment: comment,
            confirmCallback: confirmCallback,
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["a" /* CommentModalComponent */], { initialState: initialState, class: 'modal-dialog' });
    };
    ViewComponent.prototype.attachmentFileChange = function (fileInput) {
        var file = fileInput.target.files[0];
        this.attachmentForm.controls['attachment'].setValue(file);
    };
    ViewComponent.prototype.resetErrors = function () {
        this.errors = {
            attachment: ''
        };
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
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["d" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('attachmentInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ViewComponent.prototype, "attachmentInput", void 0);
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view',
            template: __webpack_require__("../../../../../src/app/views/task/view/view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/task/view/view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_7__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_10__services_comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["b" /* BsModalService */]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ })

});
//# sourceMappingURL=task.module.chunk.js.map