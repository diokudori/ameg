(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-app-bannerradio-app-banner-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-bannerradio/app-banner.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-bannerradio/app-banner.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Simple Table\n        </div>\n        <div class=\"card-body\">\n          <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n\t\t\t<thead>\n\t\t\t  <tr>\n\t\t\t    <th style=\"width: 5%\">No.</th>\n\t\t\t    <th style=\"width: 10%\">Nama Banner</th>\n\t\t\t    <th style=\"width: 5%\">Tempat Banner</th>\n\t\t\t    <th style=\"width: 15%\">Link Banner</th>\n\t\t\t    <th style=\"width: 5%\">Link Internal</th>\n\t\t\t    <th style=\"width: 15%\">Gambar Banner</th>\n\t\t\t    <th style=\"width: 15%\">Tanggal Mulai</th>\n\t\t\t    <th style=\"width: 15%\">Tanggal Berakhir</th>\n\t\t\t    <th style=\"width: 15%\">Aksi</th>\n\t\t\t  </tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t  <tr *ngFor=\"let d of data; let j = index\">\n\t\t\t    <td>{{ j+1 }}</td>\n\t\t\t    <td>{{ d.banner_name }}</td>\n\t\t\t    <td>{{ d.banner_place }}</td>\n\t\t\t    <td>{{ d.banner_link }}</td>\n\t\t\t    <td>{{ (d.banner_is_page=='1')?'Ya':'Tidak' }}</td>\n\t\t\t    <td><img [src]=\"d.banner_img\" style=\"width: 100%\"></td>\n\t\t\t    <td>{{d.banner_start_date_format}}</td>\n\t\t\t    <td>{{d.banner_end_date_format}}</td>\n\t\t\t    <td>\n\t\t\t    \t<button type=\"button\" class=\"btn btn-pill btn-primary\" (click)=\"editBanner(d)\">\n\t\t\t    \t<i class=\"fa fa-pencil\"></i>&nbsp;Ubah</button>\n\t\t\t    \t<button type=\"button\" class=\"btn btn-pill btn-danger\" (click)=\"openModal(template,d)\">\n\t\t\t    \t\t<i class=\"fa fa-trash-o\"></i>&nbsp;Hapus</button>\n\t\t\t    </td>\n\t\t\t  </tr>\n\t\t\t</tbody>\n\t\t\t</table>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n<ng-template #template>\n  <div class=\"modal-body text-center\">\n    <p>Yakin untuk menghapus?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-bannerradio/app-banneradd.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-bannerradio/app-banneradd.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"square-jelly-box\" [fullScreen] = \"true\"><p style=\"color: white\" > Sedang mengunggah file... </p></ngx-spinner>  \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Basic Form</strong> Elements\n        </div>\n        <div class=\"card-body\">\n           \n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Nama Banner</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"banner_name\" type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Tipe Banner</label>\n              <div class=\"col-md-9\">\n                <select class=\"form-control\" [(ngModel)]=\"banner_type\">\n                <option value=\"slide\">Slide</option>\n                <option value=\"xbanner\">X Banner</option>\n              </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Link internal</label>\n              <div class=\"col-md-9\">\n                <label class=\"switch switch-3d switch-primary\">\n\t\t            <input [(ngModel)]=\"banner_is_page\" type=\"checkbox\" class=\"switch-input\">\n\t\t            <span class=\"switch-slider\"></span>\n\t\t          </label>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Link Banner</label>\n              <div class=\"col-md-9\">\n                <textarea [(ngModel)]=\"banner_link\" class=\"form-control\" placeholder=\"\"></textarea>\n              </div>\n            </div>\n            \n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Tanggal Mulai</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"banner_start_date\" type=\"date\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Tanggal Berakhir</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"banner_end_date\" type=\"date\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-input\">Gambar Banner (JPG)</label>\n              \n            </div>\n            <ngx-dropzone (change)=\"onSelect($event, 'banner')\" [multiple]=\"false\">\n\t\t\t    <ngx-dropzone-label>Drop it, baby!</ngx-dropzone-label>\n\t\t\t    <ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of banner\" [file]=\"f\" [removable]=\"true\" (removed)=\"onRemove(f, 'banner')\">\n\t\t\t\t</ngx-dropzone-image-preview>\n\t\t\t</ngx-dropzone>\n            \n\t\t<br>\n\t\t\t\t<div role=\"alert\" class=\"alert alert-success\" *ngIf=\"isSuccessAlert\">\n\t\t\t\t\t<strong>Berhasil!</strong> Data telah tersimpan \n\t\t\t\t</div>\n\t\t\t\t<div role=\"alert\" *ngIf=\"isDangerAlert\" class=\"alert alert-danger\">\n\t\t\t\t\t<strong>Gagal!</strong> data tidak tersimpan \n\t\t\t\t</div>\n        </div>\n        <div class=\"card-footer\">\n          <button [disabled]=\"banner.length==0\" type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"saveProgram()\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n        </div>\n      </div>\n    </div>\n   \n  </div><!--/.row-->\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-bannerradio/app-banneredit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-bannerradio/app-banneredit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"square-jelly-box\" [fullScreen] = \"true\"><p style=\"color: white\" > Sedang mengunggah file... </p></ngx-spinner>  \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Basic Form</strong> Elements\n        </div>\n        <div class=\"card-body\">\n           \n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Nama Banner</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"data.banner_name\" type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Tipe Banner</label>\n              <div class=\"col-md-9\">\n                <select class=\"form-control\" [(ngModel)]=\"data.banner_type\">\n                <option value=\"slide\">Slide</option>\n                <option value=\"xbanner\">X Banner</option>\n              </select>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Link internal</label>\n              <div class=\"col-md-9\">\n                <label class=\"switch switch-3d switch-primary\">\n\t\t            <input [(ngModel)]=\"data.banner_is_page\" type=\"checkbox\" class=\"switch-input\">\n\t\t            <span class=\"switch-slider\"></span>\n\t\t          </label>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Link Banner</label>\n              <div class=\"col-md-9\">\n                <textarea [(ngModel)]=\"data.banner_link\" class=\"form-control\" placeholder=\"\"></textarea>\n              </div>\n            </div>\n            \n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Tanggal Mulai</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"data.banner_start_date\" type=\"date\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Tanggal Berakhir</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"data.banner_end_date\" type=\"date\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-input\">Gambar Banner (JPG)</label>\n              <img [src]=\"data.banner_img\" style=\"width: 50%\">\n            </div>\n            <ngx-dropzone (change)=\"onSelect($event, 'banner')\" [multiple]=\"false\">\n\t\t\t    <ngx-dropzone-label>Drop it, baby!</ngx-dropzone-label>\n\t\t\t    <ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of banner\" [file]=\"f\" [removable]=\"true\" (removed)=\"onRemove(f, 'banner')\">\n\t\t\t\t</ngx-dropzone-image-preview>\n\t\t\t</ngx-dropzone>\n            \n\t\t<br>\n\t\t\t\t<div role=\"alert\" class=\"alert alert-success\" *ngIf=\"isSuccessAlert\">\n\t\t\t\t\t<strong>Berhasil!</strong> Data telah tersimpan \n\t\t\t\t</div>\n\t\t\t\t<div role=\"alert\" *ngIf=\"isDangerAlert\" class=\"alert alert-danger\">\n\t\t\t\t\t<strong>Gagal!</strong> data tidak tersimpan \n\t\t\t\t</div>\n        </div>\n        <div class=\"card-footer\">\n          <button [disabled]=\"isBtnDisabled\" type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"saveProgram()\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n        </div>\n      </div>\n    </div>\n   \n  </div><!--/.row-->\n  \n</div>\n");

/***/ }),

