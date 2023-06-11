(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-catalog-tab-catalog-module"], {
    /***/
    "OMcm":
    /*!*************************************************!*\
      !*** ./src/app/tab-catalog/tab-catalog.page.ts ***!
      \*************************************************/

    /*! exports provided: TabCatalogPage */

    /***/
    function OMcm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabCatalogPage", function () {
        return TabCatalogPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab_catalog_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab-catalog.page.html */
      "moZb");
      /* harmony import */


      var _tab_catalog_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab-catalog.page.scss */
      "Y+wq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../global.service */
      "dVwY");
      /* harmony import */


      var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/native-page-transitions/ngx */
      "CicV");

      var TabCatalogPage = /*#__PURE__*/function () {
        function TabCatalogPage(router, toastCtrl, storage, http, global, platform, nativePageTransitions) {
          _classCallCheck(this, TabCatalogPage);

          this.router = router;
          this.toastCtrl = toastCtrl;
          this.storage = storage;
          this.http = http;
          this.global = global;
          this.platform = platform;
          this.nativePageTransitions = nativePageTransitions;
          this.storageCategory = [];
        }

        _createClass(TabCatalogPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }]);

        return TabCatalogPage;
      }();

      TabCatalogPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"]
        }];
      };

      TabCatalogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab-catalog',
        template: _raw_loader_tab_catalog_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab_catalog_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TabCatalogPage);
      /***/
    },

    /***/
    "Y+wq":
    /*!***************************************************!*\
      !*** ./src/app/tab-catalog/tab-catalog.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function YWq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItY2F0YWxvZy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "YYFT":
    /*!***********************************************************!*\
      !*** ./src/app/tab-catalog/tab-catalog-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: TabCatalogPageRoutingModule */

    /***/
    function YYFT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabCatalogPageRoutingModule", function () {
        return TabCatalogPageRoutingModule;
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


      var _tab_catalog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab-catalog.page */
      "OMcm");

      var routes = [{
        path: '',
        component: _tab_catalog_page__WEBPACK_IMPORTED_MODULE_3__["TabCatalogPage"]
      }];

      var TabCatalogPageRoutingModule = /*#__PURE__*/_createClass(function TabCatalogPageRoutingModule() {
        _classCallCheck(this, TabCatalogPageRoutingModule);
      });

      TabCatalogPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabCatalogPageRoutingModule);
      /***/
    },

    /***/
    "iZ69":
    /*!***************************************************!*\
      !*** ./src/app/tab-catalog/tab-catalog.module.ts ***!
      \***************************************************/

    /*! exports provided: TabCatalogPageModule */

    /***/
    function iZ69(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabCatalogPageModule", function () {
        return TabCatalogPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab_catalog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab-catalog.page */
      "OMcm");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab_catalog_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab-catalog-routing.module */
      "YYFT");

      var TabCatalogPageModule = /*#__PURE__*/_createClass(function TabCatalogPageModule() {
        _classCallCheck(this, TabCatalogPageModule);
      });

      TabCatalogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab_catalog_page__WEBPACK_IMPORTED_MODULE_6__["TabCatalogPage"]
        }]), _tab_catalog_routing_module__WEBPACK_IMPORTED_MODULE_8__["TabCatalogPageRoutingModule"]],
        declarations: [_tab_catalog_page__WEBPACK_IMPORTED_MODULE_6__["TabCatalogPage"]]
      })], TabCatalogPageModule);
      /***/
    },

    /***/
    "moZb":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-catalog/tab-catalog.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function moZb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n  <ion-content class=\"ion-padding\" mode=\"ios\">\r\n    <ion-list>\r\n\r\n      <ion-list-header>\r\n        <ion-label><strong>Produk</strong></ion-label>\r\n      </ion-list-header>\r\n      <ion-item [routerLink]=\"['/catalog-product-add']\">\r\n        <ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon>\r\n        <small>Tambah produk</small>\r\n      </ion-item>\r\n      <ion-item lines=\"none\"  [routerLink]=\"['/catalog-product']\">\r\n        <ion-icon name=\"fast-food-outline\" slot=\"start\" ></ion-icon>\r\n        <small>Daftar produk</small>\r\n      </ion-item>\r\n\r\n        <ion-list-header>\r\n          <ion-label><strong>Kategori</strong></ion-label>\r\n        </ion-list-header>\r\n        <ion-item [routerLink]=\"['/catalog-category-add']\">\r\n          <ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon>\r\n          <small>Tambah kategori</small></ion-item>\r\n        <ion-item  lines=\"none\" [routerLink]=\"['/catalog-category']\">\r\n          <ion-icon name=\"list-circle-outline\" slot=\"start\"></ion-icon>\r\n          <small>Daftar kategori</small></ion-item>\r\n\r\n    </ion-list>\r\n\r\n\r\n    \r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab-catalog-tab-catalog-module-es5.js.map