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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog-product-edit-catalog-product-edit-module"], {
    /***/
    "0x2S":
    /*!*****************************************************************************!*\
      !*** ./src/app/catalog-product-edit/catalog-product-edit-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: CatalogProductEditPageRoutingModule */

    /***/
    function x2S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogProductEditPageRoutingModule", function () {
        return CatalogProductEditPageRoutingModule;
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


      var _catalog_product_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./catalog-product-edit.page */
      "Zg1+");

      var routes = [{
        path: '',
        component: _catalog_product_edit_page__WEBPACK_IMPORTED_MODULE_3__["CatalogProductEditPage"]
      }];

      var CatalogProductEditPageRoutingModule = /*#__PURE__*/_createClass(function CatalogProductEditPageRoutingModule() {
        _classCallCheck(this, CatalogProductEditPageRoutingModule);
      });

      CatalogProductEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CatalogProductEditPageRoutingModule);
      /***/
    },

    /***/
    "2019":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalog-product-edit/catalog-product-edit.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/catalog-product']\"\r\n        ><ion-icon name=\"arrow-back-outline\"></ion-icon\r\n      ></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Ubah produk</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"link\" color=\"danger\" (click)=\"deleteConfirm()\"\r\n        ><ion-icon name=\"trash-outline\" color=\"danger\"></ion-icon\r\n      ></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" mode=\"ios\" *ngIf=\"showContent\">\r\n  <div\r\n    (click)=\"takePicture()\"\r\n    style=\"\r\n      width: 200px;\r\n      height: 200px;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      margin-bottom: 20px;\r\n      border-radius: 5px;\r\n      overflow: hidden;\r\n      border: 1px #f5f5f5 solid;\r\n    \"\r\n  >\r\n    <img src=\"{{product.image}}\" />\r\n  </div>\r\n\r\n  <ion-item lines=\"inset\">\r\n    <ion-label color=\"primary\"><small>Kategori*</small></ion-label>\r\n    <ion-select\r\n      interface=\"action-sheet\"\r\n      [(ngModel)]=\"product.category_id\"\r\n      name=\"category_id\"\r\n    >\r\n      <ion-select-option *ngFor=\"let item of category\" value=\"{{item.id}}\"\r\n        >{{item.name}}</ion-select-option\r\n      >\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">SKU</ion-label>\r\n    <ion-input\r\n      type=\"text\"\r\n      [(ngModel)]=\"product.sku\"\r\n      name=\"sku\"\r\n      autocapitalize=\"on\"\r\n      readonly\r\n    ></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">Nama produk*</ion-label>\r\n    <ion-input\r\n      type=\"text\"\r\n      [(ngModel)]=\"product.name\"\r\n      name=\"name\"\r\n      autocapitalize=\"on\"\r\n    ></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">Deskripsi</ion-label>\r\n    <ion-textarea\r\n      [(ngModel)]=\"product.description\"\r\n      name=\"description\"\r\n      autocapitalize=\"on\"\r\n    ></ion-textarea>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">Modal</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"product.cost\" name=\"cost\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">Harga*</ion-label>\r\n    <ion-input\r\n      type=\"number\"\r\n      [(ngModel)]=\"product.price\"\r\n      name=\"price\"\r\n    ></ion-input>\r\n  </ion-item>\r\n  <br />\r\n  <ion-item-divider> Harga per tipe pesanan </ion-item-divider>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type1\">\r\n    <ion-label position=\"stacked\" color=\"primary\"\r\n      >{{company.order_type_label1}}</ion-label\r\n    >\r\n    <ion-input\r\n      type=\"number\"\r\n      [(ngModel)]=\"product.price_type1\"\r\n      name=\"price_type1\"\r\n    ></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type2\">\r\n    <ion-label position=\"stacked\" color=\"primary\"\r\n      >{{company.order_type_label2}}</ion-label\r\n    >\r\n    <ion-input\r\n      type=\"number\"\r\n      [(ngModel)]=\"product.price_type2\"\r\n      name=\"price_type2\"\r\n    ></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type3\">\r\n    <ion-label position=\"stacked\" color=\"primary\"\r\n      >{{company.order_type_label3}}</ion-label\r\n    >\r\n    <ion-input\r\n      type=\"number\"\r\n      [(ngModel)]=\"product.price_type3\"\r\n      name=\"price_type3\"\r\n    ></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type4\">\r\n    <ion-label position=\"stacked\" color=\"primary\"\r\n      >{{company.order_type_label4}}</ion-label\r\n    >\r\n    <ion-input\r\n      type=\"number\"\r\n      [(ngModel)]=\"product.price_type4\"\r\n      name=\"price_type4\"\r\n    ></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type5\">\r\n    <ion-label position=\"stacked\" color=\"primary\"\r\n      >{{company.order_type_label5}}</ion-label\r\n    >\r\n    <ion-input\r\n      type=\"number\"\r\n      [(ngModel)]=\"product.price_type5\"\r\n      name=\"price_type5\"\r\n    ></ion-input>\r\n  </ion-item>\r\n  <br />\r\n  <ion-item-divider>\r\n    Ketersediaan & Inventori &nbsp;\r\n    <small><ion-text color=\"danger\">Beta</ion-text></small>\r\n  </ion-item-divider>\r\n\r\n  <ion-item>\r\n    <ion-label>Aktifkan inventori </ion-label>\r\n    <ion-toggle\r\n      name=\"track_stock\"\r\n      [(ngModel)]=\"product.trace_stock\"\r\n      (ionChange)=\"coba($event)\"\r\n    ></ion-toggle>\r\n  </ion-item>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n          <small>Outle t</small>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"3\" *ngIf=\"product.track_stock\">\r\n        <ion-item lines=\"none\">\r\n          <small>Stok saat ini</small>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngFor=\"let item of product.stock\">\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-checkbox slot=\"start\" [(ngModel)]=\"item.enabled\"></ion-checkbox>\r\n          <ion-label class=\"ion-text-wrap\"\r\n            >{{item.name}} {{item.stock}}</ion-label\r\n          >\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align: right\" *ngIf=\"product.track_stock\">\r\n        <ion-input\r\n          style=\"text-align: center; margin-top: 5px\"\r\n          name=\"outlet_stock[]\"\r\n          type=\"number\"\r\n          value=\"{{item.stock}}\"\r\n          readonly\r\n        ></ion-input\r\n      ></ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col\r\n        ><ion-button\r\n          color=\"light\"\r\n          size=\"small\"\r\n          expand=\"block\"\r\n          [routerLink]=\"['/catalog-product-stock/'+id+'/addition']\"\r\n          >Penambahan stok</ion-button\r\n        ></ion-col\r\n      >\r\n      <ion-col\r\n        ><ion-button\r\n          color=\"light\"\r\n          size=\"small\"\r\n          expand=\"block\"\r\n          [routerLink]=\"['/catalog-product-stock/'+id+'/deduction']\"\r\n          readonly\r\n          >Pengurangan stok</ion-button\r\n        ></ion-col\r\n      >\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\">\r\n  <ion-button expand=\"block\" (click)=\"process()\">Simpan</ion-button>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "HvcT":
    /*!*********************************************************************!*\
      !*** ./src/app/catalog-product-edit/catalog-product-edit.module.ts ***!
      \*********************************************************************/

    /*! exports provided: CatalogProductEditPageModule */

    /***/
    function HvcT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogProductEditPageModule", function () {
        return CatalogProductEditPageModule;
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


      var _catalog_product_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./catalog-product-edit-routing.module */
      "0x2S");
      /* harmony import */


      var _catalog_product_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./catalog-product-edit.page */
      "Zg1+");

      var CatalogProductEditPageModule = /*#__PURE__*/_createClass(function CatalogProductEditPageModule() {
        _classCallCheck(this, CatalogProductEditPageModule);
      });

      CatalogProductEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _catalog_product_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatalogProductEditPageRoutingModule"]],
        declarations: [_catalog_product_edit_page__WEBPACK_IMPORTED_MODULE_6__["CatalogProductEditPage"]]
      })], CatalogProductEditPageModule);
      /***/
    },

    /***/
    "YLuS":
    /*!*********************************************************************!*\
      !*** ./src/app/catalog-product-edit/catalog-product-edit.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function YLuS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRhbG9nLXByb2R1Y3QtZWRpdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "Zg1+":
    /*!*******************************************************************!*\
      !*** ./src/app/catalog-product-edit/catalog-product-edit.page.ts ***!
      \*******************************************************************/

    /*! exports provided: CatalogProductEditPage */

    /***/
    function Zg1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogProductEditPage", function () {
        return CatalogProductEditPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_catalog_product_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./catalog-product-edit.page.html */
      "2019");
      /* harmony import */


      var _catalog_product_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./catalog-product-edit.page.scss */
      "YLuS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../global.service */
      "dVwY");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");

      var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"].Camera;

      var CatalogProductEditPage = /*#__PURE__*/function () {
        function CatalogProductEditPage(router, toastCtrl, storage, http, global, navController, route, transfer, file, alertController) {
          var _this = this;

          _classCallCheck(this, CatalogProductEditPage);

          this.router = router;
          this.toastCtrl = toastCtrl;
          this.storage = storage;
          this.http = http;
          this.global = global;
          this.navController = navController;
          this.route = route;
          this.transfer = transfer;
          this.file = file;
          this.alertController = alertController;
          this.product = {
            id: "",
            sku: "",
            category_id: "",
            name: "",
            description: "",
            cost: 0,
            price: 0,
            price_type1: "",
            price_type2: "",
            price_type3: "",
            price_type4: "",
            price_type5: "",
            track_stock: false,
            stock: [],
            image: "assets/no-image.png"
          };
          this.storageProduct = [];
          this.storageCategory = [];
          this.storageOutlet = [];
          this.outlet = [];
          this.stockOutlet = [];
          this.company = {
            order_type1: 0,
            order_type2: 0,
            order_type3: 0,
            order_type4: 0,
            order_type5: 0,
            order_type_label1: "",
            order_type_label2: "",
            order_type_label3: "",
            order_type_label4: "",
            order_type_label5: "",
            track_stockc: ""
          };
          this.showContent = false;
          this.stock = [];
          this.route.params.subscribe(function (params) {
            if (params["id"]) {
              _this.id = params["id"];
            }
          });
        }

        _createClass(CatalogProductEditPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.product.track_stock, "data track stock ni ");
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.storage.getObject("auth").then(function (auth) {
              _this2.auth = auth;

              _this2.getDataCompany();

              _this2.getData();
            });
            this.storage.getObject("status_inventory").then(function (data) {
              _this2.product.track_stock = data;
              console.log("data dari localstorage", data);
            });
          }
        }, {
          key: "getOfflineOutlet",
          value: function getOfflineOutlet() {
            var _this3 = this;

            this.storage.getObject("outlet").then(function (data) {
              if (data != null) {
                _this3.storageOutlet = data;
                _this3.outlet = _this3.storageOutlet.filter(function (outlet) {
                  return outlet.outlet.status === "Active";
                });
                var pushOutlet = [];

                var _iterator = _createForOfIteratorHelper(_this3.outlet),
                    _step;

                try {
                  var _loop = function _loop() {
                    var item = _step.value;
                    thisStock = _this3.product.stock.filter(function (stock) {
                      return stock.outlet_id === item.outlet.id;
                    });
                    pushOutlet.push({
                      id: item.outlet.id,
                      name: item.outlet.name,
                      enabled: 1,
                      stock: 0
                    });
                  };

                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var thisStock;

                    _loop();
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _this3.stockOutlet = pushOutlet;
                console.log(_this3.stockOutlet);
              }

              console.log("Offline outlet", data);
            });
          }
        }, {
          key: "getDataCompany",
          value: function getDataCompany() {
            var _this4 = this;

            this.global.loadingPresent("mengambil data...");
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + "auth/setting/data", null, options).subscribe(function (data) {
              if (data.status == 0) {
                _this4.company = data.company;

                _this4.getDataCategory();
              } else {}
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getDataCategory",
          value: function getDataCategory() {
            var _this5 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + "auth/category/list", null, options).subscribe(function (data) {
              if (data.status == 0) {
                _this5.category = data.category;

                _this5.getData();
              } else {}
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this6 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            var postData = {
              id: this.id
            };
            this.http.post(this.global.base_url + "auth/product/detail", postData, options).subscribe(function (data) {
              var status = data.product.track_stock == 1 ? true : false;

              if (data.status == 0) {
                _this6.storage.setObject("status_inventory", status);

                _this6.product = data.product;

                _this6.getOfflineOutlet();
              } else {}

              _this6.global.loadingDismiss();

              _this6.showContent = true;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "process",
          value: function process() {
            var _this7 = this;

            if (this.product.name == "" || this.product.category_id == "" || this.product.price < 1) {
              this.global.toastPresent("Mohon lengkapi form yang wajib diisi!");
              return false;
            }

            this.global.loadingPresent("menyimpan produk...");
            this.storage.getObject("auth").then(function (auth) {
              var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + _this7.auth.token
              });
              var options = {
                headers: reqHeader
              };
              var postData = {
                id: _this7.id,
                name: _this7.product.name,
                category_id: _this7.product.category_id,
                description: _this7.product.description,
                cost: _this7.product.cost,
                price: _this7.product.price,
                image: _this7.product.image,
                track_stock: _this7.product.track_stock,
                price_type1: _this7.product.price_type1,
                price_type2: _this7.product.price_type2,
                price_type3: _this7.product.price_type3,
                price_type4: _this7.product.price_type4,
                price_type5: _this7.product.price_type5,
                stock_outlet: _this7.product.stock
              };

              _this7.http.post(_this7.global.base_url + "auth/product/edit", postData, options).subscribe(function (data) {
                var _a;

                _this7.product.track_stock = (_a = _this7.product.track_stock) !== null && _a !== void 0 ? _a : false;

                if (data.status == 0) {
                  _this7.global.toastPresent(data.message);

                  _this7.router.navigate(["/catalog-product"]);
                } else {}

                _this7.global.loadingDismiss();
              }, function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "deleteConfirm",
          value: function deleteConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this8 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: "my-custom-class",
                      header: "Konfirmasi hapus!",
                      message: "Anda yakin menghapus data ini?",
                      buttons: [{
                        text: "Batal",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler(blah) {
                          console.log("Confirm Cancel: blah");
                        }
                      }, {
                        text: "Hapus",
                        handler: function handler() {
                          _this8["delete"]();
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
          key: "delete",
          value: function _delete() {
            var _this9 = this;

            this.global.loadingPresent("menghapus produk...");
            this.storage.getObject("auth").then(function (auth) {
              var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + _this9.auth.token
              });
              var options = {
                headers: reqHeader
              };
              var postData = {
                id: _this9.id
              };

              _this9.http.post(_this9.global.base_url + "auth/product/delete", postData, options).subscribe(function (data) {
                if (data.status == 0) {
                  _this9.global.toastPresent(data.message);

                  _this9.router.navigate(["/catalog-product"]);
                } else {}

                _this9.global.loadingDismiss();
              }, function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "isOutletEnabled",
          value: function isOutletEnabled(outlet_id) {
            var thisStock = this.product.stock.filter(function (stock) {
              return stock.outlet_id === outlet_id;
            }); // console.log(thisStock);
            // console.log(outlet_id);

            if (thisStock[0].is_enabled == 1) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "currentStock",
          value: function currentStock(outlet_id) {
            var thisStock = this.product.stock.filter(function (stock) {
              return stock.outlet_id === outlet_id;
            }); // console.log(thisStock[0].stock);

            return thisStock[0].stock;
          }
        }, {
          key: "takePicture",
          value: function takePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this10 = this;

              var image, imageUrl, fileTransfer, options;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Camera.getPhoto({
                      quality: 90,
                      allowEditing: false,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraResultType"].Uri
                    });

                  case 2:
                    image = _context2.sent;
                    // image.webPath will contain a path that can be set as an image src.
                    // You can access the original file using image.path, which can be
                    // passed to the Filesystem API to read the raw data of the image,
                    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
                    imageUrl = image.webPath; // Can be set to the src of an image now

                    this.product.image = imageUrl;
                    fileTransfer = this.transfer.create();
                    options = {
                      fileKey: "image",
                      chunkedMode: false,
                      headers: {
                        Connection: "close"
                      }
                    };
                    this.global.loadingPresent("Mengupload file...");
                    fileTransfer.upload(image.path, this.global.base_url + "auth/product/upload", options).then(function (data) {
                      // success
                      _this10.global.loadingDismiss();

                      _this10.product.image = data.response;
                    }, function (err) {
                      // error
                      console.log(err);
                    });

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "coba",
          value: function coba(event) {
            var _this11 = this;

            var status = event.target.checked;
            this.product.track_stock = status;
            this.storage.setObject("status_inventory", status);
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            var postDaata = {
              track_stock: status == true ? 1 : 0
            };
            this.http.post(this.global.base_url + "auth/product/stock_inventory_update/" + this.id, postDaata, options).subscribe(function (data) {
              var status = data.track_stock == 1 ? true : false;

              _this11.storage.setObject("status_inventory", status);

              _this11.product.track_stock = status;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return CatalogProductEditPage;
      }();

      CatalogProductEditPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      CatalogProductEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-catalog-product-edit",
        template: _raw_loader_catalog_product_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_catalog_product_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CatalogProductEditPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=catalog-product-edit-catalog-product-edit-module-es5.js.map