/***/ "./src/app/views/app-bannerradio/app-banner-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/app-bannerradio/app-banner-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: AppBannerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBannerRoutingModule", function() { return AppBannerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-banner.component */ "./src/app/views/app-bannerradio/app-banner.component.ts");
/* harmony import */ var _app_banneradd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-banneradd.component */ "./src/app/views/app-bannerradio/app-banneradd.component.ts");
/* harmony import */ var _app_banneredit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-banneredit.component */ "./src/app/views/app-bannerradio/app-banneredit.component.ts");






var routes = [
    {
        path: '',
        data: {
            title: 'Daftar banner'
        },
        children: [
            {
                path: '',
                component: _app_banner_component__WEBPACK_IMPORTED_MODULE_3__["AppBannerComponent"],
            },
            {
                path: 'app-banneradd',
                component: _app_banneradd_component__WEBPACK_IMPORTED_MODULE_4__["AppBanneraddComponent"],
                data: {
                    title: 'Tambah banner'
                }
            },
            {
                path: 'app-banneredit',
                component: _app_banneredit_component__WEBPACK_IMPORTED_MODULE_5__["AppBannereditComponent"],
                data: {
                    title: 'Ubah banner'
                }
            }
        ]
    }
];
var AppBannerRoutingModule = /** @class */ (function () {
    function AppBannerRoutingModule() {
    }
    AppBannerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppBannerRoutingModule);
    return AppBannerRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/app-bannerradio/app-banner.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/app-bannerradio/app-banner.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FwcC1iYW5uZXJyYWRpby9hcHAtYmFubmVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/app-bannerradio/app-banner.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/app-bannerradio/app-banner.component.ts ***!
  \***************************************************************/
/*! exports provided: AppBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBannerComponent", function() { return AppBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var AppBannerComponent = /** @class */ (function () {
    function AppBannerComponent(api, modalService, router) {
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
    AppBannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appstate$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () {
            var currentState = _this.router.getCurrentNavigation();
            return currentState.extras.state;
        }));
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            scrollX: true
        };
        this.api.provideData({
            type: 'getbanneradm',
            banner_place: 'radio'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.data = resp;
            console.log(_this.data);
            _this.dtTrigger.next();
        });
    };
    AppBannerComponent.prototype.getData = function () {
        var _this = this;
        this.api.provideData({
            type: 'getbanneradm',
            banner_place: 'radio'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.data = resp;
            console.log(_this.data);
        });
    };
    AppBannerComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    AppBannerComponent.prototype.deleteBanner = function (item) {
        var _this = this;
        this.api.provideData({
            type: 'deletebanneradm',
            banner_id: item.banner_id
        }, 'data-adm-api').subscribe(function (resp) {
            console.log(resp);
            _this.getData();
        });
    };
    AppBannerComponent.prototype.openModal = function (template, item) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
        this.deleteItem = item;
    };
    AppBannerComponent.prototype.confirm = function () {
        this.message = 'Confirmed!';
        this.deleteBanner(this.deleteItem);
        this.modalRef.hide();
    };
    AppBannerComponent.prototype.decline = function () {
        this.message = 'Declined!';
        this.modalRef.hide();
    };
    AppBannerComponent.prototype.editBanner = function (item) {
        var objToSend = item;
        this.router.navigate(['/app-bannerradio/app-banneredit'], { state: { data: objToSend } });
    };
    AppBannerComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AppBannerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-banner',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app-banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-bannerradio/app-banner.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app-banner.component.css */ "./src/app/views/app-bannerradio/app-banner.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AppBannerComponent);
    return AppBannerComponent;
}());



