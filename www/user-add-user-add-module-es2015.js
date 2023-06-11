(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-add-user-add-module"],{

/***/ "CNAl":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-add/user-add.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/user']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Tambah pengguna</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\" *ngIf=\"!showResult\">\r\n\r\n  <ion-item lines=\"inset\">\r\n    <ion-label><small>Level*</small></ion-label>\r\n    <ion-select interface=\"action-sheet\" [(ngModel)]=\"user.level\">\r\n      <ion-select-option value=\"Admin\">Admin</ion-select-option>\r\n      <ion-select-option value=\"Cashier\">Kasir</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Nama*</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"user.name\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"user.level == 'Admin'\">\r\n    <ion-label position=\"stacked\">Email*</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"user.email\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"user.level == 'Admin'\">\r\n    <ion-label position=\"stacked\">Password*</ion-label>\r\n    <ion-input type=\"password\" [(ngModel)]=\"user.password\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-list>\r\n  <ion-list-header>Akses outlet</ion-list-header>\r\n  <ion-item *ngFor=\"let item of outlet\">\r\n    <ion-label><small>{{item.name}}</small></ion-label>\r\n    <ion-toggle [(ngModel)]=\"item.select\"></ion-toggle>\r\n  </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\" *ngIf=\"showResult\">\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label>Name</ion-label>\r\n        <ion-text slot=\"end\">{{dataResult.name}}</ion-text>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Username <br/><ion-button fill=\"outline\" size=\"small\" (click)=\"copy(dataResult.username)\">Copy</ion-button></ion-label>\r\n        <ion-text slot=\"end\">{{dataResult.username}}</ion-text>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-label>Password <br/><ion-button fill=\"outline\" size=\"small\" (click)=\"copy(dataResult.password)\">Copy</ion-button></ion-label>\r\n        <ion-text slot=\"end\">{{dataResult.password}}</ion-text>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\">\r\n    <ion-button expand=\"block\" (click)=\"process()\" *ngIf=\"!showResult\">Simpan</ion-button>\r\n    <ion-button expand=\"block\" [routerLink]=\"['/user']\" *ngIf=\"showResult\">Kembali</ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "cju2":
/*!*********************************************!*\
  !*** ./src/app/user-add/user-add.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWFkZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "ddk3":
/*!*********************************************!*\
  !*** ./src/app/user-add/user-add.module.ts ***!
  \*********************************************/
/*! exports provided: UserAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddPageModule", function() { return UserAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-add-routing.module */ "gtTN");
/* harmony import */ var _user_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-add.page */ "uX5r");







let UserAddPageModule = class UserAddPageModule {
};
UserAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserAddPageRoutingModule"]
        ],
        declarations: [_user_add_page__WEBPACK_IMPORTED_MODULE_6__["UserAddPage"]]
    })
], UserAddPageModule);



/***/ }),

/***/ "gtTN":
/*!*****************************************************!*\
  !*** ./src/app/user-add/user-add-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UserAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddPageRoutingModule", function() { return UserAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-add.page */ "uX5r");




const routes = [
    {
        path: '',
        component: _user_add_page__WEBPACK_IMPORTED_MODULE_3__["UserAddPage"]
    }
];
let UserAddPageRoutingModule = class UserAddPageRoutingModule {
};
UserAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserAddPageRoutingModule);



/***/ }),

/***/ "uX5r":
/*!*******************************************!*\
  !*** ./src/app/user-add/user-add.page.ts ***!
  \*******************************************/
/*! exports provided: UserAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddPage", function() { return UserAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-add.page.html */ "CNAl");
/* harmony import */ var _user_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-add.page.scss */ "cju2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "zzaN");











let UserAddPage = class UserAddPage {
    constructor(storage, http, global, router, loadingController, platform, nativePageTransitions, clipboard) {
        // this.platform.backButton.subscribeWithPriority(10, () => {
        //   this.router.navigate(['/user']);
        // });
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.nativePageTransitions = nativePageTransitions;
        this.clipboard = clipboard;
        this.user = { name: "", level: "Admin", email: "", password: "" };
        this.showResult = false;
        this.user.level = "Admin";
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.storage.getObject("auth").then((auth) => {
            this.auth = auth;
            this.getDataOutlet();
        });
    }
    copy(text) {
        this.clipboard.copy(text);
        this.global.toastPresent("Text telah disalin!");
    }
    getDataOutlet() {
        this.outlet = [];
        this.global.loadingPresent("mengambil data...");
        this.storage.getObject("auth").then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.auth.token,
            });
            let options = { headers: reqHeader };
            this.http
                .post(this.global.base_url + "auth/outlet/list", null, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    for (let itemOutlet of data.outlet) {
                        var thisOutlet = {
                            id: itemOutlet.outlet.id,
                            name: itemOutlet.outlet.name,
                            select: false,
                        };
                        this.outlet.push(thisOutlet);
                    }
                    console.log(data);
                }
                else {
                    console.log(data);
                }
                this.global.loadingDismiss();
            }, (error) => {
                console.log(error);
            });
        });
    }
    process() {
        if (this.user.level == "Admin") {
            if (this.user.name == "" ||
                this.user.level == "" ||
                this.user.email == "" ||
                this.user.password == "") {
                this.global.toastPresent("Mohon lengkapi form yang wajib diisi!");
                return false;
            }
        }
        else {
            if (this.user.name == "" || this.user.level == "") {
                this.global.toastPresent("Mohon lengkapi form yang wajib diisi!");
                return false;
            }
        }
        var accessOutlet = this.outlet.filter((x) => x.select === true);
        if (accessOutlet.length < 1) {
            this.global.toastPresent("Mohon pilih minimal 1 outlet!");
            return false;
        }
        console.log(this.outlet.length);
        this.global.loadingPresent("menambah pengguna...");
        this.storage.getObject("auth").then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.auth.token,
            });
            let options = { headers: reqHeader };
            let postData = {
                name: this.user.name,
                level: this.user.level,
                email: this.user.email,
                password: this.user.password,
                outlet: this.outlet,
            };
            this.http
                .post(this.global.base_url + "auth/user/add", postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.dataResult = data;
                    this.showResult = true;
                    this.global.toastPresent(data.message);
                    // this.router.navigate(['/user-edit/'+data.id]);
                }
                else {
                    console.log(data);
                }
                this.global.loadingDismiss();
            }, (error) => {
                console.log(error);
            });
        });
    }
};
UserAddPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Clipboard"] }
];
UserAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-user-add",
        template: _raw_loader_user_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserAddPage);



/***/ })

}]);
//# sourceMappingURL=user-add-user-add-module-es2015.js.map