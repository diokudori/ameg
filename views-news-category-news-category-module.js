(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-news-category-news-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/news-category/news-category.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/news-category/news-category.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n    \t<div class=\"card\">\n    \t\t<div class=\"card-header\">\n    \t\t\t<i class=\"fa fa-align-justify\"></i> Seluruh Kategori </div>\n    \t\t<div class=\"card-body\">\n    \t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n    \t\t\t\t<thead>\n    \t\t\t\t\t<tr>\n    \t\t\t\t\t\t<th>Nama</th>\n    \t\t\t\t\t\t<th>ID</th>\n    \t\t\t\t\t\t<th>Aksi</th>\n    \t\t\t\t\t</tr>\n    \t\t\t\t</thead>\n    \t\t\t\t<tbody>\n    \t\t\t\t\t<tr *ngFor=\"let i of items\">\n    \t\t\t\t\t\t<td><a href=\"{{i.link}}\" target=\"_blank\">{{i.name}}</a></td>\n    \t\t\t\t\t\t<td>{{i.id}}</td>\n    \t\t\t\t\t\t<td><button class=\"btn btn-primary btn-pill\" (click)=\"openModal(template, i)\">\n    \t\t\t\t\t\t\n    \t\t\t\t\tTambahkan</button></td>\n    \t\t\t\t\t</tr>\n    \t\t\t\t</tbody>\n    \t\t\t</table>\n    \t\t</div>\n    \t</div>\n    </div>\n  \n  <div class=\"col-lg-6\">\n    \t<div class=\"card\">\n    \t\t<div class=\"card-header\">\n    \t\t\t<i class=\"fa fa-align-justify\"></i> Kategori di Aplikasi </div>\n    \t\t<div class=\"card-body\">\n    \t\t\t<table class=\"table row-border hover\">\n    \t\t\t\t<thead>\n    \t\t\t\t\t<tr>\n    \t\t\t\t\t\t<th>Order</th>\n    \t\t\t\t\t\t<th>Nama</th>\n    \t\t\t\t\t\t<th>Aksi</th>\n    \t\t\t\t\t</tr>\n    \t\t\t\t</thead>\n    \t\t\t\t<tbody>\n    \t\t\t\t\t<tr *ngFor=\"let i of categories\">\n    \t\t\t\t\t\t<td>{{i.cat_order}}</td>\n    \t\t\t\t\t\t<td><a href=\"{{i.cat_wp_link}}\" target=\"_blank\">{{i.cat_name}}</a></td>\n    \t\t\t\t\t\t<td>\n    \t\t\t\t\t\t\t<button class=\"btn btn-danger btn-pill\" (click)=\"openModalDel(templatedel, i)\">\n    \t\t\t\t\t\t\n    \t\t\t\t\tHapus</button></td>\n    \t\t\t\t\t</tr>\n    \t\t\t\t</tbody>\n    \t\t\t</table>\n    \t\t</div>\n    \t</div>\n    </div>\n  </div>\n  </div>\n<ng-template #template>\n  <div class=\"modal-body text-center\">\n    <p>Yakin untuk menambahkan?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Ya</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >Tidak</button>\n  </div>\n</ng-template>\n<ng-template #templatedel>\n  <div class=\"modal-body text-center\">\n    <p>Yakin untuk menghapus?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Ya</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >Tidak</button>\n  </div>\n</ng-template>\n\n");

/***/ }),

/***/ "./src/app/views/news-category/news-category-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/news-category/news-category-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: NewsCategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCategoryRoutingModule", function() { return NewsCategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-category.component */ "./src/app/views/news-category/news-category.component.ts");




