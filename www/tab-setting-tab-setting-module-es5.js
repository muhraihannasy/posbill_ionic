(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-setting-tab-setting-module"], {
    /***/
    "+zSB":
    /*!*************************************************!*\
      !*** ./src/app/tab-setting/tab-setting.page.ts ***!
      \*************************************************/

    /*! exports provided: TabSettingPage */

    /***/
    function zSB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabSettingPage", function () {
        return TabSettingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab_setting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab-setting.page.html */
      "4cuI");
      /* harmony import */


      var _tab_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab-setting.page.scss */
      "mjr7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/native-page-transitions/ngx */
      "CicV");
      /* harmony import */


      var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../global.service */
      "dVwY");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");

      var TabSettingPage = /*#__PURE__*/function () {
        function TabSettingPage(nativePageTransitions, http, global, router, toastController, storage, alertController, platform) {
          _classCallCheck(this, TabSettingPage);

          // this.platform.backButton.subscribeWithPriority(10, () => {
          //   this.router.navigate(['/tabs/tab1']);
          // });
          this.nativePageTransitions = nativePageTransitions;
          this.http = http;
          this.global = global;
          this.router = router;
          this.toastController = toastController;
          this.storage = storage;
          this.alertController = alertController;
          this.platform = platform;
          this.user = {
            name: '',
            level: ''
          };
          this.company = {
            name: '',
            "package": ''
          };
        }

        _createClass(TabSettingPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.getObject('company').then(function (company) {
              _this.company = company;

              _this.storage.getObject('user').then(function (user) {
                _this.user = user;
              });
            });
          }
        }, {
          key: "clickToPage",
          value: function clickToPage(page) {
            if (this.company["package"] == 'Lite' && page == '/setting-olshop') {
              this.global.toastPresent('Fitur toko online tersedia dalam versi Premium');
              return false;
            }

            if (this.company["package"] == 'Lite' && page == '/user') {
              this.global.toastPresent('Fitur pengguna tersedia dalam versi Premium');
              return false;
            }

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
            this.router.navigate([page]);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {}
        }, {
          key: "confirmLogout",
          value: function confirmLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this2 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Konfirmasi',
                      message: 'Yakin untuk keluar dari akun Anda?   <br/> <br/> Perhatian : <br/> <span style="color:red">harap lakukan sinkronisasi data order terlebih dahulu, data offline akan dihapus saat Anda keluar akun!</span>',
                      buttons: [{
                        text: 'Sinkronkan data!',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          _this2.router.navigate(['/tabs/tab-order']);
                        }
                      }, {
                        text: 'Keluar',
                        handler: function handler() {
                          _this2.logout();

                          console.log('Confirm logout');
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this3 = this;

            this.storage.clear().then(function () {
              _this3.storage.removeItem('auth');

              _this3.storage.removeItem('user');

              _this3.storage.removeItem('company');

              _this3.storage.removeItem('outlet_active');

              _this3.storage.removeItem('outlet');

              _this3.storage.removeItem('product');

              _this3.router.navigate(['/login']);
            });
          }
        }]);

        return TabSettingPage;
      }();

      TabSettingPage.ctorParameters = function () {
        return [{
          type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }];
      };

      TabSettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab-setting',
        template: _raw_loader_tab_setting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab_setting_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TabSettingPage);
      /***/
    },

    /***/
    "/y35":
    /*!***************************************************!*\
      !*** ./src/app/tab-setting/tab-setting.module.ts ***!
      \***************************************************/

    /*! exports provided: TabSettingPageModule */

    /***/
    function y35(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabSettingPageModule", function () {
        return TabSettingPageModule;
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


      var _tab_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab-setting.page */
      "+zSB");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab_setting_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab-setting-routing.module */
      "3q5p");

      var TabSettingPageModule = /*#__PURE__*/_createClass(function TabSettingPageModule() {
        _classCallCheck(this, TabSettingPageModule);
      });

      TabSettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab_setting_page__WEBPACK_IMPORTED_MODULE_6__["TabSettingPage"]
        }]), _tab_setting_routing_module__WEBPACK_IMPORTED_MODULE_8__["TabSettingPageRoutingModule"]],
        declarations: [_tab_setting_page__WEBPACK_IMPORTED_MODULE_6__["TabSettingPage"]]
      })], TabSettingPageModule);
      /***/
    },

    /***/
    "3q5p":
    /*!***********************************************************!*\
      !*** ./src/app/tab-setting/tab-setting-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: TabSettingPageRoutingModule */

    /***/
    function q5p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabSettingPageRoutingModule", function () {
        return TabSettingPageRoutingModule;
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


      var _tab_setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab-setting.page */
      "+zSB");

      var routes = [{
        path: '',
        component: _tab_setting_page__WEBPACK_IMPORTED_MODULE_3__["TabSettingPage"]
      }, {
        path: 'format-printer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | format-printer-format-printer-module */
          "format-printer-format-printer-module").then(__webpack_require__.bind(null,
          /*! ./format-printer/format-printer.module */
          "BuxP")).then(function (m) {
            return m.FormatPrinterPageModule;
          });
        }
      }, {
        path: 'order-payment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | order-payment-order-payment-module */
          "order-payment-order-payment-module").then(__webpack_require__.bind(null,
          /*! ./order-payment/order-payment.module */
          "0Qbg")).then(function (m) {
            return m.OrderPaymentPageModule;
          });
        }
      }, {
        path: 'online-shop',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | online-shop-online-shop-module */
          "online-shop-online-shop-module").then(__webpack_require__.bind(null,
          /*! ./online-shop/online-shop.module */
          "uXku")).then(function (m) {
            return m.OnlineShopPageModule;
          });
        }
      }];

      var TabSettingPageRoutingModule = /*#__PURE__*/_createClass(function TabSettingPageRoutingModule() {
        _classCallCheck(this, TabSettingPageRoutingModule);
      });

      TabSettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabSettingPageRoutingModule);
      /***/
    },

    /***/
    "4cuI":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-setting/tab-setting.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function cuI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\" color=\"light\" mode=\"ios\">\r\n  <!-- \r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label><strong>POS</strong></ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngIf=\"user.level=='Owner'\" (click)=\"clickToPage('/setting-sale')\" button>\r\n      <ion-icon name=\"cart-outline\" slot=\"start\"></ion-icon>\r\n      <small>Pengaturan penjualan</small>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"user.level=='Owner'\" (click)=\"clickToPage('/setting-order-type')\" button>\r\n      <ion-icon name=\"bag-handle-outline\" slot=\"start\"></ion-icon>\r\n      <small>Tipe pesanan</small>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"user.level=='Owner'\" (click)=\"clickToPage('/setting-payment')\" button>\r\n      <ion-icon name=\"card-outline\" slot=\"start\"></ion-icon>\r\n      <small>Metode pembayaran</small>\r\n    </ion-item>\r\n    <ion-item  *ngIf=\"user.level=='Owner'\" (click)=\"clickToPage('/setting-discount')\" button>\r\n      <ion-icon name=\"gift-outline\" slot=\"start\"></ion-icon>\r\n      <small>Diskon</small>\r\n    </ion-item>\r\n    <ion-item  *ngIf=\"user.level=='Owner'\" (click)=\"clickToPage('/setting-format')\" button>\r\n      <ion-icon name=\"receipt-outline\" slot=\"start\"></ion-icon>\r\n      <small>Format nota</small>\r\n    </ion-item>\r\n    <ion-item (click)=\"clickToPage('/setting-printer')\" button>\r\n      <ion-icon name=\"print-outline\" slot=\"start\"></ion-icon>\r\n      <small>Printer</small></ion-item>\r\n\r\n    <ion-item (click)=\"clickToPage('/customer')\" button>\r\n      <ion-icon name=\"woman-outline\" slot=\"start\"></ion-icon>\r\n      <small>Pelanggan</small></ion-item>\r\n\r\n    </ion-list>\r\n    <ion-card color=\"primary\" (click)=\"clickToPage('/setting-olshop')\">\r\n      <ion-card-content>\r\n        <h2>Toko Online</h2>\r\n        <h4>Atur toko online Anda dengan mudah</h4><br/>\r\n     \r\n        <ion-button fill=\"outline\" color=\"light\">Pengaturan Toko Online</ion-button>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-list style=\"margin-top:-20px;\">\r\n        <ion-list-header>\r\n          <ion-label><strong>Akun</strong></ion-label>\r\n        </ion-list-header>\r\n        <ion-item *ngIf=\"user.level=='Owner'\" (click)=\"clickToPage('/user')\" button>\r\n          <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\r\n          <small>Pengguna</small></ion-item>\r\n        <ion-item *ngIf=\"user.level=='Owner'\"  (click)=\"clickToPage('/outlet')\" button>\r\n          <ion-icon name=\"storefront-outline\" slot=\"start\"></ion-icon>\r\n          <small>Outlet & info berlangganan</small></ion-item>\r\n        <ion-item (click)=\"clickToPage('/account')\" button>\r\n          <ion-icon name=\"shield-checkmark-outline\" slot=\"start\"></ion-icon>\r\n          <small>Ubah akun</small>\r\n        </ion-item>\r\n        <ion-item href=\"https://tawk.to/chat/602cb322918aa261273f9dd9/1euq7jqev\" button>\r\n          <ion-icon name=\"chatbox-outline\" slot=\"start\"></ion-icon>\r\n          <small>Bantuan Live Chat</small>\r\n        </ion-item>\r\n       \r\n  </ion-list> -->\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"8\" size-md=\"4\" offset-md=\"3\">\r\n        <ion-card color=\"primary\">\r\n          <ion-card-content style=\"min-height: 90px\">\r\n            {{user.name}} <br />\r\n            <ion-note>{{user.level}}</ion-note>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col\r\n        size=\"4\"\r\n        size-md=\"2\"\r\n        class=\"ion-text-center\"\r\n        (click)=\"clickToPage('/account')\"\r\n      >\r\n        <ion-card color=\"dark\">\r\n          <ion-card-content style=\"min-height: 90px; white-space: nowrap\">\r\n            <ion-icon name=\"person-circle-outline\" color=\"light\"></ion-icon>\r\n            <p>Edit Profil</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"ion-text-center menu-setting\">\r\n      <ion-col\r\n        size=\"6\"\r\n        size-md=\"2\"\r\n        offset-md=\"3\"\r\n        (click)=\"clickToPage('/setting/order-payment')\"\r\n      >\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"cog-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>Order & <br />pembayaran</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col\r\n        size=\"6\"\r\n        size-md=\"2\"\r\n        (click)=\"clickToPage('/setting-order-type')\"\r\n      >\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"bag-handle-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>Tipe <br />pesanan</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col\r\n        size=\"6\"\r\n        size-md=\"2\"\r\n        (click)=\"clickToPage('/setting/format-printer')\"\r\n      >\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"receipt-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>Nota dan <br />Printer</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col\r\n        size=\"6\"\r\n        size-md=\"2\"\r\n        offset-md=\"3\"\r\n        (click)=\"clickToPage('/setting-online-shop')\"\r\n      >\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"cart-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>Toko <br />online</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" size-md=\"2\" (click)=\"clickToPage('/customer')\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"people-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>Data <br />Pelanggan</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" size-md=\"2\" (click)=\"clickToPage('/user')\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"person-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>Data <br />Pengguna</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col\r\n        size=\"6\"\r\n        size-md=\"2\"\r\n        offset-md=\"3\"\r\n        (click)=\"clickToPage('/outlet')\"\r\n      >\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"storefront-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>Outlet & <br />info paket</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" size-md=\"2\" (click)=\"clickToPage('/help-chat')\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon\r\n              name=\"help-outline\"\r\n              color=\"primary\"\r\n              size=\"large\"\r\n            ></ion-icon>\r\n            <p>\r\n              Bantuan <br />\r\n              &nbsp;\r\n            </p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- <div class=\"ion-padding\">\r\n  <ion-button expand=\"block\" fill=\"link\" size=\"small\" color=\"danger\" (click)=\"confirmLogout()\"><ion-text color=\"danger\">Keluar akun</ion-text></ion-button>\r\n  </div> -->\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "mjr7":
    /*!***************************************************!*\
      !*** ./src/app/tab-setting/tab-setting.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function mjr7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0px;\n  cursor: pointer;\n}\n\nion-card-content {\n  min-height: 120px;\n}\n\n.menu-setting p {\n  font-size: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYi1zZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFFQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKIiwiZmlsZSI6InRhYi1zZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgLy8gcGFkZGluZzogMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4ubWVudS1zZXR0aW5nIHAge1xyXG4gICAgZm9udC1zaXplOiA3NSU7XHJcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab-setting-tab-setting-module-es5.js.map