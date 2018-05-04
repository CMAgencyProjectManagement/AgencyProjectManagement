webpackJsonp(["config.module"],{

/***/ "../../../../../src/app/views/config/config-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_component__ = __webpack_require__("../../../../../src/app/views/config/config.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__config_component__["a" /* ConfigComponent */],
        data: {
            title: 'Config'
        }
    },
];
var ConfigRoutingModule = /** @class */ (function () {
    function ConfigRoutingModule() {
    }
    ConfigRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ConfigRoutingModule);
    return ConfigRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/config/config.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <strong>Config</strong>\n      </div>\n      <app-spinner *ngIf=\"isLoading\"></app-spinner>\n      <div class=\"card-body \" *ngIf=\"!isLoading\">\n        <div [formGroup]=\"updateForm\" class=\"form-horizontal col-6\">\n\n          <h3 class=\"col-12 text-center\">Leader board config</h3>\n\n          <div class=\"form-group row\">\n            <!--Low Priority-->\n            <label class=\"col-6 col-form-label text-right\" for=\"low-priority-input\">\n              Low Priority\n            </label>\n            <div class=\"col-6\">\n              <div class=\"input-group\">\n                <input type=\"number\" id=\"lowpriority-input\" name=\"lowpriority-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.mediumpriority}\"\n                  formControlName=\"lowPriority\"  class=\"form-control\" >\n                <span class=\"input-group-addon\">Point(s)</span>\n              </div>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.lowPriority\" style=\"display: block\">{{errors.lowPriority}}</div>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <!--Medium Priority-->\n            <label class=\"col-6 col-form-label text-right\" for=\"medium-priority-input\">\n              Medium Priority\n\n            </label>\n            <div class=\"col-6\">\n              <div class=\"input-group\">\n                <input type=\"number\" id=\"mediumpriority-input\" name=\"mediumpriority-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.mediumpriority}\"\n                  formControlName=\"mediumPriority\">\n                <span class=\"input-group-addon\">Point(s)</span>\n              </div>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.mediumPriority\" style=\"display: block\">{{errors.mediumPriority}}</div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <!--Hight Priority-->\n            <label class=\"col-6 col-form-label text-right\" for=\"hight-priority-input\">\n              Hight Priority\n\n            </label>\n            <div class=\"col-6\">\n              <div class=\"input-group\">\n                <input type=\"number\" id=\"hightpriority-input\" name=\"hightpriority-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.hightpriority}\"\n                  formControlName=\"hightPriority\">\n                <span class=\"input-group-addon\">Point(s)</span>\n              </div>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.hightPriority\" style=\"display: block\">{{errors.hightPriority}}</div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <!--Duration max-->\n            <label class=\"col-6 col-form-label text-right\" for=\"task-max-duration-input\">\n              Task's max duration\n\n            </label>\n            <div class=\"col-6\">\n              <div class=\"input-group\">\n                <input type=\"number\" id=\"taskmaxduration-input\" name=\"taskmaxduration-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.taskmaxduration}\"\n                  formControlName=\"taskMaxDuration\">\n                <span class=\"input-group-addon\">Day(s)</span>\n              </div>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.taskMaxDuration\" style=\"display: block\">{{errors.taskMaxDuration}}</div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <!--Penalty-->\n            <label class=\"col-6 col-form-label text-right\" for=\"late-task-penalty-input\">\n              Late task's penalty\n\n            </label>\n            <div class=\"col-6\">\n              <div class=\"input-group\">\n                <input type=\"number\" id=\"latetaskpenalty-input\" name=\"latetaskpenalty-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.latetaskpenalty}\"\n                  formControlName=\"lateTaskPenalty\">\n                <span class=\"input-group-addon\">%</span>\n              </div>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.lateTaskPenalty\" style=\"display: block\">{{errors.lateTaskPenalty}}</div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <!--Min age-->\n            <label class=\"col-6 col-form-label text-right\" for=\"minimum-working-age-input\">\n              Minimum working age\n\n            </label>\n            <div class=\"col-6\">\n              <div class=\"input-group\">\n                <input type=\"number\" id=\"minimumworkingage-input\" name=\"minimumworkingage-input\" [ngClass]=\"{'form-control': true, 'is-invalid': errors.minimumworkingage}\"\n                  formControlName=\"minimumWorkingAge\">\n                <span class=\"input-group-addon\">Year(s) old</span>\n              </div>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.minimumWorkingAge\" style=\"display: block\">{{errors.minimumWorkingAge}}</div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <!--Allow admin participant age-->\n            <label class=\"col-6 col-form-label text-right\">\n              Allow admin to join department\n            </label>\n            <div class=\"col-6\">\n              <div class=\"input-group\">\n                <label class=\"switch switch-default switch-primary\">\n                  <input class=\"switch-input\" checked=\"\" type=\"checkbox\" formControlName=\"allowAdminParticipant\">\n                  <span class=\"switch-label\"></span>\n                  <span class=\"switch-handle\"></span>\n                </label>\n              </div>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.allowAdminParticipant\" style=\"display: block\">\n                {{errors.allowAdminParticipant}}\n              </div>\n            </div>\n          </div>\n\n          <!--BUTTONS-->\n          <div class=\"col-6 col-form-label text-right\">\n            <button class=\"btn btn-primary\" (click)=\"handleUpdate()\">\n              Save changes\n            </button>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/config/config.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/config/config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(router, route, storeService, taskService, configService, modalService) {
        this.router = router;
        this.route = route;
        this.storeService = storeService;
        this.taskService = taskService;
        this.configService = configService;
        this.modalService = modalService;
        this.isLoading = true;
        this.setErrorsNull();
    }
    ConfigComponent.prototype.ngOnInit = function () {
        this.loadConfig();
    };
    ConfigComponent.prototype.loadConfig = function () {
        var _this = this;
        this.configService.getConfig()
            .then(function (value) {
            _this.setDefaulConfig(value);
            _this.isLoading = false;
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message);
            _this.isLoading = false;
        });
        this.updateForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            lowPriority: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined),
            mediumPriority: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined),
            hightPriority: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined),
            taskMaxDuration: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined),
            lateTaskPenalty: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined),
            minimumWorkingAge: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined),
            allowAdminParticipant: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined),
        });
    };
    ConfigComponent.prototype.setDefaulConfig = function (config) {
        this.updateForm.patchValue({
            lowPriority: config.lowPriorityPoint,
            mediumPriority: config.mediumPriorityPoint,
            hightPriority: config.highPriorityPoint,
            taskMaxDuration: config.maxDuration,
            lateTaskPenalty: config.penatyPercent,
            minimumWorkingAge: config.minAge,
            allowAdminParticipant: config.allowAdminInTeam,
        });
    };
    ConfigComponent.prototype.handleUpdate = function () {
        var _this = this;
        this.setErrorsNull();
        var onConfirm = function () {
            // const formValue = this.updateForm.value;
            var formValue = _this.updateForm.value;
            _this.isLoading = true;
            _this.configService.updateConfig(formValue.lowPriority, formValue.mediumPriority, formValue.hightPriority, formValue.taskMaxDuration, formValue.lateTaskPenalty, formValue.minimumWorkingAge, formValue.allowAdminParticipant)
                .then(function (value) {
                _this.isLoading = false;
                _this.router.navigate(['dashboard']);
            })
                .catch(function (reason) {
                _this.setErrors(reason.Data);
                _this.isLoading = false;
            });
        };
        var initialState = {
            message: "Are you sure to save changes?",
            confirmCallback: onConfirm
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_7__cmaComponents_modals__["b" /* ConfirmModalComponent */], { initialState: initialState, class: 'modal-dialog' });
    };
    ConfigComponent.prototype.setErrorsNull = function () {
        this.errors = {
            lowPriority: '',
            mediumPriority: '',
            hightPriority: '',
            taskMaxDuration: '',
            lateTaskPenalty: '',
            minimumWorkingAge: '',
            allowAdminParticipant: ''
        };
    };
    ConfigComponent.prototype.setErrors = function (errors) {
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var error = errors_1[_i];
            var fieldName = error.key;
            var errorMessage = error.message;
            switch (fieldName) {
                case 'LowPoint':
                    this.errors.lowPriority = errorMessage;
                    break;
                case 'MediumPoint':
                    this.errors.mediumPriority = errorMessage;
                    break;
                case 'HightPoint':
                    this.errors.hightPriority = errorMessage;
                    break;
                case 'MaxDuration':
                    this.errors.taskMaxDuration = errorMessage;
                    break;
                case 'PenatyPercent':
                    this.errors.lateTaskPenalty = errorMessage;
                    break;
                case 'MinAge':
                    this.errors.minimumWorkingAge = errorMessage;
                    break;
            }
        }
    };
    ConfigComponent.prototype.showErrorModal = function (message) {
        var initialState = {
            message: message
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_7__cmaComponents_modals__["e" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    ConfigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-config',
            template: __webpack_require__("../../../../../src/app/views/config/config.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/config/config.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__services_tree_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_6__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* BsModalService */]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/config/config.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_routing_module__ = __webpack_require__("../../../../../src/app/views/config/config-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_component__ = __webpack_require__("../../../../../src/app/views/config/config.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__config_routing_module__["a" /* ConfigRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__components__["k" /* SpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* ReactiveFormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__config_component__["a" /* ConfigComponent */]
            ]
        })
    ], ConfigModule);
    return ConfigModule;
}());



/***/ })

});
//# sourceMappingURL=config.module.chunk.js.map