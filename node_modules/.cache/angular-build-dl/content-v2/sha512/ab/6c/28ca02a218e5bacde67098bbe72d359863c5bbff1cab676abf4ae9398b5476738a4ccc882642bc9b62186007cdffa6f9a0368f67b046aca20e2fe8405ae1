(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-pos-tab-pos-module"], {
    /***/
    "8T+6":
    /*!*******************************************!*\
      !*** ./src/app/tab-pos/tab-pos.module.ts ***!
      \*******************************************/

    /*! exports provided: TabPosPageModule */

    /***/
    function T6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabPosPageModule", function () {
        return TabPosPageModule;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab_pos_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab-pos.page */
      "pEsS");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab_pos_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab-pos-routing.module */
      "q0oG");

      var TabPosPageModule = /*#__PURE__*/_createClass(function TabPosPageModule() {
        _classCallCheck(this, TabPosPageModule);
      });

      TabPosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab_pos_routing_module__WEBPACK_IMPORTED_MODULE_7__["TabPosPageRoutingModule"]],
        declarations: [_tab_pos_page__WEBPACK_IMPORTED_MODULE_5__["TabPosPage"]]
      })], TabPosPageModule);
      /***/
    },

    /***/
    "pEsS":
    /*!*****************************************!*\
      !*** ./src/app/tab-pos/tab-pos.page.ts ***!
      \*****************************************/

    /*! exports provided: TabPosPage */

    /***/
    function pEsS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabPosPage", function () {
        return TabPosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab_pos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab-pos.page.html */
      "shFE");
      /* harmony import */


      var _tab_pos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab-pos.page.scss */
      "zeDb");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/native-page-transitions/ngx */
      "CicV");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "WdVq");
      /* harmony import */


      var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/native-audio/ngx */
      "fLLL");

      var App = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"].App;
      var PushNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"].PushNotifications;

      var TabPosPage = /*#__PURE__*/function () {
        function TabPosPage(storage, http, global, loadingController, router, nativePageTransitions, platform, menu, alertController, barcodeScanner, route, nativeAudio) {
          var _this = this;

          _classCallCheck(this, TabPosPage);

          this.storage = storage;
          this.http = http;
          this.global = global;
          this.loadingController = loadingController;
          this.router = router;
          this.nativePageTransitions = nativePageTransitions;
          this.platform = platform;
          this.menu = menu;
          this.alertController = alertController;
          this.barcodeScanner = barcodeScanner;
          this.route = route;
          this.nativeAudio = nativeAudio;
          this.company = {
            name: ""
          };
          this.totalAmount = 0;
          this.totalQty = 0;
          this.category = [];
          this.storageCategory = [];
          this.product = [];
          this.productSearch = [];
          this.storageProduct = [];
          this.outlet = [];
          this.storageOutlet = [];
          this.cart = [];
          this.orderType = "none";
          this.orderTypeLabel = "none";
          this.activeOutlet = {
            id: "",
            name: "",
            expired_at: "",
            status: ""
          };
          this.offline = false;
          this.showContent = false;
          this.user = {
            name: "",
            level: ""
          };
          this.showUser = false;
          this.notificationContent = {
            notification: {
              data: {
                entity_name: "",
                id: ""
              }
            }
          };
          this.route.params.subscribe(function (params) {
            if (params["source"]) {
              if (params["source"] == "login") {
                _this.initialize();
              }

              if (params["source"] == "register") {
                _this.initialize();
              }
            }
          });
        }

        _createClass(TabPosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            console.log("Initializing POS"); // Request permission to use push notifications
            // iOS will prompt user and return if they granted permission or not
            // Android will just grant without prompting

            PushNotifications.requestPermission().then(function (result) {
              if (result.granted) {
                // Register with Apple / Google to receive push via APNS/FCM
                PushNotifications.register();
              } else {// Show some error
              }
            });
            PushNotifications.addListener("registration", function (token) {
              console.log("Push registration success, token: " + token.value);
            });
            PushNotifications.addListener("registrationError", function (error) {
              console.log("Error on registration: " + JSON.stringify(error));
            });
            PushNotifications.addListener("pushNotificationReceived", function (notification) {
              console.log("Push received: " + JSON.stringify(notification));
            });
            PushNotifications.addListener("pushNotificationActionPerformed", function (notification) {
              console.log("Push action performed: " + JSON.stringify(notification));
              _this2.notificationContent = notification;

              if (_this2.notificationContent.notification.data.entity_name == "order_detail") {
                _this2.router.navigate(["/tabs/tab-order/notification/" + _this2.notificationContent.notification.data.id]); // setTimeout(() => {
                //   this.router.navigate(['/orders-detail/'+this.notificationContent.notification.data.id]);
                // }, 2000);

              }
            });
          }
        }, {
          key: "filterList",
          value: function filterList(evt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var searchTerm;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.productSearch = this.product;
                    searchTerm = evt.srcElement.value;

                    if (searchTerm) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return");

                  case 4:
                    this.productSearch = this.productSearch.filter(function (current) {
                      if (current.product.name && searchTerm) {
                        return current.product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                      }
                    });
                    console.log(this.productSearch);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addOne",
          value: function addOne(item) {
            var checkItemExist = this.cart.findIndex(function (x) {
              return x.id === item.id;
            });

            if (checkItemExist == -1) {
              this.cart.push({
                id: item.id,
                qty: 1,
                name: item.name,
                cost: item.cost,
                price: item.price,
                note: ""
              });
            } else {
              this.cart[checkItemExist].qty++;
            }

            this.totalAmount += item.price;
            this.totalQty++;
            console.log(this.cart);
          }
        }, {
          key: "removeOne",
          value: function removeOne(item) {
            var checkItemExist = this.cart.findIndex(function (x) {
              return x.id === item.id;
            });

            if (checkItemExist == -1) {// nothing
            } else {
              this.cart[checkItemExist].qty--;
              this.totalAmount -= item.price;
              this.totalQty--;

              if (this.cart[checkItemExist].qty == 0) {
                this.cart.splice(checkItemExist, 1);
              }

              console.log(checkItemExist);
            }
          }
        }, {
          key: "recalculate",
          value: function recalculate() {
            this.totalAmount = 0;
            this.totalQty = 0;

            var _iterator = _createForOfIteratorHelper(this.cart),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var i = _step.value;
                var subtotal = parseInt(i.price) * parseFloat(i.qty);
                this.totalAmount += subtotal;
                this.totalQty += parseFloat(i.qty);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "editDetail",
          value: function editDetail(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this3 = this;

              var thisCart, alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    thisCart = this.cart.findIndex(function (cart) {
                      return cart.id == item.id;
                    });
                    _context2.next = 3;
                    return this.alertController.create({
                      cssClass: "my-custom-class",
                      header: this.cart[thisCart].name,
                      inputs: [{
                        name: "qty",
                        type: "number",
                        id: "qty",
                        value: this.cart[thisCart].qty,
                        placeholder: "Qty"
                      }, {
                        name: "note",
                        id: "note",
                        value: this.cart[thisCart].note,
                        type: "textarea",
                        placeholder: "Catatan"
                      }],
                      buttons: [{
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler() {
                          console.log("Confirm Cancel");
                        }
                      }, {
                        text: "Ok",
                        handler: function handler(data) {
                          _this3.cart[thisCart].qty = data.qty;
                          _this3.cart[thisCart].note = data.note;

                          _this3.recalculate();

                          console.log("Confirm Ok");
                        }
                      }]
                    });

                  case 3:
                    alert = _context2.sent;
                    _context2.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "scanBarcode",
          value: function scanBarcode() {
            var _this4 = this;

            this.barcodeScanner.scan().then(function (barcodeData) {
              var findIndex = _this4.product.findIndex(function (x) {
                return x.product.sku === barcodeData.text;
              });

              if (findIndex > -1) {
                _this4.addOne(_this4.product[findIndex].product);

                _this4.global.toastPresent(_this4.product[findIndex].product.name + " telah ditambahkan!");
              } else {
                _this4.global.toastPresent("Tidak ditemukan produk dengan kode " + barcodeData.text);
              }

              console.log(barcodeData);
            })["catch"](function (err) {
              console.log("Error", err);
            });
          }
        }, {
          key: "clearAll",
          value: function clearAll() {
            this.cart = [];
            this.totalAmount = 0;
            this.totalQty = 0;
          }
        }, {
          key: "showPerItemCart",
          value: function showPerItemCart(id) {
            var checkItemExist = this.cart.findIndex(function (x) {
              return x.id === id;
            });

            if (checkItemExist == -1) {
              return 0;
            } else {
              return this.cart[checkItemExist].qty;
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.initialize();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            var _this5 = this;

            this.storage.removeItem("pos_order_type");
            this.orderType = "none";
            this.orderTypeLabel = "none";
            this.menu.close("first");
            this.showContent = false;
            this.storage.getObject("auth").then(function (auth) {
              _this5.auth = auth;

              _this5.storage.getObject("user").then(function (user) {
                var thisUser = user;
                _this5.user = user;
                _this5.name = thisUser.name;
                _this5.level = thisUser.level;
                _this5.showUser = true;
                console.log("ini user", _this5.user.name);

                _this5.clearAll();

                _this5.getOfflineCategory();

                _this5.getOfflineOutlet();

                _this5.getOfflineCompany();

                _this5.getOfflineProduct();

                _this5.getData();
              });
            });
            var options = {
              direction: "up",
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
        }, {
          key: "getData",
          value: function getData() {
            var _this6 = this;

            this.storage.getObject("auth").then(function (auth) {
              var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + _this6.auth.token
              });
              var options = {
                headers: reqHeader
              };

              _this6.http.post(_this6.global.base_url + "auth/category/list", null, options).subscribe(function (data) {
                console.log(data);

                if (data.status == 0) {
                  _this6.storage.setObject("category", data.category);

                  _this6.category = data.category;

                  _this6.getDataCompany();

                  _this6.getDataOutlet();

                  _this6.offline = false;
                  console.log(data);
                } else {
                  console.log(data);
                }
              }, function (error) {
                _this6.offline = true;
                console.log(error);
              });
            });
          }
        }, {
          key: "getDataProduct",
          value: function getDataProduct() {
            var _this7 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            var postData = {
              outlet_id: this.activeOutlet.id
            };
            this.http.post(this.global.base_url + "auth/product/list_per_outlet", postData, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                var products = data.product.filter(function (product) {
                  return product.product != null;
                });

                _this7.storage.setObject("product", products);

                _this7.product = products;
                _this7.productSearch = _this7.product;

                if (_this7.product.length > 0) {
                  _this7.showPOS = true;
                } else {
                  _this7.showPOS = false;
                }

                console.log(data);
                _this7.showContent = true;
              } else {
                console.log(data);
              }

              _this7.showContent = true;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getDataOutlet",
          value: function getDataOutlet() {
            var _this8 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + "auth/outlet/list/active", null, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this8.storage.setObject("outlet", data.outlet);

                _this8.outlet = data.outlet.filter(function (outlet) {
                  return outlet.outlet.status === "Active";
                });

                _this8.getActiveOutlet();

                console.log(data);
              } else {
                console.log(data);
              }

              _this8.showContent = true;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getDataCompany",
          value: function getDataCompany() {
            var _this9 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + "auth/company", null, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this9.storage.setObject("company", data.company);

                _this9.company = data.company;
                console.log(data);
              } else {
                console.log(data);
              }

              _this9.showContent = true;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getOfflineCategory",
          value: function getOfflineCategory() {
            var _this10 = this;

            this.storage.getObject("category").then(function (data) {
              if (data != null) {
                _this10.storageCategory = data;
                _this10.category = _this10.storageCategory;

                _this10.getOfflineProduct();
              }

              console.log(data);
            });
          }
        }, {
          key: "getOfflineProduct",
          value: function getOfflineProduct() {
            var _this11 = this;

            this.storage.getObject("product").then(function (data) {
              if (data != null) {
                _this11.storageProduct = data;
                _this11.product = _this11.storageProduct;
                _this11.productSearch = _this11.product;

                if (_this11.product.length > 0) {
                  _this11.showPOS = true;
                } else {
                  _this11.showPOS = false;
                }

                _this11.showContent = true;
              }

              console.log(data);
            });
          }
        }, {
          key: "getOfflineOutlet",
          value: function getOfflineOutlet() {
            var _this12 = this;

            this.storage.getObject("outlet").then(function (data) {
              if (data != null) {
                _this12.storageOutlet = data;
                _this12.outlet = _this12.storageOutlet.filter(function (outlet) {
                  return outlet.outlet.status === "Active";
                });

                _this12.getActiveOutlet();
              }

              console.log("Offline outlet", data);
            });
          }
        }, {
          key: "getOfflineCompany",
          value: function getOfflineCompany() {
            var _this13 = this;

            this.storage.getObject("company").then(function (data) {
              if (data != null) {
                _this13.storageCompany = data;
                _this13.company = _this13.storageCompany;

                _this13.checkExpiredAccount();
              }

              console.log(data);
            });
          }
        }, {
          key: "getActiveOutlet",
          value: function getActiveOutlet() {
            var _this14 = this;

            this.storage.getObject("outlet_active").then(function (data) {
              if (data != null) {
                var indexActive = _this14.outlet.findIndex(function (x) {
                  return x.outlet.id === data.id;
                });

                console.log("index", indexActive);

                _this14.storage.setObject("outlet_active", _this14.outlet[indexActive].outlet);

                _this14.activeOutlet = _this14.outlet[indexActive].outlet;

                _this14.checkExpiredAccount();

                _this14.getDataProduct();

                console.log("A", data);
              } else {
                _this14.activeOutlet = _this14.outlet[0].outlet;

                _this14.storage.setObject("outlet_active", _this14.activeOutlet);

                _this14.checkExpiredAccount();

                console.log("B", data);
              }
            });
          }
        }, {
          key: "changeOutlet",
          value: function changeOutlet(outlet) {
            this.activeOutlet = outlet;
            this.storage.setObject("outlet_active", this.activeOutlet);
            this.checkExpiredAccount();
            this.global.toastPresent("Outlet <strong>" + outlet.name + "</strong> aktif!");
            this.menu.close("first");
            this.ionViewWillEnter();
          }
        }, {
          key: "getProductByCategory",
          value: function getProductByCategory(category_id) {
            var filterArray = this.productSearch.filter(function (x) {
              return x.product.category_id === category_id;
            });
            return filterArray;
          }
        }, {
          key: "showModal",
          value: function showModal(item) {
            alert(item);
          }
        }, {
          key: "presentLoading",
          value: function presentLoading(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var loading;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingController.create({
                      cssClass: "my-custom-class",
                      message: message,
                      duration: 300,
                      mode: "ios"
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "process",
          value: function process() {
            this.storage.removeItem("pos_booking");
            this.storage.removeItem("pos_discount");
            this.storage.setObject("pos_cart", this.cart);
            var pos_subtotal = {
              amount: this.totalAmount,
              qty: this.totalQty
            };
            var pos_order_type = {
              order_type: this.orderType,
              order_type_label: this.orderTypeLabel
            };
            this.storage.setObject("pos_subtotal", pos_subtotal);
            this.storage.setObject("pos_order_type", pos_order_type);
            var options = {
              direction: "left",
              duration: 300,
              slowdownfactor: 0,
              slidePixels: 0,
              iosdelay: 0,
              androiddelay: 0,
              fixedPixelsTop: 0,
              fixedPixelsBottom: 0
            };
            this.nativePageTransitions.slide(options);
            this.router.navigate(["/payment-options"]);
          }
        }, {
          key: "save",
          value: function save() {
            this.storage.setObject("pos_cart", this.cart);
            var pos_subtotal = {
              amount: this.totalAmount,
              qty: this.totalQty
            };
            var pos_order_type = {
              order_type: this.orderType,
              order_type_label: this.orderTypeLabel
            };
            this.storage.setObject("pos_subtotal", pos_subtotal);
            this.storage.setObject("pos_order_type", pos_order_type);
            var options = {
              direction: "left",
              duration: 300,
              slowdownfactor: 0,
              slidePixels: 0,
              iosdelay: 0,
              androiddelay: 0,
              fixedPixelsTop: 0,
              fixedPixelsBottom: 0
            };
            this.nativePageTransitions.slide(options);
            this.router.navigate(["/booking-options"]);
          }
        }, {
          key: "openMenuLeft",
          value: function openMenuLeft() {
            this.menu.enable(true, "first");
            this.menu.open("first");
          }
        }, {
          key: "checkExpiredAccount",
          value: function checkExpiredAccount() {
            var _this15 = this;

            if (this.company["package"] == "Premium") {
              this.storage.getObject("user").then(function (data) {
                if (data != null) {
                  _this15.user = data.user;
                  console.log("exp " + _this15.activeOutlet.expired_at);

                  if (_this15.activeOutlet.expired_at < _this15.global.getDateOnlyNow()) {
                    console.log("expired");

                    if (data.level == "Owner") {
                      _this15.router.navigate(["/outlet"]);

                      _this15.global.toastPresent("masa berlaku paket sudah habis, silahkan lakukan pembelian paket berlangganan!");
                    } else {
                      _this15.router.navigate(["/inactive"]);
                    }
                  }
                }

                console.log(data);
              });
            } else if (this.company["package"] == "Lite") {
              console.log("Lite");
            }
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {}
        }, {
          key: "syncOnlineData",
          value: function syncOnlineData() {}
        }, {
          key: "confirmLogout",
          value: function confirmLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this16 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      cssClass: "my-custom-class",
                      header: "Konfirmasi",
                      message: 'Yakin untuk keluar dari akun Anda?   <br/> <br/> Perhatian : <br/> <span style="color:red">harap lakukan sinkronisasi data order terlebih dahulu, data offline akan dihapus saat Anda keluar akun!</span>',
                      buttons: [{
                        text: "Sinkronkan data!",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler(blah) {
                          _this16.router.navigate(["/tabs/tab-order"]);
                        }
                      }, {
                        text: "Keluar",
                        handler: function handler() {
                          _this16.logout();

                          console.log("Confirm logout");
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "setPrice",
          value: function setPrice() {
            var _this17 = this;

            var thisTemp = this.product;
            this.productSearch = this.product;

            if (this.orderType == "none") {
              if (this.orderType == "none") {
                this.storage.getObject("product").then(function (product) {
                  _this17.product = product;
                  _this17.productSearch = _this17.product;
                });
                this.orderTypeLabel == "none";
              }
            } else {
              for (var i = 0; i < thisTemp.length; i++) {
                if (this.orderType == 1) {
                  thisTemp[i].product.price = this.product[i].product.price_type1;
                  this.orderTypeLabel = this.company.order_type_label1;
                }

                if (this.orderType == 2) {
                  thisTemp[i].product.price = this.product[i].product.price_type2;
                  this.orderTypeLabel = this.company.order_type_label2;
                }

                if (this.orderType == 3) {
                  thisTemp[i].product.price = this.product[i].product.price_type3;
                  this.orderTypeLabel = this.company.order_type_label3;
                }

                if (this.orderType == 4) {
                  thisTemp[i].product.price = this.product[i].product.price_type4;
                  this.orderTypeLabel = this.company.order_type_label4;
                }

                if (this.orderType == 5) {
                  thisTemp[i].product.price = this.product[i].product.price_type5;
                  this.orderTypeLabel = this.company.order_type_label5;
                }
              }
            }

            this.clearAll();
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this18 = this;

            this.menu.close("first");
            this.storage.clear().then(function () {
              _this18.router.navigate(["/launcher"]).then(function () {
                _this18.router.navigate(["/login"]);
              });
            });
          }
        }]);

        return TabPosPage;
      }();

      TabPosPage.ctorParameters = function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_11__["BarcodeScanner"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_12__["NativeAudio"]
        }];
      };

      TabPosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-tab-pos",
        template: _raw_loader_tab_pos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab_pos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TabPosPage);
      /***/
    },

    /***/
    "q0oG":
    /*!***************************************************!*\
      !*** ./src/app/tab-pos/tab-pos-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: TabPosPageRoutingModule */

    /***/
    function q0oG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabPosPageRoutingModule", function () {
        return TabPosPageRoutingModule;
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


      var _tab_pos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab-pos.page */
      "pEsS");

      var routes = [{
        path: '',
        component: _tab_pos_page__WEBPACK_IMPORTED_MODULE_3__["TabPosPage"]
      }];

      var TabPosPageRoutingModule = /*#__PURE__*/_createClass(function TabPosPageRoutingModule() {
        _classCallCheck(this, TabPosPageRoutingModule);
      });

      TabPosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabPosPageRoutingModule);
      /***/
    },

    /***/
    "shFE":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-pos/tab-pos.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function shFE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-menu\r\n  side=\"start\"\r\n  menuId=\"first\"\r\n  contentId=\"main\"\r\n  mode=\"ios\"\r\n  swipe-gesture=\"true\"\r\n>\r\n  <ion-content id=\"main\">\r\n    <div class=\"ion-padding\">\r\n      <ion-text color=\"primary\">{{company.name}}</ion-text>\r\n    </div>\r\n    <ion-item button color=\"primary\" detail=\"false\">\r\n      <ion-icon name=\"storefront-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n      <ion-label>{{activeOutlet.name}}</ion-label>\r\n      <ion-note slot=\"end\">Aktif</ion-note>\r\n    </ion-item>\r\n    <ion-item-divider>\r\n      <small>Daftar outlet</small>\r\n    </ion-item-divider>\r\n\r\n    <ion-item\r\n      *ngFor=\"let item of outlet\"\r\n      class=\"clickable ion-clickable\"\r\n      (click)=\"changeOutlet(item.outlet)\"\r\n      button\r\n    >\r\n      <ion-icon name=\"storefront-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n      <ion-label><small>{{item.outlet.name}}</small></ion-label>\r\n    </ion-item>\r\n  </ion-content>\r\n  <ion-footer mode=\"ios\" class=\"ion-padding\" *ngIf=\"showContent\">\r\n    <div class=\"ion-text-center\" *ngIf=\"showUser\">{{name}} ({{level}})</div>\r\n    <ion-button\r\n      size=\"small\"\r\n      color=\"danger\"\r\n      expand=\"block\"\r\n      fill=\"link\"\r\n      (click)=\"confirmLogout()\"\r\n      ><ion-icon name=\"power-outline\" slot=\"start\"></ion-icon>\r\n      <ion-text color=\"danger\">Keluar dari akun</ion-text></ion-button\r\n    >\r\n  </ion-footer>\r\n</ion-menu>\r\n\r\n<ion-header mode=\"ios\">\r\n  <div class=\"product-content\">\r\n    <ion-item color=\"danger\" *ngIf=\"offline\">\r\n      <div class=\"ion-text-center\">Anda dalam mode Offline</div>\r\n    </ion-item>\r\n    <ion-toolbar color=\"light\">\r\n      <ion-buttons slot=\"start\" style=\"margin-top: 10px; margin-left: 15px\">\r\n        <ion-button size=\"small\" (click)=\"openMenuLeft()\"\r\n          ><ion-icon name=\"storefront-outline\"></ion-icon\r\n        ></ion-button>\r\n      </ion-buttons>\r\n\r\n      <ion-searchbar\r\n        class=\"search-pos\"\r\n        (ionInput)=\"filterList($event)\"\r\n        placeholder=\"Cari di outlet {{activeOutlet.name}}\"\r\n      ></ion-searchbar>\r\n\r\n      <ion-buttons slot=\"end\" style=\"margin-top: 10px\">\r\n        <ion-select\r\n          interface=\"popover\"\r\n          class=\"type-order-tab\"\r\n          [(ngModel)]=\"orderType\"\r\n          (ionChange)=\"setPrice()\"\r\n        >\r\n          <ion-select-option value=\"none\">- Jenis pesanan -</ion-select-option>\r\n          <ion-select-option *ngIf=\"company.order_type1\" value=\"1\"\r\n            >{{company.order_type_label1}}</ion-select-option\r\n          >\r\n          <ion-select-option *ngIf=\"company.order_type2\" value=\"2\"\r\n            >{{company.order_type_label2}}</ion-select-option\r\n          >\r\n          <ion-select-option *ngIf=\"company.order_type3\" value=\"3\"\r\n            >{{company.order_type_label3}}</ion-select-option\r\n          >\r\n          <ion-select-option *ngIf=\"company.order_type4\" value=\"4\"\r\n            >{{company.order_type_label4}}</ion-select-option\r\n          >\r\n          <ion-select-option *ngIf=\"company.order_type5\" value=\"5\"\r\n            >{{company.order_type_label5}}</ion-select-option\r\n          >\r\n        </ion-select>\r\n\r\n        <ion-button size=\"small\" (click)=\"scanBarcode()\"\r\n          ><ion-icon name=\"scan-outline\"></ion-icon\r\n        ></ion-button>\r\n        <ion-button size=\"small\" [routerLink]=\"['/booking']\"\r\n          ><ion-icon name=\"save-outline\"></ion-icon\r\n        ></ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-item lines=\"full\" color=\"primary\" class=\"type-order-mobile\">\r\n      <ion-label color=\"light\">Jenis pesanan</ion-label>\r\n      <ion-select\r\n        interface=\"popover\"\r\n        [(ngModel)]=\"orderType\"\r\n        (ionChange)=\"setPrice()\"\r\n      >\r\n        <ion-select-option value=\"none\">-</ion-select-option>\r\n        <ion-select-option *ngIf=\"company.order_type1\" value=\"1\"\r\n          >{{company.order_type_label1}}</ion-select-option\r\n        >\r\n        <ion-select-option *ngIf=\"company.order_type2\" value=\"2\"\r\n          >{{company.order_type_label2}}</ion-select-option\r\n        >\r\n        <ion-select-option *ngIf=\"company.order_type3\" value=\"3\"\r\n          >{{company.order_type_label3}}</ion-select-option\r\n        >\r\n        <ion-select-option *ngIf=\"company.order_type4\" value=\"4\"\r\n          >{{company.order_type_label4}}</ion-select-option\r\n        >\r\n        <ion-select-option *ngIf=\"company.order_type5\" value=\"5\"\r\n          >{{company.order_type_label5}}</ion-select-option\r\n        >\r\n      </ion-select>\r\n    </ion-item>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" *ngIf=\"showPOS && showContent\">\r\n  <div class=\"product-content\">\r\n    <div class=\"list\">\r\n      <ion-item-group *ngFor=\"let catItem of category\">\r\n        <ion-item-divider\r\n          color=\"light\"\r\n          *ngIf=\"getProductByCategory(catItem.id).length > 0\"\r\n        >\r\n          <ion-label>{{catItem.name}}</ion-label>\r\n        </ion-item-divider>\r\n        <ion-item-sliding *ngFor=\"let item of getProductByCategory(catItem.id)\">\r\n          <ion-item lines=\"full\" button detail=\"false\" class=\"no-hover\">\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"{{item.product.image}}\" *ngIf=\"!offline\" />\r\n              <div class=\"text-avatar\" *ngIf=\"offline\">\r\n                {{item.product.name.charAt(0).toUpperCase()}}\r\n              </div>\r\n            </ion-avatar>\r\n            <ion-label\r\n              (click)=\"addOne(item.product)\"\r\n              class=\"ion-text-wrap\"\r\n              style=\"line-height: 14px\"\r\n              >{{item.product.name}}<br />\r\n              <small>\r\n                <ion-note color=\"primary\"\r\n                  >{{global.currency(item.product.price)}}\r\n                  <ion-text *ngIf=\"item.product.unit != null\">\r\n                    / {{item.product.unit.suffix}}</ion-text\r\n                  ></ion-note\r\n                ><br />\r\n                <ion-note *ngIf=\"item.product.track_stock == 1\" color=\"dark\"\r\n                  >Stok: {{item.stock}}</ion-note\r\n                >\r\n              </small>\r\n            </ion-label>\r\n\r\n            <ion-note\r\n              slot=\"end\"\r\n              color=\"primary\"\r\n              style=\"text-align: right; padding-top: 5px\"\r\n            >\r\n              <div\r\n                style=\"\r\n                  display: inline-block;\r\n                  width: 36px;\r\n                  height: 20px;\r\n                  text-align: center;\r\n                \"\r\n              >\r\n                <ion-icon\r\n                  name=\"remove-circle-outline\"\r\n                  color=\"primary\"\r\n                  style=\"font-size: 26px\"\r\n                  (click)=\"removeOne(item.product)\"\r\n                ></ion-icon>\r\n              </div>\r\n              <div\r\n                style=\"\r\n                  display: inline-block;\r\n                  width: 36px;\r\n                  height: 20px;\r\n                  text-align: center;\r\n                  color: #333;\r\n                \"\r\n              >\r\n                <p style=\"font-size: 14px; line-height: 8px\">\r\n                  {{showPerItemCart(item.product.id)}}<br />&nbsp;\r\n                </p>\r\n              </div>\r\n              <div\r\n                style=\"\r\n                  display: inline-block;\r\n                  width: 36px;\r\n                  height: 20px;\r\n                  text-align: center;\r\n                \"\r\n              >\r\n                <ion-icon\r\n                  name=\"add-circle-outline\"\r\n                  color=\"primary\"\r\n                  style=\"font-size: 26px\"\r\n                  (click)=\"addOne(item.product)\"\r\n                ></ion-icon>\r\n              </div>\r\n              <ion-icon\r\n                *ngIf=\"showPerItemCart(item.product.id) > 0\"\r\n                style=\"font-size: 26px\"\r\n                name=\"create-outline\"\r\n                (click)=\"editDetail(item.product)\"\r\n              ></ion-icon>\r\n              <ion-icon\r\n                *ngIf=\"showPerItemCart(item.product.id) < 1\"\r\n                style=\"font-size: 26px\"\r\n                name=\"create-outline\"\r\n                color=\"light\"\r\n              ></ion-icon>\r\n            </ion-note>\r\n\r\n            <!-- <ion-note slot=\"end\"><small>{{showPerItemCart(item.id)}}</small></ion-note> -->\r\n          </ion-item>\r\n          <!-- <ion-item-options side=\"end\">\r\n      <ion-item-option color=\"light\" (click)=\"notes(item)\"><ion-icon name=\"list-outline\"></ion-icon></ion-item-option>\r\n    </ion-item-options> -->\r\n        </ion-item-sliding>\r\n      </ion-item-group>\r\n    </div>\r\n    <div class=\"grid\">\r\n      <div\r\n        class=\"item-product\"\r\n        (click)=\"addOne(item.product)\"\r\n        *ngFor=\"let item of productSearch\"\r\n      >\r\n        <div class=\"image\">\r\n          <img src=\"{{item.product.image}}\" *ngIf=\"!offline\" />\r\n          <div class=\"grid-text-avatar\" *ngIf=\"offline\">\r\n            {{item.product.name.charAt(0).toUpperCase()}}{{item.product.name.charAt(1).toUpperCase()}}\r\n          </div>\r\n        </div>\r\n        <div class=\"label\">\r\n          {{item.product.name}}<br />\r\n          <ion-text color=\"primary\"\r\n            >{{global.currency(item.product.price)}}</ion-text\r\n          >\r\n          <br /><br />\r\n          <ion-note *ngIf=\"item.product.track_stock == 1\" class=\"ion-margin-top\"\r\n            >Stok: {{item.stock}}</ion-note\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"side-cart ion-padding\">\r\n    <div style=\"height: 50px; font-weight: bold\">\r\n      <ion-text color=\"primary\">{{company.name}}</ion-text>\r\n    </div>\r\n    <div class=\"item-list\">\r\n      <ion-list>\r\n        <ion-item-sliding *ngFor=\"let item of cart\">\r\n          <ion-item lines=\"full\">\r\n            <ion-label class=\"ion-text-wrap\">{{item.name}}</ion-label>\r\n            <!-- <ion-note slot=\"end\" color=\"primary\">{{item.qty}}</ion-note> -->\r\n            <ion-note\r\n              slot=\"end\"\r\n              color=\"primary\"\r\n              style=\"text-align: right; padding-top: 5px\"\r\n            >\r\n              <div\r\n                style=\"\r\n                  display: inline-block;\r\n                  width: 36px;\r\n                  height: 20px;\r\n                  text-align: center;\r\n                \"\r\n              >\r\n                <ion-icon\r\n                  name=\"remove-circle-outline\"\r\n                  color=\"primary\"\r\n                  style=\"font-size: 26px\"\r\n                  (click)=\"removeOne(item)\"\r\n                ></ion-icon>\r\n              </div>\r\n              <div\r\n                style=\"\r\n                  display: inline-block;\r\n                  width: 36px;\r\n                  height: 20px;\r\n                  text-align: center;\r\n                  color: #333;\r\n                \"\r\n              >\r\n                <p style=\"font-size: 14px; line-height: 8px\">\r\n                  {{item.qty}}<br />&nbsp;\r\n                </p>\r\n              </div>\r\n              <div\r\n                style=\"\r\n                  display: inline-block;\r\n                  width: 36px;\r\n                  height: 20px;\r\n                  text-align: center;\r\n                \"\r\n              >\r\n                <ion-icon\r\n                  name=\"add-circle-outline\"\r\n                  color=\"primary\"\r\n                  style=\"font-size: 26px\"\r\n                  (click)=\"addOne(item)\"\r\n                ></ion-icon>\r\n              </div>\r\n              <ion-icon\r\n                style=\"font-size: 26px\"\r\n                name=\"create-outline\"\r\n                (click)=\"editDetail(item)\"\r\n              ></ion-icon>\r\n            </ion-note>\r\n          </ion-item>\r\n\r\n          <ion-item-options side=\"end\">\r\n            <ion-item-option color=\"light\" (click)=\"removeOne(item)\"\r\n              ><ion-icon name=\"remove-outline\"></ion-icon\r\n            ></ion-item-option>\r\n            <ion-item-option color=\"light\" (click)=\"addOne(item)\">\r\n              <ion-icon name=\"add-outline\"></ion-icon\r\n            ></ion-item-option>\r\n            <ion-item-option color=\"light\" (click)=\"editDetail(item)\">\r\n              <ion-icon name=\"create-outline\"></ion-icon\r\n            ></ion-item-option>\r\n          </ion-item-options>\r\n        </ion-item-sliding>\r\n      </ion-list>\r\n    </div>\r\n\r\n    <div class=\"side-cart-footer\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\"\r\n            ><ion-button\r\n              color=\"danger\"\r\n              fill=\"outline\"\r\n              size=\"small\"\r\n              expand=\"block\"\r\n              (click)=\"clearAll()\"\r\n              ><ion-icon\r\n                color=\"danger\"\r\n                name=\"close-outline\"\r\n              ></ion-icon></ion-button\r\n          ></ion-col>\r\n          <ion-col size=\"8\"\r\n            ><ion-button\r\n              expand=\"block\"\r\n              size=\"small\"\r\n              color=\"dark\"\r\n              (click)=\"save()\"\r\n              [disabled]=\"totalAmount==0\"\r\n              ><ion-icon name=\"save-outline\" slot=\"start\"></ion-icon\r\n              >Book</ion-button\r\n            ></ion-col\r\n          >\r\n          <ion-col\r\n            ><ion-button\r\n              expand=\"block\"\r\n              color=\"primary\"\r\n              (click)=\"process()\"\r\n              [disabled]=\"totalAmount==0\"\r\n              >{{global.currency(totalAmount)}}\r\n              <ion-badge slot=\"end\">({{totalQty}})</ion-badge></ion-button\r\n            ></ion-col\r\n          >\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"showContent && !showPOS\" class=\"ion-padding\" mode=\"ios\">\r\n  <div style=\"padding: 15%; text-align: center\">\r\n    <h5>\r\n      <ion-icon size=\"large\" name=\"happy-outline\"></ion-icon> <br /><br />\r\n      Opps!!, sepertinya kamu belum punya katalog produk nih, yuk tambahkan\r\n      katalog pertama kamu sekarang\r\n      <br /><br />\r\n      <ion-button\r\n        [routerLink]=\"['/tabs/tab-catalog']\"\r\n        color=\"primary\"\r\n        fill=\"outline\"\r\n        >ke Katalog Yuk</ion-button\r\n      >\r\n    </h5>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer mode=\"ios\" *ngIf=\"showPOS\" class=\"phone-mode-footer\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"2\"\r\n        ><ion-button color=\"light\" expand=\"block\" (click)=\"clearAll()\"\r\n          ><ion-icon color=\"danger\" name=\"close-outline\"></ion-icon></ion-button\r\n      ></ion-col>\r\n      <ion-col size=\"4\"\r\n        ><ion-button\r\n          expand=\"block\"\r\n          color=\"light\"\r\n          (click)=\"save()\"\r\n          [disabled]=\"totalAmount==0\"\r\n          ><ion-icon name=\"save-outline\" slot=\"start\"></ion-icon\r\n          >Book</ion-button\r\n        ></ion-col\r\n      >\r\n      <ion-col size=\"6\"\r\n        ><ion-button\r\n          expand=\"block\"\r\n          color=\"primary\"\r\n          (click)=\"process()\"\r\n          [disabled]=\"totalAmount==0\"\r\n          >{{global.currency(totalAmount)}}\r\n          <ion-badge slot=\"end\">({{totalQty}})</ion-badge></ion-button\r\n        ></ion-col\r\n      >\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "zeDb":
    /*!*******************************************!*\
      !*** ./src/app/tab-pos/tab-pos.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function zeDb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".clickable {\n  pointer-events: auto !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.ion-margin-top {\n  font-size: 1.2em;\n  color: #000;\n}\n\n@media screen and (min-width: 720px) {\n  .product-content {\n    width: 65%;\n    float: left;\n  }\n\n  .product-content .list {\n    visibility: hidden;\n    display: none;\n  }\n\n  .product-content .grid {\n    visibility: visible;\n  }\n\n  .product-content .grid .item-product {\n    height: 220px;\n    width: 24%;\n    margin: 0.5%;\n    float: left;\n    border: 1px solid #f5f5f5;\n    cursor: pointer;\n  }\n\n  .product-content .grid .item-product .image {\n    background: #f5f5f5;\n    height: 140px;\n    overflow: hidden;\n  }\n\n  .product-content .grid .item-product .label {\n    padding: 10px;\n    text-align: center;\n    font-size: 70%;\n  }\n\n  .product-content .grid .item-product .grid-text-avatar {\n    padding: 20px;\n    padding-top: 40px;\n    font-size: 50px;\n    color: #666;\n    text-align: center;\n  }\n\n  .side-cart {\n    background-color: #f5f5f5;\n    width: 35%;\n    border-left: 2px solid #ddd;\n    height: 100%;\n    position: fixed;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    overflow: scroll;\n  }\n\n  .side-cart .item-list {\n    height: 65%;\n    overflow: scroll;\n  }\n\n  .side-cart-footer {\n    width: 100%;\n    right: 0;\n    bottom: 0;\n  }\n\n  .phone-mode-footer {\n    display: none;\n  }\n\n  .type-order-tab {\n    visibility: visible;\n    display: inherit;\n  }\n\n  .type-order-mobile {\n    visibility: hidden;\n    display: none;\n  }\n\n  .search-pos {\n    margin-top: 10px;\n    margin-left: 5px;\n    width: 300px;\n  }\n}\n\n@media screen and (max-width: 719px) {\n  .product-content {\n    width: 100%;\n    float: none;\n  }\n\n  .product-content .list {\n    visibility: visible;\n  }\n\n  .product-content .grid {\n    visibility: hidden;\n    display: none;\n  }\n\n  .side-cart {\n    visibility: hidden;\n    display: none;\n  }\n\n  .phone-mode-footer {\n    display: block;\n  }\n\n  .type-order-tab {\n    visibility: hidden;\n    display: none;\n  }\n\n  .type-order-mobile {\n    visibility: visible;\n    display: block;\n  }\n\n  .search-pos {\n    margin-top: 10px;\n    margin-left: 5px;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYi1wb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7RUFDRjs7RUFFQTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtFQUNGOztFQUVBO0lBQ0UsbUJBQUE7RUFDRjs7RUFFQTtJQUNFLGFBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7RUFDRjs7RUFFQTtJQUNFLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VBQ0Y7O0VBRUE7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VBQ0Y7O0VBRUE7SUFDRSx5QkFBQTtJQUNBLFVBQUE7SUFDQSwyQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0EsZ0JBQUE7RUFDRjs7RUFFQTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQUNGOztFQUVBO0lBQ0UsV0FBQTtJQUVBLFFBQUE7SUFDQSxTQUFBO0VBQUY7O0VBR0E7SUFDRSxhQUFBO0VBQUY7O0VBR0E7SUFDRSxtQkFBQTtJQUNBLGdCQUFBO0VBQUY7O0VBR0E7SUFDRSxrQkFBQTtJQUNBLGFBQUE7RUFBRjs7RUFHQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFdBQUE7RUFERjs7RUFJQTtJQUNFLG1CQUFBO0VBREY7O0VBSUE7SUFDRSxrQkFBQTtJQUNBLGFBQUE7RUFERjs7RUFJQTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtFQURGOztFQUlBO0lBQ0UsY0FBQTtFQURGOztFQUlBO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0VBREY7O0VBSUE7SUFDRSxtQkFBQTtJQUNBLGNBQUE7RUFERjs7RUFJQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VBREY7QUFDRiIsImZpbGUiOiJ0YWItcG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGlja2FibGUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW9uLW1hcmdpbi10b3Age1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgLnByb2R1Y3QtY29udGVudCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1jb250ZW50IC5saXN0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1jb250ZW50IC5ncmlkIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1jb250ZW50IC5ncmlkIC5pdGVtLXByb2R1Y3Qge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIHdpZHRoOiAyNCU7XHJcbiAgICBtYXJnaW46IDAuNSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1jb250ZW50IC5ncmlkIC5pdGVtLXByb2R1Y3QgLmltYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWNvbnRlbnQgLmdyaWQgLml0ZW0tcHJvZHVjdCAubGFiZWwge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtY29udGVudCAuZ3JpZCAuaXRlbS1wcm9kdWN0IC5ncmlkLXRleHQtYXZhdGFyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnNpZGUtY2FydCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RkZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcblxyXG4gIC5zaWRlLWNhcnQgLml0ZW0tbGlzdCB7XHJcbiAgICBoZWlnaHQ6IDY1JTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgfVxyXG5cclxuICAuc2lkZS1jYXJ0LWZvb3RlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLnBob25lLW1vZGUtZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAudHlwZS1vcmRlci10YWIge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICAudHlwZS1vcmRlci1tb2JpbGUge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtcG9zIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzE5cHgpIHtcclxuICAucHJvZHVjdC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1jb250ZW50IC5saXN0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1jb250ZW50IC5ncmlkIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2lkZS1jYXJ0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucGhvbmUtbW9kZS1mb290ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAudHlwZS1vcmRlci10YWIge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC50eXBlLW9yZGVyLW1vYmlsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLXBvcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab-pos-tab-pos-module-es5.js.map