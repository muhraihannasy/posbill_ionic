(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~orders-detail-orders-detail-module~orders-edit-orders-edit-module~orders-payment-qris-orders~8c9f9247"], {
    /***/
    "+4vP":
    /*!*******************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/src/esc-pos-encoder.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function vP(module, exports, __webpack_require__) {
      var iconv = __webpack_require__(
      /*! iconv-lite */
      "1G5A");

      var linewrap = __webpack_require__(
      /*! linewrap */
      "/HVh");

      var _webpack_require__ = __webpack_require__(
      /*! canvas */
      "0W/q"),
          createCanvas = _webpack_require__.createCanvas;

      var Dither = __webpack_require__(
      /*! canvas-dither */
      "SwJN");

      var Flatten = __webpack_require__(
      /*! canvas-flatten */
      "pqY9");
      /**
       * Create a byte stream based on commands for ESC/POS printers
       */


      var EscPosEncoder = /*#__PURE__*/function () {
        /**
         * Create a new object
         *
        */
        function EscPosEncoder() {
          _classCallCheck(this, EscPosEncoder);

          this._reset();
        }
        /**
         * Reset the state of the object
         *
        */


        _createClass(EscPosEncoder, [{
          key: "_reset",
          value: function _reset() {
            this._buffer = [];
            this._codepage = 'ascii';
            this._state = {
              'bold': false,
              'italic': false,
              'underline': false,
              'hanzi': false
            };
          }
          /**
           * Encode a string with the current code page
           *
           * @param  {string}   value  String to encode
           * @return {object}          Encoded string as a ArrayBuffer
           *
          */

        }, {
          key: "_encode",
          value: function _encode(value) {
            return iconv.encode(value, this._codepage);
          }
          /**
           * Add commands to the buffer
           *
           * @param  {array}   value  And array of numbers, arrays, buffers or Uint8Arrays to add to the buffer
           *
          */

        }, {
          key: "_queue",
          value: function _queue(value) {
            var _this = this;

            value.forEach(function (item) {
              return _this._buffer.push(item);
            });
          }
          /**
           * Initialize the printer
           *
           * @return {object}          Return the object, for easy chaining commands
           *
           */

        }, {
          key: "initialize",
          value: function initialize() {
            this._queue([0x1b, 0x40]);

            return this;
          }
          /**
           * Change the code page
           *
           * @param  {string}   value  The codepage that we set the printer to
           * @return {object}          Return the object, for easy chaining commands
           *
           */

        }, {
          key: "codepage",
          value: function codepage(value) {
            var codepages = {
              'cp437': [0x00, false],
              'cp737': [0x40, false],
              'cp850': [0x02, false],
              'cp775': [0x5f, false],
              'cp852': [0x12, false],
              'cp855': [0x3c, false],
              'cp857': [0x3d, false],
              'cp858': [0x13, false],
              'cp860': [0x03, false],
              'cp861': [0x38, false],
              'cp862': [0x3e, false],
              'cp863': [0x04, false],
              'cp864': [0x1c, false],
              'cp865': [0x05, false],
              'cp866': [0x11, false],
              'cp869': [0x42, false],
              'cp936': [0xff, true],
              'cp949': [0xfd, true],
              'cp950': [0xfe, true],
              'cp1252': [0x10, false],
              'iso88596': [0x16, false],
              'shiftjis': [0xfc, true],
              'windows1250': [0x48, false],
              'windows1251': [0x49, false],
              'windows1252': [0x47, false],
              'windows1253': [0x5a, false],
              'windows1254': [0x5b, false],
              'windows1255': [0x20, false],
              'windows1256': [0x5c, false],
              'windows1257': [0x19, false],
              'windows1258': [0x5e, false]
            };
            var codepage;

            if (!iconv.encodingExists(value)) {
              throw new Error('Unknown codepage');
            }

            if (value in iconv.encodings) {
              if (typeof iconv.encodings[value] === 'string') {
                codepage = iconv.encodings[value];
              } else {
                codepage = value;
              }
            } else {
              throw new Error('Unknown codepage');
            }

            if (typeof codepages[codepage] !== 'undefined') {
              this._codepage = codepage;
              this._state.hanzi = codepages[codepage][1];

              this._queue([0x1b, 0x74, codepages[codepage][0]]);
            } else {
              throw new Error('Codepage not supported by printer');
            }

            return this;
          }
          /**
           * Print text
           *
           * @param  {string}   value  Text that needs to be printed
           * @param  {number}   wrap   Wrap text after this many positions
           * @return {object}          Return the object, for easy chaining commands
           *
           */

        }, {
          key: "text",
          value: function text(value, wrap) {
            if (wrap) {
              var w = linewrap(wrap, {
                lineBreak: '\r\n'
              });
              value = w(value);
            }

            var bytes = this._encode(value);

            if (this._state.hanzi) {
              this._queue([0x1c, 0x26, bytes, 0x1c, 0x2e]);
            } else {
              this._queue([bytes]);
            }

            return this;
          }
          /**
           * Print a newline
           *
           * @return {object}          Return the object, for easy chaining commands
           *
           */

        }, {
          key: "newline",
          value: function newline() {
            this._queue([0x0a, 0x0d]);

            return this;
          }
          /**
           * Print text, followed by a newline
           *
           * @param  {string}   value  Text that needs to be printed
           * @param  {number}   wrap   Wrap text after this many positions
           * @return {object}          Return the object, for easy chaining commands
           *
           */

        }, {
          key: "line",
          value: function line(value, wrap) {
            this.text(value, wrap);
            this.newline();
            return this;
          }
          /**
           * Underline text
           *
           * @param  {boolean|number}   value  true to turn on underline, false to turn off, or 2 for double underline
           * @return {object}                  Return the object, for easy chaining commands
           *
           */

        }, {
          key: "underline",
          value: function underline(value) {
            if (typeof value === 'undefined') {
              value = !this._state.underline;
            }

            this._state.underline = value;

            this._queue([0x1b, 0x2d, Number(value)]);

            return this;
          }
          /**
           * Italic text
           *
           * @param  {boolean}          value  true to turn on italic, false to turn off
           * @return {object}                  Return the object, for easy chaining commands
           *
           */

        }, {
          key: "italic",
          value: function italic(value) {
            if (typeof value === 'undefined') {
              value = !this._state.italic;
            }

            this._state.italic = value;

            this._queue([0x1b, 0x34, Number(value)]);

            return this;
          }
          /**
           * Bold text
           *
           * @param  {boolean}          value  true to turn on bold, false to turn off, or 2 for double underline
           * @return {object}                  Return the object, for easy chaining commands
           *
           */

        }, {
          key: "bold",
          value: function bold(value) {
            if (typeof value === 'undefined') {
              value = !this._state.bold;
            }

            this._state.bold = value;

            this._queue([0x1b, 0x45, Number(value)]);

            return this;
          }
          /**
            * Change text size
            *
            * @param  {string}          value   small or normal
            * @return {object}                  Return the object, for easy chaining commands
            *
            */

        }, {
          key: "size",
          value: function size(value) {
            if (value === 'small') {
              value = 0x01;
            } else {
              value = 0x00;
            }

            this._queue([0x1b, 0x4d, value]);

            return this;
          }
          /**
            * Change text alignment
            *
            * @param  {string}          value   left, center or right
            * @return {object}                  Return the object, for easy chaining commands
            *
            */

        }, {
          key: "align",
          value: function align(value) {
            var alignments = {
              'left': 0x00,
              'center': 0x01,
              'right': 0x02
            };

            if (value in alignments) {
              this._queue([0x1b, 0x61, alignments[value]]);
            } else {
              throw new Error('Unknown alignment');
            }

            return this;
          }
          /**
           * Barcode
           *
           * @param  {string}           value  the value of the barcode
           * @param  {string}           symbology  the type of the barcode
           * @param  {number}           height  height of the barcode
           * @return {object}                  Return the object, for easy chaining commands
           *
           */

        }, {
          key: "barcode",
          value: function barcode(value, symbology, height) {
            var symbologies = {
              'upca': 0x00,
              'upce': 0x01,
              'ean13': 0x02,
              'ean8': 0x03,
              'coda39': 0x04,
              'itf': 0x05,
              'codabar': 0x06
            };

            if (symbology in symbologies) {
              var bytes = iconv.encode(value, 'ascii');

              this._queue([0x1d, 0x68, height, 0x1d, 0x77, symbology === 'code39' ? 0x02 : 0x03, 0x1d, 0x6b, symbologies[symbology], bytes, 0x00]);
            } else {
              throw new Error('Symbology not supported by printer');
            }

            return this;
          }
          /**
           * QR code
           *
           * @param  {string}           value  the value of the qr code
           * @param  {number}           model  model of the qrcode, either 1 or 2
           * @param  {number}           size   size of the qrcode, a value between 1 and 8
           * @param  {string}           errorlevel  the amount of error correction used, either 'l', 'm', 'q', 'h'
           * @return {object}                  Return the object, for easy chaining commands
           *
           */

        }, {
          key: "qrcode",
          value: function qrcode(value, model, size, errorlevel) {
            /* Force printing the print buffer and moving to a new line */
            this._queue([0x0a]);
            /* Model */


            var models = {
              1: 0x31,
              2: 0x32
            };

            if (typeof model === 'undefined') {
              model = 2;
            }

            if (model in models) {
              this._queue([0x1d, 0x28, 0x6b, 0x04, 0x00, 0x31, 0x41, models[model], 0x00]);
            } else {
              throw new Error('Model must be 1 or 2');
            }
            /* Size */


            if (typeof size === 'undefined') {
              size = 6;
            }

            if (typeof size !== 'number') {
              throw new Error('Size must be a number');
            }

            if (size < 1 || size > 8) {
              throw new Error('Size must be between 1 and 8');
            }

            this._queue([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x43, size]);
            /* Error level */


            var errorlevels = {
              'l': 0x30,
              'm': 0x31,
              'q': 0x32,
              'h': 0x33
            };

            if (typeof errorlevel === 'undefined') {
              errorlevel = 'm';
            }

            if (errorlevel in errorlevels) {
              this._queue([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x45, errorlevels[errorlevel]]);
            } else {
              throw new Error('Error level must be l, m, q or h');
            }
            /* Data */


            var bytes = iconv.encode(value, 'iso88591');
            var length = bytes.length + 3;

            this._queue([0x1d, 0x28, 0x6b, length % 0xff, length / 0xff, 0x31, 0x50, 0x30, bytes]);
            /* Print QR code */


            this._queue([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x51, 0x30]);

            return this;
          }
          /**
           * Image
           *
           * @param  {object}         element  an element, like a canvas or image that needs to be printed
           * @param  {number}         width  width of the image on the printer
           * @param  {number}         height  height of the image on the printer
           * @param  {string}         algorithm  the dithering algorithm for making the image black and white
           * @param  {number}         threshold  threshold for the dithering algorithm
           * @return {object}                  Return the object, for easy chaining commands
           *
           */

        }, {
          key: "image",
          value: function image(element, width, height, algorithm, threshold) {
            if (width % 8 !== 0) {
              throw new Error('Width must be a multiple of 8');
            }

            if (height % 8 !== 0) {
              throw new Error('Height must be a multiple of 8');
            }

            if (typeof algorithm === 'undefined') {
              algorithm = 'threshold';
            }

            if (typeof threshold === 'undefined') {
              threshold = 128;
            }

            var canvas = createCanvas(width, height);
            var context = canvas.getContext('2d');
            context.drawImage(element, 0, 0, width, height);
            var image = context.getImageData(0, 0, width, height);
            image = Flatten.flatten(image, [0xff, 0xff, 0xff]);

            switch (algorithm) {
              case 'threshold':
                image = Dither.threshold(image, threshold);
                break;

              case 'bayer':
                image = Dither.bayer(image, threshold);
                break;

              case 'floydsteinberg':
                image = Dither.floydsteinberg(image);
                break;

              case 'atkinson':
                image = Dither.atkinson(image);
                break;
            }

            var getPixel = function getPixel(x, y) {
              return image.data[(width * y + x) * 4] > 0 ? 0 : 1;
            };

            var bytes = new Uint8Array(width * height >> 3);

            for (var y = 0; y < height; y++) {
              for (var x = 0; x < width; x = x + 8) {
                var i = y * (width >> 3) + (x >> 3);
                bytes[i] = getPixel(x + 0, y) << 7 | getPixel(x + 1, y) << 6 | getPixel(x + 2, y) << 5 | getPixel(x + 3, y) << 4 | getPixel(x + 4, y) << 3 | getPixel(x + 5, y) << 2 | getPixel(x + 6, y) << 1 | getPixel(x + 7, y);
              }
            }

            this._queue([0x1d, 0x76, 0x30, 0x00, width >> 3 & 0xff, width >> 3 >> 8 & 0xff, height & 0xff, height >> 8 & 0xff, bytes]);

            return this;
          }
          /**
           * Cut paper
           *
           * @param  {string}          value   full or partial. When not specified a full cut will be assumed
           * @return {object}                  Return the object, for easy chaining commands
           *
           */

        }, {
          key: "cut",
          value: function cut(value) {
            var data = 0x00;

            if (value == 'partial') {
              data = 0x01;
            }

            this._queue([0x1d, 0x56, data]);

            return this;
          }
          /**
           * Beeper sound functionality
           *
           * @return {object}                  Return the object, for easy chaining commands
           */

        }, {
          key: "beeper",
          value: function beeper() {
            this._queue([0x1b, 0x42, 0x05, 0x01]);

            return this;
          }
          /**
           * Open cash drawer
           *
           * @return {object}                  Return the object, for easy chaining commands
           */

        }, {
          key: "openCashDrawer",
          value: function openCashDrawer() {
            this._queue([0x1b, 0x70, 0x00]);

            return this;
          }
          /**
           * Add raw printer commands
           *
           * @param  {array}           data   raw bytes to be included
           * @return {object}          Return the object, for easy chaining commands
           *
           */

        }, {
          key: "raw",
          value: function raw(data) {
            this._queue(data);

            return this;
          }
          /**
           * Encode all previous commands
           *
           * @return {Uint8Array}         Return the encoded bytes
           *
           */

        }, {
          key: "encode",
          value: function encode() {
            var length = 0;

            this._buffer.forEach(function (item) {
              if (typeof item === 'number') {
                length++;
              } else {
                length += item.length;
              }
            });

            var result = new Uint8Array(length);
            var index = 0;

            this._buffer.forEach(function (item) {
              if (typeof item === 'number') {
                result[index] = item;
                index++;
              } else {
                result.set(item, index);
                index += item.length;
              }
            });

            this._reset();

            return result;
          }
        }]);

        return EscPosEncoder;
      }();

      module.exports = EscPosEncoder;
      /***/
    },

    /***/
    "/HVh":
    /*!****************************************!*\
      !*** ./node_modules/linewrap/index.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function HVh(module, exports) {
      // Presets
      var presetMap = {
        'html': {
          skipScheme: 'html',
          lineBreakScheme: 'html',
          whitespace: 'collapse'
        }
      }; // lineBreak Schemes

      var brPat = /<\s*br(?:[\s/]*|\s[^>]*)>/gi;
      var lineBreakSchemeMap = {
        'unix': [/\n/g, '\n'],
        'dos': [/\r\n/g, '\r\n'],
        'mac': [/\r/g, '\r'],
        'html': [brPat, '<br>'],
        'xhtml': [brPat, '<br/>']
      }; // skip Schemes

      var skipSchemeMap = {
        'ansi-color': /\x1B\[[^m]*m/g,
        'html': /<[^>]*>/g,
        'bbcode': /\[[^]]*\]/g
      };
      var modeMap = {
        'soft': 1,
        'hard': 1
      };
      var wsMap = {
        'collapse': 1,
        'default': 1,
        'line': 1,
        'all': 1
      };
      var rlbMap = {
        'all': 1,
        'multi': 1,
        'none': 1
      };
      var rlbSMPat = /([sm])(\d+)/;
      var escapePat = /[-/\\^$*+?.()|[\]{}]/g;

      function escapeRegExp(s) {
        return s.replace(escapePat, '\\$&');
      }

      var linewrap = module.exports = function (start, stop, params) {
        if (typeof start === 'object') {
          params = start;
          start = params.start;
          stop = params.stop;
        }

        if (typeof stop === 'object') {
          params = stop;
          start = start || params.start;
          stop = undefined;
        }

        if (!stop) {
          stop = start;
          start = 0;
        }

        if (!params) {
          params = {};
        } // Supported options and default values.


        var preset,
            mode = 'soft',
            whitespace = 'default',
            tabWidth = 4,
            skip,
            skipScheme,
            lineBreak,
            lineBreakScheme,
            respectLineBreaks = 'all',
            respectNum,
            preservedLineIndent,
            wrapLineIndent,
            wrapLineIndentBase;
        var skipPat;
        var lineBreakPat, lineBreakStr;
        var multiLineBreakPat;
        var preservedLinePrefix = '';
        var wrapLineIndentPat,
            wrapLineInitPrefix = '';
        var tabRepl;
        var item, flags;
        var i; // First process presets, because these settings can be overwritten later.

        preset = params.preset;

        if (preset) {
          if (!(preset instanceof Array)) {
            preset = [preset];
          }

          for (i = 0; i < preset.length; i++) {
            item = presetMap[preset[i]];

            if (item) {
              if (item.mode) {
                mode = item.mode;
              }

              if (item.whitespace) {
                whitespace = item.whitespace;
              }

              if (item.tabWidth !== undefined) {
                tabWidth = item.tabWidth;
              }

              if (item.skip) {
                skip = item.skip;
              }

              if (item.skipScheme) {
                skipScheme = item.skipScheme;
              }

              if (item.lineBreak) {
                lineBreak = item.lineBreak;
              }

              if (item.lineBreakScheme) {
                lineBreakScheme = item.lineBreakScheme;
              }

              if (item.respectLineBreaks) {
                respectLineBreaks = item.respectLineBreaks;
              }

              if (item.preservedLineIndent !== undefined) {
                preservedLineIndent = item.preservedLineIndent;
              }

              if (item.wrapLineIndent !== undefined) {
                wrapLineIndent = item.wrapLineIndent;
              }

              if (item.wrapLineIndentBase) {
                wrapLineIndentBase = item.wrapLineIndentBase;
              }
            } else {
              throw new TypeError('preset must be one of "' + Object.keys(presetMap).join('", "') + '"');
            }
          }
        }

        if (params.mode) {
          if (modeMap[params.mode]) {
            mode = params.mode;
          } else {
            throw new TypeError('mode must be one of "' + Object.keys(modeMap).join('", "') + '"');
          }
        } // Available options: 'collapse', 'default', 'line', and 'all'


        if (params.whitespace) {
          if (wsMap[params.whitespace]) {
            whitespace = params.whitespace;
          } else {
            throw new TypeError('whitespace must be one of "' + Object.keys(wsMap).join('", "') + '"');
          }
        }

        if (params.tabWidth !== undefined) {
          if (parseInt(params.tabWidth, 10) >= 0) {
            tabWidth = parseInt(params.tabWidth, 10);
          } else {
            throw new TypeError('tabWidth must be a non-negative integer');
          }
        }

        tabRepl = new Array(tabWidth + 1).join(' '); // Available options: 'all', 'multi', 'm\d+', 's\d+', 'none'

        if (params.respectLineBreaks) {
          if (rlbMap[params.respectLineBreaks] || rlbSMPat.test(params.respectLineBreaks)) {
            respectLineBreaks = params.respectLineBreaks;
          } else {
            throw new TypeError('respectLineBreaks must be one of "' + Object.keys(rlbMap).join('", "') + '", "m<num>", "s<num>"');
          }
        } // After these conversions, now we have 4 options in `respectLineBreaks`:
        // 'all', 'none', 'm' and 's'.
        // `respectNum` is applicable iff `respectLineBreaks` is either 'm' or 's'.


        if (respectLineBreaks === 'multi') {
          respectLineBreaks = 'm';
          respectNum = 2;
        } else if (!rlbMap[respectLineBreaks]) {
          var match = rlbSMPat.exec(respectLineBreaks);
          respectLineBreaks = match[1];
          respectNum = parseInt(match[2], 10);
        }

        if (params.preservedLineIndent !== undefined) {
          if (parseInt(params.preservedLineIndent, 10) >= 0) {
            preservedLineIndent = parseInt(params.preservedLineIndent, 10);
          } else {
            throw new TypeError('preservedLineIndent must be a non-negative integer');
          }
        }

        if (preservedLineIndent > 0) {
          preservedLinePrefix = new Array(preservedLineIndent + 1).join(' ');
        }

        if (params.wrapLineIndent !== undefined) {
          if (!isNaN(parseInt(params.wrapLineIndent, 10))) {
            wrapLineIndent = parseInt(params.wrapLineIndent, 10);
          } else {
            throw new TypeError('wrapLineIndent must be an integer');
          }
        }

        if (params.wrapLineIndentBase) {
          wrapLineIndentBase = params.wrapLineIndentBase;
        }

        if (wrapLineIndentBase) {
          if (wrapLineIndent === undefined) {
            throw new TypeError('wrapLineIndent must be specified when wrapLineIndentBase is specified');
          }

          if (wrapLineIndentBase instanceof RegExp) {
            wrapLineIndentPat = wrapLineIndentBase;
          } else if (typeof wrapLineIndentBase === 'string') {
            wrapLineIndentPat = new RegExp(escapeRegExp(wrapLineIndentBase));
          } else {
            throw new TypeError('wrapLineIndentBase must be either a RegExp object or a string');
          }
        } else if (wrapLineIndent > 0) {
          wrapLineInitPrefix = new Array(wrapLineIndent + 1).join(' ');
        } else if (wrapLineIndent < 0) {
          throw new TypeError('wrapLineIndent must be non-negative when a base is not specified');
        } // NOTE: For the two RegExps `skipPat` and `lineBreakPat` that can be specified
        //       by the user:
        //       1. We require them to be "global", so we have to convert them to global
        //          if the user specifies a non-global regex.
        //       2. We cannot call `split()` on them, because they may or may not contain
        //          capturing parentheses which affect the output of `split()`.
        // Precedence: Regex = Str > Scheme


        if (params.skipScheme) {
          if (skipSchemeMap[params.skipScheme]) {
            skipScheme = params.skipScheme;
          } else {
            throw new TypeError('skipScheme must be one of "' + Object.keys(skipSchemeMap).join('", "') + '"');
          }
        }

        if (params.skip) {
          skip = params.skip;
        }

        if (skip) {
          if (skip instanceof RegExp) {
            skipPat = skip;

            if (!skipPat.global) {
              flags = 'g';

              if (skipPat.ignoreCase) {
                flags += 'i';
              }

              if (skipPat.multiline) {
                flags += 'm';
              }

              skipPat = new RegExp(skipPat.source, flags);
            }
          } else if (typeof skip === 'string') {
            skipPat = new RegExp(escapeRegExp(skip), 'g');
          } else {
            throw new TypeError('skip must be either a RegExp object or a string');
          }
        }

        if (!skipPat && skipScheme) {
          skipPat = skipSchemeMap[skipScheme];
        } // Precedence:
        // - for lineBreakPat: Regex > Scheme > Str
        // - for lineBreakStr: Str > Scheme > Regex


        if (params.lineBreakScheme) {
          if (lineBreakSchemeMap[params.lineBreakScheme]) {
            lineBreakScheme = params.lineBreakScheme;
          } else {
            throw new TypeError('lineBreakScheme must be one of "' + Object.keys(lineBreakSchemeMap).join('", "') + '"');
          }
        }

        if (params.lineBreak) {
          lineBreak = params.lineBreak;
        }

        if (lineBreakScheme) {
          // Supported schemes: 'unix', 'dos', 'mac', 'html', 'xhtml'
          item = lineBreakSchemeMap[lineBreakScheme];

          if (item) {
            lineBreakPat = item[0];
            lineBreakStr = item[1];
          }
        }

        if (lineBreak) {
          if (lineBreak instanceof Array) {
            if (lineBreak.length === 1) {
              lineBreak = lineBreak[0];
            } else if (lineBreak.length >= 2) {
              if (lineBreak[0] instanceof RegExp) {
                lineBreakPat = lineBreak[0];

                if (typeof lineBreak[1] === 'string') {
                  lineBreakStr = lineBreak[1];
                }
              } else if (lineBreak[1] instanceof RegExp) {
                lineBreakPat = lineBreak[1];

                if (typeof lineBreak[0] === 'string') {
                  lineBreakStr = lineBreak[0];
                }
              } else if (typeof lineBreak[0] === 'string' && typeof lineBreak[1] === 'string') {
                lineBreakPat = new RegExp(escapeRegExp(lineBreak[0]), 'g');
                lineBreakStr = lineBreak[1];
              } else {
                lineBreak = lineBreak[0];
              }
            }
          }

          if (typeof lineBreak === 'string') {
            lineBreakStr = lineBreak;

            if (!lineBreakPat) {
              lineBreakPat = new RegExp(escapeRegExp(lineBreak), 'g');
            }
          } else if (lineBreak instanceof RegExp) {
            lineBreakPat = lineBreak;
          } else if (!(lineBreak instanceof Array)) {
            throw new TypeError('lineBreak must be a RegExp object, a string, or an array consisted of a RegExp object and a string');
          }
        } // Only assign defaults when `lineBreakPat` is not assigned.
        // So if `params.lineBreak` is a RegExp, we don't have a value in `lineBreakStr`
        // yet. We will try to get the value from the input string, and if failed, we
        // will throw an exception.


        if (!lineBreakPat) {
          lineBreakPat = /\n/g;
          lineBreakStr = '\n';
        } // Create `multiLineBreakPat` based on `lineBreakPat`, that matches strings
        // consisted of one or more line breaks and zero or more whitespaces.
        // Also convert `lineBreakPat` to global if not already so.


        flags = 'g';

        if (lineBreakPat.ignoreCase) {
          flags += 'i';
        }

        if (lineBreakPat.multiline) {
          flags += 'm';
        }

        multiLineBreakPat = new RegExp('\\s*(?:' + lineBreakPat.source + ')(?:' + lineBreakPat.source + '|\\s)*', flags);

        if (!lineBreakPat.global) {
          lineBreakPat = new RegExp(lineBreakPat.source, flags);
        } // Initialize other useful variables.


        var re = mode === 'hard' ? /\b/ : /(\S+\s+)/;
        var prefix = new Array(start + 1).join(' ');
        var wsStrip = whitespace === 'default' || whitespace === 'collapse',
            wsCollapse = whitespace === 'collapse',
            wsLine = whitespace === 'line',
            wsAll = whitespace === 'all';
        var tabPat = /\t/g,
            collapsePat = /  +/g,
            pPat = /^\s+/,
            tPat = /\s+$/,
            nonWsPat = /\S/,
            wsPat = /\s/;
        var wrapLen = stop - start;
        return function (text) {
          text = text.toString().replace(tabPat, tabRepl);
          var match;

          if (!lineBreakStr) {
            // Try to get lineBreakStr from `text`
            lineBreakPat.lastIndex = 0;
            match = lineBreakPat.exec(text);

            if (match) {
              lineBreakStr = match[0];
            } else {
              throw new TypeError('Line break string for the output not specified');
            }
          } // text -> blocks; each bloc -> segments; each segment -> chunks


          var blocks,
              base = 0;
          var mo, arr, b, res; // Split `text` by line breaks.

          blocks = [];
          multiLineBreakPat.lastIndex = 0;
          match = multiLineBreakPat.exec(text);

          while (match) {
            blocks.push(text.substring(base, match.index));

            if (respectLineBreaks !== 'none') {
              arr = [];
              b = 0;
              lineBreakPat.lastIndex = 0;
              mo = lineBreakPat.exec(match[0]);

              while (mo) {
                arr.push(match[0].substring(b, mo.index));
                b = mo.index + mo[0].length;
                mo = lineBreakPat.exec(match[0]);
              }

              arr.push(match[0].substring(b));
              blocks.push({
                type: 'break',
                breaks: arr
              });
            } else {
              // Strip line breaks and insert spaces when necessary.
              if (wsCollapse) {
                res = ' ';
              } else {
                res = match[0].replace(lineBreakPat, '');
              }

              blocks.push({
                type: 'break',
                remaining: res
              });
            }

            base = match.index + match[0].length;
            match = multiLineBreakPat.exec(text);
          }

          blocks.push(text.substring(base));
          var i, j, k;
          var segments;

          if (skipPat) {
            segments = [];

            for (i = 0; i < blocks.length; i++) {
              var bloc = blocks[i];

              if (typeof bloc !== 'string') {
                // This is an object.
                segments.push(bloc);
              } else {
                base = 0;
                skipPat.lastIndex = 0;
                match = skipPat.exec(bloc);

                while (match) {
                  segments.push(bloc.substring(base, match.index));
                  segments.push({
                    type: 'skip',
                    value: match[0]
                  });
                  base = match.index + match[0].length;
                  match = skipPat.exec(bloc);
                }

                segments.push(bloc.substring(base));
              }
            }
          } else {
            segments = blocks;
          }

          var chunks = [];

          for (i = 0; i < segments.length; i++) {
            var segment = segments[i];

            if (typeof segment !== 'string') {
              // This is an object.
              chunks.push(segment);
            } else {
              if (wsCollapse) {
                segment = segment.replace(collapsePat, ' ');
              }

              var parts = segment.split(re),
                  acc = [];

              for (j = 0; j < parts.length; j++) {
                var x = parts[j];

                if (mode === 'hard') {
                  for (k = 0; k < x.length; k += wrapLen) {
                    acc.push(x.slice(k, k + wrapLen));
                  }
                } else {
                  acc.push(x);
                }
              }

              chunks = chunks.concat(acc);
            }
          }

          var curLine = 0,
              curLineLength = start + preservedLinePrefix.length,
              lines = [prefix + preservedLinePrefix],
              // Holds the "real length" (excluding trailing whitespaces) of the
          // current line if it exceeds `stop`, otherwise 0.
          // ONLY USED when `wsAll` is true, in `finishOffCurLine()`.
          bulge = 0,
              // `cleanLine` is true iff we are at the beginning of an output line. By
          // "beginning" we mean it doesn't contain any non-whitespace char yet.
          // But its `curLineLength` can be greater than `start`, or even possibly
          // be greater than `stop`, if `wsStrip` is false.
          //
          // Note that a "clean" line can still contain skip strings, in addition
          // to whitespaces.
          //
          // This variable is used to allow us strip preceding whitespaces when
          // `wsStrip` is true, or `wsLine` is true and `preservedLine` is false.
          cleanLine = true,
              // `preservedLine` is true iff we are in a preserved input line.
          //
          // It's used when `wsLine` is true to (combined with `cleanLine`) decide
          // whether a whitespace is at the beginning of a preserved input line and
          // should not be stripped.
          preservedLine = true,
              // The current indent prefix for wrapped lines.
          wrapLinePrefix = wrapLineInitPrefix,
              remnant; // Always returns '' if `beforeHardBreak` is true.
          //
          // Assumption: Each call of this function is always followed by a `lines.push()` call.
          //
          // This function can change the status of `cleanLine`, but we don't modify the value of
          // `cleanLine` in this function. It's fine because `cleanLine` will be set to the correct
          // value after the `lines.push()` call following this function call. We also don't update
          // `curLineLength` when pushing a new line and it's safe for the same reason.

          function finishOffCurLine(beforeHardBreak) {
            var str = lines[curLine],
                idx,
                ln,
                rBase;

            if (!wsAll) {
              // Strip all trailing whitespaces past `start`.
              idx = str.length - 1;

              while (idx >= start && str[idx] === ' ') {
                idx--;
              }

              while (idx >= start && wsPat.test(str[idx])) {
                idx--;
              }

              idx++;

              if (idx !== str.length) {
                lines[curLine] = str.substring(0, idx);
              }

              if (preservedLine && cleanLine && wsLine && curLineLength > stop) {
                // Add the remnants to the next line, just like when `wsAll` is true.
                rBase = str.length - (curLineLength - stop);

                if (rBase < idx) {
                  // We didn't reach `stop` when stripping due to a bulge.
                  rBase = idx;
                }
              }
            } else {
              // Strip trailing whitespaces exceeding stop.
              if (curLineLength > stop) {
                bulge = bulge || stop;
                rBase = str.length - (curLineLength - bulge);
                lines[curLine] = str.substring(0, rBase);
              }

              bulge = 0;
            } // Bug: the current implementation of `wrapLineIndent` is buggy: we are not
            // taking the extra space occupied by the additional indentation into account
            // when wrapping the line. For example, in "hard" mode, we should hard-wrap
            // long words at `wrapLen - wrapLinePrefix.length` instead of `wrapLen`;
            // and remnants should also be wrapped at `wrapLen - wrapLinePrefix.length`.


            if (preservedLine) {
              // This is a preserved line, and the next output line isn't a
              // preserved line.
              preservedLine = false;

              if (wrapLineIndentPat) {
                idx = lines[curLine].substring(start).search(wrapLineIndentPat);

                if (idx >= 0 && idx + wrapLineIndent > 0) {
                  wrapLinePrefix = new Array(idx + wrapLineIndent + 1).join(' ');
                } else {
                  wrapLinePrefix = '';
                }
              }
            } // Some remnants are left to the next line.


            if (rBase) {
              while (rBase + wrapLen < str.length) {
                if (wsAll) {
                  ln = str.substring(rBase, rBase + wrapLen);
                  lines.push(prefix + wrapLinePrefix + ln);
                } else {
                  lines.push(prefix + wrapLinePrefix);
                }

                rBase += wrapLen;
                curLine++;
              }

              if (beforeHardBreak) {
                if (wsAll) {
                  ln = str.substring(rBase);
                  lines.push(prefix + wrapLinePrefix + ln);
                } else {
                  lines.push(prefix + wrapLinePrefix);
                }

                curLine++;
              } else {
                ln = str.substring(rBase);
                return wrapLinePrefix + ln;
              }
            }

            return '';
          }

          for (i = 0; i < chunks.length; i++) {
            var chunk = chunks[i];

            if (chunk === '') {
              continue;
            }

            if (typeof chunk !== 'string') {
              if (chunk.type === 'break') {
                // This is one or more line breaks.
                // Each entry in `breaks` is just zero or more whitespaces.
                if (respectLineBreaks !== 'none') {
                  // Note that if `whitespace` is "collapse", we still need
                  // to collapse whitespaces in entries of `breaks`.
                  var breaks = chunk.breaks;
                  var num = breaks.length - 1;

                  if (respectLineBreaks === 's') {
                    // This is the most complex scenario. We have to check
                    // the line breaks one by one.
                    for (j = 0; j < num; j++) {
                      if (breaks[j + 1].length < respectNum) {
                        // This line break should be stripped.
                        if (wsCollapse) {
                          breaks[j + 1] = ' ';
                        } else {
                          breaks[j + 1] = breaks[j] + breaks[j + 1];
                        }
                      } else {
                        // This line break should be preserved.
                        // First finish off the current line.
                        if (wsAll) {
                          lines[curLine] += breaks[j];
                          curLineLength += breaks[j].length;
                        }

                        finishOffCurLine(true);
                        lines.push(prefix + preservedLinePrefix);
                        curLine++;
                        curLineLength = start + preservedLinePrefix.length;
                        preservedLine = cleanLine = true;
                      }
                    } // We are adding to either the existing line (if no line break
                    // is qualified for preservance) or a "new" line.


                    if (!cleanLine || wsAll || wsLine && preservedLine) {
                      if (wsCollapse || !cleanLine && breaks[num] === '') {
                        breaks[num] = ' ';
                      }

                      lines[curLine] += breaks[num];
                      curLineLength += breaks[num].length;
                    }
                  } else if (respectLineBreaks === 'm' && num < respectNum) {
                    // These line breaks should be stripped.
                    if (!cleanLine || wsAll || wsLine && preservedLine) {
                      if (wsCollapse) {
                        chunk = ' ';
                      } else {
                        chunk = breaks.join('');

                        if (!cleanLine && chunk === '') {
                          chunk = ' ';
                        }
                      }

                      lines[curLine] += chunk;
                      curLineLength += chunk.length;
                    }
                  } else {
                    // 'all' || ('m' && num >= respectNum)
                    // These line breaks should be preserved.
                    if (wsStrip) {
                      // Finish off the current line.
                      finishOffCurLine(true);

                      for (j = 0; j < num; j++) {
                        lines.push(prefix + preservedLinePrefix);
                        curLine++;
                      }

                      curLineLength = start + preservedLinePrefix.length;
                      preservedLine = cleanLine = true;
                    } else {
                      if (wsAll || preservedLine && cleanLine) {
                        lines[curLine] += breaks[0];
                        curLineLength += breaks[0].length;
                      }

                      for (j = 0; j < num; j++) {
                        // Finish off the current line.
                        finishOffCurLine(true);
                        lines.push(prefix + preservedLinePrefix + breaks[j + 1]);
                        curLine++;
                        curLineLength = start + preservedLinePrefix.length + breaks[j + 1].length;
                        preservedLine = cleanLine = true;
                      }
                    }
                  }
                } else {
                  // These line breaks should be stripped.
                  if (!cleanLine || wsAll || wsLine && preservedLine) {
                    chunk = chunk.remaining; // Bug: If `wsAll` is true, `cleanLine` is false, and `chunk`
                    // is '', we insert a space to replace the line break. This
                    // space will be preserved even if we are at the end of an
                    // output line, which is wrong behavior. However, I'm not
                    // sure it's worth it to fix this edge case.

                    if (wsCollapse || !cleanLine && chunk === '') {
                      chunk = ' ';
                    }

                    lines[curLine] += chunk;
                    curLineLength += chunk.length;
                  }
                }
              } else if (chunk.type === 'skip') {
                // This is a skip string.
                // Assumption: skip strings don't end with whitespaces.
                if (curLineLength > stop) {
                  remnant = finishOffCurLine(false);
                  lines.push(prefix + wrapLinePrefix);
                  curLine++;
                  curLineLength = start + wrapLinePrefix.length;

                  if (remnant) {
                    lines[curLine] += remnant;
                    curLineLength += remnant.length;
                  }

                  cleanLine = true;
                }

                lines[curLine] += chunk.value;
              }

              continue;
            }

            var chunk2;

            while (1) {
              chunk2 = undefined;

              if (curLineLength + chunk.length > stop && curLineLength + (chunk2 = chunk.replace(tPat, '')).length > stop && chunk2 !== '' && curLineLength > start) {
                // This line is full, add `chunk` to the next line
                remnant = finishOffCurLine(false);
                lines.push(prefix + wrapLinePrefix);
                curLine++;
                curLineLength = start + wrapLinePrefix.length;

                if (remnant) {
                  lines[curLine] += remnant;
                  curLineLength += remnant.length;
                  cleanLine = true;
                  continue;
                }

                if (wsStrip || wsLine && !(preservedLine && cleanLine)) {
                  chunk = chunk.replace(pPat, '');
                }

                cleanLine = false;
              } else {
                // Add `chunk` to this line
                if (cleanLine) {
                  if (wsStrip || wsLine && !(preservedLine && cleanLine)) {
                    chunk = chunk.replace(pPat, '');

                    if (chunk !== '') {
                      cleanLine = false;
                    }
                  } else {
                    if (nonWsPat.test(chunk)) {
                      cleanLine = false;
                    }
                  }
                }
              }

              break;
            }

            if (wsAll && chunk2 && curLineLength + chunk2.length > stop) {
              bulge = curLineLength + chunk2.length;
            }

            lines[curLine] += chunk;
            curLineLength += chunk.length;
          } // Finally, finish off the last line.


          finishOffCurLine(true);
          return lines.join(lineBreakStr);
        };
      };

      linewrap.soft = linewrap;

      linewrap.hard = function () {
        var args = [].slice.call(arguments);
        var last = args.length - 1;

        if (typeof args[last] === 'object') {
          args[last].mode = 'hard';
        } else {
          args.push({
            mode: 'hard'
          });
        }

        return linewrap.apply(null, args);
      };

      linewrap.wrap = function (text
      /*, start, stop, params*/
      ) {
        var args = [].slice.call(arguments);
        args.shift();
        return linewrap.apply(null, args)(text);
      };
      /***/

    },

    /***/
    "/uMM":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/sbcs-data-generated.js ***!
      \*****************************************************************************************************/

    /*! no static exports found */

    /***/
    function uMM(module, exports, __webpack_require__) {
      "use strict"; // Generated data for sbcs codec. Don't edit manually. Regenerate using generation/gen-sbcs.js script.

      module.exports = {
        "437": "cp437",
        "737": "cp737",
        "775": "cp775",
        "850": "cp850",
        "852": "cp852",
        "855": "cp855",
        "856": "cp856",
        "857": "cp857",
        "858": "cp858",
        "860": "cp860",
        "861": "cp861",
        "862": "cp862",
        "863": "cp863",
        "864": "cp864",
        "865": "cp865",
        "866": "cp866",
        "869": "cp869",
        "874": "windows874",
        "922": "cp922",
        "1046": "cp1046",
        "1124": "cp1124",
        "1125": "cp1125",
        "1129": "cp1129",
        "1133": "cp1133",
        "1161": "cp1161",
        "1162": "cp1162",
        "1163": "cp1163",
        "1250": "windows1250",
        "1251": "windows1251",
        "1252": "windows1252",
        "1253": "windows1253",
        "1254": "windows1254",
        "1255": "windows1255",
        "1256": "windows1256",
        "1257": "windows1257",
        "1258": "windows1258",
        "28591": "iso88591",
        "28592": "iso88592",
        "28593": "iso88593",
        "28594": "iso88594",
        "28595": "iso88595",
        "28596": "iso88596",
        "28597": "iso88597",
        "28598": "iso88598",
        "28599": "iso88599",
        "28600": "iso885910",
        "28601": "iso885911",
        "28603": "iso885913",
        "28604": "iso885914",
        "28605": "iso885915",
        "28606": "iso885916",
        "windows874": {
          "type": "_sbcs",
          "chars": "€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
        },
        "win874": "windows874",
        "cp874": "windows874",
        "windows1250": {
          "type": "_sbcs",
          "chars": "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
        },
        "win1250": "windows1250",
        "cp1250": "windows1250",
        "windows1251": {
          "type": "_sbcs",
          "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
        },
        "win1251": "windows1251",
        "cp1251": "windows1251",
        "windows1252": {
          "type": "_sbcs",
          "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
        },
        "win1252": "windows1252",
        "cp1252": "windows1252",
        "windows1253": {
          "type": "_sbcs",
          "chars": "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
        },
        "win1253": "windows1253",
        "cp1253": "windows1253",
        "windows1254": {
          "type": "_sbcs",
          "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
        },
        "win1254": "windows1254",
        "cp1254": "windows1254",
        "windows1255": {
          "type": "_sbcs",
          "chars": "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
        },
        "win1255": "windows1255",
        "cp1255": "windows1255",
        "windows1256": {
          "type": "_sbcs",
          "chars": "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"
        },
        "win1256": "windows1256",
        "cp1256": "windows1256",
        "windows1257": {
          "type": "_sbcs",
          "chars": "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"
        },
        "win1257": "windows1257",
        "cp1257": "windows1257",
        "windows1258": {
          "type": "_sbcs",
          "chars": "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
        },
        "win1258": "windows1258",
        "cp1258": "windows1258",
        "iso88591": {
          "type": "_sbcs",
          "chars": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
        },
        "cp28591": "iso88591",
        "iso88592": {
          "type": "_sbcs",
          "chars": " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
        },
        "cp28592": "iso88592",
        "iso88593": {
          "type": "_sbcs",
          "chars": " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙"
        },
        "cp28593": "iso88593",
        "iso88594": {
          "type": "_sbcs",
          "chars": " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙"
        },
        "cp28594": "iso88594",
        "iso88595": {
          "type": "_sbcs",
          "chars": " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ"
        },
        "cp28595": "iso88595",
        "iso88596": {
          "type": "_sbcs",
          "chars": " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"
        },
        "cp28596": "iso88596",
        "iso88597": {
          "type": "_sbcs",
          "chars": " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
        },
        "cp28597": "iso88597",
        "iso88598": {
          "type": "_sbcs",
          "chars": " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
        },
        "cp28598": "iso88598",
        "iso88599": {
          "type": "_sbcs",
          "chars": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
        },
        "cp28599": "iso88599",
        "iso885910": {
          "type": "_sbcs",
          "chars": " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ"
        },
        "cp28600": "iso885910",
        "iso885911": {
          "type": "_sbcs",
          "chars": " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
        },
        "cp28601": "iso885911",
        "iso885913": {
          "type": "_sbcs",
          "chars": " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’"
        },
        "cp28603": "iso885913",
        "iso885914": {
          "type": "_sbcs",
          "chars": " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ"
        },
        "cp28604": "iso885914",
        "iso885915": {
          "type": "_sbcs",
          "chars": " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
        },
        "cp28605": "iso885915",
        "iso885916": {
          "type": "_sbcs",
          "chars": " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"
        },
        "cp28606": "iso885916",
        "cp437": {
          "type": "_sbcs",
          "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
        },
        "ibm437": "cp437",
        "csibm437": "cp437",
        "cp737": {
          "type": "_sbcs",
          "chars": "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "
        },
        "ibm737": "cp737",
        "csibm737": "cp737",
        "cp775": {
          "type": "_sbcs",
          "chars": "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "
        },
        "ibm775": "cp775",
        "csibm775": "cp775",
        "cp850": {
          "type": "_sbcs",
          "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
        },
        "ibm850": "cp850",
        "csibm850": "cp850",
        "cp852": {
          "type": "_sbcs",
          "chars": "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "
        },
        "ibm852": "cp852",
        "csibm852": "cp852",
        "cp855": {
          "type": "_sbcs",
          "chars": "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "
        },
        "ibm855": "cp855",
        "csibm855": "cp855",
        "cp856": {
          "type": "_sbcs",
          "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ "
        },
        "ibm856": "cp856",
        "csibm856": "cp856",
        "cp857": {
          "type": "_sbcs",
          "chars": "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "
        },
        "ibm857": "cp857",
        "csibm857": "cp857",
        "cp858": {
          "type": "_sbcs",
          "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
        },
        "ibm858": "cp858",
        "csibm858": "cp858",
        "cp860": {
          "type": "_sbcs",
          "chars": "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
        },
        "ibm860": "cp860",
        "csibm860": "cp860",
        "cp861": {
          "type": "_sbcs",
          "chars": "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
        },
        "ibm861": "cp861",
        "csibm861": "cp861",
        "cp862": {
          "type": "_sbcs",
          "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
        },
        "ibm862": "cp862",
        "csibm862": "cp862",
        "cp863": {
          "type": "_sbcs",
          "chars": "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
        },
        "ibm863": "cp863",
        "csibm863": "cp863",
        "cp864": {
          "type": "_sbcs",
          "chars": "\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !\"#$\u066A&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F\xB0\xB7\u2219\u221A\u2592\u2500\u2502\u253C\u2524\u252C\u251C\u2534\u2510\u250C\u2514\u2518\u03B2\u221E\u03C6\xB1\xBD\xBC\u2248\xAB\xBB\uFEF7\uFEF8\uFFFD\uFFFD\uFEFB\uFEFC\uFFFD\xA0\xAD\uFE82\xA3\xA4\uFE84\uFFFD\uFFFD\uFE8E\uFE8F\uFE95\uFE99\u060C\uFE9D\uFEA1\uFEA5\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\uFED1\u061B\uFEB1\uFEB5\uFEB9\u061F\xA2\uFE80\uFE81\uFE83\uFE85\uFECA\uFE8B\uFE8D\uFE91\uFE93\uFE97\uFE9B\uFE9F\uFEA3\uFEA7\uFEA9\uFEAB\uFEAD\uFEAF\uFEB3\uFEB7\uFEBB\uFEBF\uFEC1\uFEC5\uFECB\uFECF\xA6\xAC\xF7\xD7\uFEC9\u0640\uFED3\uFED7\uFEDB\uFEDF\uFEE3\uFEE7\uFEEB\uFEED\uFEEF\uFEF3\uFEBD\uFECC\uFECE\uFECD\uFEE1\uFE7D\u0651\uFEE5\uFEE9\uFEEC\uFEF0\uFEF2\uFED0\uFED5\uFEF5\uFEF6\uFEDD\uFED9\uFEF1\u25A0\uFFFD"
        },
        "ibm864": "cp864",
        "csibm864": "cp864",
        "cp865": {
          "type": "_sbcs",
          "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
        },
        "ibm865": "cp865",
        "csibm865": "cp865",
        "cp866": {
          "type": "_sbcs",
          "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "
        },
        "ibm866": "cp866",
        "csibm866": "cp866",
        "cp869": {
          "type": "_sbcs",
          "chars": "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "
        },
        "ibm869": "cp869",
        "csibm869": "cp869",
        "cp922": {
          "type": "_sbcs",
          "chars": " ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"
        },
        "ibm922": "cp922",
        "csibm922": "cp922",
        "cp1046": {
          "type": "_sbcs",
          "chars": "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"
        },
        "ibm1046": "cp1046",
        "csibm1046": "cp1046",
        "cp1124": {
          "type": "_sbcs",
          "chars": " ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ"
        },
        "ibm1124": "cp1124",
        "csibm1124": "cp1124",
        "cp1125": {
          "type": "_sbcs",
          "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "
        },
        "ibm1125": "cp1125",
        "csibm1125": "cp1125",
        "cp1129": {
          "type": "_sbcs",
          "chars": " ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
        },
        "ibm1129": "cp1129",
        "csibm1129": "cp1129",
        "cp1133": {
          "type": "_sbcs",
          "chars": " ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�"
        },
        "ibm1133": "cp1133",
        "csibm1133": "cp1133",
        "cp1161": {
          "type": "_sbcs",
          "chars": "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ "
        },
        "ibm1161": "cp1161",
        "csibm1161": "cp1161",
        "cp1162": {
          "type": "_sbcs",
          "chars": "€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
        },
        "ibm1162": "cp1162",
        "csibm1162": "cp1162",
        "cp1163": {
          "type": "_sbcs",
          "chars": " ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
        },
        "ibm1163": "cp1163",
        "csibm1163": "cp1163",
        "maccroatian": {
          "type": "_sbcs",
          "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
        },
        "maccyrillic": {
          "type": "_sbcs",
          "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
        },
        "macgreek": {
          "type": "_sbcs",
          "chars": "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"
        },
        "maciceland": {
          "type": "_sbcs",
          "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
        },
        "macroman": {
          "type": "_sbcs",
          "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
        },
        "macromania": {
          "type": "_sbcs",
          "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
        },
        "macthai": {
          "type": "_sbcs",
          "chars": "«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู﻿​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����"
        },
        "macturkish": {
          "type": "_sbcs",
          "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ"
        },
        "macukraine": {
          "type": "_sbcs",
          "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
        },
        "koi8r": {
          "type": "_sbcs",
          "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
        },
        "koi8u": {
          "type": "_sbcs",
          "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
        },
        "koi8ru": {
          "type": "_sbcs",
          "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
        },
        "koi8t": {
          "type": "_sbcs",
          "chars": "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
        },
        "armscii8": {
          "type": "_sbcs",
          "chars": " �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"
        },
        "rk1048": {
          "type": "_sbcs",
          "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
        },
        "tcvn": {
          "type": "_sbcs",
          "chars": "\0\xDA\u1EE4\x03\u1EEA\u1EEC\u1EEE\x07\b\t\n\x0B\f\r\x0E\x0F\x10\u1EE8\u1EF0\u1EF2\u1EF6\u1EF8\xDD\u1EF4\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F\xC0\u1EA2\xC3\xC1\u1EA0\u1EB6\u1EAC\xC8\u1EBA\u1EBC\xC9\u1EB8\u1EC6\xCC\u1EC8\u0128\xCD\u1ECA\xD2\u1ECE\xD5\xD3\u1ECC\u1ED8\u1EDC\u1EDE\u1EE0\u1EDA\u1EE2\xD9\u1EE6\u0168\xA0\u0102\xC2\xCA\xD4\u01A0\u01AF\u0110\u0103\xE2\xEA\xF4\u01A1\u01B0\u0111\u1EB0\u0300\u0309\u0303\u0301\u0323\xE0\u1EA3\xE3\xE1\u1EA1\u1EB2\u1EB1\u1EB3\u1EB5\u1EAF\u1EB4\u1EAE\u1EA6\u1EA8\u1EAA\u1EA4\u1EC0\u1EB7\u1EA7\u1EA9\u1EAB\u1EA5\u1EAD\xE8\u1EC2\u1EBB\u1EBD\xE9\u1EB9\u1EC1\u1EC3\u1EC5\u1EBF\u1EC7\xEC\u1EC9\u1EC4\u1EBE\u1ED2\u0129\xED\u1ECB\xF2\u1ED4\u1ECF\xF5\xF3\u1ECD\u1ED3\u1ED5\u1ED7\u1ED1\u1ED9\u1EDD\u1EDF\u1EE1\u1EDB\u1EE3\xF9\u1ED6\u1EE7\u0169\xFA\u1EE5\u1EEB\u1EED\u1EEF\u1EE9\u1EF1\u1EF3\u1EF7\u1EF9\xFD\u1EF5\u1ED0"
        },
        "georgianacademy": {
          "type": "_sbcs",
          "chars": "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
        },
        "georgianps": {
          "type": "_sbcs",
          "chars": "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
        },
        "pt154": {
          "type": "_sbcs",
          "chars": "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
        },
        "viscii": {
          "type": "_sbcs",
          "chars": "\0\x01\u1EB2\x03\x04\u1EB4\u1EAA\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\u1EF6\x15\x16\x17\x18\u1EF8\x1A\x1B\x1C\x1D\u1EF4\x1F !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F\u1EA0\u1EAE\u1EB0\u1EB6\u1EA4\u1EA6\u1EA8\u1EAC\u1EBC\u1EB8\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EE2\u1EDA\u1EDC\u1EDE\u1ECA\u1ECE\u1ECC\u1EC8\u1EE6\u0168\u1EE4\u1EF2\xD5\u1EAF\u1EB1\u1EB7\u1EA5\u1EA7\u1EA9\u1EAD\u1EBD\u1EB9\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1ED1\u1ED3\u1ED5\u1ED7\u1EE0\u01A0\u1ED9\u1EDD\u1EDF\u1ECB\u1EF0\u1EE8\u1EEA\u1EEC\u01A1\u1EDB\u01AF\xC0\xC1\xC2\xC3\u1EA2\u0102\u1EB3\u1EB5\xC8\xC9\xCA\u1EBA\xCC\xCD\u0128\u1EF3\u0110\u1EE9\xD2\xD3\xD4\u1EA1\u1EF7\u1EEB\u1EED\xD9\xDA\u1EF9\u1EF5\xDD\u1EE1\u01B0\xE0\xE1\xE2\xE3\u1EA3\u0103\u1EEF\u1EAB\xE8\xE9\xEA\u1EBB\xEC\xED\u0129\u1EC9\u0111\u1EF1\xF2\xF3\xF4\xF5\u1ECF\u1ECD\u1EE5\xF9\xFA\u0169\u1EE7\xFD\u1EE3\u1EEE"
        },
        "iso646cn": {
          "type": "_sbcs",
          "chars": "\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !\"#\xA5%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}\u203E\x7F\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"
        },
        "iso646jp": {
          "type": "_sbcs",
          "chars": "\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\xA5]^_`abcdefghijklmnopqrstuvwxyz{|}\u203E\x7F\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"
        },
        "hproman8": {
          "type": "_sbcs",
          "chars": " ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�"
        },
        "macintosh": {
          "type": "_sbcs",
          "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
        },
        "ascii": {
          "type": "_sbcs",
          "chars": "��������������������������������������������������������������������������������������������������������������������������������"
        },
        "tis620": {
          "type": "_sbcs",
          "chars": "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
        }
      };
      /***/
    },

    /***/
    "0W/q":
    /*!****************************************!*\
      !*** ./node_modules/canvas/browser.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function WQ(module, exports, __webpack_require__) {
      /* globals document, ImageData */
      var parseFont = __webpack_require__(
      /*! ./lib/parse-font */
      "9gS/");

      exports.parseFont = parseFont;

      exports.createCanvas = function (width, height) {
        return Object.assign(document.createElement('canvas'), {
          width: width,
          height: height
        });
      };

      exports.createImageData = function (array, width, height) {
        // Browser implementation of ImageData looks at the number of arguments passed
        switch (arguments.length) {
          case 0:
            return new ImageData();

          case 1:
            return new ImageData(array);

          case 2:
            return new ImageData(array, width);

          default:
            return new ImageData(array, width, height);
        }
      };

      exports.loadImage = function (src, options) {
        return new Promise(function (resolve, reject) {
          var image = Object.assign(document.createElement('img'), options);

          function cleanup() {
            image.onload = null;
            image.onerror = null;
          }

          image.onload = function () {
            cleanup();
            resolve(image);
          };

          image.onerror = function () {
            cleanup();
            reject(new Error('Failed to load the image "' + src + '"'));
          };

          image.src = src;
        });
      };
      /***/

    },

    /***/
    "1G5A":
    /*!*********************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/lib/index.js ***!
      \*********************************************************************************/

    /*! no static exports found */

    /***/
    function G5A(module, exports, __webpack_require__) {
      "use strict"; // Some environments don't have global Buffer (e.g. React Native).
      // Solution would be installing npm modules "buffer" and "stream" explicitly.

      var Buffer = __webpack_require__(
      /*! safer-buffer */
      "xZGU").Buffer;

      var bomHandling = __webpack_require__(
      /*! ./bom-handling */
      "uXXV"),
          iconv = module.exports; // All codecs and aliases are kept here, keyed by encoding name/alias.
      // They are lazy loaded in `iconv.getCodec` from `encodings/index.js`.


      iconv.encodings = null; // Characters emitted in case of error.

      iconv.defaultCharUnicode = '�';
      iconv.defaultCharSingleByte = '?'; // Public API.

      iconv.encode = function encode(str, encoding, options) {
        str = "" + (str || ""); // Ensure string.

        var encoder = iconv.getEncoder(encoding, options);
        var res = encoder.write(str);
        var trail = encoder.end();
        return trail && trail.length > 0 ? Buffer.concat([res, trail]) : res;
      };

      iconv.decode = function decode(buf, encoding, options) {
        if (typeof buf === 'string') {
          if (!iconv.skipDecodeWarning) {
            console.error('Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding');
            iconv.skipDecodeWarning = true;
          }

          buf = Buffer.from("" + (buf || ""), "binary"); // Ensure buffer.
        }

        var decoder = iconv.getDecoder(encoding, options);
        var res = decoder.write(buf);
        var trail = decoder.end();
        return trail ? res + trail : res;
      };

      iconv.encodingExists = function encodingExists(enc) {
        try {
          iconv.getCodec(enc);
          return true;
        } catch (e) {
          return false;
        }
      }; // Legacy aliases to convert functions


      iconv.toEncoding = iconv.encode;
      iconv.fromEncoding = iconv.decode; // Search for a codec in iconv.encodings. Cache codec data in iconv._codecDataCache.

      iconv._codecDataCache = {};

      iconv.getCodec = function getCodec(encoding) {
        if (!iconv.encodings) iconv.encodings = __webpack_require__(
        /*! ../encodings */
        "J7ee"); // Lazy load all encoding definitions.
        // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.

        var enc = iconv._canonicalizeEncoding(encoding); // Traverse iconv.encodings to find actual codec.


        var codecOptions = {};

        while (true) {
          var codec = iconv._codecDataCache[enc];
          if (codec) return codec;
          var codecDef = iconv.encodings[enc];

          switch (typeof codecDef) {
            case "string":
              // Direct alias to other encoding.
              enc = codecDef;
              break;

            case "object":
              // Alias with options. Can be layered.
              for (var key in codecDef) codecOptions[key] = codecDef[key];

              if (!codecOptions.encodingName) codecOptions.encodingName = enc;
              enc = codecDef.type;
              break;

            case "function":
              // Codec itself.
              if (!codecOptions.encodingName) codecOptions.encodingName = enc; // The codec function must load all tables and return object with .encoder and .decoder methods.
              // It'll be called only once (for each different options object).

              codec = new codecDef(codecOptions, iconv);
              iconv._codecDataCache[codecOptions.encodingName] = codec; // Save it to be reused later.

              return codec;

            default:
              throw new Error("Encoding not recognized: '" + encoding + "' (searched as: '" + enc + "')");
          }
        }
      };

      iconv._canonicalizeEncoding = function (encoding) {
        // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
        return ('' + encoding).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
      };

      iconv.getEncoder = function getEncoder(encoding, options) {
        var codec = iconv.getCodec(encoding),
            encoder = new codec.encoder(options, codec);
        if (codec.bomAware && options && options.addBOM) encoder = new bomHandling.PrependBOM(encoder, options);
        return encoder;
      };

      iconv.getDecoder = function getDecoder(encoding, options) {
        var codec = iconv.getCodec(encoding),
            decoder = new codec.decoder(options, codec);
        if (codec.bomAware && !(options && options.stripBOM === false)) decoder = new bomHandling.StripBOM(decoder, options);
        return decoder;
      }; // Load extensions in Node. All of them are omitted in Browserify build via 'browser' field in package.json.


      var nodeVer = typeof process !== 'undefined' && process.versions && process.versions.node;

      if (nodeVer) {
        // Load streaming support in Node v0.10+
        var nodeVerArr = nodeVer.split(".").map(Number);

        if (nodeVerArr[0] > 0 || nodeVerArr[1] >= 10) {
          __webpack_require__(
          /*! ./streams */
          4)(iconv);
        } // Load Node primitive extensions.


        __webpack_require__(
        /*! ./extend-node */
        5)(iconv);
      }

      if (false) {}
      /***/

    },

    /***/
    4:
    /*!***************************!*\
      !*** ./streams (ignored) ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    5:
    /*!*******************************!*\
      !*** ./extend-node (ignored) ***!
      \*******************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "75lf":
    /*!************************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/tables/cp936.json ***!
      \************************************************************************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, default */

    /***/
    function lf(module) {
      module.exports = JSON.parse("[[\"0\",\"\\u0000\",127,\"\u20AC\"],[\"8140\",\"\u4E02\u4E04\u4E05\u4E06\u4E0F\u4E12\u4E17\u4E1F\u4E20\u4E21\u4E23\u4E26\u4E29\u4E2E\u4E2F\u4E31\u4E33\u4E35\u4E37\u4E3C\u4E40\u4E41\u4E42\u4E44\u4E46\u4E4A\u4E51\u4E55\u4E57\u4E5A\u4E5B\u4E62\u4E63\u4E64\u4E65\u4E67\u4E68\u4E6A\",5,\"\u4E72\u4E74\",9,\"\u4E7F\",6,\"\u4E87\u4E8A\"],[\"8180\",\"\u4E90\u4E96\u4E97\u4E99\u4E9C\u4E9D\u4E9E\u4EA3\u4EAA\u4EAF\u4EB0\u4EB1\u4EB4\u4EB6\u4EB7\u4EB8\u4EB9\u4EBC\u4EBD\u4EBE\u4EC8\u4ECC\u4ECF\u4ED0\u4ED2\u4EDA\u4EDB\u4EDC\u4EE0\u4EE2\u4EE6\u4EE7\u4EE9\u4EED\u4EEE\u4EEF\u4EF1\u4EF4\u4EF8\u4EF9\u4EFA\u4EFC\u4EFE\u4F00\u4F02\",6,\"\u4F0B\u4F0C\u4F12\",4,\"\u4F1C\u4F1D\u4F21\u4F23\u4F28\u4F29\u4F2C\u4F2D\u4F2E\u4F31\u4F33\u4F35\u4F37\u4F39\u4F3B\u4F3E\",4,\"\u4F44\u4F45\u4F47\",5,\"\u4F52\u4F54\u4F56\u4F61\u4F62\u4F66\u4F68\u4F6A\u4F6B\u4F6D\u4F6E\u4F71\u4F72\u4F75\u4F77\u4F78\u4F79\u4F7A\u4F7D\u4F80\u4F81\u4F82\u4F85\u4F86\u4F87\u4F8A\u4F8C\u4F8E\u4F90\u4F92\u4F93\u4F95\u4F96\u4F98\u4F99\u4F9A\u4F9C\u4F9E\u4F9F\u4FA1\u4FA2\"],[\"8240\",\"\u4FA4\u4FAB\u4FAD\u4FB0\",4,\"\u4FB6\",8,\"\u4FC0\u4FC1\u4FC2\u4FC6\u4FC7\u4FC8\u4FC9\u4FCB\u4FCC\u4FCD\u4FD2\",4,\"\u4FD9\u4FDB\u4FE0\u4FE2\u4FE4\u4FE5\u4FE7\u4FEB\u4FEC\u4FF0\u4FF2\u4FF4\u4FF5\u4FF6\u4FF7\u4FF9\u4FFB\u4FFC\u4FFD\u4FFF\",11],[\"8280\",\"\u500B\u500E\u5010\u5011\u5013\u5015\u5016\u5017\u501B\u501D\u501E\u5020\u5022\u5023\u5024\u5027\u502B\u502F\",10,\"\u503B\u503D\u503F\u5040\u5041\u5042\u5044\u5045\u5046\u5049\u504A\u504B\u504D\u5050\",4,\"\u5056\u5057\u5058\u5059\u505B\u505D\",7,\"\u5066\",5,\"\u506D\",8,\"\u5078\u5079\u507A\u507C\u507D\u5081\u5082\u5083\u5084\u5086\u5087\u5089\u508A\u508B\u508C\u508E\",20,\"\u50A4\u50A6\u50AA\u50AB\u50AD\",4,\"\u50B3\",6,\"\u50BC\"],[\"8340\",\"\u50BD\",17,\"\u50D0\",5,\"\u50D7\u50D8\u50D9\u50DB\",10,\"\u50E8\u50E9\u50EA\u50EB\u50EF\u50F0\u50F1\u50F2\u50F4\u50F6\",4,\"\u50FC\",9,\"\u5108\"],[\"8380\",\"\u5109\u510A\u510C\",5,\"\u5113\",13,\"\u5122\",28,\"\u5142\u5147\u514A\u514C\u514E\u514F\u5150\u5152\u5153\u5157\u5158\u5159\u515B\u515D\",4,\"\u5163\u5164\u5166\u5167\u5169\u516A\u516F\u5172\u517A\u517E\u517F\u5183\u5184\u5186\u5187\u518A\u518B\u518E\u518F\u5190\u5191\u5193\u5194\u5198\u519A\u519D\u519E\u519F\u51A1\u51A3\u51A6\",4,\"\u51AD\u51AE\u51B4\u51B8\u51B9\u51BA\u51BE\u51BF\u51C1\u51C2\u51C3\u51C5\u51C8\u51CA\u51CD\u51CE\u51D0\u51D2\",5],[\"8440\",\"\u51D8\u51D9\u51DA\u51DC\u51DE\u51DF\u51E2\u51E3\u51E5\",5,\"\u51EC\u51EE\u51F1\u51F2\u51F4\u51F7\u51FE\u5204\u5205\u5209\u520B\u520C\u520F\u5210\u5213\u5214\u5215\u521C\u521E\u521F\u5221\u5222\u5223\u5225\u5226\u5227\u522A\u522C\u522F\u5231\u5232\u5234\u5235\u523C\u523E\u5244\",5,\"\u524B\u524E\u524F\u5252\u5253\u5255\u5257\u5258\"],[\"8480\",\"\u5259\u525A\u525B\u525D\u525F\u5260\u5262\u5263\u5264\u5266\u5268\u526B\u526C\u526D\u526E\u5270\u5271\u5273\",9,\"\u527E\u5280\u5283\",4,\"\u5289\",6,\"\u5291\u5292\u5294\",6,\"\u529C\u52A4\u52A5\u52A6\u52A7\u52AE\u52AF\u52B0\u52B4\",9,\"\u52C0\u52C1\u52C2\u52C4\u52C5\u52C6\u52C8\u52CA\u52CC\u52CD\u52CE\u52CF\u52D1\u52D3\u52D4\u52D5\u52D7\u52D9\",5,\"\u52E0\u52E1\u52E2\u52E3\u52E5\",10,\"\u52F1\",7,\"\u52FB\u52FC\u52FD\u5301\u5302\u5303\u5304\u5307\u5309\u530A\u530B\u530C\u530E\"],[\"8540\",\"\u5311\u5312\u5313\u5314\u5318\u531B\u531C\u531E\u531F\u5322\u5324\u5325\u5327\u5328\u5329\u532B\u532C\u532D\u532F\",9,\"\u533C\u533D\u5340\u5342\u5344\u5346\u534B\u534C\u534D\u5350\u5354\u5358\u5359\u535B\u535D\u5365\u5368\u536A\u536C\u536D\u5372\u5376\u5379\u537B\u537C\u537D\u537E\u5380\u5381\u5383\u5387\u5388\u538A\u538E\u538F\"],[\"8580\",\"\u5390\",4,\"\u5396\u5397\u5399\u539B\u539C\u539E\u53A0\u53A1\u53A4\u53A7\u53AA\u53AB\u53AC\u53AD\u53AF\",6,\"\u53B7\u53B8\u53B9\u53BA\u53BC\u53BD\u53BE\u53C0\u53C3\",4,\"\u53CE\u53CF\u53D0\u53D2\u53D3\u53D5\u53DA\u53DC\u53DD\u53DE\u53E1\u53E2\u53E7\u53F4\u53FA\u53FE\u53FF\u5400\u5402\u5405\u5407\u540B\u5414\u5418\u5419\u541A\u541C\u5422\u5424\u5425\u542A\u5430\u5433\u5436\u5437\u543A\u543D\u543F\u5441\u5442\u5444\u5445\u5447\u5449\u544C\u544D\u544E\u544F\u5451\u545A\u545D\",4,\"\u5463\u5465\u5467\u5469\",7,\"\u5474\u5479\u547A\u547E\u547F\u5481\u5483\u5485\u5487\u5488\u5489\u548A\u548D\u5491\u5493\u5497\u5498\u549C\u549E\u549F\u54A0\u54A1\"],[\"8640\",\"\u54A2\u54A5\u54AE\u54B0\u54B2\u54B5\u54B6\u54B7\u54B9\u54BA\u54BC\u54BE\u54C3\u54C5\u54CA\u54CB\u54D6\u54D8\u54DB\u54E0\",4,\"\u54EB\u54EC\u54EF\u54F0\u54F1\u54F4\",5,\"\u54FB\u54FE\u5500\u5502\u5503\u5504\u5505\u5508\u550A\",4,\"\u5512\u5513\u5515\",5,\"\u551C\u551D\u551E\u551F\u5521\u5525\u5526\"],[\"8680\",\"\u5528\u5529\u552B\u552D\u5532\u5534\u5535\u5536\u5538\u5539\u553A\u553B\u553D\u5540\u5542\u5545\u5547\u5548\u554B\",4,\"\u5551\u5552\u5553\u5554\u5557\",4,\"\u555D\u555E\u555F\u5560\u5562\u5563\u5568\u5569\u556B\u556F\",5,\"\u5579\u557A\u557D\u557F\u5585\u5586\u558C\u558D\u558E\u5590\u5592\u5593\u5595\u5596\u5597\u559A\u559B\u559E\u55A0\",6,\"\u55A8\",8,\"\u55B2\u55B4\u55B6\u55B8\u55BA\u55BC\u55BF\",4,\"\u55C6\u55C7\u55C8\u55CA\u55CB\u55CE\u55CF\u55D0\u55D5\u55D7\",4,\"\u55DE\u55E0\u55E2\u55E7\u55E9\u55ED\u55EE\u55F0\u55F1\u55F4\u55F6\u55F8\",4,\"\u55FF\u5602\u5603\u5604\u5605\"],[\"8740\",\"\u5606\u5607\u560A\u560B\u560D\u5610\",7,\"\u5619\u561A\u561C\u561D\u5620\u5621\u5622\u5625\u5626\u5628\u5629\u562A\u562B\u562E\u562F\u5630\u5633\u5635\u5637\u5638\u563A\u563C\u563D\u563E\u5640\",11,\"\u564F\",4,\"\u5655\u5656\u565A\u565B\u565D\",4],[\"8780\",\"\u5663\u5665\u5666\u5667\u566D\u566E\u566F\u5670\u5672\u5673\u5674\u5675\u5677\u5678\u5679\u567A\u567D\",7,\"\u5687\",6,\"\u5690\u5691\u5692\u5694\",14,\"\u56A4\",10,\"\u56B0\",6,\"\u56B8\u56B9\u56BA\u56BB\u56BD\",12,\"\u56CB\",8,\"\u56D5\u56D6\u56D8\u56D9\u56DC\u56E3\u56E5\",5,\"\u56EC\u56EE\u56EF\u56F2\u56F3\u56F6\u56F7\u56F8\u56FB\u56FC\u5700\u5701\u5702\u5705\u5707\u570B\",6],[\"8840\",\"\u5712\",9,\"\u571D\u571E\u5720\u5721\u5722\u5724\u5725\u5726\u5727\u572B\u5731\u5732\u5734\",4,\"\u573C\u573D\u573F\u5741\u5743\u5744\u5745\u5746\u5748\u5749\u574B\u5752\",4,\"\u5758\u5759\u5762\u5763\u5765\u5767\u576C\u576E\u5770\u5771\u5772\u5774\u5775\u5778\u5779\u577A\u577D\u577E\u577F\u5780\"],[\"8880\",\"\u5781\u5787\u5788\u5789\u578A\u578D\",4,\"\u5794\",6,\"\u579C\u579D\u579E\u579F\u57A5\u57A8\u57AA\u57AC\u57AF\u57B0\u57B1\u57B3\u57B5\u57B6\u57B7\u57B9\",8,\"\u57C4\",6,\"\u57CC\u57CD\u57D0\u57D1\u57D3\u57D6\u57D7\u57DB\u57DC\u57DE\u57E1\u57E2\u57E3\u57E5\",7,\"\u57EE\u57F0\u57F1\u57F2\u57F3\u57F5\u57F6\u57F7\u57FB\u57FC\u57FE\u57FF\u5801\u5803\u5804\u5805\u5808\u5809\u580A\u580C\u580E\u580F\u5810\u5812\u5813\u5814\u5816\u5817\u5818\u581A\u581B\u581C\u581D\u581F\u5822\u5823\u5825\",4,\"\u582B\",4,\"\u5831\u5832\u5833\u5834\u5836\",7],[\"8940\",\"\u583E\",5,\"\u5845\",6,\"\u584E\u584F\u5850\u5852\u5853\u5855\u5856\u5857\u5859\",4,\"\u585F\",5,\"\u5866\",4,\"\u586D\",16,\"\u587F\u5882\u5884\u5886\u5887\u5888\u588A\u588B\u588C\"],[\"8980\",\"\u588D\",4,\"\u5894\",4,\"\u589B\u589C\u589D\u58A0\",7,\"\u58AA\",17,\"\u58BD\u58BE\u58BF\u58C0\u58C2\u58C3\u58C4\u58C6\",10,\"\u58D2\u58D3\u58D4\u58D6\",13,\"\u58E5\",5,\"\u58ED\u58EF\u58F1\u58F2\u58F4\u58F5\u58F7\u58F8\u58FA\",7,\"\u5903\u5905\u5906\u5908\",4,\"\u590E\u5910\u5911\u5912\u5913\u5917\u5918\u591B\u591D\u591E\u5920\u5921\u5922\u5923\u5926\u5928\u592C\u5930\u5932\u5933\u5935\u5936\u593B\"],[\"8a40\",\"\u593D\u593E\u593F\u5940\u5943\u5945\u5946\u594A\u594C\u594D\u5950\u5952\u5953\u5959\u595B\",4,\"\u5961\u5963\u5964\u5966\",12,\"\u5975\u5977\u597A\u597B\u597C\u597E\u597F\u5980\u5985\u5989\u598B\u598C\u598E\u598F\u5990\u5991\u5994\u5995\u5998\u599A\u599B\u599C\u599D\u599F\u59A0\u59A1\u59A2\u59A6\"],[\"8a80\",\"\u59A7\u59AC\u59AD\u59B0\u59B1\u59B3\",5,\"\u59BA\u59BC\u59BD\u59BF\",6,\"\u59C7\u59C8\u59C9\u59CC\u59CD\u59CE\u59CF\u59D5\u59D6\u59D9\u59DB\u59DE\",4,\"\u59E4\u59E6\u59E7\u59E9\u59EA\u59EB\u59ED\",11,\"\u59FA\u59FC\u59FD\u59FE\u5A00\u5A02\u5A0A\u5A0B\u5A0D\u5A0E\u5A0F\u5A10\u5A12\u5A14\u5A15\u5A16\u5A17\u5A19\u5A1A\u5A1B\u5A1D\u5A1E\u5A21\u5A22\u5A24\u5A26\u5A27\u5A28\u5A2A\",6,\"\u5A33\u5A35\u5A37\",4,\"\u5A3D\u5A3E\u5A3F\u5A41\",4,\"\u5A47\u5A48\u5A4B\",9,\"\u5A56\u5A57\u5A58\u5A59\u5A5B\",5],[\"8b40\",\"\u5A61\u5A63\u5A64\u5A65\u5A66\u5A68\u5A69\u5A6B\",8,\"\u5A78\u5A79\u5A7B\u5A7C\u5A7D\u5A7E\u5A80\",17,\"\u5A93\",6,\"\u5A9C\",13,\"\u5AAB\u5AAC\"],[\"8b80\",\"\u5AAD\",4,\"\u5AB4\u5AB6\u5AB7\u5AB9\",4,\"\u5ABF\u5AC0\u5AC3\",5,\"\u5ACA\u5ACB\u5ACD\",4,\"\u5AD3\u5AD5\u5AD7\u5AD9\u5ADA\u5ADB\u5ADD\u5ADE\u5ADF\u5AE2\u5AE4\u5AE5\u5AE7\u5AE8\u5AEA\u5AEC\",4,\"\u5AF2\",22,\"\u5B0A\",11,\"\u5B18\",25,\"\u5B33\u5B35\u5B36\u5B38\",7,\"\u5B41\",6],[\"8c40\",\"\u5B48\",7,\"\u5B52\u5B56\u5B5E\u5B60\u5B61\u5B67\u5B68\u5B6B\u5B6D\u5B6E\u5B6F\u5B72\u5B74\u5B76\u5B77\u5B78\u5B79\u5B7B\u5B7C\u5B7E\u5B7F\u5B82\u5B86\u5B8A\u5B8D\u5B8E\u5B90\u5B91\u5B92\u5B94\u5B96\u5B9F\u5BA7\u5BA8\u5BA9\u5BAC\u5BAD\u5BAE\u5BAF\u5BB1\u5BB2\u5BB7\u5BBA\u5BBB\u5BBC\u5BC0\u5BC1\u5BC3\u5BC8\u5BC9\u5BCA\u5BCB\u5BCD\u5BCE\u5BCF\"],[\"8c80\",\"\u5BD1\u5BD4\",8,\"\u5BE0\u5BE2\u5BE3\u5BE6\u5BE7\u5BE9\",4,\"\u5BEF\u5BF1\",6,\"\u5BFD\u5BFE\u5C00\u5C02\u5C03\u5C05\u5C07\u5C08\u5C0B\u5C0C\u5C0D\u5C0E\u5C10\u5C12\u5C13\u5C17\u5C19\u5C1B\u5C1E\u5C1F\u5C20\u5C21\u5C23\u5C26\u5C28\u5C29\u5C2A\u5C2B\u5C2D\u5C2E\u5C2F\u5C30\u5C32\u5C33\u5C35\u5C36\u5C37\u5C43\u5C44\u5C46\u5C47\u5C4C\u5C4D\u5C52\u5C53\u5C54\u5C56\u5C57\u5C58\u5C5A\u5C5B\u5C5C\u5C5D\u5C5F\u5C62\u5C64\u5C67\",6,\"\u5C70\u5C72\",6,\"\u5C7B\u5C7C\u5C7D\u5C7E\u5C80\u5C83\",4,\"\u5C89\u5C8A\u5C8B\u5C8E\u5C8F\u5C92\u5C93\u5C95\u5C9D\",4,\"\u5CA4\",4],[\"8d40\",\"\u5CAA\u5CAE\u5CAF\u5CB0\u5CB2\u5CB4\u5CB6\u5CB9\u5CBA\u5CBB\u5CBC\u5CBE\u5CC0\u5CC2\u5CC3\u5CC5\",5,\"\u5CCC\",5,\"\u5CD3\",5,\"\u5CDA\",6,\"\u5CE2\u5CE3\u5CE7\u5CE9\u5CEB\u5CEC\u5CEE\u5CEF\u5CF1\",9,\"\u5CFC\",4],[\"8d80\",\"\u5D01\u5D04\u5D05\u5D08\",5,\"\u5D0F\",4,\"\u5D15\u5D17\u5D18\u5D19\u5D1A\u5D1C\u5D1D\u5D1F\",4,\"\u5D25\u5D28\u5D2A\u5D2B\u5D2C\u5D2F\",4,\"\u5D35\",7,\"\u5D3F\",7,\"\u5D48\u5D49\u5D4D\",10,\"\u5D59\u5D5A\u5D5C\u5D5E\",10,\"\u5D6A\u5D6D\u5D6E\u5D70\u5D71\u5D72\u5D73\u5D75\",12,\"\u5D83\",21,\"\u5D9A\u5D9B\u5D9C\u5D9E\u5D9F\u5DA0\"],[\"8e40\",\"\u5DA1\",21,\"\u5DB8\",12,\"\u5DC6\",6,\"\u5DCE\",12,\"\u5DDC\u5DDF\u5DE0\u5DE3\u5DE4\u5DEA\u5DEC\u5DED\"],[\"8e80\",\"\u5DF0\u5DF5\u5DF6\u5DF8\",4,\"\u5DFF\u5E00\u5E04\u5E07\u5E09\u5E0A\u5E0B\u5E0D\u5E0E\u5E12\u5E13\u5E17\u5E1E\",7,\"\u5E28\",4,\"\u5E2F\u5E30\u5E32\",4,\"\u5E39\u5E3A\u5E3E\u5E3F\u5E40\u5E41\u5E43\u5E46\",5,\"\u5E4D\",6,\"\u5E56\",4,\"\u5E5C\u5E5D\u5E5F\u5E60\u5E63\",14,\"\u5E75\u5E77\u5E79\u5E7E\u5E81\u5E82\u5E83\u5E85\u5E88\u5E89\u5E8C\u5E8D\u5E8E\u5E92\u5E98\u5E9B\u5E9D\u5EA1\u5EA2\u5EA3\u5EA4\u5EA8\",4,\"\u5EAE\",4,\"\u5EB4\u5EBA\u5EBB\u5EBC\u5EBD\u5EBF\",6],[\"8f40\",\"\u5EC6\u5EC7\u5EC8\u5ECB\",5,\"\u5ED4\u5ED5\u5ED7\u5ED8\u5ED9\u5EDA\u5EDC\",11,\"\u5EE9\u5EEB\",8,\"\u5EF5\u5EF8\u5EF9\u5EFB\u5EFC\u5EFD\u5F05\u5F06\u5F07\u5F09\u5F0C\u5F0D\u5F0E\u5F10\u5F12\u5F14\u5F16\u5F19\u5F1A\u5F1C\u5F1D\u5F1E\u5F21\u5F22\u5F23\u5F24\"],[\"8f80\",\"\u5F28\u5F2B\u5F2C\u5F2E\u5F30\u5F32\",6,\"\u5F3B\u5F3D\u5F3E\u5F3F\u5F41\",14,\"\u5F51\u5F54\u5F59\u5F5A\u5F5B\u5F5C\u5F5E\u5F5F\u5F60\u5F63\u5F65\u5F67\u5F68\u5F6B\u5F6E\u5F6F\u5F72\u5F74\u5F75\u5F76\u5F78\u5F7A\u5F7D\u5F7E\u5F7F\u5F83\u5F86\u5F8D\u5F8E\u5F8F\u5F91\u5F93\u5F94\u5F96\u5F9A\u5F9B\u5F9D\u5F9E\u5F9F\u5FA0\u5FA2\",5,\"\u5FA9\u5FAB\u5FAC\u5FAF\",5,\"\u5FB6\u5FB8\u5FB9\u5FBA\u5FBB\u5FBE\",4,\"\u5FC7\u5FC8\u5FCA\u5FCB\u5FCE\u5FD3\u5FD4\u5FD5\u5FDA\u5FDB\u5FDC\u5FDE\u5FDF\u5FE2\u5FE3\u5FE5\u5FE6\u5FE8\u5FE9\u5FEC\u5FEF\u5FF0\u5FF2\u5FF3\u5FF4\u5FF6\u5FF7\u5FF9\u5FFA\u5FFC\u6007\"],[\"9040\",\"\u6008\u6009\u600B\u600C\u6010\u6011\u6013\u6017\u6018\u601A\u601E\u601F\u6022\u6023\u6024\u602C\u602D\u602E\u6030\",4,\"\u6036\",4,\"\u603D\u603E\u6040\u6044\",6,\"\u604C\u604E\u604F\u6051\u6053\u6054\u6056\u6057\u6058\u605B\u605C\u605E\u605F\u6060\u6061\u6065\u6066\u606E\u6071\u6072\u6074\u6075\u6077\u607E\u6080\"],[\"9080\",\"\u6081\u6082\u6085\u6086\u6087\u6088\u608A\u608B\u608E\u608F\u6090\u6091\u6093\u6095\u6097\u6098\u6099\u609C\u609E\u60A1\u60A2\u60A4\u60A5\u60A7\u60A9\u60AA\u60AE\u60B0\u60B3\u60B5\u60B6\u60B7\u60B9\u60BA\u60BD\",7,\"\u60C7\u60C8\u60C9\u60CC\",4,\"\u60D2\u60D3\u60D4\u60D6\u60D7\u60D9\u60DB\u60DE\u60E1\",4,\"\u60EA\u60F1\u60F2\u60F5\u60F7\u60F8\u60FB\",4,\"\u6102\u6103\u6104\u6105\u6107\u610A\u610B\u610C\u6110\",4,\"\u6116\u6117\u6118\u6119\u611B\u611C\u611D\u611E\u6121\u6122\u6125\u6128\u6129\u612A\u612C\",18,\"\u6140\",6],[\"9140\",\"\u6147\u6149\u614B\u614D\u614F\u6150\u6152\u6153\u6154\u6156\",6,\"\u615E\u615F\u6160\u6161\u6163\u6164\u6165\u6166\u6169\",6,\"\u6171\u6172\u6173\u6174\u6176\u6178\",18,\"\u618C\u618D\u618F\",4,\"\u6195\"],[\"9180\",\"\u6196\",6,\"\u619E\",8,\"\u61AA\u61AB\u61AD\",9,\"\u61B8\",5,\"\u61BF\u61C0\u61C1\u61C3\",4,\"\u61C9\u61CC\",4,\"\u61D3\u61D5\",16,\"\u61E7\",13,\"\u61F6\",8,\"\u6200\",5,\"\u6207\u6209\u6213\u6214\u6219\u621C\u621D\u621E\u6220\u6223\u6226\u6227\u6228\u6229\u622B\u622D\u622F\u6230\u6231\u6232\u6235\u6236\u6238\",4,\"\u6242\u6244\u6245\u6246\u624A\"],[\"9240\",\"\u624F\u6250\u6255\u6256\u6257\u6259\u625A\u625C\",6,\"\u6264\u6265\u6268\u6271\u6272\u6274\u6275\u6277\u6278\u627A\u627B\u627D\u6281\u6282\u6283\u6285\u6286\u6287\u6288\u628B\",5,\"\u6294\u6299\u629C\u629D\u629E\u62A3\u62A6\u62A7\u62A9\u62AA\u62AD\u62AE\u62AF\u62B0\u62B2\u62B3\u62B4\u62B6\u62B7\u62B8\u62BA\u62BE\u62C0\u62C1\"],[\"9280\",\"\u62C3\u62CB\u62CF\u62D1\u62D5\u62DD\u62DE\u62E0\u62E1\u62E4\u62EA\u62EB\u62F0\u62F2\u62F5\u62F8\u62F9\u62FA\u62FB\u6300\u6303\u6304\u6305\u6306\u630A\u630B\u630C\u630D\u630F\u6310\u6312\u6313\u6314\u6315\u6317\u6318\u6319\u631C\u6326\u6327\u6329\u632C\u632D\u632E\u6330\u6331\u6333\",5,\"\u633B\u633C\u633E\u633F\u6340\u6341\u6344\u6347\u6348\u634A\u6351\u6352\u6353\u6354\u6356\",7,\"\u6360\u6364\u6365\u6366\u6368\u636A\u636B\u636C\u636F\u6370\u6372\u6373\u6374\u6375\u6378\u6379\u637C\u637D\u637E\u637F\u6381\u6383\u6384\u6385\u6386\u638B\u638D\u6391\u6393\u6394\u6395\u6397\u6399\",6,\"\u63A1\u63A4\u63A6\u63AB\u63AF\u63B1\u63B2\u63B5\u63B6\u63B9\u63BB\u63BD\u63BF\u63C0\"],[\"9340\",\"\u63C1\u63C2\u63C3\u63C5\u63C7\u63C8\u63CA\u63CB\u63CC\u63D1\u63D3\u63D4\u63D5\u63D7\",6,\"\u63DF\u63E2\u63E4\",4,\"\u63EB\u63EC\u63EE\u63EF\u63F0\u63F1\u63F3\u63F5\u63F7\u63F9\u63FA\u63FB\u63FC\u63FE\u6403\u6404\u6406\",4,\"\u640D\u640E\u6411\u6412\u6415\",5,\"\u641D\u641F\u6422\u6423\u6424\"],[\"9380\",\"\u6425\u6427\u6428\u6429\u642B\u642E\",5,\"\u6435\",4,\"\u643B\u643C\u643E\u6440\u6442\u6443\u6449\u644B\",6,\"\u6453\u6455\u6456\u6457\u6459\",4,\"\u645F\",7,\"\u6468\u646A\u646B\u646C\u646E\",9,\"\u647B\",6,\"\u6483\u6486\u6488\",8,\"\u6493\u6494\u6497\u6498\u649A\u649B\u649C\u649D\u649F\",4,\"\u64A5\u64A6\u64A7\u64A8\u64AA\u64AB\u64AF\u64B1\u64B2\u64B3\u64B4\u64B6\u64B9\u64BB\u64BD\u64BE\u64BF\u64C1\u64C3\u64C4\u64C6\",6,\"\u64CF\u64D1\u64D3\u64D4\u64D5\u64D6\u64D9\u64DA\"],[\"9440\",\"\u64DB\u64DC\u64DD\u64DF\u64E0\u64E1\u64E3\u64E5\u64E7\",24,\"\u6501\",7,\"\u650A\",7,\"\u6513\",4,\"\u6519\",8],[\"9480\",\"\u6522\u6523\u6524\u6526\",4,\"\u652C\u652D\u6530\u6531\u6532\u6533\u6537\u653A\u653C\u653D\u6540\",4,\"\u6546\u6547\u654A\u654B\u654D\u654E\u6550\u6552\u6553\u6554\u6557\u6558\u655A\u655C\u655F\u6560\u6561\u6564\u6565\u6567\u6568\u6569\u656A\u656D\u656E\u656F\u6571\u6573\u6575\u6576\u6578\",14,\"\u6588\u6589\u658A\u658D\u658E\u658F\u6592\u6594\u6595\u6596\u6598\u659A\u659D\u659E\u65A0\u65A2\u65A3\u65A6\u65A8\u65AA\u65AC\u65AE\u65B1\",7,\"\u65BA\u65BB\u65BE\u65BF\u65C0\u65C2\u65C7\u65C8\u65C9\u65CA\u65CD\u65D0\u65D1\u65D3\u65D4\u65D5\u65D8\",7,\"\u65E1\u65E3\u65E4\u65EA\u65EB\"],[\"9540\",\"\u65F2\u65F3\u65F4\u65F5\u65F8\u65F9\u65FB\",4,\"\u6601\u6604\u6605\u6607\u6608\u6609\u660B\u660D\u6610\u6611\u6612\u6616\u6617\u6618\u661A\u661B\u661C\u661E\u6621\u6622\u6623\u6624\u6626\u6629\u662A\u662B\u662C\u662E\u6630\u6632\u6633\u6637\",4,\"\u663D\u663F\u6640\u6642\u6644\",6,\"\u664D\u664E\u6650\u6651\u6658\"],[\"9580\",\"\u6659\u665B\u665C\u665D\u665E\u6660\u6662\u6663\u6665\u6667\u6669\",4,\"\u6671\u6672\u6673\u6675\u6678\u6679\u667B\u667C\u667D\u667F\u6680\u6681\u6683\u6685\u6686\u6688\u6689\u668A\u668B\u668D\u668E\u668F\u6690\u6692\u6693\u6694\u6695\u6698\",4,\"\u669E\",8,\"\u66A9\",4,\"\u66AF\",4,\"\u66B5\u66B6\u66B7\u66B8\u66BA\u66BB\u66BC\u66BD\u66BF\",25,\"\u66DA\u66DE\",7,\"\u66E7\u66E8\u66EA\",5,\"\u66F1\u66F5\u66F6\u66F8\u66FA\u66FB\u66FD\u6701\u6702\u6703\"],[\"9640\",\"\u6704\u6705\u6706\u6707\u670C\u670E\u670F\u6711\u6712\u6713\u6716\u6718\u6719\u671A\u671C\u671E\u6720\",5,\"\u6727\u6729\u672E\u6730\u6732\u6733\u6736\u6737\u6738\u6739\u673B\u673C\u673E\u673F\u6741\u6744\u6745\u6747\u674A\u674B\u674D\u6752\u6754\u6755\u6757\",4,\"\u675D\u6762\u6763\u6764\u6766\u6767\u676B\u676C\u676E\u6771\u6774\u6776\"],[\"9680\",\"\u6778\u6779\u677A\u677B\u677D\u6780\u6782\u6783\u6785\u6786\u6788\u678A\u678C\u678D\u678E\u678F\u6791\u6792\u6793\u6794\u6796\u6799\u679B\u679F\u67A0\u67A1\u67A4\u67A6\u67A9\u67AC\u67AE\u67B1\u67B2\u67B4\u67B9\",7,\"\u67C2\u67C5\",9,\"\u67D5\u67D6\u67D7\u67DB\u67DF\u67E1\u67E3\u67E4\u67E6\u67E7\u67E8\u67EA\u67EB\u67ED\u67EE\u67F2\u67F5\",7,\"\u67FE\u6801\u6802\u6803\u6804\u6806\u680D\u6810\u6812\u6814\u6815\u6818\",4,\"\u681E\u681F\u6820\u6822\",6,\"\u682B\",6,\"\u6834\u6835\u6836\u683A\u683B\u683F\u6847\u684B\u684D\u684F\u6852\u6856\",5],[\"9740\",\"\u685C\u685D\u685E\u685F\u686A\u686C\",7,\"\u6875\u6878\",8,\"\u6882\u6884\u6887\",7,\"\u6890\u6891\u6892\u6894\u6895\u6896\u6898\",9,\"\u68A3\u68A4\u68A5\u68A9\u68AA\u68AB\u68AC\u68AE\u68B1\u68B2\u68B4\u68B6\u68B7\u68B8\"],[\"9780\",\"\u68B9\",6,\"\u68C1\u68C3\",5,\"\u68CA\u68CC\u68CE\u68CF\u68D0\u68D1\u68D3\u68D4\u68D6\u68D7\u68D9\u68DB\",4,\"\u68E1\u68E2\u68E4\",9,\"\u68EF\u68F2\u68F3\u68F4\u68F6\u68F7\u68F8\u68FB\u68FD\u68FE\u68FF\u6900\u6902\u6903\u6904\u6906\",4,\"\u690C\u690F\u6911\u6913\",11,\"\u6921\u6922\u6923\u6925\",7,\"\u692E\u692F\u6931\u6932\u6933\u6935\u6936\u6937\u6938\u693A\u693B\u693C\u693E\u6940\u6941\u6943\",16,\"\u6955\u6956\u6958\u6959\u695B\u695C\u695F\"],[\"9840\",\"\u6961\u6962\u6964\u6965\u6967\u6968\u6969\u696A\u696C\u696D\u696F\u6970\u6972\",4,\"\u697A\u697B\u697D\u697E\u697F\u6981\u6983\u6985\u698A\u698B\u698C\u698E\",5,\"\u6996\u6997\u6999\u699A\u699D\",9,\"\u69A9\u69AA\u69AC\u69AE\u69AF\u69B0\u69B2\u69B3\u69B5\u69B6\u69B8\u69B9\u69BA\u69BC\u69BD\"],[\"9880\",\"\u69BE\u69BF\u69C0\u69C2\",7,\"\u69CB\u69CD\u69CF\u69D1\u69D2\u69D3\u69D5\",5,\"\u69DC\u69DD\u69DE\u69E1\",11,\"\u69EE\u69EF\u69F0\u69F1\u69F3\",9,\"\u69FE\u6A00\",9,\"\u6A0B\",11,\"\u6A19\",5,\"\u6A20\u6A22\",5,\"\u6A29\u6A2B\u6A2C\u6A2D\u6A2E\u6A30\u6A32\u6A33\u6A34\u6A36\",6,\"\u6A3F\",4,\"\u6A45\u6A46\u6A48\",7,\"\u6A51\",6,\"\u6A5A\"],[\"9940\",\"\u6A5C\",4,\"\u6A62\u6A63\u6A64\u6A66\",10,\"\u6A72\",6,\"\u6A7A\u6A7B\u6A7D\u6A7E\u6A7F\u6A81\u6A82\u6A83\u6A85\",8,\"\u6A8F\u6A92\",4,\"\u6A98\",7,\"\u6AA1\",5],[\"9980\",\"\u6AA7\u6AA8\u6AAA\u6AAD\",114,\"\u6B25\u6B26\u6B28\",6],[\"9a40\",\"\u6B2F\u6B30\u6B31\u6B33\u6B34\u6B35\u6B36\u6B38\u6B3B\u6B3C\u6B3D\u6B3F\u6B40\u6B41\u6B42\u6B44\u6B45\u6B48\u6B4A\u6B4B\u6B4D\",11,\"\u6B5A\",7,\"\u6B68\u6B69\u6B6B\",13,\"\u6B7A\u6B7D\u6B7E\u6B7F\u6B80\u6B85\u6B88\"],[\"9a80\",\"\u6B8C\u6B8E\u6B8F\u6B90\u6B91\u6B94\u6B95\u6B97\u6B98\u6B99\u6B9C\",4,\"\u6BA2\",7,\"\u6BAB\",7,\"\u6BB6\u6BB8\",6,\"\u6BC0\u6BC3\u6BC4\u6BC6\",4,\"\u6BCC\u6BCE\u6BD0\u6BD1\u6BD8\u6BDA\u6BDC\",4,\"\u6BE2\",7,\"\u6BEC\u6BED\u6BEE\u6BF0\u6BF1\u6BF2\u6BF4\u6BF6\u6BF7\u6BF8\u6BFA\u6BFB\u6BFC\u6BFE\",6,\"\u6C08\",4,\"\u6C0E\u6C12\u6C17\u6C1C\u6C1D\u6C1E\u6C20\u6C23\u6C25\u6C2B\u6C2C\u6C2D\u6C31\u6C33\u6C36\u6C37\u6C39\u6C3A\u6C3B\u6C3C\u6C3E\u6C3F\u6C43\u6C44\u6C45\u6C48\u6C4B\",4,\"\u6C51\u6C52\u6C53\u6C56\u6C58\"],[\"9b40\",\"\u6C59\u6C5A\u6C62\u6C63\u6C65\u6C66\u6C67\u6C6B\",4,\"\u6C71\u6C73\u6C75\u6C77\u6C78\u6C7A\u6C7B\u6C7C\u6C7F\u6C80\u6C84\u6C87\u6C8A\u6C8B\u6C8D\u6C8E\u6C91\u6C92\u6C95\u6C96\u6C97\u6C98\u6C9A\u6C9C\u6C9D\u6C9E\u6CA0\u6CA2\u6CA8\u6CAC\u6CAF\u6CB0\u6CB4\u6CB5\u6CB6\u6CB7\u6CBA\u6CC0\u6CC1\u6CC2\u6CC3\u6CC6\u6CC7\u6CC8\u6CCB\u6CCD\u6CCE\u6CCF\u6CD1\u6CD2\u6CD8\"],[\"9b80\",\"\u6CD9\u6CDA\u6CDC\u6CDD\u6CDF\u6CE4\u6CE6\u6CE7\u6CE9\u6CEC\u6CED\u6CF2\u6CF4\u6CF9\u6CFF\u6D00\u6D02\u6D03\u6D05\u6D06\u6D08\u6D09\u6D0A\u6D0D\u6D0F\u6D10\u6D11\u6D13\u6D14\u6D15\u6D16\u6D18\u6D1C\u6D1D\u6D1F\",5,\"\u6D26\u6D28\u6D29\u6D2C\u6D2D\u6D2F\u6D30\u6D34\u6D36\u6D37\u6D38\u6D3A\u6D3F\u6D40\u6D42\u6D44\u6D49\u6D4C\u6D50\u6D55\u6D56\u6D57\u6D58\u6D5B\u6D5D\u6D5F\u6D61\u6D62\u6D64\u6D65\u6D67\u6D68\u6D6B\u6D6C\u6D6D\u6D70\u6D71\u6D72\u6D73\u6D75\u6D76\u6D79\u6D7A\u6D7B\u6D7D\",4,\"\u6D83\u6D84\u6D86\u6D87\u6D8A\u6D8B\u6D8D\u6D8F\u6D90\u6D92\u6D96\",4,\"\u6D9C\u6DA2\u6DA5\u6DAC\u6DAD\u6DB0\u6DB1\u6DB3\u6DB4\u6DB6\u6DB7\u6DB9\",5,\"\u6DC1\u6DC2\u6DC3\u6DC8\u6DC9\u6DCA\"],[\"9c40\",\"\u6DCD\u6DCE\u6DCF\u6DD0\u6DD2\u6DD3\u6DD4\u6DD5\u6DD7\u6DDA\u6DDB\u6DDC\u6DDF\u6DE2\u6DE3\u6DE5\u6DE7\u6DE8\u6DE9\u6DEA\u6DED\u6DEF\u6DF0\u6DF2\u6DF4\u6DF5\u6DF6\u6DF8\u6DFA\u6DFD\",7,\"\u6E06\u6E07\u6E08\u6E09\u6E0B\u6E0F\u6E12\u6E13\u6E15\u6E18\u6E19\u6E1B\u6E1C\u6E1E\u6E1F\u6E22\u6E26\u6E27\u6E28\u6E2A\u6E2C\u6E2E\u6E30\u6E31\u6E33\u6E35\"],[\"9c80\",\"\u6E36\u6E37\u6E39\u6E3B\",7,\"\u6E45\",7,\"\u6E4F\u6E50\u6E51\u6E52\u6E55\u6E57\u6E59\u6E5A\u6E5C\u6E5D\u6E5E\u6E60\",10,\"\u6E6C\u6E6D\u6E6F\",14,\"\u6E80\u6E81\u6E82\u6E84\u6E87\u6E88\u6E8A\",4,\"\u6E91\",6,\"\u6E99\u6E9A\u6E9B\u6E9D\u6E9E\u6EA0\u6EA1\u6EA3\u6EA4\u6EA6\u6EA8\u6EA9\u6EAB\u6EAC\u6EAD\u6EAE\u6EB0\u6EB3\u6EB5\u6EB8\u6EB9\u6EBC\u6EBE\u6EBF\u6EC0\u6EC3\u6EC4\u6EC5\u6EC6\u6EC8\u6EC9\u6ECA\u6ECC\u6ECD\u6ECE\u6ED0\u6ED2\u6ED6\u6ED8\u6ED9\u6EDB\u6EDC\u6EDD\u6EE3\u6EE7\u6EEA\",5],[\"9d40\",\"\u6EF0\u6EF1\u6EF2\u6EF3\u6EF5\u6EF6\u6EF7\u6EF8\u6EFA\",7,\"\u6F03\u6F04\u6F05\u6F07\u6F08\u6F0A\",4,\"\u6F10\u6F11\u6F12\u6F16\",9,\"\u6F21\u6F22\u6F23\u6F25\u6F26\u6F27\u6F28\u6F2C\u6F2E\u6F30\u6F32\u6F34\u6F35\u6F37\",6,\"\u6F3F\u6F40\u6F41\u6F42\"],[\"9d80\",\"\u6F43\u6F44\u6F45\u6F48\u6F49\u6F4A\u6F4C\u6F4E\",9,\"\u6F59\u6F5A\u6F5B\u6F5D\u6F5F\u6F60\u6F61\u6F63\u6F64\u6F65\u6F67\",5,\"\u6F6F\u6F70\u6F71\u6F73\u6F75\u6F76\u6F77\u6F79\u6F7B\u6F7D\",6,\"\u6F85\u6F86\u6F87\u6F8A\u6F8B\u6F8F\",12,\"\u6F9D\u6F9E\u6F9F\u6FA0\u6FA2\",4,\"\u6FA8\",10,\"\u6FB4\u6FB5\u6FB7\u6FB8\u6FBA\",5,\"\u6FC1\u6FC3\",5,\"\u6FCA\",6,\"\u6FD3\",10,\"\u6FDF\u6FE2\u6FE3\u6FE4\u6FE5\"],[\"9e40\",\"\u6FE6\",7,\"\u6FF0\",32,\"\u7012\",7,\"\u701C\",6,\"\u7024\",6],[\"9e80\",\"\u702B\",9,\"\u7036\u7037\u7038\u703A\",17,\"\u704D\u704E\u7050\",13,\"\u705F\",11,\"\u706E\u7071\u7072\u7073\u7074\u7077\u7079\u707A\u707B\u707D\u7081\u7082\u7083\u7084\u7086\u7087\u7088\u708B\u708C\u708D\u708F\u7090\u7091\u7093\u7097\u7098\u709A\u709B\u709E\",12,\"\u70B0\u70B2\u70B4\u70B5\u70B6\u70BA\u70BE\u70BF\u70C4\u70C5\u70C6\u70C7\u70C9\u70CB\",12,\"\u70DA\"],[\"9f40\",\"\u70DC\u70DD\u70DE\u70E0\u70E1\u70E2\u70E3\u70E5\u70EA\u70EE\u70F0\",6,\"\u70F8\u70FA\u70FB\u70FC\u70FE\",10,\"\u710B\",4,\"\u7111\u7112\u7114\u7117\u711B\",10,\"\u7127\",7,\"\u7132\u7133\u7134\"],[\"9f80\",\"\u7135\u7137\",13,\"\u7146\u7147\u7148\u7149\u714B\u714D\u714F\",12,\"\u715D\u715F\",4,\"\u7165\u7169\",4,\"\u716F\u7170\u7171\u7174\u7175\u7176\u7177\u7179\u717B\u717C\u717E\",5,\"\u7185\",4,\"\u718B\u718C\u718D\u718E\u7190\u7191\u7192\u7193\u7195\u7196\u7197\u719A\",4,\"\u71A1\",6,\"\u71A9\u71AA\u71AB\u71AD\",5,\"\u71B4\u71B6\u71B7\u71B8\u71BA\",8,\"\u71C4\",9,\"\u71CF\",4],[\"a040\",\"\u71D6\",9,\"\u71E1\u71E2\u71E3\u71E4\u71E6\u71E8\",5,\"\u71EF\",9,\"\u71FA\",11,\"\u7207\",19],[\"a080\",\"\u721B\u721C\u721E\",9,\"\u7229\u722B\u722D\u722E\u722F\u7232\u7233\u7234\u723A\u723C\u723E\u7240\",6,\"\u7249\u724A\u724B\u724E\u724F\u7250\u7251\u7253\u7254\u7255\u7257\u7258\u725A\u725C\u725E\u7260\u7263\u7264\u7265\u7268\u726A\u726B\u726C\u726D\u7270\u7271\u7273\u7274\u7276\u7277\u7278\u727B\u727C\u727D\u7282\u7283\u7285\",4,\"\u728C\u728E\u7290\u7291\u7293\",11,\"\u72A0\",11,\"\u72AE\u72B1\u72B2\u72B3\u72B5\u72BA\",6,\"\u72C5\u72C6\u72C7\u72C9\u72CA\u72CB\u72CC\u72CF\u72D1\u72D3\u72D4\u72D5\u72D6\u72D8\u72DA\u72DB\"],[\"a1a1\",\"\u3000\u3001\u3002\xB7\u02C9\u02C7\xA8\u3003\u3005\u2014\uFF5E\u2016\u2026\u2018\u2019\u201C\u201D\u3014\u3015\u3008\",7,\"\u3016\u3017\u3010\u3011\xB1\xD7\xF7\u2236\u2227\u2228\u2211\u220F\u222A\u2229\u2208\u2237\u221A\u22A5\u2225\u2220\u2312\u2299\u222B\u222E\u2261\u224C\u2248\u223D\u221D\u2260\u226E\u226F\u2264\u2265\u221E\u2235\u2234\u2642\u2640\xB0\u2032\u2033\u2103\uFF04\xA4\uFFE0\uFFE1\u2030\xA7\u2116\u2606\u2605\u25CB\u25CF\u25CE\u25C7\u25C6\u25A1\u25A0\u25B3\u25B2\u203B\u2192\u2190\u2191\u2193\u3013\"],[\"a2a1\",\"\u2170\",9],[\"a2b1\",\"\u2488\",19,\"\u2474\",19,\"\u2460\",9],[\"a2e5\",\"\u3220\",9],[\"a2f1\",\"\u2160\",11],[\"a3a1\",\"\uFF01\uFF02\uFF03\uFFE5\uFF05\",88,\"\uFFE3\"],[\"a4a1\",\"\u3041\",82],[\"a5a1\",\"\u30A1\",85],[\"a6a1\",\"\u0391\",16,\"\u03A3\",6],[\"a6c1\",\"\u03B1\",16,\"\u03C3\",6],[\"a6e0\",\"\uFE35\uFE36\uFE39\uFE3A\uFE3F\uFE40\uFE3D\uFE3E\uFE41\uFE42\uFE43\uFE44\"],[\"a6ee\",\"\uFE3B\uFE3C\uFE37\uFE38\uFE31\"],[\"a6f4\",\"\uFE33\uFE34\"],[\"a7a1\",\"\u0410\",5,\"\u0401\u0416\",25],[\"a7d1\",\"\u0430\",5,\"\u0451\u0436\",25],[\"a840\",\"\u02CA\u02CB\u02D9\u2013\u2015\u2025\u2035\u2105\u2109\u2196\u2197\u2198\u2199\u2215\u221F\u2223\u2252\u2266\u2267\u22BF\u2550\",35,\"\u2581\",6],[\"a880\",\"\u2588\",7,\"\u2593\u2594\u2595\u25BC\u25BD\u25E2\u25E3\u25E4\u25E5\u2609\u2295\u3012\u301D\u301E\"],[\"a8a1\",\"\u0101\xE1\u01CE\xE0\u0113\xE9\u011B\xE8\u012B\xED\u01D0\xEC\u014D\xF3\u01D2\xF2\u016B\xFA\u01D4\xF9\u01D6\u01D8\u01DA\u01DC\xFC\xEA\u0251\"],[\"a8bd\",\"\u0144\u0148\"],[\"a8c0\",\"\u0261\"],[\"a8c5\",\"\u3105\",36],[\"a940\",\"\u3021\",8,\"\u32A3\u338E\u338F\u339C\u339D\u339E\u33A1\u33C4\u33CE\u33D1\u33D2\u33D5\uFE30\uFFE2\uFFE4\"],[\"a959\",\"\u2121\u3231\"],[\"a95c\",\"\u2010\"],[\"a960\",\"\u30FC\u309B\u309C\u30FD\u30FE\u3006\u309D\u309E\uFE49\",9,\"\uFE54\uFE55\uFE56\uFE57\uFE59\",8],[\"a980\",\"\uFE62\",4,\"\uFE68\uFE69\uFE6A\uFE6B\"],[\"a996\",\"\u3007\"],[\"a9a4\",\"\u2500\",75],[\"aa40\",\"\u72DC\u72DD\u72DF\u72E2\",5,\"\u72EA\u72EB\u72F5\u72F6\u72F9\u72FD\u72FE\u72FF\u7300\u7302\u7304\",5,\"\u730B\u730C\u730D\u730F\u7310\u7311\u7312\u7314\u7318\u7319\u731A\u731F\u7320\u7323\u7324\u7326\u7327\u7328\u732D\u732F\u7330\u7332\u7333\u7335\u7336\u733A\u733B\u733C\u733D\u7340\",8],[\"aa80\",\"\u7349\u734A\u734B\u734C\u734E\u734F\u7351\u7353\u7354\u7355\u7356\u7358\",7,\"\u7361\",10,\"\u736E\u7370\u7371\"],[\"ab40\",\"\u7372\",11,\"\u737F\",4,\"\u7385\u7386\u7388\u738A\u738C\u738D\u738F\u7390\u7392\u7393\u7394\u7395\u7397\u7398\u7399\u739A\u739C\u739D\u739E\u73A0\u73A1\u73A3\",5,\"\u73AA\u73AC\u73AD\u73B1\u73B4\u73B5\u73B6\u73B8\u73B9\u73BC\u73BD\u73BE\u73BF\u73C1\u73C3\",4],[\"ab80\",\"\u73CB\u73CC\u73CE\u73D2\",6,\"\u73DA\u73DB\u73DC\u73DD\u73DF\u73E1\u73E2\u73E3\u73E4\u73E6\u73E8\u73EA\u73EB\u73EC\u73EE\u73EF\u73F0\u73F1\u73F3\",4],[\"ac40\",\"\u73F8\",10,\"\u7404\u7407\u7408\u740B\u740C\u740D\u740E\u7411\",8,\"\u741C\",5,\"\u7423\u7424\u7427\u7429\u742B\u742D\u742F\u7431\u7432\u7437\",4,\"\u743D\u743E\u743F\u7440\u7442\",11],[\"ac80\",\"\u744E\",6,\"\u7456\u7458\u745D\u7460\",12,\"\u746E\u746F\u7471\",4,\"\u7478\u7479\u747A\"],[\"ad40\",\"\u747B\u747C\u747D\u747F\u7482\u7484\u7485\u7486\u7488\u7489\u748A\u748C\u748D\u748F\u7491\",10,\"\u749D\u749F\",7,\"\u74AA\",15,\"\u74BB\",12],[\"ad80\",\"\u74C8\",9,\"\u74D3\",8,\"\u74DD\u74DF\u74E1\u74E5\u74E7\",6,\"\u74F0\u74F1\u74F2\"],[\"ae40\",\"\u74F3\u74F5\u74F8\",6,\"\u7500\u7501\u7502\u7503\u7505\",7,\"\u750E\u7510\u7512\u7514\u7515\u7516\u7517\u751B\u751D\u751E\u7520\",4,\"\u7526\u7527\u752A\u752E\u7534\u7536\u7539\u753C\u753D\u753F\u7541\u7542\u7543\u7544\u7546\u7547\u7549\u754A\u754D\u7550\u7551\u7552\u7553\u7555\u7556\u7557\u7558\"],[\"ae80\",\"\u755D\",7,\"\u7567\u7568\u7569\u756B\",6,\"\u7573\u7575\u7576\u7577\u757A\",4,\"\u7580\u7581\u7582\u7584\u7585\u7587\"],[\"af40\",\"\u7588\u7589\u758A\u758C\u758D\u758E\u7590\u7593\u7595\u7598\u759B\u759C\u759E\u75A2\u75A6\",4,\"\u75AD\u75B6\u75B7\u75BA\u75BB\u75BF\u75C0\u75C1\u75C6\u75CB\u75CC\u75CE\u75CF\u75D0\u75D1\u75D3\u75D7\u75D9\u75DA\u75DC\u75DD\u75DF\u75E0\u75E1\u75E5\u75E9\u75EC\u75ED\u75EE\u75EF\u75F2\u75F3\u75F5\u75F6\u75F7\u75F8\u75FA\u75FB\u75FD\u75FE\u7602\u7604\u7606\u7607\"],[\"af80\",\"\u7608\u7609\u760B\u760D\u760E\u760F\u7611\u7612\u7613\u7614\u7616\u761A\u761C\u761D\u761E\u7621\u7623\u7627\u7628\u762C\u762E\u762F\u7631\u7632\u7636\u7637\u7639\u763A\u763B\u763D\u7641\u7642\u7644\"],[\"b040\",\"\u7645\",6,\"\u764E\",5,\"\u7655\u7657\",4,\"\u765D\u765F\u7660\u7661\u7662\u7664\",6,\"\u766C\u766D\u766E\u7670\",7,\"\u7679\u767A\u767C\u767F\u7680\u7681\u7683\u7685\u7689\u768A\u768C\u768D\u768F\u7690\u7692\u7694\u7695\u7697\u7698\u769A\u769B\"],[\"b080\",\"\u769C\",7,\"\u76A5\",8,\"\u76AF\u76B0\u76B3\u76B5\",9,\"\u76C0\u76C1\u76C3\u554A\u963F\u57C3\u6328\u54CE\u5509\u54C0\u7691\u764C\u853C\u77EE\u827E\u788D\u7231\u9698\u978D\u6C28\u5B89\u4FFA\u6309\u6697\u5CB8\u80FA\u6848\u80AE\u6602\u76CE\u51F9\u6556\u71AC\u7FF1\u8884\u50B2\u5965\u61CA\u6FB3\u82AD\u634C\u6252\u53ED\u5427\u7B06\u516B\u75A4\u5DF4\u62D4\u8DCB\u9776\u628A\u8019\u575D\u9738\u7F62\u7238\u767D\u67CF\u767E\u6446\u4F70\u8D25\u62DC\u7A17\u6591\u73ED\u642C\u6273\u822C\u9881\u677F\u7248\u626E\u62CC\u4F34\u74E3\u534A\u529E\u7ECA\u90A6\u5E2E\u6886\u699C\u8180\u7ED1\u68D2\u78C5\u868C\u9551\u508D\u8C24\u82DE\u80DE\u5305\u8912\u5265\"],[\"b140\",\"\u76C4\u76C7\u76C9\u76CB\u76CC\u76D3\u76D5\u76D9\u76DA\u76DC\u76DD\u76DE\u76E0\",4,\"\u76E6\",7,\"\u76F0\u76F3\u76F5\u76F6\u76F7\u76FA\u76FB\u76FD\u76FF\u7700\u7702\u7703\u7705\u7706\u770A\u770C\u770E\",10,\"\u771B\u771C\u771D\u771E\u7721\u7723\u7724\u7725\u7727\u772A\u772B\"],[\"b180\",\"\u772C\u772E\u7730\",4,\"\u7739\u773B\u773D\u773E\u773F\u7742\u7744\u7745\u7746\u7748\",7,\"\u7752\",7,\"\u775C\u8584\u96F9\u4FDD\u5821\u9971\u5B9D\u62B1\u62A5\u66B4\u8C79\u9C8D\u7206\u676F\u7891\u60B2\u5351\u5317\u8F88\u80CC\u8D1D\u94A1\u500D\u72C8\u5907\u60EB\u7119\u88AB\u5954\u82EF\u672C\u7B28\u5D29\u7EF7\u752D\u6CF5\u8E66\u8FF8\u903C\u9F3B\u6BD4\u9119\u7B14\u5F7C\u78A7\u84D6\u853D\u6BD5\u6BD9\u6BD6\u5E01\u5E87\u75F9\u95ED\u655D\u5F0A\u5FC5\u8F9F\u58C1\u81C2\u907F\u965B\u97AD\u8FB9\u7F16\u8D2C\u6241\u4FBF\u53D8\u535E\u8FA8\u8FA9\u8FAB\u904D\u6807\u5F6A\u8198\u8868\u9CD6\u618B\u522B\u762A\u5F6C\u658C\u6FD2\u6EE8\u5BBE\u6448\u5175\u51B0\u67C4\u4E19\u79C9\u997C\u70B3\"],[\"b240\",\"\u775D\u775E\u775F\u7760\u7764\u7767\u7769\u776A\u776D\",11,\"\u777A\u777B\u777C\u7781\u7782\u7783\u7786\",5,\"\u778F\u7790\u7793\",11,\"\u77A1\u77A3\u77A4\u77A6\u77A8\u77AB\u77AD\u77AE\u77AF\u77B1\u77B2\u77B4\u77B6\",4],[\"b280\",\"\u77BC\u77BE\u77C0\",12,\"\u77CE\",8,\"\u77D8\u77D9\u77DA\u77DD\",4,\"\u77E4\u75C5\u5E76\u73BB\u83E0\u64AD\u62E8\u94B5\u6CE2\u535A\u52C3\u640F\u94C2\u7B94\u4F2F\u5E1B\u8236\u8116\u818A\u6E24\u6CCA\u9A73\u6355\u535C\u54FA\u8865\u57E0\u4E0D\u5E03\u6B65\u7C3F\u90E8\u6016\u64E6\u731C\u88C1\u6750\u624D\u8D22\u776C\u8E29\u91C7\u5F69\u83DC\u8521\u9910\u53C2\u8695\u6B8B\u60ED\u60E8\u707F\u82CD\u8231\u4ED3\u6CA7\u85CF\u64CD\u7CD9\u69FD\u66F9\u8349\u5395\u7B56\u4FA7\u518C\u6D4B\u5C42\u8E6D\u63D2\u53C9\u832C\u8336\u67E5\u78B4\u643D\u5BDF\u5C94\u5DEE\u8BE7\u62C6\u67F4\u8C7A\u6400\u63BA\u8749\u998B\u8C17\u7F20\u94F2\u4EA7\u9610\u98A4\u660C\u7316\"],[\"b340\",\"\u77E6\u77E8\u77EA\u77EF\u77F0\u77F1\u77F2\u77F4\u77F5\u77F7\u77F9\u77FA\u77FB\u77FC\u7803\",5,\"\u780A\u780B\u780E\u780F\u7810\u7813\u7815\u7819\u781B\u781E\u7820\u7821\u7822\u7824\u7828\u782A\u782B\u782E\u782F\u7831\u7832\u7833\u7835\u7836\u783D\u783F\u7841\u7842\u7843\u7844\u7846\u7848\u7849\u784A\u784B\u784D\u784F\u7851\u7853\u7854\u7858\u7859\u785A\"],[\"b380\",\"\u785B\u785C\u785E\",11,\"\u786F\",7,\"\u7878\u7879\u787A\u787B\u787D\",6,\"\u573A\u5C1D\u5E38\u957F\u507F\u80A0\u5382\u655E\u7545\u5531\u5021\u8D85\u6284\u949E\u671D\u5632\u6F6E\u5DE2\u5435\u7092\u8F66\u626F\u64A4\u63A3\u5F7B\u6F88\u90F4\u81E3\u8FB0\u5C18\u6668\u5FF1\u6C89\u9648\u8D81\u886C\u6491\u79F0\u57CE\u6A59\u6210\u5448\u4E58\u7A0B\u60E9\u6F84\u8BDA\u627F\u901E\u9A8B\u79E4\u5403\u75F4\u6301\u5319\u6C60\u8FDF\u5F1B\u9A70\u803B\u9F7F\u4F88\u5C3A\u8D64\u7FC5\u65A5\u70BD\u5145\u51B2\u866B\u5D07\u5BA0\u62BD\u916C\u7574\u8E0C\u7A20\u6101\u7B79\u4EC7\u7EF8\u7785\u4E11\u81ED\u521D\u51FA\u6A71\u53A8\u8E87\u9504\u96CF\u6EC1\u9664\u695A\"],[\"b440\",\"\u7884\u7885\u7886\u7888\u788A\u788B\u788F\u7890\u7892\u7894\u7895\u7896\u7899\u789D\u789E\u78A0\u78A2\u78A4\u78A6\u78A8\",7,\"\u78B5\u78B6\u78B7\u78B8\u78BA\u78BB\u78BC\u78BD\u78BF\u78C0\u78C2\u78C3\u78C4\u78C6\u78C7\u78C8\u78CC\u78CD\u78CE\u78CF\u78D1\u78D2\u78D3\u78D6\u78D7\u78D8\u78DA\",9],[\"b480\",\"\u78E4\u78E5\u78E6\u78E7\u78E9\u78EA\u78EB\u78ED\",4,\"\u78F3\u78F5\u78F6\u78F8\u78F9\u78FB\",5,\"\u7902\u7903\u7904\u7906\",6,\"\u7840\u50A8\u77D7\u6410\u89E6\u5904\u63E3\u5DDD\u7A7F\u693D\u4F20\u8239\u5598\u4E32\u75AE\u7A97\u5E62\u5E8A\u95EF\u521B\u5439\u708A\u6376\u9524\u5782\u6625\u693F\u9187\u5507\u6DF3\u7EAF\u8822\u6233\u7EF0\u75B5\u8328\u78C1\u96CC\u8F9E\u6148\u74F7\u8BCD\u6B64\u523A\u8D50\u6B21\u806A\u8471\u56F1\u5306\u4ECE\u4E1B\u51D1\u7C97\u918B\u7C07\u4FC3\u8E7F\u7BE1\u7A9C\u6467\u5D14\u50AC\u8106\u7601\u7CB9\u6DEC\u7FE0\u6751\u5B58\u5BF8\u78CB\u64AE\u6413\u63AA\u632B\u9519\u642D\u8FBE\u7B54\u7629\u6253\u5927\u5446\u6B79\u50A3\u6234\u5E26\u6B86\u4EE3\u8D37\u888B\u5F85\u902E\"],[\"b540\",\"\u790D\",5,\"\u7914\",9,\"\u791F\",4,\"\u7925\",14,\"\u7935\",4,\"\u793D\u793F\u7942\u7943\u7944\u7945\u7947\u794A\",8,\"\u7954\u7955\u7958\u7959\u7961\u7963\"],[\"b580\",\"\u7964\u7966\u7969\u796A\u796B\u796C\u796E\u7970\",6,\"\u7979\u797B\",4,\"\u7982\u7983\u7986\u7987\u7988\u7989\u798B\u798C\u798D\u798E\u7990\u7991\u7992\u6020\u803D\u62C5\u4E39\u5355\u90F8\u63B8\u80C6\u65E6\u6C2E\u4F46\u60EE\u6DE1\u8BDE\u5F39\u86CB\u5F53\u6321\u515A\u8361\u6863\u5200\u6363\u8E48\u5012\u5C9B\u7977\u5BFC\u5230\u7A3B\u60BC\u9053\u76D7\u5FB7\u5F97\u7684\u8E6C\u706F\u767B\u7B49\u77AA\u51F3\u9093\u5824\u4F4E\u6EF4\u8FEA\u654C\u7B1B\u72C4\u6DA4\u7FDF\u5AE1\u62B5\u5E95\u5730\u8482\u7B2C\u5E1D\u5F1F\u9012\u7F14\u98A0\u6382\u6EC7\u7898\u70B9\u5178\u975B\u57AB\u7535\u4F43\u7538\u5E97\u60E6\u5960\u6DC0\u6BBF\u7889\u53FC\u96D5\u51CB\u5201\u6389\u540A\u9493\u8C03\u8DCC\u7239\u789F\u8776\u8FED\u8C0D\u53E0\"],[\"b640\",\"\u7993\",6,\"\u799B\",11,\"\u79A8\",10,\"\u79B4\",4,\"\u79BC\u79BF\u79C2\u79C4\u79C5\u79C7\u79C8\u79CA\u79CC\u79CE\u79CF\u79D0\u79D3\u79D4\u79D6\u79D7\u79D9\",5,\"\u79E0\u79E1\u79E2\u79E5\u79E8\u79EA\"],[\"b680\",\"\u79EC\u79EE\u79F1\",6,\"\u79F9\u79FA\u79FC\u79FE\u79FF\u7A01\u7A04\u7A05\u7A07\u7A08\u7A09\u7A0A\u7A0C\u7A0F\",4,\"\u7A15\u7A16\u7A18\u7A19\u7A1B\u7A1C\u4E01\u76EF\u53EE\u9489\u9876\u9F0E\u952D\u5B9A\u8BA2\u4E22\u4E1C\u51AC\u8463\u61C2\u52A8\u680B\u4F97\u606B\u51BB\u6D1E\u515C\u6296\u6597\u9661\u8C46\u9017\u75D8\u90FD\u7763\u6BD2\u728A\u72EC\u8BFB\u5835\u7779\u8D4C\u675C\u9540\u809A\u5EA6\u6E21\u5992\u7AEF\u77ED\u953B\u6BB5\u65AD\u7F0E\u5806\u5151\u961F\u5BF9\u58A9\u5428\u8E72\u6566\u987F\u56E4\u949D\u76FE\u9041\u6387\u54C6\u591A\u593A\u579B\u8EB2\u6735\u8DFA\u8235\u5241\u60F0\u5815\u86FE\u5CE8\u9E45\u4FC4\u989D\u8BB9\u5A25\u6076\u5384\u627C\u904F\u9102\u997F\u6069\u800C\u513F\u8033\u5C14\u9975\u6D31\u4E8C\"],[\"b740\",\"\u7A1D\u7A1F\u7A21\u7A22\u7A24\",14,\"\u7A34\u7A35\u7A36\u7A38\u7A3A\u7A3E\u7A40\",5,\"\u7A47\",9,\"\u7A52\",4,\"\u7A58\",16],[\"b780\",\"\u7A69\",6,\"\u7A71\u7A72\u7A73\u7A75\u7A7B\u7A7C\u7A7D\u7A7E\u7A82\u7A85\u7A87\u7A89\u7A8A\u7A8B\u7A8C\u7A8E\u7A8F\u7A90\u7A93\u7A94\u7A99\u7A9A\u7A9B\u7A9E\u7AA1\u7AA2\u8D30\u53D1\u7F5A\u7B4F\u4F10\u4E4F\u9600\u6CD5\u73D0\u85E9\u5E06\u756A\u7FFB\u6A0A\u77FE\u9492\u7E41\u51E1\u70E6\u53CD\u8FD4\u8303\u8D29\u72AF\u996D\u6CDB\u574A\u82B3\u65B9\u80AA\u623F\u9632\u59A8\u4EFF\u8BBF\u7EBA\u653E\u83F2\u975E\u5561\u98DE\u80A5\u532A\u8BFD\u5420\u80BA\u5E9F\u6CB8\u8D39\u82AC\u915A\u5429\u6C1B\u5206\u7EB7\u575F\u711A\u6C7E\u7C89\u594B\u4EFD\u5FFF\u6124\u7CAA\u4E30\u5C01\u67AB\u8702\u5CF0\u950B\u98CE\u75AF\u70FD\u9022\u51AF\u7F1D\u8BBD\u5949\u51E4\u4F5B\u5426\u592B\u6577\u80A4\u5B75\u6276\u62C2\u8F90\u5E45\u6C1F\u7B26\u4F0F\u4FD8\u670D\"],[\"b840\",\"\u7AA3\u7AA4\u7AA7\u7AA9\u7AAA\u7AAB\u7AAE\",4,\"\u7AB4\",10,\"\u7AC0\",10,\"\u7ACC\",9,\"\u7AD7\u7AD8\u7ADA\u7ADB\u7ADC\u7ADD\u7AE1\u7AE2\u7AE4\u7AE7\",5,\"\u7AEE\u7AF0\u7AF1\u7AF2\u7AF3\"],[\"b880\",\"\u7AF4\",4,\"\u7AFB\u7AFC\u7AFE\u7B00\u7B01\u7B02\u7B05\u7B07\u7B09\u7B0C\u7B0D\u7B0E\u7B10\u7B12\u7B13\u7B16\u7B17\u7B18\u7B1A\u7B1C\u7B1D\u7B1F\u7B21\u7B22\u7B23\u7B27\u7B29\u7B2D\u6D6E\u6DAA\u798F\u88B1\u5F17\u752B\u629A\u8F85\u4FEF\u91DC\u65A7\u812F\u8151\u5E9C\u8150\u8D74\u526F\u8986\u8D4B\u590D\u5085\u4ED8\u961C\u7236\u8179\u8D1F\u5BCC\u8BA3\u9644\u5987\u7F1A\u5490\u5676\u560E\u8BE5\u6539\u6982\u9499\u76D6\u6E89\u5E72\u7518\u6746\u67D1\u7AFF\u809D\u8D76\u611F\u79C6\u6562\u8D63\u5188\u521A\u94A2\u7F38\u809B\u7EB2\u5C97\u6E2F\u6760\u7BD9\u768B\u9AD8\u818F\u7F94\u7CD5\u641E\u9550\u7A3F\u544A\u54E5\u6B4C\u6401\u6208\u9E3D\u80F3\u7599\u5272\u9769\u845B\u683C\u86E4\u9601\u9694\u94EC\u4E2A\u5404\u7ED9\u6839\u8DDF\u8015\u66F4\u5E9A\u7FB9\"],[\"b940\",\"\u7B2F\u7B30\u7B32\u7B34\u7B35\u7B36\u7B37\u7B39\u7B3B\u7B3D\u7B3F\",5,\"\u7B46\u7B48\u7B4A\u7B4D\u7B4E\u7B53\u7B55\u7B57\u7B59\u7B5C\u7B5E\u7B5F\u7B61\u7B63\",10,\"\u7B6F\u7B70\u7B73\u7B74\u7B76\u7B78\u7B7A\u7B7C\u7B7D\u7B7F\u7B81\u7B82\u7B83\u7B84\u7B86\",6,\"\u7B8E\u7B8F\"],[\"b980\",\"\u7B91\u7B92\u7B93\u7B96\u7B98\u7B99\u7B9A\u7B9B\u7B9E\u7B9F\u7BA0\u7BA3\u7BA4\u7BA5\u7BAE\u7BAF\u7BB0\u7BB2\u7BB3\u7BB5\u7BB6\u7BB7\u7BB9\",7,\"\u7BC2\u7BC3\u7BC4\u57C2\u803F\u6897\u5DE5\u653B\u529F\u606D\u9F9A\u4F9B\u8EAC\u516C\u5BAB\u5F13\u5DE9\u6C5E\u62F1\u8D21\u5171\u94A9\u52FE\u6C9F\u82DF\u72D7\u57A2\u6784\u8D2D\u591F\u8F9C\u83C7\u5495\u7B8D\u4F30\u6CBD\u5B64\u59D1\u9F13\u53E4\u86CA\u9AA8\u8C37\u80A1\u6545\u987E\u56FA\u96C7\u522E\u74DC\u5250\u5BE1\u6302\u8902\u4E56\u62D0\u602A\u68FA\u5173\u5B98\u51A0\u89C2\u7BA1\u9986\u7F50\u60EF\u704C\u8D2F\u5149\u5E7F\u901B\u7470\u89C4\u572D\u7845\u5F52\u9F9F\u95FA\u8F68\u9B3C\u8BE1\u7678\u6842\u67DC\u8DEA\u8D35\u523D\u8F8A\u6EDA\u68CD\u9505\u90ED\u56FD\u679C\u88F9\u8FC7\u54C8\"],[\"ba40\",\"\u7BC5\u7BC8\u7BC9\u7BCA\u7BCB\u7BCD\u7BCE\u7BCF\u7BD0\u7BD2\u7BD4\",4,\"\u7BDB\u7BDC\u7BDE\u7BDF\u7BE0\u7BE2\u7BE3\u7BE4\u7BE7\u7BE8\u7BE9\u7BEB\u7BEC\u7BED\u7BEF\u7BF0\u7BF2\",4,\"\u7BF8\u7BF9\u7BFA\u7BFB\u7BFD\u7BFF\",7,\"\u7C08\u7C09\u7C0A\u7C0D\u7C0E\u7C10\",5,\"\u7C17\u7C18\u7C19\"],[\"ba80\",\"\u7C1A\",4,\"\u7C20\",5,\"\u7C28\u7C29\u7C2B\",12,\"\u7C39\",5,\"\u7C42\u9AB8\u5B69\u6D77\u6C26\u4EA5\u5BB3\u9A87\u9163\u61A8\u90AF\u97E9\u542B\u6DB5\u5BD2\u51FD\u558A\u7F55\u7FF0\u64BC\u634D\u65F1\u61BE\u608D\u710A\u6C57\u6C49\u592F\u676D\u822A\u58D5\u568E\u8C6A\u6BEB\u90DD\u597D\u8017\u53F7\u6D69\u5475\u559D\u8377\u83CF\u6838\u79BE\u548C\u4F55\u5408\u76D2\u8C89\u9602\u6CB3\u6DB8\u8D6B\u8910\u9E64\u8D3A\u563F\u9ED1\u75D5\u5F88\u72E0\u6068\u54FC\u4EA8\u6A2A\u8861\u6052\u8F70\u54C4\u70D8\u8679\u9E3F\u6D2A\u5B8F\u5F18\u7EA2\u5589\u4FAF\u7334\u543C\u539A\u5019\u540E\u547C\u4E4E\u5FFD\u745A\u58F6\u846B\u80E1\u8774\u72D0\u7CCA\u6E56\"],[\"bb40\",\"\u7C43\",9,\"\u7C4E\",36,\"\u7C75\",5,\"\u7C7E\",9],[\"bb80\",\"\u7C88\u7C8A\",6,\"\u7C93\u7C94\u7C96\u7C99\u7C9A\u7C9B\u7CA0\u7CA1\u7CA3\u7CA6\u7CA7\u7CA8\u7CA9\u7CAB\u7CAC\u7CAD\u7CAF\u7CB0\u7CB4\",4,\"\u7CBA\u7CBB\u5F27\u864E\u552C\u62A4\u4E92\u6CAA\u6237\u82B1\u54D7\u534E\u733E\u6ED1\u753B\u5212\u5316\u8BDD\u69D0\u5F8A\u6000\u6DEE\u574F\u6B22\u73AF\u6853\u8FD8\u7F13\u6362\u60A3\u5524\u75EA\u8C62\u7115\u6DA3\u5BA6\u5E7B\u8352\u614C\u9EC4\u78FA\u8757\u7C27\u7687\u51F0\u60F6\u714C\u6643\u5E4C\u604D\u8C0E\u7070\u6325\u8F89\u5FBD\u6062\u86D4\u56DE\u6BC1\u6094\u6167\u5349\u60E0\u6666\u8D3F\u79FD\u4F1A\u70E9\u6C47\u8BB3\u8BF2\u7ED8\u8364\u660F\u5A5A\u9B42\u6D51\u6DF7\u8C41\u6D3B\u4F19\u706B\u83B7\u6216\u60D1\u970D\u8D27\u7978\u51FB\u573E\u57FA\u673A\u7578\u7A3D\u79EF\u7B95\"],[\"bc40\",\"\u7CBF\u7CC0\u7CC2\u7CC3\u7CC4\u7CC6\u7CC9\u7CCB\u7CCE\",6,\"\u7CD8\u7CDA\u7CDB\u7CDD\u7CDE\u7CE1\",6,\"\u7CE9\",5,\"\u7CF0\",7,\"\u7CF9\u7CFA\u7CFC\",13,\"\u7D0B\",5],[\"bc80\",\"\u7D11\",14,\"\u7D21\u7D23\u7D24\u7D25\u7D26\u7D28\u7D29\u7D2A\u7D2C\u7D2D\u7D2E\u7D30\",6,\"\u808C\u9965\u8FF9\u6FC0\u8BA5\u9E21\u59EC\u7EE9\u7F09\u5409\u6781\u68D8\u8F91\u7C4D\u96C6\u53CA\u6025\u75BE\u6C72\u5373\u5AC9\u7EA7\u6324\u51E0\u810A\u5DF1\u84DF\u6280\u5180\u5B63\u4F0E\u796D\u5242\u60B8\u6D4E\u5BC4\u5BC2\u8BA1\u8BB0\u65E2\u5FCC\u9645\u5993\u7EE7\u7EAA\u5609\u67B7\u5939\u4F73\u5BB6\u52A0\u835A\u988A\u8D3E\u7532\u94BE\u5047\u7A3C\u4EF7\u67B6\u9A7E\u5AC1\u6B7C\u76D1\u575A\u5C16\u7B3A\u95F4\u714E\u517C\u80A9\u8270\u5978\u7F04\u8327\u68C0\u67EC\u78B1\u7877\u62E3\u6361\u7B80\u4FED\u526A\u51CF\u8350\u69DB\u9274\u8DF5\u8D31\u89C1\u952E\u7BAD\u4EF6\"],[\"bd40\",\"\u7D37\",54,\"\u7D6F\",7],[\"bd80\",\"\u7D78\",32,\"\u5065\u8230\u5251\u996F\u6E10\u6E85\u6DA7\u5EFA\u50F5\u59DC\u5C06\u6D46\u6C5F\u7586\u848B\u6868\u5956\u8BB2\u5320\u9171\u964D\u8549\u6912\u7901\u7126\u80F6\u4EA4\u90CA\u6D47\u9A84\u5A07\u56BC\u6405\u94F0\u77EB\u4FA5\u811A\u72E1\u89D2\u997A\u7F34\u7EDE\u527F\u6559\u9175\u8F7F\u8F83\u53EB\u7A96\u63ED\u63A5\u7686\u79F8\u8857\u9636\u622A\u52AB\u8282\u6854\u6770\u6377\u776B\u7AED\u6D01\u7ED3\u89E3\u59D0\u6212\u85C9\u82A5\u754C\u501F\u4ECB\u75A5\u8BEB\u5C4A\u5DFE\u7B4B\u65A4\u91D1\u4ECA\u6D25\u895F\u7D27\u9526\u4EC5\u8C28\u8FDB\u9773\u664B\u7981\u8FD1\u70EC\u6D78\"],[\"be40\",\"\u7D99\",12,\"\u7DA7\",6,\"\u7DAF\",42],[\"be80\",\"\u7DDA\",32,\"\u5C3D\u52B2\u8346\u5162\u830E\u775B\u6676\u9CB8\u4EAC\u60CA\u7CBE\u7CB3\u7ECF\u4E95\u8B66\u666F\u9888\u9759\u5883\u656C\u955C\u5F84\u75C9\u9756\u7ADF\u7ADE\u51C0\u70AF\u7A98\u63EA\u7A76\u7EA0\u7396\u97ED\u4E45\u7078\u4E5D\u9152\u53A9\u6551\u65E7\u81FC\u8205\u548E\u5C31\u759A\u97A0\u62D8\u72D9\u75BD\u5C45\u9A79\u83CA\u5C40\u5480\u77E9\u4E3E\u6CAE\u805A\u62D2\u636E\u5DE8\u5177\u8DDD\u8E1E\u952F\u4FF1\u53E5\u60E7\u70AC\u5267\u6350\u9E43\u5A1F\u5026\u7737\u5377\u7EE2\u6485\u652B\u6289\u6398\u5014\u7235\u89C9\u51B3\u8BC0\u7EDD\u5747\u83CC\u94A7\u519B\u541B\u5CFB\"],[\"bf40\",\"\u7DFB\",62],[\"bf80\",\"\u7E3A\u7E3C\",4,\"\u7E42\",4,\"\u7E48\",21,\"\u4FCA\u7AE3\u6D5A\u90E1\u9A8F\u5580\u5496\u5361\u54AF\u5F00\u63E9\u6977\u51EF\u6168\u520A\u582A\u52D8\u574E\u780D\u770B\u5EB7\u6177\u7CE0\u625B\u6297\u4EA2\u7095\u8003\u62F7\u70E4\u9760\u5777\u82DB\u67EF\u68F5\u78D5\u9897\u79D1\u58F3\u54B3\u53EF\u6E34\u514B\u523B\u5BA2\u8BFE\u80AF\u5543\u57A6\u6073\u5751\u542D\u7A7A\u6050\u5B54\u63A7\u62A0\u53E3\u6263\u5BC7\u67AF\u54ED\u7A9F\u82E6\u9177\u5E93\u88E4\u5938\u57AE\u630E\u8DE8\u80EF\u5757\u7B77\u4FA9\u5FEB\u5BBD\u6B3E\u5321\u7B50\u72C2\u6846\u77FF\u7736\u65F7\u51B5\u4E8F\u76D4\u5CBF\u7AA5\u8475\u594E\u9B41\u5080\"],[\"c040\",\"\u7E5E\",35,\"\u7E83\",23,\"\u7E9C\u7E9D\u7E9E\"],[\"c080\",\"\u7EAE\u7EB4\u7EBB\u7EBC\u7ED6\u7EE4\u7EEC\u7EF9\u7F0A\u7F10\u7F1E\u7F37\u7F39\u7F3B\",6,\"\u7F43\u7F46\",9,\"\u7F52\u7F53\u9988\u6127\u6E83\u5764\u6606\u6346\u56F0\u62EC\u6269\u5ED3\u9614\u5783\u62C9\u5587\u8721\u814A\u8FA3\u5566\u83B1\u6765\u8D56\u84DD\u5A6A\u680F\u62E6\u7BEE\u9611\u5170\u6F9C\u8C30\u63FD\u89C8\u61D2\u7F06\u70C2\u6EE5\u7405\u6994\u72FC\u5ECA\u90CE\u6717\u6D6A\u635E\u52B3\u7262\u8001\u4F6C\u59E5\u916A\u70D9\u6D9D\u52D2\u4E50\u96F7\u956D\u857E\u78CA\u7D2F\u5121\u5792\u64C2\u808B\u7C7B\u6CEA\u68F1\u695E\u51B7\u5398\u68A8\u7281\u9ECE\u7BF1\u72F8\u79BB\u6F13\u7406\u674E\u91CC\u9CA4\u793C\u8389\u8354\u540F\u6817\u4E3D\u5389\u52B1\u783E\u5386\u5229\u5088\u4F8B\u4FD0\"],[\"c140\",\"\u7F56\u7F59\u7F5B\u7F5C\u7F5D\u7F5E\u7F60\u7F63\",4,\"\u7F6B\u7F6C\u7F6D\u7F6F\u7F70\u7F73\u7F75\u7F76\u7F77\u7F78\u7F7A\u7F7B\u7F7C\u7F7D\u7F7F\u7F80\u7F82\",7,\"\u7F8B\u7F8D\u7F8F\",4,\"\u7F95\",4,\"\u7F9B\u7F9C\u7FA0\u7FA2\u7FA3\u7FA5\u7FA6\u7FA8\",6,\"\u7FB1\"],[\"c180\",\"\u7FB3\",4,\"\u7FBA\u7FBB\u7FBE\u7FC0\u7FC2\u7FC3\u7FC4\u7FC6\u7FC7\u7FC8\u7FC9\u7FCB\u7FCD\u7FCF\",4,\"\u7FD6\u7FD7\u7FD9\",5,\"\u7FE2\u7FE3\u75E2\u7ACB\u7C92\u6CA5\u96B6\u529B\u7483\u54E9\u4FE9\u8054\u83B2\u8FDE\u9570\u5EC9\u601C\u6D9F\u5E18\u655B\u8138\u94FE\u604B\u70BC\u7EC3\u7CAE\u51C9\u6881\u7CB1\u826F\u4E24\u8F86\u91CF\u667E\u4EAE\u8C05\u64A9\u804A\u50DA\u7597\u71CE\u5BE5\u8FBD\u6F66\u4E86\u6482\u9563\u5ED6\u6599\u5217\u88C2\u70C8\u52A3\u730E\u7433\u6797\u78F7\u9716\u4E34\u90BB\u9CDE\u6DCB\u51DB\u8D41\u541D\u62CE\u73B2\u83F1\u96F6\u9F84\u94C3\u4F36\u7F9A\u51CC\u7075\u9675\u5CAD\u9886\u53E6\u4EE4\u6E9C\u7409\u69B4\u786B\u998F\u7559\u5218\u7624\u6D41\u67F3\u516D\u9F99\u804B\u5499\u7B3C\u7ABF\"],[\"c240\",\"\u7FE4\u7FE7\u7FE8\u7FEA\u7FEB\u7FEC\u7FED\u7FEF\u7FF2\u7FF4\",6,\"\u7FFD\u7FFE\u7FFF\u8002\u8007\u8008\u8009\u800A\u800E\u800F\u8011\u8013\u801A\u801B\u801D\u801E\u801F\u8021\u8023\u8024\u802B\",5,\"\u8032\u8034\u8039\u803A\u803C\u803E\u8040\u8041\u8044\u8045\u8047\u8048\u8049\u804E\u804F\u8050\u8051\u8053\u8055\u8056\u8057\"],[\"c280\",\"\u8059\u805B\",13,\"\u806B\",5,\"\u8072\",11,\"\u9686\u5784\u62E2\u9647\u697C\u5A04\u6402\u7BD3\u6F0F\u964B\u82A6\u5362\u9885\u5E90\u7089\u63B3\u5364\u864F\u9C81\u9E93\u788C\u9732\u8DEF\u8D42\u9E7F\u6F5E\u7984\u5F55\u9646\u622E\u9A74\u5415\u94DD\u4FA3\u65C5\u5C65\u5C61\u7F15\u8651\u6C2F\u5F8B\u7387\u6EE4\u7EFF\u5CE6\u631B\u5B6A\u6EE6\u5375\u4E71\u63A0\u7565\u62A1\u8F6E\u4F26\u4ED1\u6CA6\u7EB6\u8BBA\u841D\u87BA\u7F57\u903B\u9523\u7BA9\u9AA1\u88F8\u843D\u6D1B\u9A86\u7EDC\u5988\u9EBB\u739B\u7801\u8682\u9A6C\u9A82\u561B\u5417\u57CB\u4E70\u9EA6\u5356\u8FC8\u8109\u7792\u9992\u86EE\u6EE1\u8513\u66FC\u6162\u6F2B\"],[\"c340\",\"\u807E\u8081\u8082\u8085\u8088\u808A\u808D\",5,\"\u8094\u8095\u8097\u8099\u809E\u80A3\u80A6\u80A7\u80A8\u80AC\u80B0\u80B3\u80B5\u80B6\u80B8\u80B9\u80BB\u80C5\u80C7\",4,\"\u80CF\",6,\"\u80D8\u80DF\u80E0\u80E2\u80E3\u80E6\u80EE\u80F5\u80F7\u80F9\u80FB\u80FE\u80FF\u8100\u8101\u8103\u8104\u8105\u8107\u8108\u810B\"],[\"c380\",\"\u810C\u8115\u8117\u8119\u811B\u811C\u811D\u811F\",12,\"\u812D\u812E\u8130\u8133\u8134\u8135\u8137\u8139\",4,\"\u813F\u8C29\u8292\u832B\u76F2\u6C13\u5FD9\u83BD\u732B\u8305\u951A\u6BDB\u77DB\u94C6\u536F\u8302\u5192\u5E3D\u8C8C\u8D38\u4E48\u73AB\u679A\u6885\u9176\u9709\u7164\u6CA1\u7709\u5A92\u9541\u6BCF\u7F8E\u6627\u5BD0\u59B9\u5A9A\u95E8\u95F7\u4EEC\u840C\u8499\u6AAC\u76DF\u9530\u731B\u68A6\u5B5F\u772F\u919A\u9761\u7CDC\u8FF7\u8C1C\u5F25\u7C73\u79D8\u89C5\u6CCC\u871C\u5BC6\u5E42\u68C9\u7720\u7EF5\u5195\u514D\u52C9\u5A29\u7F05\u9762\u82D7\u63CF\u7784\u85D0\u79D2\u6E3A\u5E99\u5999\u8511\u706D\u6C11\u62BF\u76BF\u654F\u60AF\u95FD\u660E\u879F\u9E23\u94ED\u540D\u547D\u8C2C\u6478\"],[\"c440\",\"\u8140\",5,\"\u8147\u8149\u814D\u814E\u814F\u8152\u8156\u8157\u8158\u815B\",4,\"\u8161\u8162\u8163\u8164\u8166\u8168\u816A\u816B\u816C\u816F\u8172\u8173\u8175\u8176\u8177\u8178\u8181\u8183\",4,\"\u8189\u818B\u818C\u818D\u818E\u8190\u8192\",5,\"\u8199\u819A\u819E\",4,\"\u81A4\u81A5\"],[\"c480\",\"\u81A7\u81A9\u81AB\",7,\"\u81B4\",5,\"\u81BC\u81BD\u81BE\u81BF\u81C4\u81C5\u81C7\u81C8\u81C9\u81CB\u81CD\",6,\"\u6479\u8611\u6A21\u819C\u78E8\u6469\u9B54\u62B9\u672B\u83AB\u58A8\u9ED8\u6CAB\u6F20\u5BDE\u964C\u8C0B\u725F\u67D0\u62C7\u7261\u4EA9\u59C6\u6BCD\u5893\u66AE\u5E55\u52DF\u6155\u6728\u76EE\u7766\u7267\u7A46\u62FF\u54EA\u5450\u94A0\u90A3\u5A1C\u7EB3\u6C16\u4E43\u5976\u8010\u5948\u5357\u7537\u96BE\u56CA\u6320\u8111\u607C\u95F9\u6DD6\u5462\u9981\u5185\u5AE9\u80FD\u59AE\u9713\u502A\u6CE5\u5C3C\u62DF\u4F60\u533F\u817B\u9006\u6EBA\u852B\u62C8\u5E74\u78BE\u64B5\u637B\u5FF5\u5A18\u917F\u9E1F\u5C3F\u634F\u8042\u5B7D\u556E\u954A\u954D\u6D85\u60A8\u67E0\u72DE\u51DD\u5B81\"],[\"c540\",\"\u81D4\",14,\"\u81E4\u81E5\u81E6\u81E8\u81E9\u81EB\u81EE\",4,\"\u81F5\",5,\"\u81FD\u81FF\u8203\u8207\",4,\"\u820E\u820F\u8211\u8213\u8215\",5,\"\u821D\u8220\u8224\u8225\u8226\u8227\u8229\u822E\u8232\u823A\u823C\u823D\u823F\"],[\"c580\",\"\u8240\u8241\u8242\u8243\u8245\u8246\u8248\u824A\u824C\u824D\u824E\u8250\",7,\"\u8259\u825B\u825C\u825D\u825E\u8260\",7,\"\u8269\u62E7\u6CDE\u725B\u626D\u94AE\u7EBD\u8113\u6D53\u519C\u5F04\u5974\u52AA\u6012\u5973\u6696\u8650\u759F\u632A\u61E6\u7CEF\u8BFA\u54E6\u6B27\u9E25\u6BB4\u85D5\u5455\u5076\u6CA4\u556A\u8DB4\u722C\u5E15\u6015\u7436\u62CD\u6392\u724C\u5F98\u6E43\u6D3E\u6500\u6F58\u76D8\u78D0\u76FC\u7554\u5224\u53DB\u4E53\u5E9E\u65C1\u802A\u80D6\u629B\u5486\u5228\u70AE\u888D\u8DD1\u6CE1\u5478\u80DA\u57F9\u88F4\u8D54\u966A\u914D\u4F69\u6C9B\u55B7\u76C6\u7830\u62A8\u70F9\u6F8E\u5F6D\u84EC\u68DA\u787C\u7BF7\u81A8\u670B\u9E4F\u6367\u78B0\u576F\u7812\u9739\u6279\u62AB\u5288\u7435\u6BD7\"],[\"c640\",\"\u826A\u826B\u826C\u826D\u8271\u8275\u8276\u8277\u8278\u827B\u827C\u8280\u8281\u8283\u8285\u8286\u8287\u8289\u828C\u8290\u8293\u8294\u8295\u8296\u829A\u829B\u829E\u82A0\u82A2\u82A3\u82A7\u82B2\u82B5\u82B6\u82BA\u82BB\u82BC\u82BF\u82C0\u82C2\u82C3\u82C5\u82C6\u82C9\u82D0\u82D6\u82D9\u82DA\u82DD\u82E2\u82E7\u82E8\u82E9\u82EA\u82EC\u82ED\u82EE\u82F0\u82F2\u82F3\u82F5\u82F6\u82F8\"],[\"c680\",\"\u82FA\u82FC\",4,\"\u830A\u830B\u830D\u8310\u8312\u8313\u8316\u8318\u8319\u831D\",9,\"\u8329\u832A\u832E\u8330\u8332\u8337\u833B\u833D\u5564\u813E\u75B2\u76AE\u5339\u75DE\u50FB\u5C41\u8B6C\u7BC7\u504F\u7247\u9A97\u98D8\u6F02\u74E2\u7968\u6487\u77A5\u62FC\u9891\u8D2B\u54C1\u8058\u4E52\u576A\u82F9\u840D\u5E73\u51ED\u74F6\u8BC4\u5C4F\u5761\u6CFC\u9887\u5A46\u7834\u9B44\u8FEB\u7C95\u5256\u6251\u94FA\u4EC6\u8386\u8461\u83E9\u84B2\u57D4\u6734\u5703\u666E\u6D66\u8C31\u66DD\u7011\u671F\u6B3A\u6816\u621A\u59BB\u4E03\u51C4\u6F06\u67D2\u6C8F\u5176\u68CB\u5947\u6B67\u7566\u5D0E\u8110\u9F50\u65D7\u7948\u7941\u9A91\u8D77\u5C82\u4E5E\u4F01\u542F\u5951\u780C\u5668\u6C14\u8FC4\u5F03\u6C7D\u6CE3\u8BAB\u6390\"],[\"c740\",\"\u833E\u833F\u8341\u8342\u8344\u8345\u8348\u834A\",4,\"\u8353\u8355\",4,\"\u835D\u8362\u8370\",6,\"\u8379\u837A\u837E\",6,\"\u8387\u8388\u838A\u838B\u838C\u838D\u838F\u8390\u8391\u8394\u8395\u8396\u8397\u8399\u839A\u839D\u839F\u83A1\",6,\"\u83AC\u83AD\u83AE\"],[\"c780\",\"\u83AF\u83B5\u83BB\u83BE\u83BF\u83C2\u83C3\u83C4\u83C6\u83C8\u83C9\u83CB\u83CD\u83CE\u83D0\u83D1\u83D2\u83D3\u83D5\u83D7\u83D9\u83DA\u83DB\u83DE\u83E2\u83E3\u83E4\u83E6\u83E7\u83E8\u83EB\u83EC\u83ED\u6070\u6D3D\u7275\u6266\u948E\u94C5\u5343\u8FC1\u7B7E\u4EDF\u8C26\u4E7E\u9ED4\u94B1\u94B3\u524D\u6F5C\u9063\u6D45\u8C34\u5811\u5D4C\u6B20\u6B49\u67AA\u545B\u8154\u7F8C\u5899\u8537\u5F3A\u62A2\u6A47\u9539\u6572\u6084\u6865\u77A7\u4E54\u4FA8\u5DE7\u9798\u64AC\u7FD8\u5CED\u4FCF\u7A8D\u5207\u8304\u4E14\u602F\u7A83\u94A6\u4FB5\u4EB2\u79E6\u7434\u52E4\u82B9\u64D2\u79BD\u5BDD\u6C81\u9752\u8F7B\u6C22\u503E\u537F\u6E05\u64CE\u6674\u6C30\u60C5\u9877\u8BF7\u5E86\u743C\u7A77\u79CB\u4E18\u90B1\u7403\u6C42\u56DA\u914B\u6CC5\u8D8B\u533A\u86C6\u66F2\u8EAF\u5C48\u9A71\u6E20\"],[\"c840\",\"\u83EE\u83EF\u83F3\",4,\"\u83FA\u83FB\u83FC\u83FE\u83FF\u8400\u8402\u8405\u8407\u8408\u8409\u840A\u8410\u8412\",5,\"\u8419\u841A\u841B\u841E\",5,\"\u8429\",7,\"\u8432\",5,\"\u8439\u843A\u843B\u843E\",7,\"\u8447\u8448\u8449\"],[\"c880\",\"\u844A\",6,\"\u8452\",4,\"\u8458\u845D\u845E\u845F\u8460\u8462\u8464\",4,\"\u846A\u846E\u846F\u8470\u8472\u8474\u8477\u8479\u847B\u847C\u53D6\u5A36\u9F8B\u8DA3\u53BB\u5708\u98A7\u6743\u919B\u6CC9\u5168\u75CA\u62F3\u72AC\u5238\u529D\u7F3A\u7094\u7638\u5374\u9E4A\u69B7\u786E\u96C0\u88D9\u7FA4\u7136\u71C3\u5189\u67D3\u74E4\u58E4\u6518\u56B7\u8BA9\u9976\u6270\u7ED5\u60F9\u70ED\u58EC\u4EC1\u4EBA\u5FCD\u97E7\u4EFB\u8BA4\u5203\u598A\u7EAB\u6254\u4ECD\u65E5\u620E\u8338\u84C9\u8363\u878D\u7194\u6EB6\u5BB9\u7ED2\u5197\u63C9\u67D4\u8089\u8339\u8815\u5112\u5B7A\u5982\u8FB1\u4E73\u6C5D\u5165\u8925\u8F6F\u962E\u854A\u745E\u9510\u95F0\u6DA6\u82E5\u5F31\u6492\u6D12\u8428\u816E\u9CC3\u585E\u8D5B\u4E09\u53C1\"],[\"c940\",\"\u847D\",4,\"\u8483\u8484\u8485\u8486\u848A\u848D\u848F\",7,\"\u8498\u849A\u849B\u849D\u849E\u849F\u84A0\u84A2\",12,\"\u84B0\u84B1\u84B3\u84B5\u84B6\u84B7\u84BB\u84BC\u84BE\u84C0\u84C2\u84C3\u84C5\u84C6\u84C7\u84C8\u84CB\u84CC\u84CE\u84CF\u84D2\u84D4\u84D5\u84D7\"],[\"c980\",\"\u84D8\",4,\"\u84DE\u84E1\u84E2\u84E4\u84E7\",4,\"\u84ED\u84EE\u84EF\u84F1\",10,\"\u84FD\u84FE\u8500\u8501\u8502\u4F1E\u6563\u6851\u55D3\u4E27\u6414\u9A9A\u626B\u5AC2\u745F\u8272\u6DA9\u68EE\u50E7\u838E\u7802\u6740\u5239\u6C99\u7EB1\u50BB\u5565\u715E\u7B5B\u6652\u73CA\u82EB\u6749\u5C71\u5220\u717D\u886B\u95EA\u9655\u64C5\u8D61\u81B3\u5584\u6C55\u6247\u7F2E\u5892\u4F24\u5546\u8D4F\u664C\u4E0A\u5C1A\u88F3\u68A2\u634E\u7A0D\u70E7\u828D\u52FA\u97F6\u5C11\u54E8\u90B5\u7ECD\u5962\u8D4A\u86C7\u820C\u820D\u8D66\u6444\u5C04\u6151\u6D89\u793E\u8BBE\u7837\u7533\u547B\u4F38\u8EAB\u6DF1\u5A20\u7EC5\u795E\u6C88\u5BA1\u5A76\u751A\u80BE\u614E\u6E17\u58F0\u751F\u7525\u7272\u5347\u7EF3\"],[\"ca40\",\"\u8503\",8,\"\u850D\u850E\u850F\u8510\u8512\u8514\u8515\u8516\u8518\u8519\u851B\u851C\u851D\u851E\u8520\u8522\",8,\"\u852D\",9,\"\u853E\",4,\"\u8544\u8545\u8546\u8547\u854B\",10],[\"ca80\",\"\u8557\u8558\u855A\u855B\u855C\u855D\u855F\",4,\"\u8565\u8566\u8567\u8569\",8,\"\u8573\u8575\u8576\u8577\u8578\u857C\u857D\u857F\u8580\u8581\u7701\u76DB\u5269\u80DC\u5723\u5E08\u5931\u72EE\u65BD\u6E7F\u8BD7\u5C38\u8671\u5341\u77F3\u62FE\u65F6\u4EC0\u98DF\u8680\u5B9E\u8BC6\u53F2\u77E2\u4F7F\u5C4E\u9A76\u59CB\u5F0F\u793A\u58EB\u4E16\u67FF\u4E8B\u62ED\u8A93\u901D\u52BF\u662F\u55DC\u566C\u9002\u4ED5\u4F8D\u91CA\u9970\u6C0F\u5E02\u6043\u5BA4\u89C6\u8BD5\u6536\u624B\u9996\u5B88\u5BFF\u6388\u552E\u53D7\u7626\u517D\u852C\u67A2\u68B3\u6B8A\u6292\u8F93\u53D4\u8212\u6DD1\u758F\u4E66\u8D4E\u5B70\u719F\u85AF\u6691\u66D9\u7F72\u8700\u9ECD\u9F20\u5C5E\u672F\u8FF0\u6811\u675F\u620D\u7AD6\u5885\u5EB6\u6570\u6F31\"],[\"cb40\",\"\u8582\u8583\u8586\u8588\",6,\"\u8590\",10,\"\u859D\",6,\"\u85A5\u85A6\u85A7\u85A9\u85AB\u85AC\u85AD\u85B1\",5,\"\u85B8\u85BA\",6,\"\u85C2\",6,\"\u85CA\",4,\"\u85D1\u85D2\"],[\"cb80\",\"\u85D4\u85D6\",5,\"\u85DD\",6,\"\u85E5\u85E6\u85E7\u85E8\u85EA\",14,\"\u6055\u5237\u800D\u6454\u8870\u7529\u5E05\u6813\u62F4\u971C\u53CC\u723D\u8C01\u6C34\u7761\u7A0E\u542E\u77AC\u987A\u821C\u8BF4\u7855\u6714\u70C1\u65AF\u6495\u5636\u601D\u79C1\u53F8\u4E1D\u6B7B\u8086\u5BFA\u55E3\u56DB\u4F3A\u4F3C\u9972\u5DF3\u677E\u8038\u6002\u9882\u9001\u5B8B\u8BBC\u8BF5\u641C\u8258\u64DE\u55FD\u82CF\u9165\u4FD7\u7D20\u901F\u7C9F\u50F3\u5851\u6EAF\u5BBF\u8BC9\u8083\u9178\u849C\u7B97\u867D\u968B\u968F\u7EE5\u9AD3\u788E\u5C81\u7A57\u9042\u96A7\u795F\u5B59\u635F\u7B0B\u84D1\u68AD\u5506\u7F29\u7410\u7D22\u9501\u6240\u584C\u4ED6\u5B83\u5979\u5854\"],[\"cc40\",\"\u85F9\u85FA\u85FC\u85FD\u85FE\u8600\",4,\"\u8606\",10,\"\u8612\u8613\u8614\u8615\u8617\",15,\"\u8628\u862A\",13,\"\u8639\u863A\u863B\u863D\u863E\u863F\u8640\"],[\"cc80\",\"\u8641\",11,\"\u8652\u8653\u8655\",4,\"\u865B\u865C\u865D\u865F\u8660\u8661\u8663\",7,\"\u736D\u631E\u8E4B\u8E0F\u80CE\u82D4\u62AC\u53F0\u6CF0\u915E\u592A\u6001\u6C70\u574D\u644A\u8D2A\u762B\u6EE9\u575B\u6A80\u75F0\u6F6D\u8C2D\u8C08\u5766\u6BEF\u8892\u78B3\u63A2\u53F9\u70AD\u6C64\u5858\u642A\u5802\u68E0\u819B\u5510\u7CD6\u5018\u8EBA\u6DCC\u8D9F\u70EB\u638F\u6D9B\u6ED4\u7EE6\u8404\u6843\u9003\u6DD8\u9676\u8BA8\u5957\u7279\u85E4\u817E\u75BC\u8A8A\u68AF\u5254\u8E22\u9511\u63D0\u9898\u8E44\u557C\u4F53\u66FF\u568F\u60D5\u6D95\u5243\u5C49\u5929\u6DFB\u586B\u7530\u751C\u606C\u8214\u8146\u6311\u6761\u8FE2\u773A\u8DF3\u8D34\u94C1\u5E16\u5385\u542C\u70C3\"],[\"cd40\",\"\u866D\u866F\u8670\u8672\",6,\"\u8683\",6,\"\u868E\",4,\"\u8694\u8696\",5,\"\u869E\",4,\"\u86A5\u86A6\u86AB\u86AD\u86AE\u86B2\u86B3\u86B7\u86B8\u86B9\u86BB\",4,\"\u86C1\u86C2\u86C3\u86C5\u86C8\u86CC\u86CD\u86D2\u86D3\u86D5\u86D6\u86D7\u86DA\u86DC\"],[\"cd80\",\"\u86DD\u86E0\u86E1\u86E2\u86E3\u86E5\u86E6\u86E7\u86E8\u86EA\u86EB\u86EC\u86EF\u86F5\u86F6\u86F7\u86FA\u86FB\u86FC\u86FD\u86FF\u8701\u8704\u8705\u8706\u870B\u870C\u870E\u870F\u8710\u8711\u8714\u8716\u6C40\u5EF7\u505C\u4EAD\u5EAD\u633A\u8247\u901A\u6850\u916E\u77B3\u540C\u94DC\u5F64\u7AE5\u6876\u6345\u7B52\u7EDF\u75DB\u5077\u6295\u5934\u900F\u51F8\u79C3\u7A81\u56FE\u5F92\u9014\u6D82\u5C60\u571F\u5410\u5154\u6E4D\u56E2\u63A8\u9893\u817F\u8715\u892A\u9000\u541E\u5C6F\u81C0\u62D6\u6258\u8131\u9E35\u9640\u9A6E\u9A7C\u692D\u59A5\u62D3\u553E\u6316\u54C7\u86D9\u6D3C\u5A03\u74E6\u889C\u6B6A\u5916\u8C4C\u5F2F\u6E7E\u73A9\u987D\u4E38\u70F7\u5B8C\u7897\u633D\u665A\u7696\u60CB\u5B9B\u5A49\u4E07\u8155\u6C6A\u738B\u4EA1\u6789\u7F51\u5F80\u65FA\u671B\u5FD8\u5984\u5A01\"],[\"ce40\",\"\u8719\u871B\u871D\u871F\u8720\u8724\u8726\u8727\u8728\u872A\u872B\u872C\u872D\u872F\u8730\u8732\u8733\u8735\u8736\u8738\u8739\u873A\u873C\u873D\u8740\",6,\"\u874A\u874B\u874D\u874F\u8750\u8751\u8752\u8754\u8755\u8756\u8758\u875A\",5,\"\u8761\u8762\u8766\",7,\"\u876F\u8771\u8772\u8773\u8775\"],[\"ce80\",\"\u8777\u8778\u8779\u877A\u877F\u8780\u8781\u8784\u8786\u8787\u8789\u878A\u878C\u878E\",4,\"\u8794\u8795\u8796\u8798\",6,\"\u87A0\",4,\"\u5DCD\u5FAE\u5371\u97E6\u8FDD\u6845\u56F4\u552F\u60DF\u4E3A\u6F4D\u7EF4\u82C7\u840E\u59D4\u4F1F\u4F2A\u5C3E\u7EAC\u672A\u851A\u5473\u754F\u80C3\u5582\u9B4F\u4F4D\u6E2D\u8C13\u5C09\u6170\u536B\u761F\u6E29\u868A\u6587\u95FB\u7EB9\u543B\u7A33\u7D0A\u95EE\u55E1\u7FC1\u74EE\u631D\u8717\u6DA1\u7A9D\u6211\u65A1\u5367\u63E1\u6C83\u5DEB\u545C\u94A8\u4E4C\u6C61\u8BEC\u5C4B\u65E0\u829C\u68A7\u543E\u5434\u6BCB\u6B66\u4E94\u6342\u5348\u821E\u4F0D\u4FAE\u575E\u620A\u96FE\u6664\u7269\u52FF\u52A1\u609F\u8BEF\u6614\u7199\u6790\u897F\u7852\u77FD\u6670\u563B\u5438\u9521\u727A\"],[\"cf40\",\"\u87A5\u87A6\u87A7\u87A9\u87AA\u87AE\u87B0\u87B1\u87B2\u87B4\u87B6\u87B7\u87B8\u87B9\u87BB\u87BC\u87BE\u87BF\u87C1\",4,\"\u87C7\u87C8\u87C9\u87CC\",4,\"\u87D4\",6,\"\u87DC\u87DD\u87DE\u87DF\u87E1\u87E2\u87E3\u87E4\u87E6\u87E7\u87E8\u87E9\u87EB\u87EC\u87ED\u87EF\",9],[\"cf80\",\"\u87FA\u87FB\u87FC\u87FD\u87FF\u8800\u8801\u8802\u8804\",5,\"\u880B\",7,\"\u8814\u8817\u8818\u8819\u881A\u881C\",4,\"\u8823\u7A00\u606F\u5E0C\u6089\u819D\u5915\u60DC\u7184\u70EF\u6EAA\u6C50\u7280\u6A84\u88AD\u5E2D\u4E60\u5AB3\u559C\u94E3\u6D17\u7CFB\u9699\u620F\u7EC6\u778E\u867E\u5323\u971E\u8F96\u6687\u5CE1\u4FA0\u72ED\u4E0B\u53A6\u590F\u5413\u6380\u9528\u5148\u4ED9\u9C9C\u7EA4\u54B8\u8D24\u8854\u8237\u95F2\u6D8E\u5F26\u5ACC\u663E\u9669\u73B0\u732E\u53BF\u817A\u9985\u7FA1\u5BAA\u9677\u9650\u7EBF\u76F8\u53A2\u9576\u9999\u7BB1\u8944\u6E58\u4E61\u7FD4\u7965\u8BE6\u60F3\u54CD\u4EAB\u9879\u5DF7\u6A61\u50CF\u5411\u8C61\u8427\u785D\u9704\u524A\u54EE\u56A3\u9500\u6D88\u5BB5\u6DC6\u6653\"],[\"d040\",\"\u8824\",13,\"\u8833\",5,\"\u883A\u883B\u883D\u883E\u883F\u8841\u8842\u8843\u8846\",5,\"\u884E\",5,\"\u8855\u8856\u8858\u885A\",6,\"\u8866\u8867\u886A\u886D\u886F\u8871\u8873\u8874\u8875\u8876\u8878\u8879\u887A\"],[\"d080\",\"\u887B\u887C\u8880\u8883\u8886\u8887\u8889\u888A\u888C\u888E\u888F\u8890\u8891\u8893\u8894\u8895\u8897\",4,\"\u889D\",4,\"\u88A3\u88A5\",5,\"\u5C0F\u5B5D\u6821\u8096\u5578\u7B11\u6548\u6954\u4E9B\u6B47\u874E\u978B\u534F\u631F\u643A\u90AA\u659C\u80C1\u8C10\u5199\u68B0\u5378\u87F9\u61C8\u6CC4\u6CFB\u8C22\u5C51\u85AA\u82AF\u950C\u6B23\u8F9B\u65B0\u5FFB\u5FC3\u4FE1\u8845\u661F\u8165\u7329\u60FA\u5174\u5211\u578B\u5F62\u90A2\u884C\u9192\u5E78\u674F\u6027\u59D3\u5144\u51F6\u80F8\u5308\u6C79\u96C4\u718A\u4F11\u4FEE\u7F9E\u673D\u55C5\u9508\u79C0\u8896\u7EE3\u589F\u620C\u9700\u865A\u5618\u987B\u5F90\u8BB8\u84C4\u9157\u53D9\u65ED\u5E8F\u755C\u6064\u7D6E\u5A7F\u7EEA\u7EED\u8F69\u55A7\u5BA3\u60AC\u65CB\u7384\"],[\"d140\",\"\u88AC\u88AE\u88AF\u88B0\u88B2\",4,\"\u88B8\u88B9\u88BA\u88BB\u88BD\u88BE\u88BF\u88C0\u88C3\u88C4\u88C7\u88C8\u88CA\u88CB\u88CC\u88CD\u88CF\u88D0\u88D1\u88D3\u88D6\u88D7\u88DA\",4,\"\u88E0\u88E1\u88E6\u88E7\u88E9\",6,\"\u88F2\u88F5\u88F6\u88F7\u88FA\u88FB\u88FD\u88FF\u8900\u8901\u8903\",5],[\"d180\",\"\u8909\u890B\",4,\"\u8911\u8914\",4,\"\u891C\",4,\"\u8922\u8923\u8924\u8926\u8927\u8928\u8929\u892C\u892D\u892E\u892F\u8931\u8932\u8933\u8935\u8937\u9009\u7663\u7729\u7EDA\u9774\u859B\u5B66\u7A74\u96EA\u8840\u52CB\u718F\u5FAA\u65EC\u8BE2\u5BFB\u9A6F\u5DE1\u6B89\u6C5B\u8BAD\u8BAF\u900A\u8FC5\u538B\u62BC\u9E26\u9E2D\u5440\u4E2B\u82BD\u7259\u869C\u5D16\u8859\u6DAF\u96C5\u54D1\u4E9A\u8BB6\u7109\u54BD\u9609\u70DF\u6DF9\u76D0\u4E25\u7814\u8712\u5CA9\u5EF6\u8A00\u989C\u960E\u708E\u6CBF\u5944\u63A9\u773C\u884D\u6F14\u8273\u5830\u71D5\u538C\u781A\u96C1\u5501\u5F66\u7130\u5BB4\u8C1A\u9A8C\u6B83\u592E\u9E2F\u79E7\u6768\u626C\u4F6F\u75A1\u7F8A\u6D0B\u9633\u6C27\u4EF0\u75D2\u517B\u6837\u6F3E\u9080\u8170\u5996\u7476\"],[\"d240\",\"\u8938\",8,\"\u8942\u8943\u8945\",24,\"\u8960\",5,\"\u8967\",19,\"\u897C\"],[\"d280\",\"\u897D\u897E\u8980\u8982\u8984\u8985\u8987\",26,\"\u6447\u5C27\u9065\u7A91\u8C23\u59DA\u54AC\u8200\u836F\u8981\u8000\u6930\u564E\u8036\u7237\u91CE\u51B6\u4E5F\u9875\u6396\u4E1A\u53F6\u66F3\u814B\u591C\u6DB2\u4E00\u58F9\u533B\u63D6\u94F1\u4F9D\u4F0A\u8863\u9890\u5937\u9057\u79FB\u4EEA\u80F0\u7591\u6C82\u5B9C\u59E8\u5F5D\u6905\u8681\u501A\u5DF2\u4E59\u77E3\u4EE5\u827A\u6291\u6613\u9091\u5C79\u4EBF\u5F79\u81C6\u9038\u8084\u75AB\u4EA6\u88D4\u610F\u6BC5\u5FC6\u4E49\u76CA\u6EA2\u8BE3\u8BAE\u8C0A\u8BD1\u5F02\u7FFC\u7FCC\u7ECE\u8335\u836B\u56E0\u6BB7\u97F3\u9634\u59FB\u541F\u94F6\u6DEB\u5BC5\u996E\u5C39\u5F15\u9690\"],[\"d340\",\"\u89A2\",30,\"\u89C3\u89CD\u89D3\u89D4\u89D5\u89D7\u89D8\u89D9\u89DB\u89DD\u89DF\u89E0\u89E1\u89E2\u89E4\u89E7\u89E8\u89E9\u89EA\u89EC\u89ED\u89EE\u89F0\u89F1\u89F2\u89F4\",6],[\"d380\",\"\u89FB\",4,\"\u8A01\",5,\"\u8A08\",21,\"\u5370\u82F1\u6A31\u5A74\u9E70\u5E94\u7F28\u83B9\u8424\u8425\u8367\u8747\u8FCE\u8D62\u76C8\u5F71\u9896\u786C\u6620\u54DF\u62E5\u4F63\u81C3\u75C8\u5EB8\u96CD\u8E0A\u86F9\u548F\u6CF3\u6D8C\u6C38\u607F\u52C7\u7528\u5E7D\u4F18\u60A0\u5FE7\u5C24\u7531\u90AE\u94C0\u72B9\u6CB9\u6E38\u9149\u6709\u53CB\u53F3\u4F51\u91C9\u8BF1\u53C8\u5E7C\u8FC2\u6DE4\u4E8E\u76C2\u6986\u865E\u611A\u8206\u4F59\u4FDE\u903E\u9C7C\u6109\u6E1D\u6E14\u9685\u4E88\u5A31\u96E8\u4E0E\u5C7F\u79B9\u5B87\u8BED\u7FBD\u7389\u57DF\u828B\u90C1\u5401\u9047\u55BB\u5CEA\u5FA1\u6108\u6B32\u72F1\u80B2\u8A89\"],[\"d440\",\"\u8A1E\",31,\"\u8A3F\",8,\"\u8A49\",21],[\"d480\",\"\u8A5F\",25,\"\u8A7A\",6,\"\u6D74\u5BD3\u88D5\u9884\u8C6B\u9A6D\u9E33\u6E0A\u51A4\u5143\u57A3\u8881\u539F\u63F4\u8F95\u56ED\u5458\u5706\u733F\u6E90\u7F18\u8FDC\u82D1\u613F\u6028\u9662\u66F0\u7EA6\u8D8A\u8DC3\u94A5\u5CB3\u7CA4\u6708\u60A6\u9605\u8018\u4E91\u90E7\u5300\u9668\u5141\u8FD0\u8574\u915D\u6655\u97F5\u5B55\u531D\u7838\u6742\u683D\u54C9\u707E\u5BB0\u8F7D\u518D\u5728\u54B1\u6512\u6682\u8D5E\u8D43\u810F\u846C\u906D\u7CDF\u51FF\u85FB\u67A3\u65E9\u6FA1\u86A4\u8E81\u566A\u9020\u7682\u7076\u71E5\u8D23\u62E9\u5219\u6CFD\u8D3C\u600E\u589E\u618E\u66FE\u8D60\u624E\u55B3\u6E23\u672D\u8F67\"],[\"d540\",\"\u8A81\",7,\"\u8A8B\",7,\"\u8A94\",46],[\"d580\",\"\u8AC3\",32,\"\u94E1\u95F8\u7728\u6805\u69A8\u548B\u4E4D\u70B8\u8BC8\u6458\u658B\u5B85\u7A84\u503A\u5BE8\u77BB\u6BE1\u8A79\u7C98\u6CBE\u76CF\u65A9\u8F97\u5D2D\u5C55\u8638\u6808\u5360\u6218\u7AD9\u6E5B\u7EFD\u6A1F\u7AE0\u5F70\u6F33\u5F20\u638C\u6DA8\u6756\u4E08\u5E10\u8D26\u4ED7\u80C0\u7634\u969C\u62DB\u662D\u627E\u6CBC\u8D75\u7167\u7F69\u5146\u8087\u53EC\u906E\u6298\u54F2\u86F0\u8F99\u8005\u9517\u8517\u8FD9\u6D59\u73CD\u659F\u771F\u7504\u7827\u81FB\u8D1E\u9488\u4FA6\u6795\u75B9\u8BCA\u9707\u632F\u9547\u9635\u84B8\u6323\u7741\u5F81\u72F0\u4E89\u6014\u6574\u62EF\u6B63\u653F\"],[\"d640\",\"\u8AE4\",34,\"\u8B08\",27],[\"d680\",\"\u8B24\u8B25\u8B27\",30,\"\u5E27\u75C7\u90D1\u8BC1\u829D\u679D\u652F\u5431\u8718\u77E5\u80A2\u8102\u6C41\u4E4B\u7EC7\u804C\u76F4\u690D\u6B96\u6267\u503C\u4F84\u5740\u6307\u6B62\u8DBE\u53EA\u65E8\u7EB8\u5FD7\u631A\u63B7\u81F3\u81F4\u7F6E\u5E1C\u5CD9\u5236\u667A\u79E9\u7A1A\u8D28\u7099\u75D4\u6EDE\u6CBB\u7A92\u4E2D\u76C5\u5FE0\u949F\u8877\u7EC8\u79CD\u80BF\u91CD\u4EF2\u4F17\u821F\u5468\u5DDE\u6D32\u8BCC\u7CA5\u8F74\u8098\u5E1A\u5492\u76B1\u5B99\u663C\u9AA4\u73E0\u682A\u86DB\u6731\u732A\u8BF8\u8BDB\u9010\u7AF9\u70DB\u716E\u62C4\u77A9\u5631\u4E3B\u8457\u67F1\u52A9\u86C0\u8D2E\u94F8\u7B51\"],[\"d740\",\"\u8B46\",31,\"\u8B67\",4,\"\u8B6D\",25],[\"d780\",\"\u8B87\",24,\"\u8BAC\u8BB1\u8BBB\u8BC7\u8BD0\u8BEA\u8C09\u8C1E\u4F4F\u6CE8\u795D\u9A7B\u6293\u722A\u62FD\u4E13\u7816\u8F6C\u64B0\u8D5A\u7BC6\u6869\u5E84\u88C5\u5986\u649E\u58EE\u72B6\u690E\u9525\u8FFD\u8D58\u5760\u7F00\u8C06\u51C6\u6349\u62D9\u5353\u684C\u7422\u8301\u914C\u5544\u7740\u707C\u6D4A\u5179\u54A8\u8D44\u59FF\u6ECB\u6DC4\u5B5C\u7D2B\u4ED4\u7C7D\u6ED3\u5B50\u81EA\u6E0D\u5B57\u9B03\u68D5\u8E2A\u5B97\u7EFC\u603B\u7EB5\u90B9\u8D70\u594F\u63CD\u79DF\u8DB3\u5352\u65CF\u7956\u8BC5\u963B\u7EC4\u94BB\u7E82\u5634\u9189\u6700\u7F6A\u5C0A\u9075\u6628\u5DE6\u4F50\u67DE\u505A\u4F5C\u5750\u5EA7\"],[\"d840\",\"\u8C38\",8,\"\u8C42\u8C43\u8C44\u8C45\u8C48\u8C4A\u8C4B\u8C4D\",7,\"\u8C56\u8C57\u8C58\u8C59\u8C5B\",5,\"\u8C63\",6,\"\u8C6C\",6,\"\u8C74\u8C75\u8C76\u8C77\u8C7B\",6,\"\u8C83\u8C84\u8C86\u8C87\"],[\"d880\",\"\u8C88\u8C8B\u8C8D\",6,\"\u8C95\u8C96\u8C97\u8C99\",20,\"\u4E8D\u4E0C\u5140\u4E10\u5EFF\u5345\u4E15\u4E98\u4E1E\u9B32\u5B6C\u5669\u4E28\u79BA\u4E3F\u5315\u4E47\u592D\u723B\u536E\u6C10\u56DF\u80E4\u9997\u6BD3\u777E\u9F17\u4E36\u4E9F\u9F10\u4E5C\u4E69\u4E93\u8288\u5B5B\u556C\u560F\u4EC4\u538D\u539D\u53A3\u53A5\u53AE\u9765\u8D5D\u531A\u53F5\u5326\u532E\u533E\u8D5C\u5366\u5363\u5202\u5208\u520E\u522D\u5233\u523F\u5240\u524C\u525E\u5261\u525C\u84AF\u527D\u5282\u5281\u5290\u5293\u5182\u7F54\u4EBB\u4EC3\u4EC9\u4EC2\u4EE8\u4EE1\u4EEB\u4EDE\u4F1B\u4EF3\u4F22\u4F64\u4EF5\u4F25\u4F27\u4F09\u4F2B\u4F5E\u4F67\u6538\u4F5A\u4F5D\"],[\"d940\",\"\u8CAE\",62],[\"d980\",\"\u8CED\",32,\"\u4F5F\u4F57\u4F32\u4F3D\u4F76\u4F74\u4F91\u4F89\u4F83\u4F8F\u4F7E\u4F7B\u4FAA\u4F7C\u4FAC\u4F94\u4FE6\u4FE8\u4FEA\u4FC5\u4FDA\u4FE3\u4FDC\u4FD1\u4FDF\u4FF8\u5029\u504C\u4FF3\u502C\u500F\u502E\u502D\u4FFE\u501C\u500C\u5025\u5028\u507E\u5043\u5055\u5048\u504E\u506C\u507B\u50A5\u50A7\u50A9\u50BA\u50D6\u5106\u50ED\u50EC\u50E6\u50EE\u5107\u510B\u4EDD\u6C3D\u4F58\u4F65\u4FCE\u9FA0\u6C46\u7C74\u516E\u5DFD\u9EC9\u9998\u5181\u5914\u52F9\u530D\u8A07\u5310\u51EB\u5919\u5155\u4EA0\u5156\u4EB3\u886E\u88A4\u4EB5\u8114\u88D2\u7980\u5B34\u8803\u7FB8\u51AB\u51B1\u51BD\u51BC\"],[\"da40\",\"\u8D0E\",14,\"\u8D20\u8D51\u8D52\u8D57\u8D5F\u8D65\u8D68\u8D69\u8D6A\u8D6C\u8D6E\u8D6F\u8D71\u8D72\u8D78\",8,\"\u8D82\u8D83\u8D86\u8D87\u8D88\u8D89\u8D8C\",4,\"\u8D92\u8D93\u8D95\",9,\"\u8DA0\u8DA1\"],[\"da80\",\"\u8DA2\u8DA4\",12,\"\u8DB2\u8DB6\u8DB7\u8DB9\u8DBB\u8DBD\u8DC0\u8DC1\u8DC2\u8DC5\u8DC7\u8DC8\u8DC9\u8DCA\u8DCD\u8DD0\u8DD2\u8DD3\u8DD4\u51C7\u5196\u51A2\u51A5\u8BA0\u8BA6\u8BA7\u8BAA\u8BB4\u8BB5\u8BB7\u8BC2\u8BC3\u8BCB\u8BCF\u8BCE\u8BD2\u8BD3\u8BD4\u8BD6\u8BD8\u8BD9\u8BDC\u8BDF\u8BE0\u8BE4\u8BE8\u8BE9\u8BEE\u8BF0\u8BF3\u8BF6\u8BF9\u8BFC\u8BFF\u8C00\u8C02\u8C04\u8C07\u8C0C\u8C0F\u8C11\u8C12\u8C14\u8C15\u8C16\u8C19\u8C1B\u8C18\u8C1D\u8C1F\u8C20\u8C21\u8C25\u8C27\u8C2A\u8C2B\u8C2E\u8C2F\u8C32\u8C33\u8C35\u8C36\u5369\u537A\u961D\u9622\u9621\u9631\u962A\u963D\u963C\u9642\u9649\u9654\u965F\u9667\u966C\u9672\u9674\u9688\u968D\u9697\u96B0\u9097\u909B\u909D\u9099\u90AC\u90A1\u90B4\u90B3\u90B6\u90BA\"],[\"db40\",\"\u8DD5\u8DD8\u8DD9\u8DDC\u8DE0\u8DE1\u8DE2\u8DE5\u8DE6\u8DE7\u8DE9\u8DED\u8DEE\u8DF0\u8DF1\u8DF2\u8DF4\u8DF6\u8DFC\u8DFE\",6,\"\u8E06\u8E07\u8E08\u8E0B\u8E0D\u8E0E\u8E10\u8E11\u8E12\u8E13\u8E15\",7,\"\u8E20\u8E21\u8E24\",4,\"\u8E2B\u8E2D\u8E30\u8E32\u8E33\u8E34\u8E36\u8E37\u8E38\u8E3B\u8E3C\u8E3E\"],[\"db80\",\"\u8E3F\u8E43\u8E45\u8E46\u8E4C\",4,\"\u8E53\",5,\"\u8E5A\",11,\"\u8E67\u8E68\u8E6A\u8E6B\u8E6E\u8E71\u90B8\u90B0\u90CF\u90C5\u90BE\u90D0\u90C4\u90C7\u90D3\u90E6\u90E2\u90DC\u90D7\u90DB\u90EB\u90EF\u90FE\u9104\u9122\u911E\u9123\u9131\u912F\u9139\u9143\u9146\u520D\u5942\u52A2\u52AC\u52AD\u52BE\u54FF\u52D0\u52D6\u52F0\u53DF\u71EE\u77CD\u5EF4\u51F5\u51FC\u9B2F\u53B6\u5F01\u755A\u5DEF\u574C\u57A9\u57A1\u587E\u58BC\u58C5\u58D1\u5729\u572C\u572A\u5733\u5739\u572E\u572F\u575C\u573B\u5742\u5769\u5785\u576B\u5786\u577C\u577B\u5768\u576D\u5776\u5773\u57AD\u57A4\u578C\u57B2\u57CF\u57A7\u57B4\u5793\u57A0\u57D5\u57D8\u57DA\u57D9\u57D2\u57B8\u57F4\u57EF\u57F8\u57E4\u57DD\"],[\"dc40\",\"\u8E73\u8E75\u8E77\",4,\"\u8E7D\u8E7E\u8E80\u8E82\u8E83\u8E84\u8E86\u8E88\",6,\"\u8E91\u8E92\u8E93\u8E95\",6,\"\u8E9D\u8E9F\",11,\"\u8EAD\u8EAE\u8EB0\u8EB1\u8EB3\",6,\"\u8EBB\",7],[\"dc80\",\"\u8EC3\",10,\"\u8ECF\",21,\"\u580B\u580D\u57FD\u57ED\u5800\u581E\u5819\u5844\u5820\u5865\u586C\u5881\u5889\u589A\u5880\u99A8\u9F19\u61FF\u8279\u827D\u827F\u828F\u828A\u82A8\u8284\u828E\u8291\u8297\u8299\u82AB\u82B8\u82BE\u82B0\u82C8\u82CA\u82E3\u8298\u82B7\u82AE\u82CB\u82CC\u82C1\u82A9\u82B4\u82A1\u82AA\u829F\u82C4\u82CE\u82A4\u82E1\u8309\u82F7\u82E4\u830F\u8307\u82DC\u82F4\u82D2\u82D8\u830C\u82FB\u82D3\u8311\u831A\u8306\u8314\u8315\u82E0\u82D5\u831C\u8351\u835B\u835C\u8308\u8392\u833C\u8334\u8331\u839B\u835E\u832F\u834F\u8347\u8343\u835F\u8340\u8317\u8360\u832D\u833A\u8333\u8366\u8365\"],[\"dd40\",\"\u8EE5\",62],[\"dd80\",\"\u8F24\",32,\"\u8368\u831B\u8369\u836C\u836A\u836D\u836E\u83B0\u8378\u83B3\u83B4\u83A0\u83AA\u8393\u839C\u8385\u837C\u83B6\u83A9\u837D\u83B8\u837B\u8398\u839E\u83A8\u83BA\u83BC\u83C1\u8401\u83E5\u83D8\u5807\u8418\u840B\u83DD\u83FD\u83D6\u841C\u8438\u8411\u8406\u83D4\u83DF\u840F\u8403\u83F8\u83F9\u83EA\u83C5\u83C0\u8426\u83F0\u83E1\u845C\u8451\u845A\u8459\u8473\u8487\u8488\u847A\u8489\u8478\u843C\u8446\u8469\u8476\u848C\u848E\u8431\u846D\u84C1\u84CD\u84D0\u84E6\u84BD\u84D3\u84CA\u84BF\u84BA\u84E0\u84A1\u84B9\u84B4\u8497\u84E5\u84E3\u850C\u750D\u8538\u84F0\u8539\u851F\u853A\"],[\"de40\",\"\u8F45\",32,\"\u8F6A\u8F80\u8F8C\u8F92\u8F9D\u8FA0\u8FA1\u8FA2\u8FA4\u8FA5\u8FA6\u8FA7\u8FAA\u8FAC\u8FAD\u8FAE\u8FAF\u8FB2\u8FB3\u8FB4\u8FB5\u8FB7\u8FB8\u8FBA\u8FBB\u8FBC\u8FBF\u8FC0\u8FC3\u8FC6\"],[\"de80\",\"\u8FC9\",4,\"\u8FCF\u8FD2\u8FD6\u8FD7\u8FDA\u8FE0\u8FE1\u8FE3\u8FE7\u8FEC\u8FEF\u8FF1\u8FF2\u8FF4\u8FF5\u8FF6\u8FFA\u8FFB\u8FFC\u8FFE\u8FFF\u9007\u9008\u900C\u900E\u9013\u9015\u9018\u8556\u853B\u84FF\u84FC\u8559\u8548\u8568\u8564\u855E\u857A\u77A2\u8543\u8572\u857B\u85A4\u85A8\u8587\u858F\u8579\u85AE\u859C\u8585\u85B9\u85B7\u85B0\u85D3\u85C1\u85DC\u85FF\u8627\u8605\u8629\u8616\u863C\u5EFE\u5F08\u593C\u5941\u8037\u5955\u595A\u5958\u530F\u5C22\u5C25\u5C2C\u5C34\u624C\u626A\u629F\u62BB\u62CA\u62DA\u62D7\u62EE\u6322\u62F6\u6339\u634B\u6343\u63AD\u63F6\u6371\u637A\u638E\u63B4\u636D\u63AC\u638A\u6369\u63AE\u63BC\u63F2\u63F8\u63E0\u63FF\u63C4\u63DE\u63CE\u6452\u63C6\u63BE\u6445\u6441\u640B\u641B\u6420\u640C\u6426\u6421\u645E\u6484\u646D\u6496\"],[\"df40\",\"\u9019\u901C\u9023\u9024\u9025\u9027\",5,\"\u9030\",4,\"\u9037\u9039\u903A\u903D\u903F\u9040\u9043\u9045\u9046\u9048\",4,\"\u904E\u9054\u9055\u9056\u9059\u905A\u905C\",5,\"\u9064\u9066\u9067\u9069\u906A\u906B\u906C\u906F\",4,\"\u9076\",6,\"\u907E\u9081\"],[\"df80\",\"\u9084\u9085\u9086\u9087\u9089\u908A\u908C\",4,\"\u9092\u9094\u9096\u9098\u909A\u909C\u909E\u909F\u90A0\u90A4\u90A5\u90A7\u90A8\u90A9\u90AB\u90AD\u90B2\u90B7\u90BC\u90BD\u90BF\u90C0\u647A\u64B7\u64B8\u6499\u64BA\u64C0\u64D0\u64D7\u64E4\u64E2\u6509\u6525\u652E\u5F0B\u5FD2\u7519\u5F11\u535F\u53F1\u53FD\u53E9\u53E8\u53FB\u5412\u5416\u5406\u544B\u5452\u5453\u5454\u5456\u5443\u5421\u5457\u5459\u5423\u5432\u5482\u5494\u5477\u5471\u5464\u549A\u549B\u5484\u5476\u5466\u549D\u54D0\u54AD\u54C2\u54B4\u54D2\u54A7\u54A6\u54D3\u54D4\u5472\u54A3\u54D5\u54BB\u54BF\u54CC\u54D9\u54DA\u54DC\u54A9\u54AA\u54A4\u54DD\u54CF\u54DE\u551B\u54E7\u5520\u54FD\u5514\u54F3\u5522\u5523\u550F\u5511\u5527\u552A\u5567\u558F\u55B5\u5549\u556D\u5541\u5555\u553F\u5550\u553C\"],[\"e040\",\"\u90C2\u90C3\u90C6\u90C8\u90C9\u90CB\u90CC\u90CD\u90D2\u90D4\u90D5\u90D6\u90D8\u90D9\u90DA\u90DE\u90DF\u90E0\u90E3\u90E4\u90E5\u90E9\u90EA\u90EC\u90EE\u90F0\u90F1\u90F2\u90F3\u90F5\u90F6\u90F7\u90F9\u90FA\u90FB\u90FC\u90FF\u9100\u9101\u9103\u9105\",19,\"\u911A\u911B\u911C\"],[\"e080\",\"\u911D\u911F\u9120\u9121\u9124\",10,\"\u9130\u9132\",6,\"\u913A\",8,\"\u9144\u5537\u5556\u5575\u5576\u5577\u5533\u5530\u555C\u558B\u55D2\u5583\u55B1\u55B9\u5588\u5581\u559F\u557E\u55D6\u5591\u557B\u55DF\u55BD\u55BE\u5594\u5599\u55EA\u55F7\u55C9\u561F\u55D1\u55EB\u55EC\u55D4\u55E6\u55DD\u55C4\u55EF\u55E5\u55F2\u55F3\u55CC\u55CD\u55E8\u55F5\u55E4\u8F94\u561E\u5608\u560C\u5601\u5624\u5623\u55FE\u5600\u5627\u562D\u5658\u5639\u5657\u562C\u564D\u5662\u5659\u565C\u564C\u5654\u5686\u5664\u5671\u566B\u567B\u567C\u5685\u5693\u56AF\u56D4\u56D7\u56DD\u56E1\u56F5\u56EB\u56F9\u56FF\u5704\u570A\u5709\u571C\u5E0F\u5E19\u5E14\u5E11\u5E31\u5E3B\u5E3C\"],[\"e140\",\"\u9145\u9147\u9148\u9151\u9153\u9154\u9155\u9156\u9158\u9159\u915B\u915C\u915F\u9160\u9166\u9167\u9168\u916B\u916D\u9173\u917A\u917B\u917C\u9180\",4,\"\u9186\u9188\u918A\u918E\u918F\u9193\",6,\"\u919C\",5,\"\u91A4\",5,\"\u91AB\u91AC\u91B0\u91B1\u91B2\u91B3\u91B6\u91B7\u91B8\u91B9\u91BB\"],[\"e180\",\"\u91BC\",10,\"\u91C8\u91CB\u91D0\u91D2\",9,\"\u91DD\",8,\"\u5E37\u5E44\u5E54\u5E5B\u5E5E\u5E61\u5C8C\u5C7A\u5C8D\u5C90\u5C96\u5C88\u5C98\u5C99\u5C91\u5C9A\u5C9C\u5CB5\u5CA2\u5CBD\u5CAC\u5CAB\u5CB1\u5CA3\u5CC1\u5CB7\u5CC4\u5CD2\u5CE4\u5CCB\u5CE5\u5D02\u5D03\u5D27\u5D26\u5D2E\u5D24\u5D1E\u5D06\u5D1B\u5D58\u5D3E\u5D34\u5D3D\u5D6C\u5D5B\u5D6F\u5D5D\u5D6B\u5D4B\u5D4A\u5D69\u5D74\u5D82\u5D99\u5D9D\u8C73\u5DB7\u5DC5\u5F73\u5F77\u5F82\u5F87\u5F89\u5F8C\u5F95\u5F99\u5F9C\u5FA8\u5FAD\u5FB5\u5FBC\u8862\u5F61\u72AD\u72B0\u72B4\u72B7\u72B8\u72C3\u72C1\u72CE\u72CD\u72D2\u72E8\u72EF\u72E9\u72F2\u72F4\u72F7\u7301\u72F3\u7303\u72FA\"],[\"e240\",\"\u91E6\",62],[\"e280\",\"\u9225\",32,\"\u72FB\u7317\u7313\u7321\u730A\u731E\u731D\u7315\u7322\u7339\u7325\u732C\u7338\u7331\u7350\u734D\u7357\u7360\u736C\u736F\u737E\u821B\u5925\u98E7\u5924\u5902\u9963\u9967\",5,\"\u9974\u9977\u997D\u9980\u9984\u9987\u998A\u998D\u9990\u9991\u9993\u9994\u9995\u5E80\u5E91\u5E8B\u5E96\u5EA5\u5EA0\u5EB9\u5EB5\u5EBE\u5EB3\u8D53\u5ED2\u5ED1\u5EDB\u5EE8\u5EEA\u81BA\u5FC4\u5FC9\u5FD6\u5FCF\u6003\u5FEE\u6004\u5FE1\u5FE4\u5FFE\u6005\u6006\u5FEA\u5FED\u5FF8\u6019\u6035\u6026\u601B\u600F\u600D\u6029\u602B\u600A\u603F\u6021\u6078\u6079\u607B\u607A\u6042\"],[\"e340\",\"\u9246\",45,\"\u9275\",16],[\"e380\",\"\u9286\",7,\"\u928F\",24,\"\u606A\u607D\u6096\u609A\u60AD\u609D\u6083\u6092\u608C\u609B\u60EC\u60BB\u60B1\u60DD\u60D8\u60C6\u60DA\u60B4\u6120\u6126\u6115\u6123\u60F4\u6100\u610E\u612B\u614A\u6175\u61AC\u6194\u61A7\u61B7\u61D4\u61F5\u5FDD\u96B3\u95E9\u95EB\u95F1\u95F3\u95F5\u95F6\u95FC\u95FE\u9603\u9604\u9606\u9608\u960A\u960B\u960C\u960D\u960F\u9612\u9615\u9616\u9617\u9619\u961A\u4E2C\u723F\u6215\u6C35\u6C54\u6C5C\u6C4A\u6CA3\u6C85\u6C90\u6C94\u6C8C\u6C68\u6C69\u6C74\u6C76\u6C86\u6CA9\u6CD0\u6CD4\u6CAD\u6CF7\u6CF8\u6CF1\u6CD7\u6CB2\u6CE0\u6CD6\u6CFA\u6CEB\u6CEE\u6CB1\u6CD3\u6CEF\u6CFE\"],[\"e440\",\"\u92A8\",5,\"\u92AF\",24,\"\u92C9\",31],[\"e480\",\"\u92E9\",32,\"\u6D39\u6D27\u6D0C\u6D43\u6D48\u6D07\u6D04\u6D19\u6D0E\u6D2B\u6D4D\u6D2E\u6D35\u6D1A\u6D4F\u6D52\u6D54\u6D33\u6D91\u6D6F\u6D9E\u6DA0\u6D5E\u6D93\u6D94\u6D5C\u6D60\u6D7C\u6D63\u6E1A\u6DC7\u6DC5\u6DDE\u6E0E\u6DBF\u6DE0\u6E11\u6DE6\u6DDD\u6DD9\u6E16\u6DAB\u6E0C\u6DAE\u6E2B\u6E6E\u6E4E\u6E6B\u6EB2\u6E5F\u6E86\u6E53\u6E54\u6E32\u6E25\u6E44\u6EDF\u6EB1\u6E98\u6EE0\u6F2D\u6EE2\u6EA5\u6EA7\u6EBD\u6EBB\u6EB7\u6ED7\u6EB4\u6ECF\u6E8F\u6EC2\u6E9F\u6F62\u6F46\u6F47\u6F24\u6F15\u6EF9\u6F2F\u6F36\u6F4B\u6F74\u6F2A\u6F09\u6F29\u6F89\u6F8D\u6F8C\u6F78\u6F72\u6F7C\u6F7A\u6FD1\"],[\"e540\",\"\u930A\",51,\"\u933F\",10],[\"e580\",\"\u934A\",31,\"\u936B\u6FC9\u6FA7\u6FB9\u6FB6\u6FC2\u6FE1\u6FEE\u6FDE\u6FE0\u6FEF\u701A\u7023\u701B\u7039\u7035\u704F\u705E\u5B80\u5B84\u5B95\u5B93\u5BA5\u5BB8\u752F\u9A9E\u6434\u5BE4\u5BEE\u8930\u5BF0\u8E47\u8B07\u8FB6\u8FD3\u8FD5\u8FE5\u8FEE\u8FE4\u8FE9\u8FE6\u8FF3\u8FE8\u9005\u9004\u900B\u9026\u9011\u900D\u9016\u9021\u9035\u9036\u902D\u902F\u9044\u9051\u9052\u9050\u9068\u9058\u9062\u905B\u66B9\u9074\u907D\u9082\u9088\u9083\u908B\u5F50\u5F57\u5F56\u5F58\u5C3B\u54AB\u5C50\u5C59\u5B71\u5C63\u5C66\u7FBC\u5F2A\u5F29\u5F2D\u8274\u5F3C\u9B3B\u5C6E\u5981\u5983\u598D\u59A9\u59AA\u59A3\"],[\"e640\",\"\u936C\",34,\"\u9390\",27],[\"e680\",\"\u93AC\",29,\"\u93CB\u93CC\u93CD\u5997\u59CA\u59AB\u599E\u59A4\u59D2\u59B2\u59AF\u59D7\u59BE\u5A05\u5A06\u59DD\u5A08\u59E3\u59D8\u59F9\u5A0C\u5A09\u5A32\u5A34\u5A11\u5A23\u5A13\u5A40\u5A67\u5A4A\u5A55\u5A3C\u5A62\u5A75\u80EC\u5AAA\u5A9B\u5A77\u5A7A\u5ABE\u5AEB\u5AB2\u5AD2\u5AD4\u5AB8\u5AE0\u5AE3\u5AF1\u5AD6\u5AE6\u5AD8\u5ADC\u5B09\u5B17\u5B16\u5B32\u5B37\u5B40\u5C15\u5C1C\u5B5A\u5B65\u5B73\u5B51\u5B53\u5B62\u9A75\u9A77\u9A78\u9A7A\u9A7F\u9A7D\u9A80\u9A81\u9A85\u9A88\u9A8A\u9A90\u9A92\u9A93\u9A96\u9A98\u9A9B\u9A9C\u9A9D\u9A9F\u9AA0\u9AA2\u9AA3\u9AA5\u9AA7\u7E9F\u7EA1\u7EA3\u7EA5\u7EA8\u7EA9\"],[\"e740\",\"\u93CE\",7,\"\u93D7\",54],[\"e780\",\"\u940E\",32,\"\u7EAD\u7EB0\u7EBE\u7EC0\u7EC1\u7EC2\u7EC9\u7ECB\u7ECC\u7ED0\u7ED4\u7ED7\u7EDB\u7EE0\u7EE1\u7EE8\u7EEB\u7EEE\u7EEF\u7EF1\u7EF2\u7F0D\u7EF6\u7EFA\u7EFB\u7EFE\u7F01\u7F02\u7F03\u7F07\u7F08\u7F0B\u7F0C\u7F0F\u7F11\u7F12\u7F17\u7F19\u7F1C\u7F1B\u7F1F\u7F21\",6,\"\u7F2A\u7F2B\u7F2C\u7F2D\u7F2F\",4,\"\u7F35\u5E7A\u757F\u5DDB\u753E\u9095\u738E\u7391\u73AE\u73A2\u739F\u73CF\u73C2\u73D1\u73B7\u73B3\u73C0\u73C9\u73C8\u73E5\u73D9\u987C\u740A\u73E9\u73E7\u73DE\u73BA\u73F2\u740F\u742A\u745B\u7426\u7425\u7428\u7430\u742E\u742C\"],[\"e840\",\"\u942F\",14,\"\u943F\",43,\"\u946C\u946D\u946E\u946F\"],[\"e880\",\"\u9470\",20,\"\u9491\u9496\u9498\u94C7\u94CF\u94D3\u94D4\u94DA\u94E6\u94FB\u951C\u9520\u741B\u741A\u7441\u745C\u7457\u7455\u7459\u7477\u746D\u747E\u749C\u748E\u7480\u7481\u7487\u748B\u749E\u74A8\u74A9\u7490\u74A7\u74D2\u74BA\u97EA\u97EB\u97EC\u674C\u6753\u675E\u6748\u6769\u67A5\u6787\u676A\u6773\u6798\u67A7\u6775\u67A8\u679E\u67AD\u678B\u6777\u677C\u67F0\u6809\u67D8\u680A\u67E9\u67B0\u680C\u67D9\u67B5\u67DA\u67B3\u67DD\u6800\u67C3\u67B8\u67E2\u680E\u67C1\u67FD\u6832\u6833\u6860\u6861\u684E\u6862\u6844\u6864\u6883\u681D\u6855\u6866\u6841\u6867\u6840\u683E\u684A\u6849\u6829\u68B5\u688F\u6874\u6877\u6893\u686B\u68C2\u696E\u68FC\u691F\u6920\u68F9\"],[\"e940\",\"\u9527\u9533\u953D\u9543\u9548\u954B\u9555\u955A\u9560\u956E\u9574\u9575\u9577\",7,\"\u9580\",42],[\"e980\",\"\u95AB\",32,\"\u6924\u68F0\u690B\u6901\u6957\u68E3\u6910\u6971\u6939\u6960\u6942\u695D\u6984\u696B\u6980\u6998\u6978\u6934\u69CC\u6987\u6988\u69CE\u6989\u6966\u6963\u6979\u699B\u69A7\u69BB\u69AB\u69AD\u69D4\u69B1\u69C1\u69CA\u69DF\u6995\u69E0\u698D\u69FF\u6A2F\u69ED\u6A17\u6A18\u6A65\u69F2\u6A44\u6A3E\u6AA0\u6A50\u6A5B\u6A35\u6A8E\u6A79\u6A3D\u6A28\u6A58\u6A7C\u6A91\u6A90\u6AA9\u6A97\u6AAB\u7337\u7352\u6B81\u6B82\u6B87\u6B84\u6B92\u6B93\u6B8D\u6B9A\u6B9B\u6BA1\u6BAA\u8F6B\u8F6D\u8F71\u8F72\u8F73\u8F75\u8F76\u8F78\u8F77\u8F79\u8F7A\u8F7C\u8F7E\u8F81\u8F82\u8F84\u8F87\u8F8B\"],[\"ea40\",\"\u95CC\",27,\"\u95EC\u95FF\u9607\u9613\u9618\u961B\u961E\u9620\u9623\",6,\"\u962B\u962C\u962D\u962F\u9630\u9637\u9638\u9639\u963A\u963E\u9641\u9643\u964A\u964E\u964F\u9651\u9652\u9653\u9656\u9657\"],[\"ea80\",\"\u9658\u9659\u965A\u965C\u965D\u965E\u9660\u9663\u9665\u9666\u966B\u966D\",4,\"\u9673\u9678\",12,\"\u9687\u9689\u968A\u8F8D\u8F8E\u8F8F\u8F98\u8F9A\u8ECE\u620B\u6217\u621B\u621F\u6222\u6221\u6225\u6224\u622C\u81E7\u74EF\u74F4\u74FF\u750F\u7511\u7513\u6534\u65EE\u65EF\u65F0\u660A\u6619\u6772\u6603\u6615\u6600\u7085\u66F7\u661D\u6634\u6631\u6636\u6635\u8006\u665F\u6654\u6641\u664F\u6656\u6661\u6657\u6677\u6684\u668C\u66A7\u669D\u66BE\u66DB\u66DC\u66E6\u66E9\u8D32\u8D33\u8D36\u8D3B\u8D3D\u8D40\u8D45\u8D46\u8D48\u8D49\u8D47\u8D4D\u8D55\u8D59\u89C7\u89CA\u89CB\u89CC\u89CE\u89CF\u89D0\u89D1\u726E\u729F\u725D\u7266\u726F\u727E\u727F\u7284\u728B\u728D\u728F\u7292\u6308\u6332\u63B0\"],[\"eb40\",\"\u968C\u968E\u9691\u9692\u9693\u9695\u9696\u969A\u969B\u969D\",9,\"\u96A8\",7,\"\u96B1\u96B2\u96B4\u96B5\u96B7\u96B8\u96BA\u96BB\u96BF\u96C2\u96C3\u96C8\u96CA\u96CB\u96D0\u96D1\u96D3\u96D4\u96D6\",9,\"\u96E1\",6,\"\u96EB\"],[\"eb80\",\"\u96EC\u96ED\u96EE\u96F0\u96F1\u96F2\u96F4\u96F5\u96F8\u96FA\u96FB\u96FC\u96FD\u96FF\u9702\u9703\u9705\u970A\u970B\u970C\u9710\u9711\u9712\u9714\u9715\u9717\",4,\"\u971D\u971F\u9720\u643F\u64D8\u8004\u6BEA\u6BF3\u6BFD\u6BF5\u6BF9\u6C05\u6C07\u6C06\u6C0D\u6C15\u6C18\u6C19\u6C1A\u6C21\u6C29\u6C24\u6C2A\u6C32\u6535\u6555\u656B\u724D\u7252\u7256\u7230\u8662\u5216\u809F\u809C\u8093\u80BC\u670A\u80BD\u80B1\u80AB\u80AD\u80B4\u80B7\u80E7\u80E8\u80E9\u80EA\u80DB\u80C2\u80C4\u80D9\u80CD\u80D7\u6710\u80DD\u80EB\u80F1\u80F4\u80ED\u810D\u810E\u80F2\u80FC\u6715\u8112\u8C5A\u8136\u811E\u812C\u8118\u8132\u8148\u814C\u8153\u8174\u8159\u815A\u8171\u8160\u8169\u817C\u817D\u816D\u8167\u584D\u5AB5\u8188\u8182\u8191\u6ED5\u81A3\u81AA\u81CC\u6726\u81CA\u81BB\"],[\"ec40\",\"\u9721\",8,\"\u972B\u972C\u972E\u972F\u9731\u9733\",4,\"\u973A\u973B\u973C\u973D\u973F\",18,\"\u9754\u9755\u9757\u9758\u975A\u975C\u975D\u975F\u9763\u9764\u9766\u9767\u9768\u976A\",7],[\"ec80\",\"\u9772\u9775\u9777\",4,\"\u977D\",7,\"\u9786\",4,\"\u978C\u978E\u978F\u9790\u9793\u9795\u9796\u9797\u9799\",4,\"\u81C1\u81A6\u6B24\u6B37\u6B39\u6B43\u6B46\u6B59\u98D1\u98D2\u98D3\u98D5\u98D9\u98DA\u6BB3\u5F40\u6BC2\u89F3\u6590\u9F51\u6593\u65BC\u65C6\u65C4\u65C3\u65CC\u65CE\u65D2\u65D6\u7080\u709C\u7096\u709D\u70BB\u70C0\u70B7\u70AB\u70B1\u70E8\u70CA\u7110\u7113\u7116\u712F\u7131\u7173\u715C\u7168\u7145\u7172\u714A\u7178\u717A\u7198\u71B3\u71B5\u71A8\u71A0\u71E0\u71D4\u71E7\u71F9\u721D\u7228\u706C\u7118\u7166\u71B9\u623E\u623D\u6243\u6248\u6249\u793B\u7940\u7946\u7949\u795B\u795C\u7953\u795A\u7962\u7957\u7960\u796F\u7967\u797A\u7985\u798A\u799A\u79A7\u79B3\u5FD1\u5FD0\"],[\"ed40\",\"\u979E\u979F\u97A1\u97A2\u97A4\",6,\"\u97AC\u97AE\u97B0\u97B1\u97B3\u97B5\",46],[\"ed80\",\"\u97E4\u97E5\u97E8\u97EE\",4,\"\u97F4\u97F7\",23,\"\u603C\u605D\u605A\u6067\u6041\u6059\u6063\u60AB\u6106\u610D\u615D\u61A9\u619D\u61CB\u61D1\u6206\u8080\u807F\u6C93\u6CF6\u6DFC\u77F6\u77F8\u7800\u7809\u7817\u7818\u7811\u65AB\u782D\u781C\u781D\u7839\u783A\u783B\u781F\u783C\u7825\u782C\u7823\u7829\u784E\u786D\u7856\u7857\u7826\u7850\u7847\u784C\u786A\u789B\u7893\u789A\u7887\u789C\u78A1\u78A3\u78B2\u78B9\u78A5\u78D4\u78D9\u78C9\u78EC\u78F2\u7905\u78F4\u7913\u7924\u791E\u7934\u9F9B\u9EF9\u9EFB\u9EFC\u76F1\u7704\u770D\u76F9\u7707\u7708\u771A\u7722\u7719\u772D\u7726\u7735\u7738\u7750\u7751\u7747\u7743\u775A\u7768\"],[\"ee40\",\"\u980F\",62],[\"ee80\",\"\u984E\",32,\"\u7762\u7765\u777F\u778D\u777D\u7780\u778C\u7791\u779F\u77A0\u77B0\u77B5\u77BD\u753A\u7540\u754E\u754B\u7548\u755B\u7572\u7579\u7583\u7F58\u7F61\u7F5F\u8A48\u7F68\u7F74\u7F71\u7F79\u7F81\u7F7E\u76CD\u76E5\u8832\u9485\u9486\u9487\u948B\u948A\u948C\u948D\u948F\u9490\u9494\u9497\u9495\u949A\u949B\u949C\u94A3\u94A4\u94AB\u94AA\u94AD\u94AC\u94AF\u94B0\u94B2\u94B4\u94B6\",4,\"\u94BC\u94BD\u94BF\u94C4\u94C8\",6,\"\u94D0\u94D1\u94D2\u94D5\u94D6\u94D7\u94D9\u94D8\u94DB\u94DE\u94DF\u94E0\u94E2\u94E4\u94E5\u94E7\u94E8\u94EA\"],[\"ef40\",\"\u986F\",5,\"\u988B\u988E\u9892\u9895\u9899\u98A3\u98A8\",37,\"\u98CF\u98D0\u98D4\u98D6\u98D7\u98DB\u98DC\u98DD\u98E0\",4],[\"ef80\",\"\u98E5\u98E6\u98E9\",30,\"\u94E9\u94EB\u94EE\u94EF\u94F3\u94F4\u94F5\u94F7\u94F9\u94FC\u94FD\u94FF\u9503\u9502\u9506\u9507\u9509\u950A\u950D\u950E\u950F\u9512\",4,\"\u9518\u951B\u951D\u951E\u951F\u9522\u952A\u952B\u9529\u952C\u9531\u9532\u9534\u9536\u9537\u9538\u953C\u953E\u953F\u9542\u9535\u9544\u9545\u9546\u9549\u954C\u954E\u954F\u9552\u9553\u9554\u9556\u9557\u9558\u9559\u955B\u955E\u955F\u955D\u9561\u9562\u9564\",8,\"\u956F\u9571\u9572\u9573\u953A\u77E7\u77EC\u96C9\u79D5\u79ED\u79E3\u79EB\u7A06\u5D47\u7A03\u7A02\u7A1E\u7A14\"],[\"f040\",\"\u9908\",4,\"\u990E\u990F\u9911\",28,\"\u992F\",26],[\"f080\",\"\u994A\",9,\"\u9956\",12,\"\u9964\u9966\u9973\u9978\u9979\u997B\u997E\u9982\u9983\u9989\u7A39\u7A37\u7A51\u9ECF\u99A5\u7A70\u7688\u768E\u7693\u7699\u76A4\u74DE\u74E0\u752C\u9E20\u9E22\u9E28\",4,\"\u9E32\u9E31\u9E36\u9E38\u9E37\u9E39\u9E3A\u9E3E\u9E41\u9E42\u9E44\u9E46\u9E47\u9E48\u9E49\u9E4B\u9E4C\u9E4E\u9E51\u9E55\u9E57\u9E5A\u9E5B\u9E5C\u9E5E\u9E63\u9E66\",6,\"\u9E71\u9E6D\u9E73\u7592\u7594\u7596\u75A0\u759D\u75AC\u75A3\u75B3\u75B4\u75B8\u75C4\u75B1\u75B0\u75C3\u75C2\u75D6\u75CD\u75E3\u75E8\u75E6\u75E4\u75EB\u75E7\u7603\u75F1\u75FC\u75FF\u7610\u7600\u7605\u760C\u7617\u760A\u7625\u7618\u7615\u7619\"],[\"f140\",\"\u998C\u998E\u999A\",10,\"\u99A6\u99A7\u99A9\",47],[\"f180\",\"\u99D9\",32,\"\u761B\u763C\u7622\u7620\u7640\u762D\u7630\u763F\u7635\u7643\u763E\u7633\u764D\u765E\u7654\u765C\u7656\u766B\u766F\u7FCA\u7AE6\u7A78\u7A79\u7A80\u7A86\u7A88\u7A95\u7AA6\u7AA0\u7AAC\u7AA8\u7AAD\u7AB3\u8864\u8869\u8872\u887D\u887F\u8882\u88A2\u88C6\u88B7\u88BC\u88C9\u88E2\u88CE\u88E3\u88E5\u88F1\u891A\u88FC\u88E8\u88FE\u88F0\u8921\u8919\u8913\u891B\u890A\u8934\u892B\u8936\u8941\u8966\u897B\u758B\u80E5\u76B2\u76B4\u77DC\u8012\u8014\u8016\u801C\u8020\u8022\u8025\u8026\u8027\u8029\u8028\u8031\u800B\u8035\u8043\u8046\u804D\u8052\u8069\u8071\u8983\u9878\u9880\u9883\"],[\"f240\",\"\u99FA\",62],[\"f280\",\"\u9A39\",32,\"\u9889\u988C\u988D\u988F\u9894\u989A\u989B\u989E\u989F\u98A1\u98A2\u98A5\u98A6\u864D\u8654\u866C\u866E\u867F\u867A\u867C\u867B\u86A8\u868D\u868B\u86AC\u869D\u86A7\u86A3\u86AA\u8693\u86A9\u86B6\u86C4\u86B5\u86CE\u86B0\u86BA\u86B1\u86AF\u86C9\u86CF\u86B4\u86E9\u86F1\u86F2\u86ED\u86F3\u86D0\u8713\u86DE\u86F4\u86DF\u86D8\u86D1\u8703\u8707\u86F8\u8708\u870A\u870D\u8709\u8723\u873B\u871E\u8725\u872E\u871A\u873E\u8748\u8734\u8731\u8729\u8737\u873F\u8782\u8722\u877D\u877E\u877B\u8760\u8770\u874C\u876E\u878B\u8753\u8763\u877C\u8764\u8759\u8765\u8793\u87AF\u87A8\u87D2\"],[\"f340\",\"\u9A5A\",17,\"\u9A72\u9A83\u9A89\u9A8D\u9A8E\u9A94\u9A95\u9A99\u9AA6\u9AA9\",6,\"\u9AB2\u9AB3\u9AB4\u9AB5\u9AB9\u9ABB\u9ABD\u9ABE\u9ABF\u9AC3\u9AC4\u9AC6\",4,\"\u9ACD\u9ACE\u9ACF\u9AD0\u9AD2\u9AD4\u9AD5\u9AD6\u9AD7\u9AD9\u9ADA\u9ADB\u9ADC\"],[\"f380\",\"\u9ADD\u9ADE\u9AE0\u9AE2\u9AE3\u9AE4\u9AE5\u9AE7\u9AE8\u9AE9\u9AEA\u9AEC\u9AEE\u9AF0\",8,\"\u9AFA\u9AFC\",6,\"\u9B04\u9B05\u9B06\u87C6\u8788\u8785\u87AD\u8797\u8783\u87AB\u87E5\u87AC\u87B5\u87B3\u87CB\u87D3\u87BD\u87D1\u87C0\u87CA\u87DB\u87EA\u87E0\u87EE\u8816\u8813\u87FE\u880A\u881B\u8821\u8839\u883C\u7F36\u7F42\u7F44\u7F45\u8210\u7AFA\u7AFD\u7B08\u7B03\u7B04\u7B15\u7B0A\u7B2B\u7B0F\u7B47\u7B38\u7B2A\u7B19\u7B2E\u7B31\u7B20\u7B25\u7B24\u7B33\u7B3E\u7B1E\u7B58\u7B5A\u7B45\u7B75\u7B4C\u7B5D\u7B60\u7B6E\u7B7B\u7B62\u7B72\u7B71\u7B90\u7BA6\u7BA7\u7BB8\u7BAC\u7B9D\u7BA8\u7B85\u7BAA\u7B9C\u7BA2\u7BAB\u7BB4\u7BD1\u7BC1\u7BCC\u7BDD\u7BDA\u7BE5\u7BE6\u7BEA\u7C0C\u7BFE\u7BFC\u7C0F\u7C16\u7C0B\"],[\"f440\",\"\u9B07\u9B09\",5,\"\u9B10\u9B11\u9B12\u9B14\",10,\"\u9B20\u9B21\u9B22\u9B24\",10,\"\u9B30\u9B31\u9B33\",7,\"\u9B3D\u9B3E\u9B3F\u9B40\u9B46\u9B4A\u9B4B\u9B4C\u9B4E\u9B50\u9B52\u9B53\u9B55\",5],[\"f480\",\"\u9B5B\",32,\"\u7C1F\u7C2A\u7C26\u7C38\u7C41\u7C40\u81FE\u8201\u8202\u8204\u81EC\u8844\u8221\u8222\u8223\u822D\u822F\u8228\u822B\u8238\u823B\u8233\u8234\u823E\u8244\u8249\u824B\u824F\u825A\u825F\u8268\u887E\u8885\u8888\u88D8\u88DF\u895E\u7F9D\u7F9F\u7FA7\u7FAF\u7FB0\u7FB2\u7C7C\u6549\u7C91\u7C9D\u7C9C\u7C9E\u7CA2\u7CB2\u7CBC\u7CBD\u7CC1\u7CC7\u7CCC\u7CCD\u7CC8\u7CC5\u7CD7\u7CE8\u826E\u66A8\u7FBF\u7FCE\u7FD5\u7FE5\u7FE1\u7FE6\u7FE9\u7FEE\u7FF3\u7CF8\u7D77\u7DA6\u7DAE\u7E47\u7E9B\u9EB8\u9EB4\u8D73\u8D84\u8D94\u8D91\u8DB1\u8D67\u8D6D\u8C47\u8C49\u914A\u9150\u914E\u914F\u9164\"],[\"f540\",\"\u9B7C\",62],[\"f580\",\"\u9BBB\",32,\"\u9162\u9161\u9170\u9169\u916F\u917D\u917E\u9172\u9174\u9179\u918C\u9185\u9190\u918D\u9191\u91A2\u91A3\u91AA\u91AD\u91AE\u91AF\u91B5\u91B4\u91BA\u8C55\u9E7E\u8DB8\u8DEB\u8E05\u8E59\u8E69\u8DB5\u8DBF\u8DBC\u8DBA\u8DC4\u8DD6\u8DD7\u8DDA\u8DDE\u8DCE\u8DCF\u8DDB\u8DC6\u8DEC\u8DF7\u8DF8\u8DE3\u8DF9\u8DFB\u8DE4\u8E09\u8DFD\u8E14\u8E1D\u8E1F\u8E2C\u8E2E\u8E23\u8E2F\u8E3A\u8E40\u8E39\u8E35\u8E3D\u8E31\u8E49\u8E41\u8E42\u8E51\u8E52\u8E4A\u8E70\u8E76\u8E7C\u8E6F\u8E74\u8E85\u8E8F\u8E94\u8E90\u8E9C\u8E9E\u8C78\u8C82\u8C8A\u8C85\u8C98\u8C94\u659B\u89D6\u89DE\u89DA\u89DC\"],[\"f640\",\"\u9BDC\",62],[\"f680\",\"\u9C1B\",32,\"\u89E5\u89EB\u89EF\u8A3E\u8B26\u9753\u96E9\u96F3\u96EF\u9706\u9701\u9708\u970F\u970E\u972A\u972D\u9730\u973E\u9F80\u9F83\u9F85\",5,\"\u9F8C\u9EFE\u9F0B\u9F0D\u96B9\u96BC\u96BD\u96CE\u96D2\u77BF\u96E0\u928E\u92AE\u92C8\u933E\u936A\u93CA\u938F\u943E\u946B\u9C7F\u9C82\u9C85\u9C86\u9C87\u9C88\u7A23\u9C8B\u9C8E\u9C90\u9C91\u9C92\u9C94\u9C95\u9C9A\u9C9B\u9C9E\",5,\"\u9CA5\",4,\"\u9CAB\u9CAD\u9CAE\u9CB0\",7,\"\u9CBA\u9CBB\u9CBC\u9CBD\u9CC4\u9CC5\u9CC6\u9CC7\u9CCA\u9CCB\"],[\"f740\",\"\u9C3C\",62],[\"f780\",\"\u9C7B\u9C7D\u9C7E\u9C80\u9C83\u9C84\u9C89\u9C8A\u9C8C\u9C8F\u9C93\u9C96\u9C97\u9C98\u9C99\u9C9D\u9CAA\u9CAC\u9CAF\u9CB9\u9CBE\",4,\"\u9CC8\u9CC9\u9CD1\u9CD2\u9CDA\u9CDB\u9CE0\u9CE1\u9CCC\",4,\"\u9CD3\u9CD4\u9CD5\u9CD7\u9CD8\u9CD9\u9CDC\u9CDD\u9CDF\u9CE2\u977C\u9785\u9791\u9792\u9794\u97AF\u97AB\u97A3\u97B2\u97B4\u9AB1\u9AB0\u9AB7\u9E58\u9AB6\u9ABA\u9ABC\u9AC1\u9AC0\u9AC5\u9AC2\u9ACB\u9ACC\u9AD1\u9B45\u9B43\u9B47\u9B49\u9B48\u9B4D\u9B51\u98E8\u990D\u992E\u9955\u9954\u9ADF\u9AE1\u9AE6\u9AEF\u9AEB\u9AFB\u9AED\u9AF9\u9B08\u9B0F\u9B13\u9B1F\u9B23\u9EBD\u9EBE\u7E3B\u9E82\u9E87\u9E88\u9E8B\u9E92\u93D6\u9E9D\u9E9F\u9EDB\u9EDC\u9EDD\u9EE0\u9EDF\u9EE2\u9EE9\u9EE7\u9EE5\u9EEA\u9EEF\u9F22\u9F2C\u9F2F\u9F39\u9F37\u9F3D\u9F3E\u9F44\"],[\"f840\",\"\u9CE3\",62],[\"f880\",\"\u9D22\",32],[\"f940\",\"\u9D43\",62],[\"f980\",\"\u9D82\",32],[\"fa40\",\"\u9DA3\",62],[\"fa80\",\"\u9DE2\",32],[\"fb40\",\"\u9E03\",27,\"\u9E24\u9E27\u9E2E\u9E30\u9E34\u9E3B\u9E3C\u9E40\u9E4D\u9E50\u9E52\u9E53\u9E54\u9E56\u9E59\u9E5D\u9E5F\u9E60\u9E61\u9E62\u9E65\u9E6E\u9E6F\u9E72\u9E74\",9,\"\u9E80\"],[\"fb80\",\"\u9E81\u9E83\u9E84\u9E85\u9E86\u9E89\u9E8A\u9E8C\",5,\"\u9E94\",8,\"\u9E9E\u9EA0\",5,\"\u9EA7\u9EA8\u9EA9\u9EAA\"],[\"fc40\",\"\u9EAB\",8,\"\u9EB5\u9EB6\u9EB7\u9EB9\u9EBA\u9EBC\u9EBF\",4,\"\u9EC5\u9EC6\u9EC7\u9EC8\u9ECA\u9ECB\u9ECC\u9ED0\u9ED2\u9ED3\u9ED5\u9ED6\u9ED7\u9ED9\u9EDA\u9EDE\u9EE1\u9EE3\u9EE4\u9EE6\u9EE8\u9EEB\u9EEC\u9EED\u9EEE\u9EF0\",8,\"\u9EFA\u9EFD\u9EFF\",6],[\"fc80\",\"\u9F06\",4,\"\u9F0C\u9F0F\u9F11\u9F12\u9F14\u9F15\u9F16\u9F18\u9F1A\",5,\"\u9F21\u9F23\",8,\"\u9F2D\u9F2E\u9F30\u9F31\"],[\"fd40\",\"\u9F32\",4,\"\u9F38\u9F3A\u9F3C\u9F3F\",4,\"\u9F45\",10,\"\u9F52\",38],[\"fd80\",\"\u9F79\",5,\"\u9F81\u9F82\u9F8D\",11,\"\u9F9C\u9F9D\u9F9E\u9FA1\",4,\"\uF92C\uF979\uF995\uF9E7\uF9F1\"],[\"fe40\",\"\uFA0C\uFA0D\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA18\uFA1F\uFA20\uFA21\uFA23\uFA24\uFA27\uFA28\uFA29\"]]");
      /***/
    },

    /***/
    "9/IE":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/tables/shiftjis.json ***!
      \***************************************************************************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, default */

    /***/
    function IE(module) {
      module.exports = JSON.parse("[[\"0\",\"\\u0000\",128],[\"a1\",\"\uFF61\",62],[\"8140\",\"\u3000\u3001\u3002\uFF0C\uFF0E\u30FB\uFF1A\uFF1B\uFF1F\uFF01\u309B\u309C\xB4\uFF40\xA8\uFF3E\uFFE3\uFF3F\u30FD\u30FE\u309D\u309E\u3003\u4EDD\u3005\u3006\u3007\u30FC\u2015\u2010\uFF0F\uFF3C\uFF5E\u2225\uFF5C\u2026\u2025\u2018\u2019\u201C\u201D\uFF08\uFF09\u3014\u3015\uFF3B\uFF3D\uFF5B\uFF5D\u3008\",9,\"\uFF0B\uFF0D\xB1\xD7\"],[\"8180\",\"\xF7\uFF1D\u2260\uFF1C\uFF1E\u2266\u2267\u221E\u2234\u2642\u2640\xB0\u2032\u2033\u2103\uFFE5\uFF04\uFFE0\uFFE1\uFF05\uFF03\uFF06\uFF0A\uFF20\xA7\u2606\u2605\u25CB\u25CF\u25CE\u25C7\u25C6\u25A1\u25A0\u25B3\u25B2\u25BD\u25BC\u203B\u3012\u2192\u2190\u2191\u2193\u3013\"],[\"81b8\",\"\u2208\u220B\u2286\u2287\u2282\u2283\u222A\u2229\"],[\"81c8\",\"\u2227\u2228\uFFE2\u21D2\u21D4\u2200\u2203\"],[\"81da\",\"\u2220\u22A5\u2312\u2202\u2207\u2261\u2252\u226A\u226B\u221A\u223D\u221D\u2235\u222B\u222C\"],[\"81f0\",\"\u212B\u2030\u266F\u266D\u266A\u2020\u2021\xB6\"],[\"81fc\",\"\u25EF\"],[\"824f\",\"\uFF10\",9],[\"8260\",\"\uFF21\",25],[\"8281\",\"\uFF41\",25],[\"829f\",\"\u3041\",82],[\"8340\",\"\u30A1\",62],[\"8380\",\"\u30E0\",22],[\"839f\",\"\u0391\",16,\"\u03A3\",6],[\"83bf\",\"\u03B1\",16,\"\u03C3\",6],[\"8440\",\"\u0410\",5,\"\u0401\u0416\",25],[\"8470\",\"\u0430\",5,\"\u0451\u0436\",7],[\"8480\",\"\u043E\",17],[\"849f\",\"\u2500\u2502\u250C\u2510\u2518\u2514\u251C\u252C\u2524\u2534\u253C\u2501\u2503\u250F\u2513\u251B\u2517\u2523\u2533\u252B\u253B\u254B\u2520\u252F\u2528\u2537\u253F\u251D\u2530\u2525\u2538\u2542\"],[\"8740\",\"\u2460\",19,\"\u2160\",9],[\"875f\",\"\u3349\u3314\u3322\u334D\u3318\u3327\u3303\u3336\u3351\u3357\u330D\u3326\u3323\u332B\u334A\u333B\u339C\u339D\u339E\u338E\u338F\u33C4\u33A1\"],[\"877e\",\"\u337B\"],[\"8780\",\"\u301D\u301F\u2116\u33CD\u2121\u32A4\",4,\"\u3231\u3232\u3239\u337E\u337D\u337C\u2252\u2261\u222B\u222E\u2211\u221A\u22A5\u2220\u221F\u22BF\u2235\u2229\u222A\"],[\"889f\",\"\u4E9C\u5516\u5A03\u963F\u54C0\u611B\u6328\u59F6\u9022\u8475\u831C\u7A50\u60AA\u63E1\u6E25\u65ED\u8466\u82A6\u9BF5\u6893\u5727\u65A1\u6271\u5B9B\u59D0\u867B\u98F4\u7D62\u7DBE\u9B8E\u6216\u7C9F\u88B7\u5B89\u5EB5\u6309\u6697\u6848\u95C7\u978D\u674F\u4EE5\u4F0A\u4F4D\u4F9D\u5049\u56F2\u5937\u59D4\u5A01\u5C09\u60DF\u610F\u6170\u6613\u6905\u70BA\u754F\u7570\u79FB\u7DAD\u7DEF\u80C3\u840E\u8863\u8B02\u9055\u907A\u533B\u4E95\u4EA5\u57DF\u80B2\u90C1\u78EF\u4E00\u58F1\u6EA2\u9038\u7A32\u8328\u828B\u9C2F\u5141\u5370\u54BD\u54E1\u56E0\u59FB\u5F15\u98F2\u6DEB\u80E4\u852D\"],[\"8940\",\"\u9662\u9670\u96A0\u97FB\u540B\u53F3\u5B87\u70CF\u7FBD\u8FC2\u96E8\u536F\u9D5C\u7ABA\u4E11\u7893\u81FC\u6E26\u5618\u5504\u6B1D\u851A\u9C3B\u59E5\u53A9\u6D66\u74DC\u958F\u5642\u4E91\u904B\u96F2\u834F\u990C\u53E1\u55B6\u5B30\u5F71\u6620\u66F3\u6804\u6C38\u6CF3\u6D29\u745B\u76C8\u7A4E\u9834\u82F1\u885B\u8A60\u92ED\u6DB2\u75AB\u76CA\u99C5\u60A6\u8B01\u8D8A\u95B2\u698E\u53AD\u5186\"],[\"8980\",\"\u5712\u5830\u5944\u5BB4\u5EF6\u6028\u63A9\u63F4\u6CBF\u6F14\u708E\u7114\u7159\u71D5\u733F\u7E01\u8276\u82D1\u8597\u9060\u925B\u9D1B\u5869\u65BC\u6C5A\u7525\u51F9\u592E\u5965\u5F80\u5FDC\u62BC\u65FA\u6A2A\u6B27\u6BB4\u738B\u7FC1\u8956\u9D2C\u9D0E\u9EC4\u5CA1\u6C96\u837B\u5104\u5C4B\u61B6\u81C6\u6876\u7261\u4E59\u4FFA\u5378\u6069\u6E29\u7A4F\u97F3\u4E0B\u5316\u4EEE\u4F55\u4F3D\u4FA1\u4F73\u52A0\u53EF\u5609\u590F\u5AC1\u5BB6\u5BE1\u79D1\u6687\u679C\u67B6\u6B4C\u6CB3\u706B\u73C2\u798D\u79BE\u7A3C\u7B87\u82B1\u82DB\u8304\u8377\u83EF\u83D3\u8766\u8AB2\u5629\u8CA8\u8FE6\u904E\u971E\u868A\u4FC4\u5CE8\u6211\u7259\u753B\u81E5\u82BD\u86FE\u8CC0\u96C5\u9913\u99D5\u4ECB\u4F1A\u89E3\u56DE\u584A\u58CA\u5EFB\u5FEB\u602A\u6094\u6062\u61D0\u6212\u62D0\u6539\"],[\"8a40\",\"\u9B41\u6666\u68B0\u6D77\u7070\u754C\u7686\u7D75\u82A5\u87F9\u958B\u968E\u8C9D\u51F1\u52BE\u5916\u54B3\u5BB3\u5D16\u6168\u6982\u6DAF\u788D\u84CB\u8857\u8A72\u93A7\u9AB8\u6D6C\u99A8\u86D9\u57A3\u67FF\u86CE\u920E\u5283\u5687\u5404\u5ED3\u62E1\u64B9\u683C\u6838\u6BBB\u7372\u78BA\u7A6B\u899A\u89D2\u8D6B\u8F03\u90ED\u95A3\u9694\u9769\u5B66\u5CB3\u697D\u984D\u984E\u639B\u7B20\u6A2B\"],[\"8a80\",\"\u6A7F\u68B6\u9C0D\u6F5F\u5272\u559D\u6070\u62EC\u6D3B\u6E07\u6ED1\u845B\u8910\u8F44\u4E14\u9C39\u53F6\u691B\u6A3A\u9784\u682A\u515C\u7AC3\u84B2\u91DC\u938C\u565B\u9D28\u6822\u8305\u8431\u7CA5\u5208\u82C5\u74E6\u4E7E\u4F83\u51A0\u5BD2\u520A\u52D8\u52E7\u5DFB\u559A\u582A\u59E6\u5B8C\u5B98\u5BDB\u5E72\u5E79\u60A3\u611F\u6163\u61BE\u63DB\u6562\u67D1\u6853\u68FA\u6B3E\u6B53\u6C57\u6F22\u6F97\u6F45\u74B0\u7518\u76E3\u770B\u7AFF\u7BA1\u7C21\u7DE9\u7F36\u7FF0\u809D\u8266\u839E\u89B3\u8ACC\u8CAB\u9084\u9451\u9593\u9591\u95A2\u9665\u97D3\u9928\u8218\u4E38\u542B\u5CB8\u5DCC\u73A9\u764C\u773C\u5CA9\u7FEB\u8D0B\u96C1\u9811\u9854\u9858\u4F01\u4F0E\u5371\u559C\u5668\u57FA\u5947\u5B09\u5BC4\u5C90\u5E0C\u5E7E\u5FCC\u63EE\u673A\u65D7\u65E2\u671F\u68CB\u68C4\"],[\"8b40\",\"\u6A5F\u5E30\u6BC5\u6C17\u6C7D\u757F\u7948\u5B63\u7A00\u7D00\u5FBD\u898F\u8A18\u8CB4\u8D77\u8ECC\u8F1D\u98E2\u9A0E\u9B3C\u4E80\u507D\u5100\u5993\u5B9C\u622F\u6280\u64EC\u6B3A\u72A0\u7591\u7947\u7FA9\u87FB\u8ABC\u8B70\u63AC\u83CA\u97A0\u5409\u5403\u55AB\u6854\u6A58\u8A70\u7827\u6775\u9ECD\u5374\u5BA2\u811A\u8650\u9006\u4E18\u4E45\u4EC7\u4F11\u53CA\u5438\u5BAE\u5F13\u6025\u6551\"],[\"8b80\",\"\u673D\u6C42\u6C72\u6CE3\u7078\u7403\u7A76\u7AAE\u7B08\u7D1A\u7CFE\u7D66\u65E7\u725B\u53BB\u5C45\u5DE8\u62D2\u62E0\u6319\u6E20\u865A\u8A31\u8DDD\u92F8\u6F01\u79A6\u9B5A\u4EA8\u4EAB\u4EAC\u4F9B\u4FA0\u50D1\u5147\u7AF6\u5171\u51F6\u5354\u5321\u537F\u53EB\u55AC\u5883\u5CE1\u5F37\u5F4A\u602F\u6050\u606D\u631F\u6559\u6A4B\u6CC1\u72C2\u72ED\u77EF\u80F8\u8105\u8208\u854E\u90F7\u93E1\u97FF\u9957\u9A5A\u4EF0\u51DD\u5C2D\u6681\u696D\u5C40\u66F2\u6975\u7389\u6850\u7C81\u50C5\u52E4\u5747\u5DFE\u9326\u65A4\u6B23\u6B3D\u7434\u7981\u79BD\u7B4B\u7DCA\u82B9\u83CC\u887F\u895F\u8B39\u8FD1\u91D1\u541F\u9280\u4E5D\u5036\u53E5\u533A\u72D7\u7396\u77E9\u82E6\u8EAF\u99C6\u99C8\u99D2\u5177\u611A\u865E\u55B0\u7A7A\u5076\u5BD3\u9047\u9685\u4E32\u6ADB\u91E7\u5C51\u5C48\"],[\"8c40\",\"\u6398\u7A9F\u6C93\u9774\u8F61\u7AAA\u718A\u9688\u7C82\u6817\u7E70\u6851\u936C\u52F2\u541B\u85AB\u8A13\u7FA4\u8ECD\u90E1\u5366\u8888\u7941\u4FC2\u50BE\u5211\u5144\u5553\u572D\u73EA\u578B\u5951\u5F62\u5F84\u6075\u6176\u6167\u61A9\u63B2\u643A\u656C\u666F\u6842\u6E13\u7566\u7A3D\u7CFB\u7D4C\u7D99\u7E4B\u7F6B\u830E\u834A\u86CD\u8A08\u8A63\u8B66\u8EFD\u981A\u9D8F\u82B8\u8FCE\u9BE8\"],[\"8c80\",\"\u5287\u621F\u6483\u6FC0\u9699\u6841\u5091\u6B20\u6C7A\u6F54\u7A74\u7D50\u8840\u8A23\u6708\u4EF6\u5039\u5026\u5065\u517C\u5238\u5263\u55A7\u570F\u5805\u5ACC\u5EFA\u61B2\u61F8\u62F3\u6372\u691C\u6A29\u727D\u72AC\u732E\u7814\u786F\u7D79\u770C\u80A9\u898B\u8B19\u8CE2\u8ED2\u9063\u9375\u967A\u9855\u9A13\u9E78\u5143\u539F\u53B3\u5E7B\u5F26\u6E1B\u6E90\u7384\u73FE\u7D43\u8237\u8A00\u8AFA\u9650\u4E4E\u500B\u53E4\u547C\u56FA\u59D1\u5B64\u5DF1\u5EAB\u5F27\u6238\u6545\u67AF\u6E56\u72D0\u7CCA\u88B4\u80A1\u80E1\u83F0\u864E\u8A87\u8DE8\u9237\u96C7\u9867\u9F13\u4E94\u4E92\u4F0D\u5348\u5449\u543E\u5A2F\u5F8C\u5FA1\u609F\u68A7\u6A8E\u745A\u7881\u8A9E\u8AA4\u8B77\u9190\u4E5E\u9BC9\u4EA4\u4F7C\u4FAF\u5019\u5016\u5149\u516C\u529F\u52B9\u52FE\u539A\u53E3\u5411\"],[\"8d40\",\"\u540E\u5589\u5751\u57A2\u597D\u5B54\u5B5D\u5B8F\u5DE5\u5DE7\u5DF7\u5E78\u5E83\u5E9A\u5EB7\u5F18\u6052\u614C\u6297\u62D8\u63A7\u653B\u6602\u6643\u66F4\u676D\u6821\u6897\u69CB\u6C5F\u6D2A\u6D69\u6E2F\u6E9D\u7532\u7687\u786C\u7A3F\u7CE0\u7D05\u7D18\u7D5E\u7DB1\u8015\u8003\u80AF\u80B1\u8154\u818F\u822A\u8352\u884C\u8861\u8B1B\u8CA2\u8CFC\u90CA\u9175\u9271\u783F\u92FC\u95A4\u964D\"],[\"8d80\",\"\u9805\u9999\u9AD8\u9D3B\u525B\u52AB\u53F7\u5408\u58D5\u62F7\u6FE0\u8C6A\u8F5F\u9EB9\u514B\u523B\u544A\u56FD\u7A40\u9177\u9D60\u9ED2\u7344\u6F09\u8170\u7511\u5FFD\u60DA\u9AA8\u72DB\u8FBC\u6B64\u9803\u4ECA\u56F0\u5764\u58BE\u5A5A\u6068\u61C7\u660F\u6606\u6839\u68B1\u6DF7\u75D5\u7D3A\u826E\u9B42\u4E9B\u4F50\u53C9\u5506\u5D6F\u5DE6\u5DEE\u67FB\u6C99\u7473\u7802\u8A50\u9396\u88DF\u5750\u5EA7\u632B\u50B5\u50AC\u518D\u6700\u54C9\u585E\u59BB\u5BB0\u5F69\u624D\u63A1\u683D\u6B73\u6E08\u707D\u91C7\u7280\u7815\u7826\u796D\u658E\u7D30\u83DC\u88C1\u8F09\u969B\u5264\u5728\u6750\u7F6A\u8CA1\u51B4\u5742\u962A\u583A\u698A\u80B4\u54B2\u5D0E\u57FC\u7895\u9DFA\u4F5C\u524A\u548B\u643E\u6628\u6714\u67F5\u7A84\u7B56\u7D22\u932F\u685C\u9BAD\u7B39\u5319\u518A\u5237\"],[\"8e40\",\"\u5BDF\u62F6\u64AE\u64E6\u672D\u6BBA\u85A9\u96D1\u7690\u9BD6\u634C\u9306\u9BAB\u76BF\u6652\u4E09\u5098\u53C2\u5C71\u60E8\u6492\u6563\u685F\u71E6\u73CA\u7523\u7B97\u7E82\u8695\u8B83\u8CDB\u9178\u9910\u65AC\u66AB\u6B8B\u4ED5\u4ED4\u4F3A\u4F7F\u523A\u53F8\u53F2\u55E3\u56DB\u58EB\u59CB\u59C9\u59FF\u5B50\u5C4D\u5E02\u5E2B\u5FD7\u601D\u6307\u652F\u5B5C\u65AF\u65BD\u65E8\u679D\u6B62\"],[\"8e80\",\"\u6B7B\u6C0F\u7345\u7949\u79C1\u7CF8\u7D19\u7D2B\u80A2\u8102\u81F3\u8996\u8A5E\u8A69\u8A66\u8A8C\u8AEE\u8CC7\u8CDC\u96CC\u98FC\u6B6F\u4E8B\u4F3C\u4F8D\u5150\u5B57\u5BFA\u6148\u6301\u6642\u6B21\u6ECB\u6CBB\u723E\u74BD\u75D4\u78C1\u793A\u800C\u8033\u81EA\u8494\u8F9E\u6C50\u9E7F\u5F0F\u8B58\u9D2B\u7AFA\u8EF8\u5B8D\u96EB\u4E03\u53F1\u57F7\u5931\u5AC9\u5BA4\u6089\u6E7F\u6F06\u75BE\u8CEA\u5B9F\u8500\u7BE0\u5072\u67F4\u829D\u5C61\u854A\u7E1E\u820E\u5199\u5C04\u6368\u8D66\u659C\u716E\u793E\u7D17\u8005\u8B1D\u8ECA\u906E\u86C7\u90AA\u501F\u52FA\u5C3A\u6753\u707C\u7235\u914C\u91C8\u932B\u82E5\u5BC2\u5F31\u60F9\u4E3B\u53D6\u5B88\u624B\u6731\u6B8A\u72E9\u73E0\u7A2E\u816B\u8DA3\u9152\u9996\u5112\u53D7\u546A\u5BFF\u6388\u6A39\u7DAC\u9700\u56DA\u53CE\u5468\"],[\"8f40\",\"\u5B97\u5C31\u5DDE\u4FEE\u6101\u62FE\u6D32\u79C0\u79CB\u7D42\u7E4D\u7FD2\u81ED\u821F\u8490\u8846\u8972\u8B90\u8E74\u8F2F\u9031\u914B\u916C\u96C6\u919C\u4EC0\u4F4F\u5145\u5341\u5F93\u620E\u67D4\u6C41\u6E0B\u7363\u7E26\u91CD\u9283\u53D4\u5919\u5BBF\u6DD1\u795D\u7E2E\u7C9B\u587E\u719F\u51FA\u8853\u8FF0\u4FCA\u5CFB\u6625\u77AC\u7AE3\u821C\u99FF\u51C6\u5FAA\u65EC\u696F\u6B89\u6DF3\"],[\"8f80\",\"\u6E96\u6F64\u76FE\u7D14\u5DE1\u9075\u9187\u9806\u51E6\u521D\u6240\u6691\u66D9\u6E1A\u5EB6\u7DD2\u7F72\u66F8\u85AF\u85F7\u8AF8\u52A9\u53D9\u5973\u5E8F\u5F90\u6055\u92E4\u9664\u50B7\u511F\u52DD\u5320\u5347\u53EC\u54E8\u5546\u5531\u5617\u5968\u59BE\u5A3C\u5BB5\u5C06\u5C0F\u5C11\u5C1A\u5E84\u5E8A\u5EE0\u5F70\u627F\u6284\u62DB\u638C\u6377\u6607\u660C\u662D\u6676\u677E\u68A2\u6A1F\u6A35\u6CBC\u6D88\u6E09\u6E58\u713C\u7126\u7167\u75C7\u7701\u785D\u7901\u7965\u79F0\u7AE0\u7B11\u7CA7\u7D39\u8096\u83D6\u848B\u8549\u885D\u88F3\u8A1F\u8A3C\u8A54\u8A73\u8C61\u8CDE\u91A4\u9266\u937E\u9418\u969C\u9798\u4E0A\u4E08\u4E1E\u4E57\u5197\u5270\u57CE\u5834\u58CC\u5B22\u5E38\u60C5\u64FE\u6761\u6756\u6D44\u72B6\u7573\u7A63\u84B8\u8B72\u91B8\u9320\u5631\u57F4\u98FE\"],[\"9040\",\"\u62ED\u690D\u6B96\u71ED\u7E54\u8077\u8272\u89E6\u98DF\u8755\u8FB1\u5C3B\u4F38\u4FE1\u4FB5\u5507\u5A20\u5BDD\u5BE9\u5FC3\u614E\u632F\u65B0\u664B\u68EE\u699B\u6D78\u6DF1\u7533\u75B9\u771F\u795E\u79E6\u7D33\u81E3\u82AF\u85AA\u89AA\u8A3A\u8EAB\u8F9B\u9032\u91DD\u9707\u4EBA\u4EC1\u5203\u5875\u58EC\u5C0B\u751A\u5C3D\u814E\u8A0A\u8FC5\u9663\u976D\u7B25\u8ACF\u9808\u9162\u56F3\u53A8\"],[\"9080\",\"\u9017\u5439\u5782\u5E25\u63A8\u6C34\u708A\u7761\u7C8B\u7FE0\u8870\u9042\u9154\u9310\u9318\u968F\u745E\u9AC4\u5D07\u5D69\u6570\u67A2\u8DA8\u96DB\u636E\u6749\u6919\u83C5\u9817\u96C0\u88FE\u6F84\u647A\u5BF8\u4E16\u702C\u755D\u662F\u51C4\u5236\u52E2\u59D3\u5F81\u6027\u6210\u653F\u6574\u661F\u6674\u68F2\u6816\u6B63\u6E05\u7272\u751F\u76DB\u7CBE\u8056\u58F0\u88FD\u897F\u8AA0\u8A93\u8ACB\u901D\u9192\u9752\u9759\u6589\u7A0E\u8106\u96BB\u5E2D\u60DC\u621A\u65A5\u6614\u6790\u77F3\u7A4D\u7C4D\u7E3E\u810A\u8CAC\u8D64\u8DE1\u8E5F\u78A9\u5207\u62D9\u63A5\u6442\u6298\u8A2D\u7A83\u7BC0\u8AAC\u96EA\u7D76\u820C\u8749\u4ED9\u5148\u5343\u5360\u5BA3\u5C02\u5C16\u5DDD\u6226\u6247\u64B0\u6813\u6834\u6CC9\u6D45\u6D17\u67D3\u6F5C\u714E\u717D\u65CB\u7A7F\u7BAD\u7DDA\"],[\"9140\",\"\u7E4A\u7FA8\u817A\u821B\u8239\u85A6\u8A6E\u8CCE\u8DF5\u9078\u9077\u92AD\u9291\u9583\u9BAE\u524D\u5584\u6F38\u7136\u5168\u7985\u7E55\u81B3\u7CCE\u564C\u5851\u5CA8\u63AA\u66FE\u66FD\u695A\u72D9\u758F\u758E\u790E\u7956\u79DF\u7C97\u7D20\u7D44\u8607\u8A34\u963B\u9061\u9F20\u50E7\u5275\u53CC\u53E2\u5009\u55AA\u58EE\u594F\u723D\u5B8B\u5C64\u531D\u60E3\u60F3\u635C\u6383\u633F\u63BB\"],[\"9180\",\"\u64CD\u65E9\u66F9\u5DE3\u69CD\u69FD\u6F15\u71E5\u4E89\u75E9\u76F8\u7A93\u7CDF\u7DCF\u7D9C\u8061\u8349\u8358\u846C\u84BC\u85FB\u88C5\u8D70\u9001\u906D\u9397\u971C\u9A12\u50CF\u5897\u618E\u81D3\u8535\u8D08\u9020\u4FC3\u5074\u5247\u5373\u606F\u6349\u675F\u6E2C\u8DB3\u901F\u4FD7\u5C5E\u8CCA\u65CF\u7D9A\u5352\u8896\u5176\u63C3\u5B58\u5B6B\u5C0A\u640D\u6751\u905C\u4ED6\u591A\u592A\u6C70\u8A51\u553E\u5815\u59A5\u60F0\u6253\u67C1\u8235\u6955\u9640\u99C4\u9A28\u4F53\u5806\u5BFE\u8010\u5CB1\u5E2F\u5F85\u6020\u614B\u6234\u66FF\u6CF0\u6EDE\u80CE\u817F\u82D4\u888B\u8CB8\u9000\u902E\u968A\u9EDB\u9BDB\u4EE3\u53F0\u5927\u7B2C\u918D\u984C\u9DF9\u6EDD\u7027\u5353\u5544\u5B85\u6258\u629E\u62D3\u6CA2\u6FEF\u7422\u8A17\u9438\u6FC1\u8AFE\u8338\u51E7\u86F8\u53EA\"],[\"9240\",\"\u53E9\u4F46\u9054\u8FB0\u596A\u8131\u5DFD\u7AEA\u8FBF\u68DA\u8C37\u72F8\u9C48\u6A3D\u8AB0\u4E39\u5358\u5606\u5766\u62C5\u63A2\u65E6\u6B4E\u6DE1\u6E5B\u70AD\u77ED\u7AEF\u7BAA\u7DBB\u803D\u80C6\u86CB\u8A95\u935B\u56E3\u58C7\u5F3E\u65AD\u6696\u6A80\u6BB5\u7537\u8AC7\u5024\u77E5\u5730\u5F1B\u6065\u667A\u6C60\u75F4\u7A1A\u7F6E\u81F4\u8718\u9045\u99B3\u7BC9\u755C\u7AF9\u7B51\u84C4\"],[\"9280\",\"\u9010\u79E9\u7A92\u8336\u5AE1\u7740\u4E2D\u4EF2\u5B99\u5FE0\u62BD\u663C\u67F1\u6CE8\u866B\u8877\u8A3B\u914E\u92F3\u99D0\u6A17\u7026\u732A\u82E7\u8457\u8CAF\u4E01\u5146\u51CB\u558B\u5BF5\u5E16\u5E33\u5E81\u5F14\u5F35\u5F6B\u5FB4\u61F2\u6311\u66A2\u671D\u6F6E\u7252\u753A\u773A\u8074\u8139\u8178\u8776\u8ABF\u8ADC\u8D85\u8DF3\u929A\u9577\u9802\u9CE5\u52C5\u6357\u76F4\u6715\u6C88\u73CD\u8CC3\u93AE\u9673\u6D25\u589C\u690E\u69CC\u8FFD\u939A\u75DB\u901A\u585A\u6802\u63B4\u69FB\u4F43\u6F2C\u67D8\u8FBB\u8526\u7DB4\u9354\u693F\u6F70\u576A\u58F7\u5B2C\u7D2C\u722A\u540A\u91E3\u9DB4\u4EAD\u4F4E\u505C\u5075\u5243\u8C9E\u5448\u5824\u5B9A\u5E1D\u5E95\u5EAD\u5EF7\u5F1F\u608C\u62B5\u633A\u63D0\u68AF\u6C40\u7887\u798E\u7A0B\u7DE0\u8247\u8A02\u8AE6\u8E44\u9013\"],[\"9340\",\"\u90B8\u912D\u91D8\u9F0E\u6CE5\u6458\u64E2\u6575\u6EF4\u7684\u7B1B\u9069\u93D1\u6EBA\u54F2\u5FB9\u64A4\u8F4D\u8FED\u9244\u5178\u586B\u5929\u5C55\u5E97\u6DFB\u7E8F\u751C\u8CBC\u8EE2\u985B\u70B9\u4F1D\u6BBF\u6FB1\u7530\u96FB\u514E\u5410\u5835\u5857\u59AC\u5C60\u5F92\u6597\u675C\u6E21\u767B\u83DF\u8CED\u9014\u90FD\u934D\u7825\u783A\u52AA\u5EA6\u571F\u5974\u6012\u5012\u515A\u51AC\"],[\"9380\",\"\u51CD\u5200\u5510\u5854\u5858\u5957\u5B95\u5CF6\u5D8B\u60BC\u6295\u642D\u6771\u6843\u68BC\u68DF\u76D7\u6DD8\u6E6F\u6D9B\u706F\u71C8\u5F53\u75D8\u7977\u7B49\u7B54\u7B52\u7CD6\u7D71\u5230\u8463\u8569\u85E4\u8A0E\u8B04\u8C46\u8E0F\u9003\u900F\u9419\u9676\u982D\u9A30\u95D8\u50CD\u52D5\u540C\u5802\u5C0E\u61A7\u649E\u6D1E\u77B3\u7AE5\u80F4\u8404\u9053\u9285\u5CE0\u9D07\u533F\u5F97\u5FB3\u6D9C\u7279\u7763\u79BF\u7BE4\u6BD2\u72EC\u8AAD\u6803\u6A61\u51F8\u7A81\u6934\u5C4A\u9CF6\u82EB\u5BC5\u9149\u701E\u5678\u5C6F\u60C7\u6566\u6C8C\u8C5A\u9041\u9813\u5451\u66C7\u920D\u5948\u90A3\u5185\u4E4D\u51EA\u8599\u8B0E\u7058\u637A\u934B\u6962\u99B4\u7E04\u7577\u5357\u6960\u8EDF\u96E3\u6C5D\u4E8C\u5C3C\u5F10\u8FE9\u5302\u8CD1\u8089\u8679\u5EFF\u65E5\u4E73\u5165\"],[\"9440\",\"\u5982\u5C3F\u97EE\u4EFB\u598A\u5FCD\u8A8D\u6FE1\u79B0\u7962\u5BE7\u8471\u732B\u71B1\u5E74\u5FF5\u637B\u649A\u71C3\u7C98\u4E43\u5EFC\u4E4B\u57DC\u56A2\u60A9\u6FC3\u7D0D\u80FD\u8133\u81BF\u8FB2\u8997\u86A4\u5DF4\u628A\u64AD\u8987\u6777\u6CE2\u6D3E\u7436\u7834\u5A46\u7F75\u82AD\u99AC\u4FF3\u5EC3\u62DD\u6392\u6557\u676F\u76C3\u724C\u80CC\u80BA\u8F29\u914D\u500D\u57F9\u5A92\u6885\"],[\"9480\",\"\u6973\u7164\u72FD\u8CB7\u58F2\u8CE0\u966A\u9019\u877F\u79E4\u77E7\u8429\u4F2F\u5265\u535A\u62CD\u67CF\u6CCA\u767D\u7B94\u7C95\u8236\u8584\u8FEB\u66DD\u6F20\u7206\u7E1B\u83AB\u99C1\u9EA6\u51FD\u7BB1\u7872\u7BB8\u8087\u7B48\u6AE8\u5E61\u808C\u7551\u7560\u516B\u9262\u6E8C\u767A\u9197\u9AEA\u4F10\u7F70\u629C\u7B4F\u95A5\u9CE9\u567A\u5859\u86E4\u96BC\u4F34\u5224\u534A\u53CD\u53DB\u5E06\u642C\u6591\u677F\u6C3E\u6C4E\u7248\u72AF\u73ED\u7554\u7E41\u822C\u85E9\u8CA9\u7BC4\u91C6\u7169\u9812\u98EF\u633D\u6669\u756A\u76E4\u78D0\u8543\u86EE\u532A\u5351\u5426\u5983\u5E87\u5F7C\u60B2\u6249\u6279\u62AB\u6590\u6BD4\u6CCC\u75B2\u76AE\u7891\u79D8\u7DCB\u7F77\u80A5\u88AB\u8AB9\u8CBB\u907F\u975E\u98DB\u6A0B\u7C38\u5099\u5C3E\u5FAE\u6787\u6BD8\u7435\u7709\u7F8E\"],[\"9540\",\"\u9F3B\u67CA\u7A17\u5339\u758B\u9AED\u5F66\u819D\u83F1\u8098\u5F3C\u5FC5\u7562\u7B46\u903C\u6867\u59EB\u5A9B\u7D10\u767E\u8B2C\u4FF5\u5F6A\u6A19\u6C37\u6F02\u74E2\u7968\u8868\u8A55\u8C79\u5EDF\u63CF\u75C5\u79D2\u82D7\u9328\u92F2\u849C\u86ED\u9C2D\u54C1\u5F6C\u658C\u6D5C\u7015\u8CA7\u8CD3\u983B\u654F\u74F6\u4E0D\u4ED8\u57E0\u592B\u5A66\u5BCC\u51A8\u5E03\u5E9C\u6016\u6276\u6577\"],[\"9580\",\"\u65A7\u666E\u6D6E\u7236\u7B26\u8150\u819A\u8299\u8B5C\u8CA0\u8CE6\u8D74\u961C\u9644\u4FAE\u64AB\u6B66\u821E\u8461\u856A\u90E8\u5C01\u6953\u98A8\u847A\u8557\u4F0F\u526F\u5FA9\u5E45\u670D\u798F\u8179\u8907\u8986\u6DF5\u5F17\u6255\u6CB8\u4ECF\u7269\u9B92\u5206\u543B\u5674\u58B3\u61A4\u626E\u711A\u596E\u7C89\u7CDE\u7D1B\u96F0\u6587\u805E\u4E19\u4F75\u5175\u5840\u5E63\u5E73\u5F0A\u67C4\u4E26\u853D\u9589\u965B\u7C73\u9801\u50FB\u58C1\u7656\u78A7\u5225\u77A5\u8511\u7B86\u504F\u5909\u7247\u7BC7\u7DE8\u8FBA\u8FD4\u904D\u4FBF\u52C9\u5A29\u5F01\u97AD\u4FDD\u8217\u92EA\u5703\u6355\u6B69\u752B\u88DC\u8F14\u7A42\u52DF\u5893\u6155\u620A\u66AE\u6BCD\u7C3F\u83E9\u5023\u4FF8\u5305\u5446\u5831\u5949\u5B9D\u5CF0\u5CEF\u5D29\u5E96\u62B1\u6367\u653E\u65B9\u670B\"],[\"9640\",\"\u6CD5\u6CE1\u70F9\u7832\u7E2B\u80DE\u82B3\u840C\u84EC\u8702\u8912\u8A2A\u8C4A\u90A6\u92D2\u98FD\u9CF3\u9D6C\u4E4F\u4EA1\u508D\u5256\u574A\u59A8\u5E3D\u5FD8\u5FD9\u623F\u66B4\u671B\u67D0\u68D2\u5192\u7D21\u80AA\u81A8\u8B00\u8C8C\u8CBF\u927E\u9632\u5420\u982C\u5317\u50D5\u535C\u58A8\u64B2\u6734\u7267\u7766\u7A46\u91E6\u52C3\u6CA1\u6B86\u5800\u5E4C\u5954\u672C\u7FFB\u51E1\u76C6\"],[\"9680\",\"\u6469\u78E8\u9B54\u9EBB\u57CB\u59B9\u6627\u679A\u6BCE\u54E9\u69D9\u5E55\u819C\u6795\u9BAA\u67FE\u9C52\u685D\u4EA6\u4FE3\u53C8\u62B9\u672B\u6CAB\u8FC4\u4FAD\u7E6D\u9EBF\u4E07\u6162\u6E80\u6F2B\u8513\u5473\u672A\u9B45\u5DF3\u7B95\u5CAC\u5BC6\u871C\u6E4A\u84D1\u7A14\u8108\u5999\u7C8D\u6C11\u7720\u52D9\u5922\u7121\u725F\u77DB\u9727\u9D61\u690B\u5A7F\u5A18\u51A5\u540D\u547D\u660E\u76DF\u8FF7\u9298\u9CF4\u59EA\u725D\u6EC5\u514D\u68C9\u7DBF\u7DEC\u9762\u9EBA\u6478\u6A21\u8302\u5984\u5B5F\u6BDB\u731B\u76F2\u7DB2\u8017\u8499\u5132\u6728\u9ED9\u76EE\u6762\u52FF\u9905\u5C24\u623B\u7C7E\u8CB0\u554F\u60B6\u7D0B\u9580\u5301\u4E5F\u51B6\u591C\u723A\u8036\u91CE\u5F25\u77E2\u5384\u5F79\u7D04\u85AC\u8A33\u8E8D\u9756\u67F3\u85AE\u9453\u6109\u6108\u6CB9\u7652\"],[\"9740\",\"\u8AED\u8F38\u552F\u4F51\u512A\u52C7\u53CB\u5BA5\u5E7D\u60A0\u6182\u63D6\u6709\u67DA\u6E67\u6D8C\u7336\u7337\u7531\u7950\u88D5\u8A98\u904A\u9091\u90F5\u96C4\u878D\u5915\u4E88\u4F59\u4E0E\u8A89\u8F3F\u9810\u50AD\u5E7C\u5996\u5BB9\u5EB8\u63DA\u63FA\u64C1\u66DC\u694A\u69D8\u6D0B\u6EB6\u7194\u7528\u7AAF\u7F8A\u8000\u8449\u84C9\u8981\u8B21\u8E0A\u9065\u967D\u990A\u617E\u6291\u6B32\"],[\"9780\",\"\u6C83\u6D74\u7FCC\u7FFC\u6DC0\u7F85\u87BA\u88F8\u6765\u83B1\u983C\u96F7\u6D1B\u7D61\u843D\u916A\u4E71\u5375\u5D50\u6B04\u6FEB\u85CD\u862D\u89A7\u5229\u540F\u5C65\u674E\u68A8\u7406\u7483\u75E2\u88CF\u88E1\u91CC\u96E2\u9678\u5F8B\u7387\u7ACB\u844E\u63A0\u7565\u5289\u6D41\u6E9C\u7409\u7559\u786B\u7C92\u9686\u7ADC\u9F8D\u4FB6\u616E\u65C5\u865C\u4E86\u4EAE\u50DA\u4E21\u51CC\u5BEE\u6599\u6881\u6DBC\u731F\u7642\u77AD\u7A1C\u7CE7\u826F\u8AD2\u907C\u91CF\u9675\u9818\u529B\u7DD1\u502B\u5398\u6797\u6DCB\u71D0\u7433\u81E8\u8F2A\u96A3\u9C57\u9E9F\u7460\u5841\u6D99\u7D2F\u985E\u4EE4\u4F36\u4F8B\u51B7\u52B1\u5DBA\u601C\u73B2\u793C\u82D3\u9234\u96B7\u96F6\u970A\u9E97\u9F62\u66A6\u6B74\u5217\u52A3\u70C8\u88C2\u5EC9\u604B\u6190\u6F23\u7149\u7C3E\u7DF4\u806F\"],[\"9840\",\"\u84EE\u9023\u932C\u5442\u9B6F\u6AD3\u7089\u8CC2\u8DEF\u9732\u52B4\u5A41\u5ECA\u5F04\u6717\u697C\u6994\u6D6A\u6F0F\u7262\u72FC\u7BED\u8001\u807E\u874B\u90CE\u516D\u9E93\u7984\u808B\u9332\u8AD6\u502D\u548C\u8A71\u6B6A\u8CC4\u8107\u60D1\u67A0\u9DF2\u4E99\u4E98\u9C10\u8A6B\u85C1\u8568\u6900\u6E7E\u7897\u8155\"],[\"989f\",\"\u5F0C\u4E10\u4E15\u4E2A\u4E31\u4E36\u4E3C\u4E3F\u4E42\u4E56\u4E58\u4E82\u4E85\u8C6B\u4E8A\u8212\u5F0D\u4E8E\u4E9E\u4E9F\u4EA0\u4EA2\u4EB0\u4EB3\u4EB6\u4ECE\u4ECD\u4EC4\u4EC6\u4EC2\u4ED7\u4EDE\u4EED\u4EDF\u4EF7\u4F09\u4F5A\u4F30\u4F5B\u4F5D\u4F57\u4F47\u4F76\u4F88\u4F8F\u4F98\u4F7B\u4F69\u4F70\u4F91\u4F6F\u4F86\u4F96\u5118\u4FD4\u4FDF\u4FCE\u4FD8\u4FDB\u4FD1\u4FDA\u4FD0\u4FE4\u4FE5\u501A\u5028\u5014\u502A\u5025\u5005\u4F1C\u4FF6\u5021\u5029\u502C\u4FFE\u4FEF\u5011\u5006\u5043\u5047\u6703\u5055\u5050\u5048\u505A\u5056\u506C\u5078\u5080\u509A\u5085\u50B4\u50B2\"],[\"9940\",\"\u50C9\u50CA\u50B3\u50C2\u50D6\u50DE\u50E5\u50ED\u50E3\u50EE\u50F9\u50F5\u5109\u5101\u5102\u5116\u5115\u5114\u511A\u5121\u513A\u5137\u513C\u513B\u513F\u5140\u5152\u514C\u5154\u5162\u7AF8\u5169\u516A\u516E\u5180\u5182\u56D8\u518C\u5189\u518F\u5191\u5193\u5195\u5196\u51A4\u51A6\u51A2\u51A9\u51AA\u51AB\u51B3\u51B1\u51B2\u51B0\u51B5\u51BD\u51C5\u51C9\u51DB\u51E0\u8655\u51E9\u51ED\"],[\"9980\",\"\u51F0\u51F5\u51FE\u5204\u520B\u5214\u520E\u5227\u522A\u522E\u5233\u5239\u524F\u5244\u524B\u524C\u525E\u5254\u526A\u5274\u5269\u5273\u527F\u527D\u528D\u5294\u5292\u5271\u5288\u5291\u8FA8\u8FA7\u52AC\u52AD\u52BC\u52B5\u52C1\u52CD\u52D7\u52DE\u52E3\u52E6\u98ED\u52E0\u52F3\u52F5\u52F8\u52F9\u5306\u5308\u7538\u530D\u5310\u530F\u5315\u531A\u5323\u532F\u5331\u5333\u5338\u5340\u5346\u5345\u4E17\u5349\u534D\u51D6\u535E\u5369\u536E\u5918\u537B\u5377\u5382\u5396\u53A0\u53A6\u53A5\u53AE\u53B0\u53B6\u53C3\u7C12\u96D9\u53DF\u66FC\u71EE\u53EE\u53E8\u53ED\u53FA\u5401\u543D\u5440\u542C\u542D\u543C\u542E\u5436\u5429\u541D\u544E\u548F\u5475\u548E\u545F\u5471\u5477\u5470\u5492\u547B\u5480\u5476\u5484\u5490\u5486\u54C7\u54A2\u54B8\u54A5\u54AC\u54C4\u54C8\u54A8\"],[\"9a40\",\"\u54AB\u54C2\u54A4\u54BE\u54BC\u54D8\u54E5\u54E6\u550F\u5514\u54FD\u54EE\u54ED\u54FA\u54E2\u5539\u5540\u5563\u554C\u552E\u555C\u5545\u5556\u5557\u5538\u5533\u555D\u5599\u5580\u54AF\u558A\u559F\u557B\u557E\u5598\u559E\u55AE\u557C\u5583\u55A9\u5587\u55A8\u55DA\u55C5\u55DF\u55C4\u55DC\u55E4\u55D4\u5614\u55F7\u5616\u55FE\u55FD\u561B\u55F9\u564E\u5650\u71DF\u5634\u5636\u5632\u5638\"],[\"9a80\",\"\u566B\u5664\u562F\u566C\u566A\u5686\u5680\u568A\u56A0\u5694\u568F\u56A5\u56AE\u56B6\u56B4\u56C2\u56BC\u56C1\u56C3\u56C0\u56C8\u56CE\u56D1\u56D3\u56D7\u56EE\u56F9\u5700\u56FF\u5704\u5709\u5708\u570B\u570D\u5713\u5718\u5716\u55C7\u571C\u5726\u5737\u5738\u574E\u573B\u5740\u574F\u5769\u57C0\u5788\u5761\u577F\u5789\u5793\u57A0\u57B3\u57A4\u57AA\u57B0\u57C3\u57C6\u57D4\u57D2\u57D3\u580A\u57D6\u57E3\u580B\u5819\u581D\u5872\u5821\u5862\u584B\u5870\u6BC0\u5852\u583D\u5879\u5885\u58B9\u589F\u58AB\u58BA\u58DE\u58BB\u58B8\u58AE\u58C5\u58D3\u58D1\u58D7\u58D9\u58D8\u58E5\u58DC\u58E4\u58DF\u58EF\u58FA\u58F9\u58FB\u58FC\u58FD\u5902\u590A\u5910\u591B\u68A6\u5925\u592C\u592D\u5932\u5938\u593E\u7AD2\u5955\u5950\u594E\u595A\u5958\u5962\u5960\u5967\u596C\u5969\"],[\"9b40\",\"\u5978\u5981\u599D\u4F5E\u4FAB\u59A3\u59B2\u59C6\u59E8\u59DC\u598D\u59D9\u59DA\u5A25\u5A1F\u5A11\u5A1C\u5A09\u5A1A\u5A40\u5A6C\u5A49\u5A35\u5A36\u5A62\u5A6A\u5A9A\u5ABC\u5ABE\u5ACB\u5AC2\u5ABD\u5AE3\u5AD7\u5AE6\u5AE9\u5AD6\u5AFA\u5AFB\u5B0C\u5B0B\u5B16\u5B32\u5AD0\u5B2A\u5B36\u5B3E\u5B43\u5B45\u5B40\u5B51\u5B55\u5B5A\u5B5B\u5B65\u5B69\u5B70\u5B73\u5B75\u5B78\u6588\u5B7A\u5B80\"],[\"9b80\",\"\u5B83\u5BA6\u5BB8\u5BC3\u5BC7\u5BC9\u5BD4\u5BD0\u5BE4\u5BE6\u5BE2\u5BDE\u5BE5\u5BEB\u5BF0\u5BF6\u5BF3\u5C05\u5C07\u5C08\u5C0D\u5C13\u5C20\u5C22\u5C28\u5C38\u5C39\u5C41\u5C46\u5C4E\u5C53\u5C50\u5C4F\u5B71\u5C6C\u5C6E\u4E62\u5C76\u5C79\u5C8C\u5C91\u5C94\u599B\u5CAB\u5CBB\u5CB6\u5CBC\u5CB7\u5CC5\u5CBE\u5CC7\u5CD9\u5CE9\u5CFD\u5CFA\u5CED\u5D8C\u5CEA\u5D0B\u5D15\u5D17\u5D5C\u5D1F\u5D1B\u5D11\u5D14\u5D22\u5D1A\u5D19\u5D18\u5D4C\u5D52\u5D4E\u5D4B\u5D6C\u5D73\u5D76\u5D87\u5D84\u5D82\u5DA2\u5D9D\u5DAC\u5DAE\u5DBD\u5D90\u5DB7\u5DBC\u5DC9\u5DCD\u5DD3\u5DD2\u5DD6\u5DDB\u5DEB\u5DF2\u5DF5\u5E0B\u5E1A\u5E19\u5E11\u5E1B\u5E36\u5E37\u5E44\u5E43\u5E40\u5E4E\u5E57\u5E54\u5E5F\u5E62\u5E64\u5E47\u5E75\u5E76\u5E7A\u9EBC\u5E7F\u5EA0\u5EC1\u5EC2\u5EC8\u5ED0\u5ECF\"],[\"9c40\",\"\u5ED6\u5EE3\u5EDD\u5EDA\u5EDB\u5EE2\u5EE1\u5EE8\u5EE9\u5EEC\u5EF1\u5EF3\u5EF0\u5EF4\u5EF8\u5EFE\u5F03\u5F09\u5F5D\u5F5C\u5F0B\u5F11\u5F16\u5F29\u5F2D\u5F38\u5F41\u5F48\u5F4C\u5F4E\u5F2F\u5F51\u5F56\u5F57\u5F59\u5F61\u5F6D\u5F73\u5F77\u5F83\u5F82\u5F7F\u5F8A\u5F88\u5F91\u5F87\u5F9E\u5F99\u5F98\u5FA0\u5FA8\u5FAD\u5FBC\u5FD6\u5FFB\u5FE4\u5FF8\u5FF1\u5FDD\u60B3\u5FFF\u6021\u6060\"],[\"9c80\",\"\u6019\u6010\u6029\u600E\u6031\u601B\u6015\u602B\u6026\u600F\u603A\u605A\u6041\u606A\u6077\u605F\u604A\u6046\u604D\u6063\u6043\u6064\u6042\u606C\u606B\u6059\u6081\u608D\u60E7\u6083\u609A\u6084\u609B\u6096\u6097\u6092\u60A7\u608B\u60E1\u60B8\u60E0\u60D3\u60B4\u5FF0\u60BD\u60C6\u60B5\u60D8\u614D\u6115\u6106\u60F6\u60F7\u6100\u60F4\u60FA\u6103\u6121\u60FB\u60F1\u610D\u610E\u6147\u613E\u6128\u6127\u614A\u613F\u613C\u612C\u6134\u613D\u6142\u6144\u6173\u6177\u6158\u6159\u615A\u616B\u6174\u616F\u6165\u6171\u615F\u615D\u6153\u6175\u6199\u6196\u6187\u61AC\u6194\u619A\u618A\u6191\u61AB\u61AE\u61CC\u61CA\u61C9\u61F7\u61C8\u61C3\u61C6\u61BA\u61CB\u7F79\u61CD\u61E6\u61E3\u61F6\u61FA\u61F4\u61FF\u61FD\u61FC\u61FE\u6200\u6208\u6209\u620D\u620C\u6214\u621B\"],[\"9d40\",\"\u621E\u6221\u622A\u622E\u6230\u6232\u6233\u6241\u624E\u625E\u6263\u625B\u6260\u6268\u627C\u6282\u6289\u627E\u6292\u6293\u6296\u62D4\u6283\u6294\u62D7\u62D1\u62BB\u62CF\u62FF\u62C6\u64D4\u62C8\u62DC\u62CC\u62CA\u62C2\u62C7\u629B\u62C9\u630C\u62EE\u62F1\u6327\u6302\u6308\u62EF\u62F5\u6350\u633E\u634D\u641C\u634F\u6396\u638E\u6380\u63AB\u6376\u63A3\u638F\u6389\u639F\u63B5\u636B\"],[\"9d80\",\"\u6369\u63BE\u63E9\u63C0\u63C6\u63E3\u63C9\u63D2\u63F6\u63C4\u6416\u6434\u6406\u6413\u6426\u6436\u651D\u6417\u6428\u640F\u6467\u646F\u6476\u644E\u652A\u6495\u6493\u64A5\u64A9\u6488\u64BC\u64DA\u64D2\u64C5\u64C7\u64BB\u64D8\u64C2\u64F1\u64E7\u8209\u64E0\u64E1\u62AC\u64E3\u64EF\u652C\u64F6\u64F4\u64F2\u64FA\u6500\u64FD\u6518\u651C\u6505\u6524\u6523\u652B\u6534\u6535\u6537\u6536\u6538\u754B\u6548\u6556\u6555\u654D\u6558\u655E\u655D\u6572\u6578\u6582\u6583\u8B8A\u659B\u659F\u65AB\u65B7\u65C3\u65C6\u65C1\u65C4\u65CC\u65D2\u65DB\u65D9\u65E0\u65E1\u65F1\u6772\u660A\u6603\u65FB\u6773\u6635\u6636\u6634\u661C\u664F\u6644\u6649\u6641\u665E\u665D\u6664\u6667\u6668\u665F\u6662\u6670\u6683\u6688\u668E\u6689\u6684\u6698\u669D\u66C1\u66B9\u66C9\u66BE\u66BC\"],[\"9e40\",\"\u66C4\u66B8\u66D6\u66DA\u66E0\u663F\u66E6\u66E9\u66F0\u66F5\u66F7\u670F\u6716\u671E\u6726\u6727\u9738\u672E\u673F\u6736\u6741\u6738\u6737\u6746\u675E\u6760\u6759\u6763\u6764\u6789\u6770\u67A9\u677C\u676A\u678C\u678B\u67A6\u67A1\u6785\u67B7\u67EF\u67B4\u67EC\u67B3\u67E9\u67B8\u67E4\u67DE\u67DD\u67E2\u67EE\u67B9\u67CE\u67C6\u67E7\u6A9C\u681E\u6846\u6829\u6840\u684D\u6832\u684E\"],[\"9e80\",\"\u68B3\u682B\u6859\u6863\u6877\u687F\u689F\u688F\u68AD\u6894\u689D\u689B\u6883\u6AAE\u68B9\u6874\u68B5\u68A0\u68BA\u690F\u688D\u687E\u6901\u68CA\u6908\u68D8\u6922\u6926\u68E1\u690C\u68CD\u68D4\u68E7\u68D5\u6936\u6912\u6904\u68D7\u68E3\u6925\u68F9\u68E0\u68EF\u6928\u692A\u691A\u6923\u6921\u68C6\u6979\u6977\u695C\u6978\u696B\u6954\u697E\u696E\u6939\u6974\u693D\u6959\u6930\u6961\u695E\u695D\u6981\u696A\u69B2\u69AE\u69D0\u69BF\u69C1\u69D3\u69BE\u69CE\u5BE8\u69CA\u69DD\u69BB\u69C3\u69A7\u6A2E\u6991\u69A0\u699C\u6995\u69B4\u69DE\u69E8\u6A02\u6A1B\u69FF\u6B0A\u69F9\u69F2\u69E7\u6A05\u69B1\u6A1E\u69ED\u6A14\u69EB\u6A0A\u6A12\u6AC1\u6A23\u6A13\u6A44\u6A0C\u6A72\u6A36\u6A78\u6A47\u6A62\u6A59\u6A66\u6A48\u6A38\u6A22\u6A90\u6A8D\u6AA0\u6A84\u6AA2\u6AA3\"],[\"9f40\",\"\u6A97\u8617\u6ABB\u6AC3\u6AC2\u6AB8\u6AB3\u6AAC\u6ADE\u6AD1\u6ADF\u6AAA\u6ADA\u6AEA\u6AFB\u6B05\u8616\u6AFA\u6B12\u6B16\u9B31\u6B1F\u6B38\u6B37\u76DC\u6B39\u98EE\u6B47\u6B43\u6B49\u6B50\u6B59\u6B54\u6B5B\u6B5F\u6B61\u6B78\u6B79\u6B7F\u6B80\u6B84\u6B83\u6B8D\u6B98\u6B95\u6B9E\u6BA4\u6BAA\u6BAB\u6BAF\u6BB2\u6BB1\u6BB3\u6BB7\u6BBC\u6BC6\u6BCB\u6BD3\u6BDF\u6BEC\u6BEB\u6BF3\u6BEF\"],[\"9f80\",\"\u9EBE\u6C08\u6C13\u6C14\u6C1B\u6C24\u6C23\u6C5E\u6C55\u6C62\u6C6A\u6C82\u6C8D\u6C9A\u6C81\u6C9B\u6C7E\u6C68\u6C73\u6C92\u6C90\u6CC4\u6CF1\u6CD3\u6CBD\u6CD7\u6CC5\u6CDD\u6CAE\u6CB1\u6CBE\u6CBA\u6CDB\u6CEF\u6CD9\u6CEA\u6D1F\u884D\u6D36\u6D2B\u6D3D\u6D38\u6D19\u6D35\u6D33\u6D12\u6D0C\u6D63\u6D93\u6D64\u6D5A\u6D79\u6D59\u6D8E\u6D95\u6FE4\u6D85\u6DF9\u6E15\u6E0A\u6DB5\u6DC7\u6DE6\u6DB8\u6DC6\u6DEC\u6DDE\u6DCC\u6DE8\u6DD2\u6DC5\u6DFA\u6DD9\u6DE4\u6DD5\u6DEA\u6DEE\u6E2D\u6E6E\u6E2E\u6E19\u6E72\u6E5F\u6E3E\u6E23\u6E6B\u6E2B\u6E76\u6E4D\u6E1F\u6E43\u6E3A\u6E4E\u6E24\u6EFF\u6E1D\u6E38\u6E82\u6EAA\u6E98\u6EC9\u6EB7\u6ED3\u6EBD\u6EAF\u6EC4\u6EB2\u6ED4\u6ED5\u6E8F\u6EA5\u6EC2\u6E9F\u6F41\u6F11\u704C\u6EEC\u6EF8\u6EFE\u6F3F\u6EF2\u6F31\u6EEF\u6F32\u6ECC\"],[\"e040\",\"\u6F3E\u6F13\u6EF7\u6F86\u6F7A\u6F78\u6F81\u6F80\u6F6F\u6F5B\u6FF3\u6F6D\u6F82\u6F7C\u6F58\u6F8E\u6F91\u6FC2\u6F66\u6FB3\u6FA3\u6FA1\u6FA4\u6FB9\u6FC6\u6FAA\u6FDF\u6FD5\u6FEC\u6FD4\u6FD8\u6FF1\u6FEE\u6FDB\u7009\u700B\u6FFA\u7011\u7001\u700F\u6FFE\u701B\u701A\u6F74\u701D\u7018\u701F\u7030\u703E\u7032\u7051\u7063\u7099\u7092\u70AF\u70F1\u70AC\u70B8\u70B3\u70AE\u70DF\u70CB\u70DD\"],[\"e080\",\"\u70D9\u7109\u70FD\u711C\u7119\u7165\u7155\u7188\u7166\u7162\u714C\u7156\u716C\u718F\u71FB\u7184\u7195\u71A8\u71AC\u71D7\u71B9\u71BE\u71D2\u71C9\u71D4\u71CE\u71E0\u71EC\u71E7\u71F5\u71FC\u71F9\u71FF\u720D\u7210\u721B\u7228\u722D\u722C\u7230\u7232\u723B\u723C\u723F\u7240\u7246\u724B\u7258\u7274\u727E\u7282\u7281\u7287\u7292\u7296\u72A2\u72A7\u72B9\u72B2\u72C3\u72C6\u72C4\u72CE\u72D2\u72E2\u72E0\u72E1\u72F9\u72F7\u500F\u7317\u730A\u731C\u7316\u731D\u7334\u732F\u7329\u7325\u733E\u734E\u734F\u9ED8\u7357\u736A\u7368\u7370\u7378\u7375\u737B\u737A\u73C8\u73B3\u73CE\u73BB\u73C0\u73E5\u73EE\u73DE\u74A2\u7405\u746F\u7425\u73F8\u7432\u743A\u7455\u743F\u745F\u7459\u7441\u745C\u7469\u7470\u7463\u746A\u7476\u747E\u748B\u749E\u74A7\u74CA\u74CF\u74D4\u73F1\"],[\"e140\",\"\u74E0\u74E3\u74E7\u74E9\u74EE\u74F2\u74F0\u74F1\u74F8\u74F7\u7504\u7503\u7505\u750C\u750E\u750D\u7515\u7513\u751E\u7526\u752C\u753C\u7544\u754D\u754A\u7549\u755B\u7546\u755A\u7569\u7564\u7567\u756B\u756D\u7578\u7576\u7586\u7587\u7574\u758A\u7589\u7582\u7594\u759A\u759D\u75A5\u75A3\u75C2\u75B3\u75C3\u75B5\u75BD\u75B8\u75BC\u75B1\u75CD\u75CA\u75D2\u75D9\u75E3\u75DE\u75FE\u75FF\"],[\"e180\",\"\u75FC\u7601\u75F0\u75FA\u75F2\u75F3\u760B\u760D\u7609\u761F\u7627\u7620\u7621\u7622\u7624\u7634\u7630\u763B\u7647\u7648\u7646\u765C\u7658\u7661\u7662\u7668\u7669\u766A\u7667\u766C\u7670\u7672\u7676\u7678\u767C\u7680\u7683\u7688\u768B\u768E\u7696\u7693\u7699\u769A\u76B0\u76B4\u76B8\u76B9\u76BA\u76C2\u76CD\u76D6\u76D2\u76DE\u76E1\u76E5\u76E7\u76EA\u862F\u76FB\u7708\u7707\u7704\u7729\u7724\u771E\u7725\u7726\u771B\u7737\u7738\u7747\u775A\u7768\u776B\u775B\u7765\u777F\u777E\u7779\u778E\u778B\u7791\u77A0\u779E\u77B0\u77B6\u77B9\u77BF\u77BC\u77BD\u77BB\u77C7\u77CD\u77D7\u77DA\u77DC\u77E3\u77EE\u77FC\u780C\u7812\u7926\u7820\u792A\u7845\u788E\u7874\u7886\u787C\u789A\u788C\u78A3\u78B5\u78AA\u78AF\u78D1\u78C6\u78CB\u78D4\u78BE\u78BC\u78C5\u78CA\u78EC\"],[\"e240\",\"\u78E7\u78DA\u78FD\u78F4\u7907\u7912\u7911\u7919\u792C\u792B\u7940\u7960\u7957\u795F\u795A\u7955\u7953\u797A\u797F\u798A\u799D\u79A7\u9F4B\u79AA\u79AE\u79B3\u79B9\u79BA\u79C9\u79D5\u79E7\u79EC\u79E1\u79E3\u7A08\u7A0D\u7A18\u7A19\u7A20\u7A1F\u7980\u7A31\u7A3B\u7A3E\u7A37\u7A43\u7A57\u7A49\u7A61\u7A62\u7A69\u9F9D\u7A70\u7A79\u7A7D\u7A88\u7A97\u7A95\u7A98\u7A96\u7AA9\u7AC8\u7AB0\"],[\"e280\",\"\u7AB6\u7AC5\u7AC4\u7ABF\u9083\u7AC7\u7ACA\u7ACD\u7ACF\u7AD5\u7AD3\u7AD9\u7ADA\u7ADD\u7AE1\u7AE2\u7AE6\u7AED\u7AF0\u7B02\u7B0F\u7B0A\u7B06\u7B33\u7B18\u7B19\u7B1E\u7B35\u7B28\u7B36\u7B50\u7B7A\u7B04\u7B4D\u7B0B\u7B4C\u7B45\u7B75\u7B65\u7B74\u7B67\u7B70\u7B71\u7B6C\u7B6E\u7B9D\u7B98\u7B9F\u7B8D\u7B9C\u7B9A\u7B8B\u7B92\u7B8F\u7B5D\u7B99\u7BCB\u7BC1\u7BCC\u7BCF\u7BB4\u7BC6\u7BDD\u7BE9\u7C11\u7C14\u7BE6\u7BE5\u7C60\u7C00\u7C07\u7C13\u7BF3\u7BF7\u7C17\u7C0D\u7BF6\u7C23\u7C27\u7C2A\u7C1F\u7C37\u7C2B\u7C3D\u7C4C\u7C43\u7C54\u7C4F\u7C40\u7C50\u7C58\u7C5F\u7C64\u7C56\u7C65\u7C6C\u7C75\u7C83\u7C90\u7CA4\u7CAD\u7CA2\u7CAB\u7CA1\u7CA8\u7CB3\u7CB2\u7CB1\u7CAE\u7CB9\u7CBD\u7CC0\u7CC5\u7CC2\u7CD8\u7CD2\u7CDC\u7CE2\u9B3B\u7CEF\u7CF2\u7CF4\u7CF6\u7CFA\u7D06\"],[\"e340\",\"\u7D02\u7D1C\u7D15\u7D0A\u7D45\u7D4B\u7D2E\u7D32\u7D3F\u7D35\u7D46\u7D73\u7D56\u7D4E\u7D72\u7D68\u7D6E\u7D4F\u7D63\u7D93\u7D89\u7D5B\u7D8F\u7D7D\u7D9B\u7DBA\u7DAE\u7DA3\u7DB5\u7DC7\u7DBD\u7DAB\u7E3D\u7DA2\u7DAF\u7DDC\u7DB8\u7D9F\u7DB0\u7DD8\u7DDD\u7DE4\u7DDE\u7DFB\u7DF2\u7DE1\u7E05\u7E0A\u7E23\u7E21\u7E12\u7E31\u7E1F\u7E09\u7E0B\u7E22\u7E46\u7E66\u7E3B\u7E35\u7E39\u7E43\u7E37\"],[\"e380\",\"\u7E32\u7E3A\u7E67\u7E5D\u7E56\u7E5E\u7E59\u7E5A\u7E79\u7E6A\u7E69\u7E7C\u7E7B\u7E83\u7DD5\u7E7D\u8FAE\u7E7F\u7E88\u7E89\u7E8C\u7E92\u7E90\u7E93\u7E94\u7E96\u7E8E\u7E9B\u7E9C\u7F38\u7F3A\u7F45\u7F4C\u7F4D\u7F4E\u7F50\u7F51\u7F55\u7F54\u7F58\u7F5F\u7F60\u7F68\u7F69\u7F67\u7F78\u7F82\u7F86\u7F83\u7F88\u7F87\u7F8C\u7F94\u7F9E\u7F9D\u7F9A\u7FA3\u7FAF\u7FB2\u7FB9\u7FAE\u7FB6\u7FB8\u8B71\u7FC5\u7FC6\u7FCA\u7FD5\u7FD4\u7FE1\u7FE6\u7FE9\u7FF3\u7FF9\u98DC\u8006\u8004\u800B\u8012\u8018\u8019\u801C\u8021\u8028\u803F\u803B\u804A\u8046\u8052\u8058\u805A\u805F\u8062\u8068\u8073\u8072\u8070\u8076\u8079\u807D\u807F\u8084\u8086\u8085\u809B\u8093\u809A\u80AD\u5190\u80AC\u80DB\u80E5\u80D9\u80DD\u80C4\u80DA\u80D6\u8109\u80EF\u80F1\u811B\u8129\u8123\u812F\u814B\"],[\"e440\",\"\u968B\u8146\u813E\u8153\u8151\u80FC\u8171\u816E\u8165\u8166\u8174\u8183\u8188\u818A\u8180\u8182\u81A0\u8195\u81A4\u81A3\u815F\u8193\u81A9\u81B0\u81B5\u81BE\u81B8\u81BD\u81C0\u81C2\u81BA\u81C9\u81CD\u81D1\u81D9\u81D8\u81C8\u81DA\u81DF\u81E0\u81E7\u81FA\u81FB\u81FE\u8201\u8202\u8205\u8207\u820A\u820D\u8210\u8216\u8229\u822B\u8238\u8233\u8240\u8259\u8258\u825D\u825A\u825F\u8264\"],[\"e480\",\"\u8262\u8268\u826A\u826B\u822E\u8271\u8277\u8278\u827E\u828D\u8292\u82AB\u829F\u82BB\u82AC\u82E1\u82E3\u82DF\u82D2\u82F4\u82F3\u82FA\u8393\u8303\u82FB\u82F9\u82DE\u8306\u82DC\u8309\u82D9\u8335\u8334\u8316\u8332\u8331\u8340\u8339\u8350\u8345\u832F\u832B\u8317\u8318\u8385\u839A\u83AA\u839F\u83A2\u8396\u8323\u838E\u8387\u838A\u837C\u83B5\u8373\u8375\u83A0\u8389\u83A8\u83F4\u8413\u83EB\u83CE\u83FD\u8403\u83D8\u840B\u83C1\u83F7\u8407\u83E0\u83F2\u840D\u8422\u8420\u83BD\u8438\u8506\u83FB\u846D\u842A\u843C\u855A\u8484\u8477\u846B\u84AD\u846E\u8482\u8469\u8446\u842C\u846F\u8479\u8435\u84CA\u8462\u84B9\u84BF\u849F\u84D9\u84CD\u84BB\u84DA\u84D0\u84C1\u84C6\u84D6\u84A1\u8521\u84FF\u84F4\u8517\u8518\u852C\u851F\u8515\u8514\u84FC\u8540\u8563\u8558\u8548\"],[\"e540\",\"\u8541\u8602\u854B\u8555\u8580\u85A4\u8588\u8591\u858A\u85A8\u856D\u8594\u859B\u85EA\u8587\u859C\u8577\u857E\u8590\u85C9\u85BA\u85CF\u85B9\u85D0\u85D5\u85DD\u85E5\u85DC\u85F9\u860A\u8613\u860B\u85FE\u85FA\u8606\u8622\u861A\u8630\u863F\u864D\u4E55\u8654\u865F\u8667\u8671\u8693\u86A3\u86A9\u86AA\u868B\u868C\u86B6\u86AF\u86C4\u86C6\u86B0\u86C9\u8823\u86AB\u86D4\u86DE\u86E9\u86EC\"],[\"e580\",\"\u86DF\u86DB\u86EF\u8712\u8706\u8708\u8700\u8703\u86FB\u8711\u8709\u870D\u86F9\u870A\u8734\u873F\u8737\u873B\u8725\u8729\u871A\u8760\u875F\u8778\u874C\u874E\u8774\u8757\u8768\u876E\u8759\u8753\u8763\u876A\u8805\u87A2\u879F\u8782\u87AF\u87CB\u87BD\u87C0\u87D0\u96D6\u87AB\u87C4\u87B3\u87C7\u87C6\u87BB\u87EF\u87F2\u87E0\u880F\u880D\u87FE\u87F6\u87F7\u880E\u87D2\u8811\u8816\u8815\u8822\u8821\u8831\u8836\u8839\u8827\u883B\u8844\u8842\u8852\u8859\u885E\u8862\u886B\u8881\u887E\u889E\u8875\u887D\u88B5\u8872\u8882\u8897\u8892\u88AE\u8899\u88A2\u888D\u88A4\u88B0\u88BF\u88B1\u88C3\u88C4\u88D4\u88D8\u88D9\u88DD\u88F9\u8902\u88FC\u88F4\u88E8\u88F2\u8904\u890C\u890A\u8913\u8943\u891E\u8925\u892A\u892B\u8941\u8944\u893B\u8936\u8938\u894C\u891D\u8960\u895E\"],[\"e640\",\"\u8966\u8964\u896D\u896A\u896F\u8974\u8977\u897E\u8983\u8988\u898A\u8993\u8998\u89A1\u89A9\u89A6\u89AC\u89AF\u89B2\u89BA\u89BD\u89BF\u89C0\u89DA\u89DC\u89DD\u89E7\u89F4\u89F8\u8A03\u8A16\u8A10\u8A0C\u8A1B\u8A1D\u8A25\u8A36\u8A41\u8A5B\u8A52\u8A46\u8A48\u8A7C\u8A6D\u8A6C\u8A62\u8A85\u8A82\u8A84\u8AA8\u8AA1\u8A91\u8AA5\u8AA6\u8A9A\u8AA3\u8AC4\u8ACD\u8AC2\u8ADA\u8AEB\u8AF3\u8AE7\"],[\"e680\",\"\u8AE4\u8AF1\u8B14\u8AE0\u8AE2\u8AF7\u8ADE\u8ADB\u8B0C\u8B07\u8B1A\u8AE1\u8B16\u8B10\u8B17\u8B20\u8B33\u97AB\u8B26\u8B2B\u8B3E\u8B28\u8B41\u8B4C\u8B4F\u8B4E\u8B49\u8B56\u8B5B\u8B5A\u8B6B\u8B5F\u8B6C\u8B6F\u8B74\u8B7D\u8B80\u8B8C\u8B8E\u8B92\u8B93\u8B96\u8B99\u8B9A\u8C3A\u8C41\u8C3F\u8C48\u8C4C\u8C4E\u8C50\u8C55\u8C62\u8C6C\u8C78\u8C7A\u8C82\u8C89\u8C85\u8C8A\u8C8D\u8C8E\u8C94\u8C7C\u8C98\u621D\u8CAD\u8CAA\u8CBD\u8CB2\u8CB3\u8CAE\u8CB6\u8CC8\u8CC1\u8CE4\u8CE3\u8CDA\u8CFD\u8CFA\u8CFB\u8D04\u8D05\u8D0A\u8D07\u8D0F\u8D0D\u8D10\u9F4E\u8D13\u8CCD\u8D14\u8D16\u8D67\u8D6D\u8D71\u8D73\u8D81\u8D99\u8DC2\u8DBE\u8DBA\u8DCF\u8DDA\u8DD6\u8DCC\u8DDB\u8DCB\u8DEA\u8DEB\u8DDF\u8DE3\u8DFC\u8E08\u8E09\u8DFF\u8E1D\u8E1E\u8E10\u8E1F\u8E42\u8E35\u8E30\u8E34\u8E4A\"],[\"e740\",\"\u8E47\u8E49\u8E4C\u8E50\u8E48\u8E59\u8E64\u8E60\u8E2A\u8E63\u8E55\u8E76\u8E72\u8E7C\u8E81\u8E87\u8E85\u8E84\u8E8B\u8E8A\u8E93\u8E91\u8E94\u8E99\u8EAA\u8EA1\u8EAC\u8EB0\u8EC6\u8EB1\u8EBE\u8EC5\u8EC8\u8ECB\u8EDB\u8EE3\u8EFC\u8EFB\u8EEB\u8EFE\u8F0A\u8F05\u8F15\u8F12\u8F19\u8F13\u8F1C\u8F1F\u8F1B\u8F0C\u8F26\u8F33\u8F3B\u8F39\u8F45\u8F42\u8F3E\u8F4C\u8F49\u8F46\u8F4E\u8F57\u8F5C\"],[\"e780\",\"\u8F62\u8F63\u8F64\u8F9C\u8F9F\u8FA3\u8FAD\u8FAF\u8FB7\u8FDA\u8FE5\u8FE2\u8FEA\u8FEF\u9087\u8FF4\u9005\u8FF9\u8FFA\u9011\u9015\u9021\u900D\u901E\u9016\u900B\u9027\u9036\u9035\u9039\u8FF8\u904F\u9050\u9051\u9052\u900E\u9049\u903E\u9056\u9058\u905E\u9068\u906F\u9076\u96A8\u9072\u9082\u907D\u9081\u9080\u908A\u9089\u908F\u90A8\u90AF\u90B1\u90B5\u90E2\u90E4\u6248\u90DB\u9102\u9112\u9119\u9132\u9130\u914A\u9156\u9158\u9163\u9165\u9169\u9173\u9172\u918B\u9189\u9182\u91A2\u91AB\u91AF\u91AA\u91B5\u91B4\u91BA\u91C0\u91C1\u91C9\u91CB\u91D0\u91D6\u91DF\u91E1\u91DB\u91FC\u91F5\u91F6\u921E\u91FF\u9214\u922C\u9215\u9211\u925E\u9257\u9245\u9249\u9264\u9248\u9295\u923F\u924B\u9250\u929C\u9296\u9293\u929B\u925A\u92CF\u92B9\u92B7\u92E9\u930F\u92FA\u9344\u932E\"],[\"e840\",\"\u9319\u9322\u931A\u9323\u933A\u9335\u933B\u935C\u9360\u937C\u936E\u9356\u93B0\u93AC\u93AD\u9394\u93B9\u93D6\u93D7\u93E8\u93E5\u93D8\u93C3\u93DD\u93D0\u93C8\u93E4\u941A\u9414\u9413\u9403\u9407\u9410\u9436\u942B\u9435\u9421\u943A\u9441\u9452\u9444\u945B\u9460\u9462\u945E\u946A\u9229\u9470\u9475\u9477\u947D\u945A\u947C\u947E\u9481\u947F\u9582\u9587\u958A\u9594\u9596\u9598\u9599\"],[\"e880\",\"\u95A0\u95A8\u95A7\u95AD\u95BC\u95BB\u95B9\u95BE\u95CA\u6FF6\u95C3\u95CD\u95CC\u95D5\u95D4\u95D6\u95DC\u95E1\u95E5\u95E2\u9621\u9628\u962E\u962F\u9642\u964C\u964F\u964B\u9677\u965C\u965E\u965D\u965F\u9666\u9672\u966C\u968D\u9698\u9695\u9697\u96AA\u96A7\u96B1\u96B2\u96B0\u96B4\u96B6\u96B8\u96B9\u96CE\u96CB\u96C9\u96CD\u894D\u96DC\u970D\u96D5\u96F9\u9704\u9706\u9708\u9713\u970E\u9711\u970F\u9716\u9719\u9724\u972A\u9730\u9739\u973D\u973E\u9744\u9746\u9748\u9742\u9749\u975C\u9760\u9764\u9766\u9768\u52D2\u976B\u9771\u9779\u9785\u977C\u9781\u977A\u9786\u978B\u978F\u9790\u979C\u97A8\u97A6\u97A3\u97B3\u97B4\u97C3\u97C6\u97C8\u97CB\u97DC\u97ED\u9F4F\u97F2\u7ADF\u97F6\u97F5\u980F\u980C\u9838\u9824\u9821\u9837\u983D\u9846\u984F\u984B\u986B\u986F\u9870\"],[\"e940\",\"\u9871\u9874\u9873\u98AA\u98AF\u98B1\u98B6\u98C4\u98C3\u98C6\u98E9\u98EB\u9903\u9909\u9912\u9914\u9918\u9921\u991D\u991E\u9924\u9920\u992C\u992E\u993D\u993E\u9942\u9949\u9945\u9950\u994B\u9951\u9952\u994C\u9955\u9997\u9998\u99A5\u99AD\u99AE\u99BC\u99DF\u99DB\u99DD\u99D8\u99D1\u99ED\u99EE\u99F1\u99F2\u99FB\u99F8\u9A01\u9A0F\u9A05\u99E2\u9A19\u9A2B\u9A37\u9A45\u9A42\u9A40\u9A43\"],[\"e980\",\"\u9A3E\u9A55\u9A4D\u9A5B\u9A57\u9A5F\u9A62\u9A65\u9A64\u9A69\u9A6B\u9A6A\u9AAD\u9AB0\u9ABC\u9AC0\u9ACF\u9AD1\u9AD3\u9AD4\u9ADE\u9ADF\u9AE2\u9AE3\u9AE6\u9AEF\u9AEB\u9AEE\u9AF4\u9AF1\u9AF7\u9AFB\u9B06\u9B18\u9B1A\u9B1F\u9B22\u9B23\u9B25\u9B27\u9B28\u9B29\u9B2A\u9B2E\u9B2F\u9B32\u9B44\u9B43\u9B4F\u9B4D\u9B4E\u9B51\u9B58\u9B74\u9B93\u9B83\u9B91\u9B96\u9B97\u9B9F\u9BA0\u9BA8\u9BB4\u9BC0\u9BCA\u9BB9\u9BC6\u9BCF\u9BD1\u9BD2\u9BE3\u9BE2\u9BE4\u9BD4\u9BE1\u9C3A\u9BF2\u9BF1\u9BF0\u9C15\u9C14\u9C09\u9C13\u9C0C\u9C06\u9C08\u9C12\u9C0A\u9C04\u9C2E\u9C1B\u9C25\u9C24\u9C21\u9C30\u9C47\u9C32\u9C46\u9C3E\u9C5A\u9C60\u9C67\u9C76\u9C78\u9CE7\u9CEC\u9CF0\u9D09\u9D08\u9CEB\u9D03\u9D06\u9D2A\u9D26\u9DAF\u9D23\u9D1F\u9D44\u9D15\u9D12\u9D41\u9D3F\u9D3E\u9D46\u9D48\"],[\"ea40\",\"\u9D5D\u9D5E\u9D64\u9D51\u9D50\u9D59\u9D72\u9D89\u9D87\u9DAB\u9D6F\u9D7A\u9D9A\u9DA4\u9DA9\u9DB2\u9DC4\u9DC1\u9DBB\u9DB8\u9DBA\u9DC6\u9DCF\u9DC2\u9DD9\u9DD3\u9DF8\u9DE6\u9DED\u9DEF\u9DFD\u9E1A\u9E1B\u9E1E\u9E75\u9E79\u9E7D\u9E81\u9E88\u9E8B\u9E8C\u9E92\u9E95\u9E91\u9E9D\u9EA5\u9EA9\u9EB8\u9EAA\u9EAD\u9761\u9ECC\u9ECE\u9ECF\u9ED0\u9ED4\u9EDC\u9EDE\u9EDD\u9EE0\u9EE5\u9EE8\u9EEF\"],[\"ea80\",\"\u9EF4\u9EF6\u9EF7\u9EF9\u9EFB\u9EFC\u9EFD\u9F07\u9F08\u76B7\u9F15\u9F21\u9F2C\u9F3E\u9F4A\u9F52\u9F54\u9F63\u9F5F\u9F60\u9F61\u9F66\u9F67\u9F6C\u9F6A\u9F77\u9F72\u9F76\u9F95\u9F9C\u9FA0\u582F\u69C7\u9059\u7464\u51DC\u7199\"],[\"ed40\",\"\u7E8A\u891C\u9348\u9288\u84DC\u4FC9\u70BB\u6631\u68C8\u92F9\u66FB\u5F45\u4E28\u4EE1\u4EFC\u4F00\u4F03\u4F39\u4F56\u4F92\u4F8A\u4F9A\u4F94\u4FCD\u5040\u5022\u4FFF\u501E\u5046\u5070\u5042\u5094\u50F4\u50D8\u514A\u5164\u519D\u51BE\u51EC\u5215\u529C\u52A6\u52C0\u52DB\u5300\u5307\u5324\u5372\u5393\u53B2\u53DD\uFA0E\u549C\u548A\u54A9\u54FF\u5586\u5759\u5765\u57AC\u57C8\u57C7\uFA0F\"],[\"ed80\",\"\uFA10\u589E\u58B2\u590B\u5953\u595B\u595D\u5963\u59A4\u59BA\u5B56\u5BC0\u752F\u5BD8\u5BEC\u5C1E\u5CA6\u5CBA\u5CF5\u5D27\u5D53\uFA11\u5D42\u5D6D\u5DB8\u5DB9\u5DD0\u5F21\u5F34\u5F67\u5FB7\u5FDE\u605D\u6085\u608A\u60DE\u60D5\u6120\u60F2\u6111\u6137\u6130\u6198\u6213\u62A6\u63F5\u6460\u649D\u64CE\u654E\u6600\u6615\u663B\u6609\u662E\u661E\u6624\u6665\u6657\u6659\uFA12\u6673\u6699\u66A0\u66B2\u66BF\u66FA\u670E\uF929\u6766\u67BB\u6852\u67C0\u6801\u6844\u68CF\uFA13\u6968\uFA14\u6998\u69E2\u6A30\u6A6B\u6A46\u6A73\u6A7E\u6AE2\u6AE4\u6BD6\u6C3F\u6C5C\u6C86\u6C6F\u6CDA\u6D04\u6D87\u6D6F\u6D96\u6DAC\u6DCF\u6DF8\u6DF2\u6DFC\u6E39\u6E5C\u6E27\u6E3C\u6EBF\u6F88\u6FB5\u6FF5\u7005\u7007\u7028\u7085\u70AB\u710F\u7104\u715C\u7146\u7147\uFA15\u71C1\u71FE\u72B1\"],[\"ee40\",\"\u72BE\u7324\uFA16\u7377\u73BD\u73C9\u73D6\u73E3\u73D2\u7407\u73F5\u7426\u742A\u7429\u742E\u7462\u7489\u749F\u7501\u756F\u7682\u769C\u769E\u769B\u76A6\uFA17\u7746\u52AF\u7821\u784E\u7864\u787A\u7930\uFA18\uFA19\uFA1A\u7994\uFA1B\u799B\u7AD1\u7AE7\uFA1C\u7AEB\u7B9E\uFA1D\u7D48\u7D5C\u7DB7\u7DA0\u7DD6\u7E52\u7F47\u7FA1\uFA1E\u8301\u8362\u837F\u83C7\u83F6\u8448\u84B4\u8553\u8559\"],[\"ee80\",\"\u856B\uFA1F\u85B0\uFA20\uFA21\u8807\u88F5\u8A12\u8A37\u8A79\u8AA7\u8ABE\u8ADF\uFA22\u8AF6\u8B53\u8B7F\u8CF0\u8CF4\u8D12\u8D76\uFA23\u8ECF\uFA24\uFA25\u9067\u90DE\uFA26\u9115\u9127\u91DA\u91D7\u91DE\u91ED\u91EE\u91E4\u91E5\u9206\u9210\u920A\u923A\u9240\u923C\u924E\u9259\u9251\u9239\u9267\u92A7\u9277\u9278\u92E7\u92D7\u92D9\u92D0\uFA27\u92D5\u92E0\u92D3\u9325\u9321\u92FB\uFA28\u931E\u92FF\u931D\u9302\u9370\u9357\u93A4\u93C6\u93DE\u93F8\u9431\u9445\u9448\u9592\uF9DC\uFA29\u969D\u96AF\u9733\u973B\u9743\u974D\u974F\u9751\u9755\u9857\u9865\uFA2A\uFA2B\u9927\uFA2C\u999E\u9A4E\u9AD9\u9ADC\u9B75\u9B72\u9B8F\u9BB1\u9BBB\u9C00\u9D70\u9D6B\uFA2D\u9E19\u9ED1\"],[\"eeef\",\"\u2170\",9,\"\uFFE2\uFFE4\uFF07\uFF02\"],[\"f040\",\"\uE000\",62],[\"f080\",\"\uE03F\",124],[\"f140\",\"\uE0BC\",62],[\"f180\",\"\uE0FB\",124],[\"f240\",\"\uE178\",62],[\"f280\",\"\uE1B7\",124],[\"f340\",\"\uE234\",62],[\"f380\",\"\uE273\",124],[\"f440\",\"\uE2F0\",62],[\"f480\",\"\uE32F\",124],[\"f540\",\"\uE3AC\",62],[\"f580\",\"\uE3EB\",124],[\"f640\",\"\uE468\",62],[\"f680\",\"\uE4A7\",124],[\"f740\",\"\uE524\",62],[\"f780\",\"\uE563\",124],[\"f840\",\"\uE5E0\",62],[\"f880\",\"\uE61F\",124],[\"f940\",\"\uE69C\"],[\"fa40\",\"\u2170\",9,\"\u2160\",9,\"\uFFE2\uFFE4\uFF07\uFF02\u3231\u2116\u2121\u2235\u7E8A\u891C\u9348\u9288\u84DC\u4FC9\u70BB\u6631\u68C8\u92F9\u66FB\u5F45\u4E28\u4EE1\u4EFC\u4F00\u4F03\u4F39\u4F56\u4F92\u4F8A\u4F9A\u4F94\u4FCD\u5040\u5022\u4FFF\u501E\u5046\u5070\u5042\u5094\u50F4\u50D8\u514A\"],[\"fa80\",\"\u5164\u519D\u51BE\u51EC\u5215\u529C\u52A6\u52C0\u52DB\u5300\u5307\u5324\u5372\u5393\u53B2\u53DD\uFA0E\u549C\u548A\u54A9\u54FF\u5586\u5759\u5765\u57AC\u57C8\u57C7\uFA0F\uFA10\u589E\u58B2\u590B\u5953\u595B\u595D\u5963\u59A4\u59BA\u5B56\u5BC0\u752F\u5BD8\u5BEC\u5C1E\u5CA6\u5CBA\u5CF5\u5D27\u5D53\uFA11\u5D42\u5D6D\u5DB8\u5DB9\u5DD0\u5F21\u5F34\u5F67\u5FB7\u5FDE\u605D\u6085\u608A\u60DE\u60D5\u6120\u60F2\u6111\u6137\u6130\u6198\u6213\u62A6\u63F5\u6460\u649D\u64CE\u654E\u6600\u6615\u663B\u6609\u662E\u661E\u6624\u6665\u6657\u6659\uFA12\u6673\u6699\u66A0\u66B2\u66BF\u66FA\u670E\uF929\u6766\u67BB\u6852\u67C0\u6801\u6844\u68CF\uFA13\u6968\uFA14\u6998\u69E2\u6A30\u6A6B\u6A46\u6A73\u6A7E\u6AE2\u6AE4\u6BD6\u6C3F\u6C5C\u6C86\u6C6F\u6CDA\u6D04\u6D87\u6D6F\"],[\"fb40\",\"\u6D96\u6DAC\u6DCF\u6DF8\u6DF2\u6DFC\u6E39\u6E5C\u6E27\u6E3C\u6EBF\u6F88\u6FB5\u6FF5\u7005\u7007\u7028\u7085\u70AB\u710F\u7104\u715C\u7146\u7147\uFA15\u71C1\u71FE\u72B1\u72BE\u7324\uFA16\u7377\u73BD\u73C9\u73D6\u73E3\u73D2\u7407\u73F5\u7426\u742A\u7429\u742E\u7462\u7489\u749F\u7501\u756F\u7682\u769C\u769E\u769B\u76A6\uFA17\u7746\u52AF\u7821\u784E\u7864\u787A\u7930\uFA18\uFA19\"],[\"fb80\",\"\uFA1A\u7994\uFA1B\u799B\u7AD1\u7AE7\uFA1C\u7AEB\u7B9E\uFA1D\u7D48\u7D5C\u7DB7\u7DA0\u7DD6\u7E52\u7F47\u7FA1\uFA1E\u8301\u8362\u837F\u83C7\u83F6\u8448\u84B4\u8553\u8559\u856B\uFA1F\u85B0\uFA20\uFA21\u8807\u88F5\u8A12\u8A37\u8A79\u8AA7\u8ABE\u8ADF\uFA22\u8AF6\u8B53\u8B7F\u8CF0\u8CF4\u8D12\u8D76\uFA23\u8ECF\uFA24\uFA25\u9067\u90DE\uFA26\u9115\u9127\u91DA\u91D7\u91DE\u91ED\u91EE\u91E4\u91E5\u9206\u9210\u920A\u923A\u9240\u923C\u924E\u9259\u9251\u9239\u9267\u92A7\u9277\u9278\u92E7\u92D7\u92D9\u92D0\uFA27\u92D5\u92E0\u92D3\u9325\u9321\u92FB\uFA28\u931E\u92FF\u931D\u9302\u9370\u9357\u93A4\u93C6\u93DE\u93F8\u9431\u9445\u9448\u9592\uF9DC\uFA29\u969D\u96AF\u9733\u973B\u9743\u974D\u974F\u9751\u9755\u9857\u9865\uFA2A\uFA2B\u9927\uFA2C\u999E\u9A4E\u9AD9\"],[\"fc40\",\"\u9ADC\u9B75\u9B72\u9B8F\u9BB1\u9BBB\u9C00\u9D70\u9D6B\uFA2D\u9E19\u9ED1\"]]");
      /***/
    },

    /***/
    "9gS/":
    /*!***********************************************!*\
      !*** ./node_modules/canvas/lib/parse-font.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function gS(module, exports, __webpack_require__) {
      "use strict";
      /**
       * Font RegExp helpers.
       */

      var weights = 'bold|bolder|lighter|[1-9]00';
      var styles = 'italic|oblique';
      var variants = 'small-caps';
      var stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded';
      var units = 'px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q';
      var string = '\'([^\']+)\'|"([^"]+)"|[\\w\\s-]+'; // [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
      //    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
      // https://drafts.csswg.org/css-fonts-3/#font-prop

      var weightRe = new RegExp("(".concat(weights, ") +"), 'i');
      var styleRe = new RegExp("(".concat(styles, ") +"), 'i');
      var variantRe = new RegExp("(".concat(variants, ") +"), 'i');
      var stretchRe = new RegExp("(".concat(stretches, ") +"), 'i');
      var sizeFamilyRe = new RegExp("([\\d\\.]+)(".concat(units, ") *((?:").concat(string, ")( *, *(?:").concat(string, "))*)"));
      /**
       * Cache font parsing.
       */

      var cache = {};
      var defaultHeight = 16; // pt, common browser default

      /**
       * Parse font `str`.
       *
       * @param {String} str
       * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
       *   appearing in the input string.
       * @api private
       */

      module.exports = function (str) {
        // Cached
        if (cache[str]) return cache[str]; // Try for required properties first.

        var sizeFamily = sizeFamilyRe.exec(str);
        if (!sizeFamily) return; // invalid
        // Default values and required properties

        var font = {
          weight: 'normal',
          style: 'normal',
          stretch: 'normal',
          variant: 'normal',
          size: parseFloat(sizeFamily[1]),
          unit: sizeFamily[2],
          family: sizeFamily[3].replace(/["']/g, '').replace(/ *, */g, ',')
        }; // Optional, unordered properties.

        var weight, style, variant, stretch; // Stop search at `sizeFamily.index`

        var substr = str.substring(0, sizeFamily.index);
        if (weight = weightRe.exec(substr)) font.weight = weight[1];
        if (style = styleRe.exec(substr)) font.style = style[1];
        if (variant = variantRe.exec(substr)) font.variant = variant[1];
        if (stretch = stretchRe.exec(substr)) font.stretch = stretch[1]; // Convert to device units. (`font.unit` is the original unit)
        // TODO: ch, ex

        switch (font.unit) {
          case 'pt':
            font.size /= 0.75;
            break;

          case 'pc':
            font.size *= 16;
            break;

          case 'in':
            font.size *= 96;
            break;

          case 'cm':
            font.size *= 96.0 / 2.54;
            break;

          case 'mm':
            font.size *= 96.0 / 25.4;
            break;

          case '%':
            // TODO disabled because existing unit tests assume 100
            // font.size *= defaultHeight / 100 / 0.75
            break;

          case 'em':
          case 'rem':
            font.size *= defaultHeight / 0.75;
            break;

          case 'q':
            font.size *= 96 / 25.4 / 4;
            break;
        }

        return cache[str] = font;
      };
      /***/

    },

    /***/
    "DSr2":
    /*!******************************************!*\
      !*** ./src/app/datecsprinter.service.ts ***!
      \******************************************/

    /*! exports provided: DatecsprinterService */

    /***/
    function DSr2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatecsprinterService", function () {
        return DatecsprinterService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DatecsprinterService = /*#__PURE__*/function () {
        function DatecsprinterService() {
          _classCallCheck(this, DatecsprinterService);

          /*! canvas-to-bmp version 1.0 ALPHA
              (c) 2015 Ken "Epistemex" Fyrstenberg
              MIT License (this header required)
          */
          this.CanvasToBMP = {
            /**
             * Convert a canvas element to ArrayBuffer containing a BMP file
             * with support for 32-bit (alpha).
             *
             * Note that CORS requirement must be fulfilled.
             *
             * @param {HTMLCanvasElement} canvas - the canvas element to convert
             * @return {ArrayBuffer}
             */
            toArrayBuffer: function toArrayBuffer(canvas) {
              var w = canvas.width,
                  h = canvas.height,
                  w4 = w * 4,
                  idata = canvas.getContext("2d").getImageData(0, 0, w, h),
                  data32 = new Uint32Array(idata.data.buffer),
                  // 32-bit representation of canvas
              stride = Math.floor((32 * w + 31) / 32) * 4,
                  // row length incl. padding
              pixelArraySize = stride * h,
                  // total bitmap size
              fileLength = 122 + pixelArraySize,
                  // header size is known + bitmap
              file = new ArrayBuffer(fileLength),
                  // raw byte buffer (returned)
              view = new DataView(file),
                  // handle endian, reg. width etc.
              pos = 0,
                  x,
                  y = 0,
                  p,
                  s = 0,
                  a,
                  v; // write file header

              setU16(0x4d42); // BM

              setU32(fileLength); // total length

              pos += 4; // skip unused fields

              setU32(0x7a); // offset to pixels
              // DIB header

              setU32(108); // header size

              setU32(w);
              setU32(-h >>> 0); // negative = top-to-bottom

              setU16(1); // 1 plane

              setU16(32); // 32-bits (RGBA)

              setU32(3); // no compression (BI_BITFIELDS, 3)

              setU32(pixelArraySize); // bitmap size incl. padding (stride x height)

              setU32(2835); // pixels/meter h (~72 DPI x 39.3701 inch/m)

              setU32(2835); // pixels/meter v

              pos += 8; // skip color/important colors

              setU32(0xff0000); // red channel mask

              setU32(0xff00); // green channel mask

              setU32(0xff); // blue channel mask

              setU32(0xff000000); // alpha channel mask

              setU32(0x57696e20); // " win" color space
              // bitmap data, change order of ABGR to BGRA

              while (y < h) {
                p = 0x7a + y * stride; // offset + stride x height

                x = 0;

                while (x < w4) {
                  v = data32[s++]; // get ABGR

                  a = v >>> 24; // alpha channel

                  view.setUint32(p + x, v << 8 | a); // set BGRA

                  x += 4;
                }

                y++;
              }

              return file; // helper method to move current buffer position

              function setU16(data) {
                view.setUint16(pos, data, true);
                pos += 2;
              }

              function setU32(data) {
                view.setUint32(pos, data, true);
                pos += 4;
              }
            },

            /**
             * Converts a canvas to BMP file, returns a Blob representing the
             * file. This can be used with URL.createObjectURL().
             * Note that CORS requirement must be fulfilled.
             *
             * @param {HTMLCanvasElement} canvas - the canvas element to convert
             * @return {Blob}
             */
            toBlob: function toBlob(canvas) {
              return new Blob([this.toArrayBuffer(canvas)], {
                type: "image/bmp"
              });
            },

            /**
             * Converts the canvas to a data-URI representing a BMP file.
             * Note that CORS requirement must be fulfilled.
             *
             * @param canvas
             * @return {string}
             */
            toDataURL: function toDataURL(canvas) {
              var buffer = new Uint8Array(this.toArrayBuffer(canvas)),
                  bs = "",
                  i = 0,
                  l = buffer.length;

              while (i < l) bs += String.fromCharCode(buffer[i++]);

              return "data:image/bmp;base64," + btoa(bs);
            }
          };
          console.log('Hello DatecsPrinter Provider');
        }

        _createClass(DatecsprinterService, [{
          key: "listBluetoothDevices",
          value: function listBluetoothDevices() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      window.DatecsPrinter.listBluetoothDevices(function (success) {
                        resolve(success);
                      }, function (error) {
                        reject(error);
                      });
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
          }
        }, {
          key: "connect",
          value: function connect(address) {
            return new Promise(function (resolve, reject) {
              window.DatecsPrinter.connect(address, function (success) {
                resolve(success);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "disconnect",
          value: function disconnect() {
            return new Promise(function (resolve, reject) {
              window.DatecsPrinter.disconnect(function (success) {
                resolve(success);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "feedPaper",
          value: function feedPaper() {
            var lines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            return new Promise(function (resolve, reject) {
              window.DatecsPrinter.feedPaper(lines, function (success) {
                resolve(success);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "printText",
          value: function printText(text) {
            var charset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO-8859-1';
            return new Promise(function (resolve, reject) {
              window.DatecsPrinter.printText(text, charset, function (success) {
                resolve(success);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "setBarcode",
          value: function setBarcode(align, small, scale, hri, height) {
            return new Promise(function (resolve, reject) {
              window.DatecsPrinter.setBarcode(align, small, scale, hri, height, function (success) {
                resolve(success);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "printBarcode",
          value: function printBarcode() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1234445775';
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 73;
            return new Promise(function (resolve, reject) {
              window.DatecsPrinter.printBarcode(type, data, function (success) {
                resolve(success);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getStatus",
          value: function getStatus() {
            return new Promise(function (resolve, reject) {
              window.DatecsPrinter.getStatus(function (success) {
                resolve(success);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "getTemperature",
          value: function getTemperature() {
            return new Promise(function (resolve, reject) {
              window.DatecsPrinter.getTemperature(function (success) {
                resolve(success);
              }, function (error) {
                reject(error);
              });
            });
          }
        }, {
          key: "printImage",
          value: function printImage(image, height, width) {
            var align = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            return new Promise(function (resolve, reject) {
              window.DatecsPrinter.printImage(image, height, width, align, function (success) {
                resolve(success);
              }, function (error) {
                reject(error);
              });
            });
          }
        }]);

        return DatecsprinterService;
      }();

      DatecsprinterService.ctorParameters = function () {
        return [];
      };

      DatecsprinterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DatecsprinterService);
      /***/
    },

    /***/
    "EIVV":
    /*!********************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/dbcs-codec.js ***!
      \********************************************************************************************/

    /*! no static exports found */

    /***/
    function EIVV(module, exports, __webpack_require__) {
      "use strict";

      var Buffer = __webpack_require__(
      /*! safer-buffer */
      "xZGU").Buffer; // Multibyte codec. In this scheme, a character is represented by 1 or more bytes.
      // Our codec supports UTF-16 surrogates, extensions for GB18030 and unicode sequences.
      // To save memory and loading time, we read table files only when requested.


      exports._dbcs = DBCSCodec;
      var UNASSIGNED = -1,
          GB18030_CODE = -2,
          SEQ_START = -10,
          NODE_START = -1000,
          UNASSIGNED_NODE = new Array(0x100),
          DEF_CHAR = -1;

      for (var i = 0; i < 0x100; i++) UNASSIGNED_NODE[i] = UNASSIGNED; // Class DBCSCodec reads and initializes mapping tables.


      function DBCSCodec(codecOptions, iconv) {
        this.encodingName = codecOptions.encodingName;
        if (!codecOptions) throw new Error("DBCS codec is called without the data.");
        if (!codecOptions.table) throw new Error("Encoding '" + this.encodingName + "' has no data."); // Load tables.

        var mappingTable = codecOptions.table(); // Decode tables: MBCS -> Unicode.
        // decodeTables is a trie, encoded as an array of arrays of integers. Internal arrays are trie nodes and all have len = 256.
        // Trie root is decodeTables[0].
        // Values: >=  0 -> unicode character code. can be > 0xFFFF
        //         == UNASSIGNED -> unknown/unassigned sequence.
        //         == GB18030_CODE -> this is the end of a GB18030 4-byte sequence.
        //         <= NODE_START -> index of the next node in our trie to process next byte.
        //         <= SEQ_START  -> index of the start of a character code sequence, in decodeTableSeq.

        this.decodeTables = [];
        this.decodeTables[0] = UNASSIGNED_NODE.slice(0); // Create root node.
        // Sometimes a MBCS char corresponds to a sequence of unicode chars. We store them as arrays of integers here. 

        this.decodeTableSeq = []; // Actual mapping tables consist of chunks. Use them to fill up decode tables.

        for (var i = 0; i < mappingTable.length; i++) this._addDecodeChunk(mappingTable[i]);

        this.defaultCharUnicode = iconv.defaultCharUnicode; // Encode tables: Unicode -> DBCS.
        // `encodeTable` is array mapping from unicode char to encoded char. All its values are integers for performance.
        // Because it can be sparse, it is represented as array of buckets by 256 chars each. Bucket can be null.
        // Values: >=  0 -> it is a normal char. Write the value (if <=256 then 1 byte, if <=65536 then 2 bytes, etc.).
        //         == UNASSIGNED -> no conversion found. Output a default char.
        //         <= SEQ_START  -> it's an index in encodeTableSeq, see below. The character starts a sequence.

        this.encodeTable = []; // `encodeTableSeq` is used when a sequence of unicode characters is encoded as a single code. We use a tree of
        // objects where keys correspond to characters in sequence and leafs are the encoded dbcs values. A special DEF_CHAR key
        // means end of sequence (needed when one sequence is a strict subsequence of another).
        // Objects are kept separately from encodeTable to increase performance.

        this.encodeTableSeq = []; // Some chars can be decoded, but need not be encoded.

        var skipEncodeChars = {};
        if (codecOptions.encodeSkipVals) for (var i = 0; i < codecOptions.encodeSkipVals.length; i++) {
          var val = codecOptions.encodeSkipVals[i];
          if (typeof val === 'number') skipEncodeChars[val] = true;else for (var j = val.from; j <= val.to; j++) skipEncodeChars[j] = true;
        } // Use decode trie to recursively fill out encode tables.

        this._fillEncodeTable(0, 0, skipEncodeChars); // Add more encoding pairs when needed.


        if (codecOptions.encodeAdd) {
          for (var uChar in codecOptions.encodeAdd) if (Object.prototype.hasOwnProperty.call(codecOptions.encodeAdd, uChar)) this._setEncodeChar(uChar.charCodeAt(0), codecOptions.encodeAdd[uChar]);
        }

        this.defCharSB = this.encodeTable[0][iconv.defaultCharSingleByte.charCodeAt(0)];
        if (this.defCharSB === UNASSIGNED) this.defCharSB = this.encodeTable[0]['?'];
        if (this.defCharSB === UNASSIGNED) this.defCharSB = "?".charCodeAt(0); // Load & create GB18030 tables when needed.

        if (typeof codecOptions.gb18030 === 'function') {
          this.gb18030 = codecOptions.gb18030(); // Load GB18030 ranges.
          // Add GB18030 decode tables.

          var thirdByteNodeIdx = this.decodeTables.length;
          var thirdByteNode = this.decodeTables[thirdByteNodeIdx] = UNASSIGNED_NODE.slice(0);
          var fourthByteNodeIdx = this.decodeTables.length;
          var fourthByteNode = this.decodeTables[fourthByteNodeIdx] = UNASSIGNED_NODE.slice(0);

          for (var i = 0x81; i <= 0xFE; i++) {
            var secondByteNodeIdx = NODE_START - this.decodeTables[0][i];
            var secondByteNode = this.decodeTables[secondByteNodeIdx];

            for (var j = 0x30; j <= 0x39; j++) secondByteNode[j] = NODE_START - thirdByteNodeIdx;
          }

          for (var i = 0x81; i <= 0xFE; i++) thirdByteNode[i] = NODE_START - fourthByteNodeIdx;

          for (var i = 0x30; i <= 0x39; i++) fourthByteNode[i] = GB18030_CODE;
        }
      }

      DBCSCodec.prototype.encoder = DBCSEncoder;
      DBCSCodec.prototype.decoder = DBCSDecoder; // Decoder helpers

      DBCSCodec.prototype._getDecodeTrieNode = function (addr) {
        var bytes = [];

        for (; addr > 0; addr >>= 8) bytes.push(addr & 0xFF);

        if (bytes.length == 0) bytes.push(0);
        var node = this.decodeTables[0];

        for (var i = bytes.length - 1; i > 0; i--) {
          // Traverse nodes deeper into the trie.
          var val = node[bytes[i]];

          if (val == UNASSIGNED) {
            // Create new node.
            node[bytes[i]] = NODE_START - this.decodeTables.length;
            this.decodeTables.push(node = UNASSIGNED_NODE.slice(0));
          } else if (val <= NODE_START) {
            // Existing node.
            node = this.decodeTables[NODE_START - val];
          } else throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + addr.toString(16));
        }

        return node;
      };

      DBCSCodec.prototype._addDecodeChunk = function (chunk) {
        // First element of chunk is the hex mbcs code where we start.
        var curAddr = parseInt(chunk[0], 16); // Choose the decoding node where we'll write our chars.

        var writeTable = this._getDecodeTrieNode(curAddr);

        curAddr = curAddr & 0xFF; // Write all other elements of the chunk to the table.

        for (var k = 1; k < chunk.length; k++) {
          var part = chunk[k];

          if (typeof part === "string") {
            // String, write as-is.
            for (var l = 0; l < part.length;) {
              var code = part.charCodeAt(l++);

              if (0xD800 <= code && code < 0xDC00) {
                // Decode surrogate
                var codeTrail = part.charCodeAt(l++);
                if (0xDC00 <= codeTrail && codeTrail < 0xE000) writeTable[curAddr++] = 0x10000 + (code - 0xD800) * 0x400 + (codeTrail - 0xDC00);else throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + chunk[0]);
              } else if (0x0FF0 < code && code <= 0x0FFF) {
                // Character sequence (our own encoding used)
                var len = 0xFFF - code + 2;
                var seq = [];

                for (var m = 0; m < len; m++) seq.push(part.charCodeAt(l++)); // Simple variation: don't support surrogates or subsequences in seq.


                writeTable[curAddr++] = SEQ_START - this.decodeTableSeq.length;
                this.decodeTableSeq.push(seq);
              } else writeTable[curAddr++] = code; // Basic char

            }
          } else if (typeof part === "number") {
            // Integer, meaning increasing sequence starting with prev character.
            var charCode = writeTable[curAddr - 1] + 1;

            for (var l = 0; l < part; l++) writeTable[curAddr++] = charCode++;
          } else throw new Error("Incorrect type '" + typeof part + "' given in " + this.encodingName + " at chunk " + chunk[0]);
        }

        if (curAddr > 0xFF) throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + chunk[0] + ": too long" + curAddr);
      }; // Encoder helpers


      DBCSCodec.prototype._getEncodeBucket = function (uCode) {
        var high = uCode >> 8; // This could be > 0xFF because of astral characters.

        if (this.encodeTable[high] === undefined) this.encodeTable[high] = UNASSIGNED_NODE.slice(0); // Create bucket on demand.

        return this.encodeTable[high];
      };

      DBCSCodec.prototype._setEncodeChar = function (uCode, dbcsCode) {
        var bucket = this._getEncodeBucket(uCode);

        var low = uCode & 0xFF;
        if (bucket[low] <= SEQ_START) this.encodeTableSeq[SEQ_START - bucket[low]][DEF_CHAR] = dbcsCode; // There's already a sequence, set a single-char subsequence of it.
        else if (bucket[low] == UNASSIGNED) bucket[low] = dbcsCode;
      };

      DBCSCodec.prototype._setEncodeSequence = function (seq, dbcsCode) {
        // Get the root of character tree according to first character of the sequence.
        var uCode = seq[0];

        var bucket = this._getEncodeBucket(uCode);

        var low = uCode & 0xFF;
        var node;

        if (bucket[low] <= SEQ_START) {
          // There's already a sequence with  - use it.
          node = this.encodeTableSeq[SEQ_START - bucket[low]];
        } else {
          // There was no sequence object - allocate a new one.
          node = {};
          if (bucket[low] !== UNASSIGNED) node[DEF_CHAR] = bucket[low]; // If a char was set before - make it a single-char subsequence.

          bucket[low] = SEQ_START - this.encodeTableSeq.length;
          this.encodeTableSeq.push(node);
        } // Traverse the character tree, allocating new nodes as needed.


        for (var j = 1; j < seq.length - 1; j++) {
          var oldVal = node[uCode];
          if (typeof oldVal === 'object') node = oldVal;else {
            node = node[uCode] = {};
            if (oldVal !== undefined) node[DEF_CHAR] = oldVal;
          }
        } // Set the leaf to given dbcsCode.


        uCode = seq[seq.length - 1];
        node[uCode] = dbcsCode;
      };

      DBCSCodec.prototype._fillEncodeTable = function (nodeIdx, prefix, skipEncodeChars) {
        var node = this.decodeTables[nodeIdx];

        for (var i = 0; i < 0x100; i++) {
          var uCode = node[i];
          var mbCode = prefix + i;
          if (skipEncodeChars[mbCode]) continue;
          if (uCode >= 0) this._setEncodeChar(uCode, mbCode);else if (uCode <= NODE_START) this._fillEncodeTable(NODE_START - uCode, mbCode << 8, skipEncodeChars);else if (uCode <= SEQ_START) this._setEncodeSequence(this.decodeTableSeq[SEQ_START - uCode], mbCode);
        }
      }; // == Encoder ==================================================================


      function DBCSEncoder(options, codec) {
        // Encoder state
        this.leadSurrogate = -1;
        this.seqObj = undefined; // Static data

        this.encodeTable = codec.encodeTable;
        this.encodeTableSeq = codec.encodeTableSeq;
        this.defaultCharSingleByte = codec.defCharSB;
        this.gb18030 = codec.gb18030;
      }

      DBCSEncoder.prototype.write = function (str) {
        var newBuf = Buffer.alloc(str.length * (this.gb18030 ? 4 : 3)),
            leadSurrogate = this.leadSurrogate,
            seqObj = this.seqObj,
            nextChar = -1,
            i = 0,
            j = 0;

        while (true) {
          // 0. Get next character.
          if (nextChar === -1) {
            if (i == str.length) break;
            var uCode = str.charCodeAt(i++);
          } else {
            var uCode = nextChar;
            nextChar = -1;
          } // 1. Handle surrogates.


          if (0xD800 <= uCode && uCode < 0xE000) {
            // Char is one of surrogates.
            if (uCode < 0xDC00) {
              // We've got lead surrogate.
              if (leadSurrogate === -1) {
                leadSurrogate = uCode;
                continue;
              } else {
                leadSurrogate = uCode; // Double lead surrogate found.

                uCode = UNASSIGNED;
              }
            } else {
              // We've got trail surrogate.
              if (leadSurrogate !== -1) {
                uCode = 0x10000 + (leadSurrogate - 0xD800) * 0x400 + (uCode - 0xDC00);
                leadSurrogate = -1;
              } else {
                // Incomplete surrogate pair - only trail surrogate found.
                uCode = UNASSIGNED;
              }
            }
          } else if (leadSurrogate !== -1) {
            // Incomplete surrogate pair - only lead surrogate found.
            nextChar = uCode;
            uCode = UNASSIGNED; // Write an error, then current char.

            leadSurrogate = -1;
          } // 2. Convert uCode character.


          var dbcsCode = UNASSIGNED;

          if (seqObj !== undefined && uCode != UNASSIGNED) {
            // We are in the middle of the sequence
            var resCode = seqObj[uCode];

            if (typeof resCode === 'object') {
              // Sequence continues.
              seqObj = resCode;
              continue;
            } else if (typeof resCode == 'number') {
              // Sequence finished. Write it.
              dbcsCode = resCode;
            } else if (resCode == undefined) {
              // Current character is not part of the sequence.
              // Try default character for this sequence
              resCode = seqObj[DEF_CHAR];

              if (resCode !== undefined) {
                dbcsCode = resCode; // Found. Write it.

                nextChar = uCode; // Current character will be written too in the next iteration.
              } else {// TODO: What if we have no default? (resCode == undefined)
                // Then, we should write first char of the sequence as-is and try the rest recursively.
                // Didn't do it for now because no encoding has this situation yet.
                // Currently, just skip the sequence and write current char.
              }
            }

            seqObj = undefined;
          } else if (uCode >= 0) {
            // Regular character
            var subtable = this.encodeTable[uCode >> 8];
            if (subtable !== undefined) dbcsCode = subtable[uCode & 0xFF];

            if (dbcsCode <= SEQ_START) {
              // Sequence start
              seqObj = this.encodeTableSeq[SEQ_START - dbcsCode];
              continue;
            }

            if (dbcsCode == UNASSIGNED && this.gb18030) {
              // Use GB18030 algorithm to find character(s) to write.
              var idx = findIdx(this.gb18030.uChars, uCode);

              if (idx != -1) {
                var dbcsCode = this.gb18030.gbChars[idx] + (uCode - this.gb18030.uChars[idx]);
                newBuf[j++] = 0x81 + Math.floor(dbcsCode / 12600);
                dbcsCode = dbcsCode % 12600;
                newBuf[j++] = 0x30 + Math.floor(dbcsCode / 1260);
                dbcsCode = dbcsCode % 1260;
                newBuf[j++] = 0x81 + Math.floor(dbcsCode / 10);
                dbcsCode = dbcsCode % 10;
                newBuf[j++] = 0x30 + dbcsCode;
                continue;
              }
            }
          } // 3. Write dbcsCode character.


          if (dbcsCode === UNASSIGNED) dbcsCode = this.defaultCharSingleByte;

          if (dbcsCode < 0x100) {
            newBuf[j++] = dbcsCode;
          } else if (dbcsCode < 0x10000) {
            newBuf[j++] = dbcsCode >> 8; // high byte

            newBuf[j++] = dbcsCode & 0xFF; // low byte
          } else {
            newBuf[j++] = dbcsCode >> 16;
            newBuf[j++] = dbcsCode >> 8 & 0xFF;
            newBuf[j++] = dbcsCode & 0xFF;
          }
        }

        this.seqObj = seqObj;
        this.leadSurrogate = leadSurrogate;
        return newBuf.slice(0, j);
      };

      DBCSEncoder.prototype.end = function () {
        if (this.leadSurrogate === -1 && this.seqObj === undefined) return; // All clean. Most often case.

        var newBuf = Buffer.alloc(10),
            j = 0;

        if (this.seqObj) {
          // We're in the sequence.
          var dbcsCode = this.seqObj[DEF_CHAR];

          if (dbcsCode !== undefined) {
            // Write beginning of the sequence.
            if (dbcsCode < 0x100) {
              newBuf[j++] = dbcsCode;
            } else {
              newBuf[j++] = dbcsCode >> 8; // high byte

              newBuf[j++] = dbcsCode & 0xFF; // low byte
            }
          } else {// See todo above.
          }

          this.seqObj = undefined;
        }

        if (this.leadSurrogate !== -1) {
          // Incomplete surrogate pair - only lead surrogate found.
          newBuf[j++] = this.defaultCharSingleByte;
          this.leadSurrogate = -1;
        }

        return newBuf.slice(0, j);
      }; // Export for testing


      DBCSEncoder.prototype.findIdx = findIdx; // == Decoder ==================================================================

      function DBCSDecoder(options, codec) {
        // Decoder state
        this.nodeIdx = 0;
        this.prevBuf = Buffer.alloc(0); // Static data

        this.decodeTables = codec.decodeTables;
        this.decodeTableSeq = codec.decodeTableSeq;
        this.defaultCharUnicode = codec.defaultCharUnicode;
        this.gb18030 = codec.gb18030;
      }

      DBCSDecoder.prototype.write = function (buf) {
        var newBuf = Buffer.alloc(buf.length * 2),
            nodeIdx = this.nodeIdx,
            prevBuf = this.prevBuf,
            prevBufOffset = this.prevBuf.length,
            seqStart = -this.prevBuf.length,
            // idx of the start of current parsed sequence.
        uCode;
        if (prevBufOffset > 0) // Make prev buf overlap a little to make it easier to slice later.
          prevBuf = Buffer.concat([prevBuf, buf.slice(0, 10)]);

        for (var i = 0, j = 0; i < buf.length; i++) {
          var curByte = i >= 0 ? buf[i] : prevBuf[i + prevBufOffset]; // Lookup in current trie node.

          var uCode = this.decodeTables[nodeIdx][curByte];

          if (uCode >= 0) {// Normal character, just use it.
          } else if (uCode === UNASSIGNED) {
            // Unknown char.
            // TODO: Callback with seq.
            //var curSeq = (seqStart >= 0) ? buf.slice(seqStart, i+1) : prevBuf.slice(seqStart + prevBufOffset, i+1 + prevBufOffset);
            i = seqStart; // Try to parse again, after skipping first byte of the sequence ('i' will be incremented by 'for' cycle).

            uCode = this.defaultCharUnicode.charCodeAt(0);
          } else if (uCode === GB18030_CODE) {
            var curSeq = seqStart >= 0 ? buf.slice(seqStart, i + 1) : prevBuf.slice(seqStart + prevBufOffset, i + 1 + prevBufOffset);
            var ptr = (curSeq[0] - 0x81) * 12600 + (curSeq[1] - 0x30) * 1260 + (curSeq[2] - 0x81) * 10 + (curSeq[3] - 0x30);
            var idx = findIdx(this.gb18030.gbChars, ptr);
            uCode = this.gb18030.uChars[idx] + ptr - this.gb18030.gbChars[idx];
          } else if (uCode <= NODE_START) {
            // Go to next trie node.
            nodeIdx = NODE_START - uCode;
            continue;
          } else if (uCode <= SEQ_START) {
            // Output a sequence of chars.
            var seq = this.decodeTableSeq[SEQ_START - uCode];

            for (var k = 0; k < seq.length - 1; k++) {
              uCode = seq[k];
              newBuf[j++] = uCode & 0xFF;
              newBuf[j++] = uCode >> 8;
            }

            uCode = seq[seq.length - 1];
          } else throw new Error("iconv-lite internal error: invalid decoding table value " + uCode + " at " + nodeIdx + "/" + curByte); // Write the character to buffer, handling higher planes using surrogate pair.


          if (uCode > 0xFFFF) {
            uCode -= 0x10000;
            var uCodeLead = 0xD800 + Math.floor(uCode / 0x400);
            newBuf[j++] = uCodeLead & 0xFF;
            newBuf[j++] = uCodeLead >> 8;
            uCode = 0xDC00 + uCode % 0x400;
          }

          newBuf[j++] = uCode & 0xFF;
          newBuf[j++] = uCode >> 8; // Reset trie node.

          nodeIdx = 0;
          seqStart = i + 1;
        }

        this.nodeIdx = nodeIdx;
        this.prevBuf = seqStart >= 0 ? buf.slice(seqStart) : prevBuf.slice(seqStart + prevBufOffset);
        return newBuf.slice(0, j).toString('ucs2');
      };

      DBCSDecoder.prototype.end = function () {
        var ret = ''; // Try to parse all remaining chars.

        while (this.prevBuf.length > 0) {
          // Skip 1 character in the buffer.
          ret += this.defaultCharUnicode;
          var buf = this.prevBuf.slice(1); // Parse remaining as usual.

          this.prevBuf = Buffer.alloc(0);
          this.nodeIdx = 0;
          if (buf.length > 0) ret += this.write(buf);
        }

        this.nodeIdx = 0;
        return ret;
      }; // Binary search for GB18030. Returns largest i such that table[i] <= val.


      function findIdx(table, val) {
        if (table[0] > val) return -1;
        var l = 0,
            r = table.length;

        while (l < r - 1) {
          // always table[l] <= val < table[r]
          var mid = l + Math.floor((r - l + 1) / 2);
          if (table[mid] <= val) l = mid;else r = mid;
        }

        return l;
      }
      /***/

    },

    /***/
    "ElKV":
    /*!********************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/sbcs-codec.js ***!
      \********************************************************************************************/

    /*! no static exports found */

    /***/
    function ElKV(module, exports, __webpack_require__) {
      "use strict";

      var Buffer = __webpack_require__(
      /*! safer-buffer */
      "xZGU").Buffer; // Single-byte codec. Needs a 'chars' string parameter that contains 256 or 128 chars that
      // correspond to encoded bytes (if 128 - then lower half is ASCII). 


      exports._sbcs = SBCSCodec;

      function SBCSCodec(codecOptions, iconv) {
        if (!codecOptions) throw new Error("SBCS codec is called without the data."); // Prepare char buffer for decoding.

        if (!codecOptions.chars || codecOptions.chars.length !== 128 && codecOptions.chars.length !== 256) throw new Error("Encoding '" + codecOptions.type + "' has incorrect 'chars' (must be of len 128 or 256)");

        if (codecOptions.chars.length === 128) {
          var asciiString = "";

          for (var i = 0; i < 128; i++) asciiString += String.fromCharCode(i);

          codecOptions.chars = asciiString + codecOptions.chars;
        }

        this.decodeBuf = Buffer.from(codecOptions.chars, 'ucs2'); // Encoding buffer.

        var encodeBuf = Buffer.alloc(65536, iconv.defaultCharSingleByte.charCodeAt(0));

        for (var i = 0; i < codecOptions.chars.length; i++) encodeBuf[codecOptions.chars.charCodeAt(i)] = i;

        this.encodeBuf = encodeBuf;
      }

      SBCSCodec.prototype.encoder = SBCSEncoder;
      SBCSCodec.prototype.decoder = SBCSDecoder;

      function SBCSEncoder(options, codec) {
        this.encodeBuf = codec.encodeBuf;
      }

      SBCSEncoder.prototype.write = function (str) {
        var buf = Buffer.alloc(str.length);

        for (var i = 0; i < str.length; i++) buf[i] = this.encodeBuf[str.charCodeAt(i)];

        return buf;
      };

      SBCSEncoder.prototype.end = function () {};

      function SBCSDecoder(options, codec) {
        this.decodeBuf = codec.decodeBuf;
      }

      SBCSDecoder.prototype.write = function (buf) {
        // Strings are immutable in JS -> we use ucs2 buffer to speed up computations.
        var decodeBuf = this.decodeBuf;
        var newBuf = Buffer.alloc(buf.length * 2);
        var idx1 = 0,
            idx2 = 0;

        for (var i = 0; i < buf.length; i++) {
          idx1 = buf[i] * 2;
          idx2 = i * 2;
          newBuf[idx2] = decodeBuf[idx1];
          newBuf[idx2 + 1] = decodeBuf[idx1 + 1];
        }

        return newBuf.toString('ucs2');
      };

      SBCSDecoder.prototype.end = function () {};
      /***/

    },

    /***/
    "EmYl":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/tables/gb18030-ranges.json ***!
      \*********************************************************************************************************/

    /*! exports provided: uChars, gbChars, default */

    /***/
    function EmYl(module) {
      module.exports = JSON.parse("{\"uChars\":[128,165,169,178,184,216,226,235,238,244,248,251,253,258,276,284,300,325,329,334,364,463,465,467,469,471,473,475,477,506,594,610,712,716,730,930,938,962,970,1026,1104,1106,8209,8215,8218,8222,8231,8241,8244,8246,8252,8365,8452,8454,8458,8471,8482,8556,8570,8596,8602,8713,8720,8722,8726,8731,8737,8740,8742,8748,8751,8760,8766,8777,8781,8787,8802,8808,8816,8854,8858,8870,8896,8979,9322,9372,9548,9588,9616,9622,9634,9652,9662,9672,9676,9680,9702,9735,9738,9793,9795,11906,11909,11913,11917,11928,11944,11947,11951,11956,11960,11964,11979,12284,12292,12312,12319,12330,12351,12436,12447,12535,12543,12586,12842,12850,12964,13200,13215,13218,13253,13263,13267,13270,13384,13428,13727,13839,13851,14617,14703,14801,14816,14964,15183,15471,15585,16471,16736,17208,17325,17330,17374,17623,17997,18018,18212,18218,18301,18318,18760,18811,18814,18820,18823,18844,18848,18872,19576,19620,19738,19887,40870,59244,59336,59367,59413,59417,59423,59431,59437,59443,59452,59460,59478,59493,63789,63866,63894,63976,63986,64016,64018,64021,64025,64034,64037,64042,65074,65093,65107,65112,65127,65132,65375,65510,65536],\"gbChars\":[0,36,38,45,50,81,89,95,96,100,103,104,105,109,126,133,148,172,175,179,208,306,307,308,309,310,311,312,313,341,428,443,544,545,558,741,742,749,750,805,819,820,7922,7924,7925,7927,7934,7943,7944,7945,7950,8062,8148,8149,8152,8164,8174,8236,8240,8262,8264,8374,8380,8381,8384,8388,8390,8392,8393,8394,8396,8401,8406,8416,8419,8424,8437,8439,8445,8482,8485,8496,8521,8603,8936,8946,9046,9050,9063,9066,9076,9092,9100,9108,9111,9113,9131,9162,9164,9218,9219,11329,11331,11334,11336,11346,11361,11363,11366,11370,11372,11375,11389,11682,11686,11687,11692,11694,11714,11716,11723,11725,11730,11736,11982,11989,12102,12336,12348,12350,12384,12393,12395,12397,12510,12553,12851,12962,12973,13738,13823,13919,13933,14080,14298,14585,14698,15583,15847,16318,16434,16438,16481,16729,17102,17122,17315,17320,17402,17418,17859,17909,17911,17915,17916,17936,17939,17961,18664,18703,18814,18962,19043,33469,33470,33471,33484,33485,33490,33497,33501,33505,33513,33520,33536,33550,37845,37921,37948,38029,38038,38064,38065,38066,38069,38075,38076,38078,39108,39109,39113,39114,39115,39116,39265,39394,189000]}");
      /***/
    },

    /***/
    "H7XF":
    /*!*****************************************!*\
      !*** ./node_modules/base64-js/index.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function H7XF(module, exports, __webpack_require__) {
      "use strict";

      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      } // Support decoding URL-safe base64 strings, as Node.js does.
      // See: https://en.wikipedia.org/wiki/Base64#URL_applications


      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;

      function getLens(b64) {
        var len = b64.length;

        if (len % 4 > 0) {
          throw new Error('Invalid string. Length must be a multiple of 4');
        } // Trim off extra bytes after placeholder bytes are found
        // See: https://github.com/beatgammit/base64-js/issues/42


        var validLen = b64.indexOf('=');
        if (validLen === -1) validLen = len;
        var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      } // base64 is 4/3 + up to two characters of the original data


      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }

      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }

      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

        var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i;

        for (i = 0; i < len; i += 4) {
          tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
          arr[curByte++] = tmp >> 16 & 0xFF;
          arr[curByte++] = tmp >> 8 & 0xFF;
          arr[curByte++] = tmp & 0xFF;
        }

        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
          arr[curByte++] = tmp & 0xFF;
        }

        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 0xFF;
          arr[curByte++] = tmp & 0xFF;
        }

        return arr;
      }

      function tripletToBase64(num) {
        return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
      }

      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];

        for (var i = start; i < end; i += 3) {
          tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
          output.push(tripletToBase64(tmp));
        }

        return output.join('');
      }

      function fromByteArray(uint8) {
        var tmp;
        var len = uint8.length;
        var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

        var parts = [];
        var maxChunkLength = 16383; // must be multiple of 3
        // go through the array every three bytes, we'll deal with trailing stuff later

        for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
          parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
        } // pad the end with zeros, but make sure to not forget the extra bytes


        if (extraBytes === 1) {
          tmp = uint8[len - 1];
          parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
        } else if (extraBytes === 2) {
          tmp = (uint8[len - 2] << 8) + uint8[len - 1];
          parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
        }

        return parts.join('');
      }
      /***/

    },

    /***/
    "J7ee":
    /*!***************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/index.js ***!
      \***************************************************************************************/

    /*! no static exports found */

    /***/
    function J7ee(module, exports, __webpack_require__) {
      "use strict"; // Update this array if you add/rename/remove files in this directory.
      // We support Browserify by skipping automatic module discovery and requiring modules directly.

      var modules = [__webpack_require__(
      /*! ./internal */
      "LAqs"), __webpack_require__(
      /*! ./utf16 */
      "hl15"), __webpack_require__(
      /*! ./utf7 */
      "LHbr"), __webpack_require__(
      /*! ./sbcs-codec */
      "ElKV"), __webpack_require__(
      /*! ./sbcs-data */
      "fGuN"), __webpack_require__(
      /*! ./sbcs-data-generated */
      "/uMM"), __webpack_require__(
      /*! ./dbcs-codec */
      "EIVV"), __webpack_require__(
      /*! ./dbcs-data */
      "xUBR")]; // Put all encoding/alias/codec definitions to single object and export it. 

      for (var i = 0; i < modules.length; i++) {
        var module = modules[i];

        for (var enc in module) if (Object.prototype.hasOwnProperty.call(module, enc)) exports[enc] = module[enc];
      }
      /***/

    },

    /***/
    "LAqs":
    /*!******************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/internal.js ***!
      \******************************************************************************************/

    /*! no static exports found */

    /***/
    function LAqs(module, exports, __webpack_require__) {
      "use strict";

      var Buffer = __webpack_require__(
      /*! safer-buffer */
      "xZGU").Buffer; // Export Node.js internal encodings.


      module.exports = {
        // Encodings
        utf8: {
          type: "_internal",
          bomAware: true
        },
        cesu8: {
          type: "_internal",
          bomAware: true
        },
        unicode11utf8: "utf8",
        ucs2: {
          type: "_internal",
          bomAware: true
        },
        utf16le: "ucs2",
        binary: {
          type: "_internal"
        },
        base64: {
          type: "_internal"
        },
        hex: {
          type: "_internal"
        },
        // Codec.
        _internal: InternalCodec
      }; //------------------------------------------------------------------------------

      function InternalCodec(codecOptions, iconv) {
        this.enc = codecOptions.encodingName;
        this.bomAware = codecOptions.bomAware;
        if (this.enc === "base64") this.encoder = InternalEncoderBase64;else if (this.enc === "cesu8") {
          this.enc = "utf8"; // Use utf8 for decoding.

          this.encoder = InternalEncoderCesu8; // Add decoder for versions of Node not supporting CESU-8

          if (Buffer.from('eda0bdedb2a9', 'hex').toString() !== '💩') {
            this.decoder = InternalDecoderCesu8;
            this.defaultCharUnicode = iconv.defaultCharUnicode;
          }
        }
      }

      InternalCodec.prototype.encoder = InternalEncoder;
      InternalCodec.prototype.decoder = InternalDecoder; //------------------------------------------------------------------------------
      // We use node.js internal decoder. Its signature is the same as ours.

      var StringDecoder = __webpack_require__(
      /*! string_decoder */
      "fXKp").StringDecoder;

      if (!StringDecoder.prototype.end) // Node v0.8 doesn't have this method.
        StringDecoder.prototype.end = function () {};

      function InternalDecoder(options, codec) {
        StringDecoder.call(this, codec.enc);
      }

      InternalDecoder.prototype = StringDecoder.prototype; //------------------------------------------------------------------------------
      // Encoder is mostly trivial

      function InternalEncoder(options, codec) {
        this.enc = codec.enc;
      }

      InternalEncoder.prototype.write = function (str) {
        return Buffer.from(str, this.enc);
      };

      InternalEncoder.prototype.end = function () {}; //------------------------------------------------------------------------------
      // Except base64 encoder, which must keep its state.


      function InternalEncoderBase64(options, codec) {
        this.prevStr = '';
      }

      InternalEncoderBase64.prototype.write = function (str) {
        str = this.prevStr + str;
        var completeQuads = str.length - str.length % 4;
        this.prevStr = str.slice(completeQuads);
        str = str.slice(0, completeQuads);
        return Buffer.from(str, "base64");
      };

      InternalEncoderBase64.prototype.end = function () {
        return Buffer.from(this.prevStr, "base64");
      }; //------------------------------------------------------------------------------
      // CESU-8 encoder is also special.


      function InternalEncoderCesu8(options, codec) {}

      InternalEncoderCesu8.prototype.write = function (str) {
        var buf = Buffer.alloc(str.length * 3),
            bufIdx = 0;

        for (var i = 0; i < str.length; i++) {
          var charCode = str.charCodeAt(i); // Naive implementation, but it works because CESU-8 is especially easy
          // to convert from UTF-16 (which all JS strings are encoded in).

          if (charCode < 0x80) buf[bufIdx++] = charCode;else if (charCode < 0x800) {
            buf[bufIdx++] = 0xC0 + (charCode >>> 6);
            buf[bufIdx++] = 0x80 + (charCode & 0x3f);
          } else {
            // charCode will always be < 0x10000 in javascript.
            buf[bufIdx++] = 0xE0 + (charCode >>> 12);
            buf[bufIdx++] = 0x80 + (charCode >>> 6 & 0x3f);
            buf[bufIdx++] = 0x80 + (charCode & 0x3f);
          }
        }

        return buf.slice(0, bufIdx);
      };

      InternalEncoderCesu8.prototype.end = function () {}; //------------------------------------------------------------------------------
      // CESU-8 decoder is not implemented in Node v4.0+


      function InternalDecoderCesu8(options, codec) {
        this.acc = 0;
        this.contBytes = 0;
        this.accBytes = 0;
        this.defaultCharUnicode = codec.defaultCharUnicode;
      }

      InternalDecoderCesu8.prototype.write = function (buf) {
        var acc = this.acc,
            contBytes = this.contBytes,
            accBytes = this.accBytes,
            res = '';

        for (var i = 0; i < buf.length; i++) {
          var curByte = buf[i];

          if ((curByte & 0xC0) !== 0x80) {
            // Leading byte
            if (contBytes > 0) {
              // Previous code is invalid
              res += this.defaultCharUnicode;
              contBytes = 0;
            }

            if (curByte < 0x80) {
              // Single-byte code
              res += String.fromCharCode(curByte);
            } else if (curByte < 0xE0) {
              // Two-byte code
              acc = curByte & 0x1F;
              contBytes = 1;
              accBytes = 1;
            } else if (curByte < 0xF0) {
              // Three-byte code
              acc = curByte & 0x0F;
              contBytes = 2;
              accBytes = 1;
            } else {
              // Four or more are not supported for CESU-8.
              res += this.defaultCharUnicode;
            }
          } else {
            // Continuation byte
            if (contBytes > 0) {
              // We're waiting for it.
              acc = acc << 6 | curByte & 0x3f;
              contBytes--;
              accBytes++;

              if (contBytes === 0) {
                // Check for overlong encoding, but support Modified UTF-8 (encoding NULL as C0 80)
                if (accBytes === 2 && acc < 0x80 && acc > 0) res += this.defaultCharUnicode;else if (accBytes === 3 && acc < 0x800) res += this.defaultCharUnicode;else // Actually add character.
                  res += String.fromCharCode(acc);
              }
            } else {
              // Unexpected continuation byte
              res += this.defaultCharUnicode;
            }
          }
        }

        this.acc = acc;
        this.contBytes = contBytes;
        this.accBytes = accBytes;
        return res;
      };

      InternalDecoderCesu8.prototype.end = function () {
        var res = 0;
        if (this.contBytes > 0) res += this.defaultCharUnicode;
        return res;
      };
      /***/

    },

    /***/
    "LHbr":
    /*!**************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/utf7.js ***!
      \**************************************************************************************/

    /*! no static exports found */

    /***/
    function LHbr(module, exports, __webpack_require__) {
      "use strict";

      var Buffer = __webpack_require__(
      /*! safer-buffer */
      "xZGU").Buffer; // UTF-7 codec, according to https://tools.ietf.org/html/rfc2152
      // See also below a UTF-7-IMAP codec, according to http://tools.ietf.org/html/rfc3501#section-5.1.3


      exports.utf7 = Utf7Codec;
      exports.unicode11utf7 = 'utf7'; // Alias UNICODE-1-1-UTF-7

      function Utf7Codec(codecOptions, iconv) {
        this.iconv = iconv;
      }

      ;
      Utf7Codec.prototype.encoder = Utf7Encoder;
      Utf7Codec.prototype.decoder = Utf7Decoder;
      Utf7Codec.prototype.bomAware = true; // -- Encoding

      var nonDirectChars = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;

      function Utf7Encoder(options, codec) {
        this.iconv = codec.iconv;
      }

      Utf7Encoder.prototype.write = function (str) {
        // Naive implementation.
        // Non-direct chars are encoded as "+<base64>-"; single "+" char is encoded as "+-".
        return Buffer.from(str.replace(nonDirectChars, function (chunk) {
          return "+" + (chunk === '+' ? '' : this.iconv.encode(chunk, 'utf16-be').toString('base64').replace(/=+$/, '')) + "-";
        }.bind(this)));
      };

      Utf7Encoder.prototype.end = function () {}; // -- Decoding


      function Utf7Decoder(options, codec) {
        this.iconv = codec.iconv;
        this.inBase64 = false;
        this.base64Accum = '';
      }

      var base64Regex = /[A-Za-z0-9\/+]/;
      var base64Chars = [];

      for (var i = 0; i < 256; i++) base64Chars[i] = base64Regex.test(String.fromCharCode(i));

      var plusChar = '+'.charCodeAt(0),
          minusChar = '-'.charCodeAt(0),
          andChar = '&'.charCodeAt(0);

      Utf7Decoder.prototype.write = function (buf) {
        var res = "",
            lastI = 0,
            inBase64 = this.inBase64,
            base64Accum = this.base64Accum; // The decoder is more involved as we must handle chunks in stream.

        for (var i = 0; i < buf.length; i++) {
          if (!inBase64) {
            // We're in direct mode.
            // Write direct chars until '+'
            if (buf[i] == plusChar) {
              res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.

              lastI = i + 1;
              inBase64 = true;
            }
          } else {
            // We decode base64.
            if (!base64Chars[buf[i]]) {
              // Base64 ended.
              if (i == lastI && buf[i] == minusChar) {
                // "+-" -> "+"
                res += "+";
              } else {
                var b64str = base64Accum + buf.slice(lastI, i).toString();
                res += this.iconv.decode(Buffer.from(b64str, 'base64'), "utf16-be");
              }

              if (buf[i] != minusChar) // Minus is absorbed after base64.
                i--;
              lastI = i + 1;
              inBase64 = false;
              base64Accum = '';
            }
          }
        }

        if (!inBase64) {
          res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
        } else {
          var b64str = base64Accum + buf.slice(lastI).toString();
          var canBeDecoded = b64str.length - b64str.length % 8; // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.

          base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.

          b64str = b64str.slice(0, canBeDecoded);
          res += this.iconv.decode(Buffer.from(b64str, 'base64'), "utf16-be");
        }

        this.inBase64 = inBase64;
        this.base64Accum = base64Accum;
        return res;
      };

      Utf7Decoder.prototype.end = function () {
        var res = "";
        if (this.inBase64 && this.base64Accum.length > 0) res = this.iconv.decode(Buffer.from(this.base64Accum, 'base64'), "utf16-be");
        this.inBase64 = false;
        this.base64Accum = '';
        return res;
      }; // UTF-7-IMAP codec.
      // RFC3501 Sec. 5.1.3 Modified UTF-7 (http://tools.ietf.org/html/rfc3501#section-5.1.3)
      // Differences:
      //  * Base64 part is started by "&" instead of "+"
      //  * Direct characters are 0x20-0x7E, except "&" (0x26)
      //  * In Base64, "," is used instead of "/"
      //  * Base64 must not be used to represent direct characters.
      //  * No implicit shift back from Base64 (should always end with '-')
      //  * String must end in non-shifted position.
      //  * "-&" while in base64 is not allowed.


      exports.utf7imap = Utf7IMAPCodec;

      function Utf7IMAPCodec(codecOptions, iconv) {
        this.iconv = iconv;
      }

      ;
      Utf7IMAPCodec.prototype.encoder = Utf7IMAPEncoder;
      Utf7IMAPCodec.prototype.decoder = Utf7IMAPDecoder;
      Utf7IMAPCodec.prototype.bomAware = true; // -- Encoding

      function Utf7IMAPEncoder(options, codec) {
        this.iconv = codec.iconv;
        this.inBase64 = false;
        this.base64Accum = Buffer.alloc(6);
        this.base64AccumIdx = 0;
      }

      Utf7IMAPEncoder.prototype.write = function (str) {
        var inBase64 = this.inBase64,
            base64Accum = this.base64Accum,
            base64AccumIdx = this.base64AccumIdx,
            buf = Buffer.alloc(str.length * 5 + 10),
            bufIdx = 0;

        for (var i = 0; i < str.length; i++) {
          var uChar = str.charCodeAt(i);

          if (0x20 <= uChar && uChar <= 0x7E) {
            // Direct character or '&'.
            if (inBase64) {
              if (base64AccumIdx > 0) {
                bufIdx += buf.write(base64Accum.slice(0, base64AccumIdx).toString('base64').replace(/\//g, ',').replace(/=+$/, ''), bufIdx);
                base64AccumIdx = 0;
              }

              buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.

              inBase64 = false;
            }

            if (!inBase64) {
              buf[bufIdx++] = uChar; // Write direct character

              if (uChar === andChar) // Ampersand -> '&-'
                buf[bufIdx++] = minusChar;
            }
          } else {
            // Non-direct character
            if (!inBase64) {
              buf[bufIdx++] = andChar; // Write '&', then go to base64 mode.

              inBase64 = true;
            }

            if (inBase64) {
              base64Accum[base64AccumIdx++] = uChar >> 8;
              base64Accum[base64AccumIdx++] = uChar & 0xFF;

              if (base64AccumIdx == base64Accum.length) {
                bufIdx += buf.write(base64Accum.toString('base64').replace(/\//g, ','), bufIdx);
                base64AccumIdx = 0;
              }
            }
          }
        }

        this.inBase64 = inBase64;
        this.base64AccumIdx = base64AccumIdx;
        return buf.slice(0, bufIdx);
      };

      Utf7IMAPEncoder.prototype.end = function () {
        var buf = Buffer.alloc(10),
            bufIdx = 0;

        if (this.inBase64) {
          if (this.base64AccumIdx > 0) {
            bufIdx += buf.write(this.base64Accum.slice(0, this.base64AccumIdx).toString('base64').replace(/\//g, ',').replace(/=+$/, ''), bufIdx);
            this.base64AccumIdx = 0;
          }

          buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.

          this.inBase64 = false;
        }

        return buf.slice(0, bufIdx);
      }; // -- Decoding


      function Utf7IMAPDecoder(options, codec) {
        this.iconv = codec.iconv;
        this.inBase64 = false;
        this.base64Accum = '';
      }

      var base64IMAPChars = base64Chars.slice();
      base64IMAPChars[','.charCodeAt(0)] = true;

      Utf7IMAPDecoder.prototype.write = function (buf) {
        var res = "",
            lastI = 0,
            inBase64 = this.inBase64,
            base64Accum = this.base64Accum; // The decoder is more involved as we must handle chunks in stream.
        // It is forgiving, closer to standard UTF-7 (for example, '-' is optional at the end).

        for (var i = 0; i < buf.length; i++) {
          if (!inBase64) {
            // We're in direct mode.
            // Write direct chars until '&'
            if (buf[i] == andChar) {
              res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.

              lastI = i + 1;
              inBase64 = true;
            }
          } else {
            // We decode base64.
            if (!base64IMAPChars[buf[i]]) {
              // Base64 ended.
              if (i == lastI && buf[i] == minusChar) {
                // "&-" -> "&"
                res += "&";
              } else {
                var b64str = base64Accum + buf.slice(lastI, i).toString().replace(/,/g, '/');
                res += this.iconv.decode(Buffer.from(b64str, 'base64'), "utf16-be");
              }

              if (buf[i] != minusChar) // Minus may be absorbed after base64.
                i--;
              lastI = i + 1;
              inBase64 = false;
              base64Accum = '';
            }
          }
        }

        if (!inBase64) {
          res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
        } else {
          var b64str = base64Accum + buf.slice(lastI).toString().replace(/,/g, '/');
          var canBeDecoded = b64str.length - b64str.length % 8; // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.

          base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.

          b64str = b64str.slice(0, canBeDecoded);
          res += this.iconv.decode(Buffer.from(b64str, 'base64'), "utf16-be");
        }

        this.inBase64 = inBase64;
        this.base64Accum = base64Accum;
        return res;
      };

      Utf7IMAPDecoder.prototype.end = function () {
        var res = "";
        if (this.inBase64 && this.base64Accum.length > 0) res = this.iconv.decode(Buffer.from(this.base64Accum, 'base64'), "utf16-be");
        this.inBase64 = false;
        this.base64Accum = '';
        return res;
      };
      /***/

    },

    /***/
    "SwJN":
    /*!*********************************************************!*\
      !*** ./node_modules/canvas-dither/src/canvas-dither.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function SwJN(module, exports) {
      /**
       * Use the ImageData from a Canvas and turn the image in a 1-bit black and white image using dithering
       */
      var CanvasDither = /*#__PURE__*/function () {
        function CanvasDither() {
          _classCallCheck(this, CanvasDither);
        }

        _createClass(CanvasDither, [{
          key: "grayscale",
          value:
          /**
             * Change the image to grayscale
             *
             * @param  {object}   image         The imageData of a Canvas 2d context
             * @return {object}                 The resulting imageData
             *
             */
          function grayscale(image) {
            for (var i = 0; i < image.data.length; i += 4) {
              var luminance = image.data[i] * 0.299 + image.data[i + 1] * 0.587 + image.data[i + 2] * 0.114;
              image.data.fill(luminance, i, i + 3);
            }

            return image;
          }
          /**
             * Change the image to blank and white using a simple threshold
             *
             * @param  {object}   image         The imageData of a Canvas 2d context
             * @param  {number}   threshold     Threshold value (0-255)
             * @return {object}                 The resulting imageData
             *
             */

        }, {
          key: "threshold",
          value: function threshold(image, _threshold) {
            for (var i = 0; i < image.data.length; i += 4) {
              var luminance = image.data[i] * 0.299 + image.data[i + 1] * 0.587 + image.data[i + 2] * 0.114;
              var value = luminance < _threshold ? 0 : 255;
              image.data.fill(value, i, i + 3);
            }

            return image;
          }
          /**
             * Change the image to blank and white using the Bayer algorithm
             *
             * @param  {object}   image         The imageData of a Canvas 2d context
             * @param  {number}   threshold     Threshold value (0-255)
             * @return {object}                 The resulting imageData
             *
             */

        }, {
          key: "bayer",
          value: function bayer(image, threshold) {
            var thresholdMap = [[15, 135, 45, 165], [195, 75, 225, 105], [60, 180, 30, 150], [240, 120, 210, 90]];

            for (var i = 0; i < image.data.length; i += 4) {
              var luminance = image.data[i] * 0.299 + image.data[i + 1] * 0.587 + image.data[i + 2] * 0.114;
              var x = i / 4 % image.width;
              var y = Math.floor(i / 4 / image.width);
              var map = Math.floor((luminance + thresholdMap[x % 4][y % 4]) / 2);
              var value = map < threshold ? 0 : 255;
              image.data.fill(value, i, i + 3);
            }

            return image;
          }
          /**
             * Change the image to blank and white using the Floyd-Steinberg algorithm
             *
             * @param  {object}   image         The imageData of a Canvas 2d context
             * @return {object}                 The resulting imageData
             *
             */

        }, {
          key: "floydsteinberg",
          value: function floydsteinberg(image) {
            var width = image.width;
            var luminance = new Uint8ClampedArray(image.width * image.height);

            for (var l = 0, i = 0; i < image.data.length; l++, i += 4) {
              luminance[l] = image.data[i] * 0.299 + image.data[i + 1] * 0.587 + image.data[i + 2] * 0.114;
            }

            for (var _l = 0, _i = 0; _i < image.data.length; _l++, _i += 4) {
              var value = luminance[_l] < 129 ? 0 : 255;
              var error = Math.floor((luminance[_l] - value) / 16);
              image.data.fill(value, _i, _i + 3);
              luminance[_l + 1] += error * 7;
              luminance[_l + width - 1] += error * 3;
              luminance[_l + width] += error * 5;
              luminance[_l + width + 1] += error * 1;
            }

            return image;
          }
          /**
             * Change the image to blank and white using the Atkinson algorithm
             *
             * @param  {object}   image         The imageData of a Canvas 2d context
             * @return {object}                 The resulting imageData
             *
             */

        }, {
          key: "atkinson",
          value: function atkinson(image) {
            var width = image.width;
            var luminance = new Uint8ClampedArray(image.width * image.height);

            for (var l = 0, i = 0; i < image.data.length; l++, i += 4) {
              luminance[l] = image.data[i] * 0.299 + image.data[i + 1] * 0.587 + image.data[i + 2] * 0.114;
            }

            for (var _l2 = 0, _i2 = 0; _i2 < image.data.length; _l2++, _i2 += 4) {
              var value = luminance[_l2] < 129 ? 0 : 255;
              var error = Math.floor((luminance[_l2] - value) / 8);
              image.data.fill(value, _i2, _i2 + 3);
              luminance[_l2 + 1] += error;
              luminance[_l2 + 2] += error;
              luminance[_l2 + width - 1] += error;
              luminance[_l2 + width] += error;
              luminance[_l2 + width + 1] += error;
              luminance[_l2 + 2 * width] += error;
            }

            return image;
          }
        }]);

        return CanvasDither;
      }();

      module.exports = new CanvasDither();
      /***/
    },

    /***/
    "UA3E":
    /*!************************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/tables/cp950.json ***!
      \************************************************************************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, default */

    /***/
    function UA3E(module) {
      module.exports = JSON.parse("[[\"0\",\"\\u0000\",127],[\"a140\",\"\u3000\uFF0C\u3001\u3002\uFF0E\u2027\uFF1B\uFF1A\uFF1F\uFF01\uFE30\u2026\u2025\uFE50\uFE51\uFE52\xB7\uFE54\uFE55\uFE56\uFE57\uFF5C\u2013\uFE31\u2014\uFE33\u2574\uFE34\uFE4F\uFF08\uFF09\uFE35\uFE36\uFF5B\uFF5D\uFE37\uFE38\u3014\u3015\uFE39\uFE3A\u3010\u3011\uFE3B\uFE3C\u300A\u300B\uFE3D\uFE3E\u3008\u3009\uFE3F\uFE40\u300C\u300D\uFE41\uFE42\u300E\u300F\uFE43\uFE44\uFE59\uFE5A\"],[\"a1a1\",\"\uFE5B\uFE5C\uFE5D\uFE5E\u2018\u2019\u201C\u201D\u301D\u301E\u2035\u2032\uFF03\uFF06\uFF0A\u203B\xA7\u3003\u25CB\u25CF\u25B3\u25B2\u25CE\u2606\u2605\u25C7\u25C6\u25A1\u25A0\u25BD\u25BC\u32A3\u2105\xAF\uFFE3\uFF3F\u02CD\uFE49\uFE4A\uFE4D\uFE4E\uFE4B\uFE4C\uFE5F\uFE60\uFE61\uFF0B\uFF0D\xD7\xF7\xB1\u221A\uFF1C\uFF1E\uFF1D\u2266\u2267\u2260\u221E\u2252\u2261\uFE62\",4,\"\uFF5E\u2229\u222A\u22A5\u2220\u221F\u22BF\u33D2\u33D1\u222B\u222E\u2235\u2234\u2640\u2642\u2295\u2299\u2191\u2193\u2190\u2192\u2196\u2197\u2199\u2198\u2225\u2223\uFF0F\"],[\"a240\",\"\uFF3C\u2215\uFE68\uFF04\uFFE5\u3012\uFFE0\uFFE1\uFF05\uFF20\u2103\u2109\uFE69\uFE6A\uFE6B\u33D5\u339C\u339D\u339E\u33CE\u33A1\u338E\u338F\u33C4\xB0\u5159\u515B\u515E\u515D\u5161\u5163\u55E7\u74E9\u7CCE\u2581\",7,\"\u258F\u258E\u258D\u258C\u258B\u258A\u2589\u253C\u2534\u252C\u2524\u251C\u2594\u2500\u2502\u2595\u250C\u2510\u2514\u2518\u256D\"],[\"a2a1\",\"\u256E\u2570\u256F\u2550\u255E\u256A\u2561\u25E2\u25E3\u25E5\u25E4\u2571\u2572\u2573\uFF10\",9,\"\u2160\",9,\"\u3021\",8,\"\u5341\u5344\u5345\uFF21\",25,\"\uFF41\",21],[\"a340\",\"\uFF57\uFF58\uFF59\uFF5A\u0391\",16,\"\u03A3\",6,\"\u03B1\",16,\"\u03C3\",6,\"\u3105\",10],[\"a3a1\",\"\u3110\",25,\"\u02D9\u02C9\u02CA\u02C7\u02CB\"],[\"a3e1\",\"\u20AC\"],[\"a440\",\"\u4E00\u4E59\u4E01\u4E03\u4E43\u4E5D\u4E86\u4E8C\u4EBA\u513F\u5165\u516B\u51E0\u5200\u5201\u529B\u5315\u5341\u535C\u53C8\u4E09\u4E0B\u4E08\u4E0A\u4E2B\u4E38\u51E1\u4E45\u4E48\u4E5F\u4E5E\u4E8E\u4EA1\u5140\u5203\u52FA\u5343\u53C9\u53E3\u571F\u58EB\u5915\u5927\u5973\u5B50\u5B51\u5B53\u5BF8\u5C0F\u5C22\u5C38\u5C71\u5DDD\u5DE5\u5DF1\u5DF2\u5DF3\u5DFE\u5E72\u5EFE\u5F0B\u5F13\u624D\"],[\"a4a1\",\"\u4E11\u4E10\u4E0D\u4E2D\u4E30\u4E39\u4E4B\u5C39\u4E88\u4E91\u4E95\u4E92\u4E94\u4EA2\u4EC1\u4EC0\u4EC3\u4EC6\u4EC7\u4ECD\u4ECA\u4ECB\u4EC4\u5143\u5141\u5167\u516D\u516E\u516C\u5197\u51F6\u5206\u5207\u5208\u52FB\u52FE\u52FF\u5316\u5339\u5348\u5347\u5345\u535E\u5384\u53CB\u53CA\u53CD\u58EC\u5929\u592B\u592A\u592D\u5B54\u5C11\u5C24\u5C3A\u5C6F\u5DF4\u5E7B\u5EFF\u5F14\u5F15\u5FC3\u6208\u6236\u624B\u624E\u652F\u6587\u6597\u65A4\u65B9\u65E5\u66F0\u6708\u6728\u6B20\u6B62\u6B79\u6BCB\u6BD4\u6BDB\u6C0F\u6C34\u706B\u722A\u7236\u723B\u7247\u7259\u725B\u72AC\u738B\u4E19\"],[\"a540\",\"\u4E16\u4E15\u4E14\u4E18\u4E3B\u4E4D\u4E4F\u4E4E\u4EE5\u4ED8\u4ED4\u4ED5\u4ED6\u4ED7\u4EE3\u4EE4\u4ED9\u4EDE\u5145\u5144\u5189\u518A\u51AC\u51F9\u51FA\u51F8\u520A\u52A0\u529F\u5305\u5306\u5317\u531D\u4EDF\u534A\u5349\u5361\u5360\u536F\u536E\u53BB\u53EF\u53E4\u53F3\u53EC\u53EE\u53E9\u53E8\u53FC\u53F8\u53F5\u53EB\u53E6\u53EA\u53F2\u53F1\u53F0\u53E5\u53ED\u53FB\u56DB\u56DA\u5916\"],[\"a5a1\",\"\u592E\u5931\u5974\u5976\u5B55\u5B83\u5C3C\u5DE8\u5DE7\u5DE6\u5E02\u5E03\u5E73\u5E7C\u5F01\u5F18\u5F17\u5FC5\u620A\u6253\u6254\u6252\u6251\u65A5\u65E6\u672E\u672C\u672A\u672B\u672D\u6B63\u6BCD\u6C11\u6C10\u6C38\u6C41\u6C40\u6C3E\u72AF\u7384\u7389\u74DC\u74E6\u7518\u751F\u7528\u7529\u7530\u7531\u7532\u7533\u758B\u767D\u76AE\u76BF\u76EE\u77DB\u77E2\u77F3\u793A\u79BE\u7A74\u7ACB\u4E1E\u4E1F\u4E52\u4E53\u4E69\u4E99\u4EA4\u4EA6\u4EA5\u4EFF\u4F09\u4F19\u4F0A\u4F15\u4F0D\u4F10\u4F11\u4F0F\u4EF2\u4EF6\u4EFB\u4EF0\u4EF3\u4EFD\u4F01\u4F0B\u5149\u5147\u5146\u5148\u5168\"],[\"a640\",\"\u5171\u518D\u51B0\u5217\u5211\u5212\u520E\u5216\u52A3\u5308\u5321\u5320\u5370\u5371\u5409\u540F\u540C\u540A\u5410\u5401\u540B\u5404\u5411\u540D\u5408\u5403\u540E\u5406\u5412\u56E0\u56DE\u56DD\u5733\u5730\u5728\u572D\u572C\u572F\u5729\u5919\u591A\u5937\u5938\u5984\u5978\u5983\u597D\u5979\u5982\u5981\u5B57\u5B58\u5B87\u5B88\u5B85\u5B89\u5BFA\u5C16\u5C79\u5DDE\u5E06\u5E76\u5E74\"],[\"a6a1\",\"\u5F0F\u5F1B\u5FD9\u5FD6\u620E\u620C\u620D\u6210\u6263\u625B\u6258\u6536\u65E9\u65E8\u65EC\u65ED\u66F2\u66F3\u6709\u673D\u6734\u6731\u6735\u6B21\u6B64\u6B7B\u6C16\u6C5D\u6C57\u6C59\u6C5F\u6C60\u6C50\u6C55\u6C61\u6C5B\u6C4D\u6C4E\u7070\u725F\u725D\u767E\u7AF9\u7C73\u7CF8\u7F36\u7F8A\u7FBD\u8001\u8003\u800C\u8012\u8033\u807F\u8089\u808B\u808C\u81E3\u81EA\u81F3\u81FC\u820C\u821B\u821F\u826E\u8272\u827E\u866B\u8840\u884C\u8863\u897F\u9621\u4E32\u4EA8\u4F4D\u4F4F\u4F47\u4F57\u4F5E\u4F34\u4F5B\u4F55\u4F30\u4F50\u4F51\u4F3D\u4F3A\u4F38\u4F43\u4F54\u4F3C\u4F46\u4F63\"],[\"a740\",\"\u4F5C\u4F60\u4F2F\u4F4E\u4F36\u4F59\u4F5D\u4F48\u4F5A\u514C\u514B\u514D\u5175\u51B6\u51B7\u5225\u5224\u5229\u522A\u5228\u52AB\u52A9\u52AA\u52AC\u5323\u5373\u5375\u541D\u542D\u541E\u543E\u5426\u544E\u5427\u5446\u5443\u5433\u5448\u5442\u541B\u5429\u544A\u5439\u543B\u5438\u542E\u5435\u5436\u5420\u543C\u5440\u5431\u542B\u541F\u542C\u56EA\u56F0\u56E4\u56EB\u574A\u5751\u5740\u574D\"],[\"a7a1\",\"\u5747\u574E\u573E\u5750\u574F\u573B\u58EF\u593E\u599D\u5992\u59A8\u599E\u59A3\u5999\u5996\u598D\u59A4\u5993\u598A\u59A5\u5B5D\u5B5C\u5B5A\u5B5B\u5B8C\u5B8B\u5B8F\u5C2C\u5C40\u5C41\u5C3F\u5C3E\u5C90\u5C91\u5C94\u5C8C\u5DEB\u5E0C\u5E8F\u5E87\u5E8A\u5EF7\u5F04\u5F1F\u5F64\u5F62\u5F77\u5F79\u5FD8\u5FCC\u5FD7\u5FCD\u5FF1\u5FEB\u5FF8\u5FEA\u6212\u6211\u6284\u6297\u6296\u6280\u6276\u6289\u626D\u628A\u627C\u627E\u6279\u6273\u6292\u626F\u6298\u626E\u6295\u6293\u6291\u6286\u6539\u653B\u6538\u65F1\u66F4\u675F\u674E\u674F\u6750\u6751\u675C\u6756\u675E\u6749\u6746\u6760\"],[\"a840\",\"\u6753\u6757\u6B65\u6BCF\u6C42\u6C5E\u6C99\u6C81\u6C88\u6C89\u6C85\u6C9B\u6C6A\u6C7A\u6C90\u6C70\u6C8C\u6C68\u6C96\u6C92\u6C7D\u6C83\u6C72\u6C7E\u6C74\u6C86\u6C76\u6C8D\u6C94\u6C98\u6C82\u7076\u707C\u707D\u7078\u7262\u7261\u7260\u72C4\u72C2\u7396\u752C\u752B\u7537\u7538\u7682\u76EF\u77E3\u79C1\u79C0\u79BF\u7A76\u7CFB\u7F55\u8096\u8093\u809D\u8098\u809B\u809A\u80B2\u826F\u8292\"],[\"a8a1\",\"\u828B\u828D\u898B\u89D2\u8A00\u8C37\u8C46\u8C55\u8C9D\u8D64\u8D70\u8DB3\u8EAB\u8ECA\u8F9B\u8FB0\u8FC2\u8FC6\u8FC5\u8FC4\u5DE1\u9091\u90A2\u90AA\u90A6\u90A3\u9149\u91C6\u91CC\u9632\u962E\u9631\u962A\u962C\u4E26\u4E56\u4E73\u4E8B\u4E9B\u4E9E\u4EAB\u4EAC\u4F6F\u4F9D\u4F8D\u4F73\u4F7F\u4F6C\u4F9B\u4F8B\u4F86\u4F83\u4F70\u4F75\u4F88\u4F69\u4F7B\u4F96\u4F7E\u4F8F\u4F91\u4F7A\u5154\u5152\u5155\u5169\u5177\u5176\u5178\u51BD\u51FD\u523B\u5238\u5237\u523A\u5230\u522E\u5236\u5241\u52BE\u52BB\u5352\u5354\u5353\u5351\u5366\u5377\u5378\u5379\u53D6\u53D4\u53D7\u5473\u5475\"],[\"a940\",\"\u5496\u5478\u5495\u5480\u547B\u5477\u5484\u5492\u5486\u547C\u5490\u5471\u5476\u548C\u549A\u5462\u5468\u548B\u547D\u548E\u56FA\u5783\u5777\u576A\u5769\u5761\u5766\u5764\u577C\u591C\u5949\u5947\u5948\u5944\u5954\u59BE\u59BB\u59D4\u59B9\u59AE\u59D1\u59C6\u59D0\u59CD\u59CB\u59D3\u59CA\u59AF\u59B3\u59D2\u59C5\u5B5F\u5B64\u5B63\u5B97\u5B9A\u5B98\u5B9C\u5B99\u5B9B\u5C1A\u5C48\u5C45\"],[\"a9a1\",\"\u5C46\u5CB7\u5CA1\u5CB8\u5CA9\u5CAB\u5CB1\u5CB3\u5E18\u5E1A\u5E16\u5E15\u5E1B\u5E11\u5E78\u5E9A\u5E97\u5E9C\u5E95\u5E96\u5EF6\u5F26\u5F27\u5F29\u5F80\u5F81\u5F7F\u5F7C\u5FDD\u5FE0\u5FFD\u5FF5\u5FFF\u600F\u6014\u602F\u6035\u6016\u602A\u6015\u6021\u6027\u6029\u602B\u601B\u6216\u6215\u623F\u623E\u6240\u627F\u62C9\u62CC\u62C4\u62BF\u62C2\u62B9\u62D2\u62DB\u62AB\u62D3\u62D4\u62CB\u62C8\u62A8\u62BD\u62BC\u62D0\u62D9\u62C7\u62CD\u62B5\u62DA\u62B1\u62D8\u62D6\u62D7\u62C6\u62AC\u62CE\u653E\u65A7\u65BC\u65FA\u6614\u6613\u660C\u6606\u6602\u660E\u6600\u660F\u6615\u660A\"],[\"aa40\",\"\u6607\u670D\u670B\u676D\u678B\u6795\u6771\u679C\u6773\u6777\u6787\u679D\u6797\u676F\u6770\u677F\u6789\u677E\u6790\u6775\u679A\u6793\u677C\u676A\u6772\u6B23\u6B66\u6B67\u6B7F\u6C13\u6C1B\u6CE3\u6CE8\u6CF3\u6CB1\u6CCC\u6CE5\u6CB3\u6CBD\u6CBE\u6CBC\u6CE2\u6CAB\u6CD5\u6CD3\u6CB8\u6CC4\u6CB9\u6CC1\u6CAE\u6CD7\u6CC5\u6CF1\u6CBF\u6CBB\u6CE1\u6CDB\u6CCA\u6CAC\u6CEF\u6CDC\u6CD6\u6CE0\"],[\"aaa1\",\"\u7095\u708E\u7092\u708A\u7099\u722C\u722D\u7238\u7248\u7267\u7269\u72C0\u72CE\u72D9\u72D7\u72D0\u73A9\u73A8\u739F\u73AB\u73A5\u753D\u759D\u7599\u759A\u7684\u76C2\u76F2\u76F4\u77E5\u77FD\u793E\u7940\u7941\u79C9\u79C8\u7A7A\u7A79\u7AFA\u7CFE\u7F54\u7F8C\u7F8B\u8005\u80BA\u80A5\u80A2\u80B1\u80A1\u80AB\u80A9\u80B4\u80AA\u80AF\u81E5\u81FE\u820D\u82B3\u829D\u8299\u82AD\u82BD\u829F\u82B9\u82B1\u82AC\u82A5\u82AF\u82B8\u82A3\u82B0\u82BE\u82B7\u864E\u8671\u521D\u8868\u8ECB\u8FCE\u8FD4\u8FD1\u90B5\u90B8\u90B1\u90B6\u91C7\u91D1\u9577\u9580\u961C\u9640\u963F\u963B\u9644\"],[\"ab40\",\"\u9642\u96B9\u96E8\u9752\u975E\u4E9F\u4EAD\u4EAE\u4FE1\u4FB5\u4FAF\u4FBF\u4FE0\u4FD1\u4FCF\u4FDD\u4FC3\u4FB6\u4FD8\u4FDF\u4FCA\u4FD7\u4FAE\u4FD0\u4FC4\u4FC2\u4FDA\u4FCE\u4FDE\u4FB7\u5157\u5192\u5191\u51A0\u524E\u5243\u524A\u524D\u524C\u524B\u5247\u52C7\u52C9\u52C3\u52C1\u530D\u5357\u537B\u539A\u53DB\u54AC\u54C0\u54A8\u54CE\u54C9\u54B8\u54A6\u54B3\u54C7\u54C2\u54BD\u54AA\u54C1\"],[\"aba1\",\"\u54C4\u54C8\u54AF\u54AB\u54B1\u54BB\u54A9\u54A7\u54BF\u56FF\u5782\u578B\u57A0\u57A3\u57A2\u57CE\u57AE\u5793\u5955\u5951\u594F\u594E\u5950\u59DC\u59D8\u59FF\u59E3\u59E8\u5A03\u59E5\u59EA\u59DA\u59E6\u5A01\u59FB\u5B69\u5BA3\u5BA6\u5BA4\u5BA2\u5BA5\u5C01\u5C4E\u5C4F\u5C4D\u5C4B\u5CD9\u5CD2\u5DF7\u5E1D\u5E25\u5E1F\u5E7D\u5EA0\u5EA6\u5EFA\u5F08\u5F2D\u5F65\u5F88\u5F85\u5F8A\u5F8B\u5F87\u5F8C\u5F89\u6012\u601D\u6020\u6025\u600E\u6028\u604D\u6070\u6068\u6062\u6046\u6043\u606C\u606B\u606A\u6064\u6241\u62DC\u6316\u6309\u62FC\u62ED\u6301\u62EE\u62FD\u6307\u62F1\u62F7\"],[\"ac40\",\"\u62EF\u62EC\u62FE\u62F4\u6311\u6302\u653F\u6545\u65AB\u65BD\u65E2\u6625\u662D\u6620\u6627\u662F\u661F\u6628\u6631\u6624\u66F7\u67FF\u67D3\u67F1\u67D4\u67D0\u67EC\u67B6\u67AF\u67F5\u67E9\u67EF\u67C4\u67D1\u67B4\u67DA\u67E5\u67B8\u67CF\u67DE\u67F3\u67B0\u67D9\u67E2\u67DD\u67D2\u6B6A\u6B83\u6B86\u6BB5\u6BD2\u6BD7\u6C1F\u6CC9\u6D0B\u6D32\u6D2A\u6D41\u6D25\u6D0C\u6D31\u6D1E\u6D17\"],[\"aca1\",\"\u6D3B\u6D3D\u6D3E\u6D36\u6D1B\u6CF5\u6D39\u6D27\u6D38\u6D29\u6D2E\u6D35\u6D0E\u6D2B\u70AB\u70BA\u70B3\u70AC\u70AF\u70AD\u70B8\u70AE\u70A4\u7230\u7272\u726F\u7274\u72E9\u72E0\u72E1\u73B7\u73CA\u73BB\u73B2\u73CD\u73C0\u73B3\u751A\u752D\u754F\u754C\u754E\u754B\u75AB\u75A4\u75A5\u75A2\u75A3\u7678\u7686\u7687\u7688\u76C8\u76C6\u76C3\u76C5\u7701\u76F9\u76F8\u7709\u770B\u76FE\u76FC\u7707\u77DC\u7802\u7814\u780C\u780D\u7946\u7949\u7948\u7947\u79B9\u79BA\u79D1\u79D2\u79CB\u7A7F\u7A81\u7AFF\u7AFD\u7C7D\u7D02\u7D05\u7D00\u7D09\u7D07\u7D04\u7D06\u7F38\u7F8E\u7FBF\u8004\"],[\"ad40\",\"\u8010\u800D\u8011\u8036\u80D6\u80E5\u80DA\u80C3\u80C4\u80CC\u80E1\u80DB\u80CE\u80DE\u80E4\u80DD\u81F4\u8222\u82E7\u8303\u8305\u82E3\u82DB\u82E6\u8304\u82E5\u8302\u8309\u82D2\u82D7\u82F1\u8301\u82DC\u82D4\u82D1\u82DE\u82D3\u82DF\u82EF\u8306\u8650\u8679\u867B\u867A\u884D\u886B\u8981\u89D4\u8A08\u8A02\u8A03\u8C9E\u8CA0\u8D74\u8D73\u8DB4\u8ECD\u8ECC\u8FF0\u8FE6\u8FE2\u8FEA\u8FE5\"],[\"ada1\",\"\u8FED\u8FEB\u8FE4\u8FE8\u90CA\u90CE\u90C1\u90C3\u914B\u914A\u91CD\u9582\u9650\u964B\u964C\u964D\u9762\u9769\u97CB\u97ED\u97F3\u9801\u98A8\u98DB\u98DF\u9996\u9999\u4E58\u4EB3\u500C\u500D\u5023\u4FEF\u5026\u5025\u4FF8\u5029\u5016\u5006\u503C\u501F\u501A\u5012\u5011\u4FFA\u5000\u5014\u5028\u4FF1\u5021\u500B\u5019\u5018\u4FF3\u4FEE\u502D\u502A\u4FFE\u502B\u5009\u517C\u51A4\u51A5\u51A2\u51CD\u51CC\u51C6\u51CB\u5256\u525C\u5254\u525B\u525D\u532A\u537F\u539F\u539D\u53DF\u54E8\u5510\u5501\u5537\u54FC\u54E5\u54F2\u5506\u54FA\u5514\u54E9\u54ED\u54E1\u5509\u54EE\u54EA\"],[\"ae40\",\"\u54E6\u5527\u5507\u54FD\u550F\u5703\u5704\u57C2\u57D4\u57CB\u57C3\u5809\u590F\u5957\u5958\u595A\u5A11\u5A18\u5A1C\u5A1F\u5A1B\u5A13\u59EC\u5A20\u5A23\u5A29\u5A25\u5A0C\u5A09\u5B6B\u5C58\u5BB0\u5BB3\u5BB6\u5BB4\u5BAE\u5BB5\u5BB9\u5BB8\u5C04\u5C51\u5C55\u5C50\u5CED\u5CFD\u5CFB\u5CEA\u5CE8\u5CF0\u5CF6\u5D01\u5CF4\u5DEE\u5E2D\u5E2B\u5EAB\u5EAD\u5EA7\u5F31\u5F92\u5F91\u5F90\u6059\"],[\"aea1\",\"\u6063\u6065\u6050\u6055\u606D\u6069\u606F\u6084\u609F\u609A\u608D\u6094\u608C\u6085\u6096\u6247\u62F3\u6308\u62FF\u634E\u633E\u632F\u6355\u6342\u6346\u634F\u6349\u633A\u6350\u633D\u632A\u632B\u6328\u634D\u634C\u6548\u6549\u6599\u65C1\u65C5\u6642\u6649\u664F\u6643\u6652\u664C\u6645\u6641\u66F8\u6714\u6715\u6717\u6821\u6838\u6848\u6846\u6853\u6839\u6842\u6854\u6829\u68B3\u6817\u684C\u6851\u683D\u67F4\u6850\u6840\u683C\u6843\u682A\u6845\u6813\u6818\u6841\u6B8A\u6B89\u6BB7\u6C23\u6C27\u6C28\u6C26\u6C24\u6CF0\u6D6A\u6D95\u6D88\u6D87\u6D66\u6D78\u6D77\u6D59\u6D93\"],[\"af40\",\"\u6D6C\u6D89\u6D6E\u6D5A\u6D74\u6D69\u6D8C\u6D8A\u6D79\u6D85\u6D65\u6D94\u70CA\u70D8\u70E4\u70D9\u70C8\u70CF\u7239\u7279\u72FC\u72F9\u72FD\u72F8\u72F7\u7386\u73ED\u7409\u73EE\u73E0\u73EA\u73DE\u7554\u755D\u755C\u755A\u7559\u75BE\u75C5\u75C7\u75B2\u75B3\u75BD\u75BC\u75B9\u75C2\u75B8\u768B\u76B0\u76CA\u76CD\u76CE\u7729\u771F\u7720\u7728\u77E9\u7830\u7827\u7838\u781D\u7834\u7837\"],[\"afa1\",\"\u7825\u782D\u7820\u781F\u7832\u7955\u7950\u7960\u795F\u7956\u795E\u795D\u7957\u795A\u79E4\u79E3\u79E7\u79DF\u79E6\u79E9\u79D8\u7A84\u7A88\u7AD9\u7B06\u7B11\u7C89\u7D21\u7D17\u7D0B\u7D0A\u7D20\u7D22\u7D14\u7D10\u7D15\u7D1A\u7D1C\u7D0D\u7D19\u7D1B\u7F3A\u7F5F\u7F94\u7FC5\u7FC1\u8006\u8018\u8015\u8019\u8017\u803D\u803F\u80F1\u8102\u80F0\u8105\u80ED\u80F4\u8106\u80F8\u80F3\u8108\u80FD\u810A\u80FC\u80EF\u81ED\u81EC\u8200\u8210\u822A\u822B\u8228\u822C\u82BB\u832B\u8352\u8354\u834A\u8338\u8350\u8349\u8335\u8334\u834F\u8332\u8339\u8336\u8317\u8340\u8331\u8328\u8343\"],[\"b040\",\"\u8654\u868A\u86AA\u8693\u86A4\u86A9\u868C\u86A3\u869C\u8870\u8877\u8881\u8882\u887D\u8879\u8A18\u8A10\u8A0E\u8A0C\u8A15\u8A0A\u8A17\u8A13\u8A16\u8A0F\u8A11\u8C48\u8C7A\u8C79\u8CA1\u8CA2\u8D77\u8EAC\u8ED2\u8ED4\u8ECF\u8FB1\u9001\u9006\u8FF7\u9000\u8FFA\u8FF4\u9003\u8FFD\u9005\u8FF8\u9095\u90E1\u90DD\u90E2\u9152\u914D\u914C\u91D8\u91DD\u91D7\u91DC\u91D9\u9583\u9662\u9663\u9661\"],[\"b0a1\",\"\u965B\u965D\u9664\u9658\u965E\u96BB\u98E2\u99AC\u9AA8\u9AD8\u9B25\u9B32\u9B3C\u4E7E\u507A\u507D\u505C\u5047\u5043\u504C\u505A\u5049\u5065\u5076\u504E\u5055\u5075\u5074\u5077\u504F\u500F\u506F\u506D\u515C\u5195\u51F0\u526A\u526F\u52D2\u52D9\u52D8\u52D5\u5310\u530F\u5319\u533F\u5340\u533E\u53C3\u66FC\u5546\u556A\u5566\u5544\u555E\u5561\u5543\u554A\u5531\u5556\u554F\u5555\u552F\u5564\u5538\u552E\u555C\u552C\u5563\u5533\u5541\u5557\u5708\u570B\u5709\u57DF\u5805\u580A\u5806\u57E0\u57E4\u57FA\u5802\u5835\u57F7\u57F9\u5920\u5962\u5A36\u5A41\u5A49\u5A66\u5A6A\u5A40\"],[\"b140\",\"\u5A3C\u5A62\u5A5A\u5A46\u5A4A\u5B70\u5BC7\u5BC5\u5BC4\u5BC2\u5BBF\u5BC6\u5C09\u5C08\u5C07\u5C60\u5C5C\u5C5D\u5D07\u5D06\u5D0E\u5D1B\u5D16\u5D22\u5D11\u5D29\u5D14\u5D19\u5D24\u5D27\u5D17\u5DE2\u5E38\u5E36\u5E33\u5E37\u5EB7\u5EB8\u5EB6\u5EB5\u5EBE\u5F35\u5F37\u5F57\u5F6C\u5F69\u5F6B\u5F97\u5F99\u5F9E\u5F98\u5FA1\u5FA0\u5F9C\u607F\u60A3\u6089\u60A0\u60A8\u60CB\u60B4\u60E6\u60BD\"],[\"b1a1\",\"\u60C5\u60BB\u60B5\u60DC\u60BC\u60D8\u60D5\u60C6\u60DF\u60B8\u60DA\u60C7\u621A\u621B\u6248\u63A0\u63A7\u6372\u6396\u63A2\u63A5\u6377\u6367\u6398\u63AA\u6371\u63A9\u6389\u6383\u639B\u636B\u63A8\u6384\u6388\u6399\u63A1\u63AC\u6392\u638F\u6380\u637B\u6369\u6368\u637A\u655D\u6556\u6551\u6559\u6557\u555F\u654F\u6558\u6555\u6554\u659C\u659B\u65AC\u65CF\u65CB\u65CC\u65CE\u665D\u665A\u6664\u6668\u6666\u665E\u66F9\u52D7\u671B\u6881\u68AF\u68A2\u6893\u68B5\u687F\u6876\u68B1\u68A7\u6897\u68B0\u6883\u68C4\u68AD\u6886\u6885\u6894\u689D\u68A8\u689F\u68A1\u6882\u6B32\u6BBA\"],[\"b240\",\"\u6BEB\u6BEC\u6C2B\u6D8E\u6DBC\u6DF3\u6DD9\u6DB2\u6DE1\u6DCC\u6DE4\u6DFB\u6DFA\u6E05\u6DC7\u6DCB\u6DAF\u6DD1\u6DAE\u6DDE\u6DF9\u6DB8\u6DF7\u6DF5\u6DC5\u6DD2\u6E1A\u6DB5\u6DDA\u6DEB\u6DD8\u6DEA\u6DF1\u6DEE\u6DE8\u6DC6\u6DC4\u6DAA\u6DEC\u6DBF\u6DE6\u70F9\u7109\u710A\u70FD\u70EF\u723D\u727D\u7281\u731C\u731B\u7316\u7313\u7319\u7387\u7405\u740A\u7403\u7406\u73FE\u740D\u74E0\u74F6\"],[\"b2a1\",\"\u74F7\u751C\u7522\u7565\u7566\u7562\u7570\u758F\u75D4\u75D5\u75B5\u75CA\u75CD\u768E\u76D4\u76D2\u76DB\u7737\u773E\u773C\u7736\u7738\u773A\u786B\u7843\u784E\u7965\u7968\u796D\u79FB\u7A92\u7A95\u7B20\u7B28\u7B1B\u7B2C\u7B26\u7B19\u7B1E\u7B2E\u7C92\u7C97\u7C95\u7D46\u7D43\u7D71\u7D2E\u7D39\u7D3C\u7D40\u7D30\u7D33\u7D44\u7D2F\u7D42\u7D32\u7D31\u7F3D\u7F9E\u7F9A\u7FCC\u7FCE\u7FD2\u801C\u804A\u8046\u812F\u8116\u8123\u812B\u8129\u8130\u8124\u8202\u8235\u8237\u8236\u8239\u838E\u839E\u8398\u8378\u83A2\u8396\u83BD\u83AB\u8392\u838A\u8393\u8389\u83A0\u8377\u837B\u837C\"],[\"b340\",\"\u8386\u83A7\u8655\u5F6A\u86C7\u86C0\u86B6\u86C4\u86B5\u86C6\u86CB\u86B1\u86AF\u86C9\u8853\u889E\u8888\u88AB\u8892\u8896\u888D\u888B\u8993\u898F\u8A2A\u8A1D\u8A23\u8A25\u8A31\u8A2D\u8A1F\u8A1B\u8A22\u8C49\u8C5A\u8CA9\u8CAC\u8CAB\u8CA8\u8CAA\u8CA7\u8D67\u8D66\u8DBE\u8DBA\u8EDB\u8EDF\u9019\u900D\u901A\u9017\u9023\u901F\u901D\u9010\u9015\u901E\u9020\u900F\u9022\u9016\u901B\u9014\"],[\"b3a1\",\"\u90E8\u90ED\u90FD\u9157\u91CE\u91F5\u91E6\u91E3\u91E7\u91ED\u91E9\u9589\u966A\u9675\u9673\u9678\u9670\u9674\u9676\u9677\u966C\u96C0\u96EA\u96E9\u7AE0\u7ADF\u9802\u9803\u9B5A\u9CE5\u9E75\u9E7F\u9EA5\u9EBB\u50A2\u508D\u5085\u5099\u5091\u5080\u5096\u5098\u509A\u6700\u51F1\u5272\u5274\u5275\u5269\u52DE\u52DD\u52DB\u535A\u53A5\u557B\u5580\u55A7\u557C\u558A\u559D\u5598\u5582\u559C\u55AA\u5594\u5587\u558B\u5583\u55B3\u55AE\u559F\u553E\u55B2\u559A\u55BB\u55AC\u55B1\u557E\u5589\u55AB\u5599\u570D\u582F\u582A\u5834\u5824\u5830\u5831\u5821\u581D\u5820\u58F9\u58FA\u5960\"],[\"b440\",\"\u5A77\u5A9A\u5A7F\u5A92\u5A9B\u5AA7\u5B73\u5B71\u5BD2\u5BCC\u5BD3\u5BD0\u5C0A\u5C0B\u5C31\u5D4C\u5D50\u5D34\u5D47\u5DFD\u5E45\u5E3D\u5E40\u5E43\u5E7E\u5ECA\u5EC1\u5EC2\u5EC4\u5F3C\u5F6D\u5FA9\u5FAA\u5FA8\u60D1\u60E1\u60B2\u60B6\u60E0\u611C\u6123\u60FA\u6115\u60F0\u60FB\u60F4\u6168\u60F1\u610E\u60F6\u6109\u6100\u6112\u621F\u6249\u63A3\u638C\u63CF\u63C0\u63E9\u63C9\u63C6\u63CD\"],[\"b4a1\",\"\u63D2\u63E3\u63D0\u63E1\u63D6\u63ED\u63EE\u6376\u63F4\u63EA\u63DB\u6452\u63DA\u63F9\u655E\u6566\u6562\u6563\u6591\u6590\u65AF\u666E\u6670\u6674\u6676\u666F\u6691\u667A\u667E\u6677\u66FE\u66FF\u671F\u671D\u68FA\u68D5\u68E0\u68D8\u68D7\u6905\u68DF\u68F5\u68EE\u68E7\u68F9\u68D2\u68F2\u68E3\u68CB\u68CD\u690D\u6912\u690E\u68C9\u68DA\u696E\u68FB\u6B3E\u6B3A\u6B3D\u6B98\u6B96\u6BBC\u6BEF\u6C2E\u6C2F\u6C2C\u6E2F\u6E38\u6E54\u6E21\u6E32\u6E67\u6E4A\u6E20\u6E25\u6E23\u6E1B\u6E5B\u6E58\u6E24\u6E56\u6E6E\u6E2D\u6E26\u6E6F\u6E34\u6E4D\u6E3A\u6E2C\u6E43\u6E1D\u6E3E\u6ECB\"],[\"b540\",\"\u6E89\u6E19\u6E4E\u6E63\u6E44\u6E72\u6E69\u6E5F\u7119\u711A\u7126\u7130\u7121\u7136\u716E\u711C\u724C\u7284\u7280\u7336\u7325\u7334\u7329\u743A\u742A\u7433\u7422\u7425\u7435\u7436\u7434\u742F\u741B\u7426\u7428\u7525\u7526\u756B\u756A\u75E2\u75DB\u75E3\u75D9\u75D8\u75DE\u75E0\u767B\u767C\u7696\u7693\u76B4\u76DC\u774F\u77ED\u785D\u786C\u786F\u7A0D\u7A08\u7A0B\u7A05\u7A00\u7A98\"],[\"b5a1\",\"\u7A97\u7A96\u7AE5\u7AE3\u7B49\u7B56\u7B46\u7B50\u7B52\u7B54\u7B4D\u7B4B\u7B4F\u7B51\u7C9F\u7CA5\u7D5E\u7D50\u7D68\u7D55\u7D2B\u7D6E\u7D72\u7D61\u7D66\u7D62\u7D70\u7D73\u5584\u7FD4\u7FD5\u800B\u8052\u8085\u8155\u8154\u814B\u8151\u814E\u8139\u8146\u813E\u814C\u8153\u8174\u8212\u821C\u83E9\u8403\u83F8\u840D\u83E0\u83C5\u840B\u83C1\u83EF\u83F1\u83F4\u8457\u840A\u83F0\u840C\u83CC\u83FD\u83F2\u83CA\u8438\u840E\u8404\u83DC\u8407\u83D4\u83DF\u865B\u86DF\u86D9\u86ED\u86D4\u86DB\u86E4\u86D0\u86DE\u8857\u88C1\u88C2\u88B1\u8983\u8996\u8A3B\u8A60\u8A55\u8A5E\u8A3C\u8A41\"],[\"b640\",\"\u8A54\u8A5B\u8A50\u8A46\u8A34\u8A3A\u8A36\u8A56\u8C61\u8C82\u8CAF\u8CBC\u8CB3\u8CBD\u8CC1\u8CBB\u8CC0\u8CB4\u8CB7\u8CB6\u8CBF\u8CB8\u8D8A\u8D85\u8D81\u8DCE\u8DDD\u8DCB\u8DDA\u8DD1\u8DCC\u8DDB\u8DC6\u8EFB\u8EF8\u8EFC\u8F9C\u902E\u9035\u9031\u9038\u9032\u9036\u9102\u90F5\u9109\u90FE\u9163\u9165\u91CF\u9214\u9215\u9223\u9209\u921E\u920D\u9210\u9207\u9211\u9594\u958F\u958B\u9591\"],[\"b6a1\",\"\u9593\u9592\u958E\u968A\u968E\u968B\u967D\u9685\u9686\u968D\u9672\u9684\u96C1\u96C5\u96C4\u96C6\u96C7\u96EF\u96F2\u97CC\u9805\u9806\u9808\u98E7\u98EA\u98EF\u98E9\u98F2\u98ED\u99AE\u99AD\u9EC3\u9ECD\u9ED1\u4E82\u50AD\u50B5\u50B2\u50B3\u50C5\u50BE\u50AC\u50B7\u50BB\u50AF\u50C7\u527F\u5277\u527D\u52DF\u52E6\u52E4\u52E2\u52E3\u532F\u55DF\u55E8\u55D3\u55E6\u55CE\u55DC\u55C7\u55D1\u55E3\u55E4\u55EF\u55DA\u55E1\u55C5\u55C6\u55E5\u55C9\u5712\u5713\u585E\u5851\u5858\u5857\u585A\u5854\u586B\u584C\u586D\u584A\u5862\u5852\u584B\u5967\u5AC1\u5AC9\u5ACC\u5ABE\u5ABD\u5ABC\"],[\"b740\",\"\u5AB3\u5AC2\u5AB2\u5D69\u5D6F\u5E4C\u5E79\u5EC9\u5EC8\u5F12\u5F59\u5FAC\u5FAE\u611A\u610F\u6148\u611F\u60F3\u611B\u60F9\u6101\u6108\u614E\u614C\u6144\u614D\u613E\u6134\u6127\u610D\u6106\u6137\u6221\u6222\u6413\u643E\u641E\u642A\u642D\u643D\u642C\u640F\u641C\u6414\u640D\u6436\u6416\u6417\u6406\u656C\u659F\u65B0\u6697\u6689\u6687\u6688\u6696\u6684\u6698\u668D\u6703\u6994\u696D\"],[\"b7a1\",\"\u695A\u6977\u6960\u6954\u6975\u6930\u6982\u694A\u6968\u696B\u695E\u6953\u6979\u6986\u695D\u6963\u695B\u6B47\u6B72\u6BC0\u6BBF\u6BD3\u6BFD\u6EA2\u6EAF\u6ED3\u6EB6\u6EC2\u6E90\u6E9D\u6EC7\u6EC5\u6EA5\u6E98\u6EBC\u6EBA\u6EAB\u6ED1\u6E96\u6E9C\u6EC4\u6ED4\u6EAA\u6EA7\u6EB4\u714E\u7159\u7169\u7164\u7149\u7167\u715C\u716C\u7166\u714C\u7165\u715E\u7146\u7168\u7156\u723A\u7252\u7337\u7345\u733F\u733E\u746F\u745A\u7455\u745F\u745E\u7441\u743F\u7459\u745B\u745C\u7576\u7578\u7600\u75F0\u7601\u75F2\u75F1\u75FA\u75FF\u75F4\u75F3\u76DE\u76DF\u775B\u776B\u7766\u775E\u7763\"],[\"b840\",\"\u7779\u776A\u776C\u775C\u7765\u7768\u7762\u77EE\u788E\u78B0\u7897\u7898\u788C\u7889\u787C\u7891\u7893\u787F\u797A\u797F\u7981\u842C\u79BD\u7A1C\u7A1A\u7A20\u7A14\u7A1F\u7A1E\u7A9F\u7AA0\u7B77\u7BC0\u7B60\u7B6E\u7B67\u7CB1\u7CB3\u7CB5\u7D93\u7D79\u7D91\u7D81\u7D8F\u7D5B\u7F6E\u7F69\u7F6A\u7F72\u7FA9\u7FA8\u7FA4\u8056\u8058\u8086\u8084\u8171\u8170\u8178\u8165\u816E\u8173\u816B\"],[\"b8a1\",\"\u8179\u817A\u8166\u8205\u8247\u8482\u8477\u843D\u8431\u8475\u8466\u846B\u8449\u846C\u845B\u843C\u8435\u8461\u8463\u8469\u846D\u8446\u865E\u865C\u865F\u86F9\u8713\u8708\u8707\u8700\u86FE\u86FB\u8702\u8703\u8706\u870A\u8859\u88DF\u88D4\u88D9\u88DC\u88D8\u88DD\u88E1\u88CA\u88D5\u88D2\u899C\u89E3\u8A6B\u8A72\u8A73\u8A66\u8A69\u8A70\u8A87\u8A7C\u8A63\u8AA0\u8A71\u8A85\u8A6D\u8A62\u8A6E\u8A6C\u8A79\u8A7B\u8A3E\u8A68\u8C62\u8C8A\u8C89\u8CCA\u8CC7\u8CC8\u8CC4\u8CB2\u8CC3\u8CC2\u8CC5\u8DE1\u8DDF\u8DE8\u8DEF\u8DF3\u8DFA\u8DEA\u8DE4\u8DE6\u8EB2\u8F03\u8F09\u8EFE\u8F0A\"],[\"b940\",\"\u8F9F\u8FB2\u904B\u904A\u9053\u9042\u9054\u903C\u9055\u9050\u9047\u904F\u904E\u904D\u9051\u903E\u9041\u9112\u9117\u916C\u916A\u9169\u91C9\u9237\u9257\u9238\u923D\u9240\u923E\u925B\u924B\u9264\u9251\u9234\u9249\u924D\u9245\u9239\u923F\u925A\u9598\u9698\u9694\u9695\u96CD\u96CB\u96C9\u96CA\u96F7\u96FB\u96F9\u96F6\u9756\u9774\u9776\u9810\u9811\u9813\u980A\u9812\u980C\u98FC\u98F4\"],[\"b9a1\",\"\u98FD\u98FE\u99B3\u99B1\u99B4\u9AE1\u9CE9\u9E82\u9F0E\u9F13\u9F20\u50E7\u50EE\u50E5\u50D6\u50ED\u50DA\u50D5\u50CF\u50D1\u50F1\u50CE\u50E9\u5162\u51F3\u5283\u5282\u5331\u53AD\u55FE\u5600\u561B\u5617\u55FD\u5614\u5606\u5609\u560D\u560E\u55F7\u5616\u561F\u5608\u5610\u55F6\u5718\u5716\u5875\u587E\u5883\u5893\u588A\u5879\u5885\u587D\u58FD\u5925\u5922\u5924\u596A\u5969\u5AE1\u5AE6\u5AE9\u5AD7\u5AD6\u5AD8\u5AE3\u5B75\u5BDE\u5BE7\u5BE1\u5BE5\u5BE6\u5BE8\u5BE2\u5BE4\u5BDF\u5C0D\u5C62\u5D84\u5D87\u5E5B\u5E63\u5E55\u5E57\u5E54\u5ED3\u5ED6\u5F0A\u5F46\u5F70\u5FB9\u6147\"],[\"ba40\",\"\u613F\u614B\u6177\u6162\u6163\u615F\u615A\u6158\u6175\u622A\u6487\u6458\u6454\u64A4\u6478\u645F\u647A\u6451\u6467\u6434\u646D\u647B\u6572\u65A1\u65D7\u65D6\u66A2\u66A8\u669D\u699C\u69A8\u6995\u69C1\u69AE\u69D3\u69CB\u699B\u69B7\u69BB\u69AB\u69B4\u69D0\u69CD\u69AD\u69CC\u69A6\u69C3\u69A3\u6B49\u6B4C\u6C33\u6F33\u6F14\u6EFE\u6F13\u6EF4\u6F29\u6F3E\u6F20\u6F2C\u6F0F\u6F02\u6F22\"],[\"baa1\",\"\u6EFF\u6EEF\u6F06\u6F31\u6F38\u6F32\u6F23\u6F15\u6F2B\u6F2F\u6F88\u6F2A\u6EEC\u6F01\u6EF2\u6ECC\u6EF7\u7194\u7199\u717D\u718A\u7184\u7192\u723E\u7292\u7296\u7344\u7350\u7464\u7463\u746A\u7470\u746D\u7504\u7591\u7627\u760D\u760B\u7609\u7613\u76E1\u76E3\u7784\u777D\u777F\u7761\u78C1\u789F\u78A7\u78B3\u78A9\u78A3\u798E\u798F\u798D\u7A2E\u7A31\u7AAA\u7AA9\u7AED\u7AEF\u7BA1\u7B95\u7B8B\u7B75\u7B97\u7B9D\u7B94\u7B8F\u7BB8\u7B87\u7B84\u7CB9\u7CBD\u7CBE\u7DBB\u7DB0\u7D9C\u7DBD\u7DBE\u7DA0\u7DCA\u7DB4\u7DB2\u7DB1\u7DBA\u7DA2\u7DBF\u7DB5\u7DB8\u7DAD\u7DD2\u7DC7\u7DAC\"],[\"bb40\",\"\u7F70\u7FE0\u7FE1\u7FDF\u805E\u805A\u8087\u8150\u8180\u818F\u8188\u818A\u817F\u8182\u81E7\u81FA\u8207\u8214\u821E\u824B\u84C9\u84BF\u84C6\u84C4\u8499\u849E\u84B2\u849C\u84CB\u84B8\u84C0\u84D3\u8490\u84BC\u84D1\u84CA\u873F\u871C\u873B\u8722\u8725\u8734\u8718\u8755\u8737\u8729\u88F3\u8902\u88F4\u88F9\u88F8\u88FD\u88E8\u891A\u88EF\u8AA6\u8A8C\u8A9E\u8AA3\u8A8D\u8AA1\u8A93\u8AA4\"],[\"bba1\",\"\u8AAA\u8AA5\u8AA8\u8A98\u8A91\u8A9A\u8AA7\u8C6A\u8C8D\u8C8C\u8CD3\u8CD1\u8CD2\u8D6B\u8D99\u8D95\u8DFC\u8F14\u8F12\u8F15\u8F13\u8FA3\u9060\u9058\u905C\u9063\u9059\u905E\u9062\u905D\u905B\u9119\u9118\u911E\u9175\u9178\u9177\u9174\u9278\u9280\u9285\u9298\u9296\u927B\u9293\u929C\u92A8\u927C\u9291\u95A1\u95A8\u95A9\u95A3\u95A5\u95A4\u9699\u969C\u969B\u96CC\u96D2\u9700\u977C\u9785\u97F6\u9817\u9818\u98AF\u98B1\u9903\u9905\u990C\u9909\u99C1\u9AAF\u9AB0\u9AE6\u9B41\u9B42\u9CF4\u9CF6\u9CF3\u9EBC\u9F3B\u9F4A\u5104\u5100\u50FB\u50F5\u50F9\u5102\u5108\u5109\u5105\u51DC\"],[\"bc40\",\"\u5287\u5288\u5289\u528D\u528A\u52F0\u53B2\u562E\u563B\u5639\u5632\u563F\u5634\u5629\u5653\u564E\u5657\u5674\u5636\u562F\u5630\u5880\u589F\u589E\u58B3\u589C\u58AE\u58A9\u58A6\u596D\u5B09\u5AFB\u5B0B\u5AF5\u5B0C\u5B08\u5BEE\u5BEC\u5BE9\u5BEB\u5C64\u5C65\u5D9D\u5D94\u5E62\u5E5F\u5E61\u5EE2\u5EDA\u5EDF\u5EDD\u5EE3\u5EE0\u5F48\u5F71\u5FB7\u5FB5\u6176\u6167\u616E\u615D\u6155\u6182\"],[\"bca1\",\"\u617C\u6170\u616B\u617E\u61A7\u6190\u61AB\u618E\u61AC\u619A\u61A4\u6194\u61AE\u622E\u6469\u646F\u6479\u649E\u64B2\u6488\u6490\u64B0\u64A5\u6493\u6495\u64A9\u6492\u64AE\u64AD\u64AB\u649A\u64AC\u6499\u64A2\u64B3\u6575\u6577\u6578\u66AE\u66AB\u66B4\u66B1\u6A23\u6A1F\u69E8\u6A01\u6A1E\u6A19\u69FD\u6A21\u6A13\u6A0A\u69F3\u6A02\u6A05\u69ED\u6A11\u6B50\u6B4E\u6BA4\u6BC5\u6BC6\u6F3F\u6F7C\u6F84\u6F51\u6F66\u6F54\u6F86\u6F6D\u6F5B\u6F78\u6F6E\u6F8E\u6F7A\u6F70\u6F64\u6F97\u6F58\u6ED5\u6F6F\u6F60\u6F5F\u719F\u71AC\u71B1\u71A8\u7256\u729B\u734E\u7357\u7469\u748B\u7483\"],[\"bd40\",\"\u747E\u7480\u757F\u7620\u7629\u761F\u7624\u7626\u7621\u7622\u769A\u76BA\u76E4\u778E\u7787\u778C\u7791\u778B\u78CB\u78C5\u78BA\u78CA\u78BE\u78D5\u78BC\u78D0\u7A3F\u7A3C\u7A40\u7A3D\u7A37\u7A3B\u7AAF\u7AAE\u7BAD\u7BB1\u7BC4\u7BB4\u7BC6\u7BC7\u7BC1\u7BA0\u7BCC\u7CCA\u7DE0\u7DF4\u7DEF\u7DFB\u7DD8\u7DEC\u7DDD\u7DE8\u7DE3\u7DDA\u7DDE\u7DE9\u7D9E\u7DD9\u7DF2\u7DF9\u7F75\u7F77\u7FAF\"],[\"bda1\",\"\u7FE9\u8026\u819B\u819C\u819D\u81A0\u819A\u8198\u8517\u853D\u851A\u84EE\u852C\u852D\u8513\u8511\u8523\u8521\u8514\u84EC\u8525\u84FF\u8506\u8782\u8774\u8776\u8760\u8766\u8778\u8768\u8759\u8757\u874C\u8753\u885B\u885D\u8910\u8907\u8912\u8913\u8915\u890A\u8ABC\u8AD2\u8AC7\u8AC4\u8A95\u8ACB\u8AF8\u8AB2\u8AC9\u8AC2\u8ABF\u8AB0\u8AD6\u8ACD\u8AB6\u8AB9\u8ADB\u8C4C\u8C4E\u8C6C\u8CE0\u8CDE\u8CE6\u8CE4\u8CEC\u8CED\u8CE2\u8CE3\u8CDC\u8CEA\u8CE1\u8D6D\u8D9F\u8DA3\u8E2B\u8E10\u8E1D\u8E22\u8E0F\u8E29\u8E1F\u8E21\u8E1E\u8EBA\u8F1D\u8F1B\u8F1F\u8F29\u8F26\u8F2A\u8F1C\u8F1E\"],[\"be40\",\"\u8F25\u9069\u906E\u9068\u906D\u9077\u9130\u912D\u9127\u9131\u9187\u9189\u918B\u9183\u92C5\u92BB\u92B7\u92EA\u92AC\u92E4\u92C1\u92B3\u92BC\u92D2\u92C7\u92F0\u92B2\u95AD\u95B1\u9704\u9706\u9707\u9709\u9760\u978D\u978B\u978F\u9821\u982B\u981C\u98B3\u990A\u9913\u9912\u9918\u99DD\u99D0\u99DF\u99DB\u99D1\u99D5\u99D2\u99D9\u9AB7\u9AEE\u9AEF\u9B27\u9B45\u9B44\u9B77\u9B6F\u9D06\u9D09\"],[\"bea1\",\"\u9D03\u9EA9\u9EBE\u9ECE\u58A8\u9F52\u5112\u5118\u5114\u5110\u5115\u5180\u51AA\u51DD\u5291\u5293\u52F3\u5659\u566B\u5679\u5669\u5664\u5678\u566A\u5668\u5665\u5671\u566F\u566C\u5662\u5676\u58C1\u58BE\u58C7\u58C5\u596E\u5B1D\u5B34\u5B78\u5BF0\u5C0E\u5F4A\u61B2\u6191\u61A9\u618A\u61CD\u61B6\u61BE\u61CA\u61C8\u6230\u64C5\u64C1\u64CB\u64BB\u64BC\u64DA\u64C4\u64C7\u64C2\u64CD\u64BF\u64D2\u64D4\u64BE\u6574\u66C6\u66C9\u66B9\u66C4\u66C7\u66B8\u6A3D\u6A38\u6A3A\u6A59\u6A6B\u6A58\u6A39\u6A44\u6A62\u6A61\u6A4B\u6A47\u6A35\u6A5F\u6A48\u6B59\u6B77\u6C05\u6FC2\u6FB1\u6FA1\"],[\"bf40\",\"\u6FC3\u6FA4\u6FC1\u6FA7\u6FB3\u6FC0\u6FB9\u6FB6\u6FA6\u6FA0\u6FB4\u71BE\u71C9\u71D0\u71D2\u71C8\u71D5\u71B9\u71CE\u71D9\u71DC\u71C3\u71C4\u7368\u749C\u74A3\u7498\u749F\u749E\u74E2\u750C\u750D\u7634\u7638\u763A\u76E7\u76E5\u77A0\u779E\u779F\u77A5\u78E8\u78DA\u78EC\u78E7\u79A6\u7A4D\u7A4E\u7A46\u7A4C\u7A4B\u7ABA\u7BD9\u7C11\u7BC9\u7BE4\u7BDB\u7BE1\u7BE9\u7BE6\u7CD5\u7CD6\u7E0A\"],[\"bfa1\",\"\u7E11\u7E08\u7E1B\u7E23\u7E1E\u7E1D\u7E09\u7E10\u7F79\u7FB2\u7FF0\u7FF1\u7FEE\u8028\u81B3\u81A9\u81A8\u81FB\u8208\u8258\u8259\u854A\u8559\u8548\u8568\u8569\u8543\u8549\u856D\u856A\u855E\u8783\u879F\u879E\u87A2\u878D\u8861\u892A\u8932\u8925\u892B\u8921\u89AA\u89A6\u8AE6\u8AFA\u8AEB\u8AF1\u8B00\u8ADC\u8AE7\u8AEE\u8AFE\u8B01\u8B02\u8AF7\u8AED\u8AF3\u8AF6\u8AFC\u8C6B\u8C6D\u8C93\u8CF4\u8E44\u8E31\u8E34\u8E42\u8E39\u8E35\u8F3B\u8F2F\u8F38\u8F33\u8FA8\u8FA6\u9075\u9074\u9078\u9072\u907C\u907A\u9134\u9192\u9320\u9336\u92F8\u9333\u932F\u9322\u92FC\u932B\u9304\u931A\"],[\"c040\",\"\u9310\u9326\u9321\u9315\u932E\u9319\u95BB\u96A7\u96A8\u96AA\u96D5\u970E\u9711\u9716\u970D\u9713\u970F\u975B\u975C\u9766\u9798\u9830\u9838\u983B\u9837\u982D\u9839\u9824\u9910\u9928\u991E\u991B\u9921\u991A\u99ED\u99E2\u99F1\u9AB8\u9ABC\u9AFB\u9AED\u9B28\u9B91\u9D15\u9D23\u9D26\u9D28\u9D12\u9D1B\u9ED8\u9ED4\u9F8D\u9F9C\u512A\u511F\u5121\u5132\u52F5\u568E\u5680\u5690\u5685\u5687\"],[\"c0a1\",\"\u568F\u58D5\u58D3\u58D1\u58CE\u5B30\u5B2A\u5B24\u5B7A\u5C37\u5C68\u5DBC\u5DBA\u5DBD\u5DB8\u5E6B\u5F4C\u5FBD\u61C9\u61C2\u61C7\u61E6\u61CB\u6232\u6234\u64CE\u64CA\u64D8\u64E0\u64F0\u64E6\u64EC\u64F1\u64E2\u64ED\u6582\u6583\u66D9\u66D6\u6A80\u6A94\u6A84\u6AA2\u6A9C\u6ADB\u6AA3\u6A7E\u6A97\u6A90\u6AA0\u6B5C\u6BAE\u6BDA\u6C08\u6FD8\u6FF1\u6FDF\u6FE0\u6FDB\u6FE4\u6FEB\u6FEF\u6F80\u6FEC\u6FE1\u6FE9\u6FD5\u6FEE\u6FF0\u71E7\u71DF\u71EE\u71E6\u71E5\u71ED\u71EC\u71F4\u71E0\u7235\u7246\u7370\u7372\u74A9\u74B0\u74A6\u74A8\u7646\u7642\u764C\u76EA\u77B3\u77AA\u77B0\u77AC\"],[\"c140\",\"\u77A7\u77AD\u77EF\u78F7\u78FA\u78F4\u78EF\u7901\u79A7\u79AA\u7A57\u7ABF\u7C07\u7C0D\u7BFE\u7BF7\u7C0C\u7BE0\u7CE0\u7CDC\u7CDE\u7CE2\u7CDF\u7CD9\u7CDD\u7E2E\u7E3E\u7E46\u7E37\u7E32\u7E43\u7E2B\u7E3D\u7E31\u7E45\u7E41\u7E34\u7E39\u7E48\u7E35\u7E3F\u7E2F\u7F44\u7FF3\u7FFC\u8071\u8072\u8070\u806F\u8073\u81C6\u81C3\u81BA\u81C2\u81C0\u81BF\u81BD\u81C9\u81BE\u81E8\u8209\u8271\u85AA\"],[\"c1a1\",\"\u8584\u857E\u859C\u8591\u8594\u85AF\u859B\u8587\u85A8\u858A\u8667\u87C0\u87D1\u87B3\u87D2\u87C6\u87AB\u87BB\u87BA\u87C8\u87CB\u893B\u8936\u8944\u8938\u893D\u89AC\u8B0E\u8B17\u8B19\u8B1B\u8B0A\u8B20\u8B1D\u8B04\u8B10\u8C41\u8C3F\u8C73\u8CFA\u8CFD\u8CFC\u8CF8\u8CFB\u8DA8\u8E49\u8E4B\u8E48\u8E4A\u8F44\u8F3E\u8F42\u8F45\u8F3F\u907F\u907D\u9084\u9081\u9082\u9080\u9139\u91A3\u919E\u919C\u934D\u9382\u9328\u9375\u934A\u9365\u934B\u9318\u937E\u936C\u935B\u9370\u935A\u9354\u95CA\u95CB\u95CC\u95C8\u95C6\u96B1\u96B8\u96D6\u971C\u971E\u97A0\u97D3\u9846\u98B6\u9935\u9A01\"],[\"c240\",\"\u99FF\u9BAE\u9BAB\u9BAA\u9BAD\u9D3B\u9D3F\u9E8B\u9ECF\u9EDE\u9EDC\u9EDD\u9EDB\u9F3E\u9F4B\u53E2\u5695\u56AE\u58D9\u58D8\u5B38\u5F5D\u61E3\u6233\u64F4\u64F2\u64FE\u6506\u64FA\u64FB\u64F7\u65B7\u66DC\u6726\u6AB3\u6AAC\u6AC3\u6ABB\u6AB8\u6AC2\u6AAE\u6AAF\u6B5F\u6B78\u6BAF\u7009\u700B\u6FFE\u7006\u6FFA\u7011\u700F\u71FB\u71FC\u71FE\u71F8\u7377\u7375\u74A7\u74BF\u7515\u7656\u7658\"],[\"c2a1\",\"\u7652\u77BD\u77BF\u77BB\u77BC\u790E\u79AE\u7A61\u7A62\u7A60\u7AC4\u7AC5\u7C2B\u7C27\u7C2A\u7C1E\u7C23\u7C21\u7CE7\u7E54\u7E55\u7E5E\u7E5A\u7E61\u7E52\u7E59\u7F48\u7FF9\u7FFB\u8077\u8076\u81CD\u81CF\u820A\u85CF\u85A9\u85CD\u85D0\u85C9\u85B0\u85BA\u85B9\u85A6\u87EF\u87EC\u87F2\u87E0\u8986\u89B2\u89F4\u8B28\u8B39\u8B2C\u8B2B\u8C50\u8D05\u8E59\u8E63\u8E66\u8E64\u8E5F\u8E55\u8EC0\u8F49\u8F4D\u9087\u9083\u9088\u91AB\u91AC\u91D0\u9394\u938A\u9396\u93A2\u93B3\u93AE\u93AC\u93B0\u9398\u939A\u9397\u95D4\u95D6\u95D0\u95D5\u96E2\u96DC\u96D9\u96DB\u96DE\u9724\u97A3\u97A6\"],[\"c340\",\"\u97AD\u97F9\u984D\u984F\u984C\u984E\u9853\u98BA\u993E\u993F\u993D\u992E\u99A5\u9A0E\u9AC1\u9B03\u9B06\u9B4F\u9B4E\u9B4D\u9BCA\u9BC9\u9BFD\u9BC8\u9BC0\u9D51\u9D5D\u9D60\u9EE0\u9F15\u9F2C\u5133\u56A5\u58DE\u58DF\u58E2\u5BF5\u9F90\u5EEC\u61F2\u61F7\u61F6\u61F5\u6500\u650F\u66E0\u66DD\u6AE5\u6ADD\u6ADA\u6AD3\u701B\u701F\u7028\u701A\u701D\u7015\u7018\u7206\u720D\u7258\u72A2\u7378\"],[\"c3a1\",\"\u737A\u74BD\u74CA\u74E3\u7587\u7586\u765F\u7661\u77C7\u7919\u79B1\u7A6B\u7A69\u7C3E\u7C3F\u7C38\u7C3D\u7C37\u7C40\u7E6B\u7E6D\u7E79\u7E69\u7E6A\u7F85\u7E73\u7FB6\u7FB9\u7FB8\u81D8\u85E9\u85DD\u85EA\u85D5\u85E4\u85E5\u85F7\u87FB\u8805\u880D\u87F9\u87FE\u8960\u895F\u8956\u895E\u8B41\u8B5C\u8B58\u8B49\u8B5A\u8B4E\u8B4F\u8B46\u8B59\u8D08\u8D0A\u8E7C\u8E72\u8E87\u8E76\u8E6C\u8E7A\u8E74\u8F54\u8F4E\u8FAD\u908A\u908B\u91B1\u91AE\u93E1\u93D1\u93DF\u93C3\u93C8\u93DC\u93DD\u93D6\u93E2\u93CD\u93D8\u93E4\u93D7\u93E8\u95DC\u96B4\u96E3\u972A\u9727\u9761\u97DC\u97FB\u985E\"],[\"c440\",\"\u9858\u985B\u98BC\u9945\u9949\u9A16\u9A19\u9B0D\u9BE8\u9BE7\u9BD6\u9BDB\u9D89\u9D61\u9D72\u9D6A\u9D6C\u9E92\u9E97\u9E93\u9EB4\u52F8\u56A8\u56B7\u56B6\u56B4\u56BC\u58E4\u5B40\u5B43\u5B7D\u5BF6\u5DC9\u61F8\u61FA\u6518\u6514\u6519\u66E6\u6727\u6AEC\u703E\u7030\u7032\u7210\u737B\u74CF\u7662\u7665\u7926\u792A\u792C\u792B\u7AC7\u7AF6\u7C4C\u7C43\u7C4D\u7CEF\u7CF0\u8FAE\u7E7D\u7E7C\"],[\"c4a1\",\"\u7E82\u7F4C\u8000\u81DA\u8266\u85FB\u85F9\u8611\u85FA\u8606\u860B\u8607\u860A\u8814\u8815\u8964\u89BA\u89F8\u8B70\u8B6C\u8B66\u8B6F\u8B5F\u8B6B\u8D0F\u8D0D\u8E89\u8E81\u8E85\u8E82\u91B4\u91CB\u9418\u9403\u93FD\u95E1\u9730\u98C4\u9952\u9951\u99A8\u9A2B\u9A30\u9A37\u9A35\u9C13\u9C0D\u9E79\u9EB5\u9EE8\u9F2F\u9F5F\u9F63\u9F61\u5137\u5138\u56C1\u56C0\u56C2\u5914\u5C6C\u5DCD\u61FC\u61FE\u651D\u651C\u6595\u66E9\u6AFB\u6B04\u6AFA\u6BB2\u704C\u721B\u72A7\u74D6\u74D4\u7669\u77D3\u7C50\u7E8F\u7E8C\u7FBC\u8617\u862D\u861A\u8823\u8822\u8821\u881F\u896A\u896C\u89BD\u8B74\"],[\"c540\",\"\u8B77\u8B7D\u8D13\u8E8A\u8E8D\u8E8B\u8F5F\u8FAF\u91BA\u942E\u9433\u9435\u943A\u9438\u9432\u942B\u95E2\u9738\u9739\u9732\u97FF\u9867\u9865\u9957\u9A45\u9A43\u9A40\u9A3E\u9ACF\u9B54\u9B51\u9C2D\u9C25\u9DAF\u9DB4\u9DC2\u9DB8\u9E9D\u9EEF\u9F19\u9F5C\u9F66\u9F67\u513C\u513B\u56C8\u56CA\u56C9\u5B7F\u5DD4\u5DD2\u5F4E\u61FF\u6524\u6B0A\u6B61\u7051\u7058\u7380\u74E4\u758A\u766E\u766C\"],[\"c5a1\",\"\u79B3\u7C60\u7C5F\u807E\u807D\u81DF\u8972\u896F\u89FC\u8B80\u8D16\u8D17\u8E91\u8E93\u8F61\u9148\u9444\u9451\u9452\u973D\u973E\u97C3\u97C1\u986B\u9955\u9A55\u9A4D\u9AD2\u9B1A\u9C49\u9C31\u9C3E\u9C3B\u9DD3\u9DD7\u9F34\u9F6C\u9F6A\u9F94\u56CC\u5DD6\u6200\u6523\u652B\u652A\u66EC\u6B10\u74DA\u7ACA\u7C64\u7C63\u7C65\u7E93\u7E96\u7E94\u81E2\u8638\u863F\u8831\u8B8A\u9090\u908F\u9463\u9460\u9464\u9768\u986F\u995C\u9A5A\u9A5B\u9A57\u9AD3\u9AD4\u9AD1\u9C54\u9C57\u9C56\u9DE5\u9E9F\u9EF4\u56D1\u58E9\u652C\u705E\u7671\u7672\u77D7\u7F50\u7F88\u8836\u8839\u8862\u8B93\u8B92\"],[\"c640\",\"\u8B96\u8277\u8D1B\u91C0\u946A\u9742\u9748\u9744\u97C6\u9870\u9A5F\u9B22\u9B58\u9C5F\u9DF9\u9DFA\u9E7C\u9E7D\u9F07\u9F77\u9F72\u5EF3\u6B16\u7063\u7C6C\u7C6E\u883B\u89C0\u8EA1\u91C1\u9472\u9470\u9871\u995E\u9AD6\u9B23\u9ECC\u7064\u77DA\u8B9A\u9477\u97C9\u9A62\u9A65\u7E9C\u8B9C\u8EAA\u91C5\u947D\u947E\u947C\u9C77\u9C78\u9EF7\u8C54\u947F\u9E1A\u7228\u9A6A\u9B31\u9E1B\u9E1E\u7C72\"],[\"c940\",\"\u4E42\u4E5C\u51F5\u531A\u5382\u4E07\u4E0C\u4E47\u4E8D\u56D7\uFA0C\u5C6E\u5F73\u4E0F\u5187\u4E0E\u4E2E\u4E93\u4EC2\u4EC9\u4EC8\u5198\u52FC\u536C\u53B9\u5720\u5903\u592C\u5C10\u5DFF\u65E1\u6BB3\u6BCC\u6C14\u723F\u4E31\u4E3C\u4EE8\u4EDC\u4EE9\u4EE1\u4EDD\u4EDA\u520C\u531C\u534C\u5722\u5723\u5917\u592F\u5B81\u5B84\u5C12\u5C3B\u5C74\u5C73\u5E04\u5E80\u5E82\u5FC9\u6209\u6250\u6C15\"],[\"c9a1\",\"\u6C36\u6C43\u6C3F\u6C3B\u72AE\u72B0\u738A\u79B8\u808A\u961E\u4F0E\u4F18\u4F2C\u4EF5\u4F14\u4EF1\u4F00\u4EF7\u4F08\u4F1D\u4F02\u4F05\u4F22\u4F13\u4F04\u4EF4\u4F12\u51B1\u5213\u5209\u5210\u52A6\u5322\u531F\u534D\u538A\u5407\u56E1\u56DF\u572E\u572A\u5734\u593C\u5980\u597C\u5985\u597B\u597E\u5977\u597F\u5B56\u5C15\u5C25\u5C7C\u5C7A\u5C7B\u5C7E\u5DDF\u5E75\u5E84\u5F02\u5F1A\u5F74\u5FD5\u5FD4\u5FCF\u625C\u625E\u6264\u6261\u6266\u6262\u6259\u6260\u625A\u6265\u65EF\u65EE\u673E\u6739\u6738\u673B\u673A\u673F\u673C\u6733\u6C18\u6C46\u6C52\u6C5C\u6C4F\u6C4A\u6C54\u6C4B\"],[\"ca40\",\"\u6C4C\u7071\u725E\u72B4\u72B5\u738E\u752A\u767F\u7A75\u7F51\u8278\u827C\u8280\u827D\u827F\u864D\u897E\u9099\u9097\u9098\u909B\u9094\u9622\u9624\u9620\u9623\u4F56\u4F3B\u4F62\u4F49\u4F53\u4F64\u4F3E\u4F67\u4F52\u4F5F\u4F41\u4F58\u4F2D\u4F33\u4F3F\u4F61\u518F\u51B9\u521C\u521E\u5221\u52AD\u52AE\u5309\u5363\u5372\u538E\u538F\u5430\u5437\u542A\u5454\u5445\u5419\u541C\u5425\u5418\"],[\"caa1\",\"\u543D\u544F\u5441\u5428\u5424\u5447\u56EE\u56E7\u56E5\u5741\u5745\u574C\u5749\u574B\u5752\u5906\u5940\u59A6\u5998\u59A0\u5997\u598E\u59A2\u5990\u598F\u59A7\u59A1\u5B8E\u5B92\u5C28\u5C2A\u5C8D\u5C8F\u5C88\u5C8B\u5C89\u5C92\u5C8A\u5C86\u5C93\u5C95\u5DE0\u5E0A\u5E0E\u5E8B\u5E89\u5E8C\u5E88\u5E8D\u5F05\u5F1D\u5F78\u5F76\u5FD2\u5FD1\u5FD0\u5FED\u5FE8\u5FEE\u5FF3\u5FE1\u5FE4\u5FE3\u5FFA\u5FEF\u5FF7\u5FFB\u6000\u5FF4\u623A\u6283\u628C\u628E\u628F\u6294\u6287\u6271\u627B\u627A\u6270\u6281\u6288\u6277\u627D\u6272\u6274\u6537\u65F0\u65F4\u65F3\u65F2\u65F5\u6745\u6747\"],[\"cb40\",\"\u6759\u6755\u674C\u6748\u675D\u674D\u675A\u674B\u6BD0\u6C19\u6C1A\u6C78\u6C67\u6C6B\u6C84\u6C8B\u6C8F\u6C71\u6C6F\u6C69\u6C9A\u6C6D\u6C87\u6C95\u6C9C\u6C66\u6C73\u6C65\u6C7B\u6C8E\u7074\u707A\u7263\u72BF\u72BD\u72C3\u72C6\u72C1\u72BA\u72C5\u7395\u7397\u7393\u7394\u7392\u753A\u7539\u7594\u7595\u7681\u793D\u8034\u8095\u8099\u8090\u8092\u809C\u8290\u828F\u8285\u828E\u8291\u8293\"],[\"cba1\",\"\u828A\u8283\u8284\u8C78\u8FC9\u8FBF\u909F\u90A1\u90A5\u909E\u90A7\u90A0\u9630\u9628\u962F\u962D\u4E33\u4F98\u4F7C\u4F85\u4F7D\u4F80\u4F87\u4F76\u4F74\u4F89\u4F84\u4F77\u4F4C\u4F97\u4F6A\u4F9A\u4F79\u4F81\u4F78\u4F90\u4F9C\u4F94\u4F9E\u4F92\u4F82\u4F95\u4F6B\u4F6E\u519E\u51BC\u51BE\u5235\u5232\u5233\u5246\u5231\u52BC\u530A\u530B\u533C\u5392\u5394\u5487\u547F\u5481\u5491\u5482\u5488\u546B\u547A\u547E\u5465\u546C\u5474\u5466\u548D\u546F\u5461\u5460\u5498\u5463\u5467\u5464\u56F7\u56F9\u576F\u5772\u576D\u576B\u5771\u5770\u5776\u5780\u5775\u577B\u5773\u5774\u5762\"],[\"cc40\",\"\u5768\u577D\u590C\u5945\u59B5\u59BA\u59CF\u59CE\u59B2\u59CC\u59C1\u59B6\u59BC\u59C3\u59D6\u59B1\u59BD\u59C0\u59C8\u59B4\u59C7\u5B62\u5B65\u5B93\u5B95\u5C44\u5C47\u5CAE\u5CA4\u5CA0\u5CB5\u5CAF\u5CA8\u5CAC\u5C9F\u5CA3\u5CAD\u5CA2\u5CAA\u5CA7\u5C9D\u5CA5\u5CB6\u5CB0\u5CA6\u5E17\u5E14\u5E19\u5F28\u5F22\u5F23\u5F24\u5F54\u5F82\u5F7E\u5F7D\u5FDE\u5FE5\u602D\u6026\u6019\u6032\u600B\"],[\"cca1\",\"\u6034\u600A\u6017\u6033\u601A\u601E\u602C\u6022\u600D\u6010\u602E\u6013\u6011\u600C\u6009\u601C\u6214\u623D\u62AD\u62B4\u62D1\u62BE\u62AA\u62B6\u62CA\u62AE\u62B3\u62AF\u62BB\u62A9\u62B0\u62B8\u653D\u65A8\u65BB\u6609\u65FC\u6604\u6612\u6608\u65FB\u6603\u660B\u660D\u6605\u65FD\u6611\u6610\u66F6\u670A\u6785\u676C\u678E\u6792\u6776\u677B\u6798\u6786\u6784\u6774\u678D\u678C\u677A\u679F\u6791\u6799\u6783\u677D\u6781\u6778\u6779\u6794\u6B25\u6B80\u6B7E\u6BDE\u6C1D\u6C93\u6CEC\u6CEB\u6CEE\u6CD9\u6CB6\u6CD4\u6CAD\u6CE7\u6CB7\u6CD0\u6CC2\u6CBA\u6CC3\u6CC6\u6CED\u6CF2\"],[\"cd40\",\"\u6CD2\u6CDD\u6CB4\u6C8A\u6C9D\u6C80\u6CDE\u6CC0\u6D30\u6CCD\u6CC7\u6CB0\u6CF9\u6CCF\u6CE9\u6CD1\u7094\u7098\u7085\u7093\u7086\u7084\u7091\u7096\u7082\u709A\u7083\u726A\u72D6\u72CB\u72D8\u72C9\u72DC\u72D2\u72D4\u72DA\u72CC\u72D1\u73A4\u73A1\u73AD\u73A6\u73A2\u73A0\u73AC\u739D\u74DD\u74E8\u753F\u7540\u753E\u758C\u7598\u76AF\u76F3\u76F1\u76F0\u76F5\u77F8\u77FC\u77F9\u77FB\u77FA\"],[\"cda1\",\"\u77F7\u7942\u793F\u79C5\u7A78\u7A7B\u7AFB\u7C75\u7CFD\u8035\u808F\u80AE\u80A3\u80B8\u80B5\u80AD\u8220\u82A0\u82C0\u82AB\u829A\u8298\u829B\u82B5\u82A7\u82AE\u82BC\u829E\u82BA\u82B4\u82A8\u82A1\u82A9\u82C2\u82A4\u82C3\u82B6\u82A2\u8670\u866F\u866D\u866E\u8C56\u8FD2\u8FCB\u8FD3\u8FCD\u8FD6\u8FD5\u8FD7\u90B2\u90B4\u90AF\u90B3\u90B0\u9639\u963D\u963C\u963A\u9643\u4FCD\u4FC5\u4FD3\u4FB2\u4FC9\u4FCB\u4FC1\u4FD4\u4FDC\u4FD9\u4FBB\u4FB3\u4FDB\u4FC7\u4FD6\u4FBA\u4FC0\u4FB9\u4FEC\u5244\u5249\u52C0\u52C2\u533D\u537C\u5397\u5396\u5399\u5398\u54BA\u54A1\u54AD\u54A5\u54CF\"],[\"ce40\",\"\u54C3\u830D\u54B7\u54AE\u54D6\u54B6\u54C5\u54C6\u54A0\u5470\u54BC\u54A2\u54BE\u5472\u54DE\u54B0\u57B5\u579E\u579F\u57A4\u578C\u5797\u579D\u579B\u5794\u5798\u578F\u5799\u57A5\u579A\u5795\u58F4\u590D\u5953\u59E1\u59DE\u59EE\u5A00\u59F1\u59DD\u59FA\u59FD\u59FC\u59F6\u59E4\u59F2\u59F7\u59DB\u59E9\u59F3\u59F5\u59E0\u59FE\u59F4\u59ED\u5BA8\u5C4C\u5CD0\u5CD8\u5CCC\u5CD7\u5CCB\u5CDB\"],[\"cea1\",\"\u5CDE\u5CDA\u5CC9\u5CC7\u5CCA\u5CD6\u5CD3\u5CD4\u5CCF\u5CC8\u5CC6\u5CCE\u5CDF\u5CF8\u5DF9\u5E21\u5E22\u5E23\u5E20\u5E24\u5EB0\u5EA4\u5EA2\u5E9B\u5EA3\u5EA5\u5F07\u5F2E\u5F56\u5F86\u6037\u6039\u6054\u6072\u605E\u6045\u6053\u6047\u6049\u605B\u604C\u6040\u6042\u605F\u6024\u6044\u6058\u6066\u606E\u6242\u6243\u62CF\u630D\u630B\u62F5\u630E\u6303\u62EB\u62F9\u630F\u630C\u62F8\u62F6\u6300\u6313\u6314\u62FA\u6315\u62FB\u62F0\u6541\u6543\u65AA\u65BF\u6636\u6621\u6632\u6635\u661C\u6626\u6622\u6633\u662B\u663A\u661D\u6634\u6639\u662E\u670F\u6710\u67C1\u67F2\u67C8\u67BA\"],[\"cf40\",\"\u67DC\u67BB\u67F8\u67D8\u67C0\u67B7\u67C5\u67EB\u67E4\u67DF\u67B5\u67CD\u67B3\u67F7\u67F6\u67EE\u67E3\u67C2\u67B9\u67CE\u67E7\u67F0\u67B2\u67FC\u67C6\u67ED\u67CC\u67AE\u67E6\u67DB\u67FA\u67C9\u67CA\u67C3\u67EA\u67CB\u6B28\u6B82\u6B84\u6BB6\u6BD6\u6BD8\u6BE0\u6C20\u6C21\u6D28\u6D34\u6D2D\u6D1F\u6D3C\u6D3F\u6D12\u6D0A\u6CDA\u6D33\u6D04\u6D19\u6D3A\u6D1A\u6D11\u6D00\u6D1D\u6D42\"],[\"cfa1\",\"\u6D01\u6D18\u6D37\u6D03\u6D0F\u6D40\u6D07\u6D20\u6D2C\u6D08\u6D22\u6D09\u6D10\u70B7\u709F\u70BE\u70B1\u70B0\u70A1\u70B4\u70B5\u70A9\u7241\u7249\u724A\u726C\u7270\u7273\u726E\u72CA\u72E4\u72E8\u72EB\u72DF\u72EA\u72E6\u72E3\u7385\u73CC\u73C2\u73C8\u73C5\u73B9\u73B6\u73B5\u73B4\u73EB\u73BF\u73C7\u73BE\u73C3\u73C6\u73B8\u73CB\u74EC\u74EE\u752E\u7547\u7548\u75A7\u75AA\u7679\u76C4\u7708\u7703\u7704\u7705\u770A\u76F7\u76FB\u76FA\u77E7\u77E8\u7806\u7811\u7812\u7805\u7810\u780F\u780E\u7809\u7803\u7813\u794A\u794C\u794B\u7945\u7944\u79D5\u79CD\u79CF\u79D6\u79CE\u7A80\"],[\"d040\",\"\u7A7E\u7AD1\u7B00\u7B01\u7C7A\u7C78\u7C79\u7C7F\u7C80\u7C81\u7D03\u7D08\u7D01\u7F58\u7F91\u7F8D\u7FBE\u8007\u800E\u800F\u8014\u8037\u80D8\u80C7\u80E0\u80D1\u80C8\u80C2\u80D0\u80C5\u80E3\u80D9\u80DC\u80CA\u80D5\u80C9\u80CF\u80D7\u80E6\u80CD\u81FF\u8221\u8294\u82D9\u82FE\u82F9\u8307\u82E8\u8300\u82D5\u833A\u82EB\u82D6\u82F4\u82EC\u82E1\u82F2\u82F5\u830C\u82FB\u82F6\u82F0\u82EA\"],[\"d0a1\",\"\u82E4\u82E0\u82FA\u82F3\u82ED\u8677\u8674\u867C\u8673\u8841\u884E\u8867\u886A\u8869\u89D3\u8A04\u8A07\u8D72\u8FE3\u8FE1\u8FEE\u8FE0\u90F1\u90BD\u90BF\u90D5\u90C5\u90BE\u90C7\u90CB\u90C8\u91D4\u91D3\u9654\u964F\u9651\u9653\u964A\u964E\u501E\u5005\u5007\u5013\u5022\u5030\u501B\u4FF5\u4FF4\u5033\u5037\u502C\u4FF6\u4FF7\u5017\u501C\u5020\u5027\u5035\u502F\u5031\u500E\u515A\u5194\u5193\u51CA\u51C4\u51C5\u51C8\u51CE\u5261\u525A\u5252\u525E\u525F\u5255\u5262\u52CD\u530E\u539E\u5526\u54E2\u5517\u5512\u54E7\u54F3\u54E4\u551A\u54FF\u5504\u5508\u54EB\u5511\u5505\u54F1\"],[\"d140\",\"\u550A\u54FB\u54F7\u54F8\u54E0\u550E\u5503\u550B\u5701\u5702\u57CC\u5832\u57D5\u57D2\u57BA\u57C6\u57BD\u57BC\u57B8\u57B6\u57BF\u57C7\u57D0\u57B9\u57C1\u590E\u594A\u5A19\u5A16\u5A2D\u5A2E\u5A15\u5A0F\u5A17\u5A0A\u5A1E\u5A33\u5B6C\u5BA7\u5BAD\u5BAC\u5C03\u5C56\u5C54\u5CEC\u5CFF\u5CEE\u5CF1\u5CF7\u5D00\u5CF9\u5E29\u5E28\u5EA8\u5EAE\u5EAA\u5EAC\u5F33\u5F30\u5F67\u605D\u605A\u6067\"],[\"d1a1\",\"\u6041\u60A2\u6088\u6080\u6092\u6081\u609D\u6083\u6095\u609B\u6097\u6087\u609C\u608E\u6219\u6246\u62F2\u6310\u6356\u632C\u6344\u6345\u6336\u6343\u63E4\u6339\u634B\u634A\u633C\u6329\u6341\u6334\u6358\u6354\u6359\u632D\u6347\u6333\u635A\u6351\u6338\u6357\u6340\u6348\u654A\u6546\u65C6\u65C3\u65C4\u65C2\u664A\u665F\u6647\u6651\u6712\u6713\u681F\u681A\u6849\u6832\u6833\u683B\u684B\u684F\u6816\u6831\u681C\u6835\u682B\u682D\u682F\u684E\u6844\u6834\u681D\u6812\u6814\u6826\u6828\u682E\u684D\u683A\u6825\u6820\u6B2C\u6B2F\u6B2D\u6B31\u6B34\u6B6D\u8082\u6B88\u6BE6\u6BE4\"],[\"d240\",\"\u6BE8\u6BE3\u6BE2\u6BE7\u6C25\u6D7A\u6D63\u6D64\u6D76\u6D0D\u6D61\u6D92\u6D58\u6D62\u6D6D\u6D6F\u6D91\u6D8D\u6DEF\u6D7F\u6D86\u6D5E\u6D67\u6D60\u6D97\u6D70\u6D7C\u6D5F\u6D82\u6D98\u6D2F\u6D68\u6D8B\u6D7E\u6D80\u6D84\u6D16\u6D83\u6D7B\u6D7D\u6D75\u6D90\u70DC\u70D3\u70D1\u70DD\u70CB\u7F39\u70E2\u70D7\u70D2\u70DE\u70E0\u70D4\u70CD\u70C5\u70C6\u70C7\u70DA\u70CE\u70E1\u7242\u7278\"],[\"d2a1\",\"\u7277\u7276\u7300\u72FA\u72F4\u72FE\u72F6\u72F3\u72FB\u7301\u73D3\u73D9\u73E5\u73D6\u73BC\u73E7\u73E3\u73E9\u73DC\u73D2\u73DB\u73D4\u73DD\u73DA\u73D7\u73D8\u73E8\u74DE\u74DF\u74F4\u74F5\u7521\u755B\u755F\u75B0\u75C1\u75BB\u75C4\u75C0\u75BF\u75B6\u75BA\u768A\u76C9\u771D\u771B\u7710\u7713\u7712\u7723\u7711\u7715\u7719\u771A\u7722\u7727\u7823\u782C\u7822\u7835\u782F\u7828\u782E\u782B\u7821\u7829\u7833\u782A\u7831\u7954\u795B\u794F\u795C\u7953\u7952\u7951\u79EB\u79EC\u79E0\u79EE\u79ED\u79EA\u79DC\u79DE\u79DD\u7A86\u7A89\u7A85\u7A8B\u7A8C\u7A8A\u7A87\u7AD8\u7B10\"],[\"d340\",\"\u7B04\u7B13\u7B05\u7B0F\u7B08\u7B0A\u7B0E\u7B09\u7B12\u7C84\u7C91\u7C8A\u7C8C\u7C88\u7C8D\u7C85\u7D1E\u7D1D\u7D11\u7D0E\u7D18\u7D16\u7D13\u7D1F\u7D12\u7D0F\u7D0C\u7F5C\u7F61\u7F5E\u7F60\u7F5D\u7F5B\u7F96\u7F92\u7FC3\u7FC2\u7FC0\u8016\u803E\u8039\u80FA\u80F2\u80F9\u80F5\u8101\u80FB\u8100\u8201\u822F\u8225\u8333\u832D\u8344\u8319\u8351\u8325\u8356\u833F\u8341\u8326\u831C\u8322\"],[\"d3a1\",\"\u8342\u834E\u831B\u832A\u8308\u833C\u834D\u8316\u8324\u8320\u8337\u832F\u8329\u8347\u8345\u834C\u8353\u831E\u832C\u834B\u8327\u8348\u8653\u8652\u86A2\u86A8\u8696\u868D\u8691\u869E\u8687\u8697\u8686\u868B\u869A\u8685\u86A5\u8699\u86A1\u86A7\u8695\u8698\u868E\u869D\u8690\u8694\u8843\u8844\u886D\u8875\u8876\u8872\u8880\u8871\u887F\u886F\u8883\u887E\u8874\u887C\u8A12\u8C47\u8C57\u8C7B\u8CA4\u8CA3\u8D76\u8D78\u8DB5\u8DB7\u8DB6\u8ED1\u8ED3\u8FFE\u8FF5\u9002\u8FFF\u8FFB\u9004\u8FFC\u8FF6\u90D6\u90E0\u90D9\u90DA\u90E3\u90DF\u90E5\u90D8\u90DB\u90D7\u90DC\u90E4\u9150\"],[\"d440\",\"\u914E\u914F\u91D5\u91E2\u91DA\u965C\u965F\u96BC\u98E3\u9ADF\u9B2F\u4E7F\u5070\u506A\u5061\u505E\u5060\u5053\u504B\u505D\u5072\u5048\u504D\u5041\u505B\u504A\u5062\u5015\u5045\u505F\u5069\u506B\u5063\u5064\u5046\u5040\u506E\u5073\u5057\u5051\u51D0\u526B\u526D\u526C\u526E\u52D6\u52D3\u532D\u539C\u5575\u5576\u553C\u554D\u5550\u5534\u552A\u5551\u5562\u5536\u5535\u5530\u5552\u5545\"],[\"d4a1\",\"\u550C\u5532\u5565\u554E\u5539\u5548\u552D\u553B\u5540\u554B\u570A\u5707\u57FB\u5814\u57E2\u57F6\u57DC\u57F4\u5800\u57ED\u57FD\u5808\u57F8\u580B\u57F3\u57CF\u5807\u57EE\u57E3\u57F2\u57E5\u57EC\u57E1\u580E\u57FC\u5810\u57E7\u5801\u580C\u57F1\u57E9\u57F0\u580D\u5804\u595C\u5A60\u5A58\u5A55\u5A67\u5A5E\u5A38\u5A35\u5A6D\u5A50\u5A5F\u5A65\u5A6C\u5A53\u5A64\u5A57\u5A43\u5A5D\u5A52\u5A44\u5A5B\u5A48\u5A8E\u5A3E\u5A4D\u5A39\u5A4C\u5A70\u5A69\u5A47\u5A51\u5A56\u5A42\u5A5C\u5B72\u5B6E\u5BC1\u5BC0\u5C59\u5D1E\u5D0B\u5D1D\u5D1A\u5D20\u5D0C\u5D28\u5D0D\u5D26\u5D25\u5D0F\"],[\"d540\",\"\u5D30\u5D12\u5D23\u5D1F\u5D2E\u5E3E\u5E34\u5EB1\u5EB4\u5EB9\u5EB2\u5EB3\u5F36\u5F38\u5F9B\u5F96\u5F9F\u608A\u6090\u6086\u60BE\u60B0\u60BA\u60D3\u60D4\u60CF\u60E4\u60D9\u60DD\u60C8\u60B1\u60DB\u60B7\u60CA\u60BF\u60C3\u60CD\u60C0\u6332\u6365\u638A\u6382\u637D\u63BD\u639E\u63AD\u639D\u6397\u63AB\u638E\u636F\u6387\u6390\u636E\u63AF\u6375\u639C\u636D\u63AE\u637C\u63A4\u633B\u639F\"],[\"d5a1\",\"\u6378\u6385\u6381\u6391\u638D\u6370\u6553\u65CD\u6665\u6661\u665B\u6659\u665C\u6662\u6718\u6879\u6887\u6890\u689C\u686D\u686E\u68AE\u68AB\u6956\u686F\u68A3\u68AC\u68A9\u6875\u6874\u68B2\u688F\u6877\u6892\u687C\u686B\u6872\u68AA\u6880\u6871\u687E\u689B\u6896\u688B\u68A0\u6889\u68A4\u6878\u687B\u6891\u688C\u688A\u687D\u6B36\u6B33\u6B37\u6B38\u6B91\u6B8F\u6B8D\u6B8E\u6B8C\u6C2A\u6DC0\u6DAB\u6DB4\u6DB3\u6E74\u6DAC\u6DE9\u6DE2\u6DB7\u6DF6\u6DD4\u6E00\u6DC8\u6DE0\u6DDF\u6DD6\u6DBE\u6DE5\u6DDC\u6DDD\u6DDB\u6DF4\u6DCA\u6DBD\u6DED\u6DF0\u6DBA\u6DD5\u6DC2\u6DCF\u6DC9\"],[\"d640\",\"\u6DD0\u6DF2\u6DD3\u6DFD\u6DD7\u6DCD\u6DE3\u6DBB\u70FA\u710D\u70F7\u7117\u70F4\u710C\u70F0\u7104\u70F3\u7110\u70FC\u70FF\u7106\u7113\u7100\u70F8\u70F6\u710B\u7102\u710E\u727E\u727B\u727C\u727F\u731D\u7317\u7307\u7311\u7318\u730A\u7308\u72FF\u730F\u731E\u7388\u73F6\u73F8\u73F5\u7404\u7401\u73FD\u7407\u7400\u73FA\u73FC\u73FF\u740C\u740B\u73F4\u7408\u7564\u7563\u75CE\u75D2\u75CF\"],[\"d6a1\",\"\u75CB\u75CC\u75D1\u75D0\u768F\u7689\u76D3\u7739\u772F\u772D\u7731\u7732\u7734\u7733\u773D\u7725\u773B\u7735\u7848\u7852\u7849\u784D\u784A\u784C\u7826\u7845\u7850\u7964\u7967\u7969\u796A\u7963\u796B\u7961\u79BB\u79FA\u79F8\u79F6\u79F7\u7A8F\u7A94\u7A90\u7B35\u7B47\u7B34\u7B25\u7B30\u7B22\u7B24\u7B33\u7B18\u7B2A\u7B1D\u7B31\u7B2B\u7B2D\u7B2F\u7B32\u7B38\u7B1A\u7B23\u7C94\u7C98\u7C96\u7CA3\u7D35\u7D3D\u7D38\u7D36\u7D3A\u7D45\u7D2C\u7D29\u7D41\u7D47\u7D3E\u7D3F\u7D4A\u7D3B\u7D28\u7F63\u7F95\u7F9C\u7F9D\u7F9B\u7FCA\u7FCB\u7FCD\u7FD0\u7FD1\u7FC7\u7FCF\u7FC9\u801F\"],[\"d740\",\"\u801E\u801B\u8047\u8043\u8048\u8118\u8125\u8119\u811B\u812D\u811F\u812C\u811E\u8121\u8115\u8127\u811D\u8122\u8211\u8238\u8233\u823A\u8234\u8232\u8274\u8390\u83A3\u83A8\u838D\u837A\u8373\u83A4\u8374\u838F\u8381\u8395\u8399\u8375\u8394\u83A9\u837D\u8383\u838C\u839D\u839B\u83AA\u838B\u837E\u83A5\u83AF\u8388\u8397\u83B0\u837F\u83A6\u8387\u83AE\u8376\u839A\u8659\u8656\u86BF\u86B7\"],[\"d7a1\",\"\u86C2\u86C1\u86C5\u86BA\u86B0\u86C8\u86B9\u86B3\u86B8\u86CC\u86B4\u86BB\u86BC\u86C3\u86BD\u86BE\u8852\u8889\u8895\u88A8\u88A2\u88AA\u889A\u8891\u88A1\u889F\u8898\u88A7\u8899\u889B\u8897\u88A4\u88AC\u888C\u8893\u888E\u8982\u89D6\u89D9\u89D5\u8A30\u8A27\u8A2C\u8A1E\u8C39\u8C3B\u8C5C\u8C5D\u8C7D\u8CA5\u8D7D\u8D7B\u8D79\u8DBC\u8DC2\u8DB9\u8DBF\u8DC1\u8ED8\u8EDE\u8EDD\u8EDC\u8ED7\u8EE0\u8EE1\u9024\u900B\u9011\u901C\u900C\u9021\u90EF\u90EA\u90F0\u90F4\u90F2\u90F3\u90D4\u90EB\u90EC\u90E9\u9156\u9158\u915A\u9153\u9155\u91EC\u91F4\u91F1\u91F3\u91F8\u91E4\u91F9\u91EA\"],[\"d840\",\"\u91EB\u91F7\u91E8\u91EE\u957A\u9586\u9588\u967C\u966D\u966B\u9671\u966F\u96BF\u976A\u9804\u98E5\u9997\u509B\u5095\u5094\u509E\u508B\u50A3\u5083\u508C\u508E\u509D\u5068\u509C\u5092\u5082\u5087\u515F\u51D4\u5312\u5311\u53A4\u53A7\u5591\u55A8\u55A5\u55AD\u5577\u5645\u55A2\u5593\u5588\u558F\u55B5\u5581\u55A3\u5592\u55A4\u557D\u558C\u55A6\u557F\u5595\u55A1\u558E\u570C\u5829\u5837\"],[\"d8a1\",\"\u5819\u581E\u5827\u5823\u5828\u57F5\u5848\u5825\u581C\u581B\u5833\u583F\u5836\u582E\u5839\u5838\u582D\u582C\u583B\u5961\u5AAF\u5A94\u5A9F\u5A7A\u5AA2\u5A9E\u5A78\u5AA6\u5A7C\u5AA5\u5AAC\u5A95\u5AAE\u5A37\u5A84\u5A8A\u5A97\u5A83\u5A8B\u5AA9\u5A7B\u5A7D\u5A8C\u5A9C\u5A8F\u5A93\u5A9D\u5BEA\u5BCD\u5BCB\u5BD4\u5BD1\u5BCA\u5BCE\u5C0C\u5C30\u5D37\u5D43\u5D6B\u5D41\u5D4B\u5D3F\u5D35\u5D51\u5D4E\u5D55\u5D33\u5D3A\u5D52\u5D3D\u5D31\u5D59\u5D42\u5D39\u5D49\u5D38\u5D3C\u5D32\u5D36\u5D40\u5D45\u5E44\u5E41\u5F58\u5FA6\u5FA5\u5FAB\u60C9\u60B9\u60CC\u60E2\u60CE\u60C4\u6114\"],[\"d940\",\"\u60F2\u610A\u6116\u6105\u60F5\u6113\u60F8\u60FC\u60FE\u60C1\u6103\u6118\u611D\u6110\u60FF\u6104\u610B\u624A\u6394\u63B1\u63B0\u63CE\u63E5\u63E8\u63EF\u63C3\u649D\u63F3\u63CA\u63E0\u63F6\u63D5\u63F2\u63F5\u6461\u63DF\u63BE\u63DD\u63DC\u63C4\u63D8\u63D3\u63C2\u63C7\u63CC\u63CB\u63C8\u63F0\u63D7\u63D9\u6532\u6567\u656A\u6564\u655C\u6568\u6565\u658C\u659D\u659E\u65AE\u65D0\u65D2\"],[\"d9a1\",\"\u667C\u666C\u667B\u6680\u6671\u6679\u666A\u6672\u6701\u690C\u68D3\u6904\u68DC\u692A\u68EC\u68EA\u68F1\u690F\u68D6\u68F7\u68EB\u68E4\u68F6\u6913\u6910\u68F3\u68E1\u6907\u68CC\u6908\u6970\u68B4\u6911\u68EF\u68C6\u6914\u68F8\u68D0\u68FD\u68FC\u68E8\u690B\u690A\u6917\u68CE\u68C8\u68DD\u68DE\u68E6\u68F4\u68D1\u6906\u68D4\u68E9\u6915\u6925\u68C7\u6B39\u6B3B\u6B3F\u6B3C\u6B94\u6B97\u6B99\u6B95\u6BBD\u6BF0\u6BF2\u6BF3\u6C30\u6DFC\u6E46\u6E47\u6E1F\u6E49\u6E88\u6E3C\u6E3D\u6E45\u6E62\u6E2B\u6E3F\u6E41\u6E5D\u6E73\u6E1C\u6E33\u6E4B\u6E40\u6E51\u6E3B\u6E03\u6E2E\u6E5E\"],[\"da40\",\"\u6E68\u6E5C\u6E61\u6E31\u6E28\u6E60\u6E71\u6E6B\u6E39\u6E22\u6E30\u6E53\u6E65\u6E27\u6E78\u6E64\u6E77\u6E55\u6E79\u6E52\u6E66\u6E35\u6E36\u6E5A\u7120\u711E\u712F\u70FB\u712E\u7131\u7123\u7125\u7122\u7132\u711F\u7128\u713A\u711B\u724B\u725A\u7288\u7289\u7286\u7285\u728B\u7312\u730B\u7330\u7322\u7331\u7333\u7327\u7332\u732D\u7326\u7323\u7335\u730C\u742E\u742C\u7430\u742B\u7416\"],[\"daa1\",\"\u741A\u7421\u742D\u7431\u7424\u7423\u741D\u7429\u7420\u7432\u74FB\u752F\u756F\u756C\u75E7\u75DA\u75E1\u75E6\u75DD\u75DF\u75E4\u75D7\u7695\u7692\u76DA\u7746\u7747\u7744\u774D\u7745\u774A\u774E\u774B\u774C\u77DE\u77EC\u7860\u7864\u7865\u785C\u786D\u7871\u786A\u786E\u7870\u7869\u7868\u785E\u7862\u7974\u7973\u7972\u7970\u7A02\u7A0A\u7A03\u7A0C\u7A04\u7A99\u7AE6\u7AE4\u7B4A\u7B3B\u7B44\u7B48\u7B4C\u7B4E\u7B40\u7B58\u7B45\u7CA2\u7C9E\u7CA8\u7CA1\u7D58\u7D6F\u7D63\u7D53\u7D56\u7D67\u7D6A\u7D4F\u7D6D\u7D5C\u7D6B\u7D52\u7D54\u7D69\u7D51\u7D5F\u7D4E\u7F3E\u7F3F\u7F65\"],[\"db40\",\"\u7F66\u7FA2\u7FA0\u7FA1\u7FD7\u8051\u804F\u8050\u80FE\u80D4\u8143\u814A\u8152\u814F\u8147\u813D\u814D\u813A\u81E6\u81EE\u81F7\u81F8\u81F9\u8204\u823C\u823D\u823F\u8275\u833B\u83CF\u83F9\u8423\u83C0\u83E8\u8412\u83E7\u83E4\u83FC\u83F6\u8410\u83C6\u83C8\u83EB\u83E3\u83BF\u8401\u83DD\u83E5\u83D8\u83FF\u83E1\u83CB\u83CE\u83D6\u83F5\u83C9\u8409\u840F\u83DE\u8411\u8406\u83C2\u83F3\"],[\"dba1\",\"\u83D5\u83FA\u83C7\u83D1\u83EA\u8413\u83C3\u83EC\u83EE\u83C4\u83FB\u83D7\u83E2\u841B\u83DB\u83FE\u86D8\u86E2\u86E6\u86D3\u86E3\u86DA\u86EA\u86DD\u86EB\u86DC\u86EC\u86E9\u86D7\u86E8\u86D1\u8848\u8856\u8855\u88BA\u88D7\u88B9\u88B8\u88C0\u88BE\u88B6\u88BC\u88B7\u88BD\u88B2\u8901\u88C9\u8995\u8998\u8997\u89DD\u89DA\u89DB\u8A4E\u8A4D\u8A39\u8A59\u8A40\u8A57\u8A58\u8A44\u8A45\u8A52\u8A48\u8A51\u8A4A\u8A4C\u8A4F\u8C5F\u8C81\u8C80\u8CBA\u8CBE\u8CB0\u8CB9\u8CB5\u8D84\u8D80\u8D89\u8DD8\u8DD3\u8DCD\u8DC7\u8DD6\u8DDC\u8DCF\u8DD5\u8DD9\u8DC8\u8DD7\u8DC5\u8EEF\u8EF7\u8EFA\"],[\"dc40\",\"\u8EF9\u8EE6\u8EEE\u8EE5\u8EF5\u8EE7\u8EE8\u8EF6\u8EEB\u8EF1\u8EEC\u8EF4\u8EE9\u902D\u9034\u902F\u9106\u912C\u9104\u90FF\u90FC\u9108\u90F9\u90FB\u9101\u9100\u9107\u9105\u9103\u9161\u9164\u915F\u9162\u9160\u9201\u920A\u9225\u9203\u921A\u9226\u920F\u920C\u9200\u9212\u91FF\u91FD\u9206\u9204\u9227\u9202\u921C\u9224\u9219\u9217\u9205\u9216\u957B\u958D\u958C\u9590\u9687\u967E\u9688\"],[\"dca1\",\"\u9689\u9683\u9680\u96C2\u96C8\u96C3\u96F1\u96F0\u976C\u9770\u976E\u9807\u98A9\u98EB\u9CE6\u9EF9\u4E83\u4E84\u4EB6\u50BD\u50BF\u50C6\u50AE\u50C4\u50CA\u50B4\u50C8\u50C2\u50B0\u50C1\u50BA\u50B1\u50CB\u50C9\u50B6\u50B8\u51D7\u527A\u5278\u527B\u527C\u55C3\u55DB\u55CC\u55D0\u55CB\u55CA\u55DD\u55C0\u55D4\u55C4\u55E9\u55BF\u55D2\u558D\u55CF\u55D5\u55E2\u55D6\u55C8\u55F2\u55CD\u55D9\u55C2\u5714\u5853\u5868\u5864\u584F\u584D\u5849\u586F\u5855\u584E\u585D\u5859\u5865\u585B\u583D\u5863\u5871\u58FC\u5AC7\u5AC4\u5ACB\u5ABA\u5AB8\u5AB1\u5AB5\u5AB0\u5ABF\u5AC8\u5ABB\u5AC6\"],[\"dd40\",\"\u5AB7\u5AC0\u5ACA\u5AB4\u5AB6\u5ACD\u5AB9\u5A90\u5BD6\u5BD8\u5BD9\u5C1F\u5C33\u5D71\u5D63\u5D4A\u5D65\u5D72\u5D6C\u5D5E\u5D68\u5D67\u5D62\u5DF0\u5E4F\u5E4E\u5E4A\u5E4D\u5E4B\u5EC5\u5ECC\u5EC6\u5ECB\u5EC7\u5F40\u5FAF\u5FAD\u60F7\u6149\u614A\u612B\u6145\u6136\u6132\u612E\u6146\u612F\u614F\u6129\u6140\u6220\u9168\u6223\u6225\u6224\u63C5\u63F1\u63EB\u6410\u6412\u6409\u6420\u6424\"],[\"dda1\",\"\u6433\u6443\u641F\u6415\u6418\u6439\u6437\u6422\u6423\u640C\u6426\u6430\u6428\u6441\u6435\u642F\u640A\u641A\u6440\u6425\u6427\u640B\u63E7\u641B\u642E\u6421\u640E\u656F\u6592\u65D3\u6686\u668C\u6695\u6690\u668B\u668A\u6699\u6694\u6678\u6720\u6966\u695F\u6938\u694E\u6962\u6971\u693F\u6945\u696A\u6939\u6942\u6957\u6959\u697A\u6948\u6949\u6935\u696C\u6933\u693D\u6965\u68F0\u6978\u6934\u6969\u6940\u696F\u6944\u6976\u6958\u6941\u6974\u694C\u693B\u694B\u6937\u695C\u694F\u6951\u6932\u6952\u692F\u697B\u693C\u6B46\u6B45\u6B43\u6B42\u6B48\u6B41\u6B9B\uFA0D\u6BFB\u6BFC\"],[\"de40\",\"\u6BF9\u6BF7\u6BF8\u6E9B\u6ED6\u6EC8\u6E8F\u6EC0\u6E9F\u6E93\u6E94\u6EA0\u6EB1\u6EB9\u6EC6\u6ED2\u6EBD\u6EC1\u6E9E\u6EC9\u6EB7\u6EB0\u6ECD\u6EA6\u6ECF\u6EB2\u6EBE\u6EC3\u6EDC\u6ED8\u6E99\u6E92\u6E8E\u6E8D\u6EA4\u6EA1\u6EBF\u6EB3\u6ED0\u6ECA\u6E97\u6EAE\u6EA3\u7147\u7154\u7152\u7163\u7160\u7141\u715D\u7162\u7172\u7178\u716A\u7161\u7142\u7158\u7143\u714B\u7170\u715F\u7150\u7153\"],[\"dea1\",\"\u7144\u714D\u715A\u724F\u728D\u728C\u7291\u7290\u728E\u733C\u7342\u733B\u733A\u7340\u734A\u7349\u7444\u744A\u744B\u7452\u7451\u7457\u7440\u744F\u7450\u744E\u7442\u7446\u744D\u7454\u74E1\u74FF\u74FE\u74FD\u751D\u7579\u7577\u6983\u75EF\u760F\u7603\u75F7\u75FE\u75FC\u75F9\u75F8\u7610\u75FB\u75F6\u75ED\u75F5\u75FD\u7699\u76B5\u76DD\u7755\u775F\u7760\u7752\u7756\u775A\u7769\u7767\u7754\u7759\u776D\u77E0\u7887\u789A\u7894\u788F\u7884\u7895\u7885\u7886\u78A1\u7883\u7879\u7899\u7880\u7896\u787B\u797C\u7982\u797D\u7979\u7A11\u7A18\u7A19\u7A12\u7A17\u7A15\u7A22\u7A13\"],[\"df40\",\"\u7A1B\u7A10\u7AA3\u7AA2\u7A9E\u7AEB\u7B66\u7B64\u7B6D\u7B74\u7B69\u7B72\u7B65\u7B73\u7B71\u7B70\u7B61\u7B78\u7B76\u7B63\u7CB2\u7CB4\u7CAF\u7D88\u7D86\u7D80\u7D8D\u7D7F\u7D85\u7D7A\u7D8E\u7D7B\u7D83\u7D7C\u7D8C\u7D94\u7D84\u7D7D\u7D92\u7F6D\u7F6B\u7F67\u7F68\u7F6C\u7FA6\u7FA5\u7FA7\u7FDB\u7FDC\u8021\u8164\u8160\u8177\u815C\u8169\u815B\u8162\u8172\u6721\u815E\u8176\u8167\u816F\"],[\"dfa1\",\"\u8144\u8161\u821D\u8249\u8244\u8240\u8242\u8245\u84F1\u843F\u8456\u8476\u8479\u848F\u848D\u8465\u8451\u8440\u8486\u8467\u8430\u844D\u847D\u845A\u8459\u8474\u8473\u845D\u8507\u845E\u8437\u843A\u8434\u847A\u8443\u8478\u8432\u8445\u8429\u83D9\u844B\u842F\u8442\u842D\u845F\u8470\u8439\u844E\u844C\u8452\u846F\u84C5\u848E\u843B\u8447\u8436\u8433\u8468\u847E\u8444\u842B\u8460\u8454\u846E\u8450\u870B\u8704\u86F7\u870C\u86FA\u86D6\u86F5\u874D\u86F8\u870E\u8709\u8701\u86F6\u870D\u8705\u88D6\u88CB\u88CD\u88CE\u88DE\u88DB\u88DA\u88CC\u88D0\u8985\u899B\u89DF\u89E5\u89E4\"],[\"e040\",\"\u89E1\u89E0\u89E2\u89DC\u89E6\u8A76\u8A86\u8A7F\u8A61\u8A3F\u8A77\u8A82\u8A84\u8A75\u8A83\u8A81\u8A74\u8A7A\u8C3C\u8C4B\u8C4A\u8C65\u8C64\u8C66\u8C86\u8C84\u8C85\u8CCC\u8D68\u8D69\u8D91\u8D8C\u8D8E\u8D8F\u8D8D\u8D93\u8D94\u8D90\u8D92\u8DF0\u8DE0\u8DEC\u8DF1\u8DEE\u8DD0\u8DE9\u8DE3\u8DE2\u8DE7\u8DF2\u8DEB\u8DF4\u8F06\u8EFF\u8F01\u8F00\u8F05\u8F07\u8F08\u8F02\u8F0B\u9052\u903F\"],[\"e0a1\",\"\u9044\u9049\u903D\u9110\u910D\u910F\u9111\u9116\u9114\u910B\u910E\u916E\u916F\u9248\u9252\u9230\u923A\u9266\u9233\u9265\u925E\u9283\u922E\u924A\u9246\u926D\u926C\u924F\u9260\u9267\u926F\u9236\u9261\u9270\u9231\u9254\u9263\u9250\u9272\u924E\u9253\u924C\u9256\u9232\u959F\u959C\u959E\u959B\u9692\u9693\u9691\u9697\u96CE\u96FA\u96FD\u96F8\u96F5\u9773\u9777\u9778\u9772\u980F\u980D\u980E\u98AC\u98F6\u98F9\u99AF\u99B2\u99B0\u99B5\u9AAD\u9AAB\u9B5B\u9CEA\u9CED\u9CE7\u9E80\u9EFD\u50E6\u50D4\u50D7\u50E8\u50F3\u50DB\u50EA\u50DD\u50E4\u50D3\u50EC\u50F0\u50EF\u50E3\u50E0\"],[\"e140\",\"\u51D8\u5280\u5281\u52E9\u52EB\u5330\u53AC\u5627\u5615\u560C\u5612\u55FC\u560F\u561C\u5601\u5613\u5602\u55FA\u561D\u5604\u55FF\u55F9\u5889\u587C\u5890\u5898\u5886\u5881\u587F\u5874\u588B\u587A\u5887\u5891\u588E\u5876\u5882\u5888\u587B\u5894\u588F\u58FE\u596B\u5ADC\u5AEE\u5AE5\u5AD5\u5AEA\u5ADA\u5AED\u5AEB\u5AF3\u5AE2\u5AE0\u5ADB\u5AEC\u5ADE\u5ADD\u5AD9\u5AE8\u5ADF\u5B77\u5BE0\"],[\"e1a1\",\"\u5BE3\u5C63\u5D82\u5D80\u5D7D\u5D86\u5D7A\u5D81\u5D77\u5D8A\u5D89\u5D88\u5D7E\u5D7C\u5D8D\u5D79\u5D7F\u5E58\u5E59\u5E53\u5ED8\u5ED1\u5ED7\u5ECE\u5EDC\u5ED5\u5ED9\u5ED2\u5ED4\u5F44\u5F43\u5F6F\u5FB6\u612C\u6128\u6141\u615E\u6171\u6173\u6152\u6153\u6172\u616C\u6180\u6174\u6154\u617A\u615B\u6165\u613B\u616A\u6161\u6156\u6229\u6227\u622B\u642B\u644D\u645B\u645D\u6474\u6476\u6472\u6473\u647D\u6475\u6466\u64A6\u644E\u6482\u645E\u645C\u644B\u6453\u6460\u6450\u647F\u643F\u646C\u646B\u6459\u6465\u6477\u6573\u65A0\u66A1\u66A0\u669F\u6705\u6704\u6722\u69B1\u69B6\u69C9\"],[\"e240\",\"\u69A0\u69CE\u6996\u69B0\u69AC\u69BC\u6991\u6999\u698E\u69A7\u698D\u69A9\u69BE\u69AF\u69BF\u69C4\u69BD\u69A4\u69D4\u69B9\u69CA\u699A\u69CF\u69B3\u6993\u69AA\u69A1\u699E\u69D9\u6997\u6990\u69C2\u69B5\u69A5\u69C6\u6B4A\u6B4D\u6B4B\u6B9E\u6B9F\u6BA0\u6BC3\u6BC4\u6BFE\u6ECE\u6EF5\u6EF1\u6F03\u6F25\u6EF8\u6F37\u6EFB\u6F2E\u6F09\u6F4E\u6F19\u6F1A\u6F27\u6F18\u6F3B\u6F12\u6EED\u6F0A\"],[\"e2a1\",\"\u6F36\u6F73\u6EF9\u6EEE\u6F2D\u6F40\u6F30\u6F3C\u6F35\u6EEB\u6F07\u6F0E\u6F43\u6F05\u6EFD\u6EF6\u6F39\u6F1C\u6EFC\u6F3A\u6F1F\u6F0D\u6F1E\u6F08\u6F21\u7187\u7190\u7189\u7180\u7185\u7182\u718F\u717B\u7186\u7181\u7197\u7244\u7253\u7297\u7295\u7293\u7343\u734D\u7351\u734C\u7462\u7473\u7471\u7475\u7472\u7467\u746E\u7500\u7502\u7503\u757D\u7590\u7616\u7608\u760C\u7615\u7611\u760A\u7614\u76B8\u7781\u777C\u7785\u7782\u776E\u7780\u776F\u777E\u7783\u78B2\u78AA\u78B4\u78AD\u78A8\u787E\u78AB\u789E\u78A5\u78A0\u78AC\u78A2\u78A4\u7998\u798A\u798B\u7996\u7995\u7994\u7993\"],[\"e340\",\"\u7997\u7988\u7992\u7990\u7A2B\u7A4A\u7A30\u7A2F\u7A28\u7A26\u7AA8\u7AAB\u7AAC\u7AEE\u7B88\u7B9C\u7B8A\u7B91\u7B90\u7B96\u7B8D\u7B8C\u7B9B\u7B8E\u7B85\u7B98\u5284\u7B99\u7BA4\u7B82\u7CBB\u7CBF\u7CBC\u7CBA\u7DA7\u7DB7\u7DC2\u7DA3\u7DAA\u7DC1\u7DC0\u7DC5\u7D9D\u7DCE\u7DC4\u7DC6\u7DCB\u7DCC\u7DAF\u7DB9\u7D96\u7DBC\u7D9F\u7DA6\u7DAE\u7DA9\u7DA1\u7DC9\u7F73\u7FE2\u7FE3\u7FE5\u7FDE\"],[\"e3a1\",\"\u8024\u805D\u805C\u8189\u8186\u8183\u8187\u818D\u818C\u818B\u8215\u8497\u84A4\u84A1\u849F\u84BA\u84CE\u84C2\u84AC\u84AE\u84AB\u84B9\u84B4\u84C1\u84CD\u84AA\u849A\u84B1\u84D0\u849D\u84A7\u84BB\u84A2\u8494\u84C7\u84CC\u849B\u84A9\u84AF\u84A8\u84D6\u8498\u84B6\u84CF\u84A0\u84D7\u84D4\u84D2\u84DB\u84B0\u8491\u8661\u8733\u8723\u8728\u876B\u8740\u872E\u871E\u8721\u8719\u871B\u8743\u872C\u8741\u873E\u8746\u8720\u8732\u872A\u872D\u873C\u8712\u873A\u8731\u8735\u8742\u8726\u8727\u8738\u8724\u871A\u8730\u8711\u88F7\u88E7\u88F1\u88F2\u88FA\u88FE\u88EE\u88FC\u88F6\u88FB\"],[\"e440\",\"\u88F0\u88EC\u88EB\u899D\u89A1\u899F\u899E\u89E9\u89EB\u89E8\u8AAB\u8A99\u8A8B\u8A92\u8A8F\u8A96\u8C3D\u8C68\u8C69\u8CD5\u8CCF\u8CD7\u8D96\u8E09\u8E02\u8DFF\u8E0D\u8DFD\u8E0A\u8E03\u8E07\u8E06\u8E05\u8DFE\u8E00\u8E04\u8F10\u8F11\u8F0E\u8F0D\u9123\u911C\u9120\u9122\u911F\u911D\u911A\u9124\u9121\u911B\u917A\u9172\u9179\u9173\u92A5\u92A4\u9276\u929B\u927A\u92A0\u9294\u92AA\u928D\"],[\"e4a1\",\"\u92A6\u929A\u92AB\u9279\u9297\u927F\u92A3\u92EE\u928E\u9282\u9295\u92A2\u927D\u9288\u92A1\u928A\u9286\u928C\u9299\u92A7\u927E\u9287\u92A9\u929D\u928B\u922D\u969E\u96A1\u96FF\u9758\u977D\u977A\u977E\u9783\u9780\u9782\u977B\u9784\u9781\u977F\u97CE\u97CD\u9816\u98AD\u98AE\u9902\u9900\u9907\u999D\u999C\u99C3\u99B9\u99BB\u99BA\u99C2\u99BD\u99C7\u9AB1\u9AE3\u9AE7\u9B3E\u9B3F\u9B60\u9B61\u9B5F\u9CF1\u9CF2\u9CF5\u9EA7\u50FF\u5103\u5130\u50F8\u5106\u5107\u50F6\u50FE\u510B\u510C\u50FD\u510A\u528B\u528C\u52F1\u52EF\u5648\u5642\u564C\u5635\u5641\u564A\u5649\u5646\u5658\"],[\"e540\",\"\u565A\u5640\u5633\u563D\u562C\u563E\u5638\u562A\u563A\u571A\u58AB\u589D\u58B1\u58A0\u58A3\u58AF\u58AC\u58A5\u58A1\u58FF\u5AFF\u5AF4\u5AFD\u5AF7\u5AF6\u5B03\u5AF8\u5B02\u5AF9\u5B01\u5B07\u5B05\u5B0F\u5C67\u5D99\u5D97\u5D9F\u5D92\u5DA2\u5D93\u5D95\u5DA0\u5D9C\u5DA1\u5D9A\u5D9E\u5E69\u5E5D\u5E60\u5E5C\u7DF3\u5EDB\u5EDE\u5EE1\u5F49\u5FB2\u618B\u6183\u6179\u61B1\u61B0\u61A2\u6189\"],[\"e5a1\",\"\u619B\u6193\u61AF\u61AD\u619F\u6192\u61AA\u61A1\u618D\u6166\u61B3\u622D\u646E\u6470\u6496\u64A0\u6485\u6497\u649C\u648F\u648B\u648A\u648C\u64A3\u649F\u6468\u64B1\u6498\u6576\u657A\u6579\u657B\u65B2\u65B3\u66B5\u66B0\u66A9\u66B2\u66B7\u66AA\u66AF\u6A00\u6A06\u6A17\u69E5\u69F8\u6A15\u69F1\u69E4\u6A20\u69FF\u69EC\u69E2\u6A1B\u6A1D\u69FE\u6A27\u69F2\u69EE\u6A14\u69F7\u69E7\u6A40\u6A08\u69E6\u69FB\u6A0D\u69FC\u69EB\u6A09\u6A04\u6A18\u6A25\u6A0F\u69F6\u6A26\u6A07\u69F4\u6A16\u6B51\u6BA5\u6BA3\u6BA2\u6BA6\u6C01\u6C00\u6BFF\u6C02\u6F41\u6F26\u6F7E\u6F87\u6FC6\u6F92\"],[\"e640\",\"\u6F8D\u6F89\u6F8C\u6F62\u6F4F\u6F85\u6F5A\u6F96\u6F76\u6F6C\u6F82\u6F55\u6F72\u6F52\u6F50\u6F57\u6F94\u6F93\u6F5D\u6F00\u6F61\u6F6B\u6F7D\u6F67\u6F90\u6F53\u6F8B\u6F69\u6F7F\u6F95\u6F63\u6F77\u6F6A\u6F7B\u71B2\u71AF\u719B\u71B0\u71A0\u719A\u71A9\u71B5\u719D\u71A5\u719E\u71A4\u71A1\u71AA\u719C\u71A7\u71B3\u7298\u729A\u7358\u7352\u735E\u735F\u7360\u735D\u735B\u7361\u735A\u7359\"],[\"e6a1\",\"\u7362\u7487\u7489\u748A\u7486\u7481\u747D\u7485\u7488\u747C\u7479\u7508\u7507\u757E\u7625\u761E\u7619\u761D\u761C\u7623\u761A\u7628\u761B\u769C\u769D\u769E\u769B\u778D\u778F\u7789\u7788\u78CD\u78BB\u78CF\u78CC\u78D1\u78CE\u78D4\u78C8\u78C3\u78C4\u78C9\u799A\u79A1\u79A0\u799C\u79A2\u799B\u6B76\u7A39\u7AB2\u7AB4\u7AB3\u7BB7\u7BCB\u7BBE\u7BAC\u7BCE\u7BAF\u7BB9\u7BCA\u7BB5\u7CC5\u7CC8\u7CCC\u7CCB\u7DF7\u7DDB\u7DEA\u7DE7\u7DD7\u7DE1\u7E03\u7DFA\u7DE6\u7DF6\u7DF1\u7DF0\u7DEE\u7DDF\u7F76\u7FAC\u7FB0\u7FAD\u7FED\u7FEB\u7FEA\u7FEC\u7FE6\u7FE8\u8064\u8067\u81A3\u819F\"],[\"e740\",\"\u819E\u8195\u81A2\u8199\u8197\u8216\u824F\u8253\u8252\u8250\u824E\u8251\u8524\u853B\u850F\u8500\u8529\u850E\u8509\u850D\u851F\u850A\u8527\u851C\u84FB\u852B\u84FA\u8508\u850C\u84F4\u852A\u84F2\u8515\u84F7\u84EB\u84F3\u84FC\u8512\u84EA\u84E9\u8516\u84FE\u8528\u851D\u852E\u8502\u84FD\u851E\u84F6\u8531\u8526\u84E7\u84E8\u84F0\u84EF\u84F9\u8518\u8520\u8530\u850B\u8519\u852F\u8662\"],[\"e7a1\",\"\u8756\u8763\u8764\u8777\u87E1\u8773\u8758\u8754\u875B\u8752\u8761\u875A\u8751\u875E\u876D\u876A\u8750\u874E\u875F\u875D\u876F\u876C\u877A\u876E\u875C\u8765\u874F\u877B\u8775\u8762\u8767\u8769\u885A\u8905\u890C\u8914\u890B\u8917\u8918\u8919\u8906\u8916\u8911\u890E\u8909\u89A2\u89A4\u89A3\u89ED\u89F0\u89EC\u8ACF\u8AC6\u8AB8\u8AD3\u8AD1\u8AD4\u8AD5\u8ABB\u8AD7\u8ABE\u8AC0\u8AC5\u8AD8\u8AC3\u8ABA\u8ABD\u8AD9\u8C3E\u8C4D\u8C8F\u8CE5\u8CDF\u8CD9\u8CE8\u8CDA\u8CDD\u8CE7\u8DA0\u8D9C\u8DA1\u8D9B\u8E20\u8E23\u8E25\u8E24\u8E2E\u8E15\u8E1B\u8E16\u8E11\u8E19\u8E26\u8E27\"],[\"e840\",\"\u8E14\u8E12\u8E18\u8E13\u8E1C\u8E17\u8E1A\u8F2C\u8F24\u8F18\u8F1A\u8F20\u8F23\u8F16\u8F17\u9073\u9070\u906F\u9067\u906B\u912F\u912B\u9129\u912A\u9132\u9126\u912E\u9185\u9186\u918A\u9181\u9182\u9184\u9180\u92D0\u92C3\u92C4\u92C0\u92D9\u92B6\u92CF\u92F1\u92DF\u92D8\u92E9\u92D7\u92DD\u92CC\u92EF\u92C2\u92E8\u92CA\u92C8\u92CE\u92E6\u92CD\u92D5\u92C9\u92E0\u92DE\u92E7\u92D1\u92D3\"],[\"e8a1\",\"\u92B5\u92E1\u92C6\u92B4\u957C\u95AC\u95AB\u95AE\u95B0\u96A4\u96A2\u96D3\u9705\u9708\u9702\u975A\u978A\u978E\u9788\u97D0\u97CF\u981E\u981D\u9826\u9829\u9828\u9820\u981B\u9827\u98B2\u9908\u98FA\u9911\u9914\u9916\u9917\u9915\u99DC\u99CD\u99CF\u99D3\u99D4\u99CE\u99C9\u99D6\u99D8\u99CB\u99D7\u99CC\u9AB3\u9AEC\u9AEB\u9AF3\u9AF2\u9AF1\u9B46\u9B43\u9B67\u9B74\u9B71\u9B66\u9B76\u9B75\u9B70\u9B68\u9B64\u9B6C\u9CFC\u9CFA\u9CFD\u9CFF\u9CF7\u9D07\u9D00\u9CF9\u9CFB\u9D08\u9D05\u9D04\u9E83\u9ED3\u9F0F\u9F10\u511C\u5113\u5117\u511A\u5111\u51DE\u5334\u53E1\u5670\u5660\u566E\"],[\"e940\",\"\u5673\u5666\u5663\u566D\u5672\u565E\u5677\u571C\u571B\u58C8\u58BD\u58C9\u58BF\u58BA\u58C2\u58BC\u58C6\u5B17\u5B19\u5B1B\u5B21\u5B14\u5B13\u5B10\u5B16\u5B28\u5B1A\u5B20\u5B1E\u5BEF\u5DAC\u5DB1\u5DA9\u5DA7\u5DB5\u5DB0\u5DAE\u5DAA\u5DA8\u5DB2\u5DAD\u5DAF\u5DB4\u5E67\u5E68\u5E66\u5E6F\u5EE9\u5EE7\u5EE6\u5EE8\u5EE5\u5F4B\u5FBC\u619D\u61A8\u6196\u61C5\u61B4\u61C6\u61C1\u61CC\u61BA\"],[\"e9a1\",\"\u61BF\u61B8\u618C\u64D7\u64D6\u64D0\u64CF\u64C9\u64BD\u6489\u64C3\u64DB\u64F3\u64D9\u6533\u657F\u657C\u65A2\u66C8\u66BE\u66C0\u66CA\u66CB\u66CF\u66BD\u66BB\u66BA\u66CC\u6723\u6A34\u6A66\u6A49\u6A67\u6A32\u6A68\u6A3E\u6A5D\u6A6D\u6A76\u6A5B\u6A51\u6A28\u6A5A\u6A3B\u6A3F\u6A41\u6A6A\u6A64\u6A50\u6A4F\u6A54\u6A6F\u6A69\u6A60\u6A3C\u6A5E\u6A56\u6A55\u6A4D\u6A4E\u6A46\u6B55\u6B54\u6B56\u6BA7\u6BAA\u6BAB\u6BC8\u6BC7\u6C04\u6C03\u6C06\u6FAD\u6FCB\u6FA3\u6FC7\u6FBC\u6FCE\u6FC8\u6F5E\u6FC4\u6FBD\u6F9E\u6FCA\u6FA8\u7004\u6FA5\u6FAE\u6FBA\u6FAC\u6FAA\u6FCF\u6FBF\u6FB8\"],[\"ea40\",\"\u6FA2\u6FC9\u6FAB\u6FCD\u6FAF\u6FB2\u6FB0\u71C5\u71C2\u71BF\u71B8\u71D6\u71C0\u71C1\u71CB\u71D4\u71CA\u71C7\u71CF\u71BD\u71D8\u71BC\u71C6\u71DA\u71DB\u729D\u729E\u7369\u7366\u7367\u736C\u7365\u736B\u736A\u747F\u749A\u74A0\u7494\u7492\u7495\u74A1\u750B\u7580\u762F\u762D\u7631\u763D\u7633\u763C\u7635\u7632\u7630\u76BB\u76E6\u779A\u779D\u77A1\u779C\u779B\u77A2\u77A3\u7795\u7799\"],[\"eaa1\",\"\u7797\u78DD\u78E9\u78E5\u78EA\u78DE\u78E3\u78DB\u78E1\u78E2\u78ED\u78DF\u78E0\u79A4\u7A44\u7A48\u7A47\u7AB6\u7AB8\u7AB5\u7AB1\u7AB7\u7BDE\u7BE3\u7BE7\u7BDD\u7BD5\u7BE5\u7BDA\u7BE8\u7BF9\u7BD4\u7BEA\u7BE2\u7BDC\u7BEB\u7BD8\u7BDF\u7CD2\u7CD4\u7CD7\u7CD0\u7CD1\u7E12\u7E21\u7E17\u7E0C\u7E1F\u7E20\u7E13\u7E0E\u7E1C\u7E15\u7E1A\u7E22\u7E0B\u7E0F\u7E16\u7E0D\u7E14\u7E25\u7E24\u7F43\u7F7B\u7F7C\u7F7A\u7FB1\u7FEF\u802A\u8029\u806C\u81B1\u81A6\u81AE\u81B9\u81B5\u81AB\u81B0\u81AC\u81B4\u81B2\u81B7\u81A7\u81F2\u8255\u8256\u8257\u8556\u8545\u856B\u854D\u8553\u8561\u8558\"],[\"eb40\",\"\u8540\u8546\u8564\u8541\u8562\u8544\u8551\u8547\u8563\u853E\u855B\u8571\u854E\u856E\u8575\u8555\u8567\u8560\u858C\u8566\u855D\u8554\u8565\u856C\u8663\u8665\u8664\u879B\u878F\u8797\u8793\u8792\u8788\u8781\u8796\u8798\u8779\u8787\u87A3\u8785\u8790\u8791\u879D\u8784\u8794\u879C\u879A\u8789\u891E\u8926\u8930\u892D\u892E\u8927\u8931\u8922\u8929\u8923\u892F\u892C\u891F\u89F1\u8AE0\"],[\"eba1\",\"\u8AE2\u8AF2\u8AF4\u8AF5\u8ADD\u8B14\u8AE4\u8ADF\u8AF0\u8AC8\u8ADE\u8AE1\u8AE8\u8AFF\u8AEF\u8AFB\u8C91\u8C92\u8C90\u8CF5\u8CEE\u8CF1\u8CF0\u8CF3\u8D6C\u8D6E\u8DA5\u8DA7\u8E33\u8E3E\u8E38\u8E40\u8E45\u8E36\u8E3C\u8E3D\u8E41\u8E30\u8E3F\u8EBD\u8F36\u8F2E\u8F35\u8F32\u8F39\u8F37\u8F34\u9076\u9079\u907B\u9086\u90FA\u9133\u9135\u9136\u9193\u9190\u9191\u918D\u918F\u9327\u931E\u9308\u931F\u9306\u930F\u937A\u9338\u933C\u931B\u9323\u9312\u9301\u9346\u932D\u930E\u930D\u92CB\u931D\u92FA\u9325\u9313\u92F9\u92F7\u9334\u9302\u9324\u92FF\u9329\u9339\u9335\u932A\u9314\u930C\"],[\"ec40\",\"\u930B\u92FE\u9309\u9300\u92FB\u9316\u95BC\u95CD\u95BE\u95B9\u95BA\u95B6\u95BF\u95B5\u95BD\u96A9\u96D4\u970B\u9712\u9710\u9799\u9797\u9794\u97F0\u97F8\u9835\u982F\u9832\u9924\u991F\u9927\u9929\u999E\u99EE\u99EC\u99E5\u99E4\u99F0\u99E3\u99EA\u99E9\u99E7\u9AB9\u9ABF\u9AB4\u9ABB\u9AF6\u9AFA\u9AF9\u9AF7\u9B33\u9B80\u9B85\u9B87\u9B7C\u9B7E\u9B7B\u9B82\u9B93\u9B92\u9B90\u9B7A\u9B95\"],[\"eca1\",\"\u9B7D\u9B88\u9D25\u9D17\u9D20\u9D1E\u9D14\u9D29\u9D1D\u9D18\u9D22\u9D10\u9D19\u9D1F\u9E88\u9E86\u9E87\u9EAE\u9EAD\u9ED5\u9ED6\u9EFA\u9F12\u9F3D\u5126\u5125\u5122\u5124\u5120\u5129\u52F4\u5693\u568C\u568D\u5686\u5684\u5683\u567E\u5682\u567F\u5681\u58D6\u58D4\u58CF\u58D2\u5B2D\u5B25\u5B32\u5B23\u5B2C\u5B27\u5B26\u5B2F\u5B2E\u5B7B\u5BF1\u5BF2\u5DB7\u5E6C\u5E6A\u5FBE\u5FBB\u61C3\u61B5\u61BC\u61E7\u61E0\u61E5\u61E4\u61E8\u61DE\u64EF\u64E9\u64E3\u64EB\u64E4\u64E8\u6581\u6580\u65B6\u65DA\u66D2\u6A8D\u6A96\u6A81\u6AA5\u6A89\u6A9F\u6A9B\u6AA1\u6A9E\u6A87\u6A93\u6A8E\"],[\"ed40\",\"\u6A95\u6A83\u6AA8\u6AA4\u6A91\u6A7F\u6AA6\u6A9A\u6A85\u6A8C\u6A92\u6B5B\u6BAD\u6C09\u6FCC\u6FA9\u6FF4\u6FD4\u6FE3\u6FDC\u6FED\u6FE7\u6FE6\u6FDE\u6FF2\u6FDD\u6FE2\u6FE8\u71E1\u71F1\u71E8\u71F2\u71E4\u71F0\u71E2\u7373\u736E\u736F\u7497\u74B2\u74AB\u7490\u74AA\u74AD\u74B1\u74A5\u74AF\u7510\u7511\u7512\u750F\u7584\u7643\u7648\u7649\u7647\u76A4\u76E9\u77B5\u77AB\u77B2\u77B7\u77B6\"],[\"eda1\",\"\u77B4\u77B1\u77A8\u77F0\u78F3\u78FD\u7902\u78FB\u78FC\u78F2\u7905\u78F9\u78FE\u7904\u79AB\u79A8\u7A5C\u7A5B\u7A56\u7A58\u7A54\u7A5A\u7ABE\u7AC0\u7AC1\u7C05\u7C0F\u7BF2\u7C00\u7BFF\u7BFB\u7C0E\u7BF4\u7C0B\u7BF3\u7C02\u7C09\u7C03\u7C01\u7BF8\u7BFD\u7C06\u7BF0\u7BF1\u7C10\u7C0A\u7CE8\u7E2D\u7E3C\u7E42\u7E33\u9848\u7E38\u7E2A\u7E49\u7E40\u7E47\u7E29\u7E4C\u7E30\u7E3B\u7E36\u7E44\u7E3A\u7F45\u7F7F\u7F7E\u7F7D\u7FF4\u7FF2\u802C\u81BB\u81C4\u81CC\u81CA\u81C5\u81C7\u81BC\u81E9\u825B\u825A\u825C\u8583\u8580\u858F\u85A7\u8595\u85A0\u858B\u85A3\u857B\u85A4\u859A\u859E\"],[\"ee40\",\"\u8577\u857C\u8589\u85A1\u857A\u8578\u8557\u858E\u8596\u8586\u858D\u8599\u859D\u8581\u85A2\u8582\u8588\u8585\u8579\u8576\u8598\u8590\u859F\u8668\u87BE\u87AA\u87AD\u87C5\u87B0\u87AC\u87B9\u87B5\u87BC\u87AE\u87C9\u87C3\u87C2\u87CC\u87B7\u87AF\u87C4\u87CA\u87B4\u87B6\u87BF\u87B8\u87BD\u87DE\u87B2\u8935\u8933\u893C\u893E\u8941\u8952\u8937\u8942\u89AD\u89AF\u89AE\u89F2\u89F3\u8B1E\"],[\"eea1\",\"\u8B18\u8B16\u8B11\u8B05\u8B0B\u8B22\u8B0F\u8B12\u8B15\u8B07\u8B0D\u8B08\u8B06\u8B1C\u8B13\u8B1A\u8C4F\u8C70\u8C72\u8C71\u8C6F\u8C95\u8C94\u8CF9\u8D6F\u8E4E\u8E4D\u8E53\u8E50\u8E4C\u8E47\u8F43\u8F40\u9085\u907E\u9138\u919A\u91A2\u919B\u9199\u919F\u91A1\u919D\u91A0\u93A1\u9383\u93AF\u9364\u9356\u9347\u937C\u9358\u935C\u9376\u9349\u9350\u9351\u9360\u936D\u938F\u934C\u936A\u9379\u9357\u9355\u9352\u934F\u9371\u9377\u937B\u9361\u935E\u9363\u9367\u9380\u934E\u9359\u95C7\u95C0\u95C9\u95C3\u95C5\u95B7\u96AE\u96B0\u96AC\u9720\u971F\u9718\u971D\u9719\u979A\u97A1\u979C\"],[\"ef40\",\"\u979E\u979D\u97D5\u97D4\u97F1\u9841\u9844\u984A\u9849\u9845\u9843\u9925\u992B\u992C\u992A\u9933\u9932\u992F\u992D\u9931\u9930\u9998\u99A3\u99A1\u9A02\u99FA\u99F4\u99F7\u99F9\u99F8\u99F6\u99FB\u99FD\u99FE\u99FC\u9A03\u9ABE\u9AFE\u9AFD\u9B01\u9AFC\u9B48\u9B9A\u9BA8\u9B9E\u9B9B\u9BA6\u9BA1\u9BA5\u9BA4\u9B86\u9BA2\u9BA0\u9BAF\u9D33\u9D41\u9D67\u9D36\u9D2E\u9D2F\u9D31\u9D38\u9D30\"],[\"efa1\",\"\u9D45\u9D42\u9D43\u9D3E\u9D37\u9D40\u9D3D\u7FF5\u9D2D\u9E8A\u9E89\u9E8D\u9EB0\u9EC8\u9EDA\u9EFB\u9EFF\u9F24\u9F23\u9F22\u9F54\u9FA0\u5131\u512D\u512E\u5698\u569C\u5697\u569A\u569D\u5699\u5970\u5B3C\u5C69\u5C6A\u5DC0\u5E6D\u5E6E\u61D8\u61DF\u61ED\u61EE\u61F1\u61EA\u61F0\u61EB\u61D6\u61E9\u64FF\u6504\u64FD\u64F8\u6501\u6503\u64FC\u6594\u65DB\u66DA\u66DB\u66D8\u6AC5\u6AB9\u6ABD\u6AE1\u6AC6\u6ABA\u6AB6\u6AB7\u6AC7\u6AB4\u6AAD\u6B5E\u6BC9\u6C0B\u7007\u700C\u700D\u7001\u7005\u7014\u700E\u6FFF\u7000\u6FFB\u7026\u6FFC\u6FF7\u700A\u7201\u71FF\u71F9\u7203\u71FD\u7376\"],[\"f040\",\"\u74B8\u74C0\u74B5\u74C1\u74BE\u74B6\u74BB\u74C2\u7514\u7513\u765C\u7664\u7659\u7650\u7653\u7657\u765A\u76A6\u76BD\u76EC\u77C2\u77BA\u78FF\u790C\u7913\u7914\u7909\u7910\u7912\u7911\u79AD\u79AC\u7A5F\u7C1C\u7C29\u7C19\u7C20\u7C1F\u7C2D\u7C1D\u7C26\u7C28\u7C22\u7C25\u7C30\u7E5C\u7E50\u7E56\u7E63\u7E58\u7E62\u7E5F\u7E51\u7E60\u7E57\u7E53\u7FB5\u7FB3\u7FF7\u7FF8\u8075\u81D1\u81D2\"],[\"f0a1\",\"\u81D0\u825F\u825E\u85B4\u85C6\u85C0\u85C3\u85C2\u85B3\u85B5\u85BD\u85C7\u85C4\u85BF\u85CB\u85CE\u85C8\u85C5\u85B1\u85B6\u85D2\u8624\u85B8\u85B7\u85BE\u8669\u87E7\u87E6\u87E2\u87DB\u87EB\u87EA\u87E5\u87DF\u87F3\u87E4\u87D4\u87DC\u87D3\u87ED\u87D8\u87E3\u87A4\u87D7\u87D9\u8801\u87F4\u87E8\u87DD\u8953\u894B\u894F\u894C\u8946\u8950\u8951\u8949\u8B2A\u8B27\u8B23\u8B33\u8B30\u8B35\u8B47\u8B2F\u8B3C\u8B3E\u8B31\u8B25\u8B37\u8B26\u8B36\u8B2E\u8B24\u8B3B\u8B3D\u8B3A\u8C42\u8C75\u8C99\u8C98\u8C97\u8CFE\u8D04\u8D02\u8D00\u8E5C\u8E62\u8E60\u8E57\u8E56\u8E5E\u8E65\u8E67\"],[\"f140\",\"\u8E5B\u8E5A\u8E61\u8E5D\u8E69\u8E54\u8F46\u8F47\u8F48\u8F4B\u9128\u913A\u913B\u913E\u91A8\u91A5\u91A7\u91AF\u91AA\u93B5\u938C\u9392\u93B7\u939B\u939D\u9389\u93A7\u938E\u93AA\u939E\u93A6\u9395\u9388\u9399\u939F\u938D\u93B1\u9391\u93B2\u93A4\u93A8\u93B4\u93A3\u93A5\u95D2\u95D3\u95D1\u96B3\u96D7\u96DA\u5DC2\u96DF\u96D8\u96DD\u9723\u9722\u9725\u97AC\u97AE\u97A8\u97AB\u97A4\u97AA\"],[\"f1a1\",\"\u97A2\u97A5\u97D7\u97D9\u97D6\u97D8\u97FA\u9850\u9851\u9852\u98B8\u9941\u993C\u993A\u9A0F\u9A0B\u9A09\u9A0D\u9A04\u9A11\u9A0A\u9A05\u9A07\u9A06\u9AC0\u9ADC\u9B08\u9B04\u9B05\u9B29\u9B35\u9B4A\u9B4C\u9B4B\u9BC7\u9BC6\u9BC3\u9BBF\u9BC1\u9BB5\u9BB8\u9BD3\u9BB6\u9BC4\u9BB9\u9BBD\u9D5C\u9D53\u9D4F\u9D4A\u9D5B\u9D4B\u9D59\u9D56\u9D4C\u9D57\u9D52\u9D54\u9D5F\u9D58\u9D5A\u9E8E\u9E8C\u9EDF\u9F01\u9F00\u9F16\u9F25\u9F2B\u9F2A\u9F29\u9F28\u9F4C\u9F55\u5134\u5135\u5296\u52F7\u53B4\u56AB\u56AD\u56A6\u56A7\u56AA\u56AC\u58DA\u58DD\u58DB\u5912\u5B3D\u5B3E\u5B3F\u5DC3\u5E70\"],[\"f240\",\"\u5FBF\u61FB\u6507\u6510\u650D\u6509\u650C\u650E\u6584\u65DE\u65DD\u66DE\u6AE7\u6AE0\u6ACC\u6AD1\u6AD9\u6ACB\u6ADF\u6ADC\u6AD0\u6AEB\u6ACF\u6ACD\u6ADE\u6B60\u6BB0\u6C0C\u7019\u7027\u7020\u7016\u702B\u7021\u7022\u7023\u7029\u7017\u7024\u701C\u702A\u720C\u720A\u7207\u7202\u7205\u72A5\u72A6\u72A4\u72A3\u72A1\u74CB\u74C5\u74B7\u74C3\u7516\u7660\u77C9\u77CA\u77C4\u77F1\u791D\u791B\"],[\"f2a1\",\"\u7921\u791C\u7917\u791E\u79B0\u7A67\u7A68\u7C33\u7C3C\u7C39\u7C2C\u7C3B\u7CEC\u7CEA\u7E76\u7E75\u7E78\u7E70\u7E77\u7E6F\u7E7A\u7E72\u7E74\u7E68\u7F4B\u7F4A\u7F83\u7F86\u7FB7\u7FFD\u7FFE\u8078\u81D7\u81D5\u8264\u8261\u8263\u85EB\u85F1\u85ED\u85D9\u85E1\u85E8\u85DA\u85D7\u85EC\u85F2\u85F8\u85D8\u85DF\u85E3\u85DC\u85D1\u85F0\u85E6\u85EF\u85DE\u85E2\u8800\u87FA\u8803\u87F6\u87F7\u8809\u880C\u880B\u8806\u87FC\u8808\u87FF\u880A\u8802\u8962\u895A\u895B\u8957\u8961\u895C\u8958\u895D\u8959\u8988\u89B7\u89B6\u89F6\u8B50\u8B48\u8B4A\u8B40\u8B53\u8B56\u8B54\u8B4B\u8B55\"],[\"f340\",\"\u8B51\u8B42\u8B52\u8B57\u8C43\u8C77\u8C76\u8C9A\u8D06\u8D07\u8D09\u8DAC\u8DAA\u8DAD\u8DAB\u8E6D\u8E78\u8E73\u8E6A\u8E6F\u8E7B\u8EC2\u8F52\u8F51\u8F4F\u8F50\u8F53\u8FB4\u9140\u913F\u91B0\u91AD\u93DE\u93C7\u93CF\u93C2\u93DA\u93D0\u93F9\u93EC\u93CC\u93D9\u93A9\u93E6\u93CA\u93D4\u93EE\u93E3\u93D5\u93C4\u93CE\u93C0\u93D2\u93E7\u957D\u95DA\u95DB\u96E1\u9729\u972B\u972C\u9728\u9726\"],[\"f3a1\",\"\u97B3\u97B7\u97B6\u97DD\u97DE\u97DF\u985C\u9859\u985D\u9857\u98BF\u98BD\u98BB\u98BE\u9948\u9947\u9943\u99A6\u99A7\u9A1A\u9A15\u9A25\u9A1D\u9A24\u9A1B\u9A22\u9A20\u9A27\u9A23\u9A1E\u9A1C\u9A14\u9AC2\u9B0B\u9B0A\u9B0E\u9B0C\u9B37\u9BEA\u9BEB\u9BE0\u9BDE\u9BE4\u9BE6\u9BE2\u9BF0\u9BD4\u9BD7\u9BEC\u9BDC\u9BD9\u9BE5\u9BD5\u9BE1\u9BDA\u9D77\u9D81\u9D8A\u9D84\u9D88\u9D71\u9D80\u9D78\u9D86\u9D8B\u9D8C\u9D7D\u9D6B\u9D74\u9D75\u9D70\u9D69\u9D85\u9D73\u9D7B\u9D82\u9D6F\u9D79\u9D7F\u9D87\u9D68\u9E94\u9E91\u9EC0\u9EFC\u9F2D\u9F40\u9F41\u9F4D\u9F56\u9F57\u9F58\u5337\u56B2\"],[\"f440\",\"\u56B5\u56B3\u58E3\u5B45\u5DC6\u5DC7\u5EEE\u5EEF\u5FC0\u5FC1\u61F9\u6517\u6516\u6515\u6513\u65DF\u66E8\u66E3\u66E4\u6AF3\u6AF0\u6AEA\u6AE8\u6AF9\u6AF1\u6AEE\u6AEF\u703C\u7035\u702F\u7037\u7034\u7031\u7042\u7038\u703F\u703A\u7039\u7040\u703B\u7033\u7041\u7213\u7214\u72A8\u737D\u737C\u74BA\u76AB\u76AA\u76BE\u76ED\u77CC\u77CE\u77CF\u77CD\u77F2\u7925\u7923\u7927\u7928\u7924\u7929\"],[\"f4a1\",\"\u79B2\u7A6E\u7A6C\u7A6D\u7AF7\u7C49\u7C48\u7C4A\u7C47\u7C45\u7CEE\u7E7B\u7E7E\u7E81\u7E80\u7FBA\u7FFF\u8079\u81DB\u81D9\u820B\u8268\u8269\u8622\u85FF\u8601\u85FE\u861B\u8600\u85F6\u8604\u8609\u8605\u860C\u85FD\u8819\u8810\u8811\u8817\u8813\u8816\u8963\u8966\u89B9\u89F7\u8B60\u8B6A\u8B5D\u8B68\u8B63\u8B65\u8B67\u8B6D\u8DAE\u8E86\u8E88\u8E84\u8F59\u8F56\u8F57\u8F55\u8F58\u8F5A\u908D\u9143\u9141\u91B7\u91B5\u91B2\u91B3\u940B\u9413\u93FB\u9420\u940F\u9414\u93FE\u9415\u9410\u9428\u9419\u940D\u93F5\u9400\u93F7\u9407\u940E\u9416\u9412\u93FA\u9409\u93F8\u940A\u93FF\"],[\"f540\",\"\u93FC\u940C\u93F6\u9411\u9406\u95DE\u95E0\u95DF\u972E\u972F\u97B9\u97BB\u97FD\u97FE\u9860\u9862\u9863\u985F\u98C1\u98C2\u9950\u994E\u9959\u994C\u994B\u9953\u9A32\u9A34\u9A31\u9A2C\u9A2A\u9A36\u9A29\u9A2E\u9A38\u9A2D\u9AC7\u9ACA\u9AC6\u9B10\u9B12\u9B11\u9C0B\u9C08\u9BF7\u9C05\u9C12\u9BF8\u9C40\u9C07\u9C0E\u9C06\u9C17\u9C14\u9C09\u9D9F\u9D99\u9DA4\u9D9D\u9D92\u9D98\u9D90\u9D9B\"],[\"f5a1\",\"\u9DA0\u9D94\u9D9C\u9DAA\u9D97\u9DA1\u9D9A\u9DA2\u9DA8\u9D9E\u9DA3\u9DBF\u9DA9\u9D96\u9DA6\u9DA7\u9E99\u9E9B\u9E9A\u9EE5\u9EE4\u9EE7\u9EE6\u9F30\u9F2E\u9F5B\u9F60\u9F5E\u9F5D\u9F59\u9F91\u513A\u5139\u5298\u5297\u56C3\u56BD\u56BE\u5B48\u5B47\u5DCB\u5DCF\u5EF1\u61FD\u651B\u6B02\u6AFC\u6B03\u6AF8\u6B00\u7043\u7044\u704A\u7048\u7049\u7045\u7046\u721D\u721A\u7219\u737E\u7517\u766A\u77D0\u792D\u7931\u792F\u7C54\u7C53\u7CF2\u7E8A\u7E87\u7E88\u7E8B\u7E86\u7E8D\u7F4D\u7FBB\u8030\u81DD\u8618\u862A\u8626\u861F\u8623\u861C\u8619\u8627\u862E\u8621\u8620\u8629\u861E\u8625\"],[\"f640\",\"\u8829\u881D\u881B\u8820\u8824\u881C\u882B\u884A\u896D\u8969\u896E\u896B\u89FA\u8B79\u8B78\u8B45\u8B7A\u8B7B\u8D10\u8D14\u8DAF\u8E8E\u8E8C\u8F5E\u8F5B\u8F5D\u9146\u9144\u9145\u91B9\u943F\u943B\u9436\u9429\u943D\u943C\u9430\u9439\u942A\u9437\u942C\u9440\u9431\u95E5\u95E4\u95E3\u9735\u973A\u97BF\u97E1\u9864\u98C9\u98C6\u98C0\u9958\u9956\u9A39\u9A3D\u9A46\u9A44\u9A42\u9A41\u9A3A\"],[\"f6a1\",\"\u9A3F\u9ACD\u9B15\u9B17\u9B18\u9B16\u9B3A\u9B52\u9C2B\u9C1D\u9C1C\u9C2C\u9C23\u9C28\u9C29\u9C24\u9C21\u9DB7\u9DB6\u9DBC\u9DC1\u9DC7\u9DCA\u9DCF\u9DBE\u9DC5\u9DC3\u9DBB\u9DB5\u9DCE\u9DB9\u9DBA\u9DAC\u9DC8\u9DB1\u9DAD\u9DCC\u9DB3\u9DCD\u9DB2\u9E7A\u9E9C\u9EEB\u9EEE\u9EED\u9F1B\u9F18\u9F1A\u9F31\u9F4E\u9F65\u9F64\u9F92\u4EB9\u56C6\u56C5\u56CB\u5971\u5B4B\u5B4C\u5DD5\u5DD1\u5EF2\u6521\u6520\u6526\u6522\u6B0B\u6B08\u6B09\u6C0D\u7055\u7056\u7057\u7052\u721E\u721F\u72A9\u737F\u74D8\u74D5\u74D9\u74D7\u766D\u76AD\u7935\u79B4\u7A70\u7A71\u7C57\u7C5C\u7C59\u7C5B\u7C5A\"],[\"f740\",\"\u7CF4\u7CF1\u7E91\u7F4F\u7F87\u81DE\u826B\u8634\u8635\u8633\u862C\u8632\u8636\u882C\u8828\u8826\u882A\u8825\u8971\u89BF\u89BE\u89FB\u8B7E\u8B84\u8B82\u8B86\u8B85\u8B7F\u8D15\u8E95\u8E94\u8E9A\u8E92\u8E90\u8E96\u8E97\u8F60\u8F62\u9147\u944C\u9450\u944A\u944B\u944F\u9447\u9445\u9448\u9449\u9446\u973F\u97E3\u986A\u9869\u98CB\u9954\u995B\u9A4E\u9A53\u9A54\u9A4C\u9A4F\u9A48\u9A4A\"],[\"f7a1\",\"\u9A49\u9A52\u9A50\u9AD0\u9B19\u9B2B\u9B3B\u9B56\u9B55\u9C46\u9C48\u9C3F\u9C44\u9C39\u9C33\u9C41\u9C3C\u9C37\u9C34\u9C32\u9C3D\u9C36\u9DDB\u9DD2\u9DDE\u9DDA\u9DCB\u9DD0\u9DDC\u9DD1\u9DDF\u9DE9\u9DD9\u9DD8\u9DD6\u9DF5\u9DD5\u9DDD\u9EB6\u9EF0\u9F35\u9F33\u9F32\u9F42\u9F6B\u9F95\u9FA2\u513D\u5299\u58E8\u58E7\u5972\u5B4D\u5DD8\u882F\u5F4F\u6201\u6203\u6204\u6529\u6525\u6596\u66EB\u6B11\u6B12\u6B0F\u6BCA\u705B\u705A\u7222\u7382\u7381\u7383\u7670\u77D4\u7C67\u7C66\u7E95\u826C\u863A\u8640\u8639\u863C\u8631\u863B\u863E\u8830\u8832\u882E\u8833\u8976\u8974\u8973\u89FE\"],[\"f840\",\"\u8B8C\u8B8E\u8B8B\u8B88\u8C45\u8D19\u8E98\u8F64\u8F63\u91BC\u9462\u9455\u945D\u9457\u945E\u97C4\u97C5\u9800\u9A56\u9A59\u9B1E\u9B1F\u9B20\u9C52\u9C58\u9C50\u9C4A\u9C4D\u9C4B\u9C55\u9C59\u9C4C\u9C4E\u9DFB\u9DF7\u9DEF\u9DE3\u9DEB\u9DF8\u9DE4\u9DF6\u9DE1\u9DEE\u9DE6\u9DF2\u9DF0\u9DE2\u9DEC\u9DF4\u9DF3\u9DE8\u9DED\u9EC2\u9ED0\u9EF2\u9EF3\u9F06\u9F1C\u9F38\u9F37\u9F36\u9F43\u9F4F\"],[\"f8a1\",\"\u9F71\u9F70\u9F6E\u9F6F\u56D3\u56CD\u5B4E\u5C6D\u652D\u66ED\u66EE\u6B13\u705F\u7061\u705D\u7060\u7223\u74DB\u74E5\u77D5\u7938\u79B7\u79B6\u7C6A\u7E97\u7F89\u826D\u8643\u8838\u8837\u8835\u884B\u8B94\u8B95\u8E9E\u8E9F\u8EA0\u8E9D\u91BE\u91BD\u91C2\u946B\u9468\u9469\u96E5\u9746\u9743\u9747\u97C7\u97E5\u9A5E\u9AD5\u9B59\u9C63\u9C67\u9C66\u9C62\u9C5E\u9C60\u9E02\u9DFE\u9E07\u9E03\u9E06\u9E05\u9E00\u9E01\u9E09\u9DFF\u9DFD\u9E04\u9EA0\u9F1E\u9F46\u9F74\u9F75\u9F76\u56D4\u652E\u65B8\u6B18\u6B19\u6B17\u6B1A\u7062\u7226\u72AA\u77D8\u77D9\u7939\u7C69\u7C6B\u7CF6\u7E9A\"],[\"f940\",\"\u7E98\u7E9B\u7E99\u81E0\u81E1\u8646\u8647\u8648\u8979\u897A\u897C\u897B\u89FF\u8B98\u8B99\u8EA5\u8EA4\u8EA3\u946E\u946D\u946F\u9471\u9473\u9749\u9872\u995F\u9C68\u9C6E\u9C6D\u9E0B\u9E0D\u9E10\u9E0F\u9E12\u9E11\u9EA1\u9EF5\u9F09\u9F47\u9F78\u9F7B\u9F7A\u9F79\u571E\u7066\u7C6F\u883C\u8DB2\u8EA6\u91C3\u9474\u9478\u9476\u9475\u9A60\u9C74\u9C73\u9C71\u9C75\u9E14\u9E13\u9EF6\u9F0A\"],[\"f9a1\",\"\u9FA4\u7068\u7065\u7CF7\u866A\u883E\u883D\u883F\u8B9E\u8C9C\u8EA9\u8EC9\u974B\u9873\u9874\u98CC\u9961\u99AB\u9A64\u9A66\u9A67\u9B24\u9E15\u9E17\u9F48\u6207\u6B1E\u7227\u864C\u8EA8\u9482\u9480\u9481\u9A69\u9A68\u9B2E\u9E19\u7229\u864B\u8B9F\u9483\u9C79\u9EB7\u7675\u9A6B\u9C7A\u9E1D\u7069\u706A\u9EA4\u9F7E\u9F49\u9F98\u7881\u92B9\u88CF\u58BB\u6052\u7CA7\u5AFA\u2554\u2566\u2557\u2560\u256C\u2563\u255A\u2569\u255D\u2552\u2564\u2555\u255E\u256A\u2561\u2558\u2567\u255B\u2553\u2565\u2556\u255F\u256B\u2562\u2559\u2568\u255C\u2551\u2550\u256D\u256E\u2570\u256F\u2593\"]]");
      /***/
    },

    /***/
    "fGuN":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/sbcs-data.js ***!
      \*******************************************************************************************/

    /*! no static exports found */

    /***/
    function fGuN(module, exports, __webpack_require__) {
      "use strict"; // Manually added data to be used by sbcs codec in addition to generated one.

      module.exports = {
        // Not supported by iconv, not sure why.
        "10029": "maccenteuro",
        "maccenteuro": {
          "type": "_sbcs",
          "chars": "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
        },
        "808": "cp808",
        "ibm808": "cp808",
        "cp808": {
          "type": "_sbcs",
          "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ "
        },
        "mik": {
          "type": "_sbcs",
          "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
        },
        // Aliases of generated encodings.
        "ascii8bit": "ascii",
        "usascii": "ascii",
        "ansix34": "ascii",
        "ansix341968": "ascii",
        "ansix341986": "ascii",
        "csascii": "ascii",
        "cp367": "ascii",
        "ibm367": "ascii",
        "isoir6": "ascii",
        "iso646us": "ascii",
        "iso646irv": "ascii",
        "us": "ascii",
        "latin1": "iso88591",
        "latin2": "iso88592",
        "latin3": "iso88593",
        "latin4": "iso88594",
        "latin5": "iso88599",
        "latin6": "iso885910",
        "latin7": "iso885913",
        "latin8": "iso885914",
        "latin9": "iso885915",
        "latin10": "iso885916",
        "csisolatin1": "iso88591",
        "csisolatin2": "iso88592",
        "csisolatin3": "iso88593",
        "csisolatin4": "iso88594",
        "csisolatincyrillic": "iso88595",
        "csisolatinarabic": "iso88596",
        "csisolatingreek": "iso88597",
        "csisolatinhebrew": "iso88598",
        "csisolatin5": "iso88599",
        "csisolatin6": "iso885910",
        "l1": "iso88591",
        "l2": "iso88592",
        "l3": "iso88593",
        "l4": "iso88594",
        "l5": "iso88599",
        "l6": "iso885910",
        "l7": "iso885913",
        "l8": "iso885914",
        "l9": "iso885915",
        "l10": "iso885916",
        "isoir14": "iso646jp",
        "isoir57": "iso646cn",
        "isoir100": "iso88591",
        "isoir101": "iso88592",
        "isoir109": "iso88593",
        "isoir110": "iso88594",
        "isoir144": "iso88595",
        "isoir127": "iso88596",
        "isoir126": "iso88597",
        "isoir138": "iso88598",
        "isoir148": "iso88599",
        "isoir157": "iso885910",
        "isoir166": "tis620",
        "isoir179": "iso885913",
        "isoir199": "iso885914",
        "isoir203": "iso885915",
        "isoir226": "iso885916",
        "cp819": "iso88591",
        "ibm819": "iso88591",
        "cyrillic": "iso88595",
        "arabic": "iso88596",
        "arabic8": "iso88596",
        "ecma114": "iso88596",
        "asmo708": "iso88596",
        "greek": "iso88597",
        "greek8": "iso88597",
        "ecma118": "iso88597",
        "elot928": "iso88597",
        "hebrew": "iso88598",
        "hebrew8": "iso88598",
        "turkish": "iso88599",
        "turkish8": "iso88599",
        "thai": "iso885911",
        "thai8": "iso885911",
        "celtic": "iso885914",
        "celtic8": "iso885914",
        "isoceltic": "iso885914",
        "tis6200": "tis620",
        "tis62025291": "tis620",
        "tis62025330": "tis620",
        "10000": "macroman",
        "10006": "macgreek",
        "10007": "maccyrillic",
        "10079": "maciceland",
        "10081": "macturkish",
        "cspc8codepage437": "cp437",
        "cspc775baltic": "cp775",
        "cspc850multilingual": "cp850",
        "cspcp852": "cp852",
        "cspc862latinhebrew": "cp862",
        "cpgr": "cp869",
        "msee": "cp1250",
        "mscyrl": "cp1251",
        "msansi": "cp1252",
        "msgreek": "cp1253",
        "msturk": "cp1254",
        "mshebr": "cp1255",
        "msarab": "cp1256",
        "winbaltrim": "cp1257",
        "cp20866": "koi8r",
        "20866": "koi8r",
        "ibm878": "koi8r",
        "cskoi8r": "koi8r",
        "cp21866": "koi8u",
        "21866": "koi8u",
        "ibm1168": "koi8u",
        "strk10482002": "rk1048",
        "tcvn5712": "tcvn",
        "tcvn57121": "tcvn",
        "gb198880": "iso646cn",
        "cn": "iso646cn",
        "csiso14jisc6220ro": "iso646jp",
        "jisc62201969ro": "iso646jp",
        "jp": "iso646jp",
        "cshproman8": "hproman8",
        "r8": "hproman8",
        "roman8": "hproman8",
        "xroman8": "hproman8",
        "ibm1051": "hproman8",
        "mac": "macintosh",
        "csmacintosh": "macintosh"
      };
      /***/
    },

    /***/
    "fXKp":
    /*!***********************************************************!*\
      !*** ./node_modules/string_decoder/lib/string_decoder.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function fXKp(module, exports, __webpack_require__) {
      "use strict"; // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.

      /*<replacement>*/

      var Buffer = __webpack_require__(
      /*! safe-buffer */
      "hwdV").Buffer;
      /*</replacement>*/


      var isEncoding = Buffer.isEncoding || function (encoding) {
        encoding = '' + encoding;

        switch (encoding && encoding.toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'binary':
          case 'base64':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
          case 'raw':
            return true;

          default:
            return false;
        }
      };

      function _normalizeEncoding(enc) {
        if (!enc) return 'utf8';
        var retried;

        while (true) {
          switch (enc) {
            case 'utf8':
            case 'utf-8':
              return 'utf8';

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 'utf16le';

            case 'latin1':
            case 'binary':
              return 'latin1';

            case 'base64':
            case 'ascii':
            case 'hex':
              return enc;

            default:
              if (retried) return; // undefined

              enc = ('' + enc).toLowerCase();
              retried = true;
          }
        }
      }

      ; // Do not cache `Buffer.isEncoding` when checking encoding names as some
      // modules monkey-patch it to support additional encodings

      function normalizeEncoding(enc) {
        var nenc = _normalizeEncoding(enc);

        if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
        return nenc || enc;
      } // StringDecoder provides an interface for efficiently splitting a series of
      // buffers into a series of JS strings without breaking apart multi-byte
      // characters.


      exports.StringDecoder = StringDecoder;

      function StringDecoder(encoding) {
        this.encoding = normalizeEncoding(encoding);
        var nb;

        switch (this.encoding) {
          case 'utf16le':
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;

          case 'utf8':
            this.fillLast = utf8FillLast;
            nb = 4;
            break;

          case 'base64':
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;

          default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
        }

        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = Buffer.allocUnsafe(nb);
      }

      StringDecoder.prototype.write = function (buf) {
        if (buf.length === 0) return '';
        var r;
        var i;

        if (this.lastNeed) {
          r = this.fillLast(buf);
          if (r === undefined) return '';
          i = this.lastNeed;
          this.lastNeed = 0;
        } else {
          i = 0;
        }

        if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
        return r || '';
      };

      StringDecoder.prototype.end = utf8End; // Returns only complete characters in a Buffer

      StringDecoder.prototype.text = utf8Text; // Attempts to complete a partial non-UTF-8 character using bytes from a Buffer

      StringDecoder.prototype.fillLast = function (buf) {
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }

        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
        this.lastNeed -= buf.length;
      }; // Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
      // continuation byte. If an invalid byte is detected, -2 is returned.


      function utf8CheckByte(_byte) {
        if (_byte <= 0x7F) return 0;else if (_byte >> 5 === 0x06) return 2;else if (_byte >> 4 === 0x0E) return 3;else if (_byte >> 3 === 0x1E) return 4;
        return _byte >> 6 === 0x02 ? -1 : -2;
      } // Checks at most 3 bytes at the end of a Buffer in order to detect an
      // incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
      // needed to complete the UTF-8 character (if applicable) are returned.


      function utf8CheckIncomplete(self, buf, i) {
        var j = buf.length - 1;
        if (j < i) return 0;
        var nb = utf8CheckByte(buf[j]);

        if (nb >= 0) {
          if (nb > 0) self.lastNeed = nb - 1;
          return nb;
        }

        if (--j < i || nb === -2) return 0;
        nb = utf8CheckByte(buf[j]);

        if (nb >= 0) {
          if (nb > 0) self.lastNeed = nb - 2;
          return nb;
        }

        if (--j < i || nb === -2) return 0;
        nb = utf8CheckByte(buf[j]);

        if (nb >= 0) {
          if (nb > 0) {
            if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
          }

          return nb;
        }

        return 0;
      } // Validates as many continuation bytes for a multi-byte UTF-8 character as
      // needed or are available. If we see a non-continuation byte where we expect
      // one, we "replace" the validated continuation bytes we've seen so far with
      // a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
      // behavior. The continuation byte check is included three times in the case
      // where all of the continuation bytes for a character exist in the same buffer.
      // It is also done this way as a slight performance increase instead of using a
      // loop.


      function utf8CheckExtraBytes(self, buf, p) {
        if ((buf[0] & 0xC0) !== 0x80) {
          self.lastNeed = 0;
          return "\uFFFD";
        }

        if (self.lastNeed > 1 && buf.length > 1) {
          if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return "\uFFFD";
          }

          if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
              self.lastNeed = 2;
              return "\uFFFD";
            }
          }
        }
      } // Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.


      function utf8FillLast(buf) {
        var p = this.lastTotal - this.lastNeed;
        var r = utf8CheckExtraBytes(this, buf, p);
        if (r !== undefined) return r;

        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, p, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }

        buf.copy(this.lastChar, p, 0, buf.length);
        this.lastNeed -= buf.length;
      } // Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
      // partial character, the character's bytes are buffered until the required
      // number of bytes are available.


      function utf8Text(buf, i) {
        var total = utf8CheckIncomplete(this, buf, i);
        if (!this.lastNeed) return buf.toString('utf8', i);
        this.lastTotal = total;
        var end = buf.length - (total - this.lastNeed);
        buf.copy(this.lastChar, 0, end);
        return buf.toString('utf8', i, end);
      } // For UTF-8, a replacement character is added when ending on a partial
      // character.


      function utf8End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';
        if (this.lastNeed) return r + "\uFFFD";
        return r;
      } // UTF-16LE typically needs two bytes per character, but even if we have an even
      // number of bytes available, we need to check if we end on a leading/high
      // surrogate. In that case, we need to wait for the next two bytes in order to
      // decode the last character properly.


      function utf16Text(buf, i) {
        if ((buf.length - i) % 2 === 0) {
          var r = buf.toString('utf16le', i);

          if (r) {
            var c = r.charCodeAt(r.length - 1);

            if (c >= 0xD800 && c <= 0xDBFF) {
              this.lastNeed = 2;
              this.lastTotal = 4;
              this.lastChar[0] = buf[buf.length - 2];
              this.lastChar[1] = buf[buf.length - 1];
              return r.slice(0, -1);
            }
          }

          return r;
        }

        this.lastNeed = 1;
        this.lastTotal = 2;
        this.lastChar[0] = buf[buf.length - 1];
        return buf.toString('utf16le', i, buf.length - 1);
      } // For UTF-16LE we do not explicitly append special replacement characters if we
      // end on a partial character, we simply let v8 handle that.


      function utf16End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';

        if (this.lastNeed) {
          var end = this.lastTotal - this.lastNeed;
          return r + this.lastChar.toString('utf16le', 0, end);
        }

        return r;
      }

      function base64Text(buf, i) {
        var n = (buf.length - i) % 3;
        if (n === 0) return buf.toString('base64', i);
        this.lastNeed = 3 - n;
        this.lastTotal = 3;

        if (n === 1) {
          this.lastChar[0] = buf[buf.length - 1];
        } else {
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
        }

        return buf.toString('base64', i, buf.length - n);
      }

      function base64End(buf) {
        var r = buf && buf.length ? this.write(buf) : '';
        if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
        return r;
      } // Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)


      function simpleWrite(buf) {
        return buf.toString(this.encoding);
      }

      function simpleEnd(buf) {
        return buf && buf.length ? this.write(buf) : '';
      }
      /***/

    },

    /***/
    "hl15":
    /*!***************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/utf16.js ***!
      \***************************************************************************************/

    /*! no static exports found */

    /***/
    function hl15(module, exports, __webpack_require__) {
      "use strict";

      var Buffer = __webpack_require__(
      /*! safer-buffer */
      "xZGU").Buffer; // Note: UTF16-LE (or UCS2) codec is Node.js native. See encodings/internal.js
      // == UTF16-BE codec. ==========================================================


      exports.utf16be = Utf16BECodec;

      function Utf16BECodec() {}

      Utf16BECodec.prototype.encoder = Utf16BEEncoder;
      Utf16BECodec.prototype.decoder = Utf16BEDecoder;
      Utf16BECodec.prototype.bomAware = true; // -- Encoding

      function Utf16BEEncoder() {}

      Utf16BEEncoder.prototype.write = function (str) {
        var buf = Buffer.from(str, 'ucs2');

        for (var i = 0; i < buf.length; i += 2) {
          var tmp = buf[i];
          buf[i] = buf[i + 1];
          buf[i + 1] = tmp;
        }

        return buf;
      };

      Utf16BEEncoder.prototype.end = function () {}; // -- Decoding


      function Utf16BEDecoder() {
        this.overflowByte = -1;
      }

      Utf16BEDecoder.prototype.write = function (buf) {
        if (buf.length == 0) return '';
        var buf2 = Buffer.alloc(buf.length + 1),
            i = 0,
            j = 0;

        if (this.overflowByte !== -1) {
          buf2[0] = buf[0];
          buf2[1] = this.overflowByte;
          i = 1;
          j = 2;
        }

        for (; i < buf.length - 1; i += 2, j += 2) {
          buf2[j] = buf[i + 1];
          buf2[j + 1] = buf[i];
        }

        this.overflowByte = i == buf.length - 1 ? buf[buf.length - 1] : -1;
        return buf2.slice(0, j).toString('ucs2');
      };

      Utf16BEDecoder.prototype.end = function () {}; // == UTF-16 codec =============================================================
      // Decoder chooses automatically from UTF-16LE and UTF-16BE using BOM and space-based heuristic.
      // Defaults to UTF-16LE, as it's prevalent and default in Node.
      // http://en.wikipedia.org/wiki/UTF-16 and http://encoding.spec.whatwg.org/#utf-16le
      // Decoder default can be changed: iconv.decode(buf, 'utf16', {defaultEncoding: 'utf-16be'});
      // Encoder uses UTF-16LE and prepends BOM (which can be overridden with addBOM: false).


      exports.utf16 = Utf16Codec;

      function Utf16Codec(codecOptions, iconv) {
        this.iconv = iconv;
      }

      Utf16Codec.prototype.encoder = Utf16Encoder;
      Utf16Codec.prototype.decoder = Utf16Decoder; // -- Encoding (pass-through)

      function Utf16Encoder(options, codec) {
        options = options || {};
        if (options.addBOM === undefined) options.addBOM = true;
        this.encoder = codec.iconv.getEncoder('utf-16le', options);
      }

      Utf16Encoder.prototype.write = function (str) {
        return this.encoder.write(str);
      };

      Utf16Encoder.prototype.end = function () {
        return this.encoder.end();
      }; // -- Decoding


      function Utf16Decoder(options, codec) {
        this.decoder = null;
        this.initialBytes = [];
        this.initialBytesLen = 0;
        this.options = options || {};
        this.iconv = codec.iconv;
      }

      Utf16Decoder.prototype.write = function (buf) {
        if (!this.decoder) {
          // Codec is not chosen yet. Accumulate initial bytes.
          this.initialBytes.push(buf);
          this.initialBytesLen += buf.length;
          if (this.initialBytesLen < 16) // We need more bytes to use space heuristic (see below)
            return ''; // We have enough bytes -> detect endianness.

          var buf = Buffer.concat(this.initialBytes),
              encoding = detectEncoding(buf, this.options.defaultEncoding);
          this.decoder = this.iconv.getDecoder(encoding, this.options);
          this.initialBytes.length = this.initialBytesLen = 0;
        }

        return this.decoder.write(buf);
      };

      Utf16Decoder.prototype.end = function () {
        if (!this.decoder) {
          var buf = Buffer.concat(this.initialBytes),
              encoding = detectEncoding(buf, this.options.defaultEncoding);
          this.decoder = this.iconv.getDecoder(encoding, this.options);
          var res = this.decoder.write(buf),
              trail = this.decoder.end();
          return trail ? res + trail : res;
        }

        return this.decoder.end();
      };

      function detectEncoding(buf, defaultEncoding) {
        var enc = defaultEncoding || 'utf-16le';

        if (buf.length >= 2) {
          // Check BOM.
          if (buf[0] == 0xFE && buf[1] == 0xFF) // UTF-16BE BOM
            enc = 'utf-16be';else if (buf[0] == 0xFF && buf[1] == 0xFE) // UTF-16LE BOM
            enc = 'utf-16le';else {
            // No BOM found. Try to deduce encoding from initial content.
            // Most of the time, the content has ASCII chars (U+00**), but the opposite (U+**00) is uncommon.
            // So, we count ASCII as if it was LE or BE, and decide from that.
            var asciiCharsLE = 0,
                asciiCharsBE = 0,
                // Counts of chars in both positions
            _len = Math.min(buf.length - buf.length % 2, 64); // Len is always even.


            for (var i = 0; i < _len; i += 2) {
              if (buf[i] === 0 && buf[i + 1] !== 0) asciiCharsBE++;
              if (buf[i] !== 0 && buf[i + 1] === 0) asciiCharsLE++;
            }

            if (asciiCharsBE > asciiCharsLE) enc = 'utf-16be';else if (asciiCharsBE < asciiCharsLE) enc = 'utf-16le';
          }
        }

        return enc;
      }
      /***/

    },

    /***/
    "hwdV":
    /*!*******************************************!*\
      !*** ./node_modules/safe-buffer/index.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function hwdV(module, exports, __webpack_require__) {
      /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

      /* eslint-disable node/no-deprecated-api */
      var buffer = __webpack_require__(
      /*! buffer */
      "tjlA");

      var Buffer = buffer.Buffer; // alternative to using Object.keys for old browsers

      function copyProps(src, dst) {
        for (var key in src) {
          dst[key] = src[key];
        }
      }

      if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
        module.exports = buffer;
      } else {
        // Copy properties from require('buffer')
        copyProps(buffer, exports);
        exports.Buffer = SafeBuffer;
      }

      function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer(arg, encodingOrOffset, length);
      }

      SafeBuffer.prototype = Object.create(Buffer.prototype); // Copy static methods from Buffer

      copyProps(Buffer, SafeBuffer);

      SafeBuffer.from = function (arg, encodingOrOffset, length) {
        if (typeof arg === 'number') {
          throw new TypeError('Argument must not be a number');
        }

        return Buffer(arg, encodingOrOffset, length);
      };

      SafeBuffer.alloc = function (size, fill, encoding) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }

        var buf = Buffer(size);

        if (fill !== undefined) {
          if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
        } else {
          buf.fill(0);
        }

        return buf;
      };

      SafeBuffer.allocUnsafe = function (size) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }

        return Buffer(size);
      };

      SafeBuffer.allocUnsafeSlow = function (size) {
        if (typeof size !== 'number') {
          throw new TypeError('Argument must be a number');
        }

        return buffer.SlowBuffer(size);
      };
      /***/

    },

    /***/
    "jChy":
    /*!************************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/tables/cp949.json ***!
      \************************************************************************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, default */

    /***/
    function jChy(module) {
      module.exports = JSON.parse("[[\"0\",\"\\u0000\",127],[\"8141\",\"\uAC02\uAC03\uAC05\uAC06\uAC0B\",4,\"\uAC18\uAC1E\uAC1F\uAC21\uAC22\uAC23\uAC25\",6,\"\uAC2E\uAC32\uAC33\uAC34\"],[\"8161\",\"\uAC35\uAC36\uAC37\uAC3A\uAC3B\uAC3D\uAC3E\uAC3F\uAC41\",9,\"\uAC4C\uAC4E\",5,\"\uAC55\"],[\"8181\",\"\uAC56\uAC57\uAC59\uAC5A\uAC5B\uAC5D\",18,\"\uAC72\uAC73\uAC75\uAC76\uAC79\uAC7B\",4,\"\uAC82\uAC87\uAC88\uAC8D\uAC8E\uAC8F\uAC91\uAC92\uAC93\uAC95\",6,\"\uAC9E\uACA2\",5,\"\uACAB\uACAD\uACAE\uACB1\",6,\"\uACBA\uACBE\uACBF\uACC0\uACC2\uACC3\uACC5\uACC6\uACC7\uACC9\uACCA\uACCB\uACCD\",7,\"\uACD6\uACD8\",7,\"\uACE2\uACE3\uACE5\uACE6\uACE9\uACEB\uACED\uACEE\uACF2\uACF4\uACF7\",4,\"\uACFE\uACFF\uAD01\uAD02\uAD03\uAD05\uAD07\",4,\"\uAD0E\uAD10\uAD12\uAD13\"],[\"8241\",\"\uAD14\uAD15\uAD16\uAD17\uAD19\uAD1A\uAD1B\uAD1D\uAD1E\uAD1F\uAD21\",7,\"\uAD2A\uAD2B\uAD2E\",5],[\"8261\",\"\uAD36\uAD37\uAD39\uAD3A\uAD3B\uAD3D\",6,\"\uAD46\uAD48\uAD4A\",5,\"\uAD51\uAD52\uAD53\uAD55\uAD56\uAD57\"],[\"8281\",\"\uAD59\",7,\"\uAD62\uAD64\",7,\"\uAD6E\uAD6F\uAD71\uAD72\uAD77\uAD78\uAD79\uAD7A\uAD7E\uAD80\uAD83\",4,\"\uAD8A\uAD8B\uAD8D\uAD8E\uAD8F\uAD91\",10,\"\uAD9E\",5,\"\uADA5\",17,\"\uADB8\",7,\"\uADC2\uADC3\uADC5\uADC6\uADC7\uADC9\",6,\"\uADD2\uADD4\",7,\"\uADDD\uADDE\uADDF\uADE1\uADE2\uADE3\uADE5\",18],[\"8341\",\"\uADFA\uADFB\uADFD\uADFE\uAE02\",5,\"\uAE0A\uAE0C\uAE0E\",5,\"\uAE15\",7],[\"8361\",\"\uAE1D\",18,\"\uAE32\uAE33\uAE35\uAE36\uAE39\uAE3B\uAE3C\"],[\"8381\",\"\uAE3D\uAE3E\uAE3F\uAE42\uAE44\uAE47\uAE48\uAE49\uAE4B\uAE4F\uAE51\uAE52\uAE53\uAE55\uAE57\",4,\"\uAE5E\uAE62\uAE63\uAE64\uAE66\uAE67\uAE6A\uAE6B\uAE6D\uAE6E\uAE6F\uAE71\",6,\"\uAE7A\uAE7E\",5,\"\uAE86\",5,\"\uAE8D\",46,\"\uAEBF\uAEC1\uAEC2\uAEC3\uAEC5\",6,\"\uAECE\uAED2\",5,\"\uAEDA\uAEDB\uAEDD\",8],[\"8441\",\"\uAEE6\uAEE7\uAEE9\uAEEA\uAEEC\uAEEE\",5,\"\uAEF5\uAEF6\uAEF7\uAEF9\uAEFA\uAEFB\uAEFD\",8],[\"8461\",\"\uAF06\uAF09\uAF0A\uAF0B\uAF0C\uAF0E\uAF0F\uAF11\",18],[\"8481\",\"\uAF24\",7,\"\uAF2E\uAF2F\uAF31\uAF33\uAF35\",6,\"\uAF3E\uAF40\uAF44\uAF45\uAF46\uAF47\uAF4A\",5,\"\uAF51\",10,\"\uAF5E\",5,\"\uAF66\",18,\"\uAF7A\",5,\"\uAF81\uAF82\uAF83\uAF85\uAF86\uAF87\uAF89\",6,\"\uAF92\uAF93\uAF94\uAF96\",5,\"\uAF9D\",26,\"\uAFBA\uAFBB\uAFBD\uAFBE\"],[\"8541\",\"\uAFBF\uAFC1\",5,\"\uAFCA\uAFCC\uAFCF\",4,\"\uAFD5\",6,\"\uAFDD\",4],[\"8561\",\"\uAFE2\",5,\"\uAFEA\",5,\"\uAFF2\uAFF3\uAFF5\uAFF6\uAFF7\uAFF9\",6,\"\uB002\uB003\"],[\"8581\",\"\uB005\",6,\"\uB00D\uB00E\uB00F\uB011\uB012\uB013\uB015\",6,\"\uB01E\",9,\"\uB029\",26,\"\uB046\uB047\uB049\uB04B\uB04D\uB04F\uB050\uB051\uB052\uB056\uB058\uB05A\uB05B\uB05C\uB05E\",29,\"\uB07E\uB07F\uB081\uB082\uB083\uB085\",6,\"\uB08E\uB090\uB092\",5,\"\uB09B\uB09D\uB09E\uB0A3\uB0A4\"],[\"8641\",\"\uB0A5\uB0A6\uB0A7\uB0AA\uB0B0\uB0B2\uB0B6\uB0B7\uB0B9\uB0BA\uB0BB\uB0BD\",6,\"\uB0C6\uB0CA\",5,\"\uB0D2\"],[\"8661\",\"\uB0D3\uB0D5\uB0D6\uB0D7\uB0D9\",6,\"\uB0E1\uB0E2\uB0E3\uB0E4\uB0E6\",10],[\"8681\",\"\uB0F1\",22,\"\uB10A\uB10D\uB10E\uB10F\uB111\uB114\uB115\uB116\uB117\uB11A\uB11E\",4,\"\uB126\uB127\uB129\uB12A\uB12B\uB12D\",6,\"\uB136\uB13A\",5,\"\uB142\uB143\uB145\uB146\uB147\uB149\",6,\"\uB152\uB153\uB156\uB157\uB159\uB15A\uB15B\uB15D\uB15E\uB15F\uB161\",22,\"\uB17A\uB17B\uB17D\uB17E\uB17F\uB181\uB183\",4,\"\uB18A\uB18C\uB18E\uB18F\uB190\uB191\uB195\uB196\uB197\uB199\uB19A\uB19B\uB19D\"],[\"8741\",\"\uB19E\",9,\"\uB1A9\",15],[\"8761\",\"\uB1B9\",18,\"\uB1CD\uB1CE\uB1CF\uB1D1\uB1D2\uB1D3\uB1D5\"],[\"8781\",\"\uB1D6\",5,\"\uB1DE\uB1E0\",7,\"\uB1EA\uB1EB\uB1ED\uB1EE\uB1EF\uB1F1\",7,\"\uB1FA\uB1FC\uB1FE\",5,\"\uB206\uB207\uB209\uB20A\uB20D\",6,\"\uB216\uB218\uB21A\",5,\"\uB221\",18,\"\uB235\",6,\"\uB23D\",26,\"\uB259\uB25A\uB25B\uB25D\uB25E\uB25F\uB261\",6,\"\uB26A\",4],[\"8841\",\"\uB26F\",4,\"\uB276\",5,\"\uB27D\",6,\"\uB286\uB287\uB288\uB28A\",4],[\"8861\",\"\uB28F\uB292\uB293\uB295\uB296\uB297\uB29B\",4,\"\uB2A2\uB2A4\uB2A7\uB2A8\uB2A9\uB2AB\uB2AD\uB2AE\uB2AF\uB2B1\uB2B2\uB2B3\uB2B5\uB2B6\uB2B7\"],[\"8881\",\"\uB2B8\",15,\"\uB2CA\uB2CB\uB2CD\uB2CE\uB2CF\uB2D1\uB2D3\",4,\"\uB2DA\uB2DC\uB2DE\uB2DF\uB2E0\uB2E1\uB2E3\uB2E7\uB2E9\uB2EA\uB2F0\uB2F1\uB2F2\uB2F6\uB2FC\uB2FD\uB2FE\uB302\uB303\uB305\uB306\uB307\uB309\",6,\"\uB312\uB316\",5,\"\uB31D\",54,\"\uB357\uB359\uB35A\uB35D\uB360\uB361\uB362\uB363\"],[\"8941\",\"\uB366\uB368\uB36A\uB36C\uB36D\uB36F\uB372\uB373\uB375\uB376\uB377\uB379\",6,\"\uB382\uB386\",5,\"\uB38D\"],[\"8961\",\"\uB38E\uB38F\uB391\uB392\uB393\uB395\",10,\"\uB3A2\",5,\"\uB3A9\uB3AA\uB3AB\uB3AD\"],[\"8981\",\"\uB3AE\",21,\"\uB3C6\uB3C7\uB3C9\uB3CA\uB3CD\uB3CF\uB3D1\uB3D2\uB3D3\uB3D6\uB3D8\uB3DA\uB3DC\uB3DE\uB3DF\uB3E1\uB3E2\uB3E3\uB3E5\uB3E6\uB3E7\uB3E9\",18,\"\uB3FD\",18,\"\uB411\",6,\"\uB419\uB41A\uB41B\uB41D\uB41E\uB41F\uB421\",6,\"\uB42A\uB42C\",7,\"\uB435\",15],[\"8a41\",\"\uB445\",10,\"\uB452\uB453\uB455\uB456\uB457\uB459\",6,\"\uB462\uB464\uB466\"],[\"8a61\",\"\uB467\",4,\"\uB46D\",18,\"\uB481\uB482\"],[\"8a81\",\"\uB483\",4,\"\uB489\",19,\"\uB49E\",5,\"\uB4A5\uB4A6\uB4A7\uB4A9\uB4AA\uB4AB\uB4AD\",7,\"\uB4B6\uB4B8\uB4BA\",5,\"\uB4C1\uB4C2\uB4C3\uB4C5\uB4C6\uB4C7\uB4C9\",6,\"\uB4D1\uB4D2\uB4D3\uB4D4\uB4D6\",5,\"\uB4DE\uB4DF\uB4E1\uB4E2\uB4E5\uB4E7\",4,\"\uB4EE\uB4F0\uB4F2\",5,\"\uB4F9\",26,\"\uB516\uB517\uB519\uB51A\uB51D\"],[\"8b41\",\"\uB51E\",5,\"\uB526\uB52B\",4,\"\uB532\uB533\uB535\uB536\uB537\uB539\",6,\"\uB542\uB546\"],[\"8b61\",\"\uB547\uB548\uB549\uB54A\uB54E\uB54F\uB551\uB552\uB553\uB555\",6,\"\uB55E\uB562\",8],[\"8b81\",\"\uB56B\",52,\"\uB5A2\uB5A3\uB5A5\uB5A6\uB5A7\uB5A9\uB5AC\uB5AD\uB5AE\uB5AF\uB5B2\uB5B6\",4,\"\uB5BE\uB5BF\uB5C1\uB5C2\uB5C3\uB5C5\",6,\"\uB5CE\uB5D2\",5,\"\uB5D9\",18,\"\uB5ED\",18],[\"8c41\",\"\uB600\",15,\"\uB612\uB613\uB615\uB616\uB617\uB619\",4],[\"8c61\",\"\uB61E\",6,\"\uB626\",5,\"\uB62D\",6,\"\uB635\",5],[\"8c81\",\"\uB63B\",12,\"\uB649\",26,\"\uB665\uB666\uB667\uB669\",50,\"\uB69E\uB69F\uB6A1\uB6A2\uB6A3\uB6A5\",5,\"\uB6AD\uB6AE\uB6AF\uB6B0\uB6B2\",16],[\"8d41\",\"\uB6C3\",16,\"\uB6D5\",8],[\"8d61\",\"\uB6DE\",17,\"\uB6F1\uB6F2\uB6F3\uB6F5\uB6F6\uB6F7\uB6F9\uB6FA\"],[\"8d81\",\"\uB6FB\",4,\"\uB702\uB703\uB704\uB706\",33,\"\uB72A\uB72B\uB72D\uB72E\uB731\",6,\"\uB73A\uB73C\",7,\"\uB745\uB746\uB747\uB749\uB74A\uB74B\uB74D\",6,\"\uB756\",9,\"\uB761\uB762\uB763\uB765\uB766\uB767\uB769\",6,\"\uB772\uB774\uB776\",5,\"\uB77E\uB77F\uB781\uB782\uB783\uB785\",6,\"\uB78E\uB793\uB794\uB795\uB79A\uB79B\uB79D\uB79E\"],[\"8e41\",\"\uB79F\uB7A1\",6,\"\uB7AA\uB7AE\",5,\"\uB7B6\uB7B7\uB7B9\",8],[\"8e61\",\"\uB7C2\",4,\"\uB7C8\uB7CA\",19],[\"8e81\",\"\uB7DE\",13,\"\uB7EE\uB7EF\uB7F1\uB7F2\uB7F3\uB7F5\",6,\"\uB7FE\uB802\",4,\"\uB80A\uB80B\uB80D\uB80E\uB80F\uB811\",6,\"\uB81A\uB81C\uB81E\",5,\"\uB826\uB827\uB829\uB82A\uB82B\uB82D\",6,\"\uB836\uB83A\",5,\"\uB841\uB842\uB843\uB845\",11,\"\uB852\uB854\",7,\"\uB85E\uB85F\uB861\uB862\uB863\uB865\",6,\"\uB86E\uB870\uB872\",5,\"\uB879\uB87A\uB87B\uB87D\",7],[\"8f41\",\"\uB885\",7,\"\uB88E\",17],[\"8f61\",\"\uB8A0\",7,\"\uB8A9\",6,\"\uB8B1\uB8B2\uB8B3\uB8B5\uB8B6\uB8B7\uB8B9\",4],[\"8f81\",\"\uB8BE\uB8BF\uB8C2\uB8C4\uB8C6\",5,\"\uB8CD\uB8CE\uB8CF\uB8D1\uB8D2\uB8D3\uB8D5\",7,\"\uB8DE\uB8E0\uB8E2\",5,\"\uB8EA\uB8EB\uB8ED\uB8EE\uB8EF\uB8F1\",6,\"\uB8FA\uB8FC\uB8FE\",5,\"\uB905\",18,\"\uB919\",6,\"\uB921\",26,\"\uB93E\uB93F\uB941\uB942\uB943\uB945\",6,\"\uB94D\uB94E\uB950\uB952\",5],[\"9041\",\"\uB95A\uB95B\uB95D\uB95E\uB95F\uB961\",6,\"\uB96A\uB96C\uB96E\",5,\"\uB976\uB977\uB979\uB97A\uB97B\uB97D\"],[\"9061\",\"\uB97E\",5,\"\uB986\uB988\uB98B\uB98C\uB98F\",15],[\"9081\",\"\uB99F\",12,\"\uB9AE\uB9AF\uB9B1\uB9B2\uB9B3\uB9B5\",6,\"\uB9BE\uB9C0\uB9C2\",5,\"\uB9CA\uB9CB\uB9CD\uB9D3\",4,\"\uB9DA\uB9DC\uB9DF\uB9E0\uB9E2\uB9E6\uB9E7\uB9E9\uB9EA\uB9EB\uB9ED\",6,\"\uB9F6\uB9FB\",4,\"\uBA02\",5,\"\uBA09\",11,\"\uBA16\",33,\"\uBA3A\uBA3B\uBA3D\uBA3E\uBA3F\uBA41\uBA43\uBA44\uBA45\uBA46\"],[\"9141\",\"\uBA47\uBA4A\uBA4C\uBA4F\uBA50\uBA51\uBA52\uBA56\uBA57\uBA59\uBA5A\uBA5B\uBA5D\",6,\"\uBA66\uBA6A\",5],[\"9161\",\"\uBA72\uBA73\uBA75\uBA76\uBA77\uBA79\",9,\"\uBA86\uBA88\uBA89\uBA8A\uBA8B\uBA8D\",5],[\"9181\",\"\uBA93\",20,\"\uBAAA\uBAAD\uBAAE\uBAAF\uBAB1\uBAB3\",4,\"\uBABA\uBABC\uBABE\",5,\"\uBAC5\uBAC6\uBAC7\uBAC9\",14,\"\uBADA\",33,\"\uBAFD\uBAFE\uBAFF\uBB01\uBB02\uBB03\uBB05\",7,\"\uBB0E\uBB10\uBB12\",5,\"\uBB19\uBB1A\uBB1B\uBB1D\uBB1E\uBB1F\uBB21\",6],[\"9241\",\"\uBB28\uBB2A\uBB2C\",7,\"\uBB37\uBB39\uBB3A\uBB3F\",4,\"\uBB46\uBB48\uBB4A\uBB4B\uBB4C\uBB4E\uBB51\uBB52\"],[\"9261\",\"\uBB53\uBB55\uBB56\uBB57\uBB59\",7,\"\uBB62\uBB64\",7,\"\uBB6D\",4],[\"9281\",\"\uBB72\",21,\"\uBB89\uBB8A\uBB8B\uBB8D\uBB8E\uBB8F\uBB91\",18,\"\uBBA5\uBBA6\uBBA7\uBBA9\uBBAA\uBBAB\uBBAD\",6,\"\uBBB5\uBBB6\uBBB8\",7,\"\uBBC1\uBBC2\uBBC3\uBBC5\uBBC6\uBBC7\uBBC9\",6,\"\uBBD1\uBBD2\uBBD4\",35,\"\uBBFA\uBBFB\uBBFD\uBBFE\uBC01\"],[\"9341\",\"\uBC03\",4,\"\uBC0A\uBC0E\uBC10\uBC12\uBC13\uBC19\uBC1A\uBC20\uBC21\uBC22\uBC23\uBC26\uBC28\uBC2A\uBC2B\uBC2C\uBC2E\uBC2F\uBC32\uBC33\uBC35\"],[\"9361\",\"\uBC36\uBC37\uBC39\",6,\"\uBC42\uBC46\uBC47\uBC48\uBC4A\uBC4B\uBC4E\uBC4F\uBC51\",8],[\"9381\",\"\uBC5A\uBC5B\uBC5C\uBC5E\",37,\"\uBC86\uBC87\uBC89\uBC8A\uBC8D\uBC8F\",4,\"\uBC96\uBC98\uBC9B\",4,\"\uBCA2\uBCA3\uBCA5\uBCA6\uBCA9\",6,\"\uBCB2\uBCB6\",5,\"\uBCBE\uBCBF\uBCC1\uBCC2\uBCC3\uBCC5\",7,\"\uBCCE\uBCD2\uBCD3\uBCD4\uBCD6\uBCD7\uBCD9\uBCDA\uBCDB\uBCDD\",22,\"\uBCF7\uBCF9\uBCFA\uBCFB\uBCFD\"],[\"9441\",\"\uBCFE\",5,\"\uBD06\uBD08\uBD0A\",5,\"\uBD11\uBD12\uBD13\uBD15\",8],[\"9461\",\"\uBD1E\",5,\"\uBD25\",6,\"\uBD2D\",12],[\"9481\",\"\uBD3A\",5,\"\uBD41\",6,\"\uBD4A\uBD4B\uBD4D\uBD4E\uBD4F\uBD51\",6,\"\uBD5A\",9,\"\uBD65\uBD66\uBD67\uBD69\",22,\"\uBD82\uBD83\uBD85\uBD86\uBD8B\",4,\"\uBD92\uBD94\uBD96\uBD97\uBD98\uBD9B\uBD9D\",6,\"\uBDA5\",10,\"\uBDB1\",6,\"\uBDB9\",24],[\"9541\",\"\uBDD2\uBDD3\uBDD6\uBDD7\uBDD9\uBDDA\uBDDB\uBDDD\",11,\"\uBDEA\",5,\"\uBDF1\"],[\"9561\",\"\uBDF2\uBDF3\uBDF5\uBDF6\uBDF7\uBDF9\",6,\"\uBE01\uBE02\uBE04\uBE06\",5,\"\uBE0E\uBE0F\uBE11\uBE12\uBE13\"],[\"9581\",\"\uBE15\",6,\"\uBE1E\uBE20\",35,\"\uBE46\uBE47\uBE49\uBE4A\uBE4B\uBE4D\uBE4F\",4,\"\uBE56\uBE58\uBE5C\uBE5D\uBE5E\uBE5F\uBE62\uBE63\uBE65\uBE66\uBE67\uBE69\uBE6B\",4,\"\uBE72\uBE76\",4,\"\uBE7E\uBE7F\uBE81\uBE82\uBE83\uBE85\",6,\"\uBE8E\uBE92\",5,\"\uBE9A\",13,\"\uBEA9\",14],[\"9641\",\"\uBEB8\",23,\"\uBED2\uBED3\"],[\"9661\",\"\uBED5\uBED6\uBED9\",6,\"\uBEE1\uBEE2\uBEE6\",5,\"\uBEED\",8],[\"9681\",\"\uBEF6\",10,\"\uBF02\",5,\"\uBF0A\",13,\"\uBF1A\uBF1E\",33,\"\uBF42\uBF43\uBF45\uBF46\uBF47\uBF49\",6,\"\uBF52\uBF53\uBF54\uBF56\",44],[\"9741\",\"\uBF83\",16,\"\uBF95\",8],[\"9761\",\"\uBF9E\",17,\"\uBFB1\",7],[\"9781\",\"\uBFB9\",11,\"\uBFC6\",5,\"\uBFCE\uBFCF\uBFD1\uBFD2\uBFD3\uBFD5\",6,\"\uBFDD\uBFDE\uBFE0\uBFE2\",89,\"\uC03D\uC03E\uC03F\"],[\"9841\",\"\uC040\",16,\"\uC052\",5,\"\uC059\uC05A\uC05B\"],[\"9861\",\"\uC05D\uC05E\uC05F\uC061\",6,\"\uC06A\",15],[\"9881\",\"\uC07A\",21,\"\uC092\uC093\uC095\uC096\uC097\uC099\",6,\"\uC0A2\uC0A4\uC0A6\",5,\"\uC0AE\uC0B1\uC0B2\uC0B7\",4,\"\uC0BE\uC0C2\uC0C3\uC0C4\uC0C6\uC0C7\uC0CA\uC0CB\uC0CD\uC0CE\uC0CF\uC0D1\",6,\"\uC0DA\uC0DE\",5,\"\uC0E6\uC0E7\uC0E9\uC0EA\uC0EB\uC0ED\",6,\"\uC0F6\uC0F8\uC0FA\",5,\"\uC101\uC102\uC103\uC105\uC106\uC107\uC109\",6,\"\uC111\uC112\uC113\uC114\uC116\",5,\"\uC121\uC122\uC125\uC128\uC129\uC12A\uC12B\uC12E\"],[\"9941\",\"\uC132\uC133\uC134\uC135\uC137\uC13A\uC13B\uC13D\uC13E\uC13F\uC141\",6,\"\uC14A\uC14E\",5,\"\uC156\uC157\"],[\"9961\",\"\uC159\uC15A\uC15B\uC15D\",6,\"\uC166\uC16A\",5,\"\uC171\uC172\uC173\uC175\uC176\uC177\uC179\uC17A\uC17B\"],[\"9981\",\"\uC17C\",8,\"\uC186\",5,\"\uC18F\uC191\uC192\uC193\uC195\uC197\",4,\"\uC19E\uC1A0\uC1A2\uC1A3\uC1A4\uC1A6\uC1A7\uC1AA\uC1AB\uC1AD\uC1AE\uC1AF\uC1B1\",11,\"\uC1BE\",5,\"\uC1C5\uC1C6\uC1C7\uC1C9\uC1CA\uC1CB\uC1CD\",6,\"\uC1D5\uC1D6\uC1D9\",6,\"\uC1E1\uC1E2\uC1E3\uC1E5\uC1E6\uC1E7\uC1E9\",6,\"\uC1F2\uC1F4\",7,\"\uC1FE\uC1FF\uC201\uC202\uC203\uC205\",6,\"\uC20E\uC210\uC212\",5,\"\uC21A\uC21B\uC21D\uC21E\uC221\uC222\uC223\"],[\"9a41\",\"\uC224\uC225\uC226\uC227\uC22A\uC22C\uC22E\uC230\uC233\uC235\",16],[\"9a61\",\"\uC246\uC247\uC249\",6,\"\uC252\uC253\uC255\uC256\uC257\uC259\",6,\"\uC261\uC262\uC263\uC264\uC266\"],[\"9a81\",\"\uC267\",4,\"\uC26E\uC26F\uC271\uC272\uC273\uC275\",6,\"\uC27E\uC280\uC282\",5,\"\uC28A\",5,\"\uC291\",6,\"\uC299\uC29A\uC29C\uC29E\",5,\"\uC2A6\uC2A7\uC2A9\uC2AA\uC2AB\uC2AE\",5,\"\uC2B6\uC2B8\uC2BA\",33,\"\uC2DE\uC2DF\uC2E1\uC2E2\uC2E5\",5,\"\uC2EE\uC2F0\uC2F2\uC2F3\uC2F4\uC2F5\uC2F7\uC2FA\uC2FD\uC2FE\uC2FF\uC301\",6,\"\uC30A\uC30B\uC30E\uC30F\"],[\"9b41\",\"\uC310\uC311\uC312\uC316\uC317\uC319\uC31A\uC31B\uC31D\",6,\"\uC326\uC327\uC32A\",8],[\"9b61\",\"\uC333\",17,\"\uC346\",7],[\"9b81\",\"\uC34E\",25,\"\uC36A\uC36B\uC36D\uC36E\uC36F\uC371\uC373\",4,\"\uC37A\uC37B\uC37E\",5,\"\uC385\uC386\uC387\uC389\uC38A\uC38B\uC38D\",50,\"\uC3C1\",22,\"\uC3DA\"],[\"9c41\",\"\uC3DB\uC3DD\uC3DE\uC3E1\uC3E3\",4,\"\uC3EA\uC3EB\uC3EC\uC3EE\",5,\"\uC3F6\uC3F7\uC3F9\",5],[\"9c61\",\"\uC3FF\",8,\"\uC409\",6,\"\uC411\",9],[\"9c81\",\"\uC41B\",8,\"\uC425\",6,\"\uC42D\uC42E\uC42F\uC431\uC432\uC433\uC435\",6,\"\uC43E\",9,\"\uC449\",26,\"\uC466\uC467\uC469\uC46A\uC46B\uC46D\",6,\"\uC476\uC477\uC478\uC47A\",5,\"\uC481\",18,\"\uC495\",6,\"\uC49D\",12],[\"9d41\",\"\uC4AA\",13,\"\uC4B9\uC4BA\uC4BB\uC4BD\",8],[\"9d61\",\"\uC4C6\",25],[\"9d81\",\"\uC4E0\",8,\"\uC4EA\",5,\"\uC4F2\uC4F3\uC4F5\uC4F6\uC4F7\uC4F9\uC4FB\uC4FC\uC4FD\uC4FE\uC502\",9,\"\uC50D\uC50E\uC50F\uC511\uC512\uC513\uC515\",6,\"\uC51D\",10,\"\uC52A\uC52B\uC52D\uC52E\uC52F\uC531\",6,\"\uC53A\uC53C\uC53E\",5,\"\uC546\uC547\uC54B\uC54F\uC550\uC551\uC552\uC556\uC55A\uC55B\uC55C\uC55F\uC562\uC563\uC565\uC566\uC567\uC569\",6,\"\uC572\uC576\",5,\"\uC57E\uC57F\uC581\uC582\uC583\uC585\uC586\uC588\uC589\uC58A\uC58B\uC58E\uC590\uC592\uC593\uC594\"],[\"9e41\",\"\uC596\uC599\uC59A\uC59B\uC59D\uC59E\uC59F\uC5A1\",7,\"\uC5AA\",9,\"\uC5B6\"],[\"9e61\",\"\uC5B7\uC5BA\uC5BF\",4,\"\uC5CB\uC5CD\uC5CF\uC5D2\uC5D3\uC5D5\uC5D6\uC5D7\uC5D9\",6,\"\uC5E2\uC5E4\uC5E6\uC5E7\"],[\"9e81\",\"\uC5E8\uC5E9\uC5EA\uC5EB\uC5EF\uC5F1\uC5F2\uC5F3\uC5F5\uC5F8\uC5F9\uC5FA\uC5FB\uC602\uC603\uC604\uC609\uC60A\uC60B\uC60D\uC60E\uC60F\uC611\",6,\"\uC61A\uC61D\",6,\"\uC626\uC627\uC629\uC62A\uC62B\uC62F\uC631\uC632\uC636\uC638\uC63A\uC63C\uC63D\uC63E\uC63F\uC642\uC643\uC645\uC646\uC647\uC649\",6,\"\uC652\uC656\",5,\"\uC65E\uC65F\uC661\",10,\"\uC66D\uC66E\uC670\uC672\",5,\"\uC67A\uC67B\uC67D\uC67E\uC67F\uC681\",6,\"\uC68A\uC68C\uC68E\",5,\"\uC696\uC697\uC699\uC69A\uC69B\uC69D\",6,\"\uC6A6\"],[\"9f41\",\"\uC6A8\uC6AA\",5,\"\uC6B2\uC6B3\uC6B5\uC6B6\uC6B7\uC6BB\",4,\"\uC6C2\uC6C4\uC6C6\",5,\"\uC6CE\"],[\"9f61\",\"\uC6CF\uC6D1\uC6D2\uC6D3\uC6D5\",6,\"\uC6DE\uC6DF\uC6E2\",5,\"\uC6EA\uC6EB\uC6ED\uC6EE\uC6EF\uC6F1\uC6F2\"],[\"9f81\",\"\uC6F3\",4,\"\uC6FA\uC6FB\uC6FC\uC6FE\",5,\"\uC706\uC707\uC709\uC70A\uC70B\uC70D\",6,\"\uC716\uC718\uC71A\",5,\"\uC722\uC723\uC725\uC726\uC727\uC729\",6,\"\uC732\uC734\uC736\uC738\uC739\uC73A\uC73B\uC73E\uC73F\uC741\uC742\uC743\uC745\",4,\"\uC74B\uC74E\uC750\uC759\uC75A\uC75B\uC75D\uC75E\uC75F\uC761\",6,\"\uC769\uC76A\uC76C\",7,\"\uC776\uC777\uC779\uC77A\uC77B\uC77F\uC780\uC781\uC782\uC786\uC78B\uC78C\uC78D\uC78F\uC792\uC793\uC795\uC799\uC79B\",4,\"\uC7A2\uC7A7\",4,\"\uC7AE\uC7AF\uC7B1\uC7B2\uC7B3\uC7B5\uC7B6\uC7B7\"],[\"a041\",\"\uC7B8\uC7B9\uC7BA\uC7BB\uC7BE\uC7C2\",5,\"\uC7CA\uC7CB\uC7CD\uC7CF\uC7D1\",6,\"\uC7D9\uC7DA\uC7DB\uC7DC\"],[\"a061\",\"\uC7DE\",5,\"\uC7E5\uC7E6\uC7E7\uC7E9\uC7EA\uC7EB\uC7ED\",13],[\"a081\",\"\uC7FB\",4,\"\uC802\uC803\uC805\uC806\uC807\uC809\uC80B\",4,\"\uC812\uC814\uC817\",4,\"\uC81E\uC81F\uC821\uC822\uC823\uC825\",6,\"\uC82E\uC830\uC832\",5,\"\uC839\uC83A\uC83B\uC83D\uC83E\uC83F\uC841\",6,\"\uC84A\uC84B\uC84E\",5,\"\uC855\",26,\"\uC872\uC873\uC875\uC876\uC877\uC879\uC87B\",4,\"\uC882\uC884\uC888\uC889\uC88A\uC88E\",5,\"\uC895\",7,\"\uC89E\uC8A0\uC8A2\uC8A3\uC8A4\"],[\"a141\",\"\uC8A5\uC8A6\uC8A7\uC8A9\",18,\"\uC8BE\uC8BF\uC8C0\uC8C1\"],[\"a161\",\"\uC8C2\uC8C3\uC8C5\uC8C6\uC8C7\uC8C9\uC8CA\uC8CB\uC8CD\",6,\"\uC8D6\uC8D8\uC8DA\",5,\"\uC8E2\uC8E3\uC8E5\"],[\"a181\",\"\uC8E6\",14,\"\uC8F6\",5,\"\uC8FE\uC8FF\uC901\uC902\uC903\uC907\",4,\"\uC90E\u3000\u3001\u3002\xB7\u2025\u2026\xA8\u3003\xAD\u2015\u2225\uFF3C\u223C\u2018\u2019\u201C\u201D\u3014\u3015\u3008\",9,\"\xB1\xD7\xF7\u2260\u2264\u2265\u221E\u2234\xB0\u2032\u2033\u2103\u212B\uFFE0\uFFE1\uFFE5\u2642\u2640\u2220\u22A5\u2312\u2202\u2207\u2261\u2252\xA7\u203B\u2606\u2605\u25CB\u25CF\u25CE\u25C7\u25C6\u25A1\u25A0\u25B3\u25B2\u25BD\u25BC\u2192\u2190\u2191\u2193\u2194\u3013\u226A\u226B\u221A\u223D\u221D\u2235\u222B\u222C\u2208\u220B\u2286\u2287\u2282\u2283\u222A\u2229\u2227\u2228\uFFE2\"],[\"a241\",\"\uC910\uC912\",5,\"\uC919\",18],[\"a261\",\"\uC92D\",6,\"\uC935\",18],[\"a281\",\"\uC948\",7,\"\uC952\uC953\uC955\uC956\uC957\uC959\",6,\"\uC962\uC964\",7,\"\uC96D\uC96E\uC96F\u21D2\u21D4\u2200\u2203\xB4\uFF5E\u02C7\u02D8\u02DD\u02DA\u02D9\xB8\u02DB\xA1\xBF\u02D0\u222E\u2211\u220F\xA4\u2109\u2030\u25C1\u25C0\u25B7\u25B6\u2664\u2660\u2661\u2665\u2667\u2663\u2299\u25C8\u25A3\u25D0\u25D1\u2592\u25A4\u25A5\u25A8\u25A7\u25A6\u25A9\u2668\u260F\u260E\u261C\u261E\xB6\u2020\u2021\u2195\u2197\u2199\u2196\u2198\u266D\u2669\u266A\u266C\u327F\u321C\u2116\u33C7\u2122\u33C2\u33D8\u2121\u20AC\xAE\"],[\"a341\",\"\uC971\uC972\uC973\uC975\",6,\"\uC97D\",10,\"\uC98A\uC98B\uC98D\uC98E\uC98F\"],[\"a361\",\"\uC991\",6,\"\uC99A\uC99C\uC99E\",16],[\"a381\",\"\uC9AF\",16,\"\uC9C2\uC9C3\uC9C5\uC9C6\uC9C9\uC9CB\",4,\"\uC9D2\uC9D4\uC9D7\uC9D8\uC9DB\uFF01\",58,\"\uFFE6\uFF3D\",32,\"\uFFE3\"],[\"a441\",\"\uC9DE\uC9DF\uC9E1\uC9E3\uC9E5\uC9E6\uC9E8\uC9E9\uC9EA\uC9EB\uC9EE\uC9F2\",5,\"\uC9FA\uC9FB\uC9FD\uC9FE\uC9FF\uCA01\uCA02\uCA03\uCA04\"],[\"a461\",\"\uCA05\uCA06\uCA07\uCA0A\uCA0E\",5,\"\uCA15\uCA16\uCA17\uCA19\",12],[\"a481\",\"\uCA26\uCA27\uCA28\uCA2A\",28,\"\u3131\",93],[\"a541\",\"\uCA47\",4,\"\uCA4E\uCA4F\uCA51\uCA52\uCA53\uCA55\",6,\"\uCA5E\uCA62\",5,\"\uCA69\uCA6A\"],[\"a561\",\"\uCA6B\",17,\"\uCA7E\",5,\"\uCA85\uCA86\"],[\"a581\",\"\uCA87\",16,\"\uCA99\",14,\"\u2170\",9],[\"a5b0\",\"\u2160\",9],[\"a5c1\",\"\u0391\",16,\"\u03A3\",6],[\"a5e1\",\"\u03B1\",16,\"\u03C3\",6],[\"a641\",\"\uCAA8\",19,\"\uCABE\uCABF\uCAC1\uCAC2\uCAC3\uCAC5\"],[\"a661\",\"\uCAC6\",5,\"\uCACE\uCAD0\uCAD2\uCAD4\uCAD5\uCAD6\uCAD7\uCADA\",5,\"\uCAE1\",6],[\"a681\",\"\uCAE8\uCAE9\uCAEA\uCAEB\uCAED\",6,\"\uCAF5\",18,\"\uCB09\uCB0A\u2500\u2502\u250C\u2510\u2518\u2514\u251C\u252C\u2524\u2534\u253C\u2501\u2503\u250F\u2513\u251B\u2517\u2523\u2533\u252B\u253B\u254B\u2520\u252F\u2528\u2537\u253F\u251D\u2530\u2525\u2538\u2542\u2512\u2511\u251A\u2519\u2516\u2515\u250E\u250D\u251E\u251F\u2521\u2522\u2526\u2527\u2529\u252A\u252D\u252E\u2531\u2532\u2535\u2536\u2539\u253A\u253D\u253E\u2540\u2541\u2543\",7],[\"a741\",\"\uCB0B\",4,\"\uCB11\uCB12\uCB13\uCB15\uCB16\uCB17\uCB19\",6,\"\uCB22\",7],[\"a761\",\"\uCB2A\",22,\"\uCB42\uCB43\uCB44\"],[\"a781\",\"\uCB45\uCB46\uCB47\uCB4A\uCB4B\uCB4D\uCB4E\uCB4F\uCB51\",6,\"\uCB5A\uCB5B\uCB5C\uCB5E\",5,\"\uCB65\",7,\"\u3395\u3396\u3397\u2113\u3398\u33C4\u33A3\u33A4\u33A5\u33A6\u3399\",9,\"\u33CA\u338D\u338E\u338F\u33CF\u3388\u3389\u33C8\u33A7\u33A8\u33B0\",9,\"\u3380\",4,\"\u33BA\",5,\"\u3390\",4,\"\u2126\u33C0\u33C1\u338A\u338B\u338C\u33D6\u33C5\u33AD\u33AE\u33AF\u33DB\u33A9\u33AA\u33AB\u33AC\u33DD\u33D0\u33D3\u33C3\u33C9\u33DC\u33C6\"],[\"a841\",\"\uCB6D\",10,\"\uCB7A\",14],[\"a861\",\"\uCB89\",18,\"\uCB9D\",6],[\"a881\",\"\uCBA4\",19,\"\uCBB9\",11,\"\xC6\xD0\xAA\u0126\"],[\"a8a6\",\"\u0132\"],[\"a8a8\",\"\u013F\u0141\xD8\u0152\xBA\xDE\u0166\u014A\"],[\"a8b1\",\"\u3260\",27,\"\u24D0\",25,\"\u2460\",14,\"\xBD\u2153\u2154\xBC\xBE\u215B\u215C\u215D\u215E\"],[\"a941\",\"\uCBC5\",14,\"\uCBD5\",10],[\"a961\",\"\uCBE0\uCBE1\uCBE2\uCBE3\uCBE5\uCBE6\uCBE8\uCBEA\",18],[\"a981\",\"\uCBFD\",14,\"\uCC0E\uCC0F\uCC11\uCC12\uCC13\uCC15\",6,\"\uCC1E\uCC1F\uCC20\uCC23\uCC24\xE6\u0111\xF0\u0127\u0131\u0133\u0138\u0140\u0142\xF8\u0153\xDF\xFE\u0167\u014B\u0149\u3200\",27,\"\u249C\",25,\"\u2474\",14,\"\xB9\xB2\xB3\u2074\u207F\u2081\u2082\u2083\u2084\"],[\"aa41\",\"\uCC25\uCC26\uCC2A\uCC2B\uCC2D\uCC2F\uCC31\",6,\"\uCC3A\uCC3F\",4,\"\uCC46\uCC47\uCC49\uCC4A\uCC4B\uCC4D\uCC4E\"],[\"aa61\",\"\uCC4F\",4,\"\uCC56\uCC5A\",5,\"\uCC61\uCC62\uCC63\uCC65\uCC67\uCC69\",6,\"\uCC71\uCC72\"],[\"aa81\",\"\uCC73\uCC74\uCC76\",29,\"\u3041\",82],[\"ab41\",\"\uCC94\uCC95\uCC96\uCC97\uCC9A\uCC9B\uCC9D\uCC9E\uCC9F\uCCA1\",6,\"\uCCAA\uCCAE\",5,\"\uCCB6\uCCB7\uCCB9\"],[\"ab61\",\"\uCCBA\uCCBB\uCCBD\",6,\"\uCCC6\uCCC8\uCCCA\",5,\"\uCCD1\uCCD2\uCCD3\uCCD5\",5],[\"ab81\",\"\uCCDB\",8,\"\uCCE5\",6,\"\uCCED\uCCEE\uCCEF\uCCF1\",12,\"\u30A1\",85],[\"ac41\",\"\uCCFE\uCCFF\uCD00\uCD02\",5,\"\uCD0A\uCD0B\uCD0D\uCD0E\uCD0F\uCD11\",6,\"\uCD1A\uCD1C\uCD1E\uCD1F\uCD20\"],[\"ac61\",\"\uCD21\uCD22\uCD23\uCD25\uCD26\uCD27\uCD29\uCD2A\uCD2B\uCD2D\",11,\"\uCD3A\",4],[\"ac81\",\"\uCD3F\",28,\"\uCD5D\uCD5E\uCD5F\u0410\",5,\"\u0401\u0416\",25],[\"acd1\",\"\u0430\",5,\"\u0451\u0436\",25],[\"ad41\",\"\uCD61\uCD62\uCD63\uCD65\",6,\"\uCD6E\uCD70\uCD72\",5,\"\uCD79\",7],[\"ad61\",\"\uCD81\",6,\"\uCD89\",10,\"\uCD96\uCD97\uCD99\uCD9A\uCD9B\uCD9D\uCD9E\uCD9F\"],[\"ad81\",\"\uCDA0\uCDA1\uCDA2\uCDA3\uCDA6\uCDA8\uCDAA\",5,\"\uCDB1\",18,\"\uCDC5\"],[\"ae41\",\"\uCDC6\",5,\"\uCDCD\uCDCE\uCDCF\uCDD1\",16],[\"ae61\",\"\uCDE2\",5,\"\uCDE9\uCDEA\uCDEB\uCDED\uCDEE\uCDEF\uCDF1\",6,\"\uCDFA\uCDFC\uCDFE\",4],[\"ae81\",\"\uCE03\uCE05\uCE06\uCE07\uCE09\uCE0A\uCE0B\uCE0D\",6,\"\uCE15\uCE16\uCE17\uCE18\uCE1A\",5,\"\uCE22\uCE23\uCE25\uCE26\uCE27\uCE29\uCE2A\uCE2B\"],[\"af41\",\"\uCE2C\uCE2D\uCE2E\uCE2F\uCE32\uCE34\uCE36\",19],[\"af61\",\"\uCE4A\",13,\"\uCE5A\uCE5B\uCE5D\uCE5E\uCE62\",5,\"\uCE6A\uCE6C\"],[\"af81\",\"\uCE6E\",5,\"\uCE76\uCE77\uCE79\uCE7A\uCE7B\uCE7D\",6,\"\uCE86\uCE88\uCE8A\",5,\"\uCE92\uCE93\uCE95\uCE96\uCE97\uCE99\"],[\"b041\",\"\uCE9A\",5,\"\uCEA2\uCEA6\",5,\"\uCEAE\",12],[\"b061\",\"\uCEBB\",5,\"\uCEC2\",19],[\"b081\",\"\uCED6\",13,\"\uCEE6\uCEE7\uCEE9\uCEEA\uCEED\",6,\"\uCEF6\uCEFA\",5,\"\uAC00\uAC01\uAC04\uAC07\uAC08\uAC09\uAC0A\uAC10\",7,\"\uAC19\",4,\"\uAC20\uAC24\uAC2C\uAC2D\uAC2F\uAC30\uAC31\uAC38\uAC39\uAC3C\uAC40\uAC4B\uAC4D\uAC54\uAC58\uAC5C\uAC70\uAC71\uAC74\uAC77\uAC78\uAC7A\uAC80\uAC81\uAC83\uAC84\uAC85\uAC86\uAC89\uAC8A\uAC8B\uAC8C\uAC90\uAC94\uAC9C\uAC9D\uAC9F\uACA0\uACA1\uACA8\uACA9\uACAA\uACAC\uACAF\uACB0\uACB8\uACB9\uACBB\uACBC\uACBD\uACC1\uACC4\uACC8\uACCC\uACD5\uACD7\uACE0\uACE1\uACE4\uACE7\uACE8\uACEA\uACEC\uACEF\uACF0\uACF1\uACF3\uACF5\uACF6\uACFC\uACFD\uAD00\uAD04\uAD06\"],[\"b141\",\"\uCF02\uCF03\uCF05\uCF06\uCF07\uCF09\",6,\"\uCF12\uCF14\uCF16\",5,\"\uCF1D\uCF1E\uCF1F\uCF21\uCF22\uCF23\"],[\"b161\",\"\uCF25\",6,\"\uCF2E\uCF32\",5,\"\uCF39\",11],[\"b181\",\"\uCF45\",14,\"\uCF56\uCF57\uCF59\uCF5A\uCF5B\uCF5D\",6,\"\uCF66\uCF68\uCF6A\uCF6B\uCF6C\uAD0C\uAD0D\uAD0F\uAD11\uAD18\uAD1C\uAD20\uAD29\uAD2C\uAD2D\uAD34\uAD35\uAD38\uAD3C\uAD44\uAD45\uAD47\uAD49\uAD50\uAD54\uAD58\uAD61\uAD63\uAD6C\uAD6D\uAD70\uAD73\uAD74\uAD75\uAD76\uAD7B\uAD7C\uAD7D\uAD7F\uAD81\uAD82\uAD88\uAD89\uAD8C\uAD90\uAD9C\uAD9D\uADA4\uADB7\uADC0\uADC1\uADC4\uADC8\uADD0\uADD1\uADD3\uADDC\uADE0\uADE4\uADF8\uADF9\uADFC\uADFF\uAE00\uAE01\uAE08\uAE09\uAE0B\uAE0D\uAE14\uAE30\uAE31\uAE34\uAE37\uAE38\uAE3A\uAE40\uAE41\uAE43\uAE45\uAE46\uAE4A\uAE4C\uAE4D\uAE4E\uAE50\uAE54\uAE56\uAE5C\uAE5D\uAE5F\uAE60\uAE61\uAE65\uAE68\uAE69\uAE6C\uAE70\uAE78\"],[\"b241\",\"\uCF6D\uCF6E\uCF6F\uCF72\uCF73\uCF75\uCF76\uCF77\uCF79\",6,\"\uCF81\uCF82\uCF83\uCF84\uCF86\",5,\"\uCF8D\"],[\"b261\",\"\uCF8E\",18,\"\uCFA2\",5,\"\uCFA9\"],[\"b281\",\"\uCFAA\",5,\"\uCFB1\",18,\"\uCFC5\",6,\"\uAE79\uAE7B\uAE7C\uAE7D\uAE84\uAE85\uAE8C\uAEBC\uAEBD\uAEBE\uAEC0\uAEC4\uAECC\uAECD\uAECF\uAED0\uAED1\uAED8\uAED9\uAEDC\uAEE8\uAEEB\uAEED\uAEF4\uAEF8\uAEFC\uAF07\uAF08\uAF0D\uAF10\uAF2C\uAF2D\uAF30\uAF32\uAF34\uAF3C\uAF3D\uAF3F\uAF41\uAF42\uAF43\uAF48\uAF49\uAF50\uAF5C\uAF5D\uAF64\uAF65\uAF79\uAF80\uAF84\uAF88\uAF90\uAF91\uAF95\uAF9C\uAFB8\uAFB9\uAFBC\uAFC0\uAFC7\uAFC8\uAFC9\uAFCB\uAFCD\uAFCE\uAFD4\uAFDC\uAFE8\uAFE9\uAFF0\uAFF1\uAFF4\uAFF8\uB000\uB001\uB004\uB00C\uB010\uB014\uB01C\uB01D\uB028\uB044\uB045\uB048\uB04A\uB04C\uB04E\uB053\uB054\uB055\uB057\uB059\"],[\"b341\",\"\uCFCC\",19,\"\uCFE2\uCFE3\uCFE5\uCFE6\uCFE7\uCFE9\"],[\"b361\",\"\uCFEA\",5,\"\uCFF2\uCFF4\uCFF6\",5,\"\uCFFD\uCFFE\uCFFF\uD001\uD002\uD003\uD005\",5],[\"b381\",\"\uD00B\",5,\"\uD012\",5,\"\uD019\",19,\"\uB05D\uB07C\uB07D\uB080\uB084\uB08C\uB08D\uB08F\uB091\uB098\uB099\uB09A\uB09C\uB09F\uB0A0\uB0A1\uB0A2\uB0A8\uB0A9\uB0AB\",4,\"\uB0B1\uB0B3\uB0B4\uB0B5\uB0B8\uB0BC\uB0C4\uB0C5\uB0C7\uB0C8\uB0C9\uB0D0\uB0D1\uB0D4\uB0D8\uB0E0\uB0E5\uB108\uB109\uB10B\uB10C\uB110\uB112\uB113\uB118\uB119\uB11B\uB11C\uB11D\uB123\uB124\uB125\uB128\uB12C\uB134\uB135\uB137\uB138\uB139\uB140\uB141\uB144\uB148\uB150\uB151\uB154\uB155\uB158\uB15C\uB160\uB178\uB179\uB17C\uB180\uB182\uB188\uB189\uB18B\uB18D\uB192\uB193\uB194\uB198\uB19C\uB1A8\uB1CC\uB1D0\uB1D4\uB1DC\uB1DD\"],[\"b441\",\"\uD02E\",5,\"\uD036\uD037\uD039\uD03A\uD03B\uD03D\",6,\"\uD046\uD048\uD04A\",5],[\"b461\",\"\uD051\uD052\uD053\uD055\uD056\uD057\uD059\",6,\"\uD061\",10,\"\uD06E\uD06F\"],[\"b481\",\"\uD071\uD072\uD073\uD075\",6,\"\uD07E\uD07F\uD080\uD082\",18,\"\uB1DF\uB1E8\uB1E9\uB1EC\uB1F0\uB1F9\uB1FB\uB1FD\uB204\uB205\uB208\uB20B\uB20C\uB214\uB215\uB217\uB219\uB220\uB234\uB23C\uB258\uB25C\uB260\uB268\uB269\uB274\uB275\uB27C\uB284\uB285\uB289\uB290\uB291\uB294\uB298\uB299\uB29A\uB2A0\uB2A1\uB2A3\uB2A5\uB2A6\uB2AA\uB2AC\uB2B0\uB2B4\uB2C8\uB2C9\uB2CC\uB2D0\uB2D2\uB2D8\uB2D9\uB2DB\uB2DD\uB2E2\uB2E4\uB2E5\uB2E6\uB2E8\uB2EB\",4,\"\uB2F3\uB2F4\uB2F5\uB2F7\",4,\"\uB2FF\uB300\uB301\uB304\uB308\uB310\uB311\uB313\uB314\uB315\uB31C\uB354\uB355\uB356\uB358\uB35B\uB35C\uB35E\uB35F\uB364\uB365\"],[\"b541\",\"\uD095\",14,\"\uD0A6\uD0A7\uD0A9\uD0AA\uD0AB\uD0AD\",5],[\"b561\",\"\uD0B3\uD0B6\uD0B8\uD0BA\",5,\"\uD0C2\uD0C3\uD0C5\uD0C6\uD0C7\uD0CA\",5,\"\uD0D2\uD0D6\",4],[\"b581\",\"\uD0DB\uD0DE\uD0DF\uD0E1\uD0E2\uD0E3\uD0E5\",6,\"\uD0EE\uD0F2\",5,\"\uD0F9\",11,\"\uB367\uB369\uB36B\uB36E\uB370\uB371\uB374\uB378\uB380\uB381\uB383\uB384\uB385\uB38C\uB390\uB394\uB3A0\uB3A1\uB3A8\uB3AC\uB3C4\uB3C5\uB3C8\uB3CB\uB3CC\uB3CE\uB3D0\uB3D4\uB3D5\uB3D7\uB3D9\uB3DB\uB3DD\uB3E0\uB3E4\uB3E8\uB3FC\uB410\uB418\uB41C\uB420\uB428\uB429\uB42B\uB434\uB450\uB451\uB454\uB458\uB460\uB461\uB463\uB465\uB46C\uB480\uB488\uB49D\uB4A4\uB4A8\uB4AC\uB4B5\uB4B7\uB4B9\uB4C0\uB4C4\uB4C8\uB4D0\uB4D5\uB4DC\uB4DD\uB4E0\uB4E3\uB4E4\uB4E6\uB4EC\uB4ED\uB4EF\uB4F1\uB4F8\uB514\uB515\uB518\uB51B\uB51C\uB524\uB525\uB527\uB528\uB529\uB52A\uB530\uB531\uB534\uB538\"],[\"b641\",\"\uD105\",7,\"\uD10E\",17],[\"b661\",\"\uD120\",15,\"\uD132\uD133\uD135\uD136\uD137\uD139\uD13B\uD13C\uD13D\uD13E\"],[\"b681\",\"\uD13F\uD142\uD146\",5,\"\uD14E\uD14F\uD151\uD152\uD153\uD155\",6,\"\uD15E\uD160\uD162\",5,\"\uD169\uD16A\uD16B\uD16D\uB540\uB541\uB543\uB544\uB545\uB54B\uB54C\uB54D\uB550\uB554\uB55C\uB55D\uB55F\uB560\uB561\uB5A0\uB5A1\uB5A4\uB5A8\uB5AA\uB5AB\uB5B0\uB5B1\uB5B3\uB5B4\uB5B5\uB5BB\uB5BC\uB5BD\uB5C0\uB5C4\uB5CC\uB5CD\uB5CF\uB5D0\uB5D1\uB5D8\uB5EC\uB610\uB611\uB614\uB618\uB625\uB62C\uB634\uB648\uB664\uB668\uB69C\uB69D\uB6A0\uB6A4\uB6AB\uB6AC\uB6B1\uB6D4\uB6F0\uB6F4\uB6F8\uB700\uB701\uB705\uB728\uB729\uB72C\uB72F\uB730\uB738\uB739\uB73B\uB744\uB748\uB74C\uB754\uB755\uB760\uB764\uB768\uB770\uB771\uB773\uB775\uB77C\uB77D\uB780\uB784\uB78C\uB78D\uB78F\uB790\uB791\uB792\uB796\uB797\"],[\"b741\",\"\uD16E\",13,\"\uD17D\",6,\"\uD185\uD186\uD187\uD189\uD18A\"],[\"b761\",\"\uD18B\",20,\"\uD1A2\uD1A3\uD1A5\uD1A6\uD1A7\"],[\"b781\",\"\uD1A9\",6,\"\uD1B2\uD1B4\uD1B6\uD1B7\uD1B8\uD1B9\uD1BB\uD1BD\uD1BE\uD1BF\uD1C1\",14,\"\uB798\uB799\uB79C\uB7A0\uB7A8\uB7A9\uB7AB\uB7AC\uB7AD\uB7B4\uB7B5\uB7B8\uB7C7\uB7C9\uB7EC\uB7ED\uB7F0\uB7F4\uB7FC\uB7FD\uB7FF\uB800\uB801\uB807\uB808\uB809\uB80C\uB810\uB818\uB819\uB81B\uB81D\uB824\uB825\uB828\uB82C\uB834\uB835\uB837\uB838\uB839\uB840\uB844\uB851\uB853\uB85C\uB85D\uB860\uB864\uB86C\uB86D\uB86F\uB871\uB878\uB87C\uB88D\uB8A8\uB8B0\uB8B4\uB8B8\uB8C0\uB8C1\uB8C3\uB8C5\uB8CC\uB8D0\uB8D4\uB8DD\uB8DF\uB8E1\uB8E8\uB8E9\uB8EC\uB8F0\uB8F8\uB8F9\uB8FB\uB8FD\uB904\uB918\uB920\uB93C\uB93D\uB940\uB944\uB94C\uB94F\uB951\uB958\uB959\uB95C\uB960\uB968\uB969\"],[\"b841\",\"\uD1D0\",7,\"\uD1D9\",17],[\"b861\",\"\uD1EB\",8,\"\uD1F5\uD1F6\uD1F7\uD1F9\",13],[\"b881\",\"\uD208\uD20A\",5,\"\uD211\",24,\"\uB96B\uB96D\uB974\uB975\uB978\uB97C\uB984\uB985\uB987\uB989\uB98A\uB98D\uB98E\uB9AC\uB9AD\uB9B0\uB9B4\uB9BC\uB9BD\uB9BF\uB9C1\uB9C8\uB9C9\uB9CC\uB9CE\",4,\"\uB9D8\uB9D9\uB9DB\uB9DD\uB9DE\uB9E1\uB9E3\uB9E4\uB9E5\uB9E8\uB9EC\uB9F4\uB9F5\uB9F7\uB9F8\uB9F9\uB9FA\uBA00\uBA01\uBA08\uBA15\uBA38\uBA39\uBA3C\uBA40\uBA42\uBA48\uBA49\uBA4B\uBA4D\uBA4E\uBA53\uBA54\uBA55\uBA58\uBA5C\uBA64\uBA65\uBA67\uBA68\uBA69\uBA70\uBA71\uBA74\uBA78\uBA83\uBA84\uBA85\uBA87\uBA8C\uBAA8\uBAA9\uBAAB\uBAAC\uBAB0\uBAB2\uBAB8\uBAB9\uBABB\uBABD\uBAC4\uBAC8\uBAD8\uBAD9\uBAFC\"],[\"b941\",\"\uD22A\uD22B\uD22E\uD22F\uD231\uD232\uD233\uD235\",6,\"\uD23E\uD240\uD242\",5,\"\uD249\uD24A\uD24B\uD24C\"],[\"b961\",\"\uD24D\",14,\"\uD25D\",6,\"\uD265\uD266\uD267\uD268\"],[\"b981\",\"\uD269\",22,\"\uD282\uD283\uD285\uD286\uD287\uD289\uD28A\uD28B\uD28C\uBB00\uBB04\uBB0D\uBB0F\uBB11\uBB18\uBB1C\uBB20\uBB29\uBB2B\uBB34\uBB35\uBB36\uBB38\uBB3B\uBB3C\uBB3D\uBB3E\uBB44\uBB45\uBB47\uBB49\uBB4D\uBB4F\uBB50\uBB54\uBB58\uBB61\uBB63\uBB6C\uBB88\uBB8C\uBB90\uBBA4\uBBA8\uBBAC\uBBB4\uBBB7\uBBC0\uBBC4\uBBC8\uBBD0\uBBD3\uBBF8\uBBF9\uBBFC\uBBFF\uBC00\uBC02\uBC08\uBC09\uBC0B\uBC0C\uBC0D\uBC0F\uBC11\uBC14\",4,\"\uBC1B\",4,\"\uBC24\uBC25\uBC27\uBC29\uBC2D\uBC30\uBC31\uBC34\uBC38\uBC40\uBC41\uBC43\uBC44\uBC45\uBC49\uBC4C\uBC4D\uBC50\uBC5D\uBC84\uBC85\uBC88\uBC8B\uBC8C\uBC8E\uBC94\uBC95\uBC97\"],[\"ba41\",\"\uD28D\uD28E\uD28F\uD292\uD293\uD294\uD296\",5,\"\uD29D\uD29E\uD29F\uD2A1\uD2A2\uD2A3\uD2A5\",6,\"\uD2AD\"],[\"ba61\",\"\uD2AE\uD2AF\uD2B0\uD2B2\",5,\"\uD2BA\uD2BB\uD2BD\uD2BE\uD2C1\uD2C3\",4,\"\uD2CA\uD2CC\",5],[\"ba81\",\"\uD2D2\uD2D3\uD2D5\uD2D6\uD2D7\uD2D9\uD2DA\uD2DB\uD2DD\",6,\"\uD2E6\",9,\"\uD2F2\uD2F3\uD2F5\uD2F6\uD2F7\uD2F9\uD2FA\uBC99\uBC9A\uBCA0\uBCA1\uBCA4\uBCA7\uBCA8\uBCB0\uBCB1\uBCB3\uBCB4\uBCB5\uBCBC\uBCBD\uBCC0\uBCC4\uBCCD\uBCCF\uBCD0\uBCD1\uBCD5\uBCD8\uBCDC\uBCF4\uBCF5\uBCF6\uBCF8\uBCFC\uBD04\uBD05\uBD07\uBD09\uBD10\uBD14\uBD24\uBD2C\uBD40\uBD48\uBD49\uBD4C\uBD50\uBD58\uBD59\uBD64\uBD68\uBD80\uBD81\uBD84\uBD87\uBD88\uBD89\uBD8A\uBD90\uBD91\uBD93\uBD95\uBD99\uBD9A\uBD9C\uBDA4\uBDB0\uBDB8\uBDD4\uBDD5\uBDD8\uBDDC\uBDE9\uBDF0\uBDF4\uBDF8\uBE00\uBE03\uBE05\uBE0C\uBE0D\uBE10\uBE14\uBE1C\uBE1D\uBE1F\uBE44\uBE45\uBE48\uBE4C\uBE4E\uBE54\uBE55\uBE57\uBE59\uBE5A\uBE5B\uBE60\uBE61\uBE64\"],[\"bb41\",\"\uD2FB\",4,\"\uD302\uD304\uD306\",5,\"\uD30F\uD311\uD312\uD313\uD315\uD317\",4,\"\uD31E\uD322\uD323\"],[\"bb61\",\"\uD324\uD326\uD327\uD32A\uD32B\uD32D\uD32E\uD32F\uD331\",6,\"\uD33A\uD33E\",5,\"\uD346\uD347\uD348\uD349\"],[\"bb81\",\"\uD34A\",31,\"\uBE68\uBE6A\uBE70\uBE71\uBE73\uBE74\uBE75\uBE7B\uBE7C\uBE7D\uBE80\uBE84\uBE8C\uBE8D\uBE8F\uBE90\uBE91\uBE98\uBE99\uBEA8\uBED0\uBED1\uBED4\uBED7\uBED8\uBEE0\uBEE3\uBEE4\uBEE5\uBEEC\uBF01\uBF08\uBF09\uBF18\uBF19\uBF1B\uBF1C\uBF1D\uBF40\uBF41\uBF44\uBF48\uBF50\uBF51\uBF55\uBF94\uBFB0\uBFC5\uBFCC\uBFCD\uBFD0\uBFD4\uBFDC\uBFDF\uBFE1\uC03C\uC051\uC058\uC05C\uC060\uC068\uC069\uC090\uC091\uC094\uC098\uC0A0\uC0A1\uC0A3\uC0A5\uC0AC\uC0AD\uC0AF\uC0B0\uC0B3\uC0B4\uC0B5\uC0B6\uC0BC\uC0BD\uC0BF\uC0C0\uC0C1\uC0C5\uC0C8\uC0C9\uC0CC\uC0D0\uC0D8\uC0D9\uC0DB\uC0DC\uC0DD\uC0E4\"],[\"bc41\",\"\uD36A\",17,\"\uD37E\uD37F\uD381\uD382\uD383\uD385\uD386\uD387\"],[\"bc61\",\"\uD388\uD389\uD38A\uD38B\uD38E\uD392\",5,\"\uD39A\uD39B\uD39D\uD39E\uD39F\uD3A1\",6,\"\uD3AA\uD3AC\uD3AE\"],[\"bc81\",\"\uD3AF\",4,\"\uD3B5\uD3B6\uD3B7\uD3B9\uD3BA\uD3BB\uD3BD\",6,\"\uD3C6\uD3C7\uD3CA\",5,\"\uD3D1\",5,\"\uC0E5\uC0E8\uC0EC\uC0F4\uC0F5\uC0F7\uC0F9\uC100\uC104\uC108\uC110\uC115\uC11C\",4,\"\uC123\uC124\uC126\uC127\uC12C\uC12D\uC12F\uC130\uC131\uC136\uC138\uC139\uC13C\uC140\uC148\uC149\uC14B\uC14C\uC14D\uC154\uC155\uC158\uC15C\uC164\uC165\uC167\uC168\uC169\uC170\uC174\uC178\uC185\uC18C\uC18D\uC18E\uC190\uC194\uC196\uC19C\uC19D\uC19F\uC1A1\uC1A5\uC1A8\uC1A9\uC1AC\uC1B0\uC1BD\uC1C4\uC1C8\uC1CC\uC1D4\uC1D7\uC1D8\uC1E0\uC1E4\uC1E8\uC1F0\uC1F1\uC1F3\uC1FC\uC1FD\uC200\uC204\uC20C\uC20D\uC20F\uC211\uC218\uC219\uC21C\uC21F\uC220\uC228\uC229\uC22B\uC22D\"],[\"bd41\",\"\uD3D7\uD3D9\",7,\"\uD3E2\uD3E4\",7,\"\uD3EE\uD3EF\uD3F1\uD3F2\uD3F3\uD3F5\uD3F6\uD3F7\"],[\"bd61\",\"\uD3F8\uD3F9\uD3FA\uD3FB\uD3FE\uD400\uD402\",5,\"\uD409\",13],[\"bd81\",\"\uD417\",5,\"\uD41E\",25,\"\uC22F\uC231\uC232\uC234\uC248\uC250\uC251\uC254\uC258\uC260\uC265\uC26C\uC26D\uC270\uC274\uC27C\uC27D\uC27F\uC281\uC288\uC289\uC290\uC298\uC29B\uC29D\uC2A4\uC2A5\uC2A8\uC2AC\uC2AD\uC2B4\uC2B5\uC2B7\uC2B9\uC2DC\uC2DD\uC2E0\uC2E3\uC2E4\uC2EB\uC2EC\uC2ED\uC2EF\uC2F1\uC2F6\uC2F8\uC2F9\uC2FB\uC2FC\uC300\uC308\uC309\uC30C\uC30D\uC313\uC314\uC315\uC318\uC31C\uC324\uC325\uC328\uC329\uC345\uC368\uC369\uC36C\uC370\uC372\uC378\uC379\uC37C\uC37D\uC384\uC388\uC38C\uC3C0\uC3D8\uC3D9\uC3DC\uC3DF\uC3E0\uC3E2\uC3E8\uC3E9\uC3ED\uC3F4\uC3F5\uC3F8\uC408\uC410\uC424\uC42C\uC430\"],[\"be41\",\"\uD438\",7,\"\uD441\uD442\uD443\uD445\",14],[\"be61\",\"\uD454\",7,\"\uD45D\uD45E\uD45F\uD461\uD462\uD463\uD465\",7,\"\uD46E\uD470\uD471\uD472\"],[\"be81\",\"\uD473\",4,\"\uD47A\uD47B\uD47D\uD47E\uD481\uD483\",4,\"\uD48A\uD48C\uD48E\",5,\"\uD495\",8,\"\uC434\uC43C\uC43D\uC448\uC464\uC465\uC468\uC46C\uC474\uC475\uC479\uC480\uC494\uC49C\uC4B8\uC4BC\uC4E9\uC4F0\uC4F1\uC4F4\uC4F8\uC4FA\uC4FF\uC500\uC501\uC50C\uC510\uC514\uC51C\uC528\uC529\uC52C\uC530\uC538\uC539\uC53B\uC53D\uC544\uC545\uC548\uC549\uC54A\uC54C\uC54D\uC54E\uC553\uC554\uC555\uC557\uC558\uC559\uC55D\uC55E\uC560\uC561\uC564\uC568\uC570\uC571\uC573\uC574\uC575\uC57C\uC57D\uC580\uC584\uC587\uC58C\uC58D\uC58F\uC591\uC595\uC597\uC598\uC59C\uC5A0\uC5A9\uC5B4\uC5B5\uC5B8\uC5B9\uC5BB\uC5BC\uC5BD\uC5BE\uC5C4\",6,\"\uC5CC\uC5CE\"],[\"bf41\",\"\uD49E\",10,\"\uD4AA\",14],[\"bf61\",\"\uD4B9\",18,\"\uD4CD\uD4CE\uD4CF\uD4D1\uD4D2\uD4D3\uD4D5\"],[\"bf81\",\"\uD4D6\",5,\"\uD4DD\uD4DE\uD4E0\",7,\"\uD4E9\uD4EA\uD4EB\uD4ED\uD4EE\uD4EF\uD4F1\",6,\"\uD4F9\uD4FA\uD4FC\uC5D0\uC5D1\uC5D4\uC5D8\uC5E0\uC5E1\uC5E3\uC5E5\uC5EC\uC5ED\uC5EE\uC5F0\uC5F4\uC5F6\uC5F7\uC5FC\",5,\"\uC605\uC606\uC607\uC608\uC60C\uC610\uC618\uC619\uC61B\uC61C\uC624\uC625\uC628\uC62C\uC62D\uC62E\uC630\uC633\uC634\uC635\uC637\uC639\uC63B\uC640\uC641\uC644\uC648\uC650\uC651\uC653\uC654\uC655\uC65C\uC65D\uC660\uC66C\uC66F\uC671\uC678\uC679\uC67C\uC680\uC688\uC689\uC68B\uC68D\uC694\uC695\uC698\uC69C\uC6A4\uC6A5\uC6A7\uC6A9\uC6B0\uC6B1\uC6B4\uC6B8\uC6B9\uC6BA\uC6C0\uC6C1\uC6C3\uC6C5\uC6CC\uC6CD\uC6D0\uC6D4\uC6DC\uC6DD\uC6E0\uC6E1\uC6E8\"],[\"c041\",\"\uD4FE\",5,\"\uD505\uD506\uD507\uD509\uD50A\uD50B\uD50D\",6,\"\uD516\uD518\",5],[\"c061\",\"\uD51E\",25],[\"c081\",\"\uD538\uD539\uD53A\uD53B\uD53E\uD53F\uD541\uD542\uD543\uD545\",6,\"\uD54E\uD550\uD552\",5,\"\uD55A\uD55B\uD55D\uD55E\uD55F\uD561\uD562\uD563\uC6E9\uC6EC\uC6F0\uC6F8\uC6F9\uC6FD\uC704\uC705\uC708\uC70C\uC714\uC715\uC717\uC719\uC720\uC721\uC724\uC728\uC730\uC731\uC733\uC735\uC737\uC73C\uC73D\uC740\uC744\uC74A\uC74C\uC74D\uC74F\uC751\",7,\"\uC75C\uC760\uC768\uC76B\uC774\uC775\uC778\uC77C\uC77D\uC77E\uC783\uC784\uC785\uC787\uC788\uC789\uC78A\uC78E\uC790\uC791\uC794\uC796\uC797\uC798\uC79A\uC7A0\uC7A1\uC7A3\uC7A4\uC7A5\uC7A6\uC7AC\uC7AD\uC7B0\uC7B4\uC7BC\uC7BD\uC7BF\uC7C0\uC7C1\uC7C8\uC7C9\uC7CC\uC7CE\uC7D0\uC7D8\uC7DD\uC7E4\uC7E8\uC7EC\uC800\uC801\uC804\uC808\uC80A\"],[\"c141\",\"\uD564\uD566\uD567\uD56A\uD56C\uD56E\",5,\"\uD576\uD577\uD579\uD57A\uD57B\uD57D\",6,\"\uD586\uD58A\uD58B\"],[\"c161\",\"\uD58C\uD58D\uD58E\uD58F\uD591\",19,\"\uD5A6\uD5A7\"],[\"c181\",\"\uD5A8\",31,\"\uC810\uC811\uC813\uC815\uC816\uC81C\uC81D\uC820\uC824\uC82C\uC82D\uC82F\uC831\uC838\uC83C\uC840\uC848\uC849\uC84C\uC84D\uC854\uC870\uC871\uC874\uC878\uC87A\uC880\uC881\uC883\uC885\uC886\uC887\uC88B\uC88C\uC88D\uC894\uC89D\uC89F\uC8A1\uC8A8\uC8BC\uC8BD\uC8C4\uC8C8\uC8CC\uC8D4\uC8D5\uC8D7\uC8D9\uC8E0\uC8E1\uC8E4\uC8F5\uC8FC\uC8FD\uC900\uC904\uC905\uC906\uC90C\uC90D\uC90F\uC911\uC918\uC92C\uC934\uC950\uC951\uC954\uC958\uC960\uC961\uC963\uC96C\uC970\uC974\uC97C\uC988\uC989\uC98C\uC990\uC998\uC999\uC99B\uC99D\uC9C0\uC9C1\uC9C4\uC9C7\uC9C8\uC9CA\uC9D0\uC9D1\uC9D3\"],[\"c241\",\"\uD5CA\uD5CB\uD5CD\uD5CE\uD5CF\uD5D1\uD5D3\",4,\"\uD5DA\uD5DC\uD5DE\",5,\"\uD5E6\uD5E7\uD5E9\uD5EA\uD5EB\uD5ED\uD5EE\"],[\"c261\",\"\uD5EF\",4,\"\uD5F6\uD5F8\uD5FA\",5,\"\uD602\uD603\uD605\uD606\uD607\uD609\",6,\"\uD612\"],[\"c281\",\"\uD616\",5,\"\uD61D\uD61E\uD61F\uD621\uD622\uD623\uD625\",7,\"\uD62E\",9,\"\uD63A\uD63B\uC9D5\uC9D6\uC9D9\uC9DA\uC9DC\uC9DD\uC9E0\uC9E2\uC9E4\uC9E7\uC9EC\uC9ED\uC9EF\uC9F0\uC9F1\uC9F8\uC9F9\uC9FC\uCA00\uCA08\uCA09\uCA0B\uCA0C\uCA0D\uCA14\uCA18\uCA29\uCA4C\uCA4D\uCA50\uCA54\uCA5C\uCA5D\uCA5F\uCA60\uCA61\uCA68\uCA7D\uCA84\uCA98\uCABC\uCABD\uCAC0\uCAC4\uCACC\uCACD\uCACF\uCAD1\uCAD3\uCAD8\uCAD9\uCAE0\uCAEC\uCAF4\uCB08\uCB10\uCB14\uCB18\uCB20\uCB21\uCB41\uCB48\uCB49\uCB4C\uCB50\uCB58\uCB59\uCB5D\uCB64\uCB78\uCB79\uCB9C\uCBB8\uCBD4\uCBE4\uCBE7\uCBE9\uCC0C\uCC0D\uCC10\uCC14\uCC1C\uCC1D\uCC21\uCC22\uCC27\uCC28\uCC29\uCC2C\uCC2E\uCC30\uCC38\uCC39\uCC3B\"],[\"c341\",\"\uD63D\uD63E\uD63F\uD641\uD642\uD643\uD644\uD646\uD647\uD64A\uD64C\uD64E\uD64F\uD650\uD652\uD653\uD656\uD657\uD659\uD65A\uD65B\uD65D\",4],[\"c361\",\"\uD662\",4,\"\uD668\uD66A\",5,\"\uD672\uD673\uD675\",11],[\"c381\",\"\uD681\uD682\uD684\uD686\",5,\"\uD68E\uD68F\uD691\uD692\uD693\uD695\",7,\"\uD69E\uD6A0\uD6A2\",5,\"\uD6A9\uD6AA\uCC3C\uCC3D\uCC3E\uCC44\uCC45\uCC48\uCC4C\uCC54\uCC55\uCC57\uCC58\uCC59\uCC60\uCC64\uCC66\uCC68\uCC70\uCC75\uCC98\uCC99\uCC9C\uCCA0\uCCA8\uCCA9\uCCAB\uCCAC\uCCAD\uCCB4\uCCB5\uCCB8\uCCBC\uCCC4\uCCC5\uCCC7\uCCC9\uCCD0\uCCD4\uCCE4\uCCEC\uCCF0\uCD01\uCD08\uCD09\uCD0C\uCD10\uCD18\uCD19\uCD1B\uCD1D\uCD24\uCD28\uCD2C\uCD39\uCD5C\uCD60\uCD64\uCD6C\uCD6D\uCD6F\uCD71\uCD78\uCD88\uCD94\uCD95\uCD98\uCD9C\uCDA4\uCDA5\uCDA7\uCDA9\uCDB0\uCDC4\uCDCC\uCDD0\uCDE8\uCDEC\uCDF0\uCDF8\uCDF9\uCDFB\uCDFD\uCE04\uCE08\uCE0C\uCE14\uCE19\uCE20\uCE21\uCE24\uCE28\uCE30\uCE31\uCE33\uCE35\"],[\"c441\",\"\uD6AB\uD6AD\uD6AE\uD6AF\uD6B1\",7,\"\uD6BA\uD6BC\",7,\"\uD6C6\uD6C7\uD6C9\uD6CA\uD6CB\"],[\"c461\",\"\uD6CD\uD6CE\uD6CF\uD6D0\uD6D2\uD6D3\uD6D5\uD6D6\uD6D8\uD6DA\",5,\"\uD6E1\uD6E2\uD6E3\uD6E5\uD6E6\uD6E7\uD6E9\",4],[\"c481\",\"\uD6EE\uD6EF\uD6F1\uD6F2\uD6F3\uD6F4\uD6F6\",5,\"\uD6FE\uD6FF\uD701\uD702\uD703\uD705\",11,\"\uD712\uD713\uD714\uCE58\uCE59\uCE5C\uCE5F\uCE60\uCE61\uCE68\uCE69\uCE6B\uCE6D\uCE74\uCE75\uCE78\uCE7C\uCE84\uCE85\uCE87\uCE89\uCE90\uCE91\uCE94\uCE98\uCEA0\uCEA1\uCEA3\uCEA4\uCEA5\uCEAC\uCEAD\uCEC1\uCEE4\uCEE5\uCEE8\uCEEB\uCEEC\uCEF4\uCEF5\uCEF7\uCEF8\uCEF9\uCF00\uCF01\uCF04\uCF08\uCF10\uCF11\uCF13\uCF15\uCF1C\uCF20\uCF24\uCF2C\uCF2D\uCF2F\uCF30\uCF31\uCF38\uCF54\uCF55\uCF58\uCF5C\uCF64\uCF65\uCF67\uCF69\uCF70\uCF71\uCF74\uCF78\uCF80\uCF85\uCF8C\uCFA1\uCFA8\uCFB0\uCFC4\uCFE0\uCFE1\uCFE4\uCFE8\uCFF0\uCFF1\uCFF3\uCFF5\uCFFC\uD000\uD004\uD011\uD018\uD02D\uD034\uD035\uD038\uD03C\"],[\"c541\",\"\uD715\uD716\uD717\uD71A\uD71B\uD71D\uD71E\uD71F\uD721\",6,\"\uD72A\uD72C\uD72E\",5,\"\uD736\uD737\uD739\"],[\"c561\",\"\uD73A\uD73B\uD73D\",6,\"\uD745\uD746\uD748\uD74A\",5,\"\uD752\uD753\uD755\uD75A\",4],[\"c581\",\"\uD75F\uD762\uD764\uD766\uD767\uD768\uD76A\uD76B\uD76D\uD76E\uD76F\uD771\uD772\uD773\uD775\",6,\"\uD77E\uD77F\uD780\uD782\",5,\"\uD78A\uD78B\uD044\uD045\uD047\uD049\uD050\uD054\uD058\uD060\uD06C\uD06D\uD070\uD074\uD07C\uD07D\uD081\uD0A4\uD0A5\uD0A8\uD0AC\uD0B4\uD0B5\uD0B7\uD0B9\uD0C0\uD0C1\uD0C4\uD0C8\uD0C9\uD0D0\uD0D1\uD0D3\uD0D4\uD0D5\uD0DC\uD0DD\uD0E0\uD0E4\uD0EC\uD0ED\uD0EF\uD0F0\uD0F1\uD0F8\uD10D\uD130\uD131\uD134\uD138\uD13A\uD140\uD141\uD143\uD144\uD145\uD14C\uD14D\uD150\uD154\uD15C\uD15D\uD15F\uD161\uD168\uD16C\uD17C\uD184\uD188\uD1A0\uD1A1\uD1A4\uD1A8\uD1B0\uD1B1\uD1B3\uD1B5\uD1BA\uD1BC\uD1C0\uD1D8\uD1F4\uD1F8\uD207\uD209\uD210\uD22C\uD22D\uD230\uD234\uD23C\uD23D\uD23F\uD241\uD248\uD25C\"],[\"c641\",\"\uD78D\uD78E\uD78F\uD791\",6,\"\uD79A\uD79C\uD79E\",5],[\"c6a1\",\"\uD264\uD280\uD281\uD284\uD288\uD290\uD291\uD295\uD29C\uD2A0\uD2A4\uD2AC\uD2B1\uD2B8\uD2B9\uD2BC\uD2BF\uD2C0\uD2C2\uD2C8\uD2C9\uD2CB\uD2D4\uD2D8\uD2DC\uD2E4\uD2E5\uD2F0\uD2F1\uD2F4\uD2F8\uD300\uD301\uD303\uD305\uD30C\uD30D\uD30E\uD310\uD314\uD316\uD31C\uD31D\uD31F\uD320\uD321\uD325\uD328\uD329\uD32C\uD330\uD338\uD339\uD33B\uD33C\uD33D\uD344\uD345\uD37C\uD37D\uD380\uD384\uD38C\uD38D\uD38F\uD390\uD391\uD398\uD399\uD39C\uD3A0\uD3A8\uD3A9\uD3AB\uD3AD\uD3B4\uD3B8\uD3BC\uD3C4\uD3C5\uD3C8\uD3C9\uD3D0\uD3D8\uD3E1\uD3E3\uD3EC\uD3ED\uD3F0\uD3F4\uD3FC\uD3FD\uD3FF\uD401\"],[\"c7a1\",\"\uD408\uD41D\uD440\uD444\uD45C\uD460\uD464\uD46D\uD46F\uD478\uD479\uD47C\uD47F\uD480\uD482\uD488\uD489\uD48B\uD48D\uD494\uD4A9\uD4CC\uD4D0\uD4D4\uD4DC\uD4DF\uD4E8\uD4EC\uD4F0\uD4F8\uD4FB\uD4FD\uD504\uD508\uD50C\uD514\uD515\uD517\uD53C\uD53D\uD540\uD544\uD54C\uD54D\uD54F\uD551\uD558\uD559\uD55C\uD560\uD565\uD568\uD569\uD56B\uD56D\uD574\uD575\uD578\uD57C\uD584\uD585\uD587\uD588\uD589\uD590\uD5A5\uD5C8\uD5C9\uD5CC\uD5D0\uD5D2\uD5D8\uD5D9\uD5DB\uD5DD\uD5E4\uD5E5\uD5E8\uD5EC\uD5F4\uD5F5\uD5F7\uD5F9\uD600\uD601\uD604\uD608\uD610\uD611\uD613\uD614\uD615\uD61C\uD620\"],[\"c8a1\",\"\uD624\uD62D\uD638\uD639\uD63C\uD640\uD645\uD648\uD649\uD64B\uD64D\uD651\uD654\uD655\uD658\uD65C\uD667\uD669\uD670\uD671\uD674\uD683\uD685\uD68C\uD68D\uD690\uD694\uD69D\uD69F\uD6A1\uD6A8\uD6AC\uD6B0\uD6B9\uD6BB\uD6C4\uD6C5\uD6C8\uD6CC\uD6D1\uD6D4\uD6D7\uD6D9\uD6E0\uD6E4\uD6E8\uD6F0\uD6F5\uD6FC\uD6FD\uD700\uD704\uD711\uD718\uD719\uD71C\uD720\uD728\uD729\uD72B\uD72D\uD734\uD735\uD738\uD73C\uD744\uD747\uD749\uD750\uD751\uD754\uD756\uD757\uD758\uD759\uD760\uD761\uD763\uD765\uD769\uD76C\uD770\uD774\uD77C\uD77D\uD781\uD788\uD789\uD78C\uD790\uD798\uD799\uD79B\uD79D\"],[\"caa1\",\"\u4F3D\u4F73\u5047\u50F9\u52A0\u53EF\u5475\u54E5\u5609\u5AC1\u5BB6\u6687\u67B6\u67B7\u67EF\u6B4C\u73C2\u75C2\u7A3C\u82DB\u8304\u8857\u8888\u8A36\u8CC8\u8DCF\u8EFB\u8FE6\u99D5\u523B\u5374\u5404\u606A\u6164\u6BBC\u73CF\u811A\u89BA\u89D2\u95A3\u4F83\u520A\u58BE\u5978\u59E6\u5E72\u5E79\u61C7\u63C0\u6746\u67EC\u687F\u6F97\u764E\u770B\u78F5\u7A08\u7AFF\u7C21\u809D\u826E\u8271\u8AEB\u9593\u4E6B\u559D\u66F7\u6E34\u78A3\u7AED\u845B\u8910\u874E\u97A8\u52D8\u574E\u582A\u5D4C\u611F\u61BE\u6221\u6562\u67D1\u6A44\u6E1B\u7518\u75B3\u76E3\u77B0\u7D3A\u90AF\u9451\u9452\u9F95\"],[\"cba1\",\"\u5323\u5CAC\u7532\u80DB\u9240\u9598\u525B\u5808\u59DC\u5CA1\u5D17\u5EB7\u5F3A\u5F4A\u6177\u6C5F\u757A\u7586\u7CE0\u7D73\u7DB1\u7F8C\u8154\u8221\u8591\u8941\u8B1B\u92FC\u964D\u9C47\u4ECB\u4EF7\u500B\u51F1\u584F\u6137\u613E\u6168\u6539\u69EA\u6F11\u75A5\u7686\u76D6\u7B87\u82A5\u84CB\uF900\u93A7\u958B\u5580\u5BA2\u5751\uF901\u7CB3\u7FB9\u91B5\u5028\u53BB\u5C45\u5DE8\u62D2\u636E\u64DA\u64E7\u6E20\u70AC\u795B\u8DDD\u8E1E\uF902\u907D\u9245\u92F8\u4E7E\u4EF6\u5065\u5DFE\u5EFA\u6106\u6957\u8171\u8654\u8E47\u9375\u9A2B\u4E5E\u5091\u6770\u6840\u5109\u528D\u5292\u6AA2\"],[\"cca1\",\"\u77BC\u9210\u9ED4\u52AB\u602F\u8FF2\u5048\u61A9\u63ED\u64CA\u683C\u6A84\u6FC0\u8188\u89A1\u9694\u5805\u727D\u72AC\u7504\u7D79\u7E6D\u80A9\u898B\u8B74\u9063\u9D51\u6289\u6C7A\u6F54\u7D50\u7F3A\u8A23\u517C\u614A\u7B9D\u8B19\u9257\u938C\u4EAC\u4FD3\u501E\u50BE\u5106\u52C1\u52CD\u537F\u5770\u5883\u5E9A\u5F91\u6176\u61AC\u64CE\u656C\u666F\u66BB\u66F4\u6897\u6D87\u7085\u70F1\u749F\u74A5\u74CA\u75D9\u786C\u78EC\u7ADF\u7AF6\u7D45\u7D93\u8015\u803F\u811B\u8396\u8B66\u8F15\u9015\u93E1\u9803\u9838\u9A5A\u9BE8\u4FC2\u5553\u583A\u5951\u5B63\u5C46\u60B8\u6212\u6842\u68B0\"],[\"cda1\",\"\u68E8\u6EAA\u754C\u7678\u78CE\u7A3D\u7CFB\u7E6B\u7E7C\u8A08\u8AA1\u8C3F\u968E\u9DC4\u53E4\u53E9\u544A\u5471\u56FA\u59D1\u5B64\u5C3B\u5EAB\u62F7\u6537\u6545\u6572\u66A0\u67AF\u69C1\u6CBD\u75FC\u7690\u777E\u7A3F\u7F94\u8003\u80A1\u818F\u82E6\u82FD\u83F0\u85C1\u8831\u88B4\u8AA5\uF903\u8F9C\u932E\u96C7\u9867\u9AD8\u9F13\u54ED\u659B\u66F2\u688F\u7A40\u8C37\u9D60\u56F0\u5764\u5D11\u6606\u68B1\u68CD\u6EFE\u7428\u889E\u9BE4\u6C68\uF904\u9AA8\u4F9B\u516C\u5171\u529F\u5B54\u5DE5\u6050\u606D\u62F1\u63A7\u653B\u73D9\u7A7A\u86A3\u8CA2\u978F\u4E32\u5BE1\u6208\u679C\u74DC\"],[\"cea1\",\"\u79D1\u83D3\u8A87\u8AB2\u8DE8\u904E\u934B\u9846\u5ED3\u69E8\u85FF\u90ED\uF905\u51A0\u5B98\u5BEC\u6163\u68FA\u6B3E\u704C\u742F\u74D8\u7BA1\u7F50\u83C5\u89C0\u8CAB\u95DC\u9928\u522E\u605D\u62EC\u9002\u4F8A\u5149\u5321\u58D9\u5EE3\u66E0\u6D38\u709A\u72C2\u73D6\u7B50\u80F1\u945B\u5366\u639B\u7F6B\u4E56\u5080\u584A\u58DE\u602A\u6127\u62D0\u69D0\u9B41\u5B8F\u7D18\u80B1\u8F5F\u4EA4\u50D1\u54AC\u55AC\u5B0C\u5DA0\u5DE7\u652A\u654E\u6821\u6A4B\u72E1\u768E\u77EF\u7D5E\u7FF9\u81A0\u854E\u86DF\u8F03\u8F4E\u90CA\u9903\u9A55\u9BAB\u4E18\u4E45\u4E5D\u4EC7\u4FF1\u5177\u52FE\"],[\"cfa1\",\"\u5340\u53E3\u53E5\u548E\u5614\u5775\u57A2\u5BC7\u5D87\u5ED0\u61FC\u62D8\u6551\u67B8\u67E9\u69CB\u6B50\u6BC6\u6BEC\u6C42\u6E9D\u7078\u72D7\u7396\u7403\u77BF\u77E9\u7A76\u7D7F\u8009\u81FC\u8205\u820A\u82DF\u8862\u8B33\u8CFC\u8EC0\u9011\u90B1\u9264\u92B6\u99D2\u9A45\u9CE9\u9DD7\u9F9C\u570B\u5C40\u83CA\u97A0\u97AB\u9EB4\u541B\u7A98\u7FA4\u88D9\u8ECD\u90E1\u5800\u5C48\u6398\u7A9F\u5BAE\u5F13\u7A79\u7AAE\u828E\u8EAC\u5026\u5238\u52F8\u5377\u5708\u62F3\u6372\u6B0A\u6DC3\u7737\u53A5\u7357\u8568\u8E76\u95D5\u673A\u6AC3\u6F70\u8A6D\u8ECC\u994B\uF906\u6677\u6B78\u8CB4\"],[\"d0a1\",\"\u9B3C\uF907\u53EB\u572D\u594E\u63C6\u69FB\u73EA\u7845\u7ABA\u7AC5\u7CFE\u8475\u898F\u8D73\u9035\u95A8\u52FB\u5747\u7547\u7B60\u83CC\u921E\uF908\u6A58\u514B\u524B\u5287\u621F\u68D8\u6975\u9699\u50C5\u52A4\u52E4\u61C3\u65A4\u6839\u69FF\u747E\u7B4B\u82B9\u83EB\u89B2\u8B39\u8FD1\u9949\uF909\u4ECA\u5997\u64D2\u6611\u6A8E\u7434\u7981\u79BD\u82A9\u887E\u887F\u895F\uF90A\u9326\u4F0B\u53CA\u6025\u6271\u6C72\u7D1A\u7D66\u4E98\u5162\u77DC\u80AF\u4F01\u4F0E\u5176\u5180\u55DC\u5668\u573B\u57FA\u57FC\u5914\u5947\u5993\u5BC4\u5C90\u5D0E\u5DF1\u5E7E\u5FCC\u6280\u65D7\u65E3\"],[\"d1a1\",\"\u671E\u671F\u675E\u68CB\u68C4\u6A5F\u6B3A\u6C23\u6C7D\u6C82\u6DC7\u7398\u7426\u742A\u7482\u74A3\u7578\u757F\u7881\u78EF\u7941\u7947\u7948\u797A\u7B95\u7D00\u7DBA\u7F88\u8006\u802D\u808C\u8A18\u8B4F\u8C48\u8D77\u9321\u9324\u98E2\u9951\u9A0E\u9A0F\u9A65\u9E92\u7DCA\u4F76\u5409\u62EE\u6854\u91D1\u55AB\u513A\uF90B\uF90C\u5A1C\u61E6\uF90D\u62CF\u62FF\uF90E\",5,\"\u90A3\uF914\",4,\"\u8AFE\uF919\uF91A\uF91B\uF91C\u6696\uF91D\u7156\uF91E\uF91F\u96E3\uF920\u634F\u637A\u5357\uF921\u678F\u6960\u6E73\uF922\u7537\uF923\uF924\uF925\"],[\"d2a1\",\"\u7D0D\uF926\uF927\u8872\u56CA\u5A18\uF928\",4,\"\u4E43\uF92D\u5167\u5948\u67F0\u8010\uF92E\u5973\u5E74\u649A\u79CA\u5FF5\u606C\u62C8\u637B\u5BE7\u5BD7\u52AA\uF92F\u5974\u5F29\u6012\uF930\uF931\uF932\u7459\uF933\",5,\"\u99D1\uF939\",10,\"\u6FC3\uF944\uF945\u81BF\u8FB2\u60F1\uF946\uF947\u8166\uF948\uF949\u5C3F\uF94A\",7,\"\u5AE9\u8A25\u677B\u7D10\uF952\",5,\"\u80FD\uF958\uF959\u5C3C\u6CE5\u533F\u6EBA\u591A\u8336\"],[\"d3a1\",\"\u4E39\u4EB6\u4F46\u55AE\u5718\u58C7\u5F56\u65B7\u65E6\u6A80\u6BB5\u6E4D\u77ED\u7AEF\u7C1E\u7DDE\u86CB\u8892\u9132\u935B\u64BB\u6FBE\u737A\u75B8\u9054\u5556\u574D\u61BA\u64D4\u66C7\u6DE1\u6E5B\u6F6D\u6FB9\u75F0\u8043\u81BD\u8541\u8983\u8AC7\u8B5A\u931F\u6C93\u7553\u7B54\u8E0F\u905D\u5510\u5802\u5858\u5E62\u6207\u649E\u68E0\u7576\u7CD6\u87B3\u9EE8\u4EE3\u5788\u576E\u5927\u5C0D\u5CB1\u5E36\u5F85\u6234\u64E1\u73B3\u81FA\u888B\u8CB8\u968A\u9EDB\u5B85\u5FB7\u60B3\u5012\u5200\u5230\u5716\u5835\u5857\u5C0E\u5C60\u5CF6\u5D8B\u5EA6\u5F92\u60BC\u6311\u6389\u6417\u6843\"],[\"d4a1\",\"\u68F9\u6AC2\u6DD8\u6E21\u6ED4\u6FE4\u71FE\u76DC\u7779\u79B1\u7A3B\u8404\u89A9\u8CED\u8DF3\u8E48\u9003\u9014\u9053\u90FD\u934D\u9676\u97DC\u6BD2\u7006\u7258\u72A2\u7368\u7763\u79BF\u7BE4\u7E9B\u8B80\u58A9\u60C7\u6566\u65FD\u66BE\u6C8C\u711E\u71C9\u8C5A\u9813\u4E6D\u7A81\u4EDD\u51AC\u51CD\u52D5\u540C\u61A7\u6771\u6850\u68DF\u6D1E\u6F7C\u75BC\u77B3\u7AE5\u80F4\u8463\u9285\u515C\u6597\u675C\u6793\u75D8\u7AC7\u8373\uF95A\u8C46\u9017\u982D\u5C6F\u81C0\u829A\u9041\u906F\u920D\u5F97\u5D9D\u6A59\u71C8\u767B\u7B49\u85E4\u8B04\u9127\u9A30\u5587\u61F6\uF95B\u7669\u7F85\"],[\"d5a1\",\"\u863F\u87BA\u88F8\u908F\uF95C\u6D1B\u70D9\u73DE\u7D61\u843D\uF95D\u916A\u99F1\uF95E\u4E82\u5375\u6B04\u6B12\u703E\u721B\u862D\u9E1E\u524C\u8FA3\u5D50\u64E5\u652C\u6B16\u6FEB\u7C43\u7E9C\u85CD\u8964\u89BD\u62C9\u81D8\u881F\u5ECA\u6717\u6D6A\u72FC\u7405\u746F\u8782\u90DE\u4F86\u5D0D\u5FA0\u840A\u51B7\u63A0\u7565\u4EAE\u5006\u5169\u51C9\u6881\u6A11\u7CAE\u7CB1\u7CE7\u826F\u8AD2\u8F1B\u91CF\u4FB6\u5137\u52F5\u5442\u5EEC\u616E\u623E\u65C5\u6ADA\u6FFE\u792A\u85DC\u8823\u95AD\u9A62\u9A6A\u9E97\u9ECE\u529B\u66C6\u6B77\u701D\u792B\u8F62\u9742\u6190\u6200\u6523\u6F23\"],[\"d6a1\",\"\u7149\u7489\u7DF4\u806F\u84EE\u8F26\u9023\u934A\u51BD\u5217\u52A3\u6D0C\u70C8\u88C2\u5EC9\u6582\u6BAE\u6FC2\u7C3E\u7375\u4EE4\u4F36\u56F9\uF95F\u5CBA\u5DBA\u601C\u73B2\u7B2D\u7F9A\u7FCE\u8046\u901E\u9234\u96F6\u9748\u9818\u9F61\u4F8B\u6FA7\u79AE\u91B4\u96B7\u52DE\uF960\u6488\u64C4\u6AD3\u6F5E\u7018\u7210\u76E7\u8001\u8606\u865C\u8DEF\u8F05\u9732\u9B6F\u9DFA\u9E75\u788C\u797F\u7DA0\u83C9\u9304\u9E7F\u9E93\u8AD6\u58DF\u5F04\u6727\u7027\u74CF\u7C60\u807E\u5121\u7028\u7262\u78CA\u8CC2\u8CDA\u8CF4\u96F7\u4E86\u50DA\u5BEE\u5ED6\u6599\u71CE\u7642\u77AD\u804A\u84FC\"],[\"d7a1\",\"\u907C\u9B27\u9F8D\u58D8\u5A41\u5C62\u6A13\u6DDA\u6F0F\u763B\u7D2F\u7E37\u851E\u8938\u93E4\u964B\u5289\u65D2\u67F3\u69B4\u6D41\u6E9C\u700F\u7409\u7460\u7559\u7624\u786B\u8B2C\u985E\u516D\u622E\u9678\u4F96\u502B\u5D19\u6DEA\u7DB8\u8F2A\u5F8B\u6144\u6817\uF961\u9686\u52D2\u808B\u51DC\u51CC\u695E\u7A1C\u7DBE\u83F1\u9675\u4FDA\u5229\u5398\u540F\u550E\u5C65\u60A7\u674E\u68A8\u6D6C\u7281\u72F8\u7406\u7483\uF962\u75E2\u7C6C\u7F79\u7FB8\u8389\u88CF\u88E1\u91CC\u91D0\u96E2\u9BC9\u541D\u6F7E\u71D0\u7498\u85FA\u8EAA\u96A3\u9C57\u9E9F\u6797\u6DCB\u7433\u81E8\u9716\u782C\"],[\"d8a1\",\"\u7ACB\u7B20\u7C92\u6469\u746A\u75F2\u78BC\u78E8\u99AC\u9B54\u9EBB\u5BDE\u5E55\u6F20\u819C\u83AB\u9088\u4E07\u534D\u5A29\u5DD2\u5F4E\u6162\u633D\u6669\u66FC\u6EFF\u6F2B\u7063\u779E\u842C\u8513\u883B\u8F13\u9945\u9C3B\u551C\u62B9\u672B\u6CAB\u8309\u896A\u977A\u4EA1\u5984\u5FD8\u5FD9\u671B\u7DB2\u7F54\u8292\u832B\u83BD\u8F1E\u9099\u57CB\u59B9\u5A92\u5BD0\u6627\u679A\u6885\u6BCF\u7164\u7F75\u8CB7\u8CE3\u9081\u9B45\u8108\u8C8A\u964C\u9A40\u9EA5\u5B5F\u6C13\u731B\u76F2\u76DF\u840C\u51AA\u8993\u514D\u5195\u52C9\u68C9\u6C94\u7704\u7720\u7DBF\u7DEC\u9762\u9EB5\u6EC5\"],[\"d9a1\",\"\u8511\u51A5\u540D\u547D\u660E\u669D\u6927\u6E9F\u76BF\u7791\u8317\u84C2\u879F\u9169\u9298\u9CF4\u8882\u4FAE\u5192\u52DF\u59C6\u5E3D\u6155\u6478\u6479\u66AE\u67D0\u6A21\u6BCD\u6BDB\u725F\u7261\u7441\u7738\u77DB\u8017\u82BC\u8305\u8B00\u8B28\u8C8C\u6728\u6C90\u7267\u76EE\u7766\u7A46\u9DA9\u6B7F\u6C92\u5922\u6726\u8499\u536F\u5893\u5999\u5EDF\u63CF\u6634\u6773\u6E3A\u732B\u7AD7\u82D7\u9328\u52D9\u5DEB\u61AE\u61CB\u620A\u62C7\u64AB\u65E0\u6959\u6B66\u6BCB\u7121\u73F7\u755D\u7E46\u821E\u8302\u856A\u8AA3\u8CBF\u9727\u9D61\u58A8\u9ED8\u5011\u520E\u543B\u554F\u6587\"],[\"daa1\",\"\u6C76\u7D0A\u7D0B\u805E\u868A\u9580\u96EF\u52FF\u6C95\u7269\u5473\u5A9A\u5C3E\u5D4B\u5F4C\u5FAE\u672A\u68B6\u6963\u6E3C\u6E44\u7709\u7C73\u7F8E\u8587\u8B0E\u8FF7\u9761\u9EF4\u5CB7\u60B6\u610D\u61AB\u654F\u65FB\u65FC\u6C11\u6CEF\u739F\u73C9\u7DE1\u9594\u5BC6\u871C\u8B10\u525D\u535A\u62CD\u640F\u64B2\u6734\u6A38\u6CCA\u73C0\u749E\u7B94\u7C95\u7E1B\u818A\u8236\u8584\u8FEB\u96F9\u99C1\u4F34\u534A\u53CD\u53DB\u62CC\u642C\u6500\u6591\u69C3\u6CEE\u6F58\u73ED\u7554\u7622\u76E4\u76FC\u78D0\u78FB\u792C\u7D46\u822C\u87E0\u8FD4\u9812\u98EF\u52C3\u62D4\u64A5\u6E24\u6F51\"],[\"dba1\",\"\u767C\u8DCB\u91B1\u9262\u9AEE\u9B43\u5023\u508D\u574A\u59A8\u5C28\u5E47\u5F77\u623F\u653E\u65B9\u65C1\u6609\u678B\u699C\u6EC2\u78C5\u7D21\u80AA\u8180\u822B\u82B3\u84A1\u868C\u8A2A\u8B17\u90A6\u9632\u9F90\u500D\u4FF3\uF963\u57F9\u5F98\u62DC\u6392\u676F\u6E43\u7119\u76C3\u80CC\u80DA\u88F4\u88F5\u8919\u8CE0\u8F29\u914D\u966A\u4F2F\u4F70\u5E1B\u67CF\u6822\u767D\u767E\u9B44\u5E61\u6A0A\u7169\u71D4\u756A\uF964\u7E41\u8543\u85E9\u98DC\u4F10\u7B4F\u7F70\u95A5\u51E1\u5E06\u68B5\u6C3E\u6C4E\u6CDB\u72AF\u7BC4\u8303\u6CD5\u743A\u50FB\u5288\u58C1\u64D8\u6A97\u74A7\u7656\"],[\"dca1\",\"\u78A7\u8617\u95E2\u9739\uF965\u535E\u5F01\u8B8A\u8FA8\u8FAF\u908A\u5225\u77A5\u9C49\u9F08\u4E19\u5002\u5175\u5C5B\u5E77\u661E\u663A\u67C4\u68C5\u70B3\u7501\u75C5\u79C9\u7ADD\u8F27\u9920\u9A08\u4FDD\u5821\u5831\u5BF6\u666E\u6B65\u6D11\u6E7A\u6F7D\u73E4\u752B\u83E9\u88DC\u8913\u8B5C\u8F14\u4F0F\u50D5\u5310\u535C\u5B93\u5FA9\u670D\u798F\u8179\u832F\u8514\u8907\u8986\u8F39\u8F3B\u99A5\u9C12\u672C\u4E76\u4FF8\u5949\u5C01\u5CEF\u5CF0\u6367\u68D2\u70FD\u71A2\u742B\u7E2B\u84EC\u8702\u9022\u92D2\u9CF3\u4E0D\u4ED8\u4FEF\u5085\u5256\u526F\u5426\u5490\u57E0\u592B\u5A66\"],[\"dda1\",\"\u5B5A\u5B75\u5BCC\u5E9C\uF966\u6276\u6577\u65A7\u6D6E\u6EA5\u7236\u7B26\u7C3F\u7F36\u8150\u8151\u819A\u8240\u8299\u83A9\u8A03\u8CA0\u8CE6\u8CFB\u8D74\u8DBA\u90E8\u91DC\u961C\u9644\u99D9\u9CE7\u5317\u5206\u5429\u5674\u58B3\u5954\u596E\u5FFF\u61A4\u626E\u6610\u6C7E\u711A\u76C6\u7C89\u7CDE\u7D1B\u82AC\u8CC1\u96F0\uF967\u4F5B\u5F17\u5F7F\u62C2\u5D29\u670B\u68DA\u787C\u7E43\u9D6C\u4E15\u5099\u5315\u532A\u5351\u5983\u5A62\u5E87\u60B2\u618A\u6249\u6279\u6590\u6787\u69A7\u6BD4\u6BD6\u6BD7\u6BD8\u6CB8\uF968\u7435\u75FA\u7812\u7891\u79D5\u79D8\u7C83\u7DCB\u7FE1\u80A5\"],[\"dea1\",\"\u813E\u81C2\u83F2\u871A\u88E8\u8AB9\u8B6C\u8CBB\u9119\u975E\u98DB\u9F3B\u56AC\u5B2A\u5F6C\u658C\u6AB3\u6BAF\u6D5C\u6FF1\u7015\u725D\u73AD\u8CA7\u8CD3\u983B\u6191\u6C37\u8058\u9A01\u4E4D\u4E8B\u4E9B\u4ED5\u4F3A\u4F3C\u4F7F\u4FDF\u50FF\u53F2\u53F8\u5506\u55E3\u56DB\u58EB\u5962\u5A11\u5BEB\u5BFA\u5C04\u5DF3\u5E2B\u5F99\u601D\u6368\u659C\u65AF\u67F6\u67FB\u68AD\u6B7B\u6C99\u6CD7\u6E23\u7009\u7345\u7802\u793E\u7940\u7960\u79C1\u7BE9\u7D17\u7D72\u8086\u820D\u838E\u84D1\u86C7\u88DF\u8A50\u8A5E\u8B1D\u8CDC\u8D66\u8FAD\u90AA\u98FC\u99DF\u9E9D\u524A\uF969\u6714\uF96A\"],[\"dfa1\",\"\u5098\u522A\u5C71\u6563\u6C55\u73CA\u7523\u759D\u7B97\u849C\u9178\u9730\u4E77\u6492\u6BBA\u715E\u85A9\u4E09\uF96B\u6749\u68EE\u6E17\u829F\u8518\u886B\u63F7\u6F81\u9212\u98AF\u4E0A\u50B7\u50CF\u511F\u5546\u55AA\u5617\u5B40\u5C19\u5CE0\u5E38\u5E8A\u5EA0\u5EC2\u60F3\u6851\u6A61\u6E58\u723D\u7240\u72C0\u76F8\u7965\u7BB1\u7FD4\u88F3\u89F4\u8A73\u8C61\u8CDE\u971C\u585E\u74BD\u8CFD\u55C7\uF96C\u7A61\u7D22\u8272\u7272\u751F\u7525\uF96D\u7B19\u5885\u58FB\u5DBC\u5E8F\u5EB6\u5F90\u6055\u6292\u637F\u654D\u6691\u66D9\u66F8\u6816\u68F2\u7280\u745E\u7B6E\u7D6E\u7DD6\u7F72\"],[\"e0a1\",\"\u80E5\u8212\u85AF\u897F\u8A93\u901D\u92E4\u9ECD\u9F20\u5915\u596D\u5E2D\u60DC\u6614\u6673\u6790\u6C50\u6DC5\u6F5F\u77F3\u78A9\u84C6\u91CB\u932B\u4ED9\u50CA\u5148\u5584\u5B0B\u5BA3\u6247\u657E\u65CB\u6E32\u717D\u7401\u7444\u7487\u74BF\u766C\u79AA\u7DDA\u7E55\u7FA8\u817A\u81B3\u8239\u861A\u87EC\u8A75\u8DE3\u9078\u9291\u9425\u994D\u9BAE\u5368\u5C51\u6954\u6CC4\u6D29\u6E2B\u820C\u859B\u893B\u8A2D\u8AAA\u96EA\u9F67\u5261\u66B9\u6BB2\u7E96\u87FE\u8D0D\u9583\u965D\u651D\u6D89\u71EE\uF96E\u57CE\u59D3\u5BAC\u6027\u60FA\u6210\u661F\u665F\u7329\u73F9\u76DB\u7701\u7B6C\"],[\"e1a1\",\"\u8056\u8072\u8165\u8AA0\u9192\u4E16\u52E2\u6B72\u6D17\u7A05\u7B39\u7D30\uF96F\u8CB0\u53EC\u562F\u5851\u5BB5\u5C0F\u5C11\u5DE2\u6240\u6383\u6414\u662D\u68B3\u6CBC\u6D88\u6EAF\u701F\u70A4\u71D2\u7526\u758F\u758E\u7619\u7B11\u7BE0\u7C2B\u7D20\u7D39\u852C\u856D\u8607\u8A34\u900D\u9061\u90B5\u92B7\u97F6\u9A37\u4FD7\u5C6C\u675F\u6D91\u7C9F\u7E8C\u8B16\u8D16\u901F\u5B6B\u5DFD\u640D\u84C0\u905C\u98E1\u7387\u5B8B\u609A\u677E\u6DDE\u8A1F\u8AA6\u9001\u980C\u5237\uF970\u7051\u788E\u9396\u8870\u91D7\u4FEE\u53D7\u55FD\u56DA\u5782\u58FD\u5AC2\u5B88\u5CAB\u5CC0\u5E25\u6101\"],[\"e2a1\",\"\u620D\u624B\u6388\u641C\u6536\u6578\u6A39\u6B8A\u6C34\u6D19\u6F31\u71E7\u72E9\u7378\u7407\u74B2\u7626\u7761\u79C0\u7A57\u7AEA\u7CB9\u7D8F\u7DAC\u7E61\u7F9E\u8129\u8331\u8490\u84DA\u85EA\u8896\u8AB0\u8B90\u8F38\u9042\u9083\u916C\u9296\u92B9\u968B\u96A7\u96A8\u96D6\u9700\u9808\u9996\u9AD3\u9B1A\u53D4\u587E\u5919\u5B70\u5BBF\u6DD1\u6F5A\u719F\u7421\u74B9\u8085\u83FD\u5DE1\u5F87\u5FAA\u6042\u65EC\u6812\u696F\u6A53\u6B89\u6D35\u6DF3\u73E3\u76FE\u77AC\u7B4D\u7D14\u8123\u821C\u8340\u84F4\u8563\u8A62\u8AC4\u9187\u931E\u9806\u99B4\u620C\u8853\u8FF0\u9265\u5D07\u5D27\"],[\"e3a1\",\"\u5D69\u745F\u819D\u8768\u6FD5\u62FE\u7FD2\u8936\u8972\u4E1E\u4E58\u50E7\u52DD\u5347\u627F\u6607\u7E69\u8805\u965E\u4F8D\u5319\u5636\u59CB\u5AA4\u5C38\u5C4E\u5C4D\u5E02\u5F11\u6043\u65BD\u662F\u6642\u67BE\u67F4\u731C\u77E2\u793A\u7FC5\u8494\u84CD\u8996\u8A66\u8A69\u8AE1\u8C55\u8C7A\u57F4\u5BD4\u5F0F\u606F\u62ED\u690D\u6B96\u6E5C\u7184\u7BD2\u8755\u8B58\u8EFE\u98DF\u98FE\u4F38\u4F81\u4FE1\u547B\u5A20\u5BB8\u613C\u65B0\u6668\u71FC\u7533\u795E\u7D33\u814E\u81E3\u8398\u85AA\u85CE\u8703\u8A0A\u8EAB\u8F9B\uF971\u8FC5\u5931\u5BA4\u5BE6\u6089\u5BE9\u5C0B\u5FC3\u6C81\"],[\"e4a1\",\"\uF972\u6DF1\u700B\u751A\u82AF\u8AF6\u4EC0\u5341\uF973\u96D9\u6C0F\u4E9E\u4FC4\u5152\u555E\u5A25\u5CE8\u6211\u7259\u82BD\u83AA\u86FE\u8859\u8A1D\u963F\u96C5\u9913\u9D09\u9D5D\u580A\u5CB3\u5DBD\u5E44\u60E1\u6115\u63E1\u6A02\u6E25\u9102\u9354\u984E\u9C10\u9F77\u5B89\u5CB8\u6309\u664F\u6848\u773C\u96C1\u978D\u9854\u9B9F\u65A1\u8B01\u8ECB\u95BC\u5535\u5CA9\u5DD6\u5EB5\u6697\u764C\u83F4\u95C7\u58D3\u62BC\u72CE\u9D28\u4EF0\u592E\u600F\u663B\u6B83\u79E7\u9D26\u5393\u54C0\u57C3\u5D16\u611B\u66D6\u6DAF\u788D\u827E\u9698\u9744\u5384\u627C\u6396\u6DB2\u7E0A\u814B\u984D\"],[\"e5a1\",\"\u6AFB\u7F4C\u9DAF\u9E1A\u4E5F\u503B\u51B6\u591C\u60F9\u63F6\u6930\u723A\u8036\uF974\u91CE\u5F31\uF975\uF976\u7D04\u82E5\u846F\u84BB\u85E5\u8E8D\uF977\u4F6F\uF978\uF979\u58E4\u5B43\u6059\u63DA\u6518\u656D\u6698\uF97A\u694A\u6A23\u6D0B\u7001\u716C\u75D2\u760D\u79B3\u7A70\uF97B\u7F8A\uF97C\u8944\uF97D\u8B93\u91C0\u967D\uF97E\u990A\u5704\u5FA1\u65BC\u6F01\u7600\u79A6\u8A9E\u99AD\u9B5A\u9F6C\u5104\u61B6\u6291\u6A8D\u81C6\u5043\u5830\u5F66\u7109\u8A00\u8AFA\u5B7C\u8616\u4FFA\u513C\u56B4\u5944\u63A9\u6DF9\u5DAA\u696D\u5186\u4E88\u4F59\uF97F\uF980\uF981\u5982\uF982\"],[\"e6a1\",\"\uF983\u6B5F\u6C5D\uF984\u74B5\u7916\uF985\u8207\u8245\u8339\u8F3F\u8F5D\uF986\u9918\uF987\uF988\uF989\u4EA6\uF98A\u57DF\u5F79\u6613\uF98B\uF98C\u75AB\u7E79\u8B6F\uF98D\u9006\u9A5B\u56A5\u5827\u59F8\u5A1F\u5BB4\uF98E\u5EF6\uF98F\uF990\u6350\u633B\uF991\u693D\u6C87\u6CBF\u6D8E\u6D93\u6DF5\u6F14\uF992\u70DF\u7136\u7159\uF993\u71C3\u71D5\uF994\u784F\u786F\uF995\u7B75\u7DE3\uF996\u7E2F\uF997\u884D\u8EDF\uF998\uF999\uF99A\u925B\uF99B\u9CF6\uF99C\uF99D\uF99E\u6085\u6D85\uF99F\u71B1\uF9A0\uF9A1\u95B1\u53AD\uF9A2\uF9A3\uF9A4\u67D3\uF9A5\u708E\u7130\u7430\u8276\u82D2\"],[\"e7a1\",\"\uF9A6\u95BB\u9AE5\u9E7D\u66C4\uF9A7\u71C1\u8449\uF9A8\uF9A9\u584B\uF9AA\uF9AB\u5DB8\u5F71\uF9AC\u6620\u668E\u6979\u69AE\u6C38\u6CF3\u6E36\u6F41\u6FDA\u701B\u702F\u7150\u71DF\u7370\uF9AD\u745B\uF9AE\u74D4\u76C8\u7A4E\u7E93\uF9AF\uF9B0\u82F1\u8A60\u8FCE\uF9B1\u9348\uF9B2\u9719\uF9B3\uF9B4\u4E42\u502A\uF9B5\u5208\u53E1\u66F3\u6C6D\u6FCA\u730A\u777F\u7A62\u82AE\u85DD\u8602\uF9B6\u88D4\u8A63\u8B7D\u8C6B\uF9B7\u92B3\uF9B8\u9713\u9810\u4E94\u4F0D\u4FC9\u50B2\u5348\u543E\u5433\u55DA\u5862\u58BA\u5967\u5A1B\u5BE4\u609F\uF9B9\u61CA\u6556\u65FF\u6664\u68A7\u6C5A\u6FB3\"],[\"e8a1\",\"\u70CF\u71AC\u7352\u7B7D\u8708\u8AA4\u9C32\u9F07\u5C4B\u6C83\u7344\u7389\u923A\u6EAB\u7465\u761F\u7A69\u7E15\u860A\u5140\u58C5\u64C1\u74EE\u7515\u7670\u7FC1\u9095\u96CD\u9954\u6E26\u74E6\u7AA9\u7AAA\u81E5\u86D9\u8778\u8A1B\u5A49\u5B8C\u5B9B\u68A1\u6900\u6D63\u73A9\u7413\u742C\u7897\u7DE9\u7FEB\u8118\u8155\u839E\u8C4C\u962E\u9811\u66F0\u5F80\u65FA\u6789\u6C6A\u738B\u502D\u5A03\u6B6A\u77EE\u5916\u5D6C\u5DCD\u7325\u754F\uF9BA\uF9BB\u50E5\u51F9\u582F\u592D\u5996\u59DA\u5BE5\uF9BC\uF9BD\u5DA2\u62D7\u6416\u6493\u64FE\uF9BE\u66DC\uF9BF\u6A48\uF9C0\u71FF\u7464\uF9C1\"],[\"e9a1\",\"\u7A88\u7AAF\u7E47\u7E5E\u8000\u8170\uF9C2\u87EF\u8981\u8B20\u9059\uF9C3\u9080\u9952\u617E\u6B32\u6D74\u7E1F\u8925\u8FB1\u4FD1\u50AD\u5197\u52C7\u57C7\u5889\u5BB9\u5EB8\u6142\u6995\u6D8C\u6E67\u6EB6\u7194\u7462\u7528\u752C\u8073\u8338\u84C9\u8E0A\u9394\u93DE\uF9C4\u4E8E\u4F51\u5076\u512A\u53C8\u53CB\u53F3\u5B87\u5BD3\u5C24\u611A\u6182\u65F4\u725B\u7397\u7440\u76C2\u7950\u7991\u79B9\u7D06\u7FBD\u828B\u85D5\u865E\u8FC2\u9047\u90F5\u91EA\u9685\u96E8\u96E9\u52D6\u5F67\u65ED\u6631\u682F\u715C\u7A36\u90C1\u980A\u4E91\uF9C5\u6A52\u6B9E\u6F90\u7189\u8018\u82B8\u8553\"],[\"eaa1\",\"\u904B\u9695\u96F2\u97FB\u851A\u9B31\u4E90\u718A\u96C4\u5143\u539F\u54E1\u5713\u5712\u57A3\u5A9B\u5AC4\u5BC3\u6028\u613F\u63F4\u6C85\u6D39\u6E72\u6E90\u7230\u733F\u7457\u82D1\u8881\u8F45\u9060\uF9C6\u9662\u9858\u9D1B\u6708\u8D8A\u925E\u4F4D\u5049\u50DE\u5371\u570D\u59D4\u5A01\u5C09\u6170\u6690\u6E2D\u7232\u744B\u7DEF\u80C3\u840E\u8466\u853F\u875F\u885B\u8918\u8B02\u9055\u97CB\u9B4F\u4E73\u4F91\u5112\u516A\uF9C7\u552F\u55A9\u5B7A\u5BA5\u5E7C\u5E7D\u5EBE\u60A0\u60DF\u6108\u6109\u63C4\u6538\u6709\uF9C8\u67D4\u67DA\uF9C9\u6961\u6962\u6CB9\u6D27\uF9CA\u6E38\uF9CB\"],[\"eba1\",\"\u6FE1\u7336\u7337\uF9CC\u745C\u7531\uF9CD\u7652\uF9CE\uF9CF\u7DAD\u81FE\u8438\u88D5\u8A98\u8ADB\u8AED\u8E30\u8E42\u904A\u903E\u907A\u9149\u91C9\u936E\uF9D0\uF9D1\u5809\uF9D2\u6BD3\u8089\u80B2\uF9D3\uF9D4\u5141\u596B\u5C39\uF9D5\uF9D6\u6F64\u73A7\u80E4\u8D07\uF9D7\u9217\u958F\uF9D8\uF9D9\uF9DA\uF9DB\u807F\u620E\u701C\u7D68\u878D\uF9DC\u57A0\u6069\u6147\u6BB7\u8ABE\u9280\u96B1\u4E59\u541F\u6DEB\u852D\u9670\u97F3\u98EE\u63D6\u6CE3\u9091\u51DD\u61C9\u81BA\u9DF9\u4F9D\u501A\u5100\u5B9C\u610F\u61FF\u64EC\u6905\u6BC5\u7591\u77E3\u7FA9\u8264\u858F\u87FB\u8863\u8ABC\"],[\"eca1\",\"\u8B70\u91AB\u4E8C\u4EE5\u4F0A\uF9DD\uF9DE\u5937\u59E8\uF9DF\u5DF2\u5F1B\u5F5B\u6021\uF9E0\uF9E1\uF9E2\uF9E3\u723E\u73E5\uF9E4\u7570\u75CD\uF9E5\u79FB\uF9E6\u800C\u8033\u8084\u82E1\u8351\uF9E7\uF9E8\u8CBD\u8CB3\u9087\uF9E9\uF9EA\u98F4\u990C\uF9EB\uF9EC\u7037\u76CA\u7FCA\u7FCC\u7FFC\u8B1A\u4EBA\u4EC1\u5203\u5370\uF9ED\u54BD\u56E0\u59FB\u5BC5\u5F15\u5FCD\u6E6E\uF9EE\uF9EF\u7D6A\u8335\uF9F0\u8693\u8A8D\uF9F1\u976D\u9777\uF9F2\uF9F3\u4E00\u4F5A\u4F7E\u58F9\u65E5\u6EA2\u9038\u93B0\u99B9\u4EFB\u58EC\u598A\u59D9\u6041\uF9F4\uF9F5\u7A14\uF9F6\u834F\u8CC3\u5165\u5344\"],[\"eda1\",\"\uF9F7\uF9F8\uF9F9\u4ECD\u5269\u5B55\u82BF\u4ED4\u523A\u54A8\u59C9\u59FF\u5B50\u5B57\u5B5C\u6063\u6148\u6ECB\u7099\u716E\u7386\u74F7\u75B5\u78C1\u7D2B\u8005\u81EA\u8328\u8517\u85C9\u8AEE\u8CC7\u96CC\u4F5C\u52FA\u56BC\u65AB\u6628\u707C\u70B8\u7235\u7DBD\u828D\u914C\u96C0\u9D72\u5B71\u68E7\u6B98\u6F7A\u76DE\u5C91\u66AB\u6F5B\u7BB4\u7C2A\u8836\u96DC\u4E08\u4ED7\u5320\u5834\u58BB\u58EF\u596C\u5C07\u5E33\u5E84\u5F35\u638C\u66B2\u6756\u6A1F\u6AA3\u6B0C\u6F3F\u7246\uF9FA\u7350\u748B\u7AE0\u7CA7\u8178\u81DF\u81E7\u838A\u846C\u8523\u8594\u85CF\u88DD\u8D13\u91AC\u9577\"],[\"eea1\",\"\u969C\u518D\u54C9\u5728\u5BB0\u624D\u6750\u683D\u6893\u6E3D\u6ED3\u707D\u7E21\u88C1\u8CA1\u8F09\u9F4B\u9F4E\u722D\u7B8F\u8ACD\u931A\u4F47\u4F4E\u5132\u5480\u59D0\u5E95\u62B5\u6775\u696E\u6A17\u6CAE\u6E1A\u72D9\u732A\u75BD\u7BB8\u7D35\u82E7\u83F9\u8457\u85F7\u8A5B\u8CAF\u8E87\u9019\u90B8\u96CE\u9F5F\u52E3\u540A\u5AE1\u5BC2\u6458\u6575\u6EF4\u72C4\uF9FB\u7684\u7A4D\u7B1B\u7C4D\u7E3E\u7FDF\u837B\u8B2B\u8CCA\u8D64\u8DE1\u8E5F\u8FEA\u8FF9\u9069\u93D1\u4F43\u4F7A\u50B3\u5168\u5178\u524D\u526A\u5861\u587C\u5960\u5C08\u5C55\u5EDB\u609B\u6230\u6813\u6BBF\u6C08\u6FB1\"],[\"efa1\",\"\u714E\u7420\u7530\u7538\u7551\u7672\u7B4C\u7B8B\u7BAD\u7BC6\u7E8F\u8A6E\u8F3E\u8F49\u923F\u9293\u9322\u942B\u96FB\u985A\u986B\u991E\u5207\u622A\u6298\u6D59\u7664\u7ACA\u7BC0\u7D76\u5360\u5CBE\u5E97\u6F38\u70B9\u7C98\u9711\u9B8E\u9EDE\u63A5\u647A\u8776\u4E01\u4E95\u4EAD\u505C\u5075\u5448\u59C3\u5B9A\u5E40\u5EAD\u5EF7\u5F81\u60C5\u633A\u653F\u6574\u65CC\u6676\u6678\u67FE\u6968\u6A89\u6B63\u6C40\u6DC0\u6DE8\u6E1F\u6E5E\u701E\u70A1\u738E\u73FD\u753A\u775B\u7887\u798E\u7A0B\u7A7D\u7CBE\u7D8E\u8247\u8A02\u8AEA\u8C9E\u912D\u914A\u91D8\u9266\u92CC\u9320\u9706\u9756\"],[\"f0a1\",\"\u975C\u9802\u9F0E\u5236\u5291\u557C\u5824\u5E1D\u5F1F\u608C\u63D0\u68AF\u6FDF\u796D\u7B2C\u81CD\u85BA\u88FD\u8AF8\u8E44\u918D\u9664\u969B\u973D\u984C\u9F4A\u4FCE\u5146\u51CB\u52A9\u5632\u5F14\u5F6B\u63AA\u64CD\u65E9\u6641\u66FA\u66F9\u671D\u689D\u68D7\u69FD\u6F15\u6F6E\u7167\u71E5\u722A\u74AA\u773A\u7956\u795A\u79DF\u7A20\u7A95\u7C97\u7CDF\u7D44\u7E70\u8087\u85FB\u86A4\u8A54\u8ABF\u8D99\u8E81\u9020\u906D\u91E3\u963B\u96D5\u9CE5\u65CF\u7C07\u8DB3\u93C3\u5B58\u5C0A\u5352\u62D9\u731D\u5027\u5B97\u5F9E\u60B0\u616B\u68D5\u6DD9\u742E\u7A2E\u7D42\u7D9C\u7E31\u816B\"],[\"f1a1\",\"\u8E2A\u8E35\u937E\u9418\u4F50\u5750\u5DE6\u5EA7\u632B\u7F6A\u4E3B\u4F4F\u4F8F\u505A\u59DD\u80C4\u546A\u5468\u55FE\u594F\u5B99\u5DDE\u5EDA\u665D\u6731\u67F1\u682A\u6CE8\u6D32\u6E4A\u6F8D\u70B7\u73E0\u7587\u7C4C\u7D02\u7D2C\u7DA2\u821F\u86DB\u8A3B\u8A85\u8D70\u8E8A\u8F33\u9031\u914E\u9152\u9444\u99D0\u7AF9\u7CA5\u4FCA\u5101\u51C6\u57C8\u5BEF\u5CFB\u6659\u6A3D\u6D5A\u6E96\u6FEC\u710C\u756F\u7AE3\u8822\u9021\u9075\u96CB\u99FF\u8301\u4E2D\u4EF2\u8846\u91CD\u537D\u6ADB\u696B\u6C41\u847A\u589E\u618E\u66FE\u62EF\u70DD\u7511\u75C7\u7E52\u84B8\u8B49\u8D08\u4E4B\u53EA\"],[\"f2a1\",\"\u54AB\u5730\u5740\u5FD7\u6301\u6307\u646F\u652F\u65E8\u667A\u679D\u67B3\u6B62\u6C60\u6C9A\u6F2C\u77E5\u7825\u7949\u7957\u7D19\u80A2\u8102\u81F3\u829D\u82B7\u8718\u8A8C\uF9FC\u8D04\u8DBE\u9072\u76F4\u7A19\u7A37\u7E54\u8077\u5507\u55D4\u5875\u632F\u6422\u6649\u664B\u686D\u699B\u6B84\u6D25\u6EB1\u73CD\u7468\u74A1\u755B\u75B9\u76E1\u771E\u778B\u79E6\u7E09\u7E1D\u81FB\u852F\u8897\u8A3A\u8CD1\u8EEB\u8FB0\u9032\u93AD\u9663\u9673\u9707\u4F84\u53F1\u59EA\u5AC9\u5E19\u684E\u74C6\u75BE\u79E9\u7A92\u81A3\u86ED\u8CEA\u8DCC\u8FED\u659F\u6715\uF9FD\u57F7\u6F57\u7DDD\u8F2F\"],[\"f3a1\",\"\u93F6\u96C6\u5FB5\u61F2\u6F84\u4E14\u4F98\u501F\u53C9\u55DF\u5D6F\u5DEE\u6B21\u6B64\u78CB\u7B9A\uF9FE\u8E49\u8ECA\u906E\u6349\u643E\u7740\u7A84\u932F\u947F\u9F6A\u64B0\u6FAF\u71E6\u74A8\u74DA\u7AC4\u7C12\u7E82\u7CB2\u7E98\u8B9A\u8D0A\u947D\u9910\u994C\u5239\u5BDF\u64E6\u672D\u7D2E\u50ED\u53C3\u5879\u6158\u6159\u61FA\u65AC\u7AD9\u8B92\u8B96\u5009\u5021\u5275\u5531\u5A3C\u5EE0\u5F70\u6134\u655E\u660C\u6636\u66A2\u69CD\u6EC4\u6F32\u7316\u7621\u7A93\u8139\u8259\u83D6\u84BC\u50B5\u57F0\u5BC0\u5BE8\u5F69\u63A1\u7826\u7DB5\u83DC\u8521\u91C7\u91F5\u518A\u67F5\u7B56\"],[\"f4a1\",\"\u8CAC\u51C4\u59BB\u60BD\u8655\u501C\uF9FF\u5254\u5C3A\u617D\u621A\u62D3\u64F2\u65A5\u6ECC\u7620\u810A\u8E60\u965F\u96BB\u4EDF\u5343\u5598\u5929\u5DDD\u64C5\u6CC9\u6DFA\u7394\u7A7F\u821B\u85A6\u8CE4\u8E10\u9077\u91E7\u95E1\u9621\u97C6\u51F8\u54F2\u5586\u5FB9\u64A4\u6F88\u7DB4\u8F1F\u8F4D\u9435\u50C9\u5C16\u6CBE\u6DFB\u751B\u77BB\u7C3D\u7C64\u8A79\u8AC2\u581E\u59BE\u5E16\u6377\u7252\u758A\u776B\u8ADC\u8CBC\u8F12\u5EF3\u6674\u6DF8\u807D\u83C1\u8ACB\u9751\u9BD6\uFA00\u5243\u66FF\u6D95\u6EEF\u7DE0\u8AE6\u902E\u905E\u9AD4\u521D\u527F\u54E8\u6194\u6284\u62DB\u68A2\"],[\"f5a1\",\"\u6912\u695A\u6A35\u7092\u7126\u785D\u7901\u790E\u79D2\u7A0D\u8096\u8278\u82D5\u8349\u8549\u8C82\u8D85\u9162\u918B\u91AE\u4FC3\u56D1\u71ED\u77D7\u8700\u89F8\u5BF8\u5FD6\u6751\u90A8\u53E2\u585A\u5BF5\u60A4\u6181\u6460\u7E3D\u8070\u8525\u9283\u64AE\u50AC\u5D14\u6700\u589C\u62BD\u63A8\u690E\u6978\u6A1E\u6E6B\u76BA\u79CB\u82BB\u8429\u8ACF\u8DA8\u8FFD\u9112\u914B\u919C\u9310\u9318\u939A\u96DB\u9A36\u9C0D\u4E11\u755C\u795D\u7AFA\u7B51\u7BC9\u7E2E\u84C4\u8E59\u8E74\u8EF8\u9010\u6625\u693F\u7443\u51FA\u672E\u9EDC\u5145\u5FE0\u6C96\u87F2\u885D\u8877\u60B4\u81B5\u8403\"],[\"f6a1\",\"\u8D05\u53D6\u5439\u5634\u5A36\u5C31\u708A\u7FE0\u805A\u8106\u81ED\u8DA3\u9189\u9A5F\u9DF2\u5074\u4EC4\u53A0\u60FB\u6E2C\u5C64\u4F88\u5024\u55E4\u5CD9\u5E5F\u6065\u6894\u6CBB\u6DC4\u71BE\u75D4\u75F4\u7661\u7A1A\u7A49\u7DC7\u7DFB\u7F6E\u81F4\u86A9\u8F1C\u96C9\u99B3\u9F52\u5247\u52C5\u98ED\u89AA\u4E03\u67D2\u6F06\u4FB5\u5BE2\u6795\u6C88\u6D78\u741B\u7827\u91DD\u937C\u87C4\u79E4\u7A31\u5FEB\u4ED6\u54A4\u553E\u58AE\u59A5\u60F0\u6253\u62D6\u6736\u6955\u8235\u9640\u99B1\u99DD\u502C\u5353\u5544\u577C\uFA01\u6258\uFA02\u64E2\u666B\u67DD\u6FC1\u6FEF\u7422\u7438\u8A17\"],[\"f7a1\",\"\u9438\u5451\u5606\u5766\u5F48\u619A\u6B4E\u7058\u70AD\u7DBB\u8A95\u596A\u812B\u63A2\u7708\u803D\u8CAA\u5854\u642D\u69BB\u5B95\u5E11\u6E6F\uFA03\u8569\u514C\u53F0\u592A\u6020\u614B\u6B86\u6C70\u6CF0\u7B1E\u80CE\u82D4\u8DC6\u90B0\u98B1\uFA04\u64C7\u6FA4\u6491\u6504\u514E\u5410\u571F\u8A0E\u615F\u6876\uFA05\u75DB\u7B52\u7D71\u901A\u5806\u69CC\u817F\u892A\u9000\u9839\u5078\u5957\u59AC\u6295\u900F\u9B2A\u615D\u7279\u95D6\u5761\u5A46\u5DF4\u628A\u64AD\u64FA\u6777\u6CE2\u6D3E\u722C\u7436\u7834\u7F77\u82AD\u8DDB\u9817\u5224\u5742\u677F\u7248\u74E3\u8CA9\u8FA6\u9211\"],[\"f8a1\",\"\u962A\u516B\u53ED\u634C\u4F69\u5504\u6096\u6557\u6C9B\u6D7F\u724C\u72FD\u7A17\u8987\u8C9D\u5F6D\u6F8E\u70F9\u81A8\u610E\u4FBF\u504F\u6241\u7247\u7BC7\u7DE8\u7FE9\u904D\u97AD\u9A19\u8CB6\u576A\u5E73\u67B0\u840D\u8A55\u5420\u5B16\u5E63\u5EE2\u5F0A\u6583\u80BA\u853D\u9589\u965B\u4F48\u5305\u530D\u530F\u5486\u54FA\u5703\u5E03\u6016\u629B\u62B1\u6355\uFA06\u6CE1\u6D66\u75B1\u7832\u80DE\u812F\u82DE\u8461\u84B2\u888D\u8912\u900B\u92EA\u98FD\u9B91\u5E45\u66B4\u66DD\u7011\u7206\uFA07\u4FF5\u527D\u5F6A\u6153\u6753\u6A19\u6F02\u74E2\u7968\u8868\u8C79\u98C7\u98C4\u9A43\"],[\"f9a1\",\"\u54C1\u7A1F\u6953\u8AF7\u8C4A\u98A8\u99AE\u5F7C\u62AB\u75B2\u76AE\u88AB\u907F\u9642\u5339\u5F3C\u5FC5\u6CCC\u73CC\u7562\u758B\u7B46\u82FE\u999D\u4E4F\u903C\u4E0B\u4F55\u53A6\u590F\u5EC8\u6630\u6CB3\u7455\u8377\u8766\u8CC0\u9050\u971E\u9C15\u58D1\u5B78\u8650\u8B14\u9DB4\u5BD2\u6068\u608D\u65F1\u6C57\u6F22\u6FA3\u701A\u7F55\u7FF0\u9591\u9592\u9650\u97D3\u5272\u8F44\u51FD\u542B\u54B8\u5563\u558A\u6ABB\u6DB5\u7DD8\u8266\u929C\u9677\u9E79\u5408\u54C8\u76D2\u86E4\u95A4\u95D4\u965C\u4EA2\u4F09\u59EE\u5AE6\u5DF7\u6052\u6297\u676D\u6841\u6C86\u6E2F\u7F38\u809B\u822A\"],[\"faa1\",\"\uFA08\uFA09\u9805\u4EA5\u5055\u54B3\u5793\u595A\u5B69\u5BB3\u61C8\u6977\u6D77\u7023\u87F9\u89E3\u8A72\u8AE7\u9082\u99ED\u9AB8\u52BE\u6838\u5016\u5E78\u674F\u8347\u884C\u4EAB\u5411\u56AE\u73E6\u9115\u97FF\u9909\u9957\u9999\u5653\u589F\u865B\u8A31\u61B2\u6AF6\u737B\u8ED2\u6B47\u96AA\u9A57\u5955\u7200\u8D6B\u9769\u4FD4\u5CF4\u5F26\u61F8\u665B\u6CEB\u70AB\u7384\u73B9\u73FE\u7729\u774D\u7D43\u7D62\u7E23\u8237\u8852\uFA0A\u8CE2\u9249\u986F\u5B51\u7A74\u8840\u9801\u5ACC\u4FE0\u5354\u593E\u5CFD\u633E\u6D79\u72F9\u8105\u8107\u83A2\u92CF\u9830\u4EA8\u5144\u5211\u578B\"],[\"fba1\",\"\u5F62\u6CC2\u6ECE\u7005\u7050\u70AF\u7192\u73E9\u7469\u834A\u87A2\u8861\u9008\u90A2\u93A3\u99A8\u516E\u5F57\u60E0\u6167\u66B3\u8559\u8E4A\u91AF\u978B\u4E4E\u4E92\u547C\u58D5\u58FA\u597D\u5CB5\u5F27\u6236\u6248\u660A\u6667\u6BEB\u6D69\u6DCF\u6E56\u6EF8\u6F94\u6FE0\u6FE9\u705D\u72D0\u7425\u745A\u74E0\u7693\u795C\u7CCA\u7E1E\u80E1\u82A6\u846B\u84BF\u864E\u865F\u8774\u8B77\u8C6A\u93AC\u9800\u9865\u60D1\u6216\u9177\u5A5A\u660F\u6DF7\u6E3E\u743F\u9B42\u5FFD\u60DA\u7B0F\u54C4\u5F18\u6C5E\u6CD3\u6D2A\u70D8\u7D05\u8679\u8A0C\u9D3B\u5316\u548C\u5B05\u6A3A\u706B\u7575\"],[\"fca1\",\"\u798D\u79BE\u82B1\u83EF\u8A71\u8B41\u8CA8\u9774\uFA0B\u64F4\u652B\u78BA\u78BB\u7A6B\u4E38\u559A\u5950\u5BA6\u5E7B\u60A3\u63DB\u6B61\u6665\u6853\u6E19\u7165\u74B0\u7D08\u9084\u9A69\u9C25\u6D3B\u6ED1\u733E\u8C41\u95CA\u51F0\u5E4C\u5FA8\u604D\u60F6\u6130\u614C\u6643\u6644\u69A5\u6CC1\u6E5F\u6EC9\u6F62\u714C\u749C\u7687\u7BC1\u7C27\u8352\u8757\u9051\u968D\u9EC3\u532F\u56DE\u5EFB\u5F8A\u6062\u6094\u61F7\u6666\u6703\u6A9C\u6DEE\u6FAE\u7070\u736A\u7E6A\u81BE\u8334\u86D4\u8AA8\u8CC4\u5283\u7372\u5B96\u6A6B\u9404\u54EE\u5686\u5B5D\u6548\u6585\u66C9\u689F\u6D8D\u6DC6\"],[\"fda1\",\"\u723B\u80B4\u9175\u9A4D\u4FAF\u5019\u539A\u540E\u543C\u5589\u55C5\u5E3F\u5F8C\u673D\u7166\u73DD\u9005\u52DB\u52F3\u5864\u58CE\u7104\u718F\u71FB\u85B0\u8A13\u6688\u85A8\u55A7\u6684\u714A\u8431\u5349\u5599\u6BC1\u5F59\u5FBD\u63EE\u6689\u7147\u8AF1\u8F1D\u9EBE\u4F11\u643A\u70CB\u7566\u8667\u6064\u8B4E\u9DF8\u5147\u51F6\u5308\u6D36\u80F8\u9ED1\u6615\u6B23\u7098\u75D5\u5403\u5C79\u7D07\u8A16\u6B20\u6B3D\u6B46\u5438\u6070\u6D3D\u7FD5\u8208\u50D6\u51DE\u559C\u566B\u56CD\u59EC\u5B09\u5E0C\u6199\u6198\u6231\u665E\u66E6\u7199\u71B9\u71BA\u72A7\u79A7\u7A00\u7FB2\u8A70\"]]");
      /***/
    },

    /***/
    "kVK+":
    /*!***************************************!*\
      !*** ./node_modules/ieee754/index.js ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function kVK(module, exports) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
      exports.read = function (buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;

        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;

        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }

        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };

      exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);

        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);

          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }

          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }

          if (value * c >= 2) {
            e++;
            c /= 2;
          }

          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }

        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

        e = e << mLen | m;
        eLen += mLen;

        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

        buffer[offset + i - d] |= s * 128;
      };
      /***/

    },

    /***/
    "laj0":
    /*!************************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/tables/eucjp.json ***!
      \************************************************************************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, default */

    /***/
    function laj0(module) {
      module.exports = JSON.parse("[[\"0\",\"\\u0000\",127],[\"8ea1\",\"\uFF61\",62],[\"a1a1\",\"\u3000\u3001\u3002\uFF0C\uFF0E\u30FB\uFF1A\uFF1B\uFF1F\uFF01\u309B\u309C\xB4\uFF40\xA8\uFF3E\uFFE3\uFF3F\u30FD\u30FE\u309D\u309E\u3003\u4EDD\u3005\u3006\u3007\u30FC\u2015\u2010\uFF0F\uFF3C\uFF5E\u2225\uFF5C\u2026\u2025\u2018\u2019\u201C\u201D\uFF08\uFF09\u3014\u3015\uFF3B\uFF3D\uFF5B\uFF5D\u3008\",9,\"\uFF0B\uFF0D\xB1\xD7\xF7\uFF1D\u2260\uFF1C\uFF1E\u2266\u2267\u221E\u2234\u2642\u2640\xB0\u2032\u2033\u2103\uFFE5\uFF04\uFFE0\uFFE1\uFF05\uFF03\uFF06\uFF0A\uFF20\xA7\u2606\u2605\u25CB\u25CF\u25CE\u25C7\"],[\"a2a1\",\"\u25C6\u25A1\u25A0\u25B3\u25B2\u25BD\u25BC\u203B\u3012\u2192\u2190\u2191\u2193\u3013\"],[\"a2ba\",\"\u2208\u220B\u2286\u2287\u2282\u2283\u222A\u2229\"],[\"a2ca\",\"\u2227\u2228\uFFE2\u21D2\u21D4\u2200\u2203\"],[\"a2dc\",\"\u2220\u22A5\u2312\u2202\u2207\u2261\u2252\u226A\u226B\u221A\u223D\u221D\u2235\u222B\u222C\"],[\"a2f2\",\"\u212B\u2030\u266F\u266D\u266A\u2020\u2021\xB6\"],[\"a2fe\",\"\u25EF\"],[\"a3b0\",\"\uFF10\",9],[\"a3c1\",\"\uFF21\",25],[\"a3e1\",\"\uFF41\",25],[\"a4a1\",\"\u3041\",82],[\"a5a1\",\"\u30A1\",85],[\"a6a1\",\"\u0391\",16,\"\u03A3\",6],[\"a6c1\",\"\u03B1\",16,\"\u03C3\",6],[\"a7a1\",\"\u0410\",5,\"\u0401\u0416\",25],[\"a7d1\",\"\u0430\",5,\"\u0451\u0436\",25],[\"a8a1\",\"\u2500\u2502\u250C\u2510\u2518\u2514\u251C\u252C\u2524\u2534\u253C\u2501\u2503\u250F\u2513\u251B\u2517\u2523\u2533\u252B\u253B\u254B\u2520\u252F\u2528\u2537\u253F\u251D\u2530\u2525\u2538\u2542\"],[\"ada1\",\"\u2460\",19,\"\u2160\",9],[\"adc0\",\"\u3349\u3314\u3322\u334D\u3318\u3327\u3303\u3336\u3351\u3357\u330D\u3326\u3323\u332B\u334A\u333B\u339C\u339D\u339E\u338E\u338F\u33C4\u33A1\"],[\"addf\",\"\u337B\u301D\u301F\u2116\u33CD\u2121\u32A4\",4,\"\u3231\u3232\u3239\u337E\u337D\u337C\u2252\u2261\u222B\u222E\u2211\u221A\u22A5\u2220\u221F\u22BF\u2235\u2229\u222A\"],[\"b0a1\",\"\u4E9C\u5516\u5A03\u963F\u54C0\u611B\u6328\u59F6\u9022\u8475\u831C\u7A50\u60AA\u63E1\u6E25\u65ED\u8466\u82A6\u9BF5\u6893\u5727\u65A1\u6271\u5B9B\u59D0\u867B\u98F4\u7D62\u7DBE\u9B8E\u6216\u7C9F\u88B7\u5B89\u5EB5\u6309\u6697\u6848\u95C7\u978D\u674F\u4EE5\u4F0A\u4F4D\u4F9D\u5049\u56F2\u5937\u59D4\u5A01\u5C09\u60DF\u610F\u6170\u6613\u6905\u70BA\u754F\u7570\u79FB\u7DAD\u7DEF\u80C3\u840E\u8863\u8B02\u9055\u907A\u533B\u4E95\u4EA5\u57DF\u80B2\u90C1\u78EF\u4E00\u58F1\u6EA2\u9038\u7A32\u8328\u828B\u9C2F\u5141\u5370\u54BD\u54E1\u56E0\u59FB\u5F15\u98F2\u6DEB\u80E4\u852D\"],[\"b1a1\",\"\u9662\u9670\u96A0\u97FB\u540B\u53F3\u5B87\u70CF\u7FBD\u8FC2\u96E8\u536F\u9D5C\u7ABA\u4E11\u7893\u81FC\u6E26\u5618\u5504\u6B1D\u851A\u9C3B\u59E5\u53A9\u6D66\u74DC\u958F\u5642\u4E91\u904B\u96F2\u834F\u990C\u53E1\u55B6\u5B30\u5F71\u6620\u66F3\u6804\u6C38\u6CF3\u6D29\u745B\u76C8\u7A4E\u9834\u82F1\u885B\u8A60\u92ED\u6DB2\u75AB\u76CA\u99C5\u60A6\u8B01\u8D8A\u95B2\u698E\u53AD\u5186\u5712\u5830\u5944\u5BB4\u5EF6\u6028\u63A9\u63F4\u6CBF\u6F14\u708E\u7114\u7159\u71D5\u733F\u7E01\u8276\u82D1\u8597\u9060\u925B\u9D1B\u5869\u65BC\u6C5A\u7525\u51F9\u592E\u5965\u5F80\u5FDC\"],[\"b2a1\",\"\u62BC\u65FA\u6A2A\u6B27\u6BB4\u738B\u7FC1\u8956\u9D2C\u9D0E\u9EC4\u5CA1\u6C96\u837B\u5104\u5C4B\u61B6\u81C6\u6876\u7261\u4E59\u4FFA\u5378\u6069\u6E29\u7A4F\u97F3\u4E0B\u5316\u4EEE\u4F55\u4F3D\u4FA1\u4F73\u52A0\u53EF\u5609\u590F\u5AC1\u5BB6\u5BE1\u79D1\u6687\u679C\u67B6\u6B4C\u6CB3\u706B\u73C2\u798D\u79BE\u7A3C\u7B87\u82B1\u82DB\u8304\u8377\u83EF\u83D3\u8766\u8AB2\u5629\u8CA8\u8FE6\u904E\u971E\u868A\u4FC4\u5CE8\u6211\u7259\u753B\u81E5\u82BD\u86FE\u8CC0\u96C5\u9913\u99D5\u4ECB\u4F1A\u89E3\u56DE\u584A\u58CA\u5EFB\u5FEB\u602A\u6094\u6062\u61D0\u6212\u62D0\u6539\"],[\"b3a1\",\"\u9B41\u6666\u68B0\u6D77\u7070\u754C\u7686\u7D75\u82A5\u87F9\u958B\u968E\u8C9D\u51F1\u52BE\u5916\u54B3\u5BB3\u5D16\u6168\u6982\u6DAF\u788D\u84CB\u8857\u8A72\u93A7\u9AB8\u6D6C\u99A8\u86D9\u57A3\u67FF\u86CE\u920E\u5283\u5687\u5404\u5ED3\u62E1\u64B9\u683C\u6838\u6BBB\u7372\u78BA\u7A6B\u899A\u89D2\u8D6B\u8F03\u90ED\u95A3\u9694\u9769\u5B66\u5CB3\u697D\u984D\u984E\u639B\u7B20\u6A2B\u6A7F\u68B6\u9C0D\u6F5F\u5272\u559D\u6070\u62EC\u6D3B\u6E07\u6ED1\u845B\u8910\u8F44\u4E14\u9C39\u53F6\u691B\u6A3A\u9784\u682A\u515C\u7AC3\u84B2\u91DC\u938C\u565B\u9D28\u6822\u8305\u8431\"],[\"b4a1\",\"\u7CA5\u5208\u82C5\u74E6\u4E7E\u4F83\u51A0\u5BD2\u520A\u52D8\u52E7\u5DFB\u559A\u582A\u59E6\u5B8C\u5B98\u5BDB\u5E72\u5E79\u60A3\u611F\u6163\u61BE\u63DB\u6562\u67D1\u6853\u68FA\u6B3E\u6B53\u6C57\u6F22\u6F97\u6F45\u74B0\u7518\u76E3\u770B\u7AFF\u7BA1\u7C21\u7DE9\u7F36\u7FF0\u809D\u8266\u839E\u89B3\u8ACC\u8CAB\u9084\u9451\u9593\u9591\u95A2\u9665\u97D3\u9928\u8218\u4E38\u542B\u5CB8\u5DCC\u73A9\u764C\u773C\u5CA9\u7FEB\u8D0B\u96C1\u9811\u9854\u9858\u4F01\u4F0E\u5371\u559C\u5668\u57FA\u5947\u5B09\u5BC4\u5C90\u5E0C\u5E7E\u5FCC\u63EE\u673A\u65D7\u65E2\u671F\u68CB\u68C4\"],[\"b5a1\",\"\u6A5F\u5E30\u6BC5\u6C17\u6C7D\u757F\u7948\u5B63\u7A00\u7D00\u5FBD\u898F\u8A18\u8CB4\u8D77\u8ECC\u8F1D\u98E2\u9A0E\u9B3C\u4E80\u507D\u5100\u5993\u5B9C\u622F\u6280\u64EC\u6B3A\u72A0\u7591\u7947\u7FA9\u87FB\u8ABC\u8B70\u63AC\u83CA\u97A0\u5409\u5403\u55AB\u6854\u6A58\u8A70\u7827\u6775\u9ECD\u5374\u5BA2\u811A\u8650\u9006\u4E18\u4E45\u4EC7\u4F11\u53CA\u5438\u5BAE\u5F13\u6025\u6551\u673D\u6C42\u6C72\u6CE3\u7078\u7403\u7A76\u7AAE\u7B08\u7D1A\u7CFE\u7D66\u65E7\u725B\u53BB\u5C45\u5DE8\u62D2\u62E0\u6319\u6E20\u865A\u8A31\u8DDD\u92F8\u6F01\u79A6\u9B5A\u4EA8\u4EAB\u4EAC\"],[\"b6a1\",\"\u4F9B\u4FA0\u50D1\u5147\u7AF6\u5171\u51F6\u5354\u5321\u537F\u53EB\u55AC\u5883\u5CE1\u5F37\u5F4A\u602F\u6050\u606D\u631F\u6559\u6A4B\u6CC1\u72C2\u72ED\u77EF\u80F8\u8105\u8208\u854E\u90F7\u93E1\u97FF\u9957\u9A5A\u4EF0\u51DD\u5C2D\u6681\u696D\u5C40\u66F2\u6975\u7389\u6850\u7C81\u50C5\u52E4\u5747\u5DFE\u9326\u65A4\u6B23\u6B3D\u7434\u7981\u79BD\u7B4B\u7DCA\u82B9\u83CC\u887F\u895F\u8B39\u8FD1\u91D1\u541F\u9280\u4E5D\u5036\u53E5\u533A\u72D7\u7396\u77E9\u82E6\u8EAF\u99C6\u99C8\u99D2\u5177\u611A\u865E\u55B0\u7A7A\u5076\u5BD3\u9047\u9685\u4E32\u6ADB\u91E7\u5C51\u5C48\"],[\"b7a1\",\"\u6398\u7A9F\u6C93\u9774\u8F61\u7AAA\u718A\u9688\u7C82\u6817\u7E70\u6851\u936C\u52F2\u541B\u85AB\u8A13\u7FA4\u8ECD\u90E1\u5366\u8888\u7941\u4FC2\u50BE\u5211\u5144\u5553\u572D\u73EA\u578B\u5951\u5F62\u5F84\u6075\u6176\u6167\u61A9\u63B2\u643A\u656C\u666F\u6842\u6E13\u7566\u7A3D\u7CFB\u7D4C\u7D99\u7E4B\u7F6B\u830E\u834A\u86CD\u8A08\u8A63\u8B66\u8EFD\u981A\u9D8F\u82B8\u8FCE\u9BE8\u5287\u621F\u6483\u6FC0\u9699\u6841\u5091\u6B20\u6C7A\u6F54\u7A74\u7D50\u8840\u8A23\u6708\u4EF6\u5039\u5026\u5065\u517C\u5238\u5263\u55A7\u570F\u5805\u5ACC\u5EFA\u61B2\u61F8\u62F3\u6372\"],[\"b8a1\",\"\u691C\u6A29\u727D\u72AC\u732E\u7814\u786F\u7D79\u770C\u80A9\u898B\u8B19\u8CE2\u8ED2\u9063\u9375\u967A\u9855\u9A13\u9E78\u5143\u539F\u53B3\u5E7B\u5F26\u6E1B\u6E90\u7384\u73FE\u7D43\u8237\u8A00\u8AFA\u9650\u4E4E\u500B\u53E4\u547C\u56FA\u59D1\u5B64\u5DF1\u5EAB\u5F27\u6238\u6545\u67AF\u6E56\u72D0\u7CCA\u88B4\u80A1\u80E1\u83F0\u864E\u8A87\u8DE8\u9237\u96C7\u9867\u9F13\u4E94\u4E92\u4F0D\u5348\u5449\u543E\u5A2F\u5F8C\u5FA1\u609F\u68A7\u6A8E\u745A\u7881\u8A9E\u8AA4\u8B77\u9190\u4E5E\u9BC9\u4EA4\u4F7C\u4FAF\u5019\u5016\u5149\u516C\u529F\u52B9\u52FE\u539A\u53E3\u5411\"],[\"b9a1\",\"\u540E\u5589\u5751\u57A2\u597D\u5B54\u5B5D\u5B8F\u5DE5\u5DE7\u5DF7\u5E78\u5E83\u5E9A\u5EB7\u5F18\u6052\u614C\u6297\u62D8\u63A7\u653B\u6602\u6643\u66F4\u676D\u6821\u6897\u69CB\u6C5F\u6D2A\u6D69\u6E2F\u6E9D\u7532\u7687\u786C\u7A3F\u7CE0\u7D05\u7D18\u7D5E\u7DB1\u8015\u8003\u80AF\u80B1\u8154\u818F\u822A\u8352\u884C\u8861\u8B1B\u8CA2\u8CFC\u90CA\u9175\u9271\u783F\u92FC\u95A4\u964D\u9805\u9999\u9AD8\u9D3B\u525B\u52AB\u53F7\u5408\u58D5\u62F7\u6FE0\u8C6A\u8F5F\u9EB9\u514B\u523B\u544A\u56FD\u7A40\u9177\u9D60\u9ED2\u7344\u6F09\u8170\u7511\u5FFD\u60DA\u9AA8\u72DB\u8FBC\"],[\"baa1\",\"\u6B64\u9803\u4ECA\u56F0\u5764\u58BE\u5A5A\u6068\u61C7\u660F\u6606\u6839\u68B1\u6DF7\u75D5\u7D3A\u826E\u9B42\u4E9B\u4F50\u53C9\u5506\u5D6F\u5DE6\u5DEE\u67FB\u6C99\u7473\u7802\u8A50\u9396\u88DF\u5750\u5EA7\u632B\u50B5\u50AC\u518D\u6700\u54C9\u585E\u59BB\u5BB0\u5F69\u624D\u63A1\u683D\u6B73\u6E08\u707D\u91C7\u7280\u7815\u7826\u796D\u658E\u7D30\u83DC\u88C1\u8F09\u969B\u5264\u5728\u6750\u7F6A\u8CA1\u51B4\u5742\u962A\u583A\u698A\u80B4\u54B2\u5D0E\u57FC\u7895\u9DFA\u4F5C\u524A\u548B\u643E\u6628\u6714\u67F5\u7A84\u7B56\u7D22\u932F\u685C\u9BAD\u7B39\u5319\u518A\u5237\"],[\"bba1\",\"\u5BDF\u62F6\u64AE\u64E6\u672D\u6BBA\u85A9\u96D1\u7690\u9BD6\u634C\u9306\u9BAB\u76BF\u6652\u4E09\u5098\u53C2\u5C71\u60E8\u6492\u6563\u685F\u71E6\u73CA\u7523\u7B97\u7E82\u8695\u8B83\u8CDB\u9178\u9910\u65AC\u66AB\u6B8B\u4ED5\u4ED4\u4F3A\u4F7F\u523A\u53F8\u53F2\u55E3\u56DB\u58EB\u59CB\u59C9\u59FF\u5B50\u5C4D\u5E02\u5E2B\u5FD7\u601D\u6307\u652F\u5B5C\u65AF\u65BD\u65E8\u679D\u6B62\u6B7B\u6C0F\u7345\u7949\u79C1\u7CF8\u7D19\u7D2B\u80A2\u8102\u81F3\u8996\u8A5E\u8A69\u8A66\u8A8C\u8AEE\u8CC7\u8CDC\u96CC\u98FC\u6B6F\u4E8B\u4F3C\u4F8D\u5150\u5B57\u5BFA\u6148\u6301\u6642\"],[\"bca1\",\"\u6B21\u6ECB\u6CBB\u723E\u74BD\u75D4\u78C1\u793A\u800C\u8033\u81EA\u8494\u8F9E\u6C50\u9E7F\u5F0F\u8B58\u9D2B\u7AFA\u8EF8\u5B8D\u96EB\u4E03\u53F1\u57F7\u5931\u5AC9\u5BA4\u6089\u6E7F\u6F06\u75BE\u8CEA\u5B9F\u8500\u7BE0\u5072\u67F4\u829D\u5C61\u854A\u7E1E\u820E\u5199\u5C04\u6368\u8D66\u659C\u716E\u793E\u7D17\u8005\u8B1D\u8ECA\u906E\u86C7\u90AA\u501F\u52FA\u5C3A\u6753\u707C\u7235\u914C\u91C8\u932B\u82E5\u5BC2\u5F31\u60F9\u4E3B\u53D6\u5B88\u624B\u6731\u6B8A\u72E9\u73E0\u7A2E\u816B\u8DA3\u9152\u9996\u5112\u53D7\u546A\u5BFF\u6388\u6A39\u7DAC\u9700\u56DA\u53CE\u5468\"],[\"bda1\",\"\u5B97\u5C31\u5DDE\u4FEE\u6101\u62FE\u6D32\u79C0\u79CB\u7D42\u7E4D\u7FD2\u81ED\u821F\u8490\u8846\u8972\u8B90\u8E74\u8F2F\u9031\u914B\u916C\u96C6\u919C\u4EC0\u4F4F\u5145\u5341\u5F93\u620E\u67D4\u6C41\u6E0B\u7363\u7E26\u91CD\u9283\u53D4\u5919\u5BBF\u6DD1\u795D\u7E2E\u7C9B\u587E\u719F\u51FA\u8853\u8FF0\u4FCA\u5CFB\u6625\u77AC\u7AE3\u821C\u99FF\u51C6\u5FAA\u65EC\u696F\u6B89\u6DF3\u6E96\u6F64\u76FE\u7D14\u5DE1\u9075\u9187\u9806\u51E6\u521D\u6240\u6691\u66D9\u6E1A\u5EB6\u7DD2\u7F72\u66F8\u85AF\u85F7\u8AF8\u52A9\u53D9\u5973\u5E8F\u5F90\u6055\u92E4\u9664\u50B7\u511F\"],[\"bea1\",\"\u52DD\u5320\u5347\u53EC\u54E8\u5546\u5531\u5617\u5968\u59BE\u5A3C\u5BB5\u5C06\u5C0F\u5C11\u5C1A\u5E84\u5E8A\u5EE0\u5F70\u627F\u6284\u62DB\u638C\u6377\u6607\u660C\u662D\u6676\u677E\u68A2\u6A1F\u6A35\u6CBC\u6D88\u6E09\u6E58\u713C\u7126\u7167\u75C7\u7701\u785D\u7901\u7965\u79F0\u7AE0\u7B11\u7CA7\u7D39\u8096\u83D6\u848B\u8549\u885D\u88F3\u8A1F\u8A3C\u8A54\u8A73\u8C61\u8CDE\u91A4\u9266\u937E\u9418\u969C\u9798\u4E0A\u4E08\u4E1E\u4E57\u5197\u5270\u57CE\u5834\u58CC\u5B22\u5E38\u60C5\u64FE\u6761\u6756\u6D44\u72B6\u7573\u7A63\u84B8\u8B72\u91B8\u9320\u5631\u57F4\u98FE\"],[\"bfa1\",\"\u62ED\u690D\u6B96\u71ED\u7E54\u8077\u8272\u89E6\u98DF\u8755\u8FB1\u5C3B\u4F38\u4FE1\u4FB5\u5507\u5A20\u5BDD\u5BE9\u5FC3\u614E\u632F\u65B0\u664B\u68EE\u699B\u6D78\u6DF1\u7533\u75B9\u771F\u795E\u79E6\u7D33\u81E3\u82AF\u85AA\u89AA\u8A3A\u8EAB\u8F9B\u9032\u91DD\u9707\u4EBA\u4EC1\u5203\u5875\u58EC\u5C0B\u751A\u5C3D\u814E\u8A0A\u8FC5\u9663\u976D\u7B25\u8ACF\u9808\u9162\u56F3\u53A8\u9017\u5439\u5782\u5E25\u63A8\u6C34\u708A\u7761\u7C8B\u7FE0\u8870\u9042\u9154\u9310\u9318\u968F\u745E\u9AC4\u5D07\u5D69\u6570\u67A2\u8DA8\u96DB\u636E\u6749\u6919\u83C5\u9817\u96C0\u88FE\"],[\"c0a1\",\"\u6F84\u647A\u5BF8\u4E16\u702C\u755D\u662F\u51C4\u5236\u52E2\u59D3\u5F81\u6027\u6210\u653F\u6574\u661F\u6674\u68F2\u6816\u6B63\u6E05\u7272\u751F\u76DB\u7CBE\u8056\u58F0\u88FD\u897F\u8AA0\u8A93\u8ACB\u901D\u9192\u9752\u9759\u6589\u7A0E\u8106\u96BB\u5E2D\u60DC\u621A\u65A5\u6614\u6790\u77F3\u7A4D\u7C4D\u7E3E\u810A\u8CAC\u8D64\u8DE1\u8E5F\u78A9\u5207\u62D9\u63A5\u6442\u6298\u8A2D\u7A83\u7BC0\u8AAC\u96EA\u7D76\u820C\u8749\u4ED9\u5148\u5343\u5360\u5BA3\u5C02\u5C16\u5DDD\u6226\u6247\u64B0\u6813\u6834\u6CC9\u6D45\u6D17\u67D3\u6F5C\u714E\u717D\u65CB\u7A7F\u7BAD\u7DDA\"],[\"c1a1\",\"\u7E4A\u7FA8\u817A\u821B\u8239\u85A6\u8A6E\u8CCE\u8DF5\u9078\u9077\u92AD\u9291\u9583\u9BAE\u524D\u5584\u6F38\u7136\u5168\u7985\u7E55\u81B3\u7CCE\u564C\u5851\u5CA8\u63AA\u66FE\u66FD\u695A\u72D9\u758F\u758E\u790E\u7956\u79DF\u7C97\u7D20\u7D44\u8607\u8A34\u963B\u9061\u9F20\u50E7\u5275\u53CC\u53E2\u5009\u55AA\u58EE\u594F\u723D\u5B8B\u5C64\u531D\u60E3\u60F3\u635C\u6383\u633F\u63BB\u64CD\u65E9\u66F9\u5DE3\u69CD\u69FD\u6F15\u71E5\u4E89\u75E9\u76F8\u7A93\u7CDF\u7DCF\u7D9C\u8061\u8349\u8358\u846C\u84BC\u85FB\u88C5\u8D70\u9001\u906D\u9397\u971C\u9A12\u50CF\u5897\u618E\"],[\"c2a1\",\"\u81D3\u8535\u8D08\u9020\u4FC3\u5074\u5247\u5373\u606F\u6349\u675F\u6E2C\u8DB3\u901F\u4FD7\u5C5E\u8CCA\u65CF\u7D9A\u5352\u8896\u5176\u63C3\u5B58\u5B6B\u5C0A\u640D\u6751\u905C\u4ED6\u591A\u592A\u6C70\u8A51\u553E\u5815\u59A5\u60F0\u6253\u67C1\u8235\u6955\u9640\u99C4\u9A28\u4F53\u5806\u5BFE\u8010\u5CB1\u5E2F\u5F85\u6020\u614B\u6234\u66FF\u6CF0\u6EDE\u80CE\u817F\u82D4\u888B\u8CB8\u9000\u902E\u968A\u9EDB\u9BDB\u4EE3\u53F0\u5927\u7B2C\u918D\u984C\u9DF9\u6EDD\u7027\u5353\u5544\u5B85\u6258\u629E\u62D3\u6CA2\u6FEF\u7422\u8A17\u9438\u6FC1\u8AFE\u8338\u51E7\u86F8\u53EA\"],[\"c3a1\",\"\u53E9\u4F46\u9054\u8FB0\u596A\u8131\u5DFD\u7AEA\u8FBF\u68DA\u8C37\u72F8\u9C48\u6A3D\u8AB0\u4E39\u5358\u5606\u5766\u62C5\u63A2\u65E6\u6B4E\u6DE1\u6E5B\u70AD\u77ED\u7AEF\u7BAA\u7DBB\u803D\u80C6\u86CB\u8A95\u935B\u56E3\u58C7\u5F3E\u65AD\u6696\u6A80\u6BB5\u7537\u8AC7\u5024\u77E5\u5730\u5F1B\u6065\u667A\u6C60\u75F4\u7A1A\u7F6E\u81F4\u8718\u9045\u99B3\u7BC9\u755C\u7AF9\u7B51\u84C4\u9010\u79E9\u7A92\u8336\u5AE1\u7740\u4E2D\u4EF2\u5B99\u5FE0\u62BD\u663C\u67F1\u6CE8\u866B\u8877\u8A3B\u914E\u92F3\u99D0\u6A17\u7026\u732A\u82E7\u8457\u8CAF\u4E01\u5146\u51CB\u558B\u5BF5\"],[\"c4a1\",\"\u5E16\u5E33\u5E81\u5F14\u5F35\u5F6B\u5FB4\u61F2\u6311\u66A2\u671D\u6F6E\u7252\u753A\u773A\u8074\u8139\u8178\u8776\u8ABF\u8ADC\u8D85\u8DF3\u929A\u9577\u9802\u9CE5\u52C5\u6357\u76F4\u6715\u6C88\u73CD\u8CC3\u93AE\u9673\u6D25\u589C\u690E\u69CC\u8FFD\u939A\u75DB\u901A\u585A\u6802\u63B4\u69FB\u4F43\u6F2C\u67D8\u8FBB\u8526\u7DB4\u9354\u693F\u6F70\u576A\u58F7\u5B2C\u7D2C\u722A\u540A\u91E3\u9DB4\u4EAD\u4F4E\u505C\u5075\u5243\u8C9E\u5448\u5824\u5B9A\u5E1D\u5E95\u5EAD\u5EF7\u5F1F\u608C\u62B5\u633A\u63D0\u68AF\u6C40\u7887\u798E\u7A0B\u7DE0\u8247\u8A02\u8AE6\u8E44\u9013\"],[\"c5a1\",\"\u90B8\u912D\u91D8\u9F0E\u6CE5\u6458\u64E2\u6575\u6EF4\u7684\u7B1B\u9069\u93D1\u6EBA\u54F2\u5FB9\u64A4\u8F4D\u8FED\u9244\u5178\u586B\u5929\u5C55\u5E97\u6DFB\u7E8F\u751C\u8CBC\u8EE2\u985B\u70B9\u4F1D\u6BBF\u6FB1\u7530\u96FB\u514E\u5410\u5835\u5857\u59AC\u5C60\u5F92\u6597\u675C\u6E21\u767B\u83DF\u8CED\u9014\u90FD\u934D\u7825\u783A\u52AA\u5EA6\u571F\u5974\u6012\u5012\u515A\u51AC\u51CD\u5200\u5510\u5854\u5858\u5957\u5B95\u5CF6\u5D8B\u60BC\u6295\u642D\u6771\u6843\u68BC\u68DF\u76D7\u6DD8\u6E6F\u6D9B\u706F\u71C8\u5F53\u75D8\u7977\u7B49\u7B54\u7B52\u7CD6\u7D71\u5230\"],[\"c6a1\",\"\u8463\u8569\u85E4\u8A0E\u8B04\u8C46\u8E0F\u9003\u900F\u9419\u9676\u982D\u9A30\u95D8\u50CD\u52D5\u540C\u5802\u5C0E\u61A7\u649E\u6D1E\u77B3\u7AE5\u80F4\u8404\u9053\u9285\u5CE0\u9D07\u533F\u5F97\u5FB3\u6D9C\u7279\u7763\u79BF\u7BE4\u6BD2\u72EC\u8AAD\u6803\u6A61\u51F8\u7A81\u6934\u5C4A\u9CF6\u82EB\u5BC5\u9149\u701E\u5678\u5C6F\u60C7\u6566\u6C8C\u8C5A\u9041\u9813\u5451\u66C7\u920D\u5948\u90A3\u5185\u4E4D\u51EA\u8599\u8B0E\u7058\u637A\u934B\u6962\u99B4\u7E04\u7577\u5357\u6960\u8EDF\u96E3\u6C5D\u4E8C\u5C3C\u5F10\u8FE9\u5302\u8CD1\u8089\u8679\u5EFF\u65E5\u4E73\u5165\"],[\"c7a1\",\"\u5982\u5C3F\u97EE\u4EFB\u598A\u5FCD\u8A8D\u6FE1\u79B0\u7962\u5BE7\u8471\u732B\u71B1\u5E74\u5FF5\u637B\u649A\u71C3\u7C98\u4E43\u5EFC\u4E4B\u57DC\u56A2\u60A9\u6FC3\u7D0D\u80FD\u8133\u81BF\u8FB2\u8997\u86A4\u5DF4\u628A\u64AD\u8987\u6777\u6CE2\u6D3E\u7436\u7834\u5A46\u7F75\u82AD\u99AC\u4FF3\u5EC3\u62DD\u6392\u6557\u676F\u76C3\u724C\u80CC\u80BA\u8F29\u914D\u500D\u57F9\u5A92\u6885\u6973\u7164\u72FD\u8CB7\u58F2\u8CE0\u966A\u9019\u877F\u79E4\u77E7\u8429\u4F2F\u5265\u535A\u62CD\u67CF\u6CCA\u767D\u7B94\u7C95\u8236\u8584\u8FEB\u66DD\u6F20\u7206\u7E1B\u83AB\u99C1\u9EA6\"],[\"c8a1\",\"\u51FD\u7BB1\u7872\u7BB8\u8087\u7B48\u6AE8\u5E61\u808C\u7551\u7560\u516B\u9262\u6E8C\u767A\u9197\u9AEA\u4F10\u7F70\u629C\u7B4F\u95A5\u9CE9\u567A\u5859\u86E4\u96BC\u4F34\u5224\u534A\u53CD\u53DB\u5E06\u642C\u6591\u677F\u6C3E\u6C4E\u7248\u72AF\u73ED\u7554\u7E41\u822C\u85E9\u8CA9\u7BC4\u91C6\u7169\u9812\u98EF\u633D\u6669\u756A\u76E4\u78D0\u8543\u86EE\u532A\u5351\u5426\u5983\u5E87\u5F7C\u60B2\u6249\u6279\u62AB\u6590\u6BD4\u6CCC\u75B2\u76AE\u7891\u79D8\u7DCB\u7F77\u80A5\u88AB\u8AB9\u8CBB\u907F\u975E\u98DB\u6A0B\u7C38\u5099\u5C3E\u5FAE\u6787\u6BD8\u7435\u7709\u7F8E\"],[\"c9a1\",\"\u9F3B\u67CA\u7A17\u5339\u758B\u9AED\u5F66\u819D\u83F1\u8098\u5F3C\u5FC5\u7562\u7B46\u903C\u6867\u59EB\u5A9B\u7D10\u767E\u8B2C\u4FF5\u5F6A\u6A19\u6C37\u6F02\u74E2\u7968\u8868\u8A55\u8C79\u5EDF\u63CF\u75C5\u79D2\u82D7\u9328\u92F2\u849C\u86ED\u9C2D\u54C1\u5F6C\u658C\u6D5C\u7015\u8CA7\u8CD3\u983B\u654F\u74F6\u4E0D\u4ED8\u57E0\u592B\u5A66\u5BCC\u51A8\u5E03\u5E9C\u6016\u6276\u6577\u65A7\u666E\u6D6E\u7236\u7B26\u8150\u819A\u8299\u8B5C\u8CA0\u8CE6\u8D74\u961C\u9644\u4FAE\u64AB\u6B66\u821E\u8461\u856A\u90E8\u5C01\u6953\u98A8\u847A\u8557\u4F0F\u526F\u5FA9\u5E45\u670D\"],[\"caa1\",\"\u798F\u8179\u8907\u8986\u6DF5\u5F17\u6255\u6CB8\u4ECF\u7269\u9B92\u5206\u543B\u5674\u58B3\u61A4\u626E\u711A\u596E\u7C89\u7CDE\u7D1B\u96F0\u6587\u805E\u4E19\u4F75\u5175\u5840\u5E63\u5E73\u5F0A\u67C4\u4E26\u853D\u9589\u965B\u7C73\u9801\u50FB\u58C1\u7656\u78A7\u5225\u77A5\u8511\u7B86\u504F\u5909\u7247\u7BC7\u7DE8\u8FBA\u8FD4\u904D\u4FBF\u52C9\u5A29\u5F01\u97AD\u4FDD\u8217\u92EA\u5703\u6355\u6B69\u752B\u88DC\u8F14\u7A42\u52DF\u5893\u6155\u620A\u66AE\u6BCD\u7C3F\u83E9\u5023\u4FF8\u5305\u5446\u5831\u5949\u5B9D\u5CF0\u5CEF\u5D29\u5E96\u62B1\u6367\u653E\u65B9\u670B\"],[\"cba1\",\"\u6CD5\u6CE1\u70F9\u7832\u7E2B\u80DE\u82B3\u840C\u84EC\u8702\u8912\u8A2A\u8C4A\u90A6\u92D2\u98FD\u9CF3\u9D6C\u4E4F\u4EA1\u508D\u5256\u574A\u59A8\u5E3D\u5FD8\u5FD9\u623F\u66B4\u671B\u67D0\u68D2\u5192\u7D21\u80AA\u81A8\u8B00\u8C8C\u8CBF\u927E\u9632\u5420\u982C\u5317\u50D5\u535C\u58A8\u64B2\u6734\u7267\u7766\u7A46\u91E6\u52C3\u6CA1\u6B86\u5800\u5E4C\u5954\u672C\u7FFB\u51E1\u76C6\u6469\u78E8\u9B54\u9EBB\u57CB\u59B9\u6627\u679A\u6BCE\u54E9\u69D9\u5E55\u819C\u6795\u9BAA\u67FE\u9C52\u685D\u4EA6\u4FE3\u53C8\u62B9\u672B\u6CAB\u8FC4\u4FAD\u7E6D\u9EBF\u4E07\u6162\u6E80\"],[\"cca1\",\"\u6F2B\u8513\u5473\u672A\u9B45\u5DF3\u7B95\u5CAC\u5BC6\u871C\u6E4A\u84D1\u7A14\u8108\u5999\u7C8D\u6C11\u7720\u52D9\u5922\u7121\u725F\u77DB\u9727\u9D61\u690B\u5A7F\u5A18\u51A5\u540D\u547D\u660E\u76DF\u8FF7\u9298\u9CF4\u59EA\u725D\u6EC5\u514D\u68C9\u7DBF\u7DEC\u9762\u9EBA\u6478\u6A21\u8302\u5984\u5B5F\u6BDB\u731B\u76F2\u7DB2\u8017\u8499\u5132\u6728\u9ED9\u76EE\u6762\u52FF\u9905\u5C24\u623B\u7C7E\u8CB0\u554F\u60B6\u7D0B\u9580\u5301\u4E5F\u51B6\u591C\u723A\u8036\u91CE\u5F25\u77E2\u5384\u5F79\u7D04\u85AC\u8A33\u8E8D\u9756\u67F3\u85AE\u9453\u6109\u6108\u6CB9\u7652\"],[\"cda1\",\"\u8AED\u8F38\u552F\u4F51\u512A\u52C7\u53CB\u5BA5\u5E7D\u60A0\u6182\u63D6\u6709\u67DA\u6E67\u6D8C\u7336\u7337\u7531\u7950\u88D5\u8A98\u904A\u9091\u90F5\u96C4\u878D\u5915\u4E88\u4F59\u4E0E\u8A89\u8F3F\u9810\u50AD\u5E7C\u5996\u5BB9\u5EB8\u63DA\u63FA\u64C1\u66DC\u694A\u69D8\u6D0B\u6EB6\u7194\u7528\u7AAF\u7F8A\u8000\u8449\u84C9\u8981\u8B21\u8E0A\u9065\u967D\u990A\u617E\u6291\u6B32\u6C83\u6D74\u7FCC\u7FFC\u6DC0\u7F85\u87BA\u88F8\u6765\u83B1\u983C\u96F7\u6D1B\u7D61\u843D\u916A\u4E71\u5375\u5D50\u6B04\u6FEB\u85CD\u862D\u89A7\u5229\u540F\u5C65\u674E\u68A8\u7406\u7483\"],[\"cea1\",\"\u75E2\u88CF\u88E1\u91CC\u96E2\u9678\u5F8B\u7387\u7ACB\u844E\u63A0\u7565\u5289\u6D41\u6E9C\u7409\u7559\u786B\u7C92\u9686\u7ADC\u9F8D\u4FB6\u616E\u65C5\u865C\u4E86\u4EAE\u50DA\u4E21\u51CC\u5BEE\u6599\u6881\u6DBC\u731F\u7642\u77AD\u7A1C\u7CE7\u826F\u8AD2\u907C\u91CF\u9675\u9818\u529B\u7DD1\u502B\u5398\u6797\u6DCB\u71D0\u7433\u81E8\u8F2A\u96A3\u9C57\u9E9F\u7460\u5841\u6D99\u7D2F\u985E\u4EE4\u4F36\u4F8B\u51B7\u52B1\u5DBA\u601C\u73B2\u793C\u82D3\u9234\u96B7\u96F6\u970A\u9E97\u9F62\u66A6\u6B74\u5217\u52A3\u70C8\u88C2\u5EC9\u604B\u6190\u6F23\u7149\u7C3E\u7DF4\u806F\"],[\"cfa1\",\"\u84EE\u9023\u932C\u5442\u9B6F\u6AD3\u7089\u8CC2\u8DEF\u9732\u52B4\u5A41\u5ECA\u5F04\u6717\u697C\u6994\u6D6A\u6F0F\u7262\u72FC\u7BED\u8001\u807E\u874B\u90CE\u516D\u9E93\u7984\u808B\u9332\u8AD6\u502D\u548C\u8A71\u6B6A\u8CC4\u8107\u60D1\u67A0\u9DF2\u4E99\u4E98\u9C10\u8A6B\u85C1\u8568\u6900\u6E7E\u7897\u8155\"],[\"d0a1\",\"\u5F0C\u4E10\u4E15\u4E2A\u4E31\u4E36\u4E3C\u4E3F\u4E42\u4E56\u4E58\u4E82\u4E85\u8C6B\u4E8A\u8212\u5F0D\u4E8E\u4E9E\u4E9F\u4EA0\u4EA2\u4EB0\u4EB3\u4EB6\u4ECE\u4ECD\u4EC4\u4EC6\u4EC2\u4ED7\u4EDE\u4EED\u4EDF\u4EF7\u4F09\u4F5A\u4F30\u4F5B\u4F5D\u4F57\u4F47\u4F76\u4F88\u4F8F\u4F98\u4F7B\u4F69\u4F70\u4F91\u4F6F\u4F86\u4F96\u5118\u4FD4\u4FDF\u4FCE\u4FD8\u4FDB\u4FD1\u4FDA\u4FD0\u4FE4\u4FE5\u501A\u5028\u5014\u502A\u5025\u5005\u4F1C\u4FF6\u5021\u5029\u502C\u4FFE\u4FEF\u5011\u5006\u5043\u5047\u6703\u5055\u5050\u5048\u505A\u5056\u506C\u5078\u5080\u509A\u5085\u50B4\u50B2\"],[\"d1a1\",\"\u50C9\u50CA\u50B3\u50C2\u50D6\u50DE\u50E5\u50ED\u50E3\u50EE\u50F9\u50F5\u5109\u5101\u5102\u5116\u5115\u5114\u511A\u5121\u513A\u5137\u513C\u513B\u513F\u5140\u5152\u514C\u5154\u5162\u7AF8\u5169\u516A\u516E\u5180\u5182\u56D8\u518C\u5189\u518F\u5191\u5193\u5195\u5196\u51A4\u51A6\u51A2\u51A9\u51AA\u51AB\u51B3\u51B1\u51B2\u51B0\u51B5\u51BD\u51C5\u51C9\u51DB\u51E0\u8655\u51E9\u51ED\u51F0\u51F5\u51FE\u5204\u520B\u5214\u520E\u5227\u522A\u522E\u5233\u5239\u524F\u5244\u524B\u524C\u525E\u5254\u526A\u5274\u5269\u5273\u527F\u527D\u528D\u5294\u5292\u5271\u5288\u5291\u8FA8\"],[\"d2a1\",\"\u8FA7\u52AC\u52AD\u52BC\u52B5\u52C1\u52CD\u52D7\u52DE\u52E3\u52E6\u98ED\u52E0\u52F3\u52F5\u52F8\u52F9\u5306\u5308\u7538\u530D\u5310\u530F\u5315\u531A\u5323\u532F\u5331\u5333\u5338\u5340\u5346\u5345\u4E17\u5349\u534D\u51D6\u535E\u5369\u536E\u5918\u537B\u5377\u5382\u5396\u53A0\u53A6\u53A5\u53AE\u53B0\u53B6\u53C3\u7C12\u96D9\u53DF\u66FC\u71EE\u53EE\u53E8\u53ED\u53FA\u5401\u543D\u5440\u542C\u542D\u543C\u542E\u5436\u5429\u541D\u544E\u548F\u5475\u548E\u545F\u5471\u5477\u5470\u5492\u547B\u5480\u5476\u5484\u5490\u5486\u54C7\u54A2\u54B8\u54A5\u54AC\u54C4\u54C8\u54A8\"],[\"d3a1\",\"\u54AB\u54C2\u54A4\u54BE\u54BC\u54D8\u54E5\u54E6\u550F\u5514\u54FD\u54EE\u54ED\u54FA\u54E2\u5539\u5540\u5563\u554C\u552E\u555C\u5545\u5556\u5557\u5538\u5533\u555D\u5599\u5580\u54AF\u558A\u559F\u557B\u557E\u5598\u559E\u55AE\u557C\u5583\u55A9\u5587\u55A8\u55DA\u55C5\u55DF\u55C4\u55DC\u55E4\u55D4\u5614\u55F7\u5616\u55FE\u55FD\u561B\u55F9\u564E\u5650\u71DF\u5634\u5636\u5632\u5638\u566B\u5664\u562F\u566C\u566A\u5686\u5680\u568A\u56A0\u5694\u568F\u56A5\u56AE\u56B6\u56B4\u56C2\u56BC\u56C1\u56C3\u56C0\u56C8\u56CE\u56D1\u56D3\u56D7\u56EE\u56F9\u5700\u56FF\u5704\u5709\"],[\"d4a1\",\"\u5708\u570B\u570D\u5713\u5718\u5716\u55C7\u571C\u5726\u5737\u5738\u574E\u573B\u5740\u574F\u5769\u57C0\u5788\u5761\u577F\u5789\u5793\u57A0\u57B3\u57A4\u57AA\u57B0\u57C3\u57C6\u57D4\u57D2\u57D3\u580A\u57D6\u57E3\u580B\u5819\u581D\u5872\u5821\u5862\u584B\u5870\u6BC0\u5852\u583D\u5879\u5885\u58B9\u589F\u58AB\u58BA\u58DE\u58BB\u58B8\u58AE\u58C5\u58D3\u58D1\u58D7\u58D9\u58D8\u58E5\u58DC\u58E4\u58DF\u58EF\u58FA\u58F9\u58FB\u58FC\u58FD\u5902\u590A\u5910\u591B\u68A6\u5925\u592C\u592D\u5932\u5938\u593E\u7AD2\u5955\u5950\u594E\u595A\u5958\u5962\u5960\u5967\u596C\u5969\"],[\"d5a1\",\"\u5978\u5981\u599D\u4F5E\u4FAB\u59A3\u59B2\u59C6\u59E8\u59DC\u598D\u59D9\u59DA\u5A25\u5A1F\u5A11\u5A1C\u5A09\u5A1A\u5A40\u5A6C\u5A49\u5A35\u5A36\u5A62\u5A6A\u5A9A\u5ABC\u5ABE\u5ACB\u5AC2\u5ABD\u5AE3\u5AD7\u5AE6\u5AE9\u5AD6\u5AFA\u5AFB\u5B0C\u5B0B\u5B16\u5B32\u5AD0\u5B2A\u5B36\u5B3E\u5B43\u5B45\u5B40\u5B51\u5B55\u5B5A\u5B5B\u5B65\u5B69\u5B70\u5B73\u5B75\u5B78\u6588\u5B7A\u5B80\u5B83\u5BA6\u5BB8\u5BC3\u5BC7\u5BC9\u5BD4\u5BD0\u5BE4\u5BE6\u5BE2\u5BDE\u5BE5\u5BEB\u5BF0\u5BF6\u5BF3\u5C05\u5C07\u5C08\u5C0D\u5C13\u5C20\u5C22\u5C28\u5C38\u5C39\u5C41\u5C46\u5C4E\u5C53\"],[\"d6a1\",\"\u5C50\u5C4F\u5B71\u5C6C\u5C6E\u4E62\u5C76\u5C79\u5C8C\u5C91\u5C94\u599B\u5CAB\u5CBB\u5CB6\u5CBC\u5CB7\u5CC5\u5CBE\u5CC7\u5CD9\u5CE9\u5CFD\u5CFA\u5CED\u5D8C\u5CEA\u5D0B\u5D15\u5D17\u5D5C\u5D1F\u5D1B\u5D11\u5D14\u5D22\u5D1A\u5D19\u5D18\u5D4C\u5D52\u5D4E\u5D4B\u5D6C\u5D73\u5D76\u5D87\u5D84\u5D82\u5DA2\u5D9D\u5DAC\u5DAE\u5DBD\u5D90\u5DB7\u5DBC\u5DC9\u5DCD\u5DD3\u5DD2\u5DD6\u5DDB\u5DEB\u5DF2\u5DF5\u5E0B\u5E1A\u5E19\u5E11\u5E1B\u5E36\u5E37\u5E44\u5E43\u5E40\u5E4E\u5E57\u5E54\u5E5F\u5E62\u5E64\u5E47\u5E75\u5E76\u5E7A\u9EBC\u5E7F\u5EA0\u5EC1\u5EC2\u5EC8\u5ED0\u5ECF\"],[\"d7a1\",\"\u5ED6\u5EE3\u5EDD\u5EDA\u5EDB\u5EE2\u5EE1\u5EE8\u5EE9\u5EEC\u5EF1\u5EF3\u5EF0\u5EF4\u5EF8\u5EFE\u5F03\u5F09\u5F5D\u5F5C\u5F0B\u5F11\u5F16\u5F29\u5F2D\u5F38\u5F41\u5F48\u5F4C\u5F4E\u5F2F\u5F51\u5F56\u5F57\u5F59\u5F61\u5F6D\u5F73\u5F77\u5F83\u5F82\u5F7F\u5F8A\u5F88\u5F91\u5F87\u5F9E\u5F99\u5F98\u5FA0\u5FA8\u5FAD\u5FBC\u5FD6\u5FFB\u5FE4\u5FF8\u5FF1\u5FDD\u60B3\u5FFF\u6021\u6060\u6019\u6010\u6029\u600E\u6031\u601B\u6015\u602B\u6026\u600F\u603A\u605A\u6041\u606A\u6077\u605F\u604A\u6046\u604D\u6063\u6043\u6064\u6042\u606C\u606B\u6059\u6081\u608D\u60E7\u6083\u609A\"],[\"d8a1\",\"\u6084\u609B\u6096\u6097\u6092\u60A7\u608B\u60E1\u60B8\u60E0\u60D3\u60B4\u5FF0\u60BD\u60C6\u60B5\u60D8\u614D\u6115\u6106\u60F6\u60F7\u6100\u60F4\u60FA\u6103\u6121\u60FB\u60F1\u610D\u610E\u6147\u613E\u6128\u6127\u614A\u613F\u613C\u612C\u6134\u613D\u6142\u6144\u6173\u6177\u6158\u6159\u615A\u616B\u6174\u616F\u6165\u6171\u615F\u615D\u6153\u6175\u6199\u6196\u6187\u61AC\u6194\u619A\u618A\u6191\u61AB\u61AE\u61CC\u61CA\u61C9\u61F7\u61C8\u61C3\u61C6\u61BA\u61CB\u7F79\u61CD\u61E6\u61E3\u61F6\u61FA\u61F4\u61FF\u61FD\u61FC\u61FE\u6200\u6208\u6209\u620D\u620C\u6214\u621B\"],[\"d9a1\",\"\u621E\u6221\u622A\u622E\u6230\u6232\u6233\u6241\u624E\u625E\u6263\u625B\u6260\u6268\u627C\u6282\u6289\u627E\u6292\u6293\u6296\u62D4\u6283\u6294\u62D7\u62D1\u62BB\u62CF\u62FF\u62C6\u64D4\u62C8\u62DC\u62CC\u62CA\u62C2\u62C7\u629B\u62C9\u630C\u62EE\u62F1\u6327\u6302\u6308\u62EF\u62F5\u6350\u633E\u634D\u641C\u634F\u6396\u638E\u6380\u63AB\u6376\u63A3\u638F\u6389\u639F\u63B5\u636B\u6369\u63BE\u63E9\u63C0\u63C6\u63E3\u63C9\u63D2\u63F6\u63C4\u6416\u6434\u6406\u6413\u6426\u6436\u651D\u6417\u6428\u640F\u6467\u646F\u6476\u644E\u652A\u6495\u6493\u64A5\u64A9\u6488\u64BC\"],[\"daa1\",\"\u64DA\u64D2\u64C5\u64C7\u64BB\u64D8\u64C2\u64F1\u64E7\u8209\u64E0\u64E1\u62AC\u64E3\u64EF\u652C\u64F6\u64F4\u64F2\u64FA\u6500\u64FD\u6518\u651C\u6505\u6524\u6523\u652B\u6534\u6535\u6537\u6536\u6538\u754B\u6548\u6556\u6555\u654D\u6558\u655E\u655D\u6572\u6578\u6582\u6583\u8B8A\u659B\u659F\u65AB\u65B7\u65C3\u65C6\u65C1\u65C4\u65CC\u65D2\u65DB\u65D9\u65E0\u65E1\u65F1\u6772\u660A\u6603\u65FB\u6773\u6635\u6636\u6634\u661C\u664F\u6644\u6649\u6641\u665E\u665D\u6664\u6667\u6668\u665F\u6662\u6670\u6683\u6688\u668E\u6689\u6684\u6698\u669D\u66C1\u66B9\u66C9\u66BE\u66BC\"],[\"dba1\",\"\u66C4\u66B8\u66D6\u66DA\u66E0\u663F\u66E6\u66E9\u66F0\u66F5\u66F7\u670F\u6716\u671E\u6726\u6727\u9738\u672E\u673F\u6736\u6741\u6738\u6737\u6746\u675E\u6760\u6759\u6763\u6764\u6789\u6770\u67A9\u677C\u676A\u678C\u678B\u67A6\u67A1\u6785\u67B7\u67EF\u67B4\u67EC\u67B3\u67E9\u67B8\u67E4\u67DE\u67DD\u67E2\u67EE\u67B9\u67CE\u67C6\u67E7\u6A9C\u681E\u6846\u6829\u6840\u684D\u6832\u684E\u68B3\u682B\u6859\u6863\u6877\u687F\u689F\u688F\u68AD\u6894\u689D\u689B\u6883\u6AAE\u68B9\u6874\u68B5\u68A0\u68BA\u690F\u688D\u687E\u6901\u68CA\u6908\u68D8\u6922\u6926\u68E1\u690C\u68CD\"],[\"dca1\",\"\u68D4\u68E7\u68D5\u6936\u6912\u6904\u68D7\u68E3\u6925\u68F9\u68E0\u68EF\u6928\u692A\u691A\u6923\u6921\u68C6\u6979\u6977\u695C\u6978\u696B\u6954\u697E\u696E\u6939\u6974\u693D\u6959\u6930\u6961\u695E\u695D\u6981\u696A\u69B2\u69AE\u69D0\u69BF\u69C1\u69D3\u69BE\u69CE\u5BE8\u69CA\u69DD\u69BB\u69C3\u69A7\u6A2E\u6991\u69A0\u699C\u6995\u69B4\u69DE\u69E8\u6A02\u6A1B\u69FF\u6B0A\u69F9\u69F2\u69E7\u6A05\u69B1\u6A1E\u69ED\u6A14\u69EB\u6A0A\u6A12\u6AC1\u6A23\u6A13\u6A44\u6A0C\u6A72\u6A36\u6A78\u6A47\u6A62\u6A59\u6A66\u6A48\u6A38\u6A22\u6A90\u6A8D\u6AA0\u6A84\u6AA2\u6AA3\"],[\"dda1\",\"\u6A97\u8617\u6ABB\u6AC3\u6AC2\u6AB8\u6AB3\u6AAC\u6ADE\u6AD1\u6ADF\u6AAA\u6ADA\u6AEA\u6AFB\u6B05\u8616\u6AFA\u6B12\u6B16\u9B31\u6B1F\u6B38\u6B37\u76DC\u6B39\u98EE\u6B47\u6B43\u6B49\u6B50\u6B59\u6B54\u6B5B\u6B5F\u6B61\u6B78\u6B79\u6B7F\u6B80\u6B84\u6B83\u6B8D\u6B98\u6B95\u6B9E\u6BA4\u6BAA\u6BAB\u6BAF\u6BB2\u6BB1\u6BB3\u6BB7\u6BBC\u6BC6\u6BCB\u6BD3\u6BDF\u6BEC\u6BEB\u6BF3\u6BEF\u9EBE\u6C08\u6C13\u6C14\u6C1B\u6C24\u6C23\u6C5E\u6C55\u6C62\u6C6A\u6C82\u6C8D\u6C9A\u6C81\u6C9B\u6C7E\u6C68\u6C73\u6C92\u6C90\u6CC4\u6CF1\u6CD3\u6CBD\u6CD7\u6CC5\u6CDD\u6CAE\u6CB1\u6CBE\"],[\"dea1\",\"\u6CBA\u6CDB\u6CEF\u6CD9\u6CEA\u6D1F\u884D\u6D36\u6D2B\u6D3D\u6D38\u6D19\u6D35\u6D33\u6D12\u6D0C\u6D63\u6D93\u6D64\u6D5A\u6D79\u6D59\u6D8E\u6D95\u6FE4\u6D85\u6DF9\u6E15\u6E0A\u6DB5\u6DC7\u6DE6\u6DB8\u6DC6\u6DEC\u6DDE\u6DCC\u6DE8\u6DD2\u6DC5\u6DFA\u6DD9\u6DE4\u6DD5\u6DEA\u6DEE\u6E2D\u6E6E\u6E2E\u6E19\u6E72\u6E5F\u6E3E\u6E23\u6E6B\u6E2B\u6E76\u6E4D\u6E1F\u6E43\u6E3A\u6E4E\u6E24\u6EFF\u6E1D\u6E38\u6E82\u6EAA\u6E98\u6EC9\u6EB7\u6ED3\u6EBD\u6EAF\u6EC4\u6EB2\u6ED4\u6ED5\u6E8F\u6EA5\u6EC2\u6E9F\u6F41\u6F11\u704C\u6EEC\u6EF8\u6EFE\u6F3F\u6EF2\u6F31\u6EEF\u6F32\u6ECC\"],[\"dfa1\",\"\u6F3E\u6F13\u6EF7\u6F86\u6F7A\u6F78\u6F81\u6F80\u6F6F\u6F5B\u6FF3\u6F6D\u6F82\u6F7C\u6F58\u6F8E\u6F91\u6FC2\u6F66\u6FB3\u6FA3\u6FA1\u6FA4\u6FB9\u6FC6\u6FAA\u6FDF\u6FD5\u6FEC\u6FD4\u6FD8\u6FF1\u6FEE\u6FDB\u7009\u700B\u6FFA\u7011\u7001\u700F\u6FFE\u701B\u701A\u6F74\u701D\u7018\u701F\u7030\u703E\u7032\u7051\u7063\u7099\u7092\u70AF\u70F1\u70AC\u70B8\u70B3\u70AE\u70DF\u70CB\u70DD\u70D9\u7109\u70FD\u711C\u7119\u7165\u7155\u7188\u7166\u7162\u714C\u7156\u716C\u718F\u71FB\u7184\u7195\u71A8\u71AC\u71D7\u71B9\u71BE\u71D2\u71C9\u71D4\u71CE\u71E0\u71EC\u71E7\u71F5\u71FC\"],[\"e0a1\",\"\u71F9\u71FF\u720D\u7210\u721B\u7228\u722D\u722C\u7230\u7232\u723B\u723C\u723F\u7240\u7246\u724B\u7258\u7274\u727E\u7282\u7281\u7287\u7292\u7296\u72A2\u72A7\u72B9\u72B2\u72C3\u72C6\u72C4\u72CE\u72D2\u72E2\u72E0\u72E1\u72F9\u72F7\u500F\u7317\u730A\u731C\u7316\u731D\u7334\u732F\u7329\u7325\u733E\u734E\u734F\u9ED8\u7357\u736A\u7368\u7370\u7378\u7375\u737B\u737A\u73C8\u73B3\u73CE\u73BB\u73C0\u73E5\u73EE\u73DE\u74A2\u7405\u746F\u7425\u73F8\u7432\u743A\u7455\u743F\u745F\u7459\u7441\u745C\u7469\u7470\u7463\u746A\u7476\u747E\u748B\u749E\u74A7\u74CA\u74CF\u74D4\u73F1\"],[\"e1a1\",\"\u74E0\u74E3\u74E7\u74E9\u74EE\u74F2\u74F0\u74F1\u74F8\u74F7\u7504\u7503\u7505\u750C\u750E\u750D\u7515\u7513\u751E\u7526\u752C\u753C\u7544\u754D\u754A\u7549\u755B\u7546\u755A\u7569\u7564\u7567\u756B\u756D\u7578\u7576\u7586\u7587\u7574\u758A\u7589\u7582\u7594\u759A\u759D\u75A5\u75A3\u75C2\u75B3\u75C3\u75B5\u75BD\u75B8\u75BC\u75B1\u75CD\u75CA\u75D2\u75D9\u75E3\u75DE\u75FE\u75FF\u75FC\u7601\u75F0\u75FA\u75F2\u75F3\u760B\u760D\u7609\u761F\u7627\u7620\u7621\u7622\u7624\u7634\u7630\u763B\u7647\u7648\u7646\u765C\u7658\u7661\u7662\u7668\u7669\u766A\u7667\u766C\u7670\"],[\"e2a1\",\"\u7672\u7676\u7678\u767C\u7680\u7683\u7688\u768B\u768E\u7696\u7693\u7699\u769A\u76B0\u76B4\u76B8\u76B9\u76BA\u76C2\u76CD\u76D6\u76D2\u76DE\u76E1\u76E5\u76E7\u76EA\u862F\u76FB\u7708\u7707\u7704\u7729\u7724\u771E\u7725\u7726\u771B\u7737\u7738\u7747\u775A\u7768\u776B\u775B\u7765\u777F\u777E\u7779\u778E\u778B\u7791\u77A0\u779E\u77B0\u77B6\u77B9\u77BF\u77BC\u77BD\u77BB\u77C7\u77CD\u77D7\u77DA\u77DC\u77E3\u77EE\u77FC\u780C\u7812\u7926\u7820\u792A\u7845\u788E\u7874\u7886\u787C\u789A\u788C\u78A3\u78B5\u78AA\u78AF\u78D1\u78C6\u78CB\u78D4\u78BE\u78BC\u78C5\u78CA\u78EC\"],[\"e3a1\",\"\u78E7\u78DA\u78FD\u78F4\u7907\u7912\u7911\u7919\u792C\u792B\u7940\u7960\u7957\u795F\u795A\u7955\u7953\u797A\u797F\u798A\u799D\u79A7\u9F4B\u79AA\u79AE\u79B3\u79B9\u79BA\u79C9\u79D5\u79E7\u79EC\u79E1\u79E3\u7A08\u7A0D\u7A18\u7A19\u7A20\u7A1F\u7980\u7A31\u7A3B\u7A3E\u7A37\u7A43\u7A57\u7A49\u7A61\u7A62\u7A69\u9F9D\u7A70\u7A79\u7A7D\u7A88\u7A97\u7A95\u7A98\u7A96\u7AA9\u7AC8\u7AB0\u7AB6\u7AC5\u7AC4\u7ABF\u9083\u7AC7\u7ACA\u7ACD\u7ACF\u7AD5\u7AD3\u7AD9\u7ADA\u7ADD\u7AE1\u7AE2\u7AE6\u7AED\u7AF0\u7B02\u7B0F\u7B0A\u7B06\u7B33\u7B18\u7B19\u7B1E\u7B35\u7B28\u7B36\u7B50\"],[\"e4a1\",\"\u7B7A\u7B04\u7B4D\u7B0B\u7B4C\u7B45\u7B75\u7B65\u7B74\u7B67\u7B70\u7B71\u7B6C\u7B6E\u7B9D\u7B98\u7B9F\u7B8D\u7B9C\u7B9A\u7B8B\u7B92\u7B8F\u7B5D\u7B99\u7BCB\u7BC1\u7BCC\u7BCF\u7BB4\u7BC6\u7BDD\u7BE9\u7C11\u7C14\u7BE6\u7BE5\u7C60\u7C00\u7C07\u7C13\u7BF3\u7BF7\u7C17\u7C0D\u7BF6\u7C23\u7C27\u7C2A\u7C1F\u7C37\u7C2B\u7C3D\u7C4C\u7C43\u7C54\u7C4F\u7C40\u7C50\u7C58\u7C5F\u7C64\u7C56\u7C65\u7C6C\u7C75\u7C83\u7C90\u7CA4\u7CAD\u7CA2\u7CAB\u7CA1\u7CA8\u7CB3\u7CB2\u7CB1\u7CAE\u7CB9\u7CBD\u7CC0\u7CC5\u7CC2\u7CD8\u7CD2\u7CDC\u7CE2\u9B3B\u7CEF\u7CF2\u7CF4\u7CF6\u7CFA\u7D06\"],[\"e5a1\",\"\u7D02\u7D1C\u7D15\u7D0A\u7D45\u7D4B\u7D2E\u7D32\u7D3F\u7D35\u7D46\u7D73\u7D56\u7D4E\u7D72\u7D68\u7D6E\u7D4F\u7D63\u7D93\u7D89\u7D5B\u7D8F\u7D7D\u7D9B\u7DBA\u7DAE\u7DA3\u7DB5\u7DC7\u7DBD\u7DAB\u7E3D\u7DA2\u7DAF\u7DDC\u7DB8\u7D9F\u7DB0\u7DD8\u7DDD\u7DE4\u7DDE\u7DFB\u7DF2\u7DE1\u7E05\u7E0A\u7E23\u7E21\u7E12\u7E31\u7E1F\u7E09\u7E0B\u7E22\u7E46\u7E66\u7E3B\u7E35\u7E39\u7E43\u7E37\u7E32\u7E3A\u7E67\u7E5D\u7E56\u7E5E\u7E59\u7E5A\u7E79\u7E6A\u7E69\u7E7C\u7E7B\u7E83\u7DD5\u7E7D\u8FAE\u7E7F\u7E88\u7E89\u7E8C\u7E92\u7E90\u7E93\u7E94\u7E96\u7E8E\u7E9B\u7E9C\u7F38\u7F3A\"],[\"e6a1\",\"\u7F45\u7F4C\u7F4D\u7F4E\u7F50\u7F51\u7F55\u7F54\u7F58\u7F5F\u7F60\u7F68\u7F69\u7F67\u7F78\u7F82\u7F86\u7F83\u7F88\u7F87\u7F8C\u7F94\u7F9E\u7F9D\u7F9A\u7FA3\u7FAF\u7FB2\u7FB9\u7FAE\u7FB6\u7FB8\u8B71\u7FC5\u7FC6\u7FCA\u7FD5\u7FD4\u7FE1\u7FE6\u7FE9\u7FF3\u7FF9\u98DC\u8006\u8004\u800B\u8012\u8018\u8019\u801C\u8021\u8028\u803F\u803B\u804A\u8046\u8052\u8058\u805A\u805F\u8062\u8068\u8073\u8072\u8070\u8076\u8079\u807D\u807F\u8084\u8086\u8085\u809B\u8093\u809A\u80AD\u5190\u80AC\u80DB\u80E5\u80D9\u80DD\u80C4\u80DA\u80D6\u8109\u80EF\u80F1\u811B\u8129\u8123\u812F\u814B\"],[\"e7a1\",\"\u968B\u8146\u813E\u8153\u8151\u80FC\u8171\u816E\u8165\u8166\u8174\u8183\u8188\u818A\u8180\u8182\u81A0\u8195\u81A4\u81A3\u815F\u8193\u81A9\u81B0\u81B5\u81BE\u81B8\u81BD\u81C0\u81C2\u81BA\u81C9\u81CD\u81D1\u81D9\u81D8\u81C8\u81DA\u81DF\u81E0\u81E7\u81FA\u81FB\u81FE\u8201\u8202\u8205\u8207\u820A\u820D\u8210\u8216\u8229\u822B\u8238\u8233\u8240\u8259\u8258\u825D\u825A\u825F\u8264\u8262\u8268\u826A\u826B\u822E\u8271\u8277\u8278\u827E\u828D\u8292\u82AB\u829F\u82BB\u82AC\u82E1\u82E3\u82DF\u82D2\u82F4\u82F3\u82FA\u8393\u8303\u82FB\u82F9\u82DE\u8306\u82DC\u8309\u82D9\"],[\"e8a1\",\"\u8335\u8334\u8316\u8332\u8331\u8340\u8339\u8350\u8345\u832F\u832B\u8317\u8318\u8385\u839A\u83AA\u839F\u83A2\u8396\u8323\u838E\u8387\u838A\u837C\u83B5\u8373\u8375\u83A0\u8389\u83A8\u83F4\u8413\u83EB\u83CE\u83FD\u8403\u83D8\u840B\u83C1\u83F7\u8407\u83E0\u83F2\u840D\u8422\u8420\u83BD\u8438\u8506\u83FB\u846D\u842A\u843C\u855A\u8484\u8477\u846B\u84AD\u846E\u8482\u8469\u8446\u842C\u846F\u8479\u8435\u84CA\u8462\u84B9\u84BF\u849F\u84D9\u84CD\u84BB\u84DA\u84D0\u84C1\u84C6\u84D6\u84A1\u8521\u84FF\u84F4\u8517\u8518\u852C\u851F\u8515\u8514\u84FC\u8540\u8563\u8558\u8548\"],[\"e9a1\",\"\u8541\u8602\u854B\u8555\u8580\u85A4\u8588\u8591\u858A\u85A8\u856D\u8594\u859B\u85EA\u8587\u859C\u8577\u857E\u8590\u85C9\u85BA\u85CF\u85B9\u85D0\u85D5\u85DD\u85E5\u85DC\u85F9\u860A\u8613\u860B\u85FE\u85FA\u8606\u8622\u861A\u8630\u863F\u864D\u4E55\u8654\u865F\u8667\u8671\u8693\u86A3\u86A9\u86AA\u868B\u868C\u86B6\u86AF\u86C4\u86C6\u86B0\u86C9\u8823\u86AB\u86D4\u86DE\u86E9\u86EC\u86DF\u86DB\u86EF\u8712\u8706\u8708\u8700\u8703\u86FB\u8711\u8709\u870D\u86F9\u870A\u8734\u873F\u8737\u873B\u8725\u8729\u871A\u8760\u875F\u8778\u874C\u874E\u8774\u8757\u8768\u876E\u8759\"],[\"eaa1\",\"\u8753\u8763\u876A\u8805\u87A2\u879F\u8782\u87AF\u87CB\u87BD\u87C0\u87D0\u96D6\u87AB\u87C4\u87B3\u87C7\u87C6\u87BB\u87EF\u87F2\u87E0\u880F\u880D\u87FE\u87F6\u87F7\u880E\u87D2\u8811\u8816\u8815\u8822\u8821\u8831\u8836\u8839\u8827\u883B\u8844\u8842\u8852\u8859\u885E\u8862\u886B\u8881\u887E\u889E\u8875\u887D\u88B5\u8872\u8882\u8897\u8892\u88AE\u8899\u88A2\u888D\u88A4\u88B0\u88BF\u88B1\u88C3\u88C4\u88D4\u88D8\u88D9\u88DD\u88F9\u8902\u88FC\u88F4\u88E8\u88F2\u8904\u890C\u890A\u8913\u8943\u891E\u8925\u892A\u892B\u8941\u8944\u893B\u8936\u8938\u894C\u891D\u8960\u895E\"],[\"eba1\",\"\u8966\u8964\u896D\u896A\u896F\u8974\u8977\u897E\u8983\u8988\u898A\u8993\u8998\u89A1\u89A9\u89A6\u89AC\u89AF\u89B2\u89BA\u89BD\u89BF\u89C0\u89DA\u89DC\u89DD\u89E7\u89F4\u89F8\u8A03\u8A16\u8A10\u8A0C\u8A1B\u8A1D\u8A25\u8A36\u8A41\u8A5B\u8A52\u8A46\u8A48\u8A7C\u8A6D\u8A6C\u8A62\u8A85\u8A82\u8A84\u8AA8\u8AA1\u8A91\u8AA5\u8AA6\u8A9A\u8AA3\u8AC4\u8ACD\u8AC2\u8ADA\u8AEB\u8AF3\u8AE7\u8AE4\u8AF1\u8B14\u8AE0\u8AE2\u8AF7\u8ADE\u8ADB\u8B0C\u8B07\u8B1A\u8AE1\u8B16\u8B10\u8B17\u8B20\u8B33\u97AB\u8B26\u8B2B\u8B3E\u8B28\u8B41\u8B4C\u8B4F\u8B4E\u8B49\u8B56\u8B5B\u8B5A\u8B6B\"],[\"eca1\",\"\u8B5F\u8B6C\u8B6F\u8B74\u8B7D\u8B80\u8B8C\u8B8E\u8B92\u8B93\u8B96\u8B99\u8B9A\u8C3A\u8C41\u8C3F\u8C48\u8C4C\u8C4E\u8C50\u8C55\u8C62\u8C6C\u8C78\u8C7A\u8C82\u8C89\u8C85\u8C8A\u8C8D\u8C8E\u8C94\u8C7C\u8C98\u621D\u8CAD\u8CAA\u8CBD\u8CB2\u8CB3\u8CAE\u8CB6\u8CC8\u8CC1\u8CE4\u8CE3\u8CDA\u8CFD\u8CFA\u8CFB\u8D04\u8D05\u8D0A\u8D07\u8D0F\u8D0D\u8D10\u9F4E\u8D13\u8CCD\u8D14\u8D16\u8D67\u8D6D\u8D71\u8D73\u8D81\u8D99\u8DC2\u8DBE\u8DBA\u8DCF\u8DDA\u8DD6\u8DCC\u8DDB\u8DCB\u8DEA\u8DEB\u8DDF\u8DE3\u8DFC\u8E08\u8E09\u8DFF\u8E1D\u8E1E\u8E10\u8E1F\u8E42\u8E35\u8E30\u8E34\u8E4A\"],[\"eda1\",\"\u8E47\u8E49\u8E4C\u8E50\u8E48\u8E59\u8E64\u8E60\u8E2A\u8E63\u8E55\u8E76\u8E72\u8E7C\u8E81\u8E87\u8E85\u8E84\u8E8B\u8E8A\u8E93\u8E91\u8E94\u8E99\u8EAA\u8EA1\u8EAC\u8EB0\u8EC6\u8EB1\u8EBE\u8EC5\u8EC8\u8ECB\u8EDB\u8EE3\u8EFC\u8EFB\u8EEB\u8EFE\u8F0A\u8F05\u8F15\u8F12\u8F19\u8F13\u8F1C\u8F1F\u8F1B\u8F0C\u8F26\u8F33\u8F3B\u8F39\u8F45\u8F42\u8F3E\u8F4C\u8F49\u8F46\u8F4E\u8F57\u8F5C\u8F62\u8F63\u8F64\u8F9C\u8F9F\u8FA3\u8FAD\u8FAF\u8FB7\u8FDA\u8FE5\u8FE2\u8FEA\u8FEF\u9087\u8FF4\u9005\u8FF9\u8FFA\u9011\u9015\u9021\u900D\u901E\u9016\u900B\u9027\u9036\u9035\u9039\u8FF8\"],[\"eea1\",\"\u904F\u9050\u9051\u9052\u900E\u9049\u903E\u9056\u9058\u905E\u9068\u906F\u9076\u96A8\u9072\u9082\u907D\u9081\u9080\u908A\u9089\u908F\u90A8\u90AF\u90B1\u90B5\u90E2\u90E4\u6248\u90DB\u9102\u9112\u9119\u9132\u9130\u914A\u9156\u9158\u9163\u9165\u9169\u9173\u9172\u918B\u9189\u9182\u91A2\u91AB\u91AF\u91AA\u91B5\u91B4\u91BA\u91C0\u91C1\u91C9\u91CB\u91D0\u91D6\u91DF\u91E1\u91DB\u91FC\u91F5\u91F6\u921E\u91FF\u9214\u922C\u9215\u9211\u925E\u9257\u9245\u9249\u9264\u9248\u9295\u923F\u924B\u9250\u929C\u9296\u9293\u929B\u925A\u92CF\u92B9\u92B7\u92E9\u930F\u92FA\u9344\u932E\"],[\"efa1\",\"\u9319\u9322\u931A\u9323\u933A\u9335\u933B\u935C\u9360\u937C\u936E\u9356\u93B0\u93AC\u93AD\u9394\u93B9\u93D6\u93D7\u93E8\u93E5\u93D8\u93C3\u93DD\u93D0\u93C8\u93E4\u941A\u9414\u9413\u9403\u9407\u9410\u9436\u942B\u9435\u9421\u943A\u9441\u9452\u9444\u945B\u9460\u9462\u945E\u946A\u9229\u9470\u9475\u9477\u947D\u945A\u947C\u947E\u9481\u947F\u9582\u9587\u958A\u9594\u9596\u9598\u9599\u95A0\u95A8\u95A7\u95AD\u95BC\u95BB\u95B9\u95BE\u95CA\u6FF6\u95C3\u95CD\u95CC\u95D5\u95D4\u95D6\u95DC\u95E1\u95E5\u95E2\u9621\u9628\u962E\u962F\u9642\u964C\u964F\u964B\u9677\u965C\u965E\"],[\"f0a1\",\"\u965D\u965F\u9666\u9672\u966C\u968D\u9698\u9695\u9697\u96AA\u96A7\u96B1\u96B2\u96B0\u96B4\u96B6\u96B8\u96B9\u96CE\u96CB\u96C9\u96CD\u894D\u96DC\u970D\u96D5\u96F9\u9704\u9706\u9708\u9713\u970E\u9711\u970F\u9716\u9719\u9724\u972A\u9730\u9739\u973D\u973E\u9744\u9746\u9748\u9742\u9749\u975C\u9760\u9764\u9766\u9768\u52D2\u976B\u9771\u9779\u9785\u977C\u9781\u977A\u9786\u978B\u978F\u9790\u979C\u97A8\u97A6\u97A3\u97B3\u97B4\u97C3\u97C6\u97C8\u97CB\u97DC\u97ED\u9F4F\u97F2\u7ADF\u97F6\u97F5\u980F\u980C\u9838\u9824\u9821\u9837\u983D\u9846\u984F\u984B\u986B\u986F\u9870\"],[\"f1a1\",\"\u9871\u9874\u9873\u98AA\u98AF\u98B1\u98B6\u98C4\u98C3\u98C6\u98E9\u98EB\u9903\u9909\u9912\u9914\u9918\u9921\u991D\u991E\u9924\u9920\u992C\u992E\u993D\u993E\u9942\u9949\u9945\u9950\u994B\u9951\u9952\u994C\u9955\u9997\u9998\u99A5\u99AD\u99AE\u99BC\u99DF\u99DB\u99DD\u99D8\u99D1\u99ED\u99EE\u99F1\u99F2\u99FB\u99F8\u9A01\u9A0F\u9A05\u99E2\u9A19\u9A2B\u9A37\u9A45\u9A42\u9A40\u9A43\u9A3E\u9A55\u9A4D\u9A5B\u9A57\u9A5F\u9A62\u9A65\u9A64\u9A69\u9A6B\u9A6A\u9AAD\u9AB0\u9ABC\u9AC0\u9ACF\u9AD1\u9AD3\u9AD4\u9ADE\u9ADF\u9AE2\u9AE3\u9AE6\u9AEF\u9AEB\u9AEE\u9AF4\u9AF1\u9AF7\"],[\"f2a1\",\"\u9AFB\u9B06\u9B18\u9B1A\u9B1F\u9B22\u9B23\u9B25\u9B27\u9B28\u9B29\u9B2A\u9B2E\u9B2F\u9B32\u9B44\u9B43\u9B4F\u9B4D\u9B4E\u9B51\u9B58\u9B74\u9B93\u9B83\u9B91\u9B96\u9B97\u9B9F\u9BA0\u9BA8\u9BB4\u9BC0\u9BCA\u9BB9\u9BC6\u9BCF\u9BD1\u9BD2\u9BE3\u9BE2\u9BE4\u9BD4\u9BE1\u9C3A\u9BF2\u9BF1\u9BF0\u9C15\u9C14\u9C09\u9C13\u9C0C\u9C06\u9C08\u9C12\u9C0A\u9C04\u9C2E\u9C1B\u9C25\u9C24\u9C21\u9C30\u9C47\u9C32\u9C46\u9C3E\u9C5A\u9C60\u9C67\u9C76\u9C78\u9CE7\u9CEC\u9CF0\u9D09\u9D08\u9CEB\u9D03\u9D06\u9D2A\u9D26\u9DAF\u9D23\u9D1F\u9D44\u9D15\u9D12\u9D41\u9D3F\u9D3E\u9D46\u9D48\"],[\"f3a1\",\"\u9D5D\u9D5E\u9D64\u9D51\u9D50\u9D59\u9D72\u9D89\u9D87\u9DAB\u9D6F\u9D7A\u9D9A\u9DA4\u9DA9\u9DB2\u9DC4\u9DC1\u9DBB\u9DB8\u9DBA\u9DC6\u9DCF\u9DC2\u9DD9\u9DD3\u9DF8\u9DE6\u9DED\u9DEF\u9DFD\u9E1A\u9E1B\u9E1E\u9E75\u9E79\u9E7D\u9E81\u9E88\u9E8B\u9E8C\u9E92\u9E95\u9E91\u9E9D\u9EA5\u9EA9\u9EB8\u9EAA\u9EAD\u9761\u9ECC\u9ECE\u9ECF\u9ED0\u9ED4\u9EDC\u9EDE\u9EDD\u9EE0\u9EE5\u9EE8\u9EEF\u9EF4\u9EF6\u9EF7\u9EF9\u9EFB\u9EFC\u9EFD\u9F07\u9F08\u76B7\u9F15\u9F21\u9F2C\u9F3E\u9F4A\u9F52\u9F54\u9F63\u9F5F\u9F60\u9F61\u9F66\u9F67\u9F6C\u9F6A\u9F77\u9F72\u9F76\u9F95\u9F9C\u9FA0\"],[\"f4a1\",\"\u582F\u69C7\u9059\u7464\u51DC\u7199\"],[\"f9a1\",\"\u7E8A\u891C\u9348\u9288\u84DC\u4FC9\u70BB\u6631\u68C8\u92F9\u66FB\u5F45\u4E28\u4EE1\u4EFC\u4F00\u4F03\u4F39\u4F56\u4F92\u4F8A\u4F9A\u4F94\u4FCD\u5040\u5022\u4FFF\u501E\u5046\u5070\u5042\u5094\u50F4\u50D8\u514A\u5164\u519D\u51BE\u51EC\u5215\u529C\u52A6\u52C0\u52DB\u5300\u5307\u5324\u5372\u5393\u53B2\u53DD\uFA0E\u549C\u548A\u54A9\u54FF\u5586\u5759\u5765\u57AC\u57C8\u57C7\uFA0F\uFA10\u589E\u58B2\u590B\u5953\u595B\u595D\u5963\u59A4\u59BA\u5B56\u5BC0\u752F\u5BD8\u5BEC\u5C1E\u5CA6\u5CBA\u5CF5\u5D27\u5D53\uFA11\u5D42\u5D6D\u5DB8\u5DB9\u5DD0\u5F21\u5F34\u5F67\u5FB7\"],[\"faa1\",\"\u5FDE\u605D\u6085\u608A\u60DE\u60D5\u6120\u60F2\u6111\u6137\u6130\u6198\u6213\u62A6\u63F5\u6460\u649D\u64CE\u654E\u6600\u6615\u663B\u6609\u662E\u661E\u6624\u6665\u6657\u6659\uFA12\u6673\u6699\u66A0\u66B2\u66BF\u66FA\u670E\uF929\u6766\u67BB\u6852\u67C0\u6801\u6844\u68CF\uFA13\u6968\uFA14\u6998\u69E2\u6A30\u6A6B\u6A46\u6A73\u6A7E\u6AE2\u6AE4\u6BD6\u6C3F\u6C5C\u6C86\u6C6F\u6CDA\u6D04\u6D87\u6D6F\u6D96\u6DAC\u6DCF\u6DF8\u6DF2\u6DFC\u6E39\u6E5C\u6E27\u6E3C\u6EBF\u6F88\u6FB5\u6FF5\u7005\u7007\u7028\u7085\u70AB\u710F\u7104\u715C\u7146\u7147\uFA15\u71C1\u71FE\u72B1\"],[\"fba1\",\"\u72BE\u7324\uFA16\u7377\u73BD\u73C9\u73D6\u73E3\u73D2\u7407\u73F5\u7426\u742A\u7429\u742E\u7462\u7489\u749F\u7501\u756F\u7682\u769C\u769E\u769B\u76A6\uFA17\u7746\u52AF\u7821\u784E\u7864\u787A\u7930\uFA18\uFA19\uFA1A\u7994\uFA1B\u799B\u7AD1\u7AE7\uFA1C\u7AEB\u7B9E\uFA1D\u7D48\u7D5C\u7DB7\u7DA0\u7DD6\u7E52\u7F47\u7FA1\uFA1E\u8301\u8362\u837F\u83C7\u83F6\u8448\u84B4\u8553\u8559\u856B\uFA1F\u85B0\uFA20\uFA21\u8807\u88F5\u8A12\u8A37\u8A79\u8AA7\u8ABE\u8ADF\uFA22\u8AF6\u8B53\u8B7F\u8CF0\u8CF4\u8D12\u8D76\uFA23\u8ECF\uFA24\uFA25\u9067\u90DE\uFA26\u9115\u9127\u91DA\"],[\"fca1\",\"\u91D7\u91DE\u91ED\u91EE\u91E4\u91E5\u9206\u9210\u920A\u923A\u9240\u923C\u924E\u9259\u9251\u9239\u9267\u92A7\u9277\u9278\u92E7\u92D7\u92D9\u92D0\uFA27\u92D5\u92E0\u92D3\u9325\u9321\u92FB\uFA28\u931E\u92FF\u931D\u9302\u9370\u9357\u93A4\u93C6\u93DE\u93F8\u9431\u9445\u9448\u9592\uF9DC\uFA29\u969D\u96AF\u9733\u973B\u9743\u974D\u974F\u9751\u9755\u9857\u9865\uFA2A\uFA2B\u9927\uFA2C\u999E\u9A4E\u9AD9\u9ADC\u9B75\u9B72\u9B8F\u9BB1\u9BBB\u9C00\u9D70\u9D6B\uFA2D\u9E19\u9ED1\"],[\"fcf1\",\"\u2170\",9,\"\uFFE2\uFFE4\uFF07\uFF02\"],[\"8fa2af\",\"\u02D8\u02C7\xB8\u02D9\u02DD\xAF\u02DB\u02DA\uFF5E\u0384\u0385\"],[\"8fa2c2\",\"\xA1\xA6\xBF\"],[\"8fa2eb\",\"\xBA\xAA\xA9\xAE\u2122\xA4\u2116\"],[\"8fa6e1\",\"\u0386\u0388\u0389\u038A\u03AA\"],[\"8fa6e7\",\"\u038C\"],[\"8fa6e9\",\"\u038E\u03AB\"],[\"8fa6ec\",\"\u038F\"],[\"8fa6f1\",\"\u03AC\u03AD\u03AE\u03AF\u03CA\u0390\u03CC\u03C2\u03CD\u03CB\u03B0\u03CE\"],[\"8fa7c2\",\"\u0402\",10,\"\u040E\u040F\"],[\"8fa7f2\",\"\u0452\",10,\"\u045E\u045F\"],[\"8fa9a1\",\"\xC6\u0110\"],[\"8fa9a4\",\"\u0126\"],[\"8fa9a6\",\"\u0132\"],[\"8fa9a8\",\"\u0141\u013F\"],[\"8fa9ab\",\"\u014A\xD8\u0152\"],[\"8fa9af\",\"\u0166\xDE\"],[\"8fa9c1\",\"\xE6\u0111\xF0\u0127\u0131\u0133\u0138\u0142\u0140\u0149\u014B\xF8\u0153\xDF\u0167\xFE\"],[\"8faaa1\",\"\xC1\xC0\xC4\xC2\u0102\u01CD\u0100\u0104\xC5\xC3\u0106\u0108\u010C\xC7\u010A\u010E\xC9\xC8\xCB\xCA\u011A\u0116\u0112\u0118\"],[\"8faaba\",\"\u011C\u011E\u0122\u0120\u0124\xCD\xCC\xCF\xCE\u01CF\u0130\u012A\u012E\u0128\u0134\u0136\u0139\u013D\u013B\u0143\u0147\u0145\xD1\xD3\xD2\xD6\xD4\u01D1\u0150\u014C\xD5\u0154\u0158\u0156\u015A\u015C\u0160\u015E\u0164\u0162\xDA\xD9\xDC\xDB\u016C\u01D3\u0170\u016A\u0172\u016E\u0168\u01D7\u01DB\u01D9\u01D5\u0174\xDD\u0178\u0176\u0179\u017D\u017B\"],[\"8faba1\",\"\xE1\xE0\xE4\xE2\u0103\u01CE\u0101\u0105\xE5\xE3\u0107\u0109\u010D\xE7\u010B\u010F\xE9\xE8\xEB\xEA\u011B\u0117\u0113\u0119\u01F5\u011D\u011F\"],[\"8fabbd\",\"\u0121\u0125\xED\xEC\xEF\xEE\u01D0\"],[\"8fabc5\",\"\u012B\u012F\u0129\u0135\u0137\u013A\u013E\u013C\u0144\u0148\u0146\xF1\xF3\xF2\xF6\xF4\u01D2\u0151\u014D\xF5\u0155\u0159\u0157\u015B\u015D\u0161\u015F\u0165\u0163\xFA\xF9\xFC\xFB\u016D\u01D4\u0171\u016B\u0173\u016F\u0169\u01D8\u01DC\u01DA\u01D6\u0175\xFD\xFF\u0177\u017A\u017E\u017C\"],[\"8fb0a1\",\"\u4E02\u4E04\u4E05\u4E0C\u4E12\u4E1F\u4E23\u4E24\u4E28\u4E2B\u4E2E\u4E2F\u4E30\u4E35\u4E40\u4E41\u4E44\u4E47\u4E51\u4E5A\u4E5C\u4E63\u4E68\u4E69\u4E74\u4E75\u4E79\u4E7F\u4E8D\u4E96\u4E97\u4E9D\u4EAF\u4EB9\u4EC3\u4ED0\u4EDA\u4EDB\u4EE0\u4EE1\u4EE2\u4EE8\u4EEF\u4EF1\u4EF3\u4EF5\u4EFD\u4EFE\u4EFF\u4F00\u4F02\u4F03\u4F08\u4F0B\u4F0C\u4F12\u4F15\u4F16\u4F17\u4F19\u4F2E\u4F31\u4F60\u4F33\u4F35\u4F37\u4F39\u4F3B\u4F3E\u4F40\u4F42\u4F48\u4F49\u4F4B\u4F4C\u4F52\u4F54\u4F56\u4F58\u4F5F\u4F63\u4F6A\u4F6C\u4F6E\u4F71\u4F77\u4F78\u4F79\u4F7A\u4F7D\u4F7E\u4F81\u4F82\u4F84\"],[\"8fb1a1\",\"\u4F85\u4F89\u4F8A\u4F8C\u4F8E\u4F90\u4F92\u4F93\u4F94\u4F97\u4F99\u4F9A\u4F9E\u4F9F\u4FB2\u4FB7\u4FB9\u4FBB\u4FBC\u4FBD\u4FBE\u4FC0\u4FC1\u4FC5\u4FC6\u4FC8\u4FC9\u4FCB\u4FCC\u4FCD\u4FCF\u4FD2\u4FDC\u4FE0\u4FE2\u4FF0\u4FF2\u4FFC\u4FFD\u4FFF\u5000\u5001\u5004\u5007\u500A\u500C\u500E\u5010\u5013\u5017\u5018\u501B\u501C\u501D\u501E\u5022\u5027\u502E\u5030\u5032\u5033\u5035\u5040\u5041\u5042\u5045\u5046\u504A\u504C\u504E\u5051\u5052\u5053\u5057\u5059\u505F\u5060\u5062\u5063\u5066\u5067\u506A\u506D\u5070\u5071\u503B\u5081\u5083\u5084\u5086\u508A\u508E\u508F\u5090\"],[\"8fb2a1\",\"\u5092\u5093\u5094\u5096\u509B\u509C\u509E\",4,\"\u50AA\u50AF\u50B0\u50B9\u50BA\u50BD\u50C0\u50C3\u50C4\u50C7\u50CC\u50CE\u50D0\u50D3\u50D4\u50D8\u50DC\u50DD\u50DF\u50E2\u50E4\u50E6\u50E8\u50E9\u50EF\u50F1\u50F6\u50FA\u50FE\u5103\u5106\u5107\u5108\u510B\u510C\u510D\u510E\u50F2\u5110\u5117\u5119\u511B\u511C\u511D\u511E\u5123\u5127\u5128\u512C\u512D\u512F\u5131\u5133\u5134\u5135\u5138\u5139\u5142\u514A\u514F\u5153\u5155\u5157\u5158\u515F\u5164\u5166\u517E\u5183\u5184\u518B\u518E\u5198\u519D\u51A1\u51A3\u51AD\u51B8\u51BA\u51BC\u51BE\u51BF\u51C2\"],[\"8fb3a1\",\"\u51C8\u51CF\u51D1\u51D2\u51D3\u51D5\u51D8\u51DE\u51E2\u51E5\u51EE\u51F2\u51F3\u51F4\u51F7\u5201\u5202\u5205\u5212\u5213\u5215\u5216\u5218\u5222\u5228\u5231\u5232\u5235\u523C\u5245\u5249\u5255\u5257\u5258\u525A\u525C\u525F\u5260\u5261\u5266\u526E\u5277\u5278\u5279\u5280\u5282\u5285\u528A\u528C\u5293\u5295\u5296\u5297\u5298\u529A\u529C\u52A4\u52A5\u52A6\u52A7\u52AF\u52B0\u52B6\u52B7\u52B8\u52BA\u52BB\u52BD\u52C0\u52C4\u52C6\u52C8\u52CC\u52CF\u52D1\u52D4\u52D6\u52DB\u52DC\u52E1\u52E5\u52E8\u52E9\u52EA\u52EC\u52F0\u52F1\u52F4\u52F6\u52F7\u5300\u5303\u530A\u530B\"],[\"8fb4a1\",\"\u530C\u5311\u5313\u5318\u531B\u531C\u531E\u531F\u5325\u5327\u5328\u5329\u532B\u532C\u532D\u5330\u5332\u5335\u533C\u533D\u533E\u5342\u534C\u534B\u5359\u535B\u5361\u5363\u5365\u536C\u536D\u5372\u5379\u537E\u5383\u5387\u5388\u538E\u5393\u5394\u5399\u539D\u53A1\u53A4\u53AA\u53AB\u53AF\u53B2\u53B4\u53B5\u53B7\u53B8\u53BA\u53BD\u53C0\u53C5\u53CF\u53D2\u53D3\u53D5\u53DA\u53DD\u53DE\u53E0\u53E6\u53E7\u53F5\u5402\u5413\u541A\u5421\u5427\u5428\u542A\u542F\u5431\u5434\u5435\u5443\u5444\u5447\u544D\u544F\u545E\u5462\u5464\u5466\u5467\u5469\u546B\u546D\u546E\u5474\u547F\"],[\"8fb5a1\",\"\u5481\u5483\u5485\u5488\u5489\u548D\u5491\u5495\u5496\u549C\u549F\u54A1\u54A6\u54A7\u54A9\u54AA\u54AD\u54AE\u54B1\u54B7\u54B9\u54BA\u54BB\u54BF\u54C6\u54CA\u54CD\u54CE\u54E0\u54EA\u54EC\u54EF\u54F6\u54FC\u54FE\u54FF\u5500\u5501\u5505\u5508\u5509\u550C\u550D\u550E\u5515\u552A\u552B\u5532\u5535\u5536\u553B\u553C\u553D\u5541\u5547\u5549\u554A\u554D\u5550\u5551\u5558\u555A\u555B\u555E\u5560\u5561\u5564\u5566\u557F\u5581\u5582\u5586\u5588\u558E\u558F\u5591\u5592\u5593\u5594\u5597\u55A3\u55A4\u55AD\u55B2\u55BF\u55C1\u55C3\u55C6\u55C9\u55CB\u55CC\u55CE\u55D1\u55D2\"],[\"8fb6a1\",\"\u55D3\u55D7\u55D8\u55DB\u55DE\u55E2\u55E9\u55F6\u55FF\u5605\u5608\u560A\u560D\",5,\"\u5619\u562C\u5630\u5633\u5635\u5637\u5639\u563B\u563C\u563D\u563F\u5640\u5641\u5643\u5644\u5646\u5649\u564B\u564D\u564F\u5654\u565E\u5660\u5661\u5662\u5663\u5666\u5669\u566D\u566F\u5671\u5672\u5675\u5684\u5685\u5688\u568B\u568C\u5695\u5699\u569A\u569D\u569E\u569F\u56A6\u56A7\u56A8\u56A9\u56AB\u56AC\u56AD\u56B1\u56B3\u56B7\u56BE\u56C5\u56C9\u56CA\u56CB\u56CF\u56D0\u56CC\u56CD\u56D9\u56DC\u56DD\u56DF\u56E1\u56E4\",4,\"\u56F1\u56EB\u56ED\"],[\"8fb7a1\",\"\u56F6\u56F7\u5701\u5702\u5707\u570A\u570C\u5711\u5715\u571A\u571B\u571D\u5720\u5722\u5723\u5724\u5725\u5729\u572A\u572C\u572E\u572F\u5733\u5734\u573D\u573E\u573F\u5745\u5746\u574C\u574D\u5752\u5762\u5765\u5767\u5768\u576B\u576D\",4,\"\u5773\u5774\u5775\u5777\u5779\u577A\u577B\u577C\u577E\u5781\u5783\u578C\u5794\u5797\u5799\u579A\u579C\u579D\u579E\u579F\u57A1\u5795\u57A7\u57A8\u57A9\u57AC\u57B8\u57BD\u57C7\u57C8\u57CC\u57CF\u57D5\u57DD\u57DE\u57E4\u57E6\u57E7\u57E9\u57ED\u57F0\u57F5\u57F6\u57F8\u57FD\u57FE\u57FF\u5803\u5804\u5808\u5809\u57E1\"],[\"8fb8a1\",\"\u580C\u580D\u581B\u581E\u581F\u5820\u5826\u5827\u582D\u5832\u5839\u583F\u5849\u584C\u584D\u584F\u5850\u5855\u585F\u5861\u5864\u5867\u5868\u5878\u587C\u587F\u5880\u5881\u5887\u5888\u5889\u588A\u588C\u588D\u588F\u5890\u5894\u5896\u589D\u58A0\u58A1\u58A2\u58A6\u58A9\u58B1\u58B2\u58C4\u58BC\u58C2\u58C8\u58CD\u58CE\u58D0\u58D2\u58D4\u58D6\u58DA\u58DD\u58E1\u58E2\u58E9\u58F3\u5905\u5906\u590B\u590C\u5912\u5913\u5914\u8641\u591D\u5921\u5923\u5924\u5928\u592F\u5930\u5933\u5935\u5936\u593F\u5943\u5946\u5952\u5953\u5959\u595B\u595D\u595E\u595F\u5961\u5963\u596B\u596D\"],[\"8fb9a1\",\"\u596F\u5972\u5975\u5976\u5979\u597B\u597C\u598B\u598C\u598E\u5992\u5995\u5997\u599F\u59A4\u59A7\u59AD\u59AE\u59AF\u59B0\u59B3\u59B7\u59BA\u59BC\u59C1\u59C3\u59C4\u59C8\u59CA\u59CD\u59D2\u59DD\u59DE\u59DF\u59E3\u59E4\u59E7\u59EE\u59EF\u59F1\u59F2\u59F4\u59F7\u5A00\u5A04\u5A0C\u5A0D\u5A0E\u5A12\u5A13\u5A1E\u5A23\u5A24\u5A27\u5A28\u5A2A\u5A2D\u5A30\u5A44\u5A45\u5A47\u5A48\u5A4C\u5A50\u5A55\u5A5E\u5A63\u5A65\u5A67\u5A6D\u5A77\u5A7A\u5A7B\u5A7E\u5A8B\u5A90\u5A93\u5A96\u5A99\u5A9C\u5A9E\u5A9F\u5AA0\u5AA2\u5AA7\u5AAC\u5AB1\u5AB2\u5AB3\u5AB5\u5AB8\u5ABA\u5ABB\u5ABF\"],[\"8fbaa1\",\"\u5AC4\u5AC6\u5AC8\u5ACF\u5ADA\u5ADC\u5AE0\u5AE5\u5AEA\u5AEE\u5AF5\u5AF6\u5AFD\u5B00\u5B01\u5B08\u5B17\u5B34\u5B19\u5B1B\u5B1D\u5B21\u5B25\u5B2D\u5B38\u5B41\u5B4B\u5B4C\u5B52\u5B56\u5B5E\u5B68\u5B6E\u5B6F\u5B7C\u5B7D\u5B7E\u5B7F\u5B81\u5B84\u5B86\u5B8A\u5B8E\u5B90\u5B91\u5B93\u5B94\u5B96\u5BA8\u5BA9\u5BAC\u5BAD\u5BAF\u5BB1\u5BB2\u5BB7\u5BBA\u5BBC\u5BC0\u5BC1\u5BCD\u5BCF\u5BD6\",4,\"\u5BE0\u5BEF\u5BF1\u5BF4\u5BFD\u5C0C\u5C17\u5C1E\u5C1F\u5C23\u5C26\u5C29\u5C2B\u5C2C\u5C2E\u5C30\u5C32\u5C35\u5C36\u5C59\u5C5A\u5C5C\u5C62\u5C63\u5C67\u5C68\u5C69\"],[\"8fbba1\",\"\u5C6D\u5C70\u5C74\u5C75\u5C7A\u5C7B\u5C7C\u5C7D\u5C87\u5C88\u5C8A\u5C8F\u5C92\u5C9D\u5C9F\u5CA0\u5CA2\u5CA3\u5CA6\u5CAA\u5CB2\u5CB4\u5CB5\u5CBA\u5CC9\u5CCB\u5CD2\u5CDD\u5CD7\u5CEE\u5CF1\u5CF2\u5CF4\u5D01\u5D06\u5D0D\u5D12\u5D2B\u5D23\u5D24\u5D26\u5D27\u5D31\u5D34\u5D39\u5D3D\u5D3F\u5D42\u5D43\u5D46\u5D48\u5D55\u5D51\u5D59\u5D4A\u5D5F\u5D60\u5D61\u5D62\u5D64\u5D6A\u5D6D\u5D70\u5D79\u5D7A\u5D7E\u5D7F\u5D81\u5D83\u5D88\u5D8A\u5D92\u5D93\u5D94\u5D95\u5D99\u5D9B\u5D9F\u5DA0\u5DA7\u5DAB\u5DB0\u5DB4\u5DB8\u5DB9\u5DC3\u5DC7\u5DCB\u5DD0\u5DCE\u5DD8\u5DD9\u5DE0\u5DE4\"],[\"8fbca1\",\"\u5DE9\u5DF8\u5DF9\u5E00\u5E07\u5E0D\u5E12\u5E14\u5E15\u5E18\u5E1F\u5E20\u5E2E\u5E28\u5E32\u5E35\u5E3E\u5E4B\u5E50\u5E49\u5E51\u5E56\u5E58\u5E5B\u5E5C\u5E5E\u5E68\u5E6A\",4,\"\u5E70\u5E80\u5E8B\u5E8E\u5EA2\u5EA4\u5EA5\u5EA8\u5EAA\u5EAC\u5EB1\u5EB3\u5EBD\u5EBE\u5EBF\u5EC6\u5ECC\u5ECB\u5ECE\u5ED1\u5ED2\u5ED4\u5ED5\u5EDC\u5EDE\u5EE5\u5EEB\u5F02\u5F06\u5F07\u5F08\u5F0E\u5F19\u5F1C\u5F1D\u5F21\u5F22\u5F23\u5F24\u5F28\u5F2B\u5F2C\u5F2E\u5F30\u5F34\u5F36\u5F3B\u5F3D\u5F3F\u5F40\u5F44\u5F45\u5F47\u5F4D\u5F50\u5F54\u5F58\u5F5B\u5F60\u5F63\u5F64\u5F67\"],[\"8fbda1\",\"\u5F6F\u5F72\u5F74\u5F75\u5F78\u5F7A\u5F7D\u5F7E\u5F89\u5F8D\u5F8F\u5F96\u5F9C\u5F9D\u5FA2\u5FA7\u5FAB\u5FA4\u5FAC\u5FAF\u5FB0\u5FB1\u5FB8\u5FC4\u5FC7\u5FC8\u5FC9\u5FCB\u5FD0\",4,\"\u5FDE\u5FE1\u5FE2\u5FE8\u5FE9\u5FEA\u5FEC\u5FED\u5FEE\u5FEF\u5FF2\u5FF3\u5FF6\u5FFA\u5FFC\u6007\u600A\u600D\u6013\u6014\u6017\u6018\u601A\u601F\u6024\u602D\u6033\u6035\u6040\u6047\u6048\u6049\u604C\u6051\u6054\u6056\u6057\u605D\u6061\u6067\u6071\u607E\u607F\u6082\u6086\u6088\u608A\u608E\u6091\u6093\u6095\u6098\u609D\u609E\u60A2\u60A4\u60A5\u60A8\u60B0\u60B1\u60B7\"],[\"8fbea1\",\"\u60BB\u60BE\u60C2\u60C4\u60C8\u60C9\u60CA\u60CB\u60CE\u60CF\u60D4\u60D5\u60D9\u60DB\u60DD\u60DE\u60E2\u60E5\u60F2\u60F5\u60F8\u60FC\u60FD\u6102\u6107\u610A\u610C\u6110\",4,\"\u6116\u6117\u6119\u611C\u611E\u6122\u612A\u612B\u6130\u6131\u6135\u6136\u6137\u6139\u6141\u6145\u6146\u6149\u615E\u6160\u616C\u6172\u6178\u617B\u617C\u617F\u6180\u6181\u6183\u6184\u618B\u618D\u6192\u6193\u6197\u6198\u619C\u619D\u619F\u61A0\u61A5\u61A8\u61AA\u61AD\u61B8\u61B9\u61BC\u61C0\u61C1\u61C2\u61CE\u61CF\u61D5\u61DC\u61DD\u61DE\u61DF\u61E1\u61E2\u61E7\u61E9\u61E5\"],[\"8fbfa1\",\"\u61EC\u61ED\u61EF\u6201\u6203\u6204\u6207\u6213\u6215\u621C\u6220\u6222\u6223\u6227\u6229\u622B\u6239\u623D\u6242\u6243\u6244\u6246\u624C\u6250\u6251\u6252\u6254\u6256\u625A\u625C\u6264\u626D\u626F\u6273\u627A\u627D\u628D\u628E\u628F\u6290\u62A6\u62A8\u62B3\u62B6\u62B7\u62BA\u62BE\u62BF\u62C4\u62CE\u62D5\u62D6\u62DA\u62EA\u62F2\u62F4\u62FC\u62FD\u6303\u6304\u630A\u630B\u630D\u6310\u6313\u6316\u6318\u6329\u632A\u632D\u6335\u6336\u6339\u633C\u6341\u6342\u6343\u6344\u6346\u634A\u634B\u634E\u6352\u6353\u6354\u6358\u635B\u6365\u6366\u636C\u636D\u6371\u6374\u6375\"],[\"8fc0a1\",\"\u6378\u637C\u637D\u637F\u6382\u6384\u6387\u638A\u6390\u6394\u6395\u6399\u639A\u639E\u63A4\u63A6\u63AD\u63AE\u63AF\u63BD\u63C1\u63C5\u63C8\u63CE\u63D1\u63D3\u63D4\u63D5\u63DC\u63E0\u63E5\u63EA\u63EC\u63F2\u63F3\u63F5\u63F8\u63F9\u6409\u640A\u6410\u6412\u6414\u6418\u641E\u6420\u6422\u6424\u6425\u6429\u642A\u642F\u6430\u6435\u643D\u643F\u644B\u644F\u6451\u6452\u6453\u6454\u645A\u645B\u645C\u645D\u645F\u6460\u6461\u6463\u646D\u6473\u6474\u647B\u647D\u6485\u6487\u648F\u6490\u6491\u6498\u6499\u649B\u649D\u649F\u64A1\u64A3\u64A6\u64A8\u64AC\u64B3\u64BD\u64BE\u64BF\"],[\"8fc1a1\",\"\u64C4\u64C9\u64CA\u64CB\u64CC\u64CE\u64D0\u64D1\u64D5\u64D7\u64E4\u64E5\u64E9\u64EA\u64ED\u64F0\u64F5\u64F7\u64FB\u64FF\u6501\u6504\u6508\u6509\u650A\u650F\u6513\u6514\u6516\u6519\u651B\u651E\u651F\u6522\u6526\u6529\u652E\u6531\u653A\u653C\u653D\u6543\u6547\u6549\u6550\u6552\u6554\u655F\u6560\u6567\u656B\u657A\u657D\u6581\u6585\u658A\u6592\u6595\u6598\u659D\u65A0\u65A3\u65A6\u65AE\u65B2\u65B3\u65B4\u65BF\u65C2\u65C8\u65C9\u65CE\u65D0\u65D4\u65D6\u65D8\u65DF\u65F0\u65F2\u65F4\u65F5\u65F9\u65FE\u65FF\u6600\u6604\u6608\u6609\u660D\u6611\u6612\u6615\u6616\u661D\"],[\"8fc2a1\",\"\u661E\u6621\u6622\u6623\u6624\u6626\u6629\u662A\u662B\u662C\u662E\u6630\u6631\u6633\u6639\u6637\u6640\u6645\u6646\u664A\u664C\u6651\u664E\u6657\u6658\u6659\u665B\u665C\u6660\u6661\u66FB\u666A\u666B\u666C\u667E\u6673\u6675\u667F\u6677\u6678\u6679\u667B\u6680\u667C\u668B\u668C\u668D\u6690\u6692\u6699\u669A\u669B\u669C\u669F\u66A0\u66A4\u66AD\u66B1\u66B2\u66B5\u66BB\u66BF\u66C0\u66C2\u66C3\u66C8\u66CC\u66CE\u66CF\u66D4\u66DB\u66DF\u66E8\u66EB\u66EC\u66EE\u66FA\u6705\u6707\u670E\u6713\u6719\u671C\u6720\u6722\u6733\u673E\u6745\u6747\u6748\u674C\u6754\u6755\u675D\"],[\"8fc3a1\",\"\u6766\u676C\u676E\u6774\u6776\u677B\u6781\u6784\u678E\u678F\u6791\u6793\u6796\u6798\u6799\u679B\u67B0\u67B1\u67B2\u67B5\u67BB\u67BC\u67BD\u67F9\u67C0\u67C2\u67C3\u67C5\u67C8\u67C9\u67D2\u67D7\u67D9\u67DC\u67E1\u67E6\u67F0\u67F2\u67F6\u67F7\u6852\u6814\u6819\u681D\u681F\u6828\u6827\u682C\u682D\u682F\u6830\u6831\u6833\u683B\u683F\u6844\u6845\u684A\u684C\u6855\u6857\u6858\u685B\u686B\u686E\",4,\"\u6875\u6879\u687A\u687B\u687C\u6882\u6884\u6886\u6888\u6896\u6898\u689A\u689C\u68A1\u68A3\u68A5\u68A9\u68AA\u68AE\u68B2\u68BB\u68C5\u68C8\u68CC\u68CF\"],[\"8fc4a1\",\"\u68D0\u68D1\u68D3\u68D6\u68D9\u68DC\u68DD\u68E5\u68E8\u68EA\u68EB\u68EC\u68ED\u68F0\u68F1\u68F5\u68F6\u68FB\u68FC\u68FD\u6906\u6909\u690A\u6910\u6911\u6913\u6916\u6917\u6931\u6933\u6935\u6938\u693B\u6942\u6945\u6949\u694E\u6957\u695B\u6963\u6964\u6965\u6966\u6968\u6969\u696C\u6970\u6971\u6972\u697A\u697B\u697F\u6980\u698D\u6992\u6996\u6998\u69A1\u69A5\u69A6\u69A8\u69AB\u69AD\u69AF\u69B7\u69B8\u69BA\u69BC\u69C5\u69C8\u69D1\u69D6\u69D7\u69E2\u69E5\u69EE\u69EF\u69F1\u69F3\u69F5\u69FE\u6A00\u6A01\u6A03\u6A0F\u6A11\u6A15\u6A1A\u6A1D\u6A20\u6A24\u6A28\u6A30\u6A32\"],[\"8fc5a1\",\"\u6A34\u6A37\u6A3B\u6A3E\u6A3F\u6A45\u6A46\u6A49\u6A4A\u6A4E\u6A50\u6A51\u6A52\u6A55\u6A56\u6A5B\u6A64\u6A67\u6A6A\u6A71\u6A73\u6A7E\u6A81\u6A83\u6A86\u6A87\u6A89\u6A8B\u6A91\u6A9B\u6A9D\u6A9E\u6A9F\u6AA5\u6AAB\u6AAF\u6AB0\u6AB1\u6AB4\u6ABD\u6ABE\u6ABF\u6AC6\u6AC9\u6AC8\u6ACC\u6AD0\u6AD4\u6AD5\u6AD6\u6ADC\u6ADD\u6AE4\u6AE7\u6AEC\u6AF0\u6AF1\u6AF2\u6AFC\u6AFD\u6B02\u6B03\u6B06\u6B07\u6B09\u6B0F\u6B10\u6B11\u6B17\u6B1B\u6B1E\u6B24\u6B28\u6B2B\u6B2C\u6B2F\u6B35\u6B36\u6B3B\u6B3F\u6B46\u6B4A\u6B4D\u6B52\u6B56\u6B58\u6B5D\u6B60\u6B67\u6B6B\u6B6E\u6B70\u6B75\u6B7D\"],[\"8fc6a1\",\"\u6B7E\u6B82\u6B85\u6B97\u6B9B\u6B9F\u6BA0\u6BA2\u6BA3\u6BA8\u6BA9\u6BAC\u6BAD\u6BAE\u6BB0\u6BB8\u6BB9\u6BBD\u6BBE\u6BC3\u6BC4\u6BC9\u6BCC\u6BD6\u6BDA\u6BE1\u6BE3\u6BE6\u6BE7\u6BEE\u6BF1\u6BF7\u6BF9\u6BFF\u6C02\u6C04\u6C05\u6C09\u6C0D\u6C0E\u6C10\u6C12\u6C19\u6C1F\u6C26\u6C27\u6C28\u6C2C\u6C2E\u6C33\u6C35\u6C36\u6C3A\u6C3B\u6C3F\u6C4A\u6C4B\u6C4D\u6C4F\u6C52\u6C54\u6C59\u6C5B\u6C5C\u6C6B\u6C6D\u6C6F\u6C74\u6C76\u6C78\u6C79\u6C7B\u6C85\u6C86\u6C87\u6C89\u6C94\u6C95\u6C97\u6C98\u6C9C\u6C9F\u6CB0\u6CB2\u6CB4\u6CC2\u6CC6\u6CCD\u6CCF\u6CD0\u6CD1\u6CD2\u6CD4\u6CD6\"],[\"8fc7a1\",\"\u6CDA\u6CDC\u6CE0\u6CE7\u6CE9\u6CEB\u6CEC\u6CEE\u6CF2\u6CF4\u6D04\u6D07\u6D0A\u6D0E\u6D0F\u6D11\u6D13\u6D1A\u6D26\u6D27\u6D28\u6C67\u6D2E\u6D2F\u6D31\u6D39\u6D3C\u6D3F\u6D57\u6D5E\u6D5F\u6D61\u6D65\u6D67\u6D6F\u6D70\u6D7C\u6D82\u6D87\u6D91\u6D92\u6D94\u6D96\u6D97\u6D98\u6DAA\u6DAC\u6DB4\u6DB7\u6DB9\u6DBD\u6DBF\u6DC4\u6DC8\u6DCA\u6DCE\u6DCF\u6DD6\u6DDB\u6DDD\u6DDF\u6DE0\u6DE2\u6DE5\u6DE9\u6DEF\u6DF0\u6DF4\u6DF6\u6DFC\u6E00\u6E04\u6E1E\u6E22\u6E27\u6E32\u6E36\u6E39\u6E3B\u6E3C\u6E44\u6E45\u6E48\u6E49\u6E4B\u6E4F\u6E51\u6E52\u6E53\u6E54\u6E57\u6E5C\u6E5D\u6E5E\"],[\"8fc8a1\",\"\u6E62\u6E63\u6E68\u6E73\u6E7B\u6E7D\u6E8D\u6E93\u6E99\u6EA0\u6EA7\u6EAD\u6EAE\u6EB1\u6EB3\u6EBB\u6EBF\u6EC0\u6EC1\u6EC3\u6EC7\u6EC8\u6ECA\u6ECD\u6ECE\u6ECF\u6EEB\u6EED\u6EEE\u6EF9\u6EFB\u6EFD\u6F04\u6F08\u6F0A\u6F0C\u6F0D\u6F16\u6F18\u6F1A\u6F1B\u6F26\u6F29\u6F2A\u6F2F\u6F30\u6F33\u6F36\u6F3B\u6F3C\u6F2D\u6F4F\u6F51\u6F52\u6F53\u6F57\u6F59\u6F5A\u6F5D\u6F5E\u6F61\u6F62\u6F68\u6F6C\u6F7D\u6F7E\u6F83\u6F87\u6F88\u6F8B\u6F8C\u6F8D\u6F90\u6F92\u6F93\u6F94\u6F96\u6F9A\u6F9F\u6FA0\u6FA5\u6FA6\u6FA7\u6FA8\u6FAE\u6FAF\u6FB0\u6FB5\u6FB6\u6FBC\u6FC5\u6FC7\u6FC8\u6FCA\"],[\"8fc9a1\",\"\u6FDA\u6FDE\u6FE8\u6FE9\u6FF0\u6FF5\u6FF9\u6FFC\u6FFD\u7000\u7005\u7006\u7007\u700D\u7017\u7020\u7023\u702F\u7034\u7037\u7039\u703C\u7043\u7044\u7048\u7049\u704A\u704B\u7054\u7055\u705D\u705E\u704E\u7064\u7065\u706C\u706E\u7075\u7076\u707E\u7081\u7085\u7086\u7094\",4,\"\u709B\u70A4\u70AB\u70B0\u70B1\u70B4\u70B7\u70CA\u70D1\u70D3\u70D4\u70D5\u70D6\u70D8\u70DC\u70E4\u70FA\u7103\",4,\"\u710B\u710C\u710F\u711E\u7120\u712B\u712D\u712F\u7130\u7131\u7138\u7141\u7145\u7146\u7147\u714A\u714B\u7150\u7152\u7157\u715A\u715C\u715E\u7160\"],[\"8fcaa1\",\"\u7168\u7179\u7180\u7185\u7187\u718C\u7192\u719A\u719B\u71A0\u71A2\u71AF\u71B0\u71B2\u71B3\u71BA\u71BF\u71C0\u71C1\u71C4\u71CB\u71CC\u71D3\u71D6\u71D9\u71DA\u71DC\u71F8\u71FE\u7200\u7207\u7208\u7209\u7213\u7217\u721A\u721D\u721F\u7224\u722B\u722F\u7234\u7238\u7239\u7241\u7242\u7243\u7245\u724E\u724F\u7250\u7253\u7255\u7256\u725A\u725C\u725E\u7260\u7263\u7268\u726B\u726E\u726F\u7271\u7277\u7278\u727B\u727C\u727F\u7284\u7289\u728D\u728E\u7293\u729B\u72A8\u72AD\u72AE\u72B1\u72B4\u72BE\u72C1\u72C7\u72C9\u72CC\u72D5\u72D6\u72D8\u72DF\u72E5\u72F3\u72F4\u72FA\u72FB\"],[\"8fcba1\",\"\u72FE\u7302\u7304\u7305\u7307\u730B\u730D\u7312\u7313\u7318\u7319\u731E\u7322\u7324\u7327\u7328\u732C\u7331\u7332\u7335\u733A\u733B\u733D\u7343\u734D\u7350\u7352\u7356\u7358\u735D\u735E\u735F\u7360\u7366\u7367\u7369\u736B\u736C\u736E\u736F\u7371\u7377\u7379\u737C\u7380\u7381\u7383\u7385\u7386\u738E\u7390\u7393\u7395\u7397\u7398\u739C\u739E\u739F\u73A0\u73A2\u73A5\u73A6\u73AA\u73AB\u73AD\u73B5\u73B7\u73B9\u73BC\u73BD\u73BF\u73C5\u73C6\u73C9\u73CB\u73CC\u73CF\u73D2\u73D3\u73D6\u73D9\u73DD\u73E1\u73E3\u73E6\u73E7\u73E9\u73F4\u73F5\u73F7\u73F9\u73FA\u73FB\u73FD\"],[\"8fcca1\",\"\u73FF\u7400\u7401\u7404\u7407\u740A\u7411\u741A\u741B\u7424\u7426\u7428\",9,\"\u7439\u7440\u7443\u7444\u7446\u7447\u744B\u744D\u7451\u7452\u7457\u745D\u7462\u7466\u7467\u7468\u746B\u746D\u746E\u7471\u7472\u7480\u7481\u7485\u7486\u7487\u7489\u748F\u7490\u7491\u7492\u7498\u7499\u749A\u749C\u749F\u74A0\u74A1\u74A3\u74A6\u74A8\u74A9\u74AA\u74AB\u74AE\u74AF\u74B1\u74B2\u74B5\u74B9\u74BB\u74BF\u74C8\u74C9\u74CC\u74D0\u74D3\u74D8\u74DA\u74DB\u74DE\u74DF\u74E4\u74E8\u74EA\u74EB\u74EF\u74F4\u74FA\u74FB\u74FC\u74FF\u7506\"],[\"8fcda1\",\"\u7512\u7516\u7517\u7520\u7521\u7524\u7527\u7529\u752A\u752F\u7536\u7539\u753D\u753E\u753F\u7540\u7543\u7547\u7548\u754E\u7550\u7552\u7557\u755E\u755F\u7561\u756F\u7571\u7579\",5,\"\u7581\u7585\u7590\u7592\u7593\u7595\u7599\u759C\u75A2\u75A4\u75B4\u75BA\u75BF\u75C0\u75C1\u75C4\u75C6\u75CC\u75CE\u75CF\u75D7\u75DC\u75DF\u75E0\u75E1\u75E4\u75E7\u75EC\u75EE\u75EF\u75F1\u75F9\u7600\u7602\u7603\u7604\u7607\u7608\u760A\u760C\u760F\u7612\u7613\u7615\u7616\u7619\u761B\u761C\u761D\u761E\u7623\u7625\u7626\u7629\u762D\u7632\u7633\u7635\u7638\u7639\"],[\"8fcea1\",\"\u763A\u763C\u764A\u7640\u7641\u7643\u7644\u7645\u7649\u764B\u7655\u7659\u765F\u7664\u7665\u766D\u766E\u766F\u7671\u7674\u7681\u7685\u768C\u768D\u7695\u769B\u769C\u769D\u769F\u76A0\u76A2\",6,\"\u76AA\u76AD\u76BD\u76C1\u76C5\u76C9\u76CB\u76CC\u76CE\u76D4\u76D9\u76E0\u76E6\u76E8\u76EC\u76F0\u76F1\u76F6\u76F9\u76FC\u7700\u7706\u770A\u770E\u7712\u7714\u7715\u7717\u7719\u771A\u771C\u7722\u7728\u772D\u772E\u772F\u7734\u7735\u7736\u7739\u773D\u773E\u7742\u7745\u7746\u774A\u774D\u774E\u774F\u7752\u7756\u7757\u775C\u775E\u775F\u7760\u7762\"],[\"8fcfa1\",\"\u7764\u7767\u776A\u776C\u7770\u7772\u7773\u7774\u777A\u777D\u7780\u7784\u778C\u778D\u7794\u7795\u7796\u779A\u779F\u77A2\u77A7\u77AA\u77AE\u77AF\u77B1\u77B5\u77BE\u77C3\u77C9\u77D1\u77D2\u77D5\u77D9\u77DE\u77DF\u77E0\u77E4\u77E6\u77EA\u77EC\u77F0\u77F1\u77F4\u77F8\u77FB\u7805\u7806\u7809\u780D\u780E\u7811\u781D\u7821\u7822\u7823\u782D\u782E\u7830\u7835\u7837\u7843\u7844\u7847\u7848\u784C\u784E\u7852\u785C\u785E\u7860\u7861\u7863\u7864\u7868\u786A\u786E\u787A\u787E\u788A\u788F\u7894\u7898\u78A1\u789D\u789E\u789F\u78A4\u78A8\u78AC\u78AD\u78B0\u78B1\u78B2\u78B3\"],[\"8fd0a1\",\"\u78BB\u78BD\u78BF\u78C7\u78C8\u78C9\u78CC\u78CE\u78D2\u78D3\u78D5\u78D6\u78E4\u78DB\u78DF\u78E0\u78E1\u78E6\u78EA\u78F2\u78F3\u7900\u78F6\u78F7\u78FA\u78FB\u78FF\u7906\u790C\u7910\u791A\u791C\u791E\u791F\u7920\u7925\u7927\u7929\u792D\u7931\u7934\u7935\u793B\u793D\u793F\u7944\u7945\u7946\u794A\u794B\u794F\u7951\u7954\u7958\u795B\u795C\u7967\u7969\u796B\u7972\u7979\u797B\u797C\u797E\u798B\u798C\u7991\u7993\u7994\u7995\u7996\u7998\u799B\u799C\u79A1\u79A8\u79A9\u79AB\u79AF\u79B1\u79B4\u79B8\u79BB\u79C2\u79C4\u79C7\u79C8\u79CA\u79CF\u79D4\u79D6\u79DA\u79DD\u79DE\"],[\"8fd1a1\",\"\u79E0\u79E2\u79E5\u79EA\u79EB\u79ED\u79F1\u79F8\u79FC\u7A02\u7A03\u7A07\u7A09\u7A0A\u7A0C\u7A11\u7A15\u7A1B\u7A1E\u7A21\u7A27\u7A2B\u7A2D\u7A2F\u7A30\u7A34\u7A35\u7A38\u7A39\u7A3A\u7A44\u7A45\u7A47\u7A48\u7A4C\u7A55\u7A56\u7A59\u7A5C\u7A5D\u7A5F\u7A60\u7A65\u7A67\u7A6A\u7A6D\u7A75\u7A78\u7A7E\u7A80\u7A82\u7A85\u7A86\u7A8A\u7A8B\u7A90\u7A91\u7A94\u7A9E\u7AA0\u7AA3\u7AAC\u7AB3\u7AB5\u7AB9\u7ABB\u7ABC\u7AC6\u7AC9\u7ACC\u7ACE\u7AD1\u7ADB\u7AE8\u7AE9\u7AEB\u7AEC\u7AF1\u7AF4\u7AFB\u7AFD\u7AFE\u7B07\u7B14\u7B1F\u7B23\u7B27\u7B29\u7B2A\u7B2B\u7B2D\u7B2E\u7B2F\u7B30\"],[\"8fd2a1\",\"\u7B31\u7B34\u7B3D\u7B3F\u7B40\u7B41\u7B47\u7B4E\u7B55\u7B60\u7B64\u7B66\u7B69\u7B6A\u7B6D\u7B6F\u7B72\u7B73\u7B77\u7B84\u7B89\u7B8E\u7B90\u7B91\u7B96\u7B9B\u7B9E\u7BA0\u7BA5\u7BAC\u7BAF\u7BB0\u7BB2\u7BB5\u7BB6\u7BBA\u7BBB\u7BBC\u7BBD\u7BC2\u7BC5\u7BC8\u7BCA\u7BD4\u7BD6\u7BD7\u7BD9\u7BDA\u7BDB\u7BE8\u7BEA\u7BF2\u7BF4\u7BF5\u7BF8\u7BF9\u7BFA\u7BFC\u7BFE\u7C01\u7C02\u7C03\u7C04\u7C06\u7C09\u7C0B\u7C0C\u7C0E\u7C0F\u7C19\u7C1B\u7C20\u7C25\u7C26\u7C28\u7C2C\u7C31\u7C33\u7C34\u7C36\u7C39\u7C3A\u7C46\u7C4A\u7C55\u7C51\u7C52\u7C53\u7C59\",5],[\"8fd3a1\",\"\u7C61\u7C63\u7C67\u7C69\u7C6D\u7C6E\u7C70\u7C72\u7C79\u7C7C\u7C7D\u7C86\u7C87\u7C8F\u7C94\u7C9E\u7CA0\u7CA6\u7CB0\u7CB6\u7CB7\u7CBA\u7CBB\u7CBC\u7CBF\u7CC4\u7CC7\u7CC8\u7CC9\u7CCD\u7CCF\u7CD3\u7CD4\u7CD5\u7CD7\u7CD9\u7CDA\u7CDD\u7CE6\u7CE9\u7CEB\u7CF5\u7D03\u7D07\u7D08\u7D09\u7D0F\u7D11\u7D12\u7D13\u7D16\u7D1D\u7D1E\u7D23\u7D26\u7D2A\u7D2D\u7D31\u7D3C\u7D3D\u7D3E\u7D40\u7D41\u7D47\u7D48\u7D4D\u7D51\u7D53\u7D57\u7D59\u7D5A\u7D5C\u7D5D\u7D65\u7D67\u7D6A\u7D70\u7D78\u7D7A\u7D7B\u7D7F\u7D81\u7D82\u7D83\u7D85\u7D86\u7D88\u7D8B\u7D8C\u7D8D\u7D91\u7D96\u7D97\u7D9D\"],[\"8fd4a1\",\"\u7D9E\u7DA6\u7DA7\u7DAA\u7DB3\u7DB6\u7DB7\u7DB9\u7DC2\",4,\"\u7DCC\u7DCD\u7DCE\u7DD7\u7DD9\u7E00\u7DE2\u7DE5\u7DE6\u7DEA\u7DEB\u7DED\u7DF1\u7DF5\u7DF6\u7DF9\u7DFA\u7E08\u7E10\u7E11\u7E15\u7E17\u7E1C\u7E1D\u7E20\u7E27\u7E28\u7E2C\u7E2D\u7E2F\u7E33\u7E36\u7E3F\u7E44\u7E45\u7E47\u7E4E\u7E50\u7E52\u7E58\u7E5F\u7E61\u7E62\u7E65\u7E6B\u7E6E\u7E6F\u7E73\u7E78\u7E7E\u7E81\u7E86\u7E87\u7E8A\u7E8D\u7E91\u7E95\u7E98\u7E9A\u7E9D\u7E9E\u7F3C\u7F3B\u7F3D\u7F3E\u7F3F\u7F43\u7F44\u7F47\u7F4F\u7F52\u7F53\u7F5B\u7F5C\u7F5D\u7F61\u7F63\u7F64\u7F65\u7F66\u7F6D\"],[\"8fd5a1\",\"\u7F71\u7F7D\u7F7E\u7F7F\u7F80\u7F8B\u7F8D\u7F8F\u7F90\u7F91\u7F96\u7F97\u7F9C\u7FA1\u7FA2\u7FA6\u7FAA\u7FAD\u7FB4\u7FBC\u7FBF\u7FC0\u7FC3\u7FC8\u7FCE\u7FCF\u7FDB\u7FDF\u7FE3\u7FE5\u7FE8\u7FEC\u7FEE\u7FEF\u7FF2\u7FFA\u7FFD\u7FFE\u7FFF\u8007\u8008\u800A\u800D\u800E\u800F\u8011\u8013\u8014\u8016\u801D\u801E\u801F\u8020\u8024\u8026\u802C\u802E\u8030\u8034\u8035\u8037\u8039\u803A\u803C\u803E\u8040\u8044\u8060\u8064\u8066\u806D\u8071\u8075\u8081\u8088\u808E\u809C\u809E\u80A6\u80A7\u80AB\u80B8\u80B9\u80C8\u80CD\u80CF\u80D2\u80D4\u80D5\u80D7\u80D8\u80E0\u80ED\u80EE\"],[\"8fd6a1\",\"\u80F0\u80F2\u80F3\u80F6\u80F9\u80FA\u80FE\u8103\u810B\u8116\u8117\u8118\u811C\u811E\u8120\u8124\u8127\u812C\u8130\u8135\u813A\u813C\u8145\u8147\u814A\u814C\u8152\u8157\u8160\u8161\u8167\u8168\u8169\u816D\u816F\u8177\u8181\u8190\u8184\u8185\u8186\u818B\u818E\u8196\u8198\u819B\u819E\u81A2\u81AE\u81B2\u81B4\u81BB\u81CB\u81C3\u81C5\u81CA\u81CE\u81CF\u81D5\u81D7\u81DB\u81DD\u81DE\u81E1\u81E4\u81EB\u81EC\u81F0\u81F1\u81F2\u81F5\u81F6\u81F8\u81F9\u81FD\u81FF\u8200\u8203\u820F\u8213\u8214\u8219\u821A\u821D\u8221\u8222\u8228\u8232\u8234\u823A\u8243\u8244\u8245\u8246\"],[\"8fd7a1\",\"\u824B\u824E\u824F\u8251\u8256\u825C\u8260\u8263\u8267\u826D\u8274\u827B\u827D\u827F\u8280\u8281\u8283\u8284\u8287\u8289\u828A\u828E\u8291\u8294\u8296\u8298\u829A\u829B\u82A0\u82A1\u82A3\u82A4\u82A7\u82A8\u82A9\u82AA\u82AE\u82B0\u82B2\u82B4\u82B7\u82BA\u82BC\u82BE\u82BF\u82C6\u82D0\u82D5\u82DA\u82E0\u82E2\u82E4\u82E8\u82EA\u82ED\u82EF\u82F6\u82F7\u82FD\u82FE\u8300\u8301\u8307\u8308\u830A\u830B\u8354\u831B\u831D\u831E\u831F\u8321\u8322\u832C\u832D\u832E\u8330\u8333\u8337\u833A\u833C\u833D\u8342\u8343\u8344\u8347\u834D\u834E\u8351\u8355\u8356\u8357\u8370\u8378\"],[\"8fd8a1\",\"\u837D\u837F\u8380\u8382\u8384\u8386\u838D\u8392\u8394\u8395\u8398\u8399\u839B\u839C\u839D\u83A6\u83A7\u83A9\u83AC\u83BE\u83BF\u83C0\u83C7\u83C9\u83CF\u83D0\u83D1\u83D4\u83DD\u8353\u83E8\u83EA\u83F6\u83F8\u83F9\u83FC\u8401\u8406\u840A\u840F\u8411\u8415\u8419\u83AD\u842F\u8439\u8445\u8447\u8448\u844A\u844D\u844F\u8451\u8452\u8456\u8458\u8459\u845A\u845C\u8460\u8464\u8465\u8467\u846A\u8470\u8473\u8474\u8476\u8478\u847C\u847D\u8481\u8485\u8492\u8493\u8495\u849E\u84A6\u84A8\u84A9\u84AA\u84AF\u84B1\u84B4\u84BA\u84BD\u84BE\u84C0\u84C2\u84C7\u84C8\u84CC\u84CF\u84D3\"],[\"8fd9a1\",\"\u84DC\u84E7\u84EA\u84EF\u84F0\u84F1\u84F2\u84F7\u8532\u84FA\u84FB\u84FD\u8502\u8503\u8507\u850C\u850E\u8510\u851C\u851E\u8522\u8523\u8524\u8525\u8527\u852A\u852B\u852F\u8533\u8534\u8536\u853F\u8546\u854F\",4,\"\u8556\u8559\u855C\",6,\"\u8564\u856B\u856F\u8579\u857A\u857B\u857D\u857F\u8581\u8585\u8586\u8589\u858B\u858C\u858F\u8593\u8598\u859D\u859F\u85A0\u85A2\u85A5\u85A7\u85B4\u85B6\u85B7\u85B8\u85BC\u85BD\u85BE\u85BF\u85C2\u85C7\u85CA\u85CB\u85CE\u85AD\u85D8\u85DA\u85DF\u85E0\u85E6\u85E8\u85ED\u85F3\u85F6\u85FC\"],[\"8fdaa1\",\"\u85FF\u8600\u8604\u8605\u860D\u860E\u8610\u8611\u8612\u8618\u8619\u861B\u861E\u8621\u8627\u8629\u8636\u8638\u863A\u863C\u863D\u8640\u8642\u8646\u8652\u8653\u8656\u8657\u8658\u8659\u865D\u8660\",4,\"\u8669\u866C\u866F\u8675\u8676\u8677\u867A\u868D\u8691\u8696\u8698\u869A\u869C\u86A1\u86A6\u86A7\u86A8\u86AD\u86B1\u86B3\u86B4\u86B5\u86B7\u86B8\u86B9\u86BF\u86C0\u86C1\u86C3\u86C5\u86D1\u86D2\u86D5\u86D7\u86DA\u86DC\u86E0\u86E3\u86E5\u86E7\u8688\u86FA\u86FC\u86FD\u8704\u8705\u8707\u870B\u870E\u870F\u8710\u8713\u8714\u8719\u871E\u871F\u8721\u8723\"],[\"8fdba1\",\"\u8728\u872E\u872F\u8731\u8732\u8739\u873A\u873C\u873D\u873E\u8740\u8743\u8745\u874D\u8758\u875D\u8761\u8764\u8765\u876F\u8771\u8772\u877B\u8783\",6,\"\u878B\u878C\u8790\u8793\u8795\u8797\u8798\u8799\u879E\u87A0\u87A3\u87A7\u87AC\u87AD\u87AE\u87B1\u87B5\u87BE\u87BF\u87C1\u87C8\u87C9\u87CA\u87CE\u87D5\u87D6\u87D9\u87DA\u87DC\u87DF\u87E2\u87E3\u87E4\u87EA\u87EB\u87ED\u87F1\u87F3\u87F8\u87FA\u87FF\u8801\u8803\u8806\u8809\u880A\u880B\u8810\u8819\u8812\u8813\u8814\u8818\u881A\u881B\u881C\u881E\u881F\u8828\u882D\u882E\u8830\u8832\u8835\"],[\"8fdca1\",\"\u883A\u883C\u8841\u8843\u8845\u8848\u8849\u884A\u884B\u884E\u8851\u8855\u8856\u8858\u885A\u885C\u885F\u8860\u8864\u8869\u8871\u8879\u887B\u8880\u8898\u889A\u889B\u889C\u889F\u88A0\u88A8\u88AA\u88BA\u88BD\u88BE\u88C0\u88CA\",4,\"\u88D1\u88D2\u88D3\u88DB\u88DE\u88E7\u88EF\u88F0\u88F1\u88F5\u88F7\u8901\u8906\u890D\u890E\u890F\u8915\u8916\u8918\u8919\u891A\u891C\u8920\u8926\u8927\u8928\u8930\u8931\u8932\u8935\u8939\u893A\u893E\u8940\u8942\u8945\u8946\u8949\u894F\u8952\u8957\u895A\u895B\u895C\u8961\u8962\u8963\u896B\u896E\u8970\u8973\u8975\u897A\"],[\"8fdda1\",\"\u897B\u897C\u897D\u8989\u898D\u8990\u8994\u8995\u899B\u899C\u899F\u89A0\u89A5\u89B0\u89B4\u89B5\u89B6\u89B7\u89BC\u89D4\",4,\"\u89E5\u89E9\u89EB\u89ED\u89F1\u89F3\u89F6\u89F9\u89FD\u89FF\u8A04\u8A05\u8A07\u8A0F\u8A11\u8A12\u8A14\u8A15\u8A1E\u8A20\u8A22\u8A24\u8A26\u8A2B\u8A2C\u8A2F\u8A35\u8A37\u8A3D\u8A3E\u8A40\u8A43\u8A45\u8A47\u8A49\u8A4D\u8A4E\u8A53\u8A56\u8A57\u8A58\u8A5C\u8A5D\u8A61\u8A65\u8A67\u8A75\u8A76\u8A77\u8A79\u8A7A\u8A7B\u8A7E\u8A7F\u8A80\u8A83\u8A86\u8A8B\u8A8F\u8A90\u8A92\u8A96\u8A97\u8A99\u8A9F\u8AA7\u8AA9\u8AAE\u8AAF\u8AB3\"],[\"8fdea1\",\"\u8AB6\u8AB7\u8ABB\u8ABE\u8AC3\u8AC6\u8AC8\u8AC9\u8ACA\u8AD1\u8AD3\u8AD4\u8AD5\u8AD7\u8ADD\u8ADF\u8AEC\u8AF0\u8AF4\u8AF5\u8AF6\u8AFC\u8AFF\u8B05\u8B06\u8B0B\u8B11\u8B1C\u8B1E\u8B1F\u8B0A\u8B2D\u8B30\u8B37\u8B3C\u8B42\",4,\"\u8B48\u8B52\u8B53\u8B54\u8B59\u8B4D\u8B5E\u8B63\u8B6D\u8B76\u8B78\u8B79\u8B7C\u8B7E\u8B81\u8B84\u8B85\u8B8B\u8B8D\u8B8F\u8B94\u8B95\u8B9C\u8B9E\u8B9F\u8C38\u8C39\u8C3D\u8C3E\u8C45\u8C47\u8C49\u8C4B\u8C4F\u8C51\u8C53\u8C54\u8C57\u8C58\u8C5B\u8C5D\u8C59\u8C63\u8C64\u8C66\u8C68\u8C69\u8C6D\u8C73\u8C75\u8C76\u8C7B\u8C7E\u8C86\"],[\"8fdfa1\",\"\u8C87\u8C8B\u8C90\u8C92\u8C93\u8C99\u8C9B\u8C9C\u8CA4\u8CB9\u8CBA\u8CC5\u8CC6\u8CC9\u8CCB\u8CCF\u8CD6\u8CD5\u8CD9\u8CDD\u8CE1\u8CE8\u8CEC\u8CEF\u8CF0\u8CF2\u8CF5\u8CF7\u8CF8\u8CFE\u8CFF\u8D01\u8D03\u8D09\u8D12\u8D17\u8D1B\u8D65\u8D69\u8D6C\u8D6E\u8D7F\u8D82\u8D84\u8D88\u8D8D\u8D90\u8D91\u8D95\u8D9E\u8D9F\u8DA0\u8DA6\u8DAB\u8DAC\u8DAF\u8DB2\u8DB5\u8DB7\u8DB9\u8DBB\u8DC0\u8DC5\u8DC6\u8DC7\u8DC8\u8DCA\u8DCE\u8DD1\u8DD4\u8DD5\u8DD7\u8DD9\u8DE4\u8DE5\u8DE7\u8DEC\u8DF0\u8DBC\u8DF1\u8DF2\u8DF4\u8DFD\u8E01\u8E04\u8E05\u8E06\u8E0B\u8E11\u8E14\u8E16\u8E20\u8E21\u8E22\"],[\"8fe0a1\",\"\u8E23\u8E26\u8E27\u8E31\u8E33\u8E36\u8E37\u8E38\u8E39\u8E3D\u8E40\u8E41\u8E4B\u8E4D\u8E4E\u8E4F\u8E54\u8E5B\u8E5C\u8E5D\u8E5E\u8E61\u8E62\u8E69\u8E6C\u8E6D\u8E6F\u8E70\u8E71\u8E79\u8E7A\u8E7B\u8E82\u8E83\u8E89\u8E90\u8E92\u8E95\u8E9A\u8E9B\u8E9D\u8E9E\u8EA2\u8EA7\u8EA9\u8EAD\u8EAE\u8EB3\u8EB5\u8EBA\u8EBB\u8EC0\u8EC1\u8EC3\u8EC4\u8EC7\u8ECF\u8ED1\u8ED4\u8EDC\u8EE8\u8EEE\u8EF0\u8EF1\u8EF7\u8EF9\u8EFA\u8EED\u8F00\u8F02\u8F07\u8F08\u8F0F\u8F10\u8F16\u8F17\u8F18\u8F1E\u8F20\u8F21\u8F23\u8F25\u8F27\u8F28\u8F2C\u8F2D\u8F2E\u8F34\u8F35\u8F36\u8F37\u8F3A\u8F40\u8F41\"],[\"8fe1a1\",\"\u8F43\u8F47\u8F4F\u8F51\",4,\"\u8F58\u8F5D\u8F5E\u8F65\u8F9D\u8FA0\u8FA1\u8FA4\u8FA5\u8FA6\u8FB5\u8FB6\u8FB8\u8FBE\u8FC0\u8FC1\u8FC6\u8FCA\u8FCB\u8FCD\u8FD0\u8FD2\u8FD3\u8FD5\u8FE0\u8FE3\u8FE4\u8FE8\u8FEE\u8FF1\u8FF5\u8FF6\u8FFB\u8FFE\u9002\u9004\u9008\u900C\u9018\u901B\u9028\u9029\u902F\u902A\u902C\u902D\u9033\u9034\u9037\u903F\u9043\u9044\u904C\u905B\u905D\u9062\u9066\u9067\u906C\u9070\u9074\u9079\u9085\u9088\u908B\u908C\u908E\u9090\u9095\u9097\u9098\u9099\u909B\u90A0\u90A1\u90A2\u90A5\u90B0\u90B2\u90B3\u90B4\u90B6\u90BD\u90CC\u90BE\u90C3\"],[\"8fe2a1\",\"\u90C4\u90C5\u90C7\u90C8\u90D5\u90D7\u90D8\u90D9\u90DC\u90DD\u90DF\u90E5\u90D2\u90F6\u90EB\u90EF\u90F0\u90F4\u90FE\u90FF\u9100\u9104\u9105\u9106\u9108\u910D\u9110\u9114\u9116\u9117\u9118\u911A\u911C\u911E\u9120\u9125\u9122\u9123\u9127\u9129\u912E\u912F\u9131\u9134\u9136\u9137\u9139\u913A\u913C\u913D\u9143\u9147\u9148\u914F\u9153\u9157\u9159\u915A\u915B\u9161\u9164\u9167\u916D\u9174\u9179\u917A\u917B\u9181\u9183\u9185\u9186\u918A\u918E\u9191\u9193\u9194\u9195\u9198\u919E\u91A1\u91A6\u91A8\u91AC\u91AD\u91AE\u91B0\u91B1\u91B2\u91B3\u91B6\u91BB\u91BC\u91BD\u91BF\"],[\"8fe3a1\",\"\u91C2\u91C3\u91C5\u91D3\u91D4\u91D7\u91D9\u91DA\u91DE\u91E4\u91E5\u91E9\u91EA\u91EC\",5,\"\u91F7\u91F9\u91FB\u91FD\u9200\u9201\u9204\u9205\u9206\u9207\u9209\u920A\u920C\u9210\u9212\u9213\u9216\u9218\u921C\u921D\u9223\u9224\u9225\u9226\u9228\u922E\u922F\u9230\u9233\u9235\u9236\u9238\u9239\u923A\u923C\u923E\u9240\u9242\u9243\u9246\u9247\u924A\u924D\u924E\u924F\u9251\u9258\u9259\u925C\u925D\u9260\u9261\u9265\u9267\u9268\u9269\u926E\u926F\u9270\u9275\",4,\"\u927B\u927C\u927D\u927F\u9288\u9289\u928A\u928D\u928E\u9292\u9297\"],[\"8fe4a1\",\"\u9299\u929F\u92A0\u92A4\u92A5\u92A7\u92A8\u92AB\u92AF\u92B2\u92B6\u92B8\u92BA\u92BB\u92BC\u92BD\u92BF\",4,\"\u92C5\u92C6\u92C7\u92C8\u92CB\u92CC\u92CD\u92CE\u92D0\u92D3\u92D5\u92D7\u92D8\u92D9\u92DC\u92DD\u92DF\u92E0\u92E1\u92E3\u92E5\u92E7\u92E8\u92EC\u92EE\u92F0\u92F9\u92FB\u92FF\u9300\u9302\u9308\u930D\u9311\u9314\u9315\u931C\u931D\u931E\u931F\u9321\u9324\u9325\u9327\u9329\u932A\u9333\u9334\u9336\u9337\u9347\u9348\u9349\u9350\u9351\u9352\u9355\u9357\u9358\u935A\u935E\u9364\u9365\u9367\u9369\u936A\u936D\u936F\u9370\u9371\u9373\u9374\u9376\"],[\"8fe5a1\",\"\u937A\u937D\u937F\u9380\u9381\u9382\u9388\u938A\u938B\u938D\u938F\u9392\u9395\u9398\u939B\u939E\u93A1\u93A3\u93A4\u93A6\u93A8\u93AB\u93B4\u93B5\u93B6\u93BA\u93A9\u93C1\u93C4\u93C5\u93C6\u93C7\u93C9\",4,\"\u93D3\u93D9\u93DC\u93DE\u93DF\u93E2\u93E6\u93E7\u93F9\u93F7\u93F8\u93FA\u93FB\u93FD\u9401\u9402\u9404\u9408\u9409\u940D\u940E\u940F\u9415\u9416\u9417\u941F\u942E\u942F\u9431\u9432\u9433\u9434\u943B\u943F\u943D\u9443\u9445\u9448\u944A\u944C\u9455\u9459\u945C\u945F\u9461\u9463\u9468\u946B\u946D\u946E\u946F\u9471\u9472\u9484\u9483\u9578\u9579\"],[\"8fe6a1\",\"\u957E\u9584\u9588\u958C\u958D\u958E\u959D\u959E\u959F\u95A1\u95A6\u95A9\u95AB\u95AC\u95B4\u95B6\u95BA\u95BD\u95BF\u95C6\u95C8\u95C9\u95CB\u95D0\u95D1\u95D2\u95D3\u95D9\u95DA\u95DD\u95DE\u95DF\u95E0\u95E4\u95E6\u961D\u961E\u9622\u9624\u9625\u9626\u962C\u9631\u9633\u9637\u9638\u9639\u963A\u963C\u963D\u9641\u9652\u9654\u9656\u9657\u9658\u9661\u966E\u9674\u967B\u967C\u967E\u967F\u9681\u9682\u9683\u9684\u9689\u9691\u9696\u969A\u969D\u969F\u96A4\u96A5\u96A6\u96A9\u96AE\u96AF\u96B3\u96BA\u96CA\u96D2\u5DB2\u96D8\u96DA\u96DD\u96DE\u96DF\u96E9\u96EF\u96F1\u96FA\u9702\"],[\"8fe7a1\",\"\u9703\u9705\u9709\u971A\u971B\u971D\u9721\u9722\u9723\u9728\u9731\u9733\u9741\u9743\u974A\u974E\u974F\u9755\u9757\u9758\u975A\u975B\u9763\u9767\u976A\u976E\u9773\u9776\u9777\u9778\u977B\u977D\u977F\u9780\u9789\u9795\u9796\u9797\u9799\u979A\u979E\u979F\u97A2\u97AC\u97AE\u97B1\u97B2\u97B5\u97B6\u97B8\u97B9\u97BA\u97BC\u97BE\u97BF\u97C1\u97C4\u97C5\u97C7\u97C9\u97CA\u97CC\u97CD\u97CE\u97D0\u97D1\u97D4\u97D7\u97D8\u97D9\u97DD\u97DE\u97E0\u97DB\u97E1\u97E4\u97EF\u97F1\u97F4\u97F7\u97F8\u97FA\u9807\u980A\u9819\u980D\u980E\u9814\u9816\u981C\u981E\u9820\u9823\u9826\"],[\"8fe8a1\",\"\u982B\u982E\u982F\u9830\u9832\u9833\u9835\u9825\u983E\u9844\u9847\u984A\u9851\u9852\u9853\u9856\u9857\u9859\u985A\u9862\u9863\u9865\u9866\u986A\u986C\u98AB\u98AD\u98AE\u98B0\u98B4\u98B7\u98B8\u98BA\u98BB\u98BF\u98C2\u98C5\u98C8\u98CC\u98E1\u98E3\u98E5\u98E6\u98E7\u98EA\u98F3\u98F6\u9902\u9907\u9908\u9911\u9915\u9916\u9917\u991A\u991B\u991C\u991F\u9922\u9926\u9927\u992B\u9931\",4,\"\u9939\u993A\u993B\u993C\u9940\u9941\u9946\u9947\u9948\u994D\u994E\u9954\u9958\u9959\u995B\u995C\u995E\u995F\u9960\u999B\u999D\u999F\u99A6\u99B0\u99B1\u99B2\u99B5\"],[\"8fe9a1\",\"\u99B9\u99BA\u99BD\u99BF\u99C3\u99C9\u99D3\u99D4\u99D9\u99DA\u99DC\u99DE\u99E7\u99EA\u99EB\u99EC\u99F0\u99F4\u99F5\u99F9\u99FD\u99FE\u9A02\u9A03\u9A04\u9A0B\u9A0C\u9A10\u9A11\u9A16\u9A1E\u9A20\u9A22\u9A23\u9A24\u9A27\u9A2D\u9A2E\u9A33\u9A35\u9A36\u9A38\u9A47\u9A41\u9A44\u9A4A\u9A4B\u9A4C\u9A4E\u9A51\u9A54\u9A56\u9A5D\u9AAA\u9AAC\u9AAE\u9AAF\u9AB2\u9AB4\u9AB5\u9AB6\u9AB9\u9ABB\u9ABE\u9ABF\u9AC1\u9AC3\u9AC6\u9AC8\u9ACE\u9AD0\u9AD2\u9AD5\u9AD6\u9AD7\u9ADB\u9ADC\u9AE0\u9AE4\u9AE5\u9AE7\u9AE9\u9AEC\u9AF2\u9AF3\u9AF5\u9AF9\u9AFA\u9AFD\u9AFF\",4],[\"8feaa1\",\"\u9B04\u9B05\u9B08\u9B09\u9B0B\u9B0C\u9B0D\u9B0E\u9B10\u9B12\u9B16\u9B19\u9B1B\u9B1C\u9B20\u9B26\u9B2B\u9B2D\u9B33\u9B34\u9B35\u9B37\u9B39\u9B3A\u9B3D\u9B48\u9B4B\u9B4C\u9B55\u9B56\u9B57\u9B5B\u9B5E\u9B61\u9B63\u9B65\u9B66\u9B68\u9B6A\",4,\"\u9B73\u9B75\u9B77\u9B78\u9B79\u9B7F\u9B80\u9B84\u9B85\u9B86\u9B87\u9B89\u9B8A\u9B8B\u9B8D\u9B8F\u9B90\u9B94\u9B9A\u9B9D\u9B9E\u9BA6\u9BA7\u9BA9\u9BAC\u9BB0\u9BB1\u9BB2\u9BB7\u9BB8\u9BBB\u9BBC\u9BBE\u9BBF\u9BC1\u9BC7\u9BC8\u9BCE\u9BD0\u9BD7\u9BD8\u9BDD\u9BDF\u9BE5\u9BE7\u9BEA\u9BEB\u9BEF\u9BF3\u9BF7\u9BF8\"],[\"8feba1\",\"\u9BF9\u9BFA\u9BFD\u9BFF\u9C00\u9C02\u9C0B\u9C0F\u9C11\u9C16\u9C18\u9C19\u9C1A\u9C1C\u9C1E\u9C22\u9C23\u9C26\",4,\"\u9C31\u9C35\u9C36\u9C37\u9C3D\u9C41\u9C43\u9C44\u9C45\u9C49\u9C4A\u9C4E\u9C4F\u9C50\u9C53\u9C54\u9C56\u9C58\u9C5B\u9C5D\u9C5E\u9C5F\u9C63\u9C69\u9C6A\u9C5C\u9C6B\u9C68\u9C6E\u9C70\u9C72\u9C75\u9C77\u9C7B\u9CE6\u9CF2\u9CF7\u9CF9\u9D0B\u9D02\u9D11\u9D17\u9D18\u9D1C\u9D1D\u9D1E\u9D2F\u9D30\u9D32\u9D33\u9D34\u9D3A\u9D3C\u9D45\u9D3D\u9D42\u9D43\u9D47\u9D4A\u9D53\u9D54\u9D5F\u9D63\u9D62\u9D65\u9D69\u9D6A\u9D6B\u9D70\u9D76\u9D77\u9D7B\"],[\"8feca1\",\"\u9D7C\u9D7E\u9D83\u9D84\u9D86\u9D8A\u9D8D\u9D8E\u9D92\u9D93\u9D95\u9D96\u9D97\u9D98\u9DA1\u9DAA\u9DAC\u9DAE\u9DB1\u9DB5\u9DB9\u9DBC\u9DBF\u9DC3\u9DC7\u9DC9\u9DCA\u9DD4\u9DD5\u9DD6\u9DD7\u9DDA\u9DDE\u9DDF\u9DE0\u9DE5\u9DE7\u9DE9\u9DEB\u9DEE\u9DF0\u9DF3\u9DF4\u9DFE\u9E0A\u9E02\u9E07\u9E0E\u9E10\u9E11\u9E12\u9E15\u9E16\u9E19\u9E1C\u9E1D\u9E7A\u9E7B\u9E7C\u9E80\u9E82\u9E83\u9E84\u9E85\u9E87\u9E8E\u9E8F\u9E96\u9E98\u9E9B\u9E9E\u9EA4\u9EA8\u9EAC\u9EAE\u9EAF\u9EB0\u9EB3\u9EB4\u9EB5\u9EC6\u9EC8\u9ECB\u9ED5\u9EDF\u9EE4\u9EE7\u9EEC\u9EED\u9EEE\u9EF0\u9EF1\u9EF2\u9EF5\"],[\"8feda1\",\"\u9EF8\u9EFF\u9F02\u9F03\u9F09\u9F0F\u9F10\u9F11\u9F12\u9F14\u9F16\u9F17\u9F19\u9F1A\u9F1B\u9F1F\u9F22\u9F26\u9F2A\u9F2B\u9F2F\u9F31\u9F32\u9F34\u9F37\u9F39\u9F3A\u9F3C\u9F3D\u9F3F\u9F41\u9F43\",4,\"\u9F53\u9F55\u9F56\u9F57\u9F58\u9F5A\u9F5D\u9F5E\u9F68\u9F69\u9F6D\",4,\"\u9F73\u9F75\u9F7A\u9F7D\u9F8F\u9F90\u9F91\u9F92\u9F94\u9F96\u9F97\u9F9E\u9FA1\u9FA2\u9FA3\u9FA5\"]]");
      /***/
    },

    /***/
    "pqY9":
    /*!***********************************************************!*\
      !*** ./node_modules/canvas-flatten/src/canvas-flatten.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function pqY9(module, exports) {
      /**
       * Use the ImageData from a Canvas and flatten the image on a solid background
       */
      var CanvasFlatten = /*#__PURE__*/function () {
        function CanvasFlatten() {
          _classCallCheck(this, CanvasFlatten);
        }

        _createClass(CanvasFlatten, [{
          key: "flatten",
          value:
          /**
             * Change the image to grayscale
             *
             * @param  {object}   image         The imageData of a Canvas 2d context
             * @param  {array}    background    Three values consisting of the r, g, b of the background
             * @return {object}                 The resulting imageData
             *
             */
          function flatten(image, background) {
            for (var i = 0; i < image.data.length; i += 4) {
              var alpha = image.data[i + 3];
              var invAlpha = 255 - alpha;
              image.data[i] = (alpha * image.data[i] + invAlpha * background[0]) / 255;
              image.data[i + 1] = (alpha * image.data[i + 1] + invAlpha * background[1]) / 255;
              image.data[i + 2] = (alpha * image.data[i + 2] + invAlpha * background[2]) / 255;
              image.data[i + 3] = 0xff;
            }

            return image;
          }
        }]);

        return CanvasFlatten;
      }();

      module.exports = new CanvasFlatten();
      /***/
    },

    /***/
    "rsGr":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/tables/gbk-added.json ***!
      \****************************************************************************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, default */

    /***/
    function rsGr(module) {
      module.exports = JSON.parse("[[\"a140\",\"\",62],[\"a180\",\"\",32],[\"a240\",\"\",62],[\"a280\",\"\",32],[\"a2ab\",\"\",5],[\"a2e3\",\"€\"],[\"a2ef\",\"\"],[\"a2fd\",\"\"],[\"a340\",\"\",62],[\"a380\",\"\",31,\"　\"],[\"a440\",\"\",62],[\"a480\",\"\",32],[\"a4f4\",\"\",10],[\"a540\",\"\",62],[\"a580\",\"\",32],[\"a5f7\",\"\",7],[\"a640\",\"\",62],[\"a680\",\"\",32],[\"a6b9\",\"\",7],[\"a6d9\",\"\",6],[\"a6ec\",\"\"],[\"a6f3\",\"\"],[\"a6f6\",\"\",8],[\"a740\",\"\",62],[\"a780\",\"\",32],[\"a7c2\",\"\",14],[\"a7f2\",\"\",12],[\"a896\",\"\",10],[\"a8bc\",\"\"],[\"a8bf\",\"ǹ\"],[\"a8c1\",\"\"],[\"a8ea\",\"\",20],[\"a958\",\"\"],[\"a95b\",\"\"],[\"a95d\",\"\"],[\"a989\",\"〾⿰\",11],[\"a997\",\"\",12],[\"a9f0\",\"\",14],[\"aaa1\",\"\",93],[\"aba1\",\"\",93],[\"aca1\",\"\",93],[\"ada1\",\"\",93],[\"aea1\",\"\",93],[\"afa1\",\"\",93],[\"d7fa\",\"\",4],[\"f8a1\",\"\",93],[\"f9a1\",\"\",93],[\"faa1\",\"\",93],[\"fba1\",\"\",93],[\"fca1\",\"\",93],[\"fda1\",\"\",93],[\"fe50\",\"⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌\"],[\"fe80\",\"䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓\",6,\"䶮\",93]]");
      /***/
    },

    /***/
    "tjlA":
    /*!**************************************!*\
      !*** ./node_modules/buffer/index.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function tjlA(module, exports, __webpack_require__) {
      "use strict";
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */

      /* eslint-disable no-proto */

      var base64 = __webpack_require__(
      /*! base64-js */
      "H7XF");

      var ieee754 = __webpack_require__(
      /*! ieee754 */
      "kVK+");

      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 0x7fffffff;
      exports.kMaxLength = K_MAX_LENGTH;
      /**
       * If `Buffer.TYPED_ARRAY_SUPPORT`:
       *   === true    Use Uint8Array implementation (fastest)
       *   === false   Print warning and recommend using `buffer` v4.x which has an Object
       *               implementation (most compatible, even IE6)
       *
       * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
       * Opera 11.6+, iOS 4.2+.
       *
       * We report that the browser does not support typed arrays if the are not subclassable
       * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
       * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
       * for __proto__ and has a buggy typed array implementation.
       */

      Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

      if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
      }

      function typedArraySupport() {
        // Can typed array instances can be augmented?
        try {
          var arr = new Uint8Array(1);
          arr.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function foo() {
              return 42;
            }
          };
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }

      Object.defineProperty(Buffer.prototype, 'parent', {
        enumerable: true,
        get: function get() {
          if (!Buffer.isBuffer(this)) return undefined;
          return this.buffer;
        }
      });
      Object.defineProperty(Buffer.prototype, 'offset', {
        enumerable: true,
        get: function get() {
          if (!Buffer.isBuffer(this)) return undefined;
          return this.byteOffset;
        }
      });

      function createBuffer(length) {
        if (length > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length + '" is invalid for option "size"');
        } // Return an augmented `Uint8Array` instance


        var buf = new Uint8Array(length);
        buf.__proto__ = Buffer.prototype;
        return buf;
      }
      /**
       * The Buffer constructor returns instances of `Uint8Array` that have their
       * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
       * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
       * and the `Uint8Array` methods. Square bracket notation works as expected -- it
       * returns a single octet.
       *
       * The `Uint8Array` prototype remains unmodified.
       */


      function Buffer(arg, encodingOrOffset, length) {
        // Common case.
        if (typeof arg === 'number') {
          if (typeof encodingOrOffset === 'string') {
            throw new TypeError('The "string" argument must be of type string. Received type number');
          }

          return allocUnsafe(arg);
        }

        return from(arg, encodingOrOffset, length);
      } // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97


      if (typeof Symbol !== 'undefined' && Symbol.species != null && Buffer[Symbol.species] === Buffer) {
        Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true,
          enumerable: false,
          writable: false
        });
      }

      Buffer.poolSize = 8192; // not used by this implementation

      function from(value, encodingOrOffset, length) {
        if (typeof value === 'string') {
          return fromString(value, encodingOrOffset);
        }

        if (ArrayBuffer.isView(value)) {
          return fromArrayLike(value);
        }

        if (value == null) {
          throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
        }

        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }

        if (typeof value === 'number') {
          throw new TypeError('The "value" argument must not be of type number. Received type number');
        }

        var valueOf = value.valueOf && value.valueOf();

        if (valueOf != null && valueOf !== value) {
          return Buffer.from(valueOf, encodingOrOffset, length);
        }

        var b = fromObject(value);
        if (b) return b;

        if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
          return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
        }

        throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
      }
      /**
       * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
       * if value is a number.
       * Buffer.from(str[, encoding])
       * Buffer.from(array)
       * Buffer.from(buffer)
       * Buffer.from(arrayBuffer[, byteOffset[, length]])
       **/


      Buffer.from = function (value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
      }; // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
      // https://github.com/feross/buffer/pull/148


      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array;

      function assertSize(size) {
        if (typeof size !== 'number') {
          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
      }

      function alloc(size, fill, encoding) {
        assertSize(size);

        if (size <= 0) {
          return createBuffer(size);
        }

        if (fill !== undefined) {
          // Only pay attention to encoding if it's a string. This
          // prevents accidentally sending in a number that would
          // be interpretted as a start offset.
          return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }

        return createBuffer(size);
      }
      /**
       * Creates a new filled Buffer instance.
       * alloc(size[, fill[, encoding]])
       **/


      Buffer.alloc = function (size, fill, encoding) {
        return alloc(size, fill, encoding);
      };

      function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }
      /**
       * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
       * */


      Buffer.allocUnsafe = function (size) {
        return allocUnsafe(size);
      };
      /**
       * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
       */


      Buffer.allocUnsafeSlow = function (size) {
        return allocUnsafe(size);
      };

      function fromString(string, encoding) {
        if (typeof encoding !== 'string' || encoding === '') {
          encoding = 'utf8';
        }

        if (!Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding);
        }

        var length = byteLength(string, encoding) | 0;
        var buf = createBuffer(length);
        var actual = buf.write(string, encoding);

        if (actual !== length) {
          // Writing a hex string, for example, that contains invalid characters will
          // cause everything after the first invalid character to be ignored. (e.g.
          // 'abxxcd' will be treated as 'ab')
          buf = buf.slice(0, actual);
        }

        return buf;
      }

      function fromArrayLike(array) {
        var length = array.length < 0 ? 0 : checked(array.length) | 0;
        var buf = createBuffer(length);

        for (var i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }

        return buf;
      }

      function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }

        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }

        var buf;

        if (byteOffset === undefined && length === undefined) {
          buf = new Uint8Array(array);
        } else if (length === undefined) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        } // Return an augmented `Uint8Array` instance


        buf.__proto__ = Buffer.prototype;
        return buf;
      }

      function fromObject(obj) {
        if (Buffer.isBuffer(obj)) {
          var len = checked(obj.length) | 0;
          var buf = createBuffer(len);

          if (buf.length === 0) {
            return buf;
          }

          obj.copy(buf, 0, 0, len);
          return buf;
        }

        if (obj.length !== undefined) {
          if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
            return createBuffer(0);
          }

          return fromArrayLike(obj);
        }

        if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data);
        }
      }

      function checked(length) {
        // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
        // length is NaN (which is otherwise coerced to zero.)
        if (length >= K_MAX_LENGTH) {
          throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
        }

        return length | 0;
      }

      function SlowBuffer(length) {
        if (+length != length) {
          // eslint-disable-line eqeqeq
          length = 0;
        }

        return Buffer.alloc(+length);
      }

      Buffer.isBuffer = function isBuffer(b) {
        return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
      };

      Buffer.compare = function compare(a, b) {
        if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
        if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);

        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
          throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        }

        if (a === b) return 0;
        var x = a.length;
        var y = b.length;

        for (var i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }

        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };

      Buffer.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'latin1':
          case 'binary':
          case 'base64':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return true;

          default:
            return false;
        }
      };

      Buffer.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }

        if (list.length === 0) {
          return Buffer.alloc(0);
        }

        var i;

        if (length === undefined) {
          length = 0;

          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }

        var buffer = Buffer.allocUnsafe(length);
        var pos = 0;

        for (i = 0; i < list.length; ++i) {
          var buf = list[i];

          if (isInstance(buf, Uint8Array)) {
            buf = Buffer.from(buf);
          }

          if (!Buffer.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          }

          buf.copy(buffer, pos);
          pos += buf.length;
        }

        return buffer;
      };

      function byteLength(string, encoding) {
        if (Buffer.isBuffer(string)) {
          return string.length;
        }

        if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
          return string.byteLength;
        }

        if (typeof string !== 'string') {
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof string);
        }

        var len = string.length;
        var mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0) return 0; // Use a for loop to avoid recursion

        var loweredCase = false;

        for (;;) {
          switch (encoding) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return len;

            case 'utf8':
            case 'utf-8':
              return utf8ToBytes(string).length;

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return len * 2;

            case 'hex':
              return len >>> 1;

            case 'base64':
              return base64ToBytes(string).length;

            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
              }

              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }

      Buffer.byteLength = byteLength;

      function slowToString(encoding, start, end) {
        var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
        // property of a typed array.
        // This behaves neither like String nor Uint8Array in that we set start/end
        // to their upper/lower bounds if the value passed is out of range.
        // undefined is handled specially as per ECMA-262 6th Edition,
        // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

        if (start === undefined || start < 0) {
          start = 0;
        } // Return early if start > this.length. Done here to prevent potential uint32
        // coercion fail below.


        if (start > this.length) {
          return '';
        }

        if (end === undefined || end > this.length) {
          end = this.length;
        }

        if (end <= 0) {
          return '';
        } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


        end >>>= 0;
        start >>>= 0;

        if (end <= start) {
          return '';
        }

        if (!encoding) encoding = 'utf8';

        while (true) {
          switch (encoding) {
            case 'hex':
              return hexSlice(this, start, end);

            case 'utf8':
            case 'utf-8':
              return utf8Slice(this, start, end);

            case 'ascii':
              return asciiSlice(this, start, end);

            case 'latin1':
            case 'binary':
              return latin1Slice(this, start, end);

            case 'base64':
              return base64Slice(this, start, end);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return utf16leSlice(this, start, end);

            default:
              if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
              encoding = (encoding + '').toLowerCase();
              loweredCase = true;
          }
        }
      } // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
      // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
      // reliably in a browserify context because there could be multiple different
      // copies of the 'buffer' package in use. This method works even for Buffer
      // instances that were created from another copy of the `buffer` package.
      // See: https://github.com/feross/buffer/issues/154


      Buffer.prototype._isBuffer = true;

      function swap(b, n, m) {
        var i = b[n];
        b[n] = b[m];
        b[m] = i;
      }

      Buffer.prototype.swap16 = function swap16() {
        var len = this.length;

        if (len % 2 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 16-bits');
        }

        for (var i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }

        return this;
      };

      Buffer.prototype.swap32 = function swap32() {
        var len = this.length;

        if (len % 4 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 32-bits');
        }

        for (var i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }

        return this;
      };

      Buffer.prototype.swap64 = function swap64() {
        var len = this.length;

        if (len % 8 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 64-bits');
        }

        for (var i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }

        return this;
      };

      Buffer.prototype.toString = function toString() {
        var length = this.length;
        if (length === 0) return '';
        if (arguments.length === 0) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };

      Buffer.prototype.toLocaleString = Buffer.prototype.toString;

      Buffer.prototype.equals = function equals(b) {
        if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
        if (this === b) return true;
        return Buffer.compare(this, b) === 0;
      };

      Buffer.prototype.inspect = function inspect() {
        var str = '';
        var max = exports.INSPECT_MAX_BYTES;
        str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
        if (this.length > max) str += ' ... ';
        return '<Buffer ' + str + '>';
      };

      Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
          target = Buffer.from(target, target.offset, target.byteLength);
        }

        if (!Buffer.isBuffer(target)) {
          throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof target);
        }

        if (start === undefined) {
          start = 0;
        }

        if (end === undefined) {
          end = target ? target.length : 0;
        }

        if (thisStart === undefined) {
          thisStart = 0;
        }

        if (thisEnd === undefined) {
          thisEnd = this.length;
        }

        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError('out of range index');
        }

        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }

        if (thisStart >= thisEnd) {
          return -1;
        }

        if (start >= end) {
          return 1;
        }

        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        var x = thisEnd - thisStart;
        var y = end - start;
        var len = Math.min(x, y);
        var thisCopy = this.slice(thisStart, thisEnd);
        var targetCopy = target.slice(start, end);

        for (var i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }

        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      }; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
      // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
      //
      // Arguments:
      // - buffer - a Buffer to search
      // - val - a string, Buffer, or number
      // - byteOffset - an index into `buffer`; will be clamped to an int32
      // - encoding - an optional encoding, relevant is val is a string
      // - dir - true for indexOf, false for lastIndexOf


      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        // Empty buffer means no match
        if (buffer.length === 0) return -1; // Normalize byteOffset

        if (typeof byteOffset === 'string') {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 0x7fffffff) {
          byteOffset = 0x7fffffff;
        } else if (byteOffset < -0x80000000) {
          byteOffset = -0x80000000;
        }

        byteOffset = +byteOffset; // Coerce to Number.

        if (numberIsNaN(byteOffset)) {
          // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
          byteOffset = dir ? 0 : buffer.length - 1;
        } // Normalize byteOffset: negative offsets start from the end of the buffer


        if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

        if (byteOffset >= buffer.length) {
          if (dir) return -1;else byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir) byteOffset = 0;else return -1;
        } // Normalize val


        if (typeof val === 'string') {
          val = Buffer.from(val, encoding);
        } // Finally, search either indexOf (if dir is true) or lastIndexOf


        if (Buffer.isBuffer(val)) {
          // Special case: looking for empty string/buffer always fails
          if (val.length === 0) {
            return -1;
          }

          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === 'number') {
          val = val & 0xFF; // Search for a byte value [0-255]

          if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }

          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }

        throw new TypeError('val must be string, number or Buffer');
      }

      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        var indexSize = 1;
        var arrLength = arr.length;
        var valLength = val.length;

        if (encoding !== undefined) {
          encoding = String(encoding).toLowerCase();

          if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }

            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }

        function read(buf, i) {
          if (indexSize === 1) {
            return buf[i];
          } else {
            return buf.readUInt16BE(i * indexSize);
          }
        }

        var i;

        if (dir) {
          var foundIndex = -1;

          for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1) foundIndex = i;
              if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1) i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

          for (i = byteOffset; i >= 0; i--) {
            var found = true;

            for (var j = 0; j < valLength; j++) {
              if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
              }
            }

            if (found) return i;
          }
        }

        return -1;
      }

      Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };

      Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };

      Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };

      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        var remaining = buf.length - offset;

        if (!length) {
          length = remaining;
        } else {
          length = Number(length);

          if (length > remaining) {
            length = remaining;
          }
        }

        var strLen = string.length;

        if (length > strLen / 2) {
          length = strLen / 2;
        }

        for (var i = 0; i < length; ++i) {
          var parsed = parseInt(string.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }

        return i;
      }

      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }

      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }

      function latin1Write(buf, string, offset, length) {
        return asciiWrite(buf, string, offset, length);
      }

      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }

      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }

      Buffer.prototype.write = function write(string, offset, length, encoding) {
        // Buffer#write(string)
        if (offset === undefined) {
          encoding = 'utf8';
          length = this.length;
          offset = 0; // Buffer#write(string, encoding)
        } else if (length === undefined && typeof offset === 'string') {
          encoding = offset;
          length = this.length;
          offset = 0; // Buffer#write(string, offset[, length][, encoding])
        } else if (isFinite(offset)) {
          offset = offset >>> 0;

          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
          } else {
            encoding = length;
            length = undefined;
          }
        } else {
          throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        }

        var remaining = this.length - offset;
        if (length === undefined || length > remaining) length = remaining;

        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError('Attempt to write outside buffer bounds');
        }

        if (!encoding) encoding = 'utf8';
        var loweredCase = false;

        for (;;) {
          switch (encoding) {
            case 'hex':
              return hexWrite(this, string, offset, length);

            case 'utf8':
            case 'utf-8':
              return utf8Write(this, string, offset, length);

            case 'ascii':
              return asciiWrite(this, string, offset, length);

            case 'latin1':
            case 'binary':
              return latin1Write(this, string, offset, length);

            case 'base64':
              // Warning: maxLength not taken into account in base64Write
              return base64Write(this, string, offset, length);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return ucs2Write(this, string, offset, length);

            default:
              if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };

      Buffer.prototype.toJSON = function toJSON() {
        return {
          type: 'Buffer',
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };

      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start, end));
        }
      }

      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        var res = [];
        var i = start;

        while (i < end) {
          var firstByte = buf[i];
          var codePoint = null;
          var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

          if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;

            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 0x80) {
                  codePoint = firstByte;
                }

                break;

              case 2:
                secondByte = buf[i + 1];

                if ((secondByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

                  if (tempCodePoint > 0x7F) {
                    codePoint = tempCodePoint;
                  }
                }

                break;

              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];

                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

                  if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                    codePoint = tempCodePoint;
                  }
                }

                break;

              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];

                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

                  if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                    codePoint = tempCodePoint;
                  }
                }

            }
          }

          if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
          } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
          }

          res.push(codePoint);
          i += bytesPerSequence;
        }

        return decodeCodePointsArray(res);
      } // Based on http://stackoverflow.com/a/22747272/680742, the browser with
      // the lowest limit is Chrome, with 0x10000 args.
      // We go 1 magnitude less, for safety


      var MAX_ARGUMENTS_LENGTH = 0x1000;

      function decodeCodePointsArray(codePoints) {
        var len = codePoints.length;

        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
        } // Decode in chunks to avoid "call stack size exceeded".


        var res = '';
        var i = 0;

        while (i < len) {
          res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        }

        return res;
      }

      function asciiSlice(buf, start, end) {
        var ret = '';
        end = Math.min(buf.length, end);

        for (var i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 0x7F);
        }

        return ret;
      }

      function latin1Slice(buf, start, end) {
        var ret = '';
        end = Math.min(buf.length, end);

        for (var i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }

        return ret;
      }

      function hexSlice(buf, start, end) {
        var len = buf.length;
        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;
        var out = '';

        for (var i = start; i < end; ++i) {
          out += toHex(buf[i]);
        }

        return out;
      }

      function utf16leSlice(buf, start, end) {
        var bytes = buf.slice(start, end);
        var res = '';

        for (var i = 0; i < bytes.length; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }

        return res;
      }

      Buffer.prototype.slice = function slice(start, end) {
        var len = this.length;
        start = ~~start;
        end = end === undefined ? len : ~~end;

        if (start < 0) {
          start += len;
          if (start < 0) start = 0;
        } else if (start > len) {
          start = len;
        }

        if (end < 0) {
          end += len;
          if (end < 0) end = 0;
        } else if (end > len) {
          end = len;
        }

        if (end < start) end = start;
        var newBuf = this.subarray(start, end); // Return an augmented `Uint8Array` instance

        newBuf.__proto__ = Buffer.prototype;
        return newBuf;
      };
      /*
       * Need to make sure that buffer isn't trying to write out of bounds.
       */


      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
        if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
      }

      Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;

        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }

        return val;
      };

      Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;

        if (!noAssert) {
          checkOffset(offset, byteLength, this.length);
        }

        var val = this[offset + --byteLength];
        var mul = 1;

        while (byteLength > 0 && (mul *= 0x100)) {
          val += this[offset + --byteLength] * mul;
        }

        return val;
      };

      Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        return this[offset];
      };

      Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };

      Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };

      Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
      };

      Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };

      Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;

        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }

        mul *= 0x80;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength);
        return val;
      };

      Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var i = byteLength;
        var mul = 1;
        var val = this[offset + --i];

        while (i > 0 && (mul *= 0x100)) {
          val += this[offset + --i] * mul;
        }

        mul *= 0x80;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength);
        return val;
      };

      Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 0x80)) return this[offset];
        return (0xff - this[offset] + 1) * -1;
      };

      Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
        return val & 0x8000 ? val | 0xFFFF0000 : val;
      };

      Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
        return val & 0x8000 ? val | 0xFFFF0000 : val;
      };

      Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };

      Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };

      Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };

      Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };

      Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };

      Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };

      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError('Index out of range');
      }

      Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;

        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }

        var mul = 1;
        var i = 0;
        this[offset] = value & 0xFF;

        while (++i < byteLength && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;

        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }

        var i = byteLength - 1;
        var mul = 1;
        this[offset + i] = value & 0xFF;

        while (--i >= 0 && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
        this[offset] = value & 0xff;
        return offset + 1;
      };

      Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };

      Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
        return offset + 2;
      };

      Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 0xff;
        return offset + 4;
      };

      Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
        return offset + 4;
      };

      Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;

        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }

        var i = 0;
        var mul = 1;
        var sub = 0;
        this[offset] = value & 0xFF;

        while (++i < byteLength && (mul *= 0x100)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }

          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;

        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }

        var i = byteLength - 1;
        var mul = 1;
        var sub = 0;
        this[offset + i] = value & 0xFF;

        while (--i >= 0 && (mul *= 0x100)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }

          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
        if (value < 0) value = 0xff + value + 1;
        this[offset] = value & 0xff;
        return offset + 1;
      };

      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };

      Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
        return offset + 2;
      };

      Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };

      Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        if (value < 0) value = 0xffffffff + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
        return offset + 4;
      };

      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError('Index out of range');
        if (offset < 0) throw new RangeError('Index out of range');
      }

      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;

        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
        }

        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }

      Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };

      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;

        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
        }

        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }

      Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      }; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

        if (targetStart < 0) {
          throw new RangeError('targetStart out of bounds');
        }

        if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
        if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

        if (end > this.length) end = this.length;

        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }

        var len = end - start;

        if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
          // Use built-in when available, missing from IE11
          this.copyWithin(targetStart, start, end);
        } else if (this === target && start < targetStart && targetStart < end) {
          // descending copy from end
          for (var i = len - 1; i >= 0; --i) {
            target[i + targetStart] = this[i + start];
          }
        } else {
          Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
        }

        return len;
      }; // Usage:
      //    buffer.fill(number[, offset[, end]])
      //    buffer.fill(buffer[, offset[, end]])
      //    buffer.fill(string[, offset[, end]][, encoding])


      Buffer.prototype.fill = function fill(val, start, end, encoding) {
        // Handle string cases:
        if (typeof val === 'string') {
          if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
          }

          if (encoding !== undefined && typeof encoding !== 'string') {
            throw new TypeError('encoding must be a string');
          }

          if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
            throw new TypeError('Unknown encoding: ' + encoding);
          }

          if (val.length === 1) {
            var code = val.charCodeAt(0);

            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
              // Fast path: If `val` fits into a single byte, use that numeric value.
              val = code;
            }
          }
        } else if (typeof val === 'number') {
          val = val & 255;
        } // Invalid ranges are not set to a default, so can range check early.


        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError('Out of range index');
        }

        if (end <= start) {
          return this;
        }

        start = start >>> 0;
        end = end === undefined ? this.length : end >>> 0;
        if (!val) val = 0;
        var i;

        if (typeof val === 'number') {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
          var len = bytes.length;

          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }

          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }

        return this;
      }; // HELPER FUNCTIONS
      // ================


      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

      function base64clean(str) {
        // Node takes equal signs as end of the Base64 encoding
        str = str.split('=')[0]; // Node strips out invalid characters like \n and \t from the string, base64-js does not

        str = str.trim().replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

        if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

        while (str.length % 4 !== 0) {
          str = str + '=';
        }

        return str;
      }

      function toHex(n) {
        if (n < 16) return '0' + n.toString(16);
        return n.toString(16);
      }

      function utf8ToBytes(string, units) {
        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];

        for (var i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i); // is surrogate component

          if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
              // no lead yet
              if (codePoint > 0xDBFF) {
                // unexpected trail
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } else if (i + 1 === length) {
                // unpaired lead
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } // valid lead


              leadSurrogate = codePoint;
              continue;
            } // 2 leads in a row


            if (codePoint < 0xDC00) {
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              leadSurrogate = codePoint;
              continue;
            } // valid surrogate pair


            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
          } else if (leadSurrogate) {
            // valid bmp char, but last char was a lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          }

          leadSurrogate = null; // encode utf8

          if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else {
            throw new Error('Invalid code point');
          }
        }

        return bytes;
      }

      function asciiToBytes(str) {
        var byteArray = [];

        for (var i = 0; i < str.length; ++i) {
          // Node's code seems to be doing this and not & 0x7F..
          byteArray.push(str.charCodeAt(i) & 0xFF);
        }

        return byteArray;
      }

      function utf16leToBytes(str, units) {
        var c, hi, lo;
        var byteArray = [];

        for (var i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }

        return byteArray;
      }

      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }

      function blitBuffer(src, dst, offset, length) {
        for (var i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }

        return i;
      } // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
      // the `instanceof` check but they should be treated as of that type.
      // See: https://github.com/feross/buffer/issues/166


      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }

      function numberIsNaN(obj) {
        // For IE11 support
        return obj !== obj; // eslint-disable-line no-self-compare
      }
      /***/

    },

    /***/
    "uXXV":
    /*!****************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/lib/bom-handling.js ***!
      \****************************************************************************************/

    /*! no static exports found */

    /***/
    function uXXV(module, exports, __webpack_require__) {
      "use strict";

      var BOMChar = "\uFEFF";
      exports.PrependBOM = PrependBOMWrapper;

      function PrependBOMWrapper(encoder, options) {
        this.encoder = encoder;
        this.addBOM = true;
      }

      PrependBOMWrapper.prototype.write = function (str) {
        if (this.addBOM) {
          str = BOMChar + str;
          this.addBOM = false;
        }

        return this.encoder.write(str);
      };

      PrependBOMWrapper.prototype.end = function () {
        return this.encoder.end();
      }; //------------------------------------------------------------------------------


      exports.StripBOM = StripBOMWrapper;

      function StripBOMWrapper(decoder, options) {
        this.decoder = decoder;
        this.pass = false;
        this.options = options || {};
      }

      StripBOMWrapper.prototype.write = function (buf) {
        var res = this.decoder.write(buf);
        if (this.pass || !res) return res;

        if (res[0] === BOMChar) {
          res = res.slice(1);
          if (typeof this.options.stripBOM === 'function') this.options.stripBOM();
        }

        this.pass = true;
        return res;
      };

      StripBOMWrapper.prototype.end = function () {
        return this.decoder.end();
      };
      /***/

    },

    /***/
    "xUBR":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/dbcs-data.js ***!
      \*******************************************************************************************/

    /*! no static exports found */

    /***/
    function xUBR(module, exports, __webpack_require__) {
      "use strict"; // Description of supported double byte encodings and aliases.
      // Tables are not require()-d until they are needed to speed up library load.
      // require()-s are direct to support Browserify.

      module.exports = {
        // == Japanese/ShiftJIS ====================================================
        // All japanese encodings are based on JIS X set of standards:
        // JIS X 0201 - Single-byte encoding of ASCII + ¥ + Kana chars at 0xA1-0xDF.
        // JIS X 0208 - Main set of 6879 characters, placed in 94x94 plane, to be encoded by 2 bytes. 
        //              Has several variations in 1978, 1983, 1990 and 1997.
        // JIS X 0212 - Supplementary plane of 6067 chars in 94x94 plane. 1990. Effectively dead.
        // JIS X 0213 - Extension and modern replacement of 0208 and 0212. Total chars: 11233.
        //              2 planes, first is superset of 0208, second - revised 0212.
        //              Introduced in 2000, revised 2004. Some characters are in Unicode Plane 2 (0x2xxxx)
        // Byte encodings are:
        //  * Shift_JIS: Compatible with 0201, uses not defined chars in top half as lead bytes for double-byte
        //               encoding of 0208. Lead byte ranges: 0x81-0x9F, 0xE0-0xEF; Trail byte ranges: 0x40-0x7E, 0x80-0x9E, 0x9F-0xFC.
        //               Windows CP932 is a superset of Shift_JIS. Some companies added more chars, notably KDDI.
        //  * EUC-JP:    Up to 3 bytes per character. Used mostly on *nixes.
        //               0x00-0x7F       - lower part of 0201
        //               0x8E, 0xA1-0xDF - upper part of 0201
        //               (0xA1-0xFE)x2   - 0208 plane (94x94).
        //               0x8F, (0xA1-0xFE)x2 - 0212 plane (94x94).
        //  * JIS X 208: 7-bit, direct encoding of 0208. Byte ranges: 0x21-0x7E (94 values). Uncommon.
        //               Used as-is in ISO2022 family.
        //  * ISO2022-JP: Stateful encoding, with escape sequences to switch between ASCII, 
        //                0201-1976 Roman, 0208-1978, 0208-1983.
        //  * ISO2022-JP-1: Adds esc seq for 0212-1990.
        //  * ISO2022-JP-2: Adds esc seq for GB2313-1980, KSX1001-1992, ISO8859-1, ISO8859-7.
        //  * ISO2022-JP-3: Adds esc seq for 0201-1976 Kana set, 0213-2000 Planes 1, 2.
        //  * ISO2022-JP-2004: Adds 0213-2004 Plane 1.
        //
        // After JIS X 0213 appeared, Shift_JIS-2004, EUC-JISX0213 and ISO2022-JP-2004 followed, with just changing the planes.
        //
        // Overall, it seems that it's a mess :( http://www8.plala.or.jp/tkubota1/unicode-symbols-map2.html
        'shiftjis': {
          type: '_dbcs',
          table: function table() {
            return __webpack_require__(
            /*! ./tables/shiftjis.json */
            "9/IE");
          },
          encodeAdd: {
            "\xA5": 0x5C,
            "\u203E": 0x7E
          },
          encodeSkipVals: [{
            from: 0xED40,
            to: 0xF940
          }]
        },
        'csshiftjis': 'shiftjis',
        'mskanji': 'shiftjis',
        'sjis': 'shiftjis',
        'windows31j': 'shiftjis',
        'ms31j': 'shiftjis',
        'xsjis': 'shiftjis',
        'windows932': 'shiftjis',
        'ms932': 'shiftjis',
        '932': 'shiftjis',
        'cp932': 'shiftjis',
        'eucjp': {
          type: '_dbcs',
          table: function table() {
            return __webpack_require__(
            /*! ./tables/eucjp.json */
            "laj0");
          },
          encodeAdd: {
            "\xA5": 0x5C,
            "\u203E": 0x7E
          }
        },
        // TODO: KDDI extension to Shift_JIS
        // TODO: IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
        // TODO: IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.
        // == Chinese/GBK ==========================================================
        // http://en.wikipedia.org/wiki/GBK
        // We mostly implement W3C recommendation: https://www.w3.org/TR/encoding/#gbk-encoder
        // Oldest GB2312 (1981, ~7600 chars) is a subset of CP936
        'gb2312': 'cp936',
        'gb231280': 'cp936',
        'gb23121980': 'cp936',
        'csgb2312': 'cp936',
        'csiso58gb231280': 'cp936',
        'euccn': 'cp936',
        // Microsoft's CP936 is a subset and approximation of GBK.
        'windows936': 'cp936',
        'ms936': 'cp936',
        '936': 'cp936',
        'cp936': {
          type: '_dbcs',
          table: function table() {
            return __webpack_require__(
            /*! ./tables/cp936.json */
            "75lf");
          }
        },
        // GBK (~22000 chars) is an extension of CP936 that added user-mapped chars and some other.
        'gbk': {
          type: '_dbcs',
          table: function table() {
            return __webpack_require__(
            /*! ./tables/cp936.json */
            "75lf").concat(__webpack_require__(
            /*! ./tables/gbk-added.json */
            "rsGr"));
          }
        },
        'xgbk': 'gbk',
        'isoir58': 'gbk',
        // GB18030 is an algorithmic extension of GBK.
        // Main source: https://www.w3.org/TR/encoding/#gbk-encoder
        // http://icu-project.org/docs/papers/gb18030.html
        // http://source.icu-project.org/repos/icu/data/trunk/charset/data/xml/gb-18030-2000.xml
        // http://www.khngai.com/chinese/charmap/tblgbk.php?page=0
        'gb18030': {
          type: '_dbcs',
          table: function table() {
            return __webpack_require__(
            /*! ./tables/cp936.json */
            "75lf").concat(__webpack_require__(
            /*! ./tables/gbk-added.json */
            "rsGr"));
          },
          gb18030: function gb18030() {
            return __webpack_require__(
            /*! ./tables/gb18030-ranges.json */
            "EmYl");
          },
          encodeSkipVals: [0x80],
          encodeAdd: {
            '€': 0xA2E3
          }
        },
        'chinese': 'gb18030',
        // == Korean ===============================================================
        // EUC-KR, KS_C_5601 and KS X 1001 are exactly the same.
        'windows949': 'cp949',
        'ms949': 'cp949',
        '949': 'cp949',
        'cp949': {
          type: '_dbcs',
          table: function table() {
            return __webpack_require__(
            /*! ./tables/cp949.json */
            "jChy");
          }
        },
        'cseuckr': 'cp949',
        'csksc56011987': 'cp949',
        'euckr': 'cp949',
        'isoir149': 'cp949',
        'korean': 'cp949',
        'ksc56011987': 'cp949',
        'ksc56011989': 'cp949',
        'ksc5601': 'cp949',
        // == Big5/Taiwan/Hong Kong ================================================
        // There are lots of tables for Big5 and cp950. Please see the following links for history:
        // http://moztw.org/docs/big5/  http://www.haible.de/bruno/charsets/conversion-tables/Big5.html
        // Variations, in roughly number of defined chars:
        //  * Windows CP 950: Microsoft variant of Big5. Canonical: http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT
        //  * Windows CP 951: Microsoft variant of Big5-HKSCS-2001. Seems to be never public. http://me.abelcheung.org/articles/research/what-is-cp951/
        //  * Big5-2003 (Taiwan standard) almost superset of cp950.
        //  * Unicode-at-on (UAO) / Mozilla 1.8. Falling out of use on the Web. Not supported by other browsers.
        //  * Big5-HKSCS (-2001, -2004, -2008). Hong Kong standard. 
        //    many unicode code points moved from PUA to Supplementary plane (U+2XXXX) over the years.
        //    Plus, it has 4 combining sequences.
        //    Seems that Mozilla refused to support it for 10 yrs. https://bugzilla.mozilla.org/show_bug.cgi?id=162431 https://bugzilla.mozilla.org/show_bug.cgi?id=310299
        //    because big5-hkscs is the only encoding to include astral characters in non-algorithmic way.
        //    Implementations are not consistent within browsers; sometimes labeled as just big5.
        //    MS Internet Explorer switches from big5 to big5-hkscs when a patch applied.
        //    Great discussion & recap of what's going on https://bugzilla.mozilla.org/show_bug.cgi?id=912470#c31
        //    In the encoder, it might make sense to support encoding old PUA mappings to Big5 bytes seq-s.
        //    Official spec: http://www.ogcio.gov.hk/en/business/tech_promotion/ccli/terms/doc/2003cmp_2008.txt
        //                   http://www.ogcio.gov.hk/tc/business/tech_promotion/ccli/terms/doc/hkscs-2008-big5-iso.txt
        // 
        // Current understanding of how to deal with Big5(-HKSCS) is in the Encoding Standard, http://encoding.spec.whatwg.org/#big5-encoder
        // Unicode mapping (http://www.unicode.org/Public/MAPPINGS/OBSOLETE/EASTASIA/OTHER/BIG5.TXT) is said to be wrong.
        'windows950': 'cp950',
        'ms950': 'cp950',
        '950': 'cp950',
        'cp950': {
          type: '_dbcs',
          table: function table() {
            return __webpack_require__(
            /*! ./tables/cp950.json */
            "UA3E");
          }
        },
        // Big5 has many variations and is an extension of cp950. We use Encoding Standard's as a consensus.
        'big5': 'big5hkscs',
        'big5hkscs': {
          type: '_dbcs',
          table: function table() {
            return __webpack_require__(
            /*! ./tables/cp950.json */
            "UA3E").concat(__webpack_require__(
            /*! ./tables/big5-added.json */
            "yi52"));
          },
          encodeSkipVals: [0xa2cc]
        },
        'cnbig5': 'big5hkscs',
        'csbig5': 'big5hkscs',
        'xxbig5': 'big5hkscs'
      };
      /***/
    },

    /***/
    "xZGU":
    /*!********************************************!*\
      !*** ./node_modules/safer-buffer/safer.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function xZGU(module, exports, __webpack_require__) {
      "use strict";
      /* eslint-disable node/no-deprecated-api */

      var buffer = __webpack_require__(
      /*! buffer */
      "tjlA");

      var Buffer = buffer.Buffer;
      var safer = {};
      var key;

      for (key in buffer) {
        if (!buffer.hasOwnProperty(key)) continue;
        if (key === 'SlowBuffer' || key === 'Buffer') continue;
        safer[key] = buffer[key];
      }

      var Safer = safer.Buffer = {};

      for (key in Buffer) {
        if (!Buffer.hasOwnProperty(key)) continue;
        if (key === 'allocUnsafe' || key === 'allocUnsafeSlow') continue;
        Safer[key] = Buffer[key];
      }

      safer.Buffer.prototype = Buffer.prototype;

      if (!Safer.from || Safer.from === Uint8Array.from) {
        Safer.from = function (value, encodingOrOffset, length) {
          if (typeof value === 'number') {
            throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof value);
          }

          if (value && typeof value.length === 'undefined') {
            throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof value);
          }

          return Buffer(value, encodingOrOffset, length);
        };
      }

      if (!Safer.alloc) {
        Safer.alloc = function (size, fill, encoding) {
          if (typeof size !== 'number') {
            throw new TypeError('The "size" argument must be of type number. Received type ' + typeof size);
          }

          if (size < 0 || size >= 2 * (1 << 30)) {
            throw new RangeError('The value "' + size + '" is invalid for option "size"');
          }

          var buf = Buffer(size);

          if (!fill || fill.length === 0) {
            buf.fill(0);
          } else if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }

          return buf;
        };
      }

      if (!safer.kStringMaxLength) {
        try {
          safer.kStringMaxLength = process.binding('buffer').kStringMaxLength;
        } catch (e) {// we can't determine kStringMaxLength in environments where process.binding
          // is unsupported, so let's not set it
        }
      }

      if (!safer.constants) {
        safer.constants = {
          MAX_LENGTH: safer.kMaxLength
        };

        if (safer.kStringMaxLength) {
          safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength;
        }
      }

      module.exports = safer;
      /***/
    },

    /***/
    "yi52":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/esc-pos-encoder-ionic/node_modules/iconv-lite/encodings/tables/big5-added.json ***!
      \*****************************************************************************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, default */

    /***/
    function yi52(module) {
      module.exports = JSON.parse("[[\"8740\",\"䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻\"],[\"8767\",\"綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬\"],[\"87a1\",\"𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋\"],[\"8840\",\"㇀\",4,\"𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ\"],[\"88a1\",\"ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛\"],[\"8940\",\"𪎩𡅅\"],[\"8943\",\"攊\"],[\"8946\",\"丽滝鵎釟\"],[\"894c\",\"𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮\"],[\"89a1\",\"琑糼緍楆竉刧\"],[\"89ab\",\"醌碸酞肼\"],[\"89b0\",\"贋胶𠧧\"],[\"89b5\",\"肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁\"],[\"89c1\",\"溚舾甙\"],[\"89c5\",\"䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅\"],[\"8a40\",\"𧶄唥\"],[\"8a43\",\"𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓\"],[\"8a64\",\"𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕\"],[\"8a76\",\"䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯\"],[\"8aa1\",\"𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱\"],[\"8aac\",\"䠋𠆩㿺塳𢶍\"],[\"8ab2\",\"𤗈𠓼𦂗𠽌𠶖啹䂻䎺\"],[\"8abb\",\"䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃\"],[\"8ac9\",\"𪘁𠸉𢫏𢳉\"],[\"8ace\",\"𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻\"],[\"8adf\",\"𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌\"],[\"8af6\",\"𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭\"],[\"8b40\",\"𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹\"],[\"8b55\",\"𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑\"],[\"8ba1\",\"𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁\"],[\"8bde\",\"𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢\"],[\"8c40\",\"倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋\"],[\"8ca1\",\"𣏹椙橃𣱣泿\"],[\"8ca7\",\"爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚\"],[\"8cc9\",\"顨杫䉶圽\"],[\"8cce\",\"藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶\"],[\"8ce6\",\"峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻\"],[\"8d40\",\"𠮟\"],[\"8d42\",\"𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱\"],[\"8da1\",\"㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘\"],[\"8e40\",\"𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎\"],[\"8ea1\",\"繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛\"],[\"8f40\",\"蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖\"],[\"8fa1\",\"𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起\"],[\"9040\",\"趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛\"],[\"90a1\",\"𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜\"],[\"9140\",\"𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈\"],[\"91a1\",\"鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨\"],[\"9240\",\"𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘\"],[\"92a1\",\"働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃\"],[\"9340\",\"媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍\"],[\"93a1\",\"摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋\"],[\"9440\",\"銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻\"],[\"94a1\",\"㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡\"],[\"9540\",\"𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂\"],[\"95a1\",\"衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰\"],[\"9640\",\"桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸\"],[\"96a1\",\"𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉\"],[\"9740\",\"愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫\"],[\"97a1\",\"𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎\"],[\"9840\",\"𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦\"],[\"98a1\",\"咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃\"],[\"9940\",\"䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚\"],[\"99a1\",\"䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿\"],[\"9a40\",\"鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺\"],[\"9aa1\",\"黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪\"],[\"9b40\",\"𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌\"],[\"9b62\",\"𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎\"],[\"9ba1\",\"椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊\"],[\"9c40\",\"嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶\"],[\"9ca1\",\"㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏\"],[\"9d40\",\"𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁\"],[\"9da1\",\"辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢\"],[\"9e40\",\"𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺\"],[\"9ea1\",\"鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭\"],[\"9ead\",\"𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹\"],[\"9ec5\",\"㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲\"],[\"9ef5\",\"噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼\"],[\"9f40\",\"籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱\"],[\"9f4f\",\"凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰\"],[\"9fa1\",\"椬叚鰊鴂䰻陁榀傦畆𡝭駚剳\"],[\"9fae\",\"酙隁酜\"],[\"9fb2\",\"酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽\"],[\"9fc1\",\"𤤙盖鮝个𠳔莾衂\"],[\"9fc9\",\"届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳\"],[\"9fdb\",\"歒酼龥鮗頮颴骺麨麄煺笔\"],[\"9fe7\",\"毺蠘罸\"],[\"9feb\",\"嘠𪙊蹷齓\"],[\"9ff0\",\"跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇\"],[\"a040\",\"𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷\"],[\"a055\",\"𡠻𦸅\"],[\"a058\",\"詾𢔛\"],[\"a05b\",\"惽癧髗鵄鍮鮏蟵\"],[\"a063\",\"蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽\"],[\"a073\",\"坟慯抦戹拎㩜懢厪𣏵捤栂㗒\"],[\"a0a1\",\"嵗𨯂迚𨸹\"],[\"a0a6\",\"僙𡵆礆匲阸𠼻䁥\"],[\"a0ae\",\"矾\"],[\"a0b0\",\"糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦\"],[\"a0d4\",\"覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷\"],[\"a0e2\",\"罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫\"],[\"a3c0\",\"␀\",31,\"␡\"],[\"c6a1\",\"①\",9,\"⑴\",9,\"ⅰ\",9,\"丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ\",23],[\"c740\",\"す\",58,\"ァアィイ\"],[\"c7a1\",\"ゥ\",81,\"А\",5,\"ЁЖ\",4],[\"c840\",\"Л\",26,\"ёж\",25,\"⇧↸↹㇏𠃌乚𠂊刂䒑\"],[\"c8a1\",\"龰冈龱𧘇\"],[\"c8cd\",\"￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣\"],[\"c8f5\",\"ʃɐɛɔɵœøŋʊɪ\"],[\"f9fe\",\"￭\"],[\"fa40\",\"𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸\"],[\"faa1\",\"鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍\"],[\"fb40\",\"𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙\"],[\"fba1\",\"𡘾娤啓𡚒蔅姉𠵎𦲁𦴪𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂\"],[\"fc40\",\"廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷\"],[\"fca1\",\"𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝\"],[\"fd40\",\"𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀\"],[\"fda1\",\"𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎\"],[\"fe40\",\"鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌\"],[\"fea1\",\"𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔\"]]");
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~orders-detail-orders-detail-module~orders-edit-orders-edit-module~orders-payment-qris-orders~8c9f9247-es5.js.map