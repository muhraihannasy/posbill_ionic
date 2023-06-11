(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outlet-outlet-module"],{

/***/ "/4ph":
/*!*****************************************!*\
  !*** ./src/app/outlet/outlet.module.ts ***!
  \*****************************************/
/*! exports provided: OutletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPageModule", function() { return OutletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _outlet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outlet-routing.module */ "d6CE");
/* harmony import */ var _outlet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outlet.page */ "o235");







let OutletPageModule = class OutletPageModule {
};
OutletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _outlet_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutletPageRoutingModule"]
        ],
        declarations: [_outlet_page__WEBPACK_IMPORTED_MODULE_6__["OutletPage"]]
    })
], OutletPageModule);



/***/ }),

/***/ "YJo/":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outlet/outlet.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/tabs/tab-setting']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"font-size:13px; line-height:13px;\">Info berlangganan & Outlet</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n  <ion-card color=\"light\">\r\n    <ion-card-content color=\"light\">\r\n      <ion-item lines=\"none\" color=\"light\">\r\n        <ion-label>{{company.name}} <br/> <ion-text style=\"font-size:13px;\">Versi berlangganan</ion-text></ion-label>\r\n        <ion-text slot=\"end\"><strong>{{company.package}}</strong></ion-text>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card>\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-list>\r\n        <ion-item lines=\"full\" *ngFor=\"let item of outlet\" [routerLink]=\"['/outlet-detail/'+item.outlet.id]\" >\r\n          <ion-label>{{item.outlet.name}} <br/><small *ngIf=\"company.package == 'Premium'\">Masa aktif s/d : {{item.outlet.expired_at}}</small>\r\n            <small *ngIf=\"company.package == 'Lite'\"><ion-text color=\"primary\">Upgrade ke Premium</ion-text></small>\r\n            <!-- <br/>\r\n            <ion-button *ngIf=\"item.outlet.status == 'Expired' || item.outlet.status == 'Active'\">Perpanjang</ion-button>\r\n            <ion-button (click)=\"pay(item.outlet.subscription.payment_url)\" *ngIf=\"item.outlet.status == 'Pending'\" color=\"dark\">Bayar</ion-button>\r\n            <ion-button [routerLink]=\"['/outlet-detail/'+item.outlet.id]\" color=\"light\">Detail</ion-button> -->\r\n          </ion-label>\r\n\r\n          <ion-note slot=\"end\" color=\"success\" *ngIf=\"item.outlet.status == 'Active'\"><small>{{item.outlet.status}}</small></ion-note>\r\n          <ion-note slot=\"end\" color=\"danger\" *ngIf=\"item.outlet.status == 'Expired'\"><small>{{item.outlet.status}}</small></ion-note>\r\n          <ion-note slot=\"end\" color=\"warning\" *ngIf=\"item.outlet.status == 'Pending'\"><small>{{item.outlet.status}}</small></ion-note>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n   <ion-fab-button [routerLink]=\"['/outlet-add']\">\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n   </ion-fab-button>\r\n </ion-fab> -->\r\n\r\n <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button [routerLink]=\"['/outlet-add']\" *ngIf=\"company.package == 'Premium'\">\r\n    <ion-icon name=\"add-outline\"></ion-icon>\r\n  </ion-fab-button>\r\n  <ion-fab-button (click)=\"showToastLite()\" *ngIf=\"company.package == 'Lite'\">\r\n    <ion-icon name=\"add-outline\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "d6CE":
/*!*************************************************!*\
  !*** ./src/app/outlet/outlet-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OutletPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPageRoutingModule", function() { return OutletPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _outlet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outlet.page */ "o235");




const routes = [
    {
        path: '',
        component: _outlet_page__WEBPACK_IMPORTED_MODULE_3__["OutletPage"]
    }
];
let OutletPageRoutingModule = class OutletPageRoutingModule {
};
OutletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OutletPageRoutingModule);



/***/ }),

/***/ "o235":
/*!***************************************!*\
  !*** ./src/app/outlet/outlet.page.ts ***!
  \***************************************/
/*! exports provided: OutletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPage", function() { return OutletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_outlet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./outlet.page.html */ "YJo/");
/* harmony import */ var _outlet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outlet.page.scss */ "sZAI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "7uwA");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");












let OutletPage = class OutletPage {
    constructor(storage, http, global, router, loadingController, platform, route, bluetoothSerial, nativePageTransitions, alertController) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.route = route;
        this.bluetoothSerial = bluetoothSerial;
        this.nativePageTransitions = nativePageTransitions;
        this.alertController = alertController;
        this.company = { name: '', package: '' };
        // this.platform.backButton.subscribeWithPriority(5, () => {
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
        this.storage.getObject('company').then((company) => {
            this.company = company;
        });
    }
    getData() {
        this.global.loadingPresent('mengambil data...');
        this.storage.getObject('auth').then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            this.http.post(this.global.base_url + 'auth/outlet/list', null, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.outlet = data.outlet;
                    console.log(data);
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
    pay(url) {
        window.open(url);
    }
    showBetaAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Informasi',
                message: 'Versi Beta belum dapat menambahkan outlet lebih dari 1 outlet',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    showToastLite() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Tidak dapat menambahkan outlet, Upgrade Premium',
                message: 'Anda harus berlangganan 1 outlet premium untuk dapat menambahkan berlangganan outlet berikutnya',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
OutletPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_9__["BluetoothSerial"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_10__["NativePageTransitions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
OutletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-outlet',
        template: _raw_loader_outlet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_outlet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OutletPage);



/***/ }),

/***/ "sZAI":
/*!*****************************************!*\
  !*** ./src/app/outlet/outlet.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXRsZXQucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=outlet-outlet-module-es2015.js.map