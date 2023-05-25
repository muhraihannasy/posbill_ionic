import { Component, OnInit } from "@angular/core";
import { StorageService } from "../storage.service";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { GlobalService } from "../global.service";
import {
  LoadingController,
  Platform,
  MenuController,
  AlertController,
} from "@ionic/angular";
import { Router } from "@angular/router";

import {
  NativePageTransitions,
  NativeTransitionOptions,
} from "@ionic-native/native-page-transitions/ngx";

import { BackButtonEvent } from "@ionic/core";
import { Plugins } from "@capacitor/core";
const { App } = Plugins;

import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { ActivatedRoute } from "@angular/router";

import { NativeAudio } from "@ionic-native/native-audio/ngx";
import {
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";

const { PushNotifications } = Plugins;

@Component({
  selector: "app-tab-pos",
  templateUrl: "tab-pos.page.html",
  styleUrls: ["tab-pos.page.scss"],
})
export class TabPosPage implements OnInit {
  auth: any;

  company: any = { name: "" };
  storageCompany: any;

  totalAmount: any = 0;
  totalQty: any = 0;

  category: any = [];
  storageCategory: any = [];
  product: any = [];
  productSearch: any = [];
  storageProduct: any = [];
  outlet: any = [];
  storageOutlet: any = [];

  cart: any = [];

  orderType: any = "none";
  orderTypeLabel: any = "none";

  showPOS: any;

  activeOutlet: any = { id: "", name: "", expired_at: "", status: "" };

  offline: any = false;
  showContent: any = false;

  user: any = { name: "", level: "" };
  showUser: any = false;
  name: any;
  level: any;
  notificationContent: any = {
    notification: { data: { entity_name: "", id: "" } },
  };

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    private loadingController: LoadingController,
    private router: Router,
    private nativePageTransitions: NativePageTransitions,
    private platform: Platform,
    private menu: MenuController,
    private alertController: AlertController,
    private barcodeScanner: BarcodeScanner,
    private route: ActivatedRoute,
    private nativeAudio: NativeAudio
  ) {
    this.route.params.subscribe((params: any) => {
      if (params["source"]) {
        if (params["source"] == "login") {
          this.initialize();
        }
        if (params["source"] == "register") {
          this.initialize();
        }
      }
    });
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

  async filterList(evt) {
    this.productSearch = this.product;

    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.productSearch = this.productSearch.filter((current) => {
      if (current.product.name && searchTerm) {
        return (
          current.product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >
          -1
        );
      }
    });

    console.log(this.productSearch);
  }

  addOne(item) {
    var checkItemExist = this.cart.findIndex((x) => x.id === item.id);

    if (checkItemExist == -1) {
      this.cart.push({
        id: item.id,
        qty: 1,
        name: item.name,
        cost: item.cost,
        price: item.price,
        note: "",
      });
    } else {
      this.cart[checkItemExist].qty++;
    }

    this.totalAmount += item.price;
    this.totalQty++;
    console.log(this.cart);
  }

  removeOne(item) {
    var checkItemExist = this.cart.findIndex((x) => x.id === item.id);

    if (checkItemExist == -1) {
      // nothing
    } else {
      this.cart[checkItemExist].qty--;
      this.totalAmount -= item.price;
      this.totalQty--;

      if (this.cart[checkItemExist].qty == 0) {
        this.cart.splice(checkItemExist, 1);
      }
      console.log(checkItemExist);
    }
  }

  recalculate() {
    this.totalAmount = 0;
    this.totalQty = 0;
    for (let i of this.cart) {
      let subtotal = parseInt(i.price) * parseFloat(i.qty);
      this.totalAmount += subtotal;
      this.totalQty += parseFloat(i.qty);
    }
  }

  async editDetail(item) {
    let thisCart = this.cart.findIndex((cart) => cart.id == item.id);
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: this.cart[thisCart].name,
      inputs: [
        {
          name: "qty",
          type: "number",
          id: "qty",
          value: this.cart[thisCart].qty,
          placeholder: "Qty",
        },
        {
          name: "note",
          id: "note",
          value: this.cart[thisCart].note,
          type: "textarea",
          placeholder: "Catatan",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            this.cart[thisCart].qty = data.qty;
            this.cart[thisCart].note = data.note;
            this.recalculate();
            console.log("Confirm Ok");
          },
        },
      ],
    });

    await alert.present();
  }

  scanBarcode() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        var findIndex = this.product.findIndex(
          (x) => x.product.sku === barcodeData.text
        );

        if (findIndex > -1) {
          this.addOne(this.product[findIndex].product);
          this.global.toastPresent(
            this.product[findIndex].product.name + " telah ditambahkan!"
          );
        } else {
          this.global.toastPresent(
            "Tidak ditemukan produk dengan kode " + barcodeData.text
          );
        }
        console.log(barcodeData);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  clearAll() {
    this.cart = [];
    this.totalAmount = 0;
    this.totalQty = 0;
  }

  showPerItemCart(id) {
    var checkItemExist = this.cart.findIndex((x) => x.id === id);
    if (checkItemExist == -1) {
      return 0;
    } else {
      return this.cart[checkItemExist].qty;
    }
  }

  ionViewWillEnter() {
    this.initialize();
  }

  initialize() {
    this.storage.removeItem("pos_order_type");
    this.orderType = "none";
    this.orderTypeLabel = "none";
    this.menu.close("first");
    this.showContent = false;
    this.storage.getObject("auth").then((auth) => {
      this.auth = auth;

      this.storage.getObject("user").then((user) => {
        let thisUser: any = user;
        this.user = user;
        this.name = thisUser.name;
        this.level = thisUser.level;
        this.showUser = true;
        console.log("ini user", this.user.name);

        this.clearAll();
        this.getOfflineCategory();
        this.getOfflineOutlet();
        this.getOfflineCompany();
        this.getOfflineProduct();
        this.getData();
      });
    });

    let options: NativeTransitionOptions = {
      direction: "up",
      duration: 300,
      slowdownfactor: 0,
      slidePixels: 0,
      iosdelay: 0,
      androiddelay: 0,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 0,
    };

    this.nativePageTransitions.slide(options);
  }

  getData() {
    this.storage.getObject("auth").then((auth) => {
      var reqHeader = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token,
      });

      let options = { headers: reqHeader };

      this.http
        .post(this.global.base_url + "auth/category/list", null, options)
        .subscribe(
          (data: any) => {
            console.log(data);

            if (data.status == 0) {
              this.storage.setObject("category", data.category);
              this.category = data.category;
              this.getDataCompany();
              this.getDataOutlet();

              this.offline = false;
              console.log(data);
            } else {
              console.log(data);
            }
          },
          (error) => {
            this.offline = true;
            console.log(error);
          }
        );
    });
  }

  getDataProduct() {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.auth.token,
    });

    let options = { headers: reqHeader };

    let postData = { outlet_id: this.activeOutlet.id };

    this.http
      .post(
        this.global.base_url + "auth/product/list_per_outlet",
        postData,
        options
      )
      .subscribe(
        (data: any) => {
          console.log(data);

          if (data.status == 0) {
            let products = data.product.filter(
              (product) => product.product != null
            );
            this.storage.setObject("product", products);
            this.product = products;
            this.productSearch = this.product;

            if (this.product.length > 0) {
              this.showPOS = true;
            } else {
              this.showPOS = false;
            }
            console.log(data);
            this.showContent = true;
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
          console.log(data);

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

  getOfflineCategory() {
    this.storage.getObject("category").then((data: any) => {
      if (data != null) {
        this.storageCategory = data;
        this.category = this.storageCategory;
        this.getOfflineProduct();
      }
      console.log(data);
    });
  }

  getOfflineProduct() {
    this.storage.getObject("product").then((data: any) => {
      if (data != null) {
        this.storageProduct = data;
        this.product = this.storageProduct;
        this.productSearch = this.product;

        if (this.product.length > 0) {
          this.showPOS = true;
        } else {
          this.showPOS = false;
        }

        this.showContent = true;
      }
      console.log(data);
    });
  }

  getOfflineOutlet() {
    this.storage.getObject("outlet").then((data: any) => {
      if (data != null) {
        this.storageOutlet = data;
        this.outlet = this.storageOutlet.filter(
          (outlet) => outlet.outlet.status === "Active"
        );
        this.getActiveOutlet();
      }
      console.log("Offline outlet", data);
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

  getActiveOutlet() {
    this.storage.getObject("outlet_active").then((data: any) => {
      if (data != null) {
        let indexActive = this.outlet.findIndex((x) => x.outlet.id === data.id);
        console.log("index", indexActive);
        this.storage.setObject(
          "outlet_active",
          this.outlet[indexActive].outlet
        );
        this.activeOutlet = this.outlet[indexActive].outlet;

        this.checkExpiredAccount();
        this.getDataProduct();
        console.log("A", data);
      } else {
        this.activeOutlet = this.outlet[0].outlet;
        this.storage.setObject("outlet_active", this.activeOutlet);
        this.checkExpiredAccount();
        console.log("B", data);
      }
    });
  }

  changeOutlet(outlet) {
    this.activeOutlet = outlet;
    this.storage.setObject("outlet_active", this.activeOutlet);
    this.checkExpiredAccount();
    this.global.toastPresent(
      "Outlet <strong>" + outlet.name + "</strong> aktif!"
    );
    this.menu.close("first");
    this.ionViewWillEnter();
  }

  getProductByCategory(category_id) {
    var filterArray = this.productSearch.filter(
      (x) => x.product.category_id === category_id
    );
    return filterArray;
  }

  showModal(item) {
    alert(item);
  }

  async presentLoading(message) {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: message,
      duration: 300,
      mode: "ios",
    });
    await loading.present();
  }

  process() {
    this.storage.removeItem("pos_booking");
    this.storage.removeItem("pos_discount");
    this.storage.setObject("pos_cart", this.cart);

    var pos_subtotal = { amount: this.totalAmount, qty: this.totalQty };
    var pos_order_type = {
      order_type: this.orderType,
      order_type_label: this.orderTypeLabel,
    };
    this.storage.setObject("pos_subtotal", pos_subtotal);
    this.storage.setObject("pos_order_type", pos_order_type);

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

    this.router.navigate(["/payment-options"]);
  }

  save() {
    this.storage.setObject("pos_cart", this.cart);

    var pos_subtotal = { amount: this.totalAmount, qty: this.totalQty };
    var pos_order_type = {
      order_type: this.orderType,
      order_type_label: this.orderTypeLabel,
    };
    this.storage.setObject("pos_subtotal", pos_subtotal);
    this.storage.setObject("pos_order_type", pos_order_type);

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

    this.router.navigate(["/booking-options"]);
  }

  openMenuLeft() {
    this.menu.enable(true, "first");
    this.menu.open("first");
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

  ionViewWillLeave() {}

  syncOnlineData() {}

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

  setPrice() {
    let thisTemp: any = this.product;
    this.productSearch = this.product;

    if (this.orderType == "none") {
      if (this.orderType == "none") {
        this.storage.getObject("product").then((product) => {
          this.product = product;
          this.productSearch = this.product;
        });
        this.orderTypeLabel == "none";
      }
    } else {
      for (var i = 0; i < thisTemp.length; i++) {
        if (this.orderType == 1) {
          thisTemp[i].product.price = this.product[i].product.price_type1;
          this.orderTypeLabel = this.company.order_type_label1;
        }
        if (this.orderType == 2) {
          thisTemp[i].product.price = this.product[i].product.price_type2;
          this.orderTypeLabel = this.company.order_type_label2;
        }
        if (this.orderType == 3) {
          thisTemp[i].product.price = this.product[i].product.price_type3;
          this.orderTypeLabel = this.company.order_type_label3;
        }
        if (this.orderType == 4) {
          thisTemp[i].product.price = this.product[i].product.price_type4;
          this.orderTypeLabel = this.company.order_type_label4;
        }
        if (this.orderType == 5) {
          thisTemp[i].product.price = this.product[i].product.price_type5;
          this.orderTypeLabel = this.company.order_type_label5;
        }
      }
    }
    this.clearAll();
  }

  logout() {
    this.menu.close("first");
    this.storage.clear().then(() => {
      this.router.navigate(["/launcher"]).then(() => {
        this.router.navigate(["/login"]);
      });
    });
  }
}
