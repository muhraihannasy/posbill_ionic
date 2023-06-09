(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Project Novatama\Ionic 2\posbill_ionic\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyC7-WtIvlEaRKyudmawhBZe41sDxxO8TV8",
        authDomain: "nstekapps-posbill.firebaseapp.com",
        databaseURL: "https://nstekapps-posbill-default-rtdb.firebaseio.com",
        projectId: "nstekapps-posbill",
        storageBucket: "gs://nstekapps-posbill.appspot.com",
        messagingSenderId: "419022810645",
        appId: "1:419022810645:web:3e80c9727ab8f7b84d681c",
        measurementId: "G-LERQF38YQF",
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "S36L":
/*!*****************************************!*\
  !*** ./src/app/notification.service.ts ***!
  \*****************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




let NotificationService = class NotificationService {
    constructor(toastController, router) {
        this.toastController = toastController;
        this.router = router;
    }
    showNotification(header, message, id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: header,
                message: message,
                buttons: [
                    {
                        side: "end",
                        text: "lihat",
                        handler: () => {
                            this.router.navigate([`orders-detail/${id}/list`]);
                        }
                    }
                ],
                duration: 5000,
                position: "top",
                color: "light",
                cssClass: "custom-toast",
            });
            toast.present();
        });
    }
};
NotificationService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], NotificationService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _fcm_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fcm.service */ "og4U");











