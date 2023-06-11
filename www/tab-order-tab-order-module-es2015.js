(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-order-tab-order-module"],{

/***/ "5+78":
/*!***********************************************!*\
  !*** ./src/app/tab-order/tab-order.module.ts ***!
  \***********************************************/
/*! exports provided: TabOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabOrderPageModule", function() { return TabOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab_order_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-order.page */ "MCU5");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab_order_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab-order-routing.module */ "9ewN");








let TabOrderPageModule = class TabOrderPageModule {
};
TabOrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab_order_routing_module__WEBPACK_IMPORTED_MODULE_7__["TabOrderPageRoutingModule"]
        ],
        declarations: [_tab_order_page__WEBPACK_IMPORTED_MODULE_5__["TabOrderPage"]]
    })
], TabOrderPageModule);



/***/ }),

/***/ "9ewN":
/*!*******************************************************!*\
  !*** ./src/app/tab-order/tab-order-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TabOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabOrderPageRoutingModule", function() { return TabOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-order.page */ "MCU5");




const routes = [
    {
        path: '',
        component: _tab_order_page__WEBPACK_IMPORTED_MODULE_3__["TabOrderPage"],
    }
];
let TabOrderPageRoutingModule = class TabOrderPageRoutingModule {
};
TabOrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabOrderPageRoutingModule);



/***/ }),

