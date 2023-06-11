(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["information-detail-information-detail-module"],{

/***/ "6gPA":
/*!*****************************************************************!*\
  !*** ./src/app/information-detail/information-detail.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".article-container {\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n}\n.article-container .article-image {\n  width: 100%;\n  height: auto;\n  margin-bottom: 16px;\n  border-radius: 1em;\n}\n.article-container h2 {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 1em;\n}\n.article-container .article-details .article-date {\n  font-size: 14px;\n  color: gray;\n  margin-bottom: 16px;\n}\n.article-container .article-details .article-content {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGluZm9ybWF0aW9uLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBREo7QUFJRTtFQUNFLGVBQUE7QUFGSiIsImZpbGUiOiJpbmZvcm1hdGlvbi1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgLmFydGljbGUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgfVxyXG5cclxuICAuYXJ0aWNsZS1kZXRhaWxzIC5hcnRpY2xlLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmFydGljbGUtZGV0YWlscyAuYXJ0aWNsZS1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "PGcO":
/*!***************************************************************!*\
  !*** ./src/app/information-detail/information-detail.page.ts ***!
  \***************************************************************/
/*! exports provided: InformationDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationDetailPage", function() { return InformationDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_information_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./information-detail.page.html */ "e1a5");
/* harmony import */ var _information_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./information-detail.page.scss */ "6gPA");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../storage.service */ "qkCY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let InformationDetailPage = class InformationDetailPage {
    constructor(http, global, router, route, nativePageTransitions, storage, platform) {
        this.http = http;
        this.global = global;
        this.router = router;
        this.route = route;
        this.nativePageTransitions = nativePageTransitions;
        this.storage = storage;
        this.platform = platform;
        this.showContent = false;
        this.baseUrl = this.global.base_url;
        this.disabledAnimation = false;
        this.src = "https://via.placeholder.com/800x400";
        this.information = "";
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params["id"]) {
                this.id = params["id"];
            }
        });
    }
    ionViewWillEnter() {
        this.showContent = false;
        this.platform.ready().then(() => {
            this.storage.getObject("auth").then((auth) => {
                this.auth = auth;
                this.getData();
            });
            this.showContent = true;
        });
    }
    getData() {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.auth.token,
        });
        let options = { headers: reqHeader };
        this.http
            .get(this.global.base_url + "auth/information/" + this.id, options)
            .subscribe((data) => {
            this.information = data === null || data === void 0 ? void 0 : data.information;
        }, (error) => {
            console.log(error);
        });
    }
    goBackToTab() {
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
        this.router.navigate(["/tabs/tab-dashboard"]);
    }
};
InformationDetailPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_7__["NativePageTransitions"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] }
];
InformationDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-information-detail",
        template: _raw_loader_information_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_information_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InformationDetailPage);



/***/ }),

/***/ "Q95u":
/*!*****************************************************************!*\
  !*** ./src/app/information-detail/information-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: InformationDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationDetailPageModule", function() { return InformationDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _information_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./information-detail-routing.module */ "SGx+");
/* harmony import */ var _information_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./information-detail.page */ "PGcO");







let InformationDetailPageModule = class InformationDetailPageModule {
};
InformationDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _information_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["InformationDetailPageRoutingModule"],
        ],
        declarations: [_information_detail_page__WEBPACK_IMPORTED_MODULE_6__["InformationDetailPage"]],
    })
], InformationDetailPageModule);



/***/ }),

/***/ "SGx+":
/*!*************************************************************************!*\
  !*** ./src/app/information-detail/information-detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: InformationDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationDetailPageRoutingModule", function() { return InformationDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _information_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./information-detail.page */ "PGcO");




const routes = [
    {
        path: '',
        component: _information_detail_page__WEBPACK_IMPORTED_MODULE_3__["InformationDetailPage"]
    }
];
let InformationDetailPageRoutingModule = class InformationDetailPageRoutingModule {
};
InformationDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InformationDetailPageRoutingModule);



/***/ }),

/***/ "e1a5":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/information-detail/information-detail.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content mode=\"ios\">\r\n  <div style=\"margin-top: 200px; text-align: center\" *ngIf=\"!showContent\">\r\n    <ion-spinner name=\"crescent\"></ion-spinner>\r\n  </div>\r\n\r\n  <div class=\"article-container\">\r\n    <ion-buttons\r\n      slot=\"start\"\r\n      (click)=\"goBackToTab()\"\r\n      style=\"cursor: pointer; font-size: 1.5em\"\r\n    >\r\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    <h2>{{ information.title }}</h2>\r\n\r\n    <img\r\n      src=\"{{ information.image }}\"\r\n      alt=\"Gambar Artikel\"\r\n      class=\"article-image\"\r\n    />\r\n    <div class=\"article-details\">\r\n      <p class=\"article-content\">{{ information.content }}</p>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=information-detail-information-detail-module-es2015.js.map