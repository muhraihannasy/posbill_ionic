import { Component, OnInit } from "@angular/core";

import { GlobalService } from "../global.service";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastController, Platform } from "@ionic/angular";

import { StorageService } from "../storage.service";

import { BackButtonEvent } from "@ionic/core";
import { Plugins } from "@capacitor/core";
const { App } = Plugins;

import { GooglePlus } from "@ionic-native/google-plus/ngx";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: any = "";
  password: any = "";
  owner: any = true;

  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private router: Router,
    private toastController: ToastController,
    private storage: StorageService,
    private platform: Platform,
    private googlePlus: GooglePlus
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.storage.removeItem("auth");
    this.storage.removeItem("user");
    this.storage.removeItem("company");
    this.storage.removeItem("outlet_active");
    this.storage.removeItem("outlet");
    this.storage.removeItem("product");
  }

  process() {
    // validation
    if (this.email == "" || this.password == "") {
      this.global.toastPresent("Silahkan lengkapi form login!");
      return false;
    }

    this.global.loadingPresent("login akun...");

    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
    });

    let options = { headers: reqHeader };

    let postData = {
      email: this.email,
      password: this.password,
    };

    this.http
      .post(this.global.base_url + "auth/login", postData, options)
      .subscribe(
        (data: any) => {
          console.log(data);

          if (data.status == 0) {
            var reqHeader = new HttpHeaders({
              "Content-Type": "application/json",
              Authorization: "Bearer " + data.token,
            });

            let options = { headers: reqHeader };

            this.http
              .post(this.global.base_url + "auth/me", null, options)
              .subscribe(
                (data2: any) => {
                  if (data2.id) {
                    var auth = { token: data.token };
                    var user = {
                      id: data2.id,
                      name: data2.name,
                      email: data2.email,
                      level: data2.level,
                    };

                    this.storage.clear().then(() => {
                      this.storage.removeItem("auth");
                      this.storage.removeItem("user");
                      this.storage.removeItem("company");
                      this.storage.removeItem("outlet_active");
                      this.storage.removeItem("outlet");
                      this.storage.removeItem("product");
                      this.storage.setObject("auth", auth);
                      this.storage.setObject("user", user);
                      this.global.toastPresent(data.message);
                      this.router.navigate(["/tabs/tab-dashboard"]);
                    });
                  } else {
                    console.log("Unathorized");
                  }

                  this.global.loadingDismiss();
                },
                (error) => {
                  console.log(error);
                }
              );
          } else {
            this.presentToast(data.message);
          }
        },
        (error) => {
          console.log(error);
          if (this.owner == true) {
            this.presentToast(
              "<strong>Login salah</strong><br/>Silahkan periksa kembali email atau password Anda!"
            );
          } else {
            this.presentToast(
              "<strong>Login salah</strong><br/>Silahkan periksa kembali username atau PIN Anda!"
            );
          }

          this.global.loadingDismiss();
        }
      );
  }

  swicthLogin(type) {
    if (type == "owner") {
      this.owner = true;
    } else {
      this.owner = false;
    }
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  loginByGoogleProcess(res) {
    this.global.loadingPresent("login akun...");

    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
    });

    let options = { headers: reqHeader };

    let postData = {
      email: res.email,
    };

    this.http
      .post(
        this.global.base_url + "auth/login_by_google_login",
        postData,
        options
      )
      .subscribe(
        (data: any) => {
          console.log(data);

          if (data.status == 0) {
            var reqHeader = new HttpHeaders({
              "Content-Type": "application/json",
              Authorization: "Bearer " + data.token,
            });

            let options = { headers: reqHeader };

            this.http
              .post(this.global.base_url + "auth/me", null, options)
              .subscribe(
                (data2: any) => {
                  if (data2.id) {
                    var auth = { token: data.token };

                    var user = {
                      id: data2.id,
                      name: data2.name,
                      email: data2.email,
                      level: data2.level,
                    };

                    this.storage.clear().then(() => {
                      this.storage.removeItem("auth");
                      this.storage.removeItem("user");
                      this.storage.removeItem("company");
                      this.storage.removeItem("outlet_active");
                      this.storage.removeItem("outlet");
                      this.storage.removeItem("product");
                      this.storage.setObject("auth", auth);
                      this.storage.setObject("user", user);
                      this.global.toastPresent(data.message);
                      this.router.navigate(["/tabs/tab-pos/login"]);
                    });
                  } else {
                    console.log("Unathorized");
                  }

                  this.global.loadingDismiss();
                },
                (error) => {
                  console.log(error);
                }
              );
          } else {
            this.presentToast(data.message);
          }
        },
        (error) => {
          console.log(error);
          if (this.owner == true) {
            this.presentToast(
              "<strong>Login salah</strong><br/>Silahkan periksa kembali email atau password Anda!"
            );
          } else {
            this.presentToast(
              "<strong>Login salah</strong><br/>Silahkan periksa kembali username atau PIN Anda!"
            );
          }

          this.global.loadingDismiss();
        }
      );
  }

  loginByGoogle() {
    this.googlePlus
      .login({})
      .then((res) => this.loginByGoogleProcess(res))
      .catch((err) => console.error(err));
  }
}
