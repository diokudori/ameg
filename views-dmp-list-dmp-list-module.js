(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dmp-list-dmp-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dmp-list/dmp-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/dmp-list/dmp-list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Simple Table\n        </div>\n        <div class=\"card-body\">\n          <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n\t\t\t<thead>\n\t\t\t  <tr>\n\t\t\t    <th style=\"width: 5%\">No.</th>\n\t\t\t    <th style=\"width: 40%\">Nama Rilis</th>\n\t\t\t    <th style=\"width: 25%\">Gambar Cover</th>\n\t\t\t    <th style=\"width: 30%\">Aksi</th>\n\t\t\t  </tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t  <tr *ngFor=\"let d of data; let j = index\">\n\t\t\t    <td>{{ j+1 }}</td>\n\t\t\t    <td>{{ d.disway_name }}</td>\n\t\t\t    <td><img [src]=\"d.disway_banner\" style=\"width: 50%\"></td>\n\t\t\t    <td>\n\t\t\t    \t<button type=\"button\" class=\"btn btn-pill btn-primary\" (click)=\"editDisway(d)\">\n\t\t\t    \t<i class=\"fa fa-pencil\"></i>&nbsp;Ubah</button>\n\t\t\t    \t<button type=\"button\" (click)=\"openModal(template, d.disway_id)\" class=\"btn btn-pill btn-danger\">\n\t\t\t    \t\t<i class=\"fa fa-trash-o\"></i>&nbsp;Hapus</button>\n\t\t\t    </td>\n\t\t\t  </tr>\n\t\t\t</tbody>\n\t\t\t</table>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n<ng-template #template>\n  <div class=\"modal-body text-center\">\n    <p>Yakin untuk menghapus?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/views/dmp-list/dmp-list-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/dmp-list/dmp-list-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DmpListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmpListRoutingModule", function() { return DmpListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dmp_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dmp-list.component */ "./src/app/views/dmp-list/dmp-list.component.ts");




var routes = [
    {
        path: '',
        component: _dmp_list_component__WEBPACK_IMPORTED_MODULE_3__["DmpListComponent"],
        data: {
            title: 'Daftar Disway Malang Post'
        }
    }
];
var DmpListRoutingModule = /** @class */ (function () {
    function DmpListRoutingModule() {
    }
    DmpListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DmpListRoutingModule);
    return DmpListRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/dmp-list/dmp-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/dmp-list/dmp-list.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2RtcC1saXN0L2RtcC1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/dmp-list/dmp-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/dmp-list/dmp-list.component.ts ***!
  \******************************************************/
/*! exports provided: DmpListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmpListComponent", function() { return DmpListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var DmpListComponent = /** @class */ (function () {
    function DmpListComponent(api, modalService, router) {
        this.api = api;
        this.modalService = modalService;
        this.router = router;
        this.data = [];
        this.dtOptions = {};
        // We use this trigger because fetching the list of persons can be quite long,
        // thus we ensure the data is fetched before rendering
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.message = '';
        this.deleteId = 0;
    }
    DmpListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5
        };
        this.api.provideData({
            type: 'getlistdisway'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.data = resp;
            console.log(_this.data);
            _this.dtTrigger.next();
        });
    };
    DmpListComponent.prototype.getData = function () {
        var _this = this;
        this.data = [];
        this.api.provideData({
            type: 'getlistdisway'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.data = resp;
            console.log(_this.data);
        });
    };
    DmpListComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    DmpListComponent.prototype.openModal = function (template, id) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
        this.deleteId = id;
    };
    DmpListComponent.prototype.deleteDisway = function () {
        var _this = this;
        this.api.provideData({
            type: 'deletedisway',
            disway_id: this.deleteId
        }, 'data-adm-api').subscribe(function (resp) {
            _this.getData();
        });
    };
    DmpListComponent.prototype.confirm = function () {
        this.deleteDisway();
        this.message = 'Confirmed!';
        this.modalRef.hide();
    };
    DmpListComponent.prototype.decline = function () {
        this.message = 'Declined!';
        this.modalRef.hide();
    };
    DmpListComponent.prototype.editDisway = function (item) {
        this.router.navigate(['/dmp-edit'], { state: { data: item } });
    };
    DmpListComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    DmpListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dmp-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dmp-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dmp-list/dmp-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dmp-list.component.css */ "./src/app/views/dmp-list/dmp-list.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], DmpListComponent);
    return DmpListComponent;
}());



/***/ }),

/***/ "./src/app/views/dmp-list/dmp-list.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/dmp-list/dmp-list.module.ts ***!
  \***************************************************/
/*! exports provided: DmpListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmpListModule", function() { return DmpListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm5/ngx-bootstrap-buttons.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _dmp_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dmp-list.component */ "./src/app/views/dmp-list/dmp-list.component.ts");
/* harmony import */ var _dmp_list_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dmp-list-routing.module */ "./src/app/views/dmp-list/dmp-list-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");











var DmpListModule = /** @class */ (function () {
    function DmpListModule() {
    }
    DmpListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dmp_list_routing_module__WEBPACK_IMPORTED_MODULE_9__["DmpListRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"].forRoot(),
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"]
            ],
            declarations: [_dmp_list_component__WEBPACK_IMPORTED_MODULE_8__["DmpListComponent"]]
        })
    ], DmpListModule);
    return DmpListModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-dmp-list-dmp-list-module.js.map