var routes = [
    {
        path: '',
        component: _news_category_component__WEBPACK_IMPORTED_MODULE_3__["NewsCategoryComponent"],
        data: {
            title: 'Daftar Kategori Malang Post'
        }
    }
];
var NewsCategoryRoutingModule = /** @class */ (function () {
    function NewsCategoryRoutingModule() {
    }
    NewsCategoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NewsCategoryRoutingModule);
    return NewsCategoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/news-category/news-category.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/news-category/news-category.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL25ld3MtY2F0ZWdvcnkvbmV3cy1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/news-category/news-category.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/news-category/news-category.component.ts ***!
  \****************************************************************/
/*! exports provided: NewsCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCategoryComponent", function() { return NewsCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");





var NewsCategoryComponent = /** @class */ (function () {
    function NewsCategoryComponent(api, modalService) {
        this.api = api;
        this.modalService = modalService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.baseURL = "https://malang-post.com";
        this.categories = [];
        this.items = [];
        this.message = '';
        this.selectedItem = {};
        this.modalType = "";
    }
    NewsCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5
        };
        this.api.provideRestWP(this.baseURL + "/wp-json/wp/v2/categories?per_page=50").subscribe(function (res) {
            _this.items = res;
            console.log(_this.categories);
            _this.dtTrigger.next();
        });
        this.getCategories();
    };
    NewsCategoryComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    NewsCategoryComponent.prototype.getCategories = function () {
        var _this = this;
        this.categories = [];
        this.api.provideData({ type: 'getnewscategoriesadm' }, 'data-adm-api').subscribe(function (resp) {
            _this.categories = resp;
        });
    };
    NewsCategoryComponent.prototype.addCategories = function (item) {
        var _this = this;
        var order = parseInt(this.categories.length) + 1;
        this.api.provideData({
            type: 'createnewscategoriesadm',
            cat_wp_id: item.id,
            cat_wp_link: item.link,
            cat_name: item.name,
            cat_order: order
        }, 'data-adm-api').subscribe(function (resp) {
            _this.getCategories();
        });
    };
    NewsCategoryComponent.prototype.deleteCategories = function (item) {
        var _this = this;
        this.api.provideData({
            type: 'deletenewscategoriesadm',
            cat_id: item.cat_id,
        }, 'data-adm-api').subscribe(function (resp) {
            _this.getCategories();
        });
    };
    NewsCategoryComponent.prototype.openModal = function (template, item) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
        this.modalType = "insert";
        this.selectedItem = item;
    };
    NewsCategoryComponent.prototype.openModalDel = function (template, item) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
        this.modalType = "delete";
        this.selectedItem = item;
    };
    NewsCategoryComponent.prototype.confirm = function () {
        this.message = 'Confirmed!';
        if (this.modalType == 'insert') {
            this.addCategories(this.selectedItem);
        }
        else if (this.modalType == 'delete') {
            this.deleteCategories(this.selectedItem);
        }
        this.modalRef.hide();
    };
    NewsCategoryComponent.prototype.decline = function () {
        this.message = 'Declined!';
        this.modalRef.hide();
    };
    NewsCategoryComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }
    ]; };
    NewsCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-category',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./news-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/news-category/news-category.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./news-category.component.css */ "./src/app/views/news-category/news-category.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], NewsCategoryComponent);
    return NewsCategoryComponent;
}());



/***/ }),

/***/ "./src/app/views/news-category/news-category.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/news-category/news-category.module.ts ***!
  \*************************************************************/
/*! exports provided: NewsCategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCategoryModule", function() { return NewsCategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _news_category_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-category-routing.module */ "./src/app/views/news-category/news-category-routing.module.ts");
/* harmony import */ var _news_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-category.component */ "./src/app/views/news-category/news-category.component.ts");
/* harmony import */ var ngx_sortable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-sortable */ "./node_modules/ngx-sortable/dist/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");







var NewsCategoryModule = /** @class */ (function () {
    function NewsCategoryModule() {
    }
    NewsCategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_news_category_component__WEBPACK_IMPORTED_MODULE_4__["NewsCategoryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _news_category_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewsCategoryRoutingModule"],
                ngx_sortable__WEBPACK_IMPORTED_MODULE_5__["NgxSortableModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"]
            ]
        })
    ], NewsCategoryModule);
    return NewsCategoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-news-category-news-category-module.js.map