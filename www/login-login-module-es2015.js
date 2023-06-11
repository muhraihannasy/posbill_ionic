(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");










const { App } = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"];

let LoginPage = class LoginPage {
    constructor(http, global, router, toastController, storage, platform, googlePlus) {
        this.http = http;
        this.global = global;
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.platform = platform;
        this.googlePlus = googlePlus;
        this.email = "";
        this.password = "";
        this.owner = true;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.storage.removeItem("auth");
        this.storage.removeItem("user");
        this.storage.removeItem("company");
        this.storage.removeItem("outlet_active");
        this.storage.removeItem("outlet");
        this.storage.removeItem("product");
    }
    process() {
        // validation
        if (this.email == "" || this.password == "") {
            this.global.toastPresent("Silahkan lengkapi form login!");
            return false;
        }
        this.global.loadingPresent("login akun...");
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            "Content-Type": "application/json",
        });
        let options = { headers: reqHeader };
        let postData = {
            email: this.email,
            password: this.password,
        };
        this.http
            .post(this.global.base_url + "auth/login", postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.token,
                });
                let options = { headers: reqHeader };
                this.http
                    .post(this.global.base_url + "auth/me", null, options)
                    .subscribe((data2) => {
                    if (data2.id) {
                        var auth = { token: data.token };
                        var user = {
                            id: data2.id,
                            name: data2.name,
                            email: data2.email,
                            level: data2.level,
                        };
                        this.storage.clear().then(() => {
                            this.storage.removeItem("auth");
                            this.storage.removeItem("user");
                            this.storage.removeItem("company");
                            this.storage.removeItem("outlet_active");
                            this.storage.removeItem("outlet");
                            this.storage.removeItem("product");
                            this.storage.setObject("auth", auth);
                            this.storage.setObject("user", user);
                            this.global.toastPresent(data.message);
                            this.router.navigate(["/tabs/tab-dashboard"]);
                        });
                    }
                    else {
                        console.log("Unathorized");
                    }
                    this.global.loadingDismiss();
                }, (error) => {
                    console.log(error);
                });
            }
            else {
                this.presentToast(data.message);
            }
        }, (error) => {
            console.log(error);
            if (this.owner == true) {
                this.presentToast("<strong>Login salah</strong><br/>Silahkan periksa kembali email atau password Anda!");
            }
            else {
                this.presentToast("<strong>Login salah</strong><br/>Silahkan periksa kembali username atau PIN Anda!");
            }
            this.global.loadingDismiss();
        });
    }
    swicthLogin(type) {
        if (type == "owner") {
            this.owner = true;
        }
        else {
            this.owner = false;
        }
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
            });
            toast.present();
        });
    }
    loginByGoogleProcess(res) {
        this.global.loadingPresent("login akun...");
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            "Content-Type": "application/json",
        });
        let options = { headers: reqHeader };
        let postData = {
            email: res.email,
        };
        this.http
            .post(this.global.base_url + "auth/login_by_google_login", postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.token,
                });
                let options = { headers: reqHeader };
                this.http
                    .post(this.global.base_url + "auth/me", null, options)
                    .subscribe((data2) => {
                    if (data2.id) {
                        var auth = { token: data.token };
                        var user = {
                            id: data2.id,
                            name: data2.name,
                            email: data2.email,
                            level: data2.level,
                        };
                        this.storage.clear().then(() => {
                            this.storage.removeItem("auth");
                            this.storage.removeItem("user");
                            this.storage.removeItem("company");
                            this.storage.removeItem("outlet_active");
                            this.storage.removeItem("outlet");
                            this.storage.removeItem("product");
                            this.storage.setObject("auth", auth);
                            this.storage.setObject("user", user);
                            this.global.toastPresent(data.message);
                            this.router.navigate(["/tabs/tab-pos/login"]);
                        });
                    }
                    else {
                        console.log("Unathorized");
                    }
                    this.global.loadingDismiss();
                }, (error) => {
                    console.log(error);
                });
            }
            else {
                this.presentToast(data.message);
            }
        }, (error) => {
            console.log(error);
            if (this.owner == true) {
                this.presentToast("<strong>Login salah</strong><br/>Silahkan periksa kembali email atau password Anda!");
            }
            else {
                this.presentToast("<strong>Login salah</strong><br/>Silahkan periksa kembali username atau PIN Anda!");
            }
            this.global.loadingDismiss();
        });
    }
    loginByGoogle() {
        this.googlePlus
            .login({})
            .then((res) => this.loginByGoogleProcess(res))
            .catch((err) => console.error(err));
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__["GooglePlus"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-login",
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content mode=\"ios\" style=\"background:#912775;\">\r\n\r\n<div class=\"login-body\">\r\n\r\n<h3>POSbill</h3>\r\n<br/>\r\n\r\n<div>\r\n\r\n    <ion-grid  *ngIf=\"owner\">\r\n      <ion-row>\r\n        <ion-col><ion-button expand=\"block\" color=\"light\" fill=\"outline\" (click)=\"swicthLogin('owner')\">Owner / Admin</ion-button></ion-col>\r\n        <ion-col><ion-button expand=\"block\" (click)=\"swicthLogin('staff')\" >Kasir</ion-button></ion-col>\r\n\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid  *ngIf=\"!owner\">\r\n      <ion-row>\r\n        <ion-col><ion-button expand=\"block\"  (click)=\"swicthLogin('owner')\">Owner / Admin</ion-button></ion-col>\r\n        <ion-col><ion-button expand=\"block\" color=\"light\" fill=\"outline\" (click)=\"swicthLogin('staff')\" >Kasir</ion-button></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <br/><br/>\r\n\r\n    <div *ngIf=\"owner\">\r\n    <ion-label><small>Email</small></ion-label><br/>\r\n    <ion-input class=\"input-text\" size=\"large\" [(ngModel)]=\"email\"></ion-input>\r\n    <br/>\r\n    <ion-label><small>Password</small></ion-label><br/>\r\n    <ion-input type=\"password\" class=\"input-text\" size=\"large\" [(ngModel)]=\"password\"></ion-input>\r\n    </div>\r\n\r\n      <div *ngIf=\"!owner\">\r\n      <ion-label><small>ID Kasir</small></ion-label><br/>\r\n      <ion-input class=\"input-text\" size=\"large\" [(ngModel)]=\"email\"></ion-input>\r\n      <br/>\r\n      <ion-label><small>PIN</small></ion-label><br/>\r\n      <ion-input type=\"password\" class=\"input-text\" size=\"large\" [(ngModel)]=\"password\"></ion-input>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <br/><br/>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col> <ion-button expand=\"block\" color=\"dark\" (click)=\"process()\">Login</ion-button></ion-col>\r\n        <ion-col><ion-button expand=\"block\" color=\"light\" fill=\"outline\" [routerLink]=\"['/register']\">Daftar sekarang</ion-button></ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col *ngIf=\"owner\">\r\n          <ion-button expand=\"block\" color=\"danger\" (click)=\"loginByGoogle()\">\r\n            <ion-icon name=\"logo-google\" slot=\"start\"></ion-icon>\r\n            Login by Google</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #912775;\n}\n\n.login-body {\n  background-color: #912775;\n  padding-top: 100px;\n  height: 100%;\n  color: #fff;\n  padding-left: 15%;\n  padding-right: 15%;\n}\n\n.background-purple {\n  background-color: #912775;\n}\n\n.input-text {\n  border-bottom: 1px solid #ccc;\n  background: #912775;\n  color: #fff;\n  padding: 10px;\n}\n\nion-footer {\n  --background:#912775;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBRUUsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtBQUFGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICM5MTI3NzU7XHJcbn1cclxuXHJcbi5sb2dpbi1ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTEyNzc1O1xyXG4gIHBhZGRpbmctdG9wOjEwMHB4O1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbiAgcGFkZGluZy1yaWdodDogMTUlO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1wdXJwbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTI3NzU7XHJcbn1cclxuXHJcbi5pbnB1dC10ZXh0IHtcclxuICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XHJcbiAgYmFja2dyb3VuZDojOTEyNzc1O1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAtLWJhY2tncm91bmQ6IzkxMjc3NTtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map