(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-radio-config-radio-config-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-config/radio-config.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-config/radio-config.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Simple Table\n        </div>\n        <div class=\"card-body\">\n          <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n\t\t\t<thead>\n\t\t\t  <tr>\n\t\t\t    <th style=\"width: 5%\">No.</th>\n\t\t\t    <th style=\"width: 15%\">Nama Pengaturan</th>\n\t\t\t    <th style=\"width: 10%\">Nilai</th>\n\t\t\t    <th style=\"width: 25%\">Aksi</th>\n\t\t\t  </tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t  <tr *ngFor=\"let d of data; let j = index\">\n\t\t\t    <td>{{ j+1 }}</td>\n\t\t\t    <td>{{ d.config_name }}</td>\n\t\t\t    <td>{{ d.config_value }}</td>\n\t\t\t    <td>\n\t\t\t    \t<button type=\"button\" class=\"btn btn-pill btn-primary\" (click)=\"editProgram(d)\">\n\t\t\t    \t<i class=\"fa fa-pencil\"></i>&nbsp;Ubah</button>\n\t\t\t    </td>\n\t\t\t  </tr>\n\t\t\t</tbody>\n\t\t\t</table>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n<ng-template #template>\n  <div class=\"modal-body text-center\">\n    <p>Yakin untuk menghapus?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-config/radio-configedit.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-config/radio-configedit.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"square-jelly-box\" [fullScreen] = \"true\"><p style=\"color: white\" > Sedang mengunggah file... </p></ngx-spinner>  \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Basic Form</strong> Elements\n        </div>\n        <div class=\"card-body\">\n           \n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Nama Pengaturan</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"data.config_name\" type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" readonly=\"\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Nilai</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"data.config_value\" type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n            </div>\n            \n\t\t<br>\n\t\t\t\t<div role=\"alert\" class=\"alert alert-success\" *ngIf=\"isSuccessAlert\">\n\t\t\t\t\t<strong>Berhasil!</strong> Data telah tersimpan \n\t\t\t\t</div>\n\t\t\t\t<div role=\"alert\" *ngIf=\"isDangerAlert\" class=\"alert alert-danger\">\n\t\t\t\t\t<strong>Gagal!</strong> data tidak tersimpan \n\t\t\t\t</div>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"saveProgram()\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n        </div>\n      </div>\n    </div>\n   \n  </div><!--/.row-->\n  \n</div>\n");

/***/ }),

/***/ "./src/app/views/radio-config/radio-config-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/radio-config/radio-config-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RadioConfigRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioConfigRoutingModule", function() { return RadioConfigRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _radio_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-config.component */ "./src/app/views/radio-config/radio-config.component.ts");
/* harmony import */ var _radio_configedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio-configedit.component */ "./src/app/views/radio-config/radio-configedit.component.ts");





