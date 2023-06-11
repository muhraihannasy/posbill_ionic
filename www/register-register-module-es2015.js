(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "2t07":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "b0Bx");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "UgDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content mode=\"ios\">\r\n\r\n<div class=\"ion-padding\" *ngIf=\"!showForm\">\r\n  <div style=\"height:50px;\"></div>\r\n  <div class=\"ion-padding\">\r\n    <div class=\"ion-padding\">\r\n    <div class=\"ion-text-center\"><img src=\"assets/logo-horizontal.png\" width=\"150px\" />  </div>\r\n    <div style=\"height:30px;\"></div>\r\n    <ion-item><ion-label color=\"primary\">Buat akun POSbill GRATIS</ion-label></ion-item>\r\n    <ion-item><ion-label class=\"ion-text-wrap\"><small>Saya setuju dengan syarat dan ketentuan penggunaan aplikasi POSbill. <a href=\"https://posbill.id/syarat-ketentuan\">Baca syarat ketentuan</a></small></ion-label><ion-checkbox slot=\"end\" [(ngModel)]=\"terms\"></ion-checkbox></ion-item>\r\n    <ion-item lines=\"none\"><ion-label class=\"ion-text-wrap\"><small>Saya telah membaca kebijakan privasi aplikasi POSbill.  <a href=\"https://posbill.id/kebijakan-privasi\">Baca kebijakan privasi</a></small></ion-label><ion-checkbox slot=\"end\" [(ngModel)]=\"privacy\"></ion-checkbox></ion-item>\r\n\r\n    <div style=\"height:50px;\"></div>\r\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"loginByGoogle()\" [disabled]=\"!terms || !privacy\">\r\n      <ion-icon name=\"logo-google\" slot=\"start\"></ion-icon>\r\n      Daftar by Google</ion-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ion-padding register-body\" *ngIf=\"showForm\">\r\n<div>\r\n  <p style=\"text-align:center;\"><ion-text color=\"primary\">Daftar POSBill</ion-text></p>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Email</small></ion-label>\r\n      <ion-input type=\"email\" class=\"input-text\" size=\"large\" [(ngModel)]=\"email\"  readonly></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Nama lengkap</small></ion-label>\r\n      <ion-input class=\"input-text\" size=\"large\" [(ngModel)]=\"name\" autocapitalize=\"on\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Nama usaha atau brand</small></ion-label>\r\n      <ion-input class=\"input-text\" size=\"large\" [(ngModel)]=\"companyName\" autocapitalize=\"on\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Jenis usaha</small></ion-label>\r\n      <ion-select  interface=\"action-sheet\" [(ngModel)]=\"business_type_id\">\r\n        <ion-select-option value=\"\">- Pilih jenis usaha -</ion-select-option>\r\n        <ion-select-option *ngFor=\"let item of businessType\" value=\"{{item.id}}\">{{item.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Handphone</small></ion-label>\r\n      <ion-input type=\"tel\" class=\"input-text\" size=\"large\" [(ngModel)]=\"phone\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Password</small></ion-label>\r\n      <ion-input type=\"password\" class=\"input-text\" size=\"large\" [(ngModel)]=\"password\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Ulangi Password</small></ion-label>\r\n      <ion-input type=\"password\" class=\"input-text\" size=\"large\" [(ngModel)]=\"repassword\"></ion-input>\r\n    </ion-item>\r\n    <br/>\r\n    <ion-item-divider>Data outlet</ion-item-divider>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Nama outlet</small></ion-label>\r\n      <ion-input class=\"input-text\" size=\"large\" [(ngModel)]=\"outlet.name\" autocapitalize=\"on\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Alamat</small></ion-label>\r\n      <ion-input class=\"input-text\" size=\"large\" [(ngModel)]=\"outlet.address\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Provinsi</small></ion-label>\r\n      <ion-select interface=\"action-sheet\" [(ngModel)]=\"outlet.province_id\" (ionChange)=\"getCity()\">\r\n        <ion-select-option value=\"\">- Pilih provinsi -</ion-select-option>\r\n        <ion-select-option *ngFor=\"let prov of province\" value=\"{{prov.id}}\">{{prov.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Kota</small></ion-label>\r\n      <ion-select interface=\"action-sheet\" [(ngModel)]=\"outlet.city_id\" (ionChange)=\"getSubdistrict()\">\r\n        <ion-select-option *ngFor=\"let c of city\" [value]=\"c.id\">{{c.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Kecamatan</small></ion-label>\r\n      <ion-select interface=\"action-sheet\" [(ngModel)]=\"outlet.subdistrict_id\">\r\n        <ion-select-option *ngFor=\"let sub of subdistrict\" [value]=\"sub.id\">{{sub.name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"><small>Telepon</small></ion-label>\r\n      <ion-input class=\"input-text\" size=\"large\" type=\"tel\" [(ngModel)]=\"outlet.phone\"></ion-input>\r\n    </ion-item>\r\n\r\n    </div>\r\n    <br/>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-button expand=\"block\" (click)=\"process('Premium')\">Coba versi <br/>Premium 30 Hari</ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-button expand=\"block\" fill=\"outline\" (click)=\"process('Lite')\">Daftar versi Lite <br/>GRATIS</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n\r\n    <br/>\r\n    <ion-button expand=\"block\" color=\"dark\" size=\"small\" fill=\"link\" [routerLink]=\"['/login']\">Kembali ke login</ion-button>\r\n    <br/>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "b0Bx":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "UgDh");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "x/mg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");










