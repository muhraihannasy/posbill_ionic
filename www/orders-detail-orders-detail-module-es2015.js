(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-detail-orders-detail-module"],{

/***/ "7vo7":
/*!*****************************************************!*\
  !*** ./src/app/orders-detail/orders-detail.page.ts ***!
  \*****************************************************/
/*! exports provided: OrdersDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersDetailPage", function() { return OrdersDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orders_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders-detail.page.html */ "xUGN");
/* harmony import */ var _orders_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders-detail.page.scss */ "bGX2");
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















let OrdersDetailPage = class OrdersDetailPage {
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
        this.title = "app";
        this.elementType = "img";
        this.value = "Techiediaries";
        this.storageOrder = [];
        this.showContent = false;
        this.disabledAnimation = false;
        this.content = "";
        this.contentWA = "";
        this.customerPhone = "";
        this.orderOffline = [];
        this.route.params.subscribe((params) => {
            if (params["id"]) {
                this.id = params["id"];
                this.source = params["source"];
            }
        });
        this.bluetoothSerial
            .isEnabled()
            .then((response) => {
            const message = response.enabled ? "enabled" : "disabled";
            console.log(`Bluetooth is ${message}`);
        })
            .catch(() => {
            console.log("Error checking bluetooth status");
        });
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.showContent = false;
        this.platform.ready().then(() => {
            this.storage.getObject("printer").then((printer) => {
                if (printer != null) {
                    this.printer = printer.address;
                }
            });
            this.storage.getObject("printer2").then((printer) => {
                if (printer != null) {
                    this.printer2 = printer.address;
                }
            });
            this.storage.getObject("order_offline").then((offline) => {
                if (offline != null) {
                    this.orderOffline = offline;
                    this.checkThisOrderSync();
                }
            });
            this.storage.getObject("company").then((company) => {
                this.company = company;
            });
            this.storage.getObject("outlet_active").then((outlet) => {
                this.outlet = outlet;
            });
            this.storage.getObject("auth").then((auth) => {
                this.auth = auth;
            });
            this.storage.getObject("user").then((user) => {
                this.user = user;
            });
            // this.storage.getObject("pos_customer").then((customer: any) => {
            //   this.customerPhone = customer.phone;
            //   console.log(customer);
            // });
            this.storage.getObject("order").then((data) => {
                if (data != null) {
                    this.storageOrder = data;
                    var orderIndex = this.storageOrder.findIndex((x) => x.id === this.id);
                    this.order = this.storageOrder[orderIndex];
                    // if (this.order?.customer == null) {
                    //   this.order['customer'] = { id: "Walk-in", name: "Walk-in" };
                    // }
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
                    content += "Pelanggan : " + this.order.customer_name + " \n";
                    content += "--------------------------------\n";
                    for (let item of this.order.order_item) {
                        content += item.product.name + " \n";
                        content +=
                            this.leftRight(item.price + "x" + item.qty, this.global.currency(this.subtotalItem(item.price, item.qty))) + " \n";
                    }
                    content += "--------------------------------\n";
                    content +=
                        this.leftRight("Subtotal", this.global.currency(this.order.subtotal)) + " \n";
                    content +=
                        this.leftRight("Diskon", "(" + this.global.currency(this.order.discount) + ")") + " \n";
                    content +=
                        this.leftRight("Service Charge", this.global.currency(this.order.service_charge)) + " \n";
                    content +=
                        this.leftRight("Pajak", this.global.currency(this.order.tax)) +
                            " \n";
                    content += "--------------------------------\n";
                    content +=
                        this.leftRight("Grand Total", this.global.currency(this.order.total)) + " \n";
                    content += "--------------------------------\n";
                    content +=
                        this.leftRight("Pembayaran " + this.order.payment_channel, this.global.currency(this.order.cash_collected)) + " \n";
                    if (this.order.payment_channel == "Cash") {
                        content +=
                            this.leftRight("Uang kembali ", this.global.currency(this.order.cash_collected - this.order.total)) + " \n";
                    }
                    content += "--------------------------------\n \n";
                    content += this.center(this.company.format_receipt1) + " \n";
                    content += this.center(this.company.format_receipt2) + " \n";
                    content += "\n \n \n";
                    this.content = content;
                    // content wa
                    var contentWA = "*" + this.company.name + "* %0a %0a";
                    // contentWA += "================================%0a";
                    contentWA +=
                        "No order *TRX-" +
                            this.order.order_number +
                            "* (" +
                            this.order.order_time +
                            ")%0a";
                    contentWA += "Tipe order: " + this.order.order_type + "%0a";
                    contentWA += "Pelanggan : " + this.order.customer_name + " %0a";
                    contentWA += "--------------------------------%0a";
                    for (let item of this.order.order_item) {
                        contentWA += item.product.name + " %0a";
                        contentWA +=
                            item.price +
                                "x" +
                                item.qty +
                                "=" +
                                this.global.currency(this.subtotalItem(item.price, item.qty)) +
                                " %0a";
                    }
                    contentWA += "--------------------------------%0a";
                    contentWA +=
                        "Subtotal : " + this.global.currency(this.order.subtotal) + " %0a";
                    contentWA +=
                        "Diskon : " + this.global.currency(this.order.discount) + " %0a";
                    contentWA +=
                        "Service Charge : " +
                            this.global.currency(this.order.service_charge) +
                            " %0a";
                    contentWA +=
                        "Pajak : " + this.global.currency(this.order.tax) + " %0a %0a";
                    contentWA +=
                        "*Grand Total* : " +
                            this.global.currency(this.order.total) +
                            " %0a";
                    contentWA +=
                        "Pembayaran " +
                            this.order.payment_channel +
                            " : " +
                            this.global.currency(this.order.cash_collected) +
                            " %0a";
                    if (this.order.payment_channel == "Cash") {
                        contentWA +=
                            "Uang kembali : " +
                                this.global.currency(this.order.cash_collected - this.order.total) +
                                " %0a";
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
                    printHeader += "Pelanggan : " + this.order.customer_name + " \n";
                    printHeader += "--------------------------------\n";
                    this.printHeader = printHeader;
                    var printItem = "";
                    for (let item of this.order.order_item) {
                        printItem += item.product.name + " \n";
                        printItem +=
                            this.leftRight(item.price + "x" + item.qty + " ", this.global.currency(this.subtotalItem(item.price, item.qty))) + " \n";
                    }
                    this.printItem = printItem;
                    var printItemOrder = "";
                    for (let item of this.order.order_item) {
                        printItemOrder +=
                            this.leftRight(item.product.name + " ", item.qty) + " \n";
                        if (item.note != null) {
                            printItemOrder += item.note + "\n";
                        }
                        printItemOrder += " \n";
                    }
                    this.printItemOrder = printItemOrder;
                    var printFooter = "";
                    printFooter += "--------------------------------\n";
                    printFooter +=
                        this.leftRight("Subtotal", this.global.currency(this.order.subtotal)) + " \n";
                    printFooter +=
                        this.leftRight("Diskon", "(" + this.global.currency(this.order.discount) + ")") + " \n";
                    printFooter +=
                        this.leftRight("Service Charge", this.global.currency(this.order.service_charge)) + " \n";
                    printFooter +=
                        this.leftRight("Pajak", this.global.currency(this.order.tax)) +
                            " \n";
                    printFooter += "--------------------------------\n";
                    printFooter +=
                        this.leftRight("Grand Total", this.global.currency(this.order.total)) + " \n";
                    printFooter += "--------------------------------\n";
                    printFooter +=
                        this.leftRight("Pembayaran " + this.order.payment_channel, this.global.currency(this.order.cash_collected)) + " \n";
                    if (this.order.payment_channel == "Cash") {
                        printFooter +=
                            this.leftRight("Uang kembali ", this.global.currency(this.order.cash_collected - this.order.total)) + " \n";
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
    connectToBluetoothPrinter(number) {
        //This will connect to bluetooth printer via the mac address provided
        if (number == 1) {
            var a = this.bluetoothSerial.connect(this.printer);
        }
        else {
            var a = this.bluetoothSerial.connect(this.printer2);
        }
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
        var textResult = "";
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
        // console.log("L", leftTextString.length);
        // console.log("R", rightTextString.length);
        // console.log("countChar", countChar);
        // console.log("countSpace", countSpace);
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
        if (this.order.payment_method == "Cash") {
            result
                .align("left")
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
                .align("left")
                .newline()
                .line(this.content)
                .newline()
                .newline()
                .cut();
        }
        const resultByte = result.encode();
        // const resultQr = this.content;
        this.connectToBluetoothPrinter(1).subscribe((_) => {
            //2. Connected successfully
            this.bluetoothSerial.write(resultByte).then((_) => {
                //3. Print successful
                //If you want to tell user print is successful,
                //handle it here
                //4. IMPORTANT! Disconnect bluetooth after printing
                // console.log(_);
                this.disconnectBluetoothPrinter();
            }, (err) => {
                //If there is an error printing to bluetooth printer
                //handle it here
                console.log(err);
            });
        }, (err) => {
            //If there is an error connecting to bluetooth printer
            //handle it here
        });
    }
    printReceipt2() {
        this.global.loadingPresent("mencetak...");
        this.printReceiptHeader();
    }
    printReceiptHeader() {
        const encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_11___default.a();
        const result = encoder.initialize();
        result.align("left").newline().line(this.printHeader);
        const resultByte = result.encode();
        this.connectToBluetoothPrinter(1).subscribe((_) => {
            this.bluetoothSerial.write(resultByte).then((_) => {
                // console.log(_);
                setTimeout(() => {
                    this.printReceiptItem();
                }, 1000);
            }, (err) => {
                console.log(err);
            });
        }, (err) => { });
    }
    printReceiptItem() {
        const encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_11___default.a();
        const result = encoder.initialize();
        result.align("left").line(this.printItem);
        const resultByte = result.encode();
        this.bluetoothSerial.write(resultByte).then((_) => {
            console.log(_);
            setTimeout(() => {
                this.printReceiptFooter();
            }, 500);
        }, (err) => {
            console.log(err);
        });
    }
    printReceiptFooter() {
        const encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_11___default.a();
        const result = encoder.initialize();
        if (this.order.payment_method == "Cash") {
            result
                .align("left")
                .line(this.printFooter)
                .newline()
                .raw([0x1b, 0x70, 0x00])
                .raw([0x1b, 0x70, 0x01])
                .cut();
        }
        else {
            result.align("left").line(this.printFooter).newline().cut();
        }
        const resultByte = result.encode();
        this.bluetoothSerial.write(resultByte).then((_) => {
            console.log(_);
            this.global.loadingDismiss();
            this.disconnectBluetoothPrinter();
        }, (err) => {
            console.log(err);
        });
    }
    printOrder() {
        if (this.company.package == "Lite") {
            this.global.toastPresent("Fitur cetak nota order hanya tersedia dalam versi Premium");
            return false;
        }
        this.global.loadingPresent("mencetak...");
        this.printOrderHeader();
    }
    printOrderHeader() {
        const encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_11___default.a();
        const result = encoder.initialize();
        result.align("left").newline().line(this.printHeader);
        const resultByte = result.encode();
        this.connectToBluetoothPrinter(2).subscribe((_) => {
            this.bluetoothSerial.write(resultByte).then((_) => {
                console.log(_);
                setTimeout(() => {
                    this.printOrderItem();
                }, 1000);
            }, (err) => {
                console.log(err);
            });
        }, (err) => { });
    }
    printOrderItem() {
        const encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_11___default.a();
        const result = encoder.initialize();
        result.align("left").line(this.printItemOrder);
        const resultByte = result.encode();
        this.bluetoothSerial.write(resultByte).then((_) => {
            console.log(_);
            setTimeout(() => {
                this.printOrderFooter();
            }, 500);
        }, (err) => {
            console.log(err);
        });
    }
    printOrderFooter() {
        const encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_11___default.a();
        const result = encoder.initialize();
        result.line("--------------------------------\n").newline().cut();
        const resultByte = result.encode();
        this.bluetoothSerial.write(resultByte).then((_) => {
            console.log(_);
            this.global.loadingDismiss();
            this.disconnectBluetoothPrinter();
        }, (err) => {
            console.log(err);
        });
    }
    sendWAPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.company.package == "Lite") {
                this.global.toastPresent("Fitur kirim nota Whatsapp hanya tersedia dalam versi Premium");
                return false;
            }
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Kirim nota ke Whatsapp",
                inputs: [
                    {
                        name: "phone_number",
                        type: "tel",
                        placeholder: "Nomor WA tujuan",
                        value: this.customerPhone,
                    },
                ],
                buttons: [
                    {
                        text: "Batal",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: () => {
                            console.log("Confirm Cancel");
                        },
                    },
                    {
                        text: "Kirim",
                        handler: (data) => {
                            // var numberStr = String(data.phone_number);
                            // if (numberStr.charAt(0) == "0") {
                            //   var numberStr = numberStr.substring(0);
                            //   var numberStr = "62" + numberStr;
                            // }
                            console.log(this.customerPhone);
                            const numberStr = this.customerPhone;
                            window.open("https://wa.me/" + numberStr + "?text=" + this.contentWA);
                            console.log("Confirm Ok");
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    gotoPOS() {
        this.disabledAnimation = true;
        this.router.navigate(["/tabs/blank"]).then(() => {
            this.router.navigate(["/tabs/tab-pos"]);
        });
    }
    ionViewWillLeave() {
        let options = {
            direction: "right",
            duration: 300,
            slowdownfactor: 3,
            slidePixels: 0,
            iosdelay: 0,
            androiddelay: 0,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 0,
        };
        if (this.disabledAnimation == false) {
            this.nativePageTransitions.slide(options);
        }
    }
    checkThisOrderSync() {
        var offlineIndex = this.orderOffline.findIndex((y) => y === this.id);
        if (offlineIndex > -1) {
            return true;
        }
    }
    infoOffline() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Info",
                message: "Transaksi ini belum tersinkronisasi!",
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    cancelConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Konfirmasi pembatalan!",
                message: "Anda yakin membatalkan order ini?",
                buttons: [
                    {
                        text: "Tidak",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: (blah) => {
                            console.log("Confirm Cancel: blah");
                        },
                    },
                    {
                        text: "Ya",
                        handler: () => {
                            this.cancel();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    cancel() {
        if (this.user.level == "Cashier") {
            this.global.toastPresent("Anda tidak dapat membatalkan order, silahkan gunakan akses level Admin untuk membatalkan!");
            return false;
        }
        this.global.loadingPresent("membatalkan order...");
        this.storage.getObject("order").then((data) => {
            if (data != null) {
                var orderIndex = data.findIndex((x) => x.id === this.id);
                data[orderIndex].status = "Canceled";
                this.storage.setObject("order", data);
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + this.auth.token,
                });
                let options = { headers: reqHeader };
                let postData = {
                    id: this.id,
                };
                this.http
                    .post(this.global.base_url + "auth/order/cancel", postData, options)
                    .subscribe((data) => {
                    console.log(data);
                    if (data.status == 0) {
                        this.global.toastPresent(data.message);
                        this.router.navigate(["/tabs/blank"]).then(() => {
                            this.router.navigate(["/tabs/tab-order"]);
                        });
                        // this.ionViewWillEnter();
                    }
                    else {
                        console.log(data);
                    }
                    this.global.loadingDismiss();
                }, (error) => {
                    console.log(error);
                    this.global.loadingDismiss();
                });
            }
        });
    }
};
OrdersDetailPage.ctorParameters = () => [
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
OrdersDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-orders-detail",
        template: _raw_loader_orders_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrdersDetailPage);



/***/ }),

/***/ "Cuuh":
/*!***************************************************************!*\
  !*** ./src/app/orders-detail/orders-detail-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OrdersDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersDetailPageRoutingModule", function() { return OrdersDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orders_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-detail.page */ "7vo7");




const routes = [
    {
        path: '',
        component: _orders_detail_page__WEBPACK_IMPORTED_MODULE_3__["OrdersDetailPage"]
    }
];
let OrdersDetailPageRoutingModule = class OrdersDetailPageRoutingModule {
};
OrdersDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersDetailPageRoutingModule);



/***/ }),

/***/ "bGX2":
/*!*******************************************************!*\
  !*** ./src/app/orders-detail/orders-detail.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-small {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVycy1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6Im9yZGVycy1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tc21hbGwge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "mC4f":
/*!*******************************************************!*\
  !*** ./src/app/orders-detail/orders-detail.module.ts ***!
  \*******************************************************/
/*! exports provided: OrdersDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersDetailPageModule", function() { return OrdersDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");
/* harmony import */ var _orders_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders-detail-routing.module */ "Cuuh");
/* harmony import */ var _orders_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders-detail.page */ "7vo7");








let OrdersDetailPageModule = class OrdersDetailPageModule {
};
OrdersDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orders_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrdersDetailPageRoutingModule"],
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__["NgxQRCodeModule"]
        ],
        declarations: [_orders_detail_page__WEBPACK_IMPORTED_MODULE_7__["OrdersDetailPage"]]
    })
], OrdersDetailPageModule);



