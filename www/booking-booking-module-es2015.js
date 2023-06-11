(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-booking-module"],{

/***/ "4p4W":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"bookingleft\" contentId=\"bookingleft\" mode=\"ios\" swipe-gesture=\"true\">\r\n\r\n  <ion-content id=\"bookingleft\">\r\n\r\n    <div class=\"ion-padding\">\r\n      <ion-text color=\"primary\">{{company.name}}</ion-text>\r\n      </div>\r\n    <ion-item button color=\"primary\" detail=\"false\">\r\n        <ion-icon name=\"storefront-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{activeOutlet.name}}</ion-label>\r\n        <ion-note slot=\"end\">Aktif</ion-note>\r\n    </ion-item>\r\n    <ion-item-divider>\r\n      <small>Daftar outlet</small>\r\n    </ion-item-divider>\r\n\r\n    <ion-item *ngFor=\"let item of outlet\" class=\"clickable ion-clickable\" (click)=\"changeOutlet(item.outlet)\" button>\r\n        <ion-icon name=\"storefront-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        <ion-label><small>{{item.outlet.name}}</small></ion-label>\r\n    </ion-item>\r\n\r\n  </ion-content>\r\n  <ion-footer mode=\"ios\" class=\"ion-padding\" *ngIf=\"showContent\">\r\n      <div class=\"ion-text-center\" *ngIf=\"showUser\">{{name}} ({{level}})</div>\r\n      <ion-button size=\"small\" color=\"danger\" expand=\"block\" fill=\"link\" (click)=\"confirmLogout()\"><ion-icon name=\"power-outline\" slot=\"start\"></ion-icon> <ion-text color=\"danger\">Keluar dari akun</ion-text></ion-button>\r\n  </ion-footer>\r\n</ion-menu>\r\n\r\n<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"margin-top:10px;margin-left:15px;\">\r\n      <ion-button size=\"small\" (click)=\"openMenuLeft()\"><ion-icon name=\"storefront-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-searchbar style=\"margin-top:10px;margin-left:5px;\" (ionInput)=\"filterList($event)\" placeholder=\"Cari nomor booking\"></ion-searchbar>\r\n    <ion-buttons slot=\"end\" *ngIf=\"totalBookingOffline > 0\">\r\n      <ion-button color=\"danger\" fill=\"link\" (click)=\"syncUpOfflineData()\">\r\n        <ion-icon name=\"sync-outline\" slot=\"start\"></ion-icon>\r\n        <ion-badge color=\"danger\">{{totalBookingOffline}}</ion-badge></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" size-xs=\"6\" size-sm=\"5\">\r\n        <ion-item lines=\"full\">\r\n          <ion-label><small>Dari</small></ion-label>\r\n          <ion-datetime style=\"font-size:13px;\" displayFormat=\"DD-MMM-YYYY\"  pickerFormat=\"DD-MMM-YYYY\" display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"start_date\"></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" size-xs=\"6\" size-sm=\"5\">\r\n        <ion-item lines=\"full\">\r\n          <ion-label><small>Sampai</small></ion-label>\r\n          <ion-datetime style=\"font-size:13px;\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMM-YYYY\"  display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"end_date\" min=\"{{start_date}}\" (ionChange)=\"initialize()\"></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  <div style=\"margin-top:200px;text-align:center;\" *ngIf=\"!showContent\">\r\n    <ion-spinner name=\"crescent\"></ion-spinner>\r\n  </div>\r\n\r\n  <ion-list *ngIf=\"showContent\">\r\n    <ion-item *ngFor=\"let item of bookingSearch\" (click)=\"detail(item.id)\" button>\r\n      <ion-label><small><ion-text color=\"primary\">BOOK-{{item.book_number}}</ion-text>\r\n        <br/>\r\n          {{item.book_time}}</small>\r\n      </ion-label>\r\n\r\n      <ion-text slot=\"end\" color=\"dark\"><ion-icon name=\"alert-circle-outline\" color=\"danger\" *ngIf=\"checkThisOrderSync(item.id)\"></ion-icon>&nbsp;{{item.book_ref}}</ion-text>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "cYKM":
/*!*******************************************!*\
  !*** ./src/app/booking/booking.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clickable {\n  pointer-events: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsK0JBQUE7QUFDQSIsImZpbGUiOiJib29raW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGlja2FibGUge1xyXG5wb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "jRKS":
/*!***************************************************!*\
  !*** ./src/app/booking/booking-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BookingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPageRoutingModule", function() { return BookingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking.page */ "n2Uv");




