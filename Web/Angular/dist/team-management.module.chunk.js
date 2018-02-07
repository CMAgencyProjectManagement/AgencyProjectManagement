webpackJsonp(["team-management.module"],{

/***/ "../../../../../src/app/views/team-management/team-management.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  <strong>Manage team</strong>\n</h1>\n<table class=\"table table-info\">\n  <thead class=\"thead-light\">\n    <tr>\n      <th>#</th>\n\n      <th>Name</th>\n      <th>Team leader</th>\n      <th>createdBy</th>\n      <th>createdDate</th>\n      <th>isClose</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>team 1</td>\n      <td>Otto</td>\n      <td>MarkO</td>\n      <td>22/12/2001</td>\n      <td>\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\n          <span class=\"switch-label\"></span>\n          <span class=\"switch-handle\"></span>\n        </label>\n      </td>\n    </tr>\n    <tr>\n      <th scope=\"row\">2</th>\n      <td>Team 2</td>\n      <td>Thornton</td>\n      <td>JacobT</td>\n      <td>15/10/2012</td>\n      <td>\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\n          <span class=\"switch-label\"></span>\n          <span class=\"switch-handle\"></span>\n        </label>\n    </tr>\n    <tr>\n      <th scope=\"row\">3</th>\n      <td>Team 3</td>\n      <td>the Bird</td>\n      <td>LarryTB</td>\n      <td>20/5/1998</td>\n      <td>\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\n          <span class=\"switch-label\"></span>\n          <span class=\"switch-handle\"></span>\n        </label>\n      </td>\n    </tr>\n    <tr>\n      <th scope=\"row\">4</th>\n      <td>Team 4</td>\n      <td>the Killer</td>\n      <td>kiraTK</td>\n      <td>15/1/2013</td>\n      <td>\n        <label class=\"switch switch-default switch-pill switch-primary-outline-alt\">\n          <input type=\"checkbox\" class=\"switch-input\" unchecked>\n          <span class=\"switch-label\"></span>\n          <span class=\"switch-handle\"></span>\n        </label>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management.component.ts":
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
var TeamManagementComponent = /** @class */ (function () {
    function TeamManagementComponent() {
    }
    TeamManagementComponent.prototype.ngOnInit = function () {
    };
    TeamManagementComponent = __decorate([
        core_1.Component({
            selector: 'app-team-management',
            template: __webpack_require__("../../../../../src/app/views/team-management/team-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/team-management/team-management.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamManagementComponent);
    return TeamManagementComponent;
}());
exports.TeamManagementComponent = TeamManagementComponent;


/***/ }),

/***/ "../../../../../src/app/views/team-management/team-management.module.ts":
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
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var team_management_component_1 = __webpack_require__("../../../../../src/app/views/team-management/team-management.component.ts");
var TeamManagementModule = /** @class */ (function () {
    function TeamManagementModule() {
    }
    TeamManagementModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                team_management_component_1.TeamManagementComponent,
            ],
            declarations: [team_management_component_1.TeamManagementComponent]
        })
    ], TeamManagementModule);
    return TeamManagementModule;
}());
exports.TeamManagementModule = TeamManagementModule;


/***/ })

});
//# sourceMappingURL=team-management.module.chunk.js.map