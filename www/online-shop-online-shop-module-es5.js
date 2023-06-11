(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["online-shop-online-shop-module"], {
    /***/
    "OfWg":
    /*!*************************************************************!*\
      !*** ./src/app/tab-setting/online-shop/online-shop.page.ts ***!
      \*************************************************************/

    /*! exports provided: OnlineShopPage */

    /***/
    function OfWg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlineShopPage", function () {
        return OnlineShopPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_online_shop_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./online-shop.page.html */
      "x+WZ");
      /* harmony import */


      var _online_shop_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./online-shop.page.scss */
      "gqrM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OnlineShopPage = /*#__PURE__*/function () {
        function OnlineShopPage() {
          _classCallCheck(this, OnlineShopPage);
        }

        _createClass(OnlineShopPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OnlineShopPage;
      }();

      OnlineShopPage.ctorParameters = function () {
        return [];
      };

      OnlineShopPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-online-shop',
        template: _raw_loader_online_shop_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_online_shop_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OnlineShopPage);
      /***/
    },

    /***/
    "gqrM":
    /*!***************************************************************!*\
      !*** ./src/app/tab-setting/online-shop/online-shop.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function gqrM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmxpbmUtc2hvcC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "uXku":
    /*!***************************************************************!*\
      !*** ./src/app/tab-setting/online-shop/online-shop.module.ts ***!
      \***************************************************************/

    /*! exports provided: OnlineShopPageModule */

    /***/
    function uXku(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlineShopPageModule", function () {
        return OnlineShopPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _online_shop_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./online-shop-routing.module */
      "yiuH");
      /* harmony import */


      var _online_shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./online-shop.page */
      "OfWg");

      var OnlineShopPageModule = /*#__PURE__*/_createClass(function OnlineShopPageModule() {
        _classCallCheck(this, OnlineShopPageModule);
      });

      OnlineShopPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _online_shop_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnlineShopPageRoutingModule"]],
        declarations: [_online_shop_page__WEBPACK_IMPORTED_MODULE_6__["OnlineShopPage"]]
      })], OnlineShopPageModule);
      /***/
    },

    /***/
    "x+WZ":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-setting/online-shop/online-shop.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xWZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>online-shop</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "yiuH":
    /*!***********************************************************************!*\
      !*** ./src/app/tab-setting/online-shop/online-shop-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: OnlineShopPageRoutingModule */

    /***/
    function yiuH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlineShopPageRoutingModule", function () {
        return OnlineShopPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _online_shop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./online-shop.page */
      "OfWg");

      var routes = [{
        path: '',
        component: _online_shop_page__WEBPACK_IMPORTED_MODULE_3__["OnlineShopPage"]
      }];

      var OnlineShopPageRoutingModule = /*#__PURE__*/_createClass(function OnlineShopPageRoutingModule() {
        _classCallCheck(this, OnlineShopPageRoutingModule);
      });

      OnlineShopPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OnlineShopPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=online-shop-online-shop-module-es5.js.map