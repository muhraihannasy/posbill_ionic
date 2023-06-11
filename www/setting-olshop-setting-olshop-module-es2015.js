(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-olshop-setting-olshop-module"],{

/***/ "DudT":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-olshop/setting-olshop.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/tabs/tab-setting']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Pengaturan Toko Online</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\">\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>Aktifkan Toko Online</ion-label>\r\n      <ion-toggle [(ngModel)]=\"setting.site_enabled\"></ion-toggle>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Situs URL</ion-label>\r\n      <ion-input [(ngModel)]=\"setting.site_name\"></ion-input>\r\n\r\n    </ion-item>\r\n    <p style=\"text-align:center;\"><small>toko.posbill.id/<strong>{{setting.site_name}}</strong></small></p>\r\n    <br/>\r\n    <p style=\"text-align:center;\">Logo situs (300px x 300px)</p>\r\n    <div (click)=\"takePictureLogo()\" style=\"width:200px;height:200px;margin-left:auto;margin-right:auto;margin-bottom:20px;border-radius:5px;overflow:hidden;border:1px #ccc dashed;\">\r\n      <img src=\"{{setting.site_logo}}\" />\r\n    </div>\r\n    <br/>\r\n    <p style=\"text-align:center;\">Banner (1024px x 500px)</p>\r\n    <div (click)=\"takePictureBanner()\" style=\"text-align:center;width:90%;height:200px;margin-left:auto;margin-right:auto;margin-bottom:20px;border-radius:5px;overflow:hidden;border:1px #ccc dashed;\">\r\n      <img src=\"{{setting.site_banner}}\" />\r\n    </div>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\">\r\n    <ion-button expand=\"block\" (click)=\"process()\">Simpan</ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "Se0V":
/*!*******************************************************!*\
  !*** ./src/app/setting-olshop/setting-olshop.page.ts ***!
  \*******************************************************/
/*! exports provided: SettingOlshopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingOlshopPage", function() { return SettingOlshopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_setting_olshop_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./setting-olshop.page.html */ "DudT");
/* harmony import */ var _setting_olshop_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting-olshop.page.scss */ "Xzhe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");












const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"];


let SettingOlshopPage = class SettingOlshopPage {
    constructor(storage, http, global, router, loadingController, platform, nativePageTransitions, route, transfer, file) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.nativePageTransitions = nativePageTransitions;
        this.route = route;
        this.transfer = transfer;
        this.file = file;
        this.setting = {
            site_enabled: false,
            site_name: '',
            site_logo: 'assets/no-logo.png',
            site_banner: 'assets/no-banner.png'
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storage.getObject('auth').then((auth) => {
            this.auth = auth;
            this.getData();
        });
    }
    getData() {
        this.global.loadingPresent('mengambil data...');
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        this.http.post(this.global.base_url + 'auth/setting/data', null, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.setting = data.company;
                console.log(data);
            }
            else {
                console.log(data);
            }
            this.global.loadingDismiss();
        }, error => {
            console.log(error);
        });
    }
    takePictureLogo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["CameraResultType"].Uri
            });
            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            let imageUrl = image.webPath;
            // Can be set to the src of an image now
            //this.setting.site_logo = imageUrl;
            const fileTransfer = this.transfer.create();
            let options = {
                fileKey: 'image',
                chunkedMode: false,
                headers: { Connection: 'close' }
            };
            this.global.loadingPresent('Mengupload file...');
            fileTransfer.upload(image.path, this.global.base_url + 'auth/upload', options)
                .then((data) => {
                // success
                this.global.loadingDismiss();
                this.setting.site_logo = data.response;
                console.log(data);
            }, (err) => {
                // error
                console.log(err);
            });
        });
    }
    takePictureBanner() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["CameraResultType"].Uri
            });
            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            let imageUrl = image.webPath;
            // Can be set to the src of an image now
            this.setting.site_banner = imageUrl;
            const fileTransfer = this.transfer.create();
            let options = {
                fileKey: 'image',
                chunkedMode: false,
                headers: { Connection: 'close' }
            };
            console.log(image);
            this.global.loadingPresent('Mengupload file...');
            fileTransfer.upload(image.path, this.global.base_url + 'auth/upload', options)
                .then((data) => {
                // success
                this.global.loadingDismiss();
                this.setting.site_banner = data.response;
                console.log(data);
            }, (err) => {
                // error
                console.log(err);
            });
        });
    }
    process() {
        if (this.setting.format_receipt1 == '') {
            this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
            return false;
        }
        this.global.loadingPresent('menyimpan perubahan... ');
        this.storage.getObject('auth').then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                site_enabled: this.setting.site_enabled,
                site_name: this.setting.site_name,
                site_logo: this.setting.site_logo,
                site_banner: this.setting.site_banner
            };
            this.http.post(this.global.base_url + 'auth/setting/online_shop', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.global.toastPresent(data.message);
                    this.router.navigate(['/tabs/tab-catalog']);
                }
                else {
                    this.global.toastPresent(data.message);
                    console.log(data);
                }
                this.global.loadingDismiss();
            }, error => {
                console.log(error);
            });
        });
    }
};
SettingOlshopPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"] }
];
SettingOlshopPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-setting-olshop',
        template: _raw_loader_setting_olshop_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_setting_olshop_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingOlshopPage);



/***/ }),

/***/ "Xzhe":
/*!*********************************************************!*\
  !*** ./src/app/setting-olshop/setting-olshop.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5nLW9sc2hvcC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "bC36":
/*!*****************************************************************!*\
  !*** ./src/app/setting-olshop/setting-olshop-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SettingOlshopPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingOlshopPageRoutingModule", function() { return SettingOlshopPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _setting_olshop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting-olshop.page */ "Se0V");




const routes = [
    {
        path: '',
        component: _setting_olshop_page__WEBPACK_IMPORTED_MODULE_3__["SettingOlshopPage"]
    }
];
let SettingOlshopPageRoutingModule = class SettingOlshopPageRoutingModule {
};
SettingOlshopPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingOlshopPageRoutingModule);



/***/ }),

/***/ "uv2r":
/*!*********************************************************!*\
  !*** ./src/app/setting-olshop/setting-olshop.module.ts ***!
  \*********************************************************/
/*! exports provided: SettingOlshopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingOlshopPageModule", function() { return SettingOlshopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _setting_olshop_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting-olshop-routing.module */ "bC36");
/* harmony import */ var _setting_olshop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting-olshop.page */ "Se0V");







let SettingOlshopPageModule = class SettingOlshopPageModule {
};
SettingOlshopPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _setting_olshop_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingOlshopPageRoutingModule"]
        ],
        declarations: [_setting_olshop_page__WEBPACK_IMPORTED_MODULE_6__["SettingOlshopPage"]]
    })
], SettingOlshopPageModule);



/***/ })

}]);
//# sourceMappingURL=setting-olshop-setting-olshop-module-es2015.js.map