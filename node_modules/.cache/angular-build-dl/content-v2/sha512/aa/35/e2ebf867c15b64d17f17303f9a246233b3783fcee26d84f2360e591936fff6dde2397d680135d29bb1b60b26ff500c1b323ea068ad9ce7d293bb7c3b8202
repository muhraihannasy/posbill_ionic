(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
    /***/
    "2t07":
    /*!*****************************************************!*\
      !*** ./src/app/register/register-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function t07(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
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


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "b0Bx");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = /*#__PURE__*/_createClass(function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      });

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    },

    /***/
    "UgDh":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function UgDh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content mode=\"ios\">\r\n\r\n<div class=\"ion-padding\" *ngIf=\"!showForm\">\r\n  <div style=\"height:50px;\"></div>\r\n  <div class=\"ion-padding\">\r\n    <div class=\"ion-padding\">\r\n    <div class=\"ion-text-center\"><img src=\"assets/logo-horizontal.png\" width=\"150px\" />  </div>\r\n    <div style=\"height:30px;\"></div>\r\n    <ion-item><ion-label color=\"primary\">Buat akun POSbill GRATIS</ion-label></ion-item>\r\n    <ion-item><ion-label class=\"ion-text-wrap\"><small>Saya setuju dengan syarat dan ketentuan penggunaan aplikasi POSbill. <a href=\"https://posbill.id/syarat-ketentuan\">Baca syarat ketentuan</a></small></ion-label><ion-checkbox slot=\"end\" [(ngModel)]=\"terms\"></ion-checkbox></ion-item>\r\n    <ion-item lines=\"none\"><ion-label class=\"ion-text-wrap\"><small>Saya telah membaca kebijakan privasi aplikasi POSbill.  <a href=\"https://posbill.id/kebijakan-privasi\">Baca kebijakan privasi</a></small></ion-label><ion-checkbox slot=\"end\" [(ngModel)]=\"privacy\"></ion-checkbox></ion-item>\r\n\r\n    <div style=\"height:50px;\"></div>\r\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"loginByGoogle()\" [disabled]=\"!terms || !privacy\">\r\n      <ion-icon name=\"logo-google\" slot=\"start\"></ion-icon>\r\n      Daftar by Google</ion-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ion-padding register-body\" *ngIf=\"showForm\">\r\n<div>\r\n  <p style=\"text-align:center;\"><ion-text color=\"primary\">Daftar POSBill</ion-text></p>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Email</small></ion-label>\r\n      <ion-input type=\"email\" class=\"input-text\" size=\"large\" [(ngModel)]=\"email\"  readonly></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Nama lengkap</small></ion-label>\r\n      <ion-input class=\"input-text\" size=\"large\" [(ngModel)]=\"name\" autocapitalize=\"on\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Nama usaha atau brand</small></ion-label>\r\n      <ion-input class=\"input-text\" size=\"large\" [(ngModel)]=\"companyName\" autocapitalize=\"on\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Jenis usaha</small></ion-label>\r\n      <ion-select  interface=\"action-sheet\" [(ngModel)]=\"business_type_id\">\r\n        <ion-select-option value=\"\">- Pilih jenis usaha -</ion-select-option>\r\n        <ion-select-option *ngFor=\"let item of businessType\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Handphone</small></ion-label>\r\n      <ion-input type=\"tel\" class=\"input-text\" size=\"large\" [(ngModel)]=\"phone\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Password</small></ion-label>\r\n      <ion-input type=\"password\" class=\"input-text\" size=\"large\" [(ngModel)]=\"password\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Ulangi Password</small></ion-label>\r\n      <ion-input type=\"password\" class=\"input-text\" size=\"large\" [(ngModel)]=\"repassword\"></ion-input>\r\n    </ion-item>\r\n    <br/>\r\n    <ion-item-divider>Data outlet</ion-item-divider>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Nama outlet</small></ion-label>\r\n      <ion-input class=\"input-text\" size=\"large\" [(ngModel)]=\"outlet.name\" autocapitalize=\"on\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Alamat</small></ion-label>\r\n      <ion-input class=\"input-text\" size=\"large\" [(ngModel)]=\"outlet.address\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Provinsi</small></ion-label>\r\n      <ion-select interface=\"action-sheet\" [(ngModel)]=\"outlet.province_id\" (ionChange)=\"getCity()\">\r\n        <ion-select-option value=\"\">- Pilih provinsi -</ion-select-option>\r\n        <ion-select-option *ngFor=\"let prov of province\" value=\"{{prov.id}}\">{{prov.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Kota</small></ion-label>\r\n      <ion-select interface=\"action-sheet\" [(ngModel)]=\"outlet.city_id\" (ionChange)=\"getSubdistrict()\">\r\n        <ion-select-option *ngFor=\"let c of city\" [value]=\"c.id\">{{c.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Kecamatan</small></ion-label>\r\n      <ion-select interface=\"action-sheet\" [(ngModel)]=\"outlet.subdistrict_id\">\r\n        <ion-select-option *ngFor=\"let sub of subdistrict\" [value]=\"sub.id\">{{sub.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Telepon</small></ion-label>\r\n      <ion-input class=\"input-text\" size=\"large\" type=\"tel\" [(ngModel)]=\"outlet.phone\"></ion-input>\r\n    </ion-item>\r\n\r\n    </div>\r\n    <br/>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-button expand=\"block\" (click)=\"process('Premium')\">Coba versi <br/>Premium 30 Hari</ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-button expand=\"block\" fill=\"outline\" (click)=\"process('Lite')\">Daftar versi Lite <br/>GRATIS</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n\r\n    <br/>\r\n    <ion-button expand=\"block\" color=\"dark\" size=\"small\" fill=\"link\" [routerLink]=\"['/login']\">Kembali ke login</ion-button>\r\n    <br/>\r\n</div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "b0Bx":
    /*!*******************************************!*\
      !*** ./src/app/register/register.page.ts ***!
      \*******************************************/

    /*! exports provided: RegisterPage */

    /***/
    function b0Bx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.page.html */
      "UgDh");
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.page.scss */
      "x/mg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../global.service */
      "dVwY");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/google-plus/ngx */
      "up+p");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(http, global, router, toastController, storage, googlePlus) {
          _classCallCheck(this, RegisterPage);

          this.http = http;
          this.global = global;
          this.router = router;
          this.toastController = toastController;
          this.storage = storage;
          this.googlePlus = googlePlus; // showForm: any = true;
          // email: any = 'test1@posbill.id';

          this.showForm = false;
          this.email = '';
          this.name = '';
          this.companyName = '';
          this.phone = '';
          this.password = '';
          this.repassword = '';
          this.terms = false;
          this.privacy = false;
          this.outlet = {
            name: '',
            address: '',
            province_id: '',
            city: '',
            subdistrict_id: '',
            phone: ''
          };
          this.province = [];
          this.city = [];
          this.subdistrict = [];
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.global.loadingPresent('menyiapkan form registrasi..');
            this.getBusinessType();
          }
        }, {
          key: "getBusinessType",
          value: function getBusinessType() {
            var _this = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + 'auth/business_type', null, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this.businessType = data.type;
              }

              _this.getProvince();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getProvince",
          value: function getProvince() {
            var _this2 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + 'auth/outlet/province', null, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this2.province = data.province;
              }

              _this2.global.loadingDismiss();
            }, function (error) {
              console.log(error);

              _this2.global.loadingDismiss();
            });
          }
        }, {
          key: "getCity",
          value: function getCity() {
            var _this3 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: reqHeader
            };
            var postData = {
              province_id: this.outlet.province_id
            };
            this.http.post(this.global.base_url + 'auth/outlet/city', postData, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this3.city = data.city;
                _this3.outlet.city_id = data.city[0].id;
                _this3.subdistrict = [];
                _this3.outlet.subdistrict_id = '';
                console.log(_this3.outlet.city_id);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getSubdistrict",
          value: function getSubdistrict() {
            var _this4 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: reqHeader
            };
            var postData = {
              city_id: this.outlet.city_id
            };
            this.http.post(this.global.base_url + 'auth/outlet/subdistrict', postData, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this4.subdistrict = data.subdistrict;
                _this4.outlet.subdistrict_id = data.subdistrict[0].id;
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "process",
          value: function process(plan) {
            var _this5 = this;

            if (this.name == '' || this.companyName == '' || this.business_type_id == '' || this.phone == '' || this.email == '' || this.password == '' || this.repassword == '' || this.outlet.name == '' || this.outlet.address == '' || this.outlet.province_id == '' || this.outlet.city_id == '' || this.outlet.subdistrict_id == '') {
              this.global.toastPresent('Silahkan lengkapi semua kolom pendaftaran!');
              return false;
            }

            if (this.password != this.repassword) {
              this.global.toastPresent('Password dan konfirmasi password tidak sama!');
              return false;
            }

            this.global.loadingPresent('registrasi akun...');
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            var options = {
              headers: reqHeader
            };
            var postData = {
              "name": this.name,
              "phone": this.phone,
              "email": this.email,
              "company_name": this.companyName,
              "business_type_id": this.business_type_id,
              "password": this.password,
              "outlet": this.outlet,
              "package": plan
            };
            this.http.post(this.global.base_url + 'auth/register', postData, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                //---
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + data.token
                });
                var _options = {
                  headers: reqHeader
                };

                _this5.http.post(_this5.global.base_url + 'auth/me', null, _options).subscribe(function (data2) {
                  if (data2.id) {
                    var auth = {
                      token: data.token
                    };
                    var user = {
                      id: data2.id,
                      name: data2.name,
                      email: data2.email,
                      level: data2.level
                    };

                    _this5.storage.clear().then(function () {
                      _this5.storage.setObject('auth', auth);

                      _this5.storage.setObject('user', user);

                      _this5.global.toastPresent(data.message);

                      _this5.router.navigate(['/tabs/tab-pos/register']);
                    });
                  } else {
                    console.log("Unathorized");
                  }

                  _this5.global.loadingDismiss();
                }, function (error) {
                  console.log(error);
                });

                _this5.presentToast(data.message);
              } else {
                _this5.presentToast(data.message);
              }

              _this5.global.loadingDismiss();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000
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
        }, {
          key: "openForm",
          value: function openForm(res) {
            this.showForm = true;
            this.email = res.email;
          }
        }, {
          key: "loginByGoogle",
          value: function loginByGoogle() {
            var _this6 = this;

            this.googlePlus.login({}).then(function (res) {
              return _this6.openForm(res);
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }, {
          type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterPage);
      /***/
    },

    /***/
    "x/mg":
    /*!*********************************************!*\
      !*** ./src/app/register/register.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function xMg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-bottom:20px;\n}\n\n.register-body {\n  padding-top: 20px;\n  height: 100%;\n}\n\n.introduction {\n  padding-top: 100px;\n  background-color: #912775;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0MseUJBQUE7QUFWSCIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG59XHJcbi5yZWdpc3Rlci1ib2R5IHtcclxuICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIC8vIGNvbG9yOiNmZmY7XHJcblxyXG59XHJcblxyXG4uYmFja2dyb3VuZC1wdXJwbGUge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM5MTI3NzU7XHJcbn1cclxuLy9cclxuLy8gLmlucHV0LXRleHQge1xyXG4vLyAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztcclxuLy8gICBwYWRkaW5nOjEwcHg7XHJcbi8vIH1cclxuXHJcbi5pbnRyb2R1Y3Rpb24ge1xyXG4gIHBhZGRpbmctdG9wOjEwMHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTEyNzc1O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "x5bZ":
    /*!*********************************************!*\
      !*** ./src/app/register/register.module.ts ***!
      \*********************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function x5bZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-routing.module */
      "2t07");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "b0Bx");

      var RegisterPageModule = /*#__PURE__*/_createClass(function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      });

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=register-register-module-es5.js.map