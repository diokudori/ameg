(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-radio-programadd-radio-programadd-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-programadd/radio-programadd.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-programadd/radio-programadd.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"square-jelly-box\" [fullScreen] = \"true\"><p style=\"color: white\" > Sedang mengunggah file... </p></ngx-spinner>  \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Basic Form</strong> Elements\n        </div>\n        <div class=\"card-body\">\n           \n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Judul Program</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"program_title\" type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Deskripsi Program</label>\n              <div class=\"col-md-9\">\n                <textarea [(ngModel)]=\"program_desc\" class=\"form-control\" placeholder=\"\"></textarea>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n            \t<label class=\"col-md-3 col-form-label\">Hari Tayang</label>\n            \t<div class=\"col-md-9 col-form-label\">\n            \t\t<div class=\"form-check\" *ngFor=\"let pd of program_day\">\n            \t\t\t<input class=\"form-check-input\" [(ngModel)]=\"pd.isChecked\" type=\"checkbox\" value=\"1\">\n            \t\t\t<label class=\"form-check-label\" for=\"checkbox1\"> {{pd.day_name}} </label>\n            \t\t</div>\n            \t\t\n            \t</div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Jam Tayang (Mulai)</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"program_start_time\" type=\"time\" placeholder=\"H:i\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Jam Tayang (Berakhir)</label>\n              <div class=\"col-md-9\">\n                <input [(ngModel)]=\"program_end_time\" type=\"time\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Penyiar</label>\n              <div class=\"col-md-9\">\n                <div class=\"form-check\" *ngFor=\"let pa of program_announcer\">\n            \t\t\t<input class=\"form-check-input\" [(ngModel)]=\"pa.isChecked\" type=\"checkbox\" value=\"1\">\n            \t\t\t<label class=\"form-check-label\" for=\"checkbox1\"> {{pa.announcer_name}} </label>\n            \t\t</div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"file-input\">Gambar Flyer (JPG)</label>\n              \n            </div>\n            <ngx-dropzone (change)=\"onSelect($event, 'banner')\" [multiple]=\"false\">\n\t\t\t    <ngx-dropzone-label>Drop it, baby!</ngx-dropzone-label>\n\t\t\t    <ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of banner\" [file]=\"f\" [removable]=\"true\" (removed)=\"onRemove(f, 'banner')\">\n\t\t\t\t</ngx-dropzone-image-preview>\n\t\t\t</ngx-dropzone>\n            \n\t\t<br>\n\t\t\t\t<div role=\"alert\" class=\"alert alert-success\" *ngIf=\"isSuccessAlert\">\n\t\t\t\t\t<strong>Berhasil!</strong> Data telah tersimpan \n\t\t\t\t</div>\n\t\t\t\t<div role=\"alert\" *ngIf=\"isDangerAlert\" class=\"alert alert-danger\">\n\t\t\t\t\t<strong>Gagal!</strong> data tidak tersimpan \n\t\t\t\t</div>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"saveProgram()\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n        </div>\n      </div>\n    </div>\n   \n  </div><!--/.row-->\n  \n</div>\n");

/***/ }),

/***/ "./src/app/views/radio-programadd/radio-programadd-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/radio-programadd/radio-programadd-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: RadioProgramaddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioProgramaddRoutingModule", function() { return RadioProgramaddRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _radio_programadd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-programadd.component */ "./src/app/views/radio-programadd/radio-programadd.component.ts");




