(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-report-tab-report-module"],{

/***/ "6HKE":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-report/tab-report.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-item lines=\"full\" color=\"light\">\r\n    <ion-label>Pilih outlet</ion-label>\r\n    <ion-select placeholder=\"Semua outlet\" interface=\"action-sheet\" [(ngModel)]=\"outlet_id\" (ionChange)=\"changeEvent()\">\r\n      <ion-select-option value=\"All\">Semua outlet</ion-select-option>\r\n      <ion-select-option *ngFor=\"let item of outlet\" value=\"{{item.outlet.id}}\">{{item.outlet.name}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" size-xs=\"6\" size-sm=\"5\" >\r\n        <ion-item lines=\"full\">\r\n          <ion-label class=\"ion-text-wrap\"><small>Dari</small></ion-label>\r\n          <ion-datetime *ngIf=\"company.package == 'Premium'\" style=\"font-size:12px;\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMM-YYYY\"  display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"start_date\" (ionChange)=\"changeEvent()\"></ion-datetime>\r\n          <ion-datetime *ngIf=\"company.package == 'Lite'\" style=\"font-size:12px;\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMM-YYYY\"  display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"start_date\" min=\"{{min_date}}\" (ionChange)=\"changeEvent()\"></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" size-xs=\"6\" size-sm=\"5\">\r\n        <ion-item lines=\"full\">\r\n          <ion-label class=\"ion-text-wrap\"><small>Sampai</small></ion-label>\r\n          <ion-datetime style=\"font-size:12px;\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMM-YYYY\"  display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"end_date\" min=\"{{start_date}}\" (ionChange)=\"changeEvent()\"></ion-datetime>\r\n        </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div style=\"margin-top:-25px;\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-md=\"6\">\r\n        <ion-card class=\"no-padding\">\r\n\r\n          <ion-card-content>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item button lines=\"full\" [routerLink]=\"['/report-sales/'+start_date+'/'+end_date+'/'+outlet_id]\">\r\n                    <ion-icon name=\"bar-chart-outline\" slot=\"start\"></ion-icon>\r\n                    <ion-label>Ringkasan penjualan</ion-label>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row style=\"text-align:center;padding-top:20px;\">\r\n                <ion-col>\r\n                  <small>\r\n                  <ion-text color=\"primary\">Penjualan kotor </ion-text> <br/>\r\n                  {{global.currency(totalGrossSales)}}\r\n                  </small>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <small>\r\n                    <ion-text color=\"primary\">Penjualan bersih </ion-text> <br/>\r\n                    {{global.currency(totalNetSales)}}\r\n                    </small>\r\n                    </ion-col>\r\n              </ion-row>\r\n              <ion-row style=\"text-align:center;padding-top:20px;\">\r\n                <ion-col>\r\n                  <small>\r\n                  <ion-text color=\"primary\">Jumlah order </ion-text> <br/>\r\n                  {{totalTrx}}\r\n                  </small>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <small>\r\n                    <ion-text color=\"primary\">Produk terjual </ion-text> <br/>\r\n                    {{totalQty}}\r\n                    </small>\r\n                    </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"no-padding\" *ngIf=\"company.package == 'Premium'\">\r\n\r\n          <ion-card-content>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item button lines=\"full\" [routerLink]=\"['/report-sales/'+start_date+'/'+end_date+'/'+outlet_id]\">\r\n                    <ion-icon name=\"accessibility-outline\" slot=\"start\"></ion-icon>\r\n                    <ion-label>Top pelanggan</ion-label>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row style=\"text-align:center;padding-top:20px;\">\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label color=\"primary\"><small>Pelanggan</small></ion-label>\r\n                    <ion-text slot=\"end\" color=\"primary\"><small>Total transaksi</small></ion-text>\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\" *ngFor=\"let cust of topCustomer\">\r\n                    <ion-label>{{cust.customer.name}}</ion-label>\r\n                    <ion-text slot=\"end\">{{global.currency(cust.total_amount)}}</ion-text>\r\n                  </ion-item>\r\n                </ion-col>\r\n                </ion-row>\r\n\r\n            </ion-grid>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"12\" size-md=\"6\" *ngIf=\"company.package == 'Premium'\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item button lines=\"full\" [routerLink]=\"['/report-product-sales/'+start_date+'/'+end_date+'/'+outlet_id]\">\r\n                    <ion-icon name=\"pie-chart-outline\" slot=\"start\"></ion-icon>\r\n                    <ion-label>Penjualan produk</ion-label>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"showChart\">\r\n                <ion-col size-xs=\"12\" size-md=\"12\">\r\n                  <div style=\"margin-top:30px;\">\r\n                  <google-chart [data]=\"pieChart\"></google-chart>\r\n                  </div>\r\n                </ion-col>\r\n                  <ion-col size-xs=\"12\" size-md=\"12\">\r\n                    <ion-item lines=\"none\" *ngFor=\"let item of productChartPie;index as i\">\r\n                      <ion-label *ngIf=\"i>0\"><small>{{item[0]}}</small></ion-label>\r\n                      <ion-note *ngIf=\"i>0\" slot=\"end\" color=\"primary\">{{item[1]}}</ion-note>\r\n                    </ion-item>\r\n\r\n                  </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-content>\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "J0x1":
/*!*************************************************!*\
  !*** ./src/app/tab-report/tab-report.module.ts ***!
  \*************************************************/
/*! exports provided: TabReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabReportPageModule", function() { return TabReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab_report_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-report.page */ "JCzJ");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab_report_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab-report-routing.module */ "nLKU");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-google-charts */ "omRQ");









