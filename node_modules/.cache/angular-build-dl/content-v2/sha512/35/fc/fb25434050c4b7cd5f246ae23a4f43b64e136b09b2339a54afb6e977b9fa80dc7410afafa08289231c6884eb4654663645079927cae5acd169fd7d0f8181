(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog-category-edit-catalog-category-edit-module"],{

/***/ "9KhI":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalog-category-edit/catalog-category-edit.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/catalog-category']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Ubah kategori</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"link\" color=\"danger\" (click)=\"deleteConfirm()\"><ion-icon name=\"trash-outline\" color=\"danger\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" mode=\"ios\">\r\n<form (submit)=\"process()\">\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">Nama kategori*</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"category.name\" autocapitalize=\"on\" name=\"name\"></ion-input>\r\n  </ion-item>\r\n</form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\">\r\n  <ion-button expand=\"block\" (click)=\"process()\">Simpan</ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "Bjc2":
/*!*********************************************************************!*\
  !*** ./src/app/catalog-category-edit/catalog-category-edit.page.ts ***!
  \*********************************************************************/
/*! exports provided: CatalogCategoryEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogCategoryEditPage", function() { return CatalogCategoryEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_catalog_category_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./catalog-category-edit.page.html */ "9KhI");
/* harmony import */ var _catalog_category_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog-category-edit.page.scss */ "gjqO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global.service */ "dVwY");











let CatalogCategoryEditPage = class CatalogCategoryEditPage {
    constructor(router, toastCtrl, storage, http, global, navController, route, alertController) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.navController = navController;
        this.route = route;
        this.alertController = alertController;
        this.category = { id: '', name: '' };
        this.route.params.subscribe((params) => {
            if (params['id']) {
                this.id = params['id'];
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storage.getObject('auth').then((auth) => {
            this.auth = auth;
            this.getData();
        });
    }
    getData() {
        this.global.loadingPresent('mengambil data...');
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        let postData = { id: this.id };
        this.http.post(this.global.base_url + 'auth/category/detail', postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.category = data.category;
                console.log(data);
            }
            else {
                console.log(data);
            }
            this.global.loadingDismiss();
        }, error => {
            console.log(error);
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
                id: this.id,
                name: this.category.name
            };
            this.http.post(this.global.base_url + 'auth/category/edit', postData, options)
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
    deleteConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Konfirmasi hapus!',
                message: 'Anda yakin menghapus data ini?',
                buttons: [
                    {
                        text: 'Batal',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Hapus',
                        handler: () => {
                            this.delete();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    delete() {
        this.global.loadingPresent('menghapus kategori...');
        this.storage.getObject('auth').then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                id: this.id
            };
            this.http.post(this.global.base_url + 'auth/category/delete', postData, options)
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
CatalogCategoryEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
CatalogCategoryEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-catalog-category-edit',
        template: _raw_loader_catalog_category_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_catalog_category_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CatalogCategoryEditPage);



/***/ }),

/***/ "VIRY":
/*!***********************************************************************!*\
  !*** ./src/app/catalog-category-edit/catalog-category-edit.module.ts ***!
  \***********************************************************************/
/*! exports provided: CatalogCategoryEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogCategoryEditPageModule", function() { return CatalogCategoryEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _catalog_category_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalog-category-edit-routing.module */ "ZTrF");
/* harmony import */ var _catalog_category_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalog-category-edit.page */ "Bjc2");







let CatalogCategoryEditPageModule = class CatalogCategoryEditPageModule {
};
CatalogCategoryEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _catalog_category_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatalogCategoryEditPageRoutingModule"]
        ],
        declarations: [_catalog_category_edit_page__WEBPACK_IMPORTED_MODULE_6__["CatalogCategoryEditPage"]]
    })
], CatalogCategoryEditPageModule);



/***/ }),

/***/ "ZTrF":
/*!*******************************************************************************!*\
  !*** ./src/app/catalog-category-edit/catalog-category-edit-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CatalogCategoryEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogCategoryEditPageRoutingModule", function() { return CatalogCategoryEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _catalog_category_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog-category-edit.page */ "Bjc2");




const routes = [
    {
        path: '',
        component: _catalog_category_edit_page__WEBPACK_IMPORTED_MODULE_3__["CatalogCategoryEditPage"]
    }
];
let CatalogCategoryEditPageRoutingModule = class CatalogCategoryEditPageRoutingModule {
};
CatalogCategoryEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CatalogCategoryEditPageRoutingModule);



/***/ }),

/***/ "gjqO":
/*!***********************************************************************!*\
  !*** ./src/app/catalog-category-edit/catalog-category-edit.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRhbG9nLWNhdGVnb3J5LWVkaXQucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=catalog-category-edit-catalog-category-edit-module-es2015.js.map