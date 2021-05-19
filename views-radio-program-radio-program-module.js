(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-radio-program-radio-program-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-program/radio-program.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-program/radio-program.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Simple Table\n        </div>\n        <div class=\"card-body\">\n          <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n\t\t\t<thead>\n\t\t\t  <tr>\n\t\t\t    <th style=\"width: 5%\">No.</th>\n\t\t\t    <th style=\"width: 15%\">Nama Program</th>\n\t\t\t    <th style=\"width: 10%\">Hari Tayang</th>\n\t\t\t    <th style=\"width: 10%\">Waktu Tayang</th>\n\t\t\t    <th style=\"width: 20%\">Penyiar</th>\n\t\t\t    <th style=\"width: 10%\">Flyer Program</th>\n\t\t\t    <th style=\"width: 25%\">Aksi</th>\n\t\t\t  </tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t  <tr *ngFor=\"let d of data; let j = index\">\n\t\t\t    <td>{{ j+1 }}</td>\n\t\t\t    <td>{{ d.program_title }} <span *ngIf=\"d.program_is_special==1\" class=\"badge badge-success\">Spesial</span></td>\n\t\t\t    <td> \n\t\t\t    \t<span *ngFor=\"let pd of d.program_day\" class=\"badge badge-warning\">\n\t\t\t    \t\t{{pd.day_name}}\n\t\t\t    \t</span>\n\t\t\t    </td>\n\t\t\t    <td>{{ d.program_start_time }} - {{ d.program_end_time }}</td>\n\t\t\t    <td>{{ d.program_title }}</td>\n\t\t\t    <td><img [src]=\"d.program_flyer\" style=\"width: 100%\"></td>\n\t\t\t    <td>\n\t\t\t    \t<button type=\"button\" class=\"btn btn-pill btn-primary\" (click)=\"editProgram(d)\">\n\t\t\t    \t<i class=\"fa fa-pencil\"></i>&nbsp;Ubah</button>\n\t\t\t    \t<button type=\"button\" class=\"btn btn-pill btn-danger\" (click)=\"openModal(template,d)\">\n\t\t\t    \t\t<i class=\"fa fa-trash-o\"></i>&nbsp;Hapus</button>\n\t\t\t    </td>\n\t\t\t  </tr>\n\t\t\t</tbody>\n\t\t\t</table>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n<ng-template #template>\n  <div class=\"modal-body text-center\">\n    <p>Yakin untuk menghapus?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/views/radio-program/radio-program-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/radio-program/radio-program-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RadioProgramRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioProgramRoutingModule", function() { return RadioProgramRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _radio_program_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-program.component */ "./src/app/views/radio-program/radio-program.component.ts");




var routes = [
    {
        path: '',
        component: _radio_program_component__WEBPACK_IMPORTED_MODULE_3__["RadioProgramComponent"],
        data: {
            title: 'Daftar Program Radio City Guide 911 FM'
        }
    }
];
var RadioProgramRoutingModule = /** @class */ (function () {
    function RadioProgramRoutingModule() {
    }
    RadioProgramRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RadioProgramRoutingModule);
    return RadioProgramRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/radio-program/radio-program.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/radio-program/radio-program.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JhZGlvLXByb2dyYW0vcmFkaW8tcHJvZ3JhbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/radio-program/radio-program.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/radio-program/radio-program.component.ts ***!
  \****************************************************************/
/*! exports provided: RadioProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioProgramComponent", function() { return RadioProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var RadioProgramComponent = /** @class */ (function () {
    function RadioProgramComponent(api, modalService, router) {
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
    RadioProgramComponent.prototype.ngOnInit = function () {
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
            type: 'getprogramradioadm'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.data = resp;
            console.log(_this.data);
            _this.dtTrigger.next();
        });
    };
    RadioProgramComponent.prototype.getData = function () {
        var _this = this;
        this.api.provideData({
            type: 'getprogramradioadm'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.data = resp;
            console.log(_this.data);
        });
    };
    RadioProgramComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    RadioProgramComponent.prototype.deleteProgram = function (item) {
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
    RadioProgramComponent.prototype.openModal = function (template, item) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
        this.deleteItem = item;
    };
    RadioProgramComponent.prototype.confirm = function () {
        this.message = 'Confirmed!';
        this.deleteProgram(this.deleteItem);
        this.modalRef.hide();
    };
    RadioProgramComponent.prototype.decline = function () {
        this.message = 'Declined!';
        this.modalRef.hide();
    };
    RadioProgramComponent.prototype.editProgram = function (item) {
        var objToSend = item;
        this.router.navigate(['/radio-programedit'], { state: { data: objToSend } });
    };
    RadioProgramComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    RadioProgramComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-program',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./radio-program.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-program/radio-program.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./radio-program.component.css */ "./src/app/views/radio-program/radio-program.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RadioProgramComponent);
    return RadioProgramComponent;
}());



/***/ }),

/***/ "./src/app/views/radio-program/radio-program.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/radio-program/radio-program.module.ts ***!
  \*************************************************************/
/*! exports provided: RadioProgramModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioProgramModule", function() { return RadioProgramModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _radio_program_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-program-routing.module */ "./src/app/views/radio-program/radio-program-routing.module.ts");
/* harmony import */ var _radio_program_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio-program.component */ "./src/app/views/radio-program/radio-program.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");






var RadioProgramModule = /** @class */ (function () {
    function RadioProgramModule() {
    }
    RadioProgramModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_radio_program_component__WEBPACK_IMPORTED_MODULE_4__["RadioProgramComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _radio_program_routing_module__WEBPACK_IMPORTED_MODULE_3__["RadioProgramRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"]
            ]
        })
    ], RadioProgramModule);
    return RadioProgramModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-radio-program-radio-program-module.js.map