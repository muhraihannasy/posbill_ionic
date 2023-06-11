(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-edit-booking-edit-module"], {
    /***/
    "9Qee":
    /*!*****************************************************!*\
      !*** ./src/app/booking-edit/booking-edit.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function Qee(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLWVkaXQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "LzDU":
    /*!***************************************************!*\
      !*** ./src/app/booking-edit/booking-edit.page.ts ***!
      \***************************************************/

    /*! exports provided: BookingEditPage */

    /***/
    function LzDU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingEditPage", function () {
        return BookingEditPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_booking_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./booking-edit.page.html */
      "nmoe");
      /* harmony import */


      var _booking_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./booking-edit.page.scss */
      "9Qee");
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


      var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/bluetooth-serial/ngx */
      "7uwA");
      /* harmony import */


      var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/native-page-transitions/ngx */
      "CicV");

      var BookingEditPage = /*#__PURE__*/function () {
        function BookingEditPage(storage, http, global, router, loadingController, platform, route, bluetoothSerial, nativePageTransitions, alertController) {
          var _this = this;

          _classCallCheck(this, BookingEditPage);

          this.storage = storage;
          this.http = http;
          this.global = global;
          this.router = router;
          this.loadingController = loadingController;
          this.platform = platform;
          this.route = route;
          this.bluetoothSerial = bluetoothSerial;
          this.nativePageTransitions = nativePageTransitions;
          this.alertController = alertController;
          this.storageBooking = [];
          this.showContent = false;
          this.disabledAnimation = false;
          this.content = '';
          this.contentWA = '';
          this.bookingOffline = [];
          this.route.params.subscribe(function (params) {
            if (params['id']) {
              _this.id = params['id'];
              _this.source = params['source'];
            }

            if (params['action']) {
              if (params['action'] == 'refresh') {
                _this.ionViewWillEnter();
              }
            }
          });
          this.bluetoothSerial.isEnabled().then(function (response) {
            var message = response.enabled ? 'enabled' : 'disabled';
            console.log("Bluetooth is ".concat(message));
          })["catch"](function () {
            console.log('Error checking bluetooth status');
          });
        }

        _createClass(BookingEditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.showContent = false;
            this.platform.ready().then(function () {
              _this2.storage.getObject('printer').then(function (printer) {
                if (printer != null) {
                  _this2.printer = printer.address;
                }
              });

              _this2.storage.getObject('booking_offline').then(function (offline) {
                if (offline != null) {
                  _this2.bookingOffline = offline;

                  _this2.checkThisOrderSync();
                }
              });

              _this2.storage.getObject('company').then(function (company) {
                _this2.company = company;
              });

              _this2.storage.getObject('outlet_active').then(function (outlet) {
                _this2.outlet = outlet;
              });

              _this2.storage.getObject('user').then(function (user) {
                _this2.user = user;
              });

              _this2.storage.getObject('auth').then(function (auth) {
                _this2.auth = auth;
              });

              _this2.storage.getObject('booking').then(function (data) {
                if (data != null) {
                  _this2.storageBooking = data;
                  console.log(_this2.storageBooking);

                  var orderIndex = _this2.storageBooking.findIndex(function (x) {
                    return x.id === _this2.id;
                  });

                  _this2.booking = _this2.storageBooking[orderIndex];
                  console.log(_this2.booking);

                  if (_this2.booking.customer == null) {
                    _this2.booking.customer = {
                      id: 'Walk-in',
                      name: 'Walk-in'
                    };
                  }

                  console.log("data all", data);
                  console.log(orderIndex);
                  _this2.showContent = true;

                  var content = "\n" + _this2.center(_this2.company.name);

                  content += "\n" + _this2.center(_this2.outlet.phone) + " \n \n";
                  content += "================================\n";
                  content += "No book   : BOOK-" + _this2.booking.book_number + "\n";
                  content += "Tanggal   : " + _this2.booking.book_time + "\n";
                  content += "Outlet    : " + _this2.outlet.name + "\n";
                  content += "Kasir     : " + _this2.user.name + "\n";
                  content += "Pelanggan : " + _this2.booking.customer.name + " \n";
                  content += "--------------------------------\n";

                  var _iterator = _createForOfIteratorHelper(_this2.booking.booking_item),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var item = _step.value;
                      content += item.product.name + " \n";
                      content += _this2.leftRight(item.price + "x" + item.qty, _this2.global.currency(_this2.subtotalItem(item.price, item.qty))) + " \n";
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  content += "--------------------------------\n";
                  content += _this2.center('No meja / referensi :') + ' \n';
                  content += _this2.center(_this2.booking.book_ref) + ' \n';
                  content += "--------------------------------\n \n";
                  content += _this2.center(_this2.company.format_receipt1) + " \n";
                  content += _this2.center(_this2.company.format_receipt2) + " \n";
                  content += "\n \n \n";
                  _this2.content = content;
                  var contentWA = "*" + _this2.company.name + "* %0a %0a"; // contentWA += "================================%0a";

                  contentWA += "No order *BOOK-" + _this2.booking.book_number + "* (" + _this2.booking.book_time + ")%0a";
                  contentWA += "Pelanggan : " + _this2.booking.customer.name + " %0a";
                  contentWA += "--------------------------------%0a";

                  var _iterator2 = _createForOfIteratorHelper(_this2.booking.booking_item),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var _item = _step2.value;
                      contentWA += _item.product.name + " %0a";
                      contentWA += _item.price + "x" + _item.qty + "=" + _this2.global.currency(_this2.subtotalItem(_item.price, _item.qty)) + " %0a";
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  contentWA += "--------------------------------%0a";
                  contentWA += "No meja / referensi : %0a";
                  contentWA += _this2.booking.book_ref + ' %0a';
                  contentWA += "--------------------------------%0a";
                  contentWA += _this2.company.format_receipt1 + "%0a";
                  contentWA += _this2.company.format_receipt2 + "%0a"; // contentWA += "\n \n \n";

                  _this2.contentWA = contentWA;
                }
              });
            });
          }
        }, {
          key: "subtotalItem",
          value: function subtotalItem(price, qty) {
            var subtotal = parseFloat(price) * parseFloat(qty);
            return subtotal;
          }
        }, {
          key: "connectToBluetoothPrinter",
          value: function connectToBluetoothPrinter() {
            //This will connect to bluetooth printer via the mac address provided
            var a = this.bluetoothSerial.connect(this.printer);
            console.log(a);
            return a;
          }
        }, {
          key: "disconnectBluetoothPrinter",
          value: function disconnectBluetoothPrinter() {
            //This will disconnect the current bluetooth connection
            return this.bluetoothSerial.disconnect();
          }
        }, {
          key: "center",
          value: function center(text) {
            var textString = String(text);
            var paperWidthChar = 31;
            var countSpace = (paperWidthChar - textString.length) / 2;
            var textResult = '';

            for (var i = 1; i <= Math.floor(countSpace); i++) {
              textResult += " ";
            }

            textResult += textString;
            return textResult;
          }
        }, {
          key: "leftRight",
          value: function leftRight(leftText, rightText) {
            var leftTextString = String(leftText);
            var rightTextString = String(rightText);
            var paperWidthChar = 31;
            var countChar = leftTextString.length + rightTextString.length;
            var countSpace = paperWidthChar - countChar;
            console.log('L', leftTextString.length);
            console.log('R', rightTextString.length);
            console.log('countChar', countChar);
            console.log('countSpace', countSpace);
            var textResult = leftTextString;

            for (var i = 1; i <= countSpace; i++) {
              textResult += " ";
            }

            textResult += rightTextString;
            return textResult;
          }
        }, {
          key: "printReceipt",
          value: function printReceipt() {
            var _this3 = this;

            this.connectToBluetoothPrinter().subscribe(function (_) {
              //2. Connected successfully
              _this3.bluetoothSerial.write(_this3.content).then(function (_) {
                //3. Print successful
                //If you want to tell user print is successful,
                //handle it here
                //4. IMPORTANT! Disconnect bluetooth after printing
                console.log(_);

                _this3.disconnectBluetoothPrinter();
              }, function (err) {
                //If there is an error printing to bluetooth printer
                //handle it here
                console.log(err);
              });
            }, function (err) {//If there is an error connecting to bluetooth printer
              //handle it here
            });
          }
        }, {
          key: "sendWAPrompt",
          value: function sendWAPrompt() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this4 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Kirim nota ke Whatsapp',
                      inputs: [{
                        name: 'phone_number',
                        type: 'tel',
                        placeholder: 'Nomor WA tujuan'
                      }],
                      buttons: [{
                        text: 'Batal',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Kirim',
                        handler: function handler(data) {
                          var numberStr = String(data.phone_number);

                          if (numberStr.charAt(0) == '0') {
                            var numberStr = numberStr.substring(0);
                            var numberStr = '62' + numberStr;
                          }

                          window.open("https://wa.me/" + numberStr + "?text=" + _this4.contentWA);
                          console.log('Confirm Ok');
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
          key: "editDetail",
          value: function editDetail(item, i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this5 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: this.booking.booking_item[i].product.name,
                      inputs: [{
                        name: 'qty',
                        type: 'number',
                        id: 'qty',
                        value: this.booking.booking_item[i].qty,
                        placeholder: 'Qty'
                      }, {
                        name: 'note',
                        id: 'note',
                        value: this.booking.booking_item[i].note,
                        type: 'textarea',
                        placeholder: 'Catatan'
                      }],
                      // message: '<ion-button (click)="deleteItem('+item.id+')"><ion-text color="danger">Hapus produk ini dari pesanan</ion-text></ion-button>',
                      buttons: [{
                        text: 'Batal',
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Simpan',
                        handler: function handler(data) {
                          _this5.global.loadingPresent('mengubah item...');

                          _this5.booking.booking_item[i].qty = data.qty;
                          _this5.booking.booking_item[i].note = data.note;
                          var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + _this5.auth.token
                          });
                          var options = {
                            headers: reqHeader
                          };
                          var postData = {
                            booking_id: _this5.id,
                            item_id: item.id,
                            qty: data.qty,
                            note: data.note
                          };

                          _this5.http.post(_this5.global.base_url + 'auth/booking/edit_item', postData, options).subscribe(function (data) {
                            console.log(data);

                            if (data.status == 0) {
                              _this5.storage.getObject('booking').then(function (storageBooking) {
                                if (storageBooking != null) {
                                  var bookingIndex = storageBooking.findIndex(function (x) {
                                    return x.id === _this5.id;
                                  });
                                  storageBooking[bookingIndex] = data.booking;

                                  _this5.storage.setObject('booking', storageBooking);

                                  _this5.global.toastPresent('Item booking berhasil disimpan!');

                                  _this5.ionViewWillEnter();
                                }
                              });
                            } else {
                              console.log(data);
                            }

                            _this5.global.loadingDismiss();
                          }, function (error) {
                            console.log(error);

                            _this5.global.loadingDismiss();
                          });

                          console.log('Confirm Ok');
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(item, i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this6 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Hapus item pesanan',
                      message: 'Yakin menghapus ' + item.product.name + ' dari pesanan ini?',
                      buttons: [{
                        text: 'Batal',
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Hapus',
                        handler: function handler(dataHandler) {
                          _this6.global.loadingPresent('menghapus item...');

                          var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + _this6.auth.token
                          });
                          var options = {
                            headers: reqHeader
                          };
                          var postData = {
                            item_id: item.id
                          };

                          _this6.http.post(_this6.global.base_url + 'auth/booking/delete_item', postData, options).subscribe(function (data) {
                            console.log(data);

                            if (data.status == 0) {
                              _this6.storage.getObject('booking').then(function (storageBooking) {
                                if (storageBooking != null) {
                                  var orderIndex = storageBooking.findIndex(function (x) {
                                    return x.id === _this6.id;
                                  });
                                  storageBooking[orderIndex] = data.booking;

                                  _this6.storage.setObject('booking', storageBooking);

                                  _this6.global.toastPresent('Item pesanan berhasil dihapus!');

                                  _this6.ionViewWillEnter();
                                }
                              });
                            } else {
                              console.log(data);
                            }

                            _this6.global.loadingDismiss();
                          }, function (error) {
                            console.log(error);

                            _this6.global.loadingDismiss();
                          });

                          console.log('Confirm Ok');
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

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
            var cart = [];
            var subtotal = 0;
            var totalQty = 0;

            var _iterator3 = _createForOfIteratorHelper(this.booking.booking_item),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;
                cart.push({
                  id: item.product.id,
                  name: item.product.name,
                  cost: item.cost,
                  price: item.price,
                  qty: item.qty,
                  note: item.note
                });
                subtotal += item.price * item.qty;
                totalQty += item.qty;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this.storage.setObject('pos_cart', cart);
            var pos_subtotal = {
              amount: subtotal,
              qty: totalQty
            };
            var pos_order_type = {
              order_type: this.booking.order_type
            };
            var pos_customer = {
              id: 'Walk-in',
              name: 'Walk-in'
            };

            if (this.booking.customer_id != null) {
              var _pos_customer = {
                id: this.booking.customer_id,
                name: this.booking.customer.name
              };
            }

            this.storage.setObject('pos_booking', {
              booking_id: this.id,
              book_number: this.booking.book_number,
              book_ref: this.booking.book_ref
            });
            this.storage.setObject('pos_subtotal', pos_subtotal);
            this.storage.setObject('pos_order_type', pos_order_type);
            this.storage.setObject('pos_customer', pos_customer);
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
            this.router.navigate(['/payment-options']);
          }
        }, {
          key: "gotoPOS",
          value: function gotoPOS() {
            var _this7 = this;

            this.disabledAnimation = true;
            this.router.navigate(['/tabs/blank']).then(function () {
              _this7.router.navigate(['/tabs/tab-pos']);
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            var options = {
              direction: 'right',
              duration: 300,
              slowdownfactor: 3,
              slidePixels: 0,
              iosdelay: 0,
              androiddelay: 0,
              fixedPixelsTop: 0,
              fixedPixelsBottom: 0
            };

            if (this.disabledAnimation == false) {
              this.nativePageTransitions.slide(options);
            }
          }
        }, {
          key: "checkThisOrderSync",
          value: function checkThisOrderSync() {
            var _this8 = this;

            var offlineIndex = this.bookingOffline.findIndex(function (y) {
              return y === _this8.id;
            });

            if (offlineIndex > -1) {
              return true;
            }
          }
        }, {
          key: "infoOffline",
          value: function infoOffline() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Info',
                      message: 'Transaksi ini belum tersinkronisasi!',
                      buttons: ['OK']
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
          key: "cancelConfirm",
          value: function cancelConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this9 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Konfirmasi hapus!',
                      message: 'Anda yakin menghapus booking ini?',
                      buttons: [{
                        text: 'Tidak',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Ya',
                        handler: function handler() {
                          _this9.cancel();
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            var _this10 = this;

            this.global.loadingPresent('menghapus booking...');
            this.storage.getObject('booking').then(function (data) {
              if (data != null) {
                var bookingIndex = data.findIndex(function (x) {
                  return x.id === _this10.id;
                });
                data.splice(bookingIndex, 1);

                _this10.storage.setObject('booking', data);

                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + _this10.auth.token
                });
                var options = {
                  headers: reqHeader
                };
                var postData = {
                  id: _this10.id
                };

                _this10.http.post(_this10.global.base_url + 'auth/booking/delete', postData, options).subscribe(function (data) {
                  console.log(data);

                  if (data.status == 0) {
                    _this10.global.toastPresent(data.message);

                    _this10.router.navigate(['/tabs/blank']).then(function () {
                      _this10.router.navigate(['/booking']);
                    }); // this.ionViewWillEnter();

                  } else {
                    console.log(data);
                  }

                  _this10.global.loadingDismiss();
                }, function (error) {
                  console.log(error);

                  _this10.global.loadingDismiss();
                });
              }
            });
          }
        }]);

        return BookingEditPage;
      }();

      BookingEditPage.ctorParameters = function () {
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_9__["BluetoothSerial"]
        }, {
          type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_10__["NativePageTransitions"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }];
      };

      BookingEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-booking-edit',
        template: _raw_loader_booking_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_booking_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BookingEditPage);
      /***/
    },

    /***/
    "ZIxT":
    /*!*************************************************************!*\
      !*** ./src/app/booking-edit/booking-edit-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: BookingEditPageRoutingModule */

    /***/
    function ZIxT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingEditPageRoutingModule", function () {
        return BookingEditPageRoutingModule;
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


      var _booking_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./booking-edit.page */
      "LzDU");

      var routes = [{
        path: '',
        component: _booking_edit_page__WEBPACK_IMPORTED_MODULE_3__["BookingEditPage"]
      }];

      var BookingEditPageRoutingModule = /*#__PURE__*/_createClass(function BookingEditPageRoutingModule() {
        _classCallCheck(this, BookingEditPageRoutingModule);
      });

      BookingEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BookingEditPageRoutingModule);
      /***/
    },

    /***/
    "cnIb":
    /*!*****************************************************!*\
      !*** ./src/app/booking-edit/booking-edit.module.ts ***!
      \*****************************************************/

    /*! exports provided: BookingEditPageModule */

    /***/
    function cnIb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingEditPageModule", function () {
        return BookingEditPageModule;
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


      var _booking_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./booking-edit-routing.module */
      "ZIxT");
      /* harmony import */


      var _booking_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./booking-edit.page */
      "LzDU");

      var BookingEditPageModule = /*#__PURE__*/_createClass(function BookingEditPageModule() {
        _classCallCheck(this, BookingEditPageModule);
      });

      BookingEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _booking_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingEditPageRoutingModule"]],
        declarations: [_booking_edit_page__WEBPACK_IMPORTED_MODULE_6__["BookingEditPage"]]
      })], BookingEditPageModule);
      /***/
    },

    /***/
    "nmoe":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking-edit/booking-edit.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function nmoe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" *ngIf=\"showContent\">\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/booking-detail/'+id+'/list']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"showContent\">Ubah BOOK-{{booking.book_number}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"infoOffline()\" fill=\"link\" *ngIf=\"checkThisOrderSync()\">\r\n        <ion-icon name=\"alert-circle-outline\" color=\"danger\" ></ion-icon>\r\n      </ion-button>\r\n      <ion-button (click)=\"cancelConfirm()\" fill=\"link\" *ngIf=\"booking.status == 'Completed' || booking.status == 'Pending'\">\r\n        <ion-icon name=\"close-circle-outline\" color=\"danger\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=\"ios\" class=\"ion-padding\" *ngIf=\"showContent\">\r\n\r\n  <ion-card>\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-list>\r\n        <ion-item lines=\"full\"><ion-label class=\"ion-text-wrap\">No booking <br/><small>{{booking.book_time}}</small></ion-label><ion-note slot=\"end\" color=\"primary\">BOOK-{{booking.book_number}}</ion-note></ion-item>\r\n        <ion-item lines=\"full\"><small>No meja /referensi</small> <ion-note slot=\"end\" color=\"primary\"><small>{{booking.book_ref}}</small></ion-note></ion-item>\r\n        <ion-item lines=\"full\"><small>Tipe pesanan</small> <ion-note slot=\"end\" color=\"primary\"><small>{{booking.order_type}}</small></ion-note></ion-item>\r\n        <ion-item lines=\"none\" [routerLink]=\"['/select-customer/booking-edit/'+id]\"><small>Pelanggan</small> <ion-note slot=\"end\" color=\"primary\"><small>{{booking.customer.name}}</small></ion-note></ion-item>\r\n        </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-list>\r\n        <ion-item  button lines=\"full\" *ngFor=\"let item of booking.booking_item; let i = index;\">\r\n          <ion-button slot=\"start\" color=\"danger\" fill=\"link\" (click)=\"deleteItem(item,i)\"><ion-icon color=\"danger\" name=\"trash-outline\"></ion-icon></ion-button>\r\n          <ion-label (click)=\"editDetail(item,i)\" class=\"ion-text-wrap\">{{item.product.name}}<small><br/>{{global.currency(item.price)}} x {{item.qty}} <br/><span style=\"color:#666\">{{item.note}}</span></small></ion-label>\r\n          <ion-note (click)=\"editDetail(item,i)\" slot=\"end\"><small>{{global.currency(subtotalItem(item.price,item.qty))}}</small></ion-note>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-button lines=\"none\" expand=\"block\" fill=\"link\" color=\"primary\" [routerLink]=\"['/select-product/booking-edit/'+id+'/'+booking.order_type]\"><ion-icon name=\"add-outline\" slot=\"start\"></ion-icon> <ion-text color=\"primary\">Tambah item</ion-text></ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content class=\"ion-no-padding\">\r\n      <ion-list>\r\n\r\n        <ion-item lines=\"none\" class=\"item-small\"><small><strong>Subtotal</strong></small><ion-note slot=\"end\" color=\"dark\"><small>{{global.currency(booking.subtotal)}}</small></ion-note></ion-item>\r\n\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\" *ngIf=\"showContent\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col *ngIf=\"booking.payment_channel == 'QRIS Online' && booking.status == 'Pending'\"><ion-button expand=\"block\" fill=\"outline\" [routerLink]=\"['/orders-payment-qris/'+id]\">\r\n        <ion-icon name=\"qr-code-outline\" slot=\"start\" ></ion-icon>\r\n         Bayar QRIS\r\n      </ion-button>\r\n      </ion-col>\r\n      <ion-col *ngIf=\"booking.status == 'Completed'\"><ion-button expand=\"block\" fill=\"outline\" (click)=\"sendWAPrompt()\">\r\n        <ion-icon name=\"arrow-redo-outline\" slot=\"start\" ></ion-icon>\r\n        Kirim Whatsapp\r\n      </ion-button>\r\n      </ion-col>\r\n\r\n\r\n\r\n      <ion-col><ion-button expand=\"block\" color=\"primary\" [routerLink]=\"['/booking-detail/'+booking.id+'/edit']\">\r\n        <ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>\r\n        Selesai\r\n      </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=booking-edit-booking-edit-module-es5.js.map