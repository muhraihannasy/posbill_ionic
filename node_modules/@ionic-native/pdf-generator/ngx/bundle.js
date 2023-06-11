'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var PDFGenerator = /** @class */ (function (_super) {
    tslib.__extends(PDFGenerator, _super);
    function PDFGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFGenerator.prototype.fromURL = function (url, options) { return core.cordova(this, "fromURL", { "otherPromise": true }, arguments); };
    PDFGenerator.prototype.fromData = function (data, options) { return core.cordova(this, "fromData", { "otherPromise": true }, arguments); };
    PDFGenerator.pluginName = "PDFGenerator";
    PDFGenerator.plugin = "cordova-pdf-generator";
    PDFGenerator.pluginRef = "cordova.plugins.pdf";
    PDFGenerator.repo = "https://github.com/cesarvr/pdf-generator";
    PDFGenerator.platforms = ["Android", "iOS"];
    PDFGenerator.decorators = [
        { type: core$1.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    return PDFGenerator;
}(core.IonicNativePlugin));

exports.PDFGenerator = PDFGenerator;