let RegisterPage = class RegisterPage {
    constructor(http, global, router, toastController, storage, googlePlus) {
        this.http = http;
        this.global = global;
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.googlePlus = googlePlus;
        // showForm: any = true;
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
        this.outlet = { name: '', address: '', province_id: '', city: '', subdistrict_id: '', phone: '' };
        this.province = [];
        this.city = [];
        this.subdistrict = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.global.loadingPresent('menyiapkan form registrasi..');
        this.getBusinessType();
    }
    getBusinessType() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        let options = { headers: reqHeader };
        this.http.post(this.global.base_url + 'auth/business_type', null, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.businessType = data.type;
            }
            this.getProvince();
        }, error => {
            console.log(error);
        });
    }
    getProvince() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        let options = { headers: reqHeader };
        this.http.post(this.global.base_url + 'auth/outlet/province', null, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.province = data.province;
            }
            this.global.loadingDismiss();
        }, error => {
            console.log(error);
            this.global.loadingDismiss();
        });
    }
    getCity() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        let options = { headers: reqHeader };
        let postData = { province_id: this.outlet.province_id };
        this.http.post(this.global.base_url + 'auth/outlet/city', postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.city = data.city;
                this.outlet.city_id = data.city[0].id;
                this.subdistrict = [];
                this.outlet.subdistrict_id = '';
                console.log(this.outlet.city_id);
            }
        }, error => {
            console.log(error);
        });
    }
    getSubdistrict() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        let options = { headers: reqHeader };
        let postData = { city_id: this.outlet.city_id };
        this.http.post(this.global.base_url + 'auth/outlet/subdistrict', postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.subdistrict = data.subdistrict;
                this.outlet.subdistrict_id = data.subdistrict[0].id;
            }
        }, error => {
            console.log(error);
        });
    }
    process(plan) {
        if ((this.name == '') || (this.companyName == '') || (this.business_type_id == '') || (this.phone == '') || (this.email == '') || (this.password == '') || (this.repassword == '') || (this.outlet.name == '') || (this.outlet.address == '') || (this.outlet.province_id == '') || (this.outlet.city_id == '') || (this.outlet.subdistrict_id == '')) {
            this.global.toastPresent('Silahkan lengkapi semua kolom pendaftaran!');
            return false;
        }
        if (this.password != this.repassword) {
            this.global.toastPresent('Password dan konfirmasi password tidak sama!');
            return false;
        }
        this.global.loadingPresent('registrasi akun...');
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        let options = { headers: reqHeader };
        let postData = {
            "name": this.name,
            "phone": this.phone,
            "email": this.email,
            "company_name": this.companyName,
            "business_type_id": this.business_type_id,
            "password": this.password,
            "outlet": this.outlet,
            "package": plan
        };
        this.http.post(this.global.base_url + 'auth/register', postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                //---
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + data.token
                });
                let options = { headers: reqHeader };
                this.http.post(this.global.base_url + 'auth/me', null, options)
                    .subscribe((data2) => {
                    if (data2.id) {
                        var auth = { token: data.token };
                        var user = { id: data2.id, name: data2.name, email: data2.email, level: data2.level };
                        this.storage.clear().then(() => {
                            this.storage.setObject('auth', auth);
                            this.storage.setObject('user', user);
                            this.global.toastPresent(data.message);
                            this.router.navigate(['/tabs/tab-pos/register']);
                        });
                    }
                    else {
                        console.log("Unathorized");
                    }
                    this.global.loadingDismiss();
                }, error => {
                    console.log(error);
                });
                this.presentToast(data.message);
            }
            else {
                this.presentToast(data.message);
            }
            this.global.loadingDismiss();
        }, error => {
            console.log(error);
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    openForm(res) {
        this.showForm = true;
        this.email = res.email;
    }
    loginByGoogle() {
        this.googlePlus.login({})
            .then(res => this.openForm(res))
            .catch(err => console.error(err));
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "x/mg":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom:20px;\n}\n\n.register-body {\n  padding-top: 20px;\n  height: 100%;\n}\n\n.introduction {\n  padding-top: 100px;\n  background-color: #912775;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0MseUJBQUE7QUFWSCIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbToyMHB4O1xyXG59XHJcbi5yZWdpc3Rlci1ib2R5IHtcclxuICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIC8vIGNvbG9yOiNmZmY7XHJcblxyXG59XHJcblxyXG4uYmFja2dyb3VuZC1wdXJwbGUge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM5MTI3NzU7XHJcbn1cclxuLy9cclxuLy8gLmlucHV0LXRleHQge1xyXG4vLyAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztcclxuLy8gICBwYWRkaW5nOjEwcHg7XHJcbi8vIH1cclxuXHJcbi5pbnRyb2R1Y3Rpb24ge1xyXG4gIHBhZGRpbmctdG9wOjEwMHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTEyNzc1O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "2t07");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "b0Bx");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map