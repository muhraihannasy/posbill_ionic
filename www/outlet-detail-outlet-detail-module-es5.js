(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outlet-detail-outlet-detail-module"], {
    /***/
    "0KYc":
    /*!*****************************************************!*\
      !*** ./src/app/outlet-detail/outlet-detail.page.ts ***!
      \*****************************************************/

    /*! exports provided: OutletDetailPage */

    /***/
    function KYc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutletDetailPage", function () {
        return OutletDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_outlet_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./outlet-detail.page.html */
      "A/Fc");
      /* harmony import */


      var _outlet_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./outlet-detail.page.scss */
      "Rrc0");
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

      var OutletDetailPage = /*#__PURE__*/function () {
        function OutletDetailPage(storage, http, global, router, loadingController, platform, nativePageTransitions, route, alertController) {
          var _this = this;

          _classCallCheck(this, OutletDetailPage);

          this.storage = storage;
          this.http = http;
          this.global = global;
          this.router = router;
          this.loadingController = loadingController;
          this.platform = platform;
          this.nativePageTransitions = nativePageTransitions;
          this.route = route;
          this.alertController = alertController;
          this.showContent = false;
          this.company = {
            name: '',
            "package": ''
          };
          this.route.params.subscribe(function (params) {
            if (params['id']) {
              _this.id = params['id'];
            }
          });
        }

        _createClass(OutletDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.storage.getObject('auth').then(function (auth) {
              _this2.auth = auth;

              _this2.getData();
            });
            this.storage.getObject('company').then(function (company) {
              _this2.company = company;
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this3 = this;

            this.global.loadingPresent('mengambil data...');
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            var postData = {
              id: this.id
            };
            this.http.post(this.global.base_url + 'auth/outlet/detail', postData, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this3.outlet = data.outlet;
                console.log(data);
                _this3.showContent = true;
              } else {
                console.log(data);
              }

              _this3.global.loadingDismiss();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "pay",
          value: function pay(url) {
            window.open(url);
          }
        }, {
          key: "renew",
          value: function renew(period) {
            var _this4 = this;

            this.global.loadingPresent('memproses perpanjangan...');
            this.storage.getObject('auth').then(function (auth) {
              var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + _this4.auth.token
              });
              var options = {
                headers: reqHeader
              };
              var postData = {
                outlet_id: _this4.id,
                subscription: period,
                type: 'Renewal'
              };

              _this4.http.post(_this4.global.base_url + 'auth/outlet/renew', postData, options).subscribe(function (data) {
                console.log(data);

                if (data.status == 0) {
                  _this4.global.toastPresent(data.message);

                  window.open(data.payment.invoice_url);
                } else {
                  console.log(data);
                }

                _this4.global.loadingDismiss();
              }, function (error) {
                console.log(error);
              });
            });
          }
        }]);

        return OutletDetailPage;
      }();

      OutletDetailPage.ctorParameters = function () {
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
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }];
      };

      OutletDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-outlet-detail',
        template: _raw_loader_outlet_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_outlet_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OutletDetailPage);
      /***/
    },

    /***/
    "A/Fc":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outlet-detail/outlet-detail.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function AFc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" *ngIf=\"showContent\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/outlet']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{outlet.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"showContent\" mode=\"ios\" class=\"ion-padding\">\r\n  <ion-item>\r\n    <ion-label color=\"primary\">Status</ion-label>\r\n    <ion-note slot=\"end\">{{outlet.status}}</ion-note>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"company.package == 'Premium'\">\r\n    <ion-label color=\"primary\"><small>Masa aktif hingga</small></ion-label>\r\n    <ion-note slot=\"end\"><small>{{outlet.expired_at}}</small></ion-note>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <p>\r\n    <small>\r\n    <ion-text color=\"primary\">Alamat outlet </ion-text><br/>\r\n    {{outlet.address}} <br/>\r\n    {{outlet.province.name}} <br/>\r\n    {{outlet.city.name}}<br/>\r\n    {{outlet.subdistrict.name}}<br/>\r\n\r\n    </small>\r\n    </p>\r\n\r\n  </ion-item>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"4\"><ion-button color=\"light\" [routerLink]=\"['/outlet-edit/'+id]\" expand=\"block\">Edit</ion-button></ion-col>\r\n      <ion-col size=\"8\" *ngIf=\"outlet.status == 'Pending'\"><ion-button (click)=\"pay(outlet.subscription.payment_url)\" expand=\"block\">Bayar</ion-button></ion-col>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <p style=\"text-align:center;\" *ngIf=\"outlet.status == 'Active' || outlet.status == 'Expired'\">Upgrade atau Perpanjang <br/> berlangganan outlet ini</p>\r\n  <ion-card  *ngIf=\"outlet.status == 'Active' || outlet.status == 'Expired'\">\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\" button (click)=\"renew(12)\">\r\n        <ion-label class=\"ion-text-wrap\">Premium <strong>12 bulan </strong><br/>\r\n          <small>Harga <strong>Rp49.000</strong> / bulan <br/><ion-badge color=\"success\"><strong>Hemat 33%</strong></ion-badge></small>\r\n        </ion-label>\r\n        <ion-text color=\"primary\" slot=\"end\">Rp588.000</ion-text>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card  *ngIf=\"outlet.status == 'Active' || outlet.status == 'Expired'\">\r\n    <ion-card-content>\r\n\r\n      <ion-item lines=\"none\" button (click)=\"renew(1)\">\r\n        <ion-label class=\"ion-text-wrap\">Premium <strong>1 bulan </strong><br/>\r\n          <small>Harga Rp79.000 / bulan</small>\r\n        </ion-label>\r\n        <ion-text color=\"primary\" slot=\"end\">Rp79.000</ion-text>\r\n      </ion-item>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "Rrc0":
    /*!*******************************************************!*\
      !*** ./src/app/outlet-detail/outlet-detail.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function Rrc0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXRsZXQtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "WVqf":
    /*!*******************************************************!*\
      !*** ./src/app/outlet-detail/outlet-detail.module.ts ***!
      \*******************************************************/

    /*! exports provided: OutletDetailPageModule */

    /***/
    function WVqf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutletDetailPageModule", function () {
        return OutletDetailPageModule;
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


      var _outlet_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./outlet-detail-routing.module */
      "YuLv");
      /* harmony import */


      var _outlet_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./outlet-detail.page */
      "0KYc");

      var OutletDetailPageModule = /*#__PURE__*/_createClass(function OutletDetailPageModule() {
        _classCallCheck(this, OutletDetailPageModule);
      });

      OutletDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _outlet_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutletDetailPageRoutingModule"]],
        declarations: [_outlet_detail_page__WEBPACK_IMPORTED_MODULE_6__["OutletDetailPage"]]
      })], OutletDetailPageModule);
      /***/
    },

    /***/
    "YuLv":
    /*!***************************************************************!*\
      !*** ./src/app/outlet-detail/outlet-detail-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: OutletDetailPageRoutingModule */

    /***/
    function YuLv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutletDetailPageRoutingModule", function () {
        return OutletDetailPageRoutingModule;
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


      var _outlet_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./outlet-detail.page */
      "0KYc");

      var routes = [{
        path: '',
        component: _outlet_detail_page__WEBPACK_IMPORTED_MODULE_3__["OutletDetailPage"]
      }];

      var OutletDetailPageRoutingModule = /*#__PURE__*/_createClass(function OutletDetailPageRoutingModule() {
        _classCallCheck(this, OutletDetailPageRoutingModule);
      });

      OutletDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OutletDetailPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=outlet-detail-outlet-detail-module-es5.js.map