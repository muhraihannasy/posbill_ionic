(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-edit-booking-edit-module"],{

/***/ "9Qee":
/*!*****************************************************!*\
  !*** ./src/app/booking-edit/booking-edit.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLWVkaXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "LzDU":
/*!***************************************************!*\
  !*** ./src/app/booking-edit/booking-edit.page.ts ***!
  \***************************************************/
/*! exports provided: BookingEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingEditPage", function() { return BookingEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_booking_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./booking-edit.page.html */ "nmoe");
/* harmony import */ var _booking_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-edit.page.scss */ "9Qee");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "7uwA");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");












let BookingEditPage = class BookingEditPage {
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
        this.storageBooking = [];
        this.showContent = false;
        this.disabledAnimation = false;
        this.content = '';
        this.contentWA = '';
        this.bookingOffline = [];
        this.route.params.subscribe((params) => {
            if (params['id']) {
                this.id = params['id'];
                this.source = params['source'];
            }
            if (params['action']) {
                if (params['action'] == 'refresh') {
                    this.ionViewWillEnter();
                }
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
            this.storage.getObject('booking_offline').then((offline) => {
                if (offline != null) {
                    this.bookingOffline = offline;
                    this.checkThisOrderSync();
                }
            });
            this.storage.getObject('company').then((company) => {
                this.company = company;
            });
            this.storage.getObject('outlet_active').then((outlet) => {
                this.outlet = outlet;
            });
            this.storage.getObject('user').then((user) => {
                this.user = user;
            });
            this.storage.getObject('auth').then((auth) => {
                this.auth = auth;
            });
            this.storage.getObject('booking').then((data) => {
                if (data != null) {
                    this.storageBooking = data;
                    console.log(this.storageBooking);
                    var orderIndex = this.storageBooking.findIndex(x => x.id === this.id);
                    this.booking = this.storageBooking[orderIndex];
                    console.log(this.booking);
                    if (this.booking.customer == null) {
                        this.booking.customer = { id: 'Walk-in', name: 'Walk-in' };
                    }
                    console.log("data all", data);
                    console.log(orderIndex);
                    this.showContent = true;
                    var content = "\n" + this.center(this.company.name);
                    content += "\n" + this.center(this.outlet.phone) + " \n \n";
                    content += "================================\n";
                    content += "No book   : BOOK-" + this.booking.book_number + "\n";
                    content += "Tanggal   : " + this.booking.book_time + "\n";
                    content += "Outlet    : " + this.outlet.name + "\n";
                    content += "Kasir     : " + this.user.name + "\n";
                    content += "Pelanggan : " + this.booking.customer.name + " \n";
                    content += "--------------------------------\n";
                    for (let item of this.booking.booking_item) {
                        content += item.product.name + " \n";
                        content += this.leftRight(item.price + "x" + item.qty, this.global.currency(this.subtotalItem(item.price, item.qty))) + " \n";
                    }
                    content += "--------------------------------\n";
                    content += this.center('No meja / referensi :') + ' \n';
                    content += this.center(this.booking.book_ref) + ' \n';
                    content += "--------------------------------\n \n";
                    content += this.center(this.company.format_receipt1) + " \n";
                    content += this.center(this.company.format_receipt2) + " \n";
                    content += "\n \n \n";
                    this.content = content;
                    var contentWA = "*" + this.company.name + "* %0a %0a";
                    // contentWA += "================================%0a";
                    contentWA += "No order *BOOK-" + this.booking.book_number + "* (" + this.booking.book_time + ")%0a";
                    contentWA += "Pelanggan : " + this.booking.customer.name + " %0a";
                    contentWA += "--------------------------------%0a";
                    for (let item of this.booking.booking_item) {
                        contentWA += item.product.name + " %0a";
                        contentWA += item.price + "x" + item.qty + "=" + this.global.currency(this.subtotalItem(item.price, item.qty)) + " %0a";
                    }
                    contentWA += "--------------------------------%0a";
                    contentWA += "No meja / referensi : %0a";
                    contentWA += this.booking.book_ref + ' %0a';
                    contentWA += "--------------------------------%0a";
                    contentWA += this.company.format_receipt1 + "%0a";
                    contentWA += this.company.format_receipt2 + "%0a";
                    // contentWA += "\n \n \n";
                    this.contentWA = contentWA;
                }
            });
        });
    }
    subtotalItem(price, qty) {
        var subtotal = parseFloat(price) * parseFloat(qty);
        return subtotal;
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
    center(text) {
        var textString = String(text);
        var paperWidthChar = 31;
        var countSpace = (paperWidthChar - textString.length) / 2;
        var textResult = '';
        for (var i = 1; i <= Math.floor(countSpace); i++) {
            textResult += " ";
        }
        textResult += textString;
        return textResult;
    }
    leftRight(leftText, rightText) {
        var leftTextString = String(leftText);
        var rightTextString = String(rightText);
        var paperWidthChar = 31;
        var countChar = leftTextString.length + rightTextString.length;
        var countSpace = paperWidthChar - countChar;
        console.log('L', leftTextString.length);
        console.log('R', rightTextString.length);
        console.log('countChar', countChar);
        console.log('countSpace', countSpace);
        var textResult = leftTextString;
        for (var i = 1; i <= countSpace; i++) {
            textResult += " ";
        }
        textResult += rightTextString;
        return textResult;
    }
    printReceipt() {
        this.connectToBluetoothPrinter()
            .subscribe(_ => {
            //2. Connected successfully
            this.bluetoothSerial.write(this.content)
                .then(_ => {
                //3. Print successful
                //If you want to tell user print is successful,
                //handle it here
                //4. IMPORTANT! Disconnect bluetooth after printing
                console.log(_);
                this.disconnectBluetoothPrinter();
            }, err => {
                //If there is an error printing to bluetooth printer
                //handle it here
                console.log(err);
            });
        }, err => {
            //If there is an error connecting to bluetooth printer
            //handle it here
        });
    }
    sendWAPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Kirim nota ke Whatsapp',
                inputs: [
                    {
                        name: 'phone_number',
                        type: 'tel',
                        placeholder: 'Nomor WA tujuan'
                    }
                ],
                buttons: [
                    {
                        text: 'Batal',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: 'Kirim',
                        handler: (data) => {
                            var numberStr = String(data.phone_number);
                            if (numberStr.charAt(0) == '0') {
                                var numberStr = numberStr.substring(0);
                                var numberStr = '62' + numberStr;
                            }
                            window.open("https://wa.me/" + numberStr + "?text=" + this.contentWA);
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    editDetail(item, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.booking.booking_item[i].product.name,
                inputs: [
                    {
                        name: 'qty',
                        type: 'number',
                        id: 'qty',
                        value: this.booking.booking_item[i].qty,
                        placeholder: 'Qty'
                    },
                    {
                        name: 'note',
                        id: 'note',
                        value: this.booking.booking_item[i].note,
                        type: 'textarea',
                        placeholder: 'Catatan'
                    },
                ],
                // message: '<ion-button (click)="deleteItem('+item.id+')"><ion-text color="danger">Hapus produk ini dari pesanan</ion-text></ion-button>',
                buttons: [
                    {
                        text: 'Batal',
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: 'Simpan',
                        handler: (data) => {
                            this.global.loadingPresent('mengubah item...');
                            this.booking.booking_item[i].qty = data.qty;
                            this.booking.booking_item[i].note = data.note;
                            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + this.auth.token
                            });
                            let options = { headers: reqHeader };
                            let postData = {
                                booking_id: this.id,
                                item_id: item.id,
                                qty: data.qty,
                                note: data.note
                            };
                            this.http.post(this.global.base_url + 'auth/booking/edit_item', postData, options)
                                .subscribe((data) => {
                                console.log(data);
                                if (data.status == 0) {
                                    this.storage.getObject('booking').then((storageBooking) => {
                                        if (storageBooking != null) {
                                            var bookingIndex = storageBooking.findIndex(x => x.id === this.id);
                                            storageBooking[bookingIndex] = data.booking;
                                            this.storage.setObject('booking', storageBooking);
                                            this.global.toastPresent('Item booking berhasil disimpan!');
                                            this.ionViewWillEnter();
                                        }
                                    });
                                }
                                else {
                                    console.log(data);
                                }
                                this.global.loadingDismiss();
                            }, error => {
                                console.log(error);
                                this.global.loadingDismiss();
                            });
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deleteItem(item, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Hapus item pesanan',
                message: 'Yakin menghapus ' + item.product.name + ' dari pesanan ini?',
                buttons: [
                    {
                        text: 'Batal',
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: 'Hapus',
                        handler: (dataHandler) => {
                            this.global.loadingPresent('menghapus item...');
                            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + this.auth.token
                            });
                            let options = { headers: reqHeader };
                            let postData = {
                                item_id: item.id,
                            };
                            this.http.post(this.global.base_url + 'auth/booking/delete_item', postData, options)
                                .subscribe((data) => {
                                console.log(data);
                                if (data.status == 0) {
                                    this.storage.getObject('booking').then((storageBooking) => {
                                        if (storageBooking != null) {
                                            var orderIndex = storageBooking.findIndex(x => x.id === this.id);
                                            storageBooking[orderIndex] = data.booking;
                                            this.storage.setObject('booking', storageBooking);
                                            this.global.toastPresent('Item pesanan berhasil dihapus!');
                                            this.ionViewWillEnter();
                                        }
                                    });
                                }
                                else {
                                    console.log(data);
                                }
                                this.global.loadingDismiss();
                            }, error => {
                                console.log(error);
                                this.global.loadingDismiss();
                            });
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    process() {
        let cart = [];
        let subtotal = 0;
        let totalQty = 0;
        for (let item of this.booking.booking_item) {
            cart.push({ id: item.product.id, name: item.product.name, cost: item.cost, price: item.price, qty: item.qty, note: item.note });
            subtotal += (item.price * item.qty);
            totalQty += item.qty;
        }
        this.storage.setObject('pos_cart', cart);
        var pos_subtotal = { amount: subtotal, qty: totalQty };
        var pos_order_type = { order_type: this.booking.order_type };
        let pos_customer = { id: 'Walk-in', name: 'Walk-in' };
        if (this.booking.customer_id != null) {
            let pos_customer = { id: this.booking.customer_id, name: this.booking.customer.name };
        }
        this.storage.setObject('pos_booking', { booking_id: this.id, book_number: this.booking.book_number, book_ref: this.booking.book_ref });
        this.storage.setObject('pos_subtotal', pos_subtotal);
        this.storage.setObject('pos_order_type', pos_order_type);
        this.storage.setObject('pos_customer', pos_customer);
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
        this.router.navigate(['/payment-options']);
    }
    gotoPOS() {
        this.disabledAnimation = true;
        this.router.navigate(['/tabs/blank']).then(() => {
            this.router.navigate(['/tabs/tab-pos']);
        });
    }
    ionViewWillLeave() {
        let options = {
            direction: 'right',
            duration: 300,
            slowdownfactor: 3,
            slidePixels: 0,
            iosdelay: 0,
            androiddelay: 0,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 0
        };
        if (this.disabledAnimation == false) {
            this.nativePageTransitions.slide(options);
        }
    }
    checkThisOrderSync() {
        var offlineIndex = this.bookingOffline.findIndex(y => y === this.id);
        if (offlineIndex > -1) {
            return true;
        }
    }
    infoOffline() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Info',
                message: 'Transaksi ini belum tersinkronisasi!',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    cancelConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Konfirmasi hapus!',
                message: 'Anda yakin menghapus booking ini?',
                buttons: [
                    {
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ya',
                        handler: () => {
                            this.cancel();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    cancel() {
        this.global.loadingPresent('menghapus booking...');
        this.storage.getObject('booking').then((data) => {
            if (data != null) {
                var bookingIndex = data.findIndex(x => x.id === this.id);
                data.splice(bookingIndex, 1);
                this.storage.setObject('booking', data);
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.auth.token
                });
                let options = { headers: reqHeader };
                let postData = {
                    id: this.id
                };
                this.http.post(this.global.base_url + 'auth/booking/delete', postData, options)
                    .subscribe((data) => {
                    console.log(data);
                    if (data.status == 0) {
                        this.global.toastPresent(data.message);
                        this.router.navigate(['/tabs/blank']).then(() => {
                            this.router.navigate(['/booking']);
                        });
                        // this.ionViewWillEnter();
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
        });
    }
};
BookingEditPage.ctorParameters = () => [
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
BookingEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-booking-edit',
        template: _raw_loader_booking_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_booking_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BookingEditPage);



/***/ }),

/***/ "ZIxT":
/*!*************************************************************!*\
  !*** ./src/app/booking-edit/booking-edit-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BookingEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingEditPageRoutingModule", function() { return BookingEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _booking_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-edit.page */ "LzDU");




const routes = [
    {
        path: '',
        component: _booking_edit_page__WEBPACK_IMPORTED_MODULE_3__["BookingEditPage"]
    }
];
let BookingEditPageRoutingModule = class BookingEditPageRoutingModule {
};
BookingEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingEditPageRoutingModule);



/***/ }),

/***/ "cnIb":
/*!*****************************************************!*\
  !*** ./src/app/booking-edit/booking-edit.module.ts ***!
  \*****************************************************/
/*! exports provided: BookingEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingEditPageModule", function() { return BookingEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _booking_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking-edit-routing.module */ "ZIxT");
/* harmony import */ var _booking_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-edit.page */ "LzDU");







let BookingEditPageModule = class BookingEditPageModule {
};
BookingEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _booking_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingEditPageRoutingModule"]
        ],
        declarations: [_booking_edit_page__WEBPACK_IMPORTED_MODULE_6__["BookingEditPage"]]
    })
], BookingEditPageModule);



