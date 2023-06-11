(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs style=\"background:none;\">\r\n  <div class=\"tab-div\">\r\n  <ion-tab-bar slot=\"bottom\" class=\"tab-pane\">\r\n    <ion-tab-button tab=\"tab-dashboard\" [routerLink]=\"['/tabs/tab-dashboard']\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n      <ion-label>Dasbor</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab-pos\" [routerLink]=\"['/tabs/tab-pos']\">\r\n      <ion-icon name=\"calculator-outline\"></ion-icon>\r\n      <ion-label>POS</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab-order\">\r\n      <ion-icon name=\"list-outline\"></ion-icon>\r\n      <ion-label>Order</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab-report\" *ngIf=\"user.level=='Owner' || user.level=='Admin'\">\r\n      <ion-icon name=\"bar-chart-outline\"></ion-icon>\r\n      <ion-label>Laporan</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab-catalog\" *ngIf=\"user.level=='Owner' || user.level=='Admin'\">\r\n      <ion-icon name=\"grid-outline\"></ion-icon>\r\n      <ion-label>Katalog</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab-setting\">\r\n      <ion-icon name=\"settings-outline\"></ion-icon>\r\n      <ion-label>Akun</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</div>\r\n</ion-tabs>\r\n");

/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ "gcOT");











const { App } = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"];
let TabsPage = class TabsPage {
    constructor(storage, http, global, loadingController, router, nativePageTransitions, platform, menu) {
        this.storage = storage;
        this.http = http;
        this.global = global;
        this.loadingController = loadingController;
        this.router = router;
        this.nativePageTransitions = nativePageTransitions;
        this.platform = platform;
        this.menu = menu;
        this.user = { name: '', level: '' };
    }
    ionViewWillEnter() {
        this.storage.getObject('auth').then((auth) => {
            this.auth = auth;
            this.storage.getObject('user').then((user) => {
                this.user = user;
            });
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (min-width: 720px) {\n  .tab-div {\n    margin-bottom: -50px;\n  }\n\n  .tab-pane {\n    margin-top: -105px;\n    width: 348px;\n    margin-left: -2px;\n    border: 1px solid #ccc;\n    border-radius: 0px 10px 0px 0px;\n  }\n}\n@media screen and (max-width: 719px) {\n  .tab-div {\n    margin-bottom: 0;\n  }\n\n  .tab-pane {\n    margin-top: 0;\n    width: 100%;\n    margin-left: none;\n    margin-right: none;\n    border: none;\n    border-top: 1px solid #ccc;\n    border-radius: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7SUFDRyxvQkFBQTtFQUFIOztFQUVBO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFFQSxzQkFBQTtJQUNBLCtCQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0U7SUFDRyxnQkFBQTtFQURIOztFQUdBO0lBQ0UsYUFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EsbUJBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgLnRhYi1kaXYge1xyXG4gICAgIG1hcmdpbi1ib3R0b206LTUwcHg7XHJcbiAgfVxyXG4gIC50YWItcGFuZSB7XHJcbiAgICBtYXJnaW4tdG9wOi0xMDVweDtcclxuICAgIHdpZHRoOjM0OHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6LTJweDtcclxuICAgIC8vIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czowcHggMTBweCAwcHggMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzE5cHgpIHtcclxuICAudGFiLWRpdiB7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gIH1cclxuICAudGFiLXBhbmUge1xyXG4gICAgbWFyZ2luLXRvcDowO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0Om5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6bm9uZTtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6bm9uZTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "kB8F");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "MJr+");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "kB8F":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "MJr+");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab-dashboard',
                loadChildren: () => Promise.all(/*! import() | tab-dashboard-tab-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("tab-dashboard-tab-dashboard-module")]).then(__webpack_require__.bind(null, /*! ../tab-dashboard/tab-dashboard.module */ "fLci")).then(m => m.TabDashboardPageModule)
            },
            {
                path: 'tab-pos/:source',
                loadChildren: () => Promise.all(/*! import() | tab-pos-tab-pos-module */[__webpack_require__.e("common"), __webpack_require__.e("tab-pos-tab-pos-module")]).then(__webpack_require__.bind(null, /*! ../tab-pos/tab-pos.module */ "8T+6")).then(m => m.TabPosPageModule)
            },
            {
                path: 'tab-pos',
                loadChildren: () => Promise.all(/*! import() | tab-pos-tab-pos-module */[__webpack_require__.e("common"), __webpack_require__.e("tab-pos-tab-pos-module")]).then(__webpack_require__.bind(null, /*! ../tab-pos/tab-pos.module */ "8T+6")).then(m => m.TabPosPageModule)
            },
            {
                path: 'tab-order',
                loadChildren: () => Promise.all(/*! import() | tab-order-tab-order-module */[__webpack_require__.e("common"), __webpack_require__.e("tab-order-tab-order-module")]).then(__webpack_require__.bind(null, /*! ../tab-order/tab-order.module */ "5+78")).then(m => m.TabOrderPageModule)
            },
            {
                path: 'tab-order/:source/:id',
                loadChildren: () => Promise.all(/*! import() | tab-order-tab-order-module */[__webpack_require__.e("common"), __webpack_require__.e("tab-order-tab-order-module")]).then(__webpack_require__.bind(null, /*! ../tab-order/tab-order.module */ "5+78")).then(m => m.TabOrderPageModule)
            },
            {
                path: 'tab-report',
                loadChildren: () => Promise.all(/*! import() | tab-report-tab-report-module */[__webpack_require__.e("common"), __webpack_require__.e("tab-report-tab-report-module")]).then(__webpack_require__.bind(null, /*! ../tab-report/tab-report.module */ "J0x1")).then(m => m.TabReportPageModule)
            },
            {
                path: 'tab-catalog',
                loadChildren: () => Promise.all(/*! import() | tab-catalog-tab-catalog-module */[__webpack_require__.e("common"), __webpack_require__.e("tab-catalog-tab-catalog-module")]).then(__webpack_require__.bind(null, /*! ../tab-catalog/tab-catalog.module */ "iZ69")).then(m => m.TabCatalogPageModule)
            },
            {
                path: 'tab-setting',
                loadChildren: () => Promise.all(/*! import() | tab-setting-tab-setting-module */[__webpack_require__.e("common"), __webpack_require__.e("tab-setting-tab-setting-module")]).then(__webpack_require__.bind(null, /*! ../tab-setting/tab-setting.module */ "/y35")).then(m => m.TabSettingPageModule)
            },
            {
                path: 'blank',
                loadChildren: () => __webpack_require__.e(/*! import() | blank-blank-module */ "blank-blank-module").then(__webpack_require__.bind(null, /*! ../blank/blank.module */ "I3iu")).then(m => m.BlankPageModule)
            },
            {
                path: 'category',
                redirectTo: '/tabs/tab-catalog',
                pathMatch: 'full'
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/launcher',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map