(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-payment-qris-orders-payment-qris-module"],{

/***/ "0+jD":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders-payment-qris/orders-payment-qris.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-title>QRIS Payment</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"showContent\" mode=\"ios\" class=\"ion-padding\">\r\n\r\n<div style=\"text-align:center;\">\r\n\r\n  <h3>TRX-{{order.order_number}}</h3>\r\n\r\n    <ngx-qrcode\r\n      [elementType]=\"elementType\"\r\n      [value]=\"qrvalue\"\r\n      cssClass=\"aclass\"\r\n      errorCorrectionLevel=\"L\">\r\n    </ngx-qrcode>\r\n\r\n    <h4>{{global.currency(order.total)}}</h4>\r\n</div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer mode=\"ios\" class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col><ion-button (click)=\"toPrint()\" expand=\"block\" fill=\"outline\">Cetak ulang</ion-button></ion-col>\r\n      <ion-col><ion-button (click)=\"checkPayment()\" expand=\"block\">Cek pembayaran</ion-button></ion-col>\r\n      <ion-col><ion-button [routerLink]=\"['/orders-detail/'+id+'/list']\" expand=\"block\" color=\"light\">Lihat Transaksi</ion-button></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "D2m8":
/*!*****************************************************************!*\
  !*** ./src/app/orders-payment-qris/orders-payment-qris.page.ts ***!
  \*****************************************************************/
/*! exports provided: OrdersPaymentQrisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPaymentQrisPage", function() { return OrdersPaymentQrisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orders_payment_qris_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders-payment-qris.page.html */ "0+jD");
/* harmony import */ var _orders_payment_qris_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders-payment-qris.page.scss */ "fPW6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "7uwA");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! esc-pos-encoder-ionic */ "+4vP");
/* harmony import */ var esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _datecsprinter_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../datecsprinter.service */ "DSr2");
/* harmony import */ var _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/base64-to-gallery/ngx */ "kEDg");















