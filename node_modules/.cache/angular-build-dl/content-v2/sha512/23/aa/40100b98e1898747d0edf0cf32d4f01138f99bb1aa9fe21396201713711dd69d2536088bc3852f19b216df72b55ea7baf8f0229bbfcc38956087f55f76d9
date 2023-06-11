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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-options-payment-options-module"], {
    /***/
    "PnWj":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment-options/payment-options.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PnWj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/tabs/tab-pos']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Pembayaran</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n<div class=\"payment-content\">\r\n\r\n  <div class=\"payment-column\">\r\n  <ion-list>\r\n    <ion-item lines=\"none\" mode=\"ios\" [routerLink]=\"['/select-customer/payment-options']\" color=\"light\"><small><ion-text color=\"primary\">Pelanggan</ion-text></small>\r\n      <ion-note slot=\"end\">{{customer.name}}</ion-note>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"booking.id != ''\"><small>No Booking <br/>Meja / Referensi</small>\r\n      <ion-note slot=\"end\" style=\"text-align:right;\"><small>BOOK-{{booking.book_number}} <br/>{{booking.book_ref}}</small></ion-note>\r\n    </ion-item>\r\n    <ion-item><small>Subtotal</small>\r\n\r\n      <ion-note slot=\"end\"><small>{{global.currency(subtotal)}} </small></ion-note>\r\n    </ion-item>\r\n    <ion-item button [routerLink]=\"['/select-discount/payment-options']\"><small>Diskon</small>\r\n\r\n      <ion-note slot=\"end\" color=\"primary\"><small>{{global.currency(discount.amount)}}</small></ion-note>\r\n    </ion-item>\r\n    <ion-item><small>Service Charge</small>\r\n\r\n      <ion-note slot=\"end\"><small>{{global.currency(serviceCharge)}}</small></ion-note>\r\n    </ion-item>\r\n    <ion-item><small>Pajak</small>\r\n\r\n      <ion-note slot=\"end\"><small>{{global.currency(tax)}}</small></ion-note>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n\r\n  <ion-card color=\"dark\">\r\n    <ion-card-content>\r\n      <h4 class=\"total\">{{global.currency(total)}}</h4>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  </div>\r\n\r\n  <div class=\"payment-column\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" *ngIf=\"company.payment_cash == 1\">\r\n        <ion-button expand=\"block\"  color=\"dark\" fill=\"outline\" *ngIf=\"cash\">Tunai</ion-button>\r\n        <ion-button expand=\"block\"  color=\"light\"  *ngIf=\"!cash\" (click)=\"selectcash()\">Tunai</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button expand=\"block\" color=\"dark\" fill=\"outline\" *ngIf=\"!cash\">Non Tunai</ion-button>\r\n        <ion-button expand=\"block\"  color=\"light\" *ngIf=\"cash\" (click)=\"selectcashless()\">Non Tunai</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div *ngIf=\"cash && company.payment_cash\">\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Uang diterima</ion-label>\r\n    <ion-input type=\"tel\" [(ngModel)]=\"amountReceived\" (change)=\"amountReceivedChange()\"></ion-input>\r\n\r\n  </ion-item>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(total)\" color=\"{{checkIfAmountMatch(total)}}\">Uang Pas</ion-button>\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(50000)\" color=\"{{checkIfAmountMatch(50000)}}\">{{global.currency(50000)}}</ion-button>\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(100000)\" color=\"{{checkIfAmountMatch(100000)}}\">{{global.currency(100000)}}</ion-button>\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(200000)\" color=\"{{checkIfAmountMatch(200000)}}\">{{global.currency(200000)}}</ion-button>\r\n    <ion-button color=\"light\" (click)=\"shortcutAmount(300000)\" color=\"{{checkIfAmountMatch(300000)}}\">{{global.currency(300000)}}</ion-button>\r\n\r\n  </div>\r\n\r\n  </div>\r\n  <div *ngIf=\"!cash\">\r\n    <ion-list>\r\n  <ion-radio-group [(ngModel)]=\"paymentMethodChannel\">\r\n    <ion-item *ngIf=\"company.payment_debit_card == 1\" (click)=\"openPaymentNote('Debit Card')\">\r\n      <ion-label>Kartu Debit</ion-label>\r\n      <ion-radio slot=\"start\" value=\"Debit Card\"></ion-radio>\r\n      <ion-icon name=\"card-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"company.payment_credit_card == 1\" (click)=\"openPaymentNote('Credit Card')\">\r\n      <ion-label>Kartu Kredit</ion-label>\r\n      <ion-radio slot=\"start\" value=\"Credit Card\"></ion-radio>\r\n      <ion-icon name=\"card-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"company.payment_transfer == 1\" (click)=\"openPaymentNote('Transfer Bank')\">\r\n      <ion-label>Transfer Bank</ion-label>\r\n      <ion-radio slot=\"start\" value=\"Transfer Bank\"></ion-radio>\r\n      <ion-icon name=\"enter-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"company.payment_qris == 1\">\r\n      <ion-label class=\"ion-text-wrap\">QRIS <p><small>OVO, Gopay, DANA, ShoppePay, dll</small></p></ion-label>\r\n      <ion-radio slot=\"start\" value=\"QRIS\"></ion-radio>\r\n      <ion-icon name=\"qr-code-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"company.payment_qris_online == 1\">\r\n      <ion-label class=\"ion-text-wrap\">QRIS Online <p><small>OVO, Gopay, DANA, ShoppePay, dll</small></p></ion-label>\r\n      <ion-radio slot=\"start\" value=\"QRIS Online\"></ion-radio>\r\n      <ion-icon name=\"qr-code-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-radio-group>\r\n  </ion-list>\r\n  </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n<ion-footer mode=\"ios\" class=\"ion-padding\" style=\"border-top:1px solid #ccc;\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <!-- <ion-col size=\"3\">\r\n        <ion-button [routerLink]=\"['/tabs/tab-pos']\" color=\"light\" expand=\"block\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n        </ion-button>\r\n\r\n      </ion-col> -->\r\n\r\n      <ion-col size=\"2\">\r\n        <ion-button (click)=\"openNote()\" color=\"light\" expand=\"block\">\r\n          <ion-icon name=\"document-text-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"5\">\r\n        <ion-button (click)=\"confirmToProcess('Pending')\" color=\"light\" expand=\"block\">\r\n          Bayar nanti\r\n        </ion-button>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"5\">\r\n        <ion-button (click)=\"confirmToProcess('Completed')\" color=\"primary\" expand=\"block\">\r\n          Bayar\r\n        <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "mcmO":
    /*!***********************************************************!*\
      !*** ./src/app/payment-options/payment-options.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function mcmO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".total {\n  font-size: 24px;\n  text-align: center;\n}\n\n.payment-content {\n  padding-top: 10px;\n}\n\n@media screen and (min-width: 720px) {\n  .payment-column {\n    width: 49%;\n    float: left;\n  }\n}\n\n@media screen and (max-width: 719px) {\n  .payment-column {\n    width: 100%;\n    float: none;\n  }\n}\n\n.alertClass {\n  transform: scale(1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBheW1lbnQtb3B0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFFRTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUVFO0lBQ0UsV0FBQTtJQUNBLFdBQUE7RUFGRjtBQUNGOztBQU1BO0VBRUUscUJBQUE7QUFMRiIsImZpbGUiOiJwYXltZW50LW9wdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvdGFsIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGF5bWVudC1jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgLnBheW1lbnQtY29sdW1uIHtcclxuICAgIHdpZHRoOjQ5JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzE5cHgpIHtcclxuXHJcbiAgLnBheW1lbnQtY29sdW1uIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uYWxlcnRDbGFzcyB7XHJcbiAgLy8gLS1tYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "ruGQ":
    /*!*********************************************************!*\
      !*** ./src/app/payment-options/payment-options.page.ts ***!
      \*********************************************************/

    /*! exports provided: PaymentOptionsPage */

    /***/
    function ruGQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentOptionsPage", function () {
        return PaymentOptionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_payment_options_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./payment-options.page.html */
      "PnWj");
      /* harmony import */


      var _payment_options_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./payment-options.page.scss */
      "mcmO");
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

      var PaymentOptionsPage = /*#__PURE__*/function () {
        function PaymentOptionsPage(storage, http, global, router, loadingController, platform, nativePageTransitions, alertController) {
          _classCallCheck(this, PaymentOptionsPage);

          this.storage = storage;
          this.http = http;
          this.global = global;
          this.router = router;
          this.loadingController = loadingController;
          this.platform = platform;
          this.nativePageTransitions = nativePageTransitions;
          this.alertController = alertController;
          this.company = {
            payment_cash: 1
          };
          this.discount = {
            id: "",
            name: "",
            amount: 0,
            type: "Fixed"
          };
          this.paymentNote = "";
          this.orderType = "none";
          this.orderTypeLabel = "none";
          this.customer = {
            id: "Walk-in",
            name: "Walk-in",
            phone: ""
          };
          this.paymentMethod = "Cash";
          this.paymentMethodChannel = "Cash";
          this.amountReceived = "";
          this.amountChange = 0;
          this.backButtonText = "Kembali";
          this.backButtonIcon = "arrow-back-outline";
          this.cash = true; // order

          this.order = [];
          this.storageOrder = [];
          this.booking = {
            id: ""
          };
        }

        _createClass(PaymentOptionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.booking = {
                id: ""
              };

              _this.storage.getObject("auth").then(function (auth) {
                _this.auth = auth;
              });

              _this.storage.getObject("pos_booking").then(function (data) {
                if (data != null) {
                  _this.booking = data;
                }
              });

              _this.storage.getObject("pos_customer").then(function (data) {
                if (data != null) {
                  _this.customer = data;
                  console.log(data);
                }
              });

              _this.storage.getObject("pos_cart").then(function (data) {
                if (data != null) {
                  _this.cart = data;
                }
              });

              _this.storage.getObject("pos_subtotal").then(function (data) {
                _this.totalAmount = data.amount;
                _this.subtotal = _this.totalAmount;
                _this.totalQty = data.qty;
                console.log(data);
              });

              _this.storage.getObject("pos_order_type").then(function (data) {
                _this.orderType = data.order_type;
                _this.orderTypeLabel = data.order_type_label;
              });

              _this.storage.getObject("pos_discount").then(function (data) {
                if (data != null) {
                  _this.discount = data;

                  if (data.type == "Percentage") {
                    _this.discount.amount = _this.subtotal * data.amount / 100;
                    _this.subtotalAfterDiscount = parseInt(_this.subtotal) - parseInt(_this.discount.amount);
                  } else {
                    _this.discount.amount = data.amount;
                    _this.subtotalAfterDiscount = parseInt(_this.subtotal) - parseInt(_this.discount.amount);
                  }
                } else {
                  _this.subtotalAfterDiscount = parseInt(_this.subtotal) - parseInt(_this.discount.amount);
                }

                _this.storage.getObject("company").then(function (data) {
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
            this.paymentMethod = "Cash";
            this.paymentMethodChannel = "Cash";
          }
        }, {
          key: "selectcashless",
          value: function selectcashless() {
            this.cash = false;
            this.paymentMethod = "Cashless";
            this.paymentMethodChannel = "";
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
          key: "checkIfAmountMatch",
          value: function checkIfAmountMatch(amount) {
            if (parseFloat(this.amountReceived) == amount) {
              return "primary";
            } else {
              return "light";
            }
          }
        }, {
          key: "process",
          value: function process(status) {
            var _this2 = this;

            this.storage.getObject("order").then(function (data) {
              if (data != null) {
                _this2.storageOrder = data;
                _this2.order = _this2.storageOrder;
              }

              _this2.storage.getObject("outlet_active").then(function (outlet) {
                _this2.activeOutlet = outlet;

                _this2.storage.getObject("user").then(function (user) {
                  _this2.activeUser = user;

                  _this2.processOrder(status);
                });
              });
            });
          }
        }, {
          key: "processOrder",
          value: function processOrder(status) {
            var _this3 = this;

            if (status == "Completed") {
              if (this.paymentMethodChannel == "") {
                this.global.toastPresent("Silahkan pilih channel pembayaran!");
                return false;
              }

              if (this.paymentMethod == "Cash") {
                if (this.amountReceived < this.total) {
                  this.global.toastPresent("Uang yang diterima tidak kurang dari total transaksi!");
                  return false;
                }
              } else {
                this.amountReceived = this.total;
              }
            }

            this.global.loadingPresent("memproses order...");

            if (status == "Pending") {
              this.amountReceived = 0;
              this.amountChange = 0;
              var payment = {
                method: this.paymentMethod,
                amountReceived: this.amountReceived,
                amountChange: this.amountChange
              };
            } else {
              var payment = {
                method: this.paymentMethod,
                amountReceived: this.amountReceived,
                amountChange: this.amountChange
              };
            }

            this.storage.setObject("pos_payment", payment);
            var order_id = Object(uuid__WEBPACK_IMPORTED_MODULE_10__["v4"])();
            var order_number = this.company.seq + this.global.getYear() + this.global.getMonth() + this.global.getDate() + this.global.getMathRandom();
            var order_item = [];

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
                  order_id: order_id,
                  order_number: order_number,
                  order_time: this.global.getDateNow(),
                  product_id: item.id,
                  name: item.name,
                  cost: item.cost,
                  price: item.price,
                  qty: item.qty,
                  note: item.note,
                  subtotal: subtotal,
                  status: "Completed",
                  product: product
                };
                order_item.push(tempItem);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var statusOrder = "";

            if (this.paymentMethodChannel == "QRIS Online") {
              statusOrder = "Pending";
            } else {
              statusOrder = status;
            }

            var order = {
              id: order_id,
              booking_id: this.booking.booking_id,
              order_number: order_number,
              order_time: this.global.getDateNow(),
              outlet_id: this.activeOutlet.id,
              customer: {
                id: this.customer.id,
                name: this.customer.name
              },
              customer_name: this.customer.name,
              customer_phone: this.customer.phone,
              customer_id: this.customer.id,
              user_id: this.activeUser.id,
              subtotal: this.subtotal,
              discount: this.discount.amount,
              service_charge: this.serviceCharge,
              tax: this.tax,
              total: this.total,
              order_type: this.orderType,
              order_type_label: this.orderTypeLabel,
              note: this.note,
              status: statusOrder,
              cash_collected: this.amountReceived,
              payment_method: this.paymentMethod,
              payment_channel: this.paymentMethodChannel,
              payment_note: this.paymentNote,
              order_item: order_item
            };
            this.order.unshift(order);
            this.storage.setObject("order", this.order);

            if (this.booking.booking_id != null) {
              this.storage.getObject("booking").then(function (booking) {
                var bookIndex = booking.findIndex(function (x) {
                  return x.id === _this3.booking.booking_id;
                });

                if (bookIndex >= 0) {
                  booking.splice(bookIndex, 1);

                  _this3.storage.setObject("booking", booking);
                }

                _this3.storage.getObject("booking_offline").then(function (bookingOffline) {
                  var bookOfflineIndex = bookingOffline.findIndex(function (x) {
                    return x === _this3.booking.booking_id;
                  });

                  if (bookOfflineIndex >= 0) {
                    bookingOffline.splice(bookOfflineIndex, 1);

                    _this3.storage.setObject("booking_offline", bookingOffline);
                  }
                });
              });
            } else {
              this.booking.booking_id = null;
            }

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + "auth/order/store", order, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                console.log(data);
              } else {
                console.log(data);
              }

              if (_this3.paymentMethodChannel == "QRIS Online") {
                _this3.router.navigate(["/orders-payment-qris/" + order_id]);
              } else {
                _this3.router.navigate(["/orders-detail/" + order_id + "/pos"]);
              }

              _this3.global.loadingDismiss();
            }, function (error) {
              _this3.storage.getObject("order_offline").then(function (data) {
                console.log("orderoffline", data);

                if (data == null) {
                  var tempOrderOffline = [];
                  tempOrderOffline.push(order.id);

                  _this3.storage.setObject("order_offline", tempOrderOffline);
                } else {
                  var _tempOrderOffline = data;

                  _tempOrderOffline.push(order.id);

                  _this3.storage.setObject("order_offline", _tempOrderOffline);
                }

                _this3.router.navigate(["/orders-detail/" + order_id + "/pos"]);

                _this3.global.loadingDismiss();
              });

              console.log(error);
            });
          }
        }, {
          key: "openPaymentNote",
          value: function openPaymentNote(channel) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this4 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.paymentNote = "";
                    _context.next = 3;
                    return this.alertController.create({
                      cssClass: "my-custom-class",
                      header: "Catatan pembayaran " + channel,
                      inputs: [{
                        name: "payment_note",
                        id: "payment_note",
                        type: "textarea",
                        placeholder: "Nomor kartu, nomor pembayaran"
                      }],
                      buttons: [{
                        text: "Batal",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler() {
                          console.log("Confirm Cancel");
                        }
                      }, {
                        text: "Ok",
                        handler: function handler(data) {
                          console.log("Confirm Ok");
                          _this4.paymentNote = data.payment_note;
                        }
                      }]
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openNote",
          value: function openNote() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this5 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: "alertClass",
                      header: "Catatan order",
                      inputs: [{
                        name: "note",
                        id: "note",
                        type: "textarea",
                        placeholder: "",
                        value: this.note
                      }],
                      buttons: [{
                        text: "Batal",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler() {
                          console.log("Confirm Cancel");
                        }
                      }, {
                        text: "Ok",
                        handler: function handler(data) {
                          _this5.note = data.note;
                          console.log("Confirm Ok");
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
          key: "confirmToProcess",
          value: function confirmToProcess(status) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this6 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      cssClass: "my-custom-class",
                      header: "Konfirmasi order",
                      message: "Yakin memproses order ini?",
                      buttons: [{
                        text: "Batal",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler(blah) {
                          console.log("Confirm Cancel: blah");
                        }
                      }, {
                        text: "Ok",
                        handler: function handler() {
                          console.log("Confirm Okay");

                          _this6.process(status);
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
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
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
          }
        }]);

        return PaymentOptionsPage;
      }();

      PaymentOptionsPage.ctorParameters = function () {
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }];
      };

      PaymentOptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-payment-options",
        template: _raw_loader_payment_options_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_options_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PaymentOptionsPage);
      /***/
    },

    /***/
    "sIhH":
    /*!***********************************************************!*\
      !*** ./src/app/payment-options/payment-options.module.ts ***!
      \***********************************************************/

    /*! exports provided: PaymentOptionsPageModule */

    /***/
    function sIhH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentOptionsPageModule", function () {
        return PaymentOptionsPageModule;
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


      var _payment_options_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./payment-options-routing.module */
      "w8jk");
      /* harmony import */


      var _payment_options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./payment-options.page */
      "ruGQ");

      var PaymentOptionsPageModule = /*#__PURE__*/_createClass(function PaymentOptionsPageModule() {
        _classCallCheck(this, PaymentOptionsPageModule);
      });

      PaymentOptionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payment_options_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentOptionsPageRoutingModule"]],
        declarations: [_payment_options_page__WEBPACK_IMPORTED_MODULE_6__["PaymentOptionsPage"]]
      })], PaymentOptionsPageModule);
      /***/
    },

    /***/
    "w8jk":
    /*!*******************************************************************!*\
      !*** ./src/app/payment-options/payment-options-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: PaymentOptionsPageRoutingModule */

    /***/
    function w8jk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentOptionsPageRoutingModule", function () {
        return PaymentOptionsPageRoutingModule;
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


      var _payment_options_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payment-options.page */
      "ruGQ");

      var routes = [{
        path: '',
        component: _payment_options_page__WEBPACK_IMPORTED_MODULE_3__["PaymentOptionsPage"]
      }];

      var PaymentOptionsPageRoutingModule = /*#__PURE__*/_createClass(function PaymentOptionsPageRoutingModule() {
        _classCallCheck(this, PaymentOptionsPageRoutingModule);
      });

      PaymentOptionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PaymentOptionsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=payment-options-payment-options-module-es5.js.map