var routes = [
    {
        path: '',
        data: {
            title: 'Pengaturan Radio City Guide 911 FM'
        },
        children: [
            {
                path: '',
                component: _radio_config_component__WEBPACK_IMPORTED_MODULE_3__["RadioConfigComponent"],
            },
            {
                path: 'radio-configedit',
                component: _radio_configedit_component__WEBPACK_IMPORTED_MODULE_4__["RadioConfigeditComponent"],
                data: {
                    title: 'Ubah Pengaturan Radio'
                }
            },
        ]
    }
];
var RadioConfigRoutingModule = /** @class */ (function () {
    function RadioConfigRoutingModule() {
    }
    RadioConfigRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RadioConfigRoutingModule);
    return RadioConfigRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/radio-config/radio-config.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/radio-config/radio-config.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JhZGlvLWNvbmZpZy9yYWRpby1jb25maWcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/radio-config/radio-config.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/radio-config/radio-config.component.ts ***!
  \**************************************************************/
/*! exports provided: RadioConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioConfigComponent", function() { return RadioConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var RadioConfigComponent = /** @class */ (function () {
    function RadioConfigComponent(api, modalService, router) {
        this.api = api;
        this.modalService = modalService;
        this.router = router;
        this.data = [];
        this.dtOptions = {};
        // We use this trigger because fetching the list of persons can be quite long,
        // thus we ensure the data is fetched before rendering
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.message = '';
        this.deleteItem = 0;
    }
    RadioConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appstate$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
            var currentState = _this.router.getCurrentNavigation();
            return currentState.extras.state;
        }));
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5
        };
        this.api.provideData({
            type: 'getradioconfigadm'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.data = resp;
            console.log(_this.data);
            _this.dtTrigger.next();
        });
    };
    RadioConfigComponent.prototype.getData = function () {
        var _this = this;
        this.api.provideData({
            type: 'getradioconfigadm'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.data = resp;
            console.log(_this.data);
        });
    };
    RadioConfigComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    RadioConfigComponent.prototype.deleteProgram = function (item) {
        var _this = this;
        this.api.provideData({
            type: 'deleteprogramradioadm',
            program_id: item.program_id,
            program_flyer_ori: item.program_flyer_ori
        }, 'data-adm-api').subscribe(function (resp) {
            console.log(resp);
            _this.getData();
        });
    };
    RadioConfigComponent.prototype.openModal = function (template, item) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
        this.deleteItem = item;
    };
    RadioConfigComponent.prototype.confirm = function () {
        this.message = 'Confirmed!';
        this.deleteProgram(this.deleteItem);
        this.modalRef.hide();
    };
    RadioConfigComponent.prototype.decline = function () {
        this.message = 'Declined!';
        this.modalRef.hide();
    };
    RadioConfigComponent.prototype.editProgram = function (item) {
        var objToSend = item;
        this.router.navigate(['/radio-config/radio-configedit'], { state: { data: objToSend } });
    };
    RadioConfigComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    RadioConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-config',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./radio-config.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-config/radio-config.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./radio-config.component.css */ "./src/app/views/radio-config/radio-config.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RadioConfigComponent);
    return RadioConfigComponent;
}());



/***/ }),

/***/ "./src/app/views/radio-config/radio-config.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/radio-config/radio-config.module.ts ***!
  \***********************************************************/
/*! exports provided: RadioConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioConfigModule", function() { return RadioConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _radio_config_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-config-routing.module */ "./src/app/views/radio-config/radio-config-routing.module.ts");
/* harmony import */ var _radio_config_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio-config.component */ "./src/app/views/radio-config/radio-config.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _radio_configedit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio-configedit.component */ "./src/app/views/radio-config/radio-configedit.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var RadioConfigModule = /** @class */ (function () {
    function RadioConfigModule() {
    }
    RadioConfigModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_radio_config_component__WEBPACK_IMPORTED_MODULE_4__["RadioConfigComponent"], _radio_configedit_component__WEBPACK_IMPORTED_MODULE_6__["RadioConfigeditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _radio_config_routing_module__WEBPACK_IMPORTED_MODULE_3__["RadioConfigRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ]
        })
    ], RadioConfigModule);
    return RadioConfigModule;
}());



/***/ }),

/***/ "./src/app/views/radio-config/radio-configedit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/radio-config/radio-configedit.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JhZGlvLWNvbmZpZy9yYWRpby1jb25maWdlZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/radio-config/radio-configedit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/radio-config/radio-configedit.component.ts ***!
  \******************************************************************/
/*! exports provided: RadioConfigeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioConfigeditComponent", function() { return RadioConfigeditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RadioConfigeditComponent = /** @class */ (function () {
    function RadioConfigeditComponent(api, router) {
        this.api = api;
        this.router = router;
        this.data = {};
        this.isSuccessAlert = false;
        this.isDangerAlert = false;
        this.data = this.router.getCurrentNavigation().extras.state.data;
    }
    RadioConfigeditComponent.prototype.ngOnInit = function () {
    };
    RadioConfigeditComponent.prototype.saveProgram = function () {
        var _this = this;
        this.api.provideData({
            type: 'editradioconfigadm',
            config_value: this.data.config_value,
            config_id: this.data.config_id
        }, 'data-adm-api').subscribe(function (resp) {
            _this.isSuccessAlert = true;
            setTimeout(function () {
                _this.moveTo('radio-config');
            }, 2000);
        });
    };
    RadioConfigeditComponent.prototype.moveTo = function (url) {
        this.router.navigate(['/' + url]);
    };
    RadioConfigeditComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RadioConfigeditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-configedit',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./radio-configedit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-config/radio-configedit.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./radio-configedit.component.css */ "./src/app/views/radio-config/radio-configedit.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RadioConfigeditComponent);
    return RadioConfigeditComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-radio-config-radio-config-module.js.map