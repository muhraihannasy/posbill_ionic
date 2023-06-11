(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-sales-report-sales-module"],{

/***/ "6gLr":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report-sales/report-sales.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-item lines=\"full\" color=\"light\">\r\n    <ion-label>Pilih outlet</ion-label>\r\n    <ion-select placeholder=\"Semua outlet\" interface=\"action-sheet\" [(ngModel)]=\"outlet_id\" (ionChange)=\"changeEvent()\">\r\n      <ion-select-option value=\"All\">Semua outlet</ion-select-option>\r\n      <ion-select-option *ngFor=\"let item of outlet\" value=\"{{item.outlet.id}}\">{{item.outlet.name}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" size-xs=\"6\" size-sm=\"5\" >\r\n        <ion-item lines=\"full\">\r\n          <ion-label class=\"ion-text-wrap\"><small>Dari</small></ion-label>\r\n          <ion-datetime *ngIf=\"company.package == 'Premium'\" style=\"font-size:12px;\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMM-YYYY\"  display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"start_date\" (ionChange)=\"changeEvent()\"></ion-datetime>\r\n          <ion-datetime *ngIf=\"company.package == 'Lite'\" style=\"font-size:12px;\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMM-YYYY\"  display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"start_date\" min=\"{{min_date}}\" (ionChange)=\"changeEvent()\"></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" size-xs=\"6\" size-sm=\"5\">\r\n        <ion-item lines=\"full\">\r\n          <ion-label class=\"ion-text-wrap\"><small>Sampai</small></ion-label>\r\n          <ion-datetime style=\"font-size:12px;\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMM-YYYY\"  display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"end_date\" min=\"{{start_date}}\" (ionChange)=\"changeEvent()\"></ion-datetime>\r\n        </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div style=\"margin-top:-25px;\">\r\n  <ion-card class=\"no-padding\">\r\n    <ion-card-content>\r\n      <ion-item lines=\"full\">\r\n        <ion-label><strong><small>Penjualan kotor</small></strong></ion-label>\r\n        <ion-note color=\"dark\"><strong><small>{{global.currency(totalGrossSales)}}</small></strong></ion-note>\r\n      </ion-item>\r\n      <ion-item lines=\"full\">\r\n        <ion-label><small>Diskon</small></ion-label>\r\n        <ion-note color=\"dark\"><small>({{global.currency(totalDiscount)}})</small></ion-note>\r\n      </ion-item>\r\n      <ion-item lines=\"full\">\r\n        <ion-label><strong><small>Penjualan bersih</small></strong></ion-label>\r\n        <ion-note color=\"dark\"><strong><small>{{global.currency(totalNetSales)}}</small></strong></ion-note>\r\n      </ion-item>\r\n      <ion-item lines=\"full\">\r\n        <ion-label><small>Service charge</small></ion-label>\r\n        <ion-note color=\"dark\"><small>{{global.currency(totalServiceCharge)}}</small></ion-note>\r\n      </ion-item>\r\n      <ion-item lines=\"full\">\r\n        <ion-label><small>Pajak</small></ion-label>\r\n        <ion-note color=\"dark\"><small>{{global.currency(totalTax)}}</small></ion-note>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-label><small>Total uang diterima</small></ion-label>\r\n        <ion-note color=\"dark\"><small>{{global.currency(totalCollected)}}</small></ion-note>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"no-padding\" *ngIf=\"company.package == 'Premium'\">\r\n    <ion-card-content>\r\n      <ion-item lines=\"full\">\r\n        <ion-label><strong><small>Penjualan bersih</small></strong></ion-label>\r\n        <ion-note color=\"dark\"><strong><small>{{global.currency(totalNetSales)}}</small></strong></ion-note>\r\n      </ion-item>\r\n      <ion-item lines=\"full\">\r\n        <ion-label><small>Harga pokok penjualan</small></ion-label>\r\n        <ion-note color=\"dark\"><small>({{global.currency(totalCost)}})</small></ion-note>\r\n      </ion-item>\r\n      <ion-item lines=\"full\">\r\n        <ion-label><strong><small>Laba / rugi kotor</small></strong></ion-label>\r\n        <ion-note color=\"dark\"><strong><small>{{global.currency(totalMargin)}}</small></strong></ion-note>\r\n      </ion-item>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "9bGN":
/*!*****************************************************!*\
  !*** ./src/app/report-sales/report-sales.module.ts ***!
  \*****************************************************/
/*! exports provided: ReportSalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSalesPageModule", function() { return ReportSalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _report_sales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-sales-routing.module */ "lG/C");
/* harmony import */ var _report_sales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-sales.page */ "TIy/");







