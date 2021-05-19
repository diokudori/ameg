(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-tv-tv-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tv/tv-add.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tv/tv-add.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"square-jelly-box\" [fullScreen] = \"true\"><p style=\"color: white\" > Sedang mengunggah file... </p></ngx-spinner>  \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Basic Form</strong> Elements\n        </div>\n        <div class=\"card-body\">\n           \n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Judul Video</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"tv_title\" type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Deskripsi Video</label>\n              <div class=\"col-md-9\">\n                <textarea [(ngModel)]=\"tv_desc\" class=\"form-control\" placeholder=\"\"></textarea>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">URL Video</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"tv_url\" type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Status Live</label>\n              <div class=\"col-md-9\">\n                <label class=\"switch switch-3d switch-primary\">\n\t\t            <input [(ngModel)]=\"tv_is_live\" type=\"checkbox\" class=\"switch-input\" checked>\n\t\t            <span class=\"switch-slider\"></span>\n\t\t          </label>\n              </div>\n            </div>\n            \n\t\t<br>\n\t\t\t\t<div role=\"alert\" class=\"alert alert-success\" *ngIf=\"isSuccessAlert\">\n\t\t\t\t\t<strong>Berhasil!</strong> Data telah tersimpan \n\t\t\t\t</div>\n\t\t\t\t<div role=\"alert\" *ngIf=\"isDangerAlert\" class=\"alert alert-danger\">\n\t\t\t\t\t<strong>Gagal!</strong> data tidak tersimpan \n\t\t\t\t</div>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"saveProgram()\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n        </div>\n      </div>\n    </div>\n   \n  </div><!--/.row-->\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tv/tv-edit.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tv/tv-edit.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"square-jelly-box\" [fullScreen] = \"true\"><p style=\"color: white\" > Sedang mengunggah file... </p></ngx-spinner>  \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Basic Form</strong> Elements\n        </div>\n        <div class=\"card-body\">\n           \n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Judul Video</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"data.tv_title\" type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Deskripsi Video</label>\n              <div class=\"col-md-9\">\n                <textarea [(ngModel)]=\"data.tv_desc\" class=\"form-control\" placeholder=\"\"></textarea>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">URL Video</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"data.tv_url\" type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Status Live</label>\n              <div class=\"col-md-9\">\n                <label class=\"switch switch-3d switch-primary\">\n\t\t            <input [(ngModel)]=\"data.tv_is_live\" type=\"checkbox\" class=\"switch-input\">\n\t\t            <span class=\"switch-slider\"></span>\n\t\t          </label>\n              </div>\n            </div>\n            \n\t\t<br>\n\t\t\t\t<div role=\"alert\" class=\"alert alert-success\" *ngIf=\"isSuccessAlert\">\n\t\t\t\t\t<strong>Berhasil!</strong> Data telah tersimpan \n\t\t\t\t</div>\n\t\t\t\t<div role=\"alert\" *ngIf=\"isDangerAlert\" class=\"alert alert-danger\">\n\t\t\t\t\t<strong>Gagal!</strong> data tidak tersimpan \n\t\t\t\t</div>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"saveProgram()\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n        </div>\n      </div>\n    </div>\n   \n  </div><!--/.row-->\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tv/tv.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tv/tv.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Simple Table\n        </div>\n        <div class=\"card-body\">\n          <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n\t\t\t<thead>\n\t\t\t  <tr>\n\t\t\t    <th style=\"width: 5%\">No.</th>\n\t\t\t    <th style=\"width: 25%\">Judul Video</th>\n\t\t\t    <th style=\"width: 20%\">Deskripsi</th>\n\t\t\t    <th style=\"width: 20%\">URL Youtube</th>\n\t\t\t    <th style=\"width: 5%\">Status Live</th>\n\t\t\t    <th style=\"width: 25%\">Aksi</th>\n\t\t\t  </tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t  <tr *ngFor=\"let d of data; let j = index\">\n\t\t\t    <td>{{ j+1 }}</td>\n\t\t\t    <td>{{ d.tv_title }}</td>\n\t\t\t    <td>{{ d.tv_desc }}</td>\n\t\t\t    <td>{{ d.tv_url }}</td>\n\t\t\t    <td>\n\t\t\t    \t<span *ngIf=\"d.tv_is_live==1\" class=\"badge badge-success\">Live</span>\n\t\t\t    \t<span *ngIf=\"d.tv_is_live==0\" class=\"badge badge-warning\">Recorded</span>\n\t\t\t    </td>\n\t\t\t    <td>\n\t\t\t    \t<button type=\"button\" class=\"btn btn-pill btn-primary\" (click)=\"editAnnouncer(d)\">\n\t\t\t    \t<i class=\"fa fa-pencil\"></i>&nbsp;Ubah</button>\n\t\t\t    \t<button type=\"button\" class=\"btn btn-pill btn-danger\" (click)=\"openModal(template,d)\">\n\t\t\t    \t\t<i class=\"fa fa-trash-o\"></i>&nbsp;Hapus</button>\n\t\t\t    </td>\n\t\t\t  </tr>\n\t\t\t</tbody>\n\t\t\t</table>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n<ng-template #template>\n  <div class=\"modal-body text-center\">\n    <p>Yakin untuk menghapus?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/views/tv/tv-add.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/tv/tv-add.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3R2L3R2LWFkZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/tv/tv-add.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/tv/tv-add.component.ts ***!
  \**********************************************/
/*! exports provided: TvAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvAddComponent", function() { return TvAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");





var TvAddComponent = /** @class */ (function () {
    function TvAddComponent(spinner, api, router) {
        this.spinner = spinner;
        this.api = api;
        this.router = router;
        this.tv_title = '';
        this.tv_desc = '';
        this.tv_url = '';
        this.tv_is_live = '';
        this.isSuccessAlert = false;
        this.isDangerAlert = false;
    }
    TvAddComponent.prototype.ngOnInit = function () {
    };
    TvAddComponent.prototype.saveProgram = function () {
        var _this = this;
        this.spinner.show();
        this.api.provideData({
            type: 'settv',
            tv_title: this.tv_title,
            tv_desc: this.tv_desc,
            tv_url: this.tv_url,
            tv_is_live: this.tv_is_live,
            param: 'create'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.isSuccessAlert = true;
            _this.spinner.hide();
            setTimeout(function () {
                _this.moveTo('tv');
            }, 2000);
        });
    };
    TvAddComponent.prototype.moveTo = function (url) {
        this.router.navigate(['/' + url]);
    };
    TvAddComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    TvAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tv-add',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tv-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tv/tv-add.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tv-add.component.css */ "./src/app/views/tv/tv-add.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TvAddComponent);
    return TvAddComponent;
}());



/***/ }),

