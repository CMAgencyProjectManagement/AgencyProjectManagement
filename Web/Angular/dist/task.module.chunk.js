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
            var newTask = value;
            var initialState = {
                message: 'Your task successfully created!'
            };
            _this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__cmaComponents_modals__["m" /* SuccessModalComponent */], { initialState: initialState, class: 'modal-dialog modal-success' });
            _this.router.navigate(['task/' + newTask.id + '/view']);
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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Task detail</strong>\r\n\r\n  </div>\r\n  <app-spinner *ngIf=isLoading.page></app-spinner>\r\n  <div *ngIf=!isLoading.page class=\"card-body row\">\r\n    <div class=\"col-12\">\r\n      <h2 class=\"card-title\">{{foundTask.name}}</h2>\r\n    </div>\r\n    <!--<div class=\"col-12\" *ngIf=\"isReadonlyMode && !managementMode\">-->\r\n    <div class=\"col-12\">\r\n      <div class=\"button-row\" [hidden]=\"pageMode.admin\">\r\n        <a routerLink=\"/task/edit/{{foundTask.id}}\"\r\n           *ngIf=\"managementMode\"\r\n           [hidden]=\"pageMode.done\"\r\n           class=\"btn btn-secondary bg-light\">\r\n          <i class=\"fa fa-edit\"></i>&nbsp; Edit\r\n        </a>\r\n        <!-- <button class=\"btn btn-secondary bg-light\" (click)=\"handleOnCommentBtnClick()\">\r\n          <i class=\"fa fa-comment-o\"></i>&nbsp; Comment\r\n        </button> -->\r\n        <button [ngClass]=\"{'btn': true, 'btn-secondary': true, 'bg-light':!isLoading.openAssignModal}\"\r\n                [hidden]=\"!pageMode.manager || pageMode.done\"\r\n                (click)=\"handleOnAssignBtnClick()\" [disabled]=\"isLoading.openAssignModal\"\r\n                [ladda]=\"isLoading.openAssignModal\">\r\n          <i class=\"fa fa-user-plus\"></i>&nbsp; Assign\r\n        </button>\r\n        <button [ngClass]=\"{'btn': true, 'btn-secondary': true, 'bg-light':!isLoading.openUnAssignModal}\"\r\n                [hidden]=\"!pageMode.manager || pageMode.done\"\r\n                (click)=\"handleOnUnAssignBtnClick()\" [disabled]=\"isLoading.openUnAssignModal\"\r\n                [ladda]=\"isLoading.openUnAssignModal\">\r\n          <i class=\"fa fa-user-times\"></i>&nbsp; Unassign\r\n        </button>\r\n        <button [ngClass]=\"{'btn': true, 'btn-secondary': true, 'bg-light':!isLoading.done}\"\r\n                [hidden]=\"!pageMode.staff || isLoading.done\"\r\n                [disabled]=\"foundTask.status == 1 || foundTask.status == 2|| isLoading.done\" (click)=\"handleOnNeedReviewBtnClick()\"\r\n                [ladda]=\"isLoading.done\">\r\n          <i class=\"fa fa-check\"></i>&nbsp; Need review\r\n        </button>\r\n        <button [ngClass]=\"{'btn': true, 'btn-secondary': true, 'bg-light':!isLoading.setStatus}\"\r\n                [hidden]=\"!pageMode.manager\" [disabled]=\"isLoading.setStatus\"\r\n                (click)=\"handleSetStatusBtnClick()\" [ladda]=\"isLoading.setStatus\">\r\n          <i class=\"fa fa-refresh\"></i>&nbsp;Set status\r\n        </button>\r\n        <button [ngClass]=\"{'btn': true, 'btn-secondary': true, 'bg-light':!isLoading.archiveTask}\"\r\n                [hidden]=\"!pageMode.manager\" [disabled]=\"isLoading.archiveTask\"\r\n                (click)=\"handleArchiveBtnClick()\" [ladda]=\"isLoading.archiveTask\">\r\n          <i class=\"fa fa-archive\"></i>&nbsp;Archive\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 mt-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6 left-pane\">\r\n          <div class=\"section\">\r\n            <!--DETAIL SECTION-->\r\n            <h5 class=\"mb-3\">Detail</h5>\r\n            <dl class=\"row ml-1\">\r\n              <dt class=\"col-3\">Project:</dt>\r\n              <dd class=\"col-9\">\r\n                <a routerLink=\"/project/{{foundTask.project.id}}/detail\">{{foundTask.project.name}}</a>\r\n              </dd>\r\n              <dt class=\"col-3\">List:</dt>\r\n              <dd class=\"col-9\">{{foundTask.list.name}}</dd>\r\n              <dt class=\"col-3\">Priority:</dt>\r\n              <dd class=\"col-9\">\r\n                <span>{{foundTask.priorityText}}</span>\r\n              </dd>\r\n              <dt class=\"col-3\">Status:</dt>\r\n              <dd class=\"col-9\">\r\n                <!--<span>{{foundTask.statusText}}</span>-->\r\n                <app-task-status [taskStatusNumber]=\"foundTask.status\"></app-task-status>\r\n              </dd>\r\n              <dt class=\"col-3\">Effort:</dt>\r\n              <dd class=\"col-9\">\r\n                {{foundTask.effort}}\r\n                <span *ngIf=\"foundTask.effort <= 1\">Hour</span>\r\n                <span *ngIf=\"foundTask.effort > 1\">Hours</span>\r\n              </dd>\r\n            </dl>\r\n          </div>\r\n          <div class=\"section\">\r\n            <!--DESCRIPTION-->\r\n            <h5 class=\"mb-3\">Description</h5>\r\n            <dl class=\"row ml-1\">\r\n              <p class=\"col-12\">\r\n                {{foundTask.description}}\r\n              </p>\r\n            </dl>\r\n          </div>\r\n          <div class=\"section\">\r\n            <!--CHECK LIST-->\r\n            <h5 class=\"mb-3\">Check list</h5>\r\n            <dl class=\"row ml-1\">\r\n              <div class=\"col-12\">\r\n                <app-checklist class=\"m-1\" *ngFor=\"let checkList of foundTask.checkLists\"\r\n                               [managementMode]=\"pageMode.manager\"\r\n                               [readonly]=\"pageMode.done\"\r\n                               (onDeleteCheckList)=\"handleDeleteCheckListClick($event)\"\r\n                               (onEditChecklist)=\"handleDoneEditCheckListClick($event)\"\r\n                               [checkList]=\"checkList\"></app-checklist>\r\n              </div>\r\n              <div class=\"col-12\" [hidden]=\"!pageMode.manager || pageMode.done\">\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"New list\" type=\"text\" #newCheckListInput>\r\n                  <span class=\"input-group-append\">\r\n                    <button class=\"btn btn-success\" type=\"button\"\r\n                            [ladda]=\"isLoading.addCheckList\"\r\n                            (click)=\"handleAddCheckListBtnClick(newCheckListInput)\">\r\n                      <i class=\"fa fa-plus\"></i>\r\n                    </button>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </dl>\r\n          </div>\r\n          <div class=\"section\">\r\n            <!--ATTACHMENT-->\r\n            <h5 class=\"mb-3\">Attachments</h5>\r\n            <dl class=\"row ml-1\">\r\n              <div class=\"col-12\">\r\n                <div class=\"form-group row\" [formGroup]=\"attachmentForm\"\r\n                     [hidden]=\"pageMode.done || pageMode.needReview || pageMode.admin\">\r\n                  <div class=\"col-9\">\r\n                    <input #attachmentInput id=\"file-input\" name=\"file-input\" type=\"file\" formGroupName=\"attachment\"\r\n                           (change)=\"attachmentFileChange($event)\">\r\n                  </div>\r\n                  <div class=\"col-3\">\r\n                    <button class=\"btn btn-success float-right\"\r\n                            [disabled]=\"!attachmentForm.value.attachment || isLoading.attachmentUpload || needReviewMode\"\r\n                            [hidden]=\"!attachmentForm.value.attachment\" [ladda]=\"isLoading.attachmentUpload\"\r\n                            (click)=\"handleUploadAttachmentClick()\">\r\n                      <i class=\"fa fa-plus\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12\">\r\n                <ul class=\"list-group\">\r\n                  <li class=\"list-group-item\" *ngFor=\"let attachment of this.foundTask.attachments\">\r\n                    <div class=\"d-flex align-items-center\">\r\n                      <a href=\"{{attachment.source}}\">\r\n                        <span>{{attachment.name}}</span>\r\n\r\n                      </a>\r\n\r\n                      <div class=\"btn-sm ml-auto align-items-center float-right\" style=\"color: silver;\">\r\n                        {{attachment.createdTime | date:'dd/MM/yyyy'}}\r\n                      </div>\r\n                      <button class=\"btn btn-danger \" [hidden]=\"pageMode.needReview || pageMode.done\"\r\n                              [disabled]=\"isLoading.attachmentRemove[attachment.ID]\"\r\n                              [ladda]=\"isLoading.attachmentRemove[attachment.ID]\"\r\n                              (click)=\"handleDeleteAttachmentClick(attachment.ID)\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </dl>\r\n          </div>\r\n          <div class=\"section\">\r\n            <!--COMMENT-->\r\n            <h5 class=\"mb-3\">Comments</h5>\r\n            <dl class=\"row ml-1\">\r\n              <div class=\"col-12\">\r\n                <div class=\"form-group row\">\r\n                  <div class=\"col-12\" *ngIf=\"currentUser.isManager || currentUser.isStaff\">\r\n                    <!--COMMENT BTN + LABEL-->\r\n                    <button class=\"btn btn-secondary bg-light\" *ngIf=\"!openCommentForm\"\r\n                            (click)=\"handleOnCommentBtnClick()\">\r\n                      <i class=\"fa fa-comment-o\"></i>&nbsp; Comment\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"col-12\" *ngIf=\"openCommentForm\">\r\n                    <!--COMMENT TEXT AREA-->\r\n                    <textarea title=\"comment-input\" rows=\"9\" class=\"form-control\" [(ngModel)]=\"commentBoxModel\"\r\n                              placeholder=\"Content...\"></textarea>\r\n                  </div>\r\n                  <div class=\"col-12 mt-3 d-flex justify-content-end\" *ngIf=\"openCommentForm\">\r\n                    <!--ADD COMMENT, CANCEL BTN-->\r\n                    <button class=\"btn btn-success mr-2\" [ladda]=\"isLoading.comment\"\r\n                            (click)=\"handleAddCommentBtnClick()\">Add\r\n                    </button>\r\n                    <button class=\"btn btn-secondary\" (click)=\"handleCancelCommentBtnClick()\">Cancel</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <app-comment class=\"col-12\" *ngFor=\"let comment of foundTask.comments\" [comment]=\"comment\"\r\n                           (onEdit)=\"handleEditComment($event)\"></app-comment>\r\n            </dl>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-5 right-pane ml-4\">\r\n          <div class=\"section\">\r\n            <!--MEMBER-->\r\n            <!--<h5 class=\"mb-3\">Members</h5>-->\r\n            <dl class=\"row ml-1\">\r\n              <dt class=\"col-12\">Assignees:</dt>\r\n              <dd class=\"col-12 pl-4\">\r\n                <app-user-list *ngIf=\"foundTask.assignees\" [users]=\"foundTask.assignees\"></app-user-list>\r\n                <span *ngIf=\"!foundTask.assignees || foundTask.assignees.length < 1\">N/A</span>\r\n              </dd>\r\n              <dt class=\"col-12\">Creator:</dt>\r\n              <dd class=\"col-12 pl-4\">\r\n                <app-user-list [user]=\"foundTask.createdBy\"></app-user-list>\r\n                <span *ngIf=\"!foundTask.createdBy\">N/A</span>\r\n              </dd>\r\n              <dt class=\"col-12\">Modifier:</dt>\r\n              <dd class=\"col-12 pl-4\">\r\n                <app-user-list *ngIf=\"foundTask.changedBy\" [user]=\"foundTask.changedBy\"></app-user-list>\r\n                <span *ngIf=\"!foundTask.changedBy\">N/A</span>\r\n              </dd>\r\n            </dl>\r\n          </div>\r\n          <div class=\"section\">\r\n            <!--TASK DEPENDENCY-->\r\n            <!--<h5 class=\"mb-3\">Members</h5>-->\r\n            <dl class=\"row ml-1\">\r\n              <dt class=\"col-12\">Predecessor tasks:</dt>\r\n              <dd class=\"col-12 pl-4\">\r\n                <span *ngIf=\"foundTask.predecessors.length <= 0\">N/A</span>\r\n                <app-tasklist *ngIf=\"foundTask.predecessors.length > 0\" [tasks]=\"foundTask.predecessors\">\r\n\r\n                </app-tasklist>\r\n              </dd>\r\n              <dt class=\"col-12\">Successor tasks:</dt>\r\n              <dd class=\"col-12 pl-4\">\r\n                <span *ngIf=\"foundTask.successors.length <= 0\">N/A</span>\r\n                <app-tasklist *ngIf=\"foundTask.successors.length > 0\" [tasks]=\"foundTask.successors\">\r\n\r\n                </app-tasklist>\r\n              </dd>\r\n            </dl>\r\n          </div>\r\n          <div class=\"section\">\r\n            <!--DATE SECTION-->\r\n            <!--<h5 class=\"mb-3\">Date</h5>-->\r\n            <dl class=\"row ml-1\">\r\n              <dt class=\"col-4\">Start date:</dt>\r\n              <dd class=\"col-8\">\r\n                <span *ngIf=\"foundTask.startDate\">\r\n                  {{foundTask.startDate | date:'dd/MM/yyyy'}}\r\n                </span>\r\n              </dd>\r\n              <dt class=\"col-4\">Duration:</dt>\r\n              <dd class=\"col-8\">\r\n                {{foundTask.duration}}\r\n                <span *ngIf=\"foundTask.duration <= 1\">Day</span>\r\n                <span *ngIf=\"foundTask.duration > 1\">Days</span>\r\n              </dd>\r\n              <dt class=\"col-4\">Deadline date:</dt>\r\n              <dd class=\"col-8\">\r\n                {{foundTask.deadline | date:'dd/MM/yyyy'}}\r\n              </dd>\r\n              <dt class=\"col-4\">Finished date:</dt>\r\n              <dd class=\"col-8\">\r\n                <span *ngIf=\"!foundTask.finishedDate\">\r\n                  N/A\r\n                </span>\r\n                <span *ngIf=\"foundTask.finishedDate\">\r\n                  {{foundTask.finishedDate | date:'dd/MM/yyyy'}}\r\n                </span>\r\n              </dd>\r\n              <dt class=\"col-4\">Created date:</dt>\r\n              <dd class=\"col-8\">{{foundTask.createdDate | date:'dd/MM/yyyy'}}</dd>\r\n              <dt class=\"col-4\">Last change at:</dt>\r\n              <dd class=\"col-8\">\r\n                <span *ngIf=\"foundTask.changedDate\">\r\n                  {{foundTask.changedDate | date:'dd/MM/yyyy'}}\r\n                </span>\r\n                <span *ngIf=\"!foundTask.changedDate\">\r\n                  N/A\r\n                </span>\r\n              </dd>\r\n            </dl>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_checklist_service__ = __webpack_require__("../../../../../src/app/services/checklist.service.ts");
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
    function ViewComponent(taskService, uploadService, userService, commentService, storeService, checkListService, router, route, location, modalService) {
        this.taskService = taskService;
        this.uploadService = uploadService;
        this.userService = userService;
        this.commentService = commentService;
        this.storeService = storeService;
        this.checkListService = checkListService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.modalService = modalService;
        var currentUser = this.storeService.get(['currentUser']);
        this.currentUser = this.storeService.get(['currentUser']);
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
            setStatus: false,
            addCheckList: false,
            deleteCheckList: false,
            archiveTask: false
        };
        this.needReviewMode = false;
        this.openCommentForm = false;
        this.resetErrors();
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var taskId = params['id'];
            _this.foundTaskID = taskId;
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
            _this.foundProjectID = _this.foundTask.project.id;
            _this.isLoading.page = false;
            _this.updatePageMode();
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message, true);
        });
    };
    ViewComponent.prototype.updatePageMode = function () {
        this.pageMode = {
            done: this.foundTask.statusText == 'Done',
            needReview: this.foundTask.statusText == 'Need review',
            manager: this.currentUser.isManager,
            admin: this.currentUser.isAdmin,
            staff: !this.currentUser.isManager && !this.currentUser.isAdmin,
        };
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
            var pool = __WEBPACK_IMPORTED_MODULE_8_lodash__["filter"](value, function (user) {
                return !currentAssigneesIds.includes(user.id) &&
                    !user.isManager &&
                    user.teamId == _this.currentUser.teamId;
            });
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
        var userPool = __WEBPACK_IMPORTED_MODULE_8_lodash__["filter"](this.foundTask.assignees, function (user) {
            return user.teamId == _this.currentUser.teamId;
        });
        var initialState = {
            confirmCallback: onConfirm,
            cancelCallback: function () {
                _this.isLoading.openUnAssignModal = false;
            },
            closeCallback: function () {
                _this.isLoading.openUnAssignModal = false;
            },
            userPool: userPool,
            title: "Unassign",
            confirmButtonText: 'Unassign'
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
            message: "Are you sure you want to finish this task?",
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
                _this.attachmentInput.nativeElement.value = '';
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
                _this.updatePageMode();
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
    ViewComponent.prototype.handleAddCheckListBtnClick = function (input) {
        var _this = this;
        this.isLoading.addCheckList = true;
        var name = input.value;
        this.checkListService.createChecklist(name, this.foundTask.id)
            .then(function (value) {
            input.value = '';
            _this.foundTask.checkLists.push(value);
            _this.isLoading.addCheckList = false;
        })
            .catch(function (reason) {
            console.debug('handleAddCheckListBtnClick - error', reason);
            var message = reason.Data[0].message;
            _this.showErrorModal(message);
            _this.isLoading.addCheckList = false;
        });
    };
    ViewComponent.prototype.handleDeleteCheckListClick = function ($event) {
        var _this = this;
        this.isLoading.deleteCheckList = false;
        this.checkListService.deleteChecklist($event.checkListId)
            .then(function (value) {
            _this.foundTask.checkLists = __WEBPACK_IMPORTED_MODULE_8_lodash__["filter"](_this.foundTask.checkLists, function (checkList) {
                return checkList.id != $event.checkListId;
            });
            _this.isLoading.deleteCheckList = false;
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message);
        });
    };
    ViewComponent.prototype.handleDoneEditCheckListClick = function ($event) {
        var _this = this;
        this.checkListService.editChecklist($event.checkListId, $event.content)
            .catch(function (reason) {
            _this.showErrorModal(reason.Message);
        });
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
    ViewComponent.prototype.handleArchiveBtnClick = function () {
        var _this = this;
        this.isLoading.archiveTask = true;
        var onConfirm = function () {
            _this.taskService.archiveTask(_this.foundTaskID)
                .then(function (value) {
                _this.isLoading.archiveTask = false;
                _this.router.navigate(['/project/' + _this.foundProjectID + '/task']);
            });
        };
        var initialState = {
            message: "Are you sure to archive this task?",
            confirmCallback: onConfirm,
            cancelCallback: function () {
                _this.isLoading.archiveTask = false;
            },
            closeCallback: function () {
                _this.isLoading.archiveTask = false;
            }
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["b" /* ConfirmModalComponent */], { initialState: initialState, class: 'modal-dialog' });
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
            __WEBPACK_IMPORTED_MODULE_12__services_checklist_service__["a" /* ChecklistService */],
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