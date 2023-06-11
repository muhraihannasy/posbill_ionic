(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outlet-add-outlet-add-module"], {
    /***/
    "72yx":
    /*!*********************************************************!*\
      !*** ./src/app/outlet-add/outlet-add-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: OutletAddPageRoutingModule */

    /***/
    function yx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutletAddPageRoutingModule", function () {
        return OutletAddPageRoutingModule;
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


      var _outlet_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./outlet-add.page */
      "9BQi");

      var routes = [{
        path: '',
        component: _outlet_add_page__WEBPACK_IMPORTED_MODULE_3__["OutletAddPage"]
      }];

      var OutletAddPageRoutingModule = /*#__PURE__*/_createClass(function OutletAddPageRoutingModule() {
        _classCallCheck(this, OutletAddPageRoutingModule);
      });

      OutletAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OutletAddPageRoutingModule);
      /***/
    },

    /***/
    "9BQi":
    /*!***********************************************!*\
      !*** ./src/app/outlet-add/outlet-add.page.ts ***!
      \***********************************************/

    /*! exports provided: OutletAddPage */

    /***/
    function BQi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutletAddPage", function () {
        return OutletAddPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_outlet_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./outlet-add.page.html */
      "cy7Z");
      /* harmony import */


      var _outlet_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./outlet-add.page.scss */
      "W8wp");
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

      var OutletAddPage = /*#__PURE__*/function () {
        function OutletAddPage(storage, http, global, router, loadingController, platform, nativePageTransitions) {
          _classCallCheck(this, OutletAddPage);

          this.storage = storage;
          this.http = http;
          this.global = global;
          this.router = router;
          this.loadingController = loadingController;
          this.platform = platform;
          this.nativePageTransitions = nativePageTransitions;
          this.outlet = {
            name: '',
            address: '',
            province_id: '',
            city: '',
            subdistrict_id: '',
            phone: ''
          };
          this.province = [];
          this.city = [];
          this.subdistrict = []; // this.platform.backButton.subscribeWithPriority(10, () => {
          //   this.router.navigate(['/outlet']);
          // });
        }

        _createClass(OutletAddPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.global.loadingPresent('menyiapkan form registrasi outlet...');
            this.storage.getObject('auth').then(function (auth) {
              _this.auth = auth;

              _this.getProvince();
            });
          }
        }, {
          key: "getProvince",
          value: function getProvince() {
            var _this2 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + 'auth/outlet/province', null, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this2.province = data.province;
              }

              _this2.global.loadingDismiss();
            }, function (error) {
              console.log(error);

              _this2.global.loadingDismiss();
            });
          }
        }, {
          key: "getCity",
          value: function getCity() {
            var _this3 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: reqHeader
            };
            var postData = {
              province_id: this.outlet.province_id
            };
            this.http.post(this.global.base_url + 'auth/outlet/city', postData, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this3.city = data.city;
                _this3.outlet.city_id = data.city[0].id;
                _this3.subdistrict = [];
                _this3.outlet.subdistrict_id = '';
                console.log(_this3.outlet.city_id);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getSubdistrict",
          value: function getSubdistrict() {
            var _this4 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: reqHeader
            };
            var postData = {
              city_id: this.outlet.city_id
            };
            this.http.post(this.global.base_url + 'auth/outlet/subdistrict', postData, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this4.subdistrict = data.subdistrict;
                _this4.outlet.subdistrict_id = data.subdistrict[0].id;
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "purchase",
          value: function purchase(period) {
            var _this5 = this;

            if (this.outlet.name == '' || this.outlet.address == '' || this.outlet.province_id == '' || this.outlet.city_id == '' || this.outlet.subdistrict_id == '') {
              this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
              return false;
            }

            if (this.outlet.name == null || this.outlet.address == null) {
              this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
              return false;
            }

            this.global.loadingPresent('menambah outlet...');
            this.storage.getObject('auth').then(function (auth) {
              var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + _this5.auth.token
              });
              var options = {
                headers: reqHeader
              };
              var postData = {
                name: _this5.outlet.name,
                address: _this5.outlet.address,
                province_id: _this5.outlet.province_id,
                city_id: _this5.outlet.city_id,
                subdistrict_id: _this5.outlet.subdistrict_id,
                phone: _this5.outlet.phone,
                subscription: period,
                type: 'New'
              };

              _this5.http.post(_this5.global.base_url + 'auth/outlet/add', postData, options).subscribe(function (data) {
                console.log(data);

                if (data.status == 0) {
                  _this5.global.toastPresent(data.message);

                  _this5.router.navigate(['/outlet']);

                  window.open(data.payment.invoice_url);
                } else {
                  console.log(data);
                }

                _this5.global.loadingDismiss();
              }, function (error) {
                console.log(error);
              });
            });
          }
        }]);

        return OutletAddPage;
      }();

      OutletAddPage.ctorParameters = function () {
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

      OutletAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-outlet-add',
        template: _raw_loader_outlet_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_outlet_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OutletAddPage);
      /***/
    },

    /***/
    "W8wp":
    /*!*************************************************!*\
      !*** ./src/app/outlet-add/outlet-add.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function W8wp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXRsZXQtYWRkLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "cy7Z":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outlet-add/outlet-add.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function cy7Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/outlet']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Tambah outlet</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Nama*</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"outlet.name\" autocapitalize=\"on\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Alamat*</ion-label>\r\n    <ion-textarea [(ngModel)]=\"outlet.address\"></ion-textarea>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\"><small>Provinsi</small></ion-label>\r\n    <ion-select interface=\"action-sheet\" [(ngModel)]=\"outlet.province_id\" (ionChange)=\"getCity()\">\r\n      <ion-select-option value=\"\">- Pilih provinsi -</ion-select-option>\r\n      <ion-select-option *ngFor=\"let prov of province\" value=\"{{prov.id}}\">{{prov.name}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\"><small>Kota</small></ion-label>\r\n    <ion-select interface=\"action-sheet\" [(ngModel)]=\"outlet.city_id\" (ionChange)=\"getSubdistrict()\">\r\n      <ion-select-option *ngFor=\"let c of city\" [value]=\"c.id\">{{c.name}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\"><small>Kecamatan</small></ion-label>\r\n    <ion-select interface=\"action-sheet\" [(ngModel)]=\"outlet.subdistrict_id\">\r\n      <ion-select-option *ngFor=\"let sub of subdistrict\" [value]=\"sub.id\">{{sub.name}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\"><small>Telepon</small></ion-label>\r\n    <ion-input class=\"input-text\" size=\"large\" type=\"tel\" [(ngModel)]=\"outlet.phone\"></ion-input>\r\n  </ion-item>\r\n\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\" button (click)=\"purchase(12)\">\r\n        <ion-label class=\"ion-text-wrap\"><strong>12 bulan </strong><br/>\r\n          <small>Harga <strong>Rp49.000</strong> / bulan <br/><ion-badge color=\"success\"><strong>Hemat 33%</strong></ion-badge></small>\r\n        </ion-label>\r\n        <ion-text color=\"primary\" slot=\"end\">Rp588.000</ion-text>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n\r\n      <ion-item lines=\"none\" button (click)=\"purchase(1)\">\r\n        <ion-label class=\"ion-text-wrap\"><strong>1 bulan </strong><br/>\r\n          <small>Harga Rp79.000 / bulan</small>\r\n        </ion-label>\r\n        <ion-text color=\"primary\" slot=\"end\">Rp79.000</ion-text>\r\n      </ion-item>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n<!-- <ion-footer class=\"ion-padding\" mode=\"ios\">\r\n    <ion-button expand=\"block\" (click)=\"process()\">Simpan</ion-button>\r\n</ion-footer> -->\r\n";
      /***/
    },

    /***/
    "epgI":
    /*!*************************************************!*\
      !*** ./src/app/outlet-add/outlet-add.module.ts ***!
      \*************************************************/

    /*! exports provided: OutletAddPageModule */

    /***/
    function epgI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutletAddPageModule", function () {
        return OutletAddPageModule;
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


      var _outlet_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./outlet-add-routing.module */
      "72yx");
      /* harmony import */


      var _outlet_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./outlet-add.page */
      "9BQi");

      var OutletAddPageModule = /*#__PURE__*/_createClass(function OutletAddPageModule() {
        _classCallCheck(this, OutletAddPageModule);
      });

      OutletAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _outlet_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutletAddPageRoutingModule"]],
        declarations: [_outlet_add_page__WEBPACK_IMPORTED_MODULE_6__["OutletAddPage"]]
      })], OutletAddPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=outlet-add-outlet-add-module-es5.js.map