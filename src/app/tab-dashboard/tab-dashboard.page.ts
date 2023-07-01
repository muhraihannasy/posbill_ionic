


import { Component } from "@angular/core";

import {
  NativePageTransitions,
  NativeTransitionOptions,
} from "@ionic-native/native-page-transitions/ngx";

import { GlobalService } from "../global.service";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastController, Platform } from "@ionic/angular";

import { StorageService } from "../storage.service";
import { AlertController } from "@ionic/angular";
import { Plugins } from "@capacitor/core";
const { App } = Plugins;
import {
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { error } from "console";

const { PushNotifications } = Plugins;

@Component({
  selector: "app-tab-dashboard",
  templateUrl: "tab-dashboard.page.html",
  styleUrls: ["tab-dashboard.page.scss"],
})
export class TabDashboardPage {
  slideOpts = {
    slidePerView: 1,
    slidePerPage: 2,
    initialSlide: 1,
    width: 350,
    speed: 400,
    centeredSlides: true,
  };

  auth: any;
  baseUrl = this.global.domain;
  offline: boolean = false;
  showContent: boolean = false;

  user: any = { name: "", level: "" };
  company: any = { name: "", package: "" };

  // Amount
  amount_booking: number = 0;
  amount_order_notPaid: number = 0;

  // Summary
  summary_today_price: number = 0;
  summary_today_items: number = 0;
  summary_month_price: number = 0;
  summary_month_items: number = 0;

  // Information
  informations: any = [];

  dateNow: any = "";
  monthNow: any = "";

  notificationContent: any = {
    notification: { data: { entity_name: "", id: "" } },
  };

  constructor(
    private nativePageTransitions: NativePageTransitions,
    private http: HttpClient,
    private global: GlobalService,
    private router: Router,
    private toastController: ToastController,
    private storage: StorageService,
    private alertController: AlertController,
    private platform: Platform
  ) {
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   this.router.navigate(['/tabs/tab1']);
    // });
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
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener(
      "registration",
      (token: PushNotificationToken) => {
        console.log("Push registration success, token: " + token.value);
      }
    );

    PushNotifications.addListener("registrationError", (error: any) => {
      console.log("Error on registration: " + JSON.stringify(error));
    });

    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
        console.log("Push received: " + JSON.stringify(notification));
      }
    );

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: PushNotificationActionPerformed) => {
        console.log("Push action performed: " + JSON.stringify(notification));

        this.notificationContent = notification;

        if (
          this.notificationContent.notification.data.entity_name ==
          "order_detail"
        ) {
          this.router.navigate([
            "/tabs/tab-order/notification/" +
              this.notificationContent.notification.data.id,
          ]);
          // setTimeout(() => {
          //   this.router.navigate(['/orders-detail/'+this.notificationContent.notification.data.id]);
          // }, 2000);
        }
      }
    );
  }

  ionViewWillEnter() {
    this.storage.getObject("company").then((company: any) => {
      this.company = company;
      this.storage.getObject("user").then((user: any) => {
        this.user = user;
      });
    });

    this.getData();
  }

  getData() {
    this.storage.getObject("auth").then((auth) => {
      this.auth = auth;
      this.getDataCompany();
      this.getAmountBooking();
      this.getAmountOrder();
      this.getOrderSummary();
      this.getDataInformation();
    });

    const optionDateNow = { year: "numeric", weekday: "long" };
    const formattedDateNow = this.global.getNameDate(new Date(), optionDateNow);
    const explodeDateNow = formattedDateNow.split(" ");

    const optionMonth = { year: "numeric", month: "long" };
    const formattedMonth = this.global.getNameDate(new Date(), optionMonth);

    console.log(explodeDateNow);
    this.dateNow = explodeDateNow[1] + " " + explodeDateNow[0];
    this.monthNow = formattedMonth;

    console.log(this.amount_booking, this.amount_order_notPaid);
  }

  getDataCompany() {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.auth.token,
    });

    let options = { headers: reqHeader };
    this.http
      .post(this.global.base_url + "auth/company", null, options)
      .subscribe(
        (data: any) => {
          if (data.status == 0) {
            this.storage.setObject("company", data.company);
            this.company = data.company;
            console.log(data);
          } else {
            console.log(data);
          }

          this.showContent = true;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getDataInformation() {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.auth.token,
    });

    let options = { headers: reqHeader };
    this.http.get(this.global.base_url + "auth/information", options).subscribe(
      (data: any) => {
        this.informations = data?.information;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAmountOrder() {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.auth.token,
    });

    let options = { headers: reqHeader };
    this.http.get(`${this.global.base_url}auth/order/count`, options).subscribe(
      (data: any) => {
        this.amount_order_notPaid = data.amount_order_notPaid;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getOrderSummary() {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.auth.token,
    });

    let options = { headers: reqHeader };
    this.http
      .get(`${this.global.base_url}auth/order/summary`, options)
      .subscribe(
        (data: any) => {
          this.summary_today_price = data.summary_today_price;
          this.summary_today_items = data.summary_today_items;
          this.summary_month_price = data.summary_month_price;
          this.summary_month_items = data.summary_month_items;

          console.log(data.summary_today_price, data.summary_today_items, "Summary");
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getAmountBooking() {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.auth.token,
    });

    let options = { headers: reqHeader };
    this.http
      .get(`${this.global.base_url}auth/booking/count`, options)
      .subscribe(
        (data: any) => {
          this.amount_booking = data.amount_booking;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  clickToPage(page) {
    if (this.company.package == "Lite" && page == "/setting-olshop") {
      this.global.toastPresent(
        "Fitur toko online tersedia dalam versi Premium"
      );
      return false;
    }

    if (this.company.package == "Lite" && page == "/user") {
      this.global.toastPresent("Fitur pengguna tersedia dalam versi Premium");
      return false;
    }

    let options: NativeTransitionOptions = {
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

    this.router.navigate([page]);
  }

  ionViewWillLeave() {}

  async confirmLogout() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Konfirmasi",
      message:
        'Yakin untuk keluar dari akun Anda?   <br/> <br/> Perhatian : <br/> <span style="color:red">harap lakukan sinkronisasi data order terlebih dahulu, data offline akan dihapus saat Anda keluar akun!</span>',
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

    await alert.present();
  }

  logout() {
    this.storage.clear().then(() => {
      this.storage.removeItem("auth");
      this.storage.removeItem("user");
      this.storage.removeItem("company");
      this.storage.removeItem("outlet_active");
      this.storage.removeItem("outlet");
      this.storage.removeItem("product");
      this.router.navigate(["/login"]);
    });
  }

  onCoba() {
    this.storage.setObject("filterBy", "Pending");
    this.router.navigate(["/tabs/tab-order"]);
  }
}