let ReportSalesPageModule = class ReportSalesPageModule {
};
ReportSalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _report_sales_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportSalesPageRoutingModule"]
        ],
        declarations: [_report_sales_page__WEBPACK_IMPORTED_MODULE_6__["ReportSalesPage"]]
    })
], ReportSalesPageModule);



/***/ }),

/***/ "TIy/":
/*!***************************************************!*\
  !*** ./src/app/report-sales/report-sales.page.ts ***!
  \***************************************************/
/*! exports provided: ReportSalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSalesPage", function() { return ReportSalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_report_sales_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./report-sales.page.html */ "6gLr");
/* harmony import */ var _report_sales_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-sales.page.scss */ "r70k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");











let ReportSalesPage = class ReportSalesPage {
    constructor(storage, http, global, router, loadingController, platform, route, nativePageTransitions) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.route = route;
        this.nativePageTransitions = nativePageTransitions;
        this.auth = { token: '' };
        this.totalGrossSales = 0;
        this.totalDiscount = 0;
        this.totalNetSales = 0;
        this.totalServiceCharge = 0;
        this.totalTax = 0;
        this.totalCollected = 0;
        this.totalCost = 0;
        this.totalExpense = 0;
        this.totalQty = 0;
        this.totalMargin = 0;
        this.outlet_id = 'All';
        this.start_date = '';
        this.end_date = '';
        this.totalTrx = 0;
        this.company = { name: '', package: '' };
        this.min_date = '';
        this.route.params.subscribe((params) => {
            if (params['start_date']) {
                this.start_date = params['start_date'];
            }
            if (params['end_date']) {
                this.end_date = params['end_date'];
            }
            if (params['outlet_id']) {
                this.outlet_id = params['outlet_id'];
            }
        });
    }
    ngOnInit() {
        this.min_date = this.global.parsingDate(this.global.getFullYear2Ago() + '-' + this.global.getMonth2Ago() + '-01');
    }
    ionViewWillEnter() {
        this.storage.getObject('auth').then((auth) => {
            this.auth = auth;
            this.getDataOutlet();
            // this.getDataSales();
        });
        this.storage.getObject('company').then((company) => {
            this.company = company;
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
                this.getDataSales();
                console.log(data);
            }
            else {
                console.log(data);
            }
        }, error => {
            console.log(error);
        });
    }
    changeEvent() {
        this.getDataSales();
    }
    getDataSales() {
        this.storage.getObject('auth').then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                outlet_id: this.outlet_id,
                start_date: this.global.parsingDate(this.start_date),
                end_date: this.global.parsingDate(this.end_date)
            };
            this.http.post(this.global.base_url + 'auth/report/sales_summary', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.totalGrossSales = data.total_gross_sales;
                    this.totalDiscount = data.total_discount;
                    this.totalNetSales = data.total_net_sales;
                    this.totalServiceCharge = data.total_service_charge;
                    this.totalTax = data.total_tax;
                    this.totalCollected = data.total_collected;
                    this.totalCost = data.total_cost;
                    this.totalMargin = data.total_margin;
                    this.totalTrx = data.total_trx;
                    this.totalQty = data.total_qty;
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
};
ReportSalesPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] }
];
ReportSalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report-sales',
        template: _raw_loader_report_sales_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_sales_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReportSalesPage);



/***/ }),

/***/ "lG/C":
/*!*************************************************************!*\
  !*** ./src/app/report-sales/report-sales-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ReportSalesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSalesPageRoutingModule", function() { return ReportSalesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _report_sales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-sales.page */ "TIy/");




const routes = [
    {
        path: '',
        component: _report_sales_page__WEBPACK_IMPORTED_MODULE_3__["ReportSalesPage"]
    }
];
let ReportSalesPageRoutingModule = class ReportSalesPageRoutingModule {
};
ReportSalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportSalesPageRoutingModule);



/***/ }),

/***/ "r70k":
/*!*****************************************************!*\
  !*** ./src/app/report-sales/report-sales.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQtc2FsZXMucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=report-sales-report-sales-module-es2015.js.map