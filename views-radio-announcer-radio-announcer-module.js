(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-radio-announcer-radio-announcer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-announcer/radio-announcer.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-announcer/radio-announcer.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>radio-announcer works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-announcer/radio-announceradd.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-announcer/radio-announceradd.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"square-jelly-box\" [fullScreen] = \"true\"><p style=\"color: white\" > Sedang mengunggah file... </p></ngx-spinner>  \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Basic Form</strong> Elements\n        </div>\n        <div class=\"card-body\">\n           \n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Nama Penyiar</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"announcer_name\" type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Sosial Media Penyiar</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"announcer_sosmed\" type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-input\">Foto Penyiar (JPG)</label>\n              \n            </div>\n            <ngx-dropzone (change)=\"onSelect($event, 'banner')\" [multiple]=\"false\">\n\t\t\t    <ngx-dropzone-label>Drop it, baby!</ngx-dropzone-label>\n\t\t\t    <ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of banner\" [file]=\"f\" [removable]=\"true\" (removed)=\"onRemove(f, 'banner')\">\n\t\t\t\t</ngx-dropzone-image-preview>\n\t\t\t</ngx-dropzone>\n            \n\t\t<br>\n\t\t\t\t<div role=\"alert\" class=\"alert alert-success\" *ngIf=\"isSuccessAlert\">\n\t\t\t\t\t<strong>Berhasil!</strong> Data telah tersimpan \n\t\t\t\t</div>\n\t\t\t\t<div role=\"alert\" *ngIf=\"isDangerAlert\" class=\"alert alert-danger\">\n\t\t\t\t\t<strong>Gagal!</strong> data tidak tersimpan \n\t\t\t\t</div>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"saveProgram()\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n        </div>\n      </div>\n    </div>\n   \n  </div><!--/.row-->\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-announcer/radio-announceredit.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-announcer/radio-announceredit.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"square-jelly-box\" [fullScreen] = \"true\"><p style=\"color: white\" > Sedang mengunggah file... </p></ngx-spinner>  \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Basic Form</strong> Elements\n        </div>\n        <div class=\"card-body\">\n           \n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Nama Penyiar</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"data.announcer_name\" type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Sosial Media Penyiar</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"data.announcer_sosmed\" type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-input\">Foto Penyiar (JPG)</label>\n              <div class=\"col-md-12\">\n              \t<img [src]=\"data.announcer_photo\" style=\"width: 50%\">\n              </div>\n            </div>\n            <ngx-dropzone (change)=\"onSelect($event, 'banner')\" [multiple]=\"false\">\n\t\t\t    <ngx-dropzone-label>Drop it, baby!</ngx-dropzone-label>\n\t\t\t    <ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of banner\" [file]=\"f\" [removable]=\"true\" (removed)=\"onRemove(f, 'banner')\">\n\t\t\t\t</ngx-dropzone-image-preview>\n\t\t\t</ngx-dropzone>\n            \n\t\t<br>\n\t\t\t\t<div role=\"alert\" class=\"alert alert-success\" *ngIf=\"isSuccessAlert\">\n\t\t\t\t\t<strong>Berhasil!</strong> Data telah tersimpan \n\t\t\t\t</div>\n\t\t\t\t<div role=\"alert\" *ngIf=\"isDangerAlert\" class=\"alert alert-danger\">\n\t\t\t\t\t<strong>Gagal!</strong> data tidak tersimpan \n\t\t\t\t</div>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"saveProgram()\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n        </div>\n      </div>\n    </div>\n   \n  </div><!--/.row-->\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-announcer/radio-announcerlist.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-announcer/radio-announcerlist.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Simple Table\n        </div>\n        <div class=\"card-body\">\n          <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n\t\t\t<thead>\n\t\t\t  <tr>\n\t\t\t    <th style=\"width: 5%\">No.</th>\n\t\t\t    <th style=\"width: 25%\">Nama Penyiar</th>\n\t\t\t    <th style=\"width: 20%\">Sosmed Penyiar</th>\n\t\t\t    <th style=\"width: 25%\">Foto Penyiar</th>\n\t\t\t    <th style=\"width: 25%\">Aksi</th>\n\t\t\t  </tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t  <tr *ngFor=\"let d of data; let j = index\">\n\t\t\t    <td>{{ j+1 }}</td>\n\t\t\t    <td>{{ d.announcer_name }}</td>\n\t\t\t    <td>{{ d.announcer_sosmed }}</td>\n\t\t\t    <td><img [src]=\"d.announcer_photo\" style=\"width: 100%\"></td>\n\t\t\t    <td>\n\t\t\t    \t<button type=\"button\" class=\"btn btn-pill btn-primary\" (click)=\"editAnnouncer(d)\">\n\t\t\t    \t<i class=\"fa fa-pencil\"></i>&nbsp;Ubah</button>\n\t\t\t    \t<button type=\"button\" class=\"btn btn-pill btn-danger\" (click)=\"openModal(template,d)\">\n\t\t\t    \t\t<i class=\"fa fa-trash-o\"></i>&nbsp;Hapus</button>\n\t\t\t    </td>\n\t\t\t  </tr>\n\t\t\t</tbody>\n\t\t\t</table>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n<ng-template #template>\n  <div class=\"modal-body text-center\">\n    <p>Yakin untuk menghapus?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/views/radio-announcer/radio-announcer-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/radio-announcer/radio-announcer-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RadioAnnouncerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioAnnouncerRoutingModule", function() { return RadioAnnouncerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _radio_announcerlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-announcerlist.component */ "./src/app/views/radio-announcer/radio-announcerlist.component.ts");
/* harmony import */ var _radio_announceradd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio-announceradd.component */ "./src/app/views/radio-announcer/radio-announceradd.component.ts");
/* harmony import */ var _radio_announceredit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio-announceredit.component */ "./src/app/views/radio-announcer/radio-announceredit.component.ts");






