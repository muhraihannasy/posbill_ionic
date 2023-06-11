(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalog-category-catalog-category-module"], {
    /***/
    "0shs":
    /*!***********************************************************!*\
      !*** ./src/app/catalog-category/catalog-category.page.ts ***!
      \***********************************************************/

    /*! exports provided: CatalogCategoryPage */

    /***/
    function shs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogCategoryPage", function () {
        return CatalogCategoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_catalog_category_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./catalog-category.page.html */
      "R8ZU");
      /* harmony import */


      var _catalog_category_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./catalog-category.page.scss */
      "Hm+I");
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

      var CatalogCategoryPage = /*#__PURE__*/function () {
        function CatalogCategoryPage(router, toastCtrl, storage, http, global, platform) {
          _classCallCheck(this, CatalogCategoryPage);

          this.router = router;
          this.toastCtrl = toastCtrl;
          this.storage = storage;
          this.http = http;
          this.global = global;
          this.platform = platform;
        }

        _createClass(CatalogCategoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.getObject('auth').then(function (auth) {
              _this.auth = auth;

              _this.getData();
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this2 = this;

            this.global.loadingPresent('mengambil data...');
            this.storage.getObject('auth').then(function (auth) {
              var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + _this2.auth.token
              });
              var options = {
                headers: reqHeader
              };

              _this2.http.post(_this2.global.base_url + 'auth/category/list', null, options).subscribe(function (data) {
                console.log(data);

                if (data.status == 0) {
                  _this2.category = data.category;
                  console.log(data);
                } else {
                  console.log(data);
                }

                _this2.global.loadingDismiss();
              }, function (error) {
                console.log(error);
              });
            });
          }
        }]);

        return CatalogCategoryPage;
      }();

      CatalogCategoryPage.ctorParameters = function () {
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      CatalogCategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-catalog-category',
        template: _raw_loader_catalog_category_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_catalog_category_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CatalogCategoryPage);
      /***/
    },

    /***/
    "4jgm":
    /*!*********************************************************************!*\
      !*** ./src/app/catalog-category/catalog-category-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: CatalogCategoryPageRoutingModule */

    /***/
    function jgm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogCategoryPageRoutingModule", function () {
        return CatalogCategoryPageRoutingModule;
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


      var _catalog_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./catalog-category.page */
      "0shs");

      var routes = [{
        path: '',
        component: _catalog_category_page__WEBPACK_IMPORTED_MODULE_3__["CatalogCategoryPage"]
      }];

      var CatalogCategoryPageRoutingModule = /*#__PURE__*/_createClass(function CatalogCategoryPageRoutingModule() {
        _classCallCheck(this, CatalogCategoryPageRoutingModule);
      });

      CatalogCategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CatalogCategoryPageRoutingModule);
      /***/
    },

    /***/
    "Hm+I":
    /*!*************************************************************!*\
      !*** ./src/app/catalog-category/catalog-category.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function HmI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRhbG9nLWNhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Ifbl":
    /*!*************************************************************!*\
      !*** ./src/app/catalog-category/catalog-category.module.ts ***!
      \*************************************************************/

    /*! exports provided: CatalogCategoryPageModule */

    /***/
    function Ifbl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogCategoryPageModule", function () {
        return CatalogCategoryPageModule;
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


      var _catalog_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./catalog-category-routing.module */
      "4jgm");
      /* harmony import */


      var _catalog_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./catalog-category.page */
      "0shs");

      var CatalogCategoryPageModule = /*#__PURE__*/_createClass(function CatalogCategoryPageModule() {
        _classCallCheck(this, CatalogCategoryPageModule);
      });

      CatalogCategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _catalog_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatalogCategoryPageRoutingModule"]],
        declarations: [_catalog_category_page__WEBPACK_IMPORTED_MODULE_6__["CatalogCategoryPage"]]
      })], CatalogCategoryPageModule);
      /***/
    },

    /***/
    "R8ZU":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalog-category/catalog-category.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function R8ZU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/tabs/tab-catalog']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Kategori</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-list>\r\n    <ion-item-sliding *ngFor=\"let item of category;index as i;\">\r\n    <ion-item [routerLink]=\"['/catalog-category-edit/'+item.id]\" button detail=\"false\">\r\n      <ion-avatar slot=\"start\">\r\n        <div class=\"text-avatar-category\">\r\n          {{item.name.charAt(0).toUpperCase()}}\r\n        </div>\r\n      </ion-avatar>\r\n    <ion-label>{{item.name}}\r\n    </ion-label>\r\n    </ion-item>\r\n    <!-- <ion-item-options side=\"end\">\r\n      <ion-item-option color=\"danger\"  (click)=\"deleteCategory(i)\"><ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon></ion-item-option>\r\n    </ion-item-options> -->\r\n\r\n    </ion-item-sliding>\r\n\r\n\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n   <ion-fab-button [routerLink]=\"['/catalog-category-add']\">\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n   </ion-fab-button>\r\n </ion-fab>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=catalog-category-catalog-category-module-es5.js.map