(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-discount-select-discount-module"],{

/***/ "3gEG":
/*!***********************************************************!*\
  !*** ./src/app/select-discount/select-discount.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtZGlzY291bnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "88D+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-discount/select-discount.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n\r\n    <ion-searchbar (ionInput)=\"filterList($event)\" placeholder=\"Cari diskon\"></ion-searchbar>\r\n    <div>\r\n    <ion-button fill=\"link\" color=\"primary\" expand=\"block\" (click)=\"choose({id:'',amount:0,type:'Fixed'})\"><ion-text color=\"primary\">Tanpa diskon</ion-text></ion-button>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-list>\r\n    <ion-item button *ngFor=\"let item of discountSearch\" (click)=\"choose(item)\">\r\n      <ion-label>{{item.name}}</ion-label>\r\n      <ion-note slot=\"end\"><small>{{item.amount}}</small></ion-note>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "JP4q":
/*!*******************************************************************!*\
  !*** ./src/app/select-discount/select-discount-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SelectDiscountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDiscountPageRoutingModule", function() { return SelectDiscountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _select_discount_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-discount.page */ "eriP");




const routes = [
    {
        path: '',
        component: _select_discount_page__WEBPACK_IMPORTED_MODULE_3__["SelectDiscountPage"]
    }
];
let SelectDiscountPageRoutingModule = class SelectDiscountPageRoutingModule {
};
SelectDiscountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectDiscountPageRoutingModule);



/***/ }),

/***/ "eriP":
/*!*********************************************************!*\
  !*** ./src/app/select-discount/select-discount.page.ts ***!
  \*********************************************************/
/*! exports provided: SelectDiscountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDiscountPage", function() { return SelectDiscountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_discount_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-discount.page.html */ "88D+");
/* harmony import */ var _select_discount_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-discount.page.scss */ "3gEG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");











let SelectDiscountPage = class SelectDiscountPage {
    constructor(storage, http, global, router, loadingController, platform, nativePageTransitions, route) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.nativePageTransitions = nativePageTransitions;
        this.route = route;
        this.route.params.subscribe((params) => {
            if (params['source']) {
                if (params['source'] != '') {
                    this.source = params['source'];
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
            this.http.post(this.global.base_url + 'auth/discount/list', null, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.discount = data.discount;
                    this.discountSearch = this.discount;
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
            this.discountSearch = this.discount;
            const searchTerm = evt.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.discountSearch = this.discountSearch.filter(currentCustomer => {
                if (currentCustomer.name && searchTerm) {
                    return (currentCustomer.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
            console.log(this.discountSearch);
        });
    }
    choose(discount) {
        this.storage.setObject('pos_discount', { id: discount.id, name: discount.name, amount: discount.amount, type: discount.type });
        if (this.source == 'payment-options') {
            this.router.navigate(['/' + this.source]);
        }
        else if (this.source == 'orders-edit') {
            this.global.loadingPresent('menyimpan diskon..');
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                order_id: this.id,
                discount_id: discount.id
            };
            this.http.post(this.global.base_url + 'auth/order/edit_discount', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.storage.getObject('order').then((storageOrder) => {
                        if (storageOrder != null) {
                            var orderIndex = storageOrder.findIndex(x => x.id === this.id);
                            storageOrder[orderIndex] = data.order;
                            this.storage.setObject('order', storageOrder);
                            this.global.toastPresent(data.message);
                            this.router.navigate(['/' + this.source + '/' + this.id + '/refresh']);
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
            this.router.navigate(['/' + this.source + '/' + this.id]);
        }
    }
};
SelectDiscountPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
SelectDiscountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-discount',
        template: _raw_loader_select_discount_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_discount_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectDiscountPage);



/***/ }),

/***/ "nqNi":
/*!***********************************************************!*\
  !*** ./src/app/select-discount/select-discount.module.ts ***!
  \***********************************************************/
/*! exports provided: SelectDiscountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDiscountPageModule", function() { return SelectDiscountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _select_discount_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-discount-routing.module */ "JP4q");
/* harmony import */ var _select_discount_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-discount.page */ "eriP");







let SelectDiscountPageModule = class SelectDiscountPageModule {
};
SelectDiscountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_discount_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectDiscountPageRoutingModule"]
        ],
        declarations: [_select_discount_page__WEBPACK_IMPORTED_MODULE_6__["SelectDiscountPage"]]
    })
], SelectDiscountPageModule);



/***/ })

}]);
//# sourceMappingURL=select-discount-select-discount-module-es2015.js.map