(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-booking-module"], {
    /***/
    "4p4W":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function p4W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-menu side=\"start\" menuId=\"bookingleft\" contentId=\"bookingleft\" mode=\"ios\" swipe-gesture=\"true\">\r\n\r\n  <ion-content id=\"bookingleft\">\r\n\r\n    <div class=\"ion-padding\">\r\n      <ion-text color=\"primary\">{{company.name}}</ion-text>\r\n      </div>\r\n    <ion-item button color=\"primary\" detail=\"false\">\r\n        <ion-icon name=\"storefront-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{activeOutlet.name}}</ion-label>\r\n        <ion-note slot=\"end\">Aktif</ion-note>\r\n    </ion-item>\r\n    <ion-item-divider>\r\n      <small>Daftar outlet</small>\r\n    </ion-item-divider>\r\n\r\n    <ion-item *ngFor=\"let item of outlet\" class=\"clickable ion-clickable\" (click)=\"changeOutlet(item.outlet)\" button>\r\n        <ion-icon name=\"storefront-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n        <ion-label><small>{{item.outlet.name}}</small></ion-label>\r\n    </ion-item>\r\n\r\n  </ion-content>\r\n  <ion-footer mode=\"ios\" class=\"ion-padding\" *ngIf=\"showContent\">\r\n      <div class=\"ion-text-center\" *ngIf=\"showUser\">{{name}} ({{level}})</div>\r\n      <ion-button size=\"small\" color=\"danger\" expand=\"block\" fill=\"link\" (click)=\"confirmLogout()\"><ion-icon name=\"power-outline\" slot=\"start\"></ion-icon> <ion-text color=\"danger\">Keluar dari akun</ion-text></ion-button>\r\n  </ion-footer>\r\n</ion-menu>\r\n\r\n<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"margin-top:10px;margin-left:15px;\">\r\n      <ion-button size=\"small\" (click)=\"openMenuLeft()\"><ion-icon name=\"storefront-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-searchbar style=\"margin-top:10px;margin-left:5px;\" (ionInput)=\"filterList($event)\" placeholder=\"Cari nomor booking\"></ion-searchbar>\r\n    <ion-buttons slot=\"end\" *ngIf=\"totalBookingOffline > 0\">\r\n      <ion-button color=\"danger\" fill=\"link\" (click)=\"syncUpOfflineData()\">\r\n        <ion-icon name=\"sync-outline\" slot=\"start\"></ion-icon>\r\n        <ion-badge color=\"danger\">{{totalBookingOffline}}</ion-badge></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" size-xs=\"6\" size-sm=\"5\">\r\n        <ion-item lines=\"full\">\r\n          <ion-label><small>Dari</small></ion-label>\r\n          <ion-datetime style=\"font-size:13px;\" displayFormat=\"DD-MMM-YYYY\"  pickerFormat=\"DD-MMM-YYYY\" display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"start_date\"></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" size-xs=\"6\" size-sm=\"5\">\r\n        <ion-item lines=\"full\">\r\n          <ion-label><small>Sampai</small></ion-label>\r\n          <ion-datetime style=\"font-size:13px;\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMM-YYYY\"  display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"end_date\" min=\"{{start_date}}\" (ionChange)=\"initialize()\"></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  <div style=\"margin-top:200px;text-align:center;\" *ngIf=\"!showContent\">\r\n    <ion-spinner name=\"crescent\"></ion-spinner>\r\n  </div>\r\n\r\n  <ion-list *ngIf=\"showContent\">\r\n    <ion-item *ngFor=\"let item of bookingSearch\" (click)=\"detail(item.id)\" button>\r\n      <ion-label><small><ion-text color=\"primary\">BOOK-{{item.book_number}}</ion-text>\r\n        <br/>\r\n          {{item.book_time}}</small>\r\n      </ion-label>\r\n\r\n      <ion-text slot=\"end\" color=\"dark\"><ion-icon name=\"alert-circle-outline\" color=\"danger\" *ngIf=\"checkThisOrderSync(item.id)\"></ion-icon>&nbsp;{{item.book_ref}}</ion-text>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "cYKM":
    /*!*******************************************!*\
      !*** ./src/app/booking/booking.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function cYKM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".clickable {\n  pointer-events: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsK0JBQUE7QUFDQSIsImZpbGUiOiJib29raW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGlja2FibGUge1xyXG5wb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "jRKS":
    /*!***************************************************!*\
      !*** ./src/app/booking/booking-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: BookingPageRoutingModule */

    /***/
    function jRKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingPageRoutingModule", function () {
        return BookingPageRoutingModule;
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


      var _booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./booking.page */
      "n2Uv");

      var routes = [{
        path: '',
        component: _booking_page__WEBPACK_IMPORTED_MODULE_3__["BookingPage"]
      }];

      var BookingPageRoutingModule = /*#__PURE__*/_createClass(function BookingPageRoutingModule() {
        _classCallCheck(this, BookingPageRoutingModule);
      });

      BookingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BookingPageRoutingModule);
      /***/
    },

    /***/
    "n2Uv":
    /*!*****************************************!*\
      !*** ./src/app/booking/booking.page.ts ***!
      \*****************************************/

    /*! exports provided: BookingPage */

    /***/
    function n2Uv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingPage", function () {
        return BookingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_booking_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./booking.page.html */
      "4p4W");
      /* harmony import */


      var _booking_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./booking.page.scss */
      "cYKM");
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

      var BookingPage = /*#__PURE__*/function () {
        function BookingPage(storage, http, global, router, loadingController, platform, route, nativePageTransitions, menu, alertController) {
          _classCallCheck(this, BookingPage);

          this.storage = storage;
          this.http = http;
          this.global = global;
          this.router = router;
          this.loadingController = loadingController;
          this.platform = platform;
          this.route = route;
          this.nativePageTransitions = nativePageTransitions;
          this.menu = menu;
          this.alertController = alertController;
          this.company = {
            name: ''
          };
          this.activeOutlet = {
            id: '',
            name: ''
          };
          this.bookingOffline = [];
          this.showContent = false;
          this.showUser = false;
          this.start_date = this.global.parsingDate(this.global.getFullYear() + '-' + this.global.getMonth() + '-01');
          this.end_date = this.global.getDateOnlyNow();
        }

        _createClass(BookingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.initialize();
          }
        }, {
          key: "initialize",
          value: function initialize() {
            var _this = this;

            this.showContent = false;
            this.platform.ready().then(function () {
              _this.storage.getObject('auth').then(function (data) {
                _this.auth = data;

                _this.storage.getObject('user').then(function (user) {
                  var thisUser = user;
                  _this.user = user;
                  _this.name = thisUser.name;
                  _this.level = thisUser.level;
                  _this.showUser = true;
                });
              });

              _this.storage.getObject('outlet_active').then(function (data) {
                _this.outlet = data;
              });

              _this.getOfflineCompany();

              _this.getOfflineOutlet();

              _this.storage.getObject('booking_offline').then(function (data) {
                if (data != null) {
                  _this.bookingOffline = data;
                  _this.totalBookingOffline = _this.bookingOffline.length;
                }

                _this.storage.getObject('booking').then(function (data) {
                  if (data != null) {
                    _this.storageBooking = data;

                    _this.syncUpOfflineData();
                  } else {
                    _this.syncUpOfflineData();
                  }
                });
              });
            });
          }
        }, {
          key: "getOfflineOutlet",
          value: function getOfflineOutlet() {
            var _this2 = this;

            this.storage.getObject('outlet').then(function (data) {
              if (data != null) {
                _this2.storageOutlet = data;
                _this2.outlet = _this2.storageOutlet.filter(function (outlet) {
                  return outlet.outlet.status === 'Active';
                });
              }

              console.log("Offline outlet", data);

              _this2.getActiveOutlet();
            });
          }
        }, {
          key: "getOfflineCompany",
          value: function getOfflineCompany() {
            var _this3 = this;

            this.storage.getObject('company').then(function (data) {
              if (data != null) {
                _this3.storageCompany = data;
                _this3.company = _this3.storageCompany;

                _this3.checkExpiredAccount();
              }

              console.log(data);
            });
          }
        }, {
          key: "checkExpiredAccount",
          value: function checkExpiredAccount() {
            var _this4 = this;

            this.storage.getObject('user').then(function (data) {
              if (data != null) {
                _this4.user = data.user;

                if (_this4.company.expired_at < _this4.global.getDateOnlyNow()) {
                  if (data.level == 'Owner') {
                    _this4.router.navigate(['/subscription']);

                    _this4.global.toastPresent('masa berlaku paket sudah habis, silahkan lakukan pembelian paket berlangganan!');
                  } else {
                    _this4.router.navigate(['/inactive']);
                  }
                }
              }

              console.log(data);
            });
          }
        }, {
          key: "getDataOutlet",
          value: function getDataOutlet() {
            var _this5 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + 'auth/booking/list', null, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this5.storage.setObject('outlet', data.outlet);

                _this5.outlet = data.outlet.filter(function (outlet) {
                  return outlet.outlet.status === 'Active';
                });

                _this5.getActiveOutlet();

                console.log(data);
              } else {
                console.log(data);
              }

              _this5.showContent = true;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getActiveOutlet",
          value: function getActiveOutlet() {
            var _this6 = this;

            this.storage.getObject('outlet_active').then(function (data) {
              if (data != null) {
                _this6.activeOutlet = data;
                console.log('A', data);
              } else {
                _this6.activeOutlet = _this6.outlet[0].outlet;

                _this6.storage.setObject('outlet_active', _this6.activeOutlet);

                console.log('B', data);
              }
            });
          }
        }, {
          key: "changeOutlet",
          value: function changeOutlet(outlet) {
            this.activeOutlet = outlet;
            this.storage.setObject('outlet_active', this.activeOutlet);
            this.global.toastPresent('Outlet <strong>' + outlet.name + '</strong> aktif!');
            this.initialize();
            this.menu.close('orderleft');
          }
        }, {
          key: "syncUpOfflineData",
          value: function syncUpOfflineData() {
            var _this7 = this;

            this.showContent = false;

            if (this.bookingOffline.length > 0) {
              var _iterator = _createForOfIteratorHelper(this.bookingOffline),
                  _step;

              try {
                var _loop = function _loop() {
                  var orderId = _step.value;
                  order = _this7.storageBooking.find(function (x) {
                    return x.id === orderId;
                  });
                  reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + _this7.auth.token
                  });
                  var options = {
                    headers: reqHeader
                  };

                  _this7.http.post(_this7.global.base_url + 'auth/booking/store', order, options).subscribe(function (data) {
                    console.log(data);

                    if (data.status == 0) {
                      var offlineIndex = _this7.bookingOffline.findIndex(function (y) {
                        return y === orderId;
                      });

                      _this7.bookingOffline.splice(offlineIndex, 1);

                      _this7.totalBookingOffline = _this7.bookingOffline.length;

                      _this7.storage.setObject('booking_offline', _this7.bookingOffline);

                      if (_this7.bookingOffline.length == 0) {
                        _this7.global.toastPresentTop('Semua data transaksi berhasil disinkronisasi!', 'success');

                        _this7.getData('online');
                      }

                      console.log(data);
                    } else {
                      console.log(data);
                    }
                  }, function (error) {
                    console.log(error);

                    _this7.global.toastPresentTop('<ion-icon name="sync-outline" color="light"></ion-icon> ' + _this7.bookingOffline.length + ' transaksi belum disinkronisasi!', 'danger');

                    _this7.getData('offline');
                  });
                };

                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var order, reqHeader;

                  _loop();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else {
              this.getData('online');
            }
          }
        }, {
          key: "checkThisOrderSync",
          value: function checkThisOrderSync(id) {
            var offlineIndex = this.bookingOffline.findIndex(function (y) {
              return y === id;
            });

            if (offlineIndex > -1) {
              return true;
            }
          }
        }, {
          key: "getData",
          value: function getData(mode) {
            var _this8 = this;

            if (mode == 'online') {
              this.storage.getObject('auth').then(function (auth) {
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + _this8.auth.token
                });
                var options = {
                  headers: reqHeader
                };
                var postdata = {
                  outlet_id: _this8.activeOutlet.id,
                  start_date: _this8.global.parsingDate(_this8.start_date),
                  end_date: _this8.global.parsingDate(_this8.end_date)
                };

                _this8.http.post(_this8.global.base_url + 'auth/booking/last_per_outlet', postdata, options).subscribe(function (data) {
                  console.log(data);

                  if (data.status == 0) {
                    _this8.booking = data.booking;
                    _this8.bookingSearch = _this8.booking;

                    _this8.storage.setObject('booking', _this8.booking);

                    console.log(data);
                  } else {
                    console.log(data);
                  }

                  _this8.showContent = true;
                }, function (error) {
                  console.log(error);
                  _this8.booking = _this8.storageBooking;
                  _this8.bookingSearch = _this8.booking;
                  _this8.showContent = true;
                });
              });
            } else {
              this.booking = this.storageBooking;
              this.bookingSearch = this.booking;
              this.showContent = true;
            }
          }
        }, {
          key: "detail",
          value: function detail(id) {
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
            this.router.navigate(['/booking-detail/' + id + '/list']);
          }
        }, {
          key: "filterList",
          value: function filterList(evt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var searchTerm;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    this.bookingSearch = this.booking;
                    searchTerm = evt.srcElement.value;

                    if (searchTerm) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return");

                  case 4:
                    this.bookingSearch = this.bookingSearch.filter(function (current) {
                      if (current.book_number && searchTerm) {
                        return current.book_number.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                      }
                    });
                    console.log(this.bookingSearch);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "confirmLogout",
          value: function confirmLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this9 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Konfirmasi',
                      message: 'Yakin untuk keluar dari akun Anda?   <br/> <br/> Perhatian : <br/> <span style="color:red">harap lakukan sinkronisasi data order terlebih dahulu, data offline akan dihapus saat Anda keluar akun!</span>',
                      buttons: [{
                        text: 'Sinkronkan data!',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          _this9.router.navigate(['/tabs/tab-order']);
                        }
                      }, {
                        text: 'Keluar',
                        handler: function handler() {
                          _this9.logout();

                          console.log('Confirm logout');
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
          key: "logout",
          value: function logout() {
            this.storage.clear();
            this.router.navigate(['/login']);
          }
        }, {
          key: "openMenuLeft",
          value: function openMenuLeft() {
            this.menu.enable(true, 'bookingleft');
            this.menu.open('bookingleft');
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {}
        }]);

        return BookingPage;
      }();

      BookingPage.ctorParameters = function () {
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
          type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
        }];
      };

      BookingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-booking',
        template: _raw_loader_booking_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_booking_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BookingPage);
      /***/
    },

    /***/
    "qmMC":
    /*!*******************************************!*\
      !*** ./src/app/booking/booking.module.ts ***!
      \*******************************************/

    /*! exports provided: BookingPageModule */

    /***/
    function qmMC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingPageModule", function () {
        return BookingPageModule;
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


      var _booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./booking-routing.module */
      "jRKS");
      /* harmony import */


      var _booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./booking.page */
      "n2Uv");

      var BookingPageModule = /*#__PURE__*/_createClass(function BookingPageModule() {
        _classCallCheck(this, BookingPageModule);
      });

      BookingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingPageRoutingModule"]],
        declarations: [_booking_page__WEBPACK_IMPORTED_MODULE_6__["BookingPage"]]
      })], BookingPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=booking-booking-module-es5.js.map