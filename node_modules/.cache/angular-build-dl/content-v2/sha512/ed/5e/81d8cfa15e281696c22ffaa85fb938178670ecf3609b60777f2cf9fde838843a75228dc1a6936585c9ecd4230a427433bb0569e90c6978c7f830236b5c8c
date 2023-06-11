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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog-product-add-catalog-product-add-module"], {
    /***/
    "33t4":
    /*!*******************************************************************!*\
      !*** ./src/app/catalog-product-add/catalog-product-add.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CatalogProductAddPageModule */

    /***/
    function t4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogProductAddPageModule", function () {
        return CatalogProductAddPageModule;
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


      var _catalog_product_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./catalog-product-add-routing.module */
      "DQD1");
      /* harmony import */


      var _catalog_product_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./catalog-product-add.page */
      "gJ6o");

      var CatalogProductAddPageModule = /*#__PURE__*/_createClass(function CatalogProductAddPageModule() {
        _classCallCheck(this, CatalogProductAddPageModule);
      });

      CatalogProductAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _catalog_product_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatalogProductAddPageRoutingModule"]],
        declarations: [_catalog_product_add_page__WEBPACK_IMPORTED_MODULE_6__["CatalogProductAddPage"]]
      })], CatalogProductAddPageModule);
      /***/
    },

    /***/
    "DQD1":
    /*!***************************************************************************!*\
      !*** ./src/app/catalog-product-add/catalog-product-add-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: CatalogProductAddPageRoutingModule */

    /***/
    function DQD1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogProductAddPageRoutingModule", function () {
        return CatalogProductAddPageRoutingModule;
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


      var _catalog_product_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./catalog-product-add.page */
      "gJ6o");

      var routes = [{
        path: '',
        component: _catalog_product_add_page__WEBPACK_IMPORTED_MODULE_3__["CatalogProductAddPage"]
      }];

      var CatalogProductAddPageRoutingModule = /*#__PURE__*/_createClass(function CatalogProductAddPageRoutingModule() {
        _classCallCheck(this, CatalogProductAddPageRoutingModule);
      });

      CatalogProductAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CatalogProductAddPageRoutingModule);
      /***/
    },

    /***/
    "Zc69":
    /*!*******************************************************************!*\
      !*** ./src/app/catalog-product-add/catalog-product-add.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function Zc69(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRhbG9nLXByb2R1Y3QtYWRkLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "bTOv":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalog-product-add/catalog-product-add.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bTOv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/catalog-product']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"primary\">Tambah produk</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content class=\"ion-padding\" mode=\"ios\">\r\n  <form (submit)=\"process()\">\r\n\r\n  <div *ngIf=\"company.package == 'Premium'\" (click)=\"takePicture()\" style=\"width:200px;height:200px;margin-left:auto;margin-right:auto;margin-bottom:20px;border-radius:5px;overflow:hidden;border:2px #ccc dashed;\">\r\n    <img src=\"{{product.image}}\" />\r\n  </div>\r\n\r\n  <div *ngIf=\"company.package == 'Lite'\" style=\"background:#f5f5f5;width:200px;height:200px;margin-left:auto;margin-right:auto;margin-bottom:20px;border-radius:5px;overflow:hidden;border:2px #ccc dashed;\">\r\n    <p class=\"ion-text-center\" style=\"padding:30px;padding-top:50px;font-size:12px;\">\r\n    <ion-text color=\"primary\">Fitur Upload gambar produk hanya tersedia dalam versi premium</ion-text>\r\n    </p>\r\n  </div>\r\n\r\n  <ion-item lines=\"inset\">\r\n    <ion-label color=\"primary\"><small>Kategori*</small></ion-label>\r\n    <ion-select interface=\"action-sheet\" [(ngModel)]=\"product.category_id\" name=\"category_id\">\r\n      <ion-select-option *ngFor=\"let item of category\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">SKU<br/><small>Kosongkan jika ingin terisi otomatis</small></ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"product.sku\" name=\"sku\" autocapitalize=\"on\"></ion-input>\r\n    <ion-button slot=\"end\" (click)=\"scanBarcode()\" color=\"dark\" size=\"large\" fill=\"link\"><ion-icon name=\"scan-outline\"></ion-icon></ion-button>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">Nama produk*</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"product.name\" name=\"name\" autocapitalize=\"on\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">Deskripsi</ion-label>\r\n    <ion-textarea  [(ngModel)]=\"product.description\" name=\"description\" autocapitalize=\"on\"></ion-textarea>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">Modal</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"product.cost\" name=\"cost\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">Harga*</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"product.price\" name=\"price\" (change)=\"setDefaultPrice()\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"inset\">\r\n    <ion-label color=\"primary\"><small>Satuan*</small></ion-label>\r\n    <ion-select interface=\"action-sheet\" [(ngModel)]=\"product.unit_id\" name=\"unit_id\">\r\n      <ion-select-option *ngFor=\"let item of unit\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <br/>\r\n\r\n  <ion-item-divider>\r\n    Harga per tipe pesanan\r\n  </ion-item-divider>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type1\">\r\n    <ion-label position=\"stacked\" color=\"primary\">{{company.order_type_label1}}</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"product.price_type1\" name=\"price_type1\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type2\">\r\n    <ion-label position=\"stacked\" color=\"primary\">{{company.order_type_label2}}</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"product.price_type2\" name=\"price_type2\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type3\">\r\n    <ion-label position=\"stacked\" color=\"primary\">{{company.order_type_label3}}</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"product.price_type3\" name=\"price_type3\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type4\">\r\n    <ion-label position=\"stacked\" color=\"primary\">{{company.order_type_label4}}</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"product.price_type4\" name=\"price_type4\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type5\">\r\n    <ion-label position=\"stacked\" color=\"primary\">{{company.order_type_label5}}</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"product.price_type5\" name=\"price_type5\"></ion-input>\r\n  </ion-item>\r\n  <br/>\r\n  <ion-item-divider>\r\n    Ketersediaan & Inventori &nbsp; <small><ion-text color=\"danger\">Beta</ion-text></small>\r\n  </ion-item-divider>\r\n\r\n  <ion-item>\r\n    <ion-label>Aktifkan inventori </ion-label>\r\n    <ion-toggle [(ngModel)]=\"product.track_stock\" name=\"track_stock\"></ion-toggle>\r\n  </ion-item>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n          <small>Outlet</small>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"3\" *ngIf=\"product.track_stock\">\r\n        <ion-item lines=\"none\">\r\n          <small>Stok awal</small>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngFor=\"let item of stockOutlet\">\r\n      <ion-col>\r\n        <ion-item><ion-checkbox color=\"primary\" slot=\"start\" [(ngModel)]=\"item.enabled\"  name=\"outlet_enabled[]\"></ion-checkbox>\r\n          <ion-label class=\"ion-text-wrap\">{{item.name}}</ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align:right;\" *ngIf=\"product.track_stock\"><ion-input style=\"border:1px solid #ccc;text-align:center;margin-top:5px;\" [(ngModel)]=\"item.stock\"  name=\"outlet_stock[]\" type=\"number\"></ion-input></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\">\r\n  <ion-button expand=\"block\" (click)=\"process()\">Simpan</ion-button>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "gJ6o":
    /*!*****************************************************************!*\
      !*** ./src/app/catalog-product-add/catalog-product-add.page.ts ***!
      \*****************************************************************/

    /*! exports provided: CatalogProductAddPage */

    /***/
    function gJ6o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogProductAddPage", function () {
        return CatalogProductAddPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_catalog_product_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./catalog-product-add.page.html */
      "bTOv");
      /* harmony import */


      var _catalog_product_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./catalog-product-add.page.scss */
      "Zc69");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! uuid */
      "4USb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../global.service */
      "dVwY");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      "WdVq");

      var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"].Camera;

      var CatalogProductAddPage = /*#__PURE__*/function () {
        function CatalogProductAddPage(router, toastCtrl, storage, http, global, navController, transfer, file, barcodeScanner) {
          _classCallCheck(this, CatalogProductAddPage);

          this.router = router;
          this.toastCtrl = toastCtrl;
          this.storage = storage;
          this.http = http;
          this.global = global;
          this.navController = navController;
          this.transfer = transfer;
          this.file = file;
          this.barcodeScanner = barcodeScanner;
          this.product = {
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
            sku: '',
            category_id: '',
            name: '',
            description: '',
            cost: '',
            price: '',
            unit_id: '',
            price_type1: '',
            price_type2: '',
            price_type3: '',
            price_type4: '',
            price_type5: '',
            image: 'assets/no-image.png',
            track_stock: false
          };
          this.storageProduct = [];
          this.unit = [];
          this.storageCategory = [];
          this.company = {
            order_type1: 0,
            order_type2: 0,
            order_type3: 0,
            order_type4: 0,
            order_type5: 0,
            order_type_label1: '',
            order_type_label2: '',
            order_type_label3: '',
            order_type_label4: '',
            order_type_label5: '',
            "package": ''
          };
          this.storageOutlet = [];
          this.stockOutlet = [];
        }

        _createClass(CatalogProductAddPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.getObject('auth').then(function (auth) {
              _this.auth = auth;

              _this.getOfflineOutlet();

              _this.getDataCategory();

              _this.getDataUnit();

              _this.getDataCompany();
            });
          }
        }, {
          key: "scanBarcode",
          value: function scanBarcode() {
            var _this2 = this;

            this.barcodeScanner.scan().then(function (barcodeData) {
              _this2.product.sku = barcodeData.text;
              console.log(barcodeData);
            })["catch"](function (err) {
              console.log('Error', err);
            });
          }
        }, {
          key: "getOfflineOutlet",
          value: function getOfflineOutlet() {
            var _this3 = this;

            this.storage.getObject('outlet').then(function (data) {
              if (data != null) {
                _this3.storageOutlet = data;
                _this3.outlet = _this3.storageOutlet.filter(function (outlet) {
                  return outlet.outlet.status === 'Active';
                });
                var pushOutlet = [];

                var _iterator = _createForOfIteratorHelper(_this3.outlet),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;
                    pushOutlet.push({
                      id: item.outlet.id,
                      name: item.outlet.name,
                      enabled: true,
                      stock: 0
                    });
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _this3.stockOutlet = pushOutlet;
              }

              console.log("Offline outlet", data);
            });
          }
        }, {
          key: "getDataCompany",
          value: function getDataCompany() {
            var _this4 = this;

            this.global.loadingPresent('mengambil data...');
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + 'auth/setting/data', null, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this4.company = data.company;
                console.log(data);
              } else {
                console.log(data);
              }

              _this4.global.loadingDismiss();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getDataCategory",
          value: function getDataCategory() {
            var _this5 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + 'auth/category/list', null, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this5.category = data.category;
                _this5.product.category_id = data.category[0].id;
                console.log(data);
              } else {
                console.log(data);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getDataUnit",
          value: function getDataUnit() {
            var _this6 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + 'auth/unit/list', null, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this6.unit = data.unit;
                _this6.product.unit_id = data.unit[0].id;
                console.log(data);
              } else {
                console.log(data);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "process",
          value: function process() {
            var _this7 = this;

            if (this.product.name == '' || this.product.category_id == '' || this.product.price < 1) {
              this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
              return false;
            }

            this.global.loadingPresent('menambah produk...');
            this.storage.getObject('auth').then(function (auth) {
              var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + _this7.auth.token
              });
              var options = {
                headers: reqHeader
              };
              var postData = {
                sku: _this7.product.sku,
                name: _this7.product.name,
                category_id: _this7.product.category_id,
                description: _this7.product.description,
                cost: _this7.product.cost,
                price: _this7.product.price,
                unit_id: _this7.product.unit_id,
                image: _this7.product.image,
                track_stock: _this7.product.track_stock,
                price_type1: _this7.product.price_type1,
                price_type2: _this7.product.price_type2,
                price_type3: _this7.product.price_type3,
                price_type4: _this7.product.price_type4,
                price_type5: _this7.product.price_type5,
                stock_outlet: _this7.stockOutlet
              };

              _this7.http.post(_this7.global.base_url + 'auth/product/add', postData, options).subscribe(function (data) {
                console.log(data);

                if (data.status == 0) {
                  _this7.global.toastPresent(data.message);

                  _this7.router.navigate(['/catalog-product']);
                } else {
                  console.log(data);
                }

                _this7.global.loadingDismiss();
              }, function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "takePicture",
          value: function takePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this8 = this;

              var image, imageUrl, fileTransfer, options;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Camera.getPhoto({
                      quality: 90,
                      allowEditing: false,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["CameraResultType"].Uri
                    });

                  case 2:
                    image = _context.sent;
                    // image.webPath will contain a path that can be set as an image src.
                    // You can access the original file using image.path, which can be
                    // passed to the Filesystem API to read the raw data of the image,
                    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
                    imageUrl = image.webPath; // Can be set to the src of an image now

                    this.product.image = imageUrl;
                    fileTransfer = this.transfer.create();
                    options = {
                      fileKey: 'image',
                      chunkedMode: false,
                      headers: {
                        Connection: 'close'
                      }
                    };
                    this.global.loadingPresent('Mengupload file...');
                    fileTransfer.upload(image.path, this.global.base_url + 'auth/product/upload', options).then(function (data) {
                      // success
                      _this8.global.loadingDismiss();

                      _this8.product.image = data.response;
                      console.log(data);
                    }, function (err) {
                      // error
                      console.log(err);
                    });

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "setDefaultPrice",
          value: function setDefaultPrice() {
            this.product.price_type1 = this.product.price;
            this.product.price_type2 = this.product.price;
            this.product.price_type3 = this.product.price;
            this.product.price_type4 = this.product.price;
            this.product.price_type5 = this.product.price;
          }
        }]);

        return CatalogProductAddPage;
      }();

      CatalogProductAddPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
        }, {
          type: _global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"]
        }, {
          type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__["BarcodeScanner"]
        }];
      };

      CatalogProductAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-catalog-product-add',
        template: _raw_loader_catalog_product_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_catalog_product_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CatalogProductAddPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=catalog-product-add-catalog-product-add-module-es5.js.map