(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog-product-catalog-product-module"],{

/***/ "MxNr":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalog-product/catalog-product.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/tabs/tab-catalog']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"primary\">Produk</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" mode=\"ios\" *ngIf=\"showContent\">\r\n\r\n  <ion-list *ngFor=\"let catItem of category\">\r\n\r\n    <ion-list-header>\r\n      <ion-label>{{catItem.name}}</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item-sliding *ngFor=\"let item of getProductByCategory(catItem.id)\" >\r\n    <ion-item [routerLink]=\"['/catalog-product-edit/'+item.id]\" button detail=\"false\" >\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"{{item.image}}\" />\r\n        <!-- <div class=\"text-avatar\">\r\n          {{item.name.charAt(0).toUpperCase()}}\r\n        </div> -->\r\n      </ion-avatar>\r\n    <ion-label>{{item.name}} <br/><small>\r\n      <ion-note>{{global.currency(item.price)}}</ion-note>\r\n    </small></ion-label>\r\n\r\n    </ion-item>\r\n    <ion-item-options side=\"end\">\r\n      <ion-item-option color=\"danger\" (click)=\"deleteConfirm(item.id)\"><ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon></ion-item-option>\r\n    </ion-item-options>\r\n\r\n    </ion-item-sliding>\r\n\r\n\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n   <ion-fab-button [routerLink]=\"['/catalog-product-add']\">\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n   </ion-fab-button>\r\n </ion-fab>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "WaMp":
/*!*********************************************************!*\
  !*** ./src/app/catalog-product/catalog-product.page.ts ***!
  \*********************************************************/
/*! exports provided: CatalogProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogProductPage", function() { return CatalogProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_catalog_product_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./catalog-product.page.html */ "MxNr");
/* harmony import */ var _catalog_product_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog-product.page.scss */ "xSoy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










let CatalogProductPage = class CatalogProductPage {
    constructor(storage, http, global, loadingController, router, platform, alertController) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.loadingController = loadingController;
        this.router = router;
        this.platform = platform;
        this.alertController = alertController;
        this.showContent = false;
        // this.platform.backButton.subscribeWithPriority(10, () => {
        //   this.router.navigate(['/tabs/tab3']);
        // });
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
        this.storage.getObject('auth').then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            this.http.post(this.global.base_url + 'auth/category/list', null, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.category = data.category;
                    this.getDataProduct();
                    console.log(data);
                }
                else {
                    console.log(data);
                }
            }, error => {
                console.log(error);
            });
        });
    }
    getDataProduct() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        this.http.post(this.global.base_url + 'auth/product/list', null, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.product = data.product;
                console.log(data);
            }
            else {
                console.log(data);
            }
            this.showContent = true;
            this.global.loadingDismiss();
        }, error => {
            console.log(error);
        });
    }
    getProductByCategory(category_id) {
        var filterArray = this.product.filter(x => x.category_id === category_id);
        return filterArray;
    }
    deleteConfirm(id) {
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
                            this.delete(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    delete(id) {
        this.global.loadingPresent('menghapus produk...');
        this.storage.getObject('auth').then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                id: id
            };
            this.http.post(this.global.base_url + 'auth/product/delete', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.global.toastPresent(data.message);
                    this.getDataProduct();
                }
                else {
                    console.log(data);
                }
                // this.global.loadingDismiss();
            }, error => {
                console.log(error);
                this.global.loadingDismiss();
            });
        });
    }
};
CatalogProductPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
CatalogProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-catalog-product',
        template: _raw_loader_catalog_product_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_catalog_product_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CatalogProductPage);



/***/ }),

/***/ "WsFJ":
/*!***********************************************************!*\
  !*** ./src/app/catalog-product/catalog-product.module.ts ***!
  \***********************************************************/
/*! exports provided: CatalogProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogProductPageModule", function() { return CatalogProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _catalog_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalog-product-routing.module */ "j3Zk");
/* harmony import */ var _catalog_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalog-product.page */ "WaMp");







let CatalogProductPageModule = class CatalogProductPageModule {
};
CatalogProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _catalog_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatalogProductPageRoutingModule"]
        ],
        declarations: [_catalog_product_page__WEBPACK_IMPORTED_MODULE_6__["CatalogProductPage"]]
    })
], CatalogProductPageModule);



/***/ }),

/***/ "j3Zk":
/*!*******************************************************************!*\
  !*** ./src/app/catalog-product/catalog-product-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CatalogProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogProductPageRoutingModule", function() { return CatalogProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _catalog_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog-product.page */ "WaMp");




const routes = [
    {
        path: '',
        component: _catalog_product_page__WEBPACK_IMPORTED_MODULE_3__["CatalogProductPage"]
    }
];
let CatalogProductPageRoutingModule = class CatalogProductPageRoutingModule {
};
CatalogProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CatalogProductPageRoutingModule);



/***/ }),

/***/ "xSoy":
/*!***********************************************************!*\
  !*** ./src/app/catalog-product/catalog-product.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRhbG9nLXByb2R1Y3QucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=catalog-product-catalog-product-module-es2015.js.map