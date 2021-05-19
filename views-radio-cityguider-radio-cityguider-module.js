(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-radio-cityguider-radio-cityguider-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-cityguider/radio-cityguider.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-cityguider/radio-cityguider.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n\t<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"square-jelly-box\" [fullScreen] = \"true\"><p style=\"color: white\" > Sedang mengunggah file... </p></ngx-spinner> \n  <div class=\"row\">\n\t    <div class=\"col-lg-6\">\n\t    \t<div class=\"card\">\n\t    \t\t <div class=\"card-header\">\n\t\t          Form city guider\n\t\t        </div>\n\t    \t\t<div class=\"card-body\">\n\t    \t\t\t<div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\">Pengirim</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"\" [(ngModel)]=\"cg_src\">\n              </div>\n            </div>\n          </div>\n\t    \t\t\t<div class=\"form-group row\">\n              <label class=\"col-md-12 col-form-label\" for=\"textarea-input\">Pesan</label>\n              <div class=\"col-md-12\">\n                <textarea id=\"textarea-input\" name=\"textarea-input\" rows=\"4\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"cg_msg\"></textarea>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-md-12 col-form-label\" for=\"file-input\">Gambar Flyer (JPG)</label>\n              <div class=\"col-md-8\">\n\t              <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"cg_img_data\">\n\n\t          </div>\n\t          <div class=\"col-md-4\">\n\t          \t<button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"convertBlob()\"><i class=\"fa fa-dot-circle-o\"></i> Convert</button>\n\t          </div>\n\t              <img [src]=\"cg_img\" style=\"width: 100%\">\n            </div>\n            <ngx-dropzone *ngIf=\"cg_img==''\" (change)=\"onSelect($event, 'banner')\" [multiple]=\"false\">\n\t\t\t    <ngx-dropzone-label>Drop it, baby!</ngx-dropzone-label>\n\t\t\t    <ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of banner\" [file]=\"f\" [removable]=\"true\" (removed)=\"onRemove(f, 'banner')\">\n\t\t\t\t</ngx-dropzone-image-preview>\n\t\t\t</ngx-dropzone>\n\t    \t\t<br>\n\t\t\t\t<div role=\"alert\" class=\"alert alert-success\" *ngIf=\"isSuccessAlert\">\n\t\t\t\t\t<strong>Berhasil!</strong> Data telah tersimpan \n\t\t\t\t</div>\n\t\t\t\t<div role=\"alert\" *ngIf=\"isDangerAlert\" class=\"alert alert-danger\">\n\t\t\t\t\t<strong>Gagal!</strong> data tidak tersimpan \n\t\t\t\t</div>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" style=\"float: right;\" (click)=\"saveProgram()\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n        </div>\n\t    \t</div>\n\t    </div>\n  \n\t  <div class=\"col-lg-6\">\n\t    \t\n\t    \t\t\t<div class=\"row\" *ngFor=\"let i of messages\">\n\t    \t\t\t\t<div class=\"col-sm-12 col-md-12\">\n\t\t\t\t\t      <div class=\"card\">\n\t\t\t\t\t        <div class=\"card-header\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger\" style=\"float: right\" (click)=\"openModal(template, i)\">\n\t\t\t\t\t          \t<i class=\"fa fa-trash\"></i>\n\t\t\t\t\t          </button>\n\t\t\t\t\t          <p style=\"margin-bottom: 0\">{{i.created_at}}</p>\n\t\t\t\t\t          <small>Informasi dari {{i.cg_src}}</small>\n\t\t\t\t\t          \n\t\t\t\t\t        </div>\n\t\t\t\t\t        <div class=\"card-body\">\n\t\t\t\t\t        \t<p>{{i.cg_msg}}</p>\n\t\t\t\t\t        \t<img *ngIf=\"i.cg_img != ''\" [src]=\"i.cg_img\" style=\"width: 100%\">\n\t\t\t\t\t        </div>\n\t\t\t\t\t      </div>\n\t    \t\t\t\t</div>\n\t    \t\t\t</div>\n\t    \t\t\n\t  </div>\n  </div>\n  <ng-template #template>\n  <div class=\"modal-body text-center\">\n    <p>Yakin untuk menghapus?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\n  </div>\n</ng-template>\n\n\n");

/***/ }),

/***/ "./src/app/views/radio-cityguider/radio-cityguider-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/radio-cityguider/radio-cityguider-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: RadioCityguiderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioCityguiderRoutingModule", function() { return RadioCityguiderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _radio_cityguider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-cityguider.component */ "./src/app/views/radio-cityguider/radio-cityguider.component.ts");




