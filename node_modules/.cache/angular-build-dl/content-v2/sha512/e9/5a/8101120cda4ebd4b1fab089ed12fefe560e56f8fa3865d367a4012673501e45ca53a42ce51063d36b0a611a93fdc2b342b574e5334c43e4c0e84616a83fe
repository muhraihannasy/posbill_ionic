(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog-product-stock-catalog-product-stock-module"],{

/***/ "0BKJ":
/*!*******************************************************************************!*\
  !*** ./src/app/catalog-product-stock/catalog-product-stock-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CatalogProductStockPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogProductStockPageRoutingModule", function() { return CatalogProductStockPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _catalog_product_stock_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog-product-stock.page */ "ry+1");




const routes = [
    {
        path: '',
        component: _catalog_product_stock_page__WEBPACK_IMPORTED_MODULE_3__["CatalogProductStockPage"]
    }
];
let CatalogProductStockPageRoutingModule = class CatalogProductStockPageRoutingModule {
};
CatalogProductStockPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CatalogProductStockPageRoutingModule);



/***/ }),

/***/ "cvn5":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalog-product-stock/catalog-product-stock.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" *ngIf=\"showContent\">\r\n\r\n  <ion-toolbar>\r\n    <ion-title>{{product.name}}</ion-title>\r\n  </ion-toolbar>\r\n\r\n\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" *ngIf=\"showContent\">\r\n\r\n  <p style=\"text-align:center;\">\r\n    <small *ngIf=\"type == 'addition'\">Penambahan stok</small>\r\n    <small *ngIf=\"type == 'deduction'\">Pengurangan stok</small>\r\n  </p>\r\n\r\n  <ion-grid>\r\n  <ion-row style=\"border-bottom:solid 1px #ccc;\">\r\n    <ion-col size=\"6\"><ion-item lines=\"none\"><ion-text color=\"primary\"><small>Outlet</small></ion-text></ion-item></ion-col>\r\n    <ion-col size=\"6\"><ion-item lines=\"none\"><ion-text color=\"primary\">\r\n      <small *ngIf=\"type == 'addition'\">Jumlah yang ditambahkan</small>\r\n      <small *ngIf=\"type == 'deduction'\">Jumlah yang dikurangi</small>\r\n\r\n    </ion-text></ion-item></ion-col>\r\n  </ion-row>\r\n  <ion-row *ngFor=\"let item of stockList\" style=\"border-bottom:solid 1px #ccc;\">\r\n    <ion-col size=\"6\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label class=\"ion-text-wrap\">{{item.name}} <br/>\r\n          <small>Stok saat ini : {{item.stock}}</small>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col size=\"2\" style=\"text-align:right;padding-top:10px;\">\r\n      <ion-button size=\"small\" fill=\"link\" (click)=\"remove(item.id)\"> <ion-icon color=\"primary\" name=\"remove-outline\"></ion-icon> </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"2\" style=\"text-align:center;padding-top:10px;\">\r\n      <ion-input [(ngModel)]=\"item.adjustment\" name=\"outlet_stock[]\" type=\"number\" min=\"0\" ></ion-input>\r\n    </ion-col>\r\n    <ion-col size=\"2\" style=\"padding-top:10px;\">\r\n        <ion-button size=\"small\" fill=\"link\" (click)=\"add(item.id)\"> <ion-icon color=\"primary\" name=\"add-outline\"></ion-icon> </ion-button>\r\n    </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer mode=\"ios\" class=\"ion-padding\" *ngIf=\"showContent\">\r\n  <ion-button expand=\"block\" (click)=\"process()\">Simpan perubahan</ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "ry+1":
/*!*********************************************************************!*\
  !*** ./src/app/catalog-product-stock/catalog-product-stock.page.ts ***!
  \*********************************************************************/
/*! exports provided: CatalogProductStockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogProductStockPage", function() { return CatalogProductStockPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_catalog_product_stock_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./catalog-product-stock.page.html */ "cvn5");
/* harmony import */ var _catalog_product_stock_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog-product-stock.page.scss */ "tBD9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");













let CatalogProductStockPage = class CatalogProductStockPage {
    constructor(router, toastCtrl, storage, http, global, navController, route, transfer, file, alertController) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.navController = navController;
        this.route = route;
        this.transfer = transfer;
        this.file = file;
        this.alertController = alertController;
        this.showContent = false;
        this.stockList = [];
        this.route.params.subscribe((params) => {
            if (params['id']) {
                this.id = params['id'];
            }
            if (params['type']) {
                this.type = params['type'];
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
    add(id) {
        var stockIndex = this.stockList.findIndex(stock => stock.id == id);
        this.stockList[stockIndex].adjustment++;
    }
    remove(id) {
        var stockIndex = this.stockList.findIndex(stock => stock.id == id);
        if (this.stockList[stockIndex].adjustment > 0) {
            this.stockList[stockIndex].adjustment--;
        }
    }
    getData() {
        this.global.loadingPresent('mengambil data...');
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        let postData = { id: this.id };
        this.http.post(this.global.base_url + 'auth/product/detail', postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.product = data.product;
                var stockLists = [];
                for (let i of this.product.stock) {
                    stockLists.push({ id: i.id, name: i.name, enabled: i.enabled, stock: i.stock, adjustment: 0 });
                }
                this.stockList = stockLists;
                this.showContent = true;
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
        this.global.loadingPresent('menyimpan data...');
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        let postData = { id: this.id, type: this.type, stock_list: this.stockList };
        this.http.post(this.global.base_url + 'auth/product/stock_adjustment', postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.global.toastPresent(data.message);
                this.router.navigate(['/catalog-product-edit/' + this.id]);
            }
            else {
                console.log(data);
            }
            this.global.loadingDismiss();
        }, error => {
            console.log(error);
        });
    }
};
CatalogProductStockPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
CatalogProductStockPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-catalog-product-stock',
        template: _raw_loader_catalog_product_stock_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_catalog_product_stock_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CatalogProductStockPage);



/***/ }),

/***/ "tBD9":
/*!***********************************************************************!*\
  !*** ./src/app/catalog-product-stock/catalog-product-stock.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRhbG9nLXByb2R1Y3Qtc3RvY2sucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "tV5x":
/*!***********************************************************************!*\
  !*** ./src/app/catalog-product-stock/catalog-product-stock.module.ts ***!
  \***********************************************************************/
/*! exports provided: CatalogProductStockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogProductStockPageModule", function() { return CatalogProductStockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _catalog_product_stock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalog-product-stock-routing.module */ "0BKJ");
/* harmony import */ var _catalog_product_stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalog-product-stock.page */ "ry+1");







let CatalogProductStockPageModule = class CatalogProductStockPageModule {
};
CatalogProductStockPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _catalog_product_stock_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatalogProductStockPageRoutingModule"]
        ],
        declarations: [_catalog_product_stock_page__WEBPACK_IMPORTED_MODULE_6__["CatalogProductStockPage"]]
    })
], CatalogProductStockPageModule);



/***/ })

}]);
//# sourceMappingURL=catalog-product-stock-catalog-product-stock-module-es2015.js.map