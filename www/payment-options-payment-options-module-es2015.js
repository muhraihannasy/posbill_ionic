(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-options-payment-options-module"],{

/***/ "PnWj":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment-options/payment-options.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/tabs/tab-pos']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Pembayaran</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n<div class=\"payment-content\">\r\n\r\n  <div class=\"payment-column\">\r\n  <ion-list>\r\n    <ion-item lines=\"none\" mode=\"ios\" [routerLink]=\"['/select-customer/payment-options']\" color=\"light\"><small><ion-text color=\"primary\">Pelanggan</ion-text></small>\r\n      <ion-note slot=\"end\">{{customer.name}}</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"booking.id != ''\"><small>No Booking <br/>Meja / Referensi</small>\r\n      <ion-note slot=\"end\" style=\"text-align:right;\"><small>BOOK-{{booking.book_number}} <br/>{{booking.book_ref}}</small></ion-note>\r\n    </ion-item>\r\n    <ion-item><small>Subtotal</small>\r\n\r\n      <ion-note slot=\"end\"><small>{{global.currency(subtotal)}} </small></ion-note>\r\n    </ion-item>\r\n    <ion-item button [routerLink]=\"['/select-discount/payment-options']\"><small>Diskon</small>\r\n\r\n      <ion-note slot=\"end\" color=\"primary\"><small>{{global.currency(discount.amount)}}</small></ion-note>\r\n    </ion-item>\r\n    <ion-item><small>Service Charge</small>\r\n\r\n      <ion-note slot=\"end\"><small>{{global.currency(serviceCharge)}}</small></ion-note>\r\n    </ion-item>\r\n    <ion-item><small>Pajak</small>\r\n\r\n      <ion-note slot=\"end\"><small>{{global.currency(tax)}}</small></ion-note>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n\r\n  <ion-card color=\"dark\">\r\n    <ion-card-content>\r\n      <h4 class=\"total\">{{global.currency(total)}}</h4>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  </div>\r\n\r\n  <div class=\"payment-column\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" *ngIf=\"company.payment_cash == 1\">\r\n        <ion-button expand=\"block\"  color=\"dark\" fill=\"outline\" *ngIf=\"cash\">Tunai</ion-button>\r\n        <ion-button expand=\"block\"  color=\"light\"  *ngIf=\"!cash\" (click)=\"selectcash()\">Tunai</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" color=\"dark\" fill=\"outline\" *ngIf=\"!cash\">Non Tunai</ion-button>\r\n        <ion-button expand=\"block\"  color=\"light\" *ngIf=\"cash\" (click)=\"selectcashless()\">Non Tunai</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div *ngIf=\"cash && company.payment_cash\">\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Uang diterima</ion-label>\r\n    <ion-input type=\"tel\" [(ngModel)]=\"amountReceived\" (change)=\"amountReceivedChange()\"></ion-input>\r\n\r\n  </ion-item>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(total)\" color=\"{{checkIfAmountMatch(total)}}\">Uang Pas</ion-button>\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(50000)\" color=\"{{checkIfAmountMatch(50000)}}\">{{global.currency(50000)}}</ion-button>\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(100000)\" color=\"{{checkIfAmountMatch(100000)}}\">{{global.currency(100000)}}</ion-button>\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(200000)\" color=\"{{checkIfAmountMatch(200000)}}\">{{global.currency(200000)}}</ion-button>\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(300000)\" color=\"{{checkIfAmountMatch(300000)}}\">{{global.currency(300000)}}</ion-button>\r\n\r\n  </div>\r\n\r\n  </div>\r\n  <div *ngIf=\"!cash\">\r\n    <ion-list>\r\n  <ion-radio-group [(ngModel)]=\"paymentMethodChannel\">\r\n    <ion-item *ngIf=\"company.payment_debit_card == 1\" (click)=\"openPaymentNote('Debit Card')\">\r\n      <ion-label>Kartu Debit</ion-label>\r\n      <ion-radio slot=\"start\" value=\"Debit Card\"></ion-radio>\r\n      <ion-icon name=\"card-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"company.payment_credit_card == 1\" (click)=\"openPaymentNote('Credit Card')\">\r\n      <ion-label>Kartu Kredit</ion-label>\r\n      <ion-radio slot=\"start\" value=\"Credit Card\"></ion-radio>\r\n      <ion-icon name=\"card-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"company.payment_transfer == 1\" (click)=\"openPaymentNote('Transfer Bank')\">\r\n      <ion-label>Transfer Bank</ion-label>\r\n      <ion-radio slot=\"start\" value=\"Transfer Bank\"></ion-radio>\r\n      <ion-icon name=\"enter-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"company.payment_qris == 1\">\r\n      <ion-label class=\"ion-text-wrap\">QRIS <p><small>OVO, Gopay, DANA, ShoppePay, dll</small></p></ion-label>\r\n      <ion-radio slot=\"start\" value=\"QRIS\"></ion-radio>\r\n      <ion-icon name=\"qr-code-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"company.payment_qris_online == 1\">\r\n      <ion-label class=\"ion-text-wrap\">QRIS Online <p><small>OVO, Gopay, DANA, ShoppePay, dll</small></p></ion-label>\r\n      <ion-radio slot=\"start\" value=\"QRIS Online\"></ion-radio>\r\n      <ion-icon name=\"qr-code-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-radio-group>\r\n  </ion-list>\r\n  </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n<ion-footer mode=\"ios\" class=\"ion-padding\" style=\"border-top:1px solid #ccc;\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <!-- <ion-col size=\"3\">\r\n        <ion-button [routerLink]=\"['/tabs/tab-pos']\" color=\"light\" expand=\"block\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n      </ion-col> -->\r\n\r\n      <ion-col size=\"2\">\r\n        <ion-button (click)=\"openNote()\" color=\"light\" expand=\"block\">\r\n          <ion-icon name=\"document-text-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"5\">\r\n        <ion-button (click)=\"confirmToProcess('Pending')\" color=\"light\" expand=\"block\">\r\n          Bayar nanti\r\n        </ion-button>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"5\">\r\n        <ion-button (click)=\"confirmToProcess('Completed')\" color=\"primary\" expand=\"block\">\r\n          Bayar\r\n        <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "mcmO":
/*!***********************************************************!*\
  !*** ./src/app/payment-options/payment-options.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".total {\n  font-size: 24px;\n  text-align: center;\n}\n\n.payment-content {\n  padding-top: 10px;\n}\n\n@media screen and (min-width: 720px) {\n  .payment-column {\n    width: 49%;\n    float: left;\n  }\n}\n\n@media screen and (max-width: 719px) {\n  .payment-column {\n    width: 100%;\n    float: none;\n  }\n}\n\n.alertClass {\n  transform: scale(1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBheW1lbnQtb3B0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFFRTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUVFO0lBQ0UsV0FBQTtJQUNBLFdBQUE7RUFGRjtBQUNGOztBQU1BO0VBRUUscUJBQUE7QUFMRiIsImZpbGUiOiJwYXltZW50LW9wdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvdGFsIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGF5bWVudC1jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgLnBheW1lbnQtY29sdW1uIHtcclxuICAgIHdpZHRoOjQ5JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzE5cHgpIHtcclxuXHJcbiAgLnBheW1lbnQtY29sdW1uIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uYWxlcnRDbGFzcyB7XHJcbiAgLy8gLS1tYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "ruGQ":
/*!*********************************************************!*\
  !*** ./src/app/payment-options/payment-options.page.ts ***!
  \*********************************************************/
/*! exports provided: PaymentOptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentOptionsPage", function() { return PaymentOptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_options_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment-options.page.html */ "PnWj");
/* harmony import */ var _payment_options_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-options.page.scss */ "mcmO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ "4USb");











