webpackJsonp(["task.module"],{

/***/ "../../../../../src/app/views/task/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <strong>Create task</strong>\n      </div>\n      <app-spinner *ngIf=\"isLoading.page\"></app-spinner>\n      <div *ngIf=\"!isLoading.page\" class=\"card-body row\">\n        <div [formGroup]=\"createForm\" class=\"form-horizontal col-lg-8 col-md-10 col-sm-12\">\n          <div class=\"form-group row\">\n            <!--NAME-->\n            <label class=\"col-4 col-form-label text-right\" for=\"name-input\">\n              Name <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-8\">\n              <input type=\"text\" id=\"name-input\"\n                     [ngClass]=\"{'form-control': true, 'is-invalid': errors.name}\"\n                     formControlName=\"name\">\n              <div class=\"invalid-feedback\" *ngIf=\"errors.name\">{{errors.name}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--Description-->\n            <label class=\"col-4 col-form-label text-right\" for=\"description-input\">\n              Description\n            </label>\n            <div class=\"col-8\">\n              <textarea id=\"description-input\"\n                        rows=\"9\"\n                        [ngClass]=\"{'form-control': true, 'is-invalid': errors.description}\"\n                        placeholder=\"Description..\"\n                        formControlName=\"description\"></textarea>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.description\">{{errors.description}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--LIST-->\n            <label class=\"col-4 col-form-label text-right\" for=\"list-input\">\n              List\n            </label>\n            <div class=\"col-8\">\n              <select formControlName=\"list\" id=\"list-input\"\n                      [ngClass]=\"{'form-control': true, 'is-invalid': errors.list}\">\n                <option *ngFor=\"let list of foundProject.lists\" value=\"{{list.id}}\">{{list.name}}</option>\n              </select>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.list\">{{errors.list}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--priority-->\n            <label class=\"col-4 col-form-label text-right\" for=\"priority-input\">\n              Priority <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-4\">\n              <select formControlName=\"priority\" id=\"priority-input\"\n                      [ngClass]=\"{'form-control': true, 'is-invalid': errors.list}\">\n                <option *ngFor=\"let priority of priorities\" value=\"{{priority.key}}\">{{priority.value}}</option>\n              </select>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.priority\">{{errors.priority}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--Start date-->\n            <label class=\"col-4 col-form-label text-right\" for=\"startDate-input\">\n              Start date <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-4 datepicker-group\">\n              <my-date-picker id=\"startDate-input\" #datepicker\n                              [options]=\"myDatePickerOptions\"\n                              [ngClass]=\"{'form-control': false, 'is-invalid': errors.startDate}\"\n                              formControlName=\"startDate\" required>\n              </my-date-picker>\n              <div class=\"invalid-feedback\" [ngStyle]=\"{'display':'block'}\" *ngIf=\"errors.startDate\">\n                {{errors.startDate}}\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--DURATION-->\n            <label class=\"col-4 col-form-label text-right\" for=\"duration-input\">\n              Duration <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-4\">\n              <div class=\"input-group\">\n                <input type=\"text\" id=\"duration-input\"\n                       [ngClass]=\"{'form-control': true, 'is-invalid': errors.duration}\"\n                       formControlName=\"duration\">\n                <span class=\"input-group-addon\">day(s)</span>\n              </div>\n\n              <div class=\"invalid-feedback\" *ngIf=\"errors.duration\">{{errors.duration}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--EFFORT-->\n            <label class=\"col-4 col-form-label text-right\" for=\"effort-input\">\n              Effort <span style=\"color: red\"><strong>*</strong></span>\n            </label>\n            <div class=\"col-4\">\n              <div class=\"input-group\">\n                <input type=\"text\" id=\"effort-input\"\n                       [ngClass]=\"{'form-control': true, 'is-invalid': errors.effort}\"\n                       formControlName=\"effort\">\n                <span class=\"input-group-addon\">hour(s)</span>\n              </div>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.effort\">{{errors.effort}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--predecessors-->\n            <label class=\"col-4 col-form-label text-right\">\n              <i class=\"fa fa-exclamation-circle\"\n                 popover=\"Tasks that have to finished before this task's start date\"\n                 triggers=\"focus\" tabindex=\"999\"></i> Predecessor tasks\n            </label>\n            <div class=\"col-8\">\n              <div>\n                <app-tasklist [tasks]=\"predecessorTasks\"></app-tasklist>\n              </div>\n              <div class=\"mt-2\">\n                <button class=\"btn btn-success\" (click)=\"handleAddDependencyBtnClick()\">\n                  Select predecessors\n                </button>\n                <div class=\"invalid-feedback\" *ngIf=\"errors.predecessors\">{{errors.predecessors}}</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-actions text-center\">\n            <!--BUTTONS-->\n            <div class=\"col-12\">\n              <button class=\"btn btn-primary\" (click)=\"handleCreateTask()\" [ladda]=\"isLoading.create\">\n                Create\n              </button>\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"handleOnCancelBtnClick()\">Reset</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/task/add/add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".invalid-feedback {\n  display: block; }\n\n.fa-exclamation-circle {\n  cursor: pointer; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
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
        this.predecessorTasks = [];
        this.resetError();
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        var projectId = this.route.snapshot.queryParamMap.get('project');
        var listId = this.route.snapshot.queryParamMap.get('list');
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
    AddComponent.prototype.handleOnCancelBtnClick = function () {
        this.setDefaultValue();
        this.location.back();
    };
    AddComponent.prototype.resetError = function () {
        this.errors = {
            name: '',
            description: '',
            list: '',
            priority: '',
            startDate: '',
            duration: '',
            effort: '',
            predecessors: ''
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
                case 'Predecessors':
                    this.errors.predecessors = errorMessage;
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
                    day: now.date()
                }
            },
            duration: '',
            effort: '',
        });
    };
    AddComponent.prototype.handleAddDependencyBtnClick = function () {
        var _this = this;
        var taskPool = [];
        for (var _i = 0, _a = this.foundProject.lists; _i < _a.length; _i++) {
            var list = _a[_i];
            for (var _b = 0, _c = list.tasks; _b < _c.length; _b++) {
                var task = _c[_b];
                taskPool.push(task);
            }
        }
        var initialState = {
            taskPool: taskPool,
            title: 'Select predecessor tasks',
            confirmCallback: function (selectedTasks) {
                _this.predecessorTasks = selectedTasks;
            }
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__["j" /* SelectTasksModalComponent */], { initialState: initialState, class: 'modal-dialog', ignoreBackdropClick: true });
    };
    AddComponent.prototype.handleCreateTask = function () {
        var _this = this;
        this.isLoading.create = true;
        this.resetError();
        var values = this.createForm.value;
        var startDate = __WEBPACK_IMPORTED_MODULE_3_moment__(this.datepicker.selectionDayTxt, 'DD/MM/YYYY');
        var preTaskIds = __WEBPACK_IMPORTED_MODULE_9_lodash__["map"](this.predecessorTasks, 'id');
        this.taskService.createTask(values.name, values.description, values.list, values.priority, startDate.isValid() ? startDate.format('YYYY-MM-DD') : this.datepicker.selectionDayTxt, values.duration, values.effort, preTaskIds).then(function (value) {
            var initialState = {
                message: 'Your task successfully created'
            };
            _this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__["m" /* SuccessModalComponent */], { initialState: initialState, class: 'modal-dialog modal-success' });
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
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__["e" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
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

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Update task</strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"isLoading.page\"></app-spinner>\r\n      <div *ngIf=\"!isLoading.page\" class=\"card-body row\">\r\n        <div [formGroup]=\"updateForm\" class=\"form-horizontal col-lg-8 col-md-10 col-sm-12\">\r\n          <div class=\"form-group row\">\r\n            <!--NAME-->\r\n            <label class=\"col-4 col-form-label text-right\" for=\"name-input\">\r\n              Name <span style=\"color: red\"><strong>*</strong></span>\r\n            </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"name-input\"\r\n                     [ngClass]=\"{'form-control': true, 'is-invalid': errors.name}\"\r\n                     formControlName=\"name\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.name\">{{errors.name}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <!--Description-->\r\n            <label class=\"col-4 col-form-label text-right\" for=\"description-input\">\r\n              Description\r\n            </label>\r\n            <div class=\"col-8\">\r\n              <textarea id=\"description-input\"\r\n                        rows=\"9\"\r\n                        [ngClass]=\"{'form-control': true, 'is-invalid': errors.description}\"\r\n                        placeholder=\"Description..\"\r\n                        formControlName=\"description\"></textarea>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.description\">{{errors.description}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <!--LIST-->\r\n            <label class=\"col-4 col-form-label text-right\" for=\"list-input\">\r\n              List\r\n            </label>\r\n            <div class=\"col-8\">\r\n              <select formControlName=\"list\" id=\"list-input\"\r\n                      [ngClass]=\"{'form-control': true, 'is-invalid': errors.list}\">\r\n                <option *ngFor=\"let list of lists\" value=\"{{list.id}}\">{{list.name}}</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.list\">{{errors.list}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <!--priority-->\r\n            <label class=\"col-4 col-form-label text-right\" for=\"priority-input\">\r\n              Priority\r\n            </label>\r\n            <div class=\"col-4\">\r\n              <select formControlName=\"priority\" id=\"priority-input\"\r\n                      [ngClass]=\"{'form-control': true, 'is-invalid': errors.list}\">\r\n                <option *ngFor=\"let priority of priorities\" value=\"{{priority.key}}\">{{priority.value}}</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.priority\">{{errors.priority}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <!--Start date-->\r\n            <label class=\"col-4 col-form-label text-right\" for=\"startDate-input\">\r\n              Start date <span style=\"color: red\"><strong>*</strong></span>\r\n            </label>\r\n            <div class=\"col-4 datepicker-group\">\r\n              <my-date-picker id=\"startDate-input\" #datepicker\r\n                              [options]=\"myDatePickerOptions\"\r\n                              formControlName=\"startDate\"\r\n                              [ngClass]=\"{'form-control': false, 'is-invalid': errors.startDate}\"\r\n                              required></my-date-picker>\r\n              <div class=\"invalid-feedback\" [ngStyle]=\"{'display':'block'}\" *ngIf=\"errors.startDate\">\r\n                {{errors.startDate}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <!--DURATION-->\r\n            <label class=\"col-4 col-form-label text-right\" for=\"duration-input\">\r\n              Duration <span style=\"color: red\"><strong>*</strong></span>\r\n            </label>\r\n            <div class=\"col-4\">\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" id=\"duration-input\"\r\n                       [ngClass]=\"{'form-control': true, 'is-invalid': errors.duration}\"\r\n                       formControlName=\"duration\">\r\n                <span class=\"input-group-addon\">day(s)</span>\r\n              </div>\r\n\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.duration\">{{errors.duration}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <!--EFFORT-->\r\n            <label class=\"col-4 col-form-label text-right\" for=\"effort-input\">\r\n              Effort <span style=\"color: red\"><strong>*</strong></span>\r\n            </label>\r\n            <div class=\"col-4\">\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" id=\"effort-input\"\r\n                       [ngClass]=\"{'form-control': true, 'is-invalid': errors.effort}\"\r\n                       formControlName=\"effort\">\r\n                <span class=\"input-group-addon\">hour(s)</span>\r\n              </div>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.effort\">{{errors.effort}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <!--predecessors-->\r\n            <label class=\"col-4 col-form-label text-right\">\r\n              <i class=\"fa fa-exclamation-circle\"\r\n                 popover=\"Tasks that have to finished before this task's start date\"\r\n                 triggers=\"focus\" tabindex=\"999\"></i> Predecessor tasks\r\n            </label>\r\n            <div class=\"col-8\">\r\n              <div>\r\n                <app-tasklist [tasks]=\"predecessorTasks\"></app-tasklist>\r\n              </div>\r\n              <div class=\"mt-2\">\r\n                <button class=\"btn btn-success\" (click)=\"handleAddDependencyBtnClick()\">\r\n                  Select predecessors\r\n                </button>\r\n                <div class=\"invalid-feedback\" *ngIf=\"errors.predecessors\">{{errors.predecessors}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-actions text-center\">\r\n            <!--BUTTON-->\r\n            <div class=\"col-12\">\r\n              <button class=\"btn btn-primary\" (click)=\"handleUpdateTask()\" [ladda]=\"isLoading.update\">\r\n                Save changes\r\n              </button>\r\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"onCancelBtnClick()\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
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
        this.predecessorTasks = [];
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
                _this.projectService.getProject(_this.foundTask.project.id)
                    .then(function (project) {
                    _this.foundProject = project;
                    _this.lists = _this.foundProject.lists;
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
            this.predecessorTasks = this.foundTask.predecessors;
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
            effort: '',
            predecessors: ''
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
                case 'Predecessors':
                    this.errors.predecessors = errorMessage;
                    break;
            }
        }
    };
    EditComponent.prototype.onCancelBtnClick = function () {
        this.location.back();
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
                    day: startDate.date()
                }
            },
            duration: this.foundTask.duration,
            effort: this.foundTask.effort,
        });
    };
    EditComponent.prototype.handleAddDependencyBtnClick = function () {
        var _this = this;
        var taskPool = [];
        for (var _i = 0, _a = this.foundProject.lists; _i < _a.length; _i++) {
            var list = _a[_i];
            for (var _b = 0, _c = list.tasks; _b < _c.length; _b++) {
                var task = _c[_b];
                if (task.id != this.foundTask.id) {
                    taskPool.push(task);
                }
            }
        }
        var initialState = {
            taskPool: taskPool,
            title: 'Select predecessor tasks',
            confirmCallback: function (selectedTasks) {
                _this.predecessorTasks = selectedTasks;
            }
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__["j" /* SelectTasksModalComponent */], { initialState: initialState, class: 'modal-dialog', ignoreBackdropClick: true });
    };
    EditComponent.prototype.handleUpdateTask = function () {
        var _this = this;
        this.isLoading.update = true;
        this.resetError();
        var values = this.updateForm.value;
        var startDate = __WEBPACK_IMPORTED_MODULE_8_moment__(this.datepicker.selectionDayTxt, 'DD/MM/YYYY');
        var preTaskIds = __WEBPACK_IMPORTED_MODULE_9_lodash__["map"](this.predecessorTasks, 'id');
        this.taskService.editTask(this.foundTask.id, values.name, values.description, values.list, values.priority, startDate.isValid() ? startDate.format('YYYY-MM-DD') : this.datepicker.selectionDayTxt, values.duration, values.effort, preTaskIds).then(function (value) {
            _this.foundTask = value;
            _this.showSuccessModal('Update task successfully');
            _this.isLoading.update = false;
        }).catch(function (reason) {
            _this.setErrors(reason.Data);
            _this.isLoading.update = false;
        });
    };
    EditComponent.prototype.showSuccessModal = function (message, isNavigateBack) {
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
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__["m" /* SuccessModalComponent */], { initialState: initialState, class: 'modal-dialog modal-success' });
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
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__["e" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
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

module.exports = "<!--<app-task-table [tasks]=\"tasks\"></app-task-table>-->\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>My tasks</strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"isLoading.page\"></app-spinner>\r\n      <div *ngIf=\"!isLoading.page\" class=\"card-body\">\r\n        <div class=\"button-section\">\r\n\r\n        </div>\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"search(searchField.value)\">\r\n              <i class=\"fa fa-search\"></i> Search\r\n            </button>\r\n          </span>\r\n          <input class=\"form-control\" type=\"text\" (input)=\"search(searchField.value)\" #searchField>\r\n        </div>\r\n        <div class=\"dataTable-container hide-search mt-3\">\r\n          <table id=\"allProjectsTable\" datatable [dtOptions]=\"datatableOptions\" class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Status</th>\r\n                <th>Priority</th>\r\n                <th>Start date</th>\r\n                <th>Deadline</th>\r\n                <th>Project</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let task of tasks\">\r\n                <td>\r\n                  <a routerLink=\"/task/{{task.id}}/view\">{{task.name}}</a>\r\n                </td>\r\n                <td>{{task.statusText}}</td>\r\n                <td>{{task.priorityText}}</td>\r\n                <td>{{task.startDate | date:'dd/MM/yyyy'}}</td>\r\n                <td>{{task.deadline | date:'dd/MM/yyyy'}}</td>\r\n                <td>\r\n                  <a routerLink=\"/project/{{task.project.id}}/detail\"> {{task.project.name}} </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
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
        this.datatableOptions = {
            lengthChange: false,
            columnDefs: [
                {
                    searchable: false,
                    orderable: false,
                    targets: [5]
                }
            ]
        };
        this.currentUser = storeService.get(['currentUser']);
        this.tasks = [];
        this.isLoading = {
            page: true
        };
    }
    MyTasksComponent.prototype.search = function (searchStr) {
        this.datatableElement.dtInstance.then(function (dtInstance) { return dtInstance.search(searchStr).draw(); });
    };
    MyTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getMyTask()
            .then(function (value) {
            _this.tasks = value;
            _this.isLoading.page = false;
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message);
            _this.isLoading.page = false;
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
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__["e" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */])
    ], MyTasksComponent.prototype, "datatableElement", void 0);
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
                    title: 'Task detail'
                },
                path: ':id/view',
                component: __WEBPACK_IMPORTED_MODULE_2__view_view_component__["a" /* ViewComponent */],
            },
            {
                data: {
                    title: 'Task'
                },
                path: ':id/detail',
                component: __WEBPACK_IMPORTED_MODULE_2__view_view_component__["a" /* ViewComponent */],
            },
            {
                data: {
                    title: 'Tasks detail'
                },
                path: 'view',
                component: __WEBPACK_IMPORTED_MODULE_2__view_view_component__["a" /* ViewComponent */],
            },
            {
                data: {
                    title: 'Update task'
                },
                path: 'edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_3__edit_edit_component__["a" /* EditComponent */],
            },
            {
                data: {
                    title: 'Create task'
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
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
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap__["d" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_12_angular_datatables__["b" /* DataTablesModule */],
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

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <strong>Task detail</strong>\n\n  </div>\n  <app-spinner *ngIf=isLoading.page></app-spinner>\n  <div *ngIf=!isLoading.page class=\"card-body row\">\n    <div class=\"col-12\">\n      <h2 class=\"card-title\">{{foundTask.name}}</h2>\n    </div>\n    <!--<div class=\"col-12\" *ngIf=\"isReadonlyMode && !managementMode\">-->\n    <div class=\"col-12\">\n      <div class=\"button-row\">\n        <a routerLink=\"/task/edit/{{foundTask.id}}\"\n           *ngIf=\"managementMode\"\n           class=\"btn btn-secondary bg-light\">\n          <i class=\"fa fa-edit\"></i>&nbsp; Edit\n        </a>\n        <button class=\"btn btn-secondary bg-light\" (click)=\"handleOnCommentBtnClick()\">\n          <i class=\"fa fa-comment-o\"></i>&nbsp; Comment\n        </button>\n        <button [ngClass]=\"{'btn': true, 'btn-secondary': true, 'bg-light':!isLoading.openAssignModal}\"\n                *ngIf=\"managementMode\"\n                (click)=\"handleOnAssignBtnClick()\"\n                [disabled]=\"isLoading.openAssignModal\"\n                [ladda]=\"isLoading.openAssignModal\">\n          <i class=\"fa fa-user-plus\"></i>&nbsp; Assign\n        </button>\n        <button [ngClass]=\"{'btn': true, 'btn-secondary': true, 'bg-light':!isLoading.openUnAssignModal}\"\n                *ngIf=\"managementMode\"\n                (click)=\"handleOnUnAssignBtnClick()\"\n                [disabled]=\"isLoading.openUnAssignModal\"\n                [ladda]=\"isLoading.openUnAssignModal\">\n          <i class=\"fa fa-user-times\"></i>&nbsp; Un-Assign\n        </button>\n        <button [ngClass]=\"{'btn': true, 'btn-secondary': true, 'bg-light':!isLoading.done}\"\n                *ngIf=\"!managementMode\"\n                [disabled]=\"foundTask.status == 1 || isLoading.done\"\n                (click)=\"handleOnNeedReviewBtnClick()\"\n                [ladda]=\"isLoading.done\">\n          <i class=\"fa fa-check\"></i>&nbsp; Need review\n        </button>\n        <button [ngClass]=\"{'btn': true, 'btn-secondary': true, 'bg-light':!isLoading.setStatus}\"\n                *ngIf=\"managementMode\"\n                [disabled]=\"isLoading.setStatus\"\n                (click)=\"handleSetStatusBtnClick()\"\n                [ladda]=\"isLoading.setStatus\">\n          Set status\n        </button>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\">\n      <div class=\"row\">\n        <div class=\"col-6 left-pane\">\n          <div class=\"section\">\n            <!--DETAIL SECTION-->\n            <h5 class=\"mb-3\">Detail</h5>\n            <dl class=\"row ml-1\">\n              <dt class=\"col-3\">Project:</dt>\n              <dd class=\"col-9\"><a\n                routerLink=\"/project/{{foundTask.project.id}}/detail\">{{foundTask.project.name}}</a></dd>\n              <dt class=\"col-3\">List:</dt>\n              <dd class=\"col-9\">{{foundTask.list.name}}</dd>\n              <dt class=\"col-3\">Priority:</dt>\n              <dd class=\"col-9\">\n                <span>{{foundTask.priorityText}}</span>\n              </dd>\n              <dt class=\"col-3\">Status:</dt>\n              <dd class=\"col-9\">\n                <!--<span>{{foundTask.statusText}}</span>-->\n                <app-task-status [taskStatusNumber]=\"foundTask.status\"></app-task-status>\n              </dd>\n              <dt class=\"col-3\">Effort:</dt>\n              <dd class=\"col-9\">\n                {{foundTask.effort}}\n                <span *ngIf=\"foundTask.effort <= 1\">Hour</span>\n                <span *ngIf=\"foundTask.effort > 1\">Hours</span>\n              </dd>\n            </dl>\n          </div>\n          <div class=\"section\">\n            <!--DESCRIPTION-->\n            <h5 class=\"mb-3\">Description</h5>\n            <dl class=\"row ml-1\">\n              <p class=\"col-12\">\n                {{foundTask.description}}\n              </p>\n            </dl>\n          </div>\n          <div class=\"section\">\n            <!--CHECK LIST-->\n            <h5 class=\"mb-3\">Check list</h5>\n            <dl class=\"row ml-1\">\n              <p class=\"col-12\">\n\n              </p>\n            </dl>\n          </div>\n          <div class=\"section\">\n            <!--ATTACHMENT-->\n            <h5 class=\"mb-3\">Attachments</h5>\n            <dl class=\"row ml-1\">\n              <div class=\"col-12\">\n                <div class=\"form-group row\" [formGroup]=\"attachmentForm\">\n                  <div class=\"col-9\">\n                    <input #attachmentInput\n                           id=\"file-input\" name=\"file-input\" type=\"file\"\n                           formGroupName=\"attachment\"\n                           (change)=\"attachmentFileChange($event)\">\n                  </div>\n                  <div class=\"col-3\">\n                    <button class=\"btn btn-success float-right\"\n                            [disabled]=\"!attachmentForm.value.attachment || isLoading.attachmentUpload || needReviewMode\"\n                            [hidden]=\"!attachmentForm.value.attachment\"\n                            [ladda]=\"isLoading.attachmentUpload\"\n                            (click)=\"handleUploadAttachmentClick()\">\n                      <i class=\"fa fa-plus\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\" *ngFor=\"let attachment of this.foundTask.attachments\">\n                    <div class=\"d-flex align-items-center\">\n                      <a href=\"{{attachment.source}}\">\n                        <span>{{attachment.name}}</span>\n                      </a>\n                      <button class=\"btn btn-danger btn-sm ml-auto\"\n                              [disabled]=\"isLoading.attachmentRemove[attachment.ID] || needReviewMode\"\n                              (click)=\"handleDeleteAttachmentClick(attachment.ID)\"\n                              [ladda]=\"isLoading.attachmentRemove[attachment.ID]\">\n                        <i class=\"fa fa-trash\"></i>\n                      </button>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </dl>\n          </div>\n          <div class=\"section\">\n            <!--COMMENT-->\n            <h5 class=\"mb-3\">Comments</h5>\n            <dl class=\"row ml-1\">\n              <div class=\"col-12\">\n                <div class=\"form-group row\">\n                  <div class=\"col-12\">\n                    <!--COMMENT BTN + LABEL-->\n                    <button class=\"btn btn-secondary bg-light\"\n                            *ngIf=\"!openCommentForm\"\n                            (click)=\"handleOnCommentBtnClick()\">\n                      <i class=\"fa fa-comment-o\"></i>&nbsp; Comment\n                    </button>\n                  </div>\n                  <div class=\"col-12\" *ngIf=\"openCommentForm\">\n                    <!--COMMENT TEXT AREA-->\n                    <textarea title=\"comment-input\" rows=\"9\" class=\"form-control\"\n                              [(ngModel)]=\"commentBoxModel\"\n                              placeholder=\"Content...\"></textarea>\n                  </div>\n                  <div class=\"col-12 mt-3 d-flex justify-content-end\" *ngIf=\"openCommentForm\">\n                    <!--ADD COMMENT, CANCEL BTN-->\n                    <button class=\"btn btn-success mr-2\" [ladda]=\"isLoading.comment\"\n                            (click)=\"handleAddCommentBtnClick()\">Add\n                    </button>\n                    <button class=\"btn btn-secondary\" (click)=\"handleCancelCommentBtnClick()\">Cancel</button>\n                  </div>\n                </div>\n              </div>\n              <app-comment class=\"col-12\"\n                           *ngFor=\"let comment of foundTask.comments\"\n                           [comment]=\"comment\"\n                           (onEdit)=\"handleEditComment($event)\"></app-comment>\n            </dl>\n          </div>\n        </div>\n        <div class=\"col-5 right-pane ml-4\">\n          <div class=\"section\">\n            <!--MEMBER-->\n            <!--<h5 class=\"mb-3\">Members</h5>-->\n            <dl class=\"row ml-1\">\n              <dt class=\"col-12\">Assignees:</dt>\n              <dd class=\"col-12 pl-4\">\n                <app-user-list *ngIf=\"foundTask.assignees\" [users]=\"foundTask.assignees\"></app-user-list>\n                <span *ngIf=\"!foundTask.assignees || foundTask.assignees.length < 1\">N/A</span>\n              </dd>\n              <dt class=\"col-12\">Creator:</dt>\n              <dd class=\"col-12 pl-4\">\n                <app-user-list [user]=\"foundTask.createdBy\"></app-user-list>\n                <span *ngIf=\"!foundTask.createdBy\">N/A</span>\n              </dd>\n              <dt class=\"col-12\">Modifier:</dt>\n              <dd class=\"col-12 pl-4\">\n                <app-user-list *ngIf=\"foundTask.changedBy\" [user]=\"foundTask.changedBy\"></app-user-list>\n                <span *ngIf=\"!foundTask.changedBy\">N/A</span>\n              </dd>\n            </dl>\n          </div>\n          <div class=\"section\">\n            <!--TASK DEPENDENCY-->\n            <!--<h5 class=\"mb-3\">Members</h5>-->\n            <dl class=\"row ml-1\">\n              <dt class=\"col-12\">Predecessor tasks:</dt>\n              <dd class=\"col-12 pl-4\">\n                <span *ngIf=\"foundTask.predecessors.length <= 0\">N/A</span>\n                <app-tasklist *ngIf=\"foundTask.predecessors.length > 0\"\n                              [tasks]=\"foundTask.predecessors\">\n\n                </app-tasklist>\n              </dd>\n              <dt class=\"col-12\">Successor tasks:</dt>\n              <dd class=\"col-12 pl-4\">\n                <span *ngIf=\"foundTask.successors.length <= 0\">N/A</span>\n                <app-tasklist *ngIf=\"foundTask.successors.length > 0\"\n                              [tasks]=\"foundTask.successors\">\n\n                </app-tasklist>\n              </dd>\n            </dl>\n          </div>\n          <div class=\"section\">\n            <!--DATE SECTION-->\n            <!--<h5 class=\"mb-3\">Date</h5>-->\n            <dl class=\"row ml-1\">\n              <dt class=\"col-4\">Start date:</dt>\n              <dd class=\"col-8\">\n                <span *ngIf=\"foundTask.startDate\">\n                  {{foundTask.startDate | date:'dd/MM/yyyy'}}\n                </span>\n              </dd>\n              <dt class=\"col-4\">Duration:</dt>\n              <dd class=\"col-8\">\n                {{foundTask.duration}}\n                <span *ngIf=\"foundTask.duration <= 1\">Day</span>\n                <span *ngIf=\"foundTask.duration > 1\">Days</span>\n              </dd>\n              <dt class=\"col-4\">Deadline date:</dt>\n              <dd class=\"col-8\">\n                {{foundTask.deadline | date:'dd/MM/yyyy'}}\n              </dd>\n              <dt class=\"col-4\">Finished date:</dt>\n              <dd class=\"col-8\">\n              <span *ngIf=\"!foundTask.finishedDate\">\n                N/A\n              </span>\n                <span *ngIf=\"foundTask.finishedDate\">\n                {{foundTask.finishedDate | date:'dd/MM/yyyy'}}\n              </span>\n              </dd>\n              <dt class=\"col-4\">Created date:</dt>\n              <dd class=\"col-8\">{{foundTask.createdDate | date:'dd/MM/yyyy'}}</dd>\n              <dt class=\"col-4\">Changed date:</dt>\n              <dd class=\"col-8\">\n                <span *ngIf=\"foundTask.changedDate\">\n                  {{foundTask.changedDate | date:'dd/MM/yyyy'}}\n                </span>\n                <span *ngIf=\"!foundTask.changedDate\">\n                  N/A\n                </span>\n              </dd>\n            </dl>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
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
    function ViewComponent(taskService, uploadService, userService, commentService, storeService, router, route, location, modalService) {
        this.taskService = taskService;
        this.uploadService = uploadService;
        this.userService = userService;
        this.commentService = commentService;
        this.storeService = storeService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.modalService = modalService;
        var currentUser = this.storeService.get(['currentUser']);
        this.managementMode = currentUser.isManager || currentUser.isAdmin;
        this.isLoading = {
            page: true,
            attachmentUpload: false,
            attachmentRemove: [],
            openAssignModal: false,
            openUnAssignModal: false,
            done: false,
            comment: false,
            editComment: false,
            setStatus: false
        };
        this.needReviewMode = false;
        this.openCommentForm = false;
        this.resetErrors();
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var taskId = params['id'];
            if (Number(taskId)) {
                _this.isLoading.page = true;
                _this.loadData(taskId);
            }
            else {
                _this.showErrorModal(taskId + " is not a valid ID", true);
            }
        });
        this.attachmentForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]({
            attachment: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined),
        });
    };
    ViewComponent.prototype.loadData = function (taskId) {
        var _this = this;
        this.taskService.getTaskDetail(taskId)
            .then(function (value) {
            _this.foundTask = value;
            _this.isLoading.page = false;
            _this.updateLockingMode();
        })
            .catch(function (reason) {
            console.debug('ViewComponent-onInit', reason);
            _this.showErrorModal(reason.Message, true);
        });
    };
    ViewComponent.prototype.updateLockingMode = function () {
        this.needReviewMode =
            this.foundTask.statusText == 'Need review' ||
                this.foundTask.statusText == 'Done';
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
            _this.isLoading.comment = false;
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message);
            console.debug('handleAddCommentBtnClick', reason);
            _this.isLoading.comment = false;
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
                _this.showErrorModal(reason.Message);
                _this.isLoading.openAssignModal = false;
            });
        };
        this.isLoading.openAssignModal = true;
        this.userService.getUserOfProject(this.foundTask.project.id)
            .then(function (value) {
            var currentAssigneesIds = __WEBPACK_IMPORTED_MODULE_8_lodash__["map"](_this.foundTask.assignees, 'id');
            var pool = __WEBPACK_IMPORTED_MODULE_8_lodash__["filter"](value, function (user) { return !currentAssigneesIds.includes(user.id) && !user.isManager; });
            var selected = __WEBPACK_IMPORTED_MODULE_8_lodash__["filter"](value, function (user) { return currentAssigneesIds.includes(user.id); });
            var initialState = {
                confirmCallback: onConfirm,
                cancelCallback: function () {
                    _this.isLoading.openAssignModal = false;
                },
                closeCallback: function () {
                    _this.isLoading.openAssignModal = false;
                },
                userPool: pool,
                selectedUser: selected,
                title: "Assign",
                confirmButtonText: 'Assign'
            };
            _this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["l" /* SelectUsersModalComponent */], { initialState: initialState, class: 'modal-dialog', ignoreBackdropClick: true });
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
                _this.showErrorModal(reason.Message);
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
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["l" /* SelectUsersModalComponent */], { initialState: initialState, class: 'modal-dialog', ignoreBackdropClick: true });
    };
    ViewComponent.prototype.handleOnNeedReviewBtnClick = function () {
        var _this = this;
        var onConfirm = function () {
            _this.isLoading.done = true;
            _this.taskService.finishTask(_this.foundTask.id)
                .then(function (value) {
                _this.foundTask = value;
                _this.isLoading.done = false;
            })
                .catch(function (reason) {
                _this.showErrorModal(reason.Message);
                _this.isLoading.done = false;
            });
        };
        var initialState = {
            message: "Are you sure you want to finish this task!",
            confirmCallback: onConfirm
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["b" /* ConfirmModalComponent */], { initialState: initialState, class: 'modal-dialog', ignoreBackdropClick: true });
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
                _this.foundTask.attachments.push(attachment);
                _this.isLoading.attachmentUpload = false;
            })
                .catch(function (reason) {
                _this.errors.attachment = reason.Data;
                _this.isLoading.attachmentUpload = false;
            });
        }
        else {
            this.resetErrors();
        }
    };
    ViewComponent.prototype.handleDeleteAttachmentClick = function (attachmentId) {
        var _this = this;
        var onConfirm = function () {
            _this.isLoading.attachmentRemove[attachmentId] = true;
            _this.uploadService.deleteAttachment(attachmentId)
                .then(function (value) {
                var removedItemId = value.id;
                _this.foundTask.attachments = __WEBPACK_IMPORTED_MODULE_8_lodash__["filter"](_this.foundTask.attachments, function (item) {
                    return item.ID !== removedItemId;
                });
                _this.isLoading.attachmentRemove[attachmentId] = false;
            })
                .catch(function (reason) {
                _this.isLoading.attachmentRemove[attachmentId] = false;
                _this.showErrorModal(reason.Message);
            });
        };
        var initialState = {
            message: "Are you sure you want to delete attachment ?",
            confirmCallback: onConfirm
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["b" /* ConfirmModalComponent */], { initialState: initialState, class: 'modal-dialog' });
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
    ViewComponent.prototype.handleSetStatusBtnClick = function () {
        var _this = this;
        this.isLoading.setStatus = true;
        var initialState = {
            task: this.foundTask,
            confirmCallback: function (task) {
                _this.foundTask = task;
                _this.updateLockingMode();
                _this.isLoading.setStatus = false;
            },
            cancelCallback: function () {
                _this.isLoading.setStatus = false;
            },
            closeCallback: function () {
                _this.isLoading.setStatus = false;
            }
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["i" /* SelectStatusModalComponent */], { initialState: initialState, class: 'modal-dialog', ignoreBackdropClick: true });
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
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["e" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
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
            __WEBPACK_IMPORTED_MODULE_11__services_tree_service__["a" /* StoreService */],
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