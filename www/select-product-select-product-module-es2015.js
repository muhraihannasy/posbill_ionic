(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-product-select-product-module"],{

/***/ "+V+r":
/*!*******************************************************!*\
  !*** ./src/app/select-product/select-product.page.ts ***!
  \*******************************************************/
/*! exports provided: SelectProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProductPage", function() { return SelectProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_product_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-product.page.html */ "qLRe");
/* harmony import */ var _select_product_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-product.page.scss */ "Fy8t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");











let SelectProductPage = class SelectProductPage {
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
        this.showContent = false;
        this.route.params.subscribe((params) => {
            if (params['source']) {
                if (params['source'] != '') {
                    this.source = params['source'];
                }
            }
            if (params['type']) {
                if (params['type'] != '') {
                    this.type = params['type'];
                }
            }
            if (params['id']) {
                if (params['id'] != '') {
                    this.id = params['id'];
                }
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
            this.http.post(this.global.base_url + 'auth/category/list', null, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.category = data.category;
                    this.getDataProduct();
                    console.log(data);
                }
                else {
                    console.log(data);
                }
            }, error => {
                console.log(error);
            });
        });
    }
    getDataProduct() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        this.http.post(this.global.base_url + 'auth/product/list', null, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.product = data.product;
                this.productSearch = this.product;
                console.log(data);
            }
            else {
                console.log(data);
            }
            this.showContent = true;
            this.global.loadingDismiss();
        }, error => {
            console.log(error);
        });
    }
    getProductByCategory(category_id) {
        var filterArray = this.productSearch.filter(x => x.category_id === category_id);
        return filterArray;
    }
    choose(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.product = item;
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.product.name,
                inputs: [
                    {
                        name: 'qty',
                        type: 'number',
                        id: 'qty',
                        value: 1,
                        placeholder: 'Qty'
                    },
                    {
                        name: 'note',
                        id: 'note',
                        value: '',
                        type: 'textarea',
                        placeholder: 'Catatan'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            this.process(item, data.qty, data.note);
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    process(dataItem, dataQty, dataNote) {
        this.global.loadingPresent('menambah item...');
        if (this.source == 'orders-edit') {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = { order_id: this.id, product_id: dataItem.id, qty: dataQty, note: dataNote };
            this.http.post(this.global.base_url + 'auth/order/add_item', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    console.log(data);
                    this.storage.getObject('order').then((storageOrder) => {
                        if (storageOrder != null) {
                            var orderIndex = storageOrder.findIndex(x => x.id === this.id);
                            storageOrder[orderIndex] = data.order;
                            this.storage.setObject('order', storageOrder);
                            this.router.navigate(['/orders-edit/' + this.id]);
                        }
                    });
                }
                else {
                    console.log(data);
                }
                this.global.loadingDismiss();
            }, error => {
                console.log(error);
            });
        }
        else if (this.source == 'booking-edit') {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = { booking_id: this.id, product_id: dataItem.id, qty: dataQty, note: dataNote };
            this.http.post(this.global.base_url + 'auth/booking/add_item', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    console.log(data);
                    this.storage.getObject('booking').then((storageBooking) => {
                        if (storageBooking != null) {
                            var orderIndex = storageBooking.findIndex(x => x.id === this.id);
                            storageBooking[orderIndex] = data.booking;
                            this.storage.setObject('booking', storageBooking);
                            this.router.navigate(['/booking-edit/' + this.id]);
                        }
                    });
                }
                else {
                    console.log(data);
                }
                this.global.loadingDismiss();
            }, error => {
                console.log(error);
            });
        }
    }
    filterList(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.productSearch = this.product;
            const searchTerm = evt.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.productSearch = this.productSearch.filter(currentProduct => {
                if (currentProduct.name && searchTerm) {
                    return (currentProduct.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
            console.log(this.productSearch);
        });
    }
};
SelectProductPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
SelectProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-product',
        template: _raw_loader_select_product_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_product_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectProductPage);



/***/ }),

/***/ "DwTN":
/*!*****************************************************************!*\
  !*** ./src/app/select-product/select-product-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SelectProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProductPageRoutingModule", function() { return SelectProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _select_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-product.page */ "+V+r");




const routes = [
    {
        path: '',
        component: _select_product_page__WEBPACK_IMPORTED_MODULE_3__["SelectProductPage"]
    }
];
let SelectProductPageRoutingModule = class SelectProductPageRoutingModule {
};
SelectProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectProductPageRoutingModule);



/***/ }),

/***/ "Fy8t":
/*!*********************************************************!*\
  !*** ./src/app/select-product/select-product.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtcHJvZHVjdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "ecLd":
/*!*********************************************************!*\
  !*** ./src/app/select-product/select-product.module.ts ***!
  \*********************************************************/
/*! exports provided: SelectProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProductPageModule", function() { return SelectProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _select_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-product-routing.module */ "DwTN");
/* harmony import */ var _select_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-product.page */ "+V+r");







let SelectProductPageModule = class SelectProductPageModule {
};
SelectProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectProductPageRoutingModule"]
        ],
        declarations: [_select_product_page__WEBPACK_IMPORTED_MODULE_6__["SelectProductPage"]]
    })
], SelectProductPageModule);



/***/ }),

/***/ "qLRe":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-product/select-product.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" *ngIf=\"showContent\">\r\n\r\n    <ion-searchbar (ionInput)=\"filterList($event)\" placeholder=\"Cari produk\"></ion-searchbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" *ngIf=\"showContent\">\r\n  <ion-list  *ngFor=\"let catItem of category\">\r\n    <ion-item-divider *ngIf=\"getProductByCategory(catItem.id).length > 0\">{{catItem.name}}</ion-item-divider>\r\n    <ion-item button *ngFor=\"let item of getProductByCategory(catItem.id)\" (click)=\"choose(item)\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"{{item.image}}\" />\r\n      </ion-avatar>\r\n      <ion-label>{{item.name}}</ion-label>\r\n      <ion-note slot=\"end\"><small>{{global.currency(item.price)}}</small></ion-note>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=select-product-select-product-module-es2015.js.map