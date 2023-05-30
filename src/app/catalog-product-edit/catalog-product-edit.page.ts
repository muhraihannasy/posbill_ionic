import { Component, OnInit } from "@angular/core";

import { NavController } from "@ionic/angular";
import { ToastController, AlertController } from "@ionic/angular";

import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { StorageService } from "../storage.service";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { GlobalService } from "../global.service";

import { Plugins, CameraResultType } from "@capacitor/core";

const { Camera } = Plugins;

import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx";

@Component({
  selector: "app-catalog-product-edit",
  templateUrl: "./catalog-product-edit.page.html",
  styleUrls: ["./catalog-product-edit.page.scss"],
})
export class CatalogProductEditPage implements OnInit {
  id: any;
  auth: any;
  product: any = {
    id: "",
    sku: "",
    category_id: "",
    name: "",
    description: "",
    cost: 0,
    price: 0,
    price_type1: "",
    price_type2: "",
    price_type3: "",
    price_type4: "",
    price_type5: "",
    track_stock: false,
    stock: [],
    image: "assets/no-image.png",
  };

  storageProduct: any = [];

  category: any;
  storageCategory: any = [];

  storageOutlet: any = [];
  outlet: any = [];

  stockOutlet: any = [];

  company: any = {
    order_type1: 0,
    order_type2: 0,
    order_type3: 0,
    order_type4: 0,
    order_type5: 0,
    order_type_label1: "",
    order_type_label2: "",
    order_type_label3: "",
    order_type_label4: "",
    order_type_label5: "",

    track_stockc: "",
  };