/***/ "./src/app/views/tv/tv-edit.component.css":
/*!************************************************!*\
  !*** ./src/app/views/tv/tv-edit.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3R2L3R2LWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/tv/tv-edit.component.ts":
/*!***********************************************!*\
  !*** ./src/app/views/tv/tv-edit.component.ts ***!
  \***********************************************/
/*! exports provided: TvEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvEditComponent", function() { return TvEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");





var TvEditComponent = /** @class */ (function () {
    function TvEditComponent(spinner, api, router) {
        this.spinner = spinner;
        this.api = api;
        this.router = router;
        this.data = {};
        this.isSuccessAlert = false;
        this.isDangerAlert = false;
        this.data = this.router.getCurrentNavigation().extras.state.data;
        this.data.tv_is_live = (this.data.tv_is_live == '1') ? true : false;
    }
    TvEditComponent.prototype.ngOnInit = function () {
    };
    TvEditComponent.prototype.saveProgram = function () {
        var _this = this;
        this.spinner.show();
        this.api.provideData({
            type: 'settv',
            tv_title: this.data.tv_title,
            tv_desc: this.data.tv_desc,
            tv_url: this.data.tv_url,
            tv_is_live: this.data.tv_is_live,
            tv_id: this.data.tv_id,
            param: 'update'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.isSuccessAlert = true;
            _this.spinner.hide();
            setTimeout(function () {
                _this.moveTo('tv');
            }, 2000);
        });
    };
    TvEditComponent.prototype.moveTo = function (url) {
        this.router.navigate(['/' + url]);
    };
    TvEditComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    TvEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tv-edit',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tv-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tv/tv-edit.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tv-edit.component.css */ "./src/app/views/tv/tv-edit.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TvEditComponent);
    return TvEditComponent;
}());



/***/ }),

