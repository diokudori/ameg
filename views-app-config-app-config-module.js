(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-app-config-app-config-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-config/app-config.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-config/app-config.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Basic Form</strong> Elements\n        </div>\n        <div class=\"card-body\">\n           \n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Nama Aplikasi</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"data.app_name\" type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" readonly=\"\">\n              </div>\n            </div> \n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Versi Aplikasi</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"data.app_version\" type=\"number\" id=\"text-input\" name=\"text-input\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Url Play Store Aplikasi</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"data.app_store_url\" type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n            </div>\n            \n\t\t<br>\n\t\t\t\t<div role=\"alert\" class=\"alert alert-success\" *ngIf=\"isSuccessAlert\">\n\t\t\t\t\t<strong>Berhasil!</strong> Data telah tersimpan \n\t\t\t\t</div>\n\t\t\t\t<div role=\"alert\" *ngIf=\"isDangerAlert\" class=\"alert alert-danger\">\n\t\t\t\t\t<strong>Gagal!</strong> data tidak tersimpan \n\t\t\t\t</div>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"saveProgram()\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n        </div>\n      </div>\n    </div>\n   \n  </div><!--/.row-->\n  \n</div>\n");

/***/ }),

/***/ "./src/app/views/app-config/app-config-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/app-config/app-config-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AppConfigRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigRoutingModule", function() { return AppConfigRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-config.component */ "./src/app/views/app-config/app-config.component.ts");




var routes = [
    {
        path: '',
        data: {
            title: 'Pengaturan Aplikasi'
        },
        component: _app_config_component__WEBPACK_IMPORTED_MODULE_3__["AppConfigComponent"],
    }
];
var AppConfigRoutingModule = /** @class */ (function () {
    function AppConfigRoutingModule() {
    }
    AppConfigRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppConfigRoutingModule);
    return AppConfigRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/app-config/app-config.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/app-config/app-config.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/app-config/app-config.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/app-config/app-config.component.ts ***!
  \**********************************************************/
/*! exports provided: AppConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigComponent", function() { return AppConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");



var AppConfigComponent = /** @class */ (function () {
    function AppConfigComponent(api) {
        this.api = api;
        this.data = {};
        this.isSuccessAlert = false;
        this.isDangerAlert = false;
    }
    AppConfigComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    AppConfigComponent.prototype.getData = function () {
        var _this = this;
        this.api.provideData({
            type: 'getappconfigadm'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.data = resp[0];
            console.log(_this.data);
        });
    };
    AppConfigComponent.prototype.saveProgram = function () {
        var _this = this;
        this.api.provideData({
            type: 'editappconfigadm',
            app_version: this.data.app_version,
            app_store_url: this.data.app_store_url,
            app_id: this.data.app_id
        }, 'data-adm-api').subscribe(function (resp) {
            _this.isSuccessAlert = true;
            setTimeout(function () {
                _this.isSuccessAlert = false;
                _this.getData();
            }, 2000);
        });
    };
    AppConfigComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    AppConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-config',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app-config.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-config/app-config.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app-config.component.css */ "./src/app/views/app-config/app-config.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], AppConfigComponent);
    return AppConfigComponent;
}());



/***/ }),

/***/ "./src/app/views/app-config/app-config.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/app-config/app-config.module.ts ***!
  \*******************************************************/
/*! exports provided: AppConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigModule", function() { return AppConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_config_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-config-routing.module */ "./src/app/views/app-config/app-config-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-config.component */ "./src/app/views/app-config/app-config.component.ts");






var AppConfigModule = /** @class */ (function () {
    function AppConfigModule() {
    }
    AppConfigModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_config_component__WEBPACK_IMPORTED_MODULE_5__["AppConfigComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_config_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppConfigRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ]
        })
    ], AppConfigModule);
    return AppConfigModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-app-config-app-config-module.js.map