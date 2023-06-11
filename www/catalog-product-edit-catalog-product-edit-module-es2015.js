(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog-product-edit-catalog-product-edit-module"],{

/***/ "0x2S":
/*!*****************************************************************************!*\
  !*** ./src/app/catalog-product-edit/catalog-product-edit-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CatalogProductEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogProductEditPageRoutingModule", function() { return CatalogProductEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _catalog_product_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog-product-edit.page */ "Zg1+");




const routes = [
    {
        path: '',
        component: _catalog_product_edit_page__WEBPACK_IMPORTED_MODULE_3__["CatalogProductEditPage"]
    }
];
let CatalogProductEditPageRoutingModule = class CatalogProductEditPageRoutingModule {
};
CatalogProductEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CatalogProductEditPageRoutingModule);



/***/ }),

/***/ "2019":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalog-product-edit/catalog-product-edit.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/catalog-product']\"\r\n        ><ion-icon name=\"arrow-back-outline\"></ion-icon\r\n      ></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Ubah produk</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"link\" color=\"danger\" (click)=\"deleteConfirm()\"\r\n        ><ion-icon name=\"trash-outline\" color=\"danger\"></ion-icon\r\n      ></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" mode=\"ios\" *ngIf=\"showContent\">\r\n  <div\r\n    (click)=\"takePicture()\"\r\n    style=\"\r\n      width: 200px;\r\n      height: 200px;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      margin-bottom: 20px;\r\n      border-radius: 5px;\r\n      overflow: hidden;\r\n      border: 1px #f5f5f5 solid;\r\n    \"\r\n  >\r\n    <img src=\"{{product.image}}\" />\r\n  </div>\r\n\r\n  <ion-item lines=\"inset\">\r\n    <ion-label color=\"primary\"><small>Kategori*</small></ion-label>\r\n    <ion-select\r\n      interface=\"action-sheet\"\r\n      [(ngModel)]=\"product.category_id\"\r\n      name=\"category_id\"\r\n    >\r\n      <ion-select-option *ngFor=\"let item of category\" value=\"{{item.id}}\"\r\n        >{{item.name}}</ion-select-option\r\n      >\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">SKU</ion-label>\r\n    <ion-input\r\n      type=\"text\"\r\n      [(ngModel)]=\"product.sku\"\r\n      name=\"sku\"\r\n      autocapitalize=\"on\"\r\n      readonly\r\n    ></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">Nama produk*</ion-label>\r\n    <ion-input\r\n      type=\"text\"\r\n      [(ngModel)]=\"product.name\"\r\n      name=\"name\"\r\n      autocapitalize=\"on\"\r\n    ></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">Deskripsi</ion-label>\r\n    <ion-textarea\r\n      [(ngModel)]=\"product.description\"\r\n      name=\"description\"\r\n      autocapitalize=\"on\"\r\n    ></ion-textarea>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">Modal</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"product.cost\" name=\"cost\"></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\">\r\n    <ion-label position=\"stacked\" color=\"primary\">Harga*</ion-label>\r\n    <ion-input\r\n      type=\"number\"\r\n      [(ngModel)]=\"product.price\"\r\n      name=\"price\"\r\n    ></ion-input>\r\n  </ion-item>\r\n  <br />\r\n  <ion-item-divider> Harga per tipe pesanan </ion-item-divider>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type1\">\r\n    <ion-label position=\"stacked\" color=\"primary\"\r\n      >{{company.order_type_label1}}</ion-label\r\n    >\r\n    <ion-input\r\n      type=\"number\"\r\n      [(ngModel)]=\"product.price_type1\"\r\n      name=\"price_type1\"\r\n    ></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type2\">\r\n    <ion-label position=\"stacked\" color=\"primary\"\r\n      >{{company.order_type_label2}}</ion-label\r\n    >\r\n    <ion-input\r\n      type=\"number\"\r\n      [(ngModel)]=\"product.price_type2\"\r\n      name=\"price_type2\"\r\n    ></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type3\">\r\n    <ion-label position=\"stacked\" color=\"primary\"\r\n      >{{company.order_type_label3}}</ion-label\r\n    >\r\n    <ion-input\r\n      type=\"number\"\r\n      [(ngModel)]=\"product.price_type3\"\r\n      name=\"price_type3\"\r\n    ></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type4\">\r\n    <ion-label position=\"stacked\" color=\"primary\"\r\n      >{{company.order_type_label4}}</ion-label\r\n    >\r\n    <ion-input\r\n      type=\"number\"\r\n      [(ngModel)]=\"product.price_type4\"\r\n      name=\"price_type4\"\r\n    ></ion-input>\r\n  </ion-item>\r\n  <ion-item lines=\"none\" *ngIf=\"company.order_type5\">\r\n    <ion-label position=\"stacked\" color=\"primary\"\r\n      >{{company.order_type_label5}}</ion-label\r\n    >\r\n    <ion-input\r\n      type=\"number\"\r\n      [(ngModel)]=\"product.price_type5\"\r\n      name=\"price_type5\"\r\n    ></ion-input>\r\n  </ion-item>\r\n  <br />\r\n  <ion-item-divider>\r\n    Ketersediaan & Inventori &nbsp;\r\n    <small><ion-text color=\"danger\">Beta</ion-text></small>\r\n  </ion-item-divider>\r\n\r\n  <ion-item>\r\n    <ion-label>Aktifkan inventori </ion-label>\r\n    <ion-toggle\r\n      name=\"track_stock\"\r\n      [(ngModel)]=\"product.trace_stock\"\r\n      (ionChange)=\"coba($event)\"\r\n    ></ion-toggle>\r\n  </ion-item>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n          <small>Outle t</small>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"3\" *ngIf=\"product.track_stock\">\r\n        <ion-item lines=\"none\">\r\n          <small>Stok saat ini</small>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngFor=\"let item of product.stock\">\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-checkbox slot=\"start\" [(ngModel)]=\"item.enabled\"></ion-checkbox>\r\n          <ion-label class=\"ion-text-wrap\"\r\n            >{{item.name}} {{item.stock}}</ion-label\r\n          >\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align: right\" *ngIf=\"product.track_stock\">\r\n        <ion-input\r\n          style=\"text-align: center; margin-top: 5px\"\r\n          name=\"outlet_stock[]\"\r\n          type=\"number\"\r\n          value=\"{{item.stock}}\"\r\n          readonly\r\n        ></ion-input\r\n      ></ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col\r\n        ><ion-button\r\n          color=\"light\"\r\n          size=\"small\"\r\n          expand=\"block\"\r\n          [routerLink]=\"['/catalog-product-stock/'+id+'/addition']\"\r\n          >Penambahan stok</ion-button\r\n        ></ion-col\r\n      >\r\n      <ion-col\r\n        ><ion-button\r\n          color=\"light\"\r\n          size=\"small\"\r\n          expand=\"block\"\r\n          [routerLink]=\"['/catalog-product-stock/'+id+'/deduction']\"\r\n          readonly\r\n          >Pengurangan stok</ion-button\r\n        ></ion-col\r\n      >\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\">\r\n  <ion-button expand=\"block\" (click)=\"process()\">Simpan</ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "HvcT":
/*!*********************************************************************!*\
  !*** ./src/app/catalog-product-edit/catalog-product-edit.module.ts ***!
  \*********************************************************************/
