(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-report-tab-report-module"], {
    /***/
    "6HKE":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab-report/tab-report.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function HKE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n  <ion-item lines=\"full\" color=\"light\">\r\n    <ion-label>Pilih outlet</ion-label>\r\n    <ion-select placeholder=\"Semua outlet\" interface=\"action-sheet\" [(ngModel)]=\"outlet_id\" (ionChange)=\"changeEvent()\">\r\n      <ion-select-option value=\"All\">Semua outlet</ion-select-option>\r\n      <ion-select-option *ngFor=\"let item of outlet\" value=\"{{item.outlet.id}}\">{{item.outlet.name}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" size-xs=\"6\" size-sm=\"5\" >\r\n        <ion-item lines=\"full\">\r\n          <ion-label class=\"ion-text-wrap\"><small>Dari</small></ion-label>\r\n          <ion-datetime *ngIf=\"company.package == 'Premium'\" style=\"font-size:12px;\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMM-YYYY\"  display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"start_date\" (ionChange)=\"changeEvent()\"></ion-datetime>\r\n          <ion-datetime *ngIf=\"company.package == 'Lite'\" style=\"font-size:12px;\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMM-YYYY\"  display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"start_date\" min=\"{{min_date}}\" (ionChange)=\"changeEvent()\"></ion-datetime>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" size-xs=\"6\" size-sm=\"5\">\r\n        <ion-item lines=\"full\">\r\n          <ion-label class=\"ion-text-wrap\"><small>Sampai</small></ion-label>\r\n          <ion-datetime style=\"font-size:12px;\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD-MMM-YYYY\"  display-timezone=\"Asia/Jakarta\" color=\"primary\" [(ngModel)]=\"end_date\" min=\"{{start_date}}\" (ionChange)=\"changeEvent()\"></ion-datetime>\r\n        </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div style=\"margin-top:-25px;\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-md=\"6\">\r\n        <ion-card class=\"no-padding\">\r\n\r\n          <ion-card-content>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item button lines=\"full\" [routerLink]=\"['/report-sales/'+start_date+'/'+end_date+'/'+outlet_id]\">\r\n                    <ion-icon name=\"bar-chart-outline\" slot=\"start\"></ion-icon>\r\n                    <ion-label>Ringkasan penjualan</ion-label>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row style=\"text-align:center;padding-top:20px;\">\r\n                <ion-col>\r\n                  <small>\r\n                  <ion-text color=\"primary\">Penjualan kotor </ion-text> <br/>\r\n                  {{global.currency(totalGrossSales)}}\r\n                  </small>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <small>\r\n                    <ion-text color=\"primary\">Penjualan bersih </ion-text> <br/>\r\n                    {{global.currency(totalNetSales)}}\r\n                    </small>\r\n                    </ion-col>\r\n              </ion-row>\r\n              <ion-row style=\"text-align:center;padding-top:20px;\">\r\n                <ion-col>\r\n                  <small>\r\n                  <ion-text color=\"primary\">Jumlah order </ion-text> <br/>\r\n                  {{totalTrx}}\r\n                  </small>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <small>\r\n                    <ion-text color=\"primary\">Produk terjual </ion-text> <br/>\r\n                    {{totalQty}}\r\n                    </small>\r\n                    </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"no-padding\" *ngIf=\"company.package == 'Premium'\">\r\n\r\n          <ion-card-content>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item button lines=\"full\" [routerLink]=\"['/report-sales/'+start_date+'/'+end_date+'/'+outlet_id]\">\r\n                    <ion-icon name=\"accessibility-outline\" slot=\"start\"></ion-icon>\r\n                    <ion-label>Top pelanggan</ion-label>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row style=\"text-align:center;padding-top:20px;\">\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label color=\"primary\"><small>Pelanggan</small></ion-label>\r\n                    <ion-text slot=\"end\" color=\"primary\"><small>Total transaksi</small></ion-text>\r\n                  </ion-item>\r\n                  <ion-item lines=\"none\" *ngFor=\"let cust of topCustomer\">\r\n                    <ion-label>{{cust.customer.name}}</ion-label>\r\n                    <ion-text slot=\"end\">{{global.currency(cust.total_amount)}}</ion-text>\r\n                  </ion-item>\r\n                </ion-col>\r\n                </ion-row>\r\n\r\n            </ion-grid>\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"12\" size-md=\"6\" *ngIf=\"company.package == 'Premium'\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item button lines=\"full\" [routerLink]=\"['/report-product-sales/'+start_date+'/'+end_date+'/'+outlet_id]\">\r\n                    <ion-icon name=\"pie-chart-outline\" slot=\"start\"></ion-icon>\r\n                    <ion-label>Penjualan produk</ion-label>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"showChart\">\r\n                <ion-col size-xs=\"12\" size-md=\"12\">\r\n                  <div style=\"margin-top:30px;\">\r\n                  <google-chart [data]=\"pieChart\"></google-chart>\r\n                  </div>\r\n                </ion-col>\r\n                  <ion-col size-xs=\"12\" size-md=\"12\">\r\n                    <ion-item lines=\"none\" *ngFor=\"let item of productChartPie;index as i\">\r\n                      <ion-label *ngIf=\"i>0\"><small>{{item[0]}}</small></ion-label>\r\n                      <ion-note *ngIf=\"i>0\" slot=\"end\" color=\"primary\">{{item[1]}}</ion-note>\r\n                    </ion-item>\r\n\r\n                  </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-content>\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "J0x1":
    /*!*************************************************!*\
      !*** ./src/app/tab-report/tab-report.module.ts ***!
      \*************************************************/

    /*! exports provided: TabReportPageModule */

    /***/
    function J0x1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabReportPageModule", function () {
        return TabReportPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab_report_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab-report.page */
      "JCzJ");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab_report_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab-report-routing.module */
      "nLKU");
      /* harmony import */


      var ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-google-charts */
      "omRQ");

      var TabReportPageModule = /*#__PURE__*/_createClass(function TabReportPageModule() {
        _classCallCheck(this, TabReportPageModule);
      });

      TabReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab_report_routing_module__WEBPACK_IMPORTED_MODULE_7__["TabReportPageRoutingModule"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__["Ng2GoogleChartsModule"]],
        declarations: [_tab_report_page__WEBPACK_IMPORTED_MODULE_5__["TabReportPage"]]
      })], TabReportPageModule);
      /***/
    },

    /***/
    "JCzJ":
    /*!***********************************************!*\
      !*** ./src/app/tab-report/tab-report.page.ts ***!
      \***********************************************/

    /*! exports provided: TabReportPage */

    /***/
    function JCzJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabReportPage", function () {
        return TabReportPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab_report_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab-report.page.html */
      "6HKE");
      /* harmony import */


      var _tab_report_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab-report.page.scss */
      "SuwT");
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

      var TabReportPage = /*#__PURE__*/function () {
        function TabReportPage(storage, http, global, router, loadingController, platform, route, nativePageTransitions) {
          _classCallCheck(this, TabReportPage);

          this.storage = storage;
          this.http = http;
          this.global = global;
          this.router = router;
          this.loadingController = loadingController;
          this.platform = platform;
          this.route = route;
          this.nativePageTransitions = nativePageTransitions;
          this.auth = {
            token: ''
          };
          this.totalGrossSales = 0;
          this.totalNetSales = 0;
          this.totalTrx = 0;
          this.totalQty = 0;
          this.outlet_id = 'All';
          this.start_date = '';
          this.end_date = '';
          this.showChart = false;
          this.company = {
            name: '',
            "package": ''
          };
          this.min_date = '';
          this.pieChart = {
            chartType: 'PieChart',
            dataTable: [['Produk', 'Total order']],
            //firstRowIsData: true,
            options: {
              'title': 'Produk terlaris',
              'legend': 'none',
              'chartArea': {
                'width': '100%',
                'height': '100%'
              }
            }
          };
          this.charttype = 'piechart';
          this.datachart = [];
          this.min_date = this.global.parsingDate(this.global.getFullYear2Ago() + '-' + this.global.getMonth2Ago() + '-01');
          this.start_date = this.global.parsingDate(this.global.getFullYear() + '-' + this.global.getMonth() + '-01');
          this.end_date = this.global.getDateOnlyNow();
        }

        _createClass(TabReportPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.storage.getObject('auth').then(function (auth) {
              _this.auth = auth;

              _this.getDataOutlet();
            });
            this.storage.getObject('company').then(function (company) {
              _this.company = company;
            });
          }
        }, {
          key: "changeEvent",
          value: function changeEvent() {
            this.getDataSales();
          }
        }, {
          key: "getDataOutlet",
          value: function getDataOutlet() {
            var _this2 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            this.http.post(this.global.base_url + 'auth/outlet/list', null, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this2.storage.setObject('outlet', data.outlet);

                _this2.outlet = data.outlet;

                _this2.getDataSales();

                console.log(data);
              } else {
                console.log(data);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getDataSales",
          value: function getDataSales() {
            var _this3 = this;

            this.storage.getObject('auth').then(function (auth) {
              _this3.showChart = false;
              var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + auth.token
              });
              var options = {
                headers: reqHeader
              };
              var postData = {
                outlet_id: _this3.outlet_id,
                start_date: _this3.global.parsingDate(_this3.start_date),
                end_date: _this3.global.parsingDate(_this3.end_date)
              };

              _this3.http.post(_this3.global.base_url + 'auth/report/sales_summary', postData, options).subscribe(function (data) {
                console.log(data);

                if (data.status == 0) {
                  _this3.totalGrossSales = data.total_gross_sales;
                  _this3.totalNetSales = data.total_net_sales;
                  _this3.totalTrx = data.total_trx;
                  _this3.totalQty = data.total_qty;
                  console.log(data);
                } else {
                  console.log(data);
                }

                _this3.getDataTopProduct();

                _this3.getDataTopCustomer();
              }, function (error) {
                console.log(error);
              });
            });
          }
        }, {
          key: "getDataTopProduct",
          value: function getDataTopProduct() {
            var _this4 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            var postData = {
              outlet_id: this.outlet_id,
              start_date: this.global.parsingDate(this.start_date),
              end_date: this.global.parsingDate(this.end_date)
            };
            this.http.post(this.global.base_url + 'auth/report/sales_product_summary', postData, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                var i = 1;
                var other_product = 0;
                var chartPie = [['Produk', 'Total Order']];

                var _iterator = _createForOfIteratorHelper(data.product_top),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;

                    if (i <= 10) {
                      var thisItem = [item.product.name, parseInt(item.total_qty)];
                      chartPie.push(thisItem);
                    }

                    if (i > 10) {
                      var thisQty = parseInt(item.total_qty);
                      other_product += thisQty;
                    }

                    i++;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                console.log(other_product);

                if (other_product > 0) {
                  var other = ['Produk lainnya', other_product];
                  chartPie.push(other);
                }

                _this4.productChartPie = chartPie;
                _this4.datachart = chartPie;
                console.log(chartPie);

                _this4.generatePieChart();

                console.log(data);
              } else {
                console.log(data);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getDataTopCustomer",
          value: function getDataTopCustomer() {
            var _this5 = this;

            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.auth.token
            });
            var options = {
              headers: reqHeader
            };
            var postData = {
              outlet_id: this.outlet_id,
              start_date: this.global.parsingDate(this.start_date),
              end_date: this.global.parsingDate(this.end_date)
            };
            this.http.post(this.global.base_url + 'auth/report/top_customer_summary', postData, options).subscribe(function (data) {
              console.log(data);

              if (data.status == 0) {
                _this5.topCustomer = data.customer_top;
                console.log(data);
              } else {
                console.log(data);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "generatePieChart",
          value: function generatePieChart() {
            this.pieChart.dataTable = this.productChartPie;
            this.pieChart.options = {
              'title': 'Produk terlaris',
              'legend': 'none',
              'chartArea': {
                'width': '100%',
                'height': '100%'
              }
            };
            this.showChart = true;
            console.log(this.pieChart);
          }
        }, {
          key: "detail",
          value: function detail(id) {
            var options = {
              direction: 'left',
              duration: 300,
              slowdownfactor: 0,
              slidePixels: 0,
              iosdelay: 0,
              androiddelay: 0,
              fixedPixelsTop: 0,
              fixedPixelsBottom: 0
            };
            this.nativePageTransitions.slide(options);
            this.router.navigate(['/orders-detail/' + id]);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {}
        }]);

        return TabReportPage;
      }();

      TabReportPage.ctorParameters = function () {
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_9__["NativePageTransitions"]
        }];
      };

      TabReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab-report',
        template: _raw_loader_tab_report_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab_report_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TabReportPage);
      /***/
    },

    /***/
    "SuwT":
    /*!*************************************************!*\
      !*** ./src/app/tab-report/tab-report.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function SuwT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItcmVwb3J0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "nLKU":
    /*!*********************************************************!*\
      !*** ./src/app/tab-report/tab-report-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: TabReportPageRoutingModule */

    /***/
    function nLKU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabReportPageRoutingModule", function () {
        return TabReportPageRoutingModule;
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


      var _tab_report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab-report.page */
      "JCzJ");

      var routes = [{
        path: '',
        component: _tab_report_page__WEBPACK_IMPORTED_MODULE_3__["TabReportPage"]
      }];

      var TabReportPageRoutingModule = /*#__PURE__*/_createClass(function TabReportPageRoutingModule() {
        _classCallCheck(this, TabReportPageRoutingModule);
      });

      TabReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabReportPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab-report-tab-report-module-es5.js.map