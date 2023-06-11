(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discount-add-discount-add-module"], {
    /***/
    "GxFp":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discount-add/discount-add.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function GxFp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/setting-discount']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Tambah diskon</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Nama*</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"discount.name\" autocapitalize=\"on\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"inset\">\r\n      <ion-label><small>Jenis nilai diskon*</small></ion-label>\r\n      <ion-select interface=\"action-sheet\" [(ngModel)]=\"discount.type\">\r\n        <ion-select-option value=\"Percentage\">Persentase (%)</ion-select-option>\r\n        <ion-select-option value=\"Fixed\">Fixed </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Nilai diskon*</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"discount.amount\"></ion-input>\r\n    </ion-item>\r\n\r\n  </ion-content>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\">\r\n    <ion-button expand=\"block\" (click)=\"process()\">Simpan</ion-button>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "a+Mj":
    /*!*****************************************************!*\
      !*** ./src/app/discount-add/discount-add.module.ts ***!
      \*****************************************************/

    /*! exports provided: DiscountAddPageModule */

    /***/
    function aMj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscountAddPageModule", function () {
        return DiscountAddPageModule;
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


      var _discount_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./discount-add-routing.module */
      "fM8+");
      /* harmony import */


      var _discount_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./discount-add.page */
      "xqhJ");

      var DiscountAddPageModule = /*#__PURE__*/_createClass(function DiscountAddPageModule() {
        _classCallCheck(this, DiscountAddPageModule);
      });

      DiscountAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _discount_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiscountAddPageRoutingModule"]],
        declarations: [_discount_add_page__WEBPACK_IMPORTED_MODULE_6__["DiscountAddPage"]]
      })], DiscountAddPageModule);
      /***/
    },

    /***/
    "fM8+":
    /*!*************************************************************!*\
      !*** ./src/app/discount-add/discount-add-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: DiscountAddPageRoutingModule */

    /***/
    function fM8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscountAddPageRoutingModule", function () {
        return DiscountAddPageRoutingModule;
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


      var _discount_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./discount-add.page */
      "xqhJ");

      var routes = [{
        path: '',
        component: _discount_add_page__WEBPACK_IMPORTED_MODULE_3__["DiscountAddPage"]
      }];

      var DiscountAddPageRoutingModule = /*#__PURE__*/_createClass(function DiscountAddPageRoutingModule() {
        _classCallCheck(this, DiscountAddPageRoutingModule);
      });

      DiscountAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DiscountAddPageRoutingModule);
      /***/
    },

    /***/
    "qZxj":
    /*!*****************************************************!*\
      !*** ./src/app/discount-add/discount-add.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function qZxj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjb3VudC1hZGQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "xqhJ":
    /*!***************************************************!*\
      !*** ./src/app/discount-add/discount-add.page.ts ***!
      \***************************************************/

    /*! exports provided: DiscountAddPage */

    /***/
    function xqhJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscountAddPage", function () {
        return DiscountAddPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_discount_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./discount-add.page.html */
      "GxFp");
      /* harmony import */


      var _discount_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./discount-add.page.scss */
      "qZxj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../global.service */
      "dVwY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/native-page-transitions/ngx */
      "CicV");

      var DiscountAddPage = /*#__PURE__*/function () {
        function DiscountAddPage(storage, http, global, router, loadingController, platform, nativePageTransitions) {
          _classCallCheck(this, DiscountAddPage);

          this.storage = storage;
          this.http = http;
          this.global = global;
          this.router = router;
          this.loadingController = loadingController;
          this.platform = platform;
          this.nativePageTransitions = nativePageTransitions;
          this.discount = {
            name: '',
            type: 'Percentage',
            amount: ''
          }; // this.platform.backButton.subscribeWithPriority(10, () => {
          //   this.router.navigate(['/setting-discount']);
          // });
        }

        _createClass(DiscountAddPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.getObject('auth').then(function (auth) {
              _this.auth = auth;
            });
          }
        }, {
          key: "process",
          value: function process() {
            var _this2 = this;

            if (this.discount.name == '' || this.discount.type == '' || this.discount.amount < 0) {
              this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
              return false;
            }

            this.global.loadingPresent('menambah diskon...');
            this.storage.getObject('auth').then(function (auth) {
              var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + _this2.auth.token
              });
              var options = {
                headers: reqHeader
              };
              var postData = {
                name: _this2.discount.name,
                type: _this2.discount.type,
                amount: _this2.discount.amount
              };

              _this2.http.post(_this2.global.base_url + 'auth/discount/add', postData, options).subscribe(function (data) {
                console.log(data);

                if (data.status == 0) {
                  _this2.global.toastPresent(data.message);

                  _this2.router.navigate(['/setting-discount']);
                } else {
                  console.log(data);
                }

                _this2.global.loadingDismiss();
              }, function (error) {
                console.log(error);
              });
            });
          }
        }]);

        return DiscountAddPage;
      }();

      DiscountAddPage.ctorParameters = function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }, {
          type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"]
        }];
      };

      DiscountAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-discount-add',
        template: _raw_loader_discount_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_discount_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DiscountAddPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=discount-add-discount-add-module-es5.js.map