var routes = [
    {
        path: '',
        component: _radio_programadd_component__WEBPACK_IMPORTED_MODULE_3__["RadioProgramaddComponent"],
        data: {
            title: 'Tambah Program Radio City Guide 911 FM'
        }
    }
];
var RadioProgramaddRoutingModule = /** @class */ (function () {
    function RadioProgramaddRoutingModule() {
    }
    RadioProgramaddRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RadioProgramaddRoutingModule);
    return RadioProgramaddRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/radio-programadd/radio-programadd.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/radio-programadd/radio-programadd.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JhZGlvLXByb2dyYW1hZGQvcmFkaW8tcHJvZ3JhbWFkZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/radio-programadd/radio-programadd.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/radio-programadd/radio-programadd.component.ts ***!
  \**********************************************************************/
/*! exports provided: RadioProgramaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioProgramaddComponent", function() { return RadioProgramaddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RadioProgramaddComponent = /** @class */ (function () {
    function RadioProgramaddComponent(api, http, spinner, router) {
        this.api = api;
        this.http = http;
        this.spinner = spinner;
        this.router = router;
        this.banner = [];
        this.files = [];
        this.itemBanner = null;
        this.itemFiles = null;
        this.program_title = '';
        this.program_desc = '';
        this.program_day = [
            { day_name: 'Minggu', day_index: 0, isChecked: false },
            { day_name: 'Senin', day_index: 1, isChecked: false },
            { day_name: 'Selasa', day_index: 2, isChecked: false },
            { day_name: 'Rabu', day_index: 3, isChecked: false },
            { day_name: 'Kamis', day_index: 4, isChecked: false },
            { day_name: 'Jumat', day_index: 5, isChecked: false },
            { day_name: 'Sabtu', day_index: 6, isChecked: false }
        ];
        this.program_start_time = '';
        this.program_end_time = '';
        this.program_announcer = [];
        this.isSuccessAlert = false;
        this.isDangerAlert = false;
        this.announcer = [];
    }
    RadioProgramaddComponent.prototype.ngOnInit = function () {
        this.getAnnouncer();
    };
    RadioProgramaddComponent.prototype.getAnnouncer = function () {
        var _this = this;
        this.api.provideData({ type: 'getannouncerradioadm' }, 'data-adm-api').subscribe(function (resp) {
            _this.announcer = resp;
            _this.program_announcer = resp;
            console.log(_this.program_announcer);
        });
    };
    RadioProgramaddComponent.prototype.onSelect = function (event, type) {
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
    RadioProgramaddComponent.prototype.onRemove = function (event, type) {
        if (type == 'files') {
            console.log(event);
            this.files.splice(this.files.indexOf(event), 1);
        }
        else if (type == 'banner') {
            console.log(event);
            this.banner.splice(this.banner.indexOf(event), 1);
        }
    };
    RadioProgramaddComponent.prototype.saveProgram = function () {
        var _this = this;
        this.spinner.show();
        var pa = '';
        var pd = '';
        for (var i = 0; i < this.program_announcer.length; i++) {
            if (this.program_announcer[i].isChecked == true) {
                pa += '#' + this.program_announcer[i].announcer_id;
            }
        }
        for (var i = 0; i < this.program_day.length; i++) {
            if (this.program_day[i].isChecked == true) {
                pd += '#' + this.program_day[i].day_index;
            }
        }
        var fd = new FormData();
        fd.append('param', 'create');
        fd.append('program_title', this.program_title);
        fd.append('program_desc', this.program_desc);
        fd.append('program_start_time', this.program_start_time);
        fd.append('program_end_time', this.program_end_time);
        fd.append('program_announcer', pa);
        fd.append('program_day', pd);
        fd.append('banner[]', this.itemBanner);
        this.http.post(this.api.uploadUrl + 'upload-radio.php', fd)
            .subscribe(function (res) {
            _this.spinner.hide();
            console.log(res);
            _this.isSuccessAlert = true;
            _this.program_title = '';
            _this.program_desc = '';
            _this.program_day = [
                { day_name: 'Minggu', isChecked: false },
                { day_name: 'Senin', isChecked: false },
                { day_name: 'Selasa', isChecked: false },
                { day_name: 'Rabu', isChecked: false },
                { day_name: 'Kamis', isChecked: false },
                { day_name: 'Jumat', isChecked: false },
                { day_name: 'Sabtu', isChecked: false }
            ];
            _this.program_announcer = _this.announcer;
            _this.banner = [];
            setTimeout(function () {
                _this.isSuccessAlert = false;
            }, 3000);
            // alert('Uploaded Successfully.');
        });
    };
    RadioProgramaddComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    RadioProgramaddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-programadd',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./radio-programadd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-programadd/radio-programadd.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./radio-programadd.component.css */ "./src/app/views/radio-programadd/radio-programadd.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RadioProgramaddComponent);
    return RadioProgramaddComponent;
}());



/***/ }),

/***/ "./src/app/views/radio-programadd/radio-programadd.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/radio-programadd/radio-programadd.module.ts ***!
  \*******************************************************************/
/*! exports provided: RadioProgramaddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioProgramaddModule", function() { return RadioProgramaddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _radio_programadd_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-programadd-routing.module */ "./src/app/views/radio-programadd/radio-programadd-routing.module.ts");
/* harmony import */ var _radio_programadd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio-programadd.component */ "./src/app/views/radio-programadd/radio-programadd.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm5/ngx-dropzone.js");








var RadioProgramaddModule = /** @class */ (function () {
    function RadioProgramaddModule() {
    }
    RadioProgramaddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_radio_programadd_component__WEBPACK_IMPORTED_MODULE_4__["RadioProgramaddComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _radio_programadd_routing_module__WEBPACK_IMPORTED_MODULE_3__["RadioProgramaddRoutingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_dropzone__WEBPACK_IMPORTED_MODULE_7__["NgxDropzoneModule"]
            ]
        })
    ], RadioProgramaddModule);
    return RadioProgramaddModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-radio-programadd-radio-programadd-module.js.map