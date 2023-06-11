(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog-product-stock-catalog-product-stock-module"], {
    /***/
    "0BKJ":
    /*!*******************************************************************************!*\
      !*** ./src/app/catalog-product-stock/catalog-product-stock-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: CatalogProductStockPageRoutingModule */

    /***/
    function BKJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogProductStockPageRoutingModule", function () {
        return CatalogProductStockPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _catalog_product_stock_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./catalog-product-stock.page */
      "ry+1");

      var routes = [{
        path: '',
        component: _catalog_product_stock_page__WEBPACK_IMPORTED_MODULE_3__["CatalogProductStockPage"]
      }];

      var CatalogProductStockPageRoutingModule = /*#__PURE__*/_createClass(function CatalogProductStockPageRoutingModule() {
        _classCallCheck(this, CatalogProductStockPageRoutingModule);
      });

      CatalogProductStockPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CatalogProductStockPageRoutingModule);
      /***/
    },

    /***/
    "cvn5":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalog-product-stock/catalog-product-stock.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cvn5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\" *ngIf=\"showContent\">\r\n\r\n  <ion-toolbar>\r\n    <ion-title>{{product.name}}</ion-title>\r\n  </ion-toolbar>\r\n\r\n\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" *ngIf=\"showContent\">\r\n\r\n  <p style=\"text-align:center;\">\r\n    <small *ngIf=\"type == 'addition'\">Penambahan stok</small>\r\n    <small *ngIf=\"type == 'deduction'\">Pengurangan stok</small>\r\n  </p>\r\n\r\n  <ion-grid>\r\n  <ion-row style=\"border-bottom:solid 1px #ccc;\">\r\n    <ion-col size=\"6\"><ion-item lines=\"none\"><ion-text color=\"primary\"><small>Outlet</small></ion-text></ion-item></ion-col>\r\n    <ion-col size=\"6\"><ion-item lines=\"none\"><ion-text color=\"primary\">\r\n      <small *ngIf=\"type == 'addition'\">Jumlah yang ditambahkan</small>\r\n      <small *ngIf=\"type == 'deduction'\">Jumlah yang dikurangi</small>\r\n\r\n    </ion-text></ion-item></ion-col>\r\n  </ion-row>\r\n  <ion-row *ngFor=\"let item of stockList\" style=\"border-bottom:solid 1px #ccc;\">\r\n    <ion-col size=\"6\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label class=\"ion-text-wrap\">{{item.name}} <br/>\r\n          <small>Stok saat ini : {{item.stock}}</small>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col size=\"2\" style=\"text-align:right;padding-top:10px;\">\r\n      <ion-button size=\"small\" fill=\"link\" (click)=\"remove(item.id)\"> <ion-icon color=\"primary\" name=\"remove-outline\"></ion-icon> </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"2\" style=\"text-align:center;padding-top:10px;\">\r\n      <ion-input [(ngModel)]=\"item.adjustment\" name=\"outlet_stock[]\" type=\"number\" min=\"0\" ></ion-input>\r\n    </ion-col>\r\n    <ion-col size=\"2\" style=\"padding-top:10px;\">\r\n        <ion-button size=\"small\" fill=\"link\" (click)=\"add(item.id)\"> <ion-icon color=\"primary\" name=\"add-outline\"></ion-icon> </ion-button>\r\n    </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer mode=\"ios\" class=\"ion-padding\" *ngIf=\"showContent\">\r\n  <ion-button expand=\"block\" (click)=\"process()\">Simpan perubahan</ion-button>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "ry+1":
    /*!*********************************************************************!*\
      !*** ./src/app/catalog-product-stock/catalog-product-stock.page.ts ***!
      \*********************************************************************/

    /*! exports provided: CatalogProductStockPage */

    /***/
    function ry1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogProductStockPage", function () {
        return CatalogProductStockPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_catalog_product_stock_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./catalog-product-stock.page.html */
      "cvn5");
      /* harmony import */


      var _catalog_product_stock_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./catalog-product-stock.page.scss */
      "tBD9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _global_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../global.service */
      "dVwY");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "B7Rs");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");

      var CatalogProductStockPage = /*#__PURE__*/function () {
        function CatalogProductStockPage(router, toastCtrl, storage, http, global, navController, route, transfer, file, alertController) {
          var _this = this;

          _classCallCheck(this, CatalogProductStockPage);

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
          this.showContent = false;
          this.stockList = [];
          this.route.params.subscribe(function (params) {
            if (params['id']) {
              _this.id = params['id'];
            }

            if (params['type']) {
              _this.type = params['type'];
            }
          });
        }

        _createClass(CatalogProductStockPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.storage.getObject('auth').then(function (auth) {
              _this2.auth = auth;

              _this2.getData();
            });
          }
        }, {
          key: "add",
          value: function add(id) {
            var stockIndex = this.stockList.findIndex(function (stock) {
              return stock.id == id;
            });
            this.stockList[stockIndex].adjustment++;
          }
        }, {
          key: "remove",
          value: function remove(id) {
            var stockIndex = this.stockList.findIndex(function (stock) {
              return stock.id == id;
            });

            if (this.stockList[stockIndex].adjustment > 0) {
              this.stockList[stockIndex].adjustment--;
            }
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this3 = this;

            this.global.loadingPresent('mengambil data...');
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            var postData = {
              id: this.id
            };
            this.http.post(this.global.base_url + 'auth/product/detail', postData, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this3.product = data.product;
                var stockLists = [];

                var _iterator = _createForOfIteratorHelper(_this3.product.stock),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var i = _step.value;
                    stockLists.push({
                      id: i.id,
                      name: i.name,
                      enabled: i.enabled,
                      stock: i.stock,
                      adjustment: 0
                    });
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _this3.stockList = stockLists;
                _this3.showContent = true;
                console.log(data);
              } else {
                console.log(data);
              }

              _this3.global.loadingDismiss();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "process",
          value: function process() {
            var _this4 = this;

            this.global.loadingPresent('menyimpan data...');
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            var postData = {
              id: this.id,
              type: this.type,
              stock_list: this.stockList
            };
            this.http.post(this.global.base_url + 'auth/product/stock_adjustment', postData, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this4.global.toastPresent(data.message);

                _this4.router.navigate(['/catalog-product-edit/' + _this4.id]);
              } else {
                console.log(data);
              }

              _this4.global.loadingDismiss();
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return CatalogProductStockPage;
      }();

      CatalogProductStockPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _global_service__WEBPACK_IMPORTED_MODULE_8__["GlobalService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      CatalogProductStockPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-catalog-product-stock',
        template: _raw_loader_catalog_product_stock_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_catalog_product_stock_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CatalogProductStockPage);
      /***/
    },

    /***/
    "tBD9":
    /*!***********************************************************************!*\
      !*** ./src/app/catalog-product-stock/catalog-product-stock.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function tBD9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRhbG9nLXByb2R1Y3Qtc3RvY2sucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "tV5x":
    /*!***********************************************************************!*\
      !*** ./src/app/catalog-product-stock/catalog-product-stock.module.ts ***!
      \***********************************************************************/

    /*! exports provided: CatalogProductStockPageModule */

    /***/
    function tV5x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogProductStockPageModule", function () {
        return CatalogProductStockPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _catalog_product_stock_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./catalog-product-stock-routing.module */
      "0BKJ");
      /* harmony import */


      var _catalog_product_stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./catalog-product-stock.page */
      "ry+1");

      var CatalogProductStockPageModule = /*#__PURE__*/_createClass(function CatalogProductStockPageModule() {
        _classCallCheck(this, CatalogProductStockPageModule);
      });

      CatalogProductStockPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _catalog_product_stock_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatalogProductStockPageRoutingModule"]],
        declarations: [_catalog_product_stock_page__WEBPACK_IMPORTED_MODULE_6__["CatalogProductStockPage"]]
      })], CatalogProductStockPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=catalog-product-stock-catalog-product-stock-module-es5.js.map