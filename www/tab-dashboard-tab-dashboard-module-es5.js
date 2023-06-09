(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-dashboard-tab-dashboard-module"], {
    /***/
    "GKWu":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-dashboard/tab-dashboard.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function GKWu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-no-padding\" mode=\"ios\">\r\n  <ion-card style=\"margin-top: 20px; margin-bottom: 10px\">\r\n    <ion-card-header color=\"primary\">\r\n      <ion-card-subtitle>\r\n        {{company.name}}\r\n        <span style=\"float: right\">\r\n          <ion-badge color=\"dark\">{{ company.package }}</ion-badge>\r\n        </span>\r\n      </ion-card-subtitle>\r\n    </ion-card-header>\r\n  </ion-card>\r\n\r\n  <h5 class=\"title-info-posbill\">\r\n    Ringkasan penjualan\r\n\r\n    <span style=\"float: right\">\r\n      <ion-text color=\"primary\">Lihat laporan penjualan</ion-text>\r\n    </span>\r\n  </h5>\r\n\r\n  <ion-card>\r\n    <!-- <ion-card-header color=\"primary\">\r\n        <ion-card-subtitle color=\"light\">\r\n          Ringkasan penjualan\r\n        </ion-card-subtitle>\r\n      </ion-card-header> -->\r\n\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <h6>Hari ini {{ dateNow }}</h6>\r\n            <div style=\"border-top: 1px solid #ccc; margin: 7px 0px\"></div>\r\n            <h2>\r\n              <ion-text color=\"primary\">{{ summary_today_price }}</ion-text>\r\n            </h2>\r\n            <h5>\r\n              <ion-text color=\"dark\">{{summary_today_items }} Items</ion-text>\r\n            </h5>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <h6>Bulan ini ({{ monthNow }})</h6>\r\n            <div style=\"border-top: 1px solid #ccc; margin: 7px 0px\"></div>\r\n            <h2>\r\n              <ion-text color=\"primary\">{{ summary_month_price }}</ion-text>\r\n            </h2>\r\n            <h5>\r\n              <ion-text color=\"dark\">{{ summary_month_items }} Items</ion-text>\r\n            </h5>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <h5 class=\"title-info-posbill\">Ringkasan order</h5>\r\n  <ion-card>\r\n    <!-- <ion-card-header color=\"primary\">\r\n        <ion-card-subtitle color=\"light\">\r\n          Pesanan terbaru\r\n        </ion-card-subtitle>\r\n      </ion-card-header> -->\r\n\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item lines=\"full\" detail [routerLink]=\"['/booking']\">\r\n          <ion-icon slot=\"start\" name=\"save-outline\" color=\"primary\"></ion-icon>\r\n          <ion-label>Booking</ion-label>\r\n          <ion-badge slot=\"end\" color=\"primary\">{{ amount_booking }}</ion-badge>\r\n        </ion-item>\r\n        <ion-item\r\n          lines=\"none\"\r\n          detail\r\n          (click)=\"onCoba()\"\r\n          style=\"cursor: pointer\"\r\n        >\r\n          <ion-icon slot=\"start\" name=\"cart-outline\" color=\"primary\"></ion-icon>\r\n          <ion-label>Pesanan belum lunas</ion-label>\r\n          <ion-badge slot=\"end\" color=\"primary\"\r\n            >{{ amount_order_notPaid }}</ion-badge\r\n          >\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <h5 class=\"title-info-posbill\">Informasi Posbill</h5>\r\n\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide\r\n      *ngFor=\"let item of informations\"\r\n      [routerLink]=\"['/information-detail/' + item.id]\"\r\n    >\r\n      <img src=\"{{ baseUrl + item.image}}\" />\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "QmIR":
    /*!*******************************************************!*\
      !*** ./src/app/tab-dashboard/tab-dashboard.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function QmIR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\nion-card-content {\n  min-height: 120px;\n}\n\n.menu-setting p {\n  font-size: 75% tab;\n}\n\nion-slides {\n  margin: 10px 0px;\n}\n\nion-slide {\n  overflow: hidden;\n  padding-left: 16px;\n}\n\nion-slide img {\n  border-radius: 15px;\n}\n\n.summary {\n  text-align: center;\n}\n\n.title-info-posbill {\n  padding: 0px 16px;\n  font-size: 80%;\n}\n\nh6 {\n  font-size: 80%;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYi1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUVBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQUYiLCJmaWxlIjoidGFiLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5tZW51LXNldHRpbmcgcCB7XHJcbiAgZm9udC1zaXplOiA3NSV0YWI7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxufVxyXG5cclxuaW9uLXNsaWRlIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLnN1bW1hcnkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLWluZm8tcG9zYmlsbCB7XHJcbiAgcGFkZGluZzogMHB4IDE2cHg7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbmg2IHtcclxuICBmb250LXNpemU6IDgwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "fLci":
    /*!*******************************************************!*\
      !*** ./src/app/tab-dashboard/tab-dashboard.module.ts ***!
      \*******************************************************/

    /*! exports provided: TabDashboardPageModule */

    /***/
    function fLci(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabDashboardPageModule", function () {
        return TabDashboardPageModule;
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


      var _tab_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab-dashboard.page */
      "oZ/7");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab-dashboard-routing.module */
      "xw5T");

      var TabDashboardPageModule = /*#__PURE__*/_createClass(function TabDashboardPageModule() {
        _classCallCheck(this, TabDashboardPageModule);
      });

      TabDashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["TabDashboardPage"]
        }]), _tab_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__["TabDashboardPageRoutingModule"]],
        declarations: [_tab_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["TabDashboardPage"]]
      })], TabDashboardPageModule);
      /***/
    },

    /***/
    "oZ/7":
    /*!*****************************************************!*\
      !*** ./src/app/tab-dashboard/tab-dashboard.page.ts ***!
      \*****************************************************/

    /*! exports provided: TabDashboardPage */

    /***/
    function oZ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabDashboardPage", function () {
        return TabDashboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab-dashboard.page.html */
      "GKWu");
      /* harmony import */


      var _tab_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab-dashboard.page.scss */
      "QmIR");
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
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var App = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"].App;
      var PushNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"].PushNotifications;

      var TabDashboardPage = /*#__PURE__*/function () {
        function TabDashboardPage(nativePageTransitions, http, global, router, toastController, storage, alertController, platform) {
          _classCallCheck(this, TabDashboardPage);

          this.nativePageTransitions = nativePageTransitions;
          this.http = http;
          this.global = global;
          this.router = router;
          this.toastController = toastController;
          this.storage = storage;
          this.alertController = alertController;
          this.platform = platform;
          this.slideOpts = {
            slidePerView: 1,
            slidePerPage: 2,
            initialSlide: 1,
            width: 350,
            speed: 400,
            centeredSlides: true
          };
          this.baseUrl = this.global.domain;
          this.offline = false;
          this.showContent = false;
          this.user = {
            name: "",
            level: ""
          };
          this.company = {
            name: "",
            "package": ""
          }; // Amount

          this.amount_booking = 0;
          this.amount_order_notPaid = 0; // Summary

          this.summary_today_price = 0;
          this.summary_today_items = 0;
          this.summary_month_price = 0;
          this.summary_month_items = 0; // Information

          this.informations = [];
          this.dateNow = "";
          this.monthNow = "";
          this.notificationContent = {
            notification: {
              data: {
                entity_name: "",
                id: ""
              }
            }
          }; // this.platform.backButton.subscribeWithPriority(10, () => {
          //   this.router.navigate(['/tabs/tab1']);
          // });
        }

        _createClass(TabDashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

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
              _this.notificationContent = notification;

              if (_this.notificationContent.notification.data.entity_name == "order_detail") {
                _this.router.navigate(["/tabs/tab-order/notification/" + _this.notificationContent.notification.data.id]); // setTimeout(() => {
                //   this.router.navigate(['/orders-detail/'+this.notificationContent.notification.data.id]);
                // }, 2000);

              }
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.storage.getObject("company").then(function (company) {
              _this2.company = company;

              _this2.storage.getObject("user").then(function (user) {
                _this2.user = user;
              });
            });
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this3 = this;

            this.storage.getObject("auth").then(function (auth) {
              _this3.auth = auth;

              _this3.getDataCompany();

              _this3.getAmountBooking();

              _this3.getAmountOrder();

              _this3.getOrderSummary();

              _this3.getDataInformation();
            });
            var optionDateNow = {
              year: "numeric",
              weekday: "long"
            };
            var formattedDateNow = this.global.getNameDate(new Date(), optionDateNow);
            var explodeDateNow = formattedDateNow.split(" ");
            var optionMonth = {
              year: "numeric",
              month: "long"
            };
            var formattedMonth = this.global.getNameDate(new Date(), optionMonth);
            console.log(explodeDateNow);
            this.dateNow = explodeDateNow[1] + " " + explodeDateNow[0];
            this.monthNow = formattedMonth;
            console.log(this.amount_booking, this.amount_order_notPaid);
          }
        }, {
          key: "getDataCompany",
          value: function getDataCompany() {
            var _this4 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + "auth/company", null, options).subscribe(function (data) {
              if (data.status == 0) {
                _this4.storage.setObject("company", data.company);

                _this4.company = data.company;
                console.log(data);
              } else {
                console.log(data);
              }

              _this4.showContent = true;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getDataInformation",
          value: function getDataInformation() {
            var _this5 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.get(this.global.base_url + "auth/information", options).subscribe(function (data) {
              _this5.informations = data === null || data === void 0 ? void 0 : data.information;
              console.log(data);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getAmountOrder",
          value: function getAmountOrder() {
            var _this6 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.get("".concat(this.global.base_url, "auth/order/count"), options).subscribe(function (data) {
              _this6.amount_order_notPaid = data.amount_order_notPaid;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getOrderSummary",
          value: function getOrderSummary() {
            var _this7 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.get("".concat(this.global.base_url, "auth/order/summary"), options).subscribe(function (data) {
              _this7.summary_today_price = data.summary_today_price;
              _this7.summary_today_items = data.summary_today_items;
              _this7.summary_month_price = data.summary_month_price;
              _this7.summary_month_items = data.summary_month_items;
              console.log(data.summary_today_price, data.summary_today_items, "Summary");
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getAmountBooking",
          value: function getAmountBooking() {
            var _this8 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.get("".concat(this.global.base_url, "auth/booking/count"), options).subscribe(function (data) {
              _this8.amount_booking = data.amount_booking;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "clickToPage",
          value: function clickToPage(page) {
            if (this.company["package"] == "Lite" && page == "/setting-olshop") {
              this.global.toastPresent("Fitur toko online tersedia dalam versi Premium");
              return false;
            }

            if (this.company["package"] == "Lite" && page == "/user") {
              this.global.toastPresent("Fitur pengguna tersedia dalam versi Premium");
              return false;
            }

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
            this.router.navigate([page]);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {}
        }, {
          key: "confirmLogout",
          value: function confirmLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this9 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: "my-custom-class",
                      header: "Konfirmasi",
                      message: 'Yakin untuk keluar dari akun Anda?   <br/> <br/> Perhatian : <br/> <span style="color:red">harap lakukan sinkronisasi data order terlebih dahulu, data offline akan dihapus saat Anda keluar akun!</span>',
                      buttons: [{
                        text: "Sinkronkan data!",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler(blah) {
                          _this9.router.navigate(["/tabs/tab-order"]);
                        }
                      }, {
                        text: "Keluar",
                        handler: function handler() {
                          _this9.logout();

                          console.log("Confirm logout");
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
            var _this10 = this;

            this.storage.clear().then(function () {
              _this10.storage.removeItem("auth");

              _this10.storage.removeItem("user");

              _this10.storage.removeItem("company");

              _this10.storage.removeItem("outlet_active");

              _this10.storage.removeItem("outlet");

              _this10.storage.removeItem("product");

              _this10.router.navigate(["/login"]);
            });
          }
        }, {
          key: "onCoba",
          value: function onCoba() {
            this.storage.setObject("filterBy", "Pending");
            this.router.navigate(["/tabs/tab-order"]);
          }
        }]);

        return TabDashboardPage;
      }();

      TabDashboardPage.ctorParameters = function () {
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

      TabDashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-tab-dashboard",
        template: _raw_loader_tab_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TabDashboardPage);
      /***/
    },

    /***/
    "xw5T":
    /*!***************************************************************!*\
      !*** ./src/app/tab-dashboard/tab-dashboard-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: TabDashboardPageRoutingModule */

    /***/
    function xw5T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabDashboardPageRoutingModule", function () {
        return TabDashboardPageRoutingModule;
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


      var _tab_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab-dashboard.page */
      "oZ/7");

      var routes = [{
        path: '',
        component: _tab_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["TabDashboardPage"]
      }];

      var TabDashboardPageRoutingModule = /*#__PURE__*/_createClass(function TabDashboardPageRoutingModule() {
        _classCallCheck(this, TabDashboardPageRoutingModule);
      });

      TabDashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabDashboardPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab-dashboard-tab-dashboard-module-es5.js.map