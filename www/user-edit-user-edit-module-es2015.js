(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-edit-user-edit-module"],{

/***/ "2WXH":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-edit/user-edit.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/user']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Ubah pengguna</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"link\" color=\"danger\" (click)=\"deleteConfirm()\" ><ion-icon name=\"trash-outline\" color=\"danger\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\">\r\n\r\n  <ion-item lines=\"inset\">\r\n    <ion-label><small>Level</small></ion-label>\r\n    <ion-text slot=\"end\">{{user.level}}</ion-text>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Nama</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"user.name\" autocapitalize=\"on\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"user.level == 'Cashier'\">\r\n    <ion-label position=\"stacked\">Username</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"user.email\" readonly></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"user.level == 'Cashier'\">\r\n    <ion-label position=\"stacked\">PIN</ion-label>\r\n    <ion-input type=\"tel\" [(ngModel)]=\"user.changepassword\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"user.level == 'Admin'\">\r\n    <ion-label position=\"stacked\">Email</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"user.email\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"user.level == 'Admin'\">\r\n    <ion-label position=\"stacked\">Password</ion-label>\r\n    <ion-input type=\"password\" [(ngModel)]=\"user.changepassword\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-list>\r\n  <ion-list-header>Akses outlet</ion-list-header>\r\n  <ion-item *ngFor=\"let item of outlet\">\r\n    <ion-label><small>{{item.name}}</small></ion-label>\r\n    <ion-toggle [(ngModel)]=\"item.select\"></ion-toggle>\r\n  </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\">\r\n    <ion-button expand=\"block\" (click)=\"process()\">Simpan</ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "3D3h":
/*!***********************************************!*\
  !*** ./src/app/user-edit/user-edit.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWVkaXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "6uns":
/*!***********************************************!*\
  !*** ./src/app/user-edit/user-edit.module.ts ***!
  \***********************************************/
/*! exports provided: UserEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditPageModule", function() { return UserEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-edit-routing.module */ "KGa2");
/* harmony import */ var _user_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit.page */ "Yt5M");







let UserEditPageModule = class UserEditPageModule {
};
UserEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserEditPageRoutingModule"]
        ],
        declarations: [_user_edit_page__WEBPACK_IMPORTED_MODULE_6__["UserEditPage"]]
    })
], UserEditPageModule);



/***/ }),

/***/ "KGa2":
/*!*******************************************************!*\
  !*** ./src/app/user-edit/user-edit-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: UserEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditPageRoutingModule", function() { return UserEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-edit.page */ "Yt5M");




const routes = [
    {
        path: '',
        component: _user_edit_page__WEBPACK_IMPORTED_MODULE_3__["UserEditPage"]
    }
];
let UserEditPageRoutingModule = class UserEditPageRoutingModule {
};
UserEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserEditPageRoutingModule);



/***/ }),

/***/ "Yt5M":
/*!*********************************************!*\
  !*** ./src/app/user-edit/user-edit.page.ts ***!
  \*********************************************/
/*! exports provided: UserEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditPage", function() { return UserEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-edit.page.html */ "2WXH");
/* harmony import */ var _user_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-edit.page.scss */ "3D3h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");











let UserEditPage = class UserEditPage {
    constructor(storage, http, global, router, loadingController, platform, nativePageTransitions, route, alertController) {
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
        this.route = route;
        this.alertController = alertController;
        this.user = { name: '', level: '', email: '', changepassword: '' };
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
        this.http.post(this.global.base_url + 'auth/user/detail', postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.user = data.user;
                this.getDataOutlet();
                console.log(data);
            }
            else {
                console.log(data);
            }
        }, error => {
            console.log(error);
        });
    }
    getDataOutlet() {
        this.outlet = [];
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth.token
        });
        let options = { headers: reqHeader };
        this.http.post(this.global.base_url + 'auth/outlet/list', null, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                for (let itemOutlet of data.outlet) {
                    var checkAccOutlet = this.user.outlet.findIndex(x => x.outlet_id === itemOutlet.outlet.id);
                    if (checkAccOutlet > -1) {
                        var thisOutlet = { id: itemOutlet.outlet.id, name: itemOutlet.outlet.name, select: true };
                    }
                    else {
                        var thisOutlet = { id: itemOutlet.outlet.id, name: itemOutlet.outlet.name, select: false };
                    }
                    this.outlet.push(thisOutlet);
                }
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
        if ((this.user.name == '') || (this.user.level == '') || (this.user.email == '') || (this.user.password == '')) {
            this.global.toastPresent('Mohon lengkapi form yang wajib diisi!');
            return false;
        }
        var accessOutlet = this.outlet.filter(x => x.select === true);
        if (accessOutlet.length < 1) {
            this.global.toastPresent('Mohon pilih minimal 1 outlet!');
            return false;
        }
        this.global.loadingPresent('menyimpan perubahan...');
        this.storage.getObject('auth').then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                id: this.id,
                name: this.user.name,
                level: this.user.level,
                email: this.user.email,
                password: this.user.changepassword,
                outlet: this.outlet
            };
            this.http.post(this.global.base_url + 'auth/user/edit', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.global.toastPresent(data.message);
                    this.router.navigate(['/user']);
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
        this.global.loadingPresent('menghapus outlet...');
        this.storage.getObject('auth').then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.auth.token
            });
            let options = { headers: reqHeader };
            let postData = {
                id: this.id
            };
            this.http.post(this.global.base_url + 'auth/user/delete', postData, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.global.toastPresent(data.message);
                    this.router.navigate(['/user']);
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
UserEditPage.ctorParameters = () => [
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
UserEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-edit',
        template: _raw_loader_user_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserEditPage);



/***/ })

}]);
//# sourceMappingURL=user-edit-user-edit-module-es2015.js.map