/***/ "DrbQ":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-order/tab-order.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu\r\n  side=\"start\"\r\n  menuId=\"orderleft\"\r\n  contentId=\"orderleft\"\r\n  mode=\"ios\"\r\n  swipe-gesture=\"true\"\r\n>\r\n  <ion-content id=\"orderleft\">\r\n    <div class=\"ion-padding\">\r\n      <ion-text color=\"primary\">{{company.name}}</ion-text>\r\n    </div>\r\n    <ion-item button color=\"primary\" detail=\"false\">\r\n      <ion-icon name=\"storefront-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n      <ion-label>{{activeOutlet.name}}</ion-label>\r\n      <ion-note slot=\"end\">Aktif</ion-note>\r\n    </ion-item>\r\n    <ion-item-divider>\r\n      <small>Daftar outlet</small>\r\n    </ion-item-divider>\r\n\r\n    <ion-item\r\n      *ngFor=\"let item of outlet\"\r\n      class=\"clickable ion-clickable\"\r\n      (click)=\"changeOutlet(item.outlet)\"\r\n      button\r\n    >\r\n      <ion-icon name=\"storefront-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n      <ion-label><small>{{item.outlet.name}}</small></ion-label>\r\n    </ion-item>\r\n  </ion-content>\r\n  <ion-footer mode=\"ios\" class=\"ion-padding\" *ngIf=\"showContent\">\r\n    <div class=\"ion-text-center\" *ngIf=\"showUser\">{{name}} ({{level}})</div>\r\n    <ion-button\r\n      size=\"small\"\r\n      color=\"danger\"\r\n      expand=\"block\"\r\n      fill=\"link\"\r\n      (click)=\"confirmLogout()\"\r\n      ><ion-icon name=\"power-outline\" slot=\"start\"></ion-icon>\r\n      <ion-text color=\"danger\">Keluar dari akun</ion-text></ion-button\r\n    >\r\n  </ion-footer>\r\n</ion-menu>\r\n\r\n<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"margin-top: 10px; margin-left: 15px\">\r\n      <ion-button size=\"small\" (click)=\"openMenuLeft()\"\r\n        ><ion-icon name=\"storefront-outline\"></ion-icon\r\n      ></ion-button>\r\n    </ion-buttons>\r\n    <ion-searchbar\r\n      style=\"margin-top: 10px; margin-left: 5px\"\r\n      (ionInput)=\"filterList($event)\"\r\n      [(ngModel)]=\"orderNumberSearch\"\r\n      placeholder=\"Cari nomor transaksi\"\r\n    ></ion-searchbar>\r\n    <ion-buttons slot=\"end\" *ngIf=\"totalOrderOffline > 0\">\r\n      <ion-button color=\"danger\" fill=\"link\" (click)=\"syncUpOfflineData()\">\r\n        <ion-icon name=\"sync-outline\" slot=\"start\"></ion-icon>\r\n        <ion-badge color=\"danger\">{{totalOrderOffline}}</ion-badge></ion-button\r\n      >\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" size-xs=\"6\" size-sm=\"5\">\r\n        <ion-item lines=\"full\">\r\n          <ion-label class=\"ion-text-wrap\"><small>Dari </small></ion-label>\r\n          <ion-datetime\r\n            style=\"font-size: 12px\"\r\n            displayFormat=\"DD-MMM-YYYY\"\r\n            pickerFormat=\"DD-MMM-YYYY\"\r\n            display-timezone=\"Asia/Jakarta\"\r\n            color=\"primary\"\r\n            [(ngModel)]=\"start_date\"\r\n          ></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" size-xs=\"6\" size-sm=\"5\">\r\n        <ion-item lines=\"full\">\r\n          <ion-label class=\"ion-text-wrap\"><small>Sampai</small></ion-label>\r\n          <ion-datetime\r\n            style=\"font-size: 12px\"\r\n            displayFormat=\"DD-MMM-YYYY\"\r\n            pickerFormat=\"DD-MMM-YYYY\"\r\n            display-timezone=\"Asia/Jakarta\"\r\n            color=\"primary\"\r\n            [(ngModel)]=\"end_date\"\r\n            min=\"{{start_date}}\"\r\n            (ionChange)=\"initialize()\"\r\n          ></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"3\"\r\n        ><ion-button\r\n          size=\"small\"\r\n          expand=\"block\"\r\n          color=\"light\"\r\n          (click)=\"filterStatus('All')\"\r\n          >Semua</ion-button\r\n        ></ion-col\r\n      >\r\n      <ion-col size=\"3\"\r\n        ><ion-button\r\n          size=\"small\"\r\n          expand=\"block\"\r\n          color=\"success\"\r\n          (click)=\"filterStatus('Completed')\"\r\n          >Lunas</ion-button\r\n        ></ion-col\r\n      >\r\n      <ion-col size=\"3\"\r\n        ><ion-button\r\n          size=\"small\"\r\n          expand=\"block\"\r\n          color=\"warning\"\r\n          (click)=\"filterStatus('Pending')\"\r\n          >Belum lunas</ion-button\r\n        ></ion-col\r\n      >\r\n      <ion-col size=\"3\"\r\n        ><ion-button\r\n          size=\"small\"\r\n          expand=\"block\"\r\n          color=\"danger\"\r\n          (click)=\"filterStatus('Canceled')\"\r\n          >Dibatalkan</ion-button\r\n        ></ion-col\r\n      >\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n  <div style=\"margin-top: 200px; text-align: center\" *ngIf=\"!showContent\">\r\n    <ion-spinner name=\"crescent\"></ion-spinner>\r\n  </div>\r\n\r\n  <ion-list *ngIf=\"showContent\">\r\n    <div\r\n      *ngIf=\"orderSearch.length == 0\"\r\n      style=\"text-align: center; font-size: 1em; margin-top: 5em\"\r\n    >\r\n      Data Tidak Ada\r\n    </div>\r\n    <ion-item *ngFor=\"let item of orderSearch\" (click)=\"detail(item.id)\" button>\r\n      <ion-icon\r\n        name=\"{{labelStatusIcon(item.status)}}\"\r\n        color=\"{{labelStatusColor(item.status)}}\"\r\n        slot=\"start\"\r\n      ></ion-icon>\r\n      <ion-label\r\n        ><small\r\n          ><ion-text color=\"primary\">TRX-{{item.order_number}}</ion-text>\r\n          <br />\r\n          {{item.order_time}}</small\r\n        >\r\n      </ion-label>\r\n\r\n      <ion-note slot=\"end\"\r\n        ><ion-icon\r\n          name=\"alert-circle-outline\"\r\n          color=\"danger\"\r\n          *ngIf=\"checkThisOrderSync(item.id)\"\r\n        ></ion-icon\r\n        >&nbsp;<small>{{global.currency(item.total)}}</small>\r\n      </ion-note>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "E7aj":
/*!***********************************************!*\
  !*** ./src/app/tab-order/tab-order.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clickable {\n  pointer-events: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYi1vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSwrQkFBQTtBQUNBIiwiZmlsZSI6InRhYi1vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpY2thYmxlIHtcclxucG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "MCU5":
/*!*********************************************!*\
  !*** ./src/app/tab-order/tab-order.page.ts ***!
  \*********************************************/
/*! exports provided: TabOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabOrderPage", function() { return TabOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab_order_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab-order.page.html */ "DrbQ");
/* harmony import */ var _tab_order_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-order.page.scss */ "E7aj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");











