import { Component } from "@angular/core";

import { StorageService } from "../storage.service";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { GlobalService } from "../global.service";
import { Router } from "@angular/router";
import {
  LoadingController,
  Platform,
  MenuController,
  AlertController,
} from "@ionic/angular";

import { ActivatedRoute } from "@angular/router";

import {
  NativePageTransitions,
  NativeTransitionOptions,
} from "@ionic-native/native-page-transitions/ngx";

@Component({
  selector: "app-tab-order",
  templateUrl: "tab-order.page.html",
  styleUrls: ["tab-order.page.scss"],
})
export class TabOrderPage {
  auth: any;
  user: any;
  name: any;
  level: any;

  orderNumberSearch: any = "";
  order: any;
  storageOrder: any;
  orderSearch: any;
  outlet: any;
  storageOutlet: any;

  company: any = { name: "" };
  storageCompany: any;

  activeOutlet: any = { id: "", name: "" };
  orderOffline: any = [];
  totalOrderOffline: any;

  start_date: any;
  end_date: any;

  showContent: any = false;
  showUser: any = false;

  source: any;
  id: any;

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private router: Router,
    private loadingController: LoadingController,
    private platform: Platform,
    private route: ActivatedRoute,
    private nativePageTransitions: NativePageTransitions,
    private menu: MenuController,
    private alertController: AlertController
  ) {
    this.route.params.subscribe((params: any) => {
      if (params["source"]) {
        this.source = params["source"];
      }
      if (params["id"]) {
        this.id = params["id"];
      }
    });
    this.start_date = this.global.parsingDate(
      this.global.getFullYear() + "-" + this.global.getMonth() + "-01"
    );
    this.end_date = this.global.getDateOnlyNow();
  }

  ionViewWillEnter() {
    this.initialize();
  }

  doRefresh(event) {
    this.initialize();
    event.target.complete();
  }

  initialize() {
    this.showContent = false;
    this.platform.ready().then(() => {
      this.storage.getObject("auth").then((data: any) => {
        this.auth = data;
        this.storage.getObject("user").then((user) => {
          let thisUser: any = user;
          this.user = user;
          this.name = thisUser.name;
          this.level = thisUser.level;
          this.showUser = true;
        });
      });

      this.getOfflineCompany();
      this.getOfflineOutlet();

      this.storage.getObject("order_offline").then((data: any) => {
        if (data != null) {
          this.orderOffline = data;
          this.totalOrderOffline = this.orderOffline.length;
        }

        this.storage.getObject("order").then((data: any) => {
          if (data != null) {
            this.storageOrder = data;

            this.syncUpOfflineData();
          } else {
            this.syncUpOfflineData();
          }
        });
      });
    });
  }

  getOfflineOutlet() {
    this.storage.getObject("outlet").then((data: any) => {
      if (data != null) {
        this.storageOutlet = data;
        this.outlet = this.storageOutlet.filter(
          (outlet) => outlet.outlet.status === "Active"
        );
      }
      console.log("Offline outlet", data);

      this.getActiveOutlet();
    });
  }

  getOfflineCompany() {
    this.storage.getObject("company").then((data: any) => {
      if (data != null) {
        this.storageCompany = data;
        this.company = this.storageCompany;
        this.checkExpiredAccount();
      }
      console.log(data);
    });
  }

  checkExpiredAccount() {
    if (this.company.package == "Premium") {
      this.storage.getObject("user").then((data: any) => {
        if (data != null) {
          this.user = data.user;
          console.log("exp " + this.activeOutlet.expired_at);

          if (this.activeOutlet.expired_at < this.global.getDateOnlyNow()) {
            console.log("expired");

            if (data.level == "Owner") {
              this.router.navigate(["/outlet"]);
              this.global.toastPresent(
                "masa berlaku paket sudah habis, silahkan lakukan pembelian paket berlangganan!"
              );
            } else {
              this.router.navigate(["/inactive"]);
            }
          }
        }
        console.log(data);
      });
    } else if (this.company.package == "Lite") {
      console.log("Lite");
    }
  }

  getDataOutlet() {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.auth.token,
    });

    let options = { headers: reqHeader };
    this.http
      .post(this.global.base_url + "auth/outlet/list/active", null, options)
      .subscribe(
        (data: any) => {
          console.log(data);

          if (data.status == 0) {
            this.storage.setObject("outlet", data.outlet);
            this.outlet = data.outlet.filter(
              (outlet) => outlet.outlet.status === "Active"
            );
            this.getActiveOutlet();

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

  getActiveOutlet() {
    this.storage.getObject("outlet_active").then((data) => {
      if (data != null) {
        this.activeOutlet = data;
        console.log("A", data);
      } else {
        this.activeOutlet = this.outlet[0].outlet;
        this.storage.setObject("outlet_active", this.activeOutlet);
        console.log("B", data);
      }
    });
  }

  changeOutlet(outlet) {
    this.activeOutlet = outlet;
    this.storage.setObject("outlet_active", this.activeOutlet);
    this.global.toastPresent(
      "Outlet <strong>" + outlet.name + "</strong> aktif!"
    );
    this.initialize();
    this.menu.close("orderleft");
  }

  syncUpOfflineData() {
    this.showContent = false;
    console.log("total offline", this.orderOffline.length);
    if (this.orderOffline.length > 0) {
      for (let orderId of this.orderOffline) {
        var order = this.storageOrder.find((x) => x.id === orderId);

        var reqHeader = new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.auth.token,
        });

        let options = { headers: reqHeader };
        this.http
          .post(this.global.base_url + "auth/order/store", order, options)
          .subscribe(
            (data: any) => {
              console.log(data);

              if (data.status == 0) {
                var offlineIndex = this.orderOffline.findIndex(
                  (y) => y === orderId
                );

                this.orderOffline.splice(offlineIndex, 1);
                this.totalOrderOffline = this.orderOffline.length;
                this.storage.setObject("order_offline", this.orderOffline);

                if (this.orderOffline.length == 0) {
                  this.global.toastPresentTop(
                    "Semua data transaksi berhasil disinkronisasi!",
                    "success"
                  );
                  this.getData("online");
                }

                console.log(data);
              } else {
                console.log(data);
              }
            },
            (error) => {
              console.log(error);
              this.global.toastPresentTop(
                '<ion-icon name="sync-outline" color="light"></ion-icon> ' +
                  this.orderOffline.length +
                  " transaksi belum disinkronisasi!",
                "danger"
              );
              this.getData("offline");
            }
          );
      }
    } else {
      this.getData("online");
    }
  }

  checkThisOrderSync(id) {
    var offlineIndex = this.orderOffline.findIndex((y) => y === id);
    if (offlineIndex > -1) {
      return true;
    }
  }

  getData(mode) {
    if (mode == "online") {
      this.storage.getObject("auth").then((auth) => {
        var reqHeader = new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.auth.token,
        });

        let options = { headers: reqHeader };

        let postdata = {
          outlet_id: this.activeOutlet.id,
          start_date: this.global.parsingDate(this.start_date),
          end_date: this.global.parsingDate(this.end_date),
        };

        this.http
          .post(
            this.global.base_url + "auth/order/last_per_outlet",
            postdata,
            options
          )
          .subscribe(
            (data: any) => {
              if (data.status == 0) {
                this.order = data.order;
                this.orderSearch = this.order;
                this.storage.getObject("filterBy").then((status) => {
                  this.filterStatus(status ?? "All");
                });

                this.storage.setObject("order", this.order);

                if (this.source == "notification") {
                  this.detail(this.id);
                }

                console.log(data);
              } else {
                console.log(data);
              }

              this.showContent = true;
            },
            (error) => {
              console.log(error);
              this.order = this.storageOrder;
              this.orderSearch = this.order;
              this.showContent = true;
            }
          );
      });
    } else {
      this.order = this.storageOrder;
      this.orderSearch = this.order;
      this.showContent = true;
    }
  }

  detail(id) {
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

    this.router.navigate(["/orders-detail/" + id + "/list"]);
  }

  async filterList(evt) {
    this.orderSearch = this.order;

    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.orderSearch = this.orderSearch.filter((current) => {
      if (current.order_number && searchTerm) {
        return (
          current.order_number.toLowerCase().indexOf(searchTerm.toLowerCase()) >
          -1
        );
      }
    });

    console.log(this.orderSearch);
  }

  filterStatus(status) {
    this.orderNumberSearch = "";

    this.storage.removeItem("filterBy");

    if (status == "All") {
      this.orderSearch = this.order;
    } else {
      this.orderSearch = this.order;
      this.orderSearch = this.orderSearch.filter(
        (order) => order.status === status
      );
    }

    console.log("Filter Status", this.orderSearch);
  }

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
    this.storage.clear();
    this.router.navigate(["/login"]);
  }

  openMenuLeft() {
    this.menu.enable(true, "orderleft");
    this.menu.open("orderleft");
  }

  labelStatusIcon(status) {
    if (status == "Pending") {
      return "alert-circle-outline";
    } else if (status == "Completed") {
      return "checkmark-circle-outline";
    } else if (status == "Canceled") {
      return "close-circle-outline";
    }
  }

  labelStatusColor(status) {
    if (status == "Pending") {
      return "warning";
    } else if (status == "Completed") {
      return "success";
    } else if (status == "Canceled") {
      return "danger";
    }
  }

  ionViewWillLeave() {}
}
