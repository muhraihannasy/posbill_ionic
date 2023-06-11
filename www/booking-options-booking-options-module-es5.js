(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-options-booking-options-module"], {
    /***/
    "FS9t":
    /*!***********************************************************!*\
      !*** ./src/app/booking-options/booking-options.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function FS9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLW9wdGlvbnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "Kh3f":
    /*!***********************************************************!*\
      !*** ./src/app/booking-options/booking-options.module.ts ***!
      \***********************************************************/

    /*! exports provided: BookingOptionsPageModule */

    /***/
    function Kh3f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingOptionsPageModule", function () {
        return BookingOptionsPageModule;
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


      var _booking_options_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./booking-options-routing.module */
      "S+6e");
      /* harmony import */


      var _booking_options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./booking-options.page */
      "dDal");

      var BookingOptionsPageModule = /*#__PURE__*/_createClass(function BookingOptionsPageModule() {
        _classCallCheck(this, BookingOptionsPageModule);
      });

      BookingOptionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _booking_options_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingOptionsPageRoutingModule"]],
        declarations: [_booking_options_page__WEBPACK_IMPORTED_MODULE_6__["BookingOptionsPage"]]
      })], BookingOptionsPageModule);
      /***/
    },

    /***/
    "S+6e":
    /*!*******************************************************************!*\
      !*** ./src/app/booking-options/booking-options-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: BookingOptionsPageRoutingModule */

    /***/
    function S6e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingOptionsPageRoutingModule", function () {
        return BookingOptionsPageRoutingModule;
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


      var _booking_options_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./booking-options.page */
      "dDal");

      var routes = [{
        path: '',
        component: _booking_options_page__WEBPACK_IMPORTED_MODULE_3__["BookingOptionsPage"]
      }];

      var BookingOptionsPageRoutingModule = /*#__PURE__*/_createClass(function BookingOptionsPageRoutingModule() {
        _classCallCheck(this, BookingOptionsPageRoutingModule);
      });

      BookingOptionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BookingOptionsPageRoutingModule);
      /***/
    },

    /***/
    "Xdmi":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking-options/booking-options.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xdmi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item lines=\"full\" mode=\"ios\" [routerLink]=\"['/select-customer/booking-options']\" color=\"light\"><small><ion-text color=\"primary\">Pelanggan</ion-text></small>\r\n  <ion-note slot=\"end\">{{customer.name}}</ion-note>\r\n</ion-item>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n  <ion-item lines=\"none\"><ion-label position=\"stacked\" color=\"primary\">Nomor meja / referensi / booking</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"bookRef\"></ion-input>\r\n    <!-- <ion-button slot=\"end\" fill=\"link\"><ion-icon name=\"grid-outline\" slot=\"start\"></ion-icon> Pilih meja</ion-button> -->\r\n  </ion-item>\r\n  <br/>\r\n\r\n  <ion-item-divider>Item pesanan</ion-item-divider>\r\n  <ion-item lines=\"full\" *ngFor=\"let item of cart\">\r\n    <ion-label class=\"ion-text-wrap\"><strong>{{item.name}} </strong><br/><small>{{item.price}}</small></ion-label>\r\n\r\n    <ion-text slot=\"end\" color=\"primary\">{{item.qty}}</ion-text>\r\n  </ion-item>\r\n\r\n</ion-content>\r\n<ion-footer mode=\"ios\" class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"3\">\r\n        <ion-button [routerLink]=\"['/tabs/tab-pos']\" color=\"light\" expand=\"block\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n      </ion-col>\r\n\r\n      <ion-col size=\"9\">\r\n        <ion-button (click)=\"process()\" color=\"primary\" expand=\"block\">\r\n          <ion-icon name=\"save-outline\" slot=\"start\"></ion-icon>\r\n            Simpan\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "dDal":
    /*!*********************************************************!*\
      !*** ./src/app/booking-options/booking-options.page.ts ***!
      \*********************************************************/

    /*! exports provided: BookingOptionsPage */

    /***/
    function dDal(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingOptionsPage", function () {
        return BookingOptionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_booking_options_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./booking-options.page.html */
      "Xdmi");
      /* harmony import */


      var _booking_options_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./booking-options.page.scss */
      "FS9t");
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
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! uuid */
      "4USb");

      var BookingOptionsPage = /*#__PURE__*/function () {
        function BookingOptionsPage(storage, http, global, router, loadingController, platform, nativePageTransitions) {
          _classCallCheck(this, BookingOptionsPage);

          this.storage = storage;
          this.http = http;
          this.global = global;
          this.router = router;
          this.loadingController = loadingController;
          this.platform = platform;
          this.nativePageTransitions = nativePageTransitions;
          this.company = {
            payment_cash: 1
          };
          this.bookRef = '';
          this.discount = {
            id: '',
            name: '',
            amount: 0,
            type: 'Fixed'
          };
          this.orderType = "none";
          this.orderTypeLabel = "none";
          this.customer = {
            id: 'Walk-in',
            name: 'Walk-in',
            phone: ''
          };
          this.paymentMethod = 'Cash';
          this.paymentMethodChannel = 'Cash';
          this.amountReceived = '';
          this.amountChange = 0;
          this.backButtonText = 'Kembali';
          this.backButtonIcon = 'arrow-back-outline';
          this.cash = true; // order

          this.booking = [];
          this.storageBooking = [];
        }

        _createClass(BookingOptionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.storage.getObject('auth').then(function (auth) {
                _this.auth = auth;
              });

              _this.storage.getObject('pos_customer').then(function (data) {
                if (data != null) {
                  _this.customer = data;
                }
              });

              _this.storage.getObject('pos_cart').then(function (data) {
                if (data != null) {
                  _this.cart = data;
                }
              });

              _this.storage.getObject('pos_subtotal').then(function (data) {
                _this.totalAmount = data.amount;
                _this.subtotal = _this.totalAmount;
                _this.totalQty = data.qty;
                console.log(data);
              });

              _this.storage.getObject('pos_order_type').then(function (data) {
                _this.orderType = data.order_type;
                _this.orderTypeLabel = data.order_type_label;
              });

              _this.storage.getObject('pos_discount').then(function (data) {
                if (data != null) {
                  _this.discount = data;

                  if (data.type == 'Percentage') {
                    _this.discount.amount = _this.subtotal * data.amount / 100;
                    _this.subtotalAfterDiscount = parseInt(_this.subtotal) - parseInt(_this.discount.amount);
                  } else {
                    _this.discount.amount = data.amount;
                    _this.subtotalAfterDiscount = parseInt(_this.subtotal) - parseInt(_this.discount.amount);
                  }
                } else {
                  _this.subtotalAfterDiscount = parseInt(_this.subtotal) - parseInt(_this.discount.amount);
                }

                _this.storage.getObject('company').then(function (data) {
                  if (data != null) {
                    _this.company = data;
                    _this.serviceCharge = _this.subtotalAfterDiscount * data.service_charge / 100;
                    _this.tax = _this.subtotalAfterDiscount * data.tax / 100;

                    if (data.payment_cash != 1) {
                      _this.cash == false;

                      _this.selectcashless();
                    }
                  }

                  _this.total = _this.subtotalAfterDiscount + _this.serviceCharge + _this.tax;
                });
              });
            }); // this.loadingController.dismiss();
          }
        }, {
          key: "selectcash",
          value: function selectcash() {
            this.cash = true;
            this.paymentMethod = 'Cash';
            this.paymentMethodChannel = 'Cash';
          }
        }, {
          key: "selectcashless",
          value: function selectcashless() {
            this.cash = false;
            this.paymentMethod = 'Cashless';
            this.paymentMethodChannel = '';
            this.amountReceived = this.total;
          }
        }, {
          key: "shortcutAmount",
          value: function shortcutAmount(amount) {
            this.amountReceived = parseFloat(amount);
            this.amountReceivedChange();
          }
        }, {
          key: "amountReceivedChange",
          value: function amountReceivedChange() {
            this.amountReceived = parseFloat(this.amountReceived);
            this.amountChange = this.amountReceived - this.totalAmount;
          }
        }, {
          key: "process",
          value: function process() {
            var _this2 = this;

            this.global.loadingPresent('menyimpan booking...');
            this.storage.getObject('booking').then(function (data) {
              if (data != null) {
                _this2.storageBooking = data;
                _this2.booking = _this2.storageBooking;
              }

              _this2.storage.getObject('outlet_active').then(function (outlet) {
                _this2.activeOutlet = outlet;

                _this2.storage.getObject('user').then(function (user) {
                  _this2.activeUser = user;

                  _this2.processBooking();
                });
              });
            });
          }
        }, {
          key: "processBooking",
          value: function processBooking() {
            var _this3 = this;

            var booking_id = Object(uuid__WEBPACK_IMPORTED_MODULE_10__["v4"])();
            var book_number = this.company.seq + this.global.getYear() + this.global.getMonth() + this.global.getDate() + this.global.getMathRandom();
            var booking_item = [];
            var orderSubtotal = 0;

            var _iterator = _createForOfIteratorHelper(this.cart),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                var subtotal = item.price * item.qty;
                var product = {
                  id: item.id,
                  name: item.name
                };
                var tempItem = {
                  id: Object(uuid__WEBPACK_IMPORTED_MODULE_10__["v4"])(),
                  booking_id: booking_id,
                  book_number: book_number,
                  book_time: this.global.getDateNow(),
                  product_id: item.id,
                  name: item.name,
                  cost: item.cost,
                  price: item.price,
                  qty: item.qty,
                  note: item.note,
                  subtotal: subtotal,
                  product: product
                };
                booking_item.push(tempItem);
                orderSubtotal += subtotal;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var booking = {
              id: booking_id,
              book_number: book_number,
              book_ref: this.bookRef,
              book_time: this.global.getDateNow(),
              outlet_id: this.activeOutlet.id,
              customer: {
                id: this.customer.id,
                name: this.customer.name,
                phone: this.customer.phone
              },
              customer_id: this.customer.id,
              user_id: this.activeUser.id,
              order_type: this.orderType,
              order_type_label: this.orderTypeLabel,
              booking_item: booking_item,
              subtotal: orderSubtotal
            };
            this.booking.unshift(booking);
            this.storage.setObject('booking', this.booking);
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + 'auth/booking/store', booking, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                console.log(data);
              } else {
                console.log(data);
              }

              _this3.global.loadingDismiss();

              _this3.router.navigate(['/booking-detail/' + booking.id + '/pos']);
            }, function (error) {
              _this3.storage.getObject('booking_offline').then(function (data) {
                console.log("bookingoffline", data);

                if (data == null) {
                  var tempBookingOffline = [];
                  tempBookingOffline.push(booking.id);

                  _this3.storage.setObject('booking_offline', tempBookingOffline);
                } else {
                  var _tempBookingOffline = data;

                  _tempBookingOffline.push(booking.id);

                  _this3.storage.setObject('booking_offline', _tempBookingOffline);
                }

                _this3.global.loadingDismiss();

                _this3.router.navigate(['/booking-detail/' + booking.id + '/pos']);
              });

              console.log(error);
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            var options = {
              direction: 'left',
              duration: 300,
              slowdownfactor: 0,
              slidePixels: 0,
              iosdelay: 0,
              androiddelay: 0,
              fixedPixelsTop: 0,
              fixedPixelsBottom: 0
            };
            this.nativePageTransitions.slide(options);
          }
        }]);

        return BookingOptionsPage;
      }();

      BookingOptionsPage.ctorParameters = function () {
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

      BookingOptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-booking-options',
        template: _raw_loader_booking_options_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_booking_options_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BookingOptionsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=booking-options-booking-options-module-es5.js.map