/*! exports provided: CatalogProductEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogProductEditPageModule", function() { return CatalogProductEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _catalog_product_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalog-product-edit-routing.module */ "0x2S");
/* harmony import */ var _catalog_product_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalog-product-edit.page */ "Zg1+");







let CatalogProductEditPageModule = class CatalogProductEditPageModule {
};
CatalogProductEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _catalog_product_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatalogProductEditPageRoutingModule"]
        ],
        declarations: [_catalog_product_edit_page__WEBPACK_IMPORTED_MODULE_6__["CatalogProductEditPage"]]
    })
], CatalogProductEditPageModule);



/***/ }),

/***/ "YLuS":
/*!*********************************************************************!*\
  !*** ./src/app/catalog-product-edit/catalog-product-edit.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRhbG9nLXByb2R1Y3QtZWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Zg1+":
/*!*******************************************************************!*\
  !*** ./src/app/catalog-product-edit/catalog-product-edit.page.ts ***!
  \*******************************************************************/
/*! exports provided: CatalogProductEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogProductEditPage", function() { return CatalogProductEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_catalog_product_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./catalog-product-edit.page.html */ "2019");
/* harmony import */ var _catalog_product_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog-product-edit.page.scss */ "YLuS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");












const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"];


let CatalogProductEditPage = class CatalogProductEditPage {
    constructor(router, toastCtrl, storage, http, global, navController, route, transfer, file, alertController) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.navController = navController;
        this.route = route;
        this.transfer = transfer;
        this.file = file;
        this.alertController = alertController;
        this.product = {
            id: "",
            sku: "",
            category_id: "",
            name: "",
            description: "",
            cost: 0,
            price: 0,
            price_type1: "",
            price_type2: "",
            price_type3: "",
            price_type4: "",
            price_type5: "",
            track_stock: false,
            stock: [],
            image: "assets/no-image.png",
        };
        this.storageProduct = [];
        this.storageCategory = [];
        this.storageOutlet = [];
        this.outlet = [];
        this.stockOutlet = [];
        this.company = {
            order_type1: 0,
            order_type2: 0,
            order_type3: 0,
            order_type4: 0,
            order_type5: 0,
            order_type_label1: "",
            order_type_label2: "",
            order_type_label3: "",
            order_type_label4: "",
            order_type_label5: "",
            track_stockc: "",
        };
        this.showContent = false;
        this.stock = [];
        this.route.params.subscribe((params) => {
            if (params["id"]) {
                this.id = params["id"];
            }
        });
    }
    ngOnInit() {
        console.log(this.product.track_stock, "data track stock ni ");
    }
    ionViewWillEnter() {
        this.storage.getObject("auth").then((auth) => {
            this.auth = auth;
            this.getDataCompany();
            this.getData();
        });
        this.storage.getObject("status_inventory").then((data) => {
            this.product.track_stock = data;
            console.log("data dari localstorage", data);
        });
    }
    getOfflineOutlet() {
        this.storage.getObject("outlet").then((data) => {
            if (data != null) {
                this.storageOutlet = data;
                this.outlet = this.storageOutlet.filter((outlet) => outlet.outlet.status === "Active");
                var pushOutlet = [];
                for (let item of this.outlet) {
                    var thisStock = this.product.stock.filter((stock) => stock.outlet_id === item.outlet.id);
                    pushOutlet.push({
                        id: item.outlet.id,
                        name: item.outlet.name,
                        enabled: 1,
                        stock: 0,
                    });
                }
                this.stockOutlet = pushOutlet;
                console.log(this.stockOutlet);
            }
            console.log("Offline outlet", data);
        });
    }
    getDataCompany() {
        this.global.loadingPresent("mengambil data...");
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.auth.token,
        });
        let options = { headers: reqHeader };
        this.http
            .post(this.global.base_url + "auth/setting/data", null, options)
            .subscribe((data) => {
            if (data.status == 0) {
                this.company = data.company;
                this.getDataCategory();
            }
            else {
            }
        }, (error) => {
            console.log(error);
        });
    }
    getDataCategory() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.auth.token,
        });
        let options = { headers: reqHeader };
        this.http
            .post(this.global.base_url + "auth/category/list", null, options)
            .subscribe((data) => {
            if (data.status == 0) {
                this.category = data.category;
                this.getData();
            }
            else {
            }
        }, (error) => {
            console.log(error);
        });
    }
    getData() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.auth.token,
        });
        let options = { headers: reqHeader };
        let postData = { id: this.id };
        this.http
            .post(this.global.base_url + "auth/product/detail", postData, options)
            .subscribe((data) => {
            const status = data.product.track_stock == 1 ? true : false;
            if (data.status == 0) {
                this.storage.setObject("status_inventory", status);
                this.product = data.product;
                this.getOfflineOutlet();
            }
            else {
            }
            this.global.loadingDismiss();
            this.showContent = true;
        }, (error) => {
            console.log(error);
        });
    }
    process() {
        if (this.product.name == "" ||
            this.product.category_id == "" ||
            this.product.price < 1) {
            this.global.toastPresent("Mohon lengkapi form yang wajib diisi!");
            return false;
        }
        this.global.loadingPresent("menyimpan produk...");
        this.storage.getObject("auth").then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.auth.token,
            });
            let options = { headers: reqHeader };
            let postData = {
                id: this.id,
                name: this.product.name,
                category_id: this.product.category_id,
                description: this.product.description,
                cost: this.product.cost,
                price: this.product.price,
                image: this.product.image,
                track_stock: this.product.track_stock,
                price_type1: this.product.price_type1,
                price_type2: this.product.price_type2,
                price_type3: this.product.price_type3,
                price_type4: this.product.price_type4,
                price_type5: this.product.price_type5,
                stock_outlet: this.product.stock,
            };
            this.http
                .post(this.global.base_url + "auth/product/edit", postData, options)
                .subscribe((data) => {
                var _a;
                this.product.track_stock = (_a = this.product.track_stock) !== null && _a !== void 0 ? _a : false;
                if (data.status == 0) {
                    this.global.toastPresent(data.message);
                    this.router.navigate(["/catalog-product"]);
                }
                else {
                }
                this.global.loadingDismiss();
            }, (error) => {
                console.log(error);
            });
        });
    }
    deleteConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Konfirmasi hapus!",
                message: "Anda yakin menghapus data ini?",
                buttons: [
                    {
                        text: "Batal",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: (blah) => {
                            console.log("Confirm Cancel: blah");
                        },
                    },
                    {
                        text: "Hapus",
                        handler: () => {
                            this.delete();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    delete() {
        this.global.loadingPresent("menghapus produk...");
        this.storage.getObject("auth").then((auth) => {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.auth.token,
            });
            let options = { headers: reqHeader };
            let postData = {
                id: this.id,
            };
            this.http
                .post(this.global.base_url + "auth/product/delete", postData, options)
                .subscribe((data) => {
                if (data.status == 0) {
                    this.global.toastPresent(data.message);
                    this.router.navigate(["/catalog-product"]);
                }
                else {
                }
                this.global.loadingDismiss();
            }, (error) => {
                console.log(error);
            });
        });
    }
    isOutletEnabled(outlet_id) {
        var thisStock = this.product.stock.filter((stock) => stock.outlet_id === outlet_id);
        // console.log(thisStock);
        // console.log(outlet_id);
        if (thisStock[0].is_enabled == 1) {
            return true;
        }
        else {
            return false;
        }
    }
    currentStock(outlet_id) {
        var thisStock = this.product.stock.filter((stock) => stock.outlet_id === outlet_id);
        // console.log(thisStock[0].stock);
        return thisStock[0].stock;
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CameraResultType"].Uri,
            });
            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            let imageUrl = image.webPath;
            // Can be set to the src of an image now
            this.product.image = imageUrl;
            const fileTransfer = this.transfer.create();
            let options = {
                fileKey: "image",
                chunkedMode: false,
                headers: { Connection: "close" },
            };
            this.global.loadingPresent("Mengupload file...");
            fileTransfer
                .upload(image.path, this.global.base_url + "auth/product/upload", options)
                .then((data) => {
                // success
                this.global.loadingDismiss();
                this.product.image = data.response;
            }, (err) => {
                // error
                console.log(err);
            });
        });
    }
    coba(event) {
        const status = event.target.checked;
        this.product.track_stock = status;
        this.storage.setObject("status_inventory", status);
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.auth.token,
        });
        let options = { headers: reqHeader };
        const postDaata = { track_stock: status == true ? 1 : 0 };
        this.http
            .post(this.global.base_url + "auth/product/stock_inventory_update/" + this.id, postDaata, options)
            .subscribe((data) => {
            const status = data.track_stock == 1 ? true : false;
            this.storage.setObject("status_inventory", status);
            this.product.track_stock = status;
        }, (error) => {
            console.log(error);
        });
    }
};
CatalogProductEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
CatalogProductEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-catalog-product-edit",
        template: _raw_loader_catalog_product_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_catalog_product_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CatalogProductEditPage);



/***/ })

}]);
//# sourceMappingURL=catalog-product-edit-catalog-product-edit-module-es2015.js.map