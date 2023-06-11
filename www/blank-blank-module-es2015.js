(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blank-blank-module"],{

/***/ "+BVl":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blank/blank.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "BIpV":
/*!***************************************!*\
  !*** ./src/app/blank/blank.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFuay5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "I3iu":
/*!***************************************!*\
  !*** ./src/app/blank/blank.module.ts ***!
  \***************************************/
/*! exports provided: BlankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageModule", function() { return BlankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _blank_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blank-routing.module */ "X/6E");
/* harmony import */ var _blank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blank.page */ "mco/");







let BlankPageModule = class BlankPageModule {
};
BlankPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _blank_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlankPageRoutingModule"]
        ],
        declarations: [_blank_page__WEBPACK_IMPORTED_MODULE_6__["BlankPage"]]
    })
], BlankPageModule);



/***/ }),

/***/ "X/6E":
/*!***********************************************!*\
  !*** ./src/app/blank/blank-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BlankPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageRoutingModule", function() { return BlankPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blank_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank.page */ "mco/");




const routes = [
    {
        path: '',
        component: _blank_page__WEBPACK_IMPORTED_MODULE_3__["BlankPage"]
    }
];
let BlankPageRoutingModule = class BlankPageRoutingModule {
};
BlankPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BlankPageRoutingModule);



/***/ }),

/***/ "mco/":
/*!*************************************!*\
  !*** ./src/app/blank/blank.page.ts ***!
  \*************************************/
/*! exports provided: BlankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPage", function() { return BlankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blank_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blank.page.html */ "+BVl");
/* harmony import */ var _blank_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank.page.scss */ "BIpV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BlankPage = class BlankPage {
    constructor() {
    }
    ngOnInit() {
    }
};
BlankPage.ctorParameters = () => [];
BlankPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blank',
        template: _raw_loader_blank_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blank_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BlankPage);



/***/ })

}]);
//# sourceMappingURL=blank-blank-module-es2015.js.map