/***/ }),

/***/ "./src/app/views/app-bannerradio/app-banner.module.ts":
/*!************************************************************!*\
  !*** ./src/app/views/app-bannerradio/app-banner.module.ts ***!
  \************************************************************/
/*! exports provided: AppBannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBannerModule", function() { return AppBannerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_banner_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-banner-routing.module */ "./src/app/views/app-bannerradio/app-banner-routing.module.ts");
/* harmony import */ var _app_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-banner.component */ "./src/app/views/app-bannerradio/app-banner.component.ts");
/* harmony import */ var _app_banneradd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-banneradd.component */ "./src/app/views/app-bannerradio/app-banneradd.component.ts");
/* harmony import */ var _app_banneredit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-banneredit.component */ "./src/app/views/app-bannerradio/app-banneredit.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm5/ngx-dropzone.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");











var AppBannerModule = /** @class */ (function () {
    function AppBannerModule() {
    }
    AppBannerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_banner_component__WEBPACK_IMPORTED_MODULE_4__["AppBannerComponent"], _app_banneradd_component__WEBPACK_IMPORTED_MODULE_5__["AppBanneraddComponent"], _app_banneredit_component__WEBPACK_IMPORTED_MODULE_6__["AppBannereditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_banner_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppBannerRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_dropzone__WEBPACK_IMPORTED_MODULE_9__["NgxDropzoneModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTablesModule"]
            ]
        })
    ], AppBannerModule);
    return AppBannerModule;
}());



