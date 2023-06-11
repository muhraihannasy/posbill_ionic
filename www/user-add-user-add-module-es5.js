(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-add-user-add-module"], {
    /***/
    "CNAl":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-add/user-add.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function CNAl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"link\" [routerLink]=\"['/user']\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Tambah pengguna</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\" *ngIf=\"!showResult\">\r\n\r\n  <ion-item lines=\"inset\">\r\n    <ion-label><small>Level*</small></ion-label>\r\n    <ion-select interface=\"action-sheet\" [(ngModel)]=\"user.level\">\r\n      <ion-select-option value=\"Admin\">Admin</ion-select-option>\r\n      <ion-select-option value=\"Cashier\">Kasir</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Nama*</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"user.name\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"user.level == 'Admin'\">\r\n    <ion-label position=\"stacked\">Email*</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"user.email\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"user.level == 'Admin'\">\r\n    <ion-label position=\"stacked\">Password*</ion-label>\r\n    <ion-input type=\"password\" [(ngModel)]=\"user.password\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-list>\r\n  <ion-list-header>Akses outlet</ion-list-header>\r\n  <ion-item *ngFor=\"let item of outlet\">\r\n    <ion-label><small>{{item.name}}</small></ion-label>\r\n    <ion-toggle [(ngModel)]=\"item.select\"></ion-toggle>\r\n  </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-content mode=\"ios\" class=\"ion-padding\" *ngIf=\"showResult\">\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label>Name</ion-label>\r\n        <ion-text slot=\"end\">{{dataResult.name}}</ion-text>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Username <br/><ion-button fill=\"outline\" size=\"small\" (click)=\"copy(dataResult.username)\">Copy</ion-button></ion-label>\r\n        <ion-text slot=\"end\">{{dataResult.username}}</ion-text>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-label>Password <br/><ion-button fill=\"outline\" size=\"small\" (click)=\"copy(dataResult.password)\">Copy</ion-button></ion-label>\r\n        <ion-text slot=\"end\">{{dataResult.password}}</ion-text>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-padding\" mode=\"ios\">\r\n    <ion-button expand=\"block\" (click)=\"process()\" *ngIf=\"!showResult\">Simpan</ion-button>\r\n    <ion-button expand=\"block\" [routerLink]=\"['/user']\" *ngIf=\"showResult\">Kembali</ion-button>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "cju2":
    /*!*********************************************!*\
      !*** ./src/app/user-add/user-add.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function cju2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWFkZC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "ddk3":
    /*!*********************************************!*\
      !*** ./src/app/user-add/user-add.module.ts ***!
      \*********************************************/

    /*! exports provided: UserAddPageModule */

    /***/
    function ddk3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAddPageModule", function () {
        return UserAddPageModule;
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


      var _user_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-add-routing.module */
      "gtTN");
      /* harmony import */


      var _user_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-add.page */
      "uX5r");

      var UserAddPageModule = /*#__PURE__*/_createClass(function UserAddPageModule() {
        _classCallCheck(this, UserAddPageModule);
      });

      UserAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserAddPageRoutingModule"]],
        declarations: [_user_add_page__WEBPACK_IMPORTED_MODULE_6__["UserAddPage"]]
      })], UserAddPageModule);
      /***/
    },

    /***/
    "gtTN":
    /*!*****************************************************!*\
      !*** ./src/app/user-add/user-add-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: UserAddPageRoutingModule */

    /***/
    function gtTN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAddPageRoutingModule", function () {
        return UserAddPageRoutingModule;
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


      var _user_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-add.page */
      "uX5r");

      var routes = [{
        path: '',
        component: _user_add_page__WEBPACK_IMPORTED_MODULE_3__["UserAddPage"]
      }];

      var UserAddPageRoutingModule = /*#__PURE__*/_createClass(function UserAddPageRoutingModule() {
        _classCallCheck(this, UserAddPageRoutingModule);
      });

      UserAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserAddPageRoutingModule);
      /***/
    },

    /***/
    "uX5r":
    /*!*******************************************!*\
      !*** ./src/app/user-add/user-add.page.ts ***!
      \*******************************************/

    /*! exports provided: UserAddPage */

    /***/
    function uX5r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAddPage", function () {
        return UserAddPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_add_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-add.page.html */
      "CNAl");
      /* harmony import */


      var _user_add_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-add.page.scss */
      "cju2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../storage.service */
      "qkCY");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../global.service */
      "dVwY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/native-page-transitions/ngx */
      "CicV");
      /* harmony import */


      var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/clipboard/ngx */
      "zzaN");

      var UserAddPage = /*#__PURE__*/function () {
        function UserAddPage(storage, http, global, router, loadingController, platform, nativePageTransitions, clipboard) {
          _classCallCheck(this, UserAddPage);

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
          this.user = {
            name: "",
            level: "Admin",
            email: "",
            password: ""
          };
          this.showResult = false;
          this.user.level = "Admin";
        }

        _createClass(UserAddPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.getObject("auth").then(function (auth) {
              _this.auth = auth;

              _this.getDataOutlet();
            });
          }
        }, {
          key: "copy",
          value: function copy(text) {
            this.clipboard.copy(text);
            this.global.toastPresent("Text telah disalin!");
          }
        }, {
          key: "getDataOutlet",
          value: function getDataOutlet() {
            var _this2 = this;

            this.outlet = [];
            this.global.loadingPresent("mengambil data...");
            this.storage.getObject("auth").then(function (auth) {
              var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + _this2.auth.token
              });
              var options = {
                headers: reqHeader
              };

              _this2.http.post(_this2.global.base_url + "auth/outlet/list", null, options).subscribe(function (data) {
                console.log(data);

                if (data.status == 0) {
                  var _iterator = _createForOfIteratorHelper(data.outlet),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var itemOutlet = _step.value;
                      var thisOutlet = {
                        id: itemOutlet.outlet.id,
                        name: itemOutlet.outlet.name,
                        select: false
                      };

                      _this2.outlet.push(thisOutlet);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

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
        }, {
          key: "process",
          value: function process() {
            var _this3 = this;

            if (this.user.level == "Admin") {
              if (this.user.name == "" || this.user.level == "" || this.user.email == "" || this.user.password == "") {
                this.global.toastPresent("Mohon lengkapi form yang wajib diisi!");
                return false;
              }
            } else {
              if (this.user.name == "" || this.user.level == "") {
                this.global.toastPresent("Mohon lengkapi form yang wajib diisi!");
                return false;
              }
            }

            var accessOutlet = this.outlet.filter(function (x) {
              return x.select === true;
            });

            if (accessOutlet.length < 1) {
              this.global.toastPresent("Mohon pilih minimal 1 outlet!");
              return false;
            }

            console.log(this.outlet.length);
            this.global.loadingPresent("menambah pengguna...");
            this.storage.getObject("auth").then(function (auth) {
              var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + _this3.auth.token
              });
              var options = {
                headers: reqHeader
              };
              var postData = {
                name: _this3.user.name,
                level: _this3.user.level,
                email: _this3.user.email,
                password: _this3.user.password,
                outlet: _this3.outlet
              };

              _this3.http.post(_this3.global.base_url + "auth/user/add", postData, options).subscribe(function (data) {
                console.log(data);

                if (data.status == 0) {
                  _this3.dataResult = data;
                  _this3.showResult = true;

                  _this3.global.toastPresent(data.message); // this.router.navigate(['/user-edit/'+data.id]);

                } else {
                  console.log(data);
                }

                _this3.global.loadingDismiss();
              }, function (error) {
                console.log(error);
              });
            });
          }
        }]);

        return UserAddPage;
      }();

      UserAddPage.ctorParameters = function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
        }, {
          type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"]
        }, {
          type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Clipboard"]
        }];
      };

      UserAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-user-add",
        template: _raw_loader_user_add_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_add_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserAddPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-add-user-add-module-es5.js.map