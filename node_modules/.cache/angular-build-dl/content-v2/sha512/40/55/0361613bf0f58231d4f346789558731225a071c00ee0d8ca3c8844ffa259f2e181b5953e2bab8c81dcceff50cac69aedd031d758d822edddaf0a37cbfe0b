(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-edit-orders-edit-module"],{

/***/ "+dCe":
/*!***************************************************!*\
  !*** ./src/app/orders-edit/orders-edit.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMtZWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "BuK7":
/*!***************************************************!*\
  !*** ./src/app/orders-edit/orders-edit.module.ts ***!
  \***************************************************/
/*! exports provided: OrdersEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersEditPageModule", function() { return OrdersEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _orders_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-edit-routing.module */ "E1lP");
/* harmony import */ var _orders_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders-edit.page */ "ZIGR");







let OrdersEditPageModule = class OrdersEditPageModule {
};
OrdersEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orders_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersEditPageRoutingModule"]
        ],
        declarations: [_orders_edit_page__WEBPACK_IMPORTED_MODULE_6__["OrdersEditPage"]]
    })
], OrdersEditPageModule);



/***/ }),

/***/ "E1lP":
/*!***********************************************************!*\
  !*** ./src/app/orders-edit/orders-edit-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: OrdersEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersEditPageRoutingModule", function() { return OrdersEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orders_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-edit.page */ "ZIGR");




const routes = [
    {
        path: '',
        component: _orders_edit_page__WEBPACK_IMPORTED_MODULE_3__["OrdersEditPage"]
    }
];
let OrdersEditPageRoutingModule = class OrdersEditPageRoutingModule {
};
OrdersEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersEditPageRoutingModule);



/***/ }),

/***/ "ZIGR":
/*!*************************************************!*\
  !*** ./src/app/orders-edit/orders-edit.page.ts ***!
  \*************************************************/
/*! exports provided: OrdersEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersEditPage", function() { return OrdersEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orders_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders-edit.page.html */ "d8Ql");
/* harmony import */ var _orders_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders-edit.page.scss */ "+dCe");
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