var routes = [
    {
        path: '',
        data: {
            title: 'Penyiar Radio'
        },
        children: [
            {
                path: '',
                redirectTo: 'radio-announcerlist'
            },
            {
                path: 'radio-announcerlist',
                component: _radio_announcerlist_component__WEBPACK_IMPORTED_MODULE_3__["RadioAnnouncerlistComponent"],
                data: {
                    title: 'Daftar Penyiar Radio'
                }
            },
            {
                path: 'radio-announceradd',
                component: _radio_announceradd_component__WEBPACK_IMPORTED_MODULE_4__["RadioAnnounceraddComponent"],
                data: {
                    title: 'Tambah Penyiar Radio'
                }
            },
            {
                path: 'radio-announceredit',
                component: _radio_announceredit_component__WEBPACK_IMPORTED_MODULE_5__["RadioAnnouncereditComponent"],
                data: {
                    title: 'Ubah Penyiar Radio'
                }
            }
        ]
    }
];
var RadioAnnouncerRoutingModule = /** @class */ (function () {
    function RadioAnnouncerRoutingModule() {
    }
    RadioAnnouncerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RadioAnnouncerRoutingModule);
    return RadioAnnouncerRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/radio-announcer/radio-announcer.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/radio-announcer/radio-announcer.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JhZGlvLWFubm91bmNlci9yYWRpby1hbm5vdW5jZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/radio-announcer/radio-announcer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/radio-announcer/radio-announcer.component.ts ***!
  \********************************************************************/
/*! exports provided: RadioAnnouncerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioAnnouncerComponent", function() { return RadioAnnouncerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RadioAnnouncerComponent = /** @class */ (function () {
    function RadioAnnouncerComponent() {
    }
    RadioAnnouncerComponent.prototype.ngOnInit = function () {
    };
    RadioAnnouncerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-announcer',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./radio-announcer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-announcer/radio-announcer.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./radio-announcer.component.css */ "./src/app/views/radio-announcer/radio-announcer.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RadioAnnouncerComponent);
    return RadioAnnouncerComponent;
}());



/***/ }),

/***/ "./src/app/views/radio-announcer/radio-announcer.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/radio-announcer/radio-announcer.module.ts ***!
  \*****************************************************************/
/*! exports provided: RadioAnnouncerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioAnnouncerModule", function() { return RadioAnnouncerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _radio_announcer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-announcer-routing.module */ "./src/app/views/radio-announcer/radio-announcer-routing.module.ts");
/* harmony import */ var _radio_announcer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio-announcer.component */ "./src/app/views/radio-announcer/radio-announcer.component.ts");
/* harmony import */ var _radio_announceradd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio-announceradd.component */ "./src/app/views/radio-announcer/radio-announceradd.component.ts");
/* harmony import */ var _radio_announceredit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio-announceredit.component */ "./src/app/views/radio-announcer/radio-announceredit.component.ts");
/* harmony import */ var _radio_announcerlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radio-announcerlist.component */ "./src/app/views/radio-announcer/radio-announcerlist.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm5/ngx-dropzone.js");