const { App } = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"];
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, router, location, fcmService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.location = location;
        this.fcmService = fcmService;
        this.initializeApp();
        this.registerBackButton();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.fcmService.initPush();
        });
    }
    registerBackButton() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            var thisUrl = this.router.url;
            var splitUrl = thisUrl.split("/");
            if (this.router.url == "/tabs/tab-pos" || this.router.url == "/login") {
                App.exitApp();
            }
            else if (this.router.url == "/register") {
                this.router.navigate(["/login"]);
            }
            else if (this.router.url == "/tabs/tab-order" ||
                this.router.url == "/tabs/tab-report" ||
                this.router.url == "/tabs/tab-catalog" ||
                this.router.url == "/tabs/tab-setting" ||
                this.router.url == "/payment-options" ||
                this.router.url == "/booking") {
                this.router.navigate(["/tabs/tab-pos"]);
            }
            else if (splitUrl[1] == "orders-detail") {
                this.router.navigate(["/tabs/tab-order"]);
            }
            else if (this.router.url == "/catalog-category" ||
                this.router.url == "/catalog-product") {
                this.router.navigate(["/tabs/tab-catalog"]);
            }
            else if (this.router.url == "/setting-sale" ||
                this.router.url == "/setting-payment" ||
                this.router.url == "/setting-discount" ||
                this.router.url == "/setting-format" ||
                this.router.url == "/setting-printer" ||
                this.router.url == "/outlet" ||
                this.router.url == "/customer" ||
                this.router.url == "/user" ||
                this.router.url == "/account" ||
                this.router.url == "/subscription") {
                this.router.navigate(["/tabs/tab-setting"]);
            }
            else if (this.router.url == "/catalog-category-add" ||
                splitUrl[1] == "catalog-category-edit") {
                this.router.navigate(["/catalog-category"]);
            }
            else if (this.router.url == "/catalog-product-add" ||
                splitUrl[1] == "catalog-product-edit") {
                this.router.navigate(["/catalog-product"]);
            }
            else if (this.router.url == "/discount-add" ||
                splitUrl[1] == "discount-edit") {
                this.router.navigate(["/setting-discount"]);
            }
            else if (this.router.url == "/outlet-add" ||
                splitUrl[1] == "outlet-edit") {
                this.router.navigate(["/outlet"]);
            }
            else if (this.router.url == "/user-add" || splitUrl[1] == "user-edit") {
                this.router.navigate(["/user"]);
            }
            else if (this.router.url == "/customer-add" ||
                splitUrl[1] == "customer-edit") {
                this.router.navigate(["/customer"]);
            }
            else if (splitUrl[1] == "booking-detail") {
                this.router.navigate(["/booking"]);
            }
            else if (splitUrl[1] == "select-customer" ||
                this.router.url == "/select-discount") {
                this.router.navigate(["/payment-options"]);
            }
            else if (splitUrl[1] == "report-sales" ||
                splitUrl[1] == "report-product-sales") {
                this.router.navigate(["/tabs/tab-report"]);
            }
            else if (this.router.url == "/account-edit") {
                this.router.navigate(["/account"]);
            }
            else {
                this.location.back();
            }
            console.log(this.router.url);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _fcm_service__WEBPACK_IMPORTED_MODULE_10__["FcmService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-app mode=\"ios\">\r\n  <ion-router-outlet animated=\"false\"></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "METt");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "7uwA");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-google-charts */ "omRQ");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/base64-to-gallery/ngx */ "kEDg");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "fLLL");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "zzaN");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
























// import { PDFGenerator } from '@ionic-native/pdf-generator';



let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            ng2_google_charts__WEBPACK_IMPORTED_MODULE_16__["Ng2GoogleChartsModule"],
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_22__["NgxQRCodeModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_26__["AngularFireStorageModule"],
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"],
            _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_13__["Printer"],
            _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_14__["BluetoothSerial"],
            _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_15__["NativePageTransitions"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__["FileTransferObject"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__["File"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_19__["GooglePlus"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_20__["BarcodeScanner"],
            _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_21__["Base64ToGallery"],
            _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_23__["NativeAudio"],
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_24__["Clipboard"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__["FileTransfer"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "dVwY":
/*!***********************************!*\
  !*** ./src/app/global.service.ts ***!
  \***********************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.service */ "qkCY");





let GlobalService = class GlobalService {
    constructor(http, loadingController, toastController, storage) {
        this.http = http;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.storage = storage;
        // base_url = 'http://localhost/Tokomobile-admin/public/api/';
        // public base_url = "http://127.0.0.1:8000/api/";
        this.appname = "Posbill";
        // public domain = "https://app.posbill.id/";
        this.domain = "https://app.posbill.dev/";
        this.base_url = "http://127.0.0.1:8000/api/";
        this.basic_key = "6EDE2F267F8A7439B62CAA95A56A25D47B05E16B0D9FEC79676DD0E7E96E884A";
        this.topicName = "posbill";
        this.base_url = this.domain + "api/";
    }
    getHeader() {
        var headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        return headers;
    }
    currency(angka, prefix = "Rp") {
        if (angka == null) {
            angka = 0;
        }
        angka = angka.toString();
        var number_string = angka.replace(/[^,\d]/g, "").toString(), split = number_string.split(","), sisa = split[0].length % 3, rupiah = split[0].substr(0, sisa), ribuan = split[0].substr(sisa).match(/\d{3}/gi);
        // tambahkan titik jika yang di input sudah menjadi angka ribuan
        if (ribuan) {
            var separator = sisa ? "." : "";
            rupiah += separator + ribuan.join(".");
        }
        rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
        return prefix == undefined ? rupiah : rupiah ? "Rp" + rupiah : "";
    }
    getFirstImage(image) {
        return image.split(",")[0];
    }
    saleStatus(status) {
        if (status == 1)
            return "Pending";
        if (status == 2)
            return "Diproses";
        if (status == 3)
            return "Selesai";
        if (status == 4)
            return "Dibatalkan";
    }
    paymentStatus(status) {
        if (status == 1)
            return "Pending";
        if (status == 2)
            return "Lunas";
    }
    getDateNow() {
        var d = new Date();
        var dString = this.getFullYear() +
            "-" +
            this.getMonth() +
            "-" +
            this.getDate() +
            " " +
            this.getHour() +
            ":" +
            this.getMinute() +
            ":" +
            this.getSecond();
        return dString;
    }
    getDateOnlyNow() {
        var d = new Date();
        var dString = this.getFullYear() + "-" + this.getMonth() + "-" + this.getDate();
        return dString;
    }
    getFullYear() {
        var year = new Date();
        var yearString = String(year.getFullYear());
        return yearString;
    }
    getFullYear2Ago() {
        var year = new Date();
        year.setMonth(year.getMonth() - 2);
        var yearString = String(year.getFullYear());
        return yearString;
    }
    getYear() {
        var year = new Date();
        var yearString = String(year.getFullYear().toString().substr(-2));
        return yearString;
    }
    getMonth() {
        var dateStr = new Date();
        var month = String(dateStr.getMonth() + 1);
        var monthStr = String(month);
        if (monthStr.length == 1) {
            var monthStr = "0" + monthStr;
        }
        return monthStr;
    }
    getNameDate(date, option) {
        const dateFormatter = new Intl.DateTimeFormat("id-ID", option);
        const formattedDate = dateFormatter.format(date);
        return formattedDate;
    }
    getMonth2Ago() {
        var dateStr = new Date();
        dateStr.setMonth(dateStr.getMonth() - 2);
        var month = String(dateStr.getMonth() + 1);
        var monthStr = String(month);
        if (monthStr.length == 1) {
            var monthStr = "0" + monthStr;
        }
        return monthStr;
    }
    getDate() {
        var dateStr = new Date();
        var dateDay = dateStr.getDate();
        var dateDayStr = String(dateDay);
        if (dateDayStr.length == 1) {
            var dateDayStr = "0" + dateDayStr;
        }
        return dateDayStr;
    }
    getHour() {
        var hour = new Date();
        var hourString = String(hour.getHours());
        return hourString;
    }
    getMinute() {
        var minute = new Date();
        var minuteString = String(minute.getMinutes());
        return minuteString;
    }
    getSecond() {
        var second = new Date();
        var secondString = String(second.getSeconds());
        return secondString;
    }
    getMathRandom() {
        var a = Math.random() * 100000;
        var aString = String(a);
        var randomString = aString.split(".");
        return randomString[0];
    }
    parsingDate(date) {
        var dateStr = new Date(date);
        var dateDay = dateStr.getDate();
        var dateDayStr = String(dateDay);
        if (dateDayStr.length == 1) {
            var dateDayStr = "0" + dateDayStr;
        }
        var month = dateStr.getMonth() + 1;
        var monthStr = String(month);
        if (monthStr.length == 1) {
            var monthStr = "0" + monthStr;
        }
        return dateStr.getFullYear() + "-" + monthStr + "-" + dateDayStr;
    }
    checkAuth(token) { }
    newDate(date) {
        var newDate = new Date(date);
        return newDate;
    }
    loadingPresent(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: "dots",
                cssClass: "my-custom-class",
                message: message,
                duration: 10000,
                mode: "ios",
            });
            yield loading.present();
        });
    }
    loadingDismiss() {
        this.loadingController.dismiss();
    }
    toastPresent(message, color = "dark") {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                color: color,
                position: "bottom",
            });
            toast.present();
        });
    }
    toastPresentNoDuration(message, color = "dark") {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                color: color,
                position: "bottom",
                buttons: [
                    {
                        side: "end",
                        text: "Tutup",
                        role: "cancel",
                        handler: () => {
                            console.log("Cancel clicked");
                            this.toastController.dismiss();
                        },
                    },
                ],
            });
            toast.present();
        });
    }
    toastPresentTop(message, color = "dark") {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                color: color,
                position: "top",
            });
            toast.present();
        });
    }
};
GlobalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
GlobalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], GlobalService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "og4U":
/*!********************************!*\
  !*** ./src/app/fcm.service.ts ***!
  \********************************/