let OrdersEditPage = class OrdersEditPage {
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
        this.value = 'Techiediaries';
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
            this.storage.getObject('order_offline').then((offline) => {
                if (offline != null) {
                    this.orderOffline = offline;
                    this.checkThisOrderSync();
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
            });
            this.storage.getObject('user').then((user) => {
                this.user = user;
            });
            this.storage.getObject('order').then((data) => {
                if (data != null) {
                    this.storageOrder = data;
                    var orderIndex = this.storageOrder.findIndex(x => x.id === this.id);
                    this.order = this.storageOrder[orderIndex];
                    if (this.order.customer == null) {
                        this.order.customer = { id: 'Walk-in', name: 'Walk-in' };
                    }
                    console.log("data all", data);
                    console.log(orderIndex);
                    this.showContent = true;
                    // content receipt
                    var content = "\n" + this.center(this.company.name);
                    content += "\n" + this.center(this.outlet.phone) + " \n \n";
                    content += "================================\n";
                    content += "No order  : TRX-" + this.order.order_number + "\n";
                    content += "Tipe order: " + this.order.order_type + "\n";
                    content += "Tanggal   : " + this.order.order_time + "\n";
                    content += "Outlet    : " + this.outlet.name + "\n";
                    content += "Kasir     : " + this.user.name + "\n";
                    content += "Pelanggan : " + this.order.customer.name + " \n";
                    content += "--------------------------------\n";
                    for (let item of this.order.order_item) {
                        content += item.product.name + " \n";
                        content += this.leftRight(item.price + "x" + item.qty, this.global.currency(this.subtotalItem(item.price, item.qty))) + " \n";
                    }
                    content += "--------------------------------\n";
                    content += this.leftRight("Subtotal", this.global.currency(this.order.subtotal)) + " \n";
                    content += this.leftRight("Diskon", "(" + this.global.currency(this.order.discount) + ")") + " \n";
                    content += this.leftRight("Service Charge", this.global.currency(this.order.service_charge)) + " \n";
                    content += this.leftRight("Pajak", this.global.currency(this.order.tax)) + " \n";
                    content += "--------------------------------\n";
                    content += this.leftRight("Grand Total", this.global.currency(this.order.total)) + " \n";
                    content += "--------------------------------\n";
                    content += this.leftRight("Pembayaran " + this.order.payment_channel, this.global.currency(this.order.cash_collected)) + " \n";
                    if (this.order.payment_channel == 'Cash') {
                        content += this.leftRight("Uang kembali ", this.global.currency(this.order.cash_collected - this.order.total)) + " \n";
                    }
                    content += "--------------------------------\n \n";
                    content += this.center(this.company.format_receipt1) + " \n";
                    content += this.center(this.company.format_receipt2) + " \n";
                    content += "\n \n \n";
                    this.content = content;
                    // content wa
                    var contentWA = "*" + this.company.name + "* %0a %0a";
                    // contentWA += "================================%0a";
                    contentWA += "No order *TRX-" + this.order.order_number + "* (" + this.order.order_time + ")%0a";
                    contentWA += "Tipe order: " + this.order.order_type + "%0a";
                    contentWA += "Pelanggan : " + this.order.customer.name + " %0a";
                    contentWA += "--------------------------------%0a";
                    for (let item of this.order.order_item) {
                        contentWA += item.product.name + " %0a";
                        contentWA += item.price + "x" + item.qty + "=" + this.global.currency(this.subtotalItem(item.price, item.qty)) + " %0a";
                    }
                    contentWA += "--------------------------------%0a";
                    contentWA += "Subtotal : " + this.global.currency(this.order.subtotal) + " %0a";
                    contentWA += "Diskon : " + this.global.currency(this.order.discount) + " %0a";
                    contentWA += "Service Charge : " + this.global.currency(this.order.service_charge) + " %0a";
                    contentWA += "Pajak : " + this.global.currency(this.order.tax) + " %0a %0a";
                    contentWA += "*Grand Total* : " + this.global.currency(this.order.total) + " %0a";
                    contentWA += "Pembayaran " + this.order.payment_channel + " : " + this.global.currency(this.order.cash_collected) + " %0a";
                    if (this.order.payment_channel == 'Cash') {
                        contentWA += "Uang kembali : " + this.global.currency(this.order.cash_collected - this.order.total) + " %0a";
                    }
                    contentWA += "%0a %0a";
                    contentWA += this.company.format_receipt1 + "%0a";
                    contentWA += this.company.format_receipt2 + "%0a";
                    // contentWA += "\n \n \n";
                    this.contentWA = contentWA;
                    // modify content print
                    var printHeader = "\n" + this.center(this.company.name);
                    printHeader += "\n" + this.center(this.outlet.phone) + " \n \n";
                    printHeader += "================================\n";
                    printHeader += "No order  : TRX-" + this.order.order_number + "\n";
                    printHeader += "Tipe order: " + this.order.order_type + "\n";
                    printHeader += "Tanggal   : " + this.order.order_time + "\n";
                    printHeader += "Outlet    : " + this.outlet.name + "\n";
                    printHeader += "Kasir     : " + this.user.name + "\n";
                    printHeader += "Pelanggan : " + this.order.customer.name + " \n";
                    printHeader += "--------------------------------\n";
                    this.printHeader = printHeader;
                    var printItem = '';
                    for (let item of this.order.order_item) {
                        printItem += item.product.name + " \n";
                        printItem += this.leftRight(item.price + "x" + item.qty + " ", this.global.currency(this.subtotalItem(item.price, item.qty))) + " \n";
                    }
                    this.printItem = printItem;
                    var printFooter = '';
                    printFooter += "--------------------------------\n";
                    printFooter += this.leftRight("Subtotal", this.global.currency(this.order.subtotal)) + " \n";
                    printFooter += this.leftRight("Diskon", "(" + this.global.currency(this.order.discount) + ")") + " \n";
                    printFooter += this.leftRight("Service Charge", this.global.currency(this.order.service_charge)) + " \n";
                    printFooter += this.leftRight("Pajak", this.global.currency(this.order.tax)) + " \n";
                    printFooter += "--------------------------------\n";
                    printFooter += this.leftRight("Grand Total", this.global.currency(this.order.total)) + " \n";
                    printFooter += "--------------------------------\n";
                    printFooter += this.leftRight("Pembayaran " + this.order.payment_channel, this.global.currency(this.order.cash_collected)) + " \n";
                    if (this.order.payment_channel == 'Cash') {
                        printFooter += this.leftRight("Uang kembali ", this.global.currency(this.order.cash_collected - this.order.total)) + " \n";
                    }
                    printFooter += "--------------------------------\n \n";
                    printFooter += this.center(this.company.format_receipt1) + " \n";
                    printFooter += this.center(this.company.format_receipt2) + " \n";
                    printFooter += "\n \n \n";
                    this.printFooter = printFooter;
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
        const encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_11___default.a();
        const result = encoder.initialize();
        if (this.order.payment_method == 'Cash') {
            result
                .align('left')
                .newline()
                .line(this.content)
                .newline()
                .newline()
                .raw([0x1b, 0x70, 0x00])
                .raw([0x1b, 0x70, 0x01])
                .cut();
        }
        else {
            result
                .align('left')
                .newline()
                .line(this.content)
                .newline()
                .newline()
                .cut();
        }
        const resultByte = result.encode();
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
    printReceipt2() {
        this.printReceiptHeader();
    }
    printReceiptHeader() {
        const encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_11___default.a();
        const result = encoder.initialize();
        result
            .align('left')
            .newline()
            .line(this.printHeader);
        const resultByte = result.encode();
        this.connectToBluetoothPrinter()
            .subscribe(_ => {
            this.bluetoothSerial.write(resultByte)
                .then(_ => {
                console.log(_);
                this.printReceiptItem();
            }, err => {
                console.log(err);
            });
        }, err => {
        });
    }
    printReceiptItem() {
        const encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_11___default.a();
        const result = encoder.initialize();
        result
            .align('left')
            .line(this.printItem);
        const resultByte = result.encode();
        this.bluetoothSerial.write(resultByte)
            .then(_ => {
            console.log(_);
            setTimeout(() => {
                this.printReceiptFooter();
            }, 1000);
        }, err => {
            console.log(err);
        });
    }
    printReceiptFooter() {
        const encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_11___default.a();
        const result = encoder.initialize();
        if (this.order.payment_method == 'Cash') {
            result
                .align('left')
                .line(this.printFooter)
                .newline()
                .raw([0x1b, 0x70, 0x00])
                .raw([0x1b, 0x70, 0x01])
                .cut();
        }
        else {
            result
                .align('left')
                .line(this.printFooter)
                .newline()
                .cut();
        }
        const resultByte = result.encode();
        this.bluetoothSerial.write(resultByte)
            .then(_ => {
            console.log(_);
            this.disconnectBluetoothPrinter();
        }, err => {
            console.log(err);
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
                header: this.order.order_item[i].product.name,
                inputs: [
                    {
                        name: 'qty',
                        type: 'number',
                        id: 'qty',
                        value: this.order.order_item[i].qty,
                        placeholder: 'Qty'
                    },
                    {
                        name: 'note',
                        id: 'note',
                        value: this.order.order_item[i].note,
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
                            this.order.order_item[i].qty = data.qty;
                            this.order.order_item[i].note = data.note;
                            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + this.auth.token
                            });
                            let options = { headers: reqHeader };
                            let postData = {
                                order_id: this.id,
                                item_id: item.id,
                                qty: data.qty,
                                note: data.note
                            };
                            this.http.post(this.global.base_url + 'auth/order/edit_item', postData, options)
                                .subscribe((data) => {
                                console.log(data);
                                if (data.status == 0) {
                                    this.storage.getObject('order').then((storageOrder) => {
                                        if (storageOrder != null) {
                                            var orderIndex = storageOrder.findIndex(x => x.id === this.id);
                                            storageOrder[orderIndex] = data.order;
                                            this.storage.setObject('order', storageOrder);
                                            this.global.toastPresent('Item pesanan berhasil disimpan!');
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
                            this.http.post(this.global.base_url + 'auth/order/delete_item', postData, options)
                                .subscribe((data) => {
                                console.log(data);
                                if (data.status == 0) {
                                    this.storage.getObject('order').then((storageOrder) => {
                                        if (storageOrder != null) {
                                            var orderIndex = storageOrder.findIndex(x => x.id === this.id);
                                            storageOrder[orderIndex] = data.order;
                                            this.storage.setObject('order', storageOrder);
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
        var offlineIndex = this.orderOffline.findIndex(y => y === this.id);
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
                header: 'Konfirmasi pembatalan!',
                message: 'Anda yakin membatalkan order ini?',
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
        if (this.user.level == 'Cashier') {
            this.global.toastPresent('Anda tidak dapat membatalkan order, silahkan gunakan akses level Admin untuk membatalkan!');
            return false;
        }
        this.global.loadingPresent('membatalkan order...');
        this.storage.getObject('order').then((data) => {
            if (data != null) {
                var orderIndex = data.findIndex(x => x.id === this.id);
                data[orderIndex].status = 'Canceled';
                this.storage.setObject('order', data);
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.auth.token
                });
                let options = { headers: reqHeader };
                let postData = {
                    id: this.id
                };
                this.http.post(this.global.base_url + 'auth/order/cancel', postData, options)
                    .subscribe((data) => {
                    console.log(data);
                    if (data.status == 0) {
                        this.global.toastPresent(data.message);
                        this.router.navigate(['/tabs/blank']).then(() => {
                            this.router.navigate(['/tabs/tab-order']);
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
OrdersEditPage.ctorParameters = () => [
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
OrdersEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orders-edit',
        template: _raw_loader_orders_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrdersEditPage);



/***/ }),

/***/ "d8Ql":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders-edit/orders-edit.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" *ngIf=\"showContent\">\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/orders-detail/'+id+'/list']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"showContent\">Ubah TRX-{{order.order_number}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"infoOffline()\" fill=\"link\" *ngIf=\"checkThisOrderSync()\">\r\n        <ion-icon name=\"alert-circle-outline\" color=\"danger\" ></ion-icon>\r\n      </ion-button>\r\n      <ion-button (click)=\"cancelConfirm()\" fill=\"link\" *ngIf=\"order.status == 'Completed' || order.status == 'Pending'\">\r\n        <ion-icon name=\"close-circle-outline\" color=\"danger\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=\"ios\" class=\"ion-padding\" *ngIf=\"showContent\">\r\n\r\n  <ion-card>\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-list>\r\n        <ion-item lines=\"full\"><ion-label>Status</ion-label>\r\n          <ion-badge *ngIf=\"order.status == 'Pending'\" slot=\"end\" color=\"warning\"><strong>Belum lunas</strong></ion-badge>\r\n           <ion-badge *ngIf=\"order.status == 'Completed'\" slot=\"end\" color=\"success\"><strong>Lunas</strong></ion-badge>\r\n           <ion-badge *ngIf=\"order.status == 'Canceled'\" slot=\"end\" color=\"danger\"><strong>Dibatalkan</strong></ion-badge>\r\n\r\n        </ion-item>\r\n        <ion-item lines=\"full\"><ion-label class=\"ion-text-wrap\">No order <br/><small>{{order.order_time}}</small></ion-label><ion-note slot=\"end\" color=\"primary\">TRX-{{order.order_number}}</ion-note></ion-item>\r\n        <ion-item lines=\"full\"><small>Tipe pesanan</small> <ion-note slot=\"end\" color=\"primary\"><small>{{order.order_type}}</small></ion-note></ion-item>\r\n        <ion-item lines=\"none\" [routerLink]=\"['/select-customer/orders-edit/'+id]\"><small>Pelanggan</small> <ion-note slot=\"end\" color=\"primary\"><small>{{order.customer.name}}</small></ion-note></ion-item>\r\n        </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-list>\r\n        <ion-item  button lines=\"full\" *ngFor=\"let item of order.order_item; let i = index;\">\r\n          <ion-button slot=\"start\" color=\"danger\" fill=\"link\" (click)=\"deleteItem(item,i)\"><ion-icon color=\"danger\" name=\"trash-outline\"></ion-icon></ion-button>\r\n          <ion-label (click)=\"editDetail(item,i)\" class=\"ion-text-wrap\">{{item.product.name}}<small><br/>{{global.currency(item.price)}} x {{item.qty}} <br/><span style=\"color:#666\">{{item.note}}</span></small></ion-label>\r\n          <ion-note (click)=\"editDetail(item,i)\" slot=\"end\"><small>{{global.currency(subtotalItem(item.price,item.qty))}}</small></ion-note>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-button lines=\"none\" expand=\"block\" fill=\"link\" color=\"primary\" [routerLink]=\"['/select-product/orders-edit/'+id+'/'+order.order_type]\"><ion-icon name=\"add-outline\" slot=\"start\"></ion-icon> <ion-text color=\"primary\">Tambah item</ion-text></ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-list>\r\n\r\n        <ion-item lines=\"full\" class=\"item-small\"><small><strong>Subtotal</strong></small><ion-note slot=\"end\" color=\"dark\"><small>{{global.currency(order.subtotal)}}</small></ion-note></ion-item>\r\n        <ion-item lines=\"full\" class=\"item-small\" [routerLink]=\"['/select-discount/orders-edit/'+id]\"><small>Diskon </small><ion-note slot=\"end\"><small>{{global.currency(order.discount)}}</small></ion-note></ion-item>\r\n        <ion-item lines=\"full\" class=\"item-small\" *ngIf=\"order.service_charge > 0\"><small>Service charge ({{company.service_charge}}%)</small><ion-note slot=\"end\"><small>{{global.currency(order.service_charge)}}</small></ion-note></ion-item>\r\n        <ion-item lines=\"full\" *ngIf=\"order.tax > 0\"><small>Pajak ({{company.tax}}%)</small><ion-note slot=\"end\"><small>{{global.currency(order.tax)}}</small></ion-note></ion-item>\r\n        <ion-item lines=\"none\" color=\"light\">Total<ion-note slot=\"end\" color=\"dark\">{{global.currency(order.total)}}</ion-note></ion-item>\r\n        <ion-item lines=\"full\" *ngIf=\"order.status == 'Completed'\"><small>Pembayaran ({{order.payment_channel}})</small><ion-note slot=\"end\" color=\"dark\"><small>{{global.currency(order.cash_collected)}}</small></ion-note></ion-item>\r\n        <ion-item lines=\"full\" *ngIf=\"order.status == 'Completed' && order.payment_method == 'Cash'\"><small>Uang kembali</small><ion-note slot=\"end\" color=\"dark\"><small>{{global.currency(order.cash_collected - order.total)}}</small></ion-note></ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\" *ngIf=\"showContent\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col *ngIf=\"order.payment_channel == 'QRIS Online' && order.status == 'Pending'\"><ion-button expand=\"block\" fill=\"outline\" [routerLink]=\"['/orders-payment-qris/'+id]\">\r\n        <ion-icon name=\"qr-code-outline\" slot=\"start\" ></ion-icon>\r\n         Bayar QRIS\r\n      </ion-button>\r\n      </ion-col>\r\n      <ion-col *ngIf=\"order.status == 'Completed'\"><ion-button expand=\"block\" fill=\"outline\" (click)=\"sendWAPrompt()\">\r\n        <ion-icon name=\"arrow-redo-outline\" slot=\"start\" ></ion-icon>\r\n        Kirim Whatsapp\r\n      </ion-button>\r\n      </ion-col>\r\n      <ion-col *ngIf=\"order.status == 'Completed'\"><ion-button expand=\"block\" (click)=\"printReceipt2()\">\r\n        <ion-icon name=\"print-outline\" slot=\"start\"></ion-icon>\r\n        Cetak nota\r\n      </ion-button>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col><ion-button expand=\"block\" color=\"primary\" [routerLink]=\"['/orders-detail/'+order.id+'/edit']\">\r\n        <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\r\n        Selesai\r\n      </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=orders-edit-orders-edit-module-es2015.js.map