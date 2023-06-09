(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help-chat-help-chat-module"], {
    /***/
    "/aI0":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help-chat/help-chat.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function aI0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" id=\"popover\" (click)=\"backButton()\">\r\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Admin Posbill</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" id=\"popover\" (click)=\"showPopover($event)\">\r\n        <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list lines=\"none\" *ngIf=\"messages\">\r\n    <ion-item-group class=\"chats-group\" *ngFor=\"let message of messages\">\r\n      <app-chat-box\r\n        [chat]=\"message\"\r\n        [current_user_id]=\"currentUserId\"\r\n      ></app-chat-box>\r\n    </ion-item-group>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar class=\"px-2\">\r\n    <div class=\"wrapper-footer\">\r\n      <div class=\"input\" *ngIf=\"typeMessage == 'message' \">\r\n        <input type=\"text\" class=\"input-message\" [(ngModel)]=\"message\" />\r\n\r\n        <div class=\"attachments\">\r\n          <div class=\"attach attach-file\">\r\n            <input type=\"file\" (change)=\"onFileSelected($event.target.files)\" />\r\n            <ion-icon name=\"attach-outline\"></ion-icon>\r\n          </div>\r\n          <div class=\"attach\" (click)=\"takePicture()\">\r\n            <ion-icon name=\"camera-outline\"></ion-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"preview\" *ngIf=\"typeMessage == 'file'\">\r\n        <ion-icon\r\n          name=\"close-circle-outline\"\r\n          (click)=\"onClosePreview()\"\r\n        ></ion-icon>\r\n      </div>\r\n\r\n      <div\r\n        class=\"preview\"\r\n        *ngIf=\"typeMessage == 'image'\"\r\n        [style.background-image]=\"'url(' + previewImageChat + ')'\"\r\n      >\r\n        <ion-icon\r\n          name=\"close-circle-outline\"\r\n          (click)=\"onClosePreview()\"\r\n        ></ion-icon>\r\n      </div>\r\n\r\n      <ion-button (click)=\"sendMessage()\">\r\n        <ion-icon name=\"send\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "3CPy":
    /*!***********************************************!*\
      !*** ./src/app/help-chat/help-chat.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function CPy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".input-message {\n  border: none;\n  background: transparent;\n}\n\n.input-message:focus {\n  outline: none;\n}\n\n.wrapper-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1em;\n}\n\n.wrapper-footer .input {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 1.5em;\n  overflow: hidden;\n  padding: 0.6em;\n  background-color: #f0f0f0;\n}\n\n.wrapper-footer .input input {\n  width: 90%;\n}\n\n.wrapper-footer .input .attachments {\n  display: flex;\n  align-items: center;\n  gap: 0.4em;\n  padding-right: 0.4em;\n}\n\n.wrapper-footer .input .attachments .attach {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4em;\n}\n\n.wrapper-footer .input .attach-file {\n  position: relative;\n  width: 1.2em;\n}\n\n.wrapper-footer .input .attach-file input {\n  opacity: 0;\n  z-index: 99;\n}\n\n.wrapper-footer .input .attach-file ion-icon {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n}\n\nion-footer .px-2 {\n  padding: 1em 1em;\n}\n\nion-footer .preview {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3em;\n  height: 3em;\n  background: grey;\n  background-position: center;\n  background-size: cover;\n  margin-bottom: 0.5em;\n  border-radius: 10px;\n  font-size: 2em;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlbHAtY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBRUYiLCJmaWxlIjoiaGVscC1jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1tZXNzYWdlIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1tZXNzYWdlOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ud3JhcHBlci1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxZW07XHJcbn1cclxuXHJcbi53cmFwcGVyLWZvb3RlciAuaW5wdXQge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMC42ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxufVxyXG4ud3JhcHBlci1mb290ZXIgLmlucHV0IGlucHV0IHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ud3JhcHBlci1mb290ZXIgLmlucHV0IC5hdHRhY2htZW50cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC40ZW07XHJcbiAgcGFkZGluZy1yaWdodDogMC40ZW07XHJcbn1cclxuXHJcbi53cmFwcGVyLWZvb3RlciAuaW5wdXQgLmF0dGFjaG1lbnRzIC5hdHRhY2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG59XHJcblxyXG4ud3JhcHBlci1mb290ZXIgLmlucHV0IC5hdHRhY2gtZmlsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxLjJlbTtcclxufVxyXG5cclxuLndyYXBwZXItZm9vdGVyIC5pbnB1dCAuYXR0YWNoLWZpbGUgaW5wdXQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi53cmFwcGVyLWZvb3RlciAuaW5wdXQgLmF0dGFjaC1maWxlIGlvbi1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIgLnB4LTIge1xyXG4gIHBhZGRpbmc6IDFlbSAxZW07XHJcbn1cclxuXHJcbmlvbi1mb290ZXIgLnByZXZpZXcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogM2VtO1xyXG4gIGhlaWdodDogM2VtO1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "3Kre":
    /*!************************************************************!*\
      !*** ./node_modules/@firebase/analytics/dist/index.esm.js ***!
      \************************************************************/

    /*! exports provided: factory, getGlobalVars, registerAnalytics, resetGlobalVars, settings */

    /***/
    function Kre(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "factory", function () {
        return factory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getGlobalVars", function () {
        return getGlobalVars;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerAnalytics", function () {
        return registerAnalytics;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resetGlobalVars", function () {
        return resetGlobalVars;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "settings", function () {
        return settings;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "os0x");
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @firebase/app */
      "wj3C");
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _firebase_installations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @firebase/installations */
      "fSjL");
      /* harmony import */


      var _firebase_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @firebase/logger */
      "q/0M");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @firebase/util */
      "zVF4");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_firebase_util__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @firebase/component */
      "S+S0");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_5__);
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Key to attach FID to in gtag params.


      var GA_FID_KEY = 'firebase_id';
      var ORIGIN_KEY = 'origin';
      var FETCH_TIMEOUT_MILLIS = 60 * 1000;
      var DYNAMIC_CONFIG_URL = 'https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig';
      var GTAG_URL = 'https://www.googletagmanager.com/gtag/js';
      var GtagCommand;

      (function (GtagCommand) {
        GtagCommand["EVENT"] = "event";
        GtagCommand["SET"] = "set";
        GtagCommand["CONFIG"] = "config";
      })(GtagCommand || (GtagCommand = {}));
      /*
       * Officially recommended event names for gtag.js
       * Any other string is also allowed.
       */


      var EventName;

      (function (EventName) {
        EventName["ADD_SHIPPING_INFO"] = "add_shipping_info";
        EventName["ADD_PAYMENT_INFO"] = "add_payment_info";
        EventName["ADD_TO_CART"] = "add_to_cart";
        EventName["ADD_TO_WISHLIST"] = "add_to_wishlist";
        EventName["BEGIN_CHECKOUT"] = "begin_checkout";
        /** @deprecated */

        EventName["CHECKOUT_PROGRESS"] = "checkout_progress";
        EventName["EXCEPTION"] = "exception";
        EventName["GENERATE_LEAD"] = "generate_lead";
        EventName["LOGIN"] = "login";
        EventName["PAGE_VIEW"] = "page_view";
        EventName["PURCHASE"] = "purchase";
        EventName["REFUND"] = "refund";
        EventName["REMOVE_FROM_CART"] = "remove_from_cart";
        EventName["SCREEN_VIEW"] = "screen_view";
        EventName["SEARCH"] = "search";
        EventName["SELECT_CONTENT"] = "select_content";
        EventName["SELECT_ITEM"] = "select_item";
        EventName["SELECT_PROMOTION"] = "select_promotion";
        /** @deprecated */

        EventName["SET_CHECKOUT_OPTION"] = "set_checkout_option";
        EventName["SHARE"] = "share";
        EventName["SIGN_UP"] = "sign_up";
        EventName["TIMING_COMPLETE"] = "timing_complete";
        EventName["VIEW_CART"] = "view_cart";
        EventName["VIEW_ITEM"] = "view_item";
        EventName["VIEW_ITEM_LIST"] = "view_item_list";
        EventName["VIEW_PROMOTION"] = "view_promotion";
        EventName["VIEW_SEARCH_RESULTS"] = "view_search_results";
      })(EventName || (EventName = {}));
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Logs an analytics event through the Firebase SDK.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param eventName Google Analytics event name, choose from standard list or use a custom string.
       * @param eventParams Analytics event parameters.
       */


      function _logEvent(gtagFunction, initializationPromise, eventName, eventParams, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var measurementId, params;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!(options && options.global)) return [3
                /*break*/
                , 1];
                gtagFunction(GtagCommand.EVENT, eventName, eventParams);
                return [2
                /*return*/
                ];

              case 1:
                return [4
                /*yield*/
                , initializationPromise];

              case 2:
                measurementId = _a.sent();
                params = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, eventParams), {
                  'send_to': measurementId
                });
                gtagFunction(GtagCommand.EVENT, eventName, params);
                _a.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Set screen_name parameter for this Google Analytics ID.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param screenName Screen name string to set.
       */


      function _setCurrentScreen(gtagFunction, initializationPromise, screenName, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var measurementId;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!(options && options.global)) return [3
                /*break*/
                , 1];
                gtagFunction(GtagCommand.SET, {
                  'screen_name': screenName
                });
                return [2
                /*return*/
                , Promise.resolve()];

              case 1:
                return [4
                /*yield*/
                , initializationPromise];

              case 2:
                measurementId = _a.sent();
                gtagFunction(GtagCommand.CONFIG, measurementId, {
                  update: true,
                  'screen_name': screenName
                });
                _a.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Set user_id parameter for this Google Analytics ID.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param id User ID string to set
       */


      function _setUserId(gtagFunction, initializationPromise, id, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var measurementId;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!(options && options.global)) return [3
                /*break*/
                , 1];
                gtagFunction(GtagCommand.SET, {
                  'user_id': id
                });
                return [2
                /*return*/
                , Promise.resolve()];

              case 1:
                return [4
                /*yield*/
                , initializationPromise];

              case 2:
                measurementId = _a.sent();
                gtagFunction(GtagCommand.CONFIG, measurementId, {
                  update: true,
                  'user_id': id
                });
                _a.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Set all other user properties other than user_id and screen_name.
       *
       * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
       * @param properties Map of user properties to set
       */


      function _setUserProperties(gtagFunction, initializationPromise, properties, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var flatProperties, _i, _a, key, measurementId;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                if (!(options && options.global)) return [3
                /*break*/
                , 1];
                flatProperties = {};

                for (_i = 0, _a = Object.keys(properties); _i < _a.length; _i++) {
                  key = _a[_i]; // use dot notation for merge behavior in gtag.js

                  flatProperties["user_properties." + key] = properties[key];
                }

                gtagFunction(GtagCommand.SET, flatProperties);
                return [2
                /*return*/
                , Promise.resolve()];

              case 1:
                return [4
                /*yield*/
                , initializationPromise];

              case 2:
                measurementId = _b.sent();
                gtagFunction(GtagCommand.CONFIG, measurementId, {
                  update: true,
                  'user_properties': properties
                });
                _b.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Set whether collection is enabled for this ID.
       *
       * @param enabled If true, collection is enabled for this ID.
       */


      function _setAnalyticsCollectionEnabled(initializationPromise, enabled) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var measurementId;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , initializationPromise];

              case 1:
                measurementId = _a.sent();
                window["ga-disable-" + measurementId] = !enabled;
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]('@firebase/analytics');
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Inserts gtag script tag into the page to asynchronously download gtag.
       * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
       */

      function insertScriptTag(dataLayerName) {
        var script = document.createElement('script'); // We are not providing an analyticsId in the URL because it would trigger a `page_view`
        // without fid. We will initialize ga-id using gtag (config) command together with fid.

        script.src = GTAG_URL + "?l=" + dataLayerName;
        script.async = true;
        document.head.appendChild(script);
      }
      /**
       * Get reference to, or create, global datalayer.
       * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
       */


      function getOrCreateDataLayer(dataLayerName) {
        // Check for existing dataLayer and create if needed.
        var dataLayer = [];

        if (Array.isArray(window[dataLayerName])) {
          dataLayer = window[dataLayerName];
        } else {
          window[dataLayerName] = dataLayer;
        }

        return dataLayer;
      }
      /**
       * Wrapped gtag logic when gtag is called with 'config' command.
       *
       * @param gtagCore Basic gtag function that just appends to dataLayer.
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
       * @param measurementId GA Measurement ID to set config for.
       * @param gtagParams Gtag config params to set.
       */


      function gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var correspondingAppId, dynamicConfigResults, foundConfig, e_1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                correspondingAppId = measurementIdToAppId[measurementId];
                _a.label = 1;

              case 1:
                _a.trys.push([1, 7,, 8]);

                if (!correspondingAppId) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , initializationPromisesMap[correspondingAppId]];

              case 2:
                _a.sent();

                return [3
                /*break*/
                , 6];

              case 3:
                return [4
                /*yield*/
                , Promise.all(dynamicConfigPromisesList)];

              case 4:
                dynamicConfigResults = _a.sent();
                foundConfig = dynamicConfigResults.find(function (config) {
                  return config.measurementId === measurementId;
                });
                if (!foundConfig) return [3
                /*break*/
                , 6];
                return [4
                /*yield*/
                , initializationPromisesMap[foundConfig.appId]];

              case 5:
                _a.sent();

                _a.label = 6;

              case 6:
                return [3
                /*break*/
                , 8];

              case 7:
                e_1 = _a.sent();
                logger.error(e_1);
                return [3
                /*break*/
                , 8];

              case 8:
                gtagCore(GtagCommand.CONFIG, measurementId, gtagParams);
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Wrapped gtag logic when gtag is called with 'event' command.
       *
       * @param gtagCore Basic gtag function that just appends to dataLayer.
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementId GA Measurement ID to log event to.
       * @param gtagParams Params to log with this event.
       */


      function gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var initializationPromisesToWaitFor, gaSendToList, dynamicConfigResults, _loop_1, _i, gaSendToList_1, sendToId, state_1, e_2;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 4,, 5]);

                initializationPromisesToWaitFor = [];
                if (!(gtagParams && gtagParams['send_to'])) return [3
                /*break*/
                , 2];
                gaSendToList = gtagParams['send_to']; // Make it an array if is isn't, so it can be dealt with the same way.

                if (!Array.isArray(gaSendToList)) {
                  gaSendToList = [gaSendToList];
                }

                return [4
                /*yield*/
                , Promise.all(dynamicConfigPromisesList)];

              case 1:
                dynamicConfigResults = _a.sent();

                _loop_1 = function _loop_1(sendToId) {
                  // Any fetched dynamic measurement ID that matches this 'send_to' ID
                  var foundConfig = dynamicConfigResults.find(function (config) {
                    return config.measurementId === sendToId;
                  });
                  var initializationPromise = foundConfig && initializationPromisesMap[foundConfig.appId];

                  if (initializationPromise) {
                    initializationPromisesToWaitFor.push(initializationPromise);
                  } else {
                    // Found an item in 'send_to' that is not associated
                    // directly with an FID, possibly a group.  Empty this array,
                    // exit the loop early, and let it get populated below.
                    initializationPromisesToWaitFor = [];
                    return "break";
                  }
                };

                for (_i = 0, gaSendToList_1 = gaSendToList; _i < gaSendToList_1.length; _i++) {
                  sendToId = gaSendToList_1[_i];
                  state_1 = _loop_1(sendToId);
                  if (state_1 === "break") break;
                }

                _a.label = 2;

              case 2:
                // This will be unpopulated if there was no 'send_to' field , or
                // if not all entries in the 'send_to' field could be mapped to
                // a FID. In these cases, wait on all pending initialization promises.
                if (initializationPromisesToWaitFor.length === 0) {
                  initializationPromisesToWaitFor = Object.values(initializationPromisesMap);
                } // Run core gtag function with args after all relevant initialization
                // promises have been resolved.


                return [4
                /*yield*/
                , Promise.all(initializationPromisesToWaitFor)];

              case 3:
                // Run core gtag function with args after all relevant initialization
                // promises have been resolved.
                _a.sent(); // Workaround for http://b/141370449 - third argument cannot be undefined.


                gtagCore(GtagCommand.EVENT, measurementId, gtagParams || {});
                return [3
                /*break*/
                , 5];

              case 4:
                e_2 = _a.sent();
                logger.error(e_2);
                return [3
                /*break*/
                , 5];

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Wraps a standard gtag function with extra code to wait for completion of
       * relevant initialization promises before sending requests.
       *
       * @param gtagCore Basic gtag function that just appends to dataLayer.
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
       */


      function wrapGtag(gtagCore,
      /**
       * Allows wrapped gtag calls to wait on whichever intialization promises are required,
       * depending on the contents of the gtag params' `send_to` field, if any.
       */
      initializationPromisesMap,
      /**
       * Wrapped gtag calls sometimes require all dynamic config fetches to have returned
       * before determining what initialization promises (which include FIDs) to wait for.
       */
      dynamicConfigPromisesList,
      /**
       * Wrapped gtag config calls can narrow down which initialization promise (with FID)
       * to wait for if the measurementId is already fetched, by getting the corresponding appId,
       * which is the key for the initialization promises map.
       */
      measurementIdToAppId) {
        /**
         * Wrapper around gtag that ensures FID is sent with gtag calls.
         * @param command Gtag command type.
         * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
         * @param gtagParams Params if event is EVENT/CONFIG.
         */
        function gtagWrapper(command, idOrNameOrParams, gtagParams) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e_3;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  _a.trys.push([0, 6,, 7]);

                  if (!(command === GtagCommand.EVENT)) return [3
                  /*break*/
                  , 2]; // If EVENT, second arg must be measurementId.

                  return [4
                  /*yield*/
                  , gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, idOrNameOrParams, gtagParams)];

                case 1:
                  // If EVENT, second arg must be measurementId.
                  _a.sent();

                  return [3
                  /*break*/
                  , 5];

                case 2:
                  if (!(command === GtagCommand.CONFIG)) return [3
                  /*break*/
                  , 4]; // If CONFIG, second arg must be measurementId.

                  return [4
                  /*yield*/
                  , gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, idOrNameOrParams, gtagParams)];

                case 3:
                  // If CONFIG, second arg must be measurementId.
                  _a.sent();

                  return [3
                  /*break*/
                  , 5];

                case 4:
                  // If SET, second arg must be params.
                  gtagCore(GtagCommand.SET, idOrNameOrParams);
                  _a.label = 5;

                case 5:
                  return [3
                  /*break*/
                  , 7];

                case 6:
                  e_3 = _a.sent();
                  logger.error(e_3);
                  return [3
                  /*break*/
                  , 7];

                case 7:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }

        return gtagWrapper;
      }
      /**
       * Creates global gtag function or wraps existing one if found.
       * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
       * 'event' calls that belong to the GAID associated with this Firebase instance.
       *
       * @param initializationPromisesMap Map of appIds to their initialization promises.
       * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
       * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
       * @param dataLayerName Name of global GA datalayer array.
       * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified).
       */


      function wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagFunctionName) {
        // Create a basic core gtag function
        var gtagCore = function gtagCore() {
          var _args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
          } // Must push IArguments object, not an array.


          window[dataLayerName].push(arguments);
        }; // Replace it with existing one if found


        if (window[gtagFunctionName] && typeof window[gtagFunctionName] === 'function') {
          // @ts-ignore
          gtagCore = window[gtagFunctionName];
        }

        window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId);
        return {
          gtagCore: gtagCore,
          wrappedGtag: window[gtagFunctionName]
        };
      }
      /**
       * Returns first script tag in DOM matching our gtag url pattern.
       */


      function findGtagScriptOnPage() {
        var scriptTags = window.document.getElementsByTagName('script');

        for (var _i = 0, _a = Object.values(scriptTags); _i < _a.length; _i++) {
          var tag = _a[_i];

          if (tag.src && tag.src.includes(GTAG_URL)) {
            return tag;
          }
        }

        return null;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var _a;

      var ERRORS = (_a = {}, _a["already-exists"
      /* ALREADY_EXISTS */
      ] = 'A Firebase Analytics instance with the appId {$id} ' + ' already exists. ' + 'Only one Firebase Analytics instance can be created for each appId.', _a["already-initialized"
      /* ALREADY_INITIALIZED */
      ] = 'Firebase Analytics has already been initialized.' + 'settings() must be called before initializing any Analytics instance' + 'or it will have no effect.', _a["interop-component-reg-failed"
      /* INTEROP_COMPONENT_REG_FAILED */
      ] = 'Firebase Analytics Interop Component failed to instantiate: {$reason}', _a["invalid-analytics-context"
      /* INVALID_ANALYTICS_CONTEXT */
      ] = 'Firebase Analytics is not supported in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}', _a["indexeddb-unavailable"
      /* INDEXEDDB_UNAVAILABLE */
      ] = 'IndexedDB unavailable or restricted in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}', _a["fetch-throttle"
      /* FETCH_THROTTLE */
      ] = 'The config fetch request timed out while in an exponential backoff state.' + ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.', _a["config-fetch-failed"
      /* CONFIG_FETCH_FAILED */
      ] = 'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}', _a["no-api-key"
      /* NO_API_KEY */
      ] = 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid API key.', _a["no-app-id"
      /* NO_APP_ID */
      ] = 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid app ID.', _a);
      var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_4__["ErrorFactory"]('analytics', 'Analytics', ERRORS);
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Backoff factor for 503 errors, which we want to be conservative about
       * to avoid overloading servers. Each retry interval will be
       * BASE_INTERVAL_MILLIS * LONG_RETRY_FACTOR ^ retryCount, so the second one
       * will be ~30 seconds (with fuzzing).
       */

      var LONG_RETRY_FACTOR = 30;
      /**
       * Base wait interval to multiplied by backoffFactor^backoffCount.
       */

      var BASE_INTERVAL_MILLIS = 1000;
      /**
       * Stubbable retry data storage class.
       */

      var RetryData =
      /** @class */
      function () {
        function RetryData(throttleMetadata, intervalMillis) {
          if (throttleMetadata === void 0) {
            throttleMetadata = {};
          }

          if (intervalMillis === void 0) {
            intervalMillis = BASE_INTERVAL_MILLIS;
          }

          this.throttleMetadata = throttleMetadata;
          this.intervalMillis = intervalMillis;
        }

        RetryData.prototype.getThrottleMetadata = function (appId) {
          return this.throttleMetadata[appId];
        };

        RetryData.prototype.setThrottleMetadata = function (appId, metadata) {
          this.throttleMetadata[appId] = metadata;
        };

        RetryData.prototype.deleteThrottleMetadata = function (appId) {
          delete this.throttleMetadata[appId];
        };

        return RetryData;
      }();

      var defaultRetryData = new RetryData();
      /**
       * Set GET request headers.
       * @param apiKey App API key.
       */

      function getHeaders(apiKey) {
        return new Headers({
          Accept: 'application/json',
          'x-goog-api-key': apiKey
        });
      }
      /**
       * Fetches dynamic config from backend.
       * @param app Firebase app to fetch config for.
       */


      function fetchDynamicConfig(appFields) {
        var _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var appId, apiKey, request, appUrl, response, errorMessage, jsonResponse, _ignored_1;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                appId = appFields.appId, apiKey = appFields.apiKey;
                request = {
                  method: 'GET',
                  headers: getHeaders(apiKey)
                };
                appUrl = DYNAMIC_CONFIG_URL.replace('{app-id}', appId);
                return [4
                /*yield*/
                , fetch(appUrl, request)];

              case 1:
                response = _b.sent();
                if (!(response.status !== 200 && response.status !== 304)) return [3
                /*break*/
                , 6];
                errorMessage = '';
                _b.label = 2;

              case 2:
                _b.trys.push([2, 4,, 5]);

                return [4
                /*yield*/
                , response.json()];

              case 3:
                jsonResponse = _b.sent();

                if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
                  errorMessage = jsonResponse.error.message;
                }

                return [3
                /*break*/
                , 5];

              case 4:
                _ignored_1 = _b.sent();
                return [3
                /*break*/
                , 5];

              case 5:
                throw ERROR_FACTORY.create("config-fetch-failed"
                /* CONFIG_FETCH_FAILED */
                , {
                  httpStatus: response.status,
                  responseMessage: errorMessage
                });

              case 6:
                return [2
                /*return*/
                , response.json()];
            }
          });
        });
      }
      /**
       * Fetches dynamic config from backend, retrying if failed.
       * @param app Firebase app to fetch config for.
       */


      function fetchDynamicConfigWithRetry(app, // retryData and timeoutMillis are parameterized to allow passing a different value for testing.
      retryData, timeoutMillis) {
        if (retryData === void 0) {
          retryData = defaultRetryData;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var _a, appId, apiKey, measurementId, throttleMetadata, signal;

          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            _a = app.options, appId = _a.appId, apiKey = _a.apiKey, measurementId = _a.measurementId;

            if (!appId) {
              throw ERROR_FACTORY.create("no-app-id"
              /* NO_APP_ID */
              );
            }

            if (!apiKey) {
              if (measurementId) {
                return [2
                /*return*/
                , {
                  measurementId: measurementId,
                  appId: appId
                }];
              }

              throw ERROR_FACTORY.create("no-api-key"
              /* NO_API_KEY */
              );
            }

            throttleMetadata = retryData.getThrottleMetadata(appId) || {
              backoffCount: 0,
              throttleEndTimeMillis: Date.now()
            };
            signal = new AnalyticsAbortSignal();
            setTimeout(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                  // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
                  signal.abort();
                  return [2
                  /*return*/
                  ];
                });
              });
            }, timeoutMillis !== undefined ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
            return [2
            /*return*/
            , attemptFetchDynamicConfigWithRetry({
              appId: appId,
              apiKey: apiKey,
              measurementId: measurementId
            }, throttleMetadata, signal, retryData)];
          });
        });
      }
      /**
       * Runs one retry attempt.
       * @param appFields Necessary app config fields.
       * @param throttleMetadata Ongoing metadata to determine throttling times.
       * @param signal Abort signal.
       */


      function attemptFetchDynamicConfigWithRetry(appFields, _a, signal, retryData // for testing
      ) {
        var throttleEndTimeMillis = _a.throttleEndTimeMillis,
            backoffCount = _a.backoffCount;

        if (retryData === void 0) {
          retryData = defaultRetryData;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var appId, measurementId, e_1, response, e_2, backoffMillis, throttleMetadata;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                appId = appFields.appId, measurementId = appFields.measurementId;
                _b.label = 1;

              case 1:
                _b.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , setAbortableTimeout(signal, throttleEndTimeMillis)];

              case 2:
                _b.sent();

                return [3
                /*break*/
                , 4];

              case 3:
                e_1 = _b.sent();

                if (measurementId) {
                  logger.warn("Timed out fetching this Firebase app's measurement ID from the server." + (" Falling back to the measurement ID " + measurementId) + (" provided in the \"measurementId\" field in the local Firebase config. [" + e_1.message + "]"));
                  return [2
                  /*return*/
                  , {
                    appId: appId,
                    measurementId: measurementId
                  }];
                }

                throw e_1;

              case 4:
                _b.trys.push([4, 6,, 7]);

                return [4
                /*yield*/
                , fetchDynamicConfig(appFields)];

              case 5:
                response = _b.sent(); // Note the SDK only clears throttle state if response is success or non-retriable.

                retryData.deleteThrottleMetadata(appId);
                return [2
                /*return*/
                , response];

              case 6:
                e_2 = _b.sent();

                if (!isRetriableError(e_2)) {
                  retryData.deleteThrottleMetadata(appId);

                  if (measurementId) {
                    logger.warn("Failed to fetch this Firebase app's measurement ID from the server." + (" Falling back to the measurement ID " + measurementId) + (" provided in the \"measurementId\" field in the local Firebase config. [" + e_2.message + "]"));
                    return [2
                    /*return*/
                    , {
                      appId: appId,
                      measurementId: measurementId
                    }];
                  } else {
                    throw e_2;
                  }
                }

                backoffMillis = Number(e_2.httpStatus) === 503 ? Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["calculateBackoffMillis"])(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["calculateBackoffMillis"])(backoffCount, retryData.intervalMillis);
                throttleMetadata = {
                  throttleEndTimeMillis: Date.now() + backoffMillis,
                  backoffCount: backoffCount + 1
                }; // Persists state.

                retryData.setThrottleMetadata(appId, throttleMetadata);
                logger.debug("Calling attemptFetch again in " + backoffMillis + " millis");
                return [2
                /*return*/
                , attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData)];

              case 7:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Supports waiting on a backoff by:
       *
       * <ul>
       *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
       *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
       *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
       *       request appear the same.</li>
       * </ul>
       *
       * <p>Visible for testing.
       */


      function setAbortableTimeout(signal, throttleEndTimeMillis) {
        return new Promise(function (resolve, reject) {
          // Derives backoff from given end time, normalizing negative numbers to zero.
          var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
          var timeout = setTimeout(resolve, backoffMillis); // Adds listener, rather than sets onabort, because signal is a shared object.

          signal.addEventListener(function () {
            clearTimeout(timeout); // If the request completes before this timeout, the rejection has no effect.

            reject(ERROR_FACTORY.create("fetch-throttle"
            /* FETCH_THROTTLE */
            , {
              throttleEndTimeMillis: throttleEndTimeMillis
            }));
          });
        });
      }
      /**
       * Returns true if the {@link Error} indicates a fetch request may succeed later.
       */


      function isRetriableError(e) {
        if (!(e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_4__["FirebaseError"])) {
          return false;
        } // Uses string index defined by ErrorData, which FirebaseError implements.


        var httpStatus = Number(e['httpStatus']);
        return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
      }
      /**
       * Shims a minimal AbortSignal (copied from Remote Config).
       *
       * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
       * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
       * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
       * swapped out if/when we do.
       */


      var AnalyticsAbortSignal =
      /** @class */
      function () {
        function AnalyticsAbortSignal() {
          this.listeners = [];
        }

        AnalyticsAbortSignal.prototype.addEventListener = function (listener) {
          this.listeners.push(listener);
        };

        AnalyticsAbortSignal.prototype.abort = function () {
          this.listeners.forEach(function (listener) {
            return listener();
          });
        };

        return AnalyticsAbortSignal;
      }();
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function validateIndexedDB() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var e_1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["isIndexedDBAvailable"])()) return [3
                /*break*/
                , 1];
                logger.warn(ERROR_FACTORY.create("indexeddb-unavailable"
                /* INDEXEDDB_UNAVAILABLE */
                , {
                  errorInfo: 'IndexedDB is not available in this environment.'
                }).message);
                return [2
                /*return*/
                , false];

              case 1:
                _a.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["validateIndexedDBOpenable"])()];

              case 2:
                _a.sent();

                return [3
                /*break*/
                , 4];

              case 3:
                e_1 = _a.sent();
                logger.warn(ERROR_FACTORY.create("indexeddb-unavailable"
                /* INDEXEDDB_UNAVAILABLE */
                , {
                  errorInfo: e_1
                }).message);
                return [2
                /*return*/
                , false];

              case 4:
                return [2
                /*return*/
                , true];
            }
          });
        });
      }
      /**
       * Initialize the analytics instance in gtag.js by calling config command with fid.
       *
       * NOTE: We combine analytics initialization and setting fid together because we want fid to be
       * part of the `page_view` event that's sent during the initialization
       * @param app Firebase app
       * @param gtagCore The gtag function that's not wrapped.
       * @param dynamicConfigPromisesList Array of all dynamic config promises.
       * @param measurementIdToAppId Maps measurementID to appID.
       * @param installations FirebaseInstallations instance.
       *
       * @returns Measurement ID.
       */


      function initializeIds(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCore) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var dynamicConfigPromise, fidPromise, _a, dynamicConfig, fid, configProperties;

          var _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
            switch (_c.label) {
              case 0:
                dynamicConfigPromise = fetchDynamicConfigWithRetry(app); // Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.

                dynamicConfigPromise.then(function (config) {
                  measurementIdToAppId[config.measurementId] = config.appId;

                  if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
                    logger.warn("The measurement ID in the local Firebase config (" + app.options.measurementId + ")" + (" does not match the measurement ID fetched from the server (" + config.measurementId + ").") + " To ensure analytics events are always sent to the correct Analytics property," + " update the" + " measurement ID field in the local config or remove it from the local config.");
                  }
                })["catch"](function (e) {
                  return logger.error(e);
                }); // Add to list to track state of all dynamic config promises.

                dynamicConfigPromisesList.push(dynamicConfigPromise);
                fidPromise = validateIndexedDB().then(function (envIsValid) {
                  if (envIsValid) {
                    return installations.getId();
                  } else {
                    return undefined;
                  }
                });
                return [4
                /*yield*/
                , Promise.all([dynamicConfigPromise, fidPromise])];

              case 1:
                _a = _c.sent(), dynamicConfig = _a[0], fid = _a[1]; // This command initializes gtag.js and only needs to be called once for the entire web app,
                // but since it is idempotent, we can call it multiple times.
                // We keep it together with other initialization logic for better code structure.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any

                gtagCore('js', new Date());
                configProperties = (_b = {}, // guard against developers accidentally setting properties with prefix `firebase_`
                _b[ORIGIN_KEY] = 'firebase', _b.update = true, _b);

                if (fid != null) {
                  configProperties[GA_FID_KEY] = fid;
                } // It should be the first config command called on this GA-ID
                // Initialize this GA-ID and set FID on it using the gtag config API.


                gtagCore(GtagCommand.CONFIG, dynamicConfig.measurementId, configProperties);
                return [2
                /*return*/
                , dynamicConfig.measurementId];
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Maps appId to full initialization promise. Wrapped gtag calls must wait on
       * all or some of these, depending on the call's `send_to` param and the status
       * of the dynamic config fetches (see below).
       */


      var initializationPromisesMap = {};
      /**
       * List of dynamic config fetch promises. In certain cases, wrapped gtag calls
       * wait on all these to be complete in order to determine if it can selectively
       * wait for only certain initialization (FID) promises or if it must wait for all.
       */

      var dynamicConfigPromisesList = [];
      /**
       * Maps fetched measurementIds to appId. Populated when the app's dynamic config
       * fetch completes. If already populated, gtag config calls can use this to
       * selectively wait for only this app's initialization promise (FID) instead of all
       * initialization promises.
       */

      var measurementIdToAppId = {};
      /**
       * Name for window global data layer array used by GA: defaults to 'dataLayer'.
       */

      var dataLayerName = 'dataLayer';
      /**
       * Name for window global gtag function used by GA: defaults to 'gtag'.
       */

      var gtagName = 'gtag';
      /**
       * Reproduction of standard gtag function or reference to existing
       * gtag function on window object.
       */

      var gtagCoreFunction;
      /**
       * Wrapper around gtag function that ensures FID is sent with all
       * relevant event and config calls.
       */

      var wrappedGtagFunction;
      /**
       * Flag to ensure page initialization steps (creation or wrapping of
       * dataLayer and gtag script) are only run once per page load.
       */

      var globalInitDone = false;
      /**
       * For testing
       */

      function resetGlobalVars(newGlobalInitDone, newInitializationPromisesMap, newDynamicPromises) {
        if (newGlobalInitDone === void 0) {
          newGlobalInitDone = false;
        }

        if (newInitializationPromisesMap === void 0) {
          newInitializationPromisesMap = {};
        }

        if (newDynamicPromises === void 0) {
          newDynamicPromises = [];
        }

        globalInitDone = newGlobalInitDone;
        initializationPromisesMap = newInitializationPromisesMap;
        dynamicConfigPromisesList = newDynamicPromises;
        dataLayerName = 'dataLayer';
        gtagName = 'gtag';
      }
      /**
       * For testing
       */


      function getGlobalVars() {
        return {
          initializationPromisesMap: initializationPromisesMap,
          dynamicConfigPromisesList: dynamicConfigPromisesList
        };
      }
      /**
       * This must be run before calling firebase.analytics() or it won't
       * have any effect.
       * @param options Custom gtag and dataLayer names.
       */


      function settings(options) {
        if (globalInitDone) {
          throw ERROR_FACTORY.create("already-initialized"
          /* ALREADY_INITIALIZED */
          );
        }

        if (options.dataLayerName) {
          dataLayerName = options.dataLayerName;
        }

        if (options.gtagName) {
          gtagName = options.gtagName;
        }
      }
      /**
       * Returns true if no environment mismatch is found.
       * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
       * error that also lists details for each mismatch found.
       */


      function warnOnBrowserContextMismatch() {
        var mismatchedEnvMessages = [];

        if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["isBrowserExtension"])()) {
          mismatchedEnvMessages.push('This is a browser extension environment.');
        }

        if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["areCookiesEnabled"])()) {
          mismatchedEnvMessages.push('Cookies are not available.');
        }

        if (mismatchedEnvMessages.length > 0) {
          var details = mismatchedEnvMessages.map(function (message, index) {
            return "(" + (index + 1) + ") " + message;
          }).join(' ');
          var err = ERROR_FACTORY.create("invalid-analytics-context"
          /* INVALID_ANALYTICS_CONTEXT */
          , {
            errorInfo: details
          });
          logger.warn(err.message);
        }
      }

      function factory(app, installations) {
        warnOnBrowserContextMismatch();
        var appId = app.options.appId;

        if (!appId) {
          throw ERROR_FACTORY.create("no-app-id"
          /* NO_APP_ID */
          );
        }

        if (!app.options.apiKey) {
          if (app.options.measurementId) {
            logger.warn("The \"apiKey\" field is empty in the local Firebase config. This is needed to fetch the latest" + (" measurement ID for this Firebase app. Falling back to the measurement ID " + app.options.measurementId) + " provided in the \"measurementId\" field in the local Firebase config.");
          } else {
            throw ERROR_FACTORY.create("no-api-key"
            /* NO_API_KEY */
            );
          }
        }

        if (initializationPromisesMap[appId] != null) {
          throw ERROR_FACTORY.create("already-exists"
          /* ALREADY_EXISTS */
          , {
            id: appId
          });
        }

        if (!globalInitDone) {
          // Steps here should only be done once per page: creation or wrapping
          // of dataLayer and global gtag function.
          // Detect if user has already put the gtag <script> tag on this page.
          if (!findGtagScriptOnPage()) {
            insertScriptTag(dataLayerName);
          }

          getOrCreateDataLayer(dataLayerName);

          var _a = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName),
              wrappedGtag = _a.wrappedGtag,
              gtagCore = _a.gtagCore;

          wrappedGtagFunction = wrappedGtag;
          gtagCoreFunction = gtagCore;
          globalInitDone = true;
        } // Async but non-blocking.
        // This map reflects the completion state of all promises for each appId.


        initializationPromisesMap[appId] = initializeIds(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction);
        var analyticsInstance = {
          app: app,
          // Public methods return void for API simplicity and to better match gtag,
          // while internal implementations return promises.
          logEvent: function logEvent(eventName, eventParams, options) {
            _logEvent(wrappedGtagFunction, initializationPromisesMap[appId], eventName, eventParams, options)["catch"](function (e) {
              return logger.error(e);
            });
          },
          setCurrentScreen: function setCurrentScreen(screenName, options) {
            _setCurrentScreen(wrappedGtagFunction, initializationPromisesMap[appId], screenName, options)["catch"](function (e) {
              return logger.error(e);
            });
          },
          setUserId: function setUserId(id, options) {
            _setUserId(wrappedGtagFunction, initializationPromisesMap[appId], id, options)["catch"](function (e) {
              return logger.error(e);
            });
          },
          setUserProperties: function setUserProperties(properties, options) {
            _setUserProperties(wrappedGtagFunction, initializationPromisesMap[appId], properties, options)["catch"](function (e) {
              return logger.error(e);
            });
          },
          setAnalyticsCollectionEnabled: function setAnalyticsCollectionEnabled(enabled) {
            _setAnalyticsCollectionEnabled(initializationPromisesMap[appId], enabled)["catch"](function (e) {
              return logger.error(e);
            });
          },
          INTERNAL: {
            "delete": function _delete() {
              delete initializationPromisesMap[appId];
              return Promise.resolve();
            }
          }
        };
        return analyticsInstance;
      }

      var name = "@firebase/analytics";
      var version = "0.6.0";
      /**
       * Type constant for Firebase Analytics.
       */

      var ANALYTICS_TYPE = 'analytics';

      function registerAnalytics(instance) {
        instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_5__["Component"](ANALYTICS_TYPE, function (container) {
          // getImmediate for FirebaseApp will always succeed
          var app = container.getProvider('app').getImmediate();
          var installations = container.getProvider('installations').getImmediate();
          return factory(app, installations);
        }, "PUBLIC"
        /* PUBLIC */
        ).setServiceProps({
          settings: settings,
          EventName: EventName,
          isSupported: isSupported
        }));
        instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_5__["Component"]('analytics-internal', internalFactory, "PRIVATE"
        /* PRIVATE */
        ));
        instance.registerVersion(name, version);

        function internalFactory(container) {
          try {
            var analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
            return {
              logEvent: analytics.logEvent
            };
          } catch (e) {
            throw ERROR_FACTORY.create("interop-component-reg-failed"
            /* INTEROP_COMPONENT_REG_FAILED */
            , {
              reason: e
            });
          }
        }
      }

      registerAnalytics(_firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a);
      /**
       * this is a public static method provided to users that wraps four different checks:
       *
       * 1. check if it's not a browser extension environment.
       * 1. check if cookie is enabled in current browser.
       * 3. check if IndexedDB is supported by the browser environment.
       * 4. check if the current browser context is valid for using IndexedDB.
       *
       */

      function isSupported() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
          var isDBOpenable, error_1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["isBrowserExtension"])()) {
                  return [2
                  /*return*/
                  , false];
                }

                if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["areCookiesEnabled"])()) {
                  return [2
                  /*return*/
                  , false];
                }

                if (!Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["isIndexedDBAvailable"])()) {
                  return [2
                  /*return*/
                  , false];
                }

                _a.label = 1;

              case 1:
                _a.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , Object(_firebase_util__WEBPACK_IMPORTED_MODULE_4__["validateIndexedDBOpenable"])()];

              case 2:
                isDBOpenable = _a.sent();
                return [2
                /*return*/
                , isDBOpenable];

              case 3:
                error_1 = _a.sent();
                return [2
                /*return*/
                , false];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      } //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "7Cv9":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-box/chat-box.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Cv9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item\r\n  lines=\"none\"\r\n  [class]=\"chat?.sender_type != 'user' ? 'sender' : 'user'\"\r\n>\r\n  <div\r\n    [slot]=\"chat?.sender_type == 'user' ? 'end' : 'start'\"\r\n    class=\"ion-text-wrap\"\r\n  >\r\n    <div slot=\"end\" class=\"detail-info\">\r\n      <!-- <small>{{ chat?.createdAt?.toDate() | date : \"HH:mm\" }}</small> -->\r\n      <small>{{ chat?.sender_type == \"user\" ? \"Saya\" : \"Admin\" }}</small>\r\n      <small>{{ getFormattedTime(chat?.timestamp) }}</small>\r\n    </div>\r\n\r\n    <div\r\n      [class]=\"\r\n        chat?.sender_type != 'user' ? 'chat-box sender' : 'chat-box user'\r\n      \"\r\n      *ngIf=\"chat?.type == 'text'\"\r\n    >\r\n      <ion-text>{{ chat?.body }}</ion-text>\r\n    </div>\r\n    <div\r\n      [class]=\"\r\n        chat?.sender_type != 'user' ? 'chat-box sender' : 'chat-box user'\r\n      \"\r\n      *ngIf=\"chat?.type == 'file'\"\r\n    >\r\n      <div class=\"chat-file\">\r\n        <div class=\"icon\">\r\n          <ion-icon name=\"document-outline\"></ion-icon>\r\n          <h2>File</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      [class]=\"\r\n        chat?.sender_type != 'user' ? 'chat-box sender' : 'chat-box user'\r\n      \"\r\n      *ngIf=\"chat?.type == 'image'\"\r\n      (click)=\"openImageModal(chat?.body)\"\r\n    >\r\n      <img [src]=\"chat?.body\" alt=\"\" class=\"chat-image\" />\r\n    </div>\r\n  </div>\r\n</ion-item>\r\n";
      /***/
    },

    /***/
    "8Yrd":
    /*!************************************************!*\
      !*** ./src/app/chat-box/chat-box.component.ts ***!
      \************************************************/

    /*! exports provided: ChatBoxComponent */

    /***/
    function Yrd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatBoxComponent", function () {
        return ChatBoxComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chat_box_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chat-box.component.html */
      "7Cv9");
      /* harmony import */


      var _chat_box_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chat-box.component.scss */
      "rZP8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _image_modal_component_image_modal_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../image-modal-component/image-modal-component.component */
      "PCM+");

      var ChatBoxComponent = /*#__PURE__*/function () {
        function ChatBoxComponent(modalController) {
          _classCallCheck(this, ChatBoxComponent);

          this.modalController = modalController;
        }

        _createClass(ChatBoxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openImageModal",
          value: function openImageModal(imageUrl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _image_modal_component_image_modal_component_component__WEBPACK_IMPORTED_MODULE_5__["ImageModalComponentComponent"],
                      componentProps: {
                        title: "Image Preview",
                        imageUrl: imageUrl
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getFormattedTime",
          value: function getFormattedTime(time) {
            var date = new Date(time);
            var hours = date.getHours().toString().padStart(2, "0");
            var minutes = date.getMinutes().toString().padStart(2, "0");
            return hours + ":" + minutes;
          }
        }]);

        return ChatBoxComponent;
      }();

      ChatBoxComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      ChatBoxComponent.propDecorators = {
        chat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        current_user_id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ChatBoxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-chat-box",
        template: _raw_loader_chat_box_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_box_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChatBoxComponent);
      /***/
    },

    /***/
    "ABqa":
    /*!************************************************************!*\
      !*** ./node_modules/@firebase/functions/dist/index.cjs.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function ABqa(module, exports, __webpack_require__) {
      "use strict";

      var firebase = __webpack_require__(
      /*! @firebase/app */
      "wj3C");

      var tslib = __webpack_require__(
      /*! tslib */
      "os0x");

      var component = __webpack_require__(
      /*! @firebase/component */
      "S+S0");

      function _interopDefaultLegacy(e) {
        return e && typeof e === 'object' && 'default' in e ? e : {
          'default': e
        };
      }

      var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Standard error codes for different ways a request can fail, as defined by:
       * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
       *
       * This map is used primarily to convert from a backend error code string to
       * a client SDK error code string, and make sure it's in the supported set.
       */


      var errorCodeMap = {
        OK: 'ok',
        CANCELLED: 'cancelled',
        UNKNOWN: 'unknown',
        INVALID_ARGUMENT: 'invalid-argument',
        DEADLINE_EXCEEDED: 'deadline-exceeded',
        NOT_FOUND: 'not-found',
        ALREADY_EXISTS: 'already-exists',
        PERMISSION_DENIED: 'permission-denied',
        UNAUTHENTICATED: 'unauthenticated',
        RESOURCE_EXHAUSTED: 'resource-exhausted',
        FAILED_PRECONDITION: 'failed-precondition',
        ABORTED: 'aborted',
        OUT_OF_RANGE: 'out-of-range',
        UNIMPLEMENTED: 'unimplemented',
        INTERNAL: 'internal',
        UNAVAILABLE: 'unavailable',
        DATA_LOSS: 'data-loss'
      };
      /**
       * An explicit error that can be thrown from a handler to send an error to the
       * client that called the function.
       */

      var HttpsErrorImpl =
      /** @class */
      function (_super) {
        tslib.__extends(HttpsErrorImpl, _super);

        function HttpsErrorImpl(code, message, details) {
          var _this = _super.call(this, message) || this; // This is a workaround for a bug in TypeScript when extending Error:
          // tslint:disable-next-line
          // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work


          Object.setPrototypeOf(_this, HttpsErrorImpl.prototype);
          _this.code = code;
          _this.details = details;
          return _this;
        }

        return HttpsErrorImpl;
      }(Error);
      /**
       * Takes an HTTP status code and returns the corresponding ErrorCode.
       * This is the standard HTTP status code -> error mapping defined in:
       * https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
       *
       * @param status An HTTP status code.
       * @return The corresponding ErrorCode, or ErrorCode.UNKNOWN if none.
       */


      function codeForHTTPStatus(status) {
        // Make sure any successful status is OK.
        if (status >= 200 && status < 300) {
          return 'ok';
        }

        switch (status) {
          case 0:
            // This can happen if the server returns 500.
            return 'internal';

          case 400:
            return 'invalid-argument';

          case 401:
            return 'unauthenticated';

          case 403:
            return 'permission-denied';

          case 404:
            return 'not-found';

          case 409:
            return 'aborted';

          case 429:
            return 'resource-exhausted';

          case 499:
            return 'cancelled';

          case 500:
            return 'internal';

          case 501:
            return 'unimplemented';

          case 503:
            return 'unavailable';

          case 504:
            return 'deadline-exceeded';
        }

        return 'unknown';
      }
      /**
       * Takes an HTTP response and returns the corresponding Error, if any.
       */


      function _errorForResponse(status, bodyJSON, serializer) {
        var code = codeForHTTPStatus(status); // Start with reasonable defaults from the status code.

        var description = code;
        var details = undefined; // Then look through the body for explicit details.

        try {
          var errorJSON = bodyJSON && bodyJSON.error;

          if (errorJSON) {
            var status_1 = errorJSON.status;

            if (typeof status_1 === 'string') {
              if (!errorCodeMap[status_1]) {
                // They must've included an unknown error code in the body.
                return new HttpsErrorImpl('internal', 'internal');
              }

              code = errorCodeMap[status_1]; // TODO(klimt): Add better default descriptions for error enums.
              // The default description needs to be updated for the new code.

              description = status_1;
            }

            var message = errorJSON.message;

            if (typeof message === 'string') {
              description = message;
            }

            details = errorJSON.details;

            if (details !== undefined) {
              details = serializer.decode(details);
            }
          }
        } catch (e) {// If we couldn't parse explicit error data, that's fine.
        }

        if (code === 'ok') {
          // Technically, there's an edge case where a developer could explicitly
          // return an error code of OK, and we will treat it as success, but that
          // seems reasonable.
          return null;
        }

        return new HttpsErrorImpl(code, description, details);
      }
      /**
       * Helper class to get metadata that should be included with a function call.
       */


      var ContextProvider =
      /** @class */
      function () {
        function ContextProvider(authProvider, messagingProvider) {
          var _this = this;

          this.auth = null;
          this.messaging = null;
          this.auth = authProvider.getImmediate({
            optional: true
          });
          this.messaging = messagingProvider.getImmediate({
            optional: true
          });

          if (!this.auth) {
            authProvider.get().then(function (auth) {
              return _this.auth = auth;
            }, function () {
              /* get() never rejects */
            });
          }

          if (!this.messaging) {
            messagingProvider.get().then(function (messaging) {
              return _this.messaging = messaging;
            }, function () {
              /* get() never rejects */
            });
          }
        }

        ContextProvider.prototype.getAuthToken = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var token, e_1;
            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!this.auth) {
                    return [2
                    /*return*/
                    , undefined];
                  }

                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 3,, 4]);

                  return [4
                  /*yield*/
                  , this.auth.getToken()];

                case 2:
                  token = _a.sent();

                  if (!token) {
                    return [2
                    /*return*/
                    , undefined];
                  }

                  return [2
                  /*return*/
                  , token.accessToken];

                case 3:
                  e_1 = _a.sent(); // If there's any error when trying to get the auth token, leave it off.

                  return [2
                  /*return*/
                  , undefined];

                case 4:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        ContextProvider.prototype.getInstanceIdToken = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
              if (!this.messaging || !('Notification' in self) || Notification.permission !== 'granted') {
                return [2
                /*return*/
                , undefined];
              }

              try {
                return [2
                /*return*/
                , this.messaging.getToken()];
              } catch (e) {
                // We don't warn on this, because it usually means messaging isn't set up.
                // console.warn('Failed to retrieve instance id token.', e);
                // If there's any error when trying to get the token, leave it off.
                return [2
                /*return*/
                , undefined];
              }

              return [2
              /*return*/
              ];
            });
          });
        };

        ContextProvider.prototype.getContext = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var authToken, instanceIdToken;
            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.getAuthToken()];

                case 1:
                  authToken = _a.sent();
                  return [4
                  /*yield*/
                  , this.getInstanceIdToken()];

                case 2:
                  instanceIdToken = _a.sent();
                  return [2
                  /*return*/
                  , {
                    authToken: authToken,
                    instanceIdToken: instanceIdToken
                  }];
              }
            });
          });
        };

        return ContextProvider;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var LONG_TYPE = 'type.googleapis.com/google.protobuf.Int64Value';
      var UNSIGNED_LONG_TYPE = 'type.googleapis.com/google.protobuf.UInt64Value';

      function mapValues( // { [k: string]: unknown } is no longer a wildcard assignment target after typescript 3.5
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      o, f) {
        var result = {};

        for (var key in o) {
          if (o.hasOwnProperty(key)) {
            result[key] = f(o[key]);
          }
        }

        return result;
      }

      var Serializer =
      /** @class */
      function () {
        function Serializer() {} // Takes data and encodes it in a JSON-friendly way, such that types such as
        // Date are preserved.


        Serializer.prototype.encode = function (data) {
          var _this = this;

          if (data == null) {
            return null;
          }

          if (data instanceof Number) {
            data = data.valueOf();
          }

          if (typeof data === 'number' && isFinite(data)) {
            // Any number in JS is safe to put directly in JSON and parse as a double
            // without any loss of precision.
            return data;
          }

          if (data === true || data === false) {
            return data;
          }

          if (Object.prototype.toString.call(data) === '[object String]') {
            return data;
          }

          if (Array.isArray(data)) {
            return data.map(function (x) {
              return _this.encode(x);
            });
          }

          if (typeof data === 'function' || typeof data === 'object') {
            return mapValues(data, function (x) {
              return _this.encode(x);
            });
          } // If we got this far, the data is not encodable.


          throw new Error('Data cannot be encoded in JSON: ' + data);
        }; // Takes data that's been encoded in a JSON-friendly form and returns a form
        // with richer datatypes, such as Dates, etc.


        Serializer.prototype.decode = function (json) {
          var _this = this;

          if (json == null) {
            return json;
          }

          if (json['@type']) {
            switch (json['@type']) {
              case LONG_TYPE: // Fall through and handle this the same as unsigned.

              case UNSIGNED_LONG_TYPE:
                {
                  // Technically, this could work return a valid number for malformed
                  // data if there was a number followed by garbage. But it's just not
                  // worth all the extra code to detect that case.
                  var value = Number(json['value']);

                  if (isNaN(value)) {
                    throw new Error('Data cannot be decoded from JSON: ' + json);
                  }

                  return value;
                }

              default:
                {
                  throw new Error('Data cannot be decoded from JSON: ' + json);
                }
            }
          }

          if (Array.isArray(json)) {
            return json.map(function (x) {
              return _this.decode(x);
            });
          }

          if (typeof json === 'function' || typeof json === 'object') {
            return mapValues(json, function (x) {
              return _this.decode(x);
            });
          } // Anything else is safe to return.


          return json;
        };

        return Serializer;
      }();
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns a Promise that will be rejected after the given duration.
       * The error will be of type HttpsErrorImpl.
       *
       * @param millis Number of milliseconds to wait before rejecting.
       */


      function failAfter(millis) {
        var timer;
        var promise = new Promise(function (_, reject) {
          timer = setTimeout(function () {
            reject(new HttpsErrorImpl('deadline-exceeded', 'deadline-exceeded'));
          }, millis);
        });
        return {
          timer: timer,
          promise: promise
        };
      }
      /**
       * The main class for the Firebase Functions SDK.
       */


      var Service =
      /** @class */
      function () {
        /**
         * Creates a new Functions service for the given app and (optional) region or custom domain.
         * @param app_ The FirebaseApp to use.
         * @param regionOrCustomDomain_ one of:
         *   a) A region to call functions from, such as us-central1
         *   b) A custom domain to use as a functions prefix, such as https://mydomain.com
         */
        function Service(app_, authProvider, messagingProvider, regionOrCustomDomain_, fetchImpl) {
          var _this = this;

          if (regionOrCustomDomain_ === void 0) {
            regionOrCustomDomain_ = 'us-central1';
          }

          this.app_ = app_;
          this.fetchImpl = fetchImpl;
          this.serializer = new Serializer();
          this.emulatorOrigin = null;
          this.INTERNAL = {
            "delete": function _delete() {
              return Promise.resolve(_this.deleteService());
            }
          };
          this.contextProvider = new ContextProvider(authProvider, messagingProvider); // Cancels all ongoing requests when resolved.

          this.cancelAllRequests = new Promise(function (resolve) {
            _this.deleteService = function () {
              return resolve();
            };
          }); // Resolve the region or custom domain overload by attempting to parse it.

          try {
            var url = new URL(regionOrCustomDomain_);
            this.customDomain = url.origin;
            this.region = 'us-central1';
          } catch (e) {
            this.customDomain = null;
            this.region = regionOrCustomDomain_;
          }
        }

        Object.defineProperty(Service.prototype, "app", {
          get: function get() {
            return this.app_;
          },
          enumerable: false,
          configurable: true
        });
        /**
         * Returns the URL for a callable with the given name.
         * @param name The name of the callable.
         */

        Service.prototype._url = function (name) {
          var projectId = this.app_.options.projectId;

          if (this.emulatorOrigin !== null) {
            var origin_1 = this.emulatorOrigin;
            return origin_1 + "/" + projectId + "/" + this.region + "/" + name;
          }

          if (this.customDomain !== null) {
            return this.customDomain + "/" + name;
          }

          return "https://" + this.region + "-" + projectId + ".cloudfunctions.net/" + name;
        };
        /**
         * Changes this instance to point to a Cloud Functions emulator running
         * locally. See https://firebase.google.com/docs/functions/local-emulator
         *
         * @param origin The origin of the local emulator, such as
         * "http://localhost:5005".
         */


        Service.prototype.useFunctionsEmulator = function (origin) {
          this.emulatorOrigin = origin;
        };
        /**
         * Returns a reference to the callable https trigger with the given name.
         * @param name The name of the trigger.
         */


        Service.prototype.httpsCallable = function (name, options) {
          var _this = this;

          return function (data) {
            return _this.call(name, data, options || {});
          };
        };
        /**
         * Does an HTTP POST and returns the completed response.
         * @param url The url to post to.
         * @param body The JSON body of the post.
         * @param headers The HTTP headers to include in the request.
         * @return A Promise that will succeed when the request finishes.
         */


        Service.prototype.postJSON = function (url, body, headers) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var response, e_1, json, e_2;
            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  headers['Content-Type'] = 'application/json';
                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 3,, 4]);

                  return [4
                  /*yield*/
                  , this.fetchImpl(url, {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: headers
                  })];

                case 2:
                  response = _a.sent();
                  return [3
                  /*break*/
                  , 4];

                case 3:
                  e_1 = _a.sent(); // This could be an unhandled error on the backend, or it could be a
                  // network error. There's no way to know, since an unhandled error on the
                  // backend will fail to set the proper CORS header, and thus will be
                  // treated as a network error by fetch.

                  return [2
                  /*return*/
                  , {
                    status: 0,
                    json: null
                  }];

                case 4:
                  json = null;
                  _a.label = 5;

                case 5:
                  _a.trys.push([5, 7,, 8]);

                  return [4
                  /*yield*/
                  , response.json()];

                case 6:
                  json = _a.sent();
                  return [3
                  /*break*/
                  , 8];

                case 7:
                  e_2 = _a.sent();
                  return [3
                  /*break*/
                  , 8];

                case 8:
                  return [2
                  /*return*/
                  , {
                    status: response.status,
                    json: json
                  }];
              }
            });
          });
        };
        /**
         * Calls a callable function asynchronously and returns the result.
         * @param name The name of the callable trigger.
         * @param data The data to pass as params to the function.s
         */


        Service.prototype.call = function (name, data, options) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var url, body, headers, context, timeout, _a, timer, failAfterPromise, response, error, responseData, decodedData;

            return tslib.__generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  url = this._url(name); // Encode any special types, such as dates, in the input data.

                  data = this.serializer.encode(data);
                  body = {
                    data: data
                  };
                  headers = {};
                  return [4
                  /*yield*/
                  , this.contextProvider.getContext()];

                case 1:
                  context = _b.sent();

                  if (context.authToken) {
                    headers['Authorization'] = 'Bearer ' + context.authToken;
                  }

                  if (context.instanceIdToken) {
                    headers['Firebase-Instance-ID-Token'] = context.instanceIdToken;
                  }

                  timeout = options.timeout || 70000;
                  _a = failAfter(timeout), timer = _a.timer, failAfterPromise = _a.promise;
                  return [4
                  /*yield*/
                  , Promise.race([clearTimeoutWrapper(timer, this.postJSON(url, body, headers)), failAfterPromise, clearTimeoutWrapper(timer, this.cancelAllRequests)])];

                case 2:
                  response = _b.sent(); // If service was deleted, interrupted response throws an error.

                  if (!response) {
                    throw new HttpsErrorImpl('cancelled', 'Firebase Functions instance was deleted.');
                  }

                  error = _errorForResponse(response.status, response.json, this.serializer);

                  if (error) {
                    throw error;
                  }

                  if (!response.json) {
                    throw new HttpsErrorImpl('internal', 'Response is not valid JSON object.');
                  }

                  responseData = response.json.data; // TODO(klimt): For right now, allow "result" instead of "data", for
                  // backwards compatibility.

                  if (typeof responseData === 'undefined') {
                    responseData = response.json.result;
                  }

                  if (typeof responseData === 'undefined') {
                    // Consider the response malformed.
                    throw new HttpsErrorImpl('internal', 'Response is missing data field.');
                  }

                  decodedData = this.serializer.decode(responseData);
                  return [2
                  /*return*/
                  , {
                    data: decodedData
                  }];
              }
            });
          });
        };

        return Service;
      }();

      function clearTimeoutWrapper(timer, promise) {
        return tslib.__awaiter(this, void 0, void 0, function () {
          var result;
          return tslib.__generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , promise];

              case 1:
                result = _a.sent(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

                clearTimeout(timer);
                return [2
                /*return*/
                , result];
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Type constant for Firebase Functions.
       */


      var FUNCTIONS_TYPE = 'functions';

      function registerFunctions(instance, fetchImpl) {
        var namespaceExports = {
          // no-inline
          Functions: Service
        };

        function factory(container, regionOrCustomDomain) {
          // Dependencies
          var app = container.getProvider('app').getImmediate();
          var authProvider = container.getProvider('auth-internal');
          var messagingProvider = container.getProvider('messaging'); // eslint-disable-next-line @typescript-eslint/no-explicit-any

          return new Service(app, authProvider, messagingProvider, regionOrCustomDomain, fetchImpl);
        }

        instance.INTERNAL.registerComponent(new component.Component(FUNCTIONS_TYPE, factory, "PUBLIC"
        /* PUBLIC */
        ).setServiceProps(namespaceExports).setMultipleInstances(true));
      }

      var name = "@firebase/functions";
      var version = "0.5.1";
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      registerFunctions(firebase__default['default'], fetch.bind(self));
      firebase__default['default'].registerVersion(name, version); //# sourceMappingURL=index.cjs.js.map

      /***/
    },

    /***/
    "CU0W":
    /*!****************************************************************************!*\
      !*** ./src/app/image-modal-component/image-modal-component.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function CU0W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1tb2RhbC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "Kqa9":
    /*!*********************************************!*\
      !*** ./src/app/help-chat/help-chat.page.ts ***!
      \*********************************************/

    /*! exports provided: HelpChatPage */

    /***/
    function Kqa9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpChatPage", function () {
        return HelpChatPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_help_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./help-chat.page.html */
      "/aI0");
      /* harmony import */


      var _help_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./help-chat.page.scss */
      "3CPy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _popover_chat_popover_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../popover-chat/popover-chat.component */
      "flo3");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../global.service */
      "dVwY");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _help_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./help-chat.service */
      "uFP4");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! uuid */
      "4USb");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Camera;
      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Storage;

      var HelpChatPage = /*#__PURE__*/function () {
        function HelpChatPage(popoverController, http, global, storage, storageFirebase, chat, db, router) {
          _classCallCheck(this, HelpChatPage);

          this.popoverController = popoverController;
          this.http = http;
          this.global = global;
          this.storage = storage;
          this.storageFirebase = storageFirebase;
          this.chat = chat;
          this.db = db;
          this.router = router;
          this.name = "Sender";
          this.message = "";
          this.isLoading = false;
          this.currentUserId = 3;
          this.currentUserName = "";
          this.currentUserProfilePhoto = "";
          this.typeMessage = "message";
          this.messages = [];
          this.previewImageChat = "";
          this.mode = "normal";
          this.imageCameraPath = "";
          this.auth = "";
        }

        _createClass(HelpChatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.storage.getObject("user").then(function (data) {
              var id = data.id;
              _this2.currentUserId = id;

              _this2.db.list("/dialog/".concat(id, "/messages")).query.orderByChild("timestamp").on("value", function (snapshot) {
                // Mendapatkan data yang diurutkan berdasarkan timestamp
                var coba = [];
                snapshot.forEach(function (childSnapshot) {
                  coba.push(childSnapshot.val());
                });
                _this2.messages = coba;
              });
            });
            this.storage.getObject('auth').then(function (auth) {
              _this2.auth = auth;
              var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + _this2.auth.token
              });
              var options = {
                headers: reqHeader
              };

              _this2.http.post(_this2.global.base_url + 'auth/me', null, options).subscribe(function (data) {
                var _a;

                console.log(data);

                if (data.status == 0) {
                  _this2.currentUserName = data === null || data === void 0 ? void 0 : data.name;
                  _this2.currentUserProfilePhoto = (_a = data === null || data === void 0 ? void 0 : data.company) === null || _a === void 0 ? void 0 : _a.site_logo;

                  _this2.createRoom(data === null || data === void 0 ? void 0 : data.id);
                }

                _this2.global.loadingDismiss();
              }, function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "createRoom",
          value: function createRoom(id) {
            var room = {
              photo_profile: this.currentUserProfilePhoto,
              name: this.currentUserName,
              messages: "",
              unread: {
                admin: 0,
                user: 0
              }
            };
            this.chat.createDialog(room, id);
          }
        }, {
          key: "showPopover",
          value: function showPopover(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var popover;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.popoverController.create({
                      component: _popover_chat_popover_chat_component__WEBPACK_IMPORTED_MODULE_7__["PopoverChatComponent"],
                      event: event,
                      translucent: true,
                      componentProps: {
                        title: "Judul Popover",
                        message: "Ini adalah isi pesan popover."
                      }
                    });

                  case 2:
                    popover = _context2.sent;
                    _context2.next = 5;
                    return popover.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onFileSelected",
          value: function onFileSelected(files) {
            var _this3 = this;

            this.selectedFile = files.item(0);

            if (files.item(0).type == "image/png" || files.item(0).type == "image/jpg" || files.item(0).type == "image/jpeg") {
              this.typeMessage = "image";
              console.log(files.item(0));
              var reader = new FileReader();

              reader.onload = function (e) {
                _this3.previewImageChat = e.target.result;
                console.log(e.target.result);
              };

              reader.readAsDataURL(files.item(0));
              return;
            }

            this.typeMessage = "file";
          }
        }, {
          key: "onClosePreview",
          value: function onClosePreview() {
            this.typeMessage = "message";
            this.selectedFile = "";
          }
        }, {
          key: "takePicture",
          value: function takePicture() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var image, imageUrl, response, blob;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return Camera.getPhoto({
                      quality: 90,
                      allowEditing: true,
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraResultType"].Uri
                    });

                  case 2:
                    image = _context3.sent;
                    imageUrl = image.webPath;
                    _context3.next = 6;
                    return fetch(imageUrl);

                  case 6:
                    response = _context3.sent;
                    _context3.next = 9;
                    return response.blob();

                  case 9:
                    blob = _context3.sent;
                    this.selectedFile = blob;
                    this.mode = "camera";
                    this.typeMessage = "image";

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "uploadImage",
          value: function uploadImage(fileUri) {
            var filePath = "attachments/".concat(Object(uuid__WEBPACK_IMPORTED_MODULE_12__["v4"])());
            var fileRef = this.storageFirebase.ref(filePath);
            var uploadTask = fileRef.putString(fileUri, "data_url");
            uploadTask.snapshotChanges().subscribe(function (snapshot) {
              // Tindakan setelah pengunggahan berhasil
              // Misalnya, mendapatkan URL unduhan gambar
              if (snapshot.state === "success") {
                fileRef.getDownloadURL().subscribe(function (downloadURL) {
                  console.log("URL unduhan:", downloadURL); // Lakukan tindakan yang diperlukan dengan URL unduhan
                });
              }
            });
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            var _this4 = this;

            var uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_12__["v4"])();
            var dataMockup = {
              admin_id: "",
              sender_type: "user",
              timestamp: firebase__WEBPACK_IMPORTED_MODULE_13__["database"].ServerValue.TIMESTAMP
            };

            if (this.typeMessage == "message" && this.message !== "") {
              var data = Object.assign(Object.assign({}, dataMockup), {
                body: this.message,
                type: "text"
              });
              this.message = "";
              this.chat.createMessage(data, this.currentUserId, uuid);
              this.chat.updateUnread(this.currentUserId);
              return;
            }

            if (this.selectedFile) {
              var filePath = "attachments/".concat(Object(uuid__WEBPACK_IMPORTED_MODULE_12__["v4"])());
              var fileRef = this.storageFirebase.ref(filePath);
              var uploadTask = this.storageFirebase.upload(filePath, this.selectedFile);
              uploadTask.percentageChanges().subscribe(function (percentage) {
                _this4.uploadProgress = Math.round(percentage);
              });
              uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                fileRef.getDownloadURL().subscribe(function (url) {
                  _this4.downloadURL = url;
                  var data = Object.assign(Object.assign({}, dataMockup), {
                    body: url,
                    type: _this4.typeMessage
                  });

                  _this4.chat.createMessage(data, _this4.currentUserId, uuid);

                  _this4.chat.updateUnread(_this4.currentUserId);

                  _this4.selectedFile = "";

                  _this4.onClosePreview();
                });
              })).subscribe();
            }
          }
        }, {
          key: "backButton",
          value: function backButton() {
            this.router.navigate(["/tabs/tab-setting"]);
          }
        }]);

        return HelpChatPage;
      }();

      HelpChatPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
        }, {
          type: _global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorage"]
        }, {
          type: _help_chat_service__WEBPACK_IMPORTED_MODULE_11__["HelpChatService"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabase"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]
        }];
      };

      HelpChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-help-chat",
        template: _raw_loader_help_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_help_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HelpChatPage);
      /***/
    },

    /***/
    "LOEa":
    /*!**************************************************!*\
      !*** ./node_modules/@firebase/auth/dist/auth.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function LOEa(module, exports, __webpack_require__) {
      (function () {
        var firebase = __webpack_require__(
        /*! @firebase/app */
        "wj3C")["default"];
        /*
        Copyright The Closure Library Authors.
        SPDX-License-Identifier: Apache-2.0
        */


        var k,
            aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
          a != Array.prototype && a != Object.prototype && (a[b] = c.value);
        };

        function ba(a) {
          a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];

          for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c;
          }

          return globalThis;
        }

        var ca = ba(this);

        function da(a, b) {
          if (b) {
            var c = ca;
            a = a.split(".");

            for (var d = 0; d < a.length - 1; d++) {
              var e = a[d];
              e in c || (c[e] = {});
              c = c[e];
            }

            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && aa(c, a, {
              configurable: !0,
              writable: !0,
              value: b
            });
          }
        }

        function ea(a) {
          var b = 0;
          return function () {
            return b < a.length ? {
              done: !1,
              value: a[b++]
            } : {
              done: !0
            };
          };
        }

        function fa(a) {
          var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
          return b ? b.call(a) : {
            next: ea(a)
          };
        }

        da("Promise", function (a) {
          function b(g) {
            this.b = 0;
            this.c = void 0;
            this.a = [];
            var h = this.f();

            try {
              g(h.resolve, h.reject);
            } catch (m) {
              h.reject(m);
            }
          }

          function c() {
            this.a = null;
          }

          function d(g) {
            return g instanceof b ? g : new b(function (h) {
              h(g);
            });
          }

          if (a) return a;

          c.prototype.b = function (g) {
            if (null == this.a) {
              this.a = [];
              var h = this;
              this.c(function () {
                h.g();
              });
            }

            this.a.push(g);
          };

          var e = ca.setTimeout;

          c.prototype.c = function (g) {
            e(g, 0);
          };

          c.prototype.g = function () {
            for (; this.a && this.a.length;) {
              var g = this.a;
              this.a = [];

              for (var h = 0; h < g.length; ++h) {
                var m = g[h];
                g[h] = null;

                try {
                  m();
                } catch (p) {
                  this.f(p);
                }
              }
            }

            this.a = null;
          };

          c.prototype.f = function (g) {
            this.c(function () {
              throw g;
            });
          };

          b.prototype.f = function () {
            function g(p) {
              return function (v) {
                m || (m = !0, p.call(h, v));
              };
            }

            var h = this,
                m = !1;
            return {
              resolve: g(this.v),
              reject: g(this.g)
            };
          };

          b.prototype.v = function (g) {
            if (g === this) this.g(new TypeError("A Promise cannot resolve to itself"));else if (g instanceof b) this.o(g);else {
              a: switch (typeof g) {
                case "object":
                  var h = null != g;
                  break a;

                case "function":
                  h = !0;
                  break a;

                default:
                  h = !1;
              }

              h ? this.m(g) : this.h(g);
            }
          };

          b.prototype.m = function (g) {
            var h = void 0;

            try {
              h = g.then;
            } catch (m) {
              this.g(m);
              return;
            }

            "function" == typeof h ? this.u(h, g) : this.h(g);
          };

          b.prototype.g = function (g) {
            this.i(2, g);
          };

          b.prototype.h = function (g) {
            this.i(1, g);
          };

          b.prototype.i = function (g, h) {
            if (0 != this.b) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.b);
            this.b = g;
            this.c = h;
            this.l();
          };

          b.prototype.l = function () {
            if (null != this.a) {
              for (var g = 0; g < this.a.length; ++g) f.b(this.a[g]);

              this.a = null;
            }
          };

          var f = new c();

          b.prototype.o = function (g) {
            var h = this.f();
            g.Pa(h.resolve, h.reject);
          };

          b.prototype.u = function (g, h) {
            var m = this.f();

            try {
              g.call(h, m.resolve, m.reject);
            } catch (p) {
              m.reject(p);
            }
          };

          b.prototype.then = function (g, h) {
            function m(A, Q) {
              return "function" == typeof A ? function (xa) {
                try {
                  p(A(xa));
                } catch (yd) {
                  v(yd);
                }
              } : Q;
            }

            var p,
                v,
                B = new b(function (A, Q) {
              p = A;
              v = Q;
            });
            this.Pa(m(g, p), m(h, v));
            return B;
          };

          b.prototype["catch"] = function (g) {
            return this.then(void 0, g);
          };

          b.prototype.Pa = function (g, h) {
            function m() {
              switch (p.b) {
                case 1:
                  g(p.c);
                  break;

                case 2:
                  h(p.c);
                  break;

                default:
                  throw Error("Unexpected state: " + p.b);
              }
            }

            var p = this;
            null == this.a ? f.b(m) : this.a.push(m);
          };

          b.resolve = d;

          b.reject = function (g) {
            return new b(function (h, m) {
              m(g);
            });
          };

          b.race = function (g) {
            return new b(function (h, m) {
              for (var p = fa(g), v = p.next(); !v.done; v = p.next()) d(v.value).Pa(h, m);
            });
          };

          b.all = function (g) {
            var h = fa(g),
                m = h.next();
            return m.done ? d([]) : new b(function (p, v) {
              function B(xa) {
                return function (yd) {
                  A[xa] = yd;
                  Q--;
                  0 == Q && p(A);
                };
              }

              var A = [],
                  Q = 0;

              do A.push(void 0), Q++, d(m.value).Pa(B(A.length - 1), v), m = h.next(); while (!m.done);
            });
          };

          return b;
        });
        var ha = ha || {},
            l = this || self,
            ia = /^[\w+/_-]+[=]{0,2}$/,
            ja = null;

        function ka() {}

        function la(a) {
          var b = typeof a;
          if ("object" == b) {
            if (a) {
              if (a instanceof Array) return "array";
              if (a instanceof Object) return b;
              var c = Object.prototype.toString.call(a);
              if ("[object Window]" == c) return "object";
              if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
              if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
            } else return "null";
          } else if ("function" == b && "undefined" == typeof a.call) return "object";
          return b;
        }

        function ma(a) {
          var b = la(a);
          return "array" == b || "object" == b && "number" == typeof a.length;
        }

        function na(a) {
          return "function" == la(a);
        }

        function n(a) {
          var b = typeof a;
          return "object" == b && null != a || "function" == b;
        }

        function oa(a) {
          return Object.prototype.hasOwnProperty.call(a, pa) && a[pa] || (a[pa] = ++qa);
        }

        var pa = "closure_uid_" + (1E9 * Math.random() >>> 0),
            qa = 0;

        function ra(a, b, c) {
          return a.call.apply(a.bind, arguments);
        }

        function sa(a, b, c) {
          if (!a) throw Error();

          if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
              var e = Array.prototype.slice.call(arguments);
              Array.prototype.unshift.apply(e, d);
              return a.apply(b, e);
            };
          }

          return function () {
            return a.apply(b, arguments);
          };
        }

        function q(a, b, c) {
          Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? q = ra : q = sa;
          return q.apply(null, arguments);
        }

        function ta(a, b) {
          var c = Array.prototype.slice.call(arguments, 1);
          return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d);
          };
        }

        var ua = Date.now || function () {
          return +new Date();
        };

        function r(a, b) {
          function c() {}

          c.prototype = b.prototype;
          a.$a = b.prototype;
          a.prototype = new c();
          a.prototype.constructor = a;
        }

        ;
        /*
        Copyright 2017 Google Inc.
        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
        */

        function t(a, b, c) {
          this.code = va + a;
          this.message = b || wa[a] || "";
          this.a = c || null;
        }

        r(t, Error);

        t.prototype.w = function () {
          var a = {
            code: this.code,
            message: this.message
          };
          this.a && (a.serverResponse = this.a);
          return a;
        };

        t.prototype.toJSON = function () {
          return this.w();
        };

        function ya(a) {
          var b = a && a.code;
          return b ? new t(b.substring(va.length), a.message, a.serverResponse) : null;
        }

        var va = "auth/",
            wa = {
          "admin-restricted-operation": "This operation is restricted to administrators only.",
          "argument-error": "",
          "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
          "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
          "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
          "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
          "cordova-not-ready": "Cordova framework is not ready.",
          "cors-unsupported": "This browser is not supported.",
          "credential-already-in-use": "This credential is already associated with a different user account.",
          "custom-token-mismatch": "The custom token corresponds to a different audience.",
          "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
          "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
          "email-change-needs-verification": "Multi-factor users must always have a verified email.",
          "email-already-in-use": "The email address is already in use by another account.",
          "expired-action-code": "The action code has expired. ",
          "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
          "internal-error": "An internal error has occurred.",
          "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
          "invalid-app-id": "The mobile app identifier is not registed for the current project.",
          "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
          "invalid-auth-event": "An internal error has occurred.",
          "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
          "invalid-continue-uri": "The continue URL provided in the request is invalid.",
          "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
          "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
          "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
          "invalid-email": "The email address is badly formatted.",
          "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
          "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
          "invalid-credential": "The supplied auth credential is malformed or has expired.",
          "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
          "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
          "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
          "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
          "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
          "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
          "wrong-password": "The password is invalid or the user does not have a password.",
          "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
          "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
          "invalid-provider-id": "The specified provider ID is invalid.",
          "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
          "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
          "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
          "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
          "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
          "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
          "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
          "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
          "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
          "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
          "missing-continue-uri": "A continue URL must be provided in the request.",
          "missing-iframe-start": "An internal error has occurred.",
          "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
          "missing-multi-factor-info": "No second factor identifier is provided.",
          "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
          "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
          "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
          "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
          "app-deleted": "This instance of FirebaseApp has been deleted.",
          "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
          "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
          "no-auth-event": "An internal error has occurred.",
          "no-such-provider": "User was not linked to an account with the given provider.",
          "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
          "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
          "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
          "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
          "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
          "provider-already-linked": "User can only be linked to one identity for the given provider.",
          "quota-exceeded": "The project's quota for this operation has been exceeded.",
          "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
          "redirect-operation-pending": "A redirect sign-in operation is already pending.",
          "rejected-credential": "The request contains malformed or mismatching credentials.",
          "second-factor-already-in-use": "The second factor is already enrolled on this account.",
          "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
          "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
          timeout: "The operation has timed out.",
          "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
          "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
          "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
          "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
          "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
          "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
          "unverified-email": "The operation requires a verified email.",
          "user-cancelled": "The user did not grant your application the permissions it requested.",
          "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
          "user-disabled": "The user account has been disabled by an administrator.",
          "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
          "user-signed-out": "",
          "weak-password": "The password must be 6 characters long or more.",
          "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
        };
        var za = {
          kd: {
            Sa: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
            Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
            Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
            id: "b"
          },
          rd: {
            Sa: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
            Ya: "https://securetoken.googleapis.com/v1/token",
            Va: "https://identitytoolkit.googleapis.com/v2/",
            id: "p"
          },
          td: {
            Sa: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
            Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
            Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
            id: "s"
          },
          ud: {
            Sa: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
            Ya: "https://test-securetoken.sandbox.googleapis.com/v1/token",
            Va: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
            id: "t"
          }
        };

        function Aa(a) {
          for (var b in za) if (za[b].id === a) return a = za[b], {
            firebaseEndpoint: a.Sa,
            secureTokenEndpoint: a.Ya,
            identityPlatformEndpoint: a.Va
          };

          return null;
        }

        var Ba;
        Ba = Aa("__EID__") ? "__EID__" : void 0;

        function Ca(a) {
          if (!a) return !1;

          try {
            return !!a.$goog_Thenable;
          } catch (b) {
            return !1;
          }
        }

        ;

        function u(a) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, u);else {
            var b = Error().stack;
            b && (this.stack = b);
          }
          a && (this.message = String(a));
        }

        r(u, Error);
        u.prototype.name = "CustomError";

        function Da(a, b) {
          a = a.split("%s");

          for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");

          u.call(this, c + a[d]);
        }

        r(Da, u);
        Da.prototype.name = "AssertionError";

        function Ea(a, b) {
          throw new Da("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        }

        ;

        function Fa(a, b) {
          this.c = a;
          this.f = b;
          this.b = 0;
          this.a = null;
        }

        Fa.prototype.get = function () {
          if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null;
          } else a = this.c();

          return a;
        };

        function Ga(a, b) {
          a.f(b);
          100 > a.b && (a.b++, b.next = a.a, a.a = b);
        }

        ;

        function Ha() {
          this.b = this.a = null;
        }

        var Ja = new Fa(function () {
          return new Ia();
        }, function (a) {
          a.reset();
        });

        Ha.prototype.add = function (a, b) {
          var c = Ja.get();
          c.set(a, b);
          this.b ? this.b.next = c : this.a = c;
          this.b = c;
        };

        function Ka() {
          var a = La,
              b = null;
          a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
          return b;
        }

        function Ia() {
          this.next = this.b = this.a = null;
        }

        Ia.prototype.set = function (a, b) {
          this.a = a;
          this.b = b;
          this.next = null;
        };

        Ia.prototype.reset = function () {
          this.next = this.b = this.a = null;
        };

        var Ma = Array.prototype.indexOf ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        } : function (a, b) {
          if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);

          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;

          return -1;
        },
            w = Array.prototype.forEach ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        } : function (a, b, c) {
          for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
        };

        function Na(a, b) {
          for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a);
        }

        var Oa = Array.prototype.filter ? function (a, b) {
          return Array.prototype.filter.call(a, b, void 0);
        } : function (a, b) {
          for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++) if (g in f) {
            var h = f[g];
            b.call(void 0, h, g, a) && (d[e++] = h);
          }

          return d;
        },
            Pa = Array.prototype.map ? function (a, b) {
          return Array.prototype.map.call(a, b, void 0);
        } : function (a, b) {
          for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));

          return d;
        },
            Qa = Array.prototype.some ? function (a, b) {
          return Array.prototype.some.call(a, b, void 0);
        } : function (a, b) {
          for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;

          return !1;
        };

        function Ra(a) {
          a: {
            var b = Sa;

            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
              b = e;
              break a;
            }

            b = -1;
          }

          return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
        }

        function Ta(a, b) {
          return 0 <= Ma(a, b);
        }

        function Ua(a, b) {
          b = Ma(a, b);
          var c;
          (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
          return c;
        }

        function Va(a, b) {
          var c = 0;
          Na(a, function (d, e) {
            b.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length && c++;
          });
        }

        function Wa(a) {
          return Array.prototype.concat.apply([], arguments);
        }

        function Xa(a) {
          var b = a.length;

          if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];

            return c;
          }

          return [];
        }

        ;
        var Ya = String.prototype.trim ? function (a) {
          return a.trim();
        } : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        },
            Za = /&/g,
            $a = /</g,
            ab = />/g,
            bb = /"/g,
            cb = /'/g,
            db = /\x00/g,
            eb = /[\x00&<>"']/;

        function x(a, b) {
          return -1 != a.indexOf(b);
        }

        function fb(a, b) {
          return a < b ? -1 : a > b ? 1 : 0;
        }

        ;
        var gb;

        a: {
          var hb = l.navigator;

          if (hb) {
            var ib = hb.userAgent;

            if (ib) {
              gb = ib;
              break a;
            }
          }

          gb = "";
        }

        function y(a) {
          return x(gb, a);
        }

        ;

        function jb(a, b) {
          for (var c in a) b.call(void 0, a[c], c, a);
        }

        function kb(a) {
          for (var b in a) return !1;

          return !0;
        }

        function lb(a) {
          var b = {},
              c;

          for (c in a) b[c] = a[c];

          return b;
        }

        var mb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

        function z(a, b) {
          for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];

            for (c in d) a[c] = d[c];

            for (var f = 0; f < mb.length; f++) c = mb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
          }
        }

        ;

        function nb(a, b) {
          a: {
            try {
              var c = a && a.ownerDocument,
                  d = c && (c.defaultView || c.parentWindow);
              d = d || l;

              if (d.Element && d.Location) {
                var e = d;
                break a;
              }
            } catch (g) {}

            e = null;
          }

          if (e && "undefined" != typeof e[b] && (!a || !(a instanceof e[b]) && (a instanceof e.Location || a instanceof e.Element))) {
            if (n(a)) try {
              var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
            } catch (g) {
              f = "<object could not be stringified>";
            } else f = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
            Ea("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, f);
          }
        }

        ;

        function ob(a, b) {
          this.a = a === pb && b || "";
          this.b = qb;
        }

        ob.prototype.sa = !0;

        ob.prototype.ra = function () {
          return this.a;
        };

        ob.prototype.toString = function () {
          return "Const{" + this.a + "}";
        };

        function rb(a) {
          if (a instanceof ob && a.constructor === ob && a.b === qb) return a.a;
          Ea("expected object of type Const, got '" + a + "'");
          return "type_error:Const";
        }

        var qb = {},
            pb = {},
            sb = new ob(pb, "");

        function tb(a, b) {
          this.a = a === ub && b || "";
          this.b = vb;
        }

        tb.prototype.sa = !0;

        tb.prototype.ra = function () {
          return this.a.toString();
        };

        tb.prototype.toString = function () {
          return "TrustedResourceUrl{" + this.a + "}";
        };

        function wb(a) {
          if (a instanceof tb && a.constructor === tb && a.b === vb) return a.a;
          Ea("expected object of type TrustedResourceUrl, got '" + a + "' of type " + la(a));
          return "type_error:TrustedResourceUrl";
        }

        function xb(a, b) {
          var c = rb(a);
          if (!yb.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
          a = c.replace(zb, function (d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof ob ? rb(d) : encodeURIComponent(String(d));
          });
          return new tb(ub, a);
        }

        var zb = /%{(\w+)}/g,
            yb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
            vb = {},
            ub = {};

        function Ab(a, b) {
          this.a = a === Bb && b || "";
          this.b = Cb;
        }

        Ab.prototype.sa = !0;

        Ab.prototype.ra = function () {
          return this.a.toString();
        };

        Ab.prototype.toString = function () {
          return "SafeUrl{" + this.a + "}";
        };

        function Db(a) {
          if (a instanceof Ab && a.constructor === Ab && a.b === Cb) return a.a;
          Ea("expected object of type SafeUrl, got '" + a + "' of type " + la(a));
          return "type_error:SafeUrl";
        }

        var Eb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

        function Fb(a) {
          if (a instanceof Ab) return a;
          a = "object" == typeof a && a.sa ? a.ra() : String(a);
          Eb.test(a) || (a = "about:invalid#zClosurez");
          return new Ab(Bb, a);
        }

        var Cb = {},
            Bb = {};

        function Gb() {
          this.a = "";
          this.b = Hb;
        }

        Gb.prototype.sa = !0;

        Gb.prototype.ra = function () {
          return this.a.toString();
        };

        Gb.prototype.toString = function () {
          return "SafeHtml{" + this.a + "}";
        };

        function Ib(a) {
          if (a instanceof Gb && a.constructor === Gb && a.b === Hb) return a.a;
          Ea("expected object of type SafeHtml, got '" + a + "' of type " + la(a));
          return "type_error:SafeHtml";
        }

        var Hb = {};

        function Jb(a) {
          var b = new Gb();
          b.a = a;
          return b;
        }

        Jb("<!DOCTYPE html>");
        var Kb = Jb("");
        Jb("<br>");

        function Lb(a) {
          var b = new tb(ub, rb(sb));
          nb(a, "HTMLIFrameElement");
          a.src = wb(b).toString();
        }

        function Mb(a, b) {
          nb(a, "HTMLScriptElement");
          a.src = wb(b);
          if (null === ja) b: {
            b = l.document;

            if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && ia.test(b)) {
              ja = b;
              break b;
            }

            ja = "";
          }
          b = ja;
          b && a.setAttribute("nonce", b);
        }

        ;

        function Nb(a, b) {
          for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();

          return d + c.join("%s");
        }

        function Ob(a) {
          eb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Za, "&amp;")), -1 != a.indexOf("<") && (a = a.replace($a, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(ab, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(bb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(cb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(db, "&#0;")));
          return a;
        }

        ;

        function Pb(a) {
          Pb[" "](a);
          return a;
        }

        Pb[" "] = ka;

        function Qb(a, b) {
          var c = Rb;
          return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
        }

        ;
        var Sb = y("Opera"),
            Tb = y("Trident") || y("MSIE"),
            Ub = y("Edge"),
            Vb = Ub || Tb,
            Wb = y("Gecko") && !(x(gb.toLowerCase(), "webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
            Xb = x(gb.toLowerCase(), "webkit") && !y("Edge");

        function Yb() {
          var a = l.document;
          return a ? a.documentMode : void 0;
        }

        var Zb;

        a: {
          var $b = "",
              ac = function () {
            var a = gb;
            if (Wb) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Ub) return /Edge\/([\d\.]+)/.exec(a);
            if (Tb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Xb) return /WebKit\/(\S+)/.exec(a);
            if (Sb) return /(?:Version)[ \/]?(\S+)/.exec(a);
          }();

          ac && ($b = ac ? ac[1] : "");

          if (Tb) {
            var bc = Yb();

            if (null != bc && bc > parseFloat($b)) {
              Zb = String(bc);
              break a;
            }
          }

          Zb = $b;
        }

        var Rb = {};

        function cc(a) {
          return Qb(a, function () {
            for (var b = 0, c = Ya(String(Zb)).split("."), d = Ya(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
              var g = c[f] || "",
                  h = d[f] || "";

              do {
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == g[0].length && 0 == h[0].length) break;
                b = fb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || fb(0 == g[2].length, 0 == h[2].length) || fb(g[2], h[2]);
                g = g[3];
                h = h[3];
              } while (0 == b);
            }

            return 0 <= b;
          });
        }

        var dc;
        dc = l.document && Tb ? Yb() : void 0;

        try {
          new self.OffscreenCanvas(0, 0).getContext("2d");
        } catch (a) {}

        var ec = !Tb || 9 <= Number(dc);

        function fc(a) {
          var b = document;
          return "string" === typeof a ? b.getElementById(a) : a;
        }

        function gc(a, b) {
          jb(b, function (c, d) {
            c && "object" == typeof c && c.sa && (c = c.ra());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : hc.hasOwnProperty(d) ? a.setAttribute(hc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c;
          });
        }

        var hc = {
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          colspan: "colSpan",
          frameborder: "frameBorder",
          height: "height",
          maxlength: "maxLength",
          nonce: "nonce",
          role: "role",
          rowspan: "rowSpan",
          type: "type",
          usemap: "useMap",
          valign: "vAlign",
          width: "width"
        };

        function ic(a, b, c) {
          var d = arguments,
              e = document,
              f = String(d[0]),
              g = d[1];

          if (!ec && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', Ob(g.name), '"');

            if (g.type) {
              f.push(' type="', Ob(g.type), '"');
              var h = {};
              z(h, g);
              delete h.type;
              g = h;
            }

            f.push(">");
            f = f.join("");
          }

          f = jc(e, f);
          g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : gc(f, g));
          2 < d.length && kc(e, f, d);
          return f;
        }

        function kc(a, b, c) {
          function d(g) {
            g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g);
          }

          for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !ma(f) || n(f) && 0 < f.nodeType ? d(f) : w(lc(f) ? Xa(f) : f, d);
          }
        }

        function jc(a, b) {
          b = String(b);
          "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
          return a.createElement(b);
        }

        function lc(a) {
          if (a && "number" == typeof a.length) {
            if (n(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (na(a)) return "function" == typeof a.item;
          }

          return !1;
        }

        ;

        function mc(a) {
          l.setTimeout(function () {
            throw a;
          }, 0);
        }

        var nc;

        function oc() {
          var a = l.MessageChannel;
          "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y("Presto") && (a = function a() {
            var e = jc(document, "IFRAME");
            e.style.display = "none";
            Lb(e);
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.write(Ib(Kb));
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = q(function (m) {
              if (("*" == h || m.origin == h) && m.data == g) this.port1.onmessage();
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
              postMessage: function postMessage() {
                f.postMessage(g, h);
              }
            };
          });

          if ("undefined" !== typeof a && !y("Trident") && !y("MSIE")) {
            var b = new a(),
                c = {},
                d = c;

            b.port1.onmessage = function () {
              if (void 0 !== c.next) {
                c = c.next;
                var e = c.Fb;
                c.Fb = null;
                e();
              }
            };

            return function (e) {
              d.next = {
                Fb: e
              };
              d = d.next;
              b.port2.postMessage(0);
            };
          }

          return function (e) {
            l.setTimeout(e, 0);
          };
        }

        ;

        function pc(a, b) {
          qc || rc();
          sc || (qc(), sc = !0);
          La.add(a, b);
        }

        var qc;

        function rc() {
          if (l.Promise && l.Promise.resolve) {
            var a = l.Promise.resolve(void 0);

            qc = function qc() {
              a.then(tc);
            };
          } else qc = function qc() {
            var b = tc;
            !na(l.setImmediate) || l.Window && l.Window.prototype && !y("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (nc || (nc = oc()), nc(b)) : l.setImmediate(b);
          };
        }

        var sc = !1,
            La = new Ha();

        function tc() {
          for (var a; a = Ka();) {
            try {
              a.a.call(a.b);
            } catch (b) {
              mc(b);
            }

            Ga(Ja, a);
          }

          sc = !1;
        }

        ;

        function C(a, b) {
          this.a = uc;
          this.i = void 0;
          this.f = this.b = this.c = null;
          this.g = this.h = !1;
          if (a != ka) try {
            var c = this;
            a.call(b, function (d) {
              vc(c, wc, d);
            }, function (d) {
              if (!(d instanceof xc)) try {
                if (d instanceof Error) throw d;
                throw Error("Promise rejected.");
              } catch (e) {}
              vc(c, yc, d);
            });
          } catch (d) {
            vc(this, yc, d);
          }
        }

        var uc = 0,
            wc = 2,
            yc = 3;

        function zc() {
          this.next = this.f = this.b = this.g = this.a = null;
          this.c = !1;
        }

        zc.prototype.reset = function () {
          this.f = this.b = this.g = this.a = null;
          this.c = !1;
        };

        var Ac = new Fa(function () {
          return new zc();
        }, function (a) {
          a.reset();
        });

        function Bc(a, b, c) {
          var d = Ac.get();
          d.g = a;
          d.b = b;
          d.f = c;
          return d;
        }

        function D(a) {
          if (a instanceof C) return a;
          var b = new C(ka);
          vc(b, wc, a);
          return b;
        }

        function E(a) {
          return new C(function (b, c) {
            c(a);
          });
        }

        function Cc(a, b, c) {
          Dc(a, b, c, null) || pc(ta(b, a));
        }

        function Ec(a) {
          return new C(function (b, c) {
            var d = a.length,
                e = [];
            if (d) for (var f = function f(p, v) {
              d--;
              e[p] = v;
              0 == d && b(e);
            }, g = function g(p) {
              c(p);
            }, h = 0, m; h < a.length; h++) m = a[h], Cc(m, ta(f, h), g);else b(e);
          });
        }

        function Fc(a) {
          return new C(function (b) {
            var c = a.length,
                d = [];
            if (c) for (var e = function e(h, m, p) {
              c--;
              d[h] = m ? {
                Ob: !0,
                value: p
              } : {
                Ob: !1,
                reason: p
              };
              0 == c && b(d);
            }, f = 0, g; f < a.length; f++) g = a[f], Cc(g, ta(e, f, !0), ta(e, f, !1));else b(d);
          });
        }

        C.prototype.then = function (a, b, c) {
          return Gc(this, na(a) ? a : null, na(b) ? b : null, c);
        };

        C.prototype.$goog_Thenable = !0;
        k = C.prototype;

        k.na = function (a, b) {
          a = Bc(a, a, b);
          a.c = !0;
          Hc(this, a);
          return this;
        };

        k.s = function (a, b) {
          return Gc(this, null, a, b);
        };

        k.cancel = function (a) {
          if (this.a == uc) {
            var b = new xc(a);
            pc(function () {
              Ic(this, b);
            }, this);
          }
        };

        function Ic(a, b) {
          if (a.a == uc) if (a.c) {
            var c = a.c;

            if (c.b) {
              for (var d = 0, e = null, f = null, g = c.b; g && (g.c || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);

              e && (c.a == uc && 1 == d ? Ic(c, b) : (f ? (d = f, d.next == c.f && (c.f = d), d.next = d.next.next) : Jc(c), Kc(c, e, yc, b)));
            }

            a.c = null;
          } else vc(a, yc, b);
        }

        function Hc(a, b) {
          a.b || a.a != wc && a.a != yc || Lc(a);
          a.f ? a.f.next = b : a.b = b;
          a.f = b;
        }

        function Gc(a, b, c, d) {
          var e = Bc(null, null, null);
          e.a = new C(function (f, g) {
            e.g = b ? function (h) {
              try {
                var m = b.call(d, h);
                f(m);
              } catch (p) {
                g(p);
              }
            } : f;
            e.b = c ? function (h) {
              try {
                var m = c.call(d, h);
                void 0 === m && h instanceof xc ? g(h) : f(m);
              } catch (p) {
                g(p);
              }
            } : g;
          });
          e.a.c = a;
          Hc(a, e);
          return e.a;
        }

        k.Zc = function (a) {
          this.a = uc;
          vc(this, wc, a);
        };

        k.$c = function (a) {
          this.a = uc;
          vc(this, yc, a);
        };

        function vc(a, b, c) {
          a.a == uc && (a === c && (b = yc, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, Dc(c, a.Zc, a.$c, a) || (a.i = c, a.a = b, a.c = null, Lc(a), b != yc || c instanceof xc || Mc(a, c)));
        }

        function Dc(a, b, c, d) {
          if (a instanceof C) return Hc(a, Bc(b || ka, c || null, d)), !0;
          if (Ca(a)) return a.then(b, c, d), !0;
          if (n(a)) try {
            var e = a.then;
            if (na(e)) return Nc(a, e, b, c, d), !0;
          } catch (f) {
            return c.call(d, f), !0;
          }
          return !1;
        }

        function Nc(a, b, c, d, e) {
          function f(m) {
            h || (h = !0, d.call(e, m));
          }

          function g(m) {
            h || (h = !0, c.call(e, m));
          }

          var h = !1;

          try {
            b.call(a, g, f);
          } catch (m) {
            f(m);
          }
        }

        function Lc(a) {
          a.h || (a.h = !0, pc(a.fc, a));
        }

        function Jc(a) {
          var b = null;
          a.b && (b = a.b, a.b = b.next, b.next = null);
          a.b || (a.f = null);
          return b;
        }

        k.fc = function () {
          for (var a; a = Jc(this);) Kc(this, a, this.a, this.i);

          this.h = !1;
        };

        function Kc(a, b, c, d) {
          if (c == yc && b.b && !b.c) for (; a && a.g; a = a.c) a.g = !1;
          if (b.a) b.a.c = null, Oc(b, c, d);else try {
            b.c ? b.g.call(b.f) : Oc(b, c, d);
          } catch (e) {
            Pc.call(null, e);
          }
          Ga(Ac, b);
        }

        function Oc(a, b, c) {
          b == wc ? a.g.call(a.f, c) : a.b && a.b.call(a.f, c);
        }

        function Mc(a, b) {
          a.g = !0;
          pc(function () {
            a.g && Pc.call(null, b);
          });
        }

        var Pc = mc;

        function xc(a) {
          u.call(this, a);
        }

        r(xc, u);
        xc.prototype.name = "cancel";

        function Qc() {
          0 != Rc && (Sc[oa(this)] = this);
          this.xa = this.xa;
          this.oa = this.oa;
        }

        var Rc = 0,
            Sc = {};
        Qc.prototype.xa = !1;

        function Tc(a) {
          if (!a.xa && (a.xa = !0, a.Da(), 0 != Rc)) {
            var b = oa(a);
            if (0 != Rc && a.oa && 0 < a.oa.length) throw Error(a + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
            delete Sc[b];
          }
        }

        Qc.prototype.Da = function () {
          if (this.oa) for (; this.oa.length;) this.oa.shift()();
        };

        var Uc = Object.freeze || function (a) {
          return a;
        };

        var Vc = !Tb || 9 <= Number(dc),
            Wc = Tb && !cc("9"),
            Xc = function () {
          if (!l.addEventListener || !Object.defineProperty) return !1;
          var a = !1,
              b = Object.defineProperty({}, "passive", {
            get: function get() {
              a = !0;
            }
          });

          try {
            l.addEventListener("test", ka, b), l.removeEventListener("test", ka, b);
          } catch (c) {}

          return a;
        }();

        function F(a, b) {
          this.type = a;
          this.b = this.target = b;
          this.defaultPrevented = !1;
        }

        F.prototype.preventDefault = function () {
          this.defaultPrevented = !0;
        };

        function Yc(a, b) {
          F.call(this, a ? a.type : "");
          this.relatedTarget = this.b = this.target = null;
          this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
          this.key = "";
          this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
          this.pointerId = 0;
          this.pointerType = "";
          this.a = null;

          if (a) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.b = b;

            if (b = a.relatedTarget) {
              if (Wb) {
                a: {
                  try {
                    Pb(b.nodeName);
                    var e = !0;
                    break a;
                  } catch (f) {}

                  e = !1;
                }

                e || (b = null);
              }
            } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);

            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Zc[a.pointerType] || "";
            this.a = a;
            a.defaultPrevented && this.preventDefault();
          }
        }

        r(Yc, F);
        var Zc = Uc({
          2: "touch",
          3: "pen",
          4: "mouse"
        });

        Yc.prototype.preventDefault = function () {
          Yc.$a.preventDefault.call(this);
          var a = this.a;
          if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Wc) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
          } catch (b) {}
        };

        Yc.prototype.g = function () {
          return this.a;
        };

        var $c = "closure_listenable_" + (1E6 * Math.random() | 0),
            ad = 0;

        function bd(a, b, c, d, e) {
          this.listener = a;
          this.proxy = null;
          this.src = b;
          this.type = c;
          this.capture = !!d;
          this.Ua = e;
          this.key = ++ad;
          this.va = this.Oa = !1;
        }

        function cd(a) {
          a.va = !0;
          a.listener = null;
          a.proxy = null;
          a.src = null;
          a.Ua = null;
        }

        ;

        function dd(a) {
          this.src = a;
          this.a = {};
          this.b = 0;
        }

        dd.prototype.add = function (a, b, c, d, e) {
          var f = a.toString();
          a = this.a[f];
          a || (a = this.a[f] = [], this.b++);
          var g = ed(a, b, d, e);
          -1 < g ? (b = a[g], c || (b.Oa = !1)) : (b = new bd(b, this.src, f, !!d, e), b.Oa = c, a.push(b));
          return b;
        };

        function fd(a, b) {
          var c = b.type;
          c in a.a && Ua(a.a[c], b) && (cd(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        }

        function ed(a, b, c, d) {
          for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.va && f.listener == b && f.capture == !!c && f.Ua == d) return e;
          }

          return -1;
        }

        ;
        var gd = "closure_lm_" + (1E6 * Math.random() | 0),
            hd = {},
            id = 0;

        function jd(a, b, c, d, e) {
          if (d && d.once) kd(a, b, c, d, e);else if (Array.isArray(b)) for (var f = 0; f < b.length; f++) jd(a, b[f], c, d, e);else c = ld(c), a && a[$c] ? md(a, b, c, n(d) ? !!d.capture : !!d, e) : nd(a, b, c, !1, d, e);
        }

        function nd(a, b, c, d, e, f) {
          if (!b) throw Error("Invalid event type");
          var g = n(e) ? !!e.capture : !!e,
              h = od(a);
          h || (a[gd] = h = new dd(a));
          c = h.add(b, c, d, g, f);

          if (!c.proxy) {
            d = pd();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Xc || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(qd(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
            id++;
          }
        }

        function pd() {
          var a = rd,
              b = Vc ? function (c) {
            return a.call(b.src, b.listener, c);
          } : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c;
          };
          return b;
        }

        function kd(a, b, c, d, e) {
          if (Array.isArray(b)) for (var f = 0; f < b.length; f++) kd(a, b[f], c, d, e);else c = ld(c), a && a[$c] ? sd(a, b, c, n(d) ? !!d.capture : !!d, e) : nd(a, b, c, !0, d, e);
        }

        function G(a, b, c, d, e) {
          if (Array.isArray(b)) for (var f = 0; f < b.length; f++) G(a, b[f], c, d, e);else (d = n(d) ? !!d.capture : !!d, c = ld(c), a && a[$c]) ? (a = a.v, b = String(b).toString(), b in a.a && (f = a.a[b], c = ed(f, c, d, e), -1 < c && (cd(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = od(a)) && (b = a.a[b.toString()], a = -1, b && (a = ed(b, c, d, e)), (c = -1 < a ? b[a] : null) && td(c));
        }

        function td(a) {
          if ("number" !== typeof a && a && !a.va) {
            var b = a.src;
            if (b && b[$c]) fd(b.v, a);else {
              var c = a.type,
                  d = a.proxy;
              b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(qd(c), d) : b.addListener && b.removeListener && b.removeListener(d);
              id--;
              (c = od(b)) ? (fd(c, a), 0 == c.b && (c.src = null, b[gd] = null)) : cd(a);
            }
          }
        }

        function qd(a) {
          return a in hd ? hd[a] : hd[a] = "on" + a;
        }

        function ud(a, b, c, d) {
          var e = !0;
          if (a = od(a)) if (b = a.a[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.capture == c && !f.va && (f = vd(f, d), e = e && !1 !== f);
          }
          return e;
        }

        function vd(a, b) {
          var c = a.listener,
              d = a.Ua || a.src;
          a.Oa && td(a);
          return c.call(d, b);
        }

        function rd(a, b) {
          if (a.va) return !0;

          if (!Vc) {
            if (!b) a: {
              b = ["window", "event"];

              for (var c = l, d = 0; d < b.length; d++) if (c = c[b[d]], null == c) {
                b = null;
                break a;
              }

              b = c;
            }
            d = b;
            b = new Yc(d, this);
            c = !0;

            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
              a: {
                var e = !1;
                if (0 == d.keyCode) try {
                  d.keyCode = -1;
                  break a;
                } catch (g) {
                  e = !0;
                }
                if (e || void 0 == d.returnValue) d.returnValue = !0;
              }

              d = [];

              for (e = b.b; e; e = e.parentNode) d.push(e);

              a = a.type;

              for (e = d.length - 1; 0 <= e; e--) {
                b.b = d[e];
                var f = ud(d[e], a, !0, b);
                c = c && f;
              }

              for (e = 0; e < d.length; e++) b.b = d[e], f = ud(d[e], a, !1, b), c = c && f;
            }

            return c;
          }

          return vd(a, new Yc(b, this));
        }

        function od(a) {
          a = a[gd];
          return a instanceof dd ? a : null;
        }

        var wd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

        function ld(a) {
          if (na(a)) return a;
          a[wd] || (a[wd] = function (b) {
            return a.handleEvent(b);
          });
          return a[wd];
        }

        ;

        function H() {
          Qc.call(this);
          this.v = new dd(this);
          this.$b = this;
          this.fb = null;
        }

        r(H, Qc);
        H.prototype[$c] = !0;

        H.prototype.addEventListener = function (a, b, c, d) {
          jd(this, a, b, c, d);
        };

        H.prototype.removeEventListener = function (a, b, c, d) {
          G(this, a, b, c, d);
        };

        H.prototype.dispatchEvent = function (a) {
          var b,
              c = this.fb;
          if (c) for (b = []; c; c = c.fb) b.push(c);
          c = this.$b;
          var d = a.type || a;
          if ("string" === typeof a) a = new F(a, c);else if (a instanceof F) a.target = a.target || c;else {
            var e = a;
            a = new F(d, c);
            z(a, e);
          }
          e = !0;
          if (b) for (var f = b.length - 1; 0 <= f; f--) {
            var g = a.b = b[f];
            e = xd(g, d, !0, a) && e;
          }
          g = a.b = c;
          e = xd(g, d, !0, a) && e;
          e = xd(g, d, !1, a) && e;
          if (b) for (f = 0; f < b.length; f++) g = a.b = b[f], e = xd(g, d, !1, a) && e;
          return e;
        };

        H.prototype.Da = function () {
          H.$a.Da.call(this);

          if (this.v) {
            var a = this.v,
                b = 0,
                c;

            for (c in a.a) {
              for (var d = a.a[c], e = 0; e < d.length; e++) ++b, cd(d[e]);

              delete a.a[c];
              a.b--;
            }
          }

          this.fb = null;
        };

        function md(a, b, c, d, e) {
          a.v.add(String(b), c, !1, d, e);
        }

        function sd(a, b, c, d, e) {
          a.v.add(String(b), c, !0, d, e);
        }

        function xd(a, b, c, d) {
          b = a.v.a[String(b)];
          if (!b) return !0;
          b = b.concat();

          for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];

            if (g && !g.va && g.capture == c) {
              var h = g.listener,
                  m = g.Ua || g.src;
              g.Oa && fd(a.v, g);
              e = !1 !== h.call(m, d) && e;
            }
          }

          return e && !d.defaultPrevented;
        }

        ;

        function zd(a, b, c) {
          if (na(a)) c && (a = q(a, c));else if (a && "function" == typeof a.handleEvent) a = q(a.handleEvent, a);else throw Error("Invalid listener argument");
          return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
        }

        function Ad(a) {
          var b = null;
          return new C(function (c, d) {
            b = zd(function () {
              c(void 0);
            }, a);
            -1 == b && d(Error("Failed to schedule timer."));
          }).s(function (c) {
            l.clearTimeout(b);
            throw c;
          });
        }

        ;

        function Bd(a) {
          if (a.V && "function" == typeof a.V) return a.V();
          if ("string" === typeof a) return a.split("");

          if (ma(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);

            return b;
          }

          b = [];
          c = 0;

          for (d in a) b[c++] = a[d];

          return b;
        }

        function Cd(a) {
          if (a.Y && "function" == typeof a.Y) return a.Y();

          if (!a.V || "function" != typeof a.V) {
            if (ma(a) || "string" === typeof a) {
              var b = [];
              a = a.length;

              for (var c = 0; c < a; c++) b.push(c);

              return b;
            }

            b = [];
            c = 0;

            for (var d in a) b[c++] = d;

            return b;
          }
        }

        function Dd(a, b) {
          if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (ma(a) || "string" === typeof a) w(a, b, void 0);else for (var c = Cd(a), d = Bd(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a);
        }

        ;

        function Ed(a, b) {
          this.b = {};
          this.a = [];
          this.c = 0;
          var c = arguments.length;

          if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");

            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
          } else if (a) if (a instanceof Ed) for (c = a.Y(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));else for (d in a) this.set(d, a[d]);
        }

        k = Ed.prototype;

        k.V = function () {
          Fd(this);

          for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);

          return a;
        };

        k.Y = function () {
          Fd(this);
          return this.a.concat();
        };

        k.clear = function () {
          this.b = {};
          this.c = this.a.length = 0;
        };

        function Fd(a) {
          if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
              var d = a.a[b];
              Gd(a.b, d) && (a.a[c++] = d);
              b++;
            }

            a.a.length = c;
          }

          if (a.c != a.a.length) {
            var e = {};

            for (c = b = 0; b < a.a.length;) d = a.a[b], Gd(e, d) || (a.a[c++] = d, e[d] = 1), b++;

            a.a.length = c;
          }
        }

        k.get = function (a, b) {
          return Gd(this.b, a) ? this.b[a] : b;
        };

        k.set = function (a, b) {
          Gd(this.b, a) || (this.c++, this.a.push(a));
          this.b[a] = b;
        };

        k.forEach = function (a, b) {
          for (var c = this.Y(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this);
          }
        };

        function Gd(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b);
        }

        ;
        var Hd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

        function Id(a, b) {
          if (a) {
            a = a.split("&");

            for (var c = 0; c < a.length; c++) {
              var d = a[c].indexOf("="),
                  e = null;

              if (0 <= d) {
                var f = a[c].substring(0, d);
                e = a[c].substring(d + 1);
              } else f = a[c];

              b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
            }
          }
        }

        ;

        function Jd(a, b) {
          this.a = this.l = this.f = "";
          this.g = null;
          this.h = this.c = "";
          this.i = !1;
          var c;
          a instanceof Jd ? (this.i = void 0 !== b ? b : a.i, Kd(this, a.f), this.l = a.l, this.a = a.a, Ld(this, a.g), this.c = a.c, Md(this, Nd(a.b)), this.h = a.h) : a && (c = String(a).match(Hd)) ? (this.i = !!b, Kd(this, c[1] || "", !0), this.l = Od(c[2] || ""), this.a = Od(c[3] || "", !0), Ld(this, c[4]), this.c = Od(c[5] || "", !0), Md(this, c[6] || "", !0), this.h = Od(c[7] || "")) : (this.i = !!b, this.b = new Pd(null, this.i));
        }

        Jd.prototype.toString = function () {
          var a = [],
              b = this.f;
          b && a.push(Qd(b, Rd, !0), ":");
          var c = this.a;
          if (c || "file" == b) a.push("//"), (b = this.l) && a.push(Qd(b, Rd, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.g, null != c && a.push(":", String(c));
          if (c = this.c) this.a && "/" != c.charAt(0) && a.push("/"), a.push(Qd(c, "/" == c.charAt(0) ? Sd : Td, !0));
          (c = this.b.toString()) && a.push("?", c);
          (c = this.h) && a.push("#", Qd(c, Ud));
          return a.join("");
        };

        Jd.prototype.resolve = function (a) {
          var b = new Jd(this),
              c = !!a.f;
          c ? Kd(b, a.f) : c = !!a.l;
          c ? b.l = a.l : c = !!a.a;
          c ? b.a = a.a : c = null != a.g;
          var d = a.c;
          if (c) Ld(b, a.g);else if (c = !!a.c) {
            if ("/" != d.charAt(0)) if (this.a && !this.c) d = "/" + d;else {
              var e = b.c.lastIndexOf("/");
              -1 != e && (d = b.c.substr(0, e + 1) + d);
            }
            e = d;
            if (".." == e || "." == e) d = "";else if (x(e, "./") || x(e, "/.")) {
              d = 0 == e.lastIndexOf("/", 0);
              e = e.split("/");

              for (var f = [], g = 0; g < e.length;) {
                var h = e[g++];
                "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0);
              }

              d = f.join("/");
            } else d = e;
          }
          c ? b.c = d : c = "" !== a.b.toString();
          c ? Md(b, Nd(a.b)) : c = !!a.h;
          c && (b.h = a.h);
          return b;
        };

        function Kd(a, b, c) {
          a.f = c ? Od(b, !0) : b;
          a.f && (a.f = a.f.replace(/:$/, ""));
        }

        function Ld(a, b) {
          if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.g = b;
          } else a.g = null;
        }

        function Md(a, b, c) {
          b instanceof Pd ? (a.b = b, Vd(a.b, a.i)) : (c || (b = Qd(b, Wd)), a.b = new Pd(b, a.i));
        }

        function I(a, b, c) {
          a.b.set(b, c);
        }

        function Xd(a, b) {
          return a.b.get(b);
        }

        function J(a) {
          return a instanceof Jd ? new Jd(a) : new Jd(a, void 0);
        }

        function Yd(a, b, c, d) {
          var e = new Jd(null, void 0);
          a && Kd(e, a);
          b && (e.a = b);
          c && Ld(e, c);
          d && (e.c = d);
          return e;
        }

        function Od(a, b) {
          return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
        }

        function Qd(a, b, c) {
          return "string" === typeof a ? (a = encodeURI(a).replace(b, Zd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
        }

        function Zd(a) {
          a = a.charCodeAt(0);
          return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
        }

        var Rd = /[#\/\?@]/g,
            Td = /[#\?:]/g,
            Sd = /[#\?]/g,
            Wd = /[#\?@]/g,
            Ud = /#/g;

        function Pd(a, b) {
          this.b = this.a = null;
          this.c = a || null;
          this.f = !!b;
        }

        function $d(a) {
          a.a || (a.a = new Ed(), a.b = 0, a.c && Id(a.c, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
          }));
        }

        function ae(a) {
          var b = Cd(a);
          if ("undefined" == typeof b) throw Error("Keys are undefined");
          var c = new Pd(null, void 0);
          a = Bd(a);

          for (var d = 0; d < b.length; d++) {
            var e = b[d],
                f = a[d];
            Array.isArray(f) ? be(c, e, f) : c.add(e, f);
          }

          return c;
        }

        k = Pd.prototype;

        k.add = function (a, b) {
          $d(this);
          this.c = null;
          a = ce(this, a);
          var c = this.a.get(a);
          c || this.a.set(a, c = []);
          c.push(b);
          this.b += 1;
          return this;
        };

        function de(a, b) {
          $d(a);
          b = ce(a, b);
          Gd(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, Gd(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Fd(a)));
        }

        k.clear = function () {
          this.a = this.c = null;
          this.b = 0;
        };

        function ee(a, b) {
          $d(a);
          b = ce(a, b);
          return Gd(a.a.b, b);
        }

        k.forEach = function (a, b) {
          $d(this);
          this.a.forEach(function (c, d) {
            w(c, function (e) {
              a.call(b, e, d, this);
            }, this);
          }, this);
        };

        k.Y = function () {
          $d(this);

          for (var a = this.a.V(), b = this.a.Y(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);

          return c;
        };

        k.V = function (a) {
          $d(this);
          var b = [];
          if ("string" === typeof a) ee(this, a) && (b = Wa(b, this.a.get(ce(this, a))));else {
            a = this.a.V();

            for (var c = 0; c < a.length; c++) b = Wa(b, a[c]);
          }
          return b;
        };

        k.set = function (a, b) {
          $d(this);
          this.c = null;
          a = ce(this, a);
          ee(this, a) && (this.b -= this.a.get(a).length);
          this.a.set(a, [b]);
          this.b += 1;
          return this;
        };

        k.get = function (a, b) {
          if (!a) return b;
          a = this.V(a);
          return 0 < a.length ? String(a[0]) : b;
        };

        function be(a, b, c) {
          de(a, b);
          0 < c.length && (a.c = null, a.a.set(ce(a, b), Xa(c)), a.b += c.length);
        }

        k.toString = function () {
          if (this.c) return this.c;
          if (!this.a) return "";

          for (var a = [], b = this.a.Y(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.V(d);

            for (var f = 0; f < d.length; f++) {
              var g = e;
              "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
              a.push(g);
            }
          }

          return this.c = a.join("&");
        };

        function Nd(a) {
          var b = new Pd();
          b.c = a.c;
          a.a && (b.a = new Ed(a.a), b.b = a.b);
          return b;
        }

        function ce(a, b) {
          b = String(b);
          a.f && (b = b.toLowerCase());
          return b;
        }

        function Vd(a, b) {
          b && !a.f && ($d(a), a.c = null, a.a.forEach(function (c, d) {
            var e = d.toLowerCase();
            d != e && (de(this, d), be(this, e, c));
          }, a));
          a.f = b;
        }

        ;

        function fe(a) {
          var b = [];
          ge(new he(), a, b);
          return b.join("");
        }

        function he() {}

        function ge(a, b, c) {
          if (null == b) c.push("null");else {
            if ("object" == typeof b) {
              if (Array.isArray(b)) {
                var d = b;
                b = d.length;
                c.push("[");

                for (var e = "", f = 0; f < b; f++) c.push(e), ge(a, d[f], c), e = ",";

                c.push("]");
                return;
              }

              if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
                c.push("{");
                e = "";

                for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), ie(d, c), c.push(":"), ge(a, f, c), e = ","));

                c.push("}");
                return;
              }
            }

            switch (typeof b) {
              case "string":
                ie(b, c);
                break;

              case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;

              case "boolean":
                c.push(String(b));
                break;

              case "function":
                c.push("null");
                break;

              default:
                throw Error("Unknown type: " + typeof b);
            }
          }
        }

        var je = {
          '"': '\\"',
          "\\": "\\\\",
          "/": "\\/",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t",
          "\x0B": "\\u000b"
        },
            ke = /\uffff/.test("\uFFFF") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

        function ie(a, b) {
          b.push('"', a.replace(ke, function (c) {
            var d = je[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), je[c] = d);
            return d;
          }), '"');
        }

        ;

        function le() {
          var a = K();
          return Tb && !!dc && 11 == dc || /Edge\/\d+/.test(a);
        }

        function me() {
          return l.window && l.window.location.href || self && self.location && self.location.href || "";
        }

        function ne(a, b) {
          b = b || l.window;
          var c = "about:blank";
          a && (c = Db(Fb(a)));
          b.location.href = c;
        }

        function oe(a, b) {
          var c = [],
              d;

          for (d in a) d in b ? typeof a[d] != typeof b[d] ? c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < oe(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);

          for (d in b) d in a || c.push(d);

          return c;
        }

        function pe() {
          var a = K();
          a = qe(a) != re ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;
          return a && 30 > a ? !1 : !Tb || !dc || 9 < dc;
        }

        function se(a) {
          a = (a || K()).toLowerCase();
          return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1;
        }

        function te(a) {
          a = a || l.window;

          try {
            a.close();
          } catch (b) {}
        }

        function ue(a, b, c) {
          var d = Math.floor(1E9 * Math.random()).toString();
          b = b || 500;
          c = c || 600;
          var e = (window.screen.availHeight - c) / 2,
              f = (window.screen.availWidth - b) / 2;
          b = {
            width: b,
            height: c,
            top: 0 < e ? e : 0,
            left: 0 < f ? f : 0,
            location: !0,
            resizable: !0,
            statusbar: !0,
            toolbar: !1
          };
          c = K().toLowerCase();
          d && (b.target = d, x(c, "crios/") && (b.target = "_blank"));
          qe(K()) == ve && (a = a || "http://localhost", b.scrollbars = !0);
          c = a || "";
          (a = b) || (a = {});
          d = window;
          b = c instanceof Ab ? c : Fb("undefined" != typeof c.href ? c.href : String(c));
          c = a.target || c.target;
          e = [];

          for (g in a) switch (g) {
            case "width":
            case "height":
            case "top":
            case "left":
              e.push(g + "=" + a[g]);
              break;

            case "target":
            case "noopener":
            case "noreferrer":
              break;

            default:
              e.push(g + "=" + (a[g] ? 1 : 0));
          }

          var g = e.join(",");
          if ((y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod")) && d.navigator && d.navigator.standalone && c && "_self" != c) g = jc(document, "A"), nb(g, "HTMLAnchorElement"), b instanceof Ab || b instanceof Ab || (b = "object" == typeof b && b.sa ? b.ra() : String(b), Eb.test(b) || (b = "about:invalid#zClosurez"), b = new Ab(Bb, b)), g.href = Db(b), g.setAttribute("target", c), a.noreferrer && g.setAttribute("rel", "noreferrer"), a = document.createEvent("MouseEvent"), a.initMouseEvent("click", !0, !0, d, 1), g.dispatchEvent(a), g = {};else if (a.noreferrer) {
            if (g = d.open("", c, g), a = Db(b), g && (Vb && x(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"), g.opener = null, a = Jb('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Ob(a) + '">'), d = g.document)) d.write(Ib(a)), d.close();
          } else (g = d.open(Db(b), c, g)) && a.noopener && (g.opener = null);
          if (g) try {
            g.focus();
          } catch (h) {}
          return g;
        }

        function we(a) {
          return new C(function (b) {
            function c() {
              Ad(2E3).then(function () {
                if (!a || a.closed) b();else return c();
              });
            }

            return c();
          });
        }

        var xe = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
            ye = /^[^@]+@[^@]+$/;

        function ze() {
          var a = null;
          return new C(function (b) {
            "complete" == l.document.readyState ? b() : (a = function a() {
              b();
            }, kd(window, "load", a));
          }).s(function (b) {
            G(window, "load", a);
            throw b;
          });
        }

        function Ae() {
          return Be(void 0) ? ze().then(function () {
            return new C(function (a, b) {
              var c = l.document,
                  d = setTimeout(function () {
                b(Error("Cordova framework is not ready."));
              }, 1E3);
              c.addEventListener("deviceready", function () {
                clearTimeout(d);
                a();
              }, !1);
            });
          }) : E(Error("Cordova must run in an Android or iOS file scheme."));
        }

        function Be(a) {
          a = a || K();
          return !("file:" !== Ce() && "ionic:" !== Ce() || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
        }

        function De() {
          var a = l.window;

          try {
            return !(!a || a == a.top);
          } catch (b) {
            return !1;
          }
        }

        function Ee() {
          return "undefined" !== typeof l.WorkerGlobalScope && "function" === typeof l.importScripts;
        }

        function Fe() {
          return firebase.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase.INTERNAL.hasOwnProperty("node") ? "Node" : Ee() ? "Worker" : "Browser";
        }

        function Ge() {
          var a = Fe();
          return "ReactNative" === a || "Node" === a;
        }

        function He() {
          for (var a = 50, b = []; 0 < a;) b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;

          return b.join("");
        }

        var ve = "Firefox",
            re = "Chrome";

        function qe(a) {
          var b = a.toLowerCase();
          if (x(b, "opera/") || x(b, "opr/") || x(b, "opios/")) return "Opera";
          if (x(b, "iemobile")) return "IEMobile";
          if (x(b, "msie") || x(b, "trident/")) return "IE";
          if (x(b, "edge/")) return "Edge";
          if (x(b, "firefox/")) return ve;
          if (x(b, "silk/")) return "Silk";
          if (x(b, "blackberry")) return "Blackberry";
          if (x(b, "webos")) return "Webos";
          if (!x(b, "safari/") || x(b, "chrome/") || x(b, "crios/") || x(b, "android")) {
            if (!x(b, "chrome/") && !x(b, "crios/") || x(b, "edge/")) {
              if (x(b, "android")) return "Android";
              if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length) return a[1];
            } else return re;
          } else return "Safari";
          return "Other";
        }

        var Ie = {
          ld: "FirebaseCore-web",
          nd: "FirebaseUI-web"
        };

        function Je(a, b) {
          b = b || [];
          var c = [],
              d = {},
              e;

          for (e in Ie) d[Ie[e]] = !0;

          for (e = 0; e < b.length; e++) "undefined" !== typeof d[b[e]] && (delete d[b[e]], c.push(b[e]));

          c.sort();
          b = c;
          b.length || (b = ["FirebaseCore-web"]);
          c = Fe();
          "Browser" === c ? (d = K(), c = qe(d)) : "Worker" === c && (d = K(), c = qe(d) + "-" + c);
          return c + "/JsCore/" + a + "/" + b.join(",");
        }

        function K() {
          return l.navigator && l.navigator.userAgent || "";
        }

        function L(a, b) {
          a = a.split(".");
          b = b || l;

          for (var c = 0; c < a.length && "object" == typeof b && null != b; c++) b = b[a[c]];

          c != a.length && (b = void 0);
          return b;
        }

        function Ke() {
          try {
            var a = l.localStorage,
                b = Le();
            if (a) return a.setItem(b, "1"), a.removeItem(b), le() ? !!l.indexedDB : !0;
          } catch (c) {
            return Ee() && !!l.indexedDB;
          }

          return !1;
        }

        function Me() {
          return (Ne() || "chrome-extension:" === Ce() || Be()) && !Ge() && Ke() && !Ee();
        }

        function Ne() {
          return "http:" === Ce() || "https:" === Ce();
        }

        function Ce() {
          return l.location && l.location.protocol || null;
        }

        function Oe(a) {
          a = a || K();
          return se(a) || qe(a) == ve ? !1 : !0;
        }

        function Pe(a) {
          return "undefined" === typeof a ? null : fe(a);
        }

        function Qe(a) {
          var b = {},
              c;

          for (c in a) a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);

          return b;
        }

        function Re(a) {
          if (null !== a) return JSON.parse(a);
        }

        function Le(a) {
          return a ? a : Math.floor(1E9 * Math.random()).toString();
        }

        function Se(a) {
          a = a || K();
          return "Safari" == qe(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0;
        }

        function Te() {
          var a = l.___jsl;
          if (a && a.H) for (var b in a.H) if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP) for (var c = 0; c < a.CP.length; c++) a.CP[c] = null;
        }

        function Ue(a, b) {
          if (a > b) throw Error("Short delay should be less than long delay!");
          this.a = a;
          this.c = b;
          a = K();
          b = Fe();
          this.b = se(a) || "ReactNative" === b;
        }

        Ue.prototype.get = function () {
          var a = l.navigator;
          return (a && "boolean" === typeof a.onLine && (Ne() || "chrome-extension:" === Ce() || "undefined" !== typeof a.connection) ? a.onLine : 1) ? this.b ? this.c : this.a : Math.min(5E3, this.a);
        };

        function Ve() {
          var a = l.document;
          return a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : !0;
        }

        function We() {
          var a = l.document,
              _b2 = null;
          return Ve() || !a ? D() : new C(function (c) {
            _b2 = function b() {
              Ve() && (a.removeEventListener("visibilitychange", _b2, !1), c());
            };

            a.addEventListener("visibilitychange", _b2, !1);
          }).s(function (c) {
            a.removeEventListener("visibilitychange", _b2, !1);
            throw c;
          });
        }

        function Xe(a) {
          "undefined" !== typeof console && "function" === typeof console.warn && console.warn(a);
        }

        function Ye(a) {
          try {
            var b = new Date(parseInt(a, 10));
            if (!isNaN(b.getTime()) && !/[^0-9]/.test(a)) return b.toUTCString();
          } catch (c) {}

          return null;
        }

        function Ze() {
          return !(!L("fireauth.oauthhelper", l) && !L("fireauth.iframe", l));
        }

        function $e() {
          var a = l.navigator;
          return a && a.serviceWorker && a.serviceWorker.controller || null;
        }

        function af() {
          var a = l.navigator;
          return a && a.serviceWorker ? D().then(function () {
            return a.serviceWorker.ready;
          }).then(function (b) {
            return b.active || null;
          }).s(function () {
            return null;
          }) : D(null);
        }

        ;
        var bf = {};

        function cf(a) {
          bf[a] || (bf[a] = !0, Xe(a));
        }

        ;
        var df;

        try {
          var ef = {};
          Object.defineProperty(ef, "abcd", {
            configurable: !0,
            enumerable: !0,
            value: 1
          });
          Object.defineProperty(ef, "abcd", {
            configurable: !0,
            enumerable: !0,
            value: 2
          });
          df = 2 == ef.abcd;
        } catch (a) {
          df = !1;
        }

        function M(a, b, c) {
          df ? Object.defineProperty(a, b, {
            configurable: !0,
            enumerable: !0,
            value: c
          }) : a[b] = c;
        }

        function N(a, b) {
          if (b) for (var c in b) b.hasOwnProperty(c) && M(a, c, b[c]);
        }

        function ff(a) {
          var b = {};
          N(b, a);
          return b;
        }

        function gf(a) {
          var b = {},
              c;

          for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);

          return b;
        }

        function hf(a, b) {
          if (!b || !b.length) return !0;
          if (!a) return !1;

          for (var c = 0; c < b.length; c++) {
            var d = a[b[c]];
            if (void 0 === d || null === d || "" === d) return !1;
          }

          return !0;
        }

        function jf(a) {
          var b = a;

          if ("object" == typeof a && null != a) {
            b = "length" in a ? [] : {};

            for (var c in a) M(b, c, jf(a[c]));
          }

          return b;
        }

        ;
        /*
        Copyright 2019 Google Inc.
        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
        */

        function kf(a) {
          var b = a && (a[lf] ? "phone" : null);

          if (b && a && a[mf]) {
            M(this, "uid", a[mf]);
            M(this, "displayName", a[nf] || null);
            var c = null;
            a[of] && (c = new Date(a[of]).toUTCString());
            M(this, "enrollmentTime", c);
            M(this, "factorId", b);
          } else throw new t("internal-error", "Internal assert: invalid MultiFactorInfo object");
        }

        kf.prototype.w = function () {
          return {
            uid: this.uid,
            displayName: this.displayName,
            factorId: this.factorId,
            enrollmentTime: this.enrollmentTime
          };
        };

        function pf(a) {
          try {
            var b = new qf(a);
          } catch (c) {
            b = null;
          }

          return b;
        }

        var nf = "displayName",
            of = "enrolledAt",
            mf = "mfaEnrollmentId",
            lf = "phoneInfo";

        function qf(a) {
          kf.call(this, a);
          M(this, "phoneNumber", a[lf]);
        }

        r(qf, kf);

        qf.prototype.w = function () {
          var a = qf.$a.w.call(this);
          a.phoneNumber = this.phoneNumber;
          return a;
        };

        function rf(a) {
          var b = {},
              c = a[sf],
              d = a[tf],
              e = a[uf];
          a = pf(a[vf]);
          if (!e || e != wf && e != xf && !c || e == xf && !d || e == yf && !a) throw Error("Invalid checkActionCode response!");
          e == xf ? (b[zf] = c || null, b[Af] = c || null, b[Bf] = d) : (b[zf] = d || null, b[Af] = d || null, b[Bf] = c || null);
          b[Cf] = a || null;
          M(this, Df, e);
          M(this, Ef, jf(b));
        }

        var yf = "REVERT_SECOND_FACTOR_ADDITION",
            wf = "EMAIL_SIGNIN",
            xf = "VERIFY_AND_CHANGE_EMAIL",
            sf = "email",
            vf = "mfaInfo",
            tf = "newEmail",
            uf = "requestType",
            Bf = "email",
            zf = "fromEmail",
            Cf = "multiFactorInfo",
            Af = "previousEmail",
            Ef = "data",
            Df = "operation";

        function Ff(a) {
          a = J(a);
          var b = Xd(a, Gf) || null,
              c = Xd(a, Hf) || null,
              d = Xd(a, If) || null;
          d = d ? Jf[d] || null : null;
          if (!b || !c || !d) throw new t("argument-error", Gf + ", " + Hf + "and " + If + " are required in a valid action code URL.");
          N(this, {
            apiKey: b,
            operation: d,
            code: c,
            continueUrl: Xd(a, Kf) || null,
            languageCode: Xd(a, Lf) || null,
            tenantId: Xd(a, Mf) || null
          });
        }

        var Gf = "apiKey",
            Hf = "oobCode",
            Kf = "continueUrl",
            Lf = "languageCode",
            If = "mode",
            Mf = "tenantId",
            Jf = {
          recoverEmail: "RECOVER_EMAIL",
          resetPassword: "PASSWORD_RESET",
          revertSecondFactorAddition: yf,
          signIn: wf,
          verifyAndChangeEmail: xf,
          verifyEmail: "VERIFY_EMAIL"
        };

        function Nf(a) {
          try {
            return new Ff(a);
          } catch (b) {
            return null;
          }
        }

        ;

        function Of(a) {
          var b = a[Pf];
          if ("undefined" === typeof b) throw new t("missing-continue-uri");
          if ("string" !== typeof b || "string" === typeof b && !b.length) throw new t("invalid-continue-uri");
          this.h = b;
          this.b = this.a = null;
          this.g = !1;
          var c = a[Qf];

          if (c && "object" === typeof c) {
            b = c[Rf];
            var d = c[Sf];
            c = c[Tf];

            if ("string" === typeof b && b.length) {
              this.a = b;
              if ("undefined" !== typeof d && "boolean" !== typeof d) throw new t("argument-error", Sf + " property must be a boolean when specified.");
              this.g = !!d;
              if ("undefined" !== typeof c && ("string" !== typeof c || "string" === typeof c && !c.length)) throw new t("argument-error", Tf + " property must be a non empty string when specified.");
              this.b = c || null;
            } else {
              if ("undefined" !== typeof b) throw new t("argument-error", Rf + " property must be a non empty string when specified.");
              if ("undefined" !== typeof d || "undefined" !== typeof c) throw new t("missing-android-pkg-name");
            }
          } else if ("undefined" !== typeof c) throw new t("argument-error", Qf + " property must be a non null object when specified.");

          this.f = null;
          if ((b = a[Uf]) && "object" === typeof b) {
            if (b = b[Vf], "string" === typeof b && b.length) this.f = b;else {
              if ("undefined" !== typeof b) throw new t("argument-error", Vf + " property must be a non empty string when specified.");
            }
          } else if ("undefined" !== typeof b) throw new t("argument-error", Uf + " property must be a non null object when specified.");
          b = a[Wf];
          if ("undefined" !== typeof b && "boolean" !== typeof b) throw new t("argument-error", Wf + " property must be a boolean when specified.");
          this.c = !!b;
          a = a[Xf];
          if ("undefined" !== typeof a && ("string" !== typeof a || "string" === typeof a && !a.length)) throw new t("argument-error", Xf + " property must be a non empty string when specified.");
          this.i = a || null;
        }

        var Qf = "android",
            Xf = "dynamicLinkDomain",
            Wf = "handleCodeInApp",
            Uf = "iOS",
            Pf = "url",
            Sf = "installApp",
            Tf = "minimumVersion",
            Rf = "packageName",
            Vf = "bundleId";

        function Yf(a) {
          var b = {};
          b.continueUrl = a.h;
          b.canHandleCodeInApp = a.c;
          if (b.androidPackageName = a.a) b.androidMinimumVersion = a.b, b.androidInstallApp = a.g;
          b.iOSBundleId = a.f;
          b.dynamicLinkDomain = a.i;

          for (var c in b) null === b[c] && delete b[c];

          return b;
        }

        ;

        function Zf(a) {
          return Pa(a, function (b) {
            b = b.toString(16);
            return 1 < b.length ? b : "0" + b;
          }).join("");
        }

        ;
        var $f = null;

        function ag(a) {
          var b = "";
          bg(a, function (c) {
            b += String.fromCharCode(c);
          });
          return b;
        }

        function bg(a, b) {
          function c(m) {
            for (; d < a.length;) {
              var p = a.charAt(d++),
                  v = $f[p];
              if (null != v) return v;
              if (!/^[\s\xa0]*$/.test(p)) throw Error("Unknown base64 encoding at char: " + p);
            }

            return m;
          }

          cg();

          for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h));
          }
        }

        function cg() {
          if (!$f) {
            $f = {};

            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
              var f = d[e];
              void 0 === $f[f] && ($f[f] = e);
            }
          }
        }

        ;

        function dg(a) {
          var b = eg(a);
          if (!(b && b.sub && b.iss && b.aud && b.exp)) throw Error("Invalid JWT");
          this.g = a;
          this.c = b.exp;
          this.h = b.sub;
          ua();
          this.a = b.provider_id || b.firebase && b.firebase.sign_in_provider || null;
          this.f = b.firebase && b.firebase.tenant || null;
          this.b = !!b.is_anonymous || "anonymous" == this.a;
        }

        dg.prototype.S = function () {
          return this.f;
        };

        dg.prototype.i = function () {
          return this.b;
        };

        dg.prototype.toString = function () {
          return this.g;
        };

        function fg(a) {
          try {
            return new dg(a);
          } catch (b) {
            return null;
          }
        }

        function eg(a) {
          if (!a) return null;
          a = a.split(".");
          if (3 != a.length) return null;
          a = a[1];

          for (var b = (4 - a.length % 4) % 4, c = 0; c < b; c++) a += ".";

          try {
            return JSON.parse(ag(a));
          } catch (d) {}

          return null;
        }

        ;
        var gg = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
            hg = ["client_id", "response_type", "scope", "redirect_uri", "state"],
            ig = {
          md: {
            Ja: "locale",
            ua: 700,
            ta: 600,
            fa: "facebook.com",
            Wa: hg
          },
          od: {
            Ja: null,
            ua: 500,
            ta: 750,
            fa: "github.com",
            Wa: hg
          },
          pd: {
            Ja: "hl",
            ua: 515,
            ta: 680,
            fa: "google.com",
            Wa: hg
          },
          vd: {
            Ja: "lang",
            ua: 485,
            ta: 705,
            fa: "twitter.com",
            Wa: gg
          },
          jd: {
            Ja: "locale",
            ua: 640,
            ta: 600,
            fa: "apple.com",
            Wa: []
          }
        };

        function jg(a) {
          for (var b in ig) if (ig[b].fa == a) return ig[b];

          return null;
        }

        ;

        function kg(a) {
          var b = {};
          b["facebook.com"] = lg;
          b["google.com"] = mg;
          b["github.com"] = ng;
          b["twitter.com"] = og;
          var c = a && a[pg];

          try {
            if (c) return b[c] ? new b[c](a) : new qg(a);
            if ("undefined" !== typeof a[rg]) return new sg(a);
          } catch (d) {}

          return null;
        }

        var rg = "idToken",
            pg = "providerId";

        function sg(a) {
          var b = a[pg];

          if (!b && a[rg]) {
            var c = fg(a[rg]);
            c && c.a && (b = c.a);
          }

          if (!b) throw Error("Invalid additional user info!");
          if ("anonymous" == b || "custom" == b) b = null;
          c = !1;
          "undefined" !== typeof a.isNewUser ? c = !!a.isNewUser : "identitytoolkit#SignupNewUserResponse" === a.kind && (c = !0);
          M(this, "providerId", b);
          M(this, "isNewUser", c);
        }

        function qg(a) {
          sg.call(this, a);
          a = Re(a.rawUserInfo || "{}");
          M(this, "profile", jf(a || {}));
        }

        r(qg, sg);

        function lg(a) {
          qg.call(this, a);
          if ("facebook.com" != this.providerId) throw Error("Invalid provider ID!");
        }

        r(lg, qg);

        function ng(a) {
          qg.call(this, a);
          if ("github.com" != this.providerId) throw Error("Invalid provider ID!");
          M(this, "username", this.profile && this.profile.login || null);
        }

        r(ng, qg);

        function mg(a) {
          qg.call(this, a);
          if ("google.com" != this.providerId) throw Error("Invalid provider ID!");
        }

        r(mg, qg);

        function og(a) {
          qg.call(this, a);
          if ("twitter.com" != this.providerId) throw Error("Invalid provider ID!");
          M(this, "username", a.screenName || null);
        }

        r(og, qg);

        function tg(a) {
          var b = J(a),
              c = Xd(b, "link"),
              d = Xd(J(c), "link");
          b = Xd(b, "deep_link_id");
          return Xd(J(b), "link") || b || d || c || a;
        }

        ;

        function ug(a, b) {
          if (!a && !b) throw new t("internal-error", "Internal assert: no raw session string available");
          if (a && b) throw new t("internal-error", "Internal assert: unable to determine the session type");
          this.a = a || null;
          this.b = b || null;
          this.type = this.a ? vg : wg;
        }

        var vg = "enroll",
            wg = "signin";

        ug.prototype.Ha = function () {
          return this.a ? D(this.a) : D(this.b);
        };

        ug.prototype.w = function () {
          return this.type == vg ? {
            multiFactorSession: {
              idToken: this.a
            }
          } : {
            multiFactorSession: {
              pendingCredential: this.b
            }
          };
        };

        function xg() {}

        xg.prototype.ja = function () {};

        xg.prototype.b = function () {};

        xg.prototype.c = function () {};

        xg.prototype.w = function () {};

        function yg(a, b) {
          return a.then(function (c) {
            if (c[zg]) {
              var d = fg(c[zg]);
              if (!d || b != d.h) throw new t("user-mismatch");
              return c;
            }

            throw new t("user-mismatch");
          }).s(function (c) {
            throw c && c.code && c.code == va + "user-not-found" ? new t("user-mismatch") : c;
          });
        }

        function Ag(a, b) {
          if (b) this.a = b;else throw new t("internal-error", "failed to construct a credential");
          M(this, "providerId", a);
          M(this, "signInMethod", a);
        }

        Ag.prototype.ja = function (a) {
          return Bg(a, Cg(this));
        };

        Ag.prototype.b = function (a, b) {
          var c = Cg(this);
          c.idToken = b;
          return Dg(a, c);
        };

        Ag.prototype.c = function (a, b) {
          return yg(Eg(a, Cg(this)), b);
        };

        function Cg(a) {
          return {
            pendingToken: a.a,
            requestUri: "http://localhost"
          };
        }

        Ag.prototype.w = function () {
          return {
            providerId: this.providerId,
            signInMethod: this.signInMethod,
            pendingToken: this.a
          };
        };

        function Fg(a) {
          if (a && a.providerId && a.signInMethod && 0 == a.providerId.indexOf("saml.") && a.pendingToken) try {
            return new Ag(a.providerId, a.pendingToken);
          } catch (b) {}
          return null;
        }

        function Gg(a, b, c) {
          this.a = null;
          if (b.idToken || b.accessToken) b.idToken && M(this, "idToken", b.idToken), b.accessToken && M(this, "accessToken", b.accessToken), b.nonce && !b.pendingToken && M(this, "nonce", b.nonce), b.pendingToken && (this.a = b.pendingToken);else if (b.oauthToken && b.oauthTokenSecret) M(this, "accessToken", b.oauthToken), M(this, "secret", b.oauthTokenSecret);else throw new t("internal-error", "failed to construct a credential");
          M(this, "providerId", a);
          M(this, "signInMethod", c);
        }

        Gg.prototype.ja = function (a) {
          return Bg(a, Hg(this));
        };

        Gg.prototype.b = function (a, b) {
          var c = Hg(this);
          c.idToken = b;
          return Dg(a, c);
        };

        Gg.prototype.c = function (a, b) {
          var c = Hg(this);
          return yg(Eg(a, c), b);
        };

        function Hg(a) {
          var b = {};
          a.idToken && (b.id_token = a.idToken);
          a.accessToken && (b.access_token = a.accessToken);
          a.secret && (b.oauth_token_secret = a.secret);
          b.providerId = a.providerId;
          a.nonce && !a.a && (b.nonce = a.nonce);
          b = {
            postBody: ae(b).toString(),
            requestUri: "http://localhost"
          };
          a.a && (delete b.postBody, b.pendingToken = a.a);
          return b;
        }

        Gg.prototype.w = function () {
          var a = {
            providerId: this.providerId,
            signInMethod: this.signInMethod
          };
          this.idToken && (a.oauthIdToken = this.idToken);
          this.accessToken && (a.oauthAccessToken = this.accessToken);
          this.secret && (a.oauthTokenSecret = this.secret);
          this.nonce && (a.nonce = this.nonce);
          this.a && (a.pendingToken = this.a);
          return a;
        };

        function Ig(a) {
          if (a && a.providerId && a.signInMethod) {
            var b = {
              idToken: a.oauthIdToken,
              accessToken: a.oauthTokenSecret ? null : a.oauthAccessToken,
              oauthTokenSecret: a.oauthTokenSecret,
              oauthToken: a.oauthTokenSecret && a.oauthAccessToken,
              nonce: a.nonce,
              pendingToken: a.pendingToken
            };

            try {
              return new Gg(a.providerId, b, a.signInMethod);
            } catch (c) {}
          }

          return null;
        }

        function Jg(a, b) {
          this.Pc = b || [];
          N(this, {
            providerId: a,
            isOAuthProvider: !0
          });
          this.Hb = {};
          this.ob = (jg(a) || {}).Ja || null;
          this.nb = null;
        }

        Jg.prototype.Ka = function (a) {
          this.Hb = lb(a);
          return this;
        };

        function Kg(a) {
          if ("string" !== typeof a || 0 != a.indexOf("saml.")) throw new t("argument-error", 'SAML provider IDs must be prefixed with "saml."');
          Jg.call(this, a, []);
        }

        r(Kg, Jg);

        function Lg(a) {
          Jg.call(this, a, hg);
          this.a = [];
        }

        r(Lg, Jg);

        Lg.prototype.Ca = function (a) {
          Ta(this.a, a) || this.a.push(a);
          return this;
        };

        Lg.prototype.Pb = function () {
          return Xa(this.a);
        };

        Lg.prototype.credential = function (a, b) {
          var c;
          n(a) ? c = {
            idToken: a.idToken || null,
            accessToken: a.accessToken || null,
            nonce: a.rawNonce || null
          } : c = {
            idToken: a || null,
            accessToken: b || null
          };
          if (!c.idToken && !c.accessToken) throw new t("argument-error", "credential failed: must provide the ID token and/or the access token.");
          return new Gg(this.providerId, c, this.providerId);
        };

        function Mg() {
          Lg.call(this, "facebook.com");
        }

        r(Mg, Lg);
        M(Mg, "PROVIDER_ID", "facebook.com");
        M(Mg, "FACEBOOK_SIGN_IN_METHOD", "facebook.com");

        function Ng(a) {
          if (!a) throw new t("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
          var b = a;
          n(a) && (b = a.accessToken);
          return new Mg().credential({
            accessToken: b
          });
        }

        function Og() {
          Lg.call(this, "github.com");
        }

        r(Og, Lg);
        M(Og, "PROVIDER_ID", "github.com");
        M(Og, "GITHUB_SIGN_IN_METHOD", "github.com");

        function Pg(a) {
          if (!a) throw new t("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
          var b = a;
          n(a) && (b = a.accessToken);
          return new Og().credential({
            accessToken: b
          });
        }

        function Qg() {
          Lg.call(this, "google.com");
          this.Ca("profile");
        }

        r(Qg, Lg);
        M(Qg, "PROVIDER_ID", "google.com");
        M(Qg, "GOOGLE_SIGN_IN_METHOD", "google.com");

        function Rg(a, b) {
          var c = a;
          n(a) && (c = a.idToken, b = a.accessToken);
          return new Qg().credential({
            idToken: c,
            accessToken: b
          });
        }

        function Sg() {
          Jg.call(this, "twitter.com", gg);
        }

        r(Sg, Jg);
        M(Sg, "PROVIDER_ID", "twitter.com");
        M(Sg, "TWITTER_SIGN_IN_METHOD", "twitter.com");

        function Tg(a, b) {
          var c = a;
          n(c) || (c = {
            oauthToken: a,
            oauthTokenSecret: b
          });
          if (!c.oauthToken || !c.oauthTokenSecret) throw new t("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
          return new Gg("twitter.com", c, "twitter.com");
        }

        function Ug(a, b, c) {
          this.a = a;
          this.f = b;
          M(this, "providerId", "password");
          M(this, "signInMethod", c === Vg.EMAIL_LINK_SIGN_IN_METHOD ? Vg.EMAIL_LINK_SIGN_IN_METHOD : Vg.EMAIL_PASSWORD_SIGN_IN_METHOD);
        }

        Ug.prototype.ja = function (a) {
          return this.signInMethod == Vg.EMAIL_LINK_SIGN_IN_METHOD ? O(a, Wg, {
            email: this.a,
            oobCode: this.f
          }) : O(a, Xg, {
            email: this.a,
            password: this.f
          });
        };

        Ug.prototype.b = function (a, b) {
          return this.signInMethod == Vg.EMAIL_LINK_SIGN_IN_METHOD ? O(a, Yg, {
            idToken: b,
            email: this.a,
            oobCode: this.f
          }) : O(a, Zg, {
            idToken: b,
            email: this.a,
            password: this.f
          });
        };

        Ug.prototype.c = function (a, b) {
          return yg(this.ja(a), b);
        };

        Ug.prototype.w = function () {
          return {
            email: this.a,
            password: this.f,
            signInMethod: this.signInMethod
          };
        };

        function $g(a) {
          return a && a.email && a.password ? new Ug(a.email, a.password, a.signInMethod) : null;
        }

        function Vg() {
          N(this, {
            providerId: "password",
            isOAuthProvider: !1
          });
        }

        function ah(a, b) {
          b = bh(b);
          if (!b) throw new t("argument-error", "Invalid email link!");
          return new Ug(a, b.code, Vg.EMAIL_LINK_SIGN_IN_METHOD);
        }

        function bh(a) {
          a = tg(a);
          return (a = Nf(a)) && a.operation === wf ? a : null;
        }

        N(Vg, {
          PROVIDER_ID: "password"
        });
        N(Vg, {
          EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
        });
        N(Vg, {
          EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
        });

        function ch(a) {
          if (!(a.cb && a.bb || a.La && a.ea)) throw new t("internal-error");
          this.a = a;
          M(this, "providerId", "phone");
          this.fa = "phone";
          M(this, "signInMethod", "phone");
        }

        ch.prototype.ja = function (a) {
          return a.eb(dh(this));
        };

        ch.prototype.b = function (a, b) {
          var c = dh(this);
          c.idToken = b;
          return O(a, eh, c);
        };

        ch.prototype.c = function (a, b) {
          var c = dh(this);
          c.operation = "REAUTH";
          a = O(a, fh, c);
          return yg(a, b);
        };

        ch.prototype.w = function () {
          var a = {
            providerId: "phone"
          };
          this.a.cb && (a.verificationId = this.a.cb);
          this.a.bb && (a.verificationCode = this.a.bb);
          this.a.La && (a.temporaryProof = this.a.La);
          this.a.ea && (a.phoneNumber = this.a.ea);
          return a;
        };

        function gh(a) {
          if (a && "phone" === a.providerId && (a.verificationId && a.verificationCode || a.temporaryProof && a.phoneNumber)) {
            var b = {};
            w(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function (c) {
              a[c] && (b[c] = a[c]);
            });
            return new ch(b);
          }

          return null;
        }

        function dh(a) {
          return a.a.La && a.a.ea ? {
            temporaryProof: a.a.La,
            phoneNumber: a.a.ea
          } : {
            sessionInfo: a.a.cb,
            code: a.a.bb
          };
        }

        function hh(a) {
          try {
            this.a = a || firebase.auth();
          } catch (b) {
            throw new t("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
          }

          N(this, {
            providerId: "phone",
            isOAuthProvider: !1
          });
        }

        hh.prototype.eb = function (a, b) {
          var c = this.a.a;
          return D(b.verify()).then(function (d) {
            if ("string" !== typeof d) throw new t("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");

            switch (b.type) {
              case "recaptcha":
                var e = n(a) ? a.session : null,
                    f = n(a) ? a.phoneNumber : a,
                    g;
                e && e.type == vg ? g = e.Ha().then(function (h) {
                  return ih(c, {
                    idToken: h,
                    phoneEnrollmentInfo: {
                      phoneNumber: f,
                      recaptchaToken: d
                    }
                  });
                }) : e && e.type == wg ? g = e.Ha().then(function (h) {
                  return jh(c, {
                    mfaPendingCredential: h,
                    mfaEnrollmentId: a.multiFactorHint && a.multiFactorHint.uid || a.multiFactorUid,
                    phoneSignInInfo: {
                      recaptchaToken: d
                    }
                  });
                }) : g = kh(c, {
                  phoneNumber: f,
                  recaptchaToken: d
                });
                return g.then(function (h) {
                  "function" === typeof b.reset && b.reset();
                  return h;
                }, function (h) {
                  "function" === typeof b.reset && b.reset();
                  throw h;
                });

              default:
                throw new t("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
            }
          });
        };

        function lh(a, b) {
          if (!a) throw new t("missing-verification-id");
          if (!b) throw new t("missing-verification-code");
          return new ch({
            cb: a,
            bb: b
          });
        }

        N(hh, {
          PROVIDER_ID: "phone"
        });
        N(hh, {
          PHONE_SIGN_IN_METHOD: "phone"
        });

        function mh(a) {
          if (a.temporaryProof && a.phoneNumber) return new ch({
            La: a.temporaryProof,
            ea: a.phoneNumber
          });
          var b = a && a.providerId;
          if (!b || "password" === b) return null;
          var c = a && a.oauthAccessToken,
              d = a && a.oauthTokenSecret,
              e = a && a.nonce,
              f = a && a.oauthIdToken,
              g = a && a.pendingToken;

          try {
            switch (b) {
              case "google.com":
                return Rg(f, c);

              case "facebook.com":
                return Ng(c);

              case "github.com":
                return Pg(c);

              case "twitter.com":
                return Tg(c, d);

              default:
                return c || d || f || g ? g ? 0 == b.indexOf("saml.") ? new Ag(b, g) : new Gg(b, {
                  pendingToken: g,
                  idToken: a.oauthIdToken,
                  accessToken: a.oauthAccessToken
                }, b) : new Lg(b).credential({
                  idToken: f,
                  accessToken: c,
                  rawNonce: e
                }) : null;
            }
          } catch (h) {
            return null;
          }
        }

        function nh(a) {
          if (!a.isOAuthProvider) throw new t("invalid-oauth-provider");
        }

        ;

        function oh(a, b, c, d, e, f, g) {
          this.c = a;
          this.b = b || null;
          this.g = c || null;
          this.f = d || null;
          this.i = f || null;
          this.h = g || null;
          this.a = e || null;

          if (this.g || this.a) {
            if (this.g && this.a) throw new t("invalid-auth-event");
            if (this.g && !this.f) throw new t("invalid-auth-event");
          } else throw new t("invalid-auth-event");
        }

        oh.prototype.getUid = function () {
          var a = [];
          a.push(this.c);
          this.b && a.push(this.b);
          this.f && a.push(this.f);
          this.h && a.push(this.h);
          return a.join("-");
        };

        oh.prototype.S = function () {
          return this.h;
        };

        oh.prototype.w = function () {
          return {
            type: this.c,
            eventId: this.b,
            urlResponse: this.g,
            sessionId: this.f,
            postBody: this.i,
            tenantId: this.h,
            error: this.a && this.a.w()
          };
        };

        function ph(a) {
          a = a || {};
          return a.type ? new oh(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && ya(a.error), a.postBody, a.tenantId) : null;
        }

        ;
        /*
        Copyright 2018 Google Inc.
        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
        */

        function qh() {
          this.b = null;
          this.a = [];
        }

        var rh = null;

        function sh(a) {
          var b = rh;
          b.a.push(a);
          b.b || (b.b = function (c) {
            for (var d = 0; d < b.a.length; d++) b.a[d](c);
          }, a = L("universalLinks.subscribe", l), "function" === typeof a && a(null, b.b));
        }

        ;

        function th(a) {
          var b = "unauthorized-domain",
              c = void 0,
              d = J(a);
          a = d.a;
          d = d.f;
          "chrome-extension" == d ? c = Nb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = Nb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";
          t.call(this, b, c);
        }

        r(th, t);

        function uh(a, b, c) {
          t.call(this, a, c);
          a = b || {};
          a.Ib && M(this, "email", a.Ib);
          a.ea && M(this, "phoneNumber", a.ea);
          a.credential && M(this, "credential", a.credential);
          a.Yb && M(this, "tenantId", a.Yb);
        }

        r(uh, t);

        uh.prototype.w = function () {
          var a = {
            code: this.code,
            message: this.message
          };
          this.email && (a.email = this.email);
          this.phoneNumber && (a.phoneNumber = this.phoneNumber);
          this.tenantId && (a.tenantId = this.tenantId);
          var b = this.credential && this.credential.w();
          b && z(a, b);
          return a;
        };

        uh.prototype.toJSON = function () {
          return this.w();
        };

        function vh(a) {
          if (a.code) {
            var b = a.code || "";
            0 == b.indexOf(va) && (b = b.substring(va.length));
            var c = {
              credential: mh(a),
              Yb: a.tenantId
            };
            if (a.email) c.Ib = a.email;else if (a.phoneNumber) c.ea = a.phoneNumber;else if (!c.credential) return new t(b, a.message || void 0);
            return new uh(b, c, a.message);
          }

          return null;
        }

        ;

        function wh() {}

        wh.prototype.c = null;

        function xh(a) {
          return a.c || (a.c = a.b());
        }

        ;
        var yh;

        function zh() {}

        r(zh, wh);

        zh.prototype.a = function () {
          var a = Ah(this);
          return a ? new ActiveXObject(a) : new XMLHttpRequest();
        };

        zh.prototype.b = function () {
          var a = {};
          Ah(this) && (a[0] = !0, a[1] = !0);
          return a;
        };

        function Ah(a) {
          if (!a.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
              var d = b[c];

              try {
                return new ActiveXObject(d), a.f = d;
              } catch (e) {}
            }

            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
          }

          return a.f;
        }

        yh = new zh();

        function Bh() {}

        r(Bh, wh);

        Bh.prototype.a = function () {
          var a = new XMLHttpRequest();
          if ("withCredentials" in a) return a;
          if ("undefined" != typeof XDomainRequest) return new Ch();
          throw Error("Unsupported browser");
        };

        Bh.prototype.b = function () {
          return {};
        };

        function Ch() {
          this.a = new XDomainRequest();
          this.readyState = 0;
          this.onreadystatechange = null;
          this.responseType = this.responseText = this.response = "";
          this.status = -1;
          this.statusText = "";
          this.a.onload = q(this.pc, this);
          this.a.onerror = q(this.Rb, this);
          this.a.onprogress = q(this.qc, this);
          this.a.ontimeout = q(this.uc, this);
        }

        k = Ch.prototype;

        k.open = function (a, b, c) {
          if (null != c && !c) throw Error("Only async requests are supported.");
          this.a.open(a, b);
        };

        k.send = function (a) {
          if (a) {
            if ("string" == typeof a) this.a.send(a);else throw Error("Only string data is supported");
          } else this.a.send();
        };

        k.abort = function () {
          this.a.abort();
        };

        k.setRequestHeader = function () {};

        k.getResponseHeader = function (a) {
          return "content-type" == a.toLowerCase() ? this.a.contentType : "";
        };

        k.pc = function () {
          this.status = 200;
          this.response = this.responseText = this.a.responseText;
          Dh(this, 4);
        };

        k.Rb = function () {
          this.status = 500;
          this.response = this.responseText = "";
          Dh(this, 4);
        };

        k.uc = function () {
          this.Rb();
        };

        k.qc = function () {
          this.status = 200;
          Dh(this, 1);
        };

        function Dh(a, b) {
          a.readyState = b;
          if (a.onreadystatechange) a.onreadystatechange();
        }

        k.getAllResponseHeaders = function () {
          return "content-type: " + this.a.contentType;
        };

        function Eh(a, b, c) {
          this.reset(a, b, c, void 0, void 0);
        }

        Eh.prototype.a = null;
        var Fh = 0;

        Eh.prototype.reset = function (a, b, c, d, e) {
          "number" == typeof e || Fh++;
          d || ua();
          delete this.a;
        };

        function Gh(a) {
          this.f = a;
          this.b = this.c = this.a = null;
        }

        function Hh(a, b) {
          this.name = a;
          this.value = b;
        }

        Hh.prototype.toString = function () {
          return this.name;
        };

        var Ih = new Hh("SEVERE", 1E3),
            Jh = new Hh("WARNING", 900),
            Kh = new Hh("CONFIG", 700),
            Lh = new Hh("FINE", 500);

        function Mh(a) {
          if (a.c) return a.c;
          if (a.a) return Mh(a.a);
          Ea("Root logger has no level set.");
          return null;
        }

        Gh.prototype.log = function (a, b, c) {
          if (a.value >= Mh(this).value) for (na(b) && (b = b()), a = new Eh(a, String(b), this.f), c && (a.a = c), c = this; c;) c = c.a;
        };

        var Nh = {},
            Oh = null;

        function Ph(a) {
          Oh || (Oh = new Gh(""), Nh[""] = Oh, Oh.c = Kh);
          var b;

          if (!(b = Nh[a])) {
            b = new Gh(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1);
            c = Ph(a.substr(0, c));
            c.b || (c.b = {});
            c.b[d] = b;
            b.a = c;
            Nh[a] = b;
          }

          return b;
        }

        ;

        function Qh(a, b) {
          a && a.log(Lh, b, void 0);
        }

        ;

        function Rh(a) {
          this.f = a;
        }

        r(Rh, wh);

        Rh.prototype.a = function () {
          return new Sh(this.f);
        };

        Rh.prototype.b = function (a) {
          return function () {
            return a;
          };
        }({});

        function Sh(a) {
          H.call(this);
          this.o = a;
          this.readyState = Th;
          this.status = 0;
          this.responseType = this.responseText = this.response = this.statusText = "";
          this.onreadystatechange = null;
          this.i = new Headers();
          this.b = null;
          this.m = "GET";
          this.g = "";
          this.a = !1;
          this.h = Ph("goog.net.FetchXmlHttp");
          this.l = this.c = this.f = null;
        }

        r(Sh, H);
        var Th = 0;
        k = Sh.prototype;

        k.open = function (a, b) {
          if (this.readyState != Th) throw this.abort(), Error("Error reopening a connection");
          this.m = a;
          this.g = b;
          this.readyState = 1;
          Uh(this);
        };

        k.send = function (a) {
          if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
          this.a = !0;
          var b = {
            headers: this.i,
            method: this.m,
            credentials: void 0,
            cache: void 0
          };
          a && (b.body = a);
          this.o.fetch(new Request(this.g, b)).then(this.tc.bind(this), this.Ta.bind(this));
        };

        k.abort = function () {
          this.response = this.responseText = "";
          this.i = new Headers();
          this.status = 0;
          this.c && this.c.cancel("Request was aborted.");
          1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1, Vh(this, !1));
          this.readyState = Th;
        };

        k.tc = function (a) {
          this.a && (this.f = a, this.b || (this.b = a.headers, this.readyState = 2, Uh(this)), this.a && (this.readyState = 3, Uh(this), this.a && ("arraybuffer" === this.responseType ? a.arrayBuffer().then(this.rc.bind(this), this.Ta.bind(this)) : "undefined" !== typeof l.ReadableStream && "body" in a ? (this.response = this.responseText = "", this.c = a.body.getReader(), this.l = new TextDecoder(), Wh(this)) : a.text().then(this.sc.bind(this), this.Ta.bind(this)))));
        };

        function Wh(a) {
          a.c.read().then(a.oc.bind(a))["catch"](a.Ta.bind(a));
        }

        k.oc = function (a) {
          if (this.a) {
            var b = this.l.decode(a.value ? a.value : new Uint8Array(0), {
              stream: !a.done
            });
            b && (this.response = this.responseText += b);
            a.done ? Vh(this, !0) : Uh(this);
            3 == this.readyState && Wh(this);
          }
        };

        k.sc = function (a) {
          this.a && (this.response = this.responseText = a, Vh(this, !0));
        };

        k.rc = function (a) {
          this.a && (this.response = a, Vh(this, !0));
        };

        k.Ta = function (a) {
          var b = this.h;
          b && b.log(Jh, "Failed to fetch url " + this.g, a instanceof Error ? a : Error(a));
          this.a && Vh(this, !0);
        };

        function Vh(a, b) {
          b && a.f && (a.status = a.f.status, a.statusText = a.f.statusText);
          a.readyState = 4;
          a.f = null;
          a.c = null;
          a.l = null;
          Uh(a);
        }

        k.setRequestHeader = function (a, b) {
          this.i.append(a, b);
        };

        k.getResponseHeader = function (a) {
          return this.b ? this.b.get(a.toLowerCase()) || "" : ((a = this.h) && a.log(Jh, "Attempting to get response header but no headers have been received for url: " + this.g, void 0), "");
        };

        k.getAllResponseHeaders = function () {
          if (!this.b) {
            var a = this.h;
            a && a.log(Jh, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0);
            return "";
          }

          a = [];

          for (var b = this.b.entries(), c = b.next(); !c.done;) c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();

          return a.join("\r\n");
        };

        function Uh(a) {
          a.onreadystatechange && a.onreadystatechange.call(a);
        }

        ;

        function Xh(a) {
          H.call(this);
          this.headers = new Ed();
          this.O = a || null;
          this.c = !1;
          this.A = this.a = null;
          this.h = this.P = this.l = "";
          this.f = this.N = this.i = this.G = !1;
          this.g = 0;
          this.o = null;
          this.m = Yh;
          this.u = this.R = !1;
        }

        r(Xh, H);
        var Yh = "";
        Xh.prototype.b = Ph("goog.net.XhrIo");
        var Zh = /^https?$/i,
            $h = ["POST", "PUT"];

        function ai(a, b, c, d, e) {
          if (a.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.l + "; newUri=" + b);
          c = c ? c.toUpperCase() : "GET";
          a.l = b;
          a.h = "";
          a.P = c;
          a.G = !1;
          a.c = !0;
          a.a = a.O ? a.O.a() : yh.a();
          a.A = a.O ? xh(a.O) : xh(yh);
          a.a.onreadystatechange = q(a.Ub, a);

          try {
            Qh(a.b, bi(a, "Opening Xhr")), a.N = !0, a.a.open(c, String(b), !0), a.N = !1;
          } catch (g) {
            Qh(a.b, bi(a, "Error opening Xhr: " + g.message));
            ci(a, g);
            return;
          }

          b = d || "";
          var f = new Ed(a.headers);
          e && Dd(e, function (g, h) {
            f.set(h, g);
          });
          e = Ra(f.Y());
          d = l.FormData && b instanceof l.FormData;
          !Ta($h, c) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
          f.forEach(function (g, h) {
            this.a.setRequestHeader(h, g);
          }, a);
          a.m && (a.a.responseType = a.m);
          "withCredentials" in a.a && a.a.withCredentials !== a.R && (a.a.withCredentials = a.R);

          try {
            di(a), 0 < a.g && (a.u = ei(a.a), Qh(a.b, bi(a, "Will abort after " + a.g + "ms if incomplete, xhr2 " + a.u)), a.u ? (a.a.timeout = a.g, a.a.ontimeout = q(a.Ma, a)) : a.o = zd(a.Ma, a.g, a)), Qh(a.b, bi(a, "Sending request")), a.i = !0, a.a.send(b), a.i = !1;
          } catch (g) {
            Qh(a.b, bi(a, "Send error: " + g.message)), ci(a, g);
          }
        }

        function ei(a) {
          return Tb && cc(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout;
        }

        function Sa(a) {
          return "content-type" == a.toLowerCase();
        }

        k = Xh.prototype;

        k.Ma = function () {
          "undefined" != typeof ha && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", Qh(this.b, bi(this, this.h)), this.dispatchEvent("timeout"), this.abort(8));
        };

        function ci(a, b) {
          a.c = !1;
          a.a && (a.f = !0, a.a.abort(), a.f = !1);
          a.h = b;
          fi(a);
          gi(a);
        }

        function fi(a) {
          a.G || (a.G = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
        }

        k.abort = function () {
          this.a && this.c && (Qh(this.b, bi(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), gi(this));
        };

        k.Da = function () {
          this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), gi(this, !0));
          Xh.$a.Da.call(this);
        };

        k.Ub = function () {
          this.xa || (this.N || this.i || this.f ? hi(this) : this.Ic());
        };

        k.Ic = function () {
          hi(this);
        };

        function hi(a) {
          if (a.c && "undefined" != typeof ha) if (a.A[1] && 4 == ii(a) && 2 == ji(a)) Qh(a.b, bi(a, "Local request error detected and ignored"));else if (a.i && 4 == ii(a)) zd(a.Ub, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == ii(a)) {
            Qh(a.b, bi(a, "Request complete"));
            a.c = !1;

            try {
              var b = ji(a);

              a: switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  var c = !0;
                  break a;

                default:
                  c = !1;
              }

              var d;

              if (!(d = c)) {
                var e;

                if (e = 0 === b) {
                  var f = String(a.l).match(Hd)[1] || null;

                  if (!f && l.self && l.self.location) {
                    var g = l.self.location.protocol;
                    f = g.substr(0, g.length - 1);
                  }

                  e = !Zh.test(f ? f.toLowerCase() : "");
                }

                d = e;
              }

              if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
                try {
                  var h = 2 < ii(a) ? a.a.statusText : "";
                } catch (m) {
                  Qh(a.b, "Can not get status: " + m.message), h = "";
                }

                a.h = h + " [" + ji(a) + "]";
                fi(a);
              }
            } finally {
              gi(a);
            }
          }
        }

        function gi(a, b) {
          if (a.a) {
            di(a);
            var c = a.a,
                d = a.A[0] ? ka : null;
            a.a = null;
            a.A = null;
            b || a.dispatchEvent("ready");

            try {
              c.onreadystatechange = d;
            } catch (e) {
              (a = a.b) && a.log(Ih, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
            }
          }
        }

        function di(a) {
          a.a && a.u && (a.a.ontimeout = null);
          a.o && (l.clearTimeout(a.o), a.o = null);
        }

        function ii(a) {
          return a.a ? a.a.readyState : 0;
        }

        function ji(a) {
          try {
            return 2 < ii(a) ? a.a.status : -1;
          } catch (b) {
            return -1;
          }
        }

        function ki(a) {
          try {
            return a.a ? a.a.responseText : "";
          } catch (b) {
            return Qh(a.b, "Can not get responseText: " + b.message), "";
          }
        }

        k.getResponse = function () {
          try {
            if (!this.a) return null;
            if ("response" in this.a) return this.a.response;

            switch (this.m) {
              case Yh:
              case "text":
                return this.a.responseText;

              case "arraybuffer":
                if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer;
            }

            var a = this.b;
            a && a.log(Ih, "Response type " + this.m + " is not supported on this browser", void 0);
            return null;
          } catch (b) {
            return Qh(this.b, "Can not get response: " + b.message), null;
          }
        };

        function bi(a, b) {
          return b + " [" + a.P + " " + a.l + " " + ji(a) + "]";
        }

        ;
        /*
        Portions of this code are from MochiKit, received by
        The Closure Authors under the MIT license. All other code is Copyright
        2005-2009 The Closure Authors. All Rights Reserved.
        */

        function li(a) {
          var b = mi;
          this.g = [];
          this.u = b;
          this.o = a || null;
          this.f = this.a = !1;
          this.c = void 0;
          this.m = this.A = this.i = !1;
          this.h = 0;
          this.b = null;
          this.l = 0;
        }

        li.prototype.cancel = function (a) {
          if (this.a) this.c instanceof li && this.c.cancel();else {
            if (this.b) {
              var b = this.b;
              delete this.b;
              a ? b.cancel(a) : (b.l--, 0 >= b.l && b.cancel());
            }

            this.u ? this.u.call(this.o, this) : this.m = !0;
            this.a || (a = new ni(this), oi(this), pi(this, !1, a));
          }
        };

        li.prototype.v = function (a, b) {
          this.i = !1;
          pi(this, a, b);
        };

        function pi(a, b, c) {
          a.a = !0;
          a.c = c;
          a.f = !b;
          qi(a);
        }

        function oi(a) {
          if (a.a) {
            if (!a.m) throw new ri(a);
            a.m = !1;
          }
        }

        function si(a, b) {
          ti(a, null, b, void 0);
        }

        function ti(a, b, c, d) {
          a.g.push([b, c, d]);
          a.a && qi(a);
        }

        li.prototype.then = function (a, b, c) {
          var d,
              e,
              f = new C(function (g, h) {
            d = g;
            e = h;
          });
          ti(this, d, function (g) {
            g instanceof ni ? f.cancel() : e(g);
          });
          return f.then(a, b, c);
        };

        li.prototype.$goog_Thenable = !0;

        function ui(a) {
          return Qa(a.g, function (b) {
            return na(b[1]);
          });
        }

        function qi(a) {
          if (a.h && a.a && ui(a)) {
            var b = a.h,
                c = vi[b];
            c && (l.clearTimeout(c.a), delete vi[b]);
            a.h = 0;
          }

          a.b && (a.b.l--, delete a.b);
          b = a.c;

          for (var d = c = !1; a.g.length && !a.i;) {
            var e = a.g.shift(),
                f = e[0],
                g = e[1];
            e = e[2];
            if (f = a.f ? g : f) try {
              var h = f.call(e || a.o, b);
              void 0 !== h && (a.f = a.f && (h == b || h instanceof Error), a.c = b = h);
              if (Ca(b) || "function" === typeof l.Promise && b instanceof l.Promise) d = !0, a.i = !0;
            } catch (m) {
              b = m, a.f = !0, ui(a) || (c = !0);
            }
          }

          a.c = b;
          d && (h = q(a.v, a, !0), d = q(a.v, a, !1), b instanceof li ? (ti(b, h, d), b.A = !0) : b.then(h, d));
          c && (b = new wi(b), vi[b.a] = b, a.h = b.a);
        }

        function ri() {
          u.call(this);
        }

        r(ri, u);
        ri.prototype.message = "Deferred has already fired";
        ri.prototype.name = "AlreadyCalledError";

        function ni() {
          u.call(this);
        }

        r(ni, u);
        ni.prototype.message = "Deferred was canceled";
        ni.prototype.name = "CanceledError";

        function wi(a) {
          this.a = l.setTimeout(q(this.c, this), 0);
          this.b = a;
        }

        wi.prototype.c = function () {
          delete vi[this.a];
          throw this.b;
        };

        var vi = {};

        function xi(a) {
          var b = {},
              c = b.document || document,
              d = wb(a).toString(),
              e = jc(document, "SCRIPT"),
              f = {
            Vb: e,
            Ma: void 0
          },
              g = new li(f),
              h = null,
              m = null != b.timeout ? b.timeout : 5E3;
          0 < m && (h = window.setTimeout(function () {
            yi(e, !0);
            var p = new zi(Ai, "Timeout reached for loading script " + d);
            oi(g);
            pi(g, !1, p);
          }, m), f.Ma = h);

          e.onload = e.onreadystatechange = function () {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (yi(e, b.wd || !1, h), oi(g), pi(g, !0, null));
          };

          e.onerror = function () {
            yi(e, !0, h);
            var p = new zi(Bi, "Error while loading script " + d);
            oi(g);
            pi(g, !1, p);
          };

          f = b.attributes || {};
          z(f, {
            type: "text/javascript",
            charset: "UTF-8"
          });
          gc(e, f);
          Mb(e, a);
          Ci(c).appendChild(e);
          return g;
        }

        function Ci(a) {
          var b;
          return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement;
        }

        function mi() {
          if (this && this.Vb) {
            var a = this.Vb;
            a && "SCRIPT" == a.tagName && yi(a, !0, this.Ma);
          }
        }

        function yi(a, b, c) {
          null != c && l.clearTimeout(c);
          a.onload = ka;
          a.onerror = ka;
          a.onreadystatechange = ka;
          b && window.setTimeout(function () {
            a && a.parentNode && a.parentNode.removeChild(a);
          }, 0);
        }

        var Bi = 0,
            Ai = 1;

        function zi(a, b) {
          var c = "Jsloader error (code #" + a + ")";
          b && (c += ": " + b);
          u.call(this, c);
          this.code = a;
        }

        r(zi, u);

        function Di(a) {
          this.f = a;
        }

        r(Di, wh);

        Di.prototype.a = function () {
          return new this.f();
        };

        Di.prototype.b = function () {
          return {};
        };

        function Ei(a, b, c) {
          this.c = a;
          a = b || {};
          this.l = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
          this.v = a.secureTokenTimeout || Fi;
          this.g = lb(a.secureTokenHeaders || Gi);
          this.h = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
          this.i = a.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/";
          this.m = a.firebaseTimeout || Hi;
          this.a = lb(a.firebaseHeaders || Ii);
          c && (this.a["X-Client-Version"] = c, this.g["X-Client-Version"] = c);
          c = "Node" == Fe();
          c = l.XMLHttpRequest || c && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;
          if (!c && !Ee()) throw new t("internal-error", "The XMLHttpRequest compatibility library was not found.");
          this.f = void 0;
          Ee() ? this.f = new Rh(self) : Ge() ? this.f = new Di(c) : this.f = new Bh();
          this.b = null;
        }

        var Ji,
            zg = "idToken",
            Fi = new Ue(3E4, 6E4),
            Gi = {
          "Content-Type": "application/x-www-form-urlencoded"
        },
            Hi = new Ue(3E4, 6E4),
            Ii = {
          "Content-Type": "application/json"
        };

        function Ki(a, b) {
          b ? a.a["X-Firebase-Locale"] = b : delete a.a["X-Firebase-Locale"];
        }

        function Li(a, b) {
          b && (a.l = Mi("https://securetoken.googleapis.com/v1/token", b), a.h = Mi("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", b), a.i = Mi("https://identitytoolkit.googleapis.com/v2/", b));
        }

        function Mi(a, b) {
          a = J(a);
          b = J(b.url);
          a.c = a.a + a.c;
          Kd(a, b.f);
          a.a = b.a;
          Ld(a, b.g);
          return a.toString();
        }

        function Ni(a, b) {
          b ? (a.a["X-Client-Version"] = b, a.g["X-Client-Version"] = b) : (delete a.a["X-Client-Version"], delete a.g["X-Client-Version"]);
        }

        Ei.prototype.S = function () {
          return this.b;
        };

        function Oi(a, b, c, d, e, f, g) {
          pe() || Ee() ? a = q(a.u, a) : (Ji || (Ji = new C(function (h, m) {
            Pi(h, m);
          })), a = q(a.o, a));
          a(b, c, d, e, f, g);
        }

        Ei.prototype.u = function (a, b, c, d, e, f) {
          if (Ee() && ("undefined" === typeof l.fetch || "undefined" === typeof l.Headers || "undefined" === typeof l.Request)) throw new t("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
          var g = new Xh(this.f);

          if (f) {
            g.g = Math.max(0, f);
            var h = setTimeout(function () {
              g.dispatchEvent("timeout");
            }, f);
          }

          md(g, "complete", function () {
            h && clearTimeout(h);
            var m = null;

            try {
              m = JSON.parse(ki(this)) || null;
            } catch (p) {
              m = null;
            }

            b && b(m);
          });
          sd(g, "ready", function () {
            h && clearTimeout(h);
            Tc(this);
          });
          sd(g, "timeout", function () {
            h && clearTimeout(h);
            Tc(this);
            b && b(null);
          });
          ai(g, a, c, d, e);
        };

        var Qi = new ob(pb, "https://apis.google.com/js/client.js?onload=%{onload}"),
            Ri = "__fcb" + Math.floor(1E6 * Math.random()).toString();

        function Pi(a, b) {
          if (((window.gapi || {}).client || {}).request) a();else {
            l[Ri] = function () {
              ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
            };

            var c = xb(Qi, {
              onload: Ri
            });
            si(xi(c), function () {
              b(Error("CORS_UNSUPPORTED"));
            });
          }
        }

        Ei.prototype.o = function (a, b, c, d, e) {
          var f = this;
          Ji.then(function () {
            window.gapi.client.setApiKey(f.c);
            var g = window.gapi.auth.getToken();
            window.gapi.auth.setToken(null);
            window.gapi.client.request({
              path: a,
              method: c,
              body: d,
              headers: e,
              authType: "none",
              callback: function callback(h) {
                window.gapi.auth.setToken(g);
                b && b(h);
              }
            });
          }).s(function (g) {
            b && b({
              error: {
                message: g && g.message || "CORS_UNSUPPORTED"
              }
            });
          });
        };

        function Si(a, b) {
          return new C(function (c, d) {
            "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? Oi(a, a.l + "?key=" + encodeURIComponent(a.c), function (e) {
              e ? e.error ? d(Ti(e)) : e.access_token && e.refresh_token ? c(e) : d(new t("internal-error")) : d(new t("network-request-failed"));
            }, "POST", ae(b).toString(), a.g, a.v.get()) : d(new t("internal-error"));
          });
        }

        function Ui(a, b, c, d, e, f, g) {
          var h = J(b + c);
          I(h, "key", a.c);
          g && I(h, "cb", ua().toString());
          var m = "GET" == d;
          if (m) for (var p in e) e.hasOwnProperty(p) && I(h, p, e[p]);
          return new C(function (v, B) {
            Oi(a, h.toString(), function (A) {
              A ? A.error ? B(Ti(A, f || {})) : v(A) : B(new t("network-request-failed"));
            }, d, m ? void 0 : fe(Qe(e)), a.a, a.m.get());
          });
        }

        function Vi(a) {
          a = a.email;
          if ("string" !== typeof a || !ye.test(a)) throw new t("invalid-email");
        }

        function Wi(a) {
          "email" in a && Vi(a);
        }

        function Xi(a, b) {
          return O(a, Yi, {
            identifier: b,
            continueUri: Ne() ? me() : "http://localhost"
          }).then(function (c) {
            return c.signinMethods || [];
          });
        }

        function Zi(a) {
          return O(a, $i, {}).then(function (b) {
            return b.authorizedDomains || [];
          });
        }

        function P(a) {
          if (!a[zg]) {
            if (a.mfaPendingCredential) throw new t("multi-factor-auth-required", null, lb(a));
            throw new t("internal-error");
          }
        }

        function aj(a) {
          if (a.phoneNumber || a.temporaryProof) {
            if (!a.phoneNumber || !a.temporaryProof) throw new t("internal-error");
          } else {
            if (!a.sessionInfo) throw new t("missing-verification-id");
            if (!a.code) throw new t("missing-verification-code");
          }
        }

        Ei.prototype.yb = function () {
          return O(this, bj, {});
        };

        Ei.prototype.Ab = function (a, b) {
          return O(this, cj, {
            idToken: a,
            email: b
          });
        };

        Ei.prototype.Bb = function (a, b) {
          return O(this, Zg, {
            idToken: a,
            password: b
          });
        };

        var dj = {
          displayName: "DISPLAY_NAME",
          photoUrl: "PHOTO_URL"
        };
        k = Ei.prototype;

        k.Cb = function (a, b) {
          var c = {
            idToken: a
          },
              d = [];
          jb(dj, function (e, f) {
            var g = b[f];
            null === g ? d.push(e) : f in b && (c[f] = g);
          });
          d.length && (c.deleteAttribute = d);
          return O(this, cj, c);
        };

        k.ub = function (a, b) {
          a = {
            requestType: "PASSWORD_RESET",
            email: a
          };
          z(a, b);
          return O(this, ej, a);
        };

        k.vb = function (a, b) {
          a = {
            requestType: "EMAIL_SIGNIN",
            email: a
          };
          z(a, b);
          return O(this, fj, a);
        };

        k.tb = function (a, b) {
          a = {
            requestType: "VERIFY_EMAIL",
            idToken: a
          };
          z(a, b);
          return O(this, gj, a);
        };

        k.Db = function (a, b, c) {
          a = {
            requestType: "VERIFY_AND_CHANGE_EMAIL",
            idToken: a,
            newEmail: b
          };
          z(a, c);
          return O(this, hj, a);
        };

        function kh(a, b) {
          return O(a, ij, b);
        }

        k.eb = function (a) {
          return O(this, jj, a);
        };

        function ih(a, b) {
          return O(a, kj, b).then(function (c) {
            return c.phoneSessionInfo.sessionInfo;
          });
        }

        function lj(a) {
          if (!a.phoneVerificationInfo) throw new t("internal-error");
          if (!a.phoneVerificationInfo.sessionInfo) throw new t("missing-verification-id");
          if (!a.phoneVerificationInfo.code) throw new t("missing-verification-code");
        }

        function jh(a, b) {
          return O(a, mj, b).then(function (c) {
            return c.phoneResponseInfo.sessionInfo;
          });
        }

        function nj(a, b, c) {
          return O(a, oj, {
            idToken: b,
            deleteProvider: c
          });
        }

        function pj(a) {
          if (!a.requestUri || !a.sessionId && !a.postBody && !a.pendingToken) throw new t("internal-error");
        }

        function qj(a, b) {
          b.oauthIdToken && b.providerId && 0 == b.providerId.indexOf("oidc.") && !b.pendingToken && (a.sessionId ? b.nonce = a.sessionId : a.postBody && (a = new Pd(a.postBody), ee(a, "nonce") && (b.nonce = a.get("nonce"))));
          return b;
        }

        function rj(a) {
          var b = null;
          a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = vh(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = vh(a)) : "EMAIL_EXISTS" == a.errorMessage ? (a.code = "email-already-in-use", b = vh(a)) : a.errorMessage && (b = sj(a.errorMessage));
          if (b) throw b;
          P(a);
        }

        function Bg(a, b) {
          b.returnIdpCredential = !0;
          return O(a, tj, b);
        }

        function Dg(a, b) {
          b.returnIdpCredential = !0;
          return O(a, uj, b);
        }

        function Eg(a, b) {
          b.returnIdpCredential = !0;
          b.autoCreate = !1;
          return O(a, vj, b);
        }

        function wj(a) {
          if (!a.oobCode) throw new t("invalid-action-code");
        }

        k.mb = function (a, b) {
          return O(this, xj, {
            oobCode: a,
            newPassword: b
          });
        };

        k.Qa = function (a) {
          return O(this, yj, {
            oobCode: a
          });
        };

        k.ib = function (a) {
          return O(this, zj, {
            oobCode: a
          });
        };

        var zj = {
          endpoint: "setAccountInfo",
          B: wj,
          Z: "email",
          C: !0
        },
            yj = {
          endpoint: "resetPassword",
          B: wj,
          F: function F(a) {
            var b = a.requestType;
            if (!b || !a.email && "EMAIL_SIGNIN" != b && "VERIFY_AND_CHANGE_EMAIL" != b) throw new t("internal-error");
          },
          C: !0
        },
            Aj = {
          endpoint: "signupNewUser",
          B: function B(a) {
            Vi(a);
            if (!a.password) throw new t("weak-password");
          },
          F: P,
          U: !0,
          C: !0
        },
            Yi = {
          endpoint: "createAuthUri",
          C: !0
        },
            Bj = {
          endpoint: "deleteAccount",
          M: ["idToken"]
        },
            oj = {
          endpoint: "setAccountInfo",
          M: ["idToken", "deleteProvider"],
          B: function B(a) {
            if ("array" != la(a.deleteProvider)) throw new t("internal-error");
          }
        },
            Wg = {
          endpoint: "emailLinkSignin",
          M: ["email", "oobCode"],
          B: Vi,
          F: P,
          U: !0,
          C: !0
        },
            Yg = {
          endpoint: "emailLinkSignin",
          M: ["idToken", "email", "oobCode"],
          B: Vi,
          F: P,
          U: !0
        },
            Cj = {
          endpoint: "accounts/mfaEnrollment:finalize",
          M: ["idToken", "phoneVerificationInfo"],
          B: lj,
          F: P,
          C: !0,
          Na: !0
        },
            Dj = {
          endpoint: "accounts/mfaSignIn:finalize",
          M: ["mfaPendingCredential", "phoneVerificationInfo"],
          B: lj,
          F: P,
          C: !0,
          Na: !0
        },
            Ej = {
          endpoint: "getAccountInfo"
        },
            fj = {
          endpoint: "getOobConfirmationCode",
          M: ["requestType"],
          B: function B(a) {
            if ("EMAIL_SIGNIN" != a.requestType) throw new t("internal-error");
            Vi(a);
          },
          Z: "email",
          C: !0
        },
            gj = {
          endpoint: "getOobConfirmationCode",
          M: ["idToken", "requestType"],
          B: function B(a) {
            if ("VERIFY_EMAIL" != a.requestType) throw new t("internal-error");
          },
          Z: "email",
          C: !0
        },
            hj = {
          endpoint: "getOobConfirmationCode",
          M: ["idToken", "newEmail", "requestType"],
          B: function B(a) {
            if ("VERIFY_AND_CHANGE_EMAIL" != a.requestType) throw new t("internal-error");
          },
          Z: "email",
          C: !0
        },
            ej = {
          endpoint: "getOobConfirmationCode",
          M: ["requestType"],
          B: function B(a) {
            if ("PASSWORD_RESET" != a.requestType) throw new t("internal-error");
            Vi(a);
          },
          Z: "email",
          C: !0
        },
            $i = {
          kb: !0,
          endpoint: "getProjectConfig",
          Tb: "GET"
        },
            Fj = {
          kb: !0,
          endpoint: "getRecaptchaParam",
          Tb: "GET",
          F: function F(a) {
            if (!a.recaptchaSiteKey) throw new t("internal-error");
          }
        },
            xj = {
          endpoint: "resetPassword",
          B: wj,
          Z: "email",
          C: !0
        },
            ij = {
          endpoint: "sendVerificationCode",
          M: ["phoneNumber", "recaptchaToken"],
          Z: "sessionInfo",
          C: !0
        },
            cj = {
          endpoint: "setAccountInfo",
          M: ["idToken"],
          B: Wi,
          U: !0
        },
            Zg = {
          endpoint: "setAccountInfo",
          M: ["idToken"],
          B: function B(a) {
            Wi(a);
            if (!a.password) throw new t("weak-password");
          },
          F: P,
          U: !0
        },
            bj = {
          endpoint: "signupNewUser",
          F: P,
          U: !0,
          C: !0
        },
            kj = {
          endpoint: "accounts/mfaEnrollment:start",
          M: ["idToken", "phoneEnrollmentInfo"],
          B: function B(a) {
            if (!a.phoneEnrollmentInfo) throw new t("internal-error");
            if (!a.phoneEnrollmentInfo.phoneNumber) throw new t("missing-phone-number");
            if (!a.phoneEnrollmentInfo.recaptchaToken) throw new t("missing-app-credential");
          },
          F: function F(a) {
            if (!a.phoneSessionInfo || !a.phoneSessionInfo.sessionInfo) throw new t("internal-error");
          },
          C: !0,
          Na: !0
        },
            mj = {
          endpoint: "accounts/mfaSignIn:start",
          M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
          B: function B(a) {
            if (!a.phoneSignInInfo || !a.phoneSignInInfo.recaptchaToken) throw new t("missing-app-credential");
          },
          F: function F(a) {
            if (!a.phoneResponseInfo || !a.phoneResponseInfo.sessionInfo) throw new t("internal-error");
          },
          C: !0,
          Na: !0
        },
            tj = {
          endpoint: "verifyAssertion",
          B: pj,
          Xa: qj,
          F: rj,
          U: !0,
          C: !0
        },
            vj = {
          endpoint: "verifyAssertion",
          B: pj,
          Xa: qj,
          F: function F(a) {
            if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage) throw new t("user-not-found");
            if (a.errorMessage) throw sj(a.errorMessage);
            P(a);
          },
          U: !0,
          C: !0
        },
            uj = {
          endpoint: "verifyAssertion",
          B: function B(a) {
            pj(a);
            if (!a.idToken) throw new t("internal-error");
          },
          Xa: qj,
          F: rj,
          U: !0
        },
            Gj = {
          endpoint: "verifyCustomToken",
          B: function B(a) {
            if (!a.token) throw new t("invalid-custom-token");
          },
          F: P,
          U: !0,
          C: !0
        },
            Xg = {
          endpoint: "verifyPassword",
          B: function B(a) {
            Vi(a);
            if (!a.password) throw new t("wrong-password");
          },
          F: P,
          U: !0,
          C: !0
        },
            jj = {
          endpoint: "verifyPhoneNumber",
          B: aj,
          F: P,
          C: !0
        },
            eh = {
          endpoint: "verifyPhoneNumber",
          B: function B(a) {
            if (!a.idToken) throw new t("internal-error");
            aj(a);
          },
          F: function F(a) {
            if (a.temporaryProof) throw a.code = "credential-already-in-use", vh(a);
            P(a);
          }
        },
            fh = {
          Gb: {
            USER_NOT_FOUND: "user-not-found"
          },
          endpoint: "verifyPhoneNumber",
          B: aj,
          F: P,
          C: !0
        },
            Hj = {
          endpoint: "accounts/mfaEnrollment:withdraw",
          M: ["idToken", "mfaEnrollmentId"],
          F: function F(a) {
            if (!!a[zg] ^ !!a.refreshToken) throw new t("internal-error");
          },
          C: !0,
          Na: !0
        };

        function O(a, b, c) {
          if (!hf(c, b.M)) return E(new t("internal-error"));
          var d = !!b.Na,
              e = b.Tb || "POST",
              f;
          return D(c).then(b.B).then(function () {
            b.U && (c.returnSecureToken = !0);
            b.C && a.b && "undefined" === typeof c.tenantId && (c.tenantId = a.b);
            return d ? Ui(a, a.i, b.endpoint, e, c, b.Gb, b.kb || !1) : Ui(a, a.h, b.endpoint, e, c, b.Gb, b.kb || !1);
          }).then(function (g) {
            f = g;
            return b.Xa ? b.Xa(c, f) : f;
          }).then(b.F).then(function () {
            if (!b.Z) return f;
            if (!(b.Z in f)) throw new t("internal-error");
            return f[b.Z];
          });
        }

        function sj(a) {
          return Ti({
            error: {
              errors: [{
                message: a
              }],
              code: 400,
              message: a
            }
          });
        }

        function Ti(a, b) {
          var c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
          var d = {
            keyInvalid: "invalid-api-key",
            ipRefererBlocked: "app-not-authorized"
          };
          if (c = d[c] ? new t(d[c]) : null) return c;
          c = a.error && a.error.message || "";
          d = {
            INVALID_CUSTOM_TOKEN: "invalid-custom-token",
            CREDENTIAL_MISMATCH: "custom-token-mismatch",
            MISSING_CUSTOM_TOKEN: "internal-error",
            INVALID_IDENTIFIER: "invalid-email",
            MISSING_CONTINUE_URI: "internal-error",
            INVALID_EMAIL: "invalid-email",
            INVALID_PASSWORD: "wrong-password",
            USER_DISABLED: "user-disabled",
            MISSING_PASSWORD: "internal-error",
            EMAIL_EXISTS: "email-already-in-use",
            PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
            INVALID_IDP_RESPONSE: "invalid-credential",
            INVALID_PENDING_TOKEN: "invalid-credential",
            FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
            MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
            INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
            INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
            INVALID_SENDER: "invalid-sender",
            EMAIL_NOT_FOUND: "user-not-found",
            RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
            EXPIRED_OOB_CODE: "expired-action-code",
            INVALID_OOB_CODE: "invalid-action-code",
            MISSING_OOB_CODE: "internal-error",
            INVALID_PROVIDER_ID: "invalid-provider-id",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
            INVALID_ID_TOKEN: "invalid-user-token",
            TOKEN_EXPIRED: "user-token-expired",
            USER_NOT_FOUND: "user-token-expired",
            CORS_UNSUPPORTED: "cors-unsupported",
            DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
            INVALID_APP_ID: "invalid-app-id",
            TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
            WEAK_PASSWORD: "weak-password",
            OPERATION_NOT_ALLOWED: "operation-not-allowed",
            USER_CANCELLED: "user-cancelled",
            CAPTCHA_CHECK_FAILED: "captcha-check-failed",
            INVALID_APP_CREDENTIAL: "invalid-app-credential",
            INVALID_CODE: "invalid-verification-code",
            INVALID_PHONE_NUMBER: "invalid-phone-number",
            INVALID_SESSION_INFO: "invalid-verification-id",
            INVALID_TEMPORARY_PROOF: "invalid-credential",
            MISSING_APP_CREDENTIAL: "missing-app-credential",
            MISSING_CODE: "missing-verification-code",
            MISSING_PHONE_NUMBER: "missing-phone-number",
            MISSING_SESSION_INFO: "missing-verification-id",
            QUOTA_EXCEEDED: "quota-exceeded",
            SESSION_EXPIRED: "code-expired",
            REJECTED_CREDENTIAL: "rejected-credential",
            INVALID_CONTINUE_URI: "invalid-continue-uri",
            MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
            MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
            UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
            INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
            INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
            INVALID_CERT_HASH: "invalid-cert-hash",
            UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
            INVALID_TENANT_ID: "invalid-tenant-id",
            TENANT_ID_MISMATCH: "tenant-id-mismatch",
            ADMIN_ONLY_OPERATION: "admin-restricted-operation",
            INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
            MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
            MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
            MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
            EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
            SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
            SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
            UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
            UNVERIFIED_EMAIL: "unverified-email"
          };
          z(d, b || {});
          b = (b = c.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < b.length ? b[1] : void 0;

          for (var e in d) if (0 === c.indexOf(e)) return new t(d[e], b);

          !b && a && (b = Pe(a));
          return new t("internal-error", b);
        }

        ;

        function Ij(a) {
          this.b = a;
          this.a = null;
          this.qb = Jj(this);
        }

        function Jj(a) {
          return Kj().then(function () {
            return new C(function (b, c) {
              L("gapi.iframes.getContext")().open({
                where: document.body,
                url: a.b,
                messageHandlersFilter: L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
                attributes: {
                  style: {
                    position: "absolute",
                    top: "-100px",
                    width: "1px",
                    height: "1px"
                  }
                },
                dontclear: !0
              }, function (d) {
                function e() {
                  clearTimeout(f);
                  b();
                }

                a.a = d;
                a.a.restyle({
                  setHideOnLeave: !1
                });
                var f = setTimeout(function () {
                  c(Error("Network Error"));
                }, Lj.get());
                d.ping(e).then(e, function () {
                  c(Error("Network Error"));
                });
              });
            });
          });
        }

        function Mj(a, b) {
          return a.qb.then(function () {
            return new C(function (c) {
              a.a.send(b.type, b, c, L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
            });
          });
        }

        function Nj(a, b) {
          a.qb.then(function () {
            a.a.register("authEvent", b, L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
          });
        }

        var Oj = new ob(pb, "https://apis.google.com/js/api.js?onload=%{onload}"),
            Pj = new Ue(3E4, 6E4),
            Lj = new Ue(5E3, 15E3),
            Qj = null;

        function Kj() {
          return Qj ? Qj : Qj = new C(function (a, b) {
            function c() {
              Te();
              L("gapi.load")("gapi.iframes", {
                callback: a,
                ontimeout: function ontimeout() {
                  Te();
                  b(Error("Network Error"));
                },
                timeout: Pj.get()
              });
            }

            if (L("gapi.iframes.Iframe")) a();else if (L("gapi.load")) c();else {
              var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();

              l[d] = function () {
                L("gapi.load") ? c() : b(Error("Network Error"));
              };

              d = xb(Oj, {
                onload: d
              });
              D(xi(d)).s(function () {
                b(Error("Network Error"));
              });
            }
          }).s(function (a) {
            Qj = null;
            throw a;
          });
        }

        ;

        function Rj(a, b, c, d) {
          this.l = a;
          this.h = b;
          this.i = c;
          this.g = d;
          this.f = null;
          this.g ? (a = J(this.g.url), a = Yd(a.f, a.a, a.g, "/emulator/auth/iframe")) : a = Yd("https", this.l, null, "/__/auth/iframe");
          this.a = a;
          I(this.a, "apiKey", this.h);
          I(this.a, "appName", this.i);
          this.b = null;
          this.c = [];
        }

        Rj.prototype.toString = function () {
          this.f ? I(this.a, "v", this.f) : de(this.a.b, "v");
          this.b ? I(this.a, "eid", this.b) : de(this.a.b, "eid");
          this.c.length ? I(this.a, "fw", this.c.join(",")) : de(this.a.b, "fw");
          return this.a.toString();
        };

        function Sj(a, b, c, d, e, f) {
          this.u = a;
          this.o = b;
          this.c = c;
          this.v = d;
          this.m = f;
          this.i = this.g = this.l = null;
          this.a = e;
          this.h = this.f = null;
        }

        Sj.prototype.xb = function (a) {
          this.h = a;
          return this;
        };

        Sj.prototype.toString = function () {
          if (this.m) {
            var a = J(this.m.url);
            a = Yd(a.f, a.a, a.g, "/emulator/auth/handler");
          } else a = Yd("https", this.u, null, "/__/auth/handler");

          I(a, "apiKey", this.o);
          I(a, "appName", this.c);
          I(a, "authType", this.v);

          if (this.a.isOAuthProvider) {
            var b = this.a;

            try {
              var c = firebase.app(this.c).auth().ka();
            } catch (h) {
              c = null;
            }

            b.nb = c;
            I(a, "providerId", this.a.providerId);
            c = this.a;
            b = Qe(c.Hb);

            for (var d in b) b[d] = b[d].toString();

            d = c.Pc;
            b = lb(b);

            for (var e = 0; e < d.length; e++) {
              var f = d[e];
              f in b && delete b[f];
            }

            c.ob && c.nb && !b[c.ob] && (b[c.ob] = c.nb);
            kb(b) || I(a, "customParameters", Pe(b));
          }

          "function" === typeof this.a.Pb && (c = this.a.Pb(), c.length && I(a, "scopes", c.join(",")));
          this.l ? I(a, "redirectUrl", this.l) : de(a.b, "redirectUrl");
          this.g ? I(a, "eventId", this.g) : de(a.b, "eventId");
          this.i ? I(a, "v", this.i) : de(a.b, "v");
          if (this.b) for (var g in this.b) this.b.hasOwnProperty(g) && !Xd(a, g) && I(a, g, this.b[g]);
          this.h ? I(a, "tid", this.h) : de(a.b, "tid");
          this.f ? I(a, "eid", this.f) : de(a.b, "eid");
          g = Tj(this.c);
          g.length && I(a, "fw", g.join(","));
          return a.toString();
        };

        function Tj(a) {
          try {
            return firebase.app(a).auth().Ga();
          } catch (b) {
            return [];
          }
        }

        function Uj(a, b, c, d, e, f) {
          this.o = a;
          this.g = b;
          this.b = c;
          this.f = f;
          this.c = d || null;
          this.i = e || null;
          this.l = this.u = this.A = null;
          this.h = [];
          this.v = this.a = null;
        }

        function Vj(a) {
          var b = me();
          return Zi(a).then(function (c) {
            a: {
              var d = J(b),
                  e = d.f;
              d = d.a;

              for (var f = 0; f < c.length; f++) {
                var g = c[f];
                var h = d;
                var m = e;
                0 == g.indexOf("chrome-extension://") ? h = J(g).a == h && "chrome-extension" == m : "http" != m && "https" != m ? h = !1 : xe.test(g) ? h = h == g : (g = g.split(".").join("\\."), h = new RegExp("^(.+\\." + g + "|" + g + ")$", "i").test(h));

                if (h) {
                  c = !0;
                  break a;
                }
              }

              c = !1;
            }

            if (!c) throw new th(me());
          });
        }

        function Wj(a) {
          if (a.v) return a.v;
          a.v = ze().then(function () {
            if (!a.u) {
              var b = a.c,
                  c = a.i,
                  d = Tj(a.b),
                  e = new Rj(a.o, a.g, a.b, a.f);
              e.f = b;
              e.b = c;
              e.c = Xa(d || []);
              a.u = e.toString();
            }

            a.m = new Ij(a.u);
            Xj(a);
          });
          return a.v;
        }

        k = Uj.prototype;

        k.Nb = function (a, b, c) {
          var d = new t("popup-closed-by-user"),
              e = new t("web-storage-unsupported"),
              f = this,
              g = !1;
          return this.la().then(function () {
            Yj(f).then(function (h) {
              h || (a && te(a), b(e), g = !0);
            });
          }).s(function () {}).then(function () {
            if (!g) return we(a);
          }).then(function () {
            if (!g) return Ad(c).then(function () {
              b(d);
            });
          });
        };

        k.Wb = function () {
          var a = K();
          return !Oe(a) && !Se(a);
        };

        k.Sb = function () {
          return !1;
        };

        k.Lb = function (a, b, c, d, e, f, g, h) {
          if (!a) return E(new t("popup-blocked"));
          if (g && !Oe()) return this.la().s(function (p) {
            te(a);
            e(p);
          }), d(), D();
          this.a || (this.a = Vj(Zj(this)));
          var m = this;
          return this.a.then(function () {
            var p = m.la().s(function (v) {
              te(a);
              e(v);
              throw v;
            });
            d();
            return p;
          }).then(function () {
            nh(c);

            if (!g) {
              var p = ak(m.o, m.g, m.b, b, c, null, f, m.c, void 0, m.i, h, m.f);
              ne(p, a);
            }
          }).s(function (p) {
            "auth/network-request-failed" == p.code && (m.a = null);
            throw p;
          });
        };

        function Zj(a) {
          a.l || (a.A = a.c ? Je(a.c, Tj(a.b)) : null, a.l = new Ei(a.g, Aa(a.i), a.A), a.f && Li(a.l, a.f));
          return a.l;
        }

        k.Mb = function (a, b, c, d) {
          this.a || (this.a = Vj(Zj(this)));
          var e = this;
          return this.a.then(function () {
            nh(b);
            var f = ak(e.o, e.g, e.b, a, b, me(), c, e.c, void 0, e.i, d, e.f);
            ne(f);
          }).s(function (f) {
            "auth/network-request-failed" == f.code && (e.a = null);
            throw f;
          });
        };

        k.la = function () {
          var a = this;
          return Wj(this).then(function () {
            return a.m.qb;
          }).s(function () {
            a.a = null;
            throw new t("network-request-failed");
          });
        };

        k.Zb = function () {
          return !0;
        };

        function ak(a, b, c, d, e, f, g, h, m, p, v, B) {
          a = new Sj(a, b, c, d, e, B);
          a.l = f;
          a.g = g;
          a.i = h;
          a.b = lb(m || null);
          a.f = p;
          return a.xb(v).toString();
        }

        function Xj(a) {
          if (!a.m) throw Error("IfcHandler must be initialized!");
          Nj(a.m, function (b) {
            var c = {};

            if (b && b.authEvent) {
              var d = !1;
              b = ph(b.authEvent);

              for (c = 0; c < a.h.length; c++) d = a.h[c](b) || d;

              c = {};
              c.status = d ? "ACK" : "ERROR";
              return D(c);
            }

            c.status = "ERROR";
            return D(c);
          });
        }

        function Yj(a) {
          var b = {
            type: "webStorageSupport"
          };
          return Wj(a).then(function () {
            return Mj(a.m, b);
          }).then(function (c) {
            if (c && c.length && "undefined" !== typeof c[0].webStorageSupport) return c[0].webStorageSupport;
            throw Error();
          });
        }

        k.Ea = function (a) {
          this.h.push(a);
        };

        k.Ra = function (a) {
          Va(this.h, function (b) {
            return b == a;
          });
        };

        function bk(a) {
          this.a = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;
          if (!this.a) throw new t("internal-error", "The React Native compatibility library was not found.");
          this.type = "asyncStorage";
        }

        k = bk.prototype;

        k.get = function (a) {
          return D(this.a.getItem(a)).then(function (b) {
            return b && Re(b);
          });
        };

        k.set = function (a, b) {
          return D(this.a.setItem(a, Pe(b)));
        };

        k.T = function (a) {
          return D(this.a.removeItem(a));
        };

        k.ca = function () {};

        k.ia = function () {};

        function ck(a) {
          this.b = a;
          this.a = {};
          this.f = q(this.c, this);
        }

        var dk = [];

        function ek() {
          var a = Ee() ? self : null;
          w(dk, function (c) {
            c.b == a && (b = c);
          });

          if (!b) {
            var b = new ck(a);
            dk.push(b);
          }

          return b;
        }

        ck.prototype.c = function (a) {
          var b = a.data.eventType,
              c = a.data.eventId,
              d = this.a[b];

          if (d && 0 < d.length) {
            a.ports[0].postMessage({
              status: "ack",
              eventId: c,
              eventType: b,
              response: null
            });
            var e = [];
            w(d, function (f) {
              e.push(D().then(function () {
                return f(a.origin, a.data.data);
              }));
            });
            Fc(e).then(function (f) {
              var g = [];
              w(f, function (h) {
                g.push({
                  fulfilled: h.Ob,
                  value: h.value,
                  reason: h.reason ? h.reason.message : void 0
                });
              });
              w(g, function (h) {
                for (var m in h) "undefined" === typeof h[m] && delete h[m];
              });
              a.ports[0].postMessage({
                status: "done",
                eventId: c,
                eventType: b,
                response: g
              });
            });
          }
        };

        function fk(a, b, c) {
          kb(a.a) && a.b.addEventListener("message", a.f);
          "undefined" === typeof a.a[b] && (a.a[b] = []);
          a.a[b].push(c);
        }

        ;

        function gk(a) {
          this.a = a;
        }

        gk.prototype.postMessage = function (a, b) {
          this.a.postMessage(a, b);
        };

        function hk(a) {
          this.c = a;
          this.b = !1;
          this.a = [];
        }

        function ik(a, b, c, d) {
          var e,
              f = c || {},
              g,
              h,
              m,
              p = null;
          if (a.b) return E(Error("connection_unavailable"));
          var v = d ? 800 : 50,
              B = "undefined" !== typeof MessageChannel ? new MessageChannel() : null;
          return new C(function (A, Q) {
            B ? (e = Math.floor(Math.random() * Math.pow(10, 20)).toString(), B.port1.start(), h = setTimeout(function () {
              Q(Error("unsupported_event"));
            }, v), g = function g(xa) {
              xa.data.eventId === e && ("ack" === xa.data.status ? (clearTimeout(h), m = setTimeout(function () {
                Q(Error("timeout"));
              }, 3E3)) : "done" === xa.data.status ? (clearTimeout(m), "undefined" !== typeof xa.data.response ? A(xa.data.response) : Q(Error("unknown_error"))) : (clearTimeout(h), clearTimeout(m), Q(Error("invalid_response"))));
            }, p = {
              messageChannel: B,
              onMessage: g
            }, a.a.push(p), B.port1.addEventListener("message", g), a.c.postMessage({
              eventType: b,
              eventId: e,
              data: f
            }, [B.port2])) : Q(Error("connection_unavailable"));
          }).then(function (A) {
            jk(a, p);
            return A;
          }).s(function (A) {
            jk(a, p);
            throw A;
          });
        }

        function jk(a, b) {
          if (b) {
            var c = b.messageChannel,
                d = b.onMessage;
            c && (c.port1.removeEventListener("message", d), c.port1.close());
            Va(a.a, function (e) {
              return e == b;
            });
          }
        }

        hk.prototype.close = function () {
          for (; 0 < this.a.length;) jk(this, this.a[0]);

          this.b = !0;
        };

        function kk() {
          if (!lk()) throw new t("web-storage-unsupported");
          this.c = {};
          this.a = [];
          this.b = 0;
          this.m = l.indexedDB;
          this.type = "indexedDB";
          this.g = this.l = this.f = this.i = null;
          this.o = !1;
          this.h = null;
          var a = this;
          Ee() && self ? (this.l = ek(), fk(this.l, "keyChanged", function (b, c) {
            return mk(a).then(function (d) {
              0 < d.length && w(a.a, function (e) {
                e(d);
              });
              return {
                keyProcessed: Ta(d, c.key)
              };
            });
          }), fk(this.l, "ping", function () {
            return D(["keyChanged"]);
          })) : af().then(function (b) {
            if (a.h = b) a.g = new hk(new gk(b)), ik(a.g, "ping", null, !0).then(function (c) {
              c[0].fulfilled && Ta(c[0].value, "keyChanged") && (a.o = !0);
            }).s(function () {});
          });
        }

        var nk;

        function ok(a) {
          return new C(function (b, c) {
            var d = a.m.deleteDatabase("firebaseLocalStorageDb");

            d.onsuccess = function () {
              b();
            };

            d.onerror = function (e) {
              c(Error(e.target.error));
            };
          });
        }

        function pk(a) {
          return new C(function (b, c) {
            var d = a.m.open("firebaseLocalStorageDb", 1);

            d.onerror = function (e) {
              try {
                e.preventDefault();
              } catch (f) {}

              c(Error(e.target.error));
            };

            d.onupgradeneeded = function (e) {
              e = e.target.result;

              try {
                e.createObjectStore("firebaseLocalStorage", {
                  keyPath: "fbase_key"
                });
              } catch (f) {
                c(f);
              }
            };

            d.onsuccess = function (e) {
              e = e.target.result;
              e.objectStoreNames.contains("firebaseLocalStorage") ? b(e) : ok(a).then(function () {
                return pk(a);
              }).then(function (f) {
                b(f);
              }).s(function (f) {
                c(f);
              });
            };
          });
        }

        function qk(a) {
          a.v || (a.v = pk(a));
          return a.v;
        }

        function lk() {
          try {
            return !!l.indexedDB;
          } catch (a) {
            return !1;
          }
        }

        function rk(a) {
          return a.objectStore("firebaseLocalStorage");
        }

        function sk(a, b) {
          return a.transaction(["firebaseLocalStorage"], b ? "readwrite" : "readonly");
        }

        function tk(a) {
          return new C(function (b, c) {
            a.onsuccess = function (d) {
              d && d.target ? b(d.target.result) : b();
            };

            a.onerror = function (d) {
              c(d.target.error);
            };
          });
        }

        k = kk.prototype;

        k.set = function (a, b) {
          var c = !1,
              d,
              e = this;
          return qk(this).then(function (f) {
            d = f;
            f = rk(sk(d, !0));
            return tk(f.get(a));
          }).then(function (f) {
            var g = rk(sk(d, !0));
            if (f) return f.value = b, tk(g.put(f));
            e.b++;
            c = !0;
            f = {};
            f.fbase_key = a;
            f.value = b;
            return tk(g.add(f));
          }).then(function () {
            e.c[a] = b;
            return uk(e, a);
          }).na(function () {
            c && e.b--;
          });
        };

        function uk(a, b) {
          return a.g && a.h && $e() === a.h ? ik(a.g, "keyChanged", {
            key: b
          }, a.o).then(function () {}).s(function () {}) : D();
        }

        k.get = function (a) {
          return qk(this).then(function (b) {
            return tk(rk(sk(b, !1)).get(a));
          }).then(function (b) {
            return b && b.value;
          });
        };

        k.T = function (a) {
          var b = !1,
              c = this;
          return qk(this).then(function (d) {
            b = !0;
            c.b++;
            return tk(rk(sk(d, !0))["delete"](a));
          }).then(function () {
            delete c.c[a];
            return uk(c, a);
          }).na(function () {
            b && c.b--;
          });
        };

        function mk(a) {
          return qk(a).then(function (b) {
            var c = rk(sk(b, !1));
            return c.getAll ? tk(c.getAll()) : new C(function (d, e) {
              var f = [],
                  g = c.openCursor();

              g.onsuccess = function (h) {
                (h = h.target.result) ? (f.push(h.value), h["continue"]()) : d(f);
              };

              g.onerror = function (h) {
                e(h.target.error);
              };
            });
          }).then(function (b) {
            var c = {},
                d = [];

            if (0 == a.b) {
              for (d = 0; d < b.length; d++) c[b[d].fbase_key] = b[d].value;

              d = oe(a.c, c);
              a.c = c;
            }

            return d;
          });
        }

        k.ca = function (a) {
          0 == this.a.length && vk(this);
          this.a.push(a);
        };

        k.ia = function (a) {
          Va(this.a, function (b) {
            return b == a;
          });
          0 == this.a.length && wk(this);
        };

        function vk(a) {
          function b() {
            a.f = setTimeout(function () {
              a.i = mk(a).then(function (c) {
                0 < c.length && w(a.a, function (d) {
                  d(c);
                });
              }).then(function () {
                b();
              }).s(function (c) {
                "STOP_EVENT" != c.message && b();
              });
            }, 800);
          }

          wk(a);
          b();
        }

        function wk(a) {
          a.i && a.i.cancel("STOP_EVENT");
          a.f && (clearTimeout(a.f), a.f = null);
        }

        ;

        function xk(a) {
          var b = this,
              c = null;
          this.a = [];
          this.type = "indexedDB";
          this.c = a;
          this.b = D().then(function () {
            if (lk()) {
              var d = Le(),
                  e = "__sak" + d;
              nk || (nk = new kk());
              c = nk;
              return c.set(e, d).then(function () {
                return c.get(e);
              }).then(function (f) {
                if (f !== d) throw Error("indexedDB not supported!");
                return c.T(e);
              }).then(function () {
                return c;
              }).s(function () {
                return b.c;
              });
            }

            return b.c;
          }).then(function (d) {
            b.type = d.type;
            d.ca(function (e) {
              w(b.a, function (f) {
                f(e);
              });
            });
            return d;
          });
        }

        k = xk.prototype;

        k.get = function (a) {
          return this.b.then(function (b) {
            return b.get(a);
          });
        };

        k.set = function (a, b) {
          return this.b.then(function (c) {
            return c.set(a, b);
          });
        };

        k.T = function (a) {
          return this.b.then(function (b) {
            return b.T(a);
          });
        };

        k.ca = function (a) {
          this.a.push(a);
        };

        k.ia = function (a) {
          Va(this.a, function (b) {
            return b == a;
          });
        };

        function yk() {
          this.a = {};
          this.type = "inMemory";
        }

        k = yk.prototype;

        k.get = function (a) {
          return D(this.a[a]);
        };

        k.set = function (a, b) {
          this.a[a] = b;
          return D();
        };

        k.T = function (a) {
          delete this.a[a];
          return D();
        };

        k.ca = function () {};

        k.ia = function () {};

        function zk() {
          if (!Ak()) {
            if ("Node" == Fe()) throw new t("internal-error", "The LocalStorage compatibility library was not found.");
            throw new t("web-storage-unsupported");
          }

          this.a = Bk() || firebase.INTERNAL.node.localStorage;
          this.type = "localStorage";
        }

        function Bk() {
          try {
            var a = l.localStorage,
                b = Le();
            a && (a.setItem(b, "1"), a.removeItem(b));
            return a;
          } catch (c) {
            return null;
          }
        }

        function Ak() {
          var a = "Node" == Fe();
          a = Bk() || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;
          if (!a) return !1;

          try {
            return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
          } catch (b) {
            return !1;
          }
        }

        k = zk.prototype;

        k.get = function (a) {
          var b = this;
          return D().then(function () {
            var c = b.a.getItem(a);
            return Re(c);
          });
        };

        k.set = function (a, b) {
          var c = this;
          return D().then(function () {
            var d = Pe(b);
            null === d ? c.T(a) : c.a.setItem(a, d);
          });
        };

        k.T = function (a) {
          var b = this;
          return D().then(function () {
            b.a.removeItem(a);
          });
        };

        k.ca = function (a) {
          l.window && jd(l.window, "storage", a);
        };

        k.ia = function (a) {
          l.window && G(l.window, "storage", a);
        };

        function Ck() {
          this.type = "nullStorage";
        }

        k = Ck.prototype;

        k.get = function () {
          return D(null);
        };

        k.set = function () {
          return D();
        };

        k.T = function () {
          return D();
        };

        k.ca = function () {};

        k.ia = function () {};

        function Dk() {
          if (!Ek()) {
            if ("Node" == Fe()) throw new t("internal-error", "The SessionStorage compatibility library was not found.");
            throw new t("web-storage-unsupported");
          }

          this.a = Fk() || firebase.INTERNAL.node.sessionStorage;
          this.type = "sessionStorage";
        }

        function Fk() {
          try {
            var a = l.sessionStorage,
                b = Le();
            a && (a.setItem(b, "1"), a.removeItem(b));
            return a;
          } catch (c) {
            return null;
          }
        }

        function Ek() {
          var a = "Node" == Fe();
          a = Fk() || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;
          if (!a) return !1;

          try {
            return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
          } catch (b) {
            return !1;
          }
        }

        k = Dk.prototype;

        k.get = function (a) {
          var b = this;
          return D().then(function () {
            var c = b.a.getItem(a);
            return Re(c);
          });
        };

        k.set = function (a, b) {
          var c = this;
          return D().then(function () {
            var d = Pe(b);
            null === d ? c.T(a) : c.a.setItem(a, d);
          });
        };

        k.T = function (a) {
          var b = this;
          return D().then(function () {
            b.a.removeItem(a);
          });
        };

        k.ca = function () {};

        k.ia = function () {};

        function Gk() {
          var a = {};
          a.Browser = Hk;
          a.Node = Ik;
          a.ReactNative = Jk;
          a.Worker = Kk;
          this.a = a[Fe()];
        }

        var Lk,
            Hk = {
          D: zk,
          ab: Dk
        },
            Ik = {
          D: zk,
          ab: Dk
        },
            Jk = {
          D: bk,
          ab: Ck
        },
            Kk = {
          D: zk,
          ab: Ck
        };
        /*
        Copyright 2017 Google LLC
        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.
        */

        var Mk = {
          qd: "local",
          NONE: "none",
          sd: "session"
        };

        function Nk(a) {
          var b = new t("invalid-persistence-type"),
              c = new t("unsupported-persistence-type");

          a: {
            for (d in Mk) if (Mk[d] == a) {
              var d = !0;
              break a;
            }

            d = !1;
          }

          if (!d || "string" !== typeof a) throw b;

          switch (Fe()) {
            case "ReactNative":
              if ("session" === a) throw c;
              break;

            case "Node":
              if ("none" !== a) throw c;
              break;

            case "Worker":
              if ("session" === a || !lk() && "none" !== a) throw c;
              break;

            default:
              if (!Ke() && "none" !== a) throw c;
          }
        }

        function Ok() {
          var a = !Se(K()) && De() ? !0 : !1,
              b = Oe(),
              c = Ke();
          this.v = a;
          this.h = b;
          this.l = c;
          this.a = {};
          Lk || (Lk = new Gk());
          a = Lk;

          try {
            this.g = !le() && Ze() || !l.indexedDB ? new a.a.D() : new xk(Ee() ? new yk() : new a.a.D());
          } catch (d) {
            this.g = new yk(), this.h = !0;
          }

          try {
            this.i = new a.a.ab();
          } catch (d) {
            this.i = new yk();
          }

          this.m = new yk();
          this.f = q(this.Xb, this);
          this.b = {};
        }

        var Pk;

        function Qk() {
          Pk || (Pk = new Ok());
          return Pk;
        }

        function Rk(a, b) {
          switch (b) {
            case "session":
              return a.i;

            case "none":
              return a.m;

            default:
              return a.g;
          }
        }

        function Sk(a, b) {
          return "firebase:" + a.name + (b ? ":" + b : "");
        }

        function Tk(a, b, c) {
          var d = Sk(b, c),
              e = Rk(a, b.D);
          return a.get(b, c).then(function (f) {
            var g = null;

            try {
              g = Re(l.localStorage.getItem(d));
            } catch (h) {}

            if (g && !f) return l.localStorage.removeItem(d), a.set(b, g, c);
            g && f && "localStorage" != e.type && l.localStorage.removeItem(d);
          });
        }

        k = Ok.prototype;

        k.get = function (a, b) {
          return Rk(this, a.D).get(Sk(a, b));
        };

        function Uk(a, b, c) {
          c = Sk(b, c);
          "local" == b.D && (a.b[c] = null);
          return Rk(a, b.D).T(c);
        }

        k.set = function (a, b, c) {
          var d = Sk(a, c),
              e = this,
              f = Rk(this, a.D);
          return f.set(d, b).then(function () {
            return f.get(d);
          }).then(function (g) {
            "local" == a.D && (e.b[d] = g);
          });
        };

        k.addListener = function (a, b, c) {
          a = Sk(a, b);
          this.l && (this.b[a] = l.localStorage.getItem(a));
          kb(this.a) && (Rk(this, "local").ca(this.f), this.h || (le() || !Ze()) && l.indexedDB || !this.l || Vk(this));
          this.a[a] || (this.a[a] = []);
          this.a[a].push(c);
        };

        k.removeListener = function (a, b, c) {
          a = Sk(a, b);
          this.a[a] && (Va(this.a[a], function (d) {
            return d == c;
          }), 0 == this.a[a].length && delete this.a[a]);
          kb(this.a) && (Rk(this, "local").ia(this.f), Wk(this));
        };

        function Vk(a) {
          Wk(a);
          a.c = setInterval(function () {
            for (var b in a.a) {
              var c = l.localStorage.getItem(b),
                  d = a.b[b];
              c != d && (a.b[b] = c, c = new Yc({
                type: "storage",
                key: b,
                target: window,
                oldValue: d,
                newValue: c,
                a: !0
              }), a.Xb(c));
            }
          }, 1E3);
        }

        function Wk(a) {
          a.c && (clearInterval(a.c), a.c = null);
        }

        k.Xb = function (a) {
          if (a && a.g) {
            var b = a.a.key;
            if (null == b) for (var c in this.a) {
              var d = this.b[c];
              "undefined" === typeof d && (d = null);
              var e = l.localStorage.getItem(c);
              e !== d && (this.b[c] = e, this.lb(c));
            } else if (0 == b.indexOf("firebase:") && this.a[b]) {
              "undefined" !== typeof a.a.a ? Rk(this, "local").ia(this.f) : Wk(this);
              if (this.v) if (c = l.localStorage.getItem(b), d = a.a.newValue, d !== c) null !== d ? l.localStorage.setItem(b, d) : l.localStorage.removeItem(b);else if (this.b[b] === d && "undefined" === typeof a.a.a) return;
              var f = this;

              c = function c() {
                if ("undefined" !== typeof a.a.a || f.b[b] !== l.localStorage.getItem(b)) f.b[b] = l.localStorage.getItem(b), f.lb(b);
              };

              Tb && dc && 10 == dc && l.localStorage.getItem(b) !== a.a.newValue && a.a.newValue !== a.a.oldValue ? setTimeout(c, 10) : c();
            }
          } else w(a, q(this.lb, this));
        };

        k.lb = function (a) {
          this.a[a] && w(this.a[a], function (b) {
            b();
          });
        };

        function Xk(a) {
          this.a = a;
          this.b = Qk();
        }

        var Yk = {
          name: "authEvent",
          D: "local"
        };

        function Zk(a) {
          return a.b.get(Yk, a.a).then(function (b) {
            return ph(b);
          });
        }

        ;

        function $k() {
          this.a = Qk();
        }

        ;

        function al() {
          this.b = -1;
        }

        ;

        function bl(a, b) {
          this.b = cl;
          this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b);
          this.g = this.c = 0;
          this.a = [];
          this.i = a;
          this.h = b;
          this.l = l.Int32Array ? new Int32Array(64) : Array(64);
          void 0 === dl && (l.Int32Array ? dl = new Int32Array(el) : dl = el);
          this.reset();
        }

        var dl;
        r(bl, al);

        for (var cl = 64, fl = cl - 1, gl = [], hl = 0; hl < fl; hl++) gl[hl] = 0;

        var il = Wa(128, gl);

        bl.prototype.reset = function () {
          this.g = this.c = 0;
          this.a = l.Int32Array ? new Int32Array(this.h) : Xa(this.h);
        };

        function jl(a) {
          for (var b = a.f, c = a.l, d = 0, e = 0; e < b.length;) c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;

          for (b = 16; 64 > b; b++) {
            e = c[b - 15] | 0;
            d = c[b - 2] | 0;
            var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
                g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
            c[b] = f + g | 0;
          }

          d = a.a[0] | 0;
          e = a.a[1] | 0;
          var h = a.a[2] | 0,
              m = a.a[3] | 0,
              p = a.a[4] | 0,
              v = a.a[5] | 0,
              B = a.a[6] | 0;
          f = a.a[7] | 0;

          for (b = 0; 64 > b; b++) {
            var A = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h ^ e & h) | 0;
            g = p & v ^ ~p & B;
            f = f + ((p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) | 0;
            g = g + (dl[b] | 0) | 0;
            g = f + (g + (c[b] | 0) | 0) | 0;
            f = B;
            B = v;
            v = p;
            p = m + g | 0;
            m = h;
            h = e;
            e = d;
            d = g + A | 0;
          }

          a.a[0] = a.a[0] + d | 0;
          a.a[1] = a.a[1] + e | 0;
          a.a[2] = a.a[2] + h | 0;
          a.a[3] = a.a[3] + m | 0;
          a.a[4] = a.a[4] + p | 0;
          a.a[5] = a.a[5] + v | 0;
          a.a[6] = a.a[6] + B | 0;
          a.a[7] = a.a[7] + f | 0;
        }

        function kl(a, b, c) {
          void 0 === c && (c = b.length);
          var d = 0,
              e = a.c;
          if ("string" === typeof b) for (; d < c;) a.f[e++] = b.charCodeAt(d++), e == a.b && (jl(a), e = 0);else if (ma(b)) for (; d < c;) {
            var f = b[d++];
            if (!("number" == typeof f && 0 <= f && 255 >= f && f == (f | 0))) throw Error("message must be a byte array");
            a.f[e++] = f;
            e == a.b && (jl(a), e = 0);
          } else throw Error("message must be string or array");
          a.c = e;
          a.g += c;
        }

        var el = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

        function ll() {
          bl.call(this, 8, ml);
        }

        r(ll, bl);
        var ml = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

        function nl(a, b, c, d, e, f) {
          this.m = a;
          this.i = b;
          this.l = c;
          this.v = d || null;
          this.u = e || null;
          this.o = f;
          this.h = b + ":" + c;
          this.A = new $k();
          this.g = new Xk(this.h);
          this.f = null;
          this.b = [];
          this.a = this.c = null;
        }

        function ol(a) {
          return new t("invalid-cordova-configuration", a);
        }

        k = nl.prototype;

        k.la = function () {
          return this.Ia ? this.Ia : this.Ia = Ae().then(function () {
            if ("function" !== typeof L("universalLinks.subscribe", l)) throw ol("cordova-universal-links-plugin-fix is not installed");
            if ("undefined" === typeof L("BuildInfo.packageName", l)) throw ol("cordova-plugin-buildinfo is not installed");
            if ("function" !== typeof L("cordova.plugins.browsertab.openUrl", l)) throw ol("cordova-plugin-browsertab is not installed");
            if ("function" !== typeof L("cordova.InAppBrowser.open", l)) throw ol("cordova-plugin-inappbrowser is not installed");
          }, function () {
            throw new t("cordova-not-ready");
          });
        };

        function pl() {
          for (var a = 20, b = []; 0 < a;) b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;

          return b.join("");
        }

        function ql(a) {
          var b = new ll();
          kl(b, a);
          a = [];
          var c = 8 * b.g;
          56 > b.c ? kl(b, il, 56 - b.c) : kl(b, il, b.b - (b.c - 56));

          for (var d = 63; 56 <= d; d--) b.f[d] = c & 255, c /= 256;

          jl(b);

          for (d = c = 0; d < b.i; d++) for (var e = 24; 0 <= e; e -= 8) a[c++] = b.a[d] >> e & 255;

          return Zf(a);
        }

        k.Nb = function (a, b) {
          b(new t("operation-not-supported-in-this-environment"));
          return D();
        };

        k.Lb = function () {
          return E(new t("operation-not-supported-in-this-environment"));
        };

        k.Zb = function () {
          return !1;
        };

        k.Wb = function () {
          return !0;
        };

        k.Sb = function () {
          return !0;
        };

        k.Mb = function (a, b, c, d) {
          if (this.c) return E(new t("redirect-operation-pending"));
          var e = this,
              f = l.document,
              g = null,
              h = null,
              m = null,
              p = null;
          return this.c = D().then(function () {
            nh(b);
            return rl(e);
          }).then(function () {
            return sl(e, a, b, c, d);
          }).then(function () {
            return new C(function (v, B) {
              h = function h() {
                var A = L("cordova.plugins.browsertab.close", l);
                v();
                "function" === typeof A && A();
                e.a && "function" === typeof e.a.close && (e.a.close(), e.a = null);
                return !1;
              };

              e.Ea(h);

              m = function m() {
                g || (g = Ad(2E3).then(function () {
                  B(new t("redirect-cancelled-by-user"));
                }));
              };

              p = function p() {
                Ve() && m();
              };

              f.addEventListener("resume", m, !1);
              K().toLowerCase().match(/android/) || f.addEventListener("visibilitychange", p, !1);
            }).s(function (v) {
              return tl(e).then(function () {
                throw v;
              });
            });
          }).na(function () {
            m && f.removeEventListener("resume", m, !1);
            p && f.removeEventListener("visibilitychange", p, !1);
            g && g.cancel();
            h && e.Ra(h);
            e.c = null;
          });
        };

        function sl(a, b, c, d, e) {
          var f = pl(),
              g = new oh(b, d, null, f, new t("no-auth-event"), null, e),
              h = L("BuildInfo.packageName", l);
          if ("string" !== typeof h) throw new t("invalid-cordova-configuration");
          var m = L("BuildInfo.displayName", l),
              p = {};
          if (K().toLowerCase().match(/iphone|ipad|ipod/)) p.ibi = h;else if (K().toLowerCase().match(/android/)) p.apn = h;else return E(new t("operation-not-supported-in-this-environment"));
          m && (p.appDisplayName = m);
          f = ql(f);
          p.sessionId = f;
          var v = ak(a.m, a.i, a.l, b, c, null, d, a.v, p, a.u, e, a.o);
          return a.la().then(function () {
            var B = a.h;
            return a.A.a.set(Yk, g.w(), B);
          }).then(function () {
            var B = L("cordova.plugins.browsertab.isAvailable", l);
            if ("function" !== typeof B) throw new t("invalid-cordova-configuration");
            var A = null;
            B(function (Q) {
              if (Q) {
                A = L("cordova.plugins.browsertab.openUrl", l);
                if ("function" !== typeof A) throw new t("invalid-cordova-configuration");
                A(v);
              } else {
                A = L("cordova.InAppBrowser.open", l);
                if ("function" !== typeof A) throw new t("invalid-cordova-configuration");
                Q = K();
                a.a = A(v, Q.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || Q.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes");
              }
            });
          });
        }

        function ul(a, b) {
          for (var c = 0; c < a.b.length; c++) try {
            a.b[c](b);
          } catch (d) {}
        }

        function rl(a) {
          a.f || (a.f = a.la().then(function () {
            return new C(function (b) {
              function c(d) {
                b(d);
                a.Ra(c);
                return !1;
              }

              a.Ea(c);
              vl(a);
            });
          }));
          return a.f;
        }

        function tl(a) {
          var b = null;
          return Zk(a.g).then(function (c) {
            b = c;
            c = a.g;
            return Uk(c.b, Yk, c.a);
          }).then(function () {
            return b;
          });
        }

        function vl(a) {
          function b(g) {
            d = !0;
            e && e.cancel();
            tl(a).then(function (h) {
              var m = c;

              if (h && g && g.url) {
                var p = null;
                m = tg(g.url);
                -1 != m.indexOf("/__/auth/callback") && (p = J(m), p = Re(Xd(p, "firebaseError") || null), p = (p = "object" === typeof p ? ya(p) : null) ? new oh(h.c, h.b, null, null, p, null, h.S()) : new oh(h.c, h.b, m, h.f, null, null, h.S()));
                m = p || c;
              }

              ul(a, m);
            });
          }

          var c = new oh("unknown", null, null, null, new t("no-auth-event")),
              d = !1,
              e = Ad(500).then(function () {
            return tl(a).then(function () {
              d || ul(a, c);
            });
          }),
              f = l.handleOpenURL;

          l.handleOpenURL = function (g) {
            0 == g.toLowerCase().indexOf(L("BuildInfo.packageName", l).toLowerCase() + "://") && b({
              url: g
            });
            if ("function" === typeof f) try {
              f(g);
            } catch (h) {
              console.error(h);
            }
          };

          rh || (rh = new qh());
          sh(b);
        }

        k.Ea = function (a) {
          this.b.push(a);
          rl(this).s(function (b) {
            "auth/invalid-cordova-configuration" === b.code && (b = new oh("unknown", null, null, null, new t("no-auth-event")), a(b));
          });
        };

        k.Ra = function (a) {
          Va(this.b, function (b) {
            return b == a;
          });
        };

        function wl(a) {
          this.a = a;
          this.b = Qk();
        }

        var xl = {
          name: "pendingRedirect",
          D: "session"
        };

        function yl(a) {
          return a.b.set(xl, "pending", a.a);
        }

        function zl(a) {
          return Uk(a.b, xl, a.a);
        }

        function Al(a) {
          return a.b.get(xl, a.a).then(function (b) {
            return "pending" == b;
          });
        }

        ;

        function Bl(a, b, c, d) {
          this.i = {};
          this.u = 0;
          this.O = a;
          this.m = b;
          this.v = c;
          this.G = d;
          this.h = [];
          this.f = !1;
          this.l = q(this.o, this);
          this.b = new Cl();
          this.A = new Dl();
          this.g = new wl(El(this.m, this.v));
          this.c = {};
          this.c.unknown = this.b;
          this.c.signInViaRedirect = this.b;
          this.c.linkViaRedirect = this.b;
          this.c.reauthViaRedirect = this.b;
          this.c.signInViaPopup = this.A;
          this.c.linkViaPopup = this.A;
          this.c.reauthViaPopup = this.A;
          this.a = Fl(this.O, this.m, this.v, Ba, this.G);
        }

        function Fl(a, b, c, d, e) {
          var f = firebase.SDK_VERSION || null;
          return Be() ? new nl(a, b, c, f, d, e) : new Uj(a, b, c, f, d, e);
        }

        Bl.prototype.reset = function () {
          this.f = !1;
          this.a.Ra(this.l);
          this.a = Fl(this.O, this.m, this.v, null, this.G);
          this.i = {};
        };

        function Gl(a) {
          a.f || (a.f = !0, a.a.Ea(a.l));
          var b = a.a;
          return a.a.la().s(function (c) {
            a.a == b && a.reset();
            throw c;
          });
        }

        function Hl(a) {
          a.a.Wb() && Gl(a).s(function (b) {
            var c = new oh("unknown", null, null, null, new t("operation-not-supported-in-this-environment"));
            Il(b) && a.o(c);
          });
          a.a.Sb() || Jl(a.b);
        }

        function Kl(a, b) {
          Ta(a.h, b) || a.h.push(b);
          a.f || Al(a.g).then(function (c) {
            c ? zl(a.g).then(function () {
              Gl(a).s(function (d) {
                var e = new oh("unknown", null, null, null, new t("operation-not-supported-in-this-environment"));
                Il(d) && a.o(e);
              });
            }) : Hl(a);
          }).s(function () {
            Hl(a);
          });
        }

        function Ll(a, b) {
          Va(a.h, function (c) {
            return c == b;
          });
        }

        Bl.prototype.o = function (a) {
          if (!a) throw new t("invalid-auth-event");
          6E5 <= ua() - this.u && (this.i = {}, this.u = 0);
          if (a && a.getUid() && this.i.hasOwnProperty(a.getUid())) return !1;

          for (var b = !1, c = 0; c < this.h.length; c++) {
            var d = this.h[c];

            if (d.Eb(a.c, a.b)) {
              if (b = this.c[a.c]) b.h(a, d), a && (a.f || a.b) && (this.i[a.getUid()] = !0, this.u = ua());
              b = !0;
              break;
            }
          }

          Jl(this.b);
          return b;
        };

        var Ml = new Ue(2E3, 1E4),
            Nl = new Ue(3E4, 6E4);

        Bl.prototype.qa = function () {
          return this.b.qa();
        };

        function Ol(a, b, c, d, e, f, g) {
          return a.a.Lb(b, c, d, function () {
            a.f || (a.f = !0, a.a.Ea(a.l));
          }, function () {
            a.reset();
          }, e, f, g);
        }

        function Il(a) {
          return a && "auth/cordova-not-ready" == a.code ? !0 : !1;
        }

        function Pl(a, b, c, d, e) {
          var f;
          return yl(a.g).then(function () {
            return a.a.Mb(b, c, d, e).s(function (g) {
              if (Il(g)) throw new t("operation-not-supported-in-this-environment");
              f = g;
              return zl(a.g).then(function () {
                throw f;
              });
            }).then(function () {
              return a.a.Zb() ? new C(function () {}) : zl(a.g).then(function () {
                return a.qa();
              }).then(function () {}).s(function () {});
            });
          });
        }

        function Ql(a, b, c, d, e) {
          return a.a.Nb(d, function (f) {
            b.ma(c, null, f, e);
          }, Ml.get());
        }

        var Rl = {};

        function El(a, b, c) {
          a = a + ":" + b;
          c && (a = a + ":" + c.url);
          return a;
        }

        function Sl(a, b, c, d) {
          var e = El(b, c, d);
          Rl[e] || (Rl[e] = new Bl(a, b, c, d));
          return Rl[e];
        }

        function Cl() {
          this.b = null;
          this.f = [];
          this.c = [];
          this.a = null;
          this.i = this.g = !1;
        }

        Cl.prototype.reset = function () {
          this.b = null;
          this.a && (this.a.cancel(), this.a = null);
        };

        Cl.prototype.h = function (a, b) {
          if (a) {
            this.reset();
            this.g = !0;
            var c = a.c,
                d = a.b,
                e = a.a && "auth/web-storage-unsupported" == a.a.code,
                f = a.a && "auth/operation-not-supported-in-this-environment" == a.a.code;
            this.i = !(!e && !f);
            "unknown" != c || e || f ? a.a ? (Tl(this, !0, null, a.a), D()) : b.Fa(c, d) ? Ul(this, a, b) : E(new t("invalid-auth-event")) : (Tl(this, !1, null, null), D());
          } else E(new t("invalid-auth-event"));
        };

        function Jl(a) {
          a.g || (a.g = !0, Tl(a, !1, null, null));
        }

        function Vl(a) {
          a.g && !a.i && Tl(a, !1, null, null);
        }

        function Ul(a, b, c) {
          c = c.Fa(b.c, b.b);
          var d = b.g,
              e = b.f,
              f = b.i,
              g = b.S(),
              h = !!b.c.match(/Redirect$/);
          c(d, e, g, f).then(function (m) {
            Tl(a, h, m, null);
          }).s(function (m) {
            Tl(a, h, null, m);
          });
        }

        function Wl(a, b) {
          a.b = function () {
            return E(b);
          };

          if (a.c.length) for (var c = 0; c < a.c.length; c++) a.c[c](b);
        }

        function Xl(a, b) {
          a.b = function () {
            return D(b);
          };

          if (a.f.length) for (var c = 0; c < a.f.length; c++) a.f[c](b);
        }

        function Tl(a, b, c, d) {
          b ? d ? Wl(a, d) : Xl(a, c) : Xl(a, {
            user: null
          });
          a.f = [];
          a.c = [];
        }

        Cl.prototype.qa = function () {
          var a = this;
          return new C(function (b, c) {
            a.b ? a.b().then(b, c) : (a.f.push(b), a.c.push(c), Yl(a));
          });
        };

        function Yl(a) {
          var b = new t("timeout");
          a.a && a.a.cancel();
          a.a = Ad(Nl.get()).then(function () {
            a.b || (a.g = !0, Tl(a, !0, null, b));
          });
        }

        function Dl() {}

        Dl.prototype.h = function (a, b) {
          if (a) {
            var c = a.c,
                d = a.b;
            a.a ? (b.ma(a.c, null, a.a, a.b), D()) : b.Fa(c, d) ? Zl(a, b) : E(new t("invalid-auth-event"));
          } else E(new t("invalid-auth-event"));
        };

        function Zl(a, b) {
          var c = a.b,
              d = a.c;
          b.Fa(d, c)(a.g, a.f, a.S(), a.i).then(function (e) {
            b.ma(d, e, null, c);
          }).s(function (e) {
            b.ma(d, null, e, c);
          });
        }

        ;

        function $l() {
          this.hb = !1;
          Object.defineProperty(this, "appVerificationDisabled", {
            get: function get() {
              return this.hb;
            },
            set: function set(a) {
              this.hb = a;
            },
            enumerable: !1
          });
        }

        ;

        function am(a, b) {
          this.a = b;
          M(this, "verificationId", a);
        }

        am.prototype.confirm = function (a) {
          a = lh(this.verificationId, a);
          return this.a(a);
        };

        function bm(a, b, c, d) {
          return new hh(a).eb(b, c).then(function (e) {
            return new am(e, d);
          });
        }

        ;

        function cm(a) {
          var b = eg(a);
          if (!(b && b.exp && b.auth_time && b.iat)) throw new t("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
          N(this, {
            token: a,
            expirationTime: Ye(1E3 * b.exp),
            authTime: Ye(1E3 * b.auth_time),
            issuedAtTime: Ye(1E3 * b.iat),
            signInProvider: b.firebase && b.firebase.sign_in_provider ? b.firebase.sign_in_provider : null,
            signInSecondFactor: b.firebase && b.firebase.sign_in_second_factor ? b.firebase.sign_in_second_factor : null,
            claims: b
          });
        }

        ;

        function dm(a, b, c) {
          var d = b && b[em];
          if (!d) throw new t("argument-error", "Internal assert: Invalid MultiFactorResolver");
          this.a = a;
          this.f = lb(b);
          this.g = c;
          this.c = new ug(null, d);
          this.b = [];
          var e = this;
          w(b[fm] || [], function (f) {
            (f = pf(f)) && e.b.push(f);
          });
          M(this, "auth", this.a);
          M(this, "session", this.c);
          M(this, "hints", this.b);
        }

        var fm = "mfaInfo",
            em = "mfaPendingCredential";

        dm.prototype.Qc = function (a) {
          var b = this;
          return a.rb(this.a.a, this.c).then(function (c) {
            var d = lb(b.f);
            delete d[fm];
            delete d[em];
            z(d, c);
            return b.g(d);
          });
        };

        function gm(a, b, c, d) {
          t.call(this, "multi-factor-auth-required", d, b);
          this.b = new dm(a, b, c);
          M(this, "resolver", this.b);
        }

        r(gm, t);

        function hm(a, b, c) {
          if (a && n(a.serverResponse) && "auth/multi-factor-auth-required" === a.code) try {
            return new gm(b, a.serverResponse, c, a.message);
          } catch (d) {}
          return null;
        }

        ;

        function im() {}

        im.prototype.rb = function (a, b, c) {
          return b.type == vg ? jm(this, a, b, c) : km(this, a, b);
        };

        function jm(a, b, c, d) {
          return c.Ha().then(function (e) {
            e = {
              idToken: e
            };
            "undefined" !== typeof d && (e.displayName = d);
            z(e, {
              phoneVerificationInfo: dh(a.a)
            });
            return O(b, Cj, e);
          });
        }

        function km(a, b, c) {
          return c.Ha().then(function (d) {
            d = {
              mfaPendingCredential: d
            };
            z(d, {
              phoneVerificationInfo: dh(a.a)
            });
            return O(b, Dj, d);
          });
        }

        function lm(a) {
          M(this, "factorId", a.fa);
          this.a = a;
        }

        r(lm, im);

        function mm(a) {
          lm.call(this, a);
          if (this.a.fa != hh.PROVIDER_ID) throw new t("argument-error", "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");
        }

        r(mm, lm);

        function nm(a, b) {
          F.call(this, a);

          for (var c in b) this[c] = b[c];
        }

        r(nm, F);

        function om(a, b) {
          this.a = a;
          this.b = [];
          this.c = q(this.xc, this);
          jd(this.a, "userReloaded", this.c);
          var c = [];
          b && b.multiFactor && b.multiFactor.enrolledFactors && w(b.multiFactor.enrolledFactors, function (d) {
            var e = null,
                f = {};

            if (d) {
              d.uid && (f[mf] = d.uid);
              d.displayName && (f[nf] = d.displayName);
              d.enrollmentTime && (f[of] = new Date(d.enrollmentTime).toISOString());
              d.phoneNumber && (f[lf] = d.phoneNumber);

              try {
                e = new qf(f);
              } catch (g) {}

              d = e;
            } else d = null;

            d && c.push(d);
          });
          pm(this, c);
        }

        function qm(a) {
          var b = [];
          w(a.mfaInfo || [], function (c) {
            (c = pf(c)) && b.push(c);
          });
          return b;
        }

        k = om.prototype;

        k.xc = function (a) {
          pm(this, qm(a.gd));
        };

        function pm(a, b) {
          a.b = b;
          M(a, "enrolledFactors", b);
        }

        k.Qb = function () {
          return this.a.I().then(function (a) {
            return new ug(a, null);
          });
        };

        k.ec = function (a, b) {
          var c = this,
              d = this.a.a;
          return this.Qb().then(function (e) {
            return a.rb(d, e, b);
          }).then(function (e) {
            rm(c.a, e);
            return c.a.reload();
          });
        };

        k.ad = function (a) {
          var b = this,
              c = "string" === typeof a ? a : a.uid,
              d = this.a.a;
          return this.a.I().then(function (e) {
            return O(d, Hj, {
              idToken: e,
              mfaEnrollmentId: c
            });
          }).then(function (e) {
            var f = Oa(b.b, function (g) {
              return g.uid != c;
            });
            pm(b, f);
            rm(b.a, e);
            return b.a.reload().s(function (g) {
              if ("auth/user-token-expired" != g.code) throw g;
            });
          });
        };

        k.w = function () {
          return {
            multiFactor: {
              enrolledFactors: Pa(this.b, function (a) {
                return a.w();
              })
            }
          };
        };

        function sm(a, b, c) {
          this.h = a;
          this.i = b;
          this.g = c;
          this.c = 3E4;
          this.f = 96E4;
          this.b = null;
          this.a = this.c;
          if (this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!");
        }

        sm.prototype.start = function () {
          this.a = this.c;
          tm(this, !0);
        };

        function um(a, b) {
          if (b) return a.a = a.c, a.g();
          b = a.a;
          a.a *= 2;
          a.a > a.f && (a.a = a.f);
          return b;
        }

        function tm(a, b) {
          a.stop();
          a.b = Ad(um(a, b)).then(function () {
            return We();
          }).then(function () {
            return a.h();
          }).then(function () {
            tm(a, !0);
          }).s(function (c) {
            a.i(c) && tm(a, !1);
          });
        }

        sm.prototype.stop = function () {
          this.b && (this.b.cancel(), this.b = null);
        };

        function vm(a) {
          this.c = a;
          this.b = this.a = null;
        }

        vm.prototype.w = function () {
          return {
            apiKey: this.c.c,
            refreshToken: this.a,
            accessToken: this.b && this.b.toString(),
            expirationTime: wm(this)
          };
        };

        function wm(a) {
          return a.b && 1E3 * a.b.c || 0;
        }

        function xm(a, b) {
          var c = b.refreshToken;
          a.b = fg(b[zg] || "");
          a.a = c;
        }

        function ym(a, b) {
          a.b = b.b;
          a.a = b.a;
        }

        function zm(a, b) {
          return Si(a.c, b).then(function (c) {
            a.b = fg(c.access_token);
            a.a = c.refresh_token;
            return {
              accessToken: a.b.toString(),
              refreshToken: a.a
            };
          }).s(function (c) {
            "auth/user-token-expired" == c.code && (a.a = null);
            throw c;
          });
        }

        vm.prototype.getToken = function (a) {
          a = !!a;
          return this.b && !this.a ? E(new t("user-token-expired")) : a || !this.b || ua() > wm(this) - 3E4 ? this.a ? zm(this, {
            grant_type: "refresh_token",
            refresh_token: this.a
          }) : D(null) : D({
            accessToken: this.b.toString(),
            refreshToken: this.a
          });
        };

        function Am(a, b) {
          this.a = a || null;
          this.b = b || null;
          N(this, {
            lastSignInTime: Ye(b || null),
            creationTime: Ye(a || null)
          });
        }

        function Bm(a) {
          return new Am(a.a, a.b);
        }

        Am.prototype.w = function () {
          return {
            lastLoginAt: this.b,
            createdAt: this.a
          };
        };

        function Cm(a, b, c, d, e, f) {
          N(this, {
            uid: a,
            displayName: d || null,
            photoURL: e || null,
            email: c || null,
            phoneNumber: f || null,
            providerId: b
          });
        }

        function Dm(a, b, c) {
          this.G = [];
          this.l = a.apiKey;
          this.m = a.appName;
          this.o = a.authDomain || null;
          var d = firebase.SDK_VERSION ? Je(firebase.SDK_VERSION) : null;
          this.a = new Ei(this.l, Aa(Ba), d);
          a.emulatorConfig && Li(this.a, a.emulatorConfig);
          this.b = new vm(this.a);
          Em(this, b[zg]);
          xm(this.b, b);
          M(this, "refreshToken", this.b.a);
          Fm(this, c || {});
          H.call(this);
          this.P = !1;
          this.o && Me() && (this.i = Sl(this.o, this.l, this.m));
          this.R = [];
          this.f = null;
          this.u = Gm(this);
          this.$ = q(this.gb, this);
          var e = this;
          this.pa = null;

          this.Ba = function (f) {
            e.wa(f.h);
          };

          this.ba = null;

          this.za = function (f) {
            Li(e.a, f.c);
          };

          this.W = null;
          this.X = [];

          this.Aa = function (f) {
            Hm(e, f.f);
          };

          this.aa = null;
          this.N = new om(this, c);
          M(this, "multiFactor", this.N);
        }

        r(Dm, H);

        Dm.prototype.wa = function (a) {
          this.pa = a;
          Ki(this.a, a);
        };

        Dm.prototype.ka = function () {
          return this.pa;
        };

        function Im(a, b) {
          a.ba && G(a.ba, "languageCodeChanged", a.Ba);
          (a.ba = b) && jd(b, "languageCodeChanged", a.Ba);
        }

        function Jm(a, b) {
          a.W && G(a.W, "emulatorConfigChanged", a.za);
          (a.W = b) && jd(b, "emulatorConfigChanged", a.za);
        }

        function Hm(a, b) {
          a.X = b;
          Ni(a.a, firebase.SDK_VERSION ? Je(firebase.SDK_VERSION, a.X) : null);
        }

        Dm.prototype.Ga = function () {
          return Xa(this.X);
        };

        function Km(a, b) {
          a.aa && G(a.aa, "frameworkChanged", a.Aa);
          (a.aa = b) && jd(b, "frameworkChanged", a.Aa);
        }

        Dm.prototype.gb = function () {
          this.u.b && (this.u.stop(), this.u.start());
        };

        function Lm(a) {
          try {
            return firebase.app(a.m).auth();
          } catch (b) {
            throw new t("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + a.m + "'!");
          }
        }

        function Gm(a) {
          return new sm(function () {
            return a.I(!0);
          }, function (b) {
            return b && "auth/network-request-failed" == b.code ? !0 : !1;
          }, function () {
            var b = wm(a.b) - ua() - 3E5;
            return 0 < b ? b : 0;
          });
        }

        function Mm(a) {
          a.A || a.u.b || (a.u.start(), G(a, "tokenChanged", a.$), jd(a, "tokenChanged", a.$));
        }

        function Nm(a) {
          G(a, "tokenChanged", a.$);
          a.u.stop();
        }

        function Em(a, b) {
          a.ya = b;
          M(a, "_lat", b);
        }

        function Om(a, b) {
          Va(a.R, function (c) {
            return c == b;
          });
        }

        function Pm(a) {
          for (var b = [], c = 0; c < a.R.length; c++) b.push(a.R[c](a));

          return Fc(b).then(function () {
            return a;
          });
        }

        function Qm(a) {
          a.i && !a.P && (a.P = !0, Kl(a.i, a));
        }

        function Fm(a, b) {
          N(a, {
            uid: b.uid,
            displayName: b.displayName || null,
            photoURL: b.photoURL || null,
            email: b.email || null,
            emailVerified: b.emailVerified || !1,
            phoneNumber: b.phoneNumber || null,
            isAnonymous: b.isAnonymous || !1,
            tenantId: b.tenantId || null,
            metadata: new Am(b.createdAt, b.lastLoginAt),
            providerData: []
          });
          a.a.b = a.tenantId;
        }

        M(Dm.prototype, "providerId", "firebase");

        function Rm() {}

        function Sm(a) {
          return D().then(function () {
            if (a.A) throw new t("app-deleted");
          });
        }

        function Tm(a) {
          return Pa(a.providerData, function (b) {
            return b.providerId;
          });
        }

        function Um(a, b) {
          b && (Vm(a, b.providerId), a.providerData.push(b));
        }

        function Vm(a, b) {
          Va(a.providerData, function (c) {
            return c.providerId == b;
          });
        }

        function Wm(a, b, c) {
          ("uid" != b || c) && a.hasOwnProperty(b) && M(a, b, c);
        }

        function Xm(a, b) {
          a != b && (N(a, {
            uid: b.uid,
            displayName: b.displayName,
            photoURL: b.photoURL,
            email: b.email,
            emailVerified: b.emailVerified,
            phoneNumber: b.phoneNumber,
            isAnonymous: b.isAnonymous,
            tenantId: b.tenantId,
            providerData: []
          }), b.metadata ? M(a, "metadata", Bm(b.metadata)) : M(a, "metadata", new Am()), w(b.providerData, function (c) {
            Um(a, c);
          }), ym(a.b, b.b), M(a, "refreshToken", a.b.a), pm(a.N, b.N.b));
        }

        k = Dm.prototype;

        k.reload = function () {
          var a = this;
          return R(this, Sm(this).then(function () {
            return Ym(a).then(function () {
              return Pm(a);
            }).then(Rm);
          }));
        };

        function Ym(a) {
          return a.I().then(function (b) {
            var c = a.isAnonymous;
            return Zm(a, b).then(function () {
              c || Wm(a, "isAnonymous", !1);
              return b;
            });
          });
        }

        k.nc = function (a) {
          return this.I(a).then(function (b) {
            return new cm(b);
          });
        };

        k.I = function (a) {
          var b = this;
          return R(this, Sm(this).then(function () {
            return b.b.getToken(a);
          }).then(function (c) {
            if (!c) throw new t("internal-error");
            c.accessToken != b.ya && (Em(b, c.accessToken), b.dispatchEvent(new nm("tokenChanged")));
            Wm(b, "refreshToken", c.refreshToken);
            return c.accessToken;
          }));
        };

        function rm(a, b) {
          b[zg] && a.ya != b[zg] && (xm(a.b, b), a.dispatchEvent(new nm("tokenChanged")), Em(a, b[zg]), Wm(a, "refreshToken", a.b.a));
        }

        function Zm(a, b) {
          return O(a.a, Ej, {
            idToken: b
          }).then(q(a.Jc, a));
        }

        k.Jc = function (a) {
          a = a.users;
          if (!a || !a.length) throw new t("internal-error");
          a = a[0];
          Fm(this, {
            uid: a.localId,
            displayName: a.displayName,
            photoURL: a.photoUrl,
            email: a.email,
            emailVerified: !!a.emailVerified,
            phoneNumber: a.phoneNumber,
            lastLoginAt: a.lastLoginAt,
            createdAt: a.createdAt,
            tenantId: a.tenantId
          });

          for (var b = $m(a), c = 0; c < b.length; c++) Um(this, b[c]);

          Wm(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
          this.dispatchEvent(new nm("userReloaded", {
            gd: a
          }));
        };

        function $m(a) {
          return (a = a.providerUserInfo) && a.length ? Pa(a, function (b) {
            return new Cm(b.rawId, b.providerId, b.email, b.displayName, b.photoUrl, b.phoneNumber);
          }) : [];
        }

        k.Kc = function (a) {
          cf("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");
          return this.sb(a);
        };

        k.sb = function (a) {
          var b = this,
              c = null;
          return R(this, a.c(this.a, this.uid).then(function (d) {
            rm(b, d);
            c = an(b, d, "reauthenticate");
            b.f = null;
            return b.reload();
          }).then(function () {
            return c;
          }), !0);
        };

        function bn(a, b) {
          return Ym(a).then(function () {
            if (Ta(Tm(a), b)) return Pm(a).then(function () {
              throw new t("provider-already-linked");
            });
          });
        }

        k.Bc = function (a) {
          cf("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");
          return this.pb(a);
        };

        k.pb = function (a) {
          var b = this,
              c = null;
          return R(this, bn(this, a.providerId).then(function () {
            return b.I();
          }).then(function (d) {
            return a.b(b.a, d);
          }).then(function (d) {
            c = an(b, d, "link");
            return cn(b, d);
          }).then(function () {
            return c;
          }));
        };

        k.Cc = function (a, b) {
          var c = this;
          return R(this, bn(this, "phone").then(function () {
            return bm(Lm(c), a, b, q(c.pb, c));
          }));
        };

        k.Lc = function (a, b) {
          var c = this;
          return R(this, D().then(function () {
            return bm(Lm(c), a, b, q(c.sb, c));
          }), !0);
        };

        function an(a, b, c) {
          var d = mh(b);
          b = kg(b);
          return ff({
            user: a,
            credential: d,
            additionalUserInfo: b,
            operationType: c
          });
        }

        function cn(a, b) {
          rm(a, b);
          return a.reload().then(function () {
            return a;
          });
        }

        k.Ab = function (a) {
          var b = this;
          return R(this, this.I().then(function (c) {
            return b.a.Ab(c, a);
          }).then(function (c) {
            rm(b, c);
            return b.reload();
          }));
        };

        k.dd = function (a) {
          var b = this;
          return R(this, this.I().then(function (c) {
            return a.b(b.a, c);
          }).then(function (c) {
            rm(b, c);
            return b.reload();
          }));
        };

        k.Bb = function (a) {
          var b = this;
          return R(this, this.I().then(function (c) {
            return b.a.Bb(c, a);
          }).then(function (c) {
            rm(b, c);
            return b.reload();
          }));
        };

        k.Cb = function (a) {
          if (void 0 === a.displayName && void 0 === a.photoURL) return Sm(this);
          var b = this;
          return R(this, this.I().then(function (c) {
            return b.a.Cb(c, {
              displayName: a.displayName,
              photoUrl: a.photoURL
            });
          }).then(function (c) {
            rm(b, c);
            Wm(b, "displayName", c.displayName || null);
            Wm(b, "photoURL", c.photoUrl || null);
            w(b.providerData, function (d) {
              "password" === d.providerId && (M(d, "displayName", b.displayName), M(d, "photoURL", b.photoURL));
            });
            return Pm(b);
          }).then(Rm));
        };

        k.bd = function (a) {
          var b = this;
          return R(this, Ym(this).then(function (c) {
            return Ta(Tm(b), a) ? nj(b.a, c, [a]).then(function (d) {
              var e = {};
              w(d.providerUserInfo || [], function (f) {
                e[f.providerId] = !0;
              });
              w(Tm(b), function (f) {
                e[f] || Vm(b, f);
              });
              e[hh.PROVIDER_ID] || M(b, "phoneNumber", null);
              return Pm(b);
            }) : Pm(b).then(function () {
              throw new t("no-such-provider");
            });
          }));
        };

        k["delete"] = function () {
          var a = this;
          return R(this, this.I().then(function (b) {
            return O(a.a, Bj, {
              idToken: b
            });
          }).then(function () {
            a.dispatchEvent(new nm("userDeleted"));
          })).then(function () {
            for (var b = 0; b < a.G.length; b++) a.G[b].cancel("app-deleted");

            Im(a, null);
            Jm(a, null);
            Km(a, null);
            a.G = [];
            a.A = !0;
            Nm(a);
            M(a, "refreshToken", null);
            a.i && Ll(a.i, a);
          });
        };

        k.Eb = function (a, b) {
          return "linkViaPopup" == a && (this.h || null) == b && this.g || "reauthViaPopup" == a && (this.h || null) == b && this.g || "linkViaRedirect" == a && (this.ga || null) == b || "reauthViaRedirect" == a && (this.ga || null) == b ? !0 : !1;
        };

        k.ma = function (a, b, c, d) {
          "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.h || null) || (c && this.O ? this.O(c) : b && !c && this.g && this.g(b), this.c && (this.c.cancel(), this.c = null), delete this.g, delete this.O);
        };

        k.Fa = function (a, b) {
          return "linkViaPopup" == a && b == (this.h || null) ? q(this.Jb, this) : "reauthViaPopup" == a && b == (this.h || null) ? q(this.Kb, this) : "linkViaRedirect" == a && (this.ga || null) == b ? q(this.Jb, this) : "reauthViaRedirect" == a && (this.ga || null) == b ? q(this.Kb, this) : null;
        };

        k.Dc = function (a) {
          var b = this;
          return dn(this, "linkViaPopup", a, function () {
            return bn(b, a.providerId).then(function () {
              return Pm(b);
            });
          }, !1);
        };

        k.Mc = function (a) {
          return dn(this, "reauthViaPopup", a, function () {
            return D();
          }, !0);
        };

        function dn(a, b, c, d, e) {
          if (!Me()) return E(new t("operation-not-supported-in-this-environment"));
          if (a.f && !e) return E(a.f);
          var f = jg(c.providerId),
              g = Le(a.uid + ":::"),
              h = null;
          (!Oe() || De()) && a.o && c.isOAuthProvider && (h = ak(a.o, a.l, a.m, b, c, null, g, firebase.SDK_VERSION || null, null, null, a.tenantId));
          var m = ue(h, f && f.ua, f && f.ta);
          d = d().then(function () {
            en(a);
            if (!e) return a.I().then(function () {});
          }).then(function () {
            return Ol(a.i, m, b, c, g, !!h, a.tenantId);
          }).then(function () {
            return new C(function (p, v) {
              a.ma(b, null, new t("cancelled-popup-request"), a.h || null);
              a.g = p;
              a.O = v;
              a.h = g;
              a.c = Ql(a.i, a, b, m, g);
            });
          }).then(function (p) {
            m && te(m);
            return p ? ff(p) : null;
          }).s(function (p) {
            m && te(m);
            throw p;
          });
          return R(a, d, e);
        }

        k.Ec = function (a) {
          var b = this;
          return fn(this, "linkViaRedirect", a, function () {
            return bn(b, a.providerId);
          }, !1);
        };

        k.Nc = function (a) {
          return fn(this, "reauthViaRedirect", a, function () {
            return D();
          }, !0);
        };

        function fn(a, b, c, d, e) {
          if (!Me()) return E(new t("operation-not-supported-in-this-environment"));
          if (a.f && !e) return E(a.f);
          var f = null,
              g = Le(a.uid + ":::");
          d = d().then(function () {
            en(a);
            if (!e) return a.I().then(function () {});
          }).then(function () {
            a.ga = g;
            return Pm(a);
          }).then(function (h) {
            a.ha && (h = a.ha, h = h.b.set(gn, a.w(), h.a));
            return h;
          }).then(function () {
            return Pl(a.i, b, c, g, a.tenantId);
          }).s(function (h) {
            f = h;
            if (a.ha) return hn(a.ha);
            throw f;
          }).then(function () {
            if (f) throw f;
          });
          return R(a, d, e);
        }

        function en(a) {
          if (!a.i || !a.P) {
            if (a.i && !a.P) throw new t("internal-error");
            throw new t("auth-domain-config-required");
          }
        }

        k.Jb = function (a, b, c, d) {
          var e = this;
          this.c && (this.c.cancel(), this.c = null);
          var f = null;
          c = this.I().then(function (g) {
            return Dg(e.a, {
              requestUri: a,
              postBody: d,
              sessionId: b,
              idToken: g
            });
          }).then(function (g) {
            f = an(e, g, "link");
            return cn(e, g);
          }).then(function () {
            return f;
          });
          return R(this, c);
        };

        k.Kb = function (a, b, c, d) {
          var e = this;
          this.c && (this.c.cancel(), this.c = null);
          var f = null,
              g = D().then(function () {
            return yg(Eg(e.a, {
              requestUri: a,
              sessionId: b,
              postBody: d,
              tenantId: c
            }), e.uid);
          }).then(function (h) {
            f = an(e, h, "reauthenticate");
            rm(e, h);
            e.f = null;
            return e.reload();
          }).then(function () {
            return f;
          });
          return R(this, g, !0);
        };

        k.tb = function (a) {
          var b = this,
              c = null;
          return R(this, this.I().then(function (d) {
            c = d;
            return "undefined" === typeof a || kb(a) ? {} : Yf(new Of(a));
          }).then(function (d) {
            return b.a.tb(c, d);
          }).then(function (d) {
            if (b.email != d) return b.reload();
          }).then(function () {}));
        };

        k.Db = function (a, b) {
          var c = this,
              d = null;
          return R(this, this.I().then(function (e) {
            d = e;
            return "undefined" === typeof b || kb(b) ? {} : Yf(new Of(b));
          }).then(function (e) {
            return c.a.Db(d, a, e);
          }).then(function (e) {
            if (c.email != e) return c.reload();
          }).then(function () {}));
        };

        function R(a, b, c) {
          var d = jn(a, b, c);
          a.G.push(d);
          d.na(function () {
            Ua(a.G, d);
          });
          return d.s(function (e) {
            var f = null;
            e && "auth/multi-factor-auth-required" === e.code && (f = hm(e.w(), Lm(a), q(a.ic, a)));
            throw f || e;
          });
        }

        k.ic = function (a) {
          var b = null,
              c = this;
          a = yg(D(a), c.uid).then(function (d) {
            b = an(c, d, "reauthenticate");
            rm(c, d);
            c.f = null;
            return c.reload();
          }).then(function () {
            return b;
          });
          return R(this, a, !0);
        };

        function jn(a, b, c) {
          return a.f && !c ? (b.cancel(), E(a.f)) : b.s(function (d) {
            !d || "auth/user-disabled" != d.code && "auth/user-token-expired" != d.code || (a.f || a.dispatchEvent(new nm("userInvalidated")), a.f = d);
            throw d;
          });
        }

        k.toJSON = function () {
          return this.w();
        };

        k.w = function () {
          var a = {
            uid: this.uid,
            displayName: this.displayName,
            photoURL: this.photoURL,
            email: this.email,
            emailVerified: this.emailVerified,
            phoneNumber: this.phoneNumber,
            isAnonymous: this.isAnonymous,
            tenantId: this.tenantId,
            providerData: [],
            apiKey: this.l,
            appName: this.m,
            authDomain: this.o,
            stsTokenManager: this.b.w(),
            redirectEventId: this.ga || null
          };
          this.metadata && z(a, this.metadata.w());
          w(this.providerData, function (b) {
            a.providerData.push(gf(b));
          });
          z(a, this.N.w());
          return a;
        };

        function kn(a) {
          if (!a.apiKey) return null;
          var b = {
            apiKey: a.apiKey,
            authDomain: a.authDomain,
            appName: a.appName,
            emulatorConfig: a.emulatorConfig
          },
              c = {};
          if (a.stsTokenManager && a.stsTokenManager.accessToken) c[zg] = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null;else return null;
          var d = new Dm(b, c, a);
          a.providerData && w(a.providerData, function (e) {
            e && Um(d, ff(e));
          });
          a.redirectEventId && (d.ga = a.redirectEventId);
          return d;
        }

        function ln(a, b, c, d) {
          var e = new Dm(a, b);
          c && (e.ha = c);
          d && Hm(e, d);
          return e.reload().then(function () {
            return e;
          });
        }

        function mn(a, b, c, d) {
          var e = a.b,
              f = {};
          f[zg] = e.b && e.b.toString();
          f.refreshToken = e.a;
          b = new Dm(b || {
            apiKey: a.l,
            authDomain: a.o,
            appName: a.m
          }, f);
          c && (b.ha = c);
          d && Hm(b, d);
          Xm(b, a);
          return b;
        }

        ;

        function nn(a) {
          this.a = a;
          this.b = Qk();
        }

        var gn = {
          name: "redirectUser",
          D: "session"
        };

        function hn(a) {
          return Uk(a.b, gn, a.a);
        }

        function on(a, b) {
          return a.b.get(gn, a.a).then(function (c) {
            c && b && (c.authDomain = b);
            return kn(c || {});
          });
        }

        ;

        function pn(a) {
          this.a = a;
          this.b = Qk();
          this.c = null;
          this.f = qn(this);
          this.b.addListener(rn("local"), this.a, q(this.g, this));
        }

        pn.prototype.g = function () {
          var a = this,
              b = rn("local");
          sn(this, function () {
            return D().then(function () {
              return a.c && "local" != a.c.D ? a.b.get(b, a.a) : null;
            }).then(function (c) {
              if (c) return tn(a, "local").then(function () {
                a.c = b;
              });
            });
          });
        };

        function tn(a, b) {
          var c = [],
              d;

          for (d in Mk) Mk[d] !== b && c.push(Uk(a.b, rn(Mk[d]), a.a));

          c.push(Uk(a.b, un, a.a));
          return Ec(c);
        }

        function qn(a) {
          var b = rn("local"),
              c = rn("session"),
              d = rn("none");
          return Tk(a.b, b, a.a).then(function () {
            return a.b.get(c, a.a);
          }).then(function (e) {
            return e ? c : a.b.get(d, a.a).then(function (f) {
              return f ? d : a.b.get(b, a.a).then(function (g) {
                return g ? b : a.b.get(un, a.a).then(function (h) {
                  return h ? rn(h) : b;
                });
              });
            });
          }).then(function (e) {
            a.c = e;
            return tn(a, e.D);
          }).s(function () {
            a.c || (a.c = b);
          });
        }

        var un = {
          name: "persistence",
          D: "session"
        };

        function rn(a) {
          return {
            name: "authUser",
            D: a
          };
        }

        pn.prototype.wb = function (a) {
          var b = null,
              c = this;
          Nk(a);
          return sn(this, function () {
            return a != c.c.D ? c.b.get(c.c, c.a).then(function (d) {
              b = d;
              return tn(c, a);
            }).then(function () {
              c.c = rn(a);
              if (b) return c.b.set(c.c, b, c.a);
            }) : D();
          });
        };

        function vn(a) {
          return sn(a, function () {
            return a.b.set(un, a.c.D, a.a);
          });
        }

        function wn(a, b) {
          return sn(a, function () {
            return a.b.set(a.c, b.w(), a.a);
          });
        }

        function xn(a) {
          return sn(a, function () {
            return Uk(a.b, a.c, a.a);
          });
        }

        function yn(a, b, c) {
          return sn(a, function () {
            return a.b.get(a.c, a.a).then(function (d) {
              d && b && (d.authDomain = b);
              d && c && (d.emulatorConfig = c);
              return kn(d || {});
            });
          });
        }

        function sn(a, b) {
          a.f = a.f.then(b, b);
          return a.f;
        }

        ;

        function zn(a) {
          this.m = !1;
          M(this, "settings", new $l());
          M(this, "app", a);
          if (S(this).options && S(this).options.apiKey) a = firebase.SDK_VERSION ? Je(firebase.SDK_VERSION) : null, this.a = new Ei(S(this).options && S(this).options.apiKey, Aa(Ba), a);else throw new t("invalid-api-key");
          this.R = [];
          this.u = [];
          this.P = [];
          this.ac = firebase.INTERNAL.createSubscribe(q(this.yc, this));
          this.X = void 0;
          this.bc = firebase.INTERNAL.createSubscribe(q(this.zc, this));
          An(this, null);
          this.l = new pn(S(this).options.apiKey + ":" + S(this).name);
          this.G = new nn(S(this).options.apiKey + ":" + S(this).name);
          this.$ = T(this, Bn(this));
          this.i = T(this, Cn(this));
          this.ba = !1;
          this.pa = q(this.Yc, this);
          this.Ba = q(this.da, this);
          this.ya = q(this.kc, this);
          this.za = q(this.vc, this);
          this.Aa = q(this.wc, this);
          this.b = null;
          Dn(this);
          this.INTERNAL = {};
          this.INTERNAL["delete"] = q(this["delete"], this);
          this.INTERNAL.logFramework = q(this.Fc, this);
          this.A = 0;
          H.call(this);
          En(this);
          this.N = [];
          this.f = null;
        }

        r(zn, H);

        function Fn(a) {
          F.call(this, "languageCodeChanged");
          this.h = a;
        }

        r(Fn, F);

        function Gn(a) {
          F.call(this, "emulatorConfigChanged");
          this.c = a;
        }

        r(Gn, F);

        function Hn(a) {
          F.call(this, "frameworkChanged");
          this.f = a;
        }

        r(Hn, F);
        k = zn.prototype;

        k.wb = function (a) {
          a = this.l.wb(a);
          return T(this, a);
        };

        k.wa = function (a) {
          this.aa === a || this.m || (this.aa = a, Ki(this.a, this.aa), this.dispatchEvent(new Fn(this.ka())));
        };

        k.ka = function () {
          return this.aa;
        };

        k.ed = function () {
          var a = l.navigator;
          this.wa(a ? a.languages && a.languages[0] || a.language || a.userLanguage || null : null);
        };

        k.fd = function (a) {
          if (!this.f) {
            if (!/^https?:\/\//.test(a)) throw new t("argument-error", "Emulator URL must start with a valid scheme (http:// or https://).");
            In();
            this.f = {
              url: a
            };
            this.settings.hb = !0;
            Li(this.a, this.f);
            this.dispatchEvent(new Gn(this.f));
          }
        };

        function In() {
          Xe("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
          l.document && ze().then(function () {
            var a = l.document.createElement("div");
            a.innerText = "Running in emulator mode. Do not use with production credentials.";
            a.style.position = "fixed";
            a.style.width = "100%";
            a.style.backgroundColor = "#ffffff";
            a.style.border = ".1em solid #000000";
            a.style.color = "#ff0000";
            a.style.bottom = "0px";
            a.style.left = "0px";
            a.style.margin = "0px";
            a.style.zIndex = 1E4;
            a.style.textAlign = "center";
            a.classList.add("firebase-emulator-warning");
            l.document.body.appendChild(a);
          });
        }

        k.Fc = function (a) {
          this.N.push(a);
          Ni(this.a, firebase.SDK_VERSION ? Je(firebase.SDK_VERSION, this.N) : null);
          this.dispatchEvent(new Hn(this.N));
        };

        k.Ga = function () {
          return Xa(this.N);
        };

        k.xb = function (a) {
          this.W === a || this.m || (this.W = a, this.a.b = this.W);
        };

        k.S = function () {
          return this.W;
        };

        function En(a) {
          Object.defineProperty(a, "lc", {
            get: function get() {
              return this.ka();
            },
            set: function set(b) {
              this.wa(b);
            },
            enumerable: !1
          });
          a.aa = null;
          Object.defineProperty(a, "ti", {
            get: function get() {
              return this.S();
            },
            set: function set(b) {
              this.xb(b);
            },
            enumerable: !1
          });
          a.W = null;
        }

        k.toJSON = function () {
          return {
            apiKey: S(this).options.apiKey,
            authDomain: S(this).options.authDomain,
            appName: S(this).name,
            currentUser: U(this) && U(this).w()
          };
        };

        function Jn(a) {
          return a.gb || E(new t("auth-domain-config-required"));
        }

        function Dn(a) {
          var b = S(a).options.authDomain,
              c = S(a).options.apiKey;
          b && Me() && (a.gb = a.$.then(function () {
            if (!a.m) {
              a.b = Sl(b, c, S(a).name, a.f);
              Kl(a.b, a);
              U(a) && Qm(U(a));

              if (a.o) {
                Qm(a.o);
                var d = a.o;
                d.wa(a.ka());
                Im(d, a);
                d = a.o;
                Hm(d, a.N);
                Km(d, a);
                d = a.o;
                Li(d.a, a.f);
                Jm(d, a);
                a.o = null;
              }

              return a.b;
            }
          }));
        }

        k.Eb = function (a, b) {
          switch (a) {
            case "unknown":
            case "signInViaRedirect":
              return !0;

            case "signInViaPopup":
              return this.h == b && !!this.g;

            default:
              return !1;
          }
        };

        k.ma = function (a, b, c, d) {
          "signInViaPopup" == a && this.h == d && (c && this.O ? this.O(c) : b && !c && this.g && this.g(b), this.c && (this.c.cancel(), this.c = null), delete this.g, delete this.O);
        };

        k.Fa = function (a, b) {
          return "signInViaRedirect" == a || "signInViaPopup" == a && this.h == b && this.g ? q(this.hc, this) : null;
        };

        k.hc = function (a, b, c, d) {
          var e = this,
              f = {
            requestUri: a,
            postBody: d,
            sessionId: b,
            tenantId: c
          };
          this.c && (this.c.cancel(), this.c = null);
          return e.$.then(function () {
            return Kn(e, Bg(e.a, f));
          });
        };

        k.Wc = function (a) {
          if (!Me()) return E(new t("operation-not-supported-in-this-environment"));
          var b = this,
              c = jg(a.providerId),
              d = Le(),
              e = null;
          (!Oe() || De()) && S(this).options.authDomain && a.isOAuthProvider && (e = ak(S(this).options.authDomain, S(this).options.apiKey, S(this).name, "signInViaPopup", a, null, d, firebase.SDK_VERSION || null, null, null, this.S(), this.f));
          var f = ue(e, c && c.ua, c && c.ta);
          c = Jn(this).then(function (g) {
            return Ol(g, f, "signInViaPopup", a, d, !!e, b.S());
          }).then(function () {
            return new C(function (g, h) {
              b.ma("signInViaPopup", null, new t("cancelled-popup-request"), b.h);
              b.g = g;
              b.O = h;
              b.h = d;
              b.c = Ql(b.b, b, "signInViaPopup", f, d);
            });
          }).then(function (g) {
            f && te(f);
            return g ? ff(g) : null;
          }).s(function (g) {
            f && te(f);
            throw g;
          });
          return T(this, c);
        };

        k.Xc = function (a) {
          if (!Me()) return E(new t("operation-not-supported-in-this-environment"));
          var b = this,
              c = Jn(this).then(function () {
            return vn(b.l);
          }).then(function () {
            return Pl(b.b, "signInViaRedirect", a, void 0, b.S());
          });
          return T(this, c);
        };

        function Ln(a) {
          if (!Me()) return E(new t("operation-not-supported-in-this-environment"));
          var b = Jn(a).then(function () {
            return a.b.qa();
          }).then(function (c) {
            return c ? ff(c) : null;
          });
          return T(a, b);
        }

        k.qa = function () {
          var a = this;
          return Ln(this).then(function (b) {
            a.b && Vl(a.b.b);
            return b;
          }).s(function (b) {
            a.b && Vl(a.b.b);
            throw b;
          });
        };

        k.cd = function (a) {
          if (!a) return E(new t("null-user"));
          if (this.W != a.tenantId) return E(new t("tenant-id-mismatch"));
          var b = this,
              c = {};
          c.apiKey = S(this).options.apiKey;
          c.authDomain = S(this).options.authDomain;
          c.appName = S(this).name;
          var d = mn(a, c, b.G, b.Ga());
          return T(this, this.i.then(function () {
            if (S(b).options.apiKey != a.l) return d.reload();
          }).then(function () {
            if (U(b) && a.uid == U(b).uid) return Xm(U(b), a), b.da(a);
            An(b, d);
            Qm(d);
            return b.da(d);
          }).then(function () {
            Mn(b);
          }));
        };

        function Nn(a, b) {
          var c = {};
          c.apiKey = S(a).options.apiKey;
          c.authDomain = S(a).options.authDomain;
          c.appName = S(a).name;
          a.f && (c.emulatorConfig = a.f);
          return a.$.then(function () {
            return ln(c, b, a.G, a.Ga());
          }).then(function (d) {
            if (U(a) && d.uid == U(a).uid) return Xm(U(a), d), a.da(d);
            An(a, d);
            Qm(d);
            return a.da(d);
          }).then(function () {
            Mn(a);
          });
        }

        function An(a, b) {
          U(a) && (Om(U(a), a.Ba), G(U(a), "tokenChanged", a.ya), G(U(a), "userDeleted", a.za), G(U(a), "userInvalidated", a.Aa), Nm(U(a)));
          b && (b.R.push(a.Ba), jd(b, "tokenChanged", a.ya), jd(b, "userDeleted", a.za), jd(b, "userInvalidated", a.Aa), 0 < a.A && Mm(b));
          M(a, "currentUser", b);
          b && (b.wa(a.ka()), Im(b, a), Hm(b, a.N), Km(b, a), Li(b.a, a.f), Jm(b, a));
        }

        k.zb = function () {
          var a = this,
              b = this.i.then(function () {
            a.b && Vl(a.b.b);
            if (!U(a)) return D();
            An(a, null);
            return xn(a.l).then(function () {
              Mn(a);
            });
          });
          return T(this, b);
        };

        function On(a) {
          var b = on(a.G, S(a).options.authDomain).then(function (c) {
            if (a.o = c) c.ha = a.G;
            return hn(a.G);
          });
          return T(a, b);
        }

        function Bn(a) {
          var b = S(a).options.authDomain,
              c = On(a).then(function () {
            return yn(a.l, b, a.f);
          }).then(function (d) {
            return d ? (d.ha = a.G, a.o && (a.o.ga || null) == (d.ga || null) ? d : d.reload().then(function () {
              return wn(a.l, d).then(function () {
                return d;
              });
            }).s(function (e) {
              return "auth/network-request-failed" == e.code ? d : xn(a.l);
            })) : null;
          }).then(function (d) {
            An(a, d || null);
          });
          return T(a, c);
        }

        function Cn(a) {
          return a.$.then(function () {
            return Ln(a);
          }).s(function () {}).then(function () {
            if (!a.m) return a.pa();
          }).s(function () {}).then(function () {
            if (!a.m) {
              a.ba = !0;
              var b = a.l;
              b.b.addListener(rn("local"), b.a, a.pa);
            }
          });
        }

        k.Yc = function () {
          var a = this;
          return yn(this.l, S(this).options.authDomain).then(function (b) {
            if (!a.m) {
              var c;

              if (c = U(a) && b) {
                c = U(a).uid;
                var d = b.uid;
                c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? !1 : c == d;
              }

              if (c) return Xm(U(a), b), U(a).I();
              if (U(a) || b) An(a, b), b && (Qm(b), b.ha = a.G), a.b && Kl(a.b, a), Mn(a);
            }
          });
        };

        k.da = function (a) {
          return wn(this.l, a);
        };

        k.kc = function () {
          Mn(this);
          this.da(U(this));
        };

        k.vc = function () {
          this.zb();
        };

        k.wc = function () {
          this.zb();
        };

        function Kn(a, b) {
          var c = null,
              d = null;
          return T(a, b.then(function (e) {
            c = mh(e);
            d = kg(e);
            return Nn(a, e);
          }, function (e) {
            var f = null;
            e && "auth/multi-factor-auth-required" === e.code && (f = hm(e.w(), a, q(a.jc, a)));
            throw f || e;
          }).then(function () {
            return ff({
              user: U(a),
              credential: c,
              additionalUserInfo: d,
              operationType: "signIn"
            });
          }));
        }

        k.jc = function (a) {
          var b = this;
          return this.i.then(function () {
            return Kn(b, D(a));
          });
        };

        k.yc = function (a) {
          var b = this;
          this.addAuthTokenListener(function () {
            a.next(U(b));
          });
        };

        k.zc = function (a) {
          var b = this;
          Pn(this, function () {
            a.next(U(b));
          });
        };

        k.Hc = function (a, b, c) {
          var d = this;
          this.ba && Promise.resolve().then(function () {
            "function" === typeof a ? a(U(d)) : "function" === typeof a.next && a.next(U(d));
          });
          return this.ac(a, b, c);
        };

        k.Gc = function (a, b, c) {
          var d = this;
          this.ba && Promise.resolve().then(function () {
            d.X = d.getUid();
            "function" === typeof a ? a(U(d)) : "function" === typeof a.next && a.next(U(d));
          });
          return this.bc(a, b, c);
        };

        k.mc = function (a) {
          var b = this,
              c = this.i.then(function () {
            return U(b) ? U(b).I(a).then(function (d) {
              return {
                accessToken: d
              };
            }) : null;
          });
          return T(this, c);
        };

        k.Sc = function (a) {
          var b = this;
          return this.i.then(function () {
            return Kn(b, O(b.a, Gj, {
              token: a
            }));
          }).then(function (c) {
            var d = c.user;
            Wm(d, "isAnonymous", !1);
            b.da(d);
            return c;
          });
        };

        k.Tc = function (a, b) {
          var c = this;
          return this.i.then(function () {
            return Kn(c, O(c.a, Xg, {
              email: a,
              password: b
            }));
          });
        };

        k.dc = function (a, b) {
          var c = this;
          return this.i.then(function () {
            return Kn(c, O(c.a, Aj, {
              email: a,
              password: b
            }));
          });
        };

        k.Za = function (a) {
          var b = this;
          return this.i.then(function () {
            return Kn(b, a.ja(b.a));
          });
        };

        k.Rc = function (a) {
          cf("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");
          return this.Za(a);
        };

        k.yb = function () {
          var a = this;
          return this.i.then(function () {
            var b = U(a);

            if (b && b.isAnonymous) {
              var c = ff({
                providerId: null,
                isNewUser: !1
              });
              return ff({
                user: b,
                credential: null,
                additionalUserInfo: c,
                operationType: "signIn"
              });
            }

            return Kn(a, a.a.yb()).then(function (d) {
              var e = d.user;
              Wm(e, "isAnonymous", !0);
              a.da(e);
              return d;
            });
          });
        };

        function S(a) {
          return a.app;
        }

        function U(a) {
          return a.currentUser;
        }

        k.getUid = function () {
          return U(this) && U(this).uid || null;
        };

        function Qn(a) {
          return U(a) && U(a)._lat || null;
        }

        function Mn(a) {
          if (a.ba) {
            for (var b = 0; b < a.u.length; b++) if (a.u[b]) a.u[b](Qn(a));

            if (a.X !== a.getUid() && a.P.length) for (a.X = a.getUid(), b = 0; b < a.P.length; b++) if (a.P[b]) a.P[b](Qn(a));
          }
        }

        k.cc = function (a) {
          this.addAuthTokenListener(a);
          this.A++;
          0 < this.A && U(this) && Mm(U(this));
        };

        k.Oc = function (a) {
          var b = this;
          w(this.u, function (c) {
            c == a && b.A--;
          });
          0 > this.A && (this.A = 0);
          0 == this.A && U(this) && Nm(U(this));
          this.removeAuthTokenListener(a);
        };

        k.addAuthTokenListener = function (a) {
          var b = this;
          this.u.push(a);
          T(this, this.i.then(function () {
            b.m || Ta(b.u, a) && a(Qn(b));
          }));
        };

        k.removeAuthTokenListener = function (a) {
          Va(this.u, function (b) {
            return b == a;
          });
        };

        function Pn(a, b) {
          a.P.push(b);
          T(a, a.i.then(function () {
            !a.m && Ta(a.P, b) && a.X !== a.getUid() && (a.X = a.getUid(), b(Qn(a)));
          }));
        }

        k["delete"] = function () {
          this.m = !0;

          for (var a = 0; a < this.R.length; a++) this.R[a].cancel("app-deleted");

          this.R = [];
          this.l && (a = this.l, a.b.removeListener(rn("local"), a.a, this.pa));
          this.b && (Ll(this.b, this), Vl(this.b.b));
          return Promise.resolve();
        };

        function T(a, b) {
          a.R.push(b);
          b.na(function () {
            Ua(a.R, b);
          });
          return b;
        }

        k.gc = function (a) {
          return T(this, Xi(this.a, a));
        };

        k.Ac = function (a) {
          return !!bh(a);
        };

        k.vb = function (a, b) {
          var c = this;
          return T(this, D().then(function () {
            var d = new Of(b);
            if (!d.c) throw new t("argument-error", Wf + " must be true when sending sign in link to email");
            return Yf(d);
          }).then(function (d) {
            return c.a.vb(a, d);
          }).then(function () {}));
        };

        k.hd = function (a) {
          return this.Qa(a).then(function (b) {
            return b.data.email;
          });
        };

        k.mb = function (a, b) {
          return T(this, this.a.mb(a, b).then(function () {}));
        };

        k.Qa = function (a) {
          return T(this, this.a.Qa(a).then(function (b) {
            return new rf(b);
          }));
        };

        k.ib = function (a) {
          return T(this, this.a.ib(a).then(function () {}));
        };

        k.ub = function (a, b) {
          var c = this;
          return T(this, D().then(function () {
            return "undefined" === typeof b || kb(b) ? {} : Yf(new Of(b));
          }).then(function (d) {
            return c.a.ub(a, d);
          }).then(function () {}));
        };

        k.Vc = function (a, b) {
          return T(this, bm(this, a, b, q(this.Za, this)));
        };

        k.Uc = function (a, b) {
          var c = this;
          return T(this, D().then(function () {
            var d = b || me(),
                e = ah(a, d);
            d = bh(d);
            if (!d) throw new t("argument-error", "Invalid email link!");
            if (d.tenantId !== c.S()) throw new t("tenant-id-mismatch");
            return c.Za(e);
          }));
        };

        function Rn() {}

        Rn.prototype.render = function () {};

        Rn.prototype.reset = function () {};

        Rn.prototype.getResponse = function () {};

        Rn.prototype.execute = function () {};

        function Sn() {
          this.a = {};
          this.b = 1E12;
        }

        var Tn = null;

        Sn.prototype.render = function (a, b) {
          this.a[this.b.toString()] = new Un(a, b);
          return this.b++;
        };

        Sn.prototype.reset = function (a) {
          var b = Vn(this, a);
          a = Wn(a);
          b && a && (b["delete"](), delete this.a[a]);
        };

        Sn.prototype.getResponse = function (a) {
          return (a = Vn(this, a)) ? a.getResponse() : null;
        };

        Sn.prototype.execute = function (a) {
          (a = Vn(this, a)) && a.execute();
        };

        function Vn(a, b) {
          return (b = Wn(b)) ? a.a[b] || null : null;
        }

        function Wn(a) {
          return (a = "undefined" === typeof a ? 1E12 : a) ? a.toString() : null;
        }

        function Un(a, b) {
          this.g = !1;
          this.c = b;
          this.a = this.b = null;
          this.h = "invisible" !== this.c.size;
          this.f = fc(a);
          var c = this;

          this.i = function () {
            c.execute();
          };

          this.h ? this.execute() : jd(this.f, "click", this.i);
        }

        Un.prototype.getResponse = function () {
          Xn(this);
          return this.b;
        };

        Un.prototype.execute = function () {
          Xn(this);
          var a = this;
          this.a || (this.a = setTimeout(function () {
            a.b = He();
            var b = a.c.callback,
                c = a.c["expired-callback"];
            if (b) try {
              b(a.b);
            } catch (d) {}
            a.a = setTimeout(function () {
              a.a = null;
              a.b = null;
              if (c) try {
                c();
              } catch (d) {}
              a.h && a.execute();
            }, 6E4);
          }, 500));
        };

        Un.prototype["delete"] = function () {
          Xn(this);
          this.g = !0;
          clearTimeout(this.a);
          this.a = null;
          G(this.f, "click", this.i);
        };

        function Xn(a) {
          if (a.g) throw Error("reCAPTCHA mock was already deleted!");
        }

        ;

        function Yn() {}

        M(Yn, "FACTOR_ID", "phone");

        function Zn() {}

        Zn.prototype.g = function () {
          Tn || (Tn = new Sn());
          return D(Tn);
        };

        Zn.prototype.c = function () {};

        var $n = null;

        function ao() {
          this.b = l.grecaptcha ? Infinity : 0;
          this.f = null;
          this.a = "__rcb" + Math.floor(1E6 * Math.random()).toString();
        }

        var bo = new ob(pb, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
            co = new Ue(3E4, 6E4);

        ao.prototype.g = function (a) {
          var b = this;
          return new C(function (c, d) {
            var e = setTimeout(function () {
              d(new t("network-request-failed"));
            }, co.get());

            if (!l.grecaptcha || a !== b.f && !b.b) {
              l[b.a] = function () {
                if (l.grecaptcha) {
                  b.f = a;
                  var g = l.grecaptcha.render;

                  l.grecaptcha.render = function (h, m) {
                    h = g(h, m);
                    b.b++;
                    return h;
                  };

                  clearTimeout(e);
                  c(l.grecaptcha);
                } else clearTimeout(e), d(new t("internal-error"));

                delete l[b.a];
              };

              var f = xb(bo, {
                onload: b.a,
                hl: a || ""
              });
              D(xi(f)).s(function () {
                clearTimeout(e);
                d(new t("internal-error", "Unable to load external reCAPTCHA dependencies!"));
              });
            } else clearTimeout(e), c(l.grecaptcha);
          });
        };

        ao.prototype.c = function () {
          this.b--;
        };

        var eo = null;

        function fo(a, b, c, d, e, f, g) {
          M(this, "type", "recaptcha");
          this.c = this.f = null;
          this.A = !1;
          this.m = b;
          this.g = null;
          g ? ($n || ($n = new Zn()), g = $n) : (eo || (eo = new ao()), g = eo);
          this.v = g;
          this.a = c || {
            theme: "light",
            type: "image"
          };
          this.h = [];
          if (this.a[go]) throw new t("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
          this.i = "invisible" === this.a[ho];
          if (!l.document) throw new t("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
          if (!fc(b) || !this.i && fc(b).hasChildNodes()) throw new t("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
          this.o = new Ei(a, f || null, e || null);

          this.u = d || function () {
            return null;
          };

          var h = this;
          this.l = [];
          var m = this.a[io];

          this.a[io] = function (v) {
            jo(h, v);
            if ("function" === typeof m) m(v);else if ("string" === typeof m) {
              var B = L(m, l);
              "function" === typeof B && B(v);
            }
          };

          var p = this.a[ko];

          this.a[ko] = function () {
            jo(h, null);
            if ("function" === typeof p) p();else if ("string" === typeof p) {
              var v = L(p, l);
              "function" === typeof v && v();
            }
          };
        }

        var io = "callback",
            ko = "expired-callback",
            go = "sitekey",
            ho = "size";

        function jo(a, b) {
          for (var c = 0; c < a.l.length; c++) try {
            a.l[c](b);
          } catch (d) {}
        }

        function lo(a, b) {
          Va(a.l, function (c) {
            return c == b;
          });
        }

        function mo(a, b) {
          a.h.push(b);
          b.na(function () {
            Ua(a.h, b);
          });
          return b;
        }

        k = fo.prototype;

        k.Ia = function () {
          var a = this;
          return this.f ? this.f : this.f = mo(this, D().then(function () {
            if (Ne() && !Ee()) return ze();
            throw new t("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
          }).then(function () {
            return a.v.g(a.u());
          }).then(function (b) {
            a.g = b;
            return O(a.o, Fj, {});
          }).then(function (b) {
            a.a[go] = b.recaptchaSiteKey;
          }).s(function (b) {
            a.f = null;
            throw b;
          }));
        };

        k.render = function () {
          no(this);
          var a = this;
          return mo(this, this.Ia().then(function () {
            if (null === a.c) {
              var b = a.m;

              if (!a.i) {
                var c = fc(b);
                b = ic("DIV");
                c.appendChild(b);
              }

              a.c = a.g.render(b, a.a);
            }

            return a.c;
          }));
        };

        k.verify = function () {
          no(this);
          var a = this;
          return mo(this, this.render().then(function (b) {
            return new C(function (c) {
              var d = a.g.getResponse(b);
              if (d) c(d);else {
                var e = function e(f) {
                  f && (lo(a, e), c(f));
                };

                a.l.push(e);
                a.i && a.g.execute(a.c);
              }
            });
          }));
        };

        k.reset = function () {
          no(this);
          null !== this.c && this.g.reset(this.c);
        };

        function no(a) {
          if (a.A) throw new t("internal-error", "RecaptchaVerifier instance has been destroyed.");
        }

        k.clear = function () {
          no(this);
          this.A = !0;
          this.v.c();

          for (var a = 0; a < this.h.length; a++) this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");

          if (!this.i) {
            a = fc(this.m);

            for (var b; b = a.firstChild;) a.removeChild(b);
          }
        };

        function oo(a, b, c) {
          var d = !1;

          try {
            this.b = c || firebase.app();
          } catch (g) {
            throw new t("argument-error", "No firebase.app.App instance is currently initialized.");
          }

          if (this.b.options && this.b.options.apiKey) c = this.b.options.apiKey;else throw new t("invalid-api-key");
          var e = this,
              f = null;

          try {
            f = this.b.auth().Ga();
          } catch (g) {}

          try {
            d = this.b.auth().settings.appVerificationDisabledForTesting;
          } catch (g) {}

          f = firebase.SDK_VERSION ? Je(firebase.SDK_VERSION, f) : null;
          fo.call(this, c, a, b, function () {
            try {
              var g = e.b.auth().ka();
            } catch (h) {
              g = null;
            }

            return g;
          }, f, Aa(Ba), d);
        }

        r(oo, fo);

        function po(a, b, c, d) {
          a: {
            c = Array.prototype.slice.call(c);
            var e = 0;

            for (var f = !1, g = 0; g < b.length; g++) if (b[g].optional) f = !0;else {
              if (f) throw new t("internal-error", "Argument validator encountered a required argument after an optional argument.");
              e++;
            }

            f = b.length;
            if (c.length < e || f < c.length) d = "Expected " + (e == f ? 1 == e ? "1 argument" : e + " arguments" : e + "-" + f + " arguments") + " but got " + c.length + ".";else {
              for (e = 0; e < c.length; e++) if (f = b[e].optional && void 0 === c[e], !b[e].K(c[e]) && !f) {
                b = b[e];
                if (0 > e || e >= qo.length) throw new t("internal-error", "Argument validator received an unsupported number of arguments.");
                c = qo[e];
                d = (d ? "" : c + " argument ") + (b.name ? '"' + b.name + '" ' : "") + "must be " + b.J + ".";
                break a;
              }

              d = null;
            }
          }

          if (d) throw new t("argument-error", a + " failed: " + d);
        }

        var qo = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

        function V(a, b) {
          return {
            name: a || "",
            J: "a valid string",
            optional: !!b,
            K: function K(c) {
              return "string" === typeof c;
            }
          };
        }

        function ro(a, b) {
          return {
            name: a || "",
            J: "a boolean",
            optional: !!b,
            K: function K(c) {
              return "boolean" === typeof c;
            }
          };
        }

        function W(a, b) {
          return {
            name: a || "",
            J: "a valid object",
            optional: !!b,
            K: n
          };
        }

        function so(a, b) {
          return {
            name: a || "",
            J: "a function",
            optional: !!b,
            K: function K(c) {
              return "function" === typeof c;
            }
          };
        }

        function to(a, b) {
          return {
            name: a || "",
            J: "null",
            optional: !!b,
            K: function K(c) {
              return null === c;
            }
          };
        }

        function uo() {
          return {
            name: "",
            J: "an HTML element",
            optional: !1,
            K: function K(a) {
              return !!(a && a instanceof Element);
            }
          };
        }

        function vo() {
          return {
            name: "auth",
            J: "an instance of Firebase Auth",
            optional: !0,
            K: function K(a) {
              return !!(a && a instanceof zn);
            }
          };
        }

        function wo() {
          return {
            name: "app",
            J: "an instance of Firebase App",
            optional: !0,
            K: function K(a) {
              return !!(a && a instanceof firebase.app.App);
            }
          };
        }

        function xo(a) {
          return {
            name: a ? a + "Credential" : "credential",
            J: a ? "a valid " + a + " credential" : "a valid credential",
            optional: !1,
            K: function K(b) {
              if (!b) return !1;
              var c = !a || b.providerId === a;
              return !(!b.ja || !c);
            }
          };
        }

        function yo() {
          return {
            name: "multiFactorAssertion",
            J: "a valid multiFactorAssertion",
            optional: !1,
            K: function K(a) {
              return a ? !!a.rb : !1;
            }
          };
        }

        function zo() {
          return {
            name: "authProvider",
            J: "a valid Auth provider",
            optional: !1,
            K: function K(a) {
              return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
            }
          };
        }

        function Ao(a, b) {
          return n(a) && "string" === typeof a.type && a.type === b && "function" === typeof a.Ha;
        }

        function Bo(a) {
          return n(a) && "string" === typeof a.uid;
        }

        function Co() {
          return {
            name: "applicationVerifier",
            J: "an implementation of firebase.auth.ApplicationVerifier",
            optional: !1,
            K: function K(a) {
              return !(!a || "string" !== typeof a.type || "function" !== typeof a.verify);
            }
          };
        }

        function X(a, b, c, d) {
          return {
            name: c || "",
            J: a.J + " or " + b.J,
            optional: !!d,
            K: function K(e) {
              return a.K(e) || b.K(e);
            }
          };
        }

        ;

        function Y(a, b) {
          for (var c in b) {
            var d = b[c].name;
            a[d] = Do(d, a[c], b[c].j);
          }
        }

        function Eo(a, b) {
          for (var c in b) {
            var d = b[c].name;
            d !== c && Object.defineProperty(a, d, {
              get: ta(function (e) {
                return this[e];
              }, c),
              set: ta(function (e, f, g, h) {
                po(e, [g], [h], !0);
                this[f] = h;
              }, d, c, b[c].jb),
              enumerable: !0
            });
          }
        }

        function Z(a, b, c, d) {
          a[b] = Do(b, c, d);
        }

        function Do(a, b, c) {
          function d() {
            var g = Array.prototype.slice.call(arguments);
            po(e, c, g);
            return b.apply(this, g);
          }

          if (!c) return b;
          var e = Fo(a),
              f;

          for (f in b) d[f] = b[f];

          for (f in b.prototype) d.prototype[f] = b.prototype[f];

          return d;
        }

        function Fo(a) {
          a = a.split(".");
          return a[a.length - 1];
        }

        ;
        Y(zn.prototype, {
          ib: {
            name: "applyActionCode",
            j: [V("code")]
          },
          Qa: {
            name: "checkActionCode",
            j: [V("code")]
          },
          mb: {
            name: "confirmPasswordReset",
            j: [V("code"), V("newPassword")]
          },
          dc: {
            name: "createUserWithEmailAndPassword",
            j: [V("email"), V("password")]
          },
          gc: {
            name: "fetchSignInMethodsForEmail",
            j: [V("email")]
          },
          qa: {
            name: "getRedirectResult",
            j: []
          },
          Ac: {
            name: "isSignInWithEmailLink",
            j: [V("emailLink")]
          },
          Gc: {
            name: "onAuthStateChanged",
            j: [X(W(), so(), "nextOrObserver"), so("opt_error", !0), so("opt_completed", !0)]
          },
          Hc: {
            name: "onIdTokenChanged",
            j: [X(W(), so(), "nextOrObserver"), so("opt_error", !0), so("opt_completed", !0)]
          },
          ub: {
            name: "sendPasswordResetEmail",
            j: [V("email"), X(W("opt_actionCodeSettings", !0), to(null, !0), "opt_actionCodeSettings", !0)]
          },
          vb: {
            name: "sendSignInLinkToEmail",
            j: [V("email"), W("actionCodeSettings")]
          },
          wb: {
            name: "setPersistence",
            j: [V("persistence")]
          },
          Rc: {
            name: "signInAndRetrieveDataWithCredential",
            j: [xo()]
          },
          yb: {
            name: "signInAnonymously",
            j: []
          },
          Za: {
            name: "signInWithCredential",
            j: [xo()]
          },
          Sc: {
            name: "signInWithCustomToken",
            j: [V("token")]
          },
          Tc: {
            name: "signInWithEmailAndPassword",
            j: [V("email"), V("password")]
          },
          Uc: {
            name: "signInWithEmailLink",
            j: [V("email"), V("emailLink", !0)]
          },
          Vc: {
            name: "signInWithPhoneNumber",
            j: [V("phoneNumber"), Co()]
          },
          Wc: {
            name: "signInWithPopup",
            j: [zo()]
          },
          Xc: {
            name: "signInWithRedirect",
            j: [zo()]
          },
          cd: {
            name: "updateCurrentUser",
            j: [X(function (a) {
              return {
                name: "user",
                J: "an instance of Firebase User",
                optional: !!a,
                K: function K(b) {
                  return !!(b && b instanceof Dm);
                }
              };
            }(), to(), "user")]
          },
          zb: {
            name: "signOut",
            j: []
          },
          toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
          },
          ed: {
            name: "useDeviceLanguage",
            j: []
          },
          fd: {
            name: "useEmulator",
            j: [V("url")]
          },
          hd: {
            name: "verifyPasswordResetCode",
            j: [V("code")]
          }
        });
        Eo(zn.prototype, {
          lc: {
            name: "languageCode",
            jb: X(V(), to(), "languageCode")
          },
          ti: {
            name: "tenantId",
            jb: X(V(), to(), "tenantId")
          }
        });
        zn.Persistence = Mk;
        zn.Persistence.LOCAL = "local";
        zn.Persistence.SESSION = "session";
        zn.Persistence.NONE = "none";
        Y(Dm.prototype, {
          "delete": {
            name: "delete",
            j: []
          },
          nc: {
            name: "getIdTokenResult",
            j: [ro("opt_forceRefresh", !0)]
          },
          I: {
            name: "getIdToken",
            j: [ro("opt_forceRefresh", !0)]
          },
          Bc: {
            name: "linkAndRetrieveDataWithCredential",
            j: [xo()]
          },
          pb: {
            name: "linkWithCredential",
            j: [xo()]
          },
          Cc: {
            name: "linkWithPhoneNumber",
            j: [V("phoneNumber"), Co()]
          },
          Dc: {
            name: "linkWithPopup",
            j: [zo()]
          },
          Ec: {
            name: "linkWithRedirect",
            j: [zo()]
          },
          Kc: {
            name: "reauthenticateAndRetrieveDataWithCredential",
            j: [xo()]
          },
          sb: {
            name: "reauthenticateWithCredential",
            j: [xo()]
          },
          Lc: {
            name: "reauthenticateWithPhoneNumber",
            j: [V("phoneNumber"), Co()]
          },
          Mc: {
            name: "reauthenticateWithPopup",
            j: [zo()]
          },
          Nc: {
            name: "reauthenticateWithRedirect",
            j: [zo()]
          },
          reload: {
            name: "reload",
            j: []
          },
          tb: {
            name: "sendEmailVerification",
            j: [X(W("opt_actionCodeSettings", !0), to(null, !0), "opt_actionCodeSettings", !0)]
          },
          toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
          },
          bd: {
            name: "unlink",
            j: [V("provider")]
          },
          Ab: {
            name: "updateEmail",
            j: [V("email")]
          },
          Bb: {
            name: "updatePassword",
            j: [V("password")]
          },
          dd: {
            name: "updatePhoneNumber",
            j: [xo("phone")]
          },
          Cb: {
            name: "updateProfile",
            j: [W("profile")]
          },
          Db: {
            name: "verifyBeforeUpdateEmail",
            j: [V("email"), X(W("opt_actionCodeSettings", !0), to(null, !0), "opt_actionCodeSettings", !0)]
          }
        });
        Y(Sn.prototype, {
          execute: {
            name: "execute"
          },
          render: {
            name: "render"
          },
          reset: {
            name: "reset"
          },
          getResponse: {
            name: "getResponse"
          }
        });
        Y(Rn.prototype, {
          execute: {
            name: "execute"
          },
          render: {
            name: "render"
          },
          reset: {
            name: "reset"
          },
          getResponse: {
            name: "getResponse"
          }
        });
        Y(C.prototype, {
          na: {
            name: "finally"
          },
          s: {
            name: "catch"
          },
          then: {
            name: "then"
          }
        });
        Eo($l.prototype, {
          appVerificationDisabled: {
            name: "appVerificationDisabledForTesting",
            jb: ro("appVerificationDisabledForTesting")
          }
        });
        Y(am.prototype, {
          confirm: {
            name: "confirm",
            j: [V("verificationCode")]
          }
        });
        Z(xg, "fromJSON", function (a) {
          a = "string" === typeof a ? JSON.parse(a) : a;

          for (var b, c = [Ig, $g, gh, Fg], d = 0; d < c.length; d++) if (b = c[d](a)) return b;

          return null;
        }, [X(V(), W(), "json")]);
        Z(Vg, "credential", function (a, b) {
          return new Ug(a, b);
        }, [V("email"), V("password")]);
        Y(Ug.prototype, {
          w: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Y(Mg.prototype, {
          Ca: {
            name: "addScope",
            j: [V("scope")]
          },
          Ka: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
          }
        });
        Z(Mg, "credential", Ng, [X(V(), W(), "token")]);
        Z(Vg, "credentialWithLink", ah, [V("email"), V("emailLink")]);
        Y(Og.prototype, {
          Ca: {
            name: "addScope",
            j: [V("scope")]
          },
          Ka: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
          }
        });
        Z(Og, "credential", Pg, [X(V(), W(), "token")]);
        Y(Qg.prototype, {
          Ca: {
            name: "addScope",
            j: [V("scope")]
          },
          Ka: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
          }
        });
        Z(Qg, "credential", Rg, [X(V(), X(W(), to()), "idToken"), X(V(), to(), "accessToken", !0)]);
        Y(Sg.prototype, {
          Ka: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
          }
        });
        Z(Sg, "credential", Tg, [X(V(), W(), "token"), V("secret", !0)]);
        Y(Lg.prototype, {
          Ca: {
            name: "addScope",
            j: [V("scope")]
          },
          credential: {
            name: "credential",
            j: [X(V(), X(W(), to()), "optionsOrIdToken"), X(V(), to(), "accessToken", !0)]
          },
          Ka: {
            name: "setCustomParameters",
            j: [W("customOAuthParameters")]
          }
        });
        Y(Gg.prototype, {
          w: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Y(Ag.prototype, {
          w: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Z(hh, "credential", lh, [V("verificationId"), V("verificationCode")]);
        Y(hh.prototype, {
          eb: {
            name: "verifyPhoneNumber",
            j: [X(V(), function (a, b) {
              return {
                name: a || "phoneInfoOptions",
                J: "valid phone info options",
                optional: !!b,
                K: function K(c) {
                  return c ? c.session && c.phoneNumber ? Ao(c.session, vg) && "string" === typeof c.phoneNumber : c.session && c.multiFactorHint ? Ao(c.session, wg) && Bo(c.multiFactorHint) : c.session && c.multiFactorUid ? Ao(c.session, wg) && "string" === typeof c.multiFactorUid : c.phoneNumber ? "string" === typeof c.phoneNumber : !1 : !1;
                }
              };
            }(), "phoneInfoOptions"), Co()]
          }
        });
        Y(ch.prototype, {
          w: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Y(t.prototype, {
          toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Y(uh.prototype, {
          toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Y(th.prototype, {
          toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Y(gm.prototype, {
          toJSON: {
            name: "toJSON",
            j: [V(null, !0)]
          }
        });
        Y(dm.prototype, {
          Qc: {
            name: "resolveSignIn",
            j: [yo()]
          }
        });
        Y(om.prototype, {
          Qb: {
            name: "getSession",
            j: []
          },
          ec: {
            name: "enroll",
            j: [yo(), V("displayName", !0)]
          },
          ad: {
            name: "unenroll",
            j: [X({
              name: "multiFactorInfo",
              J: "a valid multiFactorInfo",
              optional: !1,
              K: Bo
            }, V(), "multiFactorInfoIdentifier")]
          }
        });
        Y(oo.prototype, {
          clear: {
            name: "clear",
            j: []
          },
          render: {
            name: "render",
            j: []
          },
          verify: {
            name: "verify",
            j: []
          }
        });
        Z(Ff, "parseLink", Nf, [V("link")]);
        Z(Yn, "assertion", function (a) {
          return new mm(a);
        }, [xo("phone")]);

        (function () {
          if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerComponent) {
            var a = {
              ActionCodeInfo: {
                Operation: {
                  EMAIL_SIGNIN: wf,
                  PASSWORD_RESET: "PASSWORD_RESET",
                  RECOVER_EMAIL: "RECOVER_EMAIL",
                  REVERT_SECOND_FACTOR_ADDITION: yf,
                  VERIFY_AND_CHANGE_EMAIL: xf,
                  VERIFY_EMAIL: "VERIFY_EMAIL"
                }
              },
              Auth: zn,
              AuthCredential: xg,
              Error: t
            };
            Z(a, "EmailAuthProvider", Vg, []);
            Z(a, "FacebookAuthProvider", Mg, []);
            Z(a, "GithubAuthProvider", Og, []);
            Z(a, "GoogleAuthProvider", Qg, []);
            Z(a, "TwitterAuthProvider", Sg, []);
            Z(a, "OAuthProvider", Lg, [V("providerId")]);
            Z(a, "SAMLAuthProvider", Kg, [V("providerId")]);
            Z(a, "PhoneAuthProvider", hh, [vo()]);
            Z(a, "RecaptchaVerifier", oo, [X(V(), uo(), "recaptchaContainer"), W("recaptchaParameters", !0), wo()]);
            Z(a, "ActionCodeURL", Ff, []);
            Z(a, "PhoneMultiFactorGenerator", Yn, []);
            firebase.INTERNAL.registerComponent({
              name: "auth",
              instanceFactory: function instanceFactory(b) {
                b = b.getProvider("app").getImmediate();
                return new zn(b);
              },
              multipleInstances: !1,
              serviceProps: a,
              instantiationMode: "LAZY",
              type: "PUBLIC"
            });
            firebase.INTERNAL.registerComponent({
              name: "auth-internal",
              instanceFactory: function instanceFactory(b) {
                b = b.getProvider("auth").getImmediate();
                return {
                  getUid: q(b.getUid, b),
                  getToken: q(b.mc, b),
                  addAuthTokenListener: q(b.cc, b),
                  removeAuthTokenListener: q(b.Oc, b)
                };
              },
              multipleInstances: !1,
              instantiationMode: "LAZY",
              type: "PRIVATE"
            });
            firebase.registerVersion("@firebase/auth", "0.15.0");
            firebase.INTERNAL.extendNamespace({
              User: Dm
            });
          } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
        })();
      }).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {}); //# sourceMappingURL=auth.js.map

      /***/
    },

    /***/
    "Mu47":
    /*!*******************************************************!*\
      !*** ./src/app/help-chat/help-chat-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: HelpChatPageRoutingModule */

    /***/
    function Mu47(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpChatPageRoutingModule", function () {
        return HelpChatPageRoutingModule;
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


      var _help_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./help-chat.page */
      "Kqa9");

      var routes = [{
        path: '',
        component: _help_chat_page__WEBPACK_IMPORTED_MODULE_3__["HelpChatPage"]
      }];

      var HelpChatPageRoutingModule = /*#__PURE__*/_createClass(function HelpChatPageRoutingModule() {
        _classCallCheck(this, HelpChatPageRoutingModule);
      });

      HelpChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HelpChatPageRoutingModule);
      /***/
    },

    /***/
    "O1kn":
    /*!****************************************************************!*\
      !*** ./node_modules/@firebase/remote-config/dist/index.cjs.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function O1kn(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var firebase = __webpack_require__(
      /*! @firebase/app */
      "wj3C");

      __webpack_require__(
      /*! @firebase/installations */
      "fSjL");

      var tslib = __webpack_require__(
      /*! tslib */
      "os0x");

      var util = __webpack_require__(
      /*! @firebase/util */
      "zVF4");

      var logger = __webpack_require__(
      /*! @firebase/logger */
      "q/0M");

      var component = __webpack_require__(
      /*! @firebase/component */
      "S+S0");

      function _interopDefaultLegacy(e) {
        return e && typeof e === 'object' && 'default' in e ? e : {
          'default': e
        };
      }

      var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Implements the {@link RemoteConfigClient} abstraction with success response caching.
       *
       * <p>Comparable to the browser's Cache API for responses, but the Cache API requires a Service
       * Worker, which requires HTTPS, which would significantly complicate SDK installation. Also, the
       * Cache API doesn't support matching entries by time.
       */


      var CachingClient =
      /** @class */
      function () {
        function CachingClient(client, storage, storageCache, logger) {
          this.client = client;
          this.storage = storage;
          this.storageCache = storageCache;
          this.logger = logger;
        }
        /**
         * Returns true if the age of the cached fetched configs is less than or equal to
         * {@link Settings#minimumFetchIntervalInSeconds}.
         *
         * <p>This is comparable to passing `headers = { 'Cache-Control': max-age <maxAge> }` to the
         * native Fetch API.
         *
         * <p>Visible for testing.
         */


        CachingClient.prototype.isCachedDataFresh = function (cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis) {
          // Cache can only be fresh if it's populated.
          if (!lastSuccessfulFetchTimestampMillis) {
            this.logger.debug('Config fetch cache check. Cache unpopulated.');
            return false;
          } // Calculates age of cache entry.


          var cacheAgeMillis = Date.now() - lastSuccessfulFetchTimestampMillis;
          var isCachedDataFresh = cacheAgeMillis <= cacheMaxAgeMillis;
          this.logger.debug('Config fetch cache check.' + (" Cache age millis: " + cacheAgeMillis + ".") + (" Cache max age millis (minimumFetchIntervalMillis setting): " + cacheMaxAgeMillis + ".") + (" Is cache hit: " + isCachedDataFresh + "."));
          return isCachedDataFresh;
        };

        CachingClient.prototype.fetch = function (request) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var _a, lastSuccessfulFetchTimestampMillis, lastSuccessfulFetchResponse, response, storageOperations;

            return tslib.__generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  return [4
                  /*yield*/
                  , Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(), this.storage.getLastSuccessfulFetchResponse()])];

                case 1:
                  _a = _b.sent(), lastSuccessfulFetchTimestampMillis = _a[0], lastSuccessfulFetchResponse = _a[1]; // Exits early on cache hit.

                  if (lastSuccessfulFetchResponse && this.isCachedDataFresh(request.cacheMaxAgeMillis, lastSuccessfulFetchTimestampMillis)) {
                    return [2
                    /*return*/
                    , lastSuccessfulFetchResponse];
                  } // Deviates from pure decorator by not honoring a passed ETag since we don't have a public API
                  // that allows the caller to pass an ETag.


                  request.eTag = lastSuccessfulFetchResponse && lastSuccessfulFetchResponse.eTag;
                  return [4
                  /*yield*/
                  , this.client.fetch(request)];

                case 2:
                  response = _b.sent();
                  storageOperations = [// Uses write-through cache for consistency with synchronous public API.
                  this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];

                  if (response.status === 200) {
                    // Caches response only if it has changed, ie non-304 responses.
                    storageOperations.push(this.storage.setLastSuccessfulFetchResponse(response));
                  }

                  return [4
                  /*yield*/
                  , Promise.all(storageOperations)];

                case 3:
                  _b.sent();

                  return [2
                  /*return*/
                  , response];
              }
            });
          });
        };

        return CachingClient;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var _a;

      var ERROR_DESCRIPTION_MAP = (_a = {}, _a["registration-window"
      /* REGISTRATION_WINDOW */
      ] = 'Undefined window object. This SDK only supports usage in a browser environment.', _a["registration-project-id"
      /* REGISTRATION_PROJECT_ID */
      ] = 'Undefined project identifier. Check Firebase app initialization.', _a["registration-api-key"
      /* REGISTRATION_API_KEY */
      ] = 'Undefined API key. Check Firebase app initialization.', _a["registration-app-id"
      /* REGISTRATION_APP_ID */
      ] = 'Undefined app identifier. Check Firebase app initialization.', _a["storage-open"
      /* STORAGE_OPEN */
      ] = 'Error thrown when opening storage. Original error: {$originalErrorMessage}.', _a["storage-get"
      /* STORAGE_GET */
      ] = 'Error thrown when reading from storage. Original error: {$originalErrorMessage}.', _a["storage-set"
      /* STORAGE_SET */
      ] = 'Error thrown when writing to storage. Original error: {$originalErrorMessage}.', _a["storage-delete"
      /* STORAGE_DELETE */
      ] = 'Error thrown when deleting from storage. Original error: {$originalErrorMessage}.', _a["fetch-client-network"
      /* FETCH_NETWORK */
      ] = 'Fetch client failed to connect to a network. Check Internet connection.' + ' Original error: {$originalErrorMessage}.', _a["fetch-timeout"
      /* FETCH_TIMEOUT */
      ] = 'The config fetch request timed out. ' + ' Configure timeout using "fetchTimeoutMillis" SDK setting.', _a["fetch-throttle"
      /* FETCH_THROTTLE */
      ] = 'The config fetch request timed out while in an exponential backoff state.' + ' Configure timeout using "fetchTimeoutMillis" SDK setting.' + ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.', _a["fetch-client-parse"
      /* FETCH_PARSE */
      ] = 'Fetch client could not parse response.' + ' Original error: {$originalErrorMessage}.', _a["fetch-status"
      /* FETCH_STATUS */
      ] = 'Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.', _a);
      var ERROR_FACTORY = new util.ErrorFactory('remoteconfig'
      /* service */
      , 'Remote Config'
      /* service name */
      , ERROR_DESCRIPTION_MAP); // Note how this is like typeof/instanceof, but for ErrorCode.

      function hasErrorCode(e, errorCode) {
        return e instanceof util.FirebaseError && e.code.indexOf(errorCode) !== -1;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Attempts to get the most accurate browser language setting.
       *
       * <p>Adapted from getUserLanguage in packages/auth/src/utils.js for TypeScript.
       *
       * <p>Defers default language specification to server logic for consistency.
       *
       * @param navigatorLanguage Enables tests to override read-only {@link NavigatorLanguage}.
       */


      function getUserLanguage(navigatorLanguage) {
        if (navigatorLanguage === void 0) {
          navigatorLanguage = navigator;
        }

        return (// Most reliable, but only supported in Chrome/Firefox.
          navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
          // UI, not the language set in browser settings.
          navigatorLanguage.language // Polyfill otherwise.

        );
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Implements the Client abstraction for the Remote Config REST API.
       */


      var RestClient =
      /** @class */
      function () {
        function RestClient(firebaseInstallations, sdkVersion, namespace, projectId, apiKey, appId) {
          this.firebaseInstallations = firebaseInstallations;
          this.sdkVersion = sdkVersion;
          this.namespace = namespace;
          this.projectId = projectId;
          this.apiKey = apiKey;
          this.appId = appId;
        }
        /**
         * Fetches from the Remote Config REST API.
         *
         * @throws a {@link ErrorCode.FETCH_NETWORK} error if {@link GlobalFetch#fetch} can't
         * connect to the network.
         * @throws a {@link ErrorCode.FETCH_PARSE} error if {@link Response#json} can't parse the
         * fetch response.
         * @throws a {@link ErrorCode.FETCH_STATUS} error if the service returns an HTTP error status.
         */


        RestClient.prototype.fetch = function (request) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var _a, installationId, installationToken, urlBase, url, headers, requestBody, options, fetchPromise, timeoutPromise, response, originalError_1, errorCode, status, responseEtag, config, state, responseBody, originalError_2;

            return tslib.__generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  return [4
                  /*yield*/
                  , Promise.all([this.firebaseInstallations.getId(), this.firebaseInstallations.getToken()])];

                case 1:
                  _a = _b.sent(), installationId = _a[0], installationToken = _a[1];
                  urlBase = window.FIREBASE_REMOTE_CONFIG_URL_BASE || 'https://firebaseremoteconfig.googleapis.com';
                  url = urlBase + "/v1/projects/" + this.projectId + "/namespaces/" + this.namespace + ":fetch?key=" + this.apiKey;
                  headers = {
                    'Content-Type': 'application/json',
                    'Content-Encoding': 'gzip',
                    // Deviates from pure decorator by not passing max-age header since we don't currently have
                    // service behavior using that header.
                    'If-None-Match': request.eTag || '*'
                  };
                  requestBody = {
                    /* eslint-disable camelcase */
                    sdk_version: this.sdkVersion,
                    app_instance_id: installationId,
                    app_instance_id_token: installationToken,
                    app_id: this.appId,
                    language_code: getUserLanguage()
                    /* eslint-enable camelcase */

                  };
                  options = {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(requestBody)
                  };
                  fetchPromise = fetch(url, options);
                  timeoutPromise = new Promise(function (_resolve, reject) {
                    // Maps async event listener to Promise API.
                    request.signal.addEventListener(function () {
                      // Emulates https://heycam.github.io/webidl/#aborterror
                      var error = new Error('The operation was aborted.');
                      error.name = 'AbortError';
                      reject(error);
                    });
                  });
                  _b.label = 2;

                case 2:
                  _b.trys.push([2, 5,, 6]);

                  return [4
                  /*yield*/
                  , Promise.race([fetchPromise, timeoutPromise])];

                case 3:
                  _b.sent();

                  return [4
                  /*yield*/
                  , fetchPromise];

                case 4:
                  response = _b.sent();
                  return [3
                  /*break*/
                  , 6];

                case 5:
                  originalError_1 = _b.sent();
                  errorCode = "fetch-client-network"
                  /* FETCH_NETWORK */
                  ;

                  if (originalError_1.name === 'AbortError') {
                    errorCode = "fetch-timeout"
                    /* FETCH_TIMEOUT */
                    ;
                  }

                  throw ERROR_FACTORY.create(errorCode, {
                    originalErrorMessage: originalError_1.message
                  });

                case 6:
                  status = response.status;
                  responseEtag = response.headers.get('ETag') || undefined;
                  if (!(response.status === 200)) return [3
                  /*break*/
                  , 11];
                  responseBody = void 0;
                  _b.label = 7;

                case 7:
                  _b.trys.push([7, 9,, 10]);

                  return [4
                  /*yield*/
                  , response.json()];

                case 8:
                  responseBody = _b.sent();
                  return [3
                  /*break*/
                  , 10];

                case 9:
                  originalError_2 = _b.sent();
                  throw ERROR_FACTORY.create("fetch-client-parse"
                  /* FETCH_PARSE */
                  , {
                    originalErrorMessage: originalError_2.message
                  });

                case 10:
                  config = responseBody['entries'];
                  state = responseBody['state'];
                  _b.label = 11;

                case 11:
                  // Normalizes based on legacy state.
                  if (state === 'INSTANCE_STATE_UNSPECIFIED') {
                    status = 500;
                  } else if (state === 'NO_CHANGE') {
                    status = 304;
                  } else if (state === 'NO_TEMPLATE' || state === 'EMPTY_CONFIG') {
                    // These cases can be fixed remotely, so normalize to safe value.
                    config = {};
                  } // Normalize to exception-based control flow for non-success cases.
                  // Encapsulates HTTP specifics in this class as much as possible. Status is still the best for
                  // differentiating success states (200 from 304; the state body param is undefined in a
                  // standard 304).


                  if (status !== 304 && status !== 200) {
                    throw ERROR_FACTORY.create("fetch-status"
                    /* FETCH_STATUS */
                    , {
                      httpStatus: status
                    });
                  }

                  return [2
                  /*return*/
                  , {
                    status: status,
                    eTag: responseEtag,
                    config: config
                  }];
              }
            });
          });
        };

        return RestClient;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Shims a minimal AbortSignal.
       *
       * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
       * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
       * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
       * swapped out if/when we do.
       */


      var RemoteConfigAbortSignal =
      /** @class */
      function () {
        function RemoteConfigAbortSignal() {
          this.listeners = [];
        }

        RemoteConfigAbortSignal.prototype.addEventListener = function (listener) {
          this.listeners.push(listener);
        };

        RemoteConfigAbortSignal.prototype.abort = function () {
          this.listeners.forEach(function (listener) {
            return listener();
          });
        };

        return RemoteConfigAbortSignal;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var DEFAULT_VALUE_FOR_BOOLEAN = false;
      var DEFAULT_VALUE_FOR_STRING = '';
      var DEFAULT_VALUE_FOR_NUMBER = 0;
      var BOOLEAN_TRUTHY_VALUES = ['1', 'true', 't', 'yes', 'y', 'on'];

      var Value =
      /** @class */
      function () {
        function Value(_source, _value) {
          if (_value === void 0) {
            _value = DEFAULT_VALUE_FOR_STRING;
          }

          this._source = _source;
          this._value = _value;
        }

        Value.prototype.asString = function () {
          return this._value;
        };

        Value.prototype.asBoolean = function () {
          if (this._source === 'static') {
            return DEFAULT_VALUE_FOR_BOOLEAN;
          }

          return BOOLEAN_TRUTHY_VALUES.indexOf(this._value.toLowerCase()) >= 0;
        };

        Value.prototype.asNumber = function () {
          if (this._source === 'static') {
            return DEFAULT_VALUE_FOR_NUMBER;
          }

          var num = Number(this._value);

          if (isNaN(num)) {
            num = DEFAULT_VALUE_FOR_NUMBER;
          }

          return num;
        };

        Value.prototype.getSource = function () {
          return this._source;
        };

        return Value;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var DEFAULT_FETCH_TIMEOUT_MILLIS = 60 * 1000; // One minute

      var DEFAULT_CACHE_MAX_AGE_MILLIS = 12 * 60 * 60 * 1000; // Twelve hours.

      /**
       * Encapsulates business logic mapping network and storage dependencies to the public SDK API.
       *
       * See {@link https://github.com/FirebasePrivate/firebase-js-sdk/blob/master/packages/firebase/index.d.ts|interface documentation} for method descriptions.
       */

      var RemoteConfig =
      /** @class */
      function () {
        function RemoteConfig( // Required by FirebaseServiceFactory interface.
        app, // JS doesn't support private yet
        // (https://github.com/tc39/proposal-class-fields#private-fields), so we hint using an
        // underscore prefix.
        _client, _storageCache, _storage, _logger) {
          this.app = app;
          this._client = _client;
          this._storageCache = _storageCache;
          this._storage = _storage;
          this._logger = _logger; // Tracks completion of initialization promise.

          this._isInitializationComplete = false;
          this.settings = {
            fetchTimeoutMillis: DEFAULT_FETCH_TIMEOUT_MILLIS,
            minimumFetchIntervalMillis: DEFAULT_CACHE_MAX_AGE_MILLIS
          };
          this.defaultConfig = {};
        } // Based on packages/firestore/src/util/log.ts but not static because we need per-instance levels
        // to differentiate 2p and 3p use-cases.


        RemoteConfig.prototype.setLogLevel = function (logLevel) {
          switch (logLevel) {
            case 'debug':
              this._logger.logLevel = logger.LogLevel.DEBUG;
              break;

            case 'silent':
              this._logger.logLevel = logger.LogLevel.SILENT;
              break;

            default:
              this._logger.logLevel = logger.LogLevel.ERROR;
          }
        };

        Object.defineProperty(RemoteConfig.prototype, "fetchTimeMillis", {
          get: function get() {
            return this._storageCache.getLastSuccessfulFetchTimestampMillis() || -1;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(RemoteConfig.prototype, "lastFetchStatus", {
          get: function get() {
            return this._storageCache.getLastFetchStatus() || 'no-fetch-yet';
          },
          enumerable: false,
          configurable: true
        });

        RemoteConfig.prototype.activate = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var _a, lastSuccessfulFetchResponse, activeConfigEtag;

            return tslib.__generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  return [4
                  /*yield*/
                  , Promise.all([this._storage.getLastSuccessfulFetchResponse(), this._storage.getActiveConfigEtag()])];

                case 1:
                  _a = _b.sent(), lastSuccessfulFetchResponse = _a[0], activeConfigEtag = _a[1];

                  if (!lastSuccessfulFetchResponse || !lastSuccessfulFetchResponse.config || !lastSuccessfulFetchResponse.eTag || lastSuccessfulFetchResponse.eTag === activeConfigEtag) {
                    // Either there is no successful fetched config, or is the same as current active
                    // config.
                    return [2
                    /*return*/
                    , false];
                  }

                  return [4
                  /*yield*/
                  , Promise.all([this._storageCache.setActiveConfig(lastSuccessfulFetchResponse.config), this._storage.setActiveConfigEtag(lastSuccessfulFetchResponse.eTag)])];

                case 2:
                  _b.sent();

                  return [2
                  /*return*/
                  , true];
              }
            });
          });
        };

        RemoteConfig.prototype.ensureInitialized = function () {
          var _this = this;

          if (!this._initializePromise) {
            this._initializePromise = this._storageCache.loadFromStorage().then(function () {
              _this._isInitializationComplete = true;
            });
          }

          return this._initializePromise;
        };
        /**
         * @throws a {@link ErrorCode.FETCH_CLIENT_TIMEOUT} if the request takes longer than
         * {@link Settings.fetchTimeoutInSeconds} or
         * {@link DEFAULT_FETCH_TIMEOUT_SECONDS}.
         */


        RemoteConfig.prototype.fetch = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var abortSignal, e_1, lastFetchStatus;

            var _this = this;

            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  abortSignal = new RemoteConfigAbortSignal();
                  setTimeout(function () {
                    return tslib.__awaiter(_this, void 0, void 0, function () {
                      return tslib.__generator(this, function (_a) {
                        // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
                        abortSignal.abort();
                        return [2
                        /*return*/
                        ];
                      });
                    });
                  }, this.settings.fetchTimeoutMillis);
                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 4,, 6]);

                  return [4
                  /*yield*/
                  , this._client.fetch({
                    cacheMaxAgeMillis: this.settings.minimumFetchIntervalMillis,
                    signal: abortSignal
                  })];

                case 2:
                  _a.sent();

                  return [4
                  /*yield*/
                  , this._storageCache.setLastFetchStatus('success')];

                case 3:
                  _a.sent();

                  return [3
                  /*break*/
                  , 6];

                case 4:
                  e_1 = _a.sent();
                  lastFetchStatus = hasErrorCode(e_1, "fetch-throttle"
                  /* FETCH_THROTTLE */
                  ) ? 'throttle' : 'failure';
                  return [4
                  /*yield*/
                  , this._storageCache.setLastFetchStatus(lastFetchStatus)];

                case 5:
                  _a.sent();

                  throw e_1;

                case 6:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        RemoteConfig.prototype.fetchAndActivate = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.fetch()];

                case 1:
                  _a.sent();

                  return [2
                  /*return*/
                  , this.activate()];
              }
            });
          });
        };

        RemoteConfig.prototype.getAll = function () {
          var _this = this;

          return getAllKeys(this._storageCache.getActiveConfig(), this.defaultConfig).reduce(function (allConfigs, key) {
            allConfigs[key] = _this.getValue(key);
            return allConfigs;
          }, {});
        };

        RemoteConfig.prototype.getBoolean = function (key) {
          return this.getValue(key).asBoolean();
        };

        RemoteConfig.prototype.getNumber = function (key) {
          return this.getValue(key).asNumber();
        };

        RemoteConfig.prototype.getString = function (key) {
          return this.getValue(key).asString();
        };

        RemoteConfig.prototype.getValue = function (key) {
          if (!this._isInitializationComplete) {
            this._logger.debug("A value was requested for key \"" + key + "\" before SDK initialization completed." + ' Await on ensureInitialized if the intent was to get a previously activated value.');
          }

          var activeConfig = this._storageCache.getActiveConfig();

          if (activeConfig && activeConfig[key] !== undefined) {
            return new Value('remote', activeConfig[key]);
          } else if (this.defaultConfig && this.defaultConfig[key] !== undefined) {
            return new Value('default', String(this.defaultConfig[key]));
          }

          this._logger.debug("Returning static value for key \"" + key + "\"." + ' Define a default or remote value if this is unintentional.');

          return new Value('static');
        };

        return RemoteConfig;
      }();
      /**
       * Dedupes and returns an array of all the keys of the received objects.
       */


      function getAllKeys(obj1, obj2) {
        if (obj1 === void 0) {
          obj1 = {};
        }

        if (obj2 === void 0) {
          obj2 = {};
        }

        return Object.keys(tslib.__assign(tslib.__assign({}, obj1), obj2));
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Converts an error event associated with a {@link IDBRequest} to a {@link FirebaseError}.
       */


      function toFirebaseError(event, errorCode) {
        var originalError = event.target.error || undefined;
        return ERROR_FACTORY.create(errorCode, {
          originalErrorMessage: originalError && originalError.message
        });
      }
      /**
       * A general-purpose store keyed by app + namespace + {@link
       * ProjectNamespaceKeyFieldValue}.
       *
       * <p>The Remote Config SDK can be used with multiple app installations, and each app can interact
       * with multiple namespaces, so this store uses app (ID + name) and namespace as common parent keys
       * for a set of key-value pairs. See {@link Storage#createCompositeKey}.
       *
       * <p>Visible for testing.
       */


      var APP_NAMESPACE_STORE = 'app_namespace_store';
      var DB_NAME = 'firebase_remote_config';
      var DB_VERSION = 1; // Visible for testing.

      function openDatabase() {
        return new Promise(function (resolve, reject) {
          var request = indexedDB.open(DB_NAME, DB_VERSION);

          request.onerror = function (event) {
            reject(toFirebaseError(event, "storage-open"
            /* STORAGE_OPEN */
            ));
          };

          request.onsuccess = function (event) {
            resolve(event.target.result);
          };

          request.onupgradeneeded = function (event) {
            var db = event.target.result; // We don't use 'break' in this switch statement, the fall-through
            // behavior is what we want, because if there are multiple versions between
            // the old version and the current version, we want ALL the migrations
            // that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case

            switch (event.oldVersion) {
              case 0:
                db.createObjectStore(APP_NAMESPACE_STORE, {
                  keyPath: 'compositeKey'
                });
            }
          };
        });
      }
      /**
       * Abstracts data persistence.
       */


      var Storage =
      /** @class */
      function () {
        /**
         * @param appId enables storage segmentation by app (ID + name).
         * @param appName enables storage segmentation by app (ID + name).
         * @param namespace enables storage segmentation by namespace.
         */
        function Storage(appId, appName, namespace, openDbPromise) {
          if (openDbPromise === void 0) {
            openDbPromise = openDatabase();
          }

          this.appId = appId;
          this.appName = appName;
          this.namespace = namespace;
          this.openDbPromise = openDbPromise;
        }

        Storage.prototype.getLastFetchStatus = function () {
          return this.get('last_fetch_status');
        };

        Storage.prototype.setLastFetchStatus = function (status) {
          return this.set('last_fetch_status', status);
        }; // This is comparable to a cache entry timestamp. If we need to expire other data, we could
        // consider adding timestamp to all storage records and an optional max age arg to getters.


        Storage.prototype.getLastSuccessfulFetchTimestampMillis = function () {
          return this.get('last_successful_fetch_timestamp_millis');
        };

        Storage.prototype.setLastSuccessfulFetchTimestampMillis = function (timestamp) {
          return this.set('last_successful_fetch_timestamp_millis', timestamp);
        };

        Storage.prototype.getLastSuccessfulFetchResponse = function () {
          return this.get('last_successful_fetch_response');
        };

        Storage.prototype.setLastSuccessfulFetchResponse = function (response) {
          return this.set('last_successful_fetch_response', response);
        };

        Storage.prototype.getActiveConfig = function () {
          return this.get('active_config');
        };

        Storage.prototype.setActiveConfig = function (config) {
          return this.set('active_config', config);
        };

        Storage.prototype.getActiveConfigEtag = function () {
          return this.get('active_config_etag');
        };

        Storage.prototype.setActiveConfigEtag = function (etag) {
          return this.set('active_config_etag', etag);
        };

        Storage.prototype.getThrottleMetadata = function () {
          return this.get('throttle_metadata');
        };

        Storage.prototype.setThrottleMetadata = function (metadata) {
          return this.set('throttle_metadata', metadata);
        };

        Storage.prototype.deleteThrottleMetadata = function () {
          return this["delete"]('throttle_metadata');
        };

        Storage.prototype.get = function (key) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var db;

            var _this = this;

            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.openDbPromise];

                case 1:
                  db = _a.sent();
                  return [2
                  /*return*/
                  , new Promise(function (resolve, reject) {
                    var transaction = db.transaction([APP_NAMESPACE_STORE], 'readonly');
                    var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

                    var compositeKey = _this.createCompositeKey(key);

                    try {
                      var request = objectStore.get(compositeKey);

                      request.onerror = function (event) {
                        reject(toFirebaseError(event, "storage-get"
                        /* STORAGE_GET */
                        ));
                      };

                      request.onsuccess = function (event) {
                        var result = event.target.result;

                        if (result) {
                          resolve(result.value);
                        } else {
                          resolve(undefined);
                        }
                      };
                    } catch (e) {
                      reject(ERROR_FACTORY.create("storage-get"
                      /* STORAGE_GET */
                      , {
                        originalErrorMessage: e && e.message
                      }));
                    }
                  })];
              }
            });
          });
        };

        Storage.prototype.set = function (key, value) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var db;

            var _this = this;

            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.openDbPromise];

                case 1:
                  db = _a.sent();
                  return [2
                  /*return*/
                  , new Promise(function (resolve, reject) {
                    var transaction = db.transaction([APP_NAMESPACE_STORE], 'readwrite');
                    var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

                    var compositeKey = _this.createCompositeKey(key);

                    try {
                      var request = objectStore.put({
                        compositeKey: compositeKey,
                        value: value
                      });

                      request.onerror = function (event) {
                        reject(toFirebaseError(event, "storage-set"
                        /* STORAGE_SET */
                        ));
                      };

                      request.onsuccess = function () {
                        resolve();
                      };
                    } catch (e) {
                      reject(ERROR_FACTORY.create("storage-set"
                      /* STORAGE_SET */
                      , {
                        originalErrorMessage: e && e.message
                      }));
                    }
                  })];
              }
            });
          });
        };

        Storage.prototype["delete"] = function (key) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var db;

            var _this = this;

            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.openDbPromise];

                case 1:
                  db = _a.sent();
                  return [2
                  /*return*/
                  , new Promise(function (resolve, reject) {
                    var transaction = db.transaction([APP_NAMESPACE_STORE], 'readwrite');
                    var objectStore = transaction.objectStore(APP_NAMESPACE_STORE);

                    var compositeKey = _this.createCompositeKey(key);

                    try {
                      var request = objectStore["delete"](compositeKey);

                      request.onerror = function (event) {
                        reject(toFirebaseError(event, "storage-delete"
                        /* STORAGE_DELETE */
                        ));
                      };

                      request.onsuccess = function () {
                        resolve();
                      };
                    } catch (e) {
                      reject(ERROR_FACTORY.create("storage-delete"
                      /* STORAGE_DELETE */
                      , {
                        originalErrorMessage: e && e.message
                      }));
                    }
                  })];
              }
            });
          });
        }; // Facilitates composite key functionality (which is unsupported in IE).


        Storage.prototype.createCompositeKey = function (key) {
          return [this.appId, this.appName, this.namespace, key].join();
        };

        return Storage;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * A memory cache layer over storage to support the SDK's synchronous read requirements.
       */


      var StorageCache =
      /** @class */
      function () {
        function StorageCache(storage) {
          this.storage = storage;
        }
        /**
         * Memory-only getters
         */


        StorageCache.prototype.getLastFetchStatus = function () {
          return this.lastFetchStatus;
        };

        StorageCache.prototype.getLastSuccessfulFetchTimestampMillis = function () {
          return this.lastSuccessfulFetchTimestampMillis;
        };

        StorageCache.prototype.getActiveConfig = function () {
          return this.activeConfig;
        };
        /**
         * Read-ahead getter
         */


        StorageCache.prototype.loadFromStorage = function () {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var lastFetchStatusPromise, lastSuccessfulFetchTimestampMillisPromise, activeConfigPromise, lastFetchStatus, lastSuccessfulFetchTimestampMillis, activeConfig;
            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  lastFetchStatusPromise = this.storage.getLastFetchStatus();
                  lastSuccessfulFetchTimestampMillisPromise = this.storage.getLastSuccessfulFetchTimestampMillis();
                  activeConfigPromise = this.storage.getActiveConfig();
                  return [4
                  /*yield*/
                  , lastFetchStatusPromise];

                case 1:
                  lastFetchStatus = _a.sent();

                  if (lastFetchStatus) {
                    this.lastFetchStatus = lastFetchStatus;
                  }

                  return [4
                  /*yield*/
                  , lastSuccessfulFetchTimestampMillisPromise];

                case 2:
                  lastSuccessfulFetchTimestampMillis = _a.sent();

                  if (lastSuccessfulFetchTimestampMillis) {
                    this.lastSuccessfulFetchTimestampMillis = lastSuccessfulFetchTimestampMillis;
                  }

                  return [4
                  /*yield*/
                  , activeConfigPromise];

                case 3:
                  activeConfig = _a.sent();

                  if (activeConfig) {
                    this.activeConfig = activeConfig;
                  }

                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };
        /**
         * Write-through setters
         */


        StorageCache.prototype.setLastFetchStatus = function (status) {
          this.lastFetchStatus = status;
          return this.storage.setLastFetchStatus(status);
        };

        StorageCache.prototype.setLastSuccessfulFetchTimestampMillis = function (timestampMillis) {
          this.lastSuccessfulFetchTimestampMillis = timestampMillis;
          return this.storage.setLastSuccessfulFetchTimestampMillis(timestampMillis);
        };

        StorageCache.prototype.setActiveConfig = function (activeConfig) {
          this.activeConfig = activeConfig;
          return this.storage.setActiveConfig(activeConfig);
        };

        return StorageCache;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Supports waiting on a backoff by:
       *
       * <ul>
       *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
       *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
       *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
       *       request appear the same.</li>
       * </ul>
       *
       * <p>Visible for testing.
       */


      function setAbortableTimeout(signal, throttleEndTimeMillis) {
        return new Promise(function (resolve, reject) {
          // Derives backoff from given end time, normalizing negative numbers to zero.
          var backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
          var timeout = setTimeout(resolve, backoffMillis); // Adds listener, rather than sets onabort, because signal is a shared object.

          signal.addEventListener(function () {
            clearTimeout(timeout); // If the request completes before this timeout, the rejection has no effect.

            reject(ERROR_FACTORY.create("fetch-throttle"
            /* FETCH_THROTTLE */
            , {
              throttleEndTimeMillis: throttleEndTimeMillis
            }));
          });
        });
      }
      /**
       * Returns true if the {@link Error} indicates a fetch request may succeed later.
       */


      function isRetriableError(e) {
        if (!(e instanceof util.FirebaseError)) {
          return false;
        } // Uses string index defined by ErrorData, which FirebaseError implements.


        var httpStatus = Number(e['httpStatus']);
        return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
      }
      /**
       * Decorates a Client with retry logic.
       *
       * <p>Comparable to CachingClient, but uses backoff logic instead of cache max age and doesn't cache
       * responses (because the SDK has no use for error responses).
       */


      var RetryingClient =
      /** @class */
      function () {
        function RetryingClient(client, storage) {
          this.client = client;
          this.storage = storage;
        }

        RetryingClient.prototype.fetch = function (request) {
          return tslib.__awaiter(this, void 0, void 0, function () {
            var throttleMetadata;
            return tslib.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.storage.getThrottleMetadata()];

                case 1:
                  throttleMetadata = _a.sent() || {
                    backoffCount: 0,
                    throttleEndTimeMillis: Date.now()
                  };
                  return [2
                  /*return*/
                  , this.attemptFetch(request, throttleMetadata)];
              }
            });
          });
        };
        /**
         * A recursive helper for attempting a fetch request repeatedly.
         *
         * @throws any non-retriable errors.
         */


        RetryingClient.prototype.attemptFetch = function (request, _a) {
          var throttleEndTimeMillis = _a.throttleEndTimeMillis,
              backoffCount = _a.backoffCount;
          return tslib.__awaiter(this, void 0, void 0, function () {
            var response, e_1, throttleMetadata;
            return tslib.__generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  // Starts with a (potentially zero) timeout to support resumption from stored state.
                  // Ensures the throttle end time is honored if the last attempt timed out.
                  // Note the SDK will never make a request if the fetch timeout expires at this point.
                  return [4
                  /*yield*/
                  , setAbortableTimeout(request.signal, throttleEndTimeMillis)];

                case 1:
                  // Starts with a (potentially zero) timeout to support resumption from stored state.
                  // Ensures the throttle end time is honored if the last attempt timed out.
                  // Note the SDK will never make a request if the fetch timeout expires at this point.
                  _b.sent();

                  _b.label = 2;

                case 2:
                  _b.trys.push([2, 5,, 7]);

                  return [4
                  /*yield*/
                  , this.client.fetch(request)];

                case 3:
                  response = _b.sent(); // Note the SDK only clears throttle state if response is success or non-retriable.

                  return [4
                  /*yield*/
                  , this.storage.deleteThrottleMetadata()];

                case 4:
                  // Note the SDK only clears throttle state if response is success or non-retriable.
                  _b.sent();

                  return [2
                  /*return*/
                  , response];

                case 5:
                  e_1 = _b.sent();

                  if (!isRetriableError(e_1)) {
                    throw e_1;
                  }

                  throttleMetadata = {
                    throttleEndTimeMillis: Date.now() + util.calculateBackoffMillis(backoffCount),
                    backoffCount: backoffCount + 1
                  }; // Persists state.

                  return [4
                  /*yield*/
                  , this.storage.setThrottleMetadata(throttleMetadata)];

                case 6:
                  // Persists state.
                  _b.sent();

                  return [2
                  /*return*/
                  , this.attemptFetch(request, throttleMetadata)];

                case 7:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        return RetryingClient;
      }();

      var name = "@firebase/remote-config";
      var version = "0.1.28";
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      function registerRemoteConfig(firebaseInstance) {
        firebaseInstance.INTERNAL.registerComponent(new component.Component('remoteConfig', remoteConfigFactory, "PUBLIC"
        /* PUBLIC */
        ).setMultipleInstances(true));
        firebaseInstance.registerVersion(name, version);

        function remoteConfigFactory(container, namespace) {
          /* Dependencies */
          // getImmediate for FirebaseApp will always succeed
          var app = container.getProvider('app').getImmediate(); // The following call will always succeed because rc has `import '@firebase/installations'`

          var installations = container.getProvider('installations').getImmediate(); // Guards against the SDK being used in non-browser environments.

          if (typeof window === 'undefined') {
            throw ERROR_FACTORY.create("registration-window"
            /* REGISTRATION_WINDOW */
            );
          } // Normalizes optional inputs.


          var _a = app.options,
              projectId = _a.projectId,
              apiKey = _a.apiKey,
              appId = _a.appId;

          if (!projectId) {
            throw ERROR_FACTORY.create("registration-project-id"
            /* REGISTRATION_PROJECT_ID */
            );
          }

          if (!apiKey) {
            throw ERROR_FACTORY.create("registration-api-key"
            /* REGISTRATION_API_KEY */
            );
          }

          if (!appId) {
            throw ERROR_FACTORY.create("registration-app-id"
            /* REGISTRATION_APP_ID */
            );
          }

          namespace = namespace || 'firebase';
          var storage = new Storage(appId, app.name, namespace);
          var storageCache = new StorageCache(storage);
          var logger$1 = new logger.Logger(name); // Sets ERROR as the default log level.
          // See RemoteConfig#setLogLevel for corresponding normalization to ERROR log level.

          logger$1.logLevel = logger.LogLevel.ERROR;
          var restClient = new RestClient(installations, // Uses the JS SDK version, by which the RC package version can be deduced, if necessary.
          firebaseInstance.SDK_VERSION, namespace, projectId, apiKey, appId);
          var retryingClient = new RetryingClient(restClient, storage);
          var cachingClient = new CachingClient(retryingClient, storage, storageCache, logger$1);
          var remoteConfigInstance = new RemoteConfig(app, cachingClient, storageCache, storage, logger$1); // Starts warming cache.
          // eslint-disable-next-line @typescript-eslint/no-floating-promises

          remoteConfigInstance.ensureInitialized();
          return remoteConfigInstance;
        }
      }

      registerRemoteConfig(firebase__default['default']);
      exports.registerRemoteConfig = registerRemoteConfig; //# sourceMappingURL=index.cjs.js.map

      /***/
    },

    /***/
    "PCM+":
    /*!**************************************************************************!*\
      !*** ./src/app/image-modal-component/image-modal-component.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ImageModalComponentComponent */

    /***/
    function PCM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageModalComponentComponent", function () {
        return ImageModalComponentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_image_modal_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./image-modal-component.component.html */
      "qkPF");
      /* harmony import */


      var _image_modal_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./image-modal-component.component.scss */
      "CU0W");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ImageModalComponentComponent = /*#__PURE__*/function () {
        function ImageModalComponentComponent(modalController) {
          _classCallCheck(this, ImageModalComponentComponent);

          this.modalController = modalController;
        }

        _createClass(ImageModalComponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss();
          }
        }]);

        return ImageModalComponentComponent;
      }();

      ImageModalComponentComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      ImageModalComponentComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        imageUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ImageModalComponentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-image-modal-component",
        template: _raw_loader_image_modal_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_image_modal_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ImageModalComponentComponent);
      /***/
    },

    /***/
    "bQlE":
    /*!**************************************************************!*\
      !*** ./node_modules/@firebase/performance/dist/index.cjs.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function bQlE(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var firebase = __webpack_require__(
      /*! @firebase/app */
      "wj3C");

      __webpack_require__(
      /*! @firebase/installations */
      "fSjL");

      var tslib = __webpack_require__(
      /*! tslib */
      "os0x");

      var util = __webpack_require__(
      /*! @firebase/util */
      "zVF4");

      var logger$1 = __webpack_require__(
      /*! @firebase/logger */
      "q/0M");

      var component = __webpack_require__(
      /*! @firebase/component */
      "S+S0");

      function _interopDefaultLegacy(e) {
        return e && typeof e === 'object' && 'default' in e ? e : {
          'default': e
        };
      }

      var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

      var name = "@firebase/performance";
      var version = "0.4.2";
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var SDK_VERSION = version;
      /** The prefix for start User Timing marks used for creating Traces. */

      var TRACE_START_MARK_PREFIX = 'FB-PERF-TRACE-START';
      /** The prefix for stop User Timing marks used for creating Traces. */

      var TRACE_STOP_MARK_PREFIX = 'FB-PERF-TRACE-STOP';
      /** The prefix for User Timing measure used for creating Traces. */

      var TRACE_MEASURE_PREFIX = 'FB-PERF-TRACE-MEASURE';
      /** The prefix for out of the box page load Trace name. */

      var OOB_TRACE_PAGE_LOAD_PREFIX = '_wt_';
      var FIRST_PAINT_COUNTER_NAME = '_fp';
      var FIRST_CONTENTFUL_PAINT_COUNTER_NAME = '_fcp';
      var FIRST_INPUT_DELAY_COUNTER_NAME = '_fid';
      var CONFIG_LOCAL_STORAGE_KEY = '@firebase/performance/config';
      var CONFIG_EXPIRY_LOCAL_STORAGE_KEY = '@firebase/performance/configexpire';
      var SERVICE = 'performance';
      var SERVICE_NAME = 'Performance';
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var _a;

      var ERROR_DESCRIPTION_MAP = (_a = {}, _a["trace started"
      /* TRACE_STARTED_BEFORE */
      ] = 'Trace {$traceName} was started before.', _a["trace stopped"
      /* TRACE_STOPPED_BEFORE */
      ] = 'Trace {$traceName} is not running.', _a["nonpositive trace startTime"
      /* NONPOSITIVE_TRACE_START_TIME */
      ] = 'Trace {$traceName} startTime should be positive.', _a["nonpositive trace duration"
      /* NONPOSITIVE_TRACE_DURATION */
      ] = 'Trace {$traceName} duration should be positive.', _a["no window"
      /* NO_WINDOW */
      ] = 'Window is not available.', _a["no app id"
      /* NO_APP_ID */
      ] = 'App id is not available.', _a["no project id"
      /* NO_PROJECT_ID */
      ] = 'Project id is not available.', _a["no api key"
      /* NO_API_KEY */
      ] = 'Api key is not available.', _a["invalid cc log"
      /* INVALID_CC_LOG */
      ] = 'Attempted to queue invalid cc event', _a["FB not default"
      /* FB_NOT_DEFAULT */
      ] = 'Performance can only start when Firebase app instance is the default one.', _a["RC response not ok"
      /* RC_NOT_OK */
      ] = 'RC response is not ok', _a["invalid attribute name"
      /* INVALID_ATTRIBUTE_NAME */
      ] = 'Attribute name {$attributeName} is invalid.', _a["invalid attribute value"
      /* INVALID_ATTRIBUTE_VALUE */
      ] = 'Attribute value {$attributeValue} is invalid.', _a["invalid custom metric name"
      /* INVALID_CUSTOM_METRIC_NAME */
      ] = 'Custom metric name {$customMetricName} is invalid', _a["invalid String merger input"
      /* INVALID_STRING_MERGER_PARAMETER */
      ] = 'Input for String merger is invalid, contact support team to resolve.', _a);
      var ERROR_FACTORY = new util.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var consoleLogger = new logger$1.Logger(SERVICE_NAME);
      consoleLogger.logLevel = logger$1.LogLevel.INFO;
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var apiInstance;
      var windowInstance;
      /**
       * This class holds a reference to various browser related objects injected by
       * set methods.
       */

      var Api =
      /** @class */
      function () {
        function Api(window) {
          this.window = window;

          if (!window) {
            throw ERROR_FACTORY.create("no window"
            /* NO_WINDOW */
            );
          }

          this.performance = window.performance;
          this.PerformanceObserver = window.PerformanceObserver;
          this.windowLocation = window.location;
          this.navigator = window.navigator;
          this.document = window.document;

          if (this.navigator && this.navigator.cookieEnabled) {
            // If user blocks cookies on the browser, accessing localStorage will
            // throw an exception.
            this.localStorage = window.localStorage;
          }

          if (window.perfMetrics && window.perfMetrics.onFirstInputDelay) {
            this.onFirstInputDelay = window.perfMetrics.onFirstInputDelay;
          }
        }

        Api.prototype.getUrl = function () {
          // Do not capture the string query part of url.
          return this.windowLocation.href.split('?')[0];
        };

        Api.prototype.mark = function (name) {
          if (!this.performance || !this.performance.mark) {
            return;
          }

          this.performance.mark(name);
        };

        Api.prototype.measure = function (measureName, mark1, mark2) {
          if (!this.performance || !this.performance.measure) {
            return;
          }

          this.performance.measure(measureName, mark1, mark2);
        };

        Api.prototype.getEntriesByType = function (type) {
          if (!this.performance || !this.performance.getEntriesByType) {
            return [];
          }

          return this.performance.getEntriesByType(type);
        };

        Api.prototype.getEntriesByName = function (name) {
          if (!this.performance || !this.performance.getEntriesByName) {
            return [];
          }

          return this.performance.getEntriesByName(name);
        };

        Api.prototype.getTimeOrigin = function () {
          // Polyfill the time origin with performance.timing.navigationStart.
          return this.performance && (this.performance.timeOrigin || this.performance.timing.navigationStart);
        };

        Api.prototype.requiredApisAvailable = function () {
          if (!fetch || !Promise || !this.navigator || !this.navigator.cookieEnabled) {
            consoleLogger.info('Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.');
            return false;
          }

          if (!util.isIndexedDBAvailable()) {
            consoleLogger.info('IndexedDB is not supported by current browswer');
            return false;
          }

          return true;
        };

        Api.prototype.setupObserver = function (entryType, callback) {
          if (!this.PerformanceObserver) {
            return;
          }

          var observer = new this.PerformanceObserver(function (list) {
            for (var _i = 0, _a = list.getEntries(); _i < _a.length; _i++) {
              var entry = _a[_i]; // `entry` is a PerformanceEntry instance.

              callback(entry);
            }
          }); // Start observing the entry types you care about.

          observer.observe({
            entryTypes: [entryType]
          });
        };

        Api.getInstance = function () {
          if (apiInstance === undefined) {
            apiInstance = new Api(windowInstance);
          }

          return apiInstance;
        };

        return Api;
      }();

      function setupApi(window) {
        windowInstance = window;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function mergeStrings(part1, part2) {
        var sizeDiff = part1.length - part2.length;

        if (sizeDiff < 0 || sizeDiff > 1) {
          throw ERROR_FACTORY.create("invalid String merger input"
          /* INVALID_STRING_MERGER_PARAMETER */
          );
        }

        var resultArray = [];

        for (var i = 0; i < part1.length; i++) {
          resultArray.push(part1.charAt(i));

          if (part2.length > i) {
            resultArray.push(part2.charAt(i));
          }
        }

        return resultArray.join('');
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var settingsServiceInstance;

      var SettingsService =
      /** @class */
      function () {
        function SettingsService() {
          // The variable which controls logging of automatic traces and HTTP/S network monitoring.
          this.instrumentationEnabled = true; // The variable which controls logging of custom traces.

          this.dataCollectionEnabled = true; // Configuration flags set through remote config.

          this.loggingEnabled = false; // Sampling rate between 0 and 1.

          this.tracesSamplingRate = 1;
          this.networkRequestsSamplingRate = 1; // Address of logging service.

          this.logEndPointUrl = 'https://firebaselogging.googleapis.com/v0cc/log?format=json_proto'; // Performance event transport endpoint URL which should be compatible with proto3.
          // New Address for transport service, not configurable via Remote Config.

          this.flTransportEndpointUrl = mergeStrings('hts/frbslgigp.ogepscmv/ieo/eaylg', 'tp:/ieaeogn-agolai.o/1frlglgc/o');
          this.transportKey = mergeStrings('AzSC8r6ReiGqFMyfvgow', 'Iayx0u-XT3vksVM-pIV'); // Source type for performance event logs.

          this.logSource = 462; // Flags which control per session logging of traces and network requests.

          this.logTraceAfterSampling = false;
          this.logNetworkAfterSampling = false; // TTL of config retrieved from remote config in hours.

          this.configTimeToLive = 12;
        }

        SettingsService.prototype.getAppId = function () {
          var appId = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.appId;

          if (!appId) {
            throw ERROR_FACTORY.create("no app id"
            /* NO_APP_ID */
            );
          }

          return appId;
        };

        SettingsService.prototype.getProjectId = function () {
          var projectId = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.projectId;

          if (!projectId) {
            throw ERROR_FACTORY.create("no project id"
            /* NO_PROJECT_ID */
            );
          }

          return projectId;
        };

        SettingsService.prototype.getApiKey = function () {
          var apiKey = this.firebaseAppInstance && this.firebaseAppInstance.options && this.firebaseAppInstance.options.apiKey;

          if (!apiKey) {
            throw ERROR_FACTORY.create("no api key"
            /* NO_API_KEY */
            );
          }

          return apiKey;
        };

        SettingsService.prototype.getFlTransportFullUrl = function () {
          return this.flTransportEndpointUrl.concat('?key=', this.transportKey);
        };

        SettingsService.getInstance = function () {
          if (settingsServiceInstance === undefined) {
            settingsServiceInstance = new SettingsService();
          }

          return settingsServiceInstance;
        };

        return SettingsService;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var iid;

      function getIidPromise() {
        var iidPromise = SettingsService.getInstance().installationsService.getId(); // eslint-disable-next-line @typescript-eslint/no-floating-promises

        iidPromise.then(function (iidVal) {
          iid = iidVal;
        });
        return iidPromise;
      } // This method should be used after the iid is retrieved by getIidPromise method.


      function getIid() {
        return iid;
      }

      function getAuthTokenPromise() {
        var authTokenPromise = SettingsService.getInstance().installationsService.getToken(); // eslint-disable-next-line @typescript-eslint/no-floating-promises

        authTokenPromise.then(function (authTokenVal) {});
        return authTokenPromise;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var VisibilityState;

      (function (VisibilityState) {
        VisibilityState[VisibilityState["UNKNOWN"] = 0] = "UNKNOWN";
        VisibilityState[VisibilityState["VISIBLE"] = 1] = "VISIBLE";
        VisibilityState[VisibilityState["HIDDEN"] = 2] = "HIDDEN";
      })(VisibilityState || (VisibilityState = {}));

      var RESERVED_ATTRIBUTE_PREFIXES = ['firebase_', 'google_', 'ga_'];
      var ATTRIBUTE_FORMAT_REGEX = new RegExp('^[a-zA-Z]\\w*$');
      var MAX_ATTRIBUTE_NAME_LENGTH = 40;
      var MAX_ATTRIBUTE_VALUE_LENGTH = 100;

      function getServiceWorkerStatus() {
        var navigator = Api.getInstance().navigator;

        if ('serviceWorker' in navigator) {
          if (navigator.serviceWorker.controller) {
            return 2
            /* CONTROLLED */
            ;
          } else {
            return 3
            /* UNCONTROLLED */
            ;
          }
        } else {
          return 1
          /* UNSUPPORTED */
          ;
        }
      }

      function getVisibilityState() {
        var document = Api.getInstance().document;
        var visibilityState = document.visibilityState;

        switch (visibilityState) {
          case 'visible':
            return VisibilityState.VISIBLE;

          case 'hidden':
            return VisibilityState.HIDDEN;

          default:
            return VisibilityState.UNKNOWN;
        }
      }

      function getEffectiveConnectionType() {
        var navigator = Api.getInstance().navigator;
        var navigatorConnection = navigator.connection;
        var effectiveType = navigatorConnection && navigatorConnection.effectiveType;

        switch (effectiveType) {
          case 'slow-2g':
            return 1
            /* CONNECTION_SLOW_2G */
            ;

          case '2g':
            return 2
            /* CONNECTION_2G */
            ;

          case '3g':
            return 3
            /* CONNECTION_3G */
            ;

          case '4g':
            return 4
            /* CONNECTION_4G */
            ;

          default:
            return 0
            /* UNKNOWN */
            ;
        }
      }

      function isValidCustomAttributeName(name) {
        if (name.length === 0 || name.length > MAX_ATTRIBUTE_NAME_LENGTH) {
          return false;
        }

        var matchesReservedPrefix = RESERVED_ATTRIBUTE_PREFIXES.some(function (prefix) {
          return name.startsWith(prefix);
        });
        return !matchesReservedPrefix && !!name.match(ATTRIBUTE_FORMAT_REGEX);
      }

      function isValidCustomAttributeValue(value) {
        return value.length !== 0 && value.length <= MAX_ATTRIBUTE_VALUE_LENGTH;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var REMOTE_CONFIG_SDK_VERSION = '0.0.1'; // These values will be used if the remote config object is successfully
      // retrieved, but the template does not have these fields.

      var DEFAULT_CONFIGS = {
        loggingEnabled: true
      };
      var FIS_AUTH_PREFIX = 'FIREBASE_INSTALLATIONS_AUTH';

      function getConfig(iid) {
        var config = getStoredConfig();

        if (config) {
          processConfig(config);
          return Promise.resolve();
        }

        return getRemoteConfig(iid).then(processConfig).then(function (config) {
          return storeConfig(config);
        },
        /** Do nothing for error, use defaults set in settings service. */
        function () {});
      }

      function getStoredConfig() {
        var localStorage = Api.getInstance().localStorage;

        if (!localStorage) {
          return;
        }

        var expiryString = localStorage.getItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY);

        if (!expiryString || !configValid(expiryString)) {
          return;
        }

        var configStringified = localStorage.getItem(CONFIG_LOCAL_STORAGE_KEY);

        if (!configStringified) {
          return;
        }

        try {
          var configResponse = JSON.parse(configStringified);
          return configResponse;
        } catch (_a) {
          return;
        }
      }

      function storeConfig(config) {
        var localStorage = Api.getInstance().localStorage;

        if (!config || !localStorage) {
          return;
        }

        localStorage.setItem(CONFIG_LOCAL_STORAGE_KEY, JSON.stringify(config));
        localStorage.setItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY, String(Date.now() + SettingsService.getInstance().configTimeToLive * 60 * 60 * 1000));
      }

      var COULD_NOT_GET_CONFIG_MSG = 'Could not fetch config, will use default configs';

      function getRemoteConfig(iid) {
        // Perf needs auth token only to retrieve remote config.
        return getAuthTokenPromise().then(function (authToken) {
          var projectId = SettingsService.getInstance().getProjectId();
          var configEndPoint = "https://firebaseremoteconfig.googleapis.com/v1/projects/" + projectId + "/namespaces/fireperf:fetch?key=" + SettingsService.getInstance().getApiKey();
          var request = new Request(configEndPoint, {
            method: 'POST',
            headers: {
              Authorization: FIS_AUTH_PREFIX + " " + authToken
            },

            /* eslint-disable camelcase */
            body: JSON.stringify({
              app_instance_id: iid,
              app_instance_id_token: authToken,
              app_id: SettingsService.getInstance().getAppId(),
              app_version: SDK_VERSION,
              sdk_version: REMOTE_CONFIG_SDK_VERSION
            })
            /* eslint-enable camelcase */

          });
          return fetch(request).then(function (response) {
            if (response.ok) {
              return response.json();
            } // In case response is not ok. This will be caught by catch.


            throw ERROR_FACTORY.create("RC response not ok"
            /* RC_NOT_OK */
            );
          });
        })["catch"](function () {
          consoleLogger.info(COULD_NOT_GET_CONFIG_MSG);
          return undefined;
        });
      }
      /**
       * Processes config coming either from calling RC or from local storage.
       * This method only runs if call is successful or config in storage
       * is valid.
       */


      function processConfig(config) {
        if (!config) {
          return config;
        }

        var settingsServiceInstance = SettingsService.getInstance();
        var entries = config.entries || {};

        if (entries.fpr_enabled !== undefined) {
          // TODO: Change the assignment of loggingEnabled once the received type is
          // known.
          settingsServiceInstance.loggingEnabled = String(entries.fpr_enabled) === 'true';
        } else {
          // Config retrieved successfully, but there is no fpr_enabled in template.
          // Use secondary configs value.
          settingsServiceInstance.loggingEnabled = DEFAULT_CONFIGS.loggingEnabled;
        }

        if (entries.fpr_log_source) {
          settingsServiceInstance.logSource = Number(entries.fpr_log_source);
        }

        if (entries.fpr_log_endpoint_url) {
          settingsServiceInstance.logEndPointUrl = entries.fpr_log_endpoint_url;
        } // Key from Remote Config has to be non-empty string, otherwsie use local value.


        if (entries.fpr_log_transport_key) {
          settingsServiceInstance.transportKey = entries.fpr_log_transport_key;
        }

        if (entries.fpr_vc_network_request_sampling_rate !== undefined) {
          settingsServiceInstance.networkRequestsSamplingRate = Number(entries.fpr_vc_network_request_sampling_rate);
        }

        if (entries.fpr_vc_trace_sampling_rate !== undefined) {
          settingsServiceInstance.tracesSamplingRate = Number(entries.fpr_vc_trace_sampling_rate);
        } // Set the per session trace and network logging flags.


        settingsServiceInstance.logTraceAfterSampling = shouldLogAfterSampling(settingsServiceInstance.tracesSamplingRate);
        settingsServiceInstance.logNetworkAfterSampling = shouldLogAfterSampling(settingsServiceInstance.networkRequestsSamplingRate);
        return config;
      }

      function configValid(expiry) {
        return Number(expiry) > Date.now();
      }

      function shouldLogAfterSampling(samplingRate) {
        return Math.random() <= samplingRate;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var initializationStatus = 1
      /* notInitialized */
      ;
      var initializationPromise;

      function getInitializationPromise() {
        initializationStatus = 2
        /* initializationPending */
        ;
        initializationPromise = initializationPromise || initializePerf();
        return initializationPromise;
      }

      function isPerfInitialized() {
        return initializationStatus === 3
        /* initialized */
        ;
      }

      function initializePerf() {
        return getDocumentReadyComplete().then(function () {
          return getIidPromise();
        }).then(function (iid) {
          return getConfig(iid);
        }).then(function () {
          return changeInitializationStatus();
        }, function () {
          return changeInitializationStatus();
        });
      }
      /**
       * Returns a promise which resolves whenever the document readystate is complete or
       * immediately if it is called after page load complete.
       */


      function getDocumentReadyComplete() {
        var document = Api.getInstance().document;
        return new Promise(function (resolve) {
          if (document && document.readyState !== 'complete') {
            var handler_1 = function handler_1() {
              if (document.readyState === 'complete') {
                document.removeEventListener('readystatechange', handler_1);
                resolve();
              }
            };

            document.addEventListener('readystatechange', handler_1);
          } else {
            resolve();
          }
        });
      }

      function changeInitializationStatus() {
        initializationStatus = 3
        /* initialized */
        ;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var DEFAULT_SEND_INTERVAL_MS = 10 * 1000;
      var INITIAL_SEND_TIME_DELAY_MS = 5.5 * 1000; // If end point does not work, the call will be tried for these many times.

      var DEFAULT_REMAINING_TRIES = 3;
      var remainingTries = DEFAULT_REMAINING_TRIES;
      /* eslint-enable camelcase */

      var queue = [];
      var isTransportSetup = false;

      function setupTransportService() {
        if (!isTransportSetup) {
          processQueue(INITIAL_SEND_TIME_DELAY_MS);
          isTransportSetup = true;
        }
      }

      function processQueue(timeOffset) {
        setTimeout(function () {
          // If there is no remainingTries left, stop retrying.
          if (remainingTries === 0) {
            return;
          } // If there are no events to process, wait for DEFAULT_SEND_INTERVAL_MS and try again.


          if (!queue.length) {
            return processQueue(DEFAULT_SEND_INTERVAL_MS);
          }

          dispatchQueueEvents();
        }, timeOffset);
      }

      function dispatchQueueEvents() {
        // Capture a snapshot of the queue and empty the "official queue".
        var staged = tslib.__spreadArrays(queue);

        queue = [];
        /* eslint-disable camelcase */
        // We will pass the JSON serialized event to the backend.

        var log_event = staged.map(function (evt) {
          return {
            source_extension_json_proto3: evt.message,
            event_time_ms: String(evt.eventTime)
          };
        });
        var data = {
          request_time_ms: String(Date.now()),
          client_info: {
            client_type: 1,
            js_client_info: {}
          },
          log_source: SettingsService.getInstance().logSource,
          log_event: log_event
        };
        /* eslint-enable camelcase */

        sendEventsToFl(data, staged)["catch"](function () {
          // If the request fails for some reason, add the events that were attempted
          // back to the primary queue to retry later.
          queue = tslib.__spreadArrays(staged, queue);
          remainingTries--;
          consoleLogger.info("Tries left: " + remainingTries + ".");
          processQueue(DEFAULT_SEND_INTERVAL_MS);
        });
      }

      function sendEventsToFl(data, staged) {
        return postToFlEndpoint(data).then(function (res) {
          if (!res.ok) {
            consoleLogger.info('Call to Firebase backend failed.');
          }

          return res.json();
        }).then(function (res) {
          // Find the next call wait time from the response.
          var transportWait = Number(res.nextRequestWaitMillis);
          var requestOffset = DEFAULT_SEND_INTERVAL_MS;

          if (!isNaN(transportWait)) {
            requestOffset = Math.max(transportWait, requestOffset);
          } // Delete request if response include RESPONSE_ACTION_UNKNOWN or DELETE_REQUEST action.
          // Otherwise, retry request using normal scheduling if response include RETRY_REQUEST_LATER.


          var logResponseDetails = res.logResponseDetails;

          if (Array.isArray(logResponseDetails) && logResponseDetails.length > 0 && logResponseDetails[0].responseAction === 'RETRY_REQUEST_LATER') {
            queue = tslib.__spreadArrays(staged, queue);
            consoleLogger.info("Retry transport request later.");
          }

          remainingTries = DEFAULT_REMAINING_TRIES; // Schedule the next process.

          processQueue(requestOffset);
        });
      }

      function postToFlEndpoint(data) {
        var flTransportFullUrl = SettingsService.getInstance().getFlTransportFullUrl();
        return fetch(flTransportFullUrl, {
          method: 'POST',
          body: JSON.stringify(data)
        });
      }

      function addToQueue(evt) {
        if (!evt.eventTime || !evt.message) {
          throw ERROR_FACTORY.create("invalid cc log"
          /* INVALID_CC_LOG */
          );
        } // Add the new event to the queue.


        queue = tslib.__spreadArrays(queue, [evt]);
      }
      /** Log handler for cc service to send the performance logs to the server. */


      function transportHandler( // eslint-disable-next-line @typescript-eslint/no-explicit-any
      serializer) {
        return function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          var message = serializer.apply(void 0, args);
          addToQueue({
            message: message,
            eventTime: Date.now()
          });
        };
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /* eslint-enble camelcase */


      var logger; // This method is not called before initialization.

      function sendLog(resource, resourceType) {
        if (!logger) {
          logger = transportHandler(serializer);
        }

        logger(resource, resourceType);
      }

      function logTrace(trace) {
        var settingsService = SettingsService.getInstance(); // Do not log if trace is auto generated and instrumentation is disabled.

        if (!settingsService.instrumentationEnabled && trace.isAuto) {
          return;
        } // Do not log if trace is custom and data collection is disabled.


        if (!settingsService.dataCollectionEnabled && !trace.isAuto) {
          return;
        } // Do not log if required apis are not available.


        if (!Api.getInstance().requiredApisAvailable()) {
          return;
        } // Only log the page load auto traces if page is visible.


        if (trace.isAuto && getVisibilityState() !== VisibilityState.VISIBLE) {
          return;
        }

        if (isPerfInitialized()) {
          sendTraceLog(trace);
        } else {
          // Custom traces can be used before the initialization but logging
          // should wait until after.
          getInitializationPromise().then(function () {
            return sendTraceLog(trace);
          }, function () {
            return sendTraceLog(trace);
          });
        }
      }

      function sendTraceLog(trace) {
        if (!getIid()) {
          return;
        }

        var settingsService = SettingsService.getInstance();

        if (!settingsService.loggingEnabled || !settingsService.logTraceAfterSampling) {
          return;
        }

        setTimeout(function () {
          return sendLog(trace, 1
          /* Trace */
          );
        }, 0);
      }

      function logNetworkRequest(networkRequest) {
        var settingsService = SettingsService.getInstance(); // Do not log network requests if instrumentation is disabled.

        if (!settingsService.instrumentationEnabled) {
          return;
        } // Do not log the js sdk's call to transport service domain to avoid unnecessary cycle.
        // Need to blacklist both old and new endpoints to avoid migration gap.


        var networkRequestUrl = networkRequest.url; // Blacklist old log endpoint and new transport endpoint.
        // Because Performance SDK doesn't instrument requests sent from SDK itself.

        var logEndpointUrl = settingsService.logEndPointUrl.split('?')[0];
        var flEndpointUrl = settingsService.flTransportEndpointUrl.split('?')[0];

        if (networkRequestUrl === logEndpointUrl || networkRequestUrl === flEndpointUrl) {
          return;
        }

        if (!settingsService.loggingEnabled || !settingsService.logNetworkAfterSampling) {
          return;
        }

        setTimeout(function () {
          return sendLog(networkRequest, 0
          /* NetworkRequest */
          );
        }, 0);
      }

      function serializer(resource, resourceType) {
        if (resourceType === 0
        /* NetworkRequest */
        ) {
          return serializeNetworkRequest(resource);
        }

        return serializeTrace(resource);
      }

      function serializeNetworkRequest(networkRequest) {
        var networkRequestMetric = {
          url: networkRequest.url,
          http_method: networkRequest.httpMethod || 0,
          http_response_code: 200,
          response_payload_bytes: networkRequest.responsePayloadBytes,
          client_start_time_us: networkRequest.startTimeUs,
          time_to_response_initiated_us: networkRequest.timeToResponseInitiatedUs,
          time_to_response_completed_us: networkRequest.timeToResponseCompletedUs
        };
        var perfMetric = {
          application_info: getApplicationInfo(),
          network_request_metric: networkRequestMetric
        };
        return JSON.stringify(perfMetric);
      }

      function serializeTrace(trace) {
        var traceMetric = {
          name: trace.name,
          is_auto: trace.isAuto,
          client_start_time_us: trace.startTimeUs,
          duration_us: trace.durationUs
        };

        if (Object.keys(trace.counters).length !== 0) {
          traceMetric.counters = trace.counters;
        }

        var customAttributes = trace.getAttributes();

        if (Object.keys(customAttributes).length !== 0) {
          traceMetric.custom_attributes = customAttributes;
        }

        var perfMetric = {
          application_info: getApplicationInfo(),
          trace_metric: traceMetric
        };
        return JSON.stringify(perfMetric);
      }

      function getApplicationInfo() {
        return {
          google_app_id: SettingsService.getInstance().getAppId(),
          app_instance_id: getIid(),
          web_app_info: {
            sdk_version: SDK_VERSION,
            page_url: Api.getInstance().getUrl(),
            service_worker_status: getServiceWorkerStatus(),
            visibility_state: getVisibilityState(),
            effective_connection_type: getEffectiveConnectionType()
          },
          application_process_state: 0
        };
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var MAX_METRIC_NAME_LENGTH = 100;
      var RESERVED_AUTO_PREFIX = '_';
      var oobMetrics = [FIRST_PAINT_COUNTER_NAME, FIRST_CONTENTFUL_PAINT_COUNTER_NAME, FIRST_INPUT_DELAY_COUNTER_NAME];
      /**
       * Returns true if the metric is custom and does not start with reserved prefix, or if
       * the metric is one of out of the box page load trace metrics.
       */

      function isValidMetricName(name, traceName) {
        if (name.length === 0 || name.length > MAX_METRIC_NAME_LENGTH) {
          return false;
        }

        return traceName && traceName.startsWith(OOB_TRACE_PAGE_LOAD_PREFIX) && oobMetrics.indexOf(name) > -1 || !name.startsWith(RESERVED_AUTO_PREFIX);
      }
      /**
       * Converts the provided value to an integer value to be used in case of a metric.
       * @param providedValue Provided number value of the metric that needs to be converted to an integer.
       *
       * @returns Converted integer number to be set for the metric.
       */


      function convertMetricValueToInteger(providedValue) {
        var valueAsInteger = Math.floor(providedValue);

        if (valueAsInteger < providedValue) {
          consoleLogger.info("Metric value should be an Integer, setting the value as : " + valueAsInteger + ".");
        }

        return valueAsInteger;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var Trace =
      /** @class */
      function () {
        /**
         * @param name The name of the trace.
         * @param isAuto If the trace is auto-instrumented.
         * @param traceMeasureName The name of the measure marker in user timing specification. This field
         * is only set when the trace is built for logging when the user directly uses the user timing
         * api (performance.mark and performance.measure).
         */
        function Trace(name, isAuto, traceMeasureName) {
          if (isAuto === void 0) {
            isAuto = false;
          }

          this.name = name;
          this.isAuto = isAuto;
          this.state = 1
          /* UNINITIALIZED */
          ;
          this.customAttributes = {};
          this.counters = {};
          this.api = Api.getInstance();
          this.randomId = Math.floor(Math.random() * 1000000);

          if (!this.isAuto) {
            this.traceStartMark = TRACE_START_MARK_PREFIX + "-" + this.randomId + "-" + this.name;
            this.traceStopMark = TRACE_STOP_MARK_PREFIX + "-" + this.randomId + "-" + this.name;
            this.traceMeasure = traceMeasureName || TRACE_MEASURE_PREFIX + "-" + this.randomId + "-" + this.name;

            if (traceMeasureName) {
              // For the case of direct user timing traces, no start stop will happen. The measure object
              // is already available.
              this.calculateTraceMetrics();
            }
          }
        }
        /**
         * Starts a trace. The measurement of the duration starts at this point.
         */


        Trace.prototype.start = function () {
          if (this.state !== 1
          /* UNINITIALIZED */
          ) {
            throw ERROR_FACTORY.create("trace started"
            /* TRACE_STARTED_BEFORE */
            , {
              traceName: this.name
            });
          }

          this.api.mark(this.traceStartMark);
          this.state = 2
          /* RUNNING */
          ;
        };
        /**
         * Stops the trace. The measurement of the duration of the trace stops at this point and trace
         * is logged.
         */


        Trace.prototype.stop = function () {
          if (this.state !== 2
          /* RUNNING */
          ) {
            throw ERROR_FACTORY.create("trace stopped"
            /* TRACE_STOPPED_BEFORE */
            , {
              traceName: this.name
            });
          }

          this.state = 3
          /* TERMINATED */
          ;
          this.api.mark(this.traceStopMark);
          this.api.measure(this.traceMeasure, this.traceStartMark, this.traceStopMark);
          this.calculateTraceMetrics();
          logTrace(this);
        };
        /**
         * Records a trace with predetermined values. If this method is used a trace is created and logged
         * directly. No need to use start and stop methods.
         * @param startTime Trace start time since epoch in millisec
         * @param duration The duraction of the trace in millisec
         * @param options An object which can optionally hold maps of custom metrics and custom attributes
         */


        Trace.prototype.record = function (startTime, duration, options) {
          if (startTime <= 0) {
            throw ERROR_FACTORY.create("nonpositive trace startTime"
            /* NONPOSITIVE_TRACE_START_TIME */
            , {
              traceName: this.name
            });
          }

          if (duration <= 0) {
            throw ERROR_FACTORY.create("nonpositive trace duration"
            /* NONPOSITIVE_TRACE_DURATION */
            , {
              traceName: this.name
            });
          }

          this.durationUs = Math.floor(duration * 1000);
          this.startTimeUs = Math.floor(startTime * 1000);

          if (options && options.attributes) {
            this.customAttributes = tslib.__assign({}, options.attributes);
          }

          if (options && options.metrics) {
            for (var _i = 0, _a = Object.keys(options.metrics); _i < _a.length; _i++) {
              var metric = _a[_i];

              if (!isNaN(Number(options.metrics[metric]))) {
                this.counters[metric] = Number(Math.floor(options.metrics[metric]));
              }
            }
          }

          logTrace(this);
        };
        /**
         * Increments a custom metric by a certain number or 1 if number not specified. Will create a new
         * custom metric if one with the given name does not exist. The value will be floored down to an
         * integer.
         * @param counter Name of the custom metric
         * @param numAsInteger Increment by value
         */


        Trace.prototype.incrementMetric = function (counter, numAsInteger) {
          if (numAsInteger === void 0) {
            numAsInteger = 1;
          }

          if (this.counters[counter] === undefined) {
            this.putMetric(counter, numAsInteger);
          } else {
            this.putMetric(counter, this.counters[counter] + numAsInteger);
          }
        };
        /**
         * Sets a custom metric to a specified value. Will create a new custom metric if one with the
         * given name does not exist. The value will be floored down to an integer.
         * @param counter Name of the custom metric
         * @param numAsInteger Set custom metric to this value
         */


        Trace.prototype.putMetric = function (counter, numAsInteger) {
          if (isValidMetricName(counter, this.name)) {
            this.counters[counter] = convertMetricValueToInteger(numAsInteger);
          } else {
            throw ERROR_FACTORY.create("invalid custom metric name"
            /* INVALID_CUSTOM_METRIC_NAME */
            , {
              customMetricName: counter
            });
          }
        };
        /**
         * Returns the value of the custom metric by that name. If a custom metric with that name does
         * not exist will return zero.
         * @param counter
         */


        Trace.prototype.getMetric = function (counter) {
          return this.counters[counter] || 0;
        };
        /**
         * Sets a custom attribute of a trace to a certain value.
         * @param attr
         * @param value
         */


        Trace.prototype.putAttribute = function (attr, value) {
          var isValidName = isValidCustomAttributeName(attr);
          var isValidValue = isValidCustomAttributeValue(value);

          if (isValidName && isValidValue) {
            this.customAttributes[attr] = value;
            return;
          } // Throw appropriate error when the attribute name or value is invalid.


          if (!isValidName) {
            throw ERROR_FACTORY.create("invalid attribute name"
            /* INVALID_ATTRIBUTE_NAME */
            , {
              attributeName: attr
            });
          }

          if (!isValidValue) {
            throw ERROR_FACTORY.create("invalid attribute value"
            /* INVALID_ATTRIBUTE_VALUE */
            , {
              attributeValue: value
            });
          }
        };
        /**
         * Retrieves the value a custom attribute of a trace is set to.
         * @param attr
         */


        Trace.prototype.getAttribute = function (attr) {
          return this.customAttributes[attr];
        };

        Trace.prototype.removeAttribute = function (attr) {
          if (this.customAttributes[attr] === undefined) {
            return;
          }

          delete this.customAttributes[attr];
        };

        Trace.prototype.getAttributes = function () {
          return tslib.__assign({}, this.customAttributes);
        };

        Trace.prototype.setStartTime = function (startTime) {
          this.startTimeUs = startTime;
        };

        Trace.prototype.setDuration = function (duration) {
          this.durationUs = duration;
        };
        /**
         * Calculates and assigns the duration and start time of the trace using the measure performance
         * entry.
         */


        Trace.prototype.calculateTraceMetrics = function () {
          var perfMeasureEntries = this.api.getEntriesByName(this.traceMeasure);
          var perfMeasureEntry = perfMeasureEntries && perfMeasureEntries[0];

          if (perfMeasureEntry) {
            this.durationUs = Math.floor(perfMeasureEntry.duration * 1000);
            this.startTimeUs = Math.floor((perfMeasureEntry.startTime + this.api.getTimeOrigin()) * 1000);
          }
        };
        /**
         * @param navigationTimings A single element array which contains the navigationTIming object of
         * the page load
         * @param paintTimings A array which contains paintTiming object of the page load
         * @param firstInputDelay First input delay in millisec
         */


        Trace.createOobTrace = function (navigationTimings, paintTimings, firstInputDelay) {
          var route = Api.getInstance().getUrl();

          if (!route) {
            return;
          }

          var trace = new Trace(OOB_TRACE_PAGE_LOAD_PREFIX + route, true);
          var timeOriginUs = Math.floor(Api.getInstance().getTimeOrigin() * 1000);
          trace.setStartTime(timeOriginUs); // navigationTimings includes only one element.

          if (navigationTimings && navigationTimings[0]) {
            trace.setDuration(Math.floor(navigationTimings[0].duration * 1000));
            trace.putMetric('domInteractive', Math.floor(navigationTimings[0].domInteractive * 1000));
            trace.putMetric('domContentLoadedEventEnd', Math.floor(navigationTimings[0].domContentLoadedEventEnd * 1000));
            trace.putMetric('loadEventEnd', Math.floor(navigationTimings[0].loadEventEnd * 1000));
          }

          var FIRST_PAINT = 'first-paint';
          var FIRST_CONTENTFUL_PAINT = 'first-contentful-paint';

          if (paintTimings) {
            var firstPaint = paintTimings.find(function (paintObject) {
              return paintObject.name === FIRST_PAINT;
            });

            if (firstPaint && firstPaint.startTime) {
              trace.putMetric(FIRST_PAINT_COUNTER_NAME, Math.floor(firstPaint.startTime * 1000));
            }

            var firstContentfulPaint = paintTimings.find(function (paintObject) {
              return paintObject.name === FIRST_CONTENTFUL_PAINT;
            });

            if (firstContentfulPaint && firstContentfulPaint.startTime) {
              trace.putMetric(FIRST_CONTENTFUL_PAINT_COUNTER_NAME, Math.floor(firstContentfulPaint.startTime * 1000));
            }

            if (firstInputDelay) {
              trace.putMetric(FIRST_INPUT_DELAY_COUNTER_NAME, Math.floor(firstInputDelay * 1000));
            }
          }

          logTrace(trace);
        };

        Trace.createUserTimingTrace = function (measureName) {
          var trace = new Trace(measureName, false, measureName);
          logTrace(trace);
        };

        return Trace;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function createNetworkRequestEntry(entry) {
        var performanceEntry = entry;

        if (!performanceEntry || performanceEntry.responseStart === undefined) {
          return;
        }

        var timeOrigin = Api.getInstance().getTimeOrigin();
        var startTimeUs = Math.floor((performanceEntry.startTime + timeOrigin) * 1000);
        var timeToResponseInitiatedUs = performanceEntry.responseStart ? Math.floor((performanceEntry.responseStart - performanceEntry.startTime) * 1000) : undefined;
        var timeToResponseCompletedUs = Math.floor((performanceEntry.responseEnd - performanceEntry.startTime) * 1000); // Remove the query params from logged network request url.

        var url = performanceEntry.name && performanceEntry.name.split('?')[0];
        var networkRequest = {
          url: url,
          responsePayloadBytes: performanceEntry.transferSize,
          startTimeUs: startTimeUs,
          timeToResponseInitiatedUs: timeToResponseInitiatedUs,
          timeToResponseCompletedUs: timeToResponseCompletedUs
        };
        logNetworkRequest(networkRequest);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var FID_WAIT_TIME_MS = 5000;

      function setupOobResources() {
        // Do not initialize unless iid is available.
        if (!getIid()) {
          return;
        } // The load event might not have fired yet, and that means performance navigation timing
        // object has a duration of 0. The setup should run after all current tasks in js queue.


        setTimeout(function () {
          return setupOobTraces();
        }, 0);
        setTimeout(function () {
          return setupNetworkRequests();
        }, 0);
        setTimeout(function () {
          return setupUserTimingTraces();
        }, 0);
      }

      function setupNetworkRequests() {
        var api = Api.getInstance();
        var resources = api.getEntriesByType('resource');

        for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
          var resource = resources_1[_i];
          createNetworkRequestEntry(resource);
        }

        api.setupObserver('resource', createNetworkRequestEntry);
      }

      function setupOobTraces() {
        var api = Api.getInstance();
        var navigationTimings = api.getEntriesByType('navigation');
        var paintTimings = api.getEntriesByType('paint'); // If First Input Desly polyfill is added to the page, report the fid value.
        // https://github.com/GoogleChromeLabs/first-input-delay

        if (api.onFirstInputDelay) {
          // If the fid call back is not called for certain time, continue without it.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          var timeoutId_1 = setTimeout(function () {
            Trace.createOobTrace(navigationTimings, paintTimings);
            timeoutId_1 = undefined;
          }, FID_WAIT_TIME_MS);
          api.onFirstInputDelay(function (fid) {
            if (timeoutId_1) {
              clearTimeout(timeoutId_1);
              Trace.createOobTrace(navigationTimings, paintTimings, fid);
            }
          });
        } else {
          Trace.createOobTrace(navigationTimings, paintTimings);
        }
      }

      function setupUserTimingTraces() {
        var api = Api.getInstance(); // Run through the measure performance entries collected up to this point.

        var measures = api.getEntriesByType('measure');

        for (var _i = 0, measures_1 = measures; _i < measures_1.length; _i++) {
          var measure = measures_1[_i];
          createUserTimingTrace(measure);
        } // Setup an observer to capture the measures from this point on.


        api.setupObserver('measure', createUserTimingTrace);
      }

      function createUserTimingTrace(measure) {
        var measureName = measure.name; // Do not create a trace, if the user timing marks and measures are created by the sdk itself.

        if (measureName.substring(0, TRACE_MEASURE_PREFIX.length) === TRACE_MEASURE_PREFIX) {
          return;
        }

        Trace.createUserTimingTrace(measureName);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var PerformanceController =
      /** @class */
      function () {
        function PerformanceController(app) {
          this.app = app;

          if (Api.getInstance().requiredApisAvailable()) {
            util.validateIndexedDBOpenable().then(function (isAvailable) {
              if (isAvailable) {
                setupTransportService();
                getInitializationPromise().then(setupOobResources, setupOobResources);
              }
            })["catch"](function (error) {
              consoleLogger.info("Environment doesn't support IndexedDB: " + error);
            });
          }
        }

        PerformanceController.prototype.trace = function (name) {
          return new Trace(name);
        };

        Object.defineProperty(PerformanceController.prototype, "instrumentationEnabled", {
          get: function get() {
            return SettingsService.getInstance().instrumentationEnabled;
          },
          set: function set(val) {
            SettingsService.getInstance().instrumentationEnabled = val;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(PerformanceController.prototype, "dataCollectionEnabled", {
          get: function get() {
            return SettingsService.getInstance().dataCollectionEnabled;
          },
          set: function set(val) {
            SettingsService.getInstance().dataCollectionEnabled = val;
          },
          enumerable: false,
          configurable: true
        });
        return PerformanceController;
      }();
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var DEFAULT_ENTRY_NAME = '[DEFAULT]';

      function registerPerformance(instance) {
        var factoryMethod = function factoryMethod(app, installations) {
          if (app.name !== DEFAULT_ENTRY_NAME) {
            throw ERROR_FACTORY.create("FB not default"
            /* FB_NOT_DEFAULT */
            );
          }

          if (typeof window === 'undefined') {
            throw ERROR_FACTORY.create("no window"
            /* NO_WINDOW */
            );
          }

          setupApi(window);
          SettingsService.getInstance().firebaseAppInstance = app;
          SettingsService.getInstance().installationsService = installations;
          return new PerformanceController(app);
        }; // Register performance with firebase-app.


        instance.INTERNAL.registerComponent(new component.Component('performance', function (container) {
          /* Dependencies */
          // getImmediate for FirebaseApp will always succeed
          var app = container.getProvider('app').getImmediate(); // The following call will always succeed because perf has `import '@firebase/installations'`

          var installations = container.getProvider('installations').getImmediate();
          return factoryMethod(app, installations);
        }, "PUBLIC"
        /* PUBLIC */
        ));
        instance.registerVersion(name, version);
      }

      registerPerformance(firebase__default['default']);
      exports.registerPerformance = registerPerformance; //# sourceMappingURL=index.cjs.js.map

      /***/
    },

    /***/
    "e39k":
    /*!***********************************************!*\
      !*** ./src/app/help-chat/help-chat.module.ts ***!
      \***********************************************/

    /*! exports provided: HelpChatPageModule */

    /***/
    function e39k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpChatPageModule", function () {
        return HelpChatPageModule;
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


      var _help_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./help-chat-routing.module */
      "Mu47");
      /* harmony import */


      var _help_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./help-chat.page */
      "Kqa9");
      /* harmony import */


      var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../chat-box/chat-box.component */
      "8Yrd");

      var HelpChatPageModule = /*#__PURE__*/_createClass(function HelpChatPageModule() {
        _classCallCheck(this, HelpChatPageModule);
      });

      HelpChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _help_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelpChatPageRoutingModule"]],
        declarations: [_help_chat_page__WEBPACK_IMPORTED_MODULE_6__["HelpChatPage"], _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_7__["ChatBoxComponent"]]
      })], HelpChatPageModule);
      /***/
    },

    /***/
    "fSjL":
    /*!****************************************************************!*\
      !*** ./node_modules/@firebase/installations/dist/index.esm.js ***!
      \****************************************************************/

    /*! exports provided: registerInstallations */

    /***/
    function fSjL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerInstallations", function () {
        return registerInstallations;
      });
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/app */
      "wj3C");
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @firebase/component */
      "S+S0");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      "os0x");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @firebase/util */
      "zVF4");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_firebase_util__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var idb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! idb */
      "nbvr");
      /* harmony import */


      var idb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_4__);

      var name = "@firebase/installations";
      var version = "0.4.17";
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var PENDING_TIMEOUT_MS = 10000;
      var PACKAGE_VERSION = "w:" + version;
      var INTERNAL_AUTH_VERSION = 'FIS_v2';
      var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
      var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour

      var SERVICE = 'installations';
      var SERVICE_NAME = 'Installations';
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var _a;

      var ERROR_DESCRIPTION_MAP = (_a = {}, _a["missing-app-config-values"
      /* MISSING_APP_CONFIG_VALUES */
      ] = 'Missing App configuration value: "{$valueName}"', _a["not-registered"
      /* NOT_REGISTERED */
      ] = 'Firebase Installation is not registered.', _a["installation-not-found"
      /* INSTALLATION_NOT_FOUND */
      ] = 'Firebase Installation not found.', _a["request-failed"
      /* REQUEST_FAILED */
      ] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', _a["app-offline"
      /* APP_OFFLINE */
      ] = 'Could not process request. Application offline.', _a["delete-pending-registration"
      /* DELETE_PENDING_REGISTRATION */
      ] = "Can't delete installation while there is a pending registration request.", _a);
      var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__["ErrorFactory"](SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
      /** Returns true if error is a FirebaseError that is based on an error from the server. */

      function isServerError(error) {
        return error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_3__["FirebaseError"] && error.code.includes("request-failed"
        /* REQUEST_FAILED */
        );
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function getInstallationsEndpoint(_a) {
        var projectId = _a.projectId;
        return INSTALLATIONS_API_URL + "/projects/" + projectId + "/installations";
      }

      function extractAuthTokenInfoFromResponse(response) {
        return {
          token: response.token,
          requestStatus: 2
          /* COMPLETED */
          ,
          expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
          creationTime: Date.now()
        };
      }

      function getErrorFromResponse(requestName, response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var responseJson, errorData;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , response.json()];

              case 1:
                responseJson = _a.sent();
                errorData = responseJson.error;
                return [2
                /*return*/
                , ERROR_FACTORY.create("request-failed"
                /* REQUEST_FAILED */
                , {
                  requestName: requestName,
                  serverCode: errorData.code,
                  serverMessage: errorData.message,
                  serverStatus: errorData.status
                })];
            }
          });
        });
      }

      function getHeaders(_a) {
        var apiKey = _a.apiKey;
        return new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-goog-api-key': apiKey
        });
      }

      function getHeadersWithAuth(appConfig, _a) {
        var refreshToken = _a.refreshToken;
        var headers = getHeaders(appConfig);
        headers.append('Authorization', getAuthorizationHeader(refreshToken));
        return headers;
      }
      /**
       * Calls the passed in fetch wrapper and returns the response.
       * If the returned response has a status of 5xx, re-runs the function once and
       * returns the response.
       */


      function retryIfServerError(fn) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var result;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , fn()];

              case 1:
                result = _a.sent();

                if (result.status >= 500 && result.status < 600) {
                  // Internal Server Error. Retry request.
                  return [2
                  /*return*/
                  , fn()];
                }

                return [2
                /*return*/
                , result];
            }
          });
        });
      }

      function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
        // This works because the server will never respond with fractions of a second.
        return Number(responseExpiresIn.replace('s', '000'));
      }

      function getAuthorizationHeader(refreshToken) {
        return INTERNAL_AUTH_VERSION + " " + refreshToken;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function createInstallationRequest(appConfig, _a) {
        var fid = _a.fid;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                endpoint = getInstallationsEndpoint(appConfig);
                headers = getHeaders(appConfig);
                body = {
                  fid: fid,
                  authVersion: INTERNAL_AUTH_VERSION,
                  appId: appConfig.appId,
                  sdkVersion: PACKAGE_VERSION
                };
                request = {
                  method: 'POST',
                  headers: headers,
                  body: JSON.stringify(body)
                };
                return [4
                /*yield*/
                , retryIfServerError(function () {
                  return fetch(endpoint, request);
                })];

              case 1:
                response = _b.sent();
                if (!response.ok) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , response.json()];

              case 2:
                responseValue = _b.sent();
                registeredInstallationEntry = {
                  fid: responseValue.fid || fid,
                  registrationStatus: 2
                  /* COMPLETED */
                  ,
                  refreshToken: responseValue.refreshToken,
                  authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
                };
                return [2
                /*return*/
                , registeredInstallationEntry];

              case 3:
                return [4
                /*yield*/
                , getErrorFromResponse('Create Installation', response)];

              case 4:
                throw _b.sent();
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Returns a promise that resolves after given time passes. */


      function sleep(ms) {
        return new Promise(function (resolve) {
          setTimeout(resolve, ms);
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function bufferToBase64UrlSafe(array) {
        var b64 = btoa(String.fromCharCode.apply(String, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(array)));
        return b64.replace(/\+/g, '-').replace(/\//g, '_');
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
      var INVALID_FID = '';
      /**
       * Generates a new FID using random values from Web Crypto API.
       * Returns an empty string if FID generation fails for any reason.
       */

      function generateFid() {
        try {
          // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
          // bytes. our implementation generates a 17 byte array instead.
          var fidByteArray = new Uint8Array(17);
          var crypto_1 = self.crypto || self.msCrypto;
          crypto_1.getRandomValues(fidByteArray); // Replace the first 4 random bits with the constant FID header of 0b0111.

          fidByteArray[0] = 112 + fidByteArray[0] % 16;
          var fid = encode(fidByteArray);
          return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
        } catch (_a) {
          // FID generation errored
          return INVALID_FID;
        }
      }
      /** Converts a FID Uint8Array to a base64 string representation. */


      function encode(fidByteArray) {
        var b64String = bufferToBase64UrlSafe(fidByteArray); // Remove the 23rd character that was added because of the extra 4 bits at the
        // end of our 17 byte array, and the '=' padding.

        return b64String.substr(0, 22);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Returns a string key that can be used to identify the app. */


      function getKey(appConfig) {
        return appConfig.appName + "!" + appConfig.appId;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var fidChangeCallbacks = new Map();
      /**
       * Calls the onIdChange callbacks with the new FID value, and broadcasts the
       * change to other tabs.
       */

      function fidChanged(appConfig, fid) {
        var key = getKey(appConfig);
        callFidChangeCallbacks(key, fid);
        broadcastFidChange(key, fid);
      }

      function addCallback(appConfig, callback) {
        // Open the broadcast channel if it's not already open,
        // to be able to listen to change events from other tabs.
        getBroadcastChannel();
        var key = getKey(appConfig);
        var callbackSet = fidChangeCallbacks.get(key);

        if (!callbackSet) {
          callbackSet = new Set();
          fidChangeCallbacks.set(key, callbackSet);
        }

        callbackSet.add(callback);
      }

      function removeCallback(appConfig, callback) {
        var key = getKey(appConfig);
        var callbackSet = fidChangeCallbacks.get(key);

        if (!callbackSet) {
          return;
        }

        callbackSet["delete"](callback);

        if (callbackSet.size === 0) {
          fidChangeCallbacks["delete"](key);
        } // Close broadcast channel if there are no more callbacks.


        closeBroadcastChannel();
      }

      function callFidChangeCallbacks(key, fid) {
        var e_1, _a;

        var callbacks = fidChangeCallbacks.get(key);

        if (!callbacks) {
          return;
        }

        try {
          for (var callbacks_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
            var callback = callbacks_1_1.value;
            callback(fid);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1["return"])) _a.call(callbacks_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }

      function broadcastFidChange(key, fid) {
        var channel = getBroadcastChannel();

        if (channel) {
          channel.postMessage({
            key: key,
            fid: fid
          });
        }

        closeBroadcastChannel();
      }

      var broadcastChannel = null;
      /** Opens and returns a BroadcastChannel if it is supported by the browser. */

      function getBroadcastChannel() {
        if (!broadcastChannel && 'BroadcastChannel' in self) {
          broadcastChannel = new BroadcastChannel('[Firebase] FID Change');

          broadcastChannel.onmessage = function (e) {
            callFidChangeCallbacks(e.data.key, e.data.fid);
          };
        }

        return broadcastChannel;
      }

      function closeBroadcastChannel() {
        if (fidChangeCallbacks.size === 0 && broadcastChannel) {
          broadcastChannel.close();
          broadcastChannel = null;
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var DATABASE_NAME = 'firebase-installations-database';
      var DATABASE_VERSION = 1;
      var OBJECT_STORE_NAME = 'firebase-installations-store';
      var dbPromise = null;

      function getDbPromise() {
        if (!dbPromise) {
          dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_4__["openDb"])(DATABASE_NAME, DATABASE_VERSION, function (upgradeDB) {
            // We don't use 'break' in this switch statement, the fall-through
            // behavior is what we want, because if there are multiple versions between
            // the old version and the current version, we want ALL the migrations
            // that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch (upgradeDB.oldVersion) {
              case 0:
                upgradeDB.createObjectStore(OBJECT_STORE_NAME);
            }
          });
        }

        return dbPromise;
      }
      /** Assigns or overwrites the record for the given key with the given value. */


      function set(appConfig, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var key, db, tx, objectStore, oldValue;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                key = getKey(appConfig);
                return [4
                /*yield*/
                , getDbPromise()];

              case 1:
                db = _a.sent();
                tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                objectStore = tx.objectStore(OBJECT_STORE_NAME);
                return [4
                /*yield*/
                , objectStore.get(key)];

              case 2:
                oldValue = _a.sent();
                return [4
                /*yield*/
                , objectStore.put(value, key)];

              case 3:
                _a.sent();

                return [4
                /*yield*/
                , tx.complete];

              case 4:
                _a.sent();

                if (!oldValue || oldValue.fid !== value.fid) {
                  fidChanged(appConfig, value.fid);
                }

                return [2
                /*return*/
                , value];
            }
          });
        });
      }
      /** Removes record(s) from the objectStore that match the given key. */


      function remove(appConfig) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var key, db, tx;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                key = getKey(appConfig);
                return [4
                /*yield*/
                , getDbPromise()];

              case 1:
                db = _a.sent();
                tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                return [4
                /*yield*/
                , tx.objectStore(OBJECT_STORE_NAME)["delete"](key)];

              case 2:
                _a.sent();

                return [4
                /*yield*/
                , tx.complete];

              case 3:
                _a.sent();

                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * Atomically updates a record with the result of updateFn, which gets
       * called with the current value. If newValue is undefined, the record is
       * deleted instead.
       * @return Updated value
       */


      function update(appConfig, updateFn) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var key, db, tx, store, oldValue, newValue;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                key = getKey(appConfig);
                return [4
                /*yield*/
                , getDbPromise()];

              case 1:
                db = _a.sent();
                tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                store = tx.objectStore(OBJECT_STORE_NAME);
                return [4
                /*yield*/
                , store.get(key)];

              case 2:
                oldValue = _a.sent();
                newValue = updateFn(oldValue);
                if (!(newValue === undefined)) return [3
                /*break*/
                , 4];
                return [4
                /*yield*/
                , store["delete"](key)];

              case 3:
                _a.sent();

                return [3
                /*break*/
                , 6];

              case 4:
                return [4
                /*yield*/
                , store.put(newValue, key)];

              case 5:
                _a.sent();

                _a.label = 6;

              case 6:
                return [4
                /*yield*/
                , tx.complete];

              case 7:
                _a.sent();

                if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
                  fidChanged(appConfig, newValue.fid);
                }

                return [2
                /*return*/
                , newValue];
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Updates and returns the InstallationEntry from the database.
       * Also triggers a registration request if it is necessary and possible.
       */


      function getInstallationEntry(appConfig) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var registrationPromise, installationEntry;

          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , update(appConfig, function (oldEntry) {
                  var installationEntry = updateOrCreateInstallationEntry(oldEntry);
                  var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
                  registrationPromise = entryWithPromise.registrationPromise;
                  return entryWithPromise.installationEntry;
                })];

              case 1:
                installationEntry = _b.sent();
                if (!(installationEntry.fid === INVALID_FID)) return [3
                /*break*/
                , 3];
                _a = {};
                return [4
                /*yield*/
                , registrationPromise];

              case 2:
                // FID generation failed. Waiting for the FID from the server.
                return [2
                /*return*/
                , (_a.installationEntry = _b.sent(), _a)];

              case 3:
                return [2
                /*return*/
                , {
                  installationEntry: installationEntry,
                  registrationPromise: registrationPromise
                }];
            }
          });
        });
      }
      /**
       * Creates a new Installation Entry if one does not exist.
       * Also clears timed out pending requests.
       */


      function updateOrCreateInstallationEntry(oldEntry) {
        var entry = oldEntry || {
          fid: generateFid(),
          registrationStatus: 0
          /* NOT_STARTED */

        };
        return clearTimedOutRequest(entry);
      }
      /**
       * If the Firebase Installation is not registered yet, this will trigger the
       * registration and return an InProgressInstallationEntry.
       *
       * If registrationPromise does not exist, the installationEntry is guaranteed
       * to be registered.
       */


      function triggerRegistrationIfNecessary(appConfig, installationEntry) {
        if (installationEntry.registrationStatus === 0
        /* NOT_STARTED */
        ) {
          if (!navigator.onLine) {
            // Registration required but app is offline.
            var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline"
            /* APP_OFFLINE */
            ));
            return {
              installationEntry: installationEntry,
              registrationPromise: registrationPromiseWithError
            };
          } // Try registering. Change status to IN_PROGRESS.


          var inProgressEntry = {
            fid: installationEntry.fid,
            registrationStatus: 1
            /* IN_PROGRESS */
            ,
            registrationTime: Date.now()
          };
          var registrationPromise = registerInstallation(appConfig, inProgressEntry);
          return {
            installationEntry: inProgressEntry,
            registrationPromise: registrationPromise
          };
        } else if (installationEntry.registrationStatus === 1
        /* IN_PROGRESS */
        ) {
          return {
            installationEntry: installationEntry,
            registrationPromise: waitUntilFidRegistration(appConfig)
          };
        } else {
          return {
            installationEntry: installationEntry
          };
        }
      }
      /** This will be executed only once for each new Firebase Installation. */


      function registerInstallation(appConfig, installationEntry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var registeredInstallationEntry, e_1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 2,, 7]);

                return [4
                /*yield*/
                , createInstallationRequest(appConfig, installationEntry)];

              case 1:
                registeredInstallationEntry = _a.sent();
                return [2
                /*return*/
                , set(appConfig, registeredInstallationEntry)];

              case 2:
                e_1 = _a.sent();
                if (!(isServerError(e_1) && e_1.serverCode === 409)) return [3
                /*break*/
                , 4]; // Server returned a "FID can not be used" error.
                // Generate a new ID next time.

                return [4
                /*yield*/
                , remove(appConfig)];

              case 3:
                // Server returned a "FID can not be used" error.
                // Generate a new ID next time.
                _a.sent();

                return [3
                /*break*/
                , 6];

              case 4:
                // Registration failed. Set FID as not registered.
                return [4
                /*yield*/
                , set(appConfig, {
                  fid: installationEntry.fid,
                  registrationStatus: 0
                  /* NOT_STARTED */

                })];

              case 5:
                // Registration failed. Set FID as not registered.
                _a.sent();

                _a.label = 6;

              case 6:
                throw e_1;

              case 7:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /** Call if FID registration is pending in another request. */


      function waitUntilFidRegistration(appConfig) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var entry, _a, installationEntry, registrationPromise;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , updateInstallationRequest(appConfig)];

              case 1:
                entry = _b.sent();
                _b.label = 2;

              case 2:
                if (!(entry.registrationStatus === 1
                /* IN_PROGRESS */
                )) return [3
                /*break*/
                , 5]; // createInstallation request still in progress.

                return [4
                /*yield*/
                , sleep(100)];

              case 3:
                // createInstallation request still in progress.
                _b.sent();

                return [4
                /*yield*/
                , updateInstallationRequest(appConfig)];

              case 4:
                entry = _b.sent();
                return [3
                /*break*/
                , 2];

              case 5:
                if (!(entry.registrationStatus === 0
                /* NOT_STARTED */
                )) return [3
                /*break*/
                , 7];
                return [4
                /*yield*/
                , getInstallationEntry(appConfig)];

              case 6:
                _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;

                if (registrationPromise) {
                  return [2
                  /*return*/
                  , registrationPromise];
                } else {
                  // if there is no registrationPromise, entry is registered.
                  return [2
                  /*return*/
                  , installationEntry];
                }

              case 7:
                return [2
                /*return*/
                , entry];
            }
          });
        });
      }
      /**
       * Called only if there is a CreateInstallation request in progress.
       *
       * Updates the InstallationEntry in the DB based on the status of the
       * CreateInstallation request.
       *
       * Returns the updated InstallationEntry.
       */


      function updateInstallationRequest(appConfig) {
        return update(appConfig, function (oldEntry) {
          if (!oldEntry) {
            throw ERROR_FACTORY.create("installation-not-found"
            /* INSTALLATION_NOT_FOUND */
            );
          }

          return clearTimedOutRequest(oldEntry);
        });
      }

      function clearTimedOutRequest(entry) {
        if (hasInstallationRequestTimedOut(entry)) {
          return {
            fid: entry.fid,
            registrationStatus: 0
            /* NOT_STARTED */

          };
        }

        return entry;
      }

      function hasInstallationRequestTimedOut(installationEntry) {
        return installationEntry.registrationStatus === 1
        /* IN_PROGRESS */
        && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function generateAuthTokenRequest(_a, installationEntry) {
        var appConfig = _a.appConfig,
            platformLoggerProvider = _a.platformLoggerProvider;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var endpoint, headers, platformLogger, body, request, response, responseValue, completedAuthToken;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
                headers = getHeadersWithAuth(appConfig, installationEntry);
                platformLogger = platformLoggerProvider.getImmediate({
                  optional: true
                });

                if (platformLogger) {
                  headers.append('x-firebase-client', platformLogger.getPlatformInfoString());
                }

                body = {
                  installation: {
                    sdkVersion: PACKAGE_VERSION
                  }
                };
                request = {
                  method: 'POST',
                  headers: headers,
                  body: JSON.stringify(body)
                };
                return [4
                /*yield*/
                , retryIfServerError(function () {
                  return fetch(endpoint, request);
                })];

              case 1:
                response = _b.sent();
                if (!response.ok) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , response.json()];

              case 2:
                responseValue = _b.sent();
                completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
                return [2
                /*return*/
                , completedAuthToken];

              case 3:
                return [4
                /*yield*/
                , getErrorFromResponse('Generate Auth Token', response)];

              case 4:
                throw _b.sent();
            }
          });
        });
      }

      function getGenerateAuthTokenEndpoint(appConfig, _a) {
        var fid = _a.fid;
        return getInstallationsEndpoint(appConfig) + "/" + fid + "/authTokens:generate";
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns a valid authentication token for the installation. Generates a new
       * token if one doesn't exist, is expired or about to expire.
       *
       * Should only be called if the Firebase Installation is registered.
       */


      function refreshAuthToken(dependencies, forceRefresh) {
        if (forceRefresh === void 0) {
          forceRefresh = false;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var tokenPromise, entry, authToken, _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , update(dependencies.appConfig, function (oldEntry) {
                  if (!isEntryRegistered(oldEntry)) {
                    throw ERROR_FACTORY.create("not-registered"
                    /* NOT_REGISTERED */
                    );
                  }

                  var oldAuthToken = oldEntry.authToken;

                  if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
                    // There is a valid token in the DB.
                    return oldEntry;
                  } else if (oldAuthToken.requestStatus === 1
                  /* IN_PROGRESS */
                  ) {
                    // There already is a token request in progress.
                    tokenPromise = waitUntilAuthTokenRequest(dependencies, forceRefresh);
                    return oldEntry;
                  } else {
                    // No token or token expired.
                    if (!navigator.onLine) {
                      throw ERROR_FACTORY.create("app-offline"
                      /* APP_OFFLINE */
                      );
                    }

                    var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
                    tokenPromise = fetchAuthTokenFromServer(dependencies, inProgressEntry);
                    return inProgressEntry;
                  }
                })];

              case 1:
                entry = _b.sent();
                if (!tokenPromise) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , tokenPromise];

              case 2:
                _a = _b.sent();
                return [3
                /*break*/
                , 4];

              case 3:
                _a = entry.authToken;
                _b.label = 4;

              case 4:
                authToken = _a;
                return [2
                /*return*/
                , authToken];
            }
          });
        });
      }
      /**
       * Call only if FID is registered and Auth Token request is in progress.
       *
       * Waits until the current pending request finishes. If the request times out,
       * tries once in this thread as well.
       */


      function waitUntilAuthTokenRequest(dependencies, forceRefresh) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var entry, authToken;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , updateAuthTokenRequest(dependencies.appConfig)];

              case 1:
                entry = _a.sent();
                _a.label = 2;

              case 2:
                if (!(entry.authToken.requestStatus === 1
                /* IN_PROGRESS */
                )) return [3
                /*break*/
                , 5]; // generateAuthToken still in progress.

                return [4
                /*yield*/
                , sleep(100)];

              case 3:
                // generateAuthToken still in progress.
                _a.sent();

                return [4
                /*yield*/
                , updateAuthTokenRequest(dependencies.appConfig)];

              case 4:
                entry = _a.sent();
                return [3
                /*break*/
                , 2];

              case 5:
                authToken = entry.authToken;

                if (authToken.requestStatus === 0
                /* NOT_STARTED */
                ) {
                  // The request timed out or failed in a different call. Try again.
                  return [2
                  /*return*/
                  , refreshAuthToken(dependencies, forceRefresh)];
                } else {
                  return [2
                  /*return*/
                  , authToken];
                }

            }
          });
        });
      }
      /**
       * Called only if there is a GenerateAuthToken request in progress.
       *
       * Updates the InstallationEntry in the DB based on the status of the
       * GenerateAuthToken request.
       *
       * Returns the updated InstallationEntry.
       */


      function updateAuthTokenRequest(appConfig) {
        return update(appConfig, function (oldEntry) {
          if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered"
            /* NOT_REGISTERED */
            );
          }

          var oldAuthToken = oldEntry.authToken;

          if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, oldEntry), {
              authToken: {
                requestStatus: 0
                /* NOT_STARTED */

              }
            });
          }

          return oldEntry;
        });
      }

      function fetchAuthTokenFromServer(dependencies, installationEntry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 3,, 8]);

                return [4
                /*yield*/
                , generateAuthTokenRequest(dependencies, installationEntry)];

              case 1:
                authToken = _a.sent();
                updatedInstallationEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, installationEntry), {
                  authToken: authToken
                });
                return [4
                /*yield*/
                , set(dependencies.appConfig, updatedInstallationEntry)];

              case 2:
                _a.sent();

                return [2
                /*return*/
                , authToken];

              case 3:
                e_1 = _a.sent();
                if (!(isServerError(e_1) && (e_1.serverCode === 401 || e_1.serverCode === 404))) return [3
                /*break*/
                , 5]; // Server returned a "FID not found" or a "Invalid authentication" error.
                // Generate a new ID next time.

                return [4
                /*yield*/
                , remove(dependencies.appConfig)];

              case 4:
                // Server returned a "FID not found" or a "Invalid authentication" error.
                // Generate a new ID next time.
                _a.sent();

                return [3
                /*break*/
                , 7];

              case 5:
                updatedInstallationEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, installationEntry), {
                  authToken: {
                    requestStatus: 0
                    /* NOT_STARTED */

                  }
                });
                return [4
                /*yield*/
                , set(dependencies.appConfig, updatedInstallationEntry)];

              case 6:
                _a.sent();

                _a.label = 7;

              case 7:
                throw e_1;

              case 8:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function isEntryRegistered(installationEntry) {
        return installationEntry !== undefined && installationEntry.registrationStatus === 2
        /* COMPLETED */
        ;
      }

      function isAuthTokenValid(authToken) {
        return authToken.requestStatus === 2
        /* COMPLETED */
        && !isAuthTokenExpired(authToken);
      }

      function isAuthTokenExpired(authToken) {
        var now = Date.now();
        return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
      }
      /** Returns an updated InstallationEntry with an InProgressAuthToken. */


      function makeAuthTokenRequestInProgressEntry(oldEntry) {
        var inProgressAuthToken = {
          requestStatus: 1
          /* IN_PROGRESS */
          ,
          requestTime: Date.now()
        };
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, oldEntry), {
          authToken: inProgressAuthToken
        });
      }

      function hasAuthTokenRequestTimedOut(authToken) {
        return authToken.requestStatus === 1
        /* IN_PROGRESS */
        && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function _getId(dependencies) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var _a, installationEntry, registrationPromise;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , getInstallationEntry(dependencies.appConfig)];

              case 1:
                _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;

                if (registrationPromise) {
                  registrationPromise["catch"](console.error);
                } else {
                  // If the installation is already registered, update the authentication
                  // token if needed.
                  refreshAuthToken(dependencies)["catch"](console.error);
                }

                return [2
                /*return*/
                , installationEntry.fid];
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function _getToken(dependencies, forceRefresh) {
        if (forceRefresh === void 0) {
          forceRefresh = false;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var authToken;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , completeInstallationRegistration(dependencies.appConfig)];

              case 1:
                _a.sent();

                return [4
                /*yield*/
                , refreshAuthToken(dependencies, forceRefresh)];

              case 2:
                authToken = _a.sent();
                return [2
                /*return*/
                , authToken.token];
            }
          });
        });
      }

      function completeInstallationRegistration(appConfig) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var registrationPromise;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , getInstallationEntry(appConfig)];

              case 1:
                registrationPromise = _a.sent().registrationPromise;
                if (!registrationPromise) return [3
                /*break*/
                , 3]; // A createInstallation request is in progress. Wait until it finishes.

                return [4
                /*yield*/
                , registrationPromise];

              case 2:
                // A createInstallation request is in progress. Wait until it finishes.
                _a.sent();

                _a.label = 3;

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function deleteInstallationRequest(appConfig, installationEntry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var endpoint, headers, request, response;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                endpoint = getDeleteEndpoint(appConfig, installationEntry);
                headers = getHeadersWithAuth(appConfig, installationEntry);
                request = {
                  method: 'DELETE',
                  headers: headers
                };
                return [4
                /*yield*/
                , retryIfServerError(function () {
                  return fetch(endpoint, request);
                })];

              case 1:
                response = _a.sent();
                if (!!response.ok) return [3
                /*break*/
                , 3];
                return [4
                /*yield*/
                , getErrorFromResponse('Delete Installation', response)];

              case 2:
                throw _a.sent();

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function getDeleteEndpoint(appConfig, _a) {
        var fid = _a.fid;
        return getInstallationsEndpoint(appConfig) + "/" + fid;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function deleteInstallation(dependencies) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
          var appConfig, entry;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                appConfig = dependencies.appConfig;
                return [4
                /*yield*/
                , update(appConfig, function (oldEntry) {
                  if (oldEntry && oldEntry.registrationStatus === 0
                  /* NOT_STARTED */
                  ) {
                    // Delete the unregistered entry without sending a deleteInstallation request.
                    return undefined;
                  }

                  return oldEntry;
                })];

              case 1:
                entry = _a.sent();
                if (!entry) return [3
                /*break*/
                , 6];
                if (!(entry.registrationStatus === 1
                /* IN_PROGRESS */
                )) return [3
                /*break*/
                , 2]; // Can't delete while trying to register.

                throw ERROR_FACTORY.create("delete-pending-registration"
                /* DELETE_PENDING_REGISTRATION */
                );

              case 2:
                if (!(entry.registrationStatus === 2
                /* COMPLETED */
                )) return [3
                /*break*/
                , 6];
                if (!!navigator.onLine) return [3
                /*break*/
                , 3];
                throw ERROR_FACTORY.create("app-offline"
                /* APP_OFFLINE */
                );

              case 3:
                return [4
                /*yield*/
                , deleteInstallationRequest(appConfig, entry)];

              case 4:
                _a.sent();

                return [4
                /*yield*/
                , remove(appConfig)];

              case 5:
                _a.sent();

                _a.label = 6;

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Sets a new callback that will get called when Installation ID changes.
       * Returns an unsubscribe function that will remove the callback when called.
       */


      function _onIdChange(_a, callback) {
        var appConfig = _a.appConfig;
        addCallback(appConfig, callback);
        return function () {
          removeCallback(appConfig, callback);
        };
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function extractAppConfig(app) {
        var e_1, _a;

        if (!app || !app.options) {
          throw getMissingValueError('App Configuration');
        }

        if (!app.name) {
          throw getMissingValueError('App Name');
        } // Required app config keys


        var configKeys = ['projectId', 'apiKey', 'appId'];

        try {
          for (var configKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
            var keyName = configKeys_1_1.value;

            if (!app.options[keyName]) {
              throw getMissingValueError(keyName);
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1["return"])) _a.call(configKeys_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        return {
          appName: app.name,
          projectId: app.options.projectId,
          apiKey: app.options.apiKey,
          appId: app.options.appId
        };
      }

      function getMissingValueError(valueName) {
        return ERROR_FACTORY.create("missing-app-config-values"
        /* MISSING_APP_CONFIG_VALUES */
        , {
          valueName: valueName
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function registerInstallations(instance) {
        var installationsName = 'installations';
        instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__["Component"](installationsName, function (container) {
          var app = container.getProvider('app').getImmediate(); // Throws if app isn't configured properly.

          var appConfig = extractAppConfig(app);
          var platformLoggerProvider = container.getProvider('platform-logger');
          var dependencies = {
            appConfig: appConfig,
            platformLoggerProvider: platformLoggerProvider
          };
          var installations = {
            app: app,
            getId: function getId() {
              return _getId(dependencies);
            },
            getToken: function getToken(forceRefresh) {
              return _getToken(dependencies, forceRefresh);
            },
            "delete": function _delete() {
              return deleteInstallation(dependencies);
            },
            onIdChange: function onIdChange(callback) {
              return _onIdChange(dependencies, callback);
            }
          };
          return installations;
        }, "PUBLIC"
        /* PUBLIC */
        ));
        instance.registerVersion(name, version);
      }

      registerInstallations(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceMappingURL=index.esm.js.map

      /***/
    },

    /***/
    "gHGA":
    /*!************************************************************!*\
      !*** ./node_modules/@firebase/messaging/dist/index.esm.js ***!
      \************************************************************/

    /*! no exports provided */

    /***/
    function gHGA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _firebase_installations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/installations */
      "fSjL");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @firebase/component */
      "S+S0");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_component__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @firebase/util */
      "zVF4");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_util__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      "os0x");
      /* harmony import */


      var idb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! idb */
      "nbvr");
      /* harmony import */


      var idb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @firebase/app */
      "wj3C");
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_5__);
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var _a;

      var ERROR_MAP = (_a = {}, _a["missing-app-config-values"
      /* MISSING_APP_CONFIG_VALUES */
      ] = 'Missing App configuration value: "{$valueName}"', _a["only-available-in-window"
      /* AVAILABLE_IN_WINDOW */
      ] = 'This method is available in a Window context.', _a["only-available-in-sw"
      /* AVAILABLE_IN_SW */
      ] = 'This method is available in a service worker context.', _a["permission-default"
      /* PERMISSION_DEFAULT */
      ] = 'The notification permission was not granted and dismissed instead.', _a["permission-blocked"
      /* PERMISSION_BLOCKED */
      ] = 'The notification permission was not granted and blocked instead.', _a["unsupported-browser"
      /* UNSUPPORTED_BROWSER */
      ] = "This browser doesn't support the API's required to use the firebase SDK.", _a["failed-service-worker-registration"
      /* FAILED_DEFAULT_REGISTRATION */
      ] = 'We are unable to register the default service worker. {$browserErrorMessage}', _a["token-subscribe-failed"
      /* TOKEN_SUBSCRIBE_FAILED */
      ] = 'A problem occurred while subscribing the user to FCM: {$errorInfo}', _a["token-subscribe-no-token"
      /* TOKEN_SUBSCRIBE_NO_TOKEN */
      ] = 'FCM returned no token when subscribing the user to push.', _a["token-unsubscribe-failed"
      /* TOKEN_UNSUBSCRIBE_FAILED */
      ] = 'A problem occurred while unsubscribing the ' + 'user from FCM: {$errorInfo}', _a["token-update-failed"
      /* TOKEN_UPDATE_FAILED */
      ] = 'A problem occurred while updating the user from FCM: {$errorInfo}', _a["token-update-no-token"
      /* TOKEN_UPDATE_NO_TOKEN */
      ] = 'FCM returned no token when updating the user to push.', _a["use-sw-after-get-token"
      /* USE_SW_AFTER_GET_TOKEN */
      ] = 'The useServiceWorker() method may only be called once and must be ' + 'called before calling getToken() to ensure your service worker is used.', _a["invalid-sw-registration"
      /* INVALID_SW_REGISTRATION */
      ] = 'The input to useServiceWorker() must be a ServiceWorkerRegistration.', _a["invalid-bg-handler"
      /* INVALID_BG_HANDLER */
      ] = 'The input to setBackgroundMessageHandler() must be a function.', _a["invalid-vapid-key"
      /* INVALID_VAPID_KEY */
      ] = 'The public VAPID key must be a string.', _a["use-vapid-key-after-get-token"
      /* USE_VAPID_KEY_AFTER_GET_TOKEN */
      ] = 'The usePublicVapidKey() method may only be called once and must be ' + 'called before calling getToken() to ensure your VAPID key is used.', _a);
      var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["ErrorFactory"]('messaging', 'Messaging', ERROR_MAP);
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var DEFAULT_SW_PATH = '/firebase-messaging-sw.js';
      var DEFAULT_SW_SCOPE = '/firebase-cloud-messaging-push-scope';
      var DEFAULT_VAPID_KEY = 'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4';
      var ENDPOINT = 'https://fcmregistrations.googleapis.com/v1';
      /** Key of FCM Payload in Notification's data field. */

      var FCM_MSG = 'FCM_MSG';
      var CONSOLE_CAMPAIGN_ID = 'google.c.a.c_id';
      var CONSOLE_CAMPAIGN_NAME = 'google.c.a.c_l';
      var CONSOLE_CAMPAIGN_TIME = 'google.c.a.ts';
      /** Set to '1' if Analytics is enabled for the campaign */

      var CONSOLE_CAMPAIGN_ANALYTICS_ENABLED = 'google.c.a.e';
      var TAG = 'FirebaseMessaging: ';
      /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
       * in compliance with the License. You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software distributed under the License
       * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
       * or implied. See the License for the specific language governing permissions and limitations under
       * the License.
       */

      var MessageType;

      (function (MessageType) {
        MessageType["PUSH_RECEIVED"] = "push-received";
        MessageType["NOTIFICATION_CLICKED"] = "notification-clicked";
      })(MessageType || (MessageType = {}));
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function arrayToBase64(array) {
        var uint8Array = new Uint8Array(array);
        var base64String = btoa(String.fromCharCode.apply(String, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spread"])(uint8Array)));
        return base64String.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
      }

      function base64ToArray(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
        var rawData = atob(base64);
        var outputArray = new Uint8Array(rawData.length);

        for (var i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }

        return outputArray;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var OLD_DB_NAME = 'fcm_token_details_db';
      /**
       * The last DB version of 'fcm_token_details_db' was 4. This is one higher, so that the upgrade
       * callback is called for all versions of the old DB.
       */

      var OLD_DB_VERSION = 5;
      var OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';

      function migrateOldDatabase(senderId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var databases, dbNames, tokenDetails, db;

          var _this = this;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!('databases' in indexedDB)) return [3
                /*break*/
                , 2];
                return [4
                /*yield*/
                , indexedDB.databases()];

              case 1:
                databases = _a.sent();
                dbNames = databases.map(function (db) {
                  return db.name;
                });

                if (!dbNames.includes(OLD_DB_NAME)) {
                  // old DB didn't exist, no need to open.
                  return [2
                  /*return*/
                  , null];
                }

                _a.label = 2;

              case 2:
                tokenDetails = null;
                return [4
                /*yield*/
                , Object(idb__WEBPACK_IMPORTED_MODULE_4__["openDb"])(OLD_DB_NAME, OLD_DB_VERSION, function (db) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(_this, void 0, void 0, function () {
                    var objectStore, value, oldDetails, oldDetails, oldDetails;

                    var _a;

                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
                      switch (_b.label) {
                        case 0:
                          if (db.oldVersion < 2) {
                            // Database too old, skip migration.
                            return [2
                            /*return*/
                            ];
                          }

                          if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
                            // Database did not exist. Nothing to do.
                            return [2
                            /*return*/
                            ];
                          }

                          objectStore = db.transaction.objectStore(OLD_OBJECT_STORE_NAME);
                          return [4
                          /*yield*/
                          , objectStore.index('fcmSenderId').get(senderId)];

                        case 1:
                          value = _b.sent();
                          return [4
                          /*yield*/
                          , objectStore.clear()];

                        case 2:
                          _b.sent();

                          if (!value) {
                            // No entry in the database, nothing to migrate.
                            return [2
                            /*return*/
                            ];
                          }

                          if (db.oldVersion === 2) {
                            oldDetails = value;

                            if (!oldDetails.auth || !oldDetails.p256dh || !oldDetails.endpoint) {
                              return [2
                              /*return*/
                              ];
                            }

                            tokenDetails = {
                              token: oldDetails.fcmToken,
                              createTime: (_a = oldDetails.createTime) !== null && _a !== void 0 ? _a : Date.now(),
                              subscriptionOptions: {
                                auth: oldDetails.auth,
                                p256dh: oldDetails.p256dh,
                                endpoint: oldDetails.endpoint,
                                swScope: oldDetails.swScope,
                                vapidKey: typeof oldDetails.vapidKey === 'string' ? oldDetails.vapidKey : arrayToBase64(oldDetails.vapidKey)
                              }
                            };
                          } else if (db.oldVersion === 3) {
                            oldDetails = value;
                            tokenDetails = {
                              token: oldDetails.fcmToken,
                              createTime: oldDetails.createTime,
                              subscriptionOptions: {
                                auth: arrayToBase64(oldDetails.auth),
                                p256dh: arrayToBase64(oldDetails.p256dh),
                                endpoint: oldDetails.endpoint,
                                swScope: oldDetails.swScope,
                                vapidKey: arrayToBase64(oldDetails.vapidKey)
                              }
                            };
                          } else if (db.oldVersion === 4) {
                            oldDetails = value;
                            tokenDetails = {
                              token: oldDetails.fcmToken,
                              createTime: oldDetails.createTime,
                              subscriptionOptions: {
                                auth: arrayToBase64(oldDetails.auth),
                                p256dh: arrayToBase64(oldDetails.p256dh),
                                endpoint: oldDetails.endpoint,
                                swScope: oldDetails.swScope,
                                vapidKey: arrayToBase64(oldDetails.vapidKey)
                              }
                            };
                          }

                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                })];

              case 3:
                db = _a.sent();
                db.close(); // Delete all old databases.

                return [4
                /*yield*/
                , Object(idb__WEBPACK_IMPORTED_MODULE_4__["deleteDb"])(OLD_DB_NAME)];

              case 4:
                // Delete all old databases.
                _a.sent();

                return [4
                /*yield*/
                , Object(idb__WEBPACK_IMPORTED_MODULE_4__["deleteDb"])('fcm_vapid_details_db')];

              case 5:
                _a.sent();

                return [4
                /*yield*/
                , Object(idb__WEBPACK_IMPORTED_MODULE_4__["deleteDb"])('undefined')];

              case 6:
                _a.sent();

                return [2
                /*return*/
                , checkTokenDetails(tokenDetails) ? tokenDetails : null];
            }
          });
        });
      }

      function checkTokenDetails(tokenDetails) {
        if (!tokenDetails || !tokenDetails.subscriptionOptions) {
          return false;
        }

        var subscriptionOptions = tokenDetails.subscriptionOptions;
        return typeof tokenDetails.createTime === 'number' && tokenDetails.createTime > 0 && typeof tokenDetails.token === 'string' && tokenDetails.token.length > 0 && typeof subscriptionOptions.auth === 'string' && subscriptionOptions.auth.length > 0 && typeof subscriptionOptions.p256dh === 'string' && subscriptionOptions.p256dh.length > 0 && typeof subscriptionOptions.endpoint === 'string' && subscriptionOptions.endpoint.length > 0 && typeof subscriptionOptions.swScope === 'string' && subscriptionOptions.swScope.length > 0 && typeof subscriptionOptions.vapidKey === 'string' && subscriptionOptions.vapidKey.length > 0;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Exported for tests.


      var DATABASE_NAME = 'firebase-messaging-database';
      var DATABASE_VERSION = 1;
      var OBJECT_STORE_NAME = 'firebase-messaging-store';
      var dbPromise = null;

      function getDbPromise() {
        if (!dbPromise) {
          dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_4__["openDb"])(DATABASE_NAME, DATABASE_VERSION, function (upgradeDb) {
            // We don't use 'break' in this switch statement, the fall-through behavior is what we want,
            // because if there are multiple versions between the old version and the current version, we
            // want ALL the migrations that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch (upgradeDb.oldVersion) {
              case 0:
                upgradeDb.createObjectStore(OBJECT_STORE_NAME);
            }
          });
        }

        return dbPromise;
      }
      /** Gets record(s) from the objectStore that match the given key. */


      function dbGet(firebaseDependencies) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var key, db, tokenDetails, oldTokenDetails;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                key = getKey(firebaseDependencies);
                return [4
                /*yield*/
                , getDbPromise()];

              case 1:
                db = _a.sent();
                return [4
                /*yield*/
                , db.transaction(OBJECT_STORE_NAME).objectStore(OBJECT_STORE_NAME).get(key)];

              case 2:
                tokenDetails = _a.sent();
                if (!tokenDetails) return [3
                /*break*/
                , 3];
                return [2
                /*return*/
                , tokenDetails];

              case 3:
                return [4
                /*yield*/
                , migrateOldDatabase(firebaseDependencies.appConfig.senderId)];

              case 4:
                oldTokenDetails = _a.sent();
                if (!oldTokenDetails) return [3
                /*break*/
                , 6];
                return [4
                /*yield*/
                , dbSet(firebaseDependencies, oldTokenDetails)];

              case 5:
                _a.sent();

                return [2
                /*return*/
                , oldTokenDetails];

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /** Assigns or overwrites the record for the given key with the given value. */


      function dbSet(firebaseDependencies, tokenDetails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var key, db, tx;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                key = getKey(firebaseDependencies);
                return [4
                /*yield*/
                , getDbPromise()];

              case 1:
                db = _a.sent();
                tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                return [4
                /*yield*/
                , tx.objectStore(OBJECT_STORE_NAME).put(tokenDetails, key)];

              case 2:
                _a.sent();

                return [4
                /*yield*/
                , tx.complete];

              case 3:
                _a.sent();

                return [2
                /*return*/
                , tokenDetails];
            }
          });
        });
      }
      /** Removes record(s) from the objectStore that match the given key. */


      function dbRemove(firebaseDependencies) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var key, db, tx;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                key = getKey(firebaseDependencies);
                return [4
                /*yield*/
                , getDbPromise()];

              case 1:
                db = _a.sent();
                tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                return [4
                /*yield*/
                , tx.objectStore(OBJECT_STORE_NAME)["delete"](key)];

              case 2:
                _a.sent();

                return [4
                /*yield*/
                , tx.complete];

              case 3:
                _a.sent();

                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function getKey(_a) {
        var appConfig = _a.appConfig;
        return appConfig.appId;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function requestGetToken(firebaseDependencies, subscriptionOptions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var headers, body, subscribeOptions, responseData, response, err_1, message;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , getHeaders(firebaseDependencies)];

              case 1:
                headers = _a.sent();
                body = getBody(subscriptionOptions);
                subscribeOptions = {
                  method: 'POST',
                  headers: headers,
                  body: JSON.stringify(body)
                };
                _a.label = 2;

              case 2:
                _a.trys.push([2, 5,, 6]);

                return [4
                /*yield*/
                , fetch(getEndpoint(firebaseDependencies.appConfig), subscribeOptions)];

              case 3:
                response = _a.sent();
                return [4
                /*yield*/
                , response.json()];

              case 4:
                responseData = _a.sent();
                return [3
                /*break*/
                , 6];

              case 5:
                err_1 = _a.sent();
                throw ERROR_FACTORY.create("token-subscribe-failed"
                /* TOKEN_SUBSCRIBE_FAILED */
                , {
                  errorInfo: err_1
                });

              case 6:
                if (responseData.error) {
                  message = responseData.error.message;
                  throw ERROR_FACTORY.create("token-subscribe-failed"
                  /* TOKEN_SUBSCRIBE_FAILED */
                  , {
                    errorInfo: message
                  });
                }

                if (!responseData.token) {
                  throw ERROR_FACTORY.create("token-subscribe-no-token"
                  /* TOKEN_SUBSCRIBE_NO_TOKEN */
                  );
                }

                return [2
                /*return*/
                , responseData.token];
            }
          });
        });
      }

      function requestUpdateToken(firebaseDependencies, tokenDetails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var headers, body, updateOptions, responseData, response, err_2, message;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , getHeaders(firebaseDependencies)];

              case 1:
                headers = _a.sent();
                body = getBody(tokenDetails.subscriptionOptions);
                updateOptions = {
                  method: 'PATCH',
                  headers: headers,
                  body: JSON.stringify(body)
                };
                _a.label = 2;

              case 2:
                _a.trys.push([2, 5,, 6]);

                return [4
                /*yield*/
                , fetch(getEndpoint(firebaseDependencies.appConfig) + "/" + tokenDetails.token, updateOptions)];

              case 3:
                response = _a.sent();
                return [4
                /*yield*/
                , response.json()];

              case 4:
                responseData = _a.sent();
                return [3
                /*break*/
                , 6];

              case 5:
                err_2 = _a.sent();
                throw ERROR_FACTORY.create("token-update-failed"
                /* TOKEN_UPDATE_FAILED */
                , {
                  errorInfo: err_2
                });

              case 6:
                if (responseData.error) {
                  message = responseData.error.message;
                  throw ERROR_FACTORY.create("token-update-failed"
                  /* TOKEN_UPDATE_FAILED */
                  , {
                    errorInfo: message
                  });
                }

                if (!responseData.token) {
                  throw ERROR_FACTORY.create("token-update-no-token"
                  /* TOKEN_UPDATE_NO_TOKEN */
                  );
                }

                return [2
                /*return*/
                , responseData.token];
            }
          });
        });
      }

      function requestDeleteToken(firebaseDependencies, token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var headers, unsubscribeOptions, response, responseData, message, err_3;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , getHeaders(firebaseDependencies)];

              case 1:
                headers = _a.sent();
                unsubscribeOptions = {
                  method: 'DELETE',
                  headers: headers
                };
                _a.label = 2;

              case 2:
                _a.trys.push([2, 5,, 6]);

                return [4
                /*yield*/
                , fetch(getEndpoint(firebaseDependencies.appConfig) + "/" + token, unsubscribeOptions)];

              case 3:
                response = _a.sent();
                return [4
                /*yield*/
                , response.json()];

              case 4:
                responseData = _a.sent();

                if (responseData.error) {
                  message = responseData.error.message;
                  throw ERROR_FACTORY.create("token-unsubscribe-failed"
                  /* TOKEN_UNSUBSCRIBE_FAILED */
                  , {
                    errorInfo: message
                  });
                }

                return [3
                /*break*/
                , 6];

              case 5:
                err_3 = _a.sent();
                throw ERROR_FACTORY.create("token-unsubscribe-failed"
                /* TOKEN_UNSUBSCRIBE_FAILED */
                , {
                  errorInfo: err_3
                });

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function getEndpoint(_a) {
        var projectId = _a.projectId;
        return ENDPOINT + "/projects/" + projectId + "/registrations";
      }

      function getHeaders(_a) {
        var appConfig = _a.appConfig,
            installations = _a.installations;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var authToken;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , installations.getToken()];

              case 1:
                authToken = _b.sent();
                return [2
                /*return*/
                , new Headers({
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  'x-goog-api-key': appConfig.apiKey,
                  'x-goog-firebase-installations-auth': "FIS " + authToken
                })];
            }
          });
        });
      }

      function getBody(_a) {
        var p256dh = _a.p256dh,
            auth = _a.auth,
            endpoint = _a.endpoint,
            vapidKey = _a.vapidKey;
        var body = {
          web: {
            endpoint: endpoint,
            auth: auth,
            p256dh: p256dh
          }
        };

        if (vapidKey !== DEFAULT_VAPID_KEY) {
          body.web.applicationPubKey = vapidKey;
        }

        return body;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** UpdateRegistration will be called once every week. */


      var TOKEN_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

      function getToken(firebaseDependencies, swRegistration, vapidKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var pushSubscription, tokenDetails, subscriptionOptions, e_1;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (Notification.permission !== 'granted') {
                  throw ERROR_FACTORY.create("permission-blocked"
                  /* PERMISSION_BLOCKED */
                  );
                }

                return [4
                /*yield*/
                , getPushSubscription(swRegistration, vapidKey)];

              case 1:
                pushSubscription = _a.sent();
                return [4
                /*yield*/
                , dbGet(firebaseDependencies)];

              case 2:
                tokenDetails = _a.sent();
                subscriptionOptions = {
                  vapidKey: vapidKey,
                  swScope: swRegistration.scope,
                  endpoint: pushSubscription.endpoint,
                  auth: arrayToBase64(pushSubscription.getKey('auth')),
                  p256dh: arrayToBase64(pushSubscription.getKey('p256dh'))
                };
                if (!!tokenDetails) return [3
                /*break*/
                , 3]; // No token, get a new one.

                return [2
                /*return*/
                , getNewToken(firebaseDependencies, subscriptionOptions)];

              case 3:
                if (!!isTokenValid(tokenDetails.subscriptionOptions, subscriptionOptions)) return [3
                /*break*/
                , 8];
                _a.label = 4;

              case 4:
                _a.trys.push([4, 6,, 7]);

                return [4
                /*yield*/
                , requestDeleteToken(firebaseDependencies, tokenDetails.token)];

              case 5:
                _a.sent();

                return [3
                /*break*/
                , 7];

              case 6:
                e_1 = _a.sent(); // Suppress errors because of #2364

                console.warn(e_1);
                return [3
                /*break*/
                , 7];

              case 7:
                return [2
                /*return*/
                , getNewToken(firebaseDependencies, subscriptionOptions)];

              case 8:
                if (Date.now() >= tokenDetails.createTime + TOKEN_EXPIRATION_MS) {
                  // Weekly token refresh
                  return [2
                  /*return*/
                  , updateToken({
                    token: tokenDetails.token,
                    createTime: Date.now(),
                    subscriptionOptions: subscriptionOptions
                  }, firebaseDependencies, swRegistration)];
                } else {
                  // Valid token, nothing to do.
                  return [2
                  /*return*/
                  , tokenDetails.token];
                }

              case 9:
                return [2
                /*return*/
                ];
            }
          });
        });
      }
      /**
       * This method deletes the token from the database, unsubscribes the token from FCM, and unregisters
       * the push subscription if it exists.
       */


      function deleteToken(firebaseDependencies, swRegistration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var tokenDetails, pushSubscription;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , dbGet(firebaseDependencies)];

              case 1:
                tokenDetails = _a.sent();
                if (!tokenDetails) return [3
                /*break*/
                , 4];
                return [4
                /*yield*/
                , requestDeleteToken(firebaseDependencies, tokenDetails.token)];

              case 2:
                _a.sent();

                return [4
                /*yield*/
                , dbRemove(firebaseDependencies)];

              case 3:
                _a.sent();

                _a.label = 4;

              case 4:
                return [4
                /*yield*/
                , swRegistration.pushManager.getSubscription()];

              case 5:
                pushSubscription = _a.sent();

                if (pushSubscription) {
                  return [2
                  /*return*/
                  , pushSubscription.unsubscribe()];
                } // If there's no SW, consider it a success.


                return [2
                /*return*/
                , true];
            }
          });
        });
      }

      function updateToken(tokenDetails, firebaseDependencies, swRegistration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var updatedToken, updatedTokenDetails, e_2;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 3,, 5]);

                return [4
                /*yield*/
                , requestUpdateToken(firebaseDependencies, tokenDetails)];

              case 1:
                updatedToken = _a.sent();
                updatedTokenDetails = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, tokenDetails), {
                  token: updatedToken,
                  createTime: Date.now()
                });
                return [4
                /*yield*/
                , dbSet(firebaseDependencies, updatedTokenDetails)];

              case 2:
                _a.sent();

                return [2
                /*return*/
                , updatedToken];

              case 3:
                e_2 = _a.sent();
                return [4
                /*yield*/
                , deleteToken(firebaseDependencies, swRegistration)];

              case 4:
                _a.sent();

                throw e_2;

              case 5:
                return [2
                /*return*/
                ];
            }
          });
        });
      }

      function getNewToken(firebaseDependencies, subscriptionOptions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var token, tokenDetails;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , requestGetToken(firebaseDependencies, subscriptionOptions)];

              case 1:
                token = _a.sent();
                tokenDetails = {
                  token: token,
                  createTime: Date.now(),
                  subscriptionOptions: subscriptionOptions
                };
                return [4
                /*yield*/
                , dbSet(firebaseDependencies, tokenDetails)];

              case 2:
                _a.sent();

                return [2
                /*return*/
                , tokenDetails.token];
            }
          });
        });
      }
      /**
       * Gets a PushSubscription for the current user.
       */


      function getPushSubscription(swRegistration, vapidKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var subscription;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , swRegistration.pushManager.getSubscription()];

              case 1:
                subscription = _a.sent();

                if (subscription) {
                  return [2
                  /*return*/
                  , subscription];
                }

                return [2
                /*return*/
                , swRegistration.pushManager.subscribe({
                  userVisibleOnly: true,
                  // Chrome <= 75 doesn't support base64-encoded VAPID key. For backward compatibility, VAPID key
                  // submitted to pushManager#subscribe must be of type Uint8Array.
                  applicationServerKey: base64ToArray(vapidKey)
                })];
            }
          });
        });
      }
      /**
       * Checks if the saved tokenDetails object matches the configuration provided.
       */


      function isTokenValid(dbOptions, currentOptions) {
        var isVapidKeyEqual = currentOptions.vapidKey === dbOptions.vapidKey;
        var isEndpointEqual = currentOptions.endpoint === dbOptions.endpoint;
        var isAuthEqual = currentOptions.auth === dbOptions.auth;
        var isP256dhEqual = currentOptions.p256dh === dbOptions.p256dh;
        return isVapidKeyEqual && isEndpointEqual && isAuthEqual && isP256dhEqual;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function externalizePayload(internalPayload) {
        var payload = {
          from: internalPayload.from,
          // eslint-disable-next-line camelcase
          collapseKey: internalPayload.collapse_key
        };
        propagateNotificationPayload(payload, internalPayload);
        propagateDataPayload(payload, internalPayload);
        propagateFcmOptions(payload, internalPayload);
        return payload;
      }

      function propagateNotificationPayload(payload, messagePayloadInternal) {
        if (!messagePayloadInternal.notification) {
          return;
        }

        payload.notification = {};
        var title = messagePayloadInternal.notification.title;

        if (!!title) {
          payload.notification.title = title;
        }

        var body = messagePayloadInternal.notification.body;

        if (!!body) {
          payload.notification.body = body;
        }

        var image = messagePayloadInternal.notification.image;

        if (!!image) {
          payload.notification.image = image;
        }
      }

      function propagateDataPayload(payload, messagePayloadInternal) {
        if (!messagePayloadInternal.data) {
          return;
        }

        payload.data = messagePayloadInternal.data;
      }

      function propagateFcmOptions(payload, messagePayloadInternal) {
        if (!messagePayloadInternal.fcmOptions) {
          return;
        }

        payload.fcmOptions = {};
        var link = messagePayloadInternal.fcmOptions.link;

        if (!!link) {
          payload.fcmOptions.link = link;
        } // eslint-disable-next-line camelcase


        var analyticsLabel = messagePayloadInternal.fcmOptions.analytics_label;

        if (!!analyticsLabel) {
          payload.fcmOptions.analyticsLabel = analyticsLabel;
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function isConsoleMessage(data) {
        // This message has a campaign ID, meaning it was sent using the Firebase Console.
        return typeof data === 'object' && !!data && CONSOLE_CAMPAIGN_ID in data;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Returns a promise that resolves after given time passes. */


      function sleep(ms) {
        return new Promise(function (resolve) {
          setTimeout(resolve, ms);
        });
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var SwController =
      /** @class */
      function () {
        function SwController(firebaseDependencies) {
          var _this = this;

          this.firebaseDependencies = firebaseDependencies; // A boolean flag to determine wether an app is using onBackgroundMessage or
          // setBackgroundMessageHandler. onBackgroundMessage will receive a MessagePayload regardless of if
          // a notification is displayed. Whereas, setBackgroundMessageHandler will swallow the
          // MessagePayload if a NotificationPayload is included.

          this.isOnBackgroundMessageUsed = null;
          this.vapidKey = null;
          this.bgMessageHandler = null;
          self.addEventListener('push', function (e) {
            e.waitUntil(_this.onPush(e));
          });
          self.addEventListener('pushsubscriptionchange', function (e) {
            e.waitUntil(_this.onSubChange(e));
          });
          self.addEventListener('notificationclick', function (e) {
            e.waitUntil(_this.onNotificationClick(e));
          });
        }

        Object.defineProperty(SwController.prototype, "app", {
          get: function get() {
            return this.firebaseDependencies.app;
          },
          enumerable: false,
          configurable: true
        });
        /**
         * @deprecated. Use onBackgroundMessage(nextOrObserver: NextFn<object> | Observer<object>):
         * Unsubscribe instead.
         *
         * Calling setBackgroundMessageHandler will opt in to some specific behaviors.
         *
         * 1.) If a notification doesn't need to be shown due to a window already being visible, then push
         * messages will be sent to the page. 2.) If a notification needs to be shown, and the message
         * contains no notification data this method will be called and the promise it returns will be
         * passed to event.waitUntil. If you do not set this callback then all push messages will let and
         * the developer can handle them in a their own 'push' event callback
         *
         * @param callback The callback to be called when a push message is received and a notification
         * must be shown. The callback will be given the data from the push message.
         */

        SwController.prototype.setBackgroundMessageHandler = function (callback) {
          this.isOnBackgroundMessageUsed = false;

          if (!callback || typeof callback !== 'function') {
            throw ERROR_FACTORY.create("invalid-bg-handler"
            /* INVALID_BG_HANDLER */
            );
          }

          this.bgMessageHandler = callback;
        };

        SwController.prototype.onBackgroundMessage = function (nextOrObserver) {
          var _this = this;

          this.isOnBackgroundMessageUsed = true;
          this.bgMessageHandler = nextOrObserver;
          return function () {
            _this.bgMessageHandler = null;
          };
        }; // TODO: Remove getToken from SW Controller. Calling this from an old SW can cause all kinds of
        // trouble.


        SwController.prototype.getToken = function () {
          var _a, _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var tokenDetails;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_c) {
              switch (_c.label) {
                case 0:
                  if (!!this.vapidKey) return [3
                  /*break*/
                  , 2];
                  return [4
                  /*yield*/
                  , dbGet(this.firebaseDependencies)];

                case 1:
                  tokenDetails = _c.sent();
                  this.vapidKey = (_b = (_a = tokenDetails === null || tokenDetails === void 0 ? void 0 : tokenDetails.subscriptionOptions) === null || _a === void 0 ? void 0 : _a.vapidKey) !== null && _b !== void 0 ? _b : DEFAULT_VAPID_KEY;
                  _c.label = 2;

                case 2:
                  return [2
                  /*return*/
                  , getToken(this.firebaseDependencies, self.registration, this.vapidKey)];
              }
            });
          });
        }; // TODO: Remove deleteToken from SW Controller. Calling this from an old SW can cause all kinds of
        // trouble.


        SwController.prototype.deleteToken = function () {
          return deleteToken(this.firebaseDependencies, self.registration);
        };

        SwController.prototype.requestPermission = function () {
          throw ERROR_FACTORY.create("only-available-in-window"
          /* AVAILABLE_IN_WINDOW */
          );
        }; // TODO: Remove this together with getToken from SW Controller.


        SwController.prototype.usePublicVapidKey = function (vapidKey) {
          if (this.vapidKey !== null) {
            throw ERROR_FACTORY.create("use-vapid-key-after-get-token"
            /* USE_VAPID_KEY_AFTER_GET_TOKEN */
            );
          }

          if (typeof vapidKey !== 'string' || vapidKey.length === 0) {
            throw ERROR_FACTORY.create("invalid-vapid-key"
            /* INVALID_VAPID_KEY */
            );
          }

          this.vapidKey = vapidKey;
        };

        SwController.prototype.useServiceWorker = function () {
          throw ERROR_FACTORY.create("only-available-in-window"
          /* AVAILABLE_IN_WINDOW */
          );
        };

        SwController.prototype.onMessage = function () {
          throw ERROR_FACTORY.create("only-available-in-window"
          /* AVAILABLE_IN_WINDOW */
          );
        };

        SwController.prototype.onTokenRefresh = function () {
          throw ERROR_FACTORY.create("only-available-in-window"
          /* AVAILABLE_IN_WINDOW */
          );
        };
        /**
         * A handler for push events that shows notifications based on the content of the payload.
         *
         * The payload must be a JSON-encoded Object with a `notification` key. The value of the
         * `notification` property will be used as the NotificationOptions object passed to
         * showNotification. Additionally, the `title` property of the notification object will be used as
         * the title.
         *
         * If there is no notification data in the payload then no notification will be shown.
         */


        SwController.prototype.onPush = function (event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var internalPayload, clientList, isNotificationShown, payload;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  internalPayload = getMessagePayloadInternal(event);

                  if (!internalPayload) {
                    console.debug(TAG + 'failed to get parsed MessagePayload from the PushEvent. Skip handling the push.');
                    return [2
                    /*return*/
                    ];
                  }

                  return [4
                  /*yield*/
                  , getClientList()];

                case 1:
                  clientList = _a.sent();

                  if (hasVisibleClients(clientList)) {
                    return [2
                    /*return*/
                    , sendMessagePayloadInternalToWindows(clientList, internalPayload)];
                  }

                  isNotificationShown = false;
                  if (!!!internalPayload.notification) return [3
                  /*break*/
                  , 3];
                  return [4
                  /*yield*/
                  , showNotification(wrapInternalPayload(internalPayload))];

                case 2:
                  _a.sent();

                  isNotificationShown = true;
                  _a.label = 3;

                case 3:
                  // MessagePayload is only passed to `onBackgroundMessage`. Skip passing MessagePayload for
                  // the legacy `setBackgroundMessageHandler` to preserve the SDK behaviors.
                  if (isNotificationShown === true && this.isOnBackgroundMessageUsed === false) {
                    return [2
                    /*return*/
                    ];
                  }

                  if (!!this.bgMessageHandler) {
                    payload = externalizePayload(internalPayload);

                    if (typeof this.bgMessageHandler === 'function') {
                      this.bgMessageHandler(payload);
                    } else {
                      this.bgMessageHandler.next(payload);
                    }
                  }

                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        SwController.prototype.onSubChange = function (event) {
          var _a, _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var newSubscription, tokenDetails;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_c) {
              switch (_c.label) {
                case 0:
                  newSubscription = event.newSubscription;
                  if (!!newSubscription) return [3
                  /*break*/
                  , 2]; // Subscription revoked, delete token

                  return [4
                  /*yield*/
                  , deleteToken(this.firebaseDependencies, self.registration)];

                case 1:
                  // Subscription revoked, delete token
                  _c.sent();

                  return [2
                  /*return*/
                  ];

                case 2:
                  return [4
                  /*yield*/
                  , dbGet(this.firebaseDependencies)];

                case 3:
                  tokenDetails = _c.sent();
                  return [4
                  /*yield*/
                  , deleteToken(this.firebaseDependencies, self.registration)];

                case 4:
                  _c.sent();

                  return [4
                  /*yield*/
                  , getToken(this.firebaseDependencies, self.registration, (_b = (_a = tokenDetails === null || tokenDetails === void 0 ? void 0 : tokenDetails.subscriptionOptions) === null || _a === void 0 ? void 0 : _a.vapidKey) !== null && _b !== void 0 ? _b : DEFAULT_VAPID_KEY)];

                case 5:
                  _c.sent();

                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        SwController.prototype.onNotificationClick = function (event) {
          var _a, _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var internalPayload, link, url, originUrl, client;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_c) {
              switch (_c.label) {
                case 0:
                  internalPayload = (_b = (_a = event.notification) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b[FCM_MSG];

                  if (!internalPayload) {
                    return [2
                    /*return*/
                    ];
                  } else if (event.action) {
                    // User clicked on an action button. This will allow developers to act on action button clicks
                    // by using a custom onNotificationClick listener that they define.
                    return [2
                    /*return*/
                    ];
                  } // Prevent other listeners from receiving the event


                  event.stopImmediatePropagation();
                  event.notification.close();
                  link = getLink(internalPayload);

                  if (!link) {
                    return [2
                    /*return*/
                    ];
                  }

                  url = new URL(link, self.location.href);
                  originUrl = new URL(self.location.origin);

                  if (url.host !== originUrl.host) {
                    return [2
                    /*return*/
                    ];
                  }

                  return [4
                  /*yield*/
                  , getWindowClient(url)];

                case 1:
                  client = _c.sent();
                  if (!!client) return [3
                  /*break*/
                  , 4];
                  return [4
                  /*yield*/
                  , self.clients.openWindow(link)];

                case 2:
                  client = _c.sent(); // Wait three seconds for the client to initialize and set up the message handler so that it
                  // can receive the message.

                  return [4
                  /*yield*/
                  , sleep(3000)];

                case 3:
                  // Wait three seconds for the client to initialize and set up the message handler so that it
                  // can receive the message.
                  _c.sent();

                  return [3
                  /*break*/
                  , 6];

                case 4:
                  return [4
                  /*yield*/
                  , client.focus()];

                case 5:
                  client = _c.sent();
                  _c.label = 6;

                case 6:
                  if (!client) {
                    // Window Client will not be returned if it's for a third party origin.
                    return [2
                    /*return*/
                    ];
                  }

                  internalPayload.messageType = MessageType.NOTIFICATION_CLICKED;
                  internalPayload.isFirebaseMessaging = true;
                  return [2
                  /*return*/
                  , client.postMessage(internalPayload)];
              }
            });
          });
        };

        return SwController;
      }();

      function wrapInternalPayload(internalPayload) {
        var _a;

        var wrappedInternalPayload = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, internalPayload.notification); // Put the message payload under FCM_MSG name so we can identify the notification as being an FCM
        // notification vs a notification from somewhere else (i.e. normal web push or developer generated
        // notification).

        wrappedInternalPayload.data = (_a = {}, _a[FCM_MSG] = internalPayload, _a);
        return wrappedInternalPayload;
      }

      function getMessagePayloadInternal(_a) {
        var data = _a.data;

        if (!data) {
          return null;
        }

        try {
          return data.json();
        } catch (err) {
          // Not JSON so not an FCM message.
          return null;
        }
      }
      /**
       * @param url The URL to look for when focusing a client.
       * @return Returns an existing window client or a newly opened WindowClient.
       */


      function getWindowClient(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
          var clientList, clientList_1, clientList_1_1, client, clientUrl;

          var e_1, _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
            switch (_b.label) {
              case 0:
                return [4
                /*yield*/
                , getClientList()];

              case 1:
                clientList = _b.sent();

                try {
                  for (clientList_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(clientList), clientList_1_1 = clientList_1.next(); !clientList_1_1.done; clientList_1_1 = clientList_1.next()) {
                    client = clientList_1_1.value;
                    clientUrl = new URL(client.url, self.location.href);

                    if (url.host === clientUrl.host) {
                      return [2
                      /*return*/
                      , client];
                    }
                  }
                } catch (e_1_1) {
                  e_1 = {
                    error: e_1_1
                  };
                } finally {
                  try {
                    if (clientList_1_1 && !clientList_1_1.done && (_a = clientList_1["return"])) _a.call(clientList_1);
                  } finally {
                    if (e_1) throw e_1.error;
                  }
                }

                return [2
                /*return*/
                , null];
            }
          });
        });
      }
      /**
       * @returns If there is currently a visible WindowClient, this method will resolve to true,
       * otherwise false.
       */


      function hasVisibleClients(clientList) {
        return clientList.some(function (client) {
          return client.visibilityState === 'visible' && // Ignore chrome-extension clients as that matches the background pages of extensions, which
          // are always considered visible for some reason.
          !client.url.startsWith('chrome-extension://');
        });
      }

      function sendMessagePayloadInternalToWindows(clientList, internalPayload) {
        var e_2, _a;

        internalPayload.isFirebaseMessaging = true;
        internalPayload.messageType = MessageType.PUSH_RECEIVED;

        try {
          for (var clientList_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(clientList), clientList_2_1 = clientList_2.next(); !clientList_2_1.done; clientList_2_1 = clientList_2.next()) {
            var client = clientList_2_1.value;
            client.postMessage(internalPayload);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (clientList_2_1 && !clientList_2_1.done && (_a = clientList_2["return"])) _a.call(clientList_2);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }

      function getClientList() {
        return self.clients.matchAll({
          type: 'window',
          includeUncontrolled: true // TS doesn't know that "type: 'window'" means it'll return WindowClient[]

        });
      }

      function showNotification(notificationPayloadInternal) {
        var _a; // Note: Firefox does not support the maxActions property.
        // https://developer.mozilla.org/en-US/docs/Web/API/notification/maxActions


        var actions = notificationPayloadInternal.actions;
        var maxActions = Notification.maxActions;

        if (actions && maxActions && actions.length > maxActions) {
          console.warn("This browser only supports " + maxActions + " actions. The remaining actions will not be displayed.");
        }

        return self.registration.showNotification((_a =
        /* title= */
        notificationPayloadInternal.title) !== null && _a !== void 0 ? _a : '', notificationPayloadInternal);
      }

      function getLink(payload) {
        var _a, _b, _c; // eslint-disable-next-line camelcase


        var link = (_b = (_a = payload.fcmOptions) === null || _a === void 0 ? void 0 : _a.link) !== null && _b !== void 0 ? _b : (_c = payload.notification) === null || _c === void 0 ? void 0 : _c.click_action;

        if (link) {
          return link;
        }

        if (isConsoleMessage(payload.data)) {
          // Notification created in the Firebase Console. Redirect to origin.
          return self.location.origin;
        } else {
          return null;
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var WindowController =
      /** @class */
      function () {
        function WindowController(firebaseDependencies) {
          var _this = this;

          this.firebaseDependencies = firebaseDependencies;
          this.vapidKey = null;
          this.onMessageCallback = null;
          navigator.serviceWorker.addEventListener('message', function (e) {
            return _this.messageEventListener(e);
          });
        }

        Object.defineProperty(WindowController.prototype, "app", {
          get: function get() {
            return this.firebaseDependencies.app;
          },
          enumerable: false,
          configurable: true
        });

        WindowController.prototype.messageEventListener = function (event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var internalPayload, dataPayload;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  internalPayload = event.data;

                  if (!internalPayload.isFirebaseMessaging) {
                    return [2
                    /*return*/
                    ];
                  } // onMessageCallback is either a function or observer/subscriber.
                  // TODO: in the modularization release, have onMessage handle type MessagePayload as supposed to
                  // the legacy payload where some fields are in snake cases.


                  if (this.onMessageCallback && internalPayload.messageType === MessageType.PUSH_RECEIVED) {
                    if (typeof this.onMessageCallback === 'function') {
                      this.onMessageCallback(stripInternalFields(Object.assign({}, internalPayload)));
                    } else {
                      this.onMessageCallback.next(Object.assign({}, internalPayload));
                    }
                  }

                  dataPayload = internalPayload.data;
                  if (!(isConsoleMessage(dataPayload) && dataPayload[CONSOLE_CAMPAIGN_ANALYTICS_ENABLED] === '1')) return [3
                  /*break*/
                  , 2];
                  return [4
                  /*yield*/
                  , this.logEvent(internalPayload.messageType, dataPayload)];

                case 1:
                  _a.sent();

                  _a.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        WindowController.prototype.getVapidKey = function () {
          return this.vapidKey;
        };

        WindowController.prototype.getSwReg = function () {
          return this.swRegistration;
        };

        WindowController.prototype.getToken = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!(Notification.permission === 'default')) return [3
                  /*break*/
                  , 2];
                  return [4
                  /*yield*/
                  , Notification.requestPermission()];

                case 1:
                  _a.sent();

                  _a.label = 2;

                case 2:
                  if (Notification.permission !== 'granted') {
                    throw ERROR_FACTORY.create("permission-blocked"
                    /* PERMISSION_BLOCKED */
                    );
                  }

                  return [4
                  /*yield*/
                  , this.updateVapidKey(options === null || options === void 0 ? void 0 : options.vapidKey)];

                case 3:
                  _a.sent();

                  return [4
                  /*yield*/
                  , this.updateSwReg(options === null || options === void 0 ? void 0 : options.serviceWorkerRegistration)];

                case 4:
                  _a.sent();

                  return [2
                  /*return*/
                  , getToken(this.firebaseDependencies, this.swRegistration, this.vapidKey)];
              }
            });
          });
        };

        WindowController.prototype.updateVapidKey = function (vapidKey) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              if (!!vapidKey) {
                this.vapidKey = vapidKey;
              } else if (!this.vapidKey) {
                this.vapidKey = DEFAULT_VAPID_KEY;
              }

              return [2
              /*return*/
              ];
            });
          });
        };

        WindowController.prototype.updateSwReg = function (swRegistration) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!(!swRegistration && !this.swRegistration)) return [3
                  /*break*/
                  , 2];
                  return [4
                  /*yield*/
                  , this.registerDefaultSw()];

                case 1:
                  _a.sent();

                  _a.label = 2;

                case 2:
                  if (!swRegistration && !!this.swRegistration) {
                    return [2
                    /*return*/
                    ];
                  }

                  if (!(swRegistration instanceof ServiceWorkerRegistration)) {
                    throw ERROR_FACTORY.create("invalid-sw-registration"
                    /* INVALID_SW_REGISTRATION */
                    );
                  }

                  this.swRegistration = swRegistration;
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        WindowController.prototype.registerDefaultSw = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var _a, e_1;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_b) {
              switch (_b.label) {
                case 0:
                  _b.trys.push([0, 2,, 3]);

                  _a = this;
                  return [4
                  /*yield*/
                  , navigator.serviceWorker.register(DEFAULT_SW_PATH, {
                    scope: DEFAULT_SW_SCOPE
                  })];

                case 1:
                  _a.swRegistration = _b.sent(); // The timing when browser updates sw when sw has an update is unreliable by my experiment. It
                  // leads to version conflict when the SDK upgrades to a newer version in the main page, but sw
                  // is stuck with the old version. For example,
                  // https://github.com/firebase/firebase-js-sdk/issues/2590 The following line reliably updates
                  // sw if there was an update.

                  this.swRegistration.update()["catch"](function () {
                    /* it is non blocking and we don't care if it failed */
                  });
                  return [3
                  /*break*/
                  , 3];

                case 2:
                  e_1 = _b.sent();
                  throw ERROR_FACTORY.create("failed-service-worker-registration"
                  /* FAILED_DEFAULT_REGISTRATION */
                  , {
                    browserErrorMessage: e_1.message
                  });

                case 3:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        WindowController.prototype.deleteToken = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!!this.swRegistration) return [3
                  /*break*/
                  , 2];
                  return [4
                  /*yield*/
                  , this.registerDefaultSw()];

                case 1:
                  _a.sent();

                  _a.label = 2;

                case 2:
                  return [2
                  /*return*/
                  , deleteToken(this.firebaseDependencies, this.swRegistration)];
              }
            });
          });
        };
        /**
         * Request permission if it is not currently granted.
         *
         * @return Resolves if the permission was granted, rejects otherwise.
         *
         * @deprecated Use Notification.requestPermission() instead.
         * https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission
         */


        WindowController.prototype.requestPermission = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var permissionResult;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (Notification.permission === 'granted') {
                    return [2
                    /*return*/
                    ];
                  }

                  return [4
                  /*yield*/
                  , Notification.requestPermission()];

                case 1:
                  permissionResult = _a.sent();

                  if (permissionResult === 'granted') {
                    return [2
                    /*return*/
                    ];
                  } else if (permissionResult === 'denied') {
                    throw ERROR_FACTORY.create("permission-blocked"
                    /* PERMISSION_BLOCKED */
                    );
                  } else {
                    throw ERROR_FACTORY.create("permission-default"
                    /* PERMISSION_DEFAULT */
                    );
                  }

              }
            });
          });
        };
        /**
         * @deprecated. Use getToken(options?: {vapidKey?: string; serviceWorkerRegistration?:
         * ServiceWorkerRegistration;}): Promise<string> instead.
         */


        WindowController.prototype.usePublicVapidKey = function (vapidKey) {
          if (this.vapidKey !== null) {
            throw ERROR_FACTORY.create("use-vapid-key-after-get-token"
            /* USE_VAPID_KEY_AFTER_GET_TOKEN */
            );
          }

          if (typeof vapidKey !== 'string' || vapidKey.length === 0) {
            throw ERROR_FACTORY.create("invalid-vapid-key"
            /* INVALID_VAPID_KEY */
            );
          }

          this.vapidKey = vapidKey;
        };
        /**
         * @deprecated. Use getToken(options?: {vapidKey?: string; serviceWorkerRegistration?:
         * ServiceWorkerRegistration;}): Promise<string> instead.
         */


        WindowController.prototype.useServiceWorker = function (swRegistration) {
          if (!(swRegistration instanceof ServiceWorkerRegistration)) {
            throw ERROR_FACTORY.create("invalid-sw-registration"
            /* INVALID_SW_REGISTRATION */
            );
          }

          if (this.swRegistration) {
            throw ERROR_FACTORY.create("use-sw-after-get-token"
            /* USE_SW_AFTER_GET_TOKEN */
            );
          }

          this.swRegistration = swRegistration;
        };
        /**
         * @param nextOrObserver An observer object or a function triggered on message.
         *
         * @return The unsubscribe function for the observer.
         */


        WindowController.prototype.onMessage = function (nextOrObserver) {
          var _this = this;

          this.onMessageCallback = nextOrObserver;
          return function () {
            _this.onMessageCallback = null;
          };
        };

        WindowController.prototype.setBackgroundMessageHandler = function () {
          throw ERROR_FACTORY.create("only-available-in-sw"
          /* AVAILABLE_IN_SW */
          );
        };

        WindowController.prototype.onBackgroundMessage = function () {
          throw ERROR_FACTORY.create("only-available-in-sw"
          /* AVAILABLE_IN_SW */
          );
        };
        /**
         * @deprecated No-op. It was initially designed with token rotation requests from server in mind.
         * However, the plan to implement such feature was abandoned.
         */


        WindowController.prototype.onTokenRefresh = function () {
          return function () {};
        };

        WindowController.prototype.logEvent = function (messageType, data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var eventType, analytics;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  eventType = getEventType(messageType);
                  return [4
                  /*yield*/
                  , this.firebaseDependencies.analyticsProvider.get()];

                case 1:
                  analytics = _a.sent();
                  analytics.logEvent(eventType, {
                    /* eslint-disable camelcase */
                    message_id: data[CONSOLE_CAMPAIGN_ID],
                    message_name: data[CONSOLE_CAMPAIGN_NAME],
                    message_time: data[CONSOLE_CAMPAIGN_TIME],
                    message_device_time: Math.floor(Date.now() / 1000)
                    /* eslint-enable camelcase */

                  });
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        return WindowController;
      }();

      function getEventType(messageType) {
        switch (messageType) {
          case MessageType.NOTIFICATION_CLICKED:
            return 'notification_open';

          case MessageType.PUSH_RECEIVED:
            return 'notification_foreground';

          default:
            throw new Error();
        }
      }

      function stripInternalFields(internalPayload) {
        delete internalPayload.messageType;
        delete internalPayload.isFirebaseMessaging;
        return internalPayload;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function extractAppConfig(app) {
        var e_1, _a;

        if (!app || !app.options) {
          throw getMissingValueError('App Configuration Object');
        }

        if (!app.name) {
          throw getMissingValueError('App Name');
        } // Required app config keys


        var configKeys = ['projectId', 'apiKey', 'appId', 'messagingSenderId'];
        var options = app.options;

        try {
          for (var configKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__values"])(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
            var keyName = configKeys_1_1.value;

            if (!options[keyName]) {
              throw getMissingValueError(keyName);
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1["return"])) _a.call(configKeys_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        return {
          appName: app.name,
          projectId: options.projectId,
          apiKey: options.apiKey,
          appId: options.appId,
          senderId: options.messagingSenderId
        };
      }

      function getMissingValueError(valueName) {
        return ERROR_FACTORY.create("missing-app-config-values"
        /* MISSING_APP_CONFIG_VALUES */
        , {
          valueName: valueName
        });
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var MESSAGING_NAME = 'messaging';

      function factoryMethod(container) {
        // Dependencies.
        var app = container.getProvider('app').getImmediate();
        var appConfig = extractAppConfig(app);
        var installations = container.getProvider('installations').getImmediate();
        var analyticsProvider = container.getProvider('analytics-internal');
        var firebaseDependencies = {
          app: app,
          appConfig: appConfig,
          installations: installations,
          analyticsProvider: analyticsProvider
        };

        if (!isSupported()) {
          throw ERROR_FACTORY.create("unsupported-browser"
          /* UNSUPPORTED_BROWSER */
          );
        }

        if (self && 'ServiceWorkerGlobalScope' in self) {
          // Running in ServiceWorker context
          return new SwController(firebaseDependencies);
        } else {
          // Assume we are in the window context.
          return new WindowController(firebaseDependencies);
        }
      }

      var NAMESPACE_EXPORTS = {
        isSupported: isSupported
      };

      _firebase_app__WEBPACK_IMPORTED_MODULE_5___default.a.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__["Component"](MESSAGING_NAME, factoryMethod, "PUBLIC"
      /* PUBLIC */
      ).setServiceProps(NAMESPACE_EXPORTS));

      function isSupported() {
        if (self && 'ServiceWorkerGlobalScope' in self) {
          // Running in ServiceWorker context
          return isSWControllerSupported();
        } else {
          // Assume we are in the window context.
          return isWindowControllerSupported();
        }
      }
      /**
       * Checks to see if the required APIs exist.
       */


      function isWindowControllerSupported() {
        return 'indexedDB' in window && indexedDB !== null && navigator.cookieEnabled && 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window && 'fetch' in window && ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') && PushSubscription.prototype.hasOwnProperty('getKey');
      }
      /**
       * Checks to see if the required APIs exist within SW Context.
       */


      function isSWControllerSupported() {
        return 'indexedDB' in self && indexedDB !== null && 'PushManager' in self && 'Notification' in self && ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') && PushSubscription.prototype.hasOwnProperty('getKey');
      } //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "iqUP":
    /*!*************************************************!*\
      !*** ./node_modules/firebase/dist/index.cjs.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function iqUP(module, exports, __webpack_require__) {
      "use strict";

      var firebase = __webpack_require__(
      /*! @firebase/app */
      "wj3C");

      __webpack_require__(
      /*! @firebase/auth */
      "LOEa");

      __webpack_require__(
      /*! @firebase/database */
      "NSPt");

      __webpack_require__(
      /*! @firebase/firestore */
      "6Joi");

      __webpack_require__(
      /*! @firebase/functions */
      "ABqa");

      __webpack_require__(
      /*! @firebase/messaging */
      "gHGA");

      __webpack_require__(
      /*! @firebase/storage */
      "LmZi");

      __webpack_require__(
      /*! @firebase/performance */
      "bQlE");

      __webpack_require__(
      /*! @firebase/analytics */
      "3Kre");

      __webpack_require__(
      /*! @firebase/remote-config */
      "O1kn");

      function _interopDefaultLegacy(e) {
        return e && typeof e === 'object' && 'default' in e ? e : {
          'default': e
        };
      }

      var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

      var name = "firebase";
      var version = "7.24.0";
      /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      firebase__default['default'].registerVersion(name, version, 'app');
      var name$1 = "firebase";
      var version$1 = "7.24.0";
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      console.warn("\nIt looks like you're using the development build of the Firebase JS SDK.\nWhen deploying Firebase apps to production, it is advisable to only import\nthe individual SDK components you intend to use.\n\nFor the module builds, these are available in the following manner\n(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):\n\nCommonJS Modules:\nconst firebase = require('firebase/app');\nrequire('firebase/<PACKAGE>');\n\nES Modules:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n\nTypescript:\nimport * as firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n");
      firebase__default['default'].registerVersion(name$1, version$1);
      module.exports = firebase__default['default']; //# sourceMappingURL=index.cjs.js.map

      /***/
    },

    /***/
    "nbvr":
    /*!***************************************!*\
      !*** ./node_modules/idb/build/idb.js ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function nbvr(module, exports, __webpack_require__) {
      (function (global, factory) {
        true ? factory(exports) : undefined;
      })(this, function (exports) {
        'use strict';

        function toArray(arr) {
          return Array.prototype.slice.call(arr);
        }

        function promisifyRequest(request) {
          return new Promise(function (resolve, reject) {
            request.onsuccess = function () {
              resolve(request.result);
            };

            request.onerror = function () {
              reject(request.error);
            };
          });
        }

        function promisifyRequestCall(obj, method, args) {
          var request;
          var p = new Promise(function (resolve, reject) {
            request = obj[method].apply(obj, args);
            promisifyRequest(request).then(resolve, reject);
          });
          p.request = request;
          return p;
        }

        function promisifyCursorRequestCall(obj, method, args) {
          var p = promisifyRequestCall(obj, method, args);
          return p.then(function (value) {
            if (!value) return;
            return new Cursor(value, p.request);
          });
        }

        function proxyProperties(ProxyClass, targetProp, properties) {
          properties.forEach(function (prop) {
            Object.defineProperty(ProxyClass.prototype, prop, {
              get: function get() {
                return this[targetProp][prop];
              },
              set: function set(val) {
                this[targetProp][prop] = val;
              }
            });
          });
        }

        function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
          properties.forEach(function (prop) {
            if (!(prop in Constructor.prototype)) return;

            ProxyClass.prototype[prop] = function () {
              return promisifyRequestCall(this[targetProp], prop, arguments);
            };
          });
        }

        function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
          properties.forEach(function (prop) {
            if (!(prop in Constructor.prototype)) return;

            ProxyClass.prototype[prop] = function () {
              return this[targetProp][prop].apply(this[targetProp], arguments);
            };
          });
        }

        function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
          properties.forEach(function (prop) {
            if (!(prop in Constructor.prototype)) return;

            ProxyClass.prototype[prop] = function () {
              return promisifyCursorRequestCall(this[targetProp], prop, arguments);
            };
          });
        }

        function Index(index) {
          this._index = index;
        }

        proxyProperties(Index, '_index', ['name', 'keyPath', 'multiEntry', 'unique']);
        proxyRequestMethods(Index, '_index', IDBIndex, ['get', 'getKey', 'getAll', 'getAllKeys', 'count']);
        proxyCursorRequestMethods(Index, '_index', IDBIndex, ['openCursor', 'openKeyCursor']);

        function Cursor(cursor, request) {
          this._cursor = cursor;
          this._request = request;
        }

        proxyProperties(Cursor, '_cursor', ['direction', 'key', 'primaryKey', 'value']);
        proxyRequestMethods(Cursor, '_cursor', IDBCursor, ['update', 'delete']); // proxy 'next' methods

        ['advance', 'continue', 'continuePrimaryKey'].forEach(function (methodName) {
          if (!(methodName in IDBCursor.prototype)) return;

          Cursor.prototype[methodName] = function () {
            var cursor = this;
            var args = arguments;
            return Promise.resolve().then(function () {
              cursor._cursor[methodName].apply(cursor._cursor, args);

              return promisifyRequest(cursor._request).then(function (value) {
                if (!value) return;
                return new Cursor(value, cursor._request);
              });
            });
          };
        });

        function ObjectStore(store) {
          this._store = store;
        }

        ObjectStore.prototype.createIndex = function () {
          return new Index(this._store.createIndex.apply(this._store, arguments));
        };

        ObjectStore.prototype.index = function () {
          return new Index(this._store.index.apply(this._store, arguments));
        };

        proxyProperties(ObjectStore, '_store', ['name', 'keyPath', 'indexNames', 'autoIncrement']);
        proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, ['put', 'add', 'delete', 'clear', 'get', 'getAll', 'getKey', 'getAllKeys', 'count']);
        proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, ['openCursor', 'openKeyCursor']);
        proxyMethods(ObjectStore, '_store', IDBObjectStore, ['deleteIndex']);

        function Transaction(idbTransaction) {
          this._tx = idbTransaction;
          this.complete = new Promise(function (resolve, reject) {
            idbTransaction.oncomplete = function () {
              resolve();
            };

            idbTransaction.onerror = function () {
              reject(idbTransaction.error);
            };

            idbTransaction.onabort = function () {
              reject(idbTransaction.error);
            };
          });
        }

        Transaction.prototype.objectStore = function () {
          return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
        };

        proxyProperties(Transaction, '_tx', ['objectStoreNames', 'mode']);
        proxyMethods(Transaction, '_tx', IDBTransaction, ['abort']);

        function UpgradeDB(db, oldVersion, transaction) {
          this._db = db;
          this.oldVersion = oldVersion;
          this.transaction = new Transaction(transaction);
        }

        UpgradeDB.prototype.createObjectStore = function () {
          return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
        };

        proxyProperties(UpgradeDB, '_db', ['name', 'version', 'objectStoreNames']);
        proxyMethods(UpgradeDB, '_db', IDBDatabase, ['deleteObjectStore', 'close']);

        function DB(db) {
          this._db = db;
        }

        DB.prototype.transaction = function () {
          return new Transaction(this._db.transaction.apply(this._db, arguments));
        };

        proxyProperties(DB, '_db', ['name', 'version', 'objectStoreNames']);
        proxyMethods(DB, '_db', IDBDatabase, ['close']); // Add cursor iterators
        // TODO: remove this once browsers do the right thing with promises

        ['openCursor', 'openKeyCursor'].forEach(function (funcName) {
          [ObjectStore, Index].forEach(function (Constructor) {
            // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
            if (!(funcName in Constructor.prototype)) return;

            Constructor.prototype[funcName.replace('open', 'iterate')] = function () {
              var args = toArray(arguments);
              var callback = args[args.length - 1];
              var nativeObject = this._store || this._index;
              var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));

              request.onsuccess = function () {
                callback(request.result);
              };
            };
          });
        }); // polyfill getAll

        [Index, ObjectStore].forEach(function (Constructor) {
          if (Constructor.prototype.getAll) return;

          Constructor.prototype.getAll = function (query, count) {
            var instance = this;
            var items = [];
            return new Promise(function (resolve) {
              instance.iterateCursor(query, function (cursor) {
                if (!cursor) {
                  resolve(items);
                  return;
                }

                items.push(cursor.value);

                if (count !== undefined && items.length == count) {
                  resolve(items);
                  return;
                }

                cursor["continue"]();
              });
            });
          };
        });

        function openDb(name, version, upgradeCallback) {
          var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
          var request = p.request;

          if (request) {
            request.onupgradeneeded = function (event) {
              if (upgradeCallback) {
                upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
              }
            };
          }

          return p.then(function (db) {
            return new DB(db);
          });
        }

        function deleteDb(name) {
          return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
        }

        exports.openDb = openDb;
        exports.deleteDb = deleteDb;
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
      });
      /***/

    },

    /***/
    "qkPF":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-modal-component/image-modal-component.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qkPF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{ title }}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"closeModal()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-img [src]=\"imageUrl\"></ion-img>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "rZP8":
    /*!**************************************************!*\
      !*** ./src/app/chat-box/chat-box.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function rZP8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":root {\r\n  --ion-color-primary: #912775;\r\n  --ion-color-primary-rgb: 145, 39, 117;\r\n  --ion-color-primary-contrast: #ffffff;\r\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\r\n  --ion-color-primary-shade: #802267;\r\n  --ion-color-primary-tint: #9c3d83;\r\n\r\n  --ion-color-secondary: #3dc2ff;\r\n  --ion-color-secondary-rgb: 61, 194, 255;\r\n  --ion-color-secondary-contrast: #ffffff;\r\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\r\n  --ion-color-secondary-shade: #36abe0;\r\n  --ion-color-secondary-tint: #50c8ff;\r\n\r\n  --ion-color-tertiary: #5260ff;\r\n  --ion-color-tertiary-rgb: 82, 96, 255;\r\n  --ion-color-tertiary-contrast: #ffffff;\r\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\r\n  --ion-color-tertiary-shade: #4854e0;\r\n  --ion-color-tertiary-tint: #6370ff;\r\n\r\n  --ion-color-success: #2dd36f;\r\n  --ion-color-success-rgb: 45, 211, 111;\r\n  --ion-color-success-contrast: #ffffff;\r\n  --ion-color-success-contrast-rgb: 255, 255, 255;\r\n  --ion-color-success-shade: #28ba62;\r\n  --ion-color-success-tint: #42d77d;\r\n\r\n  --ion-color-warning: #ffc409;\r\n  --ion-color-warning-rgb: 255, 196, 9;\r\n  --ion-color-warning-contrast: #000000;\r\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\r\n  --ion-color-warning-shade: #e0ac08;\r\n  --ion-color-warning-tint: #ffca22;\r\n\r\n  --ion-color-danger: #eb445a;\r\n  --ion-color-danger-rgb: 235, 68, 90;\r\n  --ion-color-danger-contrast: #ffffff;\r\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\r\n  --ion-color-danger-shade: #cf3c4f;\r\n  --ion-color-danger-tint: #ed576b;\r\n\r\n  --ion-color-dark: #222428;\r\n  --ion-color-dark-rgb: 34, 36, 40;\r\n  --ion-color-dark-contrast: #ffffff;\r\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\r\n  --ion-color-dark-shade: #1e2023;\r\n  --ion-color-dark-tint: #383a3e;\r\n\r\n  --ion-color-medium: #92949c;\r\n  --ion-color-medium-rgb: 146, 148, 156;\r\n  --ion-color-medium-contrast: #ffffff;\r\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\r\n  --ion-color-medium-shade: #808289;\r\n  --ion-color-medium-tint: #9d9fa6;\r\n\r\n  --ion-color-light: #f4f5f8;\r\n  --ion-color-light-rgb: 244, 245, 248;\r\n  --ion-color-light-contrast: #000000;\r\n  --ion-color-light-contrast-rgb: 0, 0, 0;\r\n  --ion-color-light-shade: #d7d8da;\r\n  --ion-color-light-tint: #f5f6f9;\r\n\r\n  ion-input,\r\n  ion-textarea {\r\n    --background: #fff;\r\n    --color: #333;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    text-indent: 10px;\r\n    border: 1px solid #ccc;\r\n  }\r\n}\r\n\r\nion-button {\r\n  --background-hover: var(--background);\r\n}\r\n\r\nion-item {\r\n  --background-hover: var(--background);\r\n  --background-activated: var(--background);\r\n}\r\n\r\n.chat-box {\n  padding: 1em;\n  margin-bottom: 1em;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\r\n\r\n.chat-box.user {\n  border-radius: 0.9em 0.9em 0.5em 0.9em;\n  background: #c8e0f1;\n}\r\n\r\n.chat-box.sender {\n  border-radius: 0.9em 0.9em 0.9em 0.5em;\n  background: #e586c9;\n}\r\n\r\n.detail-info {\n  display: flex;\n  align-items: center;\n  gap: 0.2em;\n  width: -moz-max-content;\n  width: max-content;\n  margin-bottom: 0.5em;\n}\r\n\r\n.user .detail-info {\n  margin-left: auto;\n}\r\n\r\n.chat-box .chat-image {\n  border-radius: 10px;\n}\r\n\r\n.chat-box .chat-image ion-button {\n  margin-top: 1.5em;\n}\r\n\r\n.chat-box .chat-file ion-button {\n  width: 100%;\n  margin-top: 1.5em;\n}\r\n\r\n.chat-box .chat-file .icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 6em;\n  height: 6em;\n  background-color: grey;\n  border-radius: 10px;\n  font-size: 1.6em;\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcY2hhdC1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIscUNBQXFDO0VBQ3JDLHFDQUFxQztFQUNyQywrQ0FBK0M7RUFDL0Msa0NBQWtDO0VBQ2xDLGlDQUFpQzs7RUFFakMsOEJBQThCO0VBQzlCLHVDQUF1QztFQUN2Qyx1Q0FBdUM7RUFDdkMsaURBQWlEO0VBQ2pELG9DQUFvQztFQUNwQyxtQ0FBbUM7O0VBRW5DLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsc0NBQXNDO0VBQ3RDLGdEQUFnRDtFQUNoRCxtQ0FBbUM7RUFDbkMsa0NBQWtDOztFQUVsQyw0QkFBNEI7RUFDNUIscUNBQXFDO0VBQ3JDLHFDQUFxQztFQUNyQywrQ0FBK0M7RUFDL0Msa0NBQWtDO0VBQ2xDLGlDQUFpQzs7RUFFakMsNEJBQTRCO0VBQzVCLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMseUNBQXlDO0VBQ3pDLGtDQUFrQztFQUNsQyxpQ0FBaUM7O0VBRWpDLDJCQUEyQjtFQUMzQixtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLDhDQUE4QztFQUM5QyxpQ0FBaUM7RUFDakMsZ0NBQWdDOztFQUVoQyx5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLGtDQUFrQztFQUNsQyw0Q0FBNEM7RUFDNUMsK0JBQStCO0VBQy9CLDhCQUE4Qjs7RUFFOUIsMkJBQTJCO0VBQzNCLHFDQUFxQztFQUNyQyxvQ0FBb0M7RUFDcEMsOENBQThDO0VBQzlDLGlDQUFpQztFQUNqQyxnQ0FBZ0M7O0VBRWhDLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsbUNBQW1DO0VBQ25DLHVDQUF1QztFQUN2QyxnQ0FBZ0M7RUFDaEMsK0JBQStCOztFQUUvQjs7SUFFRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHlDQUF5QztBQUMzQzs7QUNoRkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLFVBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFFRSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUZGIiwiZmlsZSI6ImNoYXQtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM5MTI3NzU7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDE0NSwgMzksIDExNztcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICM4MDIyNjc7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjOWMzZDgzO1xyXG5cclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XHJcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcclxuXHJcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XHJcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcclxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XHJcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcclxuXHJcbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcclxuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcclxuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XHJcblxyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcclxuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XHJcblxyXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlZDU3NmI7XHJcblxyXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XHJcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XHJcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xyXG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcclxuXHJcbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xyXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XHJcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xyXG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xyXG5cclxuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcclxuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XHJcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XHJcblxyXG4gIGlvbi1pbnB1dCxcclxuICBpb24tdGV4dGFyZWEge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLS1jb2xvcjogIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0ZXh0LWluZGVudDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcIi4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCIpO1xyXG5cclxuLmNoYXQtYm94IHtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNoYXQtYm94LnVzZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuOWVtIDAuOWVtIDAuNWVtIDAuOWVtO1xyXG4gIGJhY2tncm91bmQ6ICNjOGUwZjE7XHJcbn1cclxuXHJcbi5jaGF0LWJveC5zZW5kZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuOWVtIDAuOWVtIDAuOWVtIDAuNWVtO1xyXG4gIGJhY2tncm91bmQ6ICNlNTg2Yzk7XHJcbn1cclxuXHJcbi5kZXRhaWwtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBnYXA6IDAuMmVtO1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxufVxyXG5cclxuLnVzZXIgLmRldGFpbC1pbmZvIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmNoYXQtYm94IC5jaGF0LWltYWdlIHtcclxuICAvLyBtYXgtd2lkdGg6IDkwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY2hhdC1ib3ggLmNoYXQtaW1hZ2UgaW9uLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMS41ZW07XHJcbn1cclxuXHJcbi5jaGF0LWJveCAuY2hhdC1maWxlIGlvbi1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xyXG59XHJcblxyXG4uY2hhdC1ib3ggLmNoYXQtZmlsZSAuaWNvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiA2ZW07XHJcbiAgaGVpZ2h0OiA2ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS42ZW07XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "uFP4":
    /*!************************************************!*\
      !*** ./src/app/help-chat/help-chat.service.ts ***!
      \************************************************/

    /*! exports provided: HelpChatService */

    /***/
    function uFP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpChatService", function () {
        return HelpChatService;
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


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var HelpChatService = /*#__PURE__*/function () {
        function HelpChatService(db, storage) {
          _classCallCheck(this, HelpChatService);

          this.db = db;
          this.storage = storage;
          this.messages = [];
        }

        _createClass(HelpChatService, [{
          key: "createDialog",
          value: function createDialog(dialog, pathDialogId) {
            var field = "/dialog/".concat(pathDialogId);
            this.checkDataAvailability(field, dialog);
          }
        }, {
          key: "createMessage",
          value: function createMessage(message, pathDialogId, pathMessageId) {
            var field = "/dialog/".concat(pathDialogId, "/messages/").concat(pathMessageId);
            this.checkDataAvailability(field, message);
          }
        }, {
          key: "updateUnread",
          value: function updateUnread(pathDialogId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var body, field, unreadRef, unreadRef2, unread;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    body = {
                      admin: 0,
                      user: 0
                    };
                    field = "/dialog/".concat(pathDialogId, "/unread");
                    unreadRef = this.db.object(field);
                    unreadRef2 = this.db.object(field);
                    _context4.prev = 4;
                    _context4.next = 7;
                    return unreadRef.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise();

                  case 7:
                    unread = _context4.sent;
                    body.admin = (unread === null || unread === void 0 ? void 0 : unread.admin) + 1;
                    unreadRef2.set(body);
                    console.log("body", body); // Lanjutkan dengan logika berikutnya di sini
                    // ...

                    _context4.next = 15;
                    break;

                  case 13:
                    _context4.prev = 13;
                    _context4.t0 = _context4["catch"](4);

                  case 15:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this, [[4, 13]]);
            }));
          }
        }, {
          key: "checkDataAvailability",
          value: function checkDataAvailability(field, data) {
            var dialogsRef = this.db.object(field);
            var ref = this.db.object(field).valueChanges();
            ref.subscribe(function (exits) {
              if (exits) {
                console.log("ada");
              } else {
                dialogsRef.set(data);
                console.log("tidack ada");
              }
            });
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(selectedFile, uploadProgress, downloadURL) {}
        }, {
          key: "getMessages",
          value: function getMessages(pathDialogId) {}
        }]);

        return HelpChatService;
      }();

      HelpChatService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
        }];
      };

      HelpChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], HelpChatService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=help-chat-help-chat-module-es5.js.map