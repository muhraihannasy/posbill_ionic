(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"], {
    /***/
    "9V8B":
    /*!***********************************!*\
      !*** ./src/app/test/test.page.ts ***!
      \***********************************/

    /*! exports provided: TestPage */

    /***/
    function V8B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestPage", function () {
        return TestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_test_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./test.page.html */
      "hXkP");
      /* harmony import */


      var _test_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./test.page.scss */
      "pvUL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TestPage = /*#__PURE__*/function () {
        function TestPage() {
          _classCallCheck(this, TestPage);
        }

        _createClass(TestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TestPage;
      }();

      TestPage.ctorParameters = function () {
        return [];
      };

      TestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-test',
        template: _raw_loader_test_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TestPage);
      /***/
    },

    /***/
    "FScs":
    /*!*************************************!*\
      !*** ./src/app/test/test.module.ts ***!
      \*************************************/

    /*! exports provided: TestPageModule */

    /***/
    function FScs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestPageModule", function () {
        return TestPageModule;
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


      var _test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./test-routing.module */
      "NBQd");
      /* harmony import */


      var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./test.page */
      "9V8B");

      var TestPageModule = /*#__PURE__*/_createClass(function TestPageModule() {
        _classCallCheck(this, TestPageModule);
      });

      TestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _test_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestPageRoutingModule"]],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
      })], TestPageModule);
      /***/
    },

    /***/
    "NBQd":
    /*!*********************************************!*\
      !*** ./src/app/test/test-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TestPageRoutingModule */

    /***/
    function NBQd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestPageRoutingModule", function () {
        return TestPageRoutingModule;
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


      var _test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./test.page */
      "9V8B");

      var routes = [{
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_3__["TestPage"]
      }];

      var TestPageRoutingModule = /*#__PURE__*/_createClass(function TestPageRoutingModule() {
        _classCallCheck(this, TestPageRoutingModule);
      });

      TestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TestPageRoutingModule);
      /***/
    },

    /***/
    "hXkP":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function hXkP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>test</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "pvUL":
    /*!*************************************!*\
      !*** ./src/app/test/test.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function pvUL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=test-test-module-es5.js.map