let TabOrderPage = class TabOrderPage {
    constructor(storage, http, global, router, loadingController, platform, route, nativePageTransitions, menu, alertController) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.route = route;
        this.nativePageTransitions = nativePageTransitions;
        this.menu = menu;
        this.alertController = alertController;
        this.orderNumberSearch = "";
        this.company = { name: "" };
        this.activeOutlet = { id: "", name: "" };
        this.orderOffline = [];
        this.showContent = false;
        this.showUser = false;
        this.route.params.subscribe((params) => {
            if (params["source"]) {
                this.source = params["source"];
            }
            if (params["id"]) {
                this.id = params["id"];
            }
        });
        this.start_date = this.global.parsingDate(this.global.getFullYear() + "-" + this.global.getMonth() + "-01");
        this.end_date = this.global.getDateOnlyNow();
    }
    ionViewWillEnter() {
        this.initialize();
    }
    doRefresh(event) {
        this.initialize();
        event.target.complete();
    }
    initialize() {
        this.showContent = false;
        this.platform.ready().then(() => {
            this.storage.getObject("auth").then((data) => {
                this.auth = data;
                this.storage.getObject("user").then((user) => {
                    let thisUser = user;
                    this.user = user;
                    this.name = thisUser.name;
                    this.level = thisUser.level;
                    this.showUser = true;
                });
            });
            this.getOfflineCompany();
            this.getOfflineOutlet();
            this.storage.getObject("order_offline").then((data) => {
                if (data != null) {
                    this.orderOffline = data;
                    this.totalOrderOffline = this.orderOffline.length;
                }
                this.storage.getObject("order").then((data) => {
                    if (data != null) {
                        this.storageOrder = data;
                        this.syncUpOfflineData();
                    }
                    else {
                        this.syncUpOfflineData();
                    }
                });
            });
        });
    }
    getOfflineOutlet() {
        this.storage.getObject("outlet").then((data) => {
            if (data != null) {
                this.storageOutlet = data;
                this.outlet = this.storageOutlet.filter((outlet) => outlet.outlet.status === "Active");
            }
            console.log("Offline outlet", data);
            this.getActiveOutlet();
        });
    }
    getOfflineCompany() {
        this.storage.getObject("company").then((data) => {
            if (data != null) {
                this.storageCompany = data;
                this.company = this.storageCompany;
                this.checkExpiredAccount();
            }
            console.log(data);
        });
    }
    checkExpiredAccount() {
        if (this.company.package == "Premium") {
            this.storage.getObject("user").then((data) => {
                if (data != null) {
                    this.user = data.user;
                    console.log("exp " + this.activeOutlet.expired_at);
                    if (this.activeOutlet.expired_at < this.global.getDateOnlyNow()) {
                        console.log("expired");
                        if (data.level == "Owner") {
                            this.router.navigate(["/outlet"]);
                            this.global.toastPresent("masa berlaku paket sudah habis, silahkan lakukan pembelian paket berlangganan!");
                        }
                        else {
                            this.router.navigate(["/inactive"]);
                        }
                    }
                }
                console.log(data);
            });
        }
        else if (this.company.package == "Lite") {
            console.log("Lite");
        }
    }
    getDataOutlet() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.auth.token,
        });
        let options = { headers: reqHeader };
        this.http
            .post(this.global.base_url + "auth/outlet/list/active", null, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                this.storage.setObject("outlet", data.outlet);
                this.outlet = data.outlet.filter((outlet) => outlet.outlet.status === "Active");
                this.getActiveOutlet();
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
    getActiveOutlet() {
        this.storage.getObject("outlet_active").then((data) => {
            if (data != null) {
                this.activeOutlet = data;
                console.log("A", data);
            }
            else {
                this.activeOutlet = this.outlet[0].outlet;
                this.storage.setObject("outlet_active", this.activeOutlet);
                console.log("B", data);
            }
        });
    }
    changeOutlet(outlet) {
        this.activeOutlet = outlet;
        this.storage.setObject("outlet_active", this.activeOutlet);
        this.global.toastPresent("Outlet <strong>" + outlet.name + "</strong> aktif!");
        this.initialize();
        this.menu.close("orderleft");
    }
    syncUpOfflineData() {
        this.showContent = false;
        console.log("total offline", this.orderOffline.length);
        if (this.orderOffline.length > 0) {
            for (let orderId of this.orderOffline) {
                var order = this.storageOrder.find((x) => x.id === orderId);
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + this.auth.token,
                });
                let options = { headers: reqHeader };
                this.http
                    .post(this.global.base_url + "auth/order/store", order, options)
                    .subscribe((data) => {
                    console.log(data);
                    if (data.status == 0) {
                        var offlineIndex = this.orderOffline.findIndex((y) => y === orderId);
                        this.orderOffline.splice(offlineIndex, 1);
                        this.totalOrderOffline = this.orderOffline.length;
                        this.storage.setObject("order_offline", this.orderOffline);
                        if (this.orderOffline.length == 0) {
                            this.global.toastPresentTop("Semua data transaksi berhasil disinkronisasi!", "success");
                            this.getData("online");
                        }
                        console.log(data);
                    }
                    else {
                        console.log(data);
                    }
                }, (error) => {
                    console.log(error);
                    this.global.toastPresentTop('<ion-icon name="sync-outline" color="light"></ion-icon> ' +
                        this.orderOffline.length +
                        " transaksi belum disinkronisasi!", "danger");
                    this.getData("offline");
                });
            }
        }
        else {
            this.getData("online");
        }
    }
    checkThisOrderSync(id) {
        var offlineIndex = this.orderOffline.findIndex((y) => y === id);
        if (offlineIndex > -1) {
            return true;
        }
    }
    getData(mode) {
        if (mode == "online") {
            this.storage.getObject("auth").then((auth) => {
                var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + this.auth.token,
                });
                let options = { headers: reqHeader };
                let postdata = {
                    outlet_id: this.activeOutlet.id,
                    start_date: this.global.parsingDate(this.start_date),
                    end_date: this.global.parsingDate(this.end_date),
                };
                this.http
                    .post(this.global.base_url + "auth/order/last_per_outlet", postdata, options)
                    .subscribe((data) => {
                    if (data.status == 0) {
                        this.order = data.order;
                        this.orderSearch = this.order;
                        this.storage.getObject("filterBy").then((status) => {
                            this.filterStatus(status !== null && status !== void 0 ? status : "All");
                        });
                        this.storage.setObject("order", this.order);
                        if (this.source == "notification") {
                            this.detail(this.id);
                        }
                        console.log(data);
                    }
                    else {
                        console.log(data);
                    }
                    this.showContent = true;
                }, (error) => {
                    console.log(error);
                    this.order = this.storageOrder;
                    this.orderSearch = this.order;
                    this.showContent = true;
                });
            });
        }
        else {
            this.order = this.storageOrder;
            this.orderSearch = this.order;
            this.showContent = true;
        }
    }
    detail(id) {
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
        this.router.navigate(["/orders-detail/" + id + "/list"]);
    }
    filterList(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.orderSearch = this.order;
            const searchTerm = evt.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.orderSearch = this.orderSearch.filter((current) => {
                if (current.order_number && searchTerm) {
                    return (current.order_number.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                        -1);
                }
            });
            console.log(this.orderSearch);
        });
    }
    filterStatus(status) {
        this.orderNumberSearch = "";
        this.storage.removeItem("filterBy");
        if (status == "All") {
            this.orderSearch = this.order;
        }
        else {
            this.orderSearch = this.order;
            this.orderSearch = this.orderSearch.filter((order) => order.status === status);
        }
        console.log("Filter Status", this.orderSearch);
    }
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
        this.storage.clear();
        this.router.navigate(["/login"]);
    }
    openMenuLeft() {
        this.menu.enable(true, "orderleft");
        this.menu.open("orderleft");
    }
    labelStatusIcon(status) {
        if (status == "Pending") {
            return "alert-circle-outline";
        }
        else if (status == "Completed") {
            return "checkmark-circle-outline";
        }
        else if (status == "Canceled") {
            return "close-circle-outline";
        }
    }
    labelStatusColor(status) {
        if (status == "Pending") {
            return "warning";
        }
        else if (status == "Completed") {
            return "success";
        }
        else if (status == "Canceled") {
            return "danger";
        }
    }
    ionViewWillLeave() { }
};
TabOrderPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
TabOrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-tab-order",
        template: _raw_loader_tab_order_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab_order_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabOrderPage);



/***/ })

}]);
//# sourceMappingURL=tab-order-tab-order-module-es2015.js.map