/***/ }),

/***/ "xUGN":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders-detail/orders-detail.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item lines=\"none\" color=\"success\" *ngIf=\"source=='pos'\">\r\n  <ion-icon name=\"checkmark-circle-outline\" slot=\"end\"></ion-icon>\r\n  Transaksi berhasil ditambahkan\r\n</ion-item>\r\n\r\n<ion-item lines=\"none\" color=\"success\" *ngIf=\"source=='payment'\">\r\n  <ion-icon name=\"checkmark-circle-outline\" slot=\"end\"></ion-icon>\r\n  Pembayaran berhasil\r\n</ion-item>\r\n<ion-header mode=\"ios\" *ngIf=\"showContent\">\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/tabs/tab-order']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"showContent\" style=\"font-size:14px;line-height:14px;\">TRX-{{order.order_number}} <br/><span style=\"font-size:11px; font-weight:normal;\">{{order.source}}</span></ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"infoOffline()\" fill=\"link\" *ngIf=\"checkThisOrderSync()\">\r\n        <ion-icon name=\"alert-circle-outline\" color=\"danger\" ></ion-icon>\r\n      </ion-button>\r\n\r\n      <ion-button (click)=\"cancelConfirm()\" fill=\"link\" *ngIf=\"order.status == 'Completed' || order.status == 'Pending'\">\r\n        <ion-icon name=\"close-circle-outline\" color=\"danger\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=\"ios\" class=\"ion-padding\" *ngIf=\"showContent\">\r\n  <ion-list>\r\n    <ion-item lines=\"full\"><ion-label>Status</ion-label>\r\n      <ion-badge *ngIf=\"order.status == 'Pending'\" slot=\"end\" color=\"warning\"><strong>Belum lunas</strong></ion-badge>\r\n       <ion-badge *ngIf=\"order.status == 'Completed'\" slot=\"end\" color=\"success\"><strong>Lunas</strong></ion-badge>\r\n       <ion-badge *ngIf=\"order.status == 'Canceled'\" slot=\"end\" color=\"danger\"><strong>Dibatalkan</strong></ion-badge>\r\n\r\n    </ion-item>\r\n    <ion-item lines=\"none\"><ion-label class=\"ion-text-wrap\">No order <br/><small>{{order.order_time}}</small></ion-label><ion-note slot=\"end\" color=\"primary\">TRX-{{order.order_number}}</ion-note></ion-item>\r\n    <ion-item lines=\"none\"><small>Tipe pesanan</small> <ion-note slot=\"end\" color=\"primary\"><small>{{order.order_type_label}}</small></ion-note></ion-item>\r\n    <ion-item lines=\"full\"><ion-label><small>Pelanggan <br/>Telepon</small></ion-label> <ion-text slot=\"end\" color=\"primary\" style=\"text-align:right;\"><small>{{order.customer_name}} <br/><strong><a href=\"https://wa.me/{{order.customer_phone}}\">{{order.customer_phone}}</a></strong></small></ion-text></ion-item>\r\n    <!-- <ion-item lines=\"full\"><small></small> <ion-note slot=\"end\" color=\"primary\"><small>Whatsapp</small></ion-note></ion-item> -->\r\n\r\n    <ion-item  *ngFor=\"let item of order.order_item\" lines=\"none\"><ion-label class=\"ion-text-wrap\">{{item.product.name}}<small><br/>{{global.currency(item.price)}} x {{item.qty}} <br/><span style=\"color:#666\">{{item.note}}</span></small></ion-label><ion-note slot=\"end\"><small>{{global.currency(subtotalItem(item.price,item.qty))}}</small></ion-note></ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"item-small\"><small><strong>Subtotal</strong></small><ion-note slot=\"end\" color=\"dark\"><small>{{global.currency(order.subtotal)}}</small></ion-note></ion-item>\r\n    <ion-item lines=\"none\" class=\"item-small\" *ngIf=\"order.discount > 0\"><small>Diskon </small><ion-note slot=\"end\"><small>{{global.currency(order.discount)}}</small></ion-note></ion-item>\r\n    <ion-item lines=\"none\" class=\"item-small\" *ngIf=\"order.service_charge > 0\"><small>Service charge ({{company.service_charge}}%)</small><ion-note slot=\"end\"><small>{{global.currency(order.service_charge)}}</small></ion-note></ion-item>\r\n    <ion-item lines=\"full\" *ngIf=\"order.tax > 0\"><small>Pajak ({{company.tax}}%)</small><ion-note slot=\"end\"><small>{{global.currency(order.tax)}}</small></ion-note></ion-item>\r\n    <ion-item lines=\"none\">Total<ion-note slot=\"end\" color=\"dark\">{{global.currency(order.total)}}</ion-note></ion-item>\r\n    <ion-item lines=\"full\" *ngIf=\"order.status == 'Completed'\"><small>Pembayaran ({{order.payment_channel}})</small><ion-note slot=\"end\" color=\"dark\"><small>{{global.currency(order.cash_collected)}}</small></ion-note></ion-item>\r\n    <ion-item lines=\"full\" *ngIf=\"order.status == 'Completed'\"><small>Ref pembayaran </small><ion-note slot=\"end\" color=\"dark\"><small>{{order.payment_note}}</small></ion-note></ion-item>\r\n    <ion-item lines=\"full\" *ngIf=\"order.status == 'Completed' && order.payment_method == 'Cash'\"><small>Uang kembali</small><ion-note slot=\"end\" color=\"dark\"><small>{{global.currency(order.cash_collected - order.total)}}</small></ion-note></ion-item>\r\n\r\n\r\n    <ion-item lines=\"none\"><ion-label class=\"ion-text-wrap\">Catatan order</ion-label><ion-note slot=\"end\" color=\"primary\"><small>{{order.note}}</small></ion-note></ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\" *ngIf=\"showContent\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col *ngIf=\"order.payment_channel == 'QRIS Online' && order.status == 'Pending'\"><ion-button expand=\"block\" fill=\"outline\" [routerLink]=\"['/orders-payment-qris/'+id]\">\r\n        <ion-icon name=\"qr-code-outline\" slot=\"start\" ></ion-icon>\r\n         Bayar QRIS\r\n      </ion-button>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"order.status == 'Completed'\"><ion-button expand=\"block\" (click)=\"printReceipt2()\">\r\n        <ion-icon name=\"print-outline\" slot=\"start\"></ion-icon>\r\n        Cetak nota\r\n      </ion-button>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"order.status == 'Completed'\"><ion-button expand=\"block\" (click)=\"printOrder()\">\r\n        <ion-icon name=\"print-outline\" slot=\"start\"></ion-icon>\r\n        Cetak order\r\n      </ion-button>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"order.status == 'Completed'\"><ion-button expand=\"block\" fill=\"outline\" (click)=\"sendWAPrompt()\">\r\n        <ion-icon name=\"arrow-redo-outline\" slot=\"start\" ></ion-icon>\r\n        Kirim Whatsapp\r\n      </ion-button>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"order.status == 'Pending'\"><ion-button expand=\"block\" color=\"secondary\" [routerLink]=\"['/orders-edit/'+order.id]\">\r\n        <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\r\n        Ubah pesanan\r\n      </ion-button>\r\n      </ion-col>\r\n      <ion-col  *ngIf=\"order.status == 'Pending'\"><ion-button expand=\"block\" color=\"primary\" [routerLink]=\"['/orders-payment/'+order.id]\">\r\n        <ion-icon name=\"card-outline\" slot=\"start\"></ion-icon>\r\n        Bayar\r\n      </ion-button>\r\n      </ion-col>\r\n      <ion-col><ion-button expand=\"block\" color=\"light\" (click)=\"gotoPOS()\">\r\n        <ion-icon name=\"calculator-outline\" slot=\"start\"></ion-icon>\r\n        Kembali ke POS\r\n      </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=orders-detail-orders-detail-module-es2015.js.map