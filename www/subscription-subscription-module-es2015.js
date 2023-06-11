(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscription-subscription-module"],{

/***/ "AfdY":
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.module.ts ***!
  \*****************************************************/
/*! exports provided: SubscriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageModule", function() { return SubscriptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _subscription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription-routing.module */ "KGXC");
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscription.page */ "V5vJ");







let SubscriptionPageModule = class SubscriptionPageModule {
};
SubscriptionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subscription_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscriptionPageRoutingModule"]
        ],
        declarations: [_subscription_page__WEBPACK_IMPORTED_MODULE_6__["SubscriptionPage"]]
    })
], SubscriptionPageModule);



/***/ }),

/***/ "DdsP":
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background:#912775;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1YnNjcmlwdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGIiwiZmlsZSI6InN1YnNjcmlwdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiM5MTI3NzU7XHJcbiAgXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "KGXC":
/*!*************************************************************!*\
  !*** ./src/app/subscription/subscription-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SubscriptionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageRoutingModule", function() { return SubscriptionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription.page */ "V5vJ");




const routes = [
    {
        path: '',
        component: _subscription_page__WEBPACK_IMPORTED_MODULE_3__["SubscriptionPage"]
    }
];
let SubscriptionPageRoutingModule = class SubscriptionPageRoutingModule {
};
SubscriptionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubscriptionPageRoutingModule);



/***/ }),

/***/ "Lgw8":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscription/subscription.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/tabs/tab-setting']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title slot=\"start\">Info berlangganan</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\">\r\n        <ion-label>Nama bisnis</ion-label>\r\n        <ion-note slot=\"end\" color=\"primary\">{{company.name}}</ion-note>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-label>Paket</ion-label>\r\n        <ion-badge color=\"dark\" *ngIf=\"company.package == 'Free'\" slot=\"end\">{{company.package}}</ion-badge>\r\n        <ion-badge color=\"primary\" *ngIf=\"company.package == 'Premium'\" slot=\"end\">{{company.package}}</ion-badge>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-label>Status</ion-label>\r\n        <ion-badge color=\"success\" *ngIf=\"company.status == 'Active'\" slot=\"end\">{{company.status}}</ion-badge>\r\n        <ion-badge color=\"danger\" *ngIf=\"company.status == 'Inactive'\" slot=\"end\">{{company.status}}</ion-badge>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" *ngIf=\"company.package != 'Free'\">\r\n        <ion-label class=\"ion-text-wrap\">Masa berlaku hingga</ion-label>\r\n        <ion-note color=\"dark\" slot=\"end\">{{company.expired_at}}</ion-note>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Beli paket berlangganan</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n      <ion-item lines=\"full\" button (click)=\"purchase('Premium',6)\">\r\n        <ion-label class=\"ion-text-wrap\"><strong>Premium 6 bulan </strong><br/>\r\n          <small>Harga Rp79.000 / bulan</small>\r\n        </ion-label>\r\n        <ion-text color=\"primary\" slot=\"end\">Rp474.000</ion-text>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" button (click)=\"purchase('Premium',12)\">\r\n        <ion-label class=\"ion-text-wrap\"><strong>Premium 1 tahun </strong><br/>\r\n          <small>Harga <strong>Rp59.000</strong> / bulan <br/><ion-badge color=\"success\"><strong>Hemat 25%</strong></ion-badge></small>\r\n        </ion-label>\r\n        <ion-text color=\"primary\" slot=\"end\">Rp708.000</ion-text>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "V5vJ":
/*!***************************************************!*\
  !*** ./src/app/subscription/subscription.page.ts ***!
  \***************************************************/
/*! exports provided: SubscriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPage", function() { return SubscriptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subscription_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subscription.page.html */ "Lgw8");
/* harmony import */ var _subscription_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscription.page.scss */ "DdsP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");











let SubscriptionPage = class SubscriptionPage {
    constructor(storage, http, global, router, loadingController, platform, nativePageTransitions, route) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.nativePageTransitions = nativePageTransitions;
        this.route = route;
        this.company = { name: '', address: '' };
        this.showContent = false;
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
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        this.http.post(this.global.base_url + 'auth/me', null, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.company = data.company;
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
    purchase(selectedPackage, selectedPeriod) {
        this.global.loadingPresent('memproses...');
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        let postData = { package: selectedPackage, period: selectedPeriod };
        this.http.post(this.global.base_url + 'auth/subscription/purchase', postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                console.log(data);
                window.open(data.payment.invoice_url);
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
SubscriptionPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
SubscriptionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subscription',
        template: _raw_loader_subscription_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subscription_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubscriptionPage);



/***/ })

}]);
//# sourceMappingURL=subscription-subscription-module-es2015.js.map