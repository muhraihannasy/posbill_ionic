import { Component } from "@angular/core";

import { Platform, IonRouterOutlet } from "@ionic/angular";
import { Location } from "@angular/common";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";
import { BackButtonEvent } from "@ionic/core";
import { Plugins } from "@capacitor/core";
const { App } = Plugins;

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private location: Location
  ) {
    this.initializeApp();
    this.registerBackButton();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  registerBackButton() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      var thisUrl = this.router.url;
      var splitUrl = thisUrl.split("/");

      if (this.router.url == "/tabs/tab-pos" || this.router.url == "/login") {
        App.exitApp();
      } else if (this.router.url == "/register") {
        this.router.navigate(["/login"]);
      } else if (
        this.router.url == "/tabs/tab-order" ||
        this.router.url == "/tabs/tab-report" ||
        this.router.url == "/tabs/tab-catalog" ||
        this.router.url == "/tabs/tab-setting" ||
        this.router.url == "/payment-options" ||
        this.router.url == "/booking"
      ) {
        this.router.navigate(["/tabs/tab-pos"]);
      } else if (splitUrl[1] == "orders-detail") {
        this.router.navigate(["/tabs/tab-order"]);
      } else if (
        this.router.url == "/catalog-category" ||
        this.router.url == "/catalog-product"
      ) {
        this.router.navigate(["/tabs/tab-catalog"]);
      } else if (
        this.router.url == "/setting-sale" ||
        this.router.url == "/setting-payment" ||
        this.router.url == "/setting-discount" ||
        this.router.url == "/setting-format" ||
        this.router.url == "/setting-printer" ||
        this.router.url == "/outlet" ||
        this.router.url == "/customer" ||
        this.router.url == "/user" ||
        this.router.url == "/account" ||
        this.router.url == "/subscription"
      ) {
        this.router.navigate(["/tabs/tab-setting"]);
      } else if (
        this.router.url == "/catalog-category-add" ||
        splitUrl[1] == "catalog-category-edit"
      ) {
        this.router.navigate(["/catalog-category"]);
      } else if (
        this.router.url == "/catalog-product-add" ||
        splitUrl[1] == "catalog-product-edit"
      ) {
        this.router.navigate(["/catalog-product"]);
      } else if (
        this.router.url == "/discount-add" ||
        splitUrl[1] == "discount-edit"
      ) {
        this.router.navigate(["/setting-discount"]);
      } else if (
        this.router.url == "/outlet-add" ||
        splitUrl[1] == "outlet-edit"
      ) {
        this.router.navigate(["/outlet"]);
      } else if (this.router.url == "/user-add" || splitUrl[1] == "user-edit") {
        this.router.navigate(["/user"]);
      } else if (
        this.router.url == "/customer-add" ||
        splitUrl[1] == "customer-edit"
      ) {
        this.router.navigate(["/customer"]);
      } else if (splitUrl[1] == "booking-detail") {
        this.router.navigate(["/booking"]);
      } else if (
        splitUrl[1] == "select-customer" ||
        this.router.url == "/select-discount"
      ) {
        this.router.navigate(["/payment-options"]);
      } else if (
        splitUrl[1] == "report-sales" ||
        splitUrl[1] == "report-product-sales"
      ) {
        this.router.navigate(["/tabs/tab-report"]);
      } else if (this.router.url == "/account-edit") {
        this.router.navigate(["/account"]);
      } else {
        this.location.back();
      }

      console.log(this.router.url);
    });
  }
}
