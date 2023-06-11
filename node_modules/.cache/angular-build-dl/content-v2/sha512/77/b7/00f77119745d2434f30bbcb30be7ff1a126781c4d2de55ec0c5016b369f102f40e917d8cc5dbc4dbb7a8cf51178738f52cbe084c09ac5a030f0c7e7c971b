(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-payment-setting-payment-module"],{

/***/ "7bvL":
/*!*******************************************************************!*\
  !*** ./src/app/setting-payment/setting-payment-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SettingPaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPaymentPageRoutingModule", function() { return SettingPaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _setting_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting-payment.page */ "buUQ");




const routes = [
    {
        path: '',
        component: _setting_payment_page__WEBPACK_IMPORTED_MODULE_3__["SettingPaymentPage"]
    }
];
let SettingPaymentPageRoutingModule = class SettingPaymentPageRoutingModule {
};
SettingPaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingPaymentPageRoutingModule);



/***/ }),

/***/ "Fqf2":
/*!***********************************************************!*\
  !*** ./src/app/setting-payment/setting-payment.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingPaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPaymentPageModule", function() { return SettingPaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _setting_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting-payment-routing.module */ "7bvL");
/* harmony import */ var _setting_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting-payment.page */ "buUQ");







let SettingPaymentPageModule = class SettingPaymentPageModule {
};
SettingPaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _setting_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPaymentPageRoutingModule"]
        ],
        declarations: [_setting_payment_page__WEBPACK_IMPORTED_MODULE_6__["SettingPaymentPage"]]
    })
], SettingPaymentPageModule);



/***/ }),

/***/ "Ux9W":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-payment/setting-payment.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/setting/order-payment']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Metode pembayaran</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n  <ion-list>\r\n  <ion-item>\r\n    <ion-label>Tunai</ion-label>\r\n    <ion-toggle [(ngModel)]=\"setting.payment_cash\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Kartu kredit</ion-label>\r\n    <ion-toggle [(ngModel)]=\"setting.payment_credit_card\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Kartu debit</ion-label>\r\n    <ion-toggle [(ngModel)]=\"setting.payment_debit_card\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Transfer Bank</ion-label>\r\n    <ion-toggle [(ngModel)]=\"setting.payment_transfer\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>QRIS <br/><small>QRIS Statis (OVO, Gopay, DANA, LINKAJA, Shoppepay)</small></ion-label>\r\n    <ion-toggle [(ngModel)]=\"setting.payment_qris\"></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>QRIS Online <br/><small>QRIS Dinamis (OVO, Gopay, DANA, LINKAJA, Shoppepay)</small>\r\n    <br/><small><a href=\"https://posbill.id/qris-online\">Lihat informasi pengajuan QRIS online</a></small></ion-label>\r\n    <ion-toggle [(ngModel)]=\"setting.payment_qris_online\" [disabled]=\"setting.xendit_key == null\"></ion-toggle>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\">\r\n    <ion-button expand=\"block\" (click)=\"process()\">Simpan</ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "buUQ":
/*!*********************************************************!*\
  !*** ./src/app/setting-payment/setting-payment.page.ts ***!
  \*********************************************************/
/*! exports provided: SettingPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPaymentPage", function() { return SettingPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_setting_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./setting-payment.page.html */ "Ux9W");
/* harmony import */ var _setting_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting-payment.page.scss */ "huRx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");











let SettingPaymentPage = class SettingPaymentPage {
    constructor(storage, http, global, router, loadingController, platform, nativePageTransitions, route) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.nativePageTransitions = nativePageTransitions;
        this.route = route;
        this.setting = {
            payment_cash: false,
            payment_debit_card: false,
            payment_credit_card: false,
            payment_qris: false,
            payment_qris_online: false,
            payment_transfer: false
        };
        // this.platform.backButton.subscribeWithPriority(10, () => {
        //   this.router.navigate(['/tabs/tab4']);
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
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        this.http.post(this.global.base_url + 'auth/setting/data', null, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.setting = data.company;
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
        this.global.loadingPresent('menyimpan perubahan... ');
        this.storage.getObject('auth').then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                payment_cash: this.setting.payment_cash,
                payment_debit_card: this.setting.payment_debit_card,
                payment_credit_card: this.setting.payment_credit_card,
                payment_qris: this.setting.payment_qris,
                payment_qris_online: this.setting.payment_qris_online,
                payment_transfer: this.setting.payment_transfer
            };
            this.http.post(this.global.base_url + 'auth/setting/payment', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.global.toastPresent(data.message);
                    this.router.navigate(['/tabs/tab-setting']);
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
SettingPaymentPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
SettingPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-setting-payment',
        template: _raw_loader_setting_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_setting_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingPaymentPage);



/***/ }),

/***/ "huRx":
/*!***********************************************************!*\
  !*** ./src/app/setting-payment/setting-payment.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5nLXBheW1lbnQucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=setting-payment-setting-payment-module-es2015.js.map