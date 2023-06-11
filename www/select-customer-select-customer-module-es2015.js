(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-customer-select-customer-module"],{

/***/ "9Tb1":
/*!***********************************************************!*\
  !*** ./src/app/select-customer/select-customer.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtY3VzdG9tZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "iVrP":
/*!*******************************************************************!*\
  !*** ./src/app/select-customer/select-customer-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SelectCustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCustomerPageRoutingModule", function() { return SelectCustomerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _select_customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-customer.page */ "qhlK");




const routes = [
    {
        path: '',
        component: _select_customer_page__WEBPACK_IMPORTED_MODULE_3__["SelectCustomerPage"]
    }
];
let SelectCustomerPageRoutingModule = class SelectCustomerPageRoutingModule {
};
SelectCustomerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectCustomerPageRoutingModule);



/***/ }),

/***/ "lEgL":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-customer/select-customer.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button *ngIf=\"id\" fill=\"link\" [routerLink]=\"['/'+redirect+'/'+id]\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n      <ion-button *ngIf=\"!id\" fill=\"link\" [routerLink]=\"['/'+redirect]\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n      <ion-searchbar (ionInput)=\"filterList($event)\" placeholder=\"Cari pelanggan\"></ion-searchbar>\r\n  </ion-toolbar>\r\n\r\n    <div class=\"ion-padding ion-text-center\">\r\n      <ion-button fill=\"link\" color=\"primary\" (click)=\"choose({id:'Walk-in',name:'Walk-in'})\"><ion-text color=\"primary\">Walk-in</ion-text></ion-button>\r\n      <ion-button fill=\"outline\" color=\"primary\" (click)=\"presentAlertPrompt()\" ><ion-text color=\"primary\">+ Tambah pelanggan</ion-text></ion-button>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-list>\r\n    <ion-item button *ngFor=\"let item of customerSearch\" (click)=\"choose(item)\">\r\n      <ion-label>{{item.name}}</ion-label>\r\n      <ion-note slot=\"end\"><small>{{item.phone}}</small></ion-note>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "nNEp":
/*!***********************************************************!*\
  !*** ./src/app/select-customer/select-customer.module.ts ***!
  \***********************************************************/
/*! exports provided: SelectCustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCustomerPageModule", function() { return SelectCustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _select_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-customer-routing.module */ "iVrP");
/* harmony import */ var _select_customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-customer.page */ "qhlK");







let SelectCustomerPageModule = class SelectCustomerPageModule {
};
SelectCustomerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectCustomerPageRoutingModule"]
        ],
        declarations: [_select_customer_page__WEBPACK_IMPORTED_MODULE_6__["SelectCustomerPage"]]
    })
], SelectCustomerPageModule);



/***/ }),

/***/ "qhlK":
/*!*********************************************************!*\
  !*** ./src/app/select-customer/select-customer.page.ts ***!
  \*********************************************************/
/*! exports provided: SelectCustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCustomerPage", function() { return SelectCustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_customer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-customer.page.html */ "lEgL");
/* harmony import */ var _select_customer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-customer.page.scss */ "9Tb1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");











let SelectCustomerPage = class SelectCustomerPage {
    constructor(storage, http, global, router, loadingController, platform, nativePageTransitions, route, alertController) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.nativePageTransitions = nativePageTransitions;
        this.route = route;
        this.alertController = alertController;
        this.route.params.subscribe((params) => {
            if (params['redirect']) {
                this.redirect = params['redirect'];
            }
            if (params['id']) {
                this.id = params['id'];
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storage.getObject('auth').then((auth) => {
            this.auth = auth;
            this.getData();
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
            this.http.post(this.global.base_url + 'auth/customer/list', null, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.customer = data.customer;
                    this.customerSearch = this.customer;
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
    filterList(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.customerSearch = this.customer;
            const searchTerm = evt.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.customerSearch = this.customerSearch.filter(currentCustomer => {
                if (currentCustomer.name && searchTerm) {
                    return (currentCustomer.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
            console.log(this.customerSearch);
        });
    }
    choose(customer) {
        if (this.redirect == 'orders-edit') {
            this.global.loadingPresent('menyimpan pelanggan..');
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                order_id: this.id,
                customer_id: customer.id
            };
            this.http.post(this.global.base_url + 'auth/order/edit_customer', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.storage.getObject('order').then((storageOrder) => {
                        if (storageOrder != null) {
                            var orderIndex = storageOrder.findIndex(x => x.id === this.id);
                            storageOrder[orderIndex] = data.order;
                            this.storage.setObject('order', storageOrder);
                            this.global.toastPresent(data.message);
                            this.router.navigate(['/' + this.redirect + '/' + this.id + '/refresh']);
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
        }
        else if (this.redirect == 'booking-edit') {
            this.global.loadingPresent('menyimpan pelanggan..');
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                booking_id: this.id,
                customer_id: customer.id
            };
            this.http.post(this.global.base_url + 'auth/booking/edit_customer', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.storage.getObject('booking').then((storageBooking) => {
                        if (storageBooking != null) {
                            var bookingIndex = storageBooking.findIndex(x => x.id === this.id);
                            storageBooking[bookingIndex] = data.booking;
                            this.storage.setObject('booking', storageBooking);
                            this.global.toastPresent(data.message);
                            this.router.navigate(['/' + this.redirect + '/' + this.id + '/refresh']);
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
        }
        else {
            this.storage.setObject('pos_customer', { id: customer.id, name: customer.name, phone: customer.phone });
            this.router.navigate(['/' + this.redirect]);
        }
    }
    presentAlertPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Tambah pelanggan baru',
                inputs: [
                    {
                        name: 'name',
                        type: 'text',
                        id: 'name',
                        value: '',
                        placeholder: 'Nama'
                    },
                    {
                        name: 'phone',
                        type: 'tel',
                        id: 'phone',
                        value: '',
                        placeholder: 'Telepon'
                    },
                    {
                        name: 'email',
                        type: 'email',
                        id: 'email',
                        value: '',
                        placeholder: 'Email'
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
                    }, {
                        text: 'Tambah',
                        handler: (data) => {
                            this.process(data.name, data.phone, data.email);
                            console.log('Confirm Ok', data);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    process(name, phone, email) {
        if ((name == '') || (phone == '')) {
            this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
            return false;
        }
        this.global.loadingPresent('menambah pelanggan...');
        this.storage.getObject('auth').then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                name: name,
                email: email,
                phone: phone
            };
            this.http.post(this.global.base_url + 'auth/customer/add', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.global.toastPresent(data.message);
                    this.choose(data.customer);
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
};
SelectCustomerPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
SelectCustomerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-customer',
        template: _raw_loader_select_customer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_customer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectCustomerPage);



/***/ })

}]);
//# sourceMappingURL=select-customer-select-customer-module-es2015.js.map