let OrdersPaymentQrisPage = class OrdersPaymentQrisPage {
    constructor(storage, http, global, router, loadingController, platform, route, bluetoothSerial, nativePageTransitions, alertController, DatecsPrinter, base64ToGallery) {
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
        this.DatecsPrinter = DatecsPrinter;
        this.base64ToGallery = base64ToGallery;
        this.title = 'app';
        this.elementType = 'img';
        this.qrvalue = '';
        this.storageOrder = [];
        this.showContent = false;
        this.disabledAnimation = false;
        this.content = '';
        this.contentWA = '';
        this.orderOffline = [];
        this.route.params.subscribe((params) => {
            if (params['id']) {
                this.id = params['id'];
                this.source = params['source'];
            }
        });
        this.bluetoothSerial
            .isEnabled()
            .then((response) => {
            const message = response.enabled ? 'enabled' : 'disabled';
            console.log(`Bluetooth is ${message}`);
        })
            .catch(() => {
            console.log('Error checking bluetooth status');
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.showContent = false;
        this.platform.ready().then(() => {
            this.storage.getObject('printer').then((printer) => {
                if (printer != null) {
                    this.printer = printer.address;
                }
            });
            this.storage.getObject('company').then((company) => {
                this.company = company;
            });
            this.storage.getObject('outlet_active').then((outlet) => {
                this.outlet = outlet;
            });
            this.storage.getObject('auth').then((auth) => {
                this.auth = auth;
                this.storage.getObject('user').then((user) => {
                    this.user = user;
                    this.getDataOrder();
                });
            });
        });
    }
    getDataOrder() {
        this.global.loadingPresent('mengambil kode QRIS');
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        let postData = {
            id: this.id
        };
        this.http.post(this.global.base_url + 'auth/order/get_detail', postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.order = data.order;
                this.qrvalue = data.order.payment_ref2;
                if (data.order.payment_ref2 == null) {
                    this.getQRIS();
                }
                else {
                    this.global.loadingDismiss();
                    this.showContent = true;
                    setTimeout(() => {
                        this.toPrint();
                    }, 2000);
                    setInterval(() => {
                        this.checkPaymentSilent();
                    }, 2000);
                }
            }
            else {
                console.log(data);
            }
        }, error => {
            console.log(error);
            this.global.loadingDismiss();
        });
    }
    getQRIS() {
        this.storage.getObject('auth').then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                id: this.id
            };
            this.http.post(this.global.base_url + 'auth/order/get_qris', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    // this.printQRIS();
                    this.qrvalue = data.xendit.qr_string;
                    setTimeout(() => {
                        this.toPrint();
                    }, 2000);
                    setInterval(() => {
                        this.checkPaymentSilent();
                    }, 2000);
                }
                else {
                    console.log(data);
                }
                this.showContent = true;
                this.global.loadingDismiss();
            }, error => {
                console.log(error);
                this.global.loadingDismiss();
            });
        });
    }
    toPrint() {
        this.global.loadingPresent('mencetak kode QRIS..');
        const imgPath = document.querySelector(".aclass img");
        let base64qr = imgPath.src;
        this.printQRIS(base64qr);
        console.log(base64qr);
    }
    printQRIS(base64qr) {
        let img = new Image();
        img.src = base64qr;
        img.onload = () => {
            const encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_11___default.a();
            const result = encoder.initialize();
            // result.qrcode(qr_string, 2, 8, 'l');
            result.align('left')
                .bold(true)
                .line('TRX-' + this.order.order_number)
                .bold(false)
                .line('Scan kode QRIS untuk pembayaran ke ' + this.company.name)
                .newline()
                .align('left')
                .image(img, 256, 256, 'atkinson')
                .line('Total : ' + this.global.currency(this.order.total))
                .newline().newline();
            const resultByte = result.encode();
            console.log(resultByte);
            // const resultQr = this.content;
            this.connectToBluetoothPrinter()
                .subscribe(_ => {
                //2. Connected successfully
                this.bluetoothSerial.write(resultByte)
                    .then(_ => {
                    //3. Print successful
                    //If you want to tell user print is successful,
                    //handle it here
                    //4. IMPORTANT! Disconnect bluetooth after printing
                    console.log(_);
                    this.global.loadingDismiss();
                    this.disconnectBluetoothPrinter();
                }, err => {
                    //If there is an error printing to bluetooth printer
                    //handle it here
                    this.global.loadingDismiss();
                    console.log(err);
                });
            }, err => {
                this.global.loadingDismiss();
                //If there is an error connecting to bluetooth printer
                //handle it here
            });
        };
    }
    checkPayment() {
        this.global.loadingPresent('mengecek pembayaran...');
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        let postData = {
            id: this.id
        };
        this.http.post(this.global.base_url + 'auth/order/get_qris_payment', postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                console.log(data);
                if (data.paid == 1) {
                    this.global.toastPresent('Pembayaran telah diterima!');
                    this.storage.getObject('order').then((data) => {
                        if (data != null) {
                            var orderIndex = data.findIndex(x => x.id === this.id);
                            data[orderIndex].status = 'Completed';
                            this.storage.setObject('order', data);
                            this.router.navigate(['/orders-detail/' + this.id + '/list']);
                        }
                    });
                }
                else {
                    this.global.toastPresent('Belum ada pembayaran pada QRIS ini!');
                }
            }
            else {
                console.log(data);
            }
            this.global.loadingDismiss();
        }, error => {
            console.log(error);
            this.global.loadingDismiss();
        });
    }
    checkPaymentSilent() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        let postData = {
            id: this.id
        };
        this.http.post(this.global.base_url + 'auth/order/get_qris_payment', postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                console.log(data);
                if (data.paid == 1) {
                    this.global.toastPresent('Pembayaran telah diterima!');
                    this.storage.getObject('order').then((data) => {
                        if (data != null) {
                            var orderIndex = data.findIndex(x => x.id === this.id);
                            data[orderIndex].status = 'Completed';
                            this.storage.setObject('order', data);
                            this.router.navigate(['/orders-detail/' + this.id + '/list']);
                        }
                    });
                }
            }
            else {
                console.log(data);
            }
        }, error => {
            console.log(error);
        });
    }
    connectToBluetoothPrinter() {
        //This will connect to bluetooth printer via the mac address provided
        var a = this.bluetoothSerial.connect(this.printer);
        console.log(a);
        return a;
    }
    disconnectBluetoothPrinter() {
        //This will disconnect the current bluetooth connection
        return this.bluetoothSerial.disconnect();
    }
};
OrdersPaymentQrisPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_9__["BluetoothSerial"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_10__["NativePageTransitions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _datecsprinter_service__WEBPACK_IMPORTED_MODULE_12__["DatecsprinterService"] },
    { type: _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_13__["Base64ToGallery"] }
];
OrdersPaymentQrisPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orders-payment-qris',
        template: _raw_loader_orders_payment_qris_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_payment_qris_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrdersPaymentQrisPage);



/***/ }),

/***/ "DIbh":
/*!*******************************************************************!*\
  !*** ./src/app/orders-payment-qris/orders-payment-qris.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrdersPaymentQrisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPaymentQrisPageModule", function() { return OrdersPaymentQrisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");
/* harmony import */ var _orders_payment_qris_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders-payment-qris-routing.module */ "XxVr");
/* harmony import */ var _orders_payment_qris_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders-payment-qris.page */ "D2m8");








let OrdersPaymentQrisPageModule = class OrdersPaymentQrisPageModule {
};
OrdersPaymentQrisPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orders_payment_qris_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrdersPaymentQrisPageRoutingModule"],
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__["NgxQRCodeModule"]
        ],
        declarations: [_orders_payment_qris_page__WEBPACK_IMPORTED_MODULE_7__["OrdersPaymentQrisPage"]]
    })
], OrdersPaymentQrisPageModule);



/***/ }),

/***/ "XxVr":
/*!***************************************************************************!*\
  !*** ./src/app/orders-payment-qris/orders-payment-qris-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: OrdersPaymentQrisPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPaymentQrisPageRoutingModule", function() { return OrdersPaymentQrisPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orders_payment_qris_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-payment-qris.page */ "D2m8");




const routes = [
    {
        path: '',
        component: _orders_payment_qris_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPaymentQrisPage"]
    }
];
let OrdersPaymentQrisPageRoutingModule = class OrdersPaymentQrisPageRoutingModule {
};
OrdersPaymentQrisPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersPaymentQrisPageRoutingModule);



/***/ }),

/***/ "fPW6":
/*!*******************************************************************!*\
  !*** ./src/app/orders-payment-qris/orders-payment-qris.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMtcGF5bWVudC1xcmlzLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=orders-payment-qris-orders-payment-qris-module-es2015.js.map