var routes = [
    {
        path: '',
        data: {
            title: 'City Guider Radio City Guide 911 FM',
        },
        component: _radio_cityguider_component__WEBPACK_IMPORTED_MODULE_3__["RadioCityguiderComponent"],
    }
];
var RadioCityguiderRoutingModule = /** @class */ (function () {
    function RadioCityguiderRoutingModule() {
    }
    RadioCityguiderRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RadioCityguiderRoutingModule);
    return RadioCityguiderRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/radio-cityguider/radio-cityguider.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/radio-cityguider/radio-cityguider.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JhZGlvLWNpdHlndWlkZXIvcmFkaW8tY2l0eWd1aWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/radio-cityguider/radio-cityguider.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/radio-cityguider/radio-cityguider.component.ts ***!
  \**********************************************************************/
/*! exports provided: RadioCityguiderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioCityguiderComponent", function() { return RadioCityguiderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var RadioCityguiderComponent = /** @class */ (function () {
    function RadioCityguiderComponent(spinner, http, api, modalService, sanitizer) {
        this.spinner = spinner;
        this.http = http;
        this.api = api;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.banner = [];
        this.files = [];
        this.itemBanner = null;
        this.itemFiles = null;
        this.cg_msg = '';
        this.cg_src = '';
        this.cg_img = '';
        this.cg_img_data = '';
        this.isSuccessAlert = false;
        this.isDangerAlert = false;
        this.announcer = [];
        this.messages = [];
        this.deleteItem = {};
        this.msg = '';
    }
    RadioCityguiderComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    RadioCityguiderComponent.prototype.convertBlob = function () {
        // var reader = new FileReader();
        var url = this.sanitizer.bypassSecurityTrustResourceUrl(this.cg_img_data);
        // reader.readAsDataURL(url);
        // var data; 
        // reader.onloadend = function() {
        //     var base64data = reader.result;                
        //     console.log(base64data);
        //     data = base64data;
        // }
        this.cg_img = url;
    };
    RadioCityguiderComponent.prototype.getData = function () {
        var _this = this;
        this.api.provideData({
            type: 'getcityguideradm'
        }, 'data-adm-api').subscribe(function (resp) {
            _this.messages = resp;
            console.log(_this.messages);
        });
    };
    RadioCityguiderComponent.prototype.onSelect = function (event, type) {
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
            this.cg_img = '';
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
    RadioCityguiderComponent.prototype.onRemove = function (event, type) {
        if (type == 'files') {
            console.log(event);
            this.files.splice(this.files.indexOf(event), 1);
        }
        else if (type == 'banner') {
            console.log(event);
            this.banner.splice(this.banner.indexOf(event), 1);
        }
    };
    RadioCityguiderComponent.prototype.saveProgram = function () {
        var _this = this;
        this.spinner.show();
        var fd = new FormData();
        fd.append('param', 'create');
        fd.append('cg_msg', this.cg_msg);
        fd.append('cg_src', this.cg_src);
        fd.append('cg_img', this.cg_img);
        fd.append('banner[]', this.itemBanner);
        this.http.post(this.api.uploadUrl + 'upload-cg.php', fd)
            .subscribe(function (res) {
            _this.spinner.hide();
            console.log(res);
            _this.isSuccessAlert = true;
            _this.cg_msg = '';
            _this.cg_src = '';
            _this.banner = [];
            _this.itemBanner = null;
            _this.getData();
            setTimeout(function () {
                _this.isSuccessAlert = false;
            }, 3000);
            // alert('Uploaded Successfully.');
        });
    };
    RadioCityguiderComponent.prototype.deleteProgram = function (item) {
        var _this = this;
        this.api.provideData({
            type: 'deletecityguideradm',
            cg_id: item.cg_id,
            cg_img_ori: item.cg_img_ori
        }, 'data-adm-api').subscribe(function (resp) {
            console.log(resp);
            _this.getData();
        });
    };
    RadioCityguiderComponent.prototype.openModal = function (template, item) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
        this.deleteItem = item;
    };
    RadioCityguiderComponent.prototype.confirm = function () {
        this.msg = 'Confirmed!';
        this.deleteProgram(this.deleteItem);
        this.modalRef.hide();
    };
    RadioCityguiderComponent.prototype.decline = function () {
        this.msg = 'Declined!';
        this.modalRef.hide();
    };
    RadioCityguiderComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
    ]; };
    RadioCityguiderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-cityguider',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./radio-cityguider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/radio-cityguider/radio-cityguider.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./radio-cityguider.component.css */ "./src/app/views/radio-cityguider/radio-cityguider.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], RadioCityguiderComponent);
    return RadioCityguiderComponent;
}());



/***/ }),

/***/ "./src/app/views/radio-cityguider/radio-cityguider.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/radio-cityguider/radio-cityguider.module.ts ***!
  \*******************************************************************/
/*! exports provided: RadioCityguiderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioCityguiderModule", function() { return RadioCityguiderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _radio_cityguider_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-cityguider-routing.module */ "./src/app/views/radio-cityguider/radio-cityguider-routing.module.ts");
/* harmony import */ var _radio_cityguider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio-cityguider.component */ "./src/app/views/radio-cityguider/radio-cityguider.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm5/ngx-dropzone.js");








var RadioCityguiderModule = /** @class */ (function () {
    function RadioCityguiderModule() {
    }
    RadioCityguiderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_radio_cityguider_component__WEBPACK_IMPORTED_MODULE_4__["RadioCityguiderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _radio_cityguider_routing_module__WEBPACK_IMPORTED_MODULE_3__["RadioCityguiderRoutingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_dropzone__WEBPACK_IMPORTED_MODULE_7__["NgxDropzoneModule"]
            ]
        })
    ], RadioCityguiderModule);
    return RadioCityguiderModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-radio-cityguider-radio-cityguider-module.js.map