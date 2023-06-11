(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-printer-setting-printer-module"], {
    /***/
    "AkxX":
    /*!*******************************************************************!*\
      !*** ./src/app/setting-printer/setting-printer-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SettingPrinterPageRoutingModule */

    /***/
    function AkxX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPrinterPageRoutingModule", function () {
        return SettingPrinterPageRoutingModule;
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


      var _setting_printer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./setting-printer.page */
      "g79o");

      var routes = [{
        path: '',
        component: _setting_printer_page__WEBPACK_IMPORTED_MODULE_3__["SettingPrinterPage"]
      }];

      var SettingPrinterPageRoutingModule = /*#__PURE__*/_createClass(function SettingPrinterPageRoutingModule() {
        _classCallCheck(this, SettingPrinterPageRoutingModule);
      });

      SettingPrinterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingPrinterPageRoutingModule);
      /***/
    },

    /***/
    "I40Z":
    /*!***********************************************************!*\
      !*** ./src/app/setting-printer/setting-printer.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function I40Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5nLXByaW50ZXIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "LRRv":
    /*!***********************************************************!*\
      !*** ./src/app/setting-printer/setting-printer.module.ts ***!
      \***********************************************************/

    /*! exports provided: SettingPrinterPageModule */

    /***/
    function LRRv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPrinterPageModule", function () {
        return SettingPrinterPageModule;
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


      var _setting_printer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./setting-printer-routing.module */
      "AkxX");
      /* harmony import */


      var _setting_printer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./setting-printer.page */
      "g79o");

      var SettingPrinterPageModule = /*#__PURE__*/_createClass(function SettingPrinterPageModule() {
        _classCallCheck(this, SettingPrinterPageModule);
      });

      SettingPrinterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _setting_printer_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPrinterPageRoutingModule"]],
        declarations: [_setting_printer_page__WEBPACK_IMPORTED_MODULE_6__["SettingPrinterPage"]]
      })], SettingPrinterPageModule);
      /***/
    },

    /***/
    "g79o":
    /*!*********************************************************!*\
      !*** ./src/app/setting-printer/setting-printer.page.ts ***!
      \*********************************************************/

    /*! exports provided: SettingPrinterPage */

    /***/
    function g79o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPrinterPage", function () {
        return SettingPrinterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_setting_printer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./setting-printer.page.html */
      "qvSV");
      /* harmony import */


      var _setting_printer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./setting-printer.page.scss */
      "I40Z");
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


      var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/bluetooth-serial/ngx */
      "7uwA");

      var SettingPrinterPage = /*#__PURE__*/function () {
        function SettingPrinterPage(storage, http, global, router, loadingController, platform, nativePageTransitions, bluetoothSerial) {
          _classCallCheck(this, SettingPrinterPage);

          this.storage = storage;
          this.http = http;
          this.global = global;
          this.router = router;
          this.loadingController = loadingController;
          this.platform = platform;
          this.nativePageTransitions = nativePageTransitions;
          this.bluetoothSerial = bluetoothSerial;
          this.deviceChoose = '';
          this.device2Choose = '';
          this.company = {
            name: '',
            "package": ''
          }; // this.platform.backButton.subscribeWithPriority(10, () => {
          //   this.router.navigate(['/tabs/tab4']);
          // });
        }

        _createClass(SettingPrinterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.getObject('devices').then(function (data) {
              if (data != null) {
                _this.device = data;

                _this.storage.getObject('printer').then(function (printer) {
                  if (printer != null) {
                    var dataPrinter = printer;
                    _this.deviceChoose = dataPrinter.address;
                  }
                });
              }
            });
            this.storage.getObject('devices').then(function (data) {
              if (data != null) {
                _this.device = data;

                _this.storage.getObject('printer').then(function (printer) {
                  if (printer != null) {
                    var dataPrinter = printer;
                    _this.deviceChoose = dataPrinter.address;
                  }
                });
              }

              if (data != null) {
                _this.device = data;

                _this.storage.getObject('printer2').then(function (printer2) {
                  if (printer2 != null) {
                    var dataPrinter2 = printer2;
                    _this.device2Choose = dataPrinter2.address;
                  }
                });
              }
            });
            this.storage.getObject('company').then(function (company) {
              _this.company = company;
            });
          }
        }, {
          key: "scan",
          value: function scan() {
            var _this2 = this;

            this.bluetoothSerial.list().then(function (success) {
              _this2.device = success;

              _this2.storage.setObject('devices', _this2.device);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "process",
          value: function process() {
            if (this.deviceChoose == '') {
              this.global.toastPresent('Printer Kasir belum dipilih!');
              return false;
            }

            this.storage.setObject('printer', {
              address: this.deviceChoose
            });
            this.storage.setObject('printer2', {
              address: this.device2Choose
            });
            this.global.toastPresent('Printer aktif dipilih!');
            this.router.navigate(['/tabs/tab-setting']);
            console.log(this.deviceChoose);
          }
        }]);

        return SettingPrinterPage;
      }();

      SettingPrinterPage.ctorParameters = function () {
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
          type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_10__["BluetoothSerial"]
        }];
      };

      SettingPrinterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-setting-printer',
        template: _raw_loader_setting_printer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_setting_printer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SettingPrinterPage);
      /***/
    },

    /***/
    "qvSV":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-printer/setting-printer.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qvSV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/setting/format-printer']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Printer</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n    <ion-button expand=\"block\" color=\"light\" (click)=\"scan()\">Scan printer</ion-button>\r\n\r\n    <ion-item-divider>Printer Kasir (nota pelanggan)</ion-item-divider>\r\n    <ion-radio-group [(ngModel)]=\"deviceChoose\">\r\n      <ion-item *ngFor=\"let item of device\">\r\n        <ion-label>{{item.name}} <br/><small>{{item.address}}</small></ion-label>\r\n        <ion-radio slot=\"start\" value=\"{{item.address}}\"></ion-radio>\r\n      </ion-item>\r\n\r\n    </ion-radio-group>\r\n\r\n    <ion-item-divider>Printer Order (nota order)</ion-item-divider>\r\n\r\n    <ion-radio-group [(ngModel)]=\"device2Choose\" *ngIf=\"company.package == 'Premium'\">\r\n      <ion-item *ngFor=\"let item of device\">\r\n        <ion-label>{{item.name}} <br/><small>{{item.address}}</small></ion-label>\r\n        <ion-radio slot=\"start\" value=\"{{item.address}}\"></ion-radio>\r\n      </ion-item>\r\n\r\n    </ion-radio-group>\r\n\r\n    <p class=\"ion-text-center\" *ngIf=\"company.package == 'Lite'\">\r\n      <ion-text color=\"primary\">Printer order tersedia dalam versi premium</ion-text>\r\n    </p>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\">\r\n    <ion-button expand=\"block\" (click)=\"process()\" [disabled]=\"deviceChoose == ''\">Simpan</ion-button>\r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=setting-printer-setting-printer-module-es5.js.map