/***/ "./src/app/views/tv/tv-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/tv/tv-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TvRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvRoutingModule", function() { return TvRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tv.component */ "./src/app/views/tv/tv.component.ts");
/* harmony import */ var _tv_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tv-add.component */ "./src/app/views/tv/tv-add.component.ts");
/* harmony import */ var _tv_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tv-edit.component */ "./src/app/views/tv/tv-edit.component.ts");






var routes = [
    {
        path: '',
        data: {
            title: 'Daftar data video AMEG TV'
        },
        children: [
            {
                path: '',
                component: _tv_component__WEBPACK_IMPORTED_MODULE_3__["TvComponent"],
            },
            {
                path: 'tv-add',
                component: _tv_add_component__WEBPACK_IMPORTED_MODULE_4__["TvAddComponent"],
                data: {
                    title: 'Tambah data video AMEG TV'
                }
            },
            {
                path: 'tv-edit',
                component: _tv_edit_component__WEBPACK_IMPORTED_MODULE_5__["TvEditComponent"],
                data: {
                    title: 'Ubah data video AMEG TV'
                }
            }
        ]
    }
];
var TvRoutingModule = /** @class */ (function () {
    function TvRoutingModule() {
    }
    TvRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TvRoutingModule);
    return TvRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/tv/tv.component.css":
/*!*******************************************!*\
  !*** ./src/app/views/tv/tv.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3R2L3R2LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/tv/tv.component.ts":
/*!******************************************!*\
  !*** ./src/app/views/tv/tv.component.ts ***!
  \******************************************/
/*! exports provided: TvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvComponent", function() { return TvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var TvComponent = /** @class */ (function () {
    function TvComponent(api, modalService, router) {
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
    TvComponent.prototype.ngOnInit = function () {
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
            type: 'gettv'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.data = resp;
            console.log(_this.data);
            _this.dtTrigger.next();
        });
    };
    TvComponent.prototype.getData = function () {
        var _this = this;
        this.api.provideData({
            type: 'gettv'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.data = resp;
            console.log(_this.data);
        });
    };
    TvComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    TvComponent.prototype.deleteAnnouncer = function (item) {
        var _this = this;
        this.api.provideData({
            type: 'deletetv',
            tv_id: item.tv_id
        }, 'data-adm-api').subscribe(function (resp) {
            console.log(resp);
            _this.getData();
        });
    };
    TvComponent.prototype.openModal = function (template, item) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
        this.deleteItem = item;
    };
    TvComponent.prototype.confirm = function () {
        this.message = 'Confirmed!';
        this.deleteAnnouncer(this.deleteItem);
        this.modalRef.hide();
    };
    TvComponent.prototype.decline = function () {
        this.message = 'Declined!';
        this.modalRef.hide();
    };
    TvComponent.prototype.editAnnouncer = function (item) {
        var objToSend = item;
        this.router.navigate(['/tv/tv-edit'], { state: { data: objToSend } });
    };
    TvComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    TvComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tv',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tv/tv.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tv.component.css */ "./src/app/views/tv/tv.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TvComponent);
    return TvComponent;
}());



/***/ }),

/***/ "./src/app/views/tv/tv.module.ts":
/*!***************************************!*\
  !*** ./src/app/views/tv/tv.module.ts ***!
  \***************************************/
/*! exports provided: TvModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvModule", function() { return TvModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tv_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tv-routing.module */ "./src/app/views/tv/tv-routing.module.ts");
/* harmony import */ var _tv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tv.component */ "./src/app/views/tv/tv.component.ts");
/* harmony import */ var _tv_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tv-add.component */ "./src/app/views/tv/tv-add.component.ts");
/* harmony import */ var _tv_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tv-edit.component */ "./src/app/views/tv/tv-edit.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var TvModule = /** @class */ (function () {
    function TvModule() {
    }
    TvModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tv_component__WEBPACK_IMPORTED_MODULE_4__["TvComponent"], _tv_add_component__WEBPACK_IMPORTED_MODULE_5__["TvAddComponent"], _tv_edit_component__WEBPACK_IMPORTED_MODULE_6__["TvEditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _tv_routing_module__WEBPACK_IMPORTED_MODULE_3__["TvRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ]
        })
    ], TvModule);
    return TvModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-tv-tv-module.js.map