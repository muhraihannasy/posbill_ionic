(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-setting-tab-setting-module"],{

/***/ "+zSB":
/*!*************************************************!*\
  !*** ./src/app/tab-setting/tab-setting.page.ts ***!
  \*************************************************/
/*! exports provided: TabSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSettingPage", function() { return TabSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab_setting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab-setting.page.html */ "4cuI");
/* harmony import */ var _tab_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-setting.page.scss */ "mjr7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../storage.service */ "qkCY");











let TabSettingPage = class TabSettingPage {
    constructor(nativePageTransitions, http, global, router, toastController, storage, alertController, platform) {
        // this.platform.backButton.subscribeWithPriority(10, () => {
        //   this.router.navigate(['/tabs/tab1']);
        // });
        this.nativePageTransitions = nativePageTransitions;
        this.http = http;
        this.global = global;
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.alertController = alertController;
        this.platform = platform;
        this.user = { name: '', level: '' };
        this.company = { name: '', package: '' };
    }
    ionViewWillEnter() {
        this.storage.getObject('company').then((company) => {
            this.company = company;
            this.storage.getObject('user').then((user) => {
                this.user = user;
            });
        });
    }
    clickToPage(page) {
        if (this.company.package == 'Lite' && page == '/setting-olshop') {
            this.global.toastPresent('Fitur toko online tersedia dalam versi Premium');
            return false;
        }
        if (this.company.package == 'Lite' && page == '/user') {
            this.global.toastPresent('Fitur pengguna tersedia dalam versi Premium');
            return false;
        }
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
        this.router.navigate([page]);
    }
    ionViewWillLeave() {
    }
    confirmLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Konfirmasi',
                message: 'Yakin untuk keluar dari akun Anda?   <br/> <br/> Perhatian : <br/> <span style="color:red">harap lakukan sinkronisasi data order terlebih dahulu, data offline akan dihapus saat Anda keluar akun!</span>',
                buttons: [
                    {
                        text: 'Sinkronkan data!',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.router.navigate(['/tabs/tab-order']);
                        }
                    }, {
                        text: 'Keluar',
                        handler: () => {
                            this.logout();
                            console.log('Confirm logout');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    logout() {
        this.storage.clear().then(() => {
            this.storage.removeItem('auth');
            this.storage.removeItem('user');
            this.storage.removeItem('company');
            this.storage.removeItem('outlet_active');
            this.storage.removeItem('outlet');
            this.storage.removeItem('product');
            this.router.navigate(['/login']);
        });
    }
};
TabSettingPage.ctorParameters = () => [
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
];
TabSettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab-setting',
        template: _raw_loader_tab_setting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabSettingPage);



/***/ }),

/***/ "/y35":
/*!***************************************************!*\
  !*** ./src/app/tab-setting/tab-setting.module.ts ***!
  \***************************************************/
/*! exports provided: TabSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSettingPageModule", function() { return TabSettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-setting.page */ "+zSB");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab_setting_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab-setting-routing.module */ "3q5p");









let TabSettingPageModule = class TabSettingPageModule {
};
TabSettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab_setting_page__WEBPACK_IMPORTED_MODULE_6__["TabSettingPage"] }]),
            _tab_setting_routing_module__WEBPACK_IMPORTED_MODULE_8__["TabSettingPageRoutingModule"],
        ],
        declarations: [_tab_setting_page__WEBPACK_IMPORTED_MODULE_6__["TabSettingPage"]]
    })
], TabSettingPageModule);



/***/ }),

/***/ "3q5p":
/*!***********************************************************!*\
  !*** ./src/app/tab-setting/tab-setting-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TabSettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSettingPageRoutingModule", function() { return TabSettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab_setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-setting.page */ "+zSB");




