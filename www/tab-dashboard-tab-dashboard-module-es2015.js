(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-dashboard-tab-dashboard-module"],{

/***/ "GKWu":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-dashboard/tab-dashboard.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-no-padding\" mode=\"ios\">\r\n  <ion-card style=\"margin-top: 20px; margin-bottom: 10px\">\r\n    <ion-card-header color=\"primary\">\r\n      <ion-card-subtitle>\r\n        {{company.name}}\r\n        <span style=\"float: right\">\r\n          <ion-badge color=\"dark\">{{ company.package }}</ion-badge>\r\n        </span>\r\n      </ion-card-subtitle>\r\n    </ion-card-header>\r\n  </ion-card>\r\n\r\n  <h5 class=\"title-info-posbill\">\r\n    Ringkasan penjualan\r\n\r\n    <span style=\"float: right\">\r\n      <ion-text color=\"primary\">Lihat laporan penjualan</ion-text>\r\n    </span>\r\n  </h5>\r\n\r\n  <ion-card>\r\n    <!-- <ion-card-header color=\"primary\">\r\n        <ion-card-subtitle color=\"light\">\r\n          Ringkasan penjualan\r\n        </ion-card-subtitle>\r\n      </ion-card-header> -->\r\n\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <h6>Hari ini {{ dateNow }}</h6>\r\n            <div style=\"border-top: 1px solid #ccc; margin: 7px 0px\"></div>\r\n            <h2>\r\n              <ion-text color=\"primary\">{{ summary_today_price }}</ion-text>\r\n            </h2>\r\n            <h5>\r\n              <ion-text color=\"dark\">{{summary_today_items }} Items</ion-text>\r\n            </h5>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <h6>Bulan ini ({{ monthNow }})</h6>\r\n            <div style=\"border-top: 1px solid #ccc; margin: 7px 0px\"></div>\r\n            <h2>\r\n              <ion-text color=\"primary\">{{ summary_month_price }}</ion-text>\r\n            </h2>\r\n            <h5>\r\n              <ion-text color=\"dark\">{{ summary_month_items }} Items</ion-text>\r\n            </h5>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <h5 class=\"title-info-posbill\">Ringkasan order</h5>\r\n  <ion-card>\r\n    <!-- <ion-card-header color=\"primary\">\r\n        <ion-card-subtitle color=\"light\">\r\n          Pesanan terbaru\r\n        </ion-card-subtitle>\r\n      </ion-card-header> -->\r\n\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item lines=\"full\" detail [routerLink]=\"['/booking']\">\r\n          <ion-icon slot=\"start\" name=\"save-outline\" color=\"primary\"></ion-icon>\r\n          <ion-label>Booking</ion-label>\r\n          <ion-badge slot=\"end\" color=\"primary\">{{ amount_booking }}</ion-badge>\r\n        </ion-item>\r\n        <ion-item\r\n          lines=\"none\"\r\n          detail\r\n          (click)=\"onCoba()\"\r\n          style=\"cursor: pointer\"\r\n        >\r\n          <ion-icon slot=\"start\" name=\"cart-outline\" color=\"primary\"></ion-icon>\r\n          <ion-label>Pesanan belum lunas</ion-label>\r\n          <ion-badge slot=\"end\" color=\"primary\"\r\n            >{{ amount_order_notPaid }}</ion-badge\r\n          >\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <h5 class=\"title-info-posbill\">Informasi Posbill</h5>\r\n\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide\r\n      *ngFor=\"let item of informations\"\r\n      [routerLink]=\"['/information-detail/' + item.id]\"\r\n    >\r\n      <img src=\"{{ baseUrl + item.image}}\" />\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>\r\n");

/***/ }),

/***/ "QmIR":
/*!*******************************************************!*\
  !*** ./src/app/tab-dashboard/tab-dashboard.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\nion-card-content {\n  min-height: 120px;\n}\n\n.menu-setting p {\n  font-size: 75% tab;\n}\n\nion-slides {\n  margin: 10px 0px;\n}\n\nion-slide {\n  overflow: hidden;\n  padding-left: 16px;\n}\n\nion-slide img {\n  border-radius: 15px;\n}\n\n.summary {\n  text-align: center;\n}\n\n.title-info-posbill {\n  padding: 0px 16px;\n  font-size: 80%;\n}\n\nh6 {\n  font-size: 80%;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYi1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUVBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQUYiLCJmaWxlIjoidGFiLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5tZW51LXNldHRpbmcgcCB7XHJcbiAgZm9udC1zaXplOiA3NSV0YWI7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxufVxyXG5cclxuaW9uLXNsaWRlIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLnN1bW1hcnkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLWluZm8tcG9zYmlsbCB7XHJcbiAgcGFkZGluZzogMHB4IDE2cHg7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbmg2IHtcclxuICBmb250LXNpemU6IDgwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "fLci":
/*!*******************************************************!*\
  !*** ./src/app/tab-dashboard/tab-dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: TabDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDashboardPageModule", function() { return TabDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-dashboard.page */ "oZ/7");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab-dashboard-routing.module */ "xw5T");









