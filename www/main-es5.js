(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Project Novatama\Ionic 2\posbill_ionic\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebaseConfig: {
          apiKey: "AIzaSyC7-WtIvlEaRKyudmawhBZe41sDxxO8TV8",
          authDomain: "nstekapps-posbill.firebaseapp.com",
          databaseURL: "https://nstekapps-posbill-default-rtdb.firebaseio.com",
          projectId: "nstekapps-posbill",
          storageBucket: "gs://nstekapps-posbill.appspot.com",
          messagingSenderId: "419022810645",
          appId: "1:419022810645:web:3e80c9727ab8f7b84d681c",
          measurementId: "G-LERQF38YQF"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "S36L":
    /*!*****************************************!*\
      !*** ./src/app/notification.service.ts ***!
      \*****************************************/

    /*! exports provided: NotificationService */

    /***/
    function S36L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService(toastController, router) {
          _classCallCheck(this, NotificationService);

          this.toastController = toastController;
          this.router = router;
        }

        _createClass(NotificationService, [{
          key: "showNotification",
          value: function showNotification(header, message, id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              var toast;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      header: header,
                      message: message,
                      buttons: [{
                        side: "end",
                        text: "lihat",
                        handler: function handler() {
                          _this.router.navigate(["orders-detail/".concat(id, "/list")]);
                        }
                      }],
                      duration: 5000,
                      position: "top",
                      color: "light",
                      cssClass: "custom-toast"
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], NotificationService);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _fcm_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./fcm.service */
      "og4U");

      var App = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"].App;

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, router, location, fcmService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.location = location;
          this.fcmService = fcmService;
          this.initializeApp();
          this.registerBackButton();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.statusBar.styleDefault();

              _this2.splashScreen.hide();

              _this2.fcmService.initPush();
            });
          }
        }, {
          key: "registerBackButton",
          value: function registerBackButton() {
            var _this3 = this;

            this.platform.backButton.subscribeWithPriority(10, function () {
              var thisUrl = _this3.router.url;
              var splitUrl = thisUrl.split("/");

              if (_this3.router.url == "/tabs/tab-pos" || _this3.router.url == "/login") {
                App.exitApp();
              } else if (_this3.router.url == "/register") {
                _this3.router.navigate(["/login"]);
              } else if (_this3.router.url == "/tabs/tab-order" || _this3.router.url == "/tabs/tab-report" || _this3.router.url == "/tabs/tab-catalog" || _this3.router.url == "/tabs/tab-setting" || _this3.router.url == "/payment-options" || _this3.router.url == "/booking") {
                _this3.router.navigate(["/tabs/tab-pos"]);
              } else if (splitUrl[1] == "orders-detail") {
                _this3.router.navigate(["/tabs/tab-order"]);
              } else if (_this3.router.url == "/catalog-category" || _this3.router.url == "/catalog-product") {
                _this3.router.navigate(["/tabs/tab-catalog"]);
              } else if (_this3.router.url == "/setting-sale" || _this3.router.url == "/setting-payment" || _this3.router.url == "/setting-discount" || _this3.router.url == "/setting-format" || _this3.router.url == "/setting-printer" || _this3.router.url == "/outlet" || _this3.router.url == "/customer" || _this3.router.url == "/user" || _this3.router.url == "/account" || _this3.router.url == "/subscription") {
                _this3.router.navigate(["/tabs/tab-setting"]);
              } else if (_this3.router.url == "/catalog-category-add" || splitUrl[1] == "catalog-category-edit") {
                _this3.router.navigate(["/catalog-category"]);
              } else if (_this3.router.url == "/catalog-product-add" || splitUrl[1] == "catalog-product-edit") {
                _this3.router.navigate(["/catalog-product"]);
              } else if (_this3.router.url == "/discount-add" || splitUrl[1] == "discount-edit") {
                _this3.router.navigate(["/setting-discount"]);
              } else if (_this3.router.url == "/outlet-add" || splitUrl[1] == "outlet-edit") {
                _this3.router.navigate(["/outlet"]);
              } else if (_this3.router.url == "/user-add" || splitUrl[1] == "user-edit") {
                _this3.router.navigate(["/user"]);
              } else if (_this3.router.url == "/customer-add" || splitUrl[1] == "customer-edit") {
                _this3.router.navigate(["/customer"]);
              } else if (splitUrl[1] == "booking-detail") {
                _this3.router.navigate(["/booking"]);
              } else if (splitUrl[1] == "select-customer" || _this3.router.url == "/select-discount") {
                _this3.router.navigate(["/payment-options"]);
              } else if (splitUrl[1] == "report-sales" || splitUrl[1] == "report-product-sales") {
                _this3.router.navigate(["/tabs/tab-report"]);
              } else if (_this3.router.url == "/account-edit") {
                _this3.router.navigate(["/account"]);
              } else {
                _this3.location.back();
              }

              console.log(_this3.router.url);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _fcm_service__WEBPACK_IMPORTED_MODULE_10__["FcmService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<ion-app mode=\"ios\">\r\n  <ion-router-outlet animated=\"false\"></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/printer/ngx */
      "METt");
      /* harmony import */


      var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/bluetooth-serial/ngx */
      "7uwA");
      /* harmony import */


      var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/native-page-transitions/ngx */
      "CicV");
      /* harmony import */


      var ng2_google_charts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng2-google-charts */
      "omRQ");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      "up+p");
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "WdVq");
      /* harmony import */


      var _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/base64-to-gallery/ngx */
      "kEDg");
      /* harmony import */


      var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @techiediaries/ngx-qrcode */
      "hiuq");
      /* harmony import */


      var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic-native/native-audio/ngx */
      "fLLL");
      /* harmony import */


      var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ionic-native/clipboard/ngx */
      "zzaN");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3"); // import { PDFGenerator } from '@ionic-native/pdf-generator';


      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_16__["Ng2GoogleChartsModule"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_22__["NgxQRCodeModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_26__["AngularFireStorageModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"], _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_13__["Printer"], _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_14__["BluetoothSerial"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_15__["NativePageTransitions"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__["FileTransferObject"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__["File"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_19__["GooglePlus"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_20__["BarcodeScanner"], _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_21__["Base64ToGallery"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_23__["NativeAudio"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_24__["Clipboard"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__["FileTransfer"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "dVwY":
    /*!***********************************!*\
      !*** ./src/app/global.service.ts ***!
      \***********************************/

    /*! exports provided: GlobalService */

    /***/
    function dVwY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalService", function () {
        return GlobalService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./storage.service */
      "qkCY");

      var GlobalService = /*#__PURE__*/function () {
        function GlobalService(http, loadingController, toastController, storage) {
          _classCallCheck(this, GlobalService);

          this.http = http;
          this.loadingController = loadingController;
          this.toastController = toastController;
          this.storage = storage; // base_url = 'http://localhost/Tokomobile-admin/public/api/';
          // public base_url = "http://127.0.0.1:8000/api/";

          this.appname = "Posbill"; // public domain = "https://app.posbill.id/";

          this.domain = "https://app.posbill.dev/";
          this.base_url = "http://127.0.0.1:8000/api/";
          this.basic_key = "6EDE2F267F8A7439B62CAA95A56A25D47B05E16B0D9FEC79676DD0E7E96E884A";
          this.topicName = "posbill";
          this.base_url = this.domain + "api/";
        }

        _createClass(GlobalService, [{
          key: "getHeader",
          value: function getHeader() {
            var headers = new Headers();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", "application/json");
            return headers;
          }
        }, {
          key: "currency",
          value: function currency(angka) {
            var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Rp";

            if (angka == null) {
              angka = 0;
            }

            angka = angka.toString();
            var number_string = angka.replace(/[^,\d]/g, "").toString(),
                split = number_string.split(","),
                sisa = split[0].length % 3,
                rupiah = split[0].substr(0, sisa),
                ribuan = split[0].substr(sisa).match(/\d{3}/gi); // tambahkan titik jika yang di input sudah menjadi angka ribuan

            if (ribuan) {
              var separator = sisa ? "." : "";
              rupiah += separator + ribuan.join(".");
            }

            rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
            return prefix == undefined ? rupiah : rupiah ? "Rp" + rupiah : "";
          }
        }, {
          key: "getFirstImage",
          value: function getFirstImage(image) {
            return image.split(",")[0];
          }
        }, {
          key: "saleStatus",
          value: function saleStatus(status) {
            if (status == 1) return "Pending";
            if (status == 2) return "Diproses";
            if (status == 3) return "Selesai";
            if (status == 4) return "Dibatalkan";
          }
        }, {
          key: "paymentStatus",
          value: function paymentStatus(status) {
            if (status == 1) return "Pending";
            if (status == 2) return "Lunas";
          }
        }, {
          key: "getDateNow",
          value: function getDateNow() {
            var d = new Date();
            var dString = this.getFullYear() + "-" + this.getMonth() + "-" + this.getDate() + " " + this.getHour() + ":" + this.getMinute() + ":" + this.getSecond();
            return dString;
          }
        }, {
          key: "getDateOnlyNow",
          value: function getDateOnlyNow() {
            var d = new Date();
            var dString = this.getFullYear() + "-" + this.getMonth() + "-" + this.getDate();
            return dString;
          }
        }, {
          key: "getFullYear",
          value: function getFullYear() {
            var year = new Date();
            var yearString = String(year.getFullYear());
            return yearString;
          }
        }, {
          key: "getFullYear2Ago",
          value: function getFullYear2Ago() {
            var year = new Date();
            year.setMonth(year.getMonth() - 2);
            var yearString = String(year.getFullYear());
            return yearString;
          }
        }, {
          key: "getYear",
          value: function getYear() {
            var year = new Date();
            var yearString = String(year.getFullYear().toString().substr(-2));
            return yearString;
          }
        }, {
          key: "getMonth",
          value: function getMonth() {
            var dateStr = new Date();
            var month = String(dateStr.getMonth() + 1);
            var monthStr = String(month);

            if (monthStr.length == 1) {
              var monthStr = "0" + monthStr;
            }

            return monthStr;
          }
        }, {
          key: "getNameDate",
          value: function getNameDate(date, option) {
            var dateFormatter = new Intl.DateTimeFormat("id-ID", option);
            var formattedDate = dateFormatter.format(date);
            return formattedDate;
          }
        }, {
          key: "getMonth2Ago",
          value: function getMonth2Ago() {
            var dateStr = new Date();
            dateStr.setMonth(dateStr.getMonth() - 2);
            var month = String(dateStr.getMonth() + 1);
            var monthStr = String(month);

            if (monthStr.length == 1) {
              var monthStr = "0" + monthStr;
            }

            return monthStr;
          }
        }, {
          key: "getDate",
          value: function getDate() {
            var dateStr = new Date();
            var dateDay = dateStr.getDate();
            var dateDayStr = String(dateDay);

            if (dateDayStr.length == 1) {
              var dateDayStr = "0" + dateDayStr;
            }

            return dateDayStr;
          }
        }, {
          key: "getHour",
          value: function getHour() {
            var hour = new Date();
            var hourString = String(hour.getHours());
            return hourString;
          }
        }, {
          key: "getMinute",
          value: function getMinute() {
            var minute = new Date();
            var minuteString = String(minute.getMinutes());
            return minuteString;
          }
        }, {
          key: "getSecond",
          value: function getSecond() {
            var second = new Date();
            var secondString = String(second.getSeconds());
            return secondString;
          }
        }, {
          key: "getMathRandom",
          value: function getMathRandom() {
            var a = Math.random() * 100000;
            var aString = String(a);
            var randomString = aString.split(".");
            return randomString[0];
          }
        }, {
          key: "parsingDate",
          value: function parsingDate(date) {
            var dateStr = new Date(date);
            var dateDay = dateStr.getDate();
            var dateDayStr = String(dateDay);

            if (dateDayStr.length == 1) {
              var dateDayStr = "0" + dateDayStr;
            }

            var month = dateStr.getMonth() + 1;
            var monthStr = String(month);

            if (monthStr.length == 1) {
              var monthStr = "0" + monthStr;
            }

            return dateStr.getFullYear() + "-" + monthStr + "-" + dateDayStr;
          }
        }, {
          key: "checkAuth",
          value: function checkAuth(token) {}
        }, {
          key: "newDate",
          value: function newDate(date) {
            var newDate = new Date(date);
            return newDate;
          }
        }, {
          key: "loadingPresent",
          value: function loadingPresent(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var loading;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      spinner: "dots",
                      cssClass: "my-custom-class",
                      message: message,
                      duration: 10000,
                      mode: "ios"
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "loadingDismiss",
          value: function loadingDismiss() {
            this.loadingController.dismiss();
          }
        }, {
          key: "toastPresent",
          value: function toastPresent(message) {
            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "dark";
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      color: color,
                      position: "bottom"
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "toastPresentNoDuration",
          value: function toastPresentNoDuration(message) {
            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "dark";
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this4 = this;

              var toast;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastController.create({
                      message: message,
                      color: color,
                      position: "bottom",
                      buttons: [{
                        side: "end",
                        text: "Tutup",
                        role: "cancel",
                        handler: function handler() {
                          console.log("Cancel clicked");

                          _this4.toastController.dismiss();
                        }
                      }]
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "toastPresentTop",
          value: function toastPresentTop(message) {
            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "dark";
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      color: color,
                      position: "top"
                    });

                  case 2:
                    toast = _context5.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }]);

        return GlobalService;
      }();

      GlobalService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }];
      };

      GlobalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], GlobalService);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "og4U":
    /*!********************************!*\
      !*** ./src/app/fcm.service.ts ***!
      \********************************/

    /*! exports provided: FcmService */

    /***/
    function og4U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FcmService", function () {
        return FcmService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./global.service */
      "dVwY");
      /* harmony import */


      var _notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notification.service */
      "S36L");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./storage.service */
      "qkCY");

      var PushNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].PushNotifications;

      var FcmService = /*#__PURE__*/function () {
        function FcmService(router, http, global, notification, storage) {
          _classCallCheck(this, FcmService);

          // this.router.navigate([`orders-detail/e13af9b2-4a88-4f4b-bf4e-ca16068ef69f/list`]);
          this.router = router;
          this.http = http;
          this.global = global;
          this.notification = notification;
          this.storage = storage;
          this.start_date = "";
          this.end_date = "";
          this.activeOutlet = "";
        } // Request permission to use push notifications
        // iOS will prompt user and return if they granted permission or not
        // Android will just grant without prompting


        _createClass(FcmService, [{
          key: "initPush",
          value: function initPush() {
            var _this5 = this;

            this.storage.getObject('user').then(function (user) {
              _this5.registerPush(user.id);

              _this5.getActiveOutlet();

              _this5.start_date = _this5.global.parsingDate(_this5.global.getFullYear() + "-" + _this5.global.getMonth() + "-01");
              _this5.end_date = _this5.global.getDateOnlyNow();
            });
          }
        }, {
          key: "registerPush",
          value: function registerPush(user) {
            var _this6 = this;

            PushNotifications.requestPermission().then(function (result) {
              if (result.granted) {
                // Register with Apple / Google to receive push via APNS/FCM
                PushNotifications.register();
              } else {// Show some error
              }
            });
            PushNotifications.addListener("registration", function (token) {
              var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
              });
              var options = {
                headers: reqHeader
              };
              var postData = {
                user_id: user,
                token: token.value
              };

              _this6.http.post(_this6.global.base_url + "fcm/add/" + token.value, postData, options).subscribe(function (data) {
                console.log(data);
              }, function (error) {
                console.log(error);
              });
            });
            PushNotifications.addListener("registrationError", function (error) {
              alert("Error on registration: " + JSON.stringify(error));
            });
            PushNotifications.addListener("pushNotificationReceived", function (notification) {
              var header = notification.title;
              var message = notification.body;
              var id = notification.data.id;

              _this6.storage.getObject('auth').then(function (auth) {
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + auth.token
                });
                var options = {
                  headers: reqHeader
                };
                var postdata = {
                  outlet_id: _this6.activeOutlet.id,
                  start_date: _this6.global.parsingDate(_this6.start_date),
                  end_date: _this6.global.parsingDate(_this6.end_date)
                };

                _this6.http.post(_this6.global.base_url + "auth/order/last_per_outlet", postdata, options).subscribe(function (data) {
                  if (data.status == 0) {
                    _this6.storage.setObject("order", data.order);

                    console.log("Data Order", data.order);

                    _this6.http.get('assets/dramatic_boom_effect.mp3', {
                      responseType: 'blob'
                    }).subscribe(function (audioBlob) {
                      var audioUrl = URL.createObjectURL(audioBlob);
                      var audio = new Audio(audioUrl);
                      console.log(id, "id nya nih");
                      audio.play();

                      _this6.notification.showNotification(header, message, id);
                    });
                  }
                }, function (error) {
                  console.log(error);
                });
              });
            });
            PushNotifications.addListener("pushNotificationActionPerformed", function (notification) {
              var id = notification.notification.data.id;
              var name = notification.notification.data.name;
              var phone = notification.notification.data.phone;

              _this6.storage.getObject('auth').then(function (auth) {
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + auth.token
                });
                var options = {
                  headers: reqHeader
                };
                var postdata = {
                  outlet_id: _this6.activeOutlet.id,
                  start_date: _this6.global.parsingDate(_this6.start_date),
                  end_date: _this6.global.parsingDate(_this6.end_date)
                };

                _this6.http.post(_this6.global.base_url + "auth/order/last_per_outlet", postdata, options).subscribe(function (data) {
                  if (data.status == 0) {
                    _this6.storage.setObject("order", data.order);

                    console.log("Data Order", data.order);

                    _this6.router.navigate(["orders-detail/".concat(id, "/list")]);
                  }
                }, function (error) {
                  console.log(error);
                });
              });
            });
          }
        }, {
          key: "getActiveOutlet",
          value: function getActiveOutlet() {
            var _this7 = this;

            this.storage.getObject("outlet_active").then(function (data) {
              if (data != null) {
                _this7.activeOutlet = data;
              }
            });
          }
        }]);

        return FcmService;
      }();

      FcmService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
        }, {
          type: _notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }];
      };

      FcmService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
      })], FcmService);
      /***/
    },

    /***/
    "qkCY":
    /*!************************************!*\
      !*** ./src/app/storage.service.ts ***!
      \************************************/

    /*! exports provided: StorageService */

    /***/
    function qkCY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
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


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage;

      var StorageService = /*#__PURE__*/function () {
        function StorageService() {
          _classCallCheck(this, StorageService);
        }

        _createClass(StorageService, [{
          key: "setString",
          value: function setString(key, value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return Storage.set({
                      key: key,
                      value: value
                    });

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6);
            }));
          }
        }, {
          key: "getString",
          value: function getString(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return Storage.get({
                      key: key
                    });

                  case 2:
                    return _context7.abrupt("return", _context7.sent);

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
          }
        }, {
          key: "setObject",
          value: function setObject(key, value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return Storage.set({
                      key: key,
                      value: JSON.stringify(value)
                    });

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8);
            }));
          }
        }, {
          key: "getObject",
          value: function getObject(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var ret;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return Storage.get({
                      key: key
                    });

                  case 2:
                    ret = _context9.sent;
                    return _context9.abrupt("return", JSON.parse(ret.value));

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9);
            }));
          }
        }, {
          key: "removeItem",
          value: function removeItem(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return Storage.remove({
                      key: key
                    });

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10);
            }));
          }
        }, {
          key: "clear",
          value: function clear() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return Storage.clear();

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11);
            }));
          }
        }]);

        return StorageService;
      }();

      StorageService.ctorParameters = function () {
        return [];
      };

      StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], StorageService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: "",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: "payment-options",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | payment-options-payment-options-module */
          [__webpack_require__.e("default~booking-options-booking-options-module~catalog-product-add-catalog-product-add-module~help-c~171db5a0"), __webpack_require__.e("payment-options-payment-options-module")]).then(__webpack_require__.bind(null,
          /*! ./payment-options/payment-options.module */
          "sIhH")).then(function (m) {
            return m.PaymentOptionsPageModule;
          });
        }
      }, {
        path: "login",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: "register",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | register-register-module */
          "register-register-module").then(__webpack_require__.bind(null,
          /*! ./register/register.module */
          "x5bZ")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: "payment-finish",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | payment-finish-payment-finish-module */
          "payment-finish-payment-finish-module").then(__webpack_require__.bind(null,
          /*! ./payment-finish/payment-finish.module */
          "2xqe")).then(function (m) {
            return m.PaymentFinishPageModule;
          });
        }
      }, {
        path: "catalog-product",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | catalog-product-catalog-product-module */
          "catalog-product-catalog-product-module").then(__webpack_require__.bind(null,
          /*! ./catalog-product/catalog-product.module */
          "WsFJ")).then(function (m) {
            return m.CatalogProductPageModule;
          });
        }
      }, {
        path: "catalog-product-edit/:id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | catalog-product-edit-catalog-product-edit-module */
          "catalog-product-edit-catalog-product-edit-module").then(__webpack_require__.bind(null,
          /*! ./catalog-product-edit/catalog-product-edit.module */
          "HvcT")).then(function (m) {
            return m.CatalogProductEditPageModule;
          });
        }
      }, {
        path: "catalog-product-add",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | catalog-product-add-catalog-product-add-module */
          [__webpack_require__.e("default~booking-options-booking-options-module~catalog-product-add-catalog-product-add-module~help-c~171db5a0"), __webpack_require__.e("catalog-product-add-catalog-product-add-module")]).then(__webpack_require__.bind(null,
          /*! ./catalog-product-add/catalog-product-add.module */
          "33t4")).then(function (m) {
            return m.CatalogProductAddPageModule;
          });
        }
      }, {
        path: "catalog-category-add",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | catalog-category-add-catalog-category-add-module */
          "catalog-category-add-catalog-category-add-module").then(__webpack_require__.bind(null,
          /*! ./catalog-category-add/catalog-category-add.module */
          "8W5B")).then(function (m) {
            return m.CatalogCategoryAddPageModule;
          });
        }
      }, {
        path: "catalog-category-edit/:id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | catalog-category-edit-catalog-category-edit-module */
          "catalog-category-edit-catalog-category-edit-module").then(__webpack_require__.bind(null,
          /*! ./catalog-category-edit/catalog-category-edit.module */
          "VIRY")).then(function (m) {
            return m.CatalogCategoryEditPageModule;
          });
        }
      }, {
        path: "blank",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | blank-blank-module */
          "blank-blank-module").then(__webpack_require__.bind(null,
          /*! ./blank/blank.module */
          "I3iu")).then(function (m) {
            return m.BlankPageModule;
          });
        }
      }, {
        path: "catalog-category",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | catalog-category-catalog-category-module */
          "catalog-category-catalog-category-module").then(__webpack_require__.bind(null,
          /*! ./catalog-category/catalog-category.module */
          "Ifbl")).then(function (m) {
            return m.CatalogCategoryPageModule;
          });
        }
      }, {
        path: "orders-detail/:id/:source",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | orders-detail-orders-detail-module */
          [__webpack_require__.e("default~orders-detail-orders-detail-module~orders-edit-orders-edit-module~orders-payment-qris-orders~8c9f9247"), __webpack_require__.e("orders-detail-orders-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./orders-detail/orders-detail.module */
          "mC4f")).then(function (m) {
            return m.OrdersDetailPageModule;
          });
        }
      }, {
        path: "setting-printer",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | setting-printer-setting-printer-module */
          "setting-printer-setting-printer-module").then(__webpack_require__.bind(null,
          /*! ./setting-printer/setting-printer.module */
          "LRRv")).then(function (m) {
            return m.SettingPrinterPageModule;
          });
        }
      }, {
        path: "launcher",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | launcher-launcher-module */
          "launcher-launcher-module").then(__webpack_require__.bind(null,
          /*! ./launcher/launcher.module */
          "FiDa")).then(function (m) {
            return m.LauncherPageModule;
          });
        }
      }, {
        path: "setting-sale",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | setting-sale-setting-sale-module */
          "setting-sale-setting-sale-module").then(__webpack_require__.bind(null,
          /*! ./setting-sale/setting-sale.module */
          "zIf0")).then(function (m) {
            return m.SettingSalePageModule;
          });
        }
      }, {
        path: "setting-format",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | setting-format-setting-format-module */
          "setting-format-setting-format-module").then(__webpack_require__.bind(null,
          /*! ./setting-format/setting-format.module */
          "+f7x")).then(function (m) {
            return m.SettingFormatPageModule;
          });
        }
      }, {
        path: "setting-payment",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | setting-payment-setting-payment-module */
          "setting-payment-setting-payment-module").then(__webpack_require__.bind(null,
          /*! ./setting-payment/setting-payment.module */
          "Fqf2")).then(function (m) {
            return m.SettingPaymentPageModule;
          });
        }
      }, {
        path: "setting-discount",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | setting-discount-setting-discount-module */
          "setting-discount-setting-discount-module").then(__webpack_require__.bind(null,
          /*! ./setting-discount/setting-discount.module */
          "Zj6h")).then(function (m) {
            return m.SettingDiscountPageModule;
          });
        }
      }, {
        path: "setting/order-payment",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tab-setting-order-payment-order-payment-module */
          "order-payment-order-payment-module").then(__webpack_require__.bind(null,
          /*! ./tab-setting/order-payment/order-payment.module */
          "0Qbg")).then(function (m) {
            return m.OrderPaymentPageModule;
          });
        }
      }, {
        path: "setting/format-printer",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tab-setting-format-printer-format-printer-module */
          "format-printer-format-printer-module").then(__webpack_require__.bind(null,
          /*! ./tab-setting/format-printer/format-printer.module */
          "BuxP")).then(function (m) {
            return m.FormatPrinterPageModule;
          });
        }
      }, {
        path: "outlet",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | outlet-outlet-module */
          "outlet-outlet-module").then(__webpack_require__.bind(null,
          /*! ./outlet/outlet.module */
          "/4ph")).then(function (m) {
            return m.OutletPageModule;
          });
        }
      }, {
        path: "customer",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | customer-customer-module */
          "customer-customer-module").then(__webpack_require__.bind(null,
          /*! ./customer/customer.module */
          "d7gL")).then(function (m) {
            return m.CustomerPageModule;
          });
        }
      }, {
        path: "user",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-user-module */
          "user-user-module").then(__webpack_require__.bind(null,
          /*! ./user/user.module */
          "7UCR")).then(function (m) {
            return m.UserPageModule;
          });
        }
      }, {
        path: "account",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | account-account-module */
          "account-account-module").then(__webpack_require__.bind(null,
          /*! ./account/account.module */
          "jcJX")).then(function (m) {
            return m.AccountPageModule;
          });
        }
      }, {
        path: "subscription",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | subscription-subscription-module */
          "subscription-subscription-module").then(__webpack_require__.bind(null,
          /*! ./subscription/subscription.module */
          "AfdY")).then(function (m) {
            return m.SubscriptionPageModule;
          });
        }
      }, {
        path: "outlet-add",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | outlet-add-outlet-add-module */
          "outlet-add-outlet-add-module").then(__webpack_require__.bind(null,
          /*! ./outlet-add/outlet-add.module */
          "epgI")).then(function (m) {
            return m.OutletAddPageModule;
          });
        }
      }, {
        path: "outlet-edit/:id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | outlet-edit-outlet-edit-module */
          "outlet-edit-outlet-edit-module").then(__webpack_require__.bind(null,
          /*! ./outlet-edit/outlet-edit.module */
          "M06G")).then(function (m) {
            return m.OutletEditPageModule;
          });
        }
      }, {
        path: "customer-edit/:id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | customer-edit-customer-edit-module */
          "customer-edit-customer-edit-module").then(__webpack_require__.bind(null,
          /*! ./customer-edit/customer-edit.module */
          "3CQv")).then(function (m) {
            return m.CustomerEditPageModule;
          });
        }
      }, {
        path: "customer-add",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | customer-add-customer-add-module */
          "customer-add-customer-add-module").then(__webpack_require__.bind(null,
          /*! ./customer-add/customer-add.module */
          "nwXH")).then(function (m) {
            return m.CustomerAddPageModule;
          });
        }
      }, {
        path: "user-add",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-add-user-add-module */
          "user-add-user-add-module").then(__webpack_require__.bind(null,
          /*! ./user-add/user-add.module */
          "ddk3")).then(function (m) {
            return m.UserAddPageModule;
          });
        }
      }, {
        path: "user-edit/:id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-edit-user-edit-module */
          "user-edit-user-edit-module").then(__webpack_require__.bind(null,
          /*! ./user-edit/user-edit.module */
          "6uns")).then(function (m) {
            return m.UserEditPageModule;
          });
        }
      }, {
        path: "discount-add",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | discount-add-discount-add-module */
          "discount-add-discount-add-module").then(__webpack_require__.bind(null,
          /*! ./discount-add/discount-add.module */
          "a+Mj")).then(function (m) {
            return m.DiscountAddPageModule;
          });
        }
      }, {
        path: "discount-edit/:id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | discount-edit-discount-edit-module */
          "discount-edit-discount-edit-module").then(__webpack_require__.bind(null,
          /*! ./discount-edit/discount-edit.module */
          "UuEG")).then(function (m) {
            return m.DiscountEditPageModule;
          });
        }
      }, {
        path: "select-customer/:redirect",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | select-customer-select-customer-module */
          "select-customer-select-customer-module").then(__webpack_require__.bind(null,
          /*! ./select-customer/select-customer.module */
          "nNEp")).then(function (m) {
            return m.SelectCustomerPageModule;
          });
        }
      }, {
        path: "select-customer/:redirect/:id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | select-customer-select-customer-module */
          "select-customer-select-customer-module").then(__webpack_require__.bind(null,
          /*! ./select-customer/select-customer.module */
          "nNEp")).then(function (m) {
            return m.SelectCustomerPageModule;
          });
        }
      }, {
        path: "select-discount/:source",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | select-discount-select-discount-module */
          "select-discount-select-discount-module").then(__webpack_require__.bind(null,
          /*! ./select-discount/select-discount.module */
          "nqNi")).then(function (m) {
            return m.SelectDiscountPageModule;
          });
        }
      }, {
        path: "select-discount/:source/:id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | select-discount-select-discount-module */
          "select-discount-select-discount-module").then(__webpack_require__.bind(null,
          /*! ./select-discount/select-discount.module */
          "nqNi")).then(function (m) {
            return m.SelectDiscountPageModule;
          });
        }
      }, {
        path: "report-sales/:start_date/:end_date/:outlet_id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | report-sales-report-sales-module */
          "report-sales-report-sales-module").then(__webpack_require__.bind(null,
          /*! ./report-sales/report-sales.module */
          "9bGN")).then(function (m) {
            return m.ReportSalesPageModule;
          });
        }
      }, {
        path: "report-product-sales/:start_date/:end_date/:outlet_id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | report-product-sales-report-product-sales-module */
          "report-product-sales-report-product-sales-module").then(__webpack_require__.bind(null,
          /*! ./report-product-sales/report-product-sales.module */
          "dnjM")).then(function (m) {
            return m.ReportProductSalesPageModule;
          });
        }
      }, {
        path: "account-edit",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | account-edit-account-edit-module */
          "account-edit-account-edit-module").then(__webpack_require__.bind(null,
          /*! ./account-edit/account-edit.module */
          "hdYt")).then(function (m) {
            return m.AccountEditPageModule;
          });
        }
      }, {
        path: "inactive",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | inactive-inactive-module */
          "inactive-inactive-module").then(__webpack_require__.bind(null,
          /*! ./inactive/inactive.module */
          "XN/H")).then(function (m) {
            return m.InactivePageModule;
          });
        }
      }, {
        path: "setting-order-type",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | setting-order-type-setting-order-type-module */
          "setting-order-type-setting-order-type-module").then(__webpack_require__.bind(null,
          /*! ./setting-order-type/setting-order-type.module */
          "FaER")).then(function (m) {
            return m.SettingOrderTypePageModule;
          });
        }
      }, {
        path: "booking",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | booking-booking-module */
          "booking-booking-module").then(__webpack_require__.bind(null,
          /*! ./booking/booking.module */
          "qmMC")).then(function (m) {
            return m.BookingPageModule;
          });
        }
      }, {
        path: "booking-detail/:id/:source",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | booking-detail-booking-detail-module */
          "booking-detail-booking-detail-module").then(__webpack_require__.bind(null,
          /*! ./booking-detail/booking-detail.module */
          "5/ge")).then(function (m) {
            return m.BookingDetailPageModule;
          });
        }
      }, {
        path: "booking-options",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | booking-options-booking-options-module */
          [__webpack_require__.e("default~booking-options-booking-options-module~catalog-product-add-catalog-product-add-module~help-c~171db5a0"), __webpack_require__.e("booking-options-booking-options-module")]).then(__webpack_require__.bind(null,
          /*! ./booking-options/booking-options.module */
          "Kh3f")).then(function (m) {
            return m.BookingOptionsPageModule;
          });
        }
      }, {
        path: "outlet-detail/:id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | outlet-detail-outlet-detail-module */
          "outlet-detail-outlet-detail-module").then(__webpack_require__.bind(null,
          /*! ./outlet-detail/outlet-detail.module */
          "WVqf")).then(function (m) {
            return m.OutletDetailPageModule;
          });
        }
      }, {
        path: "orders-payment-qris/:id",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | orders-payment-qris-orders-payment-qris-module */
          [__webpack_require__.e("default~orders-detail-orders-detail-module~orders-edit-orders-edit-module~orders-payment-qris-orders~8c9f9247"), __webpack_require__.e("orders-payment-qris-orders-payment-qris-module")]).then(__webpack_require__.bind(null,
          /*! ./orders-payment-qris/orders-payment-qris.module */
          "DIbh")).then(function (m) {
            return m.OrdersPaymentQrisPageModule;
          });
        }
      }, {
        path: "orders-payment-ovo",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | orders-payment-ovo-orders-payment-ovo-module */
          "orders-payment-ovo-orders-payment-ovo-module").then(__webpack_require__.bind(null,
          /*! ./orders-payment-ovo/orders-payment-ovo.module */
          "ZLrE")).then(function (m) {
            return m.OrdersPaymentOvoPageModule;
          });
        }
      }, {
        path: "help-chat",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | help-chat-help-chat-module */
          [__webpack_require__.e("default~booking-options-booking-options-module~catalog-product-add-catalog-product-add-module~help-c~171db5a0"), __webpack_require__.e("common"), __webpack_require__.e("help-chat-help-chat-module")]).then(__webpack_require__.bind(null,
          /*! ./help-chat/help-chat.module */
          "e39k")).then(function (m) {
            return m.HelpChatPageModule;
          });
        }
      }, {
        path: "catalog-product-stock/:id/:type",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | catalog-product-stock-catalog-product-stock-module */
          "catalog-product-stock-catalog-product-stock-module").then(__webpack_require__.bind(null,
          /*! ./catalog-product-stock/catalog-product-stock.module */
          "tV5x")).then(function (m) {
            return m.CatalogProductStockPageModule;
          });
        }
      }, {
        path: "orders-payment/:id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | orders-payment-orders-payment-module */
          "orders-payment-orders-payment-module").then(__webpack_require__.bind(null,
          /*! ./orders-payment/orders-payment.module */
          "IG+f")).then(function (m) {
            return m.OrdersPaymentPageModule;
          });
        }
      }, {
        path: "orders-edit/:id",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | orders-edit-orders-edit-module */
          [__webpack_require__.e("default~orders-detail-orders-detail-module~orders-edit-orders-edit-module~orders-payment-qris-orders~8c9f9247"), __webpack_require__.e("orders-edit-orders-edit-module")]).then(__webpack_require__.bind(null,
          /*! ./orders-edit/orders-edit.module */
          "BuK7")).then(function (m) {
            return m.OrdersEditPageModule;
          });
        }
      }, {
        path: "orders-edit/:id/:action",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | orders-edit-orders-edit-module */
          [__webpack_require__.e("default~orders-detail-orders-detail-module~orders-edit-orders-edit-module~orders-payment-qris-orders~8c9f9247"), __webpack_require__.e("orders-edit-orders-edit-module")]).then(__webpack_require__.bind(null,
          /*! ./orders-edit/orders-edit.module */
          "BuK7")).then(function (m) {
            return m.OrdersEditPageModule;
          });
        }
      }, {
        path: "select-product/:source/:id/:type",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | select-product-select-product-module */
          "select-product-select-product-module").then(__webpack_require__.bind(null,
          /*! ./select-product/select-product.module */
          "ecLd")).then(function (m) {
            return m.SelectProductPageModule;
          });
        }
      }, {
        path: "booking-edit/:id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | booking-edit-booking-edit-module */
          "booking-edit-booking-edit-module").then(__webpack_require__.bind(null,
          /*! ./booking-edit/booking-edit.module */
          "cnIb")).then(function (m) {
            return m.BookingEditPageModule;
          });
        }
      }, {
        path: "booking-edit/:id/:action",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | booking-edit-booking-edit-module */
          "booking-edit-booking-edit-module").then(__webpack_require__.bind(null,
          /*! ./booking-edit/booking-edit.module */
          "cnIb")).then(function (m) {
            return m.BookingEditPageModule;
          });
        }
      }, {
        path: "setting-olshop",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | setting-olshop-setting-olshop-module */
          "setting-olshop-setting-olshop-module").then(__webpack_require__.bind(null,
          /*! ./setting-olshop/setting-olshop.module */
          "uv2r")).then(function (m) {
            return m.SettingOlshopPageModule;
          });
        }
      }, {
        path: "test",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | test-test-module */
          "test-test-module").then(__webpack_require__.bind(null,
          /*! ./test/test.module */
          "FScs")).then(function (m) {
            return m.TestPageModule;
          });
        }
      }, {
        path: "information-detail/:id",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | information-detail-information-detail-module */
          "information-detail-information-detail-module").then(__webpack_require__.bind(null,
          /*! ./information-detail/information-detail.module */
          "Q95u")).then(function (m) {
            return m.InformationDetailPageModule;
          });
        }
      }, {
        path: 'chat',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | chat-chat-module */
          [__webpack_require__.e("common"), __webpack_require__.e("chat-chat-module")]).then(__webpack_require__.bind(null,
          /*! ./chat/chat.module */
          "2yxt")).then(function (m) {
            return m.ChatPageModule;
          });
        }
      }, {
        path: 'chat-room',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | chat-room-chat-room-module */
          "chat-room-chat-room-module").then(__webpack_require__.bind(null,
          /*! ./chat-room/chat-room.module */
          "eT4x")).then(function (m) {
            return m.ChatRoomPageModule;
          });
        }
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map