  showContent: any = false;
  stock: any = [];

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private storage: StorageService,
    private http: HttpClient,
    public global: GlobalService,
    public navController: NavController,
    private route: ActivatedRoute,
    private transfer: FileTransfer,
    private file: File,
    private alertController: AlertController
  ) {
    this.route.params.subscribe((params: any) => {
      if (params["id"]) {
        this.id = params["id"];
      }
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.storage.getObject("auth").then((auth) => {
      this.auth = auth;
      this.getDataCompany();
      this.getData();
    });

    this.storage.getObject("status_inventory").then((data) => {
      this.product.track_stock = data;
      console.log("data dari localstorage", data);
    });
  }

  getOfflineOutlet() {
    this.storage.getObject("outlet").then((data: any) => {
      if (data != null) {
        this.storageOutlet = data;
        this.outlet = this.storageOutlet.filter(
          (outlet) => outlet.outlet.status === "Active"
        );
        var pushOutlet = [];

        for (let item of this.outlet) {
          var thisStock = this.product.stock.filter(
            (stock) => stock.outlet_id === item.outlet.id
          );

          pushOutlet.push({
            id: item.outlet.id,
            name: item.outlet.name,
            enabled: 1,
            stock: 0,
          });
        }

        this.stockOutlet = pushOutlet;
        console.log(this.stockOutlet);
      }
      console.log("Offline outlet", data);
    });
  }

  getDataCompany() {
    this.global.loadingPresent("mengambil data...");

    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.auth.token,
    });

    let options = { headers: reqHeader };

    this.http
      .post(this.global.base_url + "auth/setting/data", null, options)
      .subscribe(
        (data: any) => {
          if (data.status == 0) {
            this.company = data.company;
            this.getDataCategory();
          } else {
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getDataCategory() {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.auth.token,
    });

    let options = { headers: reqHeader };

    this.http
      .post(this.global.base_url + "auth/category/list", null, options)
      .subscribe(
        (data: any) => {
          if (data.status == 0) {
            this.category = data.category;
            this.getData();
          } else {
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getData() {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.auth.token,
    });

    let options = { headers: reqHeader };

    let postData = { id: this.id };

    this.http
      .post(this.global.base_url + "auth/product/detail", postData, options)
      .subscribe(
        (data: any) => {
          const status = data.product.track_stock == 1 ? true : false;

          if (data.status == 0) {
            this.storage.setObject("status_inventory", status);
            this.product = data.product;

            this.getOfflineOutlet();
          } else {
          }

          this.global.loadingDismiss();
          this.showContent = true;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  process() {
    if (
      this.product.name == "" ||
      this.product.category_id == "" ||
      this.product.price < 1
    ) {
      this.global.toastPresent("Mohon lengkapi form yang wajib diisi!");
      return false;
    }
    this.global.loadingPresent("menyimpan produk...");
    this.storage.getObject("auth").then((auth) => {
      var reqHeader = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token,
      });

      let options = { headers: reqHeader };

      let postData = {
        id: this.id,
        name: this.product.name,
        category_id: this.product.category_id,
        description: this.product.description,
        cost: this.product.cost,
        price: this.product.price,
        image: this.product.image,
        track_stock: this.product.track_stock,
        price_type1: this.product.price_type1,
        price_type2: this.product.price_type2,
        price_type3: this.product.price_type3,
        price_type4: this.product.price_type4,
        price_type5: this.product.price_type5,
        stock_outlet: this.product.stock,
      };

      this.http
        .post(this.global.base_url + "auth/product/edit", postData, options)
        .subscribe(
          (data: any) => {
            this.product.track_stock = this.product.track_stock ?? false;

            if (data.status == 0) {
              this.global.toastPresent(data.message);
              this.router.navigate(["/catalog-product"]);
            } else {
            }
            this.global.loadingDismiss();
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }

  async deleteConfirm() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Konfirmasi hapus!",
      message: "Anda yakin menghapus data ini?",
      buttons: [
        {
          text: "Batal",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Hapus",
          handler: () => {
            this.delete();
          },
        },
      ],
    });

    await alert.present();
  }

  delete() {
    this.global.loadingPresent("menghapus produk...");
    this.storage.getObject("auth").then((auth) => {
      var reqHeader = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token,
      });

      let options = { headers: reqHeader };

      let postData = {
        id: this.id,
      };

      this.http
        .post(this.global.base_url + "auth/product/delete", postData, options)
        .subscribe(
          (data: any) => {
            if (data.status == 0) {
              this.global.toastPresent(data.message);
              this.router.navigate(["/catalog-product"]);
            } else {
            }
            this.global.loadingDismiss();
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }

  isOutletEnabled(outlet_id) {
    var thisStock = this.product.stock.filter(
      (stock) => stock.outlet_id === outlet_id
    );
    // console.log(thisStock);
    // console.log(outlet_id);
    if (thisStock[0].is_enabled == 1) {
      return true;
    } else {
      return false;
    }
  }

  currentStock(outlet_id) {
    var thisStock = this.product.stock.filter(
      (stock) => stock.outlet_id === outlet_id
    );
    // console.log(thisStock[0].stock);
    return thisStock[0].stock;
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    let imageUrl: any = image.webPath;
    // Can be set to the src of an image now
    this.product.image = imageUrl;

    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: "image",
      chunkedMode: false,
      headers: { Connection: "close" },
    };

    this.global.loadingPresent("Mengupload file...");
    fileTransfer
      .upload(image.path, this.global.base_url + "auth/product/upload", options)
      .then(
        (data) => {
          // success
          this.global.loadingDismiss();
          this.product.image = data.response;
        },
        (err) => {
          // error
          console.log(err);
        }
      );
  }

  coba(event) {
    const status = event.target.checked;
    this.product.track_stock = status;
    this.storage.setObject("status_inventory", status);

    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.auth.token,
    });

    let options = { headers: reqHeader };
    const postDaata = { track_stock: status == true ? 1 : 0 };

    this.http
      .post(
        this.global.base_url + "auth/product/stock_inventory_update/" + this.id,
        postDaata,
        options
      )
      .subscribe(
        (data: any) => {
          this.storage.setObject("status_inventory", data.track_stock);
          this.product.track_stock = data.track_stock;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