const routes = [
    {
        path: '',
        component: _booking_page__WEBPACK_IMPORTED_MODULE_3__["BookingPage"]
    }
];
let BookingPageRoutingModule = class BookingPageRoutingModule {
};
BookingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingPageRoutingModule);



/***/ }),

/***/ "n2Uv":
/*!*****************************************!*\
  !*** ./src/app/booking/booking.page.ts ***!
  \*****************************************/
/*! exports provided: BookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPage", function() { return BookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_booking_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./booking.page.html */ "4p4W");
/* harmony import */ var _booking_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.page.scss */ "cYKM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");











let BookingPage = class BookingPage {
    constructor(storage, http, global, router, loadingController, platform, route, nativePageTransitions, menu, alertController) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.route = route;
        this.nativePageTransitions = nativePageTransitions;
        this.menu = menu;
        this.alertController = alertController;
        this.company = { name: '' };
        this.activeOutlet = { id: '', name: '' };
        this.bookingOffline = [];
        this.showContent = false;
        this.showUser = false;
        this.start_date = this.global.parsingDate(this.global.getFullYear() + '-' + this.global.getMonth() + '-01');
        this.end_date = this.global.getDateOnlyNow();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.initialize();
    }
    initialize() {
        this.showContent = false;
        this.platform.ready().then(() => {
            this.storage.getObject('auth').then((data) => {
                this.auth = data;
                this.storage.getObject('user').then((user) => {
                    let thisUser = user;
                    this.user = user;
                    this.name = thisUser.name;
                    this.level = thisUser.level;
                    this.showUser = true;
                });
            });
            this.storage.getObject('outlet_active').then((data) => {
                this.outlet = data;
            });
            this.getOfflineCompany();
            this.getOfflineOutlet();
            this.storage.getObject('booking_offline').then((data) => {
                if (data != null) {
                    this.bookingOffline = data;
                    this.totalBookingOffline = this.bookingOffline.length;
                }
                this.storage.getObject('booking').then((data) => {
                    if (data != null) {
                        this.storageBooking = data;
                        this.syncUpOfflineData();
                    }
                    else {
                        this.syncUpOfflineData();
                    }
                });
            });
        });
    }
    getOfflineOutlet() {
        this.storage.getObject('outlet').then((data) => {
            if (data != null) {
                this.storageOutlet = data;
                this.outlet = this.storageOutlet.filter(outlet => outlet.outlet.status === 'Active');
            }
            console.log("Offline outlet", data);
            this.getActiveOutlet();
        });
    }
    getOfflineCompany() {
        this.storage.getObject('company').then((data) => {
            if (data != null) {
                this.storageCompany = data;
                this.company = this.storageCompany;
                this.checkExpiredAccount();
            }
            console.log(data);
        });
    }
    checkExpiredAccount() {
        this.storage.getObject('user').then((data) => {
            if (data != null) {
                this.user = data.user;
                if (this.company.expired_at < this.global.getDateOnlyNow()) {
                    if (data.level == 'Owner') {
                        this.router.navigate(['/subscription']);
                        this.global.toastPresent('masa berlaku paket sudah habis, silahkan lakukan pembelian paket berlangganan!');
                    }
                    else {
                        this.router.navigate(['/inactive']);
                    }
                }
            }
            console.log(data);
        });
    }
    getDataOutlet() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        this.http.post(this.global.base_url + 'auth/booking/list', null, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.storage.setObject('outlet', data.outlet);
                this.outlet = data.outlet.filter(outlet => outlet.outlet.status === 'Active');
                this.getActiveOutlet();
                console.log(data);
            }
            else {
                console.log(data);
            }
            this.showContent = true;
        }, error => {
            console.log(error);
        });
    }
    getActiveOutlet() {
        this.storage.getObject('outlet_active').then((data) => {
            if (data != null) {
                this.activeOutlet = data;
                console.log('A', data);
            }
            else {
                this.activeOutlet = this.outlet[0].outlet;
                this.storage.setObject('outlet_active', this.activeOutlet);
                console.log('B', data);
            }
        });
    }
    changeOutlet(outlet) {
        this.activeOutlet = outlet;
        this.storage.setObject('outlet_active', this.activeOutlet);
        this.global.toastPresent('Outlet <strong>' + outlet.name + '</strong> aktif!');
        this.initialize();
        this.menu.close('orderleft');
    }
    syncUpOfflineData() {
        this.showContent = false;
        if (this.bookingOffline.length > 0) {
            for (let orderId of this.bookingOffline) {
                var order = this.storageBooking.find(x => x.id === orderId);
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.auth.token
                });
                let options = { headers: reqHeader };
                this.http.post(this.global.base_url + 'auth/booking/store', order, options)
                    .subscribe((data) => {
                    console.log(data);
                    if (data.status == 0) {
                        var offlineIndex = this.bookingOffline.findIndex(y => y === orderId);
                        this.bookingOffline.splice(offlineIndex, 1);
                        this.totalBookingOffline = this.bookingOffline.length;
                        this.storage.setObject('booking_offline', this.bookingOffline);
                        if (this.bookingOffline.length == 0) {
                            this.global.toastPresentTop('Semua data transaksi berhasil disinkronisasi!', 'success');
                            this.getData('online');
                        }
                        console.log(data);
                    }
                    else {
                        console.log(data);
                    }
                }, error => {
                    console.log(error);
                    this.global.toastPresentTop('<ion-icon name="sync-outline" color="light"></ion-icon> ' + this.bookingOffline.length + ' transaksi belum disinkronisasi!', 'danger');
                    this.getData('offline');
                });
            }
        }
        else {
            this.getData('online');
        }
    }
    checkThisOrderSync(id) {
        var offlineIndex = this.bookingOffline.findIndex(y => y === id);
        if (offlineIndex > -1) {
            return true;
        }
    }
    getData(mode) {
        if (mode == 'online') {
            this.storage.getObject('auth').then((auth) => {
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.auth.token
                });
                let options = { headers: reqHeader };
                let postdata = {
                    outlet_id: this.activeOutlet.id,
                    start_date: this.global.parsingDate(this.start_date),
                    end_date: this.global.parsingDate(this.end_date)
                };
                this.http.post(this.global.base_url + 'auth/booking/last_per_outlet', postdata, options)
                    .subscribe((data) => {
                    console.log(data);
                    if (data.status == 0) {
                        this.booking = data.booking;
                        this.bookingSearch = this.booking;
                        this.storage.setObject('booking', this.booking);
                        console.log(data);
                    }
                    else {
                        console.log(data);
                    }
                    this.showContent = true;
                }, error => {
                    console.log(error);
                    this.booking = this.storageBooking;
                    this.bookingSearch = this.booking;
                    this.showContent = true;
                });
            });
        }
        else {
            this.booking = this.storageBooking;
            this.bookingSearch = this.booking;
            this.showContent = true;
        }
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
        this.router.navigate(['/booking-detail/' + id + '/list']);
    }
    filterList(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bookingSearch = this.booking;
            const searchTerm = evt.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.bookingSearch = this.bookingSearch.filter(current => {
                if (current.book_number && searchTerm) {
                    return (current.book_number.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
            console.log(this.bookingSearch);
        });
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
        this.storage.clear();
        this.router.navigate(['/login']);
    }
    openMenuLeft() {
        this.menu.enable(true, 'bookingleft');
        this.menu.open('bookingleft');
    }
    ionViewWillLeave() {
    }
};
BookingPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
BookingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-booking',
        template: _raw_loader_booking_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_booking_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BookingPage);



/***/ }),

/***/ "qmMC":
/*!*******************************************!*\
  !*** ./src/app/booking/booking.module.ts ***!
  \*******************************************/
/*! exports provided: BookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPageModule", function() { return BookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking-routing.module */ "jRKS");
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking.page */ "n2Uv");







let BookingPageModule = class BookingPageModule {
};
BookingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingPageRoutingModule"]
        ],
        declarations: [_booking_page__WEBPACK_IMPORTED_MODULE_6__["BookingPage"]]
    })
], BookingPageModule);



/***/ })

}]);
//# sourceMappingURL=booking-booking-module-es2015.js.map