(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inactive-inactive-module"],{

/***/ "8XRo":
/*!*******************************************!*\
  !*** ./src/app/inactive/inactive.page.ts ***!
  \*******************************************/
/*! exports provided: InactivePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InactivePage", function() { return InactivePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inactive_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inactive.page.html */ "B8ji");
/* harmony import */ var _inactive_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inactive.page.scss */ "kXET");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InactivePage = class InactivePage {
    constructor() { }
    ngOnInit() {
    }
};
InactivePage.ctorParameters = () => [];
InactivePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inactive',
        template: _raw_loader_inactive_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inactive_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InactivePage);



/***/ }),

/***/ "B8ji":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inactive/inactive.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-title>Account inactive</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n  <div style=\"margin-top:100px;text-align:center;\">\r\n    Akun tidak aktif, silahkan hubungi akun Owner POSbill Anda, terima kasih!\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "XN/H":
/*!*********************************************!*\
  !*** ./src/app/inactive/inactive.module.ts ***!
  \*********************************************/
/*! exports provided: InactivePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InactivePageModule", function() { return InactivePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inactive_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inactive-routing.module */ "wXph");
/* harmony import */ var _inactive_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inactive.page */ "8XRo");







let InactivePageModule = class InactivePageModule {
};
InactivePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inactive_routing_module__WEBPACK_IMPORTED_MODULE_5__["InactivePageRoutingModule"]
        ],
        declarations: [_inactive_page__WEBPACK_IMPORTED_MODULE_6__["InactivePage"]]
    })
], InactivePageModule);



/***/ }),

/***/ "kXET":
/*!*********************************************!*\
  !*** ./src/app/inactive/inactive.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmFjdGl2ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "wXph":
/*!*****************************************************!*\
  !*** ./src/app/inactive/inactive-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: InactivePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InactivePageRoutingModule", function() { return InactivePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inactive_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inactive.page */ "8XRo");




const routes = [
    {
        path: '',
        component: _inactive_page__WEBPACK_IMPORTED_MODULE_3__["InactivePage"]
    }
];
let InactivePageRoutingModule = class InactivePageRoutingModule {
};
InactivePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InactivePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=inactive-inactive-module-es2015.js.map