var RadioAnnouncerModule = /** @class */ (function () {
    function RadioAnnouncerModule() {
    }
    RadioAnnouncerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_radio_announcer_component__WEBPACK_IMPORTED_MODULE_4__["RadioAnnouncerComponent"], _radio_announceradd_component__WEBPACK_IMPORTED_MODULE_5__["RadioAnnounceraddComponent"], _radio_announceredit_component__WEBPACK_IMPORTED_MODULE_6__["RadioAnnouncereditComponent"], _radio_announcerlist_component__WEBPACK_IMPORTED_MODULE_7__["RadioAnnouncerlistComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _radio_announcer_routing_module__WEBPACK_IMPORTED_MODULE_3__["RadioAnnouncerRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                ngx_dropzone__WEBPACK_IMPORTED_MODULE_11__["NgxDropzoneModule"]
            ]
        })
    ], RadioAnnouncerModule);
    return RadioAnnouncerModule;
}());



/***/ }),

/***/ "./src/app/views/radio-announcer/radio-announceradd.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/radio-announcer/radio-announceradd.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JhZGlvLWFubm91bmNlci9yYWRpby1hbm5vdW5jZXJhZGQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/radio-announcer/radio-announceradd.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/radio-announcer/radio-announceradd.component.ts ***!
  \***********************************************************************/
/*! exports provided: RadioAnnounceraddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioAnnounceraddComponent", function() { return RadioAnnounceraddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RadioAnnounceraddComponent = /** @class */ (function () {
    function RadioAnnounceraddComponent(api, http, spinner, router) {
        this.api = api;
        this.http = http;
        this.spinner = spinner;
        this.router = router;
        this.banner = [];
        this.files = [];
        this.itemBanner = null;
        this.itemFiles = null;
        this.announcer_name = '';
        this.announcer_sosmed = '';
        this.isSuccessAlert = false;
        this.announcer = [];
        this.isDangerAlert = false;
    }
    RadioAnnounceraddComponent.prototype.ngOnInit = function () {
    };
    RadioAnnounceraddComponent.prototype.onSelect = function (event, type) {
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
    RadioAnnounceraddComponent.prototype.onRemove = function (event, type) {
        if (type == 'files') {
            console.log(event);
            this.files.splice(this.files.indexOf(event), 1);
        }
        else if (type == 'banner') {
            console.log(event);
            this.banner.splice(this.banner.indexOf(event), 1);
        }
    };
    RadioAnnounceraddComponent.prototype.saveProgram = function () {
        var _this = this;
        this.spinner.show();
        var fd = new FormData();
        fd.append('param', 'create');
        fd.append('announcer_name', this.announcer_name);
        fd.append('announcer_sosmed', this.announcer_sosmed);
        fd.append('banner[]', this.itemBanner);
        this.http.post(this.api.uploadUrl + 'upload-announcer.php', fd)
            .subscribe(function (res) {
            _this.spinner.hide();
            console.log(res);
            _this.isSuccessAlert = true;
            setTimeout(function () {
                _this.moveTo('radio-announcer/radio-announcerlist');
            }, 2000);
            // alert('Uploaded Successfully.');
        });
    };
    RadioAnnounceraddComponent.prototype.moveTo = function (url) {
        this.router.navigate(['/' + url]);
    };
    RadioAnnounceraddComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    RadioAnnounceraddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-announceradd',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./radio-announceradd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-announcer/radio-announceradd.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./radio-announceradd.component.css */ "./src/app/views/radio-announcer/radio-announceradd.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RadioAnnounceraddComponent);
    return RadioAnnounceraddComponent;
}());



/***/ }),

/***/ "./src/app/views/radio-announcer/radio-announceredit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/radio-announcer/radio-announceredit.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JhZGlvLWFubm91bmNlci9yYWRpby1hbm5vdW5jZXJlZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/radio-announcer/radio-announceredit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/radio-announcer/radio-announceredit.component.ts ***!
  \************************************************************************/
