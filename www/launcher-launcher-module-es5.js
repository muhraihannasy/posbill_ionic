(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["launcher-launcher-module"], {
    /***/
    "9PCp":
    /*!*********************************************!*\
      !*** ./src/app/launcher/launcher.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function PCp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXVuY2hlci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "FiDa":
    /*!*********************************************!*\
      !*** ./src/app/launcher/launcher.module.ts ***!
      \*********************************************/

    /*! exports provided: LauncherPageModule */

    /***/
    function FiDa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LauncherPageModule", function () {
        return LauncherPageModule;
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


      var _launcher_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./launcher-routing.module */
      "Lzc6");
      /* harmony import */


      var _launcher_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./launcher.page */
      "GAUo");

      var LauncherPageModule = /*#__PURE__*/_createClass(function LauncherPageModule() {
        _classCallCheck(this, LauncherPageModule);
      });

      LauncherPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _launcher_routing_module__WEBPACK_IMPORTED_MODULE_5__["LauncherPageRoutingModule"]],
        declarations: [_launcher_page__WEBPACK_IMPORTED_MODULE_6__["LauncherPage"]]
      })], LauncherPageModule);
      /***/
    },

    /***/
    "GAUo":
    /*!*******************************************!*\
      !*** ./src/app/launcher/launcher.page.ts ***!
      \*******************************************/

    /*! exports provided: LauncherPage */

    /***/
    function GAUo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LauncherPage", function () {
        return LauncherPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_launcher_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./launcher.page.html */
      "szDr");
      /* harmony import */


      var _launcher_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./launcher.page.scss */
      "9PCp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../global.service */
      "dVwY");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");

      var LauncherPage = /*#__PURE__*/function () {
        function LauncherPage(http, global, router, toastController, storage) {
          _classCallCheck(this, LauncherPage);

          this.http = http;
          this.global = global;
          this.router = router;
          this.toastController = toastController;
          this.storage = storage;
        }

        _createClass(LauncherPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.getObject("auth").then(function (data) {
              if (data != null) {
                _this.router.navigate(["/tabs/tab-dashboard"]);
              } else {
                _this.storage.clear().then(function () {
                  _this.storage.removeItem("auth");

                  _this.storage.removeItem("user");

                  _this.storage.removeItem("company");

                  _this.storage.removeItem("outlet_active");

                  _this.storage.removeItem("outlet");

                  _this.storage.removeItem("product");

                  _this.router.navigate(["/login"]);
                });
              }
            });
          }
        }]);

        return LauncherPage;
      }();

      LauncherPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }];
      };

      LauncherPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-launcher",
        template: _raw_loader_launcher_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_launcher_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LauncherPage);
      /***/
    },

    /***/
    "Lzc6":
    /*!*****************************************************!*\
      !*** ./src/app/launcher/launcher-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LauncherPageRoutingModule */

    /***/
    function Lzc6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LauncherPageRoutingModule", function () {
        return LauncherPageRoutingModule;
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


      var _launcher_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./launcher.page */
      "GAUo");

      var routes = [{
        path: '',
        component: _launcher_page__WEBPACK_IMPORTED_MODULE_3__["LauncherPage"]
      }];

      var LauncherPageRoutingModule = /*#__PURE__*/_createClass(function LauncherPageRoutingModule() {
        _classCallCheck(this, LauncherPageRoutingModule);
      });

      LauncherPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LauncherPageRoutingModule);
      /***/
    },

    /***/
    "szDr":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/launcher/launcher.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function szDr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<ion-content class=\"ion-padding\">\r\n\r\n<div style=\"margin-top:200px;text-align:center;\">\r\n\r\n  <ion-spinner name=\"crescent\"></ion-spinner>\r\n\r\n</div>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=launcher-launcher-module-es5.js.map