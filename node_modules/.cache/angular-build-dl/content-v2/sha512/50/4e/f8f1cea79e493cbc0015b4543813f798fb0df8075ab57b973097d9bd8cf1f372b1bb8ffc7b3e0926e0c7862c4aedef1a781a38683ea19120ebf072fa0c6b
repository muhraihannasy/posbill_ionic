(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discount-edit-discount-edit-module"],{

/***/ "7B1n":
/*!*******************************************************!*\
  !*** ./src/app/discount-edit/discount-edit.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjb3VudC1lZGl0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "AYFH":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discount-edit/discount-edit.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/setting-discount']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Ubah diskon</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"link\" color=\"danger\" (click)=\"deleteConfirm()\" ><ion-icon name=\"trash-outline\" color=\"danger\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Nama</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"discount.name\" autocapitalize=\"on\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"inset\">\r\n      <ion-label><small>Jenis nilai diskon</small></ion-label>\r\n      <ion-select interface=\"action-sheet\" [(ngModel)]=\"discount.type\">\r\n        <ion-select-option value=\"Percentage\">Persentase (%)</ion-select-option>\r\n        <ion-select-option value=\"Fixed\">Fixed </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Nilai diskon</ion-label>\r\n      <ion-input type=\"number\" [(ngModel)]=\"discount.amount\"></ion-input>\r\n    </ion-item>\r\n\r\n  </ion-content>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\">\r\n    <ion-button expand=\"block\" (click)=\"process()\">Simpan</ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "LDfY":
/*!*****************************************************!*\
  !*** ./src/app/discount-edit/discount-edit.page.ts ***!
  \*****************************************************/
/*! exports provided: DiscountEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountEditPage", function() { return DiscountEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_discount_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./discount-edit.page.html */ "AYFH");
/* harmony import */ var _discount_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discount-edit.page.scss */ "7B1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");











let DiscountEditPage = class DiscountEditPage {
    constructor(storage, http, global, router, loadingController, platform, nativePageTransitions, route, alertController) {
        // this.platform.backButton.subscribeWithPriority(10, () => {
        //   this.router.navigate(['/tabs/tab4']);
        // });
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.nativePageTransitions = nativePageTransitions;
        this.route = route;
        this.alertController = alertController;
        this.discount = { name: '', type: 'Percentage', amount: '' };
        this.route.params.subscribe((params) => {
            if (params['id']) {
                this.id = params['id'];
            }
        });
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
        let postData = { id: this.id };
        this.http.post(this.global.base_url + 'auth/discount/detail', postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.discount = data.discount;
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
    process() {
        if ((this.discount.name == '') || (this.discount.type == '') || (this.discount.amount < 0)) {
            this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
            return false;
        }
        this.global.loadingPresent('menambah diskon...');
        this.storage.getObject('auth').then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                id: this.id,
                name: this.discount.name,
                type: this.discount.type,
                amount: this.discount.amount
            };
            this.http.post(this.global.base_url + 'auth/discount/edit', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.global.toastPresent(data.message);
                    this.router.navigate(['/setting-discount']);
                }
                else {
                    console.log(data);
                }
                this.global.loadingDismiss();
            }, error => {
                console.log(error);
            });
        });
    }
    deleteConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Konfirmasi hapus!',
                message: 'Anda yakin menghapus data ini?',
                buttons: [
                    {
                        text: 'Batal',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Hapus',
                        handler: () => {
                            this.delete();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    delete() {
        this.global.loadingPresent('menghapus diskon...');
        this.storage.getObject('auth').then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                id: this.id
            };
            this.http.post(this.global.base_url + 'auth/discount/delete', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.global.toastPresent(data.message);
                    this.router.navigate(['/setting-discount']);
                }
                else {
                    console.log(data);
                }
                this.global.loadingDismiss();
            }, error => {
                console.log(error);
            });
        });
    }
};
DiscountEditPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
DiscountEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-discount-edit',
        template: _raw_loader_discount_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_discount_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DiscountEditPage);



/***/ }),

/***/ "UuEG":
/*!*******************************************************!*\
  !*** ./src/app/discount-edit/discount-edit.module.ts ***!
  \*******************************************************/
/*! exports provided: DiscountEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountEditPageModule", function() { return DiscountEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _discount_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discount-edit-routing.module */ "wzyJ");
/* harmony import */ var _discount_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discount-edit.page */ "LDfY");







let DiscountEditPageModule = class DiscountEditPageModule {
};
DiscountEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _discount_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiscountEditPageRoutingModule"]
        ],
        declarations: [_discount_edit_page__WEBPACK_IMPORTED_MODULE_6__["DiscountEditPage"]]
    })
], DiscountEditPageModule);



/***/ }),

/***/ "wzyJ":
/*!***************************************************************!*\
  !*** ./src/app/discount-edit/discount-edit-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DiscountEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountEditPageRoutingModule", function() { return DiscountEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _discount_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discount-edit.page */ "LDfY");




const routes = [
    {
        path: '',
        component: _discount_edit_page__WEBPACK_IMPORTED_MODULE_3__["DiscountEditPage"]
    }
];
let DiscountEditPageRoutingModule = class DiscountEditPageRoutingModule {
};
DiscountEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DiscountEditPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=discount-edit-discount-edit-module-es2015.js.map