let TabDashboardPageModule = class TabDashboardPageModule {
};
TabDashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["TabDashboardPage"] }]),
            _tab_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__["TabDashboardPageRoutingModule"],
        ],
        declarations: [_tab_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["TabDashboardPage"]]
    })
], TabDashboardPageModule);



/***/ }),

/***/ "oZ/7":
/*!*****************************************************!*\
  !*** ./src/app/tab-dashboard/tab-dashboard.page.ts ***!
  \*****************************************************/
/*! exports provided: TabDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDashboardPage", function() { return TabDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab-dashboard.page.html */ "GKWu");
/* harmony import */ var _tab_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-dashboard.page.scss */ "QmIR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ "gcOT");












const { App } = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"];
const { PushNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"];
let TabDashboardPage = class TabDashboardPage {
    constructor(nativePageTransitions, http, global, router, toastController, storage, alertController, platform) {
        this.nativePageTransitions = nativePageTransitions;
        this.http = http;
        this.global = global;
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.alertController = alertController;
        this.platform = platform;
        this.slideOpts = {
            slidePerView: 1,
            slidePerPage: 2,
            initialSlide: 1,
            width: 350,
            speed: 400,
            centeredSlides: true,
        };
        this.baseUrl = this.global.domain;
        this.offline = false;
        this.showContent = false;
        this.user = { name: "", level: "" };
        this.company = { name: "", package: "" };
        // Amount
        this.amount_booking = 0;
        this.amount_order_notPaid = 0;
        // Summary
        this.summary_today_price = 0;
        this.summary_today_items = 0;
        this.summary_month_price = 0;
        this.summary_month_items = 0;
        // Information
        this.informations = [];
        this.dateNow = "";
        this.monthNow = "";
        this.notificationContent = {
            notification: { data: { entity_name: "", id: "" } },
        };
        // this.platform.backButton.subscribeWithPriority(10, () => {
        //   this.router.navigate(['/tabs/tab1']);
        // });
    }
    ngOnInit() {
        console.log("Initializing POS");
        // Request permission to use push notifications
        // iOS will prompt user and return if they granted permission or not
        // Android will just grant without prompting
        PushNotifications.requestPermission().then((result) => {
            if (result.granted) {
                // Register with Apple / Google to receive push via APNS/FCM
                PushNotifications.register();
            }
            else {
                // Show some error
            }
        });
        PushNotifications.addListener("registration", (token) => {
            console.log("Push registration success, token: " + token.value);
        });
        PushNotifications.addListener("registrationError", (error) => {
            console.log("Error on registration: " + JSON.stringify(error));
        });
        PushNotifications.addListener("pushNotificationReceived", (notification) => {
            console.log("Push received: " + JSON.stringify(notification));
        });
        PushNotifications.addListener("pushNotificationActionPerformed", (notification) => {
            console.log("Push action performed: " + JSON.stringify(notification));
            this.notificationContent = notification;
            if (this.notificationContent.notification.data.entity_name ==
                "order_detail") {
                this.router.navigate([
                    "/tabs/tab-order/notification/" +
                        this.notificationContent.notification.data.id,
                ]);
                // setTimeout(() => {
                //   this.router.navigate(['/orders-detail/'+this.notificationContent.notification.data.id]);
                // }, 2000);
            }
        });
    }
    ionViewWillEnter() {
        this.storage.getObject("company").then((company) => {
            this.company = company;
            this.storage.getObject("user").then((user) => {
                this.user = user;
            });
        });
        this.getData();
    }
    getData() {
        this.storage.getObject("auth").then((auth) => {
            this.auth = auth;
            this.getDataCompany();
            this.getAmountBooking();
            this.getAmountOrder();
            this.getOrderSummary();
            this.getDataInformation();
        });
        const optionDateNow = { year: "numeric", weekday: "long" };
        const formattedDateNow = this.global.getNameDate(new Date(), optionDateNow);
        const explodeDateNow = formattedDateNow.split(" ");
        const optionMonth = { year: "numeric", month: "long" };
        const formattedMonth = this.global.getNameDate(new Date(), optionMonth);
        console.log(explodeDateNow);
        this.dateNow = explodeDateNow[1] + " " + explodeDateNow[0];
        this.monthNow = formattedMonth;
        console.log(this.amount_booking, this.amount_order_notPaid);
    }
    getDataCompany() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.auth.token,
        });
        let options = { headers: reqHeader };
        this.http
            .post(this.global.base_url + "auth/company", null, options)
            .subscribe((data) => {
            if (data.status == 0) {
                this.storage.setObject("company", data.company);
                this.company = data.company;
                console.log(data);
            }
            else {
                console.log(data);
            }
            this.showContent = true;
        }, (error) => {
            console.log(error);
        });
    }
    getDataInformation() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.auth.token,
        });
        let options = { headers: reqHeader };
        this.http.get(this.global.base_url + "auth/information", options).subscribe((data) => {
            this.informations = data === null || data === void 0 ? void 0 : data.information;
            console.log(data);
        }, (error) => {
            console.log(error);
        });
    }
    getAmountOrder() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.auth.token,
        });
        let options = { headers: reqHeader };
        this.http.get(`${this.global.base_url}auth/order/count`, options).subscribe((data) => {
            this.amount_order_notPaid = data.amount_order_notPaid;
        }, (error) => {
            console.log(error);
        });
    }
    getOrderSummary() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.auth.token,
        });
        let options = { headers: reqHeader };
        this.http
            .get(`${this.global.base_url}auth/order/summary`, options)
            .subscribe((data) => {
            this.summary_today_price = data.summary_today_price;
            this.summary_today_items = data.summary_today_items;
            this.summary_month_price = data.summary_month_price;
            this.summary_month_items = data.summary_month_items;
        }, (error) => {
            console.log(error);
        });
    }
    getAmountBooking() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.auth.token,
        });
        let options = { headers: reqHeader };
        this.http
            .get(`${this.global.base_url}auth/booking/count`, options)
            .subscribe((data) => {
            this.amount_booking = data.amount_booking;
        }, (error) => {
            console.log(error);
        });
    }
    clickToPage(page) {
        if (this.company.package == "Lite" && page == "/setting-olshop") {
            this.global.toastPresent("Fitur toko online tersedia dalam versi Premium");
            return false;
        }
        if (this.company.package == "Lite" && page == "/user") {
            this.global.toastPresent("Fitur pengguna tersedia dalam versi Premium");
            return false;
        }
        let options = {
            direction: "left",
            duration: 300,
            slowdownfactor: 0,
            slidePixels: 0,
            iosdelay: 0,
            androiddelay: 0,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 0,
        };
        this.nativePageTransitions.slide(options);
        this.router.navigate([page]);
    }
    ionViewWillLeave() { }
    confirmLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Konfirmasi",
                message: 'Yakin untuk keluar dari akun Anda?   <br/> <br/> Perhatian : <br/> <span style="color:red">harap lakukan sinkronisasi data order terlebih dahulu, data offline akan dihapus saat Anda keluar akun!</span>',
                buttons: [
                    {
                        text: "Sinkronkan data!",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: (blah) => {
                            this.router.navigate(["/tabs/tab-order"]);
                        },
                    },
                    {
                        text: "Keluar",
                        handler: () => {
                            this.logout();
                            console.log("Confirm logout");
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    logout() {
        this.storage.clear().then(() => {
            this.storage.removeItem("auth");
            this.storage.removeItem("user");
            this.storage.removeItem("company");
            this.storage.removeItem("outlet_active");
            this.storage.removeItem("outlet");
            this.storage.removeItem("product");
            this.router.navigate(["/login"]);
        });
    }
    onCoba() {
        this.storage.setObject("filterBy", "Pending");
        this.router.navigate(["/tabs/tab-order"]);
    }
};
TabDashboardPage.ctorParameters = () => [
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
];
TabDashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-tab-dashboard",
        template: _raw_loader_tab_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabDashboardPage);



/***/ }),

/***/ "xw5T":
/*!***************************************************************!*\
  !*** ./src/app/tab-dashboard/tab-dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TabDashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDashboardPageRoutingModule", function() { return TabDashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-dashboard.page */ "oZ/7");




const routes = [
    {
        path: '',
        component: _tab_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["TabDashboardPage"],
    },
];
let TabDashboardPageRoutingModule = class TabDashboardPageRoutingModule {
};
TabDashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabDashboardPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tab-dashboard-tab-dashboard-module-es2015.js.map