/*! exports provided: FcmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcmService", function() { return FcmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global.service */ "dVwY");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.service */ "S36L");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage.service */ "qkCY");







const { PushNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];

let FcmService = class FcmService {
    constructor(router, http, global, notification, storage) {
        // this.router.navigate([`orders-detail/e13af9b2-4a88-4f4b-bf4e-ca16068ef69f/list`]);
        this.router = router;
        this.http = http;
        this.global = global;
        this.notification = notification;
        this.storage = storage;
        this.start_date = "";
        this.end_date = "";
        this.activeOutlet = "";
    }
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    initPush() {
        this.storage.getObject('user').then((user) => {
            this.registerPush(user.id);
            this.getActiveOutlet();
            this.start_date = this.global.parsingDate(this.global.getFullYear() + "-" + this.global.getMonth() + "-01");
            this.end_date = this.global.getDateOnlyNow();
        });
    }
    registerPush(user) {
        PushNotifications.requestPermission().then((result) => {
            if (result.granted) {
                // Register with Apple / Google to receive push via APNS/FCM
                PushNotifications.register();
            }
            else {
                // Show some error
            }
        });
        PushNotifications.addListener("registration", (token) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
            });
            let options = { headers: reqHeader };
            let postData = {
                user_id: user,
                token: token.value,
            };
            this.http
                .post(this.global.base_url + "fcm/add/" + token.value, postData, options)
                .subscribe((data) => {
                console.log(data);
            }, (error) => {
                console.log(error);
            });
        });
        PushNotifications.addListener("registrationError", (error) => {
            alert("Error on registration: " + JSON.stringify(error));
        });
        PushNotifications.addListener("pushNotificationReceived", (notification) => {
            const header = notification.title;
            const message = notification.body;
            const id = notification.data.id;
            this.storage.getObject('auth').then((auth) => {
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + auth.token,
                });
                let options = { headers: reqHeader };
                let postdata = {
                    outlet_id: this.activeOutlet.id,
                    start_date: this.global.parsingDate(this.start_date),
                    end_date: this.global.parsingDate(this.end_date),
                };
                this.http
                    .post(this.global.base_url + "auth/order/last_per_outlet", postdata, options)
                    .subscribe((data) => {
                    if (data.status == 0) {
                        this.storage.setObject("order", data.order);
                        console.log("Data Order", data.order);
                        this.http.get('assets/dramatic_boom_effect.mp3', { responseType: 'blob' }).subscribe((audioBlob) => {
                            const audioUrl = URL.createObjectURL(audioBlob);
                            const audio = new Audio(audioUrl);
                            console.log(id, "id nya nih");
                            audio.play();
                            this.notification.showNotification(header, message, id);
                        });
                    }
                }, (error) => {
                    console.log(error);
                });
            });
        });
        PushNotifications.addListener("pushNotificationActionPerformed", (notification) => {
            const id = notification.notification.data.id;
            const name = notification.notification.data.name;
            const phone = notification.notification.data.phone;
            this.storage.getObject('auth').then((auth) => {
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + auth.token,
                });
                let options = { headers: reqHeader };
                let postdata = {
                    outlet_id: this.activeOutlet.id,
                    start_date: this.global.parsingDate(this.start_date),
                    end_date: this.global.parsingDate(this.end_date),
                };
                this.http
                    .post(this.global.base_url + "auth/order/last_per_outlet", postdata, options)
                    .subscribe((data) => {
                    if (data.status == 0) {
                        this.storage.setObject("order", data.order);
                        console.log("Data Order", data.order);
                        this.router.navigate([`orders-detail/${id}/list`]);
                    }
                }, (error) => {
                    console.log(error);
                });
            });
        });
    }
    getActiveOutlet() {
        this.storage.getObject("outlet_active").then((data) => {
            if (data != null) {
                this.activeOutlet = data;
            }
        });
    }
};
FcmService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] }
];
FcmService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], FcmService);