/*! exports provided: RadioAnnouncereditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioAnnouncereditComponent", function() { return RadioAnnouncereditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RadioAnnouncereditComponent = /** @class */ (function () {
    function RadioAnnouncereditComponent(api, http, spinner, router) {
        this.api = api;
        this.http = http;
        this.spinner = spinner;
        this.router = router;
        this.banner = [];
        this.files = [];
        this.itemBanner = null;
        this.itemFiles = null;
        this.announcer_name = '';
        this.announcer_sosmed = '';
        this.isSuccessAlert = false;
        this.announcer = [];
        this.data = {};
        this.isDangerAlert = false;
        this.data = this.router.getCurrentNavigation().extras.state.data;
    }
    RadioAnnouncereditComponent.prototype.ngOnInit = function () {
    };
    RadioAnnouncereditComponent.prototype.onSelect = function (event, type) {
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
    RadioAnnouncereditComponent.prototype.onRemove = function (event, type) {
        if (type == 'files') {
            console.log(event);
            this.files.splice(this.files.indexOf(event), 1);
        }
        else if (type == 'banner') {
            console.log(event);
            this.banner.splice(this.banner.indexOf(event), 1);
        }
    };
    RadioAnnouncereditComponent.prototype.saveProgram = function () {
        var _this = this;
        this.spinner.show();
        var fd = new FormData();
        fd.append('param', 'update');
        fd.append('announcer_id', this.data.announcer_id);
        fd.append('announcer_name', this.data.announcer_name);
        fd.append('announcer_sosmed', this.data.announcer_sosmed);
        fd.append('banner[]', this.itemBanner);
        this.http.post(this.api.uploadUrl + 'upload-announcer.php', fd)
            .subscribe(function (res) {
            _this.spinner.hide();
            console.log(res);
            _this.isSuccessAlert = true;
            setTimeout(function () {
                _this.moveTo('radio-announcer/radio-announcerlist');
            }, 2000);
            // alert('Uploaded Successfully.');
        });
    };
    RadioAnnouncereditComponent.prototype.moveTo = function (url) {
        this.router.navigate(['/' + url]);
    };
    RadioAnnouncereditComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    RadioAnnouncereditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-announceredit',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./radio-announceredit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-announcer/radio-announceredit.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./radio-announceredit.component.css */ "./src/app/views/radio-announcer/radio-announceredit.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RadioAnnouncereditComponent);
    return RadioAnnouncereditComponent;
}());



/***/ }),

/***/ "./src/app/views/radio-announcer/radio-announcerlist.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/radio-announcer/radio-announcerlist.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JhZGlvLWFubm91bmNlci9yYWRpby1hbm5vdW5jZXJsaXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/radio-announcer/radio-announcerlist.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/radio-announcer/radio-announcerlist.component.ts ***!
  \************************************************************************/
/*! exports provided: RadioAnnouncerlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioAnnouncerlistComponent", function() { return RadioAnnouncerlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var RadioAnnouncerlistComponent = /** @class */ (function () {
    function RadioAnnouncerlistComponent(api, modalService, router) {
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
    RadioAnnouncerlistComponent.prototype.ngOnInit = function () {
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
            type: 'getannouncerradioadm'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.data = resp;
            console.log(_this.data);
            _this.dtTrigger.next();
        });
    };
    RadioAnnouncerlistComponent.prototype.getData = function () {
        var _this = this;
        this.api.provideData({
            type: 'getannouncerradioadm'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.data = resp;
            console.log(_this.data);
        });
    };
    RadioAnnouncerlistComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    RadioAnnouncerlistComponent.prototype.deleteAnnouncer = function (item) {
        var _this = this;
        this.api.provideData({
            type: 'deleteannouncerradioadm',
            announcer_id: item.announcer_id
        }, 'data-adm-api').subscribe(function (resp) {
            console.log(resp);
            _this.getData();
        });
    };
    RadioAnnouncerlistComponent.prototype.openModal = function (template, item) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
        this.deleteItem = item;
    };
    RadioAnnouncerlistComponent.prototype.confirm = function () {
        this.message = 'Confirmed!';
        this.deleteAnnouncer(this.deleteItem);
        this.modalRef.hide();
    };
    RadioAnnouncerlistComponent.prototype.decline = function () {
        this.message = 'Declined!';
        this.modalRef.hide();
    };
    RadioAnnouncerlistComponent.prototype.editAnnouncer = function (item) {
        var objToSend = item;
        this.router.navigate(['/radio-announcer/radio-announceredit'], { state: { data: objToSend } });
    };
    RadioAnnouncerlistComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    RadioAnnouncerlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-announcerlist',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./radio-announcerlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-announcer/radio-announcerlist.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./radio-announcerlist.component.css */ "./src/app/views/radio-announcer/radio-announcerlist.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RadioAnnouncerlistComponent);
    return RadioAnnouncerlistComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-radio-announcer-radio-announcer-module.js.map