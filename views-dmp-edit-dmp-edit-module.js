(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dmp-edit-dmp-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dmp-edit/dmp-edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/dmp-edit/dmp-edit.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"square-jelly-box\" [fullScreen] = \"true\"><p style=\"color: white\" > Sedang mengunggah file... </p></ngx-spinner>  \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Basic Form</strong> Elements\n        </div>\n        <div class=\"card-body\">\n           <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"date-input\">Tanggal rilis</label>\n              <div class=\"col-md-9\">\n                <input class=\"form-control\" [(ngModel)]=\"data.created_at\" id=\"date-input\" type=\"date\" name=\"date-input\" placeholder=\"date\">\n                <span class=\"help-block\">{{data.created_at}}</span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Nama DMP</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"data.disway_name\" type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Judul DMP</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"data.disway_title\" type=\"text\" class=\"form-control\" placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-input\">File Banner (JPG)</label>\n              <div class=\"col-md-12\">\n              \t<img [src]=\"data.disway_banner\" style=\"width: 50%\">\n              </div>\n            </div>\n            <ngx-dropzone (change)=\"onSelect($event, 'banner')\" [multiple]=\"false\">\n\t\t\t    <ngx-dropzone-label>Drop it, baby!</ngx-dropzone-label>\n\t\t\t    <ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of banner\" [file]=\"f\" [removable]=\"true\" (removed)=\"onRemove(f, 'banner')\">\n\t\t\t\t</ngx-dropzone-image-preview>\n\t\t\t</ngx-dropzone>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-input\">File DMP (PDF)</label>\n              <div class=\"col-md-12\">\n              \t<a [href]=\"data.disway_file\" target=\"_blank\"><i class=\"cui-file icons font-2xl d-block mt-4\"></i> {{data.disway_file}}</a>\n\n              </div>\n            </div>\n          <ngx-dropzone (change)=\"onSelect($event, 'files')\" [multiple]=\"false\">\n\t\t    <ngx-dropzone-label>Drop it, baby!</ngx-dropzone-label>\n\t\t    <ngx-dropzone-preview *ngFor=\"let f of files\" [removable]=\"true\" (removed)=\"onRemove(f, 'files')\">\n\t\t        <ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label>\n\t\t    </ngx-dropzone-preview>\n\t\t</ngx-dropzone>\n\t\t<br>\n\t\t\t\t<div role=\"alert\" class=\"alert alert-success\" *ngIf=\"isSuccessAlert\">\n\t\t\t\t\t<strong>Berhasil!</strong> Data telah tersimpan \n\t\t\t\t</div>\n\t\t\t\t<div role=\"alert\" *ngIf=\"isDangerAlert\" class=\"alert alert-danger\">\n\t\t\t\t\t<strong>Gagal!</strong> data tidak tersimpan \n\t\t\t\t</div>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"saveDmp()\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n        </div>\n      </div>\n    </div>\n   \n  </div><!--/.row-->\n  \n</div>\n");

/***/ }),

/***/ "./src/app/views/dmp-edit/dmp-edit-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/dmp-edit/dmp-edit-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DmpEditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmpEditRoutingModule", function() { return DmpEditRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dmp_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dmp-edit.component */ "./src/app/views/dmp-edit/dmp-edit.component.ts");




var routes = [
    {
        path: '',
        component: _dmp_edit_component__WEBPACK_IMPORTED_MODULE_3__["DmpEditComponent"],
        data: {
            title: 'Daftar Disway Malang Post'
        }
    }
];
var DmpEditRoutingModule = /** @class */ (function () {
    function DmpEditRoutingModule() {
    }
    DmpEditRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DmpEditRoutingModule);
    return DmpEditRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/dmp-edit/dmp-edit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/dmp-edit/dmp-edit.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2RtcC1lZGl0L2RtcC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/dmp-edit/dmp-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/dmp-edit/dmp-edit.component.ts ***!
  \******************************************************/
/*! exports provided: DmpEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmpEditComponent", function() { return DmpEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var DmpEditComponent = /** @class */ (function () {
    function DmpEditComponent(api, http, spinner, router) {
        this.api = api;
        this.http = http;
        this.spinner = spinner;
        this.router = router;
        this.disway_name = '';
        this.disway_title = '';
        this.created_at = '';
        this.isUploading = false;
        this.isSuccessAlert = false;
        this.isDangerAlert = false;
        this.data = {};
        this.banner = [];
        this.files = [];
        this.itemBanner = null;
        this.itemFiles = null;
        this.data = this.router.getCurrentNavigation().extras.state.data;
        console.log(this.data.created_at);
    }
    DmpEditComponent.prototype.onSelect = function (event, type) {
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
        }
    };
    DmpEditComponent.prototype.onRemove = function (event, type) {
        if (type == 'files') {
            console.log(event);
            this.files.splice(this.files.indexOf(event), 1);
        }
        else if (type == 'banner') {
            console.log(event);
            this.banner.splice(this.banner.indexOf(event), 1);
        }
    };
    DmpEditComponent.prototype.ngOnInit = function () {
    };
    DmpEditComponent.prototype.saveDmp = function () {
        var _this = this;
        this.spinner.show();
        var fd = new FormData();
        fd.append('param', 'update');
        fd.append('disway_id', this.data.disway_id);
        fd.append('disway_title', this.data.disway_title);
        fd.append('disway_name', this.data.disway_name);
        fd.append('created_at', this.data.created_at);
        fd.append('file[]', this.itemFiles);
        fd.append('banner[]', this.itemBanner);
        this.http.post(this.api.uploadUrl + 'upload.php', fd)
            .subscribe(function (res) {
            _this.spinner.hide();
            console.log(res);
            _this.isSuccessAlert = true;
            _this.router.navigate(['/dmp-list']);
            setTimeout(function () {
                _this.isSuccessAlert = false;
            }, 3000);
            // alert('Uploaded Successfully.');
        });
        // this.api.provideDataForm(fd,'upload').subscribe((resp)=>{
        //    this.resp = resp;
        //    console.log(this.resp);
        //  });
    };
    DmpEditComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DmpEditComponent.prototype, "fileInput", void 0);
    DmpEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dmp-edit',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dmp-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/dmp-edit/dmp-edit.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dmp-edit.component.css */ "./src/app/views/dmp-edit/dmp-edit.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], DmpEditComponent);
    return DmpEditComponent;
}());



/***/ }),

/***/ "./src/app/views/dmp-edit/dmp-edit.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/dmp-edit/dmp-edit.module.ts ***!
  \***************************************************/
/*! exports provided: DmpEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmpEditModule", function() { return DmpEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dmp_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dmp-edit-routing.module */ "./src/app/views/dmp-edit/dmp-edit-routing.module.ts");
/* harmony import */ var _dmp_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dmp-edit.component */ "./src/app/views/dmp-edit/dmp-edit.component.ts");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm5/ngx-dropzone.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");








var DmpEditModule = /** @class */ (function () {
    function DmpEditModule() {
    }
    DmpEditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dmp_edit_component__WEBPACK_IMPORTED_MODULE_4__["DmpEditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dmp_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__["DmpEditRoutingModule"],
                ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__["NgxDropzoneModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]
            ]
        })
    ], DmpEditModule);
    return DmpEditModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-dmp-edit-dmp-edit-module.js.map