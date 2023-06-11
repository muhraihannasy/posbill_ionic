(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-sale-setting-sale-module"], {
    /***/
    "/0el":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-sale/setting-sale.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function el(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/setting/order-payment']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Penjualan</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Terapkan service charge (dalam %)</ion-label>\r\n    <ion-input type=\"number\" placeholder=\"0\" [(ngModel)]=\"setting.service_charge\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Terapkan pajak (dalam %)</ion-label>\r\n    <ion-input type=\"number\" placeholder=\"0\" [(ngModel)]=\"setting.tax\"></ion-input>\r\n  </ion-item>\r\n\r\n</ion-content>\r\n<ion-footer class=\"ion-padding\" mode=\"ios\">\r\n    <ion-button expand=\"block\" (click)=\"process()\">Simpan</ion-button>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "Nkyt":
    /*!*****************************************************!*\
      !*** ./src/app/setting-sale/setting-sale.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function Nkyt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5nLXNhbGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "VkvX":
    /*!*************************************************************!*\
      !*** ./src/app/setting-sale/setting-sale-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: SettingSalePageRoutingModule */

    /***/
    function VkvX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingSalePageRoutingModule", function () {
        return SettingSalePageRoutingModule;
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


      var _setting_sale_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./setting-sale.page */
      "zE8e");

      var routes = [{
        path: '',
        component: _setting_sale_page__WEBPACK_IMPORTED_MODULE_3__["SettingSalePage"]
      }];

      var SettingSalePageRoutingModule = /*#__PURE__*/_createClass(function SettingSalePageRoutingModule() {
        _classCallCheck(this, SettingSalePageRoutingModule);
      });

      SettingSalePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingSalePageRoutingModule);
      /***/
    },

    /***/
    "zE8e":
    /*!***************************************************!*\
      !*** ./src/app/setting-sale/setting-sale.page.ts ***!
      \***************************************************/

    /*! exports provided: SettingSalePage */

    /***/
    function zE8e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingSalePage", function () {
        return SettingSalePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_setting_sale_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./setting-sale.page.html */
      "/0el");
      /* harmony import */


      var _setting_sale_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./setting-sale.page.scss */
      "Nkyt");
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

      var SettingSalePage = /*#__PURE__*/function () {
        function SettingSalePage(storage, http, global, router, loadingController, platform, nativePageTransitions, route) {
          _classCallCheck(this, SettingSalePage);

          this.storage = storage;
          this.http = http;
          this.global = global;
          this.router = router;
          this.loadingController = loadingController;
          this.platform = platform;
          this.nativePageTransitions = nativePageTransitions;
          this.route = route;
          this.setting = {
            service_charge: '',
            tax: ''
          }; // this.platform.backButton.subscribeWithPriority(10, () => {
          //   this.router.navigate(['/tabs/tab4']);
          // });
        }

        _createClass(SettingSalePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.getObject('auth').then(function (auth) {
              _this.auth = auth;

              _this.getData();
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this2 = this;

            this.global.loadingPresent('mengambil data...');
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + 'auth/setting/data', null, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this2.setting = data.company;
                console.log(data);
              } else {
                console.log(data);
              }

              _this2.global.loadingDismiss();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "process",
          value: function process() {
            var _this3 = this;

            this.global.loadingPresent('menyimpan perubahan... ');
            this.storage.getObject('auth').then(function (auth) {
              var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + _this3.auth.token
              });
              var options = {
                headers: reqHeader
              };
              var postData = {
                service_charge: _this3.setting.service_charge,
                tax: _this3.setting.tax
              };

              _this3.http.post(_this3.global.base_url + 'auth/setting/sale', postData, options).subscribe(function (data) {
                console.log(data);

                if (data.status == 0) {
                  _this3.global.toastPresent(data.message);

                  _this3.router.navigate(['/tabs/tab-setting']);
                } else {
                  console.log(data);
                }

                _this3.global.loadingDismiss();
              }, function (error) {
                console.log(error);
              });
            });
          }
        }]);

        return SettingSalePage;
      }();

      SettingSalePage.ctorParameters = function () {
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
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      };

      SettingSalePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-setting-sale',
        template: _raw_loader_setting_sale_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_setting_sale_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SettingSalePage);
      /***/
    },

    /***/
    "zIf0":
    /*!*****************************************************!*\
      !*** ./src/app/setting-sale/setting-sale.module.ts ***!
      \*****************************************************/

    /*! exports provided: SettingSalePageModule */

    /***/
    function zIf0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingSalePageModule", function () {
        return SettingSalePageModule;
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


      var _setting_sale_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./setting-sale-routing.module */
      "VkvX");
      /* harmony import */


      var _setting_sale_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./setting-sale.page */
      "zE8e");

      var SettingSalePageModule = /*#__PURE__*/_createClass(function SettingSalePageModule() {
        _classCallCheck(this, SettingSalePageModule);
      });

      SettingSalePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _setting_sale_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingSalePageRoutingModule"]],
        declarations: [_setting_sale_page__WEBPACK_IMPORTED_MODULE_6__["SettingSalePage"]]
      })], SettingSalePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=setting-sale-setting-sale-module-es5.js.map