(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-payment-orders-payment-module"],{

/***/ "IG+f":
/*!*********************************************************!*\
  !*** ./src/app/orders-payment/orders-payment.module.ts ***!
  \*********************************************************/
/*! exports provided: OrdersPaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPaymentPageModule", function() { return OrdersPaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _orders_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-payment-routing.module */ "nCsb");
/* harmony import */ var _orders_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders-payment.page */ "w+yV");







let OrdersPaymentPageModule = class OrdersPaymentPageModule {
};
OrdersPaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orders_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPaymentPageRoutingModule"]
        ],
        declarations: [_orders_payment_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPaymentPage"]]
    })
], OrdersPaymentPageModule);



/***/ }),

/***/ "QcGn":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders-payment/orders-payment.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" *ngIf=\"showContent\">\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/orders-detail/'+id+'/payment']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Pembayaran</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\" *ngIf=\"showContent\">\r\n\r\n<div class=\"payment-content\">\r\n\r\n\r\n\r\n  <div class=\"payment-column\">\r\n  <ion-list>\r\n\r\n    <ion-item-divider>\r\n      <h5>Order TRX-{{order.order_number}}</h5>\r\n    </ion-item-divider>\r\n    <ion-item mode=\"ios\" ><small><ion-text color=\"primary\">Pelanggan</ion-text></small>\r\n      <ion-note slot=\"end\">{{order.customer_id}}</ion-note>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item><small>Subtotal</small>\r\n\r\n      <ion-note slot=\"end\"><small>{{global.currency(subtotal)}} </small></ion-note>\r\n    </ion-item>\r\n    <ion-item><small>Diskon</small>\r\n\r\n      <ion-note slot=\"end\"><small>{{global.currency(order.discount)}}</small></ion-note>\r\n    </ion-item>\r\n    <ion-item><small>Service Charge</small>\r\n\r\n      <ion-note slot=\"end\"><small>{{global.currency(serviceCharge)}}</small></ion-note>\r\n    </ion-item>\r\n    <ion-item><small>Pajak</small>\r\n\r\n      <ion-note slot=\"end\"><small>{{global.currency(tax)}}</small></ion-note>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n\r\n  <ion-card color=\"dark\">\r\n    <ion-card-content>\r\n      <h4 class=\"total\">{{global.currency(total)}}</h4>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  </div>\r\n\r\n  <div class=\"payment-column\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" *ngIf=\"company.payment_cash == 1\">\r\n        <ion-button expand=\"block\"  color=\"dark\" fill=\"outline\" *ngIf=\"cash\">Tunai</ion-button>\r\n        <ion-button expand=\"block\"  color=\"light\"  *ngIf=\"!cash\" (click)=\"selectcash()\">Tunai</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" color=\"dark\" fill=\"outline\" *ngIf=\"!cash\">Non Tunai</ion-button>\r\n        <ion-button expand=\"block\"  color=\"light\" *ngIf=\"cash\" (click)=\"selectcashless()\">Non Tunai</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div *ngIf=\"cash && company.payment_cash\">\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Uang diterima</ion-label>\r\n    <ion-input type=\"tel\" [(ngModel)]=\"amountReceived\" (change)=\"amountReceivedChange()\"></ion-input>\r\n\r\n  </ion-item>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(total)\" color=\"{{checkIfAmountMatch(total)}}\">Uang Pas</ion-button>\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(50000)\" color=\"{{checkIfAmountMatch(50000)}}\">{{global.currency(50000)}}</ion-button>\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(100000)\" color=\"{{checkIfAmountMatch(100000)}}\">{{global.currency(100000)}}</ion-button>\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(200000)\" color=\"{{checkIfAmountMatch(200000)}}\">{{global.currency(200000)}}</ion-button>\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(300000)\" color=\"{{checkIfAmountMatch(300000)}}\">{{global.currency(300000)}}</ion-button>\r\n\r\n  </div>\r\n\r\n  </div>\r\n  <div *ngIf=\"!cash\">\r\n    <ion-list>\r\n  <ion-radio-group [(ngModel)]=\"paymentMethodChannel\">\r\n    <ion-item *ngIf=\"company.payment_debit_card == 1\">\r\n      <ion-label>Kartu Debit</ion-label>\r\n      <ion-radio slot=\"start\" value=\"Debit Card\"></ion-radio>\r\n      <ion-icon name=\"card-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"company.payment_credit_card == 1\">\r\n      <ion-label>Kartu Kredit</ion-label>\r\n      <ion-radio slot=\"start\" value=\"Credit Card\"></ion-radio>\r\n      <ion-icon name=\"card-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"company.payment_transfer == 1\">\r\n      <ion-label>Transfer Bank</ion-label>\r\n      <ion-radio slot=\"start\" value=\"Transfer Bank\"></ion-radio>\r\n      <ion-icon name=\"enter-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"company.payment_qris == 1\">\r\n      <ion-label class=\"ion-text-wrap\">QRIS <p><small>OVO, Gopay, DANA, ShoppePay, dll</small></p></ion-label>\r\n      <ion-radio slot=\"start\" value=\"QRIS\"></ion-radio>\r\n      <ion-icon name=\"qr-code-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"company.payment_qris_online == 1\">\r\n      <ion-label class=\"ion-text-wrap\">QRIS Online <p><small>OVO, Gopay, DANA, ShoppePay, dll</small></p></ion-label>\r\n      <ion-radio slot=\"start\" value=\"QRIS Online\"></ion-radio>\r\n      <ion-icon name=\"qr-code-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-radio-group>\r\n  </ion-list>\r\n  </div>\r\n\r\n  </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n<ion-footer mode=\"ios\" class=\"ion-padding\" style=\"border-top:1px solid #ccc;\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <!-- <ion-col size=\"3\">\r\n        <ion-button [routerLink]=\"['/tabs/tab-pos']\" color=\"light\" expand=\"block\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n      </ion-col> -->\r\n\r\n      <ion-col size=\"12\">\r\n        <ion-button (click)=\"process('Completed')\" color=\"primary\" expand=\"block\">\r\n          Bayar\r\n        <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "W+dd":
/*!*********************************************************!*\
  !*** ./src/app/orders-payment/orders-payment.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".total {\n  font-size: 24px;\n  text-align: center;\n}\n\n.payment-content {\n  padding-top: 10px;\n}\n\n@media screen and (min-width: 720px) {\n  .payment-column {\n    width: 49%;\n    float: left;\n  }\n}\n\n@media screen and (max-width: 719px) {\n  .payment-column {\n    width: 100%;\n    float: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVycy1wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUVFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7RUFBRjtBQUNGOztBQUdBO0VBRUU7SUFDRSxXQUFBO0lBQ0EsV0FBQTtFQUZGO0FBQ0YiLCJmaWxlIjoib3JkZXJzLXBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvdGFsIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGF5bWVudC1jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgLnBheW1lbnQtY29sdW1uIHtcclxuICAgIHdpZHRoOjQ5JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzE5cHgpIHtcclxuXHJcbiAgLnBheW1lbnQtY29sdW1uIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "nCsb":
/*!*****************************************************************!*\
  !*** ./src/app/orders-payment/orders-payment-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OrdersPaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPaymentPageRoutingModule", function() { return OrdersPaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orders_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-payment.page */ "w+yV");