/***/ }),

/***/ "nmoe":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking-edit/booking-edit.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" *ngIf=\"showContent\">\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/booking-detail/'+id+'/list']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"showContent\">Ubah BOOK-{{booking.book_number}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"infoOffline()\" fill=\"link\" *ngIf=\"checkThisOrderSync()\">\r\n        <ion-icon name=\"alert-circle-outline\" color=\"danger\" ></ion-icon>\r\n      </ion-button>\r\n      <ion-button (click)=\"cancelConfirm()\" fill=\"link\" *ngIf=\"booking.status == 'Completed' || booking.status == 'Pending'\">\r\n        <ion-icon name=\"close-circle-outline\" color=\"danger\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=\"ios\" class=\"ion-padding\" *ngIf=\"showContent\">\r\n\r\n  <ion-card>\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-list>\r\n        <ion-item lines=\"full\"><ion-label class=\"ion-text-wrap\">No booking <br/><small>{{booking.book_time}}</small></ion-label><ion-note slot=\"end\" color=\"primary\">BOOK-{{booking.book_number}}</ion-note></ion-item>\r\n        <ion-item lines=\"full\"><small>No meja /referensi</small> <ion-note slot=\"end\" color=\"primary\"><small>{{booking.book_ref}}</small></ion-note></ion-item>\r\n        <ion-item lines=\"full\"><small>Tipe pesanan</small> <ion-note slot=\"end\" color=\"primary\"><small>{{booking.order_type}}</small></ion-note></ion-item>\r\n        <ion-item lines=\"none\" [routerLink]=\"['/select-customer/booking-edit/'+id]\"><small>Pelanggan</small> <ion-note slot=\"end\" color=\"primary\"><small>{{booking.customer.name}}</small></ion-note></ion-item>\r\n        </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-list>\r\n        <ion-item  button lines=\"full\" *ngFor=\"let item of booking.booking_item; let i = index;\">\r\n          <ion-button slot=\"start\" color=\"danger\" fill=\"link\" (click)=\"deleteItem(item,i)\"><ion-icon color=\"danger\" name=\"trash-outline\"></ion-icon></ion-button>\r\n          <ion-label (click)=\"editDetail(item,i)\" class=\"ion-text-wrap\">{{item.product.name}}<small><br/>{{global.currency(item.price)}} x {{item.qty}} <br/><span style=\"color:#666\">{{item.note}}</span></small></ion-label>\r\n          <ion-note (click)=\"editDetail(item,i)\" slot=\"end\"><small>{{global.currency(subtotalItem(item.price,item.qty))}}</small></ion-note>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-button lines=\"none\" expand=\"block\" fill=\"link\" color=\"primary\" [routerLink]=\"['/select-product/booking-edit/'+id+'/'+booking.order_type]\"><ion-icon name=\"add-outline\" slot=\"start\"></ion-icon> <ion-text color=\"primary\">Tambah item</ion-text></ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-list>\r\n\r\n        <ion-item lines=\"none\" class=\"item-small\"><small><strong>Subtotal</strong></small><ion-note slot=\"end\" color=\"dark\"><small>{{global.currency(booking.subtotal)}}</small></ion-note></ion-item>\r\n\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\" *ngIf=\"showContent\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col *ngIf=\"booking.payment_channel == 'QRIS Online' && booking.status == 'Pending'\"><ion-button expand=\"block\" fill=\"outline\" [routerLink]=\"['/orders-payment-qris/'+id]\">\r\n        <ion-icon name=\"qr-code-outline\" slot=\"start\" ></ion-icon>\r\n         Bayar QRIS\r\n      </ion-button>\r\n      </ion-col>\r\n      <ion-col *ngIf=\"booking.status == 'Completed'\"><ion-button expand=\"block\" fill=\"outline\" (click)=\"sendWAPrompt()\">\r\n        <ion-icon name=\"arrow-redo-outline\" slot=\"start\" ></ion-icon>\r\n        Kirim Whatsapp\r\n      </ion-button>\r\n      </ion-col>\r\n\r\n\r\n\r\n      <ion-col><ion-button expand=\"block\" color=\"primary\" [routerLink]=\"['/booking-detail/'+booking.id+'/edit']\">\r\n        <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\r\n        Selesai\r\n      </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=booking-edit-booking-edit-module-es2015.js.map