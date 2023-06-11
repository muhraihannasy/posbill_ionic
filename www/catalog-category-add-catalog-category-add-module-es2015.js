(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog-category-add-catalog-category-add-module"],{

/***/ "3wPT":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalog-category-add/catalog-category-add.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/catalog-category']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Tambah kategori</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\" mode=\"ios\">\r\n  <form (submit)=\"process()\">\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">Nama kategori*</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"category.name\" autocapitalize=\"on\" name=\"name\" autofocus></ion-input>\r\n  </ion-item>\r\n\r\n\r\n  </form>\r\n</ion-content>\r\n<ion-footer class=\"ion-padding\" mode=\"ios\">\r\n  <ion-button expand=\"block\" (click)=\"process()\" >Simpan</ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "8W5B":
/*!*********************************************************************!*\
  !*** ./src/app/catalog-category-add/catalog-category-add.module.ts ***!
  \*********************************************************************/
/*! exports provided: CatalogCategoryAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogCategoryAddPageModule", function() { return CatalogCategoryAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _catalog_category_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalog-category-add-routing.module */ "IYSi");
/* harmony import */ var _catalog_category_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalog-category-add.page */ "Dl8Y");







let CatalogCategoryAddPageModule = class CatalogCategoryAddPageModule {
};
CatalogCategoryAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _catalog_category_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatalogCategoryAddPageRoutingModule"]
        ],
        declarations: [_catalog_category_add_page__WEBPACK_IMPORTED_MODULE_6__["CatalogCategoryAddPage"]]
    })
], CatalogCategoryAddPageModule);



/***/ }),

/***/ "Dl8Y":
/*!*******************************************************************!*\
  !*** ./src/app/catalog-category-add/catalog-category-add.page.ts ***!
  \*******************************************************************/
/*! exports provided: CatalogCategoryAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogCategoryAddPage", function() { return CatalogCategoryAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_catalog_category_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./catalog-category-add.page.html */ "3wPT");
/* harmony import */ var _catalog_category_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog-category-add.page.scss */ "lsSJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global.service */ "dVwY");










let CatalogCategoryAddPage = class CatalogCategoryAddPage {
    constructor(router, toastCtrl, storage, http, global, navController) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.navController = navController;
        this.category = { name: '' };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storage.getObject('auth').then((auth) => {
            this.auth = auth;
        });
    }
    process() {
        if (this.category.name == '') {
            this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
            return false;
        }
        this.global.loadingPresent('menambah kategori...');
        this.storage.getObject('auth').then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                name: this.category.name
            };
            this.http.post(this.global.base_url + 'auth/category/add', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.global.toastPresent(data.message);
                    this.router.navigate(['/catalog-category']);
                }
                else {
                    console.log(data);
                }
                this.global.loadingDismiss();
            }, error => {
                console.log(error);
            });
        });
    }
};
CatalogCategoryAddPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
CatalogCategoryAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-catalog-category-add',
        template: _raw_loader_catalog_category_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_catalog_category_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CatalogCategoryAddPage);



/***/ }),

/***/ "IYSi":
/*!*****************************************************************************!*\
  !*** ./src/app/catalog-category-add/catalog-category-add-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CatalogCategoryAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogCategoryAddPageRoutingModule", function() { return CatalogCategoryAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _catalog_category_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog-category-add.page */ "Dl8Y");




const routes = [
    {
        path: '',
        component: _catalog_category_add_page__WEBPACK_IMPORTED_MODULE_3__["CatalogCategoryAddPage"]
    }
];
let CatalogCategoryAddPageRoutingModule = class CatalogCategoryAddPageRoutingModule {
};
CatalogCategoryAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CatalogCategoryAddPageRoutingModule);



/***/ }),

/***/ "lsSJ":
/*!*********************************************************************!*\
  !*** ./src/app/catalog-category-add/catalog-category-add.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRhbG9nLWNhdGVnb3J5LWFkZC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=catalog-category-add-catalog-category-add-module-es2015.js.map