const routes = [
    {
        path: '',
        component: _tab_setting_page__WEBPACK_IMPORTED_MODULE_3__["TabSettingPage"],
    },
    {
        path: 'format-printer',
        loadChildren: () => __webpack_require__.e(/*! import() | format-printer-format-printer-module */ "format-printer-format-printer-module").then(__webpack_require__.bind(null, /*! ./format-printer/format-printer.module */ "BuxP")).then(m => m.FormatPrinterPageModule)
    },
    {
        path: 'order-payment',
        loadChildren: () => __webpack_require__.e(/*! import() | order-payment-order-payment-module */ "order-payment-order-payment-module").then(__webpack_require__.bind(null, /*! ./order-payment/order-payment.module */ "0Qbg")).then(m => m.OrderPaymentPageModule)
    },
    {
        path: 'online-shop',
        loadChildren: () => __webpack_require__.e(/*! import() | online-shop-online-shop-module */ "online-shop-online-shop-module").then(__webpack_require__.bind(null, /*! ./online-shop/online-shop.module */ "uXku")).then(m => m.OnlineShopPageModule)
    }
];
let TabSettingPageRoutingModule = class TabSettingPageRoutingModule {
};
TabSettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabSettingPageRoutingModule);



/***/ }),

/***/ "4cuI":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-setting/tab-setting.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\" color=\"light\" mode=\"ios\">\r\n  <!-- \r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label><strong>POS</strong></ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngIf=\"user.level=='Owner'\" (click)=\"clickToPage('/setting-sale')\" button>\r\n      <ion-icon name=\"cart-outline\" slot=\"start\"></ion-icon>\r\n      <small>Pengaturan penjualan</small>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"user.level=='Owner'\" (click)=\"clickToPage('/setting-order-type')\" button>\r\n      <ion-icon name=\"bag-handle-outline\" slot=\"start\"></ion-icon>\r\n      <small>Tipe pesanan</small>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"user.level=='Owner'\" (click)=\"clickToPage('/setting-payment')\" button>\r\n      <ion-icon name=\"card-outline\" slot=\"start\"></ion-icon>\r\n      <small>Metode pembayaran</small>\r\n    </ion-item>\r\n    <ion-item  *ngIf=\"user.level=='Owner'\" (click)=\"clickToPage('/setting-discount')\" button>\r\n      <ion-icon name=\"gift-outline\" slot=\"start\"></ion-icon>\r\n      <small>Diskon</small>\r\n    </ion-item>\r\n    <ion-item  *ngIf=\"user.level=='Owner'\" (click)=\"clickToPage('/setting-format')\" button>\r\n      <ion-icon name=\"receipt-outline\" slot=\"start\"></ion-icon>\r\n      <small>Format nota</small>\r\n    </ion-item>\r\n    <ion-item (click)=\"clickToPage('/setting-printer')\" button>\r\n      <ion-icon name=\"print-outline\" slot=\"start\"></ion-icon>\r\n      <small>Printer</small></ion-item>\r\n\r\n    <ion-item (click)=\"clickToPage('/customer')\" button>\r\n      <ion-icon name=\"woman-outline\" slot=\"start\"></ion-icon>\r\n      <small>Pelanggan</small></ion-item>\r\n\r\n    </ion-list>\r\n    <ion-card color=\"primary\" (click)=\"clickToPage('/setting-olshop')\">\r\n      <ion-card-content>\r\n        <h2>Toko Online</h2>\r\n        <h4>Atur toko online Anda dengan mudah</h4><br/>\r\n     \r\n        <ion-button fill=\"outline\" color=\"light\">Pengaturan Toko Online</ion-button>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-list style=\"margin-top:-20px;\">\r\n        <ion-list-header>\r\n          <ion-label><strong>Akun</strong></ion-label>\r\n        </ion-list-header>\r\n        <ion-item *ngIf=\"user.level=='Owner'\" (click)=\"clickToPage('/user')\" button>\r\n          <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\r\n          <small>Pengguna</small></ion-item>\r\n        <ion-item *ngIf=\"user.level=='Owner'\"  (click)=\"clickToPage('/outlet')\" button>\r\n          <ion-icon name=\"storefront-outline\" slot=\"start\"></ion-icon>\r\n          <small>Outlet & info berlangganan</small></ion-item>\r\n        <ion-item (click)=\"clickToPage('/account')\" button>\r\n          <ion-icon name=\"shield-checkmark-outline\" slot=\"start\"></ion-icon>\r\n          <small>Ubah akun</small>\r\n        </ion-item>\r\n        <ion-item href=\"https://tawk.to/chat/602cb322918aa261273f9dd9/1euq7jqev\" button>\r\n          <ion-icon name=\"chatbox-outline\" slot=\"start\"></ion-icon>\r\n          <small>Bantuan Live Chat</small>\r\n        </ion-item>\r\n       \r\n  </ion-list> -->\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"8\" size-md=\"4\" offset-md=\"3\">\r\n        <ion-card color=\"primary\">\r\n          <ion-card-content style=\"min-height: 90px\">\r\n            {{user.name}} <br />\r\n            <ion-note>{{user.level}}</ion-note>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col\r\n        size=\"4\"\r\n        size-md=\"2\"\r\n        class=\"ion-text-center\"\r\n        (click)=\"clickToPage('/account')\"\r\n      >\r\n        <ion-card color=\"dark\">\r\n          <ion-card-content style=\"min-height: 90px; white-space: nowrap\">\r\n            <ion-icon name=\"person-circle-outline\" color=\"light\"></ion-icon>\r\n            <p>Edit Profil</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"ion-text-center menu-setting\">\r\n      <ion-col\r\n        size=\"6\"\r\n        size-md=\"2\"\r\n        offset-md=\"3\"\r\n        (click)=\"clickToPage('/setting/order-payment')\"\r\n      >\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"cog-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>Order & <br />pembayaran</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col\r\n        size=\"6\"\r\n        size-md=\"2\"\r\n        (click)=\"clickToPage('/setting-order-type')\"\r\n      >\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"bag-handle-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>Tipe <br />pesanan</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col\r\n        size=\"6\"\r\n        size-md=\"2\"\r\n        (click)=\"clickToPage('/setting/format-printer')\"\r\n      >\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"receipt-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>Nota dan <br />Printer</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col\r\n        size=\"6\"\r\n        size-md=\"2\"\r\n        offset-md=\"3\"\r\n        (click)=\"clickToPage('/setting-online-shop')\"\r\n      >\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"cart-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>Toko <br />online</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" size-md=\"2\" (click)=\"clickToPage('/customer')\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"people-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>Data <br />Pelanggan</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" size-md=\"2\" (click)=\"clickToPage('/user')\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"person-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>Data <br />Pengguna</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col\r\n        size=\"6\"\r\n        size-md=\"2\"\r\n        offset-md=\"3\"\r\n        (click)=\"clickToPage('/outlet')\"\r\n      >\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"storefront-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>Outlet & <br />info paket</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" size-md=\"2\" (click)=\"clickToPage('/help-chat')\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"help-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>\r\n              Bantuan <br />\r\n              &nbsp;\r\n            </p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- <div class=\"ion-padding\">\r\n  <ion-button expand=\"block\" fill=\"link\" size=\"small\" color=\"danger\" (click)=\"confirmLogout()\"><ion-text color=\"danger\">Keluar akun</ion-text></ion-button>\r\n  </div> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ "mjr7":
/*!***************************************************!*\
  !*** ./src/app/tab-setting/tab-setting.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin: 0px;\n  cursor: pointer;\n}\n\nion-card-content {\n  min-height: 120px;\n}\n\n.menu-setting p {\n  font-size: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYi1zZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFFQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKIiwiZmlsZSI6InRhYi1zZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgLy8gcGFkZGluZzogMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4ubWVudS1zZXR0aW5nIHAge1xyXG4gICAgZm9udC1zaXplOiA3NSU7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=tab-setting-tab-setting-module-es2015.js.map