(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-discount-setting-discount-module"],{

/***/ "4pJB":
/*!*************************************************************!*\
  !*** ./src/app/setting-discount/setting-discount.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5nLWRpc2NvdW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "8im7":
/*!***********************************************************!*\
  !*** ./src/app/setting-discount/setting-discount.page.ts ***!
  \***********************************************************/
/*! exports provided: SettingDiscountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDiscountPage", function() { return SettingDiscountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_setting_discount_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./setting-discount.page.html */ "C/8f");
/* harmony import */ var _setting_discount_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting-discount.page.scss */ "4pJB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");










let SettingDiscountPage = class SettingDiscountPage {
    constructor(storage, http, global, router, loadingController, platform, nativePageTransitions) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.nativePageTransitions = nativePageTransitions;
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
    typeFormat(amount, type) {
        if (type == 'Percentage') {
            return amount + '%';
        }
        else {
            return this.global.currency(amount);
        }
    }
};
SettingDiscountPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] }
];
SettingDiscountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-setting-discount',
        template: _raw_loader_setting_discount_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_setting_discount_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingDiscountPage);



/***/ }),

/***/ "C/8f":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-discount/setting-discount.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/tabs/tab-setting']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Diskon</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n  <ion-item button *ngFor=\"let item of discount\" [routerLink]=\"['/discount-edit/'+item.id]\">\r\n    <ion-label>{{item.name}}</ion-label>\r\n    <ion-note>{{typeFormat(item.amount,item.type)}}</ion-note>\r\n  </ion-item>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n   <ion-fab-button [routerLink]=\"['/discount-add']\">\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n   </ion-fab-button>\r\n </ion-fab>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "Zj6h":
/*!*************************************************************!*\
  !*** ./src/app/setting-discount/setting-discount.module.ts ***!
  \*************************************************************/
/*! exports provided: SettingDiscountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDiscountPageModule", function() { return SettingDiscountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _setting_discount_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting-discount-routing.module */ "gBA/");
/* harmony import */ var _setting_discount_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting-discount.page */ "8im7");







let SettingDiscountPageModule = class SettingDiscountPageModule {
};
SettingDiscountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _setting_discount_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingDiscountPageRoutingModule"]
        ],
        declarations: [_setting_discount_page__WEBPACK_IMPORTED_MODULE_6__["SettingDiscountPage"]]
    })
], SettingDiscountPageModule);



/***/ }),

/***/ "gBA/":
/*!*********************************************************************!*\
  !*** ./src/app/setting-discount/setting-discount-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SettingDiscountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDiscountPageRoutingModule", function() { return SettingDiscountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _setting_discount_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting-discount.page */ "8im7");




const routes = [
    {
        path: '',
        component: _setting_discount_page__WEBPACK_IMPORTED_MODULE_3__["SettingDiscountPage"]
    }
];
let SettingDiscountPageRoutingModule = class SettingDiscountPageRoutingModule {
};
SettingDiscountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingDiscountPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=setting-discount-setting-discount-module-es2015.js.map