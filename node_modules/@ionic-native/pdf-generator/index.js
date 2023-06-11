var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var PDFGeneratorOriginal = /** @class */ (function (_super) {
    __extends(PDFGeneratorOriginal, _super);
    function PDFGeneratorOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFGeneratorOriginal.prototype.fromURL = function (url, options) { return cordova(this, "fromURL", { "otherPromise": true }, arguments); };
    PDFGeneratorOriginal.prototype.fromData = function (data, options) { return cordova(this, "fromData", { "otherPromise": true }, arguments); };
    PDFGeneratorOriginal.pluginName = "PDFGenerator";
    PDFGeneratorOriginal.plugin = "cordova-pdf-generator";
    PDFGeneratorOriginal.pluginRef = "cordova.plugins.pdf";
    PDFGeneratorOriginal.repo = "https://github.com/cesarvr/pdf-generator";
    PDFGeneratorOriginal.platforms = ["Android", "iOS"];
    return PDFGeneratorOriginal;
}(IonicNativePlugin));
var PDFGenerator = new PDFGeneratorOriginal();
export { PDFGenerator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3BkZi1nZW5lcmF0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBK0R0QyxnQ0FBaUI7Ozs7SUFRakQsOEJBQU8sYUFBQyxHQUFXLEVBQUUsT0FBNkI7SUFXbEQsK0JBQVEsYUFBQyxJQUFZLEVBQUUsT0FBNkI7Ozs7Ozt1QkFuRnREO0VBZ0VrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBERkdlbmVyYXRvck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGRvY3VtZW50IHNpemUsIGUuZy4sIEEyLCBBMywgb3IgQTQuXG4gICAqIE9ubHkgc3VwcG9ydGVkIG9uIGlPUy5cbiAgICogVGhlIGRlZmF1bHQgaXMgJ0E0Jy5cbiAgICovXG4gIGRvY3VtZW50U2l6ZT86IHN0cmluZztcblxuICAvKipcbiAgICogT3B0aW9uIHRvIGNoYW5nZSB0byBsYW5kc2NhcGUgb3JpZW50YXRpb24uXG4gICAqIERlZmF1bHQgaXMgJ3BvcnRyYWl0Jy5cbiAgICovXG4gIGxhbmRzY2FwZT86ICdsYW5kc2NhcGUnIHwgJ3BvcnRyYWl0JztcblxuICAvKipcbiAgICogVGhlIHR5cGUgdG8gYmUgcmV0dXJuZWQsIGVpdGhlciAnc2hhcmUnIG9yICdiYXNlNjQnLlxuICAgKiBJZiAnc2hhcmUgaXMgY2hvc2VuLCB0aGUgUERGIGlzIHNoYXJlZCB3aXRoIHRoZSBzeXN0ZW0gY2FwYWJpbGl0aWVzLlxuICAgKiBEZWZhdWx0IGlzICdiYXNlNjQnXG4gICAqL1xuICB0eXBlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGVzaXJlZCBmaWxlbmFtZSB0aGUgcmVzdWx0aW5nIFBERiBzaG91bGQgaGF2ZS5cbiAgICogRGVmYXVsdCBpcyAnZGVmYXVsdC5wZGYnXG4gICAqL1xuICBmaWxlTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogT3B0aW9uIHRvIHNldCB0aGUgYmFzZSBVUkwgZm9yIHBhdGhpbmcuXG4gICAqIERlZmF1bHQgaXMgJ251bGwnLlxuICAgKi9cbiAgYmFzZVVybD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBQREZHZW5lcmF0b3JcbiAqIEBkZXNjcmlwdGlvblxuICogU2ltcGxlIHBsdWdpbiB0byBnZW5lcmF0ZSAob2ZmbGluZSkgcGRmLiBUaGUgcGx1Z2luIHRyYW5zZm9ybXMgSFRNTCB0byBQREYgYW5kIGFsc28gcHJvdmlkZSB0aGUgbWVjaGFuaXNtIHRvIHNoYXJlIHRoZSBwZGYgdG8gb3RoZXIgYXBwcyBsaWtlIE1haWwsIGV0Yy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFBERkdlbmVyYXRvciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcGRmLWdlbmVyYXRvcic7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwZGZHZW5lcmF0b3I6IFBERkdlbmVyYXRvcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5wZGZHZW5lcmF0b3IuZnJvbVVSTCh1cmwsIG9wdGlvbnMpLnRoZW4oYmFzZTY0U3RyaW5nID0+IGNvbnNvbGUubG9nKGJhc2U2NFN0cmluZykpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1BERkdlbmVyYXRvcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGRmLWdlbmVyYXRvcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5wZGYnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Nlc2FydnIvcGRmLWdlbmVyYXRvcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQREZHZW5lcmF0b3IgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgUERGIHVzaW5nIGEgVVJMLCBpdCBkb3dubG9hZCB0aGUgZG9jdW1lbnQgaW50byBhbiBpbiBtZW1vcnkgV2Via2l0IG9iamVjdCwgYW5kIHJlbmRlcnMgaXQgaW50byBhIFBERi5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBVUkwgdG8gY3JlYXRlIGEgUERGIGZyb21cbiAgICogQHBhcmFtIG9wdGlvbnMge1BERkdlbmVyYXRvck9wdGlvbnN9IG9wdGlvbnMgZm9yIFBERiBnZW5lcmF0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBmcm9tVVJMKHVybDogc3RyaW5nLCBvcHRpb25zPzogUERGR2VuZXJhdG9yT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBQREYgdXNpbmcgc3RyaW5nIHdpdGggdGhlIEhUTUwgcmVwcmVzZW50YXRpb24sIGl0IGRvd25sb2FkIHRoZSBkb2N1bWVudCBpbnRvIGFuIGluIG1lbW9yeSBXZWJraXQgb2JqZWN0LCBhbmQgcmVuZGVycyBpdCBpbnRvIGEgUERGLlxuICAgKiBAcGFyYW0gZGF0YSB7c3RyaW5nfSBIVE1MIHN0cmluZyByZXByZXNlbnRhdGlvbiB0byBjcmVhdGUgYSBQREYgZnJvbVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7UERGR2VuZXJhdG9yT3B0aW9uc30gb3B0aW9ucyBmb3IgUERGIGdlbmVyYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGZyb21EYXRhKGRhdGE6IHN0cmluZywgb3B0aW9ucz86IFBERkdlbmVyYXRvck9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19