const routes = [
    {
        path: '',
        component: _orders_payment_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPaymentPage"]
    }
];
let OrdersPaymentPageRoutingModule = class OrdersPaymentPageRoutingModule {
};
OrdersPaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersPaymentPageRoutingModule);



/***/ }),

/***/ "w+yV":
/*!*******************************************************!*\
  !*** ./src/app/orders-payment/orders-payment.page.ts ***!
  \*******************************************************/
/*! exports provided: OrdersPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPaymentPage", function() { return OrdersPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orders_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders-payment.page.html */ "QcGn");
/* harmony import */ var _orders_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders-payment.page.scss */ "W+dd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");











let OrdersPaymentPage = class OrdersPaymentPage {
    constructor(storage, http, global, router, loadingController, platform, nativePageTransitions, route) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.nativePageTransitions = nativePageTransitions;
        this.route = route;
        this.company = { payment_cash: 1 };
        this.discount = { id: '', name: '', amount: 0, type: 'Fixed' };
        this.orderType = "none";
        this.customer = { id: 'Walk-in', name: 'Walk-in' };
        this.paymentMethod = 'Cash';
        this.paymentMethodChannel = 'Cash';
        this.amountReceived = '';
        this.amountChange = 0;
        this.backButtonText = 'Kembali';
        this.backButtonIcon = 'arrow-back-outline';
        this.cash = true;
        this.storageOrder = [];
        this.booking = { id: '' };
        this.showContent = false;
        this.route.params.subscribe((params) => {
            if (params['id']) {
                if (params['id'] != '') {
                    this.id = params['id'];
                    this.initialize();
                }
            }
        });
    }
    ngOnInit() {
    }
    initialize() {
        this.platform.ready().then(() => {
            this.storage.getObject('auth').then((auth) => {
                this.auth = auth;
                this.storage.getObject('order').then((data) => {
                    if (data != null) {
                        this.storageOrder = data;
                        var orderIndex = this.storageOrder.findIndex(x => x.id === this.id);
                        this.order = this.storageOrder[orderIndex];
                        if (this.order.customer == null) {
                            this.order.customer = { id: 'Walk-in', name: 'Walk-in' };
                        }
                        this.subtotal = this.order.subtotal;
                        this.serviceCharge = this.order.service_charge;
                        this.tax = this.order.tax;
                        this.total = this.order.total;
                        console.log("data all", data);
                        console.log(orderIndex);
                        this.showContent = true;
                    }
                });
                this.storage.getObject('company').then((company) => {
                    this.company = company;
                });
            });
            // this.storage.getObject('pos_booking').then((data: any) => {
            //   if(data != null)
            //   {
            //     this.booking = data;
            //   }
            // });
            //
            // this.storage.getObject('pos_customer').then((data: any) => {
            //   if(data != null)
            //   {
            //     this.customer = data;
            //   }
            // });
            //
            // this.storage.getObject('pos_cart').then((data: any) => {
            //   if(data != null)
            //   {
            //     this.cart = data;
            //   }
            // });
            //
            // this.storage.getObject('pos_subtotal').then((data: any) => {
            //   this.totalAmount = data.amount;
            //
            //   this.subtotal = this.totalAmount;
            //   this.totalQty = data.qty;
            //   console.log(data);
            // });
            //
            // this.storage.getObject('pos_order_type').then((data: any) => {
            //   this.orderType = data.order_type_label;
            // });
            //
            // this.storage.getObject('pos_discount').then((data: any) => {
            //
            //     if(data != null)
            //     {
            //       this.discount = data;
            //       if(data.type == 'Percentage')
            //       {
            //         this.discount.amount = this.subtotal * data.amount / 100;
            //         this.subtotalAfterDiscount = parseInt(this.subtotal) - parseInt(this.discount.amount);
            //       }
            //       else
            //       {
            //         this.discount.amount = data.amount;
            //         this.subtotalAfterDiscount = parseInt(this.subtotal) - parseInt(this.discount.amount);
            //       }
            //     }
            //     else
            //     {
            //       this.subtotalAfterDiscount = parseInt(this.subtotal) - parseInt(this.discount.amount);
            //     }
            //
            //
            //     this.storage.getObject('company').then((data: any) => {
            //       if(data != null)
            //       {
            //         this.company = data;
            //         this.serviceCharge = this.subtotalAfterDiscount * data.service_charge / 100;
            //         this.tax = this.subtotalAfterDiscount * data.tax / 100;
            //
            //         if(data.payment_cash != 1)
            //         {
            //           this.cash == false;
            //           this.selectcashless();
            //         }
            //       }
            //
            //       this.total = this.subtotalAfterDiscount + this.serviceCharge + this.tax;
            //     });
            //
            // });
        });
        // this.loadingController.dismiss();
    }
    selectcash() {
        this.cash = true;
        this.paymentMethod = 'Cash';
        this.paymentMethodChannel = 'Cash';
    }
    selectcashless() {
        this.cash = false;
        this.paymentMethod = 'Cashless';
        this.paymentMethodChannel = '';
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
        this.storage.getObject('order').then((data) => {
            if (data != null) {
                this.storageOrder = data;
                this.order = this.storageOrder;
            }
            this.storage.getObject('outlet_active').then((outlet) => {
                this.activeOutlet = outlet;
                this.storage.getObject('user').then((user) => {
                    this.activeUser = user;
                    this.processPayment(status);
                });
            });
        });
    }
    processPayment(status) {
        if (status == 'Completed') {
            if (this.paymentMethodChannel == '') {
                this.global.toastPresent('Silahkan pilih channel pembayaran!');
                return false;
            }
            if (this.paymentMethod == 'Cash') {
                if (this.amountReceived < this.total) {
                    this.global.toastPresent('Uang yang diterima tidak kurang dari total transaksi!');
                    return false;
                }
            }
            else {
                this.amountReceived = this.total;
            }
        }
        this.global.loadingPresent('memproses pembayaran...');
        var payment = {
            method: this.paymentMethod,
            amountReceived: this.amountReceived,
            amountChange: this.amountChange
        };
        this.storage.setObject('pos_payment', payment);
        // update to local storage
        var orderIndex = this.storageOrder.findIndex(x => x.id === this.id);
        let statusOrder = '';
        if (this.paymentMethodChannel == 'QRIS Online') {
            statusOrder = 'Pending';
        }
        else {
            statusOrder = status;
        }
        this.storageOrder[orderIndex].cash_collected = this.amountReceived;
        this.storageOrder[orderIndex].payment_channel = this.paymentMethodChannel;
        this.storageOrder[orderIndex].payment_method = this.paymentMethod;
        this.storageOrder[orderIndex].status = statusOrder;
        var order = {
            id: this.id,
            status: statusOrder,
            cash_collected: this.amountReceived,
            payment_method: this.paymentMethod,
            payment_channel: this.paymentMethodChannel
        };
        this.storage.setObject('order', this.storageOrder);
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        this.http.post(this.global.base_url + 'auth/order/payment', order, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                console.log(data);
            }
            else {
                console.log(data);
            }
            if (this.paymentMethodChannel == 'QRIS Online') {
                this.router.navigate(['/orders-payment-qris/' + this.id]);
            }
            else {
                this.router.navigate(['/orders-detail/' + this.id + '/payment']);
            }
            this.global.loadingDismiss();
        }, error => {
            this.storage.getObject('order_offline').then((data) => {
                console.log("orderoffline", data);
                if (data == null) {
                    let tempOrderOffline = [];
                    tempOrderOffline.push(order.id);
                    this.storage.setObject('order_offline', tempOrderOffline);
                }
                else {
                    let tempOrderOffline = data;
                    tempOrderOffline.push(order.id);
                    this.storage.setObject('order_offline', tempOrderOffline);
                }
                this.router.navigate(['/orders-detail/' + this.id + '/payment']);
                this.global.loadingDismiss();
            });
            console.log(error);
        });
    }
    ionViewWillLeave() {
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
    }
};
OrdersPaymentPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
OrdersPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orders-payment',
        template: _raw_loader_orders_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrdersPaymentPage);



/***/ })

}]);
//# sourceMappingURL=orders-payment-orders-payment-module-es2015.js.map