/***/ }),

/***/ "./src/app/views/app-bannerradio/app-banneradd.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/app-bannerradio/app-banneradd.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FwcC1iYW5uZXJyYWRpby9hcHAtYmFubmVyYWRkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/app-bannerradio/app-banneradd.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/app-bannerradio/app-banneradd.component.ts ***!
  \******************************************************************/
/*! exports provided: AppBanneraddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBanneraddComponent", function() { return AppBanneraddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AppBanneraddComponent = /** @class */ (function () {
    function AppBanneraddComponent(api, http, spinner, router) {
        this.api = api;
        this.http = http;
        this.spinner = spinner;
        this.router = router;
        this.banner = [];
        this.files = [];
        this.itemBanner = null;
        this.itemFiles = null;
        this.isSuccessAlert = false;
        this.isDangerAlert = false;
        this.banner_name = '';
        this.banner_place = 'radio';
        this.banner_type = 'slide';
        this.banner_link = '';
        this.banner_is_page = false;
        this.banner_start_date = '';
        this.banner_end_date = '';
    }
    AppBanneraddComponent.prototype.ngOnInit = function () {
    };
    AppBanneraddComponent.prototype.onSelect = function (event, type) {
        var _a, _b;
        if (type == 'files') {
            // console.log(event);
            (_a = this.files).push.apply(_a, event.addedFiles);
            console.log(this.files);
            this.itemFiles = this.files[0];
        }
        else if (type == 'banner') {
            console.log(event);
            (_b = this.banner).push.apply(_b, event.addedFiles);
            this.itemBanner = this.banner[0];
            // const formData = new FormData();
            //    for (var i = 0; i < this.banner.length; i++) { 
            //      formData.append("banner[]", this.banner[i]);
            //    }
            //    formData.append("param", "banner");
            //    this.http.post(this.api.uploadUrl+'upload.php', formData)
            //    .subscribe(res => {
            //       console.log(res);
            //       alert('Uploaded Successfully.');
            //    })
        }
    };
    AppBanneraddComponent.prototype.onRemove = function (event, type) {
        if (type == 'files') {
            console.log(event);
            this.files.splice(this.files.indexOf(event), 1);
        }
        else if (type == 'banner') {
            console.log(event);
            this.banner.splice(this.banner.indexOf(event), 1);
        }
    };
    AppBanneraddComponent.prototype.saveProgram = function () {
        var _this = this;
        this.spinner.show();
        var fd = new FormData();
        fd.append('param', 'create');
        fd.append('banner_name', this.banner_name);
        fd.append('banner_link', this.banner_link);
        fd.append('banner_is_page', this.banner_is_page);
        fd.append('banner_place', this.banner_place);
        fd.append('banner_type', this.banner_type);
        fd.append('banner_start_date', this.banner_start_date);
        fd.append('banner_end_date', this.banner_end_date);
        fd.append('banner[]', this.itemBanner);
        this.http.post(this.api.uploadUrl + 'upload-banner.php', fd)
            .subscribe(function (res) {
            _this.spinner.hide();
            console.log(res);
            _this.isSuccessAlert = true;
            _this.banner_name = '';
            _this.banner_place = '';
            _this.banner_link = '';
            _this.banner_is_page = false;
            _this.banner_start_date = '';
            _this.banner_end_date = '';
            _this.banner = [];
            setTimeout(function () {
                _this.isSuccessAlert = false;
            }, 3000);
            // alert('Uploaded Successfully.');
        });
    };
    AppBanneraddComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AppBanneraddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-banneradd',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app-banneradd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-bannerradio/app-banneradd.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app-banneradd.component.css */ "./src/app/views/app-bannerradio/app-banneradd.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AppBanneraddComponent);
    return AppBanneraddComponent;
}());



