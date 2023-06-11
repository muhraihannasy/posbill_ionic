(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-pos-tab-pos-module"],{

/***/ "8T+6":
/*!*******************************************!*\
  !*** ./src/app/tab-pos/tab-pos.module.ts ***!
  \*******************************************/
/*! exports provided: TabPosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPosPageModule", function() { return TabPosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab_pos_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-pos.page */ "pEsS");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab_pos_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab-pos-routing.module */ "q0oG");








let TabPosPageModule = class TabPosPageModule {
};
TabPosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab_pos_routing_module__WEBPACK_IMPORTED_MODULE_7__["TabPosPageRoutingModule"],
        ],
        declarations: [_tab_pos_page__WEBPACK_IMPORTED_MODULE_5__["TabPosPage"]]
    })
], TabPosPageModule);



/***/ }),

/***/ "pEsS":
/*!*****************************************!*\
  !*** ./src/app/tab-pos/tab-pos.page.ts ***!
  \*****************************************/
/*! exports provided: TabPosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPosPage", function() { return TabPosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab_pos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab-pos.page.html */ "shFE");
/* harmony import */ var _tab_pos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-pos.page.scss */ "zeDb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "fLLL");











const { App } = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"];



const { PushNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"];
let TabPosPage = class TabPosPage {
    constructor(storage, http, global, loadingController, router, nativePageTransitions, platform, menu, alertController, barcodeScanner, route, nativeAudio) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.loadingController = loadingController;
        this.router = router;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.menu = menu;
        this.alertController = alertController;
        this.barcodeScanner = barcodeScanner;
        this.route = route;
        this.nativeAudio = nativeAudio;
        this.company = { name: "" };
        this.totalAmount = 0;
        this.totalQty = 0;
        this.category = [];
        this.storageCategory = [];
        this.product = [];
        this.productSearch = [];
        this.storageProduct = [];
        this.outlet = [];
        this.storageOutlet = [];
        this.cart = [];
        this.orderType = "none";
        this.orderTypeLabel = "none";
        this.activeOutlet = { id: "", name: "", expired_at: "", status: "" };
        this.offline = false;
        this.showContent = false;
        this.user = { name: "", level: "" };
        this.showUser = false;
        this.notificationContent = {
            notification: { data: { entity_name: "", id: "" } },
        };
        this.route.params.subscribe((params) => {
            if (params["source"]) {
                if (params["source"] == "login") {
                    this.initialize();
                }
                if (params["source"] == "register") {
                    this.initialize();
                }
            }
        });
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
    filterList(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.productSearch = this.product;
            const searchTerm = evt.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.productSearch = this.productSearch.filter((current) => {
                if (current.product.name && searchTerm) {
                    return (current.product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                        -1);
                }
            });
            console.log(this.productSearch);
        });
    }
    addOne(item) {
        var checkItemExist = this.cart.findIndex((x) => x.id === item.id);
        if (checkItemExist == -1) {
            this.cart.push({
                id: item.id,
                qty: 1,
                name: item.name,
                cost: item.cost,
                price: item.price,
                note: "",
            });
        }
        else {
            this.cart[checkItemExist].qty++;
        }
        this.totalAmount += item.price;
        this.totalQty++;
        console.log(this.cart);
    }
    removeOne(item) {
        var checkItemExist = this.cart.findIndex((x) => x.id === item.id);
        if (checkItemExist == -1) {
            // nothing
        }
        else {
            this.cart[checkItemExist].qty--;
            this.totalAmount -= item.price;
            this.totalQty--;
            if (this.cart[checkItemExist].qty == 0) {
                this.cart.splice(checkItemExist, 1);
            }
            console.log(checkItemExist);
        }
    }
    recalculate() {
        this.totalAmount = 0;
        this.totalQty = 0;
        for (let i of this.cart) {
            let subtotal = parseInt(i.price) * parseFloat(i.qty);
            this.totalAmount += subtotal;
            this.totalQty += parseFloat(i.qty);
        }
    }
    editDetail(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let thisCart = this.cart.findIndex((cart) => cart.id == item.id);
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: this.cart[thisCart].name,
                inputs: [
                    {
                        name: "qty",
                        type: "number",
                        id: "qty",
                        value: this.cart[thisCart].qty,
                        placeholder: "Qty",
                    },
                    {
                        name: "note",
                        id: "note",
                        value: this.cart[thisCart].note,
                        type: "textarea",
                        placeholder: "Catatan",
                    },
                ],
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: () => {
                            console.log("Confirm Cancel");
                        },
                    },
                    {
                        text: "Ok",
                        handler: (data) => {
                            this.cart[thisCart].qty = data.qty;
                            this.cart[thisCart].note = data.note;
                            this.recalculate();
                            console.log("Confirm Ok");
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    scanBarcode() {
        this.barcodeScanner
            .scan()
            .then((barcodeData) => {
            var findIndex = this.product.findIndex((x) => x.product.sku === barcodeData.text);
            if (findIndex > -1) {
                this.addOne(this.product[findIndex].product);
                this.global.toastPresent(this.product[findIndex].product.name + " telah ditambahkan!");
            }
            else {
                this.global.toastPresent("Tidak ditemukan produk dengan kode " + barcodeData.text);
            }
            console.log(barcodeData);
        })
            .catch((err) => {
            console.log("Error", err);
        });
    }
    clearAll() {
        this.cart = [];
        this.totalAmount = 0;
        this.totalQty = 0;
    }
    showPerItemCart(id) {
        var checkItemExist = this.cart.findIndex((x) => x.id === id);
        if (checkItemExist == -1) {
            return 0;
        }
        else {
            return this.cart[checkItemExist].qty;
        }
    }
    ionViewWillEnter() {
        this.initialize();
    }
    initialize() {
        this.storage.removeItem("pos_order_type");
        this.orderType = "none";
        this.orderTypeLabel = "none";
        this.menu.close("first");
        this.showContent = false;
        this.storage.getObject("auth").then((auth) => {
            this.auth = auth;
            this.storage.getObject("user").then((user) => {
                let thisUser = user;
                this.user = user;
                this.name = thisUser.name;
                this.level = thisUser.level;
                this.showUser = true;
                console.log("ini user", this.user.name);
                this.clearAll();
                this.getOfflineCategory();
                this.getOfflineOutlet();
                this.getOfflineCompany();
                this.getOfflineProduct();
                this.getData();
            });
        });
        let options = {
            direction: "up",
            duration: 300,
            slowdownfactor: 0,
            slidePixels: 0,
            iosdelay: 0,
            androiddelay: 0,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 0,
        };
        this.nativePageTransitions.slide(options);
    }
    getData() {
        this.storage.getObject("auth").then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.auth.token,
            });
            let options = { headers: reqHeader };
            this.http
                .post(this.global.base_url + "auth/category/list", null, options)
                .subscribe((data) => {
                console.log(data);
                if (data.status == 0) {
                    this.storage.setObject("category", data.category);
                    this.category = data.category;
                    this.getDataCompany();
                    this.getDataOutlet();
                    this.offline = false;
                    console.log(data);
                }
                else {
                    console.log(data);
                }
            }, (error) => {
                this.offline = true;
                console.log(error);
            });
        });
    }
    getDataProduct() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.auth.token,
        });
        let options = { headers: reqHeader };
        let postData = { outlet_id: this.activeOutlet.id };
        this.http
            .post(this.global.base_url + "auth/product/list_per_outlet", postData, options)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 0) {
                let products = data.product.filter((product) => product.product != null);
                this.storage.setObject("product", products);
                this.product = products;
                this.productSearch = this.product;
                if (this.product.length > 0) {
                    this.showPOS = true;
                }
                else {
                    this.showPOS = false;
                }
                console.log(data);
                this.showContent = true;
            }
            else {
                console.log(data);
            }
            this.showContent = true;
        }, (error) => {
            console.log(error);
        });
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
    getDataCompany() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.auth.token,
        });
        let options = { headers: reqHeader };
        this.http
            .post(this.global.base_url + "auth/company", null, options)
            .subscribe((data) => {
            console.log(data);
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
    getOfflineCategory() {
        this.storage.getObject("category").then((data) => {
            if (data != null) {
                this.storageCategory = data;
                this.category = this.storageCategory;
                this.getOfflineProduct();
            }
            console.log(data);
        });
    }
    getOfflineProduct() {
        this.storage.getObject("product").then((data) => {
            if (data != null) {
                this.storageProduct = data;
                this.product = this.storageProduct;
                this.productSearch = this.product;
                if (this.product.length > 0) {
                    this.showPOS = true;
                }
                else {
                    this.showPOS = false;
                }
                this.showContent = true;
            }
            console.log(data);
        });
    }
    getOfflineOutlet() {
        this.storage.getObject("outlet").then((data) => {
            if (data != null) {
                this.storageOutlet = data;
                this.outlet = this.storageOutlet.filter((outlet) => outlet.outlet.status === "Active");
                this.getActiveOutlet();
            }
            console.log("Offline outlet", data);
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
    getActiveOutlet() {
        this.storage.getObject("outlet_active").then((data) => {
            if (data != null) {
                let indexActive = this.outlet.findIndex((x) => x.outlet.id === data.id);
                console.log("index", indexActive);
                this.storage.setObject("outlet_active", this.outlet[indexActive].outlet);
                this.activeOutlet = this.outlet[indexActive].outlet;
                this.checkExpiredAccount();
                this.getDataProduct();
                console.log("A", data);
            }
            else {
                this.activeOutlet = this.outlet[0].outlet;
                this.storage.setObject("outlet_active", this.activeOutlet);
                this.checkExpiredAccount();
                console.log("B", data);
            }
        });
    }
    changeOutlet(outlet) {
        this.activeOutlet = outlet;
        this.storage.setObject("outlet_active", this.activeOutlet);
        this.checkExpiredAccount();
        this.global.toastPresent("Outlet <strong>" + outlet.name + "</strong> aktif!");
        this.menu.close("first");
        this.ionViewWillEnter();
    }
    getProductByCategory(category_id) {
        var filterArray = this.productSearch.filter((x) => x.product.category_id === category_id);
        return filterArray;
    }
    showModal(item) {
        alert(item);
    }
    presentLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: "my-custom-class",
                message: message,
                duration: 300,
                mode: "ios",
            });
            yield loading.present();
        });
    }
    process() {
        this.storage.removeItem("pos_booking");
        this.storage.removeItem("pos_discount");
        this.storage.setObject("pos_cart", this.cart);
        var pos_subtotal = { amount: this.totalAmount, qty: this.totalQty };
        var pos_order_type = {
            order_type: this.orderType,
            order_type_label: this.orderTypeLabel,
        };
        this.storage.setObject("pos_subtotal", pos_subtotal);
        this.storage.setObject("pos_order_type", pos_order_type);
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
        this.router.navigate(["/payment-options"]);
    }
    save() {
        this.storage.setObject("pos_cart", this.cart);
        var pos_subtotal = { amount: this.totalAmount, qty: this.totalQty };
        var pos_order_type = {
            order_type: this.orderType,
            order_type_label: this.orderTypeLabel,
        };
        this.storage.setObject("pos_subtotal", pos_subtotal);
        this.storage.setObject("pos_order_type", pos_order_type);
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
        this.router.navigate(["/booking-options"]);
    }
    openMenuLeft() {
        this.menu.enable(true, "first");
        this.menu.open("first");
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
    ionViewWillLeave() { }
    syncOnlineData() { }
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
    setPrice() {
        let thisTemp = this.product;
        this.productSearch = this.product;
        if (this.orderType == "none") {
            if (this.orderType == "none") {
                this.storage.getObject("product").then((product) => {
                    this.product = product;
                    this.productSearch = this.product;
                });
                this.orderTypeLabel == "none";
            }
        }
        else {
            for (var i = 0; i < thisTemp.length; i++) {
                if (this.orderType == 1) {
                    thisTemp[i].product.price = this.product[i].product.price_type1;
                    this.orderTypeLabel = this.company.order_type_label1;
                }
                if (this.orderType == 2) {
                    thisTemp[i].product.price = this.product[i].product.price_type2;
                    this.orderTypeLabel = this.company.order_type_label2;
                }
                if (this.orderType == 3) {
                    thisTemp[i].product.price = this.product[i].product.price_type3;
                    this.orderTypeLabel = this.company.order_type_label3;
                }
                if (this.orderType == 4) {
                    thisTemp[i].product.price = this.product[i].product.price_type4;
                    this.orderTypeLabel = this.company.order_type_label4;
                }
                if (this.orderType == 5) {
                    thisTemp[i].product.price = this.product[i].product.price_type5;
                    this.orderTypeLabel = this.company.order_type_label5;
                }
            }
        }
        this.clearAll();
    }
    logout() {
        this.menu.close("first");
        this.storage.clear().then(() => {
            this.router.navigate(["/launcher"]).then(() => {
                this.router.navigate(["/login"]);
            });
        });
    }
};
TabPosPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_11__["BarcodeScanner"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_12__["NativeAudio"] }
];
TabPosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-tab-pos",
        template: _raw_loader_tab_pos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab_pos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabPosPage);