let TabReportPageModule = class TabReportPageModule {
};
TabReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab_report_routing_module__WEBPACK_IMPORTED_MODULE_7__["TabReportPageRoutingModule"],
            ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__["Ng2GoogleChartsModule"]
        ],
        declarations: [_tab_report_page__WEBPACK_IMPORTED_MODULE_5__["TabReportPage"]]
    })
], TabReportPageModule);



/***/ }),

/***/ "JCzJ":
/*!***********************************************!*\
  !*** ./src/app/tab-report/tab-report.page.ts ***!
  \***********************************************/
/*! exports provided: TabReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabReportPage", function() { return TabReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab_report_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab-report.page.html */ "6HKE");
/* harmony import */ var _tab_report_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-report.page.scss */ "SuwT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");











let TabReportPage = class TabReportPage {
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
        this.totalNetSales = 0;
        this.totalTrx = 0;
        this.totalQty = 0;
        this.outlet_id = 'All';
        this.start_date = '';
        this.end_date = '';
        this.showChart = false;
        this.company = { name: '', package: '' };
        this.min_date = '';
        this.pieChart = {
            chartType: 'PieChart',
            dataTable: [
                ['Produk', 'Total order']
            ],
            //firstRowIsData: true,
            options: {
                'title': 'Produk terlaris',
                'legend': 'none',
                'chartArea': {
                    'width': '100%',
                    'height': '100%'
                },
            },
        };
        this.charttype = 'piechart';
        this.datachart = [];
        this.min_date = this.global.parsingDate(this.global.getFullYear2Ago() + '-' + this.global.getMonth2Ago() + '-01');
        this.start_date = this.global.parsingDate(this.global.getFullYear() + '-' + this.global.getMonth() + '-01');
        this.end_date = this.global.getDateOnlyNow();
    }
    ionViewWillEnter() {
        this.storage.getObject('auth').then((auth) => {
            this.auth = auth;
            this.getDataOutlet();
        });
        this.storage.getObject('company').then((company) => {
            this.company = company;
        });
    }
    changeEvent() {
        this.getDataSales();
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
    getDataSales() {
        this.storage.getObject('auth').then((auth) => {
            this.showChart = false;
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
                    this.totalNetSales = data.total_net_sales;
                    this.totalTrx = data.total_trx;
                    this.totalQty = data.total_qty;
                    console.log(data);
                }
                else {
                    console.log(data);
                }
                this.getDataTopProduct();
                this.getDataTopCustomer();
            }, error => {
                console.log(error);
            });
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
                var i = 1;
                let other_product = 0;
                var chartPie = [['Produk', 'Total Order']];
                for (let item of data.product_top) {
                    if (i <= 10) {
                        var thisItem = [item.product.name, parseInt(item.total_qty)];
                        chartPie.push(thisItem);
                    }
                    if (i > 10) {
                        var thisQty = parseInt(item.total_qty);
                        other_product += thisQty;
                    }
                    i++;
                }
                console.log(other_product);
                if (other_product > 0) {
                    let other = ['Produk lainnya', other_product];
                    chartPie.push(other);
                }
                this.productChartPie = chartPie;
                this.datachart = chartPie;
                console.log(chartPie);
                this.generatePieChart();
                console.log(data);
            }
            else {
                console.log(data);
            }
        }, error => {
            console.log(error);
        });
    }
    getDataTopCustomer() {
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
        this.http.post(this.global.base_url + 'auth/report/top_customer_summary', postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.topCustomer = data.customer_top;
                console.log(data);
            }
            else {
                console.log(data);
            }
        }, error => {
            console.log(error);
        });
    }
    generatePieChart() {
        this.pieChart.dataTable = this.productChartPie;
        this.pieChart.options = {
            'title': 'Produk terlaris',
            'legend': 'none',
            'chartArea': {
                'width': '100%',
                'height': '100%'
            },
        };
        this.showChart = true;
        console.log(this.pieChart);
    }
    detail(id) {
        let options = {
            direction: 'left',
            duration: 300,
            slowdownfactor: 0,
            slidePixels: 0,
            iosdelay: 0,
            androiddelay: 0,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 0
        };
        this.nativePageTransitions.slide(options);
        this.router.navigate(['/orders-detail/' + id]);
    }
    ionViewWillLeave() {
    }
};
TabReportPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] }
];
TabReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab-report',
        template: _raw_loader_tab_report_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab_report_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabReportPage);



/***/ }),

/***/ "SuwT":
/*!*************************************************!*\
  !*** ./src/app/tab-report/tab-report.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItcmVwb3J0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "nLKU":
/*!*********************************************************!*\
  !*** ./src/app/tab-report/tab-report-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TabReportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabReportPageRoutingModule", function() { return TabReportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab_report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-report.page */ "JCzJ");




const routes = [
    {
        path: '',
        component: _tab_report_page__WEBPACK_IMPORTED_MODULE_3__["TabReportPage"],
    }
];
let TabReportPageRoutingModule = class TabReportPageRoutingModule {
};
TabReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabReportPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tab-report-tab-report-module-es2015.js.map