/***/ }),

/***/ "./src/app/views/app-bannerradio/app-banneredit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/app-bannerradio/app-banneredit.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FwcC1iYW5uZXJyYWRpby9hcHAtYmFubmVyZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/app-bannerradio/app-banneredit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/app-bannerradio/app-banneredit.component.ts ***!
  \*******************************************************************/
/*! exports provided: AppBannereditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBannereditComponent", function() { return AppBannereditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AppBannereditComponent = /** @class */ (function () {
    function AppBannereditComponent(api, http, spinner, router) {
        this.api = api;
        this.http = http;
        this.spinner = spinner;
        this.router = router;
        this.banner = [];
        this.files = [];
        this.itemBanner = null;
        this.itemFiles = null;
        this.isSuccessAlert = false;
        this.isDangerAlert = false;
        this.isBtnDisabled = false;
        this.data = {};
        this.data = this.router.getCurrentNavigation().extras.state.data;
        this.data.banner_is_page = (this.data.banner_is_page == 1) ? true : false;
        console.log(this.data);
    }
    AppBannereditComponent.prototype.ngOnInit = function () {
    };
    AppBannereditComponent.prototype.onSelect = function (event, type) {
        var _a, _b;
        if (type == 'files') {
            // console.log(event);
            (_a = this.files).push.apply(_a, event.addedFiles);
            console.log(this.files);
            this.itemFiles = this.files[0];
        }
        else if (type == 'banner') {
            console.log(event);
            (_b = this.banner).push.apply(_b, event.addedFiles);
            this.itemBanner = this.banner[0];
            // const formData = new FormData();
            //    for (var i = 0; i < this.banner.length; i++) { 
            //      formData.append("banner[]", this.banner[i]);
            //    }
            //    formData.append("param", "banner");
            //    this.http.post(this.api.uploadUrl+'upload.php', formData)
            //    .subscribe(res => {
            //       console.log(res);
            //       alert('Uploaded Successfully.');
            //    })
        }
    };
    AppBannereditComponent.prototype.onRemove = function (event, type) {
        if (type == 'files') {
            console.log(event);
            this.files.splice(this.files.indexOf(event), 1);
        }
        else if (type == 'banner') {
            console.log(event);
            this.banner.splice(this.banner.indexOf(event), 1);
        }
    };
    AppBannereditComponent.prototype.saveProgram = function () {
        var _this = this;
        this.spinner.show();
        var fd = new FormData();
        fd.append('param', 'update');
        fd.append('banner_id', this.data.banner_id);
        fd.append('banner_name', this.data.banner_name);
        fd.append('banner_link', this.data.banner_link);
        fd.append('banner_is_page', this.data.banner_is_page);
        fd.append('banner_place', this.data.banner_place);
        fd.append('banner_start_date', this.data.banner_start_date);
        fd.append('banner_end_date', this.data.banner_end_date);
        fd.append('banner[]', this.itemBanner);
        this.http.post(this.api.uploadUrl + 'upload-banner.php', fd)
            .subscribe(function (res) {
            _this.spinner.hide();
            console.log(res);
            _this.isSuccessAlert = true;
            _this.isBtnDisabled = true;
            setTimeout(function () {
                _this.isSuccessAlert = false;
                _this.moveTo('app-banner');
            }, 3000);
            // alert('Uploaded Successfully.');
        });
    };
    AppBannereditComponent.prototype.moveTo = function (url) {
        this.router.navigate(['/' + url]);
    };
    AppBannereditComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AppBannereditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-banneredit',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app-banneredit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/app-bannerradio/app-banneredit.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app-banneredit.component.css */ "./src/app/views/app-bannerradio/app-banneredit.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AppBannereditComponent);
    return AppBannereditComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-app-bannerradio-app-banner-module.js.map