/***/ }),

/***/ "q0oG":
/*!***************************************************!*\
  !*** ./src/app/tab-pos/tab-pos-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabPosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPosPageRoutingModule", function() { return TabPosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab_pos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-pos.page */ "pEsS");




const routes = [
    {
        path: '',
        component: _tab_pos_page__WEBPACK_IMPORTED_MODULE_3__["TabPosPage"],
    }
];
let TabPosPageRoutingModule = class TabPosPageRoutingModule {
};
TabPosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabPosPageRoutingModule);



/***/ }),

/***/ "shFE":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-pos/tab-pos.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu\r\n  side=\"start\"\r\n  menuId=\"first\"\r\n  contentId=\"main\"\r\n  mode=\"ios\"\r\n  swipe-gesture=\"true\"\r\n>\r\n  <ion-content id=\"main\">\r\n    <div class=\"ion-padding\">\r\n      <ion-text color=\"primary\">{{company.name}}</ion-text>\r\n    </div>\r\n    <ion-item button color=\"primary\" detail=\"false\">\r\n      <ion-icon name=\"storefront-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n      <ion-label>{{activeOutlet.name}}</ion-label>\r\n      <ion-note slot=\"end\">Aktif</ion-note>\r\n    </ion-item>\r\n    <ion-item-divider>\r\n      <small>Daftar outlet</small>\r\n    </ion-item-divider>\r\n\r\n    <ion-item\r\n      *ngFor=\"let item of outlet\"\r\n      class=\"clickable ion-clickable\"\r\n      (click)=\"changeOutlet(item.outlet)\"\r\n      button\r\n    >\r\n      <ion-icon name=\"storefront-outline\" size=\"small\" slot=\"start\"></ion-icon>\r\n      <ion-label><small>{{item.outlet.name}}</small></ion-label>\r\n    </ion-item>\r\n  </ion-content>\r\n  <ion-footer mode=\"ios\" class=\"ion-padding\" *ngIf=\"showContent\">\r\n    <div class=\"ion-text-center\" *ngIf=\"showUser\">{{name}} ({{level}})</div>\r\n    <ion-button\r\n      size=\"small\"\r\n      color=\"danger\"\r\n      expand=\"block\"\r\n      fill=\"link\"\r\n      (click)=\"confirmLogout()\"\r\n      ><ion-icon name=\"power-outline\" slot=\"start\"></ion-icon>\r\n      <ion-text color=\"danger\">Keluar dari akun</ion-text></ion-button\r\n    >\r\n  </ion-footer>\r\n</ion-menu>\r\n\r\n<ion-header mode=\"ios\">\r\n  <div class=\"product-content\">\r\n    <ion-item color=\"danger\" *ngIf=\"offline\">\r\n      <div class=\"ion-text-center\">Anda dalam mode Offline</div>\r\n    </ion-item>\r\n    <ion-toolbar color=\"light\">\r\n      <ion-buttons slot=\"start\" style=\"margin-top: 10px; margin-left: 15px\">\r\n        <ion-button size=\"small\" (click)=\"openMenuLeft()\"\r\n          ><ion-icon name=\"storefront-outline\"></ion-icon\r\n        ></ion-button>\r\n      </ion-buttons>\r\n\r\n      <ion-searchbar\r\n        class=\"search-pos\"\r\n        (ionInput)=\"filterList($event)\"\r\n        placeholder=\"Cari di outlet {{activeOutlet.name}}\"\r\n      ></ion-searchbar>\r\n\r\n      <ion-buttons slot=\"end\" style=\"margin-top: 10px\">\r\n        <ion-select\r\n          interface=\"popover\"\r\n          class=\"type-order-tab\"\r\n          [(ngModel)]=\"orderType\"\r\n          (ionChange)=\"setPrice()\"\r\n        >\r\n          <ion-select-option value=\"none\">- Jenis pesanan -</ion-select-option>\r\n          <ion-select-option *ngIf=\"company.order_type1\" value=\"1\"\r\n            >{{company.order_type_label1}}</ion-select-option\r\n          >\r\n          <ion-select-option *ngIf=\"company.order_type2\" value=\"2\"\r\n            >{{company.order_type_label2}}</ion-select-option\r\n          >\r\n          <ion-select-option *ngIf=\"company.order_type3\" value=\"3\"\r\n            >{{company.order_type_label3}}</ion-select-option\r\n          >\r\n          <ion-select-option *ngIf=\"company.order_type4\" value=\"4\"\r\n            >{{company.order_type_label4}}</ion-select-option\r\n          >\r\n          <ion-select-option *ngIf=\"company.order_type5\" value=\"5\"\r\n            >{{company.order_type_label5}}</ion-select-option\r\n          >\r\n        </ion-select>\r\n\r\n        <ion-button size=\"small\" (click)=\"scanBarcode()\"\r\n          ><ion-icon name=\"scan-outline\"></ion-icon\r\n        ></ion-button>\r\n        <ion-button size=\"small\" [routerLink]=\"['/booking']\"\r\n          ><ion-icon name=\"save-outline\"></ion-icon\r\n        ></ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-item lines=\"full\" color=\"primary\" class=\"type-order-mobile\">\r\n      <ion-label color=\"light\">Jenis pesanan</ion-label>\r\n      <ion-select\r\n        interface=\"popover\"\r\n        [(ngModel)]=\"orderType\"\r\n        (ionChange)=\"setPrice()\"\r\n      >\r\n        <ion-select-option value=\"none\">-</ion-select-option>\r\n        <ion-select-option *ngIf=\"company.order_type1\" value=\"1\"\r\n          >{{company.order_type_label1}}</ion-select-option\r\n        >\r\n        <ion-select-option *ngIf=\"company.order_type2\" value=\"2\"\r\n          >{{company.order_type_label2}}</ion-select-option\r\n        >\r\n        <ion-select-option *ngIf=\"company.order_type3\" value=\"3\"\r\n          >{{company.order_type_label3}}</ion-select-option\r\n        >\r\n        <ion-select-option *ngIf=\"company.order_type4\" value=\"4\"\r\n          >{{company.order_type_label4}}</ion-select-option\r\n        >\r\n        <ion-select-option *ngIf=\"company.order_type5\" value=\"5\"\r\n          >{{company.order_type_label5}}</ion-select-option\r\n        >\r\n      </ion-select>\r\n    </ion-item>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" *ngIf=\"showPOS && showContent\">\r\n  <div class=\"product-content\">\r\n    <div class=\"list\">\r\n      <ion-item-group *ngFor=\"let catItem of category\">\r\n        <ion-item-divider\r\n          color=\"light\"\r\n          *ngIf=\"getProductByCategory(catItem.id).length > 0\"\r\n        >\r\n          <ion-label>{{catItem.name}}</ion-label>\r\n        </ion-item-divider>\r\n        <ion-item-sliding *ngFor=\"let item of getProductByCategory(catItem.id)\">\r\n          <ion-item lines=\"full\" button detail=\"false\" class=\"no-hover\">\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"{{item.product.image}}\" *ngIf=\"!offline\" />\r\n              <div class=\"text-avatar\" *ngIf=\"offline\">\r\n                {{item.product.name.charAt(0).toUpperCase()}}\r\n              </div>\r\n            </ion-avatar>\r\n            <ion-label\r\n              (click)=\"addOne(item.product)\"\r\n              class=\"ion-text-wrap\"\r\n              style=\"line-height: 14px\"\r\n              >{{item.product.name}}<br />\r\n              <small>\r\n                <ion-note color=\"primary\"\r\n                  >{{global.currency(item.product.price)}}\r\n                  <ion-text *ngIf=\"item.product.unit != null\">\r\n                    / {{item.product.unit.suffix}}</ion-text\r\n                  ></ion-note\r\n                ><br />\r\n                <ion-note *ngIf=\"item.product.track_stock == 1\" color=\"dark\"\r\n                  >Stok: {{item.stock}}</ion-note\r\n                >\r\n              </small>\r\n            </ion-label>\r\n\r\n            <ion-note\r\n              slot=\"end\"\r\n              color=\"primary\"\r\n              style=\"text-align: right; padding-top: 5px\"\r\n            >\r\n              <div\r\n                style=\"\r\n                  display: inline-block;\r\n                  width: 36px;\r\n                  height: 20px;\r\n                  text-align: center;\r\n                \"\r\n              >\r\n                <ion-icon\r\n                  name=\"remove-circle-outline\"\r\n                  color=\"primary\"\r\n                  style=\"font-size: 26px\"\r\n                  (click)=\"removeOne(item.product)\"\r\n                ></ion-icon>\r\n              </div>\r\n              <div\r\n                style=\"\r\n                  display: inline-block;\r\n                  width: 36px;\r\n                  height: 20px;\r\n                  text-align: center;\r\n                  color: #333;\r\n                \"\r\n              >\r\n                <p style=\"font-size: 14px; line-height: 8px\">\r\n                  {{showPerItemCart(item.product.id)}}<br />&nbsp;\r\n                </p>\r\n              </div>\r\n              <div\r\n                style=\"\r\n                  display: inline-block;\r\n                  width: 36px;\r\n                  height: 20px;\r\n                  text-align: center;\r\n                \"\r\n              >\r\n                <ion-icon\r\n                  name=\"add-circle-outline\"\r\n                  color=\"primary\"\r\n                  style=\"font-size: 26px\"\r\n                  (click)=\"addOne(item.product)\"\r\n                ></ion-icon>\r\n              </div>\r\n              <ion-icon\r\n                *ngIf=\"showPerItemCart(item.product.id) > 0\"\r\n                style=\"font-size: 26px\"\r\n                name=\"create-outline\"\r\n                (click)=\"editDetail(item.product)\"\r\n              ></ion-icon>\r\n              <ion-icon\r\n                *ngIf=\"showPerItemCart(item.product.id) < 1\"\r\n                style=\"font-size: 26px\"\r\n                name=\"create-outline\"\r\n                color=\"light\"\r\n              ></ion-icon>\r\n            </ion-note>\r\n\r\n            <!-- <ion-note slot=\"end\"><small>{{showPerItemCart(item.id)}}</small></ion-note> -->\r\n          </ion-item>\r\n          <!-- <ion-item-options side=\"end\">\r\n      <ion-item-option color=\"light\" (click)=\"notes(item)\"><ion-icon name=\"list-outline\"></ion-icon></ion-item-option>\r\n    </ion-item-options> -->\r\n        </ion-item-sliding>\r\n      </ion-item-group>\r\n    </div>\r\n    <div class=\"grid\">\r\n      <div\r\n        class=\"item-product\"\r\n        (click)=\"addOne(item.product)\"\r\n        *ngFor=\"let item of productSearch\"\r\n      >\r\n        <div class=\"image\">\r\n          <img src=\"{{item.product.image}}\" *ngIf=\"!offline\" />\r\n          <div class=\"grid-text-avatar\" *ngIf=\"offline\">\r\n            {{item.product.name.charAt(0).toUpperCase()}}{{item.product.name.charAt(1).toUpperCase()}}\r\n          </div>\r\n        </div>\r\n        <div class=\"label\">\r\n          {{item.product.name}}<br />\r\n          <ion-text color=\"primary\"\r\n            >{{global.currency(item.product.price)}}</ion-text\r\n          >\r\n          <br /><br />\r\n          <ion-note *ngIf=\"item.product.track_stock == 1\" class=\"ion-margin-top\"\r\n            >Stok: {{item.stock}}</ion-note\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"side-cart ion-padding\">\r\n    <div style=\"height: 50px; font-weight: bold\">\r\n      <ion-text color=\"primary\">{{company.name}}</ion-text>\r\n    </div>\r\n    <div class=\"item-list\">\r\n      <ion-list>\r\n        <ion-item-sliding *ngFor=\"let item of cart\">\r\n          <ion-item lines=\"full\">\r\n            <ion-label class=\"ion-text-wrap\">{{item.name}}</ion-label>\r\n            <!-- <ion-note slot=\"end\" color=\"primary\">{{item.qty}}</ion-note> -->\r\n            <ion-note\r\n              slot=\"end\"\r\n              color=\"primary\"\r\n              style=\"text-align: right; padding-top: 5px\"\r\n            >\r\n              <div\r\n                style=\"\r\n                  display: inline-block;\r\n                  width: 36px;\r\n                  height: 20px;\r\n                  text-align: center;\r\n                \"\r\n              >\r\n                <ion-icon\r\n                  name=\"remove-circle-outline\"\r\n                  color=\"primary\"\r\n                  style=\"font-size: 26px\"\r\n                  (click)=\"removeOne(item)\"\r\n                ></ion-icon>\r\n              </div>\r\n              <div\r\n                style=\"\r\n                  display: inline-block;\r\n                  width: 36px;\r\n                  height: 20px;\r\n                  text-align: center;\r\n                  color: #333;\r\n                \"\r\n              >\r\n                <p style=\"font-size: 14px; line-height: 8px\">\r\n                  {{item.qty}}<br />&nbsp;\r\n                </p>\r\n              </div>\r\n              <div\r\n                style=\"\r\n                  display: inline-block;\r\n                  width: 36px;\r\n                  height: 20px;\r\n                  text-align: center;\r\n                \"\r\n              >\r\n                <ion-icon\r\n                  name=\"add-circle-outline\"\r\n                  color=\"primary\"\r\n                  style=\"font-size: 26px\"\r\n                  (click)=\"addOne(item)\"\r\n                ></ion-icon>\r\n              </div>\r\n              <ion-icon\r\n                style=\"font-size: 26px\"\r\n                name=\"create-outline\"\r\n                (click)=\"editDetail(item)\"\r\n              ></ion-icon>\r\n            </ion-note>\r\n          </ion-item>\r\n\r\n          <ion-item-options side=\"end\">\r\n            <ion-item-option color=\"light\" (click)=\"removeOne(item)\"\r\n              ><ion-icon name=\"remove-outline\"></ion-icon\r\n            ></ion-item-option>\r\n            <ion-item-option color=\"light\" (click)=\"addOne(item)\">\r\n              <ion-icon name=\"add-outline\"></ion-icon\r\n            ></ion-item-option>\r\n            <ion-item-option color=\"light\" (click)=\"editDetail(item)\">\r\n              <ion-icon name=\"create-outline\"></ion-icon\r\n            ></ion-item-option>\r\n          </ion-item-options>\r\n        </ion-item-sliding>\r\n      </ion-list>\r\n    </div>\r\n\r\n    <div class=\"side-cart-footer\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\"\r\n            ><ion-button\r\n              color=\"danger\"\r\n              fill=\"outline\"\r\n              size=\"small\"\r\n              expand=\"block\"\r\n              (click)=\"clearAll()\"\r\n              ><ion-icon\r\n                color=\"danger\"\r\n                name=\"close-outline\"\r\n              ></ion-icon></ion-button\r\n          ></ion-col>\r\n          <ion-col size=\"8\"\r\n            ><ion-button\r\n              expand=\"block\"\r\n              size=\"small\"\r\n              color=\"dark\"\r\n              (click)=\"save()\"\r\n              [disabled]=\"totalAmount==0\"\r\n              ><ion-icon name=\"save-outline\" slot=\"start\"></ion-icon\r\n              >Book</ion-button\r\n            ></ion-col\r\n          >\r\n          <ion-col\r\n            ><ion-button\r\n              expand=\"block\"\r\n              color=\"primary\"\r\n              (click)=\"process()\"\r\n              [disabled]=\"totalAmount==0\"\r\n              >{{global.currency(totalAmount)}}\r\n              <ion-badge slot=\"end\">({{totalQty}})</ion-badge></ion-button\r\n            ></ion-col\r\n          >\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"showContent && !showPOS\" class=\"ion-padding\" mode=\"ios\">\r\n  <div style=\"padding: 15%; text-align: center\">\r\n    <h5>\r\n      <ion-icon size=\"large\" name=\"happy-outline\"></ion-icon> <br /><br />\r\n      Opps!!, sepertinya kamu belum punya katalog produk nih, yuk tambahkan\r\n      katalog pertama kamu sekarang\r\n      <br /><br />\r\n      <ion-button\r\n        [routerLink]=\"['/tabs/tab-catalog']\"\r\n        color=\"primary\"\r\n        fill=\"outline\"\r\n        >ke Katalog Yuk</ion-button\r\n      >\r\n    </h5>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer mode=\"ios\" *ngIf=\"showPOS\" class=\"phone-mode-footer\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"2\"\r\n        ><ion-button color=\"light\" expand=\"block\" (click)=\"clearAll()\"\r\n          ><ion-icon color=\"danger\" name=\"close-outline\"></ion-icon></ion-button\r\n      ></ion-col>\r\n      <ion-col size=\"4\"\r\n        ><ion-button\r\n          expand=\"block\"\r\n          color=\"light\"\r\n          (click)=\"save()\"\r\n          [disabled]=\"totalAmount==0\"\r\n          ><ion-icon name=\"save-outline\" slot=\"start\"></ion-icon\r\n          >Book</ion-button\r\n        ></ion-col\r\n      >\r\n      <ion-col size=\"6\"\r\n        ><ion-button\r\n          expand=\"block\"\r\n          color=\"primary\"\r\n          (click)=\"process()\"\r\n          [disabled]=\"totalAmount==0\"\r\n          >{{global.currency(totalAmount)}}\r\n          <ion-badge slot=\"end\">({{totalQty}})</ion-badge></ion-button\r\n        ></ion-col\r\n      >\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "zeDb":
/*!*******************************************!*\
  !*** ./src/app/tab-pos/tab-pos.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clickable {\n  pointer-events: auto !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.ion-margin-top {\n  font-size: 1.2em;\n  color: #000;\n}\n\n@media screen and (min-width: 720px) {\n  .product-content {\n    width: 65%;\n    float: left;\n  }\n\n  .product-content .list {\n    visibility: hidden;\n    display: none;\n  }\n\n  .product-content .grid {\n    visibility: visible;\n  }\n\n  .product-content .grid .item-product {\n    height: 220px;\n    width: 24%;\n    margin: 0.5%;\n    float: left;\n    border: 1px solid #f5f5f5;\n    cursor: pointer;\n  }\n\n  .product-content .grid .item-product .image {\n    background: #f5f5f5;\n    height: 140px;\n    overflow: hidden;\n  }\n\n  .product-content .grid .item-product .label {\n    padding: 10px;\n    text-align: center;\n    font-size: 70%;\n  }\n\n  .product-content .grid .item-product .grid-text-avatar {\n    padding: 20px;\n    padding-top: 40px;\n    font-size: 50px;\n    color: #666;\n    text-align: center;\n  }\n\n  .side-cart {\n    background-color: #f5f5f5;\n    width: 35%;\n    border-left: 2px solid #ddd;\n    height: 100%;\n    position: fixed;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    overflow: scroll;\n  }\n\n  .side-cart .item-list {\n    height: 65%;\n    overflow: scroll;\n  }\n\n  .side-cart-footer {\n    width: 100%;\n    right: 0;\n    bottom: 0;\n  }\n\n  .phone-mode-footer {\n    display: none;\n  }\n\n  .type-order-tab {\n    visibility: visible;\n    display: inherit;\n  }\n\n  .type-order-mobile {\n    visibility: hidden;\n    display: none;\n  }\n\n  .search-pos {\n    margin-top: 10px;\n    margin-left: 5px;\n    width: 300px;\n  }\n}\n\n@media screen and (max-width: 719px) {\n  .product-content {\n    width: 100%;\n    float: none;\n  }\n\n  .product-content .list {\n    visibility: visible;\n  }\n\n  .product-content .grid {\n    visibility: hidden;\n    display: none;\n  }\n\n  .side-cart {\n    visibility: hidden;\n    display: none;\n  }\n\n  .phone-mode-footer {\n    display: block;\n  }\n\n  .type-order-tab {\n    visibility: hidden;\n    display: none;\n  }\n\n  .type-order-mobile {\n    visibility: visible;\n    display: block;\n  }\n\n  .search-pos {\n    margin-top: 10px;\n    margin-left: 5px;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYi1wb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7RUFDRjs7RUFFQTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtFQUNGOztFQUVBO0lBQ0UsbUJBQUE7RUFDRjs7RUFFQTtJQUNFLGFBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7RUFDRjs7RUFFQTtJQUNFLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VBQ0Y7O0VBRUE7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VBQ0Y7O0VBRUE7SUFDRSx5QkFBQTtJQUNBLFVBQUE7SUFDQSwyQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0EsZ0JBQUE7RUFDRjs7RUFFQTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQUNGOztFQUVBO0lBQ0UsV0FBQTtJQUVBLFFBQUE7SUFDQSxTQUFBO0VBQUY7O0VBR0E7SUFDRSxhQUFBO0VBQUY7O0VBR0E7SUFDRSxtQkFBQTtJQUNBLGdCQUFBO0VBQUY7O0VBR0E7SUFDRSxrQkFBQTtJQUNBLGFBQUE7RUFBRjs7RUFHQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFdBQUE7RUFERjs7RUFJQTtJQUNFLG1CQUFBO0VBREY7O0VBSUE7SUFDRSxrQkFBQTtJQUNBLGFBQUE7RUFERjs7RUFJQTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtFQURGOztFQUlBO0lBQ0UsY0FBQTtFQURGOztFQUlBO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0VBREY7O0VBSUE7SUFDRSxtQkFBQTtJQUNBLGNBQUE7RUFERjs7RUFJQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VBREY7QUFDRiIsImZpbGUiOiJ0YWItcG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGlja2FibGUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW9uLW1hcmdpbi10b3Age1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgLnByb2R1Y3QtY29udGVudCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1jb250ZW50IC5saXN0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1jb250ZW50IC5ncmlkIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1jb250ZW50IC5ncmlkIC5pdGVtLXByb2R1Y3Qge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIHdpZHRoOiAyNCU7XHJcbiAgICBtYXJnaW46IDAuNSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1jb250ZW50IC5ncmlkIC5pdGVtLXByb2R1Y3QgLmltYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWNvbnRlbnQgLmdyaWQgLml0ZW0tcHJvZHVjdCAubGFiZWwge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3QtY29udGVudCAuZ3JpZCAuaXRlbS1wcm9kdWN0IC5ncmlkLXRleHQtYXZhdGFyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnNpZGUtY2FydCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RkZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcblxyXG4gIC5zaWRlLWNhcnQgLml0ZW0tbGlzdCB7XHJcbiAgICBoZWlnaHQ6IDY1JTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgfVxyXG5cclxuICAuc2lkZS1jYXJ0LWZvb3RlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLnBob25lLW1vZGUtZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAudHlwZS1vcmRlci10YWIge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICAudHlwZS1vcmRlci1tb2JpbGUge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtcG9zIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzE5cHgpIHtcclxuICAucHJvZHVjdC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1jb250ZW50IC5saXN0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1jb250ZW50IC5ncmlkIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2lkZS1jYXJ0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucGhvbmUtbW9kZS1mb290ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAudHlwZS1vcmRlci10YWIge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC50eXBlLW9yZGVyLW1vYmlsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLXBvcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=tab-pos-tab-pos-module-es2015.js.map