(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-product-sales-report-product-sales-module"],{

/***/ "ITeT":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report-product-sales/report-product-sales.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-item lines=\"full\" color=\"light\">\r\n    <ion-label>Pilih outlet</ion-label>\r\n    <ion-select placeholder=\"Semua outlet\" interface=\"action-sheet\" [(ngModel)]=\"outlet_id\" (ionChange)=\"getDataTopProduct()\">\r\n      <ion-select-option value=\"All\">Semua outlet</ion-select-option>\r\n      <ion-select-option *ngFor=\"let item of outlet\" value=\"{{item.outlet.id}}\">{{item.outlet.name}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" size-xs=\"6\" size-sm=\"5\" >\r\n        <ion-item lines=\"full\">\r\n          <ion-label class=\"ion-text-wrap\"><small>Dari</small></ion-label>\r\n          <ion-datetime style=\"font-size:12px;\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMM-YYYY\"  display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"start_date\"></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" size-xs=\"6\" size-sm=\"5\">\r\n        <ion-item lines=\"full\">\r\n          <ion-label class=\"ion-text-wrap\"><small>Sampai</small></ion-label>\r\n          <ion-datetime style=\"font-size:12px;\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMM-YYYY\"  display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"end_date\" min=\"{{start_date}}\" (ionChange)=\"getDataTopProduct()\"></ion-datetime>\r\n        </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div style=\"margin-top:-25px;\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>Penjualan produk</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-item lines=\"none\" *ngFor=\"let item of product;index as i\">\r\n              <ion-label><small>{{item.product.name}}</small></ion-label>\r\n              <ion-note slot=\"end\" color=\"primary\">{{item.total_qty}}</ion-note>\r\n            </ion-item>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "MZCO":
/*!*******************************************************************!*\
  !*** ./src/app/report-product-sales/report-product-sales.page.ts ***!
  \*******************************************************************/
/*! exports provided: ReportProductSalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportProductSalesPage", function() { return ReportProductSalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_report_product_sales_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./report-product-sales.page.html */ "ITeT");
/* harmony import */ var _report_product_sales_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-product-sales.page.scss */ "PZET");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ "gcOT");












const { App } = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"];
let ReportProductSalesPage = class ReportProductSalesPage {
    constructor(storage, http, global, router, loadingController, platform, route, nativePageTransitions) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.route = route;
        this.nativePageTransitions = nativePageTransitions;
        this.outlet_id = 'All';
        this.start_date = '';
        this.end_date = '';
        this.start_date = this.global.parsingDate(this.global.getFullYear() + '-' + this.global.getMonth() + '-01');
        this.end_date = this.global.getDateOnlyNow();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.platform.ready().then(() => {
            this.storage.getObject('auth').then((auth) => {
                this.auth = auth;
                this.getDataOutlet();
                this.getDataTopProduct();
            });
        });
    }
    getDataOutlet() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        this.http.post(this.global.base_url + 'auth/outlet/list', null, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.storage.setObject('outlet', data.outlet);
                this.outlet = data.outlet;
                console.log(data);
            }
            else {
                console.log(data);
            }
        }, error => {
            console.log(error);
        });
    }
    getDataTopProduct() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        let postData = {
            outlet_id: this.outlet_id,
            start_date: this.global.parsingDate(this.start_date),
            end_date: this.global.parsingDate(this.end_date)
        };
        this.http.post(this.global.base_url + 'auth/report/sales_product_summary', postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.product = data.product_top;
                console.log(data);
            }
            else {
                console.log(data);
            }
            this.global.loadingDismiss();
        }, error => {
            this.global.loadingDismiss();
            console.log(error);
        });
    }
};
ReportProductSalesPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] }
];
ReportProductSalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report-product-sales',
        template: _raw_loader_report_product_sales_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_product_sales_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReportProductSalesPage);



/***/ }),

/***/ "PZET":
/*!*********************************************************************!*\
  !*** ./src/app/report-product-sales/report-product-sales.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQtcHJvZHVjdC1zYWxlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "dnjM":
/*!*********************************************************************!*\
  !*** ./src/app/report-product-sales/report-product-sales.module.ts ***!
  \*********************************************************************/
/*! exports provided: ReportProductSalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportProductSalesPageModule", function() { return ReportProductSalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _report_product_sales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-product-sales-routing.module */ "l6aT");
/* harmony import */ var _report_product_sales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-product-sales.page */ "MZCO");







let ReportProductSalesPageModule = class ReportProductSalesPageModule {
};
ReportProductSalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _report_product_sales_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportProductSalesPageRoutingModule"]
        ],
        declarations: [_report_product_sales_page__WEBPACK_IMPORTED_MODULE_6__["ReportProductSalesPage"]]
    })
], ReportProductSalesPageModule);



/***/ }),

/***/ "l6aT":
/*!*****************************************************************************!*\
  !*** ./src/app/report-product-sales/report-product-sales-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ReportProductSalesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportProductSalesPageRoutingModule", function() { return ReportProductSalesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _report_product_sales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-product-sales.page */ "MZCO");




const routes = [
    {
        path: '',
        component: _report_product_sales_page__WEBPACK_IMPORTED_MODULE_3__["ReportProductSalesPage"]
    }
];
let ReportProductSalesPageRoutingModule = class ReportProductSalesPageRoutingModule {
};
ReportProductSalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportProductSalesPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=report-product-sales-report-product-sales-module-es2015.js.map