let PaymentOptionsPage = class PaymentOptionsPage {
    constructor(storage, http, global, router, loadingController, platform, nativePageTransitions, alertController) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.nativePageTransitions = nativePageTransitions;
        this.alertController = alertController;
        this.company = { payment_cash: 1 };
        this.discount = { id: "", name: "", amount: 0, type: "Fixed" };
        this.paymentNote = "";
        this.orderType = "none";
        this.orderTypeLabel = "none";
        this.customer = { id: "Walk-in", name: "Walk-in", phone: "" };
        this.paymentMethod = "Cash";
        this.paymentMethodChannel = "Cash";
        this.amountReceived = "";
        this.amountChange = 0;
        this.backButtonText = "Kembali";
        this.backButtonIcon = "arrow-back-outline";
        this.cash = true;
        // order
        this.order = [];
        this.storageOrder = [];
        this.booking = { id: "" };
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.platform.ready().then(() => {
            this.booking = { id: "" };
            this.storage.getObject("auth").then((auth) => {
                this.auth = auth;
            });
            this.storage.getObject("pos_booking").then((data) => {
                if (data != null) {
                    this.booking = data;
                }
            });
            this.storage.getObject("pos_customer").then((data) => {
                if (data != null) {
                    this.customer = data;
                    console.log(data);
                }
            });
            this.storage.getObject("pos_cart").then((data) => {
                if (data != null) {
                    this.cart = data;
                }
            });
            this.storage.getObject("pos_subtotal").then((data) => {
                this.totalAmount = data.amount;
                this.subtotal = this.totalAmount;
                this.totalQty = data.qty;
                console.log(data);
            });
            this.storage.getObject("pos_order_type").then((data) => {
                this.orderType = data.order_type;
                this.orderTypeLabel = data.order_type_label;
            });
            this.storage.getObject("pos_discount").then((data) => {
                if (data != null) {
                    this.discount = data;
                    if (data.type == "Percentage") {
                        this.discount.amount = (this.subtotal * data.amount) / 100;
                        this.subtotalAfterDiscount =
                            parseInt(this.subtotal) - parseInt(this.discount.amount);
                    }
                    else {
                        this.discount.amount = data.amount;
                        this.subtotalAfterDiscount =
                            parseInt(this.subtotal) - parseInt(this.discount.amount);
                    }
                }
                else {
                    this.subtotalAfterDiscount =
                        parseInt(this.subtotal) - parseInt(this.discount.amount);
                }
                this.storage.getObject("company").then((data) => {
                    if (data != null) {
                        this.company = data;
                        this.serviceCharge =
                            (this.subtotalAfterDiscount * data.service_charge) / 100;
                        this.tax = (this.subtotalAfterDiscount * data.tax) / 100;
                        if (data.payment_cash != 1) {
                            this.cash == false;
                            this.selectcashless();
                        }
                    }
                    this.total =
                        this.subtotalAfterDiscount + this.serviceCharge + this.tax;
                });
            });
        });
        // this.loadingController.dismiss();
    }
    selectcash() {
        this.cash = true;
        this.paymentMethod = "Cash";
        this.paymentMethodChannel = "Cash";
    }
    selectcashless() {
        this.cash = false;
        this.paymentMethod = "Cashless";
        this.paymentMethodChannel = "";
        this.amountReceived = this.total;
    }
    shortcutAmount(amount) {
        this.amountReceived = parseFloat(amount);
        this.amountReceivedChange();
    }
    amountReceivedChange() {
        this.amountReceived = parseFloat(this.amountReceived);
        this.amountChange = this.amountReceived - this.totalAmount;
    }
    checkIfAmountMatch(amount) {
        if (parseFloat(this.amountReceived) == amount) {
            return "primary";
        }
        else {
            return "light";
        }
    }
    process(status) {
        this.storage.getObject("order").then((data) => {
            if (data != null) {
                this.storageOrder = data;
                this.order = this.storageOrder;
            }
            this.storage.getObject("outlet_active").then((outlet) => {
                this.activeOutlet = outlet;
                this.storage.getObject("user").then((user) => {
                    this.activeUser = user;
                    this.processOrder(status);
                });
            });
        });
    }
    processOrder(status) {
        if (status == "Completed") {
            if (this.paymentMethodChannel == "") {
                this.global.toastPresent("Silahkan pilih channel pembayaran!");
                return false;
            }
            if (this.paymentMethod == "Cash") {
                if (this.amountReceived < this.total) {
                    this.global.toastPresent("Uang yang diterima tidak kurang dari total transaksi!");
                    return false;
                }
            }
            else {
                this.amountReceived = this.total;
            }
        }
        this.global.loadingPresent("memproses order...");
        if (status == "Pending") {
            this.amountReceived = 0;
            this.amountChange = 0;
            var payment = {
                method: this.paymentMethod,
                amountReceived: this.amountReceived,
                amountChange: this.amountChange,
            };
        }
        else {
            var payment = {
                method: this.paymentMethod,
                amountReceived: this.amountReceived,
                amountChange: this.amountChange,
            };
        }
        this.storage.setObject("pos_payment", payment);
        var order_id = Object(uuid__WEBPACK_IMPORTED_MODULE_10__["v4"])();
        var order_number = this.company.seq +
            this.global.getYear() +
            this.global.getMonth() +
            this.global.getDate() +
            this.global.getMathRandom();
        var order_item = [];
        for (let item of this.cart) {
            var subtotal = item.price * item.qty;
            var product = { id: item.id, name: item.name };
            var tempItem = {
                id: Object(uuid__WEBPACK_IMPORTED_MODULE_10__["v4"])(),
                order_id: order_id,
                order_number: order_number,
                order_time: this.global.getDateNow(),
                product_id: item.id,
                name: item.name,
                cost: item.cost,
                price: item.price,
                qty: item.qty,
                note: item.note,
                subtotal: subtotal,
                status: "Completed",
                product: product,
            };
            order_item.push(tempItem);
        }
        let statusOrder = "";
        if (this.paymentMethodChannel == "QRIS Online") {
            statusOrder = "Pending";
        }
        else {
            statusOrder = status;
        }
        let order = {
            id: order_id,
            booking_id: this.booking.booking_id,
            order_number: order_number,
            order_time: this.global.getDateNow(),
            outlet_id: this.activeOutlet.id,
            customer: { id: this.customer.id, name: this.customer.name },
            customer_name: this.customer.name,
            customer_phone: this.customer.phone,
            customer_id: this.customer.id,
            user_id: this.activeUser.id,
            subtotal: this.subtotal,
            discount: this.discount.amount,
            service_charge: this.serviceCharge,
            tax: this.tax,
            total: this.total,
            order_type: this.orderType,
            order_type_label: this.orderTypeLabel,
            note: this.note,
            status: statusOrder,
            cash_collected: this.amountReceived,
            payment_method: this.paymentMethod,
            payment_channel: this.paymentMethodChannel,
            payment_note: this.paymentNote,
            order_item: order_item,
        };
        this.order.unshift(order);
        this.storage.setObject("order", this.order);
        if (this.booking.booking_id != null) {
            this.storage.getObject("booking").then((booking) => {
                var bookIndex = booking.findIndex((x) => x.id === this.booking.booking_id);
                if (bookIndex >= 0) {
                    booking.splice(bookIndex, 1);
                    this.storage.setObject("booking", booking);
                }
                this.storage
                    .getObject("booking_offline")
                    .then((bookingOffline) => {
                    var bookOfflineIndex = bookingOffline.findIndex((x) => x === this.booking.booking_id);
                    if (bookOfflineIndex >= 0) {
                        bookingOffline.splice(bookOfflineIndex, 1);
                        this.storage.setObject("booking_offline", bookingOffline);
                    }
                });
            });
        }
        else {
            this.booking.booking_id = null;
        }
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.auth.token,
        });
        let options = { headers: reqHeader };
        this.http
            .post(this.global.base_url + "auth/order/store", order, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                console.log(data);
            }
            else {
                console.log(data);
            }
            if (this.paymentMethodChannel == "QRIS Online") {
                this.router.navigate(["/orders-payment-qris/" + order_id]);
            }
            else {
                this.router.navigate(["/orders-detail/" + order_id + "/pos"]);
            }
            this.global.loadingDismiss();
        }, (error) => {
            this.storage.getObject("order_offline").then((data) => {
                console.log("orderoffline", data);
                if (data == null) {
                    let tempOrderOffline = [];
                    tempOrderOffline.push(order.id);
                    this.storage.setObject("order_offline", tempOrderOffline);
                }
                else {
                    let tempOrderOffline = data;
                    tempOrderOffline.push(order.id);
                    this.storage.setObject("order_offline", tempOrderOffline);
                }
                this.router.navigate(["/orders-detail/" + order_id + "/pos"]);
                this.global.loadingDismiss();
            });
            console.log(error);
        });
    }
    openPaymentNote(channel) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.paymentNote = "";
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Catatan pembayaran " + channel,
                inputs: [
                    {
                        name: "payment_note",
                        id: "payment_note",
                        type: "textarea",
                        placeholder: "Nomor kartu, nomor pembayaran",
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
                        text: "Ok",
                        handler: (data) => {
                            console.log("Confirm Ok");
                            this.paymentNote = data.payment_note;
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    openNote() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "alertClass",
                header: "Catatan order",
                inputs: [
                    {
                        name: "note",
                        id: "note",
                        type: "textarea",
                        placeholder: "",
                        value: this.note,
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
                        text: "Ok",
                        handler: (data) => {
                            this.note = data.note;
                            console.log("Confirm Ok");
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    confirmToProcess(status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Konfirmasi order",
                message: "Yakin memproses order ini?",
                buttons: [
                    {
                        text: "Batal",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: (blah) => {
                            console.log("Confirm Cancel: blah");
                        },
                    },
                    {
                        text: "Ok",
                        handler: () => {
                            console.log("Confirm Okay");
                            this.process(status);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    ionViewWillLeave() {
        let options = {
            direction: "left",
            duration: 300,
            slowdownfactor: 0,
            slidePixels: 0,
            iosdelay: 0,
            androiddelay: 0,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 0,
        };
        this.nativePageTransitions.slide(options);
    }
};
PaymentOptionsPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
PaymentOptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-payment-options",
        template: _raw_loader_payment_options_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_options_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymentOptionsPage);



/***/ }),

/***/ "sIhH":
/*!***********************************************************!*\
  !*** ./src/app/payment-options/payment-options.module.ts ***!
  \***********************************************************/
/*! exports provided: PaymentOptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentOptionsPageModule", function() { return PaymentOptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _payment_options_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-options-routing.module */ "w8jk");
/* harmony import */ var _payment_options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-options.page */ "ruGQ");







let PaymentOptionsPageModule = class PaymentOptionsPageModule {
};
PaymentOptionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_options_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentOptionsPageRoutingModule"]
        ],
        declarations: [_payment_options_page__WEBPACK_IMPORTED_MODULE_6__["PaymentOptionsPage"]]
    })
], PaymentOptionsPageModule);



/***/ }),

/***/ "w8jk":
/*!*******************************************************************!*\
  !*** ./src/app/payment-options/payment-options-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentOptionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentOptionsPageRoutingModule", function() { return PaymentOptionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _payment_options_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-options.page */ "ruGQ");




const routes = [
    {
        path: '',
        component: _payment_options_page__WEBPACK_IMPORTED_MODULE_3__["PaymentOptionsPage"]
    }
];
let PaymentOptionsPageRoutingModule = class PaymentOptionsPageRoutingModule {
};
PaymentOptionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentOptionsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=payment-options-payment-options-module-es2015.js.map