/***/ }),

/***/ "qkCY":
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");



const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let StorageService = class StorageService {
    constructor() { }
    setString(key, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.set({ key, value });
        });
    }
    getString(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield Storage.get({ key });
        });
    }
    setObject(key, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.set({ key, value: JSON.stringify(value) });
        });
    }
    getObject(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ret = yield Storage.get({ key });
            return JSON.parse(ret.value);
        });
    }
    removeItem(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.remove({ key });
        });
    }
    clear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.clear();
        });
    }
};
StorageService.ctorParameters = () => [];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], StorageService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: "",
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then((m) => m.TabsPageModule),
    },
    {
        path: "payment-options",
        loadChildren: () => Promise.all(/*! import() | payment-options-payment-options-module */[__webpack_require__.e("default~booking-options-booking-options-module~catalog-product-add-catalog-product-add-module~help-c~171db5a0"), __webpack_require__.e("payment-options-payment-options-module")]).then(__webpack_require__.bind(null, /*! ./payment-options/payment-options.module */ "sIhH")).then((m) => m.PaymentOptionsPageModule),
    },
    {
        path: "login",
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then((m) => m.LoginPageModule),
    },
    {
        path: "register",
        loadChildren: () => __webpack_require__.e(/*! import() | register-register-module */ "register-register-module").then(__webpack_require__.bind(null, /*! ./register/register.module */ "x5bZ")).then((m) => m.RegisterPageModule),
    },
    {
        path: "payment-finish",
        loadChildren: () => __webpack_require__.e(/*! import() | payment-finish-payment-finish-module */ "payment-finish-payment-finish-module").then(__webpack_require__.bind(null, /*! ./payment-finish/payment-finish.module */ "2xqe")).then((m) => m.PaymentFinishPageModule),
    },
    {
        path: "catalog-product",
        loadChildren: () => __webpack_require__.e(/*! import() | catalog-product-catalog-product-module */ "catalog-product-catalog-product-module").then(__webpack_require__.bind(null, /*! ./catalog-product/catalog-product.module */ "WsFJ")).then((m) => m.CatalogProductPageModule),
    },
    {
        path: "catalog-product-edit/:id",
        loadChildren: () => __webpack_require__.e(/*! import() | catalog-product-edit-catalog-product-edit-module */ "catalog-product-edit-catalog-product-edit-module").then(__webpack_require__.bind(null, /*! ./catalog-product-edit/catalog-product-edit.module */ "HvcT")).then((m) => m.CatalogProductEditPageModule),
    },
    {
        path: "catalog-product-add",
        loadChildren: () => Promise.all(/*! import() | catalog-product-add-catalog-product-add-module */[__webpack_require__.e("default~booking-options-booking-options-module~catalog-product-add-catalog-product-add-module~help-c~171db5a0"), __webpack_require__.e("catalog-product-add-catalog-product-add-module")]).then(__webpack_require__.bind(null, /*! ./catalog-product-add/catalog-product-add.module */ "33t4")).then((m) => m.CatalogProductAddPageModule),
    },
    {
        path: "catalog-category-add",
        loadChildren: () => __webpack_require__.e(/*! import() | catalog-category-add-catalog-category-add-module */ "catalog-category-add-catalog-category-add-module").then(__webpack_require__.bind(null, /*! ./catalog-category-add/catalog-category-add.module */ "8W5B")).then((m) => m.CatalogCategoryAddPageModule),
    },
    {
        path: "catalog-category-edit/:id",
        loadChildren: () => __webpack_require__.e(/*! import() | catalog-category-edit-catalog-category-edit-module */ "catalog-category-edit-catalog-category-edit-module").then(__webpack_require__.bind(null, /*! ./catalog-category-edit/catalog-category-edit.module */ "VIRY")).then((m) => m.CatalogCategoryEditPageModule),
    },
    {
        path: "blank",
        loadChildren: () => __webpack_require__.e(/*! import() | blank-blank-module */ "blank-blank-module").then(__webpack_require__.bind(null, /*! ./blank/blank.module */ "I3iu")).then((m) => m.BlankPageModule),
    },
    {
        path: "catalog-category",
        loadChildren: () => __webpack_require__.e(/*! import() | catalog-category-catalog-category-module */ "catalog-category-catalog-category-module").then(__webpack_require__.bind(null, /*! ./catalog-category/catalog-category.module */ "Ifbl")).then((m) => m.CatalogCategoryPageModule),
    },
    {
        path: "orders-detail/:id/:source",
        loadChildren: () => Promise.all(/*! import() | orders-detail-orders-detail-module */[__webpack_require__.e("default~orders-detail-orders-detail-module~orders-edit-orders-edit-module~orders-payment-qris-orders~8c9f9247"), __webpack_require__.e("orders-detail-orders-detail-module")]).then(__webpack_require__.bind(null, /*! ./orders-detail/orders-detail.module */ "mC4f")).then((m) => m.OrdersDetailPageModule),
    },
    {
        path: "setting-printer",
        loadChildren: () => __webpack_require__.e(/*! import() | setting-printer-setting-printer-module */ "setting-printer-setting-printer-module").then(__webpack_require__.bind(null, /*! ./setting-printer/setting-printer.module */ "LRRv")).then((m) => m.SettingPrinterPageModule),
    },
    {
        path: "launcher",
        loadChildren: () => __webpack_require__.e(/*! import() | launcher-launcher-module */ "launcher-launcher-module").then(__webpack_require__.bind(null, /*! ./launcher/launcher.module */ "FiDa")).then((m) => m.LauncherPageModule),
    },
    {
        path: "setting-sale",
        loadChildren: () => __webpack_require__.e(/*! import() | setting-sale-setting-sale-module */ "setting-sale-setting-sale-module").then(__webpack_require__.bind(null, /*! ./setting-sale/setting-sale.module */ "zIf0")).then((m) => m.SettingSalePageModule),
    },
    {
        path: "setting-format",
        loadChildren: () => __webpack_require__.e(/*! import() | setting-format-setting-format-module */ "setting-format-setting-format-module").then(__webpack_require__.bind(null, /*! ./setting-format/setting-format.module */ "+f7x")).then((m) => m.SettingFormatPageModule),
    },
    {
        path: "setting-payment",
        loadChildren: () => __webpack_require__.e(/*! import() | setting-payment-setting-payment-module */ "setting-payment-setting-payment-module").then(__webpack_require__.bind(null, /*! ./setting-payment/setting-payment.module */ "Fqf2")).then((m) => m.SettingPaymentPageModule),
    },
    {
        path: "setting-discount",
        loadChildren: () => __webpack_require__.e(/*! import() | setting-discount-setting-discount-module */ "setting-discount-setting-discount-module").then(__webpack_require__.bind(null, /*! ./setting-discount/setting-discount.module */ "Zj6h")).then((m) => m.SettingDiscountPageModule),
    },
    {
        path: "setting/order-payment",
        loadChildren: () => __webpack_require__.e(/*! import() | tab-setting-order-payment-order-payment-module */ "order-payment-order-payment-module").then(__webpack_require__.bind(null, /*! ./tab-setting/order-payment/order-payment.module */ "0Qbg")).then((m) => m.OrderPaymentPageModule),
    },
    {
        path: "setting/format-printer",
        loadChildren: () => __webpack_require__.e(/*! import() | tab-setting-format-printer-format-printer-module */ "format-printer-format-printer-module").then(__webpack_require__.bind(null, /*! ./tab-setting/format-printer/format-printer.module */ "BuxP")).then((m) => m.FormatPrinterPageModule),
    },
    {
        path: "outlet",
        loadChildren: () => __webpack_require__.e(/*! import() | outlet-outlet-module */ "outlet-outlet-module").then(__webpack_require__.bind(null, /*! ./outlet/outlet.module */ "/4ph")).then((m) => m.OutletPageModule),
    },
    {
        path: "customer",
        loadChildren: () => __webpack_require__.e(/*! import() | customer-customer-module */ "customer-customer-module").then(__webpack_require__.bind(null, /*! ./customer/customer.module */ "d7gL")).then((m) => m.CustomerPageModule),
    },
    {
        path: "user",
        loadChildren: () => __webpack_require__.e(/*! import() | user-user-module */ "user-user-module").then(__webpack_require__.bind(null, /*! ./user/user.module */ "7UCR")).then((m) => m.UserPageModule),
    },
    {
        path: "account",
        loadChildren: () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ./account/account.module */ "jcJX")).then((m) => m.AccountPageModule),
    },
    {
        path: "subscription",
        loadChildren: () => __webpack_require__.e(/*! import() | subscription-subscription-module */ "subscription-subscription-module").then(__webpack_require__.bind(null, /*! ./subscription/subscription.module */ "AfdY")).then((m) => m.SubscriptionPageModule),
    },
    {
        path: "outlet-add",
        loadChildren: () => __webpack_require__.e(/*! import() | outlet-add-outlet-add-module */ "outlet-add-outlet-add-module").then(__webpack_require__.bind(null, /*! ./outlet-add/outlet-add.module */ "epgI")).then((m) => m.OutletAddPageModule),
    },
    {
        path: "outlet-edit/:id",
        loadChildren: () => __webpack_require__.e(/*! import() | outlet-edit-outlet-edit-module */ "outlet-edit-outlet-edit-module").then(__webpack_require__.bind(null, /*! ./outlet-edit/outlet-edit.module */ "M06G")).then((m) => m.OutletEditPageModule),
    },
    {
        path: "customer-edit/:id",
        loadChildren: () => __webpack_require__.e(/*! import() | customer-edit-customer-edit-module */ "customer-edit-customer-edit-module").then(__webpack_require__.bind(null, /*! ./customer-edit/customer-edit.module */ "3CQv")).then((m) => m.CustomerEditPageModule),
    },
    {
        path: "customer-add",
        loadChildren: () => __webpack_require__.e(/*! import() | customer-add-customer-add-module */ "customer-add-customer-add-module").then(__webpack_require__.bind(null, /*! ./customer-add/customer-add.module */ "nwXH")).then((m) => m.CustomerAddPageModule),
    },
    {
        path: "user-add",
        loadChildren: () => __webpack_require__.e(/*! import() | user-add-user-add-module */ "user-add-user-add-module").then(__webpack_require__.bind(null, /*! ./user-add/user-add.module */ "ddk3")).then((m) => m.UserAddPageModule),
    },
    {
        path: "user-edit/:id",
        loadChildren: () => __webpack_require__.e(/*! import() | user-edit-user-edit-module */ "user-edit-user-edit-module").then(__webpack_require__.bind(null, /*! ./user-edit/user-edit.module */ "6uns")).then((m) => m.UserEditPageModule),
    },
    {
        path: "discount-add",
        loadChildren: () => __webpack_require__.e(/*! import() | discount-add-discount-add-module */ "discount-add-discount-add-module").then(__webpack_require__.bind(null, /*! ./discount-add/discount-add.module */ "a+Mj")).then((m) => m.DiscountAddPageModule),
    },
    {
        path: "discount-edit/:id",
        loadChildren: () => __webpack_require__.e(/*! import() | discount-edit-discount-edit-module */ "discount-edit-discount-edit-module").then(__webpack_require__.bind(null, /*! ./discount-edit/discount-edit.module */ "UuEG")).then((m) => m.DiscountEditPageModule),
    },
    {
        path: "select-customer/:redirect",
        loadChildren: () => __webpack_require__.e(/*! import() | select-customer-select-customer-module */ "select-customer-select-customer-module").then(__webpack_require__.bind(null, /*! ./select-customer/select-customer.module */ "nNEp")).then((m) => m.SelectCustomerPageModule),
    },
    {
        path: "select-customer/:redirect/:id",
        loadChildren: () => __webpack_require__.e(/*! import() | select-customer-select-customer-module */ "select-customer-select-customer-module").then(__webpack_require__.bind(null, /*! ./select-customer/select-customer.module */ "nNEp")).then((m) => m.SelectCustomerPageModule),
    },
    {
        path: "select-discount/:source",
        loadChildren: () => __webpack_require__.e(/*! import() | select-discount-select-discount-module */ "select-discount-select-discount-module").then(__webpack_require__.bind(null, /*! ./select-discount/select-discount.module */ "nqNi")).then((m) => m.SelectDiscountPageModule),
    },
    {
        path: "select-discount/:source/:id",
        loadChildren: () => __webpack_require__.e(/*! import() | select-discount-select-discount-module */ "select-discount-select-discount-module").then(__webpack_require__.bind(null, /*! ./select-discount/select-discount.module */ "nqNi")).then((m) => m.SelectDiscountPageModule),
    },
    {
        path: "report-sales/:start_date/:end_date/:outlet_id",
        loadChildren: () => __webpack_require__.e(/*! import() | report-sales-report-sales-module */ "report-sales-report-sales-module").then(__webpack_require__.bind(null, /*! ./report-sales/report-sales.module */ "9bGN")).then((m) => m.ReportSalesPageModule),
    },
    {
        path: "report-product-sales/:start_date/:end_date/:outlet_id",
        loadChildren: () => __webpack_require__.e(/*! import() | report-product-sales-report-product-sales-module */ "report-product-sales-report-product-sales-module").then(__webpack_require__.bind(null, /*! ./report-product-sales/report-product-sales.module */ "dnjM")).then((m) => m.ReportProductSalesPageModule),
    },
    {
        path: "account-edit",
        loadChildren: () => __webpack_require__.e(/*! import() | account-edit-account-edit-module */ "account-edit-account-edit-module").then(__webpack_require__.bind(null, /*! ./account-edit/account-edit.module */ "hdYt")).then((m) => m.AccountEditPageModule),
    },
    {
        path: "inactive",
        loadChildren: () => __webpack_require__.e(/*! import() | inactive-inactive-module */ "inactive-inactive-module").then(__webpack_require__.bind(null, /*! ./inactive/inactive.module */ "XN/H")).then((m) => m.InactivePageModule),
    },
    {
        path: "setting-order-type",
        loadChildren: () => __webpack_require__.e(/*! import() | setting-order-type-setting-order-type-module */ "setting-order-type-setting-order-type-module").then(__webpack_require__.bind(null, /*! ./setting-order-type/setting-order-type.module */ "FaER")).then((m) => m.SettingOrderTypePageModule),
    },
    {
        path: "booking",
        loadChildren: () => __webpack_require__.e(/*! import() | booking-booking-module */ "booking-booking-module").then(__webpack_require__.bind(null, /*! ./booking/booking.module */ "qmMC")).then((m) => m.BookingPageModule),
    },
    {
        path: "booking-detail/:id/:source",
        loadChildren: () => __webpack_require__.e(/*! import() | booking-detail-booking-detail-module */ "booking-detail-booking-detail-module").then(__webpack_require__.bind(null, /*! ./booking-detail/booking-detail.module */ "5/ge")).then((m) => m.BookingDetailPageModule),
    },
    {
        path: "booking-options",
        loadChildren: () => Promise.all(/*! import() | booking-options-booking-options-module */[__webpack_require__.e("default~booking-options-booking-options-module~catalog-product-add-catalog-product-add-module~help-c~171db5a0"), __webpack_require__.e("booking-options-booking-options-module")]).then(__webpack_require__.bind(null, /*! ./booking-options/booking-options.module */ "Kh3f")).then((m) => m.BookingOptionsPageModule),
    },
    {
        path: "outlet-detail/:id",
        loadChildren: () => __webpack_require__.e(/*! import() | outlet-detail-outlet-detail-module */ "outlet-detail-outlet-detail-module").then(__webpack_require__.bind(null, /*! ./outlet-detail/outlet-detail.module */ "WVqf")).then((m) => m.OutletDetailPageModule),
    },
    {
        path: "orders-payment-qris/:id",
        loadChildren: () => Promise.all(/*! import() | orders-payment-qris-orders-payment-qris-module */[__webpack_require__.e("default~orders-detail-orders-detail-module~orders-edit-orders-edit-module~orders-payment-qris-orders~8c9f9247"), __webpack_require__.e("orders-payment-qris-orders-payment-qris-module")]).then(__webpack_require__.bind(null, /*! ./orders-payment-qris/orders-payment-qris.module */ "DIbh")).then((m) => m.OrdersPaymentQrisPageModule),
    },
    {
        path: "orders-payment-ovo",
        loadChildren: () => __webpack_require__.e(/*! import() | orders-payment-ovo-orders-payment-ovo-module */ "orders-payment-ovo-orders-payment-ovo-module").then(__webpack_require__.bind(null, /*! ./orders-payment-ovo/orders-payment-ovo.module */ "ZLrE")).then((m) => m.OrdersPaymentOvoPageModule),
    },
    {
        path: "help-chat",
        loadChildren: () => Promise.all(/*! import() | help-chat-help-chat-module */[__webpack_require__.e("default~booking-options-booking-options-module~catalog-product-add-catalog-product-add-module~help-c~171db5a0"), __webpack_require__.e("common"), __webpack_require__.e("help-chat-help-chat-module")]).then(__webpack_require__.bind(null, /*! ./help-chat/help-chat.module */ "e39k")).then((m) => m.HelpChatPageModule),
    },
    {
        path: "catalog-product-stock/:id/:type",
        loadChildren: () => __webpack_require__.e(/*! import() | catalog-product-stock-catalog-product-stock-module */ "catalog-product-stock-catalog-product-stock-module").then(__webpack_require__.bind(null, /*! ./catalog-product-stock/catalog-product-stock.module */ "tV5x")).then((m) => m.CatalogProductStockPageModule),
    },
    {
        path: "orders-payment/:id",
        loadChildren: () => __webpack_require__.e(/*! import() | orders-payment-orders-payment-module */ "orders-payment-orders-payment-module").then(__webpack_require__.bind(null, /*! ./orders-payment/orders-payment.module */ "IG+f")).then((m) => m.OrdersPaymentPageModule),
    },
    {
        path: "orders-edit/:id",
        loadChildren: () => Promise.all(/*! import() | orders-edit-orders-edit-module */[__webpack_require__.e("default~orders-detail-orders-detail-module~orders-edit-orders-edit-module~orders-payment-qris-orders~8c9f9247"), __webpack_require__.e("orders-edit-orders-edit-module")]).then(__webpack_require__.bind(null, /*! ./orders-edit/orders-edit.module */ "BuK7")).then((m) => m.OrdersEditPageModule),
    },
    {
        path: "orders-edit/:id/:action",
        loadChildren: () => Promise.all(/*! import() | orders-edit-orders-edit-module */[__webpack_require__.e("default~orders-detail-orders-detail-module~orders-edit-orders-edit-module~orders-payment-qris-orders~8c9f9247"), __webpack_require__.e("orders-edit-orders-edit-module")]).then(__webpack_require__.bind(null, /*! ./orders-edit/orders-edit.module */ "BuK7")).then((m) => m.OrdersEditPageModule),
    },
    {
        path: "select-product/:source/:id/:type",
        loadChildren: () => __webpack_require__.e(/*! import() | select-product-select-product-module */ "select-product-select-product-module").then(__webpack_require__.bind(null, /*! ./select-product/select-product.module */ "ecLd")).then((m) => m.SelectProductPageModule),
    },
    {
        path: "booking-edit/:id",
        loadChildren: () => __webpack_require__.e(/*! import() | booking-edit-booking-edit-module */ "booking-edit-booking-edit-module").then(__webpack_require__.bind(null, /*! ./booking-edit/booking-edit.module */ "cnIb")).then((m) => m.BookingEditPageModule),
    },
    {
        path: "booking-edit/:id/:action",
        loadChildren: () => __webpack_require__.e(/*! import() | booking-edit-booking-edit-module */ "booking-edit-booking-edit-module").then(__webpack_require__.bind(null, /*! ./booking-edit/booking-edit.module */ "cnIb")).then((m) => m.BookingEditPageModule),
    },
    {
        path: "setting-olshop",
        loadChildren: () => __webpack_require__.e(/*! import() | setting-olshop-setting-olshop-module */ "setting-olshop-setting-olshop-module").then(__webpack_require__.bind(null, /*! ./setting-olshop/setting-olshop.module */ "uv2r")).then((m) => m.SettingOlshopPageModule),
    },
    {
        path: "test",
        loadChildren: () => __webpack_require__.e(/*! import() | test-test-module */ "test-test-module").then(__webpack_require__.bind(null, /*! ./test/test.module */ "FScs")).then((m) => m.TestPageModule),
    },
    {
        path: "information-detail/:id",
        loadChildren: () => __webpack_require__.e(/*! import() | information-detail-information-detail-module */ "information-detail-information-detail-module").then(__webpack_require__.bind(null, /*! ./information-detail/information-detail.module */ "Q95u")).then((m) => m.InformationDetailPageModule),
    },
    {
        path: 'chat',
        loadChildren: () => Promise.all(/*! import() | chat-chat-module */[__webpack_require__.e("common"), __webpack_require__.e("chat-chat-module")]).then(__webpack_require__.bind(null, /*! ./chat/chat.module */ "2yxt")).then(m => m.ChatPageModule)
    },
    {
        path: 'chat-room',
        loadChildren: () => __webpack_require__.e(/*! import() | chat-room-chat-room-module */ "chat-room-chat-room-module").then(__webpack_require__.bind(null, /*! ./chat-room/chat-room.module */